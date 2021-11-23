import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../.';

const product1 = {
  id: '1',
  title: 'Coffee Mug - Card',
};

const App = () => {
  return (
    <>
      <ProductCard
        product={product1}
        initialValues={{ count: 4, maxCount: 10 }}
      >
        {({ reset, isMaxCountReached, maxCount, increasyBy, count }) => (
          <>
            <ProductImage />
            <ProductTitle title={product1.title} />
            <ProductButtons />
          </>
        )}
      </ProductCard>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
