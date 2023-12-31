import {
  Box,
  Button,
  HStack,
  Image,
  Img,
  Text,
  VStack,
} from "@chakra-ui/react";
import pic from "../icons_assets/Mario and Adrian A.jpg";
import pic2 from "../icons_assets/restaurant chef B.jpg";
import React from "react";

function About() {
  return (
    <HStack
      justifyContent="space-around"
      alignItems={{ base: "center", md: "flex-start" }}
      marginTop="30px"
      padding={{ base: "30px", md: "100px" }}
      gap={{ base: "100px", md: "0.5rem" }}
      paddingTop="20px"
      paddingBottom={{ base: "100px", md: "200px" }}
      maxWidth={"100%"}
      flexDirection={{ base: "column", md: "row" }}
    >
      <Box>
        <VStack gap="100px" alignItems="flex-start">
          <Box>
            <VStack alignItems="flex-start" spacing={70}>
              <Box>
                <Text as="h1" color="primary_yellow.50" fontSize="6xl">
                  Little Lemon
                </Text>
                <Text as="h3" fontSize="lg">
                  Chicago
                </Text>
              </Box>
              <Text as="p" fontSize="md" noOfLines={3}>
                We are family owned mediterranean restaurant,
                <br /> focused on traditional recipes served with a modern twist
              </Text>
            </VStack>
          </Box>
        </VStack>
      </Box>
      <div className="img-container" style={{ position: "relative" }}>
        <Img
          src={pic}
          alt=""
          style={{ width: "250px" }}
          boxSize="sm"
          borderRadius="10px"
          objectFit="cover"
        />
        <Img
          src={pic2}
          alt=""
          style={{
            position: "absolute",
            top: 150,
            right: 200,
            zIndex: 1,
            width: "250px",
          }}
          boxSize="sm"
          borderRadius="10px"
          objectFit="cover"
          display={{ base: "none", md: "inline" }}
        />
      </div>
    </HStack>
  );
}

export default About;
