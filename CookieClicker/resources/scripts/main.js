const cookie = document.getElementsByClassName('cookie')[0];
const cookieBanner = document.getElementsByClassName('total-cookies');

let totalCookies = 0;

function updateCookieBanner() {
    const cookieAmount = cookieBanner[0].childNodes[1];
    if (totalCookies === 0 || totalCookies > 1) {
        cookieAmount.innerHTML = `${totalCookies} Cookies`
    } else {
        cookieAmount.innerHTML = `${totalCookies} Cookie`
    }
}

function addCookies(amount) {
    totalCookies += amount;
    updateCookieBanner();
}

updateCookieBanner();

cookie.addEventListener('click', function() {
    addCookies(1);
});

export { cookie }