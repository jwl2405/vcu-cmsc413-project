import React from 'react';
import {
    Container,
    Form,
    FormContent,
    FormH1,
    FormWrap,
    Icon,
} from "./AboutUsElements";

const AboutUs = () => {
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to='/'>KeySafe</Icon>
                    <FormContent>
                        <Form action='#'>
                            <FormH1>About Us Page</FormH1>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    );
};

export default AboutUs;