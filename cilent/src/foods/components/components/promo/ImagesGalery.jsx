import React from "react";

const ImagesGalery = () => {
  return (
    <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
      <div className="flex items-center space-x-6 lg:space-x-8">
        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
          <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
            <img
              src="https://images.pexels.com/photos/2983099/pexels-photo-2983099.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="h-64 w-44 overflow-hidden rounded-lg">
            <img
              src="https://images.pexels.com/photos/1373915/pexels-photo-1373915.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
          <div className="h-64 w-44 overflow-hidden rounded-lg">
            <img
              src="https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="h-64 w-44 overflow-hidden rounded-lg">
            <img
              src="https://images.pexels.com/photos/248444/pexels-photo-248444.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="h-64 w-44 overflow-hidden rounded-lg">
            <img
              src="https://images.pexels.com/photos/9844834/pexels-photo-9844834.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
          <div className="h-64 w-44 overflow-hidden rounded-lg">
            <img
              src="https://images.pexels.com/photos/806880/pexels-photo-806880.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="h-64 w-44 overflow-hidden rounded-lg">
            <img
              src="https://media.istockphoto.com/id/121342471/photo/isolated-image-of-cola-splash-across-a-white-background.jpg?b=1&s=612x612&w=0&k=20&c=lD7HiVExohXoeurYCTd5pwZ0cyvwWq-yjFChDYOMU-k="
              alt=""
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImagesGalery;
