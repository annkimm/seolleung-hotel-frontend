# Seolleung-hotel

## 소개

- Wecode 6기 수강생들의 [라한호텔](https://www.lahanhotels.com/) 클론 프로젝트 입니다.
- 기간: 2주 (2020.03.08 ~ 2020.03.22)
- 팀원: 프론트엔드 3명, 백엔드 2명 ([Back-End Repository](https://github.com/wecode-bootcamp-korea/seolleung-hotel-backend))

## 목표

- 실제 Back-End API를 통해 원하는 데이터를 GET, POST하여 원하는 사이트에 구현.
- kakao 로그인, calendar 라이브러리, 동적라우터 구현.
- Styled-Component를 사용하여 스타일 적용.

## 적용 기술

- Front-End: HTML, Styled Component, ReactJS
- Back-End: Python, Django, MySQL, CORS headers, AWS, Docker

## 기능

#### Main

- ref를 사용하여 nav 클릭할 때 해당 component로 이동할 수 있게 구현.
- Instagram section에서는 scroll 이벤트로 animation 구현.

#### Login

- 일반 로그인 구현.
- 소셜로그인(카카오) 구현.
- 아이디 찾기 구현.
- 비밀번호 찾기 구현.

#### Join

- 입력창에 해당하는 유효성 검사하여 내용을 페이지에 출력하여 옳바르게 입력했을 때 가입 구현.
- 유저가 비정상적인 접근을 할 수 없도록 한 컴포넌트로 구현.
- 가입완료했을 경우, 간단하게 정보를 화면에 출력.

#### Reservation
- 방 이름(카테고리)에 따라 표시되는 정보 전환
- 달력 라이브러리(flatpickr)를 사용하여 예약날짜 범위 지정
- 예약지점, 방의 종류, 총 인원수에 따라 예약가능한 방을 표시
- 방의 이름을 클릭 시 방에 대한 상세정보를 볼 수 있도록 함
- 예약을 원하는 방을 클릭 시 클릭된 방을 제외하고는 선택될 수 없
  도록 버튼 비활성화
- 커스텀 스크롤 바 구현
- 예약을 원하는 방 클릭 시 방에 대한 정보(지점, 날짜, 몇박 몇일)가
   종합적으로 표시되도록 구현함
- "Book Now" 버튼을 클릭 시 방에 대한 정보(방 이름, 날짜, 인원수)
  를  API통신 구현
- 카테고리에 따라서 페이지 전환(유동라우팅) 구현

#### Contact

- Q&A section에서 지점/문의유형은 fetch하여 data를 가져옴.
- Q&A 작성이 완료가 되면, 모달창이 생성.

#### Mypage

- 질문 내역은 Contact의 Q&A section에서 가져온 데이터로 구현.
- 해당 Q&A를 누르면 질문 내용이 담긴 모달창이 생성되며, 삭제와 수정이 가능하도록 fetch 함.
- 예약 조회에서는 Reservation 페이지에서 한 예약 내역을 볼 수 있고, 예약 내역을 누르면 예약 내역이 담긴 모달창이 생성, 삭제가 가능하도록 fetch 함.
- 포인트 내역도 Reservation 페이지에서 예약을 하면 포인트가 쌓이고, 포인트 적립 요청을 누르면 이미지와 내용이 fetch를 통해 post 됨.
- 개인 정보 수정 및 비밀번호 변경도 fetch를 통해 수정 가능하게 구현함.

## 데모영상

[![readme.png](./src/Images/readme.png)](https://youtu.be/HULscwbnHyw)
