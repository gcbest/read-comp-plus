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
