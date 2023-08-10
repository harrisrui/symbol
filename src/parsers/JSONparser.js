const fs = require('fs');

class JSONParser {
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
