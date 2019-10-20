import { ErrorResponse } from "./ErrorResponse";

export interface StoresResponse {
  response: {
    ack: String,
    data: {
      stores: Store[]
    },
    error: ErrorResponse
  }
}

export interface Store {
  storeId: Number,
  storeName: String,
  regionName: String,
  latitude: Number,
  longitude: Number
}