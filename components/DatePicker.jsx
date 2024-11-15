import CustomizationControls from "./CustomizationControl";
import CalendarPreview from "./CalendarPreview";
import DateRangePicker from "./DateRangePicker";

const DatePicker = () => {
  return (
    <div className="p-4 rounded m-5 shadow-md max-w-lg mx-auto bg-gradient-to-br from-red-100 to-blue-100">
      <h2 className="text-lg font-bold mb-4 text-black text-center">
        Recurring Date Picker
      </h2>
      <DateRangePicker />

      <CustomizationControls />
      <CalendarPreview />
    </div>
  );
};

export default DatePicker;
