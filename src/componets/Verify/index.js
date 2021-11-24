import React from 'react';
import {
    Container,
    Form,
    FormContent,
    FormH1,
    FormLabel,
    FormWrap,
    Icon,
} from "./VerifyElements";

const verify = () => {
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to='/'>KeySafe</Icon>
                    <FormContent>
                        <Form action='#'>
                            <FormH1>Account Created!</FormH1>
                            <FormLabel>Please follow the instructions sent to your email address.</FormLabel>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    );
};

export default verify;