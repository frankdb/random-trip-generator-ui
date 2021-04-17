import axios from "axios";

export function getUser() {
  console.log("getting in here?=====B");
  return axios.get("http://localhost:3000/api/user");
}
