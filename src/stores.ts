// eslint-disable-next-line import/no-extraneous-dependencies
import { writable, Writable } from 'svelte/store';

export const isTextAreaVisible: Writable<boolean> = writable(false);
export const darkMode: Writable<boolean> = writable(false);
export const open: Writable<boolean> = writable(false);
export const { body }: { body: HTMLElement } = window.document;
export const theme: string | undefined = localStorage.getItem('theme');
export const wpm: Writable<string> = writable(localStorage.getItem('wpm') || '250');
export const font: Writable<string> = writable(localStorage.getItem('font') || 'Times New Roman');
export const color: Writable<string> = writable(localStorage.getItem('color') || 'black');
export const size: Writable<string> = writable(localStorage.getItem('font-size') || '16');
