import { Button, HStack, VStack, Text, Card } from "@chakra-ui/react";
import React from "react";
import MyCard from "./MyCard";

const specials = [
  {
    id: 1,
    title: "Greek Salad",
    price: "12.99 $",
    description:
      "The famous greek salad of crispy lettuce, peppers, olives, and our chicago style feeta cheese",
    img: "./icons_assets/greek salad.jpg",
  },
  {
    id: 2,
    title: "Bruchetta",
    price: "5.99 $",
    description:
      "Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil",
    img: "./icons_assets/lemon dessert.jpg",
  },
  {
    id: 3,
    title: "Lemon Dessert",
    price: "5.00 $",
    description:
      "This Comes straight from grandma's recipe book, every last ingrediant has been sourced and is as authentic as can be imagined",
    img: "./icons_assets/bruchetta.svg",
  },
];

function Highlights() {
  return (
    <VStack padding={10} spacing={10}>
      <HStack justifyContent="space-around" width="100%">
        <Text as="h1" fontSize="5xl">
          This Weeks Specials
        </Text>
        <Button
          colorScheme="primary_yellow"
          color="primary_gray"
          variant="solid"
          borderRadius={16}
        >
          Online Menu
        </Button>
      </HStack>
      <HStack spacing={10} alignItems={"flex-start"}>
        {specials.map((special) => (
          <MyCard key={special.id} special={special}></MyCard>
        ))}
      </HStack>
    </VStack>
  );
}

export default Highlights;
