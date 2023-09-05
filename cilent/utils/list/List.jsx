import ProductCompletion from "../../src/foods/components/pages/ProductCompletion";

const List = ({ titel, name, children }) => {
  return (
    <>
      <div className=" " dir="rtl">
        <div className="mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 min-h-screen">
          <h2 className="py-10 text-xl font-bold">
            {name} : {titel}
          </h2>

          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 xl:gap-x-8">
            {children}
          </div>
        </div>
      </div>
      {/* <ProductCompletion  /> */}
    </>
  );
};

export default List;
