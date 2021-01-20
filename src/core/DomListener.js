import { capitalize } from '@core/utils';

export class DomListener {
	constructor($root, listeners) {
		if (!$root) {
			throw new Error('No $root provided for DomListener!')
		}

		this.listeners = listeners || []

		this.$root = $root
	}

	/* input => onInput */
	_createCallbackName(name) {
		return `on${capitalize(name)}`
	}

	addEventListeners() {
		this.listeners.forEach(listener => {
			const callback = this._createCallbackName(listener)

			if (!this[callback]) {
				const name = this.name || ''
				throw new Error(
					`Method ${callback} is not implemented in ${name} Component`
				)
			}

			/* bind создает новую функцию, поэтому addEventListener(listener, this[callback].bind(this))
			и removeEventListener(listener, this[callback]) работают с разными функциями.
			Решется это записью пары listener: callback в dom.js this.$listeners */
			this[callback] = this[callback].bind(this)
			this.$root.on(listener, this[callback])
		})
	}

	removeEventListeners() {
		this.listeners.forEach(listener => {
			const callback = this._createCallbackName(listener)
			this.$root.off(listener, this[callback])
		})
	}
}
