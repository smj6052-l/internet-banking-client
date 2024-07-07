import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
`;
export const InnerContainer = styled.div`
  width: 85%;
  position: absolute;
  top: 5%;
  left: 50%;
  transform: translate(-50%, 0);
  display: flex;
  flex-direction: column;
  padding-bottom: var(--btm-navbar-height);
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

export const HeaderLeft = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;
export const ViewAccount = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const UserName = styled.div`
  background-color: #686868;
  padding: 0.3rem 0.6rem;
  border-radius: 20px;
  color: white;
  line-height: 250%;
  padding: 0 1rem;
`;

export const IconBig = styled.div`
  width: 2.7rem;
  height: 2.7rem;
  background-color: #d3d3d3;
  border-radius: 50%;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AccountList = styled.div`
  display: flex;
  flex-direction: column;
`;
