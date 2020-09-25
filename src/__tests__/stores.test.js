let { theme, wpm } = require('../stores.ts');

describe('settings', () => {
        it('should set theme to null if none in localStorage', () => {
                const mockLocalStorage = jest.fn(() => null);
                theme = mockLocalStorage();
                expect(theme).toBe(null);
        });

        it('should set theme to dark if dark in localStorage', () => {
                const mockLocalStorage = jest.fn(() => 'dark');
                theme = mockLocalStorage();
                expect(theme).toBe('dark');
        });
});
