import http from "services/http";
import { SYSTEM_ERROR } from "config/CONSTANTS";

const getUsers = () => {
  return new Promise((resolve, reject) => {
    try {
      http
        .get("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err.message);
        });
    } catch (error) {
      console.error("System Error, Err===", error);
      reject(SYSTEM_ERROR);
    }
  });
};

const exportProps = { getUsers };

export default exportProps;
