const LETTER_CODES = {
	A: 65,
	Z: 90
}

function toChar(_, index) {
	return String.fromCharCode(LETTER_CODES.A + index)
}

function createCell(content, ...rest) {
	return `<div class="table__cell" data-col="${rest[0]}" contenteditable>${content}</div>`
}

function createColumn(content) {
	return `
		<div class="table__header-cell">${content}</div>
	`
}

function createRow(content, index) {
	return `
		<div class="table__row">
			<div class="table__row-info">${index ? index : ''}</div>
      <div class="table__row-data">${content}</div>
		</div>
	`
}

export function createTable(rowCount = 15) {
	const columnCount = LETTER_CODES.Z - LETTER_CODES.A + 1
	const rows = []

	const cols = new Array(columnCount)
		.fill('')
		.map(toChar)
		.map(createColumn)
		.join('')

	rows.push(createRow(cols, null))

	const cells = new Array(columnCount)
		.fill('')
		.map(createCell)
		.join('')

	for (let i = 0; i < rowCount; i++) {
		rows.push(createRow(cells, i + 1))
	}

	return rows.join('')
}
