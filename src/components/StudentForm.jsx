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

  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    student_id: "",
    telephone: "",
    faculty: "",
    specialization: "",
    password: "",
    retypePassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const {id, value} = e.target;
    setFormData({ ...formData, [id]: value });
  }
  
  //Validations
  const validate = () => {
    const newErrors = {};
    
    if(!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!formData.email.match(/^\S+@\S+\.\S+$/)) {
      newErrors.email = "Invalid Email";
    }
    if(!formData.student_id) newErrors.student_id = "Student ID is required";
    if (!formData.telephone) {
      newErrors.telephone = "Telephone is required";
    } else if (!formData.telephone.match(/^\d{10}$/)) {
      newErrors.telephone = "Telephone must be 10 digits";
    }
    if (!formData.faculty || formData.faculty === "") {
      newErrors.faculty = "Faculty is required";
    }
    
    if (!formData.specialization || formData.specialization === "") {
      newErrors.specialization = "Specialization is required";
    }
    if(!formData.password) newErrors.password = "Password is required";
    if(!formData.retypePassword) newErrors.retypePassword = "Retype Password is required";
    if(formData.password !== formData.retypePassword) newErrors.retypePassword = "Passwords do not match";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const combinedHandler = (e) => {
    handleFacultyChange(e);
    handleChange(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const ValidationErrors = validate();
    if(Object.keys(ValidationErrors).length > 0){
      setErrors(ValidationErrors);
    } else {
      console.log("Form Submitted Successfully",formData);
      setErrors({});
    }
  };

  return (
    <>
      <form className="p-4 space-y-4 student-form" onSubmit={handleSubmit}>
        {/* Centered Form Title */}
        <h3 className="mb-6 text-2xl font-bold text-center">Add a Student</h3>

        {/* Personal Information Section */}
        <label htmlFor="name" className="block text-sm font-medium text-left">
          Student Name
        </label>
        <input
          id="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          placeholder="Student Name"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
        />
        {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}

        <label htmlFor="email" className="block text-sm font-medium text-left">
          Email
        </label>
        <input
          id="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
        />
        {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}

        <label htmlFor="student_id" className="block text-sm font-medium text-left">
          Student ID
        </label>
        <input
          id="student_id"
          type="number"
          value={formData.student_id}
          onChange={handleChange}
          placeholder="Student ID"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
        />
        {errors.student_id && <p className="text-sm text-red-500">{errors.student_id}</p>}

        {/* Telephone */}
        <label htmlFor="telephone" className="block text-sm font-medium text-left">
          Telephone Number
        </label>
        <input
          id="telephone"
          type="tel"
          value={formData.telephone}
          onChange={handleChange}
          placeholder="Telephone Number"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
        />
        {errors.telephone && <p className="text-sm text-red-500">{errors.telephone}</p>}

        {/* Faculty Dropdown */}
        <label htmlFor="faculty" className="block text-sm font-medium text-left">
          Faculty
        </label>
        <select
          id="faculty"
          onChange={combinedHandler}
          value={selectedFaculty}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
        >
          <option value="">Select Faculty</option>
          <option value="Faculty of Computing">Faculty of Computing</option>
          <option value="Faculty of Engineering">Faculty of Engineering</option>
          <option value="Faculty of Humanities & Sciences">
            Faculty of Humanities & Sciences
          </option>
        </select>
        {errors.faculty && <p className="text-sm text-red-500">{errors.faculty}</p>}

        {/* Specialization Dropdown */}
        <label htmlFor="specialization" className="block text-sm font-medium text-left">
          Specialization
        </label>
        <select
          id="specialization"
          value={formData.specialization}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
        >
          <option value="">Select Specialization</option>
          {specializations.map((specialization, index) => (
            <option key={index} value={specialization}>
              {specialization}
            </option>
          ))}
        </select>
        {errors.specialization && <p className="text-sm text-red-500">{errors.specialization}</p>}

        {/* Password Field */}
        <label htmlFor="password" className="block text-sm font-medium text-left">
          Password
        </label>
        <div className="relative">
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            value={formData.password}
            onChange={handleChange}
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
        {errors.password && <p className="text-sm text-red-500">{errors.password}</p>}

        {/* Retype Password */}
        <label htmlFor="retype-password" className="block text-sm font-medium text-left">
          Retype Password
        </label>
        <div className="relative">
          <input
            id="retype-password"
            type={showRetypePassword ? "text" : "password"}
            value={formData.retypePassword}
            onChange={handleChange}
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
        {errors.retypePassword && <p className="text-sm text-red-500">{errors.retypePassword}</p>}

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
