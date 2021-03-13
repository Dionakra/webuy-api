import FeaturedProduct from "./FeaturedProduct";
import ErrorResponse from "./ErrorResponse";

export default interface TopSellersResponse {
  response: {
    ack: String,
    data: {
      boxListsBoxes: FeaturedProduct[]
    },
    error: ErrorResponse
  }
}