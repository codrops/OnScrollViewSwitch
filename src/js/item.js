/**
 * Class representing an Item element (.item)
 */
export class Item {
	// DOM elements
	DOM = {
		// main element (.item)
		el: null,
        // caption (.item__caption)
        caption : null,
        // imageWrap (.item__image-wrap)
        imageWrap: null,
        // image (.item__image)
        image: null,
        // imageInner (.item__image > .item__image-inner)
        imageInner: null,
        // title (.item__caption-title)
        title: null,
        // titleInner (.item__caption-title > .oh__inner)
        titleInner: null,
        // number (.item__caption-number)
        number: null,
        // numberInner (.item__caption-number > .oh__inner)
        numberInner: null,
        // description (.item__caption-description)
        description: null,
	};
	
	/**
	 * Constructor.
	 * @param {Element} DOM_el - main element (.item)
	 */
	constructor(DOM_el) {
		this.DOM.el = DOM_el;
        this.DOM.caption = this.DOM.el.querySelector('.item__caption');
        this.DOM.imageWrap = this.DOM.el.querySelector('.item__image-wrap');
        this.DOM.image = this.DOM.el.querySelector('.item__image');
        this.DOM.imageInner = this.DOM.image.querySelector('.item__image-inner');
        this.DOM.title = this.DOM.el.querySelector('.item__caption-title');
        this.DOM.titleInner = this.DOM.title.querySelector('.oh__inner');
        this.DOM.number = this.DOM.el.querySelector('.item__caption-number');
        this.DOM.numberInner = this.DOM.number.querySelector('.oh__inner');
        this.DOM.description = this.DOM.el.querySelector('.item__caption-description');
	}
}