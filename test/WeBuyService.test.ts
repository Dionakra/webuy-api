
import { WeBuyService } from "../src/services/WeBuyService";
import { ProductLinesRequest } from "../src/models/requests/ProductLinesRequest"
import { CategoriesRequest } from "../src/models/requests/CategoriesRequest";
import { SearchRequest } from "../src/models/requests/SearchRequest";
import { ProductAvailabilityRequest } from "../src/models/requests/ProductAvailabilityRequest";
import { expect } from "chai";

const service = new WeBuyService('uk')

describe('WeBuyService', () => {
  beforeEach(done => setTimeout(done, 500));

  it('SuperCategories', async () => {
    const { response } = await service.getSuperCategories({})
    expect(response.data).not.empty
  });

  it('ProductLines', async () => {
    const params = <ProductLinesRequest>{
      superCatIds: [1, 2, 3, 4, 5, 8]
    }

    const { response } = await service.getProductLines(params)
    expect(response.data).not.empty
  });

  it('Categories', async () => {
    const params = <CategoriesRequest>{
      productLineIds: [70, 81, 92, 91, 8, 49, 59]
    }

    const { response } = await service.getCategories(params)
    expect(response.data).not.empty
  });

  it('SearchProducts', async () => {
    const params = <SearchRequest>{
      categoryIds: [1003],
      firstRecord: 1,
      count: 50
    }

    const { response } = await service.searchProducts(params)
    expect(response.data).not.empty
  });

  it('ProductDetails', async () => {
    const { response } = await service.getProductDetails('5030943122533', {})
    expect(response.data).not.empty
  });

  it('ProductAvailability', async () => {
    const params = <ProductAvailabilityRequest>{
      latitude: 52.0614187,
      longitude: -0.2520458999999721
    }

    const { response } = await service.getProductAvailability('5030943122533', params)
    expect(response.data).not.empty
  });

  it('Stores', async () => {
    const { response } = await service.getStores({})
    expect(response.data).not.empty
  });

  it('TopSellers', async () => {
    const { response } = await service.getTopSellers({})
    expect(response.data).not.empty
  });

  it('MostWanted', async () => {
    const { response } = await service.getMostWanted({})
    expect(response.data).not.empty
  });
});