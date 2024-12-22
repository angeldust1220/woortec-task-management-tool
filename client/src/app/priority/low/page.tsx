import React from "react";
import ReusablePriorityPage from "@/app/priority/reusablePriorityPage";
import { Priority } from "@/app/state/api";

const Urgent = () => {
  return <ReusablePriorityPage priority={Priority.Low} />;
};

export default Urgent;