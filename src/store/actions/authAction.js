import { LOGIN, LOGOUT } from "../types";
import firebase from "../firebase";
import { RepositoryFactory } from "../../repository/RepositoryFactory";
const provider = new firebase.auth.GoogleAuthProvider();
var auth = RepositoryFactory.get("auth");
export const login = () => async (dispatch) => {
    dispatch({
        type: LOGIN,
        payload: { id: 123, first_name: "abc", last_name: "def" },
    });
};

export const logout = () => async (dispatch) => {
    try {
        firebase
            .auth()
            .signOut()
            .then((res) => {
                dispatch({
                    type: LOGOUT,
                });
            })
            .catch((err) => {
                dispatch({
                    type: LOGOUT,
                });
            });
    } catch (error) {
        console.error("Error logging out:", error);
    }
};
export const signInWithGoogle = () => async (dispatch) => {
    firebase
        .auth()
        .signInWithPopup(provider)
        .then(async (result) => {
            console.log(result, "result");
            const uid = result?.user?.uid;
            let payload = {
                email: result?.user?.email,
                image: result?.user?.photoURL,
                id: 0,
                username: result?.user?.displayName,
            };
            const { data } = await auth.login(payload);
            if (data?.access_token) {
                localStorage.setItem(
                    "access_token",
                    JSON.stringify(data?.access_token)
                );
            } else {
                alert("Sorry Response Failed!");
            }
            firebase.auth().onAuthStateChanged((user) => {
                console.log(user, "user");

                if (user) {
                    // User is signed in.

                    firebase
                        .firestore()
                        .collection("users")
                        .doc(uid)
                        .onSnapshot(async (query) => {
                            // console.log(query, "query>>");
                            if (query.data()) {
                                var tempUser = {};
                                tempUser = { id: uid, ...query.data() };

                                dispatch({
                                    type: LOGIN,
                                    payload: tempUser,
                                });
                            } else {
                                firebase
                                    .firestore()
                                    .collection("users")
                                    .doc(uid)
                                    .set({
                                        imageURL: result?.user?.photoURL,
                                        name: result?.user?.displayName,
                                        email: result?.user?.email,
                                        createdAt:
                                            firebase.firestore.Timestamp.now(),
                                    })
                                    .then((res) => {
                                        // alert("Sign up successfully");
                                    });
                            }
                        });
                } else {
                    // User is signed out.
                }
            });
        })
        .catch((error) => {
            firebase.auth().signOut();
        });
};
