import request from "../index";

export const contacSendEmail = async function (data) {
  return request({
    method: "POST",
    body: JSON.stringify(data) ,
    url: `/contact`,
  });
};