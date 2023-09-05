import React from "react";

const ProductCompletion = ({isHovered,setIsHovered,setOpen}) => {
  const products = [
    {
      id: 1,
      name: "קוקה קולה",
      href: "#",
      imageSrc:
        "https://images.pexels.com/photos/8879621/pexels-photo-8879621.jpeg?auto=compress&cs=tinysrgb&w=600",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "15",
      color: "קלאסית",
      description: "כוס קוקה קולה: מרענן, מתוק, פיצוץ, קלאסי.",
    },
    // More products...
  ];
  return (
    <div className="" dir="rtl">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-white">
          לקוחות רכשו גם
        </h2>

        <div className="mt-6 grid gap-x-6 gap-y-10 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 max-h-[200px]">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="w-full object-cover object-center"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-100">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-200">
                  {product.price} ₪
                </p>
              </div>
              {isHovered && (
                <p
                  onClick={() => setOpen(true)}
                  onMouseOver={() => setIsHovered(true)}
                  className=" bg-red-600 hover:bg-red-700 rounded-sm text-white absolute bottom-2 m-1 p-2 text-center z-10 cursor-pointer"
                >
                  צפיה מהירה
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCompletion;
