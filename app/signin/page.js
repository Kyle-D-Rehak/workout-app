"use client";
import React from "react";
import signIn from "../firebase/auth/signin";
import { useRouter } from "next/navigation";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Text,
} from "@chakra-ui/react";
import NextLink from "next/link";

function Page() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const router = useRouter();

  const handleForm = async (event) => {
    event.preventDefault();

    const { result, error } = await signIn(email, password);

    if (error) {
      return console.log(error);
    }

    // else successful
    console.log(result);
    return router.push("/");
  };

  return (
    <Flex mt="12" justify="center" w="100%">
      <Card maxW="md" align="center">
        <CardHeader p="0" mt="4">
          <Heading>Sign In</Heading>
        </CardHeader>
        <CardBody>
          <form onSubmit={handleForm}>
            <FormControl>
              <FormLabel>
                Email
                <Input
                  onChange={(e) => setEmail(e.target.value)}
                  isRequired={true}
                  errorBorderColor="red"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="example@mail.com"
                  className="text-black"
                />
              </FormLabel>
            </FormControl>
            <FormControl>
              <FormLabel mb="0">
                Password
                <Input
                  onChange={(e) => setPassword(e.target.value)}
                  isRequired
                  type="password"
                  name="password"
                  id="password"
                  placeholder="password"
                  className="text-black"
                  mb="0"
                />
              </FormLabel>
            </FormControl>
            <Text fontSize="sm">
              Don&apos;t have an account?
              <Link pl="1" as={NextLink} href="/signup">
                <Text as="u">Sign up</Text>
              </Link>
            </Text>
            <Button w="100%" mt="4" type="submit">
              Sign In
            </Button>
          </form>
        </CardBody>
      </Card>
    </Flex>
  );
}

export default Page;
