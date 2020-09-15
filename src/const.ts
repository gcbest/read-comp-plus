export const COLORS = {
        blue: 'blue',
        red: 'red',
        green: 'green',
        black: 'black',
};

export const FONTS = {
        'Times New Roman': '"Times New Roman", Times, serif',
        'Comic Neue': '"Comic Neue", cursive',
        'Courier New': '"Courier New", Courier, monospace',
};

export type REVIEW_RESPONSES = {
        title: string;
        mainTakeAway: string;
        useCase: string;
};

export const DEFAULT_RESPONSES: REVIEW_RESPONSES = {
        title: '',
        mainTakeAway: '',
        useCase: '',
};

export const CORS_URL = 'https://cors-anywhere.herokuapp.com/';

export enum TEXT_OPTIONS {
        TEXT,
        URL
};