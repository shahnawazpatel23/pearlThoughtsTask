import { create } from "zustand";

const useRecurrenceStore = create((set) => ({
  startDate: null,
  endDate: null,
  recurrenceType: "daily",
  recurrenceInterval: 1,
  daysOfWeek: [],
  nthDayOfMonth: "Sunday", // Default value
  nthWeekOfMonth: 1, // Default value

  updateStartDate: (date) => set({ startDate: date }),
  updateEndDate: (date) => set({ endDate: date }),
  updateRecurrenceType: (type) => set({ recurrenceType: type }),
  updateRecurrenceInterval: (interval) => set({ recurrenceInterval: interval }),
  updateDaysOfWeek: (days) => set({ daysOfWeek: days }),
  updateNthDayOfMonth: (day) => set({ nthDayOfMonth: day }),
  updateNthWeekOfMonth: (week) => set({ nthWeekOfMonth: week }),
}));

export default useRecurrenceStore;
