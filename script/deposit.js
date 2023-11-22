
document.getElementById('btn-deposit').addEventListener('click', function () {

    const newDepositAmount = getInputFieldvaluById('deposit-field');

    const priviousdepositAmput = getElementvalueById('total-deposit');

    const newDepositTotal = priviousdepositAmput + newDepositAmount;

    setElementValueById('total-deposit', newDepositTotal);

    const previousTotalBalance = getElementvalueById('total-balance')
    const newTotalBalance = previousTotalBalance + newDepositAmount;

    setElementValueById('total-balance', newTotalBalance);
})