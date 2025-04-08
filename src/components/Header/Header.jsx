import {faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.css"
const Header = () =>{
    return(
        <div className="header" >
            <div className="tagLogout">
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