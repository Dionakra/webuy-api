export default interface SearchRequest {
  categoryIds?: Number[],
  q?: String,
  inStock?: Number,
  storeIds?: Number[],
  minPrice?: Number,
  maxPrice?: Number,
  firstRecord?: Number,
  count?: Number,
  sortBy?: 'relevance' | 'sellprice' | 'boxname' | 'rating',
  sortOrder?: 'desc' | 'asc'
}