import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from "./components/Home/Home.jsx";
import Posts from "./components/Posts/Posts.jsx";
import User from "./components/Users/Users.jsx";
import Comments from "./components/Comments/Comments.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Users from "./components/Users/Users.jsx";
import UserDetails from "./components/UserDetails/UserDetails.jsx";
import PostDetails from "./components/Posts/postDetails.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,
        children: [
            {
                path: "/posts",
                loader: () => fetch(`https://jsonplaceholder.typicode.com/posts`),
                element: <Posts></Posts>,
            },
            {
              path: "/post/:id",
              loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`),
              element: <PostDetails></PostDetails>
            },
            {
                path: "/users",
                loader: () =>
                    fetch("https://jsonplaceholder.typicode.com/users"),
                element: <Users></Users>,
            },
            {
              path: "/user/:id",
              loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`),
              element: <UserDetails></UserDetails>
            },
            {
                path: "/comments",
                element: <Comments></Comments>,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>
);
