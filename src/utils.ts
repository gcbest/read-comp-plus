import {
        isTextAreaVisible,
        isOptionsAreaVisible,
        isReadingAreaVisible,
        isReviewAreaVisible,
        isReadingDoneAreaVisible,
        isSummaryAreaVisible,
        text,
        reviewResponses,
        animationTime,
        pauseBtnText,
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

const calculateScrollSpeed = (wpm: number, numWords: number): string => {
        const numMinutes = numWords / wpm;
        const numSeconds = Math.floor(numMinutes * 60);
        return `${numSeconds}s`;
};

export const togglePause = (currentState: string) => (currentState === 'paused' ? 'running' : 'paused');

export const updateTime = (wpm: string, textContent: string) => {
        const numWords = textContent.trim().split(' ').length;
        localStorage.setItem('wpm', wpm); // update wpm in localStorage
        const newTime = calculateScrollSpeed(parseInt(wpm), numWords);
        animationTime.set(newTime);
};

export const formatHTML = (html: Document): string => {
        // find all text html tags and combine
        console.log(html.querySelectorAll('p, h1, h2, h3, h4, h5, h6'));

        const newTextContent = Array.from(html.querySelectorAll('p, h1, h2, h3, h4, h5, h6'))
                .map(p => p.textContent.replace(/^Advertisement$|^Supported\sby$/g, ''))
                .join(' ');
        return newTextContent;
};

export const pause = () => {
        const textP: any = document.querySelector('.scroll-up p');
        const { animationPlayState: currentPlayState } = textP.style;
        textP.style.animationPlayState = togglePause(currentPlayState); // updated play state

        const textContent = textP.style.animationPlayState === 'paused' ? 'Resume' : 'Pause';

        pauseBtnText.set(textContent);
};
