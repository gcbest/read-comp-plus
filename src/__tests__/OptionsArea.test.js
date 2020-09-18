require('@testing-library/jest-dom/extend-expect');
const { render, cleanup, fireEvent, waitForElementToBeRemoved } = require('@testing-library/svelte');
const OptionsArea = require('../components/OptionsArea.svelte');

afterEach(() => cleanup());

describe('OptionsArea', () => {
        it('renders 2 OptionsBtns', () => {
                const { getAllByTestId } = render(OptionsArea);
                const buttons = getAllByTestId('opt-btn');
                expect(buttons).toHaveLength(2);
        });

        it('renders header description', async () => {
                const { getByTestId } = render(OptionsArea);
                const description = getByTestId('description');
                expect(description).toBeInTheDocument();
        });

        it('removes description when option button clicked', async () => {
                const { getByTestId, getAllByTestId } = render(OptionsArea);

                const buttons = getAllByTestId('opt-btn');
                const textBtn = buttons[0];
                const description = getByTestId('description');
                expect(description).toBeInTheDocument();

                await fireEvent.click(textBtn);
                await waitForElementToBeRemoved(getByTestId('description'));

                expect(description).not.toBeInTheDocument();
        });
});
