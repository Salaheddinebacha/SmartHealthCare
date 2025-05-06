import React from "react";
import DoctorsList from "../../Components/Doctors/DoctorsList";

const Doctors = () => {
  return (
    <section>
      <div className="container">
        <div className="xl-w-[470px] mx-auto">
          <h2 className="heading text-center">Nos Grands Médecins</h2>
          <p className="text_para text-center">
            Des soins de classe mondiale pour tous. Notre système de santé offre
            des soins experts inégalés.
          </p>
          <DoctorsList />
        </div>
      </div>
    </section>
  );
};

export default Doctors;
