import { ExcelComponent } from '@core/ExcelComponent';

export class Toolbar extends ExcelComponent {
	static className = 'toolbar'

	constructor($root) {
		super($root, {
			name: 'Toolbar',
			listeners: ['click']
		});
	}

	toHTML() {
		return `
			<div class="toolbar__buttons">
        <button class="toolbar__button">
          <i class="material-icons">format_align_left</i>
        </button>
        <button class="toolbar__button">
          <i class="material-icons">format_align_center</i>
        </button>
        <button class="toolbar__button">
          <i class="material-icons">format_align_right</i>
        </button>
        <button class="toolbar__button">
          <i class="material-icons">format_bold</i>
        </button>
        <button class="toolbar__button">
          <i class="material-icons">format_italic</i>
        </button>
        <button class="toolbar__button">
          <i class="material-icons">format_underline</i>
        </button>
      </div>
		`
	}
}
