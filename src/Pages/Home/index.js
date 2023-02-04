import {
  Container,
  SimpleGrid,
  Flex,
  Heading,
  Text,
  Box,
  Button,
  Center,
  Stack,
  Image,
} from "@chakra-ui/react";
import { GrInstagram } from "react-icons/gr";
import { BsShop } from "react-icons/bs";
import back from "../../back.jpg";
import logo from "../../branca-sem-fundo.png";

function Home() {
  return (
    <Box
      position={"relative"}
      bgImage={back}
      backgroundRepeat="no-repeat"
      minH={"100vh"}
      bgSize={"cover"}
    >
      <Container as={SimpleGrid} maxW={"7xl"} columns={{ base: 1, md: 2 }}>
        <Flex flex={1} align={"center"} justify={"center"}></Flex>
        <Flex
          flex={1}
          align={"center"}
          justify={"center"}
          textAlign={"center"}
          direction={"column"}
          spacing={{ base: 8, md: 14 }}
        >
          <Image src={logo} width={"70%"} />
          <Text
            as={"span"}
            color={"whiteAlpha.800"}
            fontSize={{ base: "3xl", sm: "4xl", md: "4xl" }}
          >
            Chegou um novo conceito de essências em Campo Largo
          </Text>
          <Text
            as={"span"}
            color={"whiteAlpha.700"}
            fontSize={{ base: "2xl", sm: "4xl", md: "3xl" }}
            marginBottom={"5"}
          >
            Você vai encontrar as melhores marcas: Tangiers, FML, Haze, Al
            fakher, Fumari
          </Text>
          <Text
            as={"span"}
            color={"whiteAlpha.600"}
            fontSize={{ base: "2xl", sm: "4xl", md: "2xl" }}
            marginBottom={"10"}
          >
            Visite nosso perfil/loja e fique por dentro de todas as novidades
          </Text>
          <Stack
            width={"100%"}
            spacing={3}
            align={"center"}
            justify={"center"}
            textAlign={"center"}
          >
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
            <Button
              w={"full"}
              maxW={"md"}
              leftIcon={<BsShop />}
              onClick={() =>
                (window.location.href = "https://premiumhomehookah.wbuy.com.br/")
              }
            >
              <Center>
                <Text>Loja Online</Text>
              </Center>
            </Button>
          </Stack>
        </Flex>
      </Container>
    </Box>
  );
}

export default Home;
