import axios from "axios";

export function getUser() {
  return axios.get("http://localhost:3000/api/user");
}

export const getUsers = async () => {
  try {
    const result = await axios.get("http://localhost:3000/api/user/all", {
      withCredentials: true,
    });
    return result.data;
  } catch (err) {
    console.error(err);
  }
};

export const getProfile = async () => {
  try {
    const result = await axios.get("http://localhost:3000/api/profile/", {
      withCredentials: true,
    });
    return result.data;
  } catch (err) {
    console.error(err);
  }
};

export const updateProfile = async (obj) => {
  try {
    const result = await axios.put("http://localhost:3000/api/profile/", obj, {
      withCredentials: true,
    });
    return result.data;
  } catch (err) {
    console.error(err);
  }
};
