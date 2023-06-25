const btns = document.querySelectorAll('.open-modal');
const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup__close');

btns.length > 0 &&
    btns.forEach((btn) => {
        btn.addEventListener('click', () => {
            popup.classList.toggle('open');
            document.body.classList.toggle('lock');
        });
    });

popupClose &&
    popupClose.addEventListener('click', () => {
        popup.classList.toggle('open');
        document.body.classList.toggle('lock');
    });
