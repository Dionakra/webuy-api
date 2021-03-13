import fetch from 'node-fetch'
import Endpoints from '../Endpoints';
import SuperCategoriesResponse from '../models/responses/SuperCategoriesResponse';
import ProductLinesRequest from '../models/requests/ProductLinesRequest';
import ProductAvailabilityResponse from '../models/responses/ProductAvailabilityResponse';
import CategoriesRequest from '../models/requests/CategoriesRequest';
import CategoriesResponse from '../models/responses/CategoriesResponse';
import ProductLinesResponse from '../models/responses/ProductLinesResponse';
import SuperCategoriesRequest from '../models/requests/SuperCategoriesRequest';
import SearchRequest from '../models/requests/SearchRequest';
import SearchResponse from '../models/responses/SearchResponse';
import ProductDetailsRequest from '../models/requests/ProductDetailsRequest';
import ProductDetailsResponse from '../models/responses/ProductDetailsResponse';
import ProductAvailabilityRequest from '../models/requests/ProductAvailabilityRequest';
import StoresRequest from '../models/requests/StoresRequest';
import StoresResponse from '../models/responses/StoresResponse';
import TopSellersRequest from '../models/requests/TopSellersRequest';
import TopSellersResponse from '../models/responses/TopSellersResponse';
import MostWantedRequest from '../models/requests/MostWantedRequest';
import MostWantedResponse from '../models/responses/MostWantedResponse';



export class WeBuyService {
  private baseUrl: string = "";

  constructor(country: String) {
    this.baseUrl = `https://wss2.cex.${country}.webuy.io/v3`
  }

  private async getData<T>(endpoint: string, params: any): Promise<T> {
    const data = await fetch(`${this.baseUrl}${endpoint}${this.strParams(params)}`, {
      "headers": {
        "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
        "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
        "cache-control": "max-age=0",
        "user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.82 Safari/537.36'  "
      },
      "method": "GET"
    }).then(data => data.json())

    return <T>data;
  }

  private strParams(params: any): String {
    let str = "?k=k"
    for (let key in params) {
      if (params.hasOwnProperty(key)) {
        const value = params[key]
        if (Array.isArray(value)) {
          str += `&${key}=[${value.join(',')}]`
        } else {
          str += `&${key}=${value}`
        }
      }
    }
    return str
  }

  public getSuperCategories(params: SuperCategoriesRequest): Promise<SuperCategoriesResponse> {
    return this.getData<SuperCategoriesResponse>(Endpoints.SUPER_CATEGORIES, params)
  }

  public getProductLines(params: ProductLinesRequest): Promise<ProductLinesResponse> {
    return this.getData<ProductLinesResponse>(Endpoints.PRODUCT_LINES, params)
  }

  public getCategories(params: CategoriesRequest): Promise<CategoriesResponse> {
    return this.getData<CategoriesResponse>(Endpoints.CATEGORIES, params)
  }

  public searchProducts(params: SearchRequest): Promise<SearchResponse> {
    return this.getData<SearchResponse>(Endpoints.SEARCH, params)
  }

  public getProductDetails(sku: string, params: ProductDetailsRequest): Promise<ProductDetailsResponse> {
    return this.getData<ProductDetailsResponse>(Endpoints.PRODUCT_DETAIL(sku), params)
  }

  public getProductAvailability(sku: string, params: ProductAvailabilityRequest): Promise<ProductAvailabilityResponse> {
    return this.getData<ProductAvailabilityResponse>(Endpoints.PRODUCT_AVAILABILITY(sku), params)
  }

  public getStores(params: StoresRequest): Promise<StoresResponse> {
    return this.getData<StoresResponse>(Endpoints.STORES, params)
  }

  public getTopSellers(params: TopSellersRequest): Promise<TopSellersResponse> {
    return this.getData<TopSellersResponse>(Endpoints.TOP_SELLERS, params)
  }

  public getMostWanted(params: MostWantedRequest): Promise<MostWantedResponse> {
    return this.getData<MostWantedResponse>(Endpoints.MOST_WANTED, params)
  }
}
