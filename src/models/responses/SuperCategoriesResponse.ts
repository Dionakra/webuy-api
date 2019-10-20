import { ErrorResponse } from './ErrorResponse';

export interface SuperCategoriesResponse {
  response: {
    ack: String,
    data: {
      superCats: SuperCategory[]
    },
    error: ErrorResponse
  }
}

export interface SuperCategory {
  superCatId: Number,
  superCatFriendlyName: String
}