const HTMLFormatter = require('../formatters');

class HTMLConverter {
    /**
     * Creates an HTMLConverter instance with the provided object.
     *
     * @param {Object} obj - The object to be converted to HTML.
     */
    constructor(obj) {
        this.obj = obj;
    }

    /**
     * Converts the provided object to HTML.
     *
     * @returns {string} The HTML representation of the object.
     */
    convert() {
        return this._convertToHTML(this.obj);
    }

    /**
     * Recursively converts an object to its HTML representation.
     *
     * @param {Object} obj - The object to be converted to HTML.
     * @returns {string} The HTML representation of the object.
     * @private
     */
    _convertToHTML(obj) {
        const { tag, text, style, children, ...additional } = obj;
        const styleAttr = style ? `style="${HTMLFormatter.formatStyle(style)}"` : '';
        const additionalAttr = additional ? HTMLFormatter.formatAttributes(additional) : '';
        const attributes = [styleAttr, additionalAttr].filter(attr => attr).join(' ');

        let html = [];
        
        if (!tag) {
            return '';
        }

        html.push(attributes.length ? `<${tag} ${attributes}>\n` : `<${tag}>\n`);

        if (text) {
            html.push(text.trim() + '\n');
        }

        if (children) {
            for (const child of children) {
                html.push(this._convertToHTML(child));
            }
        }

        html.push(`</${tag}>\n`);

        return html.join('');
    }
}

module.exports = HTMLConverter;
