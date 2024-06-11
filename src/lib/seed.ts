import { v4 as uuidv4 } from 'uuid';

export function processBrands(rawBrands: any) {
  const brandProducts:any[] = [];
  const brandStores:any[] = [];

  const brands = rawBrands.map((brand: any) => {
    brand.products.forEach((product_id: string) => {
      brandProducts.push({
        id: uuidv4(),
        product_id,
        brand_id: brand.id,
        consolidated: false,
      });
    });
    brand.consolidated_products.forEach((product_id:string) => {
      brandProducts.push({
        id: uuidv4(),
        product_id,
        brand_id: brand.id,
        consolidated: true,
      });
    });

    brand.stores.forEach((store_id: string) => {
      brandStores.push({
        id: uuidv4(),
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
    const newStore = {
      ...store,
      latitude: store.latitude ? parseFloat(store.latitude) : null,
      longitude: store.longitude ? parseFloat(store.longitude) : null,
    };
    delete newStore.latitiude;
    delete newStore.brand_id;
    return newStore;
  });
}
