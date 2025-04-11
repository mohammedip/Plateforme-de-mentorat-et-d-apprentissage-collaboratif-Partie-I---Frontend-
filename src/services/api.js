import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default api;

export const category = {
  getCategories: () => api.get(`/v1/categories`),
  getCategory: (id) => api.get(`/v1/categories/${id}`),
  createCategory: (data) => api.post(`/v1/categories`, data),
  updateCategory: (id, data) => api.put(`/v1/categories/${id}`, data),
  deleteCategory: (id) => api.delete(`/v1/categories/${id}`),
};

export const course = {
  getCourses: () => api.get(`/v1/courses`),
  getCourse: (id) => api.get(`/v1/courses/${id}`),
  createCourse: (data) => api.post(`/v1/courses`, data),
  updateCourse: (id, data) => api.put(`/v1/courses/${id}`, data),
  deleteCourse: (id) => api.delete(`/v1/courses/${id}`),
};

export const tag = {
  getTags: () => api.get(`/v1/tags`),
  gettag: (id) => api.get(`/v1/tags/${id}`),
};

export const statistique = {
  getCoursesStat: () => api.get(`/v2/stats/courses`),
  getCategoriesStat: () => api.get(`/v2/stats/categories`),
  getTagsStat: () => api.get(`/v2/stats/tags`),
};
