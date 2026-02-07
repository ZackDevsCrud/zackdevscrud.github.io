const calculateButton = document.getElementsByClassName('calculate')[0];

function roundToHundredth(number) {
    return Math.round(number * 100) / 100;
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
