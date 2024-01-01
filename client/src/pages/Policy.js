import React from "react";
import Layout from "./../components/Layout/Layout";
import { Link } from "react-router-dom";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <ul>
            <li>
              <p>
                <b>Privacy Policy:</b> user data is kept safe and secure keeping
                the privacy
              </p>
            </li>
            <li>
              <p>
                <b>Refund and Return Policy:</b> itesm are refundable within the
                7 days of delivery
              </p>
            </li>
            <li>
              <p>
                <b>Shipping policy:</b> your product will be delivered 5-7
                working days , you can keep the track of your order in dashboard
              </p>
            </li>
            <li>
              <p>
                <b>Payment Policy:</b> payment is accepted by card only
              </p>
            </li>
            <li>
              <p>
                <b>About Our Products:</b>the products are of premium quality{" "}
              </p>
            </li>
            <li>
              <p>
                <b>Customer Support Policy:</b>we provide customer support 24/7
                , you can see the link about contact us for furter information
              </p>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
