import React from 'react'
import { 
    SidebarContainer, 
    Icon, 
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarRoute,
    SidebarLinkS
} from './SidebarElements'

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onCLick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='/AboutUs'>About</SidebarLink>
                    <SidebarLink to='/Discover'>Discover</SidebarLink>
                    <SidebarLinkS to='/'>Services</SidebarLinkS>
                    <SidebarLink to='/signup'>Sign Up</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to='/signin'>Sign In</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
