import React from 'react'
import Card from '../../../components/Card'
import { Button, Center, Icon, VStack, Text, Box } from '@chakra-ui/react'
import { MdEmail } from 'react-icons/md'
import { BsPatchCheckFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const ResetPasswordSuccess = () => {
    return (
        <Center minH='100vh'>
            <Card>
                <VStack spacing={6}>
                    <Icon as={BsPatchCheckFill} boxSize="48px" color='p.green' />
                    <Text textStyle="h4" fontWeight="medium" color="p.black">
                        Password Reset Done
                    </Text>
                    <Text textAlign='center' textStyle="p2" color="p.black">
                        We have sent you an email verification to . If you didn’t receive it, click the button below.
                    </Text>
                    <Box w="full">
                        <Link to="/signin">
                            <Button w='full'> Signin</Button>
                        </Link>
                    </Box>


                </VStack>

            </Card>
        </Center>

    )
}

export default ResetPasswordSuccess
