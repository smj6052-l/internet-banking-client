import styled from "styled-components";

export const InnerContainer = styled.div`
  position: absolute;
  padding-bottom: var(--btm-navbar-height);
  top: 0%;
  left: 50%;
  transform: translate(-50%, 0);
  display: flex;
  flex-direction: column;
  width: 20em;
  margin-top: 1rem;
  background-color: #ffeb3b;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;

export const HeaderButton = styled.button`
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  padding: 0.5rem;
  
`;

export const AccountName = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;



export const AccountInfo = styled.div`
  text-align: center;
  padding: 1rem;
`;

export const AccountNumber = styled.div`
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

export const AccountBalance = styled.div`
  font-size: 2rem;
  font-weight: bold;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 1rem;
`;

export const ActionButton = styled.button`
  background-color: #000;
  color: #fff;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #333;
  }
`;
