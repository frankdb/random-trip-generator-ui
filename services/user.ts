import axios from "axios";

export function getUser() {
  console.log("getting in here?=====B");
  return axios.get("http://localhost:3000/api/user");
}

export const getUsers = async () => {
  try {
    const result = await axios.get("http://localhost:3000/api/user/all");
    console.log("in user service", result.data);
    return result.data;
  } catch (err) {
    console.error(err);
  }
};
