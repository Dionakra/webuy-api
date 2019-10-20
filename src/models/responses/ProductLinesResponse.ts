import { ErrorResponse } from "./ErrorResponse";

export interface ProductLinesResponse {
  response: {
    ack: String,
    data: {
      productLines: ProductLine[]
    },
    error: ErrorResponse
  }
}

export interface ProductLine {
  superCatId: Number,
  productLineId: Number,
  productLineName: String,
  totalCategories: Number
}