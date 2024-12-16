// import React from 'react'
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const StudentForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showRetypePassword, setShowRetypePassword] = useState(false);
  const [selectedFaculty, setSelectedFaculty] = useState("");
  const [specializations, setSpecializations] = useState([]);

  const handleFacultyChange = (e) => {
    const faculty = e.target.value;
    setSelectedFaculty(faculty);
    setSpecializations(facultySpecializations[faculty] || []);
  };

  const facultySpecializations = {
    "Faculty of Computing": ["IT", "SE", "Cyber", "CS", "CSNE"],
    "Faculty of Engineering": [
      "Mechanical",
      "Electrical",
      "Electronic",
      "Civil",
      "Survey",
      "Architecture",
    ],
    "Faculty of Humanities & Sciences": [
      "Biotechnology",
      "Financial Mathematics",
    ],
  };

  return (
    <>
      <form className="p-4 space-y-4 student-form">
        {/* Centered Form Title */}
        <h3 className="mb-6 text-2xl font-bold text-center">Add a Student</h3>

        {/* Personal Information Section */}
        <label htmlFor="name" className="block text-sm font-medium text-left">
          Student Name
        </label>
        <input
          id="name"
          type="text"
          placeholder="Student Name"
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
          htmlFor="student-id"
          className="block text-sm font-medium text-left"
        >
          Student ID
        </label>
        <input
          id="student-id"
          type="number"
          placeholder="Student ID"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
        />

        {/* Telephone Number */}
        <label
          htmlFor="telephone"
          className="block text-sm font-medium text-left"
        >
          Telephone Number
        </label>
        <input
          id="telephone"
          type="tel"
          placeholder="Telephone Number"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
        />

        {/* Faculty Dropdown */}
        <label
          htmlFor="faculty"
          className="block text-sm font-medium text-left"
        >
          Faculty
        </label>
        <select
          id="faculty"
          onChange={handleFacultyChange}
          value={selectedFaculty} // set the value to selectedFaculty state
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
        >
          <option value="">Select Faculty</option>
          <option value="Faculty of Computing">Faculty of Computing</option>
          <option value="Faculty of Engineering">Faculty of Engineering</option>
          <option value="Faculty of Humanities & Sciences">
            Faculty of Humanities & Sciences
          </option>
        </select>

        {/* Specialization Dropdown */}
        <label
          htmlFor="specialization"
          className="block text-sm font-medium text-left"
        >
          Specialization
        </label>
        <select
          id="specialization"
          disabled={!specializations.length}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
        >
          <option value="">Select Specialization</option>
          {specializations.map((specialization) => (
            <option key={specialization} value={specialization}>
              {specialization}
            </option>
          ))}
        </select>

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
          Add Student
        </button>
      </form>
    </>
  );
};

export default StudentForm;
