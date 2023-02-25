export const BACKEND_URL = "http://localhost:8080/api/";

export const GET_RECORD_DATA = {
  url: "records",
  method: "get",
};

export const GET_BY_RECORD_DATA = (id) => ({
  url: `records/${id}/likes`,
  method: "get",
});

export const UPDATE_RECORD_DATA = (id) => ({
  url: `records/${id}/likes`,
  method: "patch",
});
