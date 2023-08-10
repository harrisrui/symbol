const HTMLFormatter = require('./HTMLFormatter');

describe('HTMLFormatter', () => {
    test('formats CSS styles correctly', () => {
        const styleObj = {
            backgroundColor: 'red',
            fontSize: '16px',
            fontWeight: 'bold'
        };

        const formattedStyle = HTMLFormatter.formatStyle(styleObj);
        expect(formattedStyle).toBe('background-color: red; font-size: 16px; font-weight: bold;');
    });

    test('formats HTML attributes correctly', () => {
        const attributes = {
            id: 'my-element',
            class: 'custom-class',
            dataValue: '123'
        };

        const formattedAttributes = HTMLFormatter.formatAttributes(attributes);
        expect(formattedAttributes).toBe('id="my-element" class="custom-class" data-value="123"');
    });
});
