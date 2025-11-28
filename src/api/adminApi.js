// src/api/adminApi.js
import * as api from "./apiClient";

export const fetchOverview = () => api.get("/admin/overview"); // tổng quan dashboard
export const fetchBuildings = () => api.get("/admin/buildings");
export const fetchBuildingRooms = (buildingId) => api.get(`/admin/buildings/${buildingId}/rooms`);
export const createBuilding = (payload) => api.post("/admin/buildings", payload);
export const fetchUsers = () => api.get("/admin/users");
export const fetchReviews = () => api.get("/admin/reviews");
export const fetchBookings = () => api.get("/admin/bookings");
export const fetchReports = (params = "") => api.get(`/admin/reports${params}`);
export const fetchPayments = () => api.get("/admin/payments");
