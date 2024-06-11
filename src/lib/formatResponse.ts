export function formatProducts(products: any[], brandId:string) {
  return products.map((product:any) => ({
    ...product,
    pivot: product.pivot ? JSON.parse(product.pivot) : undefined,
    brand_id: brandId,
    'brand-products': undefined,
  }));
}

export function formatStores(stores: any[], brandId:string) {
  return stores.map((store:any) => ({
    ...store,
    latitiude: store.latitude,
    latitude: `${store.latitude}`,
    longitude: `${store.longitude}`,
    brand_id: brandId,
    'brand-stores': undefined,
  }));
}
