
import ProductContent from './component/productDetail/productContent';
import ProductReview from './component/productDetail/productReview';
import ProductWrapper from './component/productDetail/productWrapper';

function App() {
  return (
    <div className="container flex flex-col w-[1280px] mx-auto gap-6 px-0 max-w-full md:px-4">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-2 xl:gap-10 lg:pt-10">
       <ProductWrapper/>
       <ProductContent/>
      </div>
      <div>
      <ProductReview/>
      </div>
    </div>
  )
}

export default App
