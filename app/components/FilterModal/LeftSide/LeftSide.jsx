// LeftSide.js
"use client";
import React from "react";
import { Tabs, Tab} from "@nextui-org/react";
import ScheduledDate from "../RightSide/ScheduledDate";
import SettingDateRange from "../RightSide/SettingDateRange";
import SearchPeople from "../RightSide/SearchPeople";
import ServicesProducts from "../RightSide/ServicesProducts";
import { users } from "../../Columns";

const LeftSide = () => {
  return (
    <Tabs aria-label="Options" isVertical="true" size="lg">
      <Tab key="scheduleddate" title="Scheduled Date">
        <>
          <ScheduledDate users={users} />
        </>
        <>
          <SettingDateRange />
        </>
      </Tab>
      <Tab key="people" title="People">
        <>
          <SearchPeople />
        </>
      </Tab>
      <Tab key="services/products" title="Services/Products">
        <>
          <ServicesProducts />
        </>
      </Tab>
    </Tabs>
  );
};

export default LeftSide;
