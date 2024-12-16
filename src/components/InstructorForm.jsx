// import React from "react";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const InstructorForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showRetypePassword, setShowRetypePassword] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState("");

  const handleDepartmentChange = (e) => {
    setSelectedDepartment(e.target.value);
  };

  // Supervisor data
  const supervisorOptions = {
    Computing: ["Dr. Smith", "Dr. Jane Doe", "Dr. Alan Turing"],
    Engineering: ["Dr. John Doe", "Dr. Emily Clark", "Dr. Tesla"],
    Business: ["Dr. Adam Grant", "Dr. Susan Collins", "Dr. Steve Jobs"],
    Humanities: ["Dr. Maya Angelou", "Dr. John Keats", "Dr. Emily Bronte"],
    GraduateStudies: [
      "Dr. Albert Einstein",
      "Dr. Marie Curie",
      "Dr. Stephen Hawking",
    ],
  };

  return (
    <>
      <form className="p-4 space-y-4 Instructor-form">
        {/* Centered Form Title */}
        <h3 className="mb-6 text-2xl font-bold text-center">
          Add an Instructor
        </h3>

        {/* Personal Information Section */}
        <label
          htmlFor="Personel"
          className="mb-4 text-xl font-semibold text-left title"
        >
          Personal Information
        </label>
        <label htmlFor="name" className="block text-sm font-medium text-left">
          Name
        </label>
        <input
          id="name"
          type="text"
          placeholder="Name"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
        />
        <label htmlFor="email" className="block text-sm font-medium text-left">
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="Email"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
        />
        <label
          htmlFor="telephone"
          className="block text-sm font-medium text-left"
        >
          Telephone
        </label>
        <input
          id="telephone"
          type="number"
          placeholder="Telephone"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
        />
        <label
          htmlFor="address"
          className="block text-sm font-medium text-left"
        >
          Address
        </label>
        <input
          id="address"
          type="text"
          placeholder="Address"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
        />
        <label
          htmlFor="address"
          className="block text-sm font-medium text-left"
        >
          Date of Birth
        </label>
        {/* <input
      id="dob"
      type="date"
      className="justify-start px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
    /> */}
        <input
          id="dob"
          type="date"
          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
        />

        {/* Gender Section */}
        <div className="space-y-2 gender-selection">
          <label
            htmlFor="gender"
            className="block text-sm font-medium text-left"
          >
            Gender
          </label>
          <div className="flex items-center space-x-4">
            <label className="gender-option">
              <input
                type="radio"
                name="gender"
                value="male"
                className="mr-2 input-field"
              />
              Male
            </label>
            <label className="gender-option">
              <input
                type="radio"
                name="gender"
                value="female"
                className="mr-2 input-field"
              />
              Female
            </label>
            <label className="gender-option">
              <input
                type="radio"
                name="gender"
                value="other"
                className="mr-2 input-field"
              />
              Other
            </label>
          </div>
        </div>

        {/* Academic Qualification Section */}
        <label
          htmlFor="Academics"
          className="mt-4 mb-4 text-xl font-semibold title"
        >
          Academic Qualification
        </label>
        <label htmlFor="degree" className="block text-sm font-medium text-left">
          Highest Degree
        </label>
        <input
          id="degree"
          type="text"
          placeholder="Highest Degree"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
        />
        <label
          htmlFor="specialization"
          className="block text-sm font-medium text-left"
        >
          Specialization
        </label>
        <input
          id="specialization"
          type="text"
          placeholder="Specialization"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
        />
        <label
          htmlFor="experience"
          className="block text-sm font-medium text-left"
        >
          Experience (in years)
        </label>
        <input
          id="experience"
          type="number"
          placeholder="Experience"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
        />

        {/* Department Dropdown */}
        <label
          htmlFor="Department"
          className="mb-4 text-xl font-semibold title"
        >
          Department
        </label>
        <select
          id="Department"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
          value={selectedDepartment}
          onChange={handleDepartmentChange}
        >
          <option value="">Select Department</option>
          <option value="Computing">Faculty of Computing</option>
          <option value="Engineering">Faculty of Engineering</option>
          <option value="Business">Faculty of Business Studies</option>
          <option value="Humanities">Faculty of Humanities and Sciences</option>
          <option value="GraduateStudies">Faculty of Graduate Studies</option>
        </select>

        {/* Supervisor Dropdown */}
        {selectedDepartment && (
          <>
            <label
              htmlFor="Supervisor"
              className="block text-sm font-medium text-left"
            >
              Supervisor
            </label>
            <select
              id="Supervisor"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            >
              <option value="">Select Supervisor</option>
              {supervisorOptions[selectedDepartment].map(
                (supervisor, index) => (
                  <option key={index} value={supervisor}>
                    {supervisor}
                  </option>
                )
              )}
            </select>
          </>
        )}

        {/* Password Field */}
        <label
          htmlFor="password"
          className="block text-sm font-medium text-left"
        >
          Password
        </label>
        <div className="relative">
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 flex items-center text-gray-500 right-3 focus:outline-none"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>

        {/* Retype Password Field */}
        <label
          htmlFor="re-password"
          className="block text-sm font-medium text-left"
        >
          Retype Password
        </label>
        <div className="relative">
          <input
            id="retype-password"
            type={showRetypePassword ? "text" : "password"}
            placeholder="Retype Password"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
          />
          <button
            type="button"
            onClick={() => setShowRetypePassword(!showRetypePassword)}
            className="absolute inset-y-0 flex items-center text-gray-500 right-3 focus:outline-none"
          >
            {showRetypePassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="px-4 py-2 mt-6 text-white transition bg-blue-500 rounded-md hover:bg-blue-600"
        >
          Add Instructor
        </button>
      </form>
    </>
  );
};

export default InstructorForm;
