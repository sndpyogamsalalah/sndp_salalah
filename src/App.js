import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./app.scss";
import AddMember from "./pages/add-member/AddMember";
import Branches from "./pages/branches/Branches";
import Login from "./pages/login/Login";
import MainLayout from "./layout/main-layout/MainLayout";
import Members from "./pages/members/Members";
import theme from "./material-ui/theme/Theme";
import { ThemeProvider } from "@emotion/react";
import EditMember from "./pages/members/edit-member/EditMember";

export default function App() {
  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="/"
              element={
                <MainLayout>
                  <AddMember />
                </MainLayout>
              }
            />
            <Route
              path="/shakhas"
              element={
                <MainLayout>
                  <Branches />
                </MainLayout>
              }
            />
            <Route
              path="/members"
              element={
                <MainLayout>
                  <Members />
                </MainLayout>
              }
            />
            <Route
              path="/edit-member/:id"
              element={
                <MainLayout>
                  <EditMember />
                </MainLayout>
              }
            />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}
