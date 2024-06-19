"use client";
import React from "react";
import { Select, SelectItem } from "@nextui-org/react";

const ScheduledDate = ({ users })=> {
  return (
    <div className="w-full gap-y-2">
      <Select
        items={users}
        label="Select service"
        placeholder="All Services"
        size="lg"
        variant="bordered"
        radius="sm"
        className="w-[100%]"
      >
        {(item) => (
          <SelectItem className="w-[100%]" key={item.id}>
            {item.services}
          </SelectItem>
        )}
      </Select>
    </div>
  );
}

export default ScheduledDate