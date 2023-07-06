import { render, screen } from "@testing-library/react";
import BookingForm from "./components/BookingForm";
import { fetchAPI } from "./api"; // Assuming fetchAPI is exported from this module

jest.mock("./api"); // This replaces the actual fetchAPI with a mock function

test("BookingForm initializes times correctly", () => {
  const mockTimes = ["10:00", "11:00"];
  fetchAPI.mockReturnValue(mockTimes); // When fetchAPI is called, it will return mockTimes

  render(<BookingForm />);

  // Check if the times returned by fetchAPI are rendered in the component
  mockTimes.forEach((time) => {
    const timeElement = screen.getByText(time);
    expect(timeElement).toBeInTheDocument();
  });
});

jest.mock("./api"); // This replaces the actual fetchAPI with a mock function

test("BookingForm updates times correctly", () => {
  const mockInitialTimes = ["10:00", "11:00   "];
  const mockUpdatedTimes = ["12:00", "13:00"];
  fetchAPI.mockReturnValueOnce(mockInitialTimes); // When fetchAPI is called initially, it will return mockInitialTimes
  fetchAPI.mockReturnValueOnce(mockUpdatedTimes); // When fetchAPI is called after dispatching the action, it will return mockUpdatedTimes

  render(<BookingForm />);

  // Check if the initial times returned by fetchAPI are rendered in the component
  mockInitialTimes.forEach((time) => {
    const timeElement = screen.getByText(time);
    expect(timeElement).toBeInTheDocument();
  });

  // Simulate user interaction that triggers the updateTimes action
  const dateInput = screen.getByLabelText("Select a date");
  fireEvent.change(dateInput, { target: { value: "2022-01-01" } });

  // Check if the updated times returned by fetchAPI are rendered in the component
  mockUpdatedTimes.forEach((time) => {
    const timeElement = screen.getByText(time);
    expect(timeElement).toBeInTheDocument();
  });
});
