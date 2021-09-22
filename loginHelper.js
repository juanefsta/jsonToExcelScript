import fetch from "node-fetch";
import { email, password, loginURL } from "./constants.js";

// Login to app and get user token
const getTokenParams = new URLSearchParams();
getTokenParams.append("email", email);
getTokenParams.append("password", password);

const loginResponse = await fetch(loginURL, {
  method: "POST",
  body: getTokenParams,
});
const login = await loginResponse.json();
const token = login.token;

export { token };
