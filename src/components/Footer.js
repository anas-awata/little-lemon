import React from "react";
import logo from "../icons_assets/logo2.jpg";
import { HStack, Img, Text } from "@chakra-ui/react";
import FooterNav from "./FooterNav";

const links = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "",
  },
  {
    name: "Menu",
    link: "",
  },
  {
    name: "Reservations",
    link: "",
  },
  {
    name: "Order Online",
    link: "",
  },
  {
    name: "Login",
    link: "",
  },
];

const links2 = [
  {
    name: "Address",
    link: "",
  },
  {
    name: "Phone number",
    link: "",
  },
  {
    name: "Email",
    link: "",
  },
];

export const Footer = () => {
  return (
    <HStack
      padding={100}
      bg="primary_gray.50"
      justifyContent="space-around"
      alignItems="flex-start"
    >
      <Img src={logo} alt="logo" display={{ base: "none", md: "inline" }} />
      <FooterNav links={links} title={"Navigation Doormat"} />
      <FooterNav links={links2} title={"Contact"} />
      <FooterNav links={links2} title={"Social Media"} />
    </HStack>
  );
};

export default Footer;
