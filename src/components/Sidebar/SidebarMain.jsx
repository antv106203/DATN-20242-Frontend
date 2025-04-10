/* eslint-disable no-unused-vars */
// import "./styles.module.css"
import colors from "./enums/colors"
import { useEffect, useState } from "react";
import Toggler from "./Toggler";
const SidebarMain = ({bgColor, children, isCollapsed, position = 'left', classes}) =>{
    const [isOpen, toggleIsOpen] = useState(isCollapsed);
    const [prevIsCollapseFromParent, setParentCollapse] = useState(!isCollapsed);
    const color = colors[bgColor] || colors['white'];
    const [classCollapsed, setCollapsed] = useState('');

    useEffect(() => {
        const c = isOpen ? ` collapsed ` : '';
        setCollapsed(c);
        if (isCollapsed === prevIsCollapseFromParent) {
            toggleIsOpen(isCollapsed);
            setParentCollapse(!isCollapsed);
        }
    }, [isOpen, isCollapsed]);

    const toggleIsOpenCustom = (val) => {
        isCollapsed = val;
        toggleIsOpen(val);
    };

    return (
        <div className={`container-wrapper ${color} ${classCollapsed} ${classes} pos-${position}`}>
            <Toggler isCollapsed={isOpen} toggleIsOpen={toggleIsOpen}/>
            {
                isOpen ? '' : children
            }
        </div>
    )
}
export default SidebarMain