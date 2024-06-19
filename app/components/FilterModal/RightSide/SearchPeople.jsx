"use client"
import React from "react";
import {Input} from "@nextui-org/react";
import { SearchIcon } from "../../Icons";

const SearchPeople = () => {
  return (
    <div className="flex justify-center items-center shadow-lg">
      <Input
        label="Search"
        isClearable
        radius="lg"
        classNames={{
          label: "text-black/50 dark:text-black/90",
          input: [
            "text-black/90 dark:text-black/90",
            "placeholder:text-default-700/50 dark:placeholder:text-black/60",
          ],
        }}
        placeholder="Type to search..."
        startContent={
          <SearchIcon className="text-black/50 mb-0.5 dark:text-slate/90 text-slate-400 pointer-events-none flex-shrink-0" />
        }
      />
    </div>
  );
}

export default SearchPeople 