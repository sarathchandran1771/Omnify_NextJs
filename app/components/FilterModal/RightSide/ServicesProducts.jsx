"use client";

import React from "react";
import { RadioGroup, Radio } from "@nextui-org/react";

export default function ServicesProducts() {
  return (
    <RadioGroup orientation="horizontal">
      <Radio value="buenos-aires">Search By Name</Radio>
      <Radio value="sydney">Search By Tags</Radio>
    </RadioGroup>
  );
}
