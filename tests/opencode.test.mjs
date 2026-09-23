import test from "node:test"
import assert from "node:assert/strict"
import { readFile, copyFile, mkdtemp, rm } from "node:fs/promises"
import { tmpdir } from "node:os"
import { join, resolve } from "node:path"
import { pathToFileURL } from "node:url"

const entrypoint = resolve("integrations/opencode/index.js")
const skillFile = resolve("skills/it/SKILL.md")

test("registers the bundled KISS IT guidance as one OpenCode skill", async () => {
  const { default: plugin } = await import(pathToFileURL(entrypoint))
  const registered = []
  await plugin.setup({
    skill: {
      async transform(callback) {
        callback({ add(skill) { registered.push(skill) } })
      },
    },
  })

  const markdown = await readFile(skillFile, "utf8")
  const content = markdown.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/, "")
  assert.equal(plugin.id, "kiss")
  assert.equal(registered.length, 1)
  assert.equal(registered[0].id, "kiss-it")
  assert.equal(registered[0].name, "KISS IT")
  assert.equal(registered[0].location, skillFile)
  assert.equal(registered[0].content, content)
})

test("rejects setup when the bundled skill is missing", async () => {
  const directory = await mkdtemp(join(tmpdir(), "kiss-opencode-"))
  try {
    const isolatedEntry = join(directory, "index.mjs")
    await copyFile(entrypoint, isolatedEntry)
    const { default: plugin } = await import(pathToFileURL(isolatedEntry))
    await assert.rejects(plugin.setup({ skill: { transform() { throw Error("unexpected registration") } } }), { code: "ENOENT" })
  } finally {
    await rm(directory, { recursive: true, force: true })
  }
})
