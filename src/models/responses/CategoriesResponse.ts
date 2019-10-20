import { ErrorResponse } from './ErrorResponse'

export interface CategoriesResponse {
  response: {
    ack: String,
    data: {
      categories: Category[]
    },
    error: ErrorResponse
  }
}

export interface Category {
  superCatId: Number,
  categoryId: Number,
  categoryFriendlyName: String,
  productLineId: Number,
  totalBoxes: Number
}