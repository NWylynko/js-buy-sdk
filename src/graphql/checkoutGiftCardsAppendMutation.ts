export default`
mutation checkoutGiftCardsAppend($giftCardCodes: [String!]!, $checkoutId: ID!) {
  checkoutGiftCardsAppend(giftCardCodes: $giftCardCodes, checkoutId: $checkoutId) {
    userErrors {
      ...UserErrorFragment
    }
    checkoutUserErrors {
      ...CheckoutUserErrorFragment
    }
    checkout {
      ...CheckoutFragment
    }
  }
}
`