import React from "react";
import { services as serviceData } from "../../utils/ServicesData";
import "./ServiceCard.scss";

const ServiceCard = () => {
  return (
    <div className="container">
      <div className="row gap-5 justify-content-center">
        {serviceData?.map((service, index) => {
          return (
            <div
              className="col-12 col-sm-5 col-md-3 card py-5 px-4 position-relative hvr-box-shadow-outset"
              key={index}
            >
              <div className="cardNumber position-absolute">
                <p>{service.number}</p>
              </div>
              <div className="cards">
                <div className="logo py-4">{service.logo}</div>
                <div className="cardDetails">
                  <h2>{service.title}</h2>
                  <h5 className="py-3">{service.description}</h5>
                </div>
                {/* <Link to="/" className="button">
                  Continue
                </Link> */}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceCard;
