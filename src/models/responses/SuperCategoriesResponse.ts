import ErrorResponse from './ErrorResponse';

export default interface SuperCategoriesResponse {
  response: {
    ack: String,
    data: {
      superCats: SuperCategory[]
    },
    error: ErrorResponse
  }
}

interface SuperCategory {
  superCatId: Number,
  superCatFriendlyName: String
}