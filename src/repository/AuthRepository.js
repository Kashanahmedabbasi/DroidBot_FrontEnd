import Repository from "./Repository";
const AUTH = "/users/login";
export default {
    login(payload) {
        console.log(payload,'payload')
        return Repository.post(`${AUTH}`, payload);
    },
};
