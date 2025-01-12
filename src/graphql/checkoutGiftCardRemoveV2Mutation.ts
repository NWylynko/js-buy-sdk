export default`
mutation checkoutGiftCardRemoveV2($appliedGiftCardId: ID!, $checkoutId: ID!) {
  checkoutGiftCardRemoveV2(appliedGiftCardId: $appliedGiftCardId, checkoutId: $checkoutId) {
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