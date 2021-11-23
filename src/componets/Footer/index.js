import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import {
    FooterContainer,
    FooterWrap,
    FooterLinkContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialLogo,
    SocialMediaWrap,
    SocialIcons,
    SocialIconLink,
    WebsiteRights
} from "./FooterElements";
import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaTwitter,
    FaYoutube
} from "react-icons/fa";

const toggleHome = () => {
    scroll.scrollToTop()
}

const Footer = () => {
    return(
        <FooterContainer>
            <FooterWrap>
                <FooterLinkContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to='/'>How it works</FooterLink>
                            <FooterLink to='/'>Testimonials</FooterLink>
                            <FooterLink to='/'>Careers</FooterLink>
                            <FooterLink to='/'>Investors</FooterLink>
                            <FooterLink to='/'>Terms of Services</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Contact Us</FooterLinkTitle>
                            <FooterLink to='/'>Contact</FooterLink>
                            <FooterLink to='/'>Support</FooterLink>
                            <FooterLink to='/'>Destination</FooterLink>
                            <FooterLink to='/'>Sponsorships</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Videos</FooterLinkTitle>
                            <FooterLink to='/'>Submit Video</FooterLink>
                            <FooterLink to='/'>Ambassadors</FooterLink>
                            <FooterLink to='/'>Agency</FooterLink>
                            <FooterLink to='/'>Influencer</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                            <FooterLink to='/'>Instagram</FooterLink>
                            <FooterLink to='/'>Facebook</FooterLink>
                            <FooterLink to='/'>Youtube</FooterLink>
                            <FooterLink to='/'>Twitter</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinkContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome()}>KeySafe</SocialLogo>
                        <WebsiteRights>KeySage Ⓒ {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink
                                href='https://www.facebook.com/'
                                target='_blank'
                                aria-label='Facebook'
                            ><FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink
                                href='//www.instagram.com/'
                                target='_blank'
                                aria-label='Instagram'
                            ><FaInstagram /></SocialIconLink>
                            <SocialIconLink
                                href='//www.youtube.com/'
                                target='_blank'
                                aria-label='Youtube'
                            ><FaYoutube /></SocialIconLink>
                            <SocialIconLink
                                href='//www.twitter.com/'
                                target='_blank'
                                aria-label='Twitter'
                            ><FaTwitter /></SocialIconLink>
                            <SocialIconLink
                                href='//www.linkedin.com/'
                                target='_blank'
                                aria-label='Linkedin'
                            ><FaLinkedin /></SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    );
};

export default Footer;