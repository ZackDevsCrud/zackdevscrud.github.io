const calculateButton = document.getElementsByClassName('calculate')[0];

const cdLengthInput = document.getElementsByName('cdLength')[0]
const interestRateInput = document.getElementsByName('interestRate')[0]
const initialDepositInput = document.getElementsByName('initialDeposit')[0]
const renewalCountInput = document.getElementsByName('renewalCount')[0]
const renewalDepositInput = document.getElementsByName('renewalDeposit')[0]

function roundToHundredth(number) {
    return Math.round(number * 100) / 100;
}

function checkInputs() {
    let cdLength = Math.floor(Number(cdLengthInput.value));
    let interestRate = (Number(interestRateInput.value));
    let initialDeposit = Math.floor(Number(initialDepositInput.value));
    let renewalCount = Math.floor(Number(renewalCountInput.value));
    let renewalDeposit = Math.floor(Number(renewalDepositInput.value));

    if (cdLength < 1) cdLength = 1;
    if (interestRate < 0.1) interestRate = 0.1;
    if (initialDeposit < 1) initialDeposit = 1;
    if (renewalCount < 0) renewalCount = 0;
    if (renewalDeposit < 0) renewalDeposit = 0;

    cdLengthInput.value = cdLength;
    initialDepositInput.value = initialDeposit;
    interestRateInput.value = interestRate;
    renewalCountInput.value = renewalCount;
    renewalDepositInput.value = renewalDeposit;
}

function calculateData() {
    const cdLength = Number(document.getElementsByName('cdLength')[0].value);
    const interestRate = Number(document.getElementsByName('interestRate')[0].value)/100;
    const initialDeposit = Number(document.getElementsByName('initialDeposit')[0].value);
    const renewalCount = Number(document.getElementsByName('renewalCount')[0].value);
    const renewalDeposit = Number(document.getElementsByName('renewalDeposit')[0].value);
    const rollOverInterest = document.getElementsByName('rollOverInterest')[0].checked;

    let interestEarned = 0, endingBalance = 0, currentBalance = initialDeposit, totalContributed = 0;

    for (let i = 0; i < renewalCount + 1; i++) {
        
        if (i >= 1) {
            currentBalance += renewalDeposit;
        }

        if (rollOverInterest || i === renewalCount) {
            let increase = roundToHundredth((currentBalance * interestRate) * (cdLength/12));
            interestEarned += increase;
            currentBalance += increase;
        }

    }

    endingBalance = currentBalance;
    totalContributed = currentBalance - interestEarned;

    document.getElementsByClassName('totalContributed')[0].innerHTML = '$' + totalContributed.toFixed(2);
    document.getElementsByClassName('interestEarned')[0].innerHTML = '$' + interestEarned.toFixed(2);
    document.getElementsByClassName('endingBalance')[0].innerHTML = '$' + endingBalance.toFixed(2);
}

calculateData();

calculateButton.addEventListener('click', calculateData)
cdLengthInput.addEventListener('focusout', checkInputs)
interestRateInput.addEventListener('focusout', checkInputs)
initialDepositInput.addEventListener('focusout', checkInputs)
renewalCountInput.addEventListener('focusout', checkInputs)
renewalDepositInput.addEventListener('focusout', checkInputs)
