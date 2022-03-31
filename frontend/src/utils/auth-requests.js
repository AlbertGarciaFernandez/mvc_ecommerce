import axios from "axios";
import { getCurrentUserToken } from "../firebase/firebase";

export async function syncUserData(firstName) {
  const userToken = await getCurrentUserToken();

  return axios({
    method: "POST",
    url: "http://localhost:4000/users/sign-up",
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
    data: {
      firstName: firstName,
    },
  });
}
