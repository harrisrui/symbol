const fs = require('fs');

class JSONParser {
    /**
     * Parses a JSON file and returns the parsed data.
     *
     * @param {string} filePath - The path to the JSON file to be parsed.
     * @returns {Object} The parsed JSON data.
     * @throws {Error} If there's an error reading or parsing the JSON file.
     */
    static parse(filePath) {
        try {
            const data = fs.readFileSync(filePath, 'utf8');
            return JSON.parse(data);
        } catch (error) {
            throw new Error('Error parsing JSON: ' + error.message);
        }
    }
}

module.exports = JSONParser;
