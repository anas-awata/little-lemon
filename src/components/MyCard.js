import {
  Card,
  CardBody,
  Heading,
  Text,
  CardFooter,
  Stack,
  Image,
  Button,
  HStack,
} from "@chakra-ui/react";
import React from "react";

const MyCard = ({ special }) => {
  return (
    <Card maxW="sm" bg="#f1f1f1" borderRadius={16}>
      <CardBody padding={0}>
        <Image
          src={special.img}
          alt={special.title}
          borderRadius="lg"
          width={"100%"}
          maxHeight={"250px"}
        />
        <Stack mt="6" spacing="3" padding={"20px"}>
          <HStack justifyContent="space-between">
            <Heading size="md">{special.title}</Heading>
            <Text color="primary_yellow.50" fontSize="2xl">
              {special.price}
            </Text>
          </HStack>
          <Text>{special.description}</Text>
        </Stack>
      </CardBody>
      <CardFooter>
        <Button
          variant="outline"
          borderRadius={16}
          colorScheme="primary_yellow"
          color="primary_gray"
        >
          Order a Delivery
        </Button>
      </CardFooter>
    </Card>
  );
};

export default MyCard;
