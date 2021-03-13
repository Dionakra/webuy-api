import ErrorResponse from "./ErrorResponse";

export default interface ProductAvailabilityResponse {
  response: {
    ack: String,
    data: {
      nearestStores: StoreStock[]
    },
    error: ErrorResponse
  }
}

interface StoreStock {
  storeId: Number,
  storeName: String,
  storeImageUrls: String[],
  quantityOnHand: String,
  distance: Number
}