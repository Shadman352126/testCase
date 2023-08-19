// deposit calculation
function depositButton() {
  const newDepositValue = getInputFieldById("deposit-input");
  const previousDepositTotal = getElementTextById("deposit-total");
  const newDepositTotal = previousDepositTotal + newDepositValue;
  setElementInnerTextById("deposit-total", newDepositTotal);
  const previousBalanceTotal = getElementTextById("balance-total");
  const newBalanceTotal = previousBalanceTotal + newDepositValue;
  setElementInnerTextById("balance-total", newBalanceTotal);
}
// withdraw calculation
function withdrawButton() {
  const newWithdrawValue = getInputFieldById("withdraw-input");
  const previousWithdrawTotal = getElementTextById("withdraw-total");
  const newWithdrawTotal = previousWithdrawTotal + newWithdrawValue;
  setElementInnerTextById("withdraw-total", newWithdrawTotal);
  const previousBalanceTotal = getElementTextById("balance-total");
  const newBalanceTotal = previousBalanceTotal - newWithdrawValue;
  setElementInnerTextById("balance-total", newBalanceTotal);
}
