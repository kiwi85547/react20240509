import React from "react";
import {createBrowserRouter, Link, Outlet, RouterProvider} from "react-router-dom";
import {BoardAdd} from "./BoardAdd.jsx";
import {BoardEdit} from "./BoardEdit.jsx";
import {BoardList} from "./BoardList.jsx";

// router 객체
// children 의 path에는 / 붙이면 안됨. 붙일거면 상위 /board까지 모두 붙여야 함

const router = createBrowserRouter([
    {path: "/add", element: <BoardAdd/>},
    {
        path: "/board",
        children: [
            {path: "edit", element: <BoardEdit/>},
            {path: "list", element: <BoardList/>},
        ],
    },
]);

function ClientAdd() {
    return <div>
        <div style={{color: "darkgoldenrod", fontSize: "1.5rem"}}>고객 추가 페이지입니다.</div>
    </div>;
}

function ClientDelete() {
    return <div>
        <div style={{background: "darkred", fontSize: "1.2rem", color: "white"}}>고객 삭제 페이지입니다.</div>
        <div style={{color: "red"}}><Outlet/></div>
    </div>;
}

function Client() {
    return <div>
        <div><a style={{fontSize: "2rem"}} href="/client/add">add</a>
            <Link to={"/client"}>LINK CLIENT</Link>{"     "}
            <Link to={"/client/delete"}>LINK DELETE</Link>{"     "}
            <Link to={"/client/delete/red"}>LINK DELETE RED</Link>{"     "}
            클라이언트<Outlet/> 페이지입니다.<Outlet/></div>
    </div>
}

function Red() {
    return <div> client/delete/red 경로 안에 있는 내용입니다.</div>;
}

const router1 = createBrowserRouter([{
    path: "client",
    element: <Client/>,
    children: [{index: true, element: <div style={{color: "blue"}}>Welcome! It's index router.</div>}, {
        path: "add",
        element: <ClientAdd/>
    }, {
        path: "delete",
        element: <ClientDelete/>,
        children: [{path: "red", element: <Red/>}]
    }]
}]);

function App(props) {
    return <RouterProvider router={router1}/>;
}

export default App;
