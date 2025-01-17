// conponents
import { PagesTitle, ProductsCard } from "../../components";
const DiscountSec = () => {
  return (
    <>
      {/* page title */}
      <PagesTitle
        title="التخفيضات:"
        discription="التخفيضات اللخر ميلحقش عليها🤩:"
      />
      {/* products discount */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {Array.from({ length: 4 }).map((_, index) => (
          <ProductsCard key={index} />
        ))}
      </div>
    </>
  );
};

export default DiscountSec;
