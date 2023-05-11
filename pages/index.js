import { Container, FormControl, FormLabel, Heading, Input } from "@chakra-ui/react";

export default function Home() {
  return  (
    <Container maxW="450px" mt={12}>
      <Heading>Contact</Heading>
      <FormControl isRequired>
        <FormLabel>Name</FormLabel>
        <Input type="text" name="name"/>
      </FormControl>
    </Container>
    );
}
