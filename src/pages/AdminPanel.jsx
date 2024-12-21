import { useState, useEffect } from "react";
import { fetchLecturers } from "../services/lecturerService";
import LecturerForm from "../components/LecturerForm";
import InstructorForm from "../components/InstructorForm";
import StudentForm from "../components/StudentForm";

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState("AddUser");
  const [selectedRole, setSelectedRole] = useState("");
  const [lecturers, setLecturers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setSelectedRole(""); // Reset role when switching tabs
  };

  const handleRoleChange = (role) => {
    setSelectedRole(role);
  };

  // Fetch lecturers when the "ViewUsers" tab is active
  useEffect(() => {
    if (activeTab === "ViewUsers") {
      const getLecturers = async () => {
        setLoading(true);
        try {
          const data = await fetchLecturers();
          setLecturers(data);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };

      getLecturers();
    }
  }, [activeTab]);

  // Placeholder for update functionality
  const handleUpdate = (lecturerId) => {
    console.log(`Update lecturer with ID: ${lecturerId}`);
    // Add your update logic here
  };

  // Placeholder for delete functionality
  const handleDelete = (lecturerId) => {
    console.log(`Delete lecturer with ID: ${lecturerId}`);
    // Add your delete logic here
  };

  return (
    <div className="flex flex-col w-full p-6 mx-auto text-black md:w-5/6 lg:w-full admin-panel">
      {/* Tabs */}
      <div className="flex border-b tabs">
        <button
          className={`tab-button ${
            activeTab === "AddUser" ? "active" : ""
          } p-4 border border-gray-300 rounded-tl-md`}
          onClick={() => handleTabChange("AddUser")}
        >
          Add a User
        </button>
        <button
          className={`tab-button ${
            activeTab === "ViewUsers" ? "active" : ""
          } p-4 border border-gray-300 rounded-tl-md`}
          onClick={() => handleTabChange("ViewUsers")}
        >
          Lecturers
        </button>
      </div>

      {/* Tab Content */}
      <div className="w-full p-4 bg-white tab-content">
        {activeTab === "AddUser" && (
          <div className="add-user">
            <div className="mb-4 role-selection">
              <label>
                <input
                  type="radio"
                  name="role"
                  value="Lecturer"
                  onChange={() => handleRoleChange("Lecturer")}
                />
                Lecturer
              </label>
              <label className="ml-4">
                <input
                  type="radio"
                  name="role"
                  value="Instructor"
                  onChange={() => handleRoleChange("Instructor")}
                />
                Instructor
              </label>
              <label className="ml-4">
                <input
                  type="radio"
                  name="role"
                  value="Student"
                  onChange={() => handleRoleChange("Student")}
                />
                Student
              </label>
            </div>

            {/* Conditional Forms */}
            {selectedRole === "Lecturer" && <LecturerForm />}
            {selectedRole === "Instructor" && <InstructorForm />}
            {selectedRole === "Student" && <StudentForm />}
          </div>
        )}

        {activeTab === "ViewUsers" && (
          <div className="view-users">
            {loading && <p>Loading lecturers...</p>}
            {error && <p className="text-red-500">{error}</p>}
            {!loading && !error && lecturers.length === 0 && (
              <p>No lecturers found.</p>
            )}
            {!loading && !error && lecturers.length > 0 && (
              <table className="w-full border-collapse table-auto">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-4 py-2 border">Name</th>
                    <th className="px-4 py-2 border">Email</th>
                    <th className="px-4 py-2 border">Department</th>
                    <th className="px-4 py-2 border">Specialization</th>
                    <th className="px-4 py-2 border">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {lecturers.map((lecturer) => (
                    <tr key={lecturer._id}>
                      <td className="px-4 py-2 border">{lecturer.name}</td>
                      <td className="px-4 py-2 border">{lecturer.email}</td>
                      <td className="px-4 py-2 border">{lecturer.department}</td>
                      <td className="px-4 py-2 border">
                        {lecturer.specialization}
                      </td>
                      <td className="px-4 py-2 border">
                        <button
                          className="px-2 py-1 mr-2 text-white bg-blue-500 rounded"
                          onClick={() => handleUpdate(lecturer._id)}
                        >
                          Update
                        </button>
                        <button
                          className="px-2 py-1 text-white bg-red-500 rounded"
                          onClick={() => handleDelete(lecturer._id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;
