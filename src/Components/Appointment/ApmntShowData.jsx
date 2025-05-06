import React from "react";

function ApmntShowData({ formData }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mt-6 text-gray-800">
      <h2 className="text-2xl font-bold mb-4 text-primaryColor">
        Patient Appointment Summary
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <p>
          <strong>First Name:</strong> {formData.firstName}
        </p>
        <p>
          <strong>Last Name:</strong> {formData.lastName}
        </p>
        <p>
          <strong>Email:</strong> {formData.email}
        </p>
        <p>
          <strong>Age:</strong> {formData.age}
        </p>
        <p>
          <strong>Phone:</strong> {formData.mobileNo}
        </p>
        <p>
          <strong>Country:</strong> {formData.country}
        </p>
        <p>
          <strong>Birth Date:</strong> {formData.birthDate}
        </p>
        <p>
          <strong>Gender:</strong> {formData.gender}
        </p>
        <p>
          <strong>Blood Group:</strong> {formData.bloodgroup}
        </p>
        <p>
          <strong>Appointment Date:</strong> {formData.appointdate}
        </p>
        <p>
          <strong>Preferred Slot:</strong> {formData.pslot}
        </p>
        <p className="sm:col-span-2">
          <strong>Problem Description:</strong> {formData.pdesc}
        </p>
        <div className="sm:col-span-2">
          <strong>Profile Image:</strong>
          <br />
          {formData.avatar ? (
            <img
              src={URL.createObjectURL(formData.avatar)}
              alt="Profile"
              className="w-32 h-32 object-cover mt-2 border border-gray-300 rounded"
            />
          ) : (
            <span className="italic text-gray-500">No image uploaded</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default ApmntShowData;
