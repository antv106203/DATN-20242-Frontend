import DropdownItem from "./DropdownItem";
import Icon from "./Icon";
import Item from "./Item";
import LogoSidebar from "./LogoSidebar";
import LogoSidebarText from "./LogoSidebarText";
import SidebarMain from "./SidebarMain";
import "./Sidebar.css"

let typeClass = 'newpurple';
const Sidebar = () =>{
    return (
        <div>
            <SidebarMain bgColor={typeClass} isCollapsed={false} position='left'>
            <LogoSidebar
                image='https://media2.giphy.com/media/eNAsjO55tPbgaor7ma/source.gif'
                imageName='react logo'/>
            <LogoSidebarText>AT GROUP</LogoSidebarText>
            <DropdownItem
                values={['First', 'Second', 'Third']}
                bgColor={typeClass}>
                Menu
            </DropdownItem>
    
            <Item bgColor={typeClass}>
                <Icon className="fas fa-home"/>
                Home
            </Item>
            <Item bgColor={typeClass}>
                <Icon className="fas fa-info"/>
                About
            </Item>
            <Item bgColor={typeClass}>
                <Icon className="fas fa-sitemap"/>
                My Website
            </Item>
            <Item bgColor={typeClass}>
                <Icon className="far fa-address-book"/>
                Contacts
            </Item>
            <Item bgColor={typeClass}>
                <Icon className="fas fa-rss-square"/>
                Blog
            </Item>
            </SidebarMain>
        </div>
    )

}

export default Sidebar;