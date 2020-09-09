import {
        isTextAreaVisible,
        isOptionsAreaVisible,
        isReadingAreaVisible,
        isReviewAreaVisible,
        isReadingDoneAreaVisible,
        isSummaryAreaVisible,
        text,
        reviewResponses,
} from './stores';

export const clickOutside = (node, { enabled: initialEnabled, cb }) => {
        const handleOutsideClick = ({ target }) => {
                if (
                        !node.contains(target) &&
                        target !== document.querySelector('.settings') &&
                        target !== document.querySelector('#settings-icon') &&
                        !target.classList.contains('toggle-dark-icon') &&
                        !target.classList.contains('toggle-dark-btn')
                ) {
                        cb();
                }
        };

        function update({ enabled }) {
                if (enabled) {
                        window.addEventListener('click', handleOutsideClick);
                } else {
                        window.removeEventListener('click', handleOutsideClick);
                }
        }

        update({ enabled: initialEnabled });
        return {
                update,
                destroy() {
                        window.removeEventListener('click', handleOutsideClick);
                },
        };
};

export const whichAnimationEvent = () => {
        let t;
        const el = document.createElement('fakeelement');

        const animations = {
                animation: 'animationend',
                OAnimation: 'oAnimationEnd',
                MozAnimation: 'animationend',
                WebkitAnimation: 'webkitAnimationEnd',
        };

        // eslint-disable-next-line no-restricted-syntax
        for (t in animations) {
                if (el.style[t] !== undefined) {
                        return animations[t];
                }
        }
};

export const reset = () => {
        text.set('');
        reviewResponses.set({
                title: '',
                mainTakeAway: '',
                useCase: '',
        });

        isTextAreaVisible.set(false);
        isOptionsAreaVisible.set(true);
        isReadingAreaVisible.set(false);
        isReviewAreaVisible.set(false);
        isReadingDoneAreaVisible.set(false);
        isSummaryAreaVisible.set(false);
};

export const calculateScrollSpeed = (
        wpm: number,
        numWords: number
        // lineHeight: number
): { time: string } => {
        // const avgWordsPerLine = 10;

        // const linesPerMinute = wpm / avgWordsPerLine;

        // const numSeconds = Math.floor(linesPerMinute / 60);
        // const numSeconds = Math.floor(wpm / 60);

        // const wordsPerSecond = 60 / wpm;
        // const numAbove60 = Math.floor(textLength % 60);
        // let numSeconds = wordsPerSecond * 60;
        // numSeconds += Math.floor(numAbove60 / 10);

        // let percentY = '-100%';
        // if (textLength > 400) {
        //         percentY = '-150%';
        // }
        // if (textLength < 300) {
        //         percentY = '-50%';
        // }
        // // const secondsPerWord = Math.floor()
        // // const numSeconds = wordsPerSecond / 60;
        // // console.log(numSeconds);

        // return { time: `${numSeconds}s`, percentY };

        // const numLines = textHeight / lineHeight;
        const numMinutes = numWords / wpm;
        const numSeconds = Math.floor(numMinutes * 60);

        // get total num of words = 60
        // wpm = 60
        // total num words / wpm * 60 = numseconds

        // console.log(numLines);
        console.log(numWords);

        // if (numSeconds > 120) numSeconds /= 2;
        console.log(numSeconds);
        return { time: `${numSeconds}s` };
};

export const stripPixels = (size: string): number => parseInt(size.slice(0, -2));
