class Dom {
	constructor(selector) {
		this.$el = typeof selector === 'string'
			? document.querySelector(selector)
			: selector
	}

	html(html) {
		if (typeof html === 'string') {
			this.$el.innerHTML = html
			return this
		}

		return this.$el.outerHTML.trim()
	}

	clear() {
		this.html('')
		return this
	}

	on(event, callback) {
		this.$el.addEventListener(event, callback)
	}

	off(event, callback) {
		this.$el.removeEventListener(event, callback)
	}

	append(node) {
		if (node instanceof Dom) {
			node = node.$el
		}
		this.$el.append(node)
	}
}

export function $(selector) {
	return new Dom(selector)
}

$.create = function(tag, props, ...children) {
	const element = document.createElement(tag);

	Object.keys(props).forEach(key => {
		if (key.startsWith('data-')) {
			element.setAttribute(key, props[key]);
		} else {
			element[key] = props[key];
		}
	});

	children.forEach(child => {
		if (typeof child === 'string') {
			child = document.createTextNode(child);
		}

		element.appendChild(child);
	});

	return $(element);
}
