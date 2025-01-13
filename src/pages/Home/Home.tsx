import { CategorySec , ProductsSec } from "../../container";

const Home = () => {
  return (
    <div className="min-h-screen w-full">
      {/* categories section */}
      <CategorySec />
      {/* products section */}
      <ProductsSec />
    </div>
  )
}

export default Home;
