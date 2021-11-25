import React from 'react';
import {
    Container,
    Form,
    FormContent,
    FormH1,
    FormWrap,
    Icon,
} from "./LogOutElements";
import {FormButton} from "../Signin/SigninElements";

const LogOut = () => {
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to='/'>KeySafe</Icon>
                    <FormContent>
                        <Form action='#'>
                            <FormH1>You have logged out!</FormH1>
                            <FormButton type='submit' to='/'>Continue</FormButton>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    );
};

export default LogOut;