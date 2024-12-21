import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { addLecturer } from "../services/lecturerService";

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
    experience: 0,
    department: "",
    password: "",
    retypePassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
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
    if (!formData.specialization.trim())
      newErrors.specialization = "Specialization is required";
    if (!formData.experience) {
      newErrors.experience = "Experience is required";
    } else if (formData.experience < 0) {
      newErrors.experience = "Experience cannot be negative";
    }
    if (!formData.department) newErrors.department = "Department is required";

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const ValidationErrors = validate();
    if (Object.keys(ValidationErrors).length > 0) {
      setErrors(ValidationErrors);
    } else {
      try {
        const response = await addLecturer(formData);
        console.log("Lecturer added successfully.", response);
      } catch (error) {
        console.error("Error adding lecturer:", error);
      }
    }
  };

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

        {/* Name */}
        <label htmlFor="name" className="block text-sm font-medium text-left">
          Name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
        />
        {errors.name && <p className="text-red-500">{errors.name}</p>}

        {/* Email */}
        <label htmlFor="email" className="block text-sm font-medium text-left">
          Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
        />
        {errors.email && <p className="text-red-500">{errors.email}</p>}

        {/* Telephone */}
        <label
          htmlFor="telephone"
          className="block text-sm font-medium text-left"
        >
          Telephone
        </label>
        <input
          id="telephone"
          type="number"
          name="telephone"
          value={formData.telephone}
          onChange={handleChange}
          placeholder="Telephone"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
        />
        {errors.telephone && <p className="text-red-500">{errors.telephone}</p>}

        {/* Address */}
        <label
          htmlFor="address"
          className="block text-sm font-medium text-left"
        >
          Address
        </label>
        <input
          id="address"
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Address"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
        />
        {errors.address && <p className="text-red-500">{errors.address}</p>}

        {/* Date of Birth */}
        <label htmlFor="dob" className="block text-sm font-medium text-left">
          Date of Birth
        </label>
        <input
          id="dob"
          type="date"
          name="dob"
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
                id="gender"
                type="radio"
                name="gender"
                value="male"
                checked={formData.gender === "male"}
                className="mr-2 input-field"
                onChange={handleChange}
              />
              Male
            </label>
            <label className="gender-option">
              <input
                id="gender"
                type="radio"
                name="gender"
                value="female"
                checked={formData.gender === "female"}
                className="mr-2 input-field"
                onChange={handleChange}
              />
              Female
            </label>
            <label className="gender-option">
              <input
                id="gender"
                type="radio"
                name="gender"
                value="other"
                checked={formData.gender === "other"}
                className="mr-2 input-field"
                onChange={handleChange}
              />
              Other
            </label>
            {errors.gender && <p className="text-red-500">{errors.gender}</p>}
          </div>
        </div>

        {/* Academic Qualification Section */}
        <label
          htmlFor="Academics"
          className="mt-4 mb-4 text-xl font-semibold title"
        >
          Academic Qualification
        </label>

        {/* Degree  */}
        <label htmlFor="degree" className="block text-sm font-medium text-left">
          Highest Degree
        </label>
        <input
          id="degree"
          type="text"
          name="degree"
          value={formData.degree}
          onChange={handleChange}
          placeholder="Highest Degree"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
        />
        {errors.degree && <p className="text-red-500">{errors.degree}</p>}

        {/* Specialization */}
        <label
          htmlFor="specialization"
          className="block text-sm font-medium text-left"
        >
          Specialization
        </label>
        <input
          id="specialization"
          type="text"
          name="specialization"
          value={formData.specialization}
          onChange={handleChange}
          placeholder="Specialization"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
        />
        {errors.specialization && (
          <p className="text-red-500">{errors.specialization}</p>
        )}

        {/* Experience */}
        <label
          htmlFor="experience"
          className="block text-sm font-medium text-left"
        >
          Experience (in years)
        </label>
        <input
          id="experience"
          type="number"
          name="experience"
          value={formData.experience}
          onChange={handleChange}
          placeholder="Experience"
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
        {errors.department && (
          <p className="text-red-500">{errors.department}</p>
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
            name="password"
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
            id="retypePassword"
            type={showRetypePassword ? "text" : "password"}
            name="retypePassword"
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
        {errors.retypePassword && (
          <p className="text-red-500">{errors.retypePassword}</p>
        )}

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
