import React from "react";

const DetailesEndDes = ({ product }) => {
  console.log(product);
  return (
    <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
      <div>
        <h3 className="text-gray-400">תיאור</h3>

        <div className="py-4">
          <p className="text-base text-white">{product.description}</p>
        </div>
      </div>

      {product?.highlights?.length > 0 && (
        <div className="mt-10">
          <h3 className="text-sm font-medium text-gray-400"> סימונים</h3>

          <div className="mt-4">
            <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
              {product?.highlights?.map((highlight) => (
                <li key={highlight} className="text-gray-500">
                  <span className="text-white">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      <div className="mt-10">
        <h2 className="text-sm font-medium text-gray-400">פרטים</h2>

        <div className="mt-4 space-y-6">
          <p className="text-sm text-white">{product.details}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailesEndDes;
