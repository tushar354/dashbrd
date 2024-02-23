import React from 'react'
import Card from '../../../components/Card'
import { Button, Center, Icon, VStack, Text } from '@chakra-ui/react'
import { MdEmail } from 'react-icons/md'

const RegisterEmailVerify = () => {
    return (
        <Center minH='100vh'>
            <Card>
                <VStack spacing={6}>
                    <Icon as={MdEmail} boxSize="48px" color='p.purple' />
                    <Text textStyle="h4" fontWeight="medium" color="p.black">
                        Email Verification
                    </Text>
                    <Text textAlign='center' textStyle="p2" color="p.black">
                        We have sent you an email verification to . If you didn’t receive it, click the button below.
                    </Text>
                    <Button w='full' variant='outline'>
                        Re-Send Email
                    </Button>
                </VStack>

            </Card>
        </Center>

    )
}

export default RegisterEmailVerify
