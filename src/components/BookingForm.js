import {
  FormControl,
  FormLabel,
  NumberInputField,
  NumberInput,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Select,
  Input,
  Button,
  Heading,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(2);
  const [occasion, setOccasion] = useState("");

  const handleDateChange = (event) => {
    // Dispatch the state change with the new date
    setDate(event.target.value);
    const myDate = event.target.value;
    const dateObject = new Date(myDate);
    dispatch({
      type: "UPDATE_TIMES",
      payload: { date: dateObject },
    });
  };

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    submitForm(date);
    navigate("/confirmed_booking");
  };

  return (
    <VStack width="100%">
      <Heading padding={30}>Book Now</Heading>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          maxWidth: "200px",
          gap: "20px",
          flexDirection: "column",
          minWidth: "50%",
          alignItems: "flex-start",
          marginBottom: "50px",
        }}
      >
        <FormControl minWidth="100%">
          <FormLabel htmlFor="res-date">Choose date</FormLabel>
          <Input
            type="date"
            id="res-date"
            value={date}
            onChange={handleDateChange}
            isRequired
          />
        </FormControl>
        <FormControl minWidth="100%">
          <FormLabel htmlFor="res-time">Choose time</FormLabel>
          <Select
            placeholder="Choose Time"
            isRequired
            value={time}
            id="res-time"
            onChange={(e) => setTime(e.target.value)}
          >
            {availableTimes.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </Select>
        </FormControl>
        <FormControl minWidth="100%">
          <FormLabel htmlFor="guests">Number of guests</FormLabel>
          <NumberInput
            max={10}
            min={1}
            id="guests"
            value={guests}
            onChange={(valueString) => setGuests(valueString)}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>
        <FormControl minWidth="100%">
          <FormLabel htmlFor="occasion">Occasion</FormLabel>
          <Select
            placeholder="Choose Occasion"
            isRequired
            id="occasion"
            value={occasion}
            onChange={(e) => setOccasion(e.target.value)}
          >
            <option>none</option>
            <option>Birthday</option>
            <option>Anniversary</option>
          </Select>
        </FormControl>
        <Button
          minWidth="100%"
          colorScheme="primary_yellow"
          color="#000"
          type="submit"
          aria-label="On Click"
        >
          Make Your reservation
        </Button>
      </form>
    </VStack>
  );
}

export default BookingForm;
