// import { theme } from '../stores';

const { get } = require('svelte/store');
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

        it('should set wpm to 250 if no value in localStorage', () => {
                const mockLocalStorage = jest.fn(() => null);
                wpm = mockLocalStorage();
                expect(get(wpm)).toBe('250');
        });

        it('should set wpm to value from localStorage', () => {
                const numWordsPerMin = 300;
                const mockLocalStorage = jest.fn(num => num.toString());
                wpm.set(mockLocalStorage(numWordsPerMin));
                expect(mockLocalStorage).toHaveBeenCalledWith(numWordsPerMin);
                expect(get(wpm)).toBe(numWordsPerMin.toString());
        });
});
