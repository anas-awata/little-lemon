import React from "react";
import { Stack, HStack, VStack, Flex } from "@chakra-ui/react";
import logo from "../icons_assets/Logo .svg";
import { useNavigate } from "react-router-dom";

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

export const Nav = () => {
  const navigate = useNavigate();
  return (
    <nav style={{ paddingTop: "20px" }}>
      <HStack justifyContent="space-around">
        <img
          src={logo}
          alt="logo"
          onClick={() => navigate("/")}
          style={{ cursor: "pointer" }}
        />
        <ul
          style={{
            display: "flex",
            gap: "30px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {links.map((link) => (
            <li style={{ listStyle: "none" }} key={link.name}>
              <a style={{ textDecoration: "none" }} href={link.link}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </HStack>
    </nav>
  );
};

export default Nav;
