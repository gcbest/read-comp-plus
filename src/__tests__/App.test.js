const { render, fireEvent } = require('@testing-library/svelte');
const App = require('../App.svelte');

describe('yerr', () => {
        const { getByText, getByTestId } = render(App);
        const main = getByTestId('man');

        it('should do it', () => {
                const num1 = 2;
                expect(num1).toBe(2);
        });
});
