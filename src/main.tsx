import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Authpage from "./app/pages/authpage/AuthPage.tsx";
import Homepage from "./app/pages/homepage/HomePage.tsx";
import SignUp from "./app/pages/signuppage/SignUpPage.tsx";
import { Provider } from "react-redux";
import { store } from "./app/store/index.ts";

import "./firebase.js";

const router = createBrowserRouter([
  {
    path: "auth",
    element: <Authpage />,
  },
  {
    path: "home",
    element: <Homepage />,
  },
  {
    path: "signup",
    element: <SignUp />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
