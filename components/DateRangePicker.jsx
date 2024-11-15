// components/DatePicker/DateRangePicker.js
import useRecurrenceStore from "../state/recurrenceStore";

const DateRangePicker = () => {
  const { startDate, endDate, updateStartDate, updateEndDate } =
    useRecurrenceStore();

  return (
    <div className="mb-4">
      <label className="block text-black">Start Date:</label>
      <input
        type="date"
        value={startDate || ""}
        onChange={(e) => updateStartDate(e.target.value)}
        className="border p-2 rounded w-full mb-2 text-gray-700"
      />
      <label className="block text-black">End Date (optional):</label>
      <input
        type="date"
        value={endDate || ""}
        onChange={(e) => updateEndDate(e.target.value)}
        className="border p-2 w-full rounded text-gray-700"
      />
    </div>
  );
};

export default DateRangePicker;
