import { Box, Center, Heading } from "@chakra-ui/react";
import React from "react";

function SuccessfullBooking() {
  return (
    <Box>
      <Heading>
        <Center padding={200} color="green.600">
          Successfull Booking
        </Center>
      </Heading>
    </Box>
  );
}

export default SuccessfullBooking;
