import ErrorResponse from "./ErrorResponse";

export default interface ProductDetailsResponse {
  response: {
    ack: String,
    data: {
      boxDetails: ProductDetails,
      masterBoxDetails: any
    },
    error: ErrorResponse
  }
}

interface ProductDetails {
  boxId: String,
  boxName: String,
  categoryId: Number,
  categoryName: String,
  categoryFriendlyName: String,
  cannotBuy: 0 | 1,
  isNewBox: 0 | 1,
  cashPrice: Number,
  exchangePrice: Number,
  sellPrice: Number,
  boxRating: Number,
  outOfStock: 0 | 1,
  ecomQuantityOnHand: Number,
  webSellAllowed: 0 | 1,
  webBuyAllowed: 0 | 1,
  webShowSellPrice: 0 | 1,
  webShowBuyPrice: 0 | 1,
  imgUrls: {
    large: String,
    medium: String,
    small: String,
    masterBoxLarge: String,
    masterBoxMedium: String,
    masterBoxSmall: String
  },
  isMasterBox: 0 | 1,
  boxDescription: String,
  operatorId: any,
  gradeId: any,
  productGuide: {
    productLineId: Number,
    productGuideDescription: String,
    globalGuide: any
  },
  boxRatingText: any,
  attributeDetails: any,
  attributeInfo: AttributeInfo[]
}

export interface AttributeInfo {
  attributeFriendlyName: String,
  attributeValue: String
}