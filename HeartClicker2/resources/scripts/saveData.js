
function loadData() {
    const saveData = JSON.parse(localStorage.getItem('data'));
    console.log('Loading Data...');
    return saveData;
}

function saveData(totalCookies) {
    const saveData = JSON.stringify({ totalCookies });
    console.log('Saving Data...');
    localStorage.setItem('data', saveData);
}

export { loadData, saveData };