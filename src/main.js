const JSONParser = require('./parsers');
const HTMLConverter = require('./converters');

// Read the JSON file provided as a command line argument
const args = process.argv.slice(2);
if (args.length !== 1) {
    console.error('Usage: node src/main.js myobject.txt');
    process.exit(1);
}

const filePath = args[0];

// Parse the JSON object from the file
try {
    const parsedData = JSONParser.parse(filePath);
    const converter = new HTMLConverter(parsedData);
    const html = converter.convert();
    console.log(html);
} catch (error) {
    console.error(error.message);
    process.exit(1);
}
