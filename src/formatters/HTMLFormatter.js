class HTMLFormatter {
     /**
     * Formats a JavaScript object containing CSS styles into a string.
     *
     * @param {Object} styleObj - The object containing style properties and their values.
     * @returns {string} The formatted style string.
     */
    static formatStyle(styleObj) {
        return Object.entries(styleObj)
            .map(([prop, value]) => `${prop.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()}: ${value};`)
            .join(' ');
    }

    /**
     * Formats a JavaScript object containing HTML attributes into a string.
     *
     * @param {Object} attributes - The object containing attribute keys and their values.
     * @returns {string} The formatted attribute string.
     */
    static formatAttributes(attributes) {
        return Object.entries(attributes)
            .map(([key, value]) => `${key.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()}="${value}"`)
            .join(' ');
    }
}

module.exports = HTMLFormatter;
