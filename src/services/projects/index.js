import request from "../index";

export const getAllProjects = async function () {
  return request({
    method: "GET",
    url: `/projects`,
  });
};
export const getAllTecnologies = async function () {
  return request({
    method: "GET",
    url: `/tecnologies`,
  });
};

