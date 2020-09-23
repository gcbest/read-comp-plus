require('@testing-library/jest-dom/extend-expect');
const { render, cleanup, fireEvent } = require('@testing-library/svelte');
const URLInputArea = require('../components/URLInputArea.svelte');

const { isURLAreaVisible } = require('../stores.ts');

afterEach(() => cleanup());

describe('URLInput', () => {
        isURLAreaVisible.set(true);

        it('renders input area', () => {
                const { getByTestId } = render(URLInputArea);
                const input = getByTestId('article-url');
                expect(input).toBeInTheDocument();
        });

        it('renders search button', () => {
                const { getByTestId } = render(URLInputArea);
                const searchBtn = getByTestId('search-btn');
                expect(searchBtn).toBeInTheDocument();
        });

        it('should show "Search" after form is submitted', async () => {
                const { getByTestId } = render(URLInputArea);
                const searchForm = getByTestId('search-form');
                const searchBtn = getByTestId('search-btn');
                await fireEvent.submit(searchForm);
                expect(searchBtn).toHaveTextContent('Search');
        });
});
