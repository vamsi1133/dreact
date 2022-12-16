import axios from "axios";

const https = axios.create({
  baseURL: "https://6386f493e399d2e473f07b68.mockapi.io/api/",
  timeout: 5000,
  headers: { "X-Custom-Header": "foobar" },
});

export default https;
