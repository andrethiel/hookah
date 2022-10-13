import {
  Container,
  SimpleGrid,
  Flex,
  Heading,
  Text,
  Box,
  Button,
  Center,
} from "@chakra-ui/react";
import { GrInstagram } from "react-icons/gr";
import back from "./back.jpg";

function App() {
  return (
    <Box
      position={"relative"}
      bgImage={back}
      backgroundRepeat="no-repeat"
      minH={"100vh"}
      bgSize={"cover"}
    >
      <Container
        as={SimpleGrid}
        maxW={"7xl"}
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 8, md: 14 }}
        py={{ base: 20, md: 36 }}
      >
        <Flex flex={1} align={"center"} justify={"center"}></Flex>
        <Flex
          flex={1}
          align={"center"}
          justify={"center"}
          textAlign={"center"}
          direction={"column"}
          spacing={{ base: 8, md: 14 }}
        >
          <Heading
            fontSize={{ base: "6xl", sm: "4xl", md: "8xl" }}
            lineHeight={"110%"}
            color={"white"}
            fontFamily={"League Gothic"}
          >
            PREMIUM <br />
            <Text
              as={"span"}
              color={"white"}
              fontSize={{ base: "6xl", sm: "4xl", md: "8xl" }}
            >
              HOME
              <br />
            </Text>
          </Heading>
          <Text
            as={"span"}
            color={"whiteAlpha.700"}
            fontSize={{ base: "3xl", sm: "4xl", md: "3xl" }}
          >
            Um novo conceito de essências está chegando em Campo Largo
          </Text>
          <Text
            as={"span"}
            color={"whiteAlpha.600"}
            fontSize={{ base: "2xl", sm: "4xl", md: "2xl" }}
            marginBottom={"10"}
          >
            Visite nosso perfil e fique por dentro de todas as novidades
          </Text>
          <Button
            w={"full"}
            maxW={"md"}
            leftIcon={<GrInstagram />}
            _hover={{ bg: "#ea0c5f" }}
            bgGradient="linear(to-r, #002296, #82008f, #c0007a, #ea0c5f, #ff5341, #ff8820, #f6ba00)"
            onClick={() =>
              (window.location.href =
                "https://www.instagram.com/_premium.home/")
            }
          >
            <Center>
              <Text>Visitar</Text>
            </Center>
          </Button>
        </Flex>
      </Container>
    </Box>
  );
}

export default App;
