import axios from "axios";
export const BASE_API = process.env.REACT_APP_API_BASE;
export const COURSES_API = `${BASE_API}/api/courses`;
export interface Course {
  _id: string;
  name: string;
  number: string;
  department: string;
  description: string;
}
// export const signup = async (course: any) => {
//   const response = await axios.post(`${COURSES_API}/signup`, course);
//   return response.data;
// };
// export const signout = async () => {
//   const response = await axios.post(`${COURSES_API}/signout`);
//   return response.data;
// };
// export const profile = async () => {
//   const response = await axios.post(`${COURSES_API}/profile`);
//   return response.data;
// };
export const updateCourse = async (course: any) => {
  const response = await axios.put(`${COURSES_API}/${course._id}`, course);
  return response.data;
};
export const findAllCourses = async () => {
  const response = await axios.get(`${COURSES_API}`);
  return response.data;
};
export const createCourse = async (course: any) => {
  const response = await axios.post(`${COURSES_API}`, course);
  return response.data;
};
export const deleteCourse = async (course: any) => {
  const response = await axios.delete(`${COURSES_API}/${course._id}`);
  return response.data;
};
