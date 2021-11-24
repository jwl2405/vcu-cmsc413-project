import React from 'react';
import {
    Container,
    Form,
    FormButton,
    FormContent,
    FormH1,
    FormInput,
    FormLabel,
    FormWrap,
    Icon,
    Text
} from "./SignupElements";
const Signup = () => {
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to='/'>KeySafe</Icon>
                    <FormContent>
                        <Form action='#'>
                            <FormH1>Sign up</FormH1>
                            <FormLabel htmlFor='for'>Enter Full Name</FormLabel>
                            <FormInput type='name' required />
                            <FormLabel htmlFor='for'>Enter Email Address</FormLabel>
                            <FormInput type='email' required />
                            <FormLabel htmlFor='for'>Verify Email Address</FormLabel>
                            <FormInput type='email' required />
                            <FormLabel htmlFor='for'>Enter a password</FormLabel>
                            <FormInput type='password' required />
                            <FormButton type='submit' to='/verify'>Continue</FormButton>
                            <Text>Forgot password?</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    );
};

export default Signup;