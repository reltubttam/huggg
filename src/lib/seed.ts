export function processBrands(rawBrands: any) {
  const brandProducts:any[] = [];
  const brandStores:any[] = [];

  const brands = rawBrands.data.map((brand: any) => {
    brand.products.forEach((product_id: string) => {
      brandProducts.push({
        product_id,
        brand_id: brand.id,
        consolidated: false,
      });
    });
    brand.consolidated_products.forEach((product_id:string) => {
      brandProducts.push({
        product_id,
        brand_id: brand.id,
        consolidated: true,
      });
    });

    brand.stores.forEach((store_id: string) => {
      brandStores.push({
        store_id,
        brand_id: brand.id,
      });
    });
    const newBrand = { ...brand };
    delete newBrand.products;
    delete newBrand.consolidated_products;
    delete newBrand.stores;

    return newBrand;
  });

  return {
    brandProducts,
    brandStores,
    brands,
  };
}

export function processProducts(products: any[]) {
  return products.map((product:any) => {
    const newProduct = {
      ...product,
      pivot: product.pivot ? JSON.stringify(product.pivot) : null,
    };
    delete newProduct.brand_id;

    return newProduct;
  });
}

export function processStores(stores: any[]) {
  return stores.map((store:any) => {
    const newStore = { ...store };
    delete newStore.latitiude;
    return newStore;
  });
}
