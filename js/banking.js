document.getElementById('deposit-amount').
    addEventListener('click', function () {
        // get the amount deposited 
        const addAmount = document.getElementById('user-amount');
        const totalAmount = addAmount.value
        const newDeposit = parseFloat(totalAmount)
        // console.log(totalAmount)

        // get the total deposit part 
        const totalDeposit = document.getElementById('total-deposit');
        const previousAmount = totalDeposit.innerText;
        const previousAmountBank = parseFloat(previousAmount)
        const totalDepositAmount = (newDeposit + previousAmountBank)
        // console.log(totalDepositAmount)
        totalDeposit.innerText = totalDepositAmount;
        // update balance total 
        const newBalance = document.getElementById('balance-total');
        const balanceTotalText = newBalance.innerText
        const balanceUpgrade = parseFloat(balanceTotalText);
        const totalDepositBalance = (newDeposit + balanceUpgrade)
        newBalance.innerText = totalDepositBalance

        // clear the deposit input 
        addAmount.value = '';
    })

// handle withdraw evend handler
document.getElementById('withdraw-total').addEventListener('click', function () {
    const withDrawBalance = document.getElementById('user-balace')
    const totalWithdraw = withDrawBalance.value
    const totalWithdrawBalance = parseFloat(totalWithdraw);
    // get the total withdraw part 
    const amountTotalWithdraw = document.getElementById('withdraw-amount')
    const totalAmountWithdrawText = amountTotalWithdraw.innerText
    const totalWithdrawAmountBalance = parseFloat(totalAmountWithdrawText);
    const newTotalWithdraw = (totalWithdrawBalance + totalWithdrawAmountBalance)
    amountTotalWithdraw.innerText = newTotalWithdraw
    // console.log(newTotalWithdraw)
    // This is the total deposit Balance part 
    const balanceTotal = document.getElementById('balance-total')
    const newTotal = balanceTotal.innerText;
    const newTotalText = parseFloat(newTotal);
    const totalBalace = (newTotalText - totalWithdrawBalance)
    balanceTotal.innerText = totalBalace


    // clear the deposit input 
    withDrawBalance.value = '';
})