import React, { Component } from "react";
import ContactList from "./Component/ContactList";
import Qna from "./Component/Qna";
import Footer from "Components/Footer/Footer";
import logo from "Images/logo_b.svg";
import styled from "styled-components";

export default class Mypage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stage: 1
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  changeStage = num => {
    this.setState({
      stage: num
    });
  };
  render() {
    const obj = {
      1: <ContactList />,
      2: <Qna />
    };

    const { stage } = this.state;

    return (
      <Container>
        <Header>
          <span>Book now</span>
          <img src={logo} alt="로고이미지" />
        </Header>
        <ContactContainer>
          <TitleContainer>
            <Title>
              <h2>CONTACT US</h2>
              <p>
                문의사항이 있을 경우 Q&A 또는 <br />
                전화로 문의하실 수 있습니다.
              </p>
              <ul>
                <li
                  onClick={() => this.changeStage(1)}
                  style={{ color: stage === 1 ? "#a68164" : "#1d212a" }}
                >
                  Contact list
                </li>
                <li
                  onClick={() => this.changeStage(2)}
                  style={{ color: stage === 2 ? "#a68164" : "#1d212a" }}
                >
                  Q&A
                </li>
              </ul>
            </Title>
          </TitleContainer>
          <Contents>{obj[stage]}</Contents>
        </ContactContainer>
        <Footer></Footer>
      </Container>
    );
  }
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`;

const Header = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 50px 20px;
  top: 0;
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #f1eeee;
  z-index: 10;

  span {
    font-family: "PerpetuaStd";
    font-size: 27px;
    cursor: pointer;
  }
  img {
    position: absolute;
    right: 150px;
  }
`;

const ContactContainer = styled.div`
  position: relative;
  width: 100vw;
  display: flex;
  box-sizing: border-box;
`;

const TitleContainer = styled.div`
  width: 50%;
  height: 100%;
`;

const Title = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  top: 78px;
  padding-top: 100px;
  padding-left: 11.25%;
  padding-bottom: 330px;
  box-sizing: border-box;

  h2 {
    font-family: "Gotham-Light";
    font-size: 40px;
    font-weight: 400;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #1d212a;
    margin-bottom: 32px;
  }

  p {
    font-size: 16px;
    line-height: 1.7;
    color: #1d212a;
  }

  ul {
    position: absolute;
    bottom: 0;
    top: 65vh;

    li {
      margin-top: 15px;
      cursor: pointer;
      font-family: "MaisonNeue-Light";
    }
  }
`;

const Contents = styled.div`
  width: 50%;
  border-left: 1px solid #f1eeee;
  overflow-y: scroll;
`;
