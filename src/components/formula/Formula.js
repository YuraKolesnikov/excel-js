import { ExcelComponent } from '@core/ExcelComponent';

export class Formula extends ExcelComponent {
	static className = 'formula'

	constructor($root) {
		super($root, {
			name: 'Formula',
			listeners: ['input']
		});
	}

	toHTML() {
		return `
			<div class="formula__fx">fx</div>
      <div class="formula__input" contenteditable spellcheck="false"></div>
		`
	}

	onInput(e) {
		console.log(`[FORMULA onInput]: `, e.target.textContent.trim())
	}
}
