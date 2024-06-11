# huggg
## running the application

### build
```
npm i && npm run build && docker compose build
```

### starting the application
```
docker compose up
```

### tests & linting
```
npm t
```

### fix linting
```
npm run test:lint -- --fix
```

## routes

### get brand by id
```
curl --location 'localhost:3000/brands/5a4e6d14-53d4-4583-bd6b-49f81b021d24'
```

### get products by brand id
```
curl --location 'localhost:3000/brands/5a4e6d14-53d4-4583-bd6b-49f81b021d24/products'
```

### get stores by brand id
```
curl --location 'localhost:3000/brands/5a4e6d14-53d4-4583-bd6b-49f81b021d24/stores'
```

### get stores by product id
```
curl --location 'localhost:3000/products/5a3fe6f7-7796-44ca-84fe-70d4f751527d/stores'
```