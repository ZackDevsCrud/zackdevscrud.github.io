import { loadData, saveData } from './saveData.js';

const data = loadData();

const cookie = document.getElementsByClassName('cookie')[0];
const cookieBanner = document.getElementsByClassName('total-cookies');

let totalCookies = 0;
let saveQueued = false;

if (data) {
    totalCookies = data.totalCookies;
}

function updateCookieBanner() {
    const cookieAmount = cookieBanner[0].childNodes[1];
    if (totalCookies === 0 || totalCookies > 1) {
        cookieAmount.innerHTML = `${totalCookies} Hearts`
    } else {
        cookieAmount.innerHTML = `${totalCookies} Heart`
    }
}

function addCookies(amount) {
    totalCookies += amount;
    updateCookieBanner();
    queueSave();
}

function queueSave() {
  if (saveQueued) return;
  saveQueued = true;

  setTimeout(() => {
    saveQueued = false;
    saveData(totalCookies);
  }, 1000);
}

updateCookieBanner();

cookie.addEventListener('click', function() {
    addCookies(1);
});

export { cookie };