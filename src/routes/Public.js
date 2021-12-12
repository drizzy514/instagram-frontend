import { Route, Redirect, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";



function Public (props){
    
    const [token    ] = useAuth()
    const { pathname } = useLocation();
    if ((token && pathname === "/login") || (token && pathname === "/signup")){
        return <Redirect to="/"></Redirect>

    
    }
    return <Route {...props} />
    

}
export default Public