import { render, fireEvent, screen } from "@testing-library/react";
import CustomizationControl from "../components/CustomizationControl";
import { useRecurrenceStore } from "../state/recurrenceStore";

// Mock the store
jest.mock("../state/recurrenceStore");

describe("CustomizationControl", () => {
  beforeEach(() => {
    // Reset mock state before each test
    useRecurrenceStore.mockReturnValue({
      recurrenceInterval: 1,
      updateRecurrenceInterval: jest.fn(),
      daysOfWeek: [],
      updateDaysOfWeek: jest.fn(),
    });
  });

  it("should render correctly", () => {
    render(<CustomizationControl />);

    expect(screen.getByLabelText(/Interval:/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Days of the Week:/)).toBeInTheDocument();
  });

  it("should allow selection of days of the week", () => {
    render(<CustomizationControl />);
    const checkbox = screen.getByLabelText(/Mon/);

    fireEvent.click(checkbox);
    expect(checkbox.checked).toBe(true);

    fireEvent.click(checkbox);
    expect(checkbox.checked).toBe(false);
  });
});
