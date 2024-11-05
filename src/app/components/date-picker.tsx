"use client";

import { format as formatDate, subDays } from "date-fns";
import { useState } from "react";

const DatePicker = () => {
    const today = new Date();
    const oneDayAgo = subDays(today, 1);
    const twoDaysAgo = subDays(today, 2);
    const threeDaysAgo = subDays(today, 3);

    const [selectedDate, setSelectedDate] = useState<string>(
        formatDate(today, "yyyy-MM-dd"),
    );

    const handleDateChange = (date: string) => {
        setSelectedDate(date);
    };

    return (
        <div className="mt-8 flex flex-row items-center justify-center gap-6">
            <DateInput
                date={threeDaysAgo}
                onChange={handleDateChange}
                selectedDate={selectedDate}
            />
            <DateInput
                date={twoDaysAgo}
                onChange={handleDateChange}
                selectedDate={selectedDate}
            />
            <DateInput
                date={oneDayAgo}
                onChange={handleDateChange}
                selectedDate={selectedDate}
            />
            <DateInput
                date={today}
                onChange={handleDateChange}
                selectedDate={selectedDate}
            />
        </div>
    );
};

const DateInput = ({
    date,
    selectedDate,
    onChange,
}: {
    date: Date;
    selectedDate: string;
    onChange: (date: string) => void;
}) => {
    const [dayNumber, weekday] = new Intl.DateTimeFormat("en-US", {
        weekday: "short",
        day: "2-digit",
    })
        .format(date)
        .split(" ");

    const formattedDate = formatDate(date, "yyyy-MM-dd");

    return (
        <div
            className={`${
                selectedDate === formattedDate
                    ? "flex flex-col items-center rounded-full p-2 font-semibold text-gray-700 ring-2 ring-amber-300"
                    : "flex flex-col items-center font-semibold text-gray-700"
            }`}
        >
            <div className="inline-block rounded-full bg-gray-100 px-3 py-2">
                <input
                    type="radio"
                    className="hidden"
                    id={`date-${formattedDate}`}
                    value={formattedDate}
                    checked={selectedDate === formattedDate}
                    onChange={() => onChange(formattedDate)}
                    name="date"
                />
                <label htmlFor={`date-${formattedDate}`}>
                    <span>{dayNumber}</span>
                </label>
            </div>
            <p className="mt-2">{weekday}</p>
        </div>
    );
};

export { DatePicker };
