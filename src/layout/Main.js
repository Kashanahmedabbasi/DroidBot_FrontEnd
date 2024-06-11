import { useEffect } from "react";
import { useHistory } from "react-router-dom";

const Main = (props) => {
    const history = useHistory();
    const storedToken = JSON.parse(localStorage.getItem("access_token"));
    console.log(storedToken, "storedToken");
    useEffect(() => {
        const storedToken = JSON.parse(localStorage.getItem("access_token"));
        if (storedToken == null) {
            history.push("/");
        }
    }, [storedToken]);
    return <>{props.children}</>;
};

export default Main;
