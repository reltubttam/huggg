import { processBrands, processProducts, processStores } from './seed';

describe('processBrands', () => {
  it('returns no data, given no data', async () => {
    const {
      brands,
      brandProducts,
      brandStores,
    } = processBrands({
      data: [],
    });

    expect(brands).toEqual([]);
    expect(brandProducts).toEqual([]);
    expect(brandStores).toEqual([]);
  });
  it('handles brand with no stores/products', async () => {
    const {
      brands,
      brandProducts,
      brandStores,
    } = processBrands({
      data: [{
        id: 1,
        products: [],
        consolidated_products: [],
        stores: [],
      }],
    });

    expect(brands).toEqual([{ id: 1 }]);
    expect(brandProducts).toEqual([]);
    expect(brandStores).toEqual([]);
  });
  it('handles brand with stores/products', async () => {
    const {
      brands,
      brandProducts,
      brandStores,
    } = processBrands({
      data: [{
        id: 1,
        products: [2],
        consolidated_products: [3],
        stores: [4],
      }],
    });

    expect(brands).toEqual([{ id: 1 }]);
    expect(brandProducts).toEqual([{
      brand_id: 1,
      consolidated: false,
      product_id: 2,
    },
    {
      brand_id: 1,
      consolidated: true,
      product_id: 3,
    }]);
    expect(brandStores).toEqual([{
      brand_id: 1,
      store_id: 4,
    }]);
  });
});

describe('processProducts', () => {
  it('strips duplicate brand id (if consolidated)', async () => {
    const products = processProducts([{
      id: 1,
      brand_id: 2,
    }]);
    expect(products).toEqual([{ id: 1, pivot: null }]);
  });
  it('handles pivots', async () => {
    const products = processProducts([{
      id: 1,
      brand_id: 2,
      pivot: {},
    }]);
    expect(products).toEqual([{ id: 1, pivot: '{}' }]);
  });
});

describe('processStores', () => {
  it('removes duplicate typo latitiude', async () => {
    const products = processStores([{
      latitude: 1,
      latitiude: 2,
    }]);
    expect(products).toEqual([{ id: 1, pivot: '{}' }]);
  });
});
