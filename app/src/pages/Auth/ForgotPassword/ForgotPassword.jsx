import {
    Center,
    Container,
    FormControl,
    FormLabel,
    Stack,
    Text,
    Input,
    Flex,
    Checkbox,
    Button,
    FormErrorMessage,
    HStack,
    Box,
    useToast,
    Icon,

} from "@chakra-ui/react";
import React from 'react'
import { Link } from 'react-router-dom'
import { object, string, ref } from "yup";
import { Formik, Form, Field } from 'formik'
import Card from '../../../components/Card'
import { AiOutlineArrowLeft } from "react-icons/ai";
const forgotValidationSchema = object({
    email: string().email("Email is invalid").required("Email is required"),

});

const ForgotPassword = () => {
    return (
        <Center minH='100vh'>
            <Card p="6" borderRadius="1rem" w="456px">
                <Link to="/signin">
                    <Icon as={AiOutlineArrowLeft} boxSize='6' />
                </Link>

                <Text mt='4' textStyle="h1">Forgot Password</Text>
                <Text textStyle="p2" color="black.60" mt="4">
                    Enter your details
                </Text>
                <Formik
                    initialValues={{

                        email: "",


                    }}
                    validationSchema={forgotValidationSchema}

                >
                    {() => (
                        <Form>
                            <Stack mt="10" spacing={6}>
                                <Field name="email">
                                    {({ field, meta }) => (
                                        <FormControl isInvalid={!!(meta.error && meta.touched)}>
                                            <FormLabel htmlFor="email">Email</FormLabel>
                                            <Input
                                                {...field}
                                                name="email"
                                                type="email"
                                                placeholder="Enter your email...."
                                            />{" "}
                                            <FormErrorMessage>{meta.error}</FormErrorMessage>
                                        </FormControl>
                                    )}
                                </Field>




                                <Button w="full" type="submit">
                                    Reset Password
                                </Button>


                            </Stack>
                        </Form>
                    )}


                </Formik>

            </Card>
        </Center>

    )
}

export default ForgotPassword
