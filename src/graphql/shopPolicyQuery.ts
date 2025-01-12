export default`
fragment PolicyFragment on ShopPolicy {
  id
  title
  url
  body
}

query {
  shop {
    privacyPolicy {
      ...PolicyFragment
    }
    termsOfService {
      ...PolicyFragment
    }
    refundPolicy {
      ...PolicyFragment
    }
  }
}
`