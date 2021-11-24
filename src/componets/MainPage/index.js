import React from 'react';
import {
    Container,
    Form,
    FormContent,
    FormH1,
    FormWrap,
    Icon,
} from "./MainPageElements";

const MainPage = () => {
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to='/'>KeySafe</Icon>
                    <FormContent>
                        <Form action='#'>
                            <FormH1>Account Page</FormH1>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    );
};

export default MainPage;