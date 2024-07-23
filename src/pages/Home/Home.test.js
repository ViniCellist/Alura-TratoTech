import Home from '.';
const { render } = require("@testing-library/react");

describe('Testando página Home', () => {
    test('testando', () => {
        render(<Home />);
        expect(true).toBeTruthy();
    })
})