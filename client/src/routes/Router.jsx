import { createBrowserRouter } from "react-router";
import AddRestaurant from "../page/AddRestaurant";
import Home from "../page/Home";
import Update from "../page/Update";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/add",
    element: <AddRestaurant />,
  },
  {
    path: "/update/:id",
    element: <Update />,
  },
]);
export default router;
