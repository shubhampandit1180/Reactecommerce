import React from "react";

const About = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              About Us
            </h1>
            <p className="mb-8 leading-relaxed">
              Welcome to Shubham's Trendy Treasures , where shopping meets
              convenience and style. We are your trusted destination for all
              your online shopping needs. Our mission is to offer a seamless,
              secure, and enjoyable shopping experience, bringing you a vast
              selection of top-quality products from leading brands and emerging
              designers.
            </p>
            <p className="mb-8 leading-relaxed">
              At Shubham's Trendy Treasures , we understand that shopping is
              not just about buying products; it's about discovering the latest
              trends, expressing your unique style, and finding value in every
              purchase. Our dedicated team works tirelessly to curate an
              extensive collection of fashion, electronics, home goods, and more
              to cater to your diverse tastes and preferences.
            </p>
            <p className="mb-8 leading-relaxed">
              We are committed to providing exceptional customer service, fast
              and reliable shipping, and a secure platform for all your
              transactions. Your satisfaction is our priority, and we
              continually strive to exceed your expectations. Join us in the
              world of online shopping at Shubham's Trendy Treasures  and
              experience the future of retail from the comfort of your home.
            </p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="About Us"
              src={process.env.PUBLIC_URL + '/images/shubham.jpeg'}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
