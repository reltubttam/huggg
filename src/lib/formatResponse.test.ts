import { formatProducts, formatStores } from './formatResponse';

describe('formatProducts', () => {
  it('removes duplicate typo latitiude', async () => {
    const products = formatProducts([{
      pivot: '{}',
    }], 'brandId');
    expect(products).toEqual([{
      pivot: {},
      brand_id: 'brandId',
    }]);
  });
});

describe('formatStores', () => {
  it('reintroduces latitiude for backwards compatibility', async () => {
    const stores = formatStores([{
      latitude: 2,
    }], 'brandId');
    expect(stores).toEqual([{
      latitude: 2,
      latitiude: 2,
      brand_id: 'brandId',
    }]);
  });
});
