import useRecurrenceStore from "../state/recurrenceStore";

const CalendarPreview = () => {
  const {
    startDate,
    recurrenceType,
    recurrenceInterval,
    daysOfWeek,
    nthDayOfMonth,
    nthWeekOfMonth,
  } = useRecurrenceStore();

  return (
    <div className="mt-6 p-4 border border-gray-300 rounded-lg shadow-sm bg-white">
      <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
        Calendar Preview
      </h3>

      <div className="space-y-3">
        {/* Start Date */}
        <div className="flex justify-between gap-2 text-gray-700">
          <span className="font-medium">Start Date:</span>
          <span>{startDate || "Not set"}</span>
        </div>

        {/* Recurrence Type */}
        <div className="flex justify-between gap-2 text-gray-700">
          <span className="font-medium">Recurrence:</span>
          <span>
            {recurrenceType.charAt(0).toUpperCase() + recurrenceType.slice(1)}
          </span>
        </div>

        {/* Interval */}
        <div className="flex justify-between gap-2 text-gray-700">
          <span className="font-medium">Interval:</span>
          <span>{recurrenceInterval || "Not set"}</span>
        </div>

        {/* Weekly: Days of the Week */}
        {recurrenceType === "weekly" && (
          <div className="flex justify-between gap-2 text-gray-700">
            <span className="font-medium">Days of the Week:</span>
            <span>{daysOfWeek.length ? daysOfWeek.join(", ") : "None"}</span>
          </div>
        )}

        {/* Monthly: Nth Day of the Month */}
        {recurrenceType === "monthly" && (
          <div className="flex justify-between gap-2 text-gray-700">
            <span className="font-medium">Nth Day of the Month:</span>
            <span>
              {nthWeekOfMonth > 0
                ? `${
                    ["First", "Second", "Third", "Fourth", "Last"][
                      nthWeekOfMonth - 1
                    ]
                  } ${nthDayOfMonth}`
                : "Not set"}
            </span>
          </div>
        )}

        {/* Yearly: Future Extension */}
        {recurrenceType === "yearly" && (
          <div className="flex justify-between gap-2 text-gray-700">
            <span className="font-medium">Yearly Recurrence:</span>
            <span>Custom yearly options can be added here.</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default CalendarPreview;
