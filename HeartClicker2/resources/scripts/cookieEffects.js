import { cookie } from './main.js';

const defaultHeight = cookie.height;

function onClick() {
    cookie.style.height = (defaultHeight + 50) + 'px';

    setTimeout(() => {
        cookie.style.height = defaultHeight + 'px';
    }, 100);
    
}

cookie.addEventListener('click', onClick)