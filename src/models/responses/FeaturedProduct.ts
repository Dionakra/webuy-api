export interface FeaturedProduct {
  boxId: String,
  boxName: String,
  categoryName: String,
  categoryFriendlyName: String,
  superCatId: Number,
  superCatName: String,
  superCatFriendlyName: String,
  imageUrls: {
    large: String,
    medium: String,
    small: String
  }
  isNewBox: 0 | 1,
  sellPrice: Number,
  cashPrice: Number,
  exchangePrice: Number,
  boxRating: Number
}