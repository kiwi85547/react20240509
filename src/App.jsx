import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// 경로에 따라 다른 컴포넌트가 출력
// 경로 앞 /은 생략가능
const router = createBrowserRouter([
  { path: "about", element: <div>about 페이지</div> },
  { path: "/search", element: <div>search 페이지</div> },
  { path: "/home", element: <div>home 페이지</div> },
]);
function App(props) {
  return <RouterProvider router={router} />;
}

export default App;
