export default`
fragment AppliedGiftCardFragment on AppliedGiftCard {
  amountUsedV2 {
    amount
    currencyCode
  }
  balanceV2 {
    amount
    currencyCode
  }
  presentmentAmountUsed {
    amount
    currencyCode
  }
  id
  lastCharacters
}
`