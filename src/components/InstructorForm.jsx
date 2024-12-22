import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { addInstructor } from "../services/instructorService";

const InstructorForm = () => {
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showRetypePassword, setShowRetypePassword] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState("");

  const handleDepartmentChange = (e) => {
    const { value } = e.target;
    setSelectedDepartment(value);
    handleInputChange(e);
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
    supervisor: "",
    password: "",
    retypePassword: "",
  });

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Enter a valid email.";
    if (!formData.telephone.trim())
      newErrors.telephone = "Telephone number is required.";
    else if (!/^\d{10}$/.test(formData.telephone))
      newErrors.telephone = "Enter a valid 10-digit phone number.";
    if (!formData.address.trim()) newErrors.address = "Address is required.";
    if (!formData.dob) newErrors.dob = "Date of birth is required.";
    if (!formData.gender) newErrors.gender = "Gender is required.";
    if (!formData.degree.trim()) newErrors.degree = "Degree is required.";
    if (!formData.specialization.trim())
      newErrors.specialization = "Specialization is required.";
    if (!formData.experience.trim())
      newErrors.experience = "Experience is required.";
    else if (isNaN(formData.experience) || formData.experience < 0)
      newErrors.experience = "Enter a valid number for experience.";
    if (!formData.department) newErrors.department = "Department is required.";
    if (formData.password !== formData.retypePassword)
      newErrors.retypePassword = "Passwords do not match.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { id, name, value } = e.target;
    setFormData({ ...formData, [id || name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
    } else {
      try {
        const response = await addInstructor(formData);
        console.log("Instructor added successfully.", response);
      } catch (error) {
        console.error("Error adding lecturer:", error);
      }
    }
  };

  return (
    <>
      <form className="p-4 space-y-4 Instructor-form" onSubmit={handleSubmit}>
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

        {/* Name Field */}
        <label htmlFor="name" className="block text-sm font-medium text-left">
          Name
        </label>
        <input
          id="name"
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
        />
        {errors.name && <p className="text-red-500">{errors.name}</p>}

        {/* Email Field */}
        <label htmlFor="email" className="block text-sm font-medium text-left">
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
        />
        {errors.email && <p className="text-red-500">{errors.email}</p>}

        {/* Telephone Field */}
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
          value={formData.telephone}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
        />
        {errors.telephone && <p className="text-red-500">{errors.telephone}</p>}

        {/* Address Field */}
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
          value={formData.address}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
        />
        {errors.address && <p className="text-red-500">{errors.address}</p>}

        {/* Date of Birth Field */}
        <label htmlFor="dob" className="block text-sm font-medium text-left">
          Date of Birth
        </label>
        <input
          id="dob"
          type="date"
          value={formData.dob}
          onChange={handleInputChange}
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
                onChange={handleInputChange}
                className="mr-2 input-field"
              />
              Male
            </label>
            <label className="gender-option">
              <input
                type="radio"
                name="gender"
                value="female"
                onChange={handleInputChange}
                className="mr-2 input-field"
              />
              Female
            </label>
            <label className="gender-option">
              <input
                type="radio"
                name="gender"
                value="other"
                onChange={handleInputChange}
                className="mr-2 input-field"
              />
              Other
            </label>
          </div>
          {errors.gender && <p className="text-red-500">{errors.gender}</p>}
        </div>

        {/* Academic Qualification Section */}
        <label
          htmlFor="Academics"
          className="mt-4 mb-4 text-xl font-semibold title"
        >
          Academic Qualification
        </label>

        {/* Degree Field */}
        <label htmlFor="degree" className="block text-sm font-medium text-left">
          Highest Degree
        </label>
        <input
          id="degree"
          type="text"
          placeholder="Highest Degree"
          value={formData.degree}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
        />
        {errors.degree && <p className="text-red-500">{errors.degree}</p>}

        {/* Specialization Field */}
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
          value={formData.specialization}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
        />
        {errors.specialization && (
          <p className="text-red-500">{errors.specialization}</p>
        )}

        {/* Experience Field */}
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
          value={formData.experience}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
        />
        {errors.experience && (
          <p className="text-red-500">{errors.experience}</p>
        )}

        {/* Department Dropdown */}
        <label
          htmlFor="Department"
          className="mb-4 text-xl font-semibold title"
        >
          Department
        </label>
        <select
          id="Department"
          name="department"
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
        {errors.department && (
          <p className="text-red-500">{errors.department}</p>
        )}

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
              value={formData.supervisor}
              onChange={(e) =>
                setFormData({ ...formData, supervisor: e.target.value })
              }
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
            {errors.supervisor && (
              <p className="text-red-500">{errors.supervisor}</p>
            )}
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
            value={formData.password}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 flex items-center text-gray-500 right-3 focus:outline-none"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
          {errors.password && <p className="text-red-500">{errors.password}</p>}
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
            id="retypePassword"
            type={showRetypePassword ? "text" : "password"}
            placeholder="Retype Password"
            value={formData.retypePassword}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
          />
          <button
            type="button"
            onClick={() => setShowRetypePassword(!showRetypePassword)}
            className="absolute inset-y-0 flex items-center text-gray-500 right-3 focus:outline-none"
          >
            {showRetypePassword ? <FaEyeSlash /> : <FaEye />}
          </button>
          {errors.retypePassword && (
            <p className="text-red-500">{errors.retypePassword}</p>
          )}
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
