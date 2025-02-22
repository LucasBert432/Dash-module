import { lazy } from "react";

const Calendar = lazy(() => import("./calendar"));
const ArrowDown = lazy(() => import("./arrowDown"));
const Edit = lazy(() => import("./edit"));
const Trash = lazy(() => import("./trash"));

export default {
  icons: {
    "arrow-down": ArrowDown,
    "calendar-icon": Calendar,
    edit: Edit,
    trash: Trash,
  },
};
