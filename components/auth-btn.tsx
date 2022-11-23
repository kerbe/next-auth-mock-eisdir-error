import { useSession, signIn, signOut } from "next-auth/react";
import { Button } from '@chakra-ui/react';

export default function AuthButton() {
    const { data: session } = useSession();
    if(session) {
        return (
            <>
                <Button variant="solid" colorScheme="#182868;" size="sm" onClick={() => signOut()}>Sign out</Button>
            </>
        )
    }
    return (
        <>
            <Button variant="solid" colorScheme="#182868;" size="sm" onClick={() => signIn('cognito')}>Sign in</Button>
        </>
    )
}
