import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/featrues/authSlice";

const useUser = () => {
    const { user } = useSelector(store => store.authReducer);
    const dispatch = useDispatch()

    const logoutUser = () =>{
        dispatch(logout())
    }
    
    return {
        user,logoutUser
    }
}

export default useUser;