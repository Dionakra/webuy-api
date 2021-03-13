import ErrorResponse from './ErrorResponse'

export default interface CategoriesResponse {
  response: {
    ack: String,
    data: {
      categories: Category[]
    },
    error: ErrorResponse
  }
}

interface Category {
  superCatId: Number,
  categoryId: Number,
  categoryFriendlyName: String,
  productLineId: Number,
  totalBoxes: Number
}