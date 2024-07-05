import { Link } from "react-router-dom";
import styled from "styled-components";

const ClickableBlock = styled.div`
  width: 100%;
  height: fit-content;
  background-color: ${(props) => props.color};
  border-radius: 1rem;
  padding: 1.5rem 1.2rem 1rem 1.2rem;
  margin-bottom: 0.9rem;
  box-shadow: 0 0.25rem 0.4rem rgba(0, 0, 0, 0.1);
`;

const AccountHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const AccountTitle = styled.div`
  font-size: 1rem;
  font-weight: bold;
`;

const Balance = styled.div`
  font-size: 1.25rem;
  font-weight: bold;
`;

const ButtonContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  background-color: ${(props) => props.color};
  width: 5rem;
  height: 2.6rem;
  color: white;
  /* padding: 0.7rem 1.2rem; */
  margin-left: auto;
  border: none;
  border-radius: 2rem; // Fully rounded corners
  font-size: 0.9rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  filter: brightness(95%);

  &:hover {
    filter: brightness(90%);
    box-shadow: 0px 0px 0px 1px rgb(0 0 0 / 0.06),
      0px 1px 1px -0.5px rgb(0 0 0 / 0.06), 0px 3px 3px -1.5px rgb(0 0 0 / 0.06),
      0px 6px 6px -3px rgb(0 0 0 / 0.06), 0px 12px 12px -6px rgb(0 0 0 / 0.06),
      0px 24px 24px -12px rgb(0 0 0 / 0.06);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(1px);
    box-shadow: 0px 0px 0px 1px rgb(0 0 0 / 0.06),
      0px 1px 1px -0.5px rgb(0 0 0 / 0.06), 0px 3px 3px -1.5px rgb(0 0 0 / 0.06),
      0px 6px 6px -3px rgb(0 0 0 / 0.06), 0px 12px 12px -6px rgb(0 0 0 / 0.06),
      0px 24px 24px -12px rgb(0 0 0 / 0.06);
  }
`;

// 블록: 홈에 노출될 계좌정보 (계좌명, 이체)
export default function AccountBlock({ accountId, color, title, balance }) {
  return (
    <ClickableBlock color={color}>
      <Link to={`account/${accountId}`}>
        <AccountHeader>
          <AccountTitle>{title}</AccountTitle>
          <Balance>{balance}</Balance>
        </AccountHeader>
        <ButtonContainer>
          <Button
            color={color}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <Link to={"/account/1"}>이체</Link>
          </Button>
        </ButtonContainer>
      </Link>
    </ClickableBlock>
  );
}
