import axios from "axios";
const API_BASE = "https://kanbas-node-server-app-vcsj.onrender.com/api"; 
const MODULES_URL = `${API_BASE}/modules`;
// const COURSES_URL = "http://localhost:4000/api/courses";
const COURSES_URL = `${API_BASE}/courses`;
console.log(MODULES_URL);
console.log(COURSES_URL);

export const createModule = async (courseId, module) => {
  const response = await axios.post(
    `${COURSES_URL}/${courseId}/modules`,
    module
  );
  return response.data;
};

export const deleteModule = async (moduleId) => {
  const response = await axios.delete(`${MODULES_URL}/${moduleId}`);
  return response.data;
};
export const findModulesForCourse = async (courseId) => {
  const response = await axios.get(`${COURSES_URL}/${courseId}/modules`);
  return response.data;
};
export const updateModule = async (module) => {
    const response = await axios.put(`${MODULES_URL}/${module._id}`, module);
    return response.data;
  };
  
