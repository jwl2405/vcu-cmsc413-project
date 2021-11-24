import React from 'react';
import {
    Container,
    Form,
    FormContent,
    FormH1,
    FormWrap,
    Icon,
} from "./DiscoverElements";

const Discover = () => {
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to='/'>KeySafe</Icon>
                    <FormContent>
                        <Form action='#'>
                            <FormH1>Discover Page</FormH1>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    );
};

export default Discover;