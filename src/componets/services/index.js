import React from 'react'
import Icon1 from '../../images/authentication.svg'
import Icon2 from '../../images/password.svg'
import Icon3 from '../../images/safe.svg'
import {
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP
} from "./ServicesElements";

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>Stored passwords are locked away</ServicesH2>
                    <ServicesP>All passwords stored with use will be encrypted </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>Never forget a password again</ServicesH2>
                    <ServicesP>Store all of your passwords in one place</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>Reduce the fear of stolen data</ServicesH2>
                    <ServicesP>We help prevent the stolen passwords by encryption</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services