import React from "react";

const EcommerceStats = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Ecommerce Statistics
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Explore the performance of our ecommerce store.
            </p>
          </div>
          <div className="flex flex-wrap -m-4 text-center">
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <h2 className="title-font font-medium text-3xl text-gray-900">
                  2,500+
                </h2>
                <p className="leading-relaxed">Products</p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <h2 className="title-font font-medium text-3xl text-gray-900">
                  $1M+
                </h2>
                <p className="leading-relaxed">Revenue</p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <h2 className="title-font font-medium text-3xl text-gray-900">
                  10,000+
                </h2>
                <p className="leading-relaxed">Customers</p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <h2 className="title-font font-medium text-3xl text-gray-900">
                  95%
                </h2>
                <p className="leading-relaxed">Customer Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EcommerceStats;
