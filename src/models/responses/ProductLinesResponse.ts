import ErrorResponse from "./ErrorResponse";

export default interface ProductLinesResponse {
  response: {
    ack: String,
    data: {
      productLines: ProductLine[]
    },
    error: ErrorResponse
  }
}

interface ProductLine {
  superCatId: Number,
  productLineId: Number,
  productLineName: String,
  totalCategories: Number
}