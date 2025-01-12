export default`
fragment DiscountApplicationFragment on DiscountApplication {
  targetSelection
  allocationMethod
  targetType
  value {
    ... on MoneyV2 {
      amount
      currencyCode
    }
    ... on PricingPercentageValue {
      percentage
    }
  }
  ... on ManualDiscountApplication {
    title
    description
  }
  ... on DiscountCodeApplication {
    code
    applicable
  }
  ... on ScriptDiscountApplication {
    description
  }
  ... on AutomaticDiscountApplication {
    title
  }
}
`