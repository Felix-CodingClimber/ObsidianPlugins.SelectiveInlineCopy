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
            void navigator.clipboard.writeText(cleanCode)
              .then(() => new Notice('Copied to clipboard!'))
              .catch(() => new Notice('Could not copy to clipboard.'));
          });
        }
      });
    });
  }
}
