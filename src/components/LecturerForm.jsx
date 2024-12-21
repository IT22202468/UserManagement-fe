// import React from 'react'
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const LecturerForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showRetypePassword, setShowRetypePassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    telephone: "",
    address: "",
    dob: "",
    gender: "",
    degree: "",
    specialization: "",
    experience: "",
    department: "",
    password: "",
    retypePassword: "",
  });

  const handleChange = (e) => {
    const {id, value} = e.target;
    setFormData({ ...formData, [id]: value });
  }

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if(!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!formData.email.match(/^\S+@\S+\.\S+$/)) {
      newErrors.email = "Invalid Email";
    } 
    if (!formData.telephone) {
      newErrors.telephone = "Telephone is required";
    } else if (!formData.telephone.match(/^\d{10}$/)) {
      newErrors.telephone = "Invalid Telephone";
    }
    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.dob) newErrors.dob = "Date of Birth is required";
    if (!formData.gender) newErrors.gender = "Please select a gender";
    if (!formData.degree.trim()) newErrors.degree = "Degree is required";
    if (!formData.specialization.trim()) newErrors.specialization = "Specialization is required";
    if (!formData.experience) {
      newErrors.experience = "Experience is required";
    } else if (formData.experience < 0) {
      newErrors.experience = "Experience cannot be negative";
    }
    if (!formData.department) newErrors.department = "Department is required";
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long";
    } else if (!formData.password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/)) {
      newErrors.password = "Password must contain at least one uppercase letter, one lowercase letter and one number";
    }
    if (!formData.retypePassword) {
      newErrors.retypePassword = "Retype Password is required";
    } else if (formData.password !== formData.retypePassword) {
      newErrors.retypePassword = "Passwords do not match";
    }

    return newErrors;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const ValidationErrors = validate();
    if(Object.keys(ValidationErrors).length > 0){
      setErrors(ValidationErrors);
    } else {
      console.log(formData);
    }
  }

  return (
    <>
      <form className="p-4 space-y-4 lecturer-form" onSubmit={handleSubmit}>
        {/* Centered Form Title */}
        <h3 className="mb-6 text-2xl font-bold text-center">Add a Lecturer</h3>

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
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
        />
        {errors.name && <p className="text-red-500">{errors.name}</p>}

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
        {errors.email && <p className="text-red-500">{errors.email}</p>}

        <label
          htmlFor="telephone"
          className="block text-sm font-medium text-left"
        >
          Telephone
        </label>
        <input
          id="telephone"
          type="number"
          value={formData.telephone}
          onChange={handleChange}
          placeholder="Telephone"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
        />
        {errors.telephone && <p className="text-red-500">{errors.telephone}</p>}

        <label
          htmlFor="address"
          className="block text-sm font-medium text-left"
        >
          Address
        </label>
        <input
          id="address"
          type="text"
          value={formData.address}
          onChange={handleChange}
          placeholder="Address"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
        />
        {errors.address && <p className="text-red-500">{errors.address}</p>}

        <label htmlFor="dob" className="block text-sm font-medium text-left">
          Date of Birth
        </label>
        <input
          id="dob"
          type="date"
          value={formData.dob}
          onChange={handleChange}
          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
        />
        {errors.dob && <p className="text-red-500">{errors.dob}</p>}

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
                onChange={handleChange}
              />
              Male
            </label>
            <label className="gender-option">
              <input
                type="radio"
                name="gender"
                value="female"
                className="mr-2 input-field"
                onChange={handleChange}
              />
              Female
            </label>
            <label className="gender-option">
              <input
                type="radio"
                name="gender"
                value="other"
                className="mr-2 input-field"
                onChange={handleChange}
              />
              Other
            </label>
            {errors.dob && <p className="text-red-500">{errors.dob}</p>}
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
          value={formData.degree}
          onChange={handleChange}
          placeholder="Highest Degree"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
        />
        {errors.degree && <p className="text-red-500">{errors.degree}</p>}

        <label
          htmlFor="specialization"
          className="block text-sm font-medium text-left"
        >
          Specialization
        </label>
        <input
          id="specialization"
          type="text"
          value={formData.specialization}
          onChange={handleChange}
          placeholder="Specialization"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
        />
        {errors.specialization && <p className="text-red-500">{errors.specialization}</p>}

        <label
          htmlFor="experience"
          className="block text-sm font-medium text-left"
        >
          Experience (in years)
        </label>
        <input
          id="experience"
          type="number"
          value={formData.experience}
          onChange={handleChange}
          placeholder="Experience"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
        />
        {errors.experience && <p className="text-red-500">{errors.experience}</p>}

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
          value={formData.department}
          onChange={handleChange}
        >
          <option value="">Select Department</option>
          <option value="Computing">Faculty of Computing</option>
          <option value="Engineering">Faculty of Engineering</option>
          <option value="Business">Faculty of Business Studies</option>
          <option value="Humanities">Faculty of Humanities and Sciences</option>
          <option value="GraduateStudies">Faculty of Graduate Studies</option>
        </select>
        {errors.department && <p className="text-red-500">{errors.department}</p>}

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
        {errors.password && <p className="text-red-500">{errors.password}</p>}

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
        {errors.retypePassword && <p className="text-red-500">{errors.retypePassword}</p>}

        {/* Submit Button */}
        <button
          type="submit"
          className="px-4 py-2 mt-6 text-white transition bg-blue-500 rounded-md hover:bg-blue-600"
        >
          Add Lecturer
        </button>
      </form>
    </>
  );
};

export default LecturerForm;
