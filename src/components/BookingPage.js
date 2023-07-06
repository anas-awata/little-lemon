import React from "react";
import BookingForm from "./BookingForm";
import { Box, Center } from "@chakra-ui/react";

function BookingPage({ availableTimes, dispatch, submitForm }) {
  return (
    <Box>
      <Center>
        <BookingForm
          availableTimes={availableTimes}
          dispatch={dispatch}
          submitForm={submitForm}
        />
      </Center>
    </Box>
  );
}

export default BookingPage;
