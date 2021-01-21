import http from "./httpService";

const apiEndPoint = `/form`;


export async function createForm(form) {
  return await http.post(apiEndPoint,form);
}

export async function getForms() {
    return await http.get(apiEndPoint);
}

export async function getForm(id) {
    return await http.get(`${apiEndPoint}/${id}`);
}

export default {
  createForm,
  getForms,
  getForm
};
