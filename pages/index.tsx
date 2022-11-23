import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { Button, Center } from '@chakra-ui/react';

function HomePage() {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return (
      <Center>
        <p>Loading...</p>
      </Center>
    );
  }

  if (status === 'unauthenticated') {
    const cognitoLink = process.env.NEXT_PUBLIC_COGNITO_SIGNUP_URL || '';
 
    return (
      <Center>
        <Link href={cognitoLink} passHref>
          <Button as='a'>Register</Button>
        </Link>
      </Center>
    )
  }

  return (
    <>
      <Center>
        <Link href='/proceed' passHref>
          <Button as='a'>Proceed</Button>
        </Link>
      </Center>
    </>
  );
}

export default HomePage
