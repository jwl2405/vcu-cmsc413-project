import React from 'react'
import Icon1 from '../../images/authentication.svg'
import Icon2 from '../../images/authentication.svg'
import Icon3 from '../../images/authentication.svg'
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
                    <ServicesH2>Reduce the fear of stolen data</ServicesH2>
                    <ServicesP>We help prevent the stolen passwords</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>Reduce the fear of stolen data</ServicesH2>
                    <ServicesP>We help prevent the stolen passwords</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>Reduce the fear of stolen data</ServicesH2>
                    <ServicesP>We help prevent the stolen passwords</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services