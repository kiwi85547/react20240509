import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BoardAdd } from "./BoardAdd.jsx";
import { BoardEdit } from "./BoardEdit.jsx";
import { BoardList } from "./BoardList.jsx";

// router 객체
const router = createBrowserRouter([
  { path: "/board/add", element: <BoardAdd /> },
  { path: "/board/edit", element: <BoardEdit /> },
  { path: "/board/list", element: <BoardList /> },
]);

function App(props) {
  return <RouterProvider router={router} />;
}

export default App;
