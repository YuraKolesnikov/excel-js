import { ExcelComponent } from '@core/ExcelComponent';

export class Table extends ExcelComponent {
	static className = 'table'

	constructor($root) {
		super($root, {
			name: 'Table',
			listeners: []
		});
	}

	toHTML() {
		return `
			<div class="table__row">
        <div class="table__row-info"></div>
        <div class="table__header">
          <div class="table__header-cell">A</div>
          <div class="table__header-cell">B</div>
          <div class="table__header-cell">C</div>
        </div>
      </div>

      <div class="table__row">
        <div class="table__row-info">1</div>
        <div class="table__row-data">
          <div class="table__cell" contenteditable>1</div>
          <div class="table__cell" contenteditable>2</div>
          <div class="table__cell" contenteditable>2</div>
        </div>
      </div>

      <div class="table__row">
        <div class="table__row-info">2</div>
        <div class="table__row-data">
          <div class="table__cell" contenteditable>1</div>
          <div class="table__cell" contenteditable>2</div>
          <div class="table__cell" contenteditable>2</div>
        </div>
      </div>
		`
	}
}
