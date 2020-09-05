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
