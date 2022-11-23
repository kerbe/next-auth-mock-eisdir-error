import { Box, Container, Divider, Flex, HStack, Text } from "@chakra-ui/react";
import React from "react";
import { useSession } from 'next-auth/react';
import AuthButton from '../components/auth-btn';

function MainLayout({ children }: React.PropsWithChildren<{}>) {
    const { data: session } = useSession();
    const currentUser = (session?.user?.email) ? session.user.email : 'Not logged in.';

    return (
        <>
            <Box as='header'>
                <Container as={Flex} maxW="container.2xl" h="full" justify="space-between" align="center">
                    <Text>Header and logo</Text>
                    {currentUser}
                    <HStack as="nav" align="center" gap={4}>
                        <AuthButton />
                    </HStack>
                </Container>
            </Box>

            <Container px={0} py={10} maxW="container.2xl">
            <Box as='main'>
                {children}
            </Box>
            </Container>
            <Divider />
            <Box as='footer'>
                <Container as={Flex} h="full" maxW="container.2xl" centerContent>
                    <Text>Footer text</Text>
                </Container>
            </Box>
        </>
    );
}

export default MainLayout;
