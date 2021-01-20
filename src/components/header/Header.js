import { ExcelComponent } from '@core/ExcelComponent';

export class Header extends ExcelComponent {
	static className = 'header'

	constructor($root) {
		super($root, {
			name: 'Header',
			listeners: []
		});
	}

	toHTML() {
		return `
			<input type="text" class="header__input" value="Новая таблица">
	
	    <div class="header__buttons">
	      <button class="header__button">
	        <i class="material-icons">delete</i>
	      </button>
	      <button class="header__button">
	        <i class="material-icons">exit_to_app</i>
	      </button>
	    </div>
		`
	}
}
