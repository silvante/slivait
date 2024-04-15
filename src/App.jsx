import React from "react";
import {
  Route,
  Router,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Details from "./pages/Details";
import Report from "./pages/Report";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<MainLayout />}>
        <Route index path="/" element={<Home />} />
        <Route index path="category/:c" element={<Categories />} />
        <Route index path="/:name" element={<Details />} />
        <Route index path="/report" element={<Report />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
