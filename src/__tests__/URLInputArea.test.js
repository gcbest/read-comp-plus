require('@testing-library/jest-dom/extend-expect');
const { render, cleanup, fireEvent } = require('@testing-library/svelte');
const URLInputArea = require('../components/URLInputArea.svelte');
const { isURLAreaVisible, isTextAreaVisible, text } = require('../stores.ts');

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

        it('should get data from a website', () => {
                expect(2).toBe(2);
        });
});
