export function formatProducts(products: any[], brandId:string) {
  return products.map((product:any) => ({
    ...product,
    pivot: product.pivot ? JSON.parse(product.pivot) : undefined,
    brand_id: brandId,
  }));
}

export function formatStores(stores: any[], brandId:string) {
  return stores.map((store:any) => ({
    ...store,
    latitiude: store.latitude,
    brand_id: brandId,
  }));
}
