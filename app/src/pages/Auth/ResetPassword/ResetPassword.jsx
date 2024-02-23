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
const ResetValidationSchema = object({
    password: string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    repeatPassword: string()
        .oneOf([ref("password"), null], "Passwords must match")
        .required("Repeat password is required"),

});

const ResetPassword = () => {
    return (
        <Center minH='100vh'>
            <Card p="6" borderRadius="1rem" w="456px">


                <Text mt='4' textStyle="h1">Reset Password</Text>
                <Text textStyle="p2" color="black.60" mt="4">
                    Enter your Password
                </Text>
                <Formik
                    initialValues={{


                        passeord: "",
                        repeatPassword: "",


                    }}
                    validationSchema={ResetValidationSchema}

                >
                    {() => (
                        <Form>
                            <Stack mt="10" spacing={6}>
                                <Field name="password">
                                    {({ field, meta }) => (
                                        <FormControl isInvalid={!!(meta.error && meta.touched)}>
                                            <FormLabel htmlFor="password">New Password</FormLabel>
                                            <Input
                                                {...field}
                                                name="password"
                                                type="password"
                                                placeholder="Enter your password...."
                                            />{" "}
                                            <FormErrorMessage>{meta.error}</FormErrorMessage>
                                        </FormControl>
                                    )}
                                </Field>
                                <Field name="repeatPassword">
                                    {({ field, meta }) => (
                                        <FormControl isInvalid={!!(meta.error && meta.touched)}>
                                            <FormLabel htmlFor="repeatPassword">
                                                Repeat New Password
                                            </FormLabel>
                                            <Input
                                                {...field}
                                                name="repeatPassword"
                                                type="password"
                                                placeholder="Enter your repeatPassword...."
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

export default ResetPassword
