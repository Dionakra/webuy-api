import ErrorResponse from "./ErrorResponse";

export default interface StoresResponse {
  response: {
    ack: String,
    data: {
      stores: Store[]
    },
    error: ErrorResponse
  }
}

interface Store {
  storeId: Number,
  storeName: String,
  regionName: String,
  latitude: Number,
  longitude: Number
}