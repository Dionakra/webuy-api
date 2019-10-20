import { FeaturedProduct } from "./FeaturedProduct";
import { ErrorResponse } from "./ErrorResponse";

export interface MostWantedResponse {
  response: {
    ack: String,
    data: {
      boxListsBoxes: FeaturedProduct[]
    },
    error: ErrorResponse
  }
}