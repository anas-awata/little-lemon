import "./App.css";
import React, { useReducer } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import BookingPage from "./components/BookingPage";
import Main from "./components/Main";
import { fetchAPI, submitAPI } from "./api";
import SuccessfullBooking from "./components/SuccessfullBooking";

const colors = {
  primary_yellow: {
    50: "#f4ce14",
    100: "#f4ce14",
    200: "#f4ce14",
    300: "#f4ce14",
    400: "#f4ce14",
    500: "#f4ce14",
    600: "#f4ce14",
    700: "#f4ce14",
    800: "#f4ce14",
    900: "#f4ce14",
  },
  primary_gray: {
    50: "#495e57",
    100: "#495e57",
    500: "#495e57",
  },
};

const customTheme = extendTheme({ colors });

function initializeTimes() {
  const today = new Date();
  const times = fetchAPI(today);
  return times;
  // Use 'times' to populate your booking form
}

const updateTimes = (state, action) => {
  // updateTimes function
  switch (action.type) {
    case "UPDATE_TIMES":
      // Update your times based on action.payload.date
      return fetchAPI(action.payload.date);
    default:
      return state;
  }
};

function App() {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
  const submitForm = (date) => {
    if (submitAPI(date)) {
      console.log("confirmedBooking");
    } else console.log("error");
  };
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Main />}></Route>
        <Route
          path="booking"
          element={
            <BookingPage
              availableTimes={availableTimes}
              dispatch={dispatch}
              submitForm={submitForm}
            />
          }
        ></Route>
        <Route
          path="confirmed_booking"
          element={<SuccessfullBooking />}
        ></Route>
      </Route>
    )
  );

  return (
    <>
      <ChakraProvider theme={customTheme}>
        <RouterProvider router={router} />
      </ChakraProvider>
    </>
  );
}

const Root = () => {
  return (
    <>
      <Header></Header>
      <Outlet />
      <Footer></Footer>
    </>
  );
};

export default App;
