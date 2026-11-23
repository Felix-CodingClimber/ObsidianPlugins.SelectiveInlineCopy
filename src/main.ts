import { Plugin, Notice, setIcon } from 'obsidian';

export default class SelectiveInlineCopyPlugin extends Plugin {
  async onload() {
    this.registerMarkdownPostProcessor((element) => {
      const codeBlocks = element.querySelectorAll('code');

      codeBlocks.forEach((codeEl) => {
        if (codeEl.parentElement?.tagName === 'PRE') return;

        const text = codeEl.textContent || '';
        const trigger = '[copy] ';

        if (text.startsWith(trigger)) {
          const cleanCode = text.slice(trigger.length);
          codeEl.textContent = cleanCode;
          codeEl.addClass('has-inline-copy');

          const copyBtn = codeEl.createSpan({ cls: 'inline-copy-btn' });
          setIcon(copyBtn, 'copy');

          copyBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            navigator.clipboard.writeText(cleanCode);
            new Notice('Copied to clipboard!');
          });
        }
      });
    });
  }
}
