
import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import Tours from "../pages/tours/page";
import TourDetail from "../pages/tour-detail/page";
import About from "../pages/about/page";
import Testimonials from "../pages/testimonials/page";
import FAQ from "../pages/faq/page";
import Contact from "../pages/contact/page";
import Privacy from "../pages/privacy/page";
import Terms from "../pages/terms/page";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/tours",
    element: <Tours />,
  },
  {
    path: "/tour/:id",
    element: <TourDetail />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/testimonials",
    element: <Testimonials />,
  },
  {
    path: "/faq",
    element: <FAQ />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/privacy",
    element: <Privacy />,
  },
  {
    path: "/terms",
    element: <Terms />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
