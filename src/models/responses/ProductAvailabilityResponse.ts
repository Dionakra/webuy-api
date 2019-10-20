import { ErrorResponse } from "./ErrorResponse";

export interface ProductAvailabilityResponse {
  response: {
    ack: String,
    data: {
      nearestStores: StoreStock[]
    },
    error: ErrorResponse
  }
}

export interface StoreStock {
  storeId: Number,
  storeName: String,
  storeImageUrls: String[],
  quantityOnHand: String,
  distance: Number
}