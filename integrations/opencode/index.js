import { readFile } from "node:fs/promises"
import { fileURLToPath } from "node:url"

const skillURL = new URL("../../skills/it/SKILL.md", import.meta.url)

export default {
  id: "kiss",
  async setup(ctx) {
    const markdown = await readFile(skillURL, "utf8")
    const content = markdown.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/, "")

    await ctx.skill.transform((editor) => {
      editor.add({
        id: "kiss-it",
        name: "KISS IT",
        description: "Apply KISS, DRY, and YAGNI when writing, refactoring, or reviewing code.",
        location: fileURLToPath(skillURL),
        content,
      })
    })
  },
}
