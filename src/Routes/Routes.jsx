import { createBrowserRouter } from "react-router";
import MainLayout from "../MainLayout/MainLayout";
import HomePage from "../components/HomePage/HomePage";
import FriendDetails from "../Pages/FriendDetailsPage/FriendDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children:[
      {
        index:true,
        Component:HomePage
      },
      {
        path:'/friend/:id',
        Component:FriendDetails
      }
    ]

  },

]);