import styled from "styled-components";

export const StyledHeader = styled.header`
  @import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300&display=swap");
  font-family: "Quicksand", sans-serif;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  padding-right: 20px;
  height: 5vh;

  span {
    color: rgb(144, 28, 227);
  }
  h1{
    font-weight: 700;
  }
  nav {
    button {
      transition: 0.5s ;
      border-radius: 8px;
    }
    button:hover {
      border: 1px solid rgb(144, 28, 227);
      border-radius: 8px;
      color: rgb(144, 28, 227);
    }
  }
`;
