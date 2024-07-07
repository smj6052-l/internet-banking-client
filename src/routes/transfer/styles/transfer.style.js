import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: white;
  padding-bottom: var(--btm-navbar-height);
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: pink;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  width: 100%;
  height: 6rem;
  background-color: green;
`;

export const AccountNumber = styled.div`
  width: fit-content;
  height: fit-content;
  background-color: grey;
`;

export const TransferAmount = styled.input`
  text-align: center;
  width: 80%;
  height: 4rem;
  margin: 10rem auto;
  font-size: 2rem;
  border: none;
  border-radius: 4rem;
  outline: none;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  height: 4rem;
  margin: 0.5rem auto;
  background-color: white;
  border-radius: 4rem;
  border: 1px solid grey;
`;

export const Description = styled.span`
  width: 60%;
  padding-left: 1rem;
  margin: auto;
`;

export const TitleToRecieverInput = styled.input`
  width: 40%;
  border: none;
  border-radius: 4rem;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  text-align: right;
`;

export const TitleToMeInput = styled.input`
  width: 40%;
  border: none;
  border-radius: 4rem;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  text-align: right;
`;

export const TransferBtn = styled.button`
  width: 80%;
  height: 3.6rem;
  margin: auto;
  background-color: yellow;
  border-radius: 4rem;
`;
