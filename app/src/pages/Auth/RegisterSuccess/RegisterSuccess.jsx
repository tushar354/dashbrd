import React from 'react'
import Card from '../../../components/Card'
import { Button, Center, Icon, VStack, Text, Box } from '@chakra-ui/react'
import { MdEmail } from 'react-icons/md'
import { BsPatchCheckFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const RegisterSuccess = () => {
    return (
        <Center minH='100vh'>
            <Card>
                <VStack spacing={6}>
                    <Icon as={BsPatchCheckFill} boxSize="48px" color='p.purple' />
                    <Text textStyle="h4" fontWeight="medium" color="p.black">
                        SuccessFul Registreation
                    </Text>
                    <Text textAlign='center' textStyle="p2" color="p.black">
                        Hurray! You have successfully created your account. Enter the
                        app to explore all it’s features.
                    </Text>
                    <Box w="full">
                        <Link to="/signin">
                            <Button w='full' variant='outline'>
                                Enter The App
                            </Button>
                        </Link>
                    </Box>
                </VStack>

            </Card>
        </Center>

    )
}

export default RegisterSuccess
