import { Box, Button, HStack, Image, Text, VStack } from "@chakra-ui/react";
import pic from "../icons_assets/restauranfood.jpg";
import React from "react";
import { useNavigate } from "react-router-dom";

function Hero_section() {
  const navigate = useNavigate();
  return (
    <HStack
      justifyContent="space-around"
      alignItems="center"
      spacing={{ base: "50px", md: "150px" }}
      bg="primary_gray.50"
      marginTop="30px"
      padding="100px"
      paddingTop="30px"
      flexDirection={{ base: "column", md: "row" }}
    >
      <Box>
        <VStack
          gap={{ base: "50px", md: "100px" }}
          alignItems={{ base: "center", md: "flex-start" }}
        >
          <Box>
            <VStack
              alignItems={{ base: "center", md: "flex-start" }}
              spacing={70}
            >
              <Box>
                <Text as="h1" color="primary_yellow.50" fontSize="6xl">
                  Little Lemon
                </Text>
                <Text as="h3" color="#fff" fontSize="lg">
                  Chicago
                </Text>
              </Box>
              <Text as="p" color="#fff" fontSize="md" noOfLines={3}>
                We are family owned mediterranean restaurant,
                <br /> focused on traditional recipes served with a modern twist
              </Text>
            </VStack>
          </Box>
          <Button
            colorScheme="primary_yellow"
            color="primary_gray"
            variant="solid"
            borderRadius={16}
            onClick={() => navigate("/booking")}
          >
            Reserve a Table
          </Button>
        </VStack>
      </Box>
      <Box>
        <Image
          boxSize={{ base: "xs", md: "sm" }}
          borderRadius="30px"
          objectFit="cover"
          src={pic}
          alt="food"
          maxWidth="none"
        />
      </Box>
    </HStack>
  );
}

export default Hero_section;
