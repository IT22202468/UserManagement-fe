import { useState } from "react";
import LecturerForm from "../components/LecturerForm";
import InstructorForm from "../components/InstructorForm";
import StudentForm from "../components/StudentForm";

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState("AddUser");
  const [selectedRole, setSelectedRole] = useState("");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setSelectedRole(""); // Reset role when switching tabs
  };

  const handleRoleChange = (role) => {
    setSelectedRole(role);
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
        <button
          className={`tab-button ${
            activeTab === "ViewUsers" ? "active" : ""
          } p-4 border border-gray-300 rounded-tl-md`}
          onClick={() => handleTabChange("ViewUsers")}
        >
          Instructors
        </button>
        <button
          className={`tab-button ${
            activeTab === "ViewUsers" ? "active" : ""
          } p-4 border border-gray-300 rounded-tl-md`}
          onClick={() => handleTabChange("ViewUsers")}
        >
          Students
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

        {activeTab === "ViewUsers" && <div className="view-users"></div>}
      </div>
    </div>
  );
};

export default AdminPanel;
