"use client";
import React, { useState } from "react";
import { DatePicker } from "@nextui-org/react";
import { parseDate, getLocalTimeZone } from "@internationalized/date";
import { useDateFormatter } from "@react-aria/i18n";

 const SettingDateRange = () => {
  const [fromDate, setFromDate] = useState(parseDate("2024-04-01"));
  const [toDate, setToDate] = useState(parseDate("2024-04-08"));

  let formatter = useDateFormatter({ dateStyle: "short" });

  return (
    <div>
      <div className="flex flex-col gap-y-2">
        <div>
          <DatePicker
            label="From"
            value={fromDate}
            onChange={setFromDate}
            size="sm"
            radius="none"
            className="w-[100%]"
          />
        </div>
        <div>
          <DatePicker
            label="To"
            value={toDate}
            onChange={setToDate}
            size="sm"
            radius="none"
          />
        </div>
      </div>
    </div>
  );
}

export default SettingDateRange