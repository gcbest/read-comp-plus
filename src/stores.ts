// eslint-disable-next-line import/no-extraneous-dependencies
import { writable, Writable } from 'svelte/store';
import { DEFAULT_RESPONSES, REVIEW_RESPONSES } from './const';

export const { body }: { body: HTMLElement } = window.document;

export const isTextAreaVisible: Writable<boolean> = writable(false);
export const isOptionsAreaVisible: Writable<boolean> = writable(true);
export const isReadingAreaVisible: Writable<boolean> = writable(false);
export const isReviewAreaVisible: Writable<boolean> = writable(false);
export const isReadingDoneAreaVisible: Writable<boolean> = writable(false);
export const isSummaryAreaVisible: Writable<boolean> = writable(false);
export const isURLAreaVisible: Writable<boolean> = writable(false);

export const darkMode: Writable<boolean> = writable(false);
export const open: Writable<boolean> = writable(false);
export const text: Writable<string> = writable('');
export const animationTime: Writable<string> = writable('');

export const theme: string | undefined = localStorage.getItem('theme');
export const wpm: Writable<string> = writable(localStorage.getItem('wpm') || '250');
export const font: Writable<string> = writable(localStorage.getItem('font') || 'Times New Roman');
export const color: Writable<string> = writable(localStorage.getItem('color') || 'black');
export const size: Writable<string> = writable(localStorage.getItem('font-size') || '16');
// export const htmlContent: Writable<string> = writable('');

export const reviewResponses: Writable<REVIEW_RESPONSES> = writable(DEFAULT_RESPONSES);
