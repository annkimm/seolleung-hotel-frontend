import React, { Component } from "react";
import NavBar from "Component/Nav/NavBar";
import LeftArea from "./Component/LeftArea";
import RightArea from "./Component/RightArea";
import Footer from "Components/Footer/Footer";
import styled from "styled-components";
import { address } from "Config/config";

export default class Mypage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
  }

  componentDidMount() {
    this.myPage();
    window.scrollTo(0, 0);
  }
  myPage = async () => {
    fetch(`${address}/users/userinfo`, {
      headers: {
        Authorization: localStorage.getItem("Authorization")
      }
    })
      .then(res => res.json())
      .then(res => {
        this.setState(
          {
            user: res
          },
          () => console.log("ressss", res)
        );
      });
  };
  render() {
    return (
      <>
        <MypageContainer>
          <NavBar />
          <MypageContent>
            <MypageBox>
              <LeftArea user={this.state.user}></LeftArea>
              <RightArea
                userData={this.state.user}
                mypage={this.myPage}
              ></RightArea>
            </MypageBox>
          </MypageContent>
          <Footer></Footer>
        </MypageContainer>
      </>
    );
  }
}

const MypageContainer = styled.div`
  width: 100vw;
`;

const MypageContent = styled.div`
  width: 100%;
  height: 100vh;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MypageBox = styled.div`
margin-top: 100px;
  border: 1px solid #cec2b8;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    height: 720px;
    width: 1100px;
}
`;
