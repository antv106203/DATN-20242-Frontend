import {faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.css"
import { useDispatch } from "react-redux";
import { logout } from "../../actions/auth";
const Header = () =>{

    const dispatch = useDispatch();

    const doLogout = () => {
        dispatch(logout());
      }
    return(
        <div className="header" >
            <div className="tagLogout" onClick={() => doLogout()}>
                <div className="icon-header">
                    <FontAwesomeIcon icon={faRightFromBracket} />
                </div>
                <div className="nameTagLogout">
                    Đăng xuất
                </div>
            </div>
        </div>
    )
}

export default Header;