export default class Endpoints {
  static SUPER_CATEGORIES: string = '/supercats'
  static PRODUCT_LINES: string = '/productlines'
  static CATEGORIES: string = '/categories'
  static SEARCH: string = '/boxes'
  static PRODUCT_DETAIL = (sku: string): string => `/boxes/${sku}/detail`
  static PRODUCT_AVAILABILITY = (sku: string): string => `/boxes/${sku}/neareststores`
  static STORES: string = '/stores'
  static TOP_SELLERS: string = '/boxlists/topsellers'
  static MOST_WANTED: string = '/boxlists/mostwanted'

}