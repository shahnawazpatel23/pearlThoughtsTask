import useRecurrenceStore from "../state/recurrenceStore";

const CustomizationControl = () => {
  const {
    recurrenceType,
    recurrenceInterval,
    daysOfWeek,
    nthDayOfMonth,
    nthWeekOfMonth,
    updateRecurrenceType,
    updateRecurrenceInterval,
    updateDaysOfWeek,
    updateNthDayOfMonth,
    updateNthWeekOfMonth,
  } = useRecurrenceStore();

  const toggleDay = (day) => {
    if (daysOfWeek.includes(day)) {
      updateDaysOfWeek(daysOfWeek.filter((d) => d !== day));
    } else {
      updateDaysOfWeek([...daysOfWeek, day]);
    }
  };

  return (
    <div
      className="mb-6 p-4 border border-gray-300 rounded-lg shadow-md bg-white"
      style={{ width: "100%", maxWidth: "400px" }}
    >
      {/* Recurrence Type */}
      <div className="mb-4">
        <label className="block text-black font-medium">Recurrence Type:</label>
        <select
          value={recurrenceType}
          onChange={(e) => updateRecurrenceType(e.target.value)}
          className="w-full border p-2 rounded text-gray-800"
        >
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="yearly">Yearly</option>
        </select>
      </div>

      {/* Interval */}
      <div className="mb-4">
        <label className="block text-black font-medium">Interval:</label>
        <input
          type="number"
          min="1"
          value={recurrenceInterval}
          onChange={(e) => updateRecurrenceInterval(Number(e.target.value))}
          className="w-full border p-2 rounded text-gray-800"
        />
      </div>

      {/* Weekly - Days of the Week */}
      {recurrenceType === "weekly" && (
        <div className="mb-4">
          <label className="block text-black font-medium">
            Days of the Week:
          </label>
          <div className="grid grid-cols-4 gap-2">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <label
                key={day}
                className="inline-flex items-center text-gray-700"
              >
                <input
                  type="checkbox"
                  checked={daysOfWeek.includes(day)}
                  onChange={() => toggleDay(day)}
                  className="mr-1"
                />
                {day}
              </label>
            ))}
          </div>
        </div>
      )}

      {/* Monthly - Nth Day */}
      {recurrenceType === "monthly" && (
        <div className="mb-4">
          <label className="block text-black font-medium">
            Nth Day of the Month:
          </label>
          <select
            value={`${nthWeekOfMonth}-${nthDayOfMonth}`}
            onChange={(e) => {
              const [week, day] = e.target.value.split("-");
              updateNthWeekOfMonth(Number(week));
              updateNthDayOfMonth(day);
            }}
            className="w-full border p-2 rounded text-gray-800"
          >
            <option value="1-Sunday">First Sunday</option>
            <option value="1-Monday">First Monday</option>
            <option value="1-Tuesday">First Tuesday</option>
            <option value="1-Wednesday">First Wednesday</option>
            <option value="1-Thursday">First Thursday</option>
            <option value="1-Friday">First Friday</option>
            <option value="1-Saturday">First Saturday</option>
            <option value="2-Sunday">Second Sunday</option>
            <option value="2-Monday">Second Monday</option>
            {/* Add additional options as needed */}
          </select>
        </div>
      )}
    </div>
  );
};

export default CustomizationControl;
