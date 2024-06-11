// chrome.exe --user-data-dir="C://Chrome dev session" --disable-web-security
import axios from "axios";
const baseDomain = "http://192.168.18.84:8000/";
const baseURL = `${baseDomain}`;

let axiosObj;
axiosObj = axios.create({
  baseURL,
  headers: { 'Content-Type': 'application/json' },
});
export default axiosObj;
