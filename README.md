# Fac-Product-Card

Este es un paquete de pruebas de despliegue en NPM

### Franco Carrizo

```
import {ProductCard, ProductImage, ProductTitle, ProductButtons} from 'fac-product-card'
```

```
      <ProductCard product={product} initialValues={{ count: 4, maxCount: 10 }}>
        {({ reset, isMaxCountReached, maxCount, increasyBy, count }) => (
          <>
            <ProductImage />
            <ProductTitle title={product.title} />
            <ProductButtons />
          </>
        )}
      </ProductCard>
```
