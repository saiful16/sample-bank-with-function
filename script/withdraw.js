document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawAmonutfield = getInputFieldvaluById('withdraw-field');
    const totalWithdraw = getElementvalueById('total-withdraw');
    const newithdrawTotal = withdrawAmonutfield + totalWithdraw;

    setElementValueById('total-withdraw', newithdrawTotal);

    const currentTotalBalance = getElementvalueById('total-balance');
    const newTotalBalance = currentTotalBalance - totalWithdraw;
    setElementValueById('total-balance', newTotalBalance);
})