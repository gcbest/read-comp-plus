// eslint-disable-next-line import/no-extraneous-dependencies
import { writable, Writable } from 'svelte/store';

export const isTextAreaVisible: Writable<boolean> = writable(false);
export const darkMode: Writable<boolean> = writable(false);
export const open: Writable<boolean> = writable(false);
export const { body }: { body: HTMLElement } = window.document;
export const theme: string | undefined = localStorage.getItem('theme');
export const wpm: Writable<number> = writable(250);
export const font: Writable<string> = writable('arial');
