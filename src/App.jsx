import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BoardAdd } from "./BoardAdd.jsx";
import { BoardEdit } from "./BoardEdit.jsx";
import { BoardList } from "./BoardList.jsx";

// router 객체
// children 의 path에는 / 붙이면 안됨. 붙일거면 상위 /board까지 모두 붙여야 함
const router = createBrowserRouter([
  { path: "/add", element: <BoardAdd /> },
  {
    path: "/board",
    children: [
      { path: "edit", element: <BoardEdit /> },
      { path: "list", element: <BoardList /> },
    ],
  },
]);

function App(props) {
  return <RouterProvider router={router} />;
}

export default App;
