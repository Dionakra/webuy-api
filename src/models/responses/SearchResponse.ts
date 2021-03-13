import ErrorResponse from "./ErrorResponse";

export default interface SearchResponse {
  response: {
    ack: String,
    data: {
      boxes: Box[],
      totalRecords: Number,
      maxPrice: Number,
      facets: Facet[]
    },
    error: ErrorResponse
  }
}

interface Box {
  boxId: String,
  masterBoxId: String,
  boxName: String,
  isMasterBox: 0 | 1,
  categoryId: Number,
  categoryName: String,
  categoryFriendlyName: String,
  superCatId: Number,
  superCatName: String,
  superCatFriendlyName: String,
  imageUrls: {
    large: String,
    medium: String,
    small: String,
    masterBoxLarge: String,
    masterBoxMedium: String,
    masterBoxSmall: String
  },
  cannotBuy: 0 | 1,
  isNewBox: 0 | 1,
  sellPrice: Number,
  cashPrice: Number,
  exchangePrice: Number,
  boxRating: Number,
  outOfStock: 0 | 1,
  outOfEcomStock: 0 | 1,
  ecomQuantityOnHand: Number
}

export interface Facet {
  superCatName: AttributeCount[],
  categoryFriendlyName: AttributeCount[],
  manufacturerName: AttributeCount[],
  networkName: AttributeCount[],
  attributeInfo: FacetAttributeInfo[],
  attributeStructureInfo: any
}

export interface AttributeCount {
  name: String,
  id: Number,
  count: Number
}

export interface FacetAttributeInfo {
  attributeId: Number,
  attributeFriendlyName: String,
  attributeValuesInfo: FaceAttributeValueInfo[]
}

export interface FaceAttributeValueInfo {
  attributeValue: Number,
  count: Number
}
