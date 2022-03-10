//  Login Button
const loginBtn = document.getElementById('login');
loginBtn.addEventListener('click', function(){
    const loginArea = document.getElementById('login-area');
    loginArea.style.display = "none";
    const transactionArea = document.getElementById('transaction-area');
    transactionArea.style.display = 'block';
})


//  Deposit Button
const depositBtn = document.getElementById('addDeposit');
depositBtn.addEventListener('click',function(){
  //    get Deposit Amount From input Field  
    
    const depositNumber = getInputNumber('depositAmount');

    if(depositNumber < 0){
        alert('Deposit number cannot be negative');
    }else{
        //   total Deposit 
        updateSpanText('currentDeposit',depositNumber)
    

    //    update balance
        updateSpanText('currentBalance', depositNumber)

        document.getElementById('depositAmount').value = ""
        }            
});

  
  // withdraw 
    const withdrawBtn = document.getElementById('addWithdraw'); 
    withdrawBtn.addEventListener('click', function(){
        const withdrawNumber = getInputNumber('withdrawAmount');
      //    update withdraw  
        updateSpanText('currentWithdraw', withdrawNumber);
        updateSpanText('currentBalance', -1 *withdrawNumber)
        document.getElementById('withdrawAmount').value = "";
    });


function getInputNumber(id){
    const Amount = document.getElementById(id).value;
    const AmountNumber = parseFloat(Amount);
    return AmountNumber;
}

  
function updateSpanText(id, addedNumber){
    const current        = document.getElementById(id).innerText;
    const currentNumber  = parseFloat(current);
    const total          = addedNumber + currentNumber;
    document.getElementById(id).innerText = total;
}