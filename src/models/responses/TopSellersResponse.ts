import { FeaturedProduct } from "./FeaturedProduct";
import { ErrorResponse } from "./ErrorResponse";

export interface TopSellersResponse {
  response: {
    ack: String,
    data: {
      boxListsBoxes: FeaturedProduct[]
    },
    error: ErrorResponse
  }
  
}