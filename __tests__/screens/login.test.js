import React from "react";
import { render } from "react-dom";
import MainContainer from "../../components/common/MainContainer";
import Login from "../../components/login/Login";

describe("Login Page Render", () => {
  it("render without crash", () => {
    const loginComponent = (
      <MainContainer>
        <Login />
      </MainContainer>
    )
    render(loginComponent)
  })
})