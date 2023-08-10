const HTMLConverter = require('./HTMLConverter');

describe('HTMLConverter', () => {
    const exampleObj = {
        tag: 'div',
        text: 'Hello, world!',
        style: { color: 'red' },
        children: [
            { tag: 'p', text: 'This is a paragraph.' }
        ]
    };

    test('converts an object to HTML', () => {
        const converter = new HTMLConverter(exampleObj);
        const html = converter.convert();

        expect(html).toContain('<div');
        expect(html).toContain('style="color: red;"');
        expect(html).toContain('Hello, world!');
        expect(html).toContain('<p>\nThis is a paragraph.\n</p>');
    });

    test('handles empty object', () => {
        const emptyObj = {};
        const converter = new HTMLConverter(emptyObj);
        const html = converter.convert();

        expect(html).toBe('');
    });

    test('handles object without children', () => {
        const objWithoutChildren = {
            tag: 'span',
            text: 'No children here'
        };
        const converter = new HTMLConverter(objWithoutChildren);
        const html = converter.convert();

        expect(html).toContain('<span');
        expect(html).toContain('No children here');
    });

    test('handles object without text', () => {
        const objWithoutText = {
            tag: 'a',
            href: 'https://example.com',
            children: [
                { tag: 'span', text: 'Link to example.com' }
            ]
        };
        const converter = new HTMLConverter(objWithoutText);
        const html = converter.convert();

        expect(html).toContain('<a');
        expect(html).toContain('href="https://example.com"');
        expect(html).toContain('<span>\nLink to example.com\n</span>');
    });
});
