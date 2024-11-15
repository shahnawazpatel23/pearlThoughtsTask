import { render, screen } from "@testing-library/react";
import CalendarPreview from "../components/CalendarPreview";
import { useRecurrenceStore } from "../state/recurrenceStore";

// Mock the store
jest.mock("../state/recurrenceStore");

describe("CalendarPreview", () => {
  beforeEach(() => {
    // Reset mock state before each test
    useRecurrenceStore.mockReturnValue({
      startDate: "2024-01-01",
      recurrenceType: "weekly",
      recurrenceInterval: 2,
      daysOfWeek: ["Mon", "Wed"],
      nthDayOfMonth: { ordinal: "second", day: "Tuesday" },
    });
  });

  it("should render the preview correctly", () => {
    render(<CalendarPreview />);

    expect(screen.getByText(/Start Date:/)).toHaveTextContent("2024-01-01");
    expect(screen.getByText(/Recurrence:/)).toHaveTextContent(
      "weekly every 2 interval(s)"
    );
    expect(screen.getByText(/Days of the Week:/)).toHaveTextContent("Mon, Wed");
  });

  it("should display nth day of the month if monthly recurrence", () => {
    render(<CalendarPreview />);
    expect(screen.getByText(/Nth Day of the Month:/)).toHaveTextContent(
      "second Tuesday"
    );
  });
});
