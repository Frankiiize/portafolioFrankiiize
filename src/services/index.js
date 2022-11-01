const URL_BASE = process.env.REACT_APP_CLIENTE_API_URL;

const headers = {
  headers: {
    "Content-Type": "application/json",
  },
};

const request = async function (options) {
  let localStorageUser = JSON.parse(window.localStorage.getItem("user"));
  let reqOptions = { ...options, ...headers };
  if (localStorageUser) {
    const authToken = { Authorization: `${localStorageUser.token}` };
    reqOptions.headers = { ...reqOptions.headers, ...authToken };
  }
  const req = await fetch(`${URL_BASE}${options.url}`, reqOptions);
  const statusCode = req.status;
  const response = await req.json();
  return { ...response, status: statusCode };
};

export default request;