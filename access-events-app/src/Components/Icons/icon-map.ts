import { lazy } from "react";

const Calendar = lazy(() => import("./calendar"));
const ArrowDown = lazy(() => import("./arrowDown"));
const ArrowLeft = lazy(() => import("./arrowLeft"));
const Edit = lazy(() => import("./edit"));
const Trash = lazy(() => import("./trash"));
const Circule = lazy(() => import("./circule"));

export default {
  icons: {
    "arrow-down": ArrowDown,
    "arrow-left": ArrowLeft,
    "calendar-icon": Calendar,
    edit: Edit,
    trash: Trash,
    circule: Circule,
  },
};
