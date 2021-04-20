import Basic from "../views/Basic";
import Progress from "../views/Progress";
import StickyGraphic1 from "../views/StickyGraphic1";
import StickyGraphic2 from "../views/StickyGraphic2";

export default [
  {
    path: "/",
    redirect: "/basic",
  },
  {
    path: "/basic",
    component: Basic,
    meta: {
      title: "Basic",
    },
  },
  {
    path: "/progress",
    component: Progress,
    meta: {
      title: "Progress",
    },
  },
  {
    path: "/sticky-graphic-1",
    component: StickyGraphic1,
    meta: {
      title: "Sticky Graphic 1",
    },
  },
  {
    path: "/sticky-graphic-2",
    component: StickyGraphic2,
    meta: {
      title: "Sticky Graphic 2",
    },
  },
];
