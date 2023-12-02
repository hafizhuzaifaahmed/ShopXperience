import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - shopXperience app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          Welcome to ShopXperience, your go-to destination for curated collections that blend style, innovation, and sustainability. At ShopXperience, we're more than an ecommerce platform – we're your partner in creating memorable shopping experiences. From fashion-forward apparel to cutting-edge gadgets, each product is handpicked for quality and uniqueness. Join our vibrant community and explore a world where every purchase tells a story. Happy Shopping!
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;