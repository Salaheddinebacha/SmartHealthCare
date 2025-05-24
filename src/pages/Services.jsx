import React from "react";
import ServiceList from "../Components/Services/ServiceList";

const Services = () => {
  return (
    <>
      <div className="xl:w-[470px] mx-auto">
        <h4 className="heading text-center">Nos Services Médicaux</h4>
        <p className="text_para text-center">
          Des soins de classe mondiale pour tous. Notre système de santé offre
          des soins experts inégalés.
        </p>
      </div>
      <ServiceList />
    </>
  );  
};

export default Services;
