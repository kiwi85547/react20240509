import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

function SpringBoot() {
  return (
    <div>
      <div style={{ padding: "10px", background: "darkcyan" }}>상단 Navbar</div>
      <div style={{ margin: "10px" }}>
        <Outlet />
      </div>
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "spring",
    element: <SpringBoot />,
    children: [
      { path: "api", element: <div>api page</div> },
      {
        path: "doc",
        element: <div>doc page</div>,
      },
      { path: "learn", element: <div>learn page</div> },
    ],
  },
]);
function App(props) {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
