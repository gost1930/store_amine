import { CategorySec , DiscountSec, ProductsSec } from "../../container";

const Home = () => {
  return (
    <div className="min-h-screen w-full">
      {/* categories section */}
      <CategorySec />
      {/* products discount */}
      <DiscountSec />
      {/* products section */}
      <ProductsSec />
    </div>
  )
}

export default Home;
