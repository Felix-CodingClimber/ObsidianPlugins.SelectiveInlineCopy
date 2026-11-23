# Selective Inline Copy

Add a copy button to selected inline code in Obsidian.

## Usage

Start an inline code span with `[copy]` followed by a space:

```markdown
`[copy] npm install`
```

In reading view, the marker is hidden and the copy button copies `npm install`. Other inline code and fenced code blocks are unchanged.

## Installation

Download `src/main.js`, `manifest.json`, and `styles.css` from a published release and put them in your vault's `.obsidian/plugins/selective-inline-copy/` folder. Reload Obsidian, then enable **Selective Inline Copy** under **Settings → Community plugins**.

To build from source instead, run `npm install` and `npm run build`, then copy the same three files to that folder.

## License

MIT. This project is based on the [Obsidian sample plugin](https://github.com/obsidianmd/obsidian-sample-plugin); its original license notice is in [NOTICE](NOTICE).