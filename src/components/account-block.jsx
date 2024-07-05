import styled from 'styled-components';

const ClickableBlock  = styled.div`
  background-color: ${(props) => props.color};
  border-radius: 1rem;
  padding: 1.5rem;
  margin-bottom: 0.9rem;
  box-shadow: 0 0.25rem 0.4rem rgba(0, 0, 0, 0.1);
`;

const AccountHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  background-color: #4CAF50; // A pleasant green color
  color: white;
  padding: 0.7rem 1.2rem;
  margin-left:auto;
  border: none;
  border-radius: 2rem; // Fully rounded corners
  font-size: 0.9rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 5px rgba(76, 175, 80, 0.3);
  
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background-color: #45a049;
    box-shadow: 0 4px 8px rgba(69, 160, 73, 0.5);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(1px);
    box-shadow: 0 2px 4px rgba(69, 160, 73, 0.5);
  }

`;

// 블록: 홈에 노출될 계좌정보 (계좌명, 이체)
export default function AccountBlock({ color, title, balance}) {

  const handleClick=()=>{

  };

  return (
    <ClickableBlock  color={color} onClick={handleClick}>
      <AccountHeader>
        <AccountTitle>{title}</AccountTitle>
        <Balance>{balance}</Balance>
      </AccountHeader>
      <ButtonContainer>
        <Button onClick={(e) => e.stopPropagation()}>이체</Button>
      </ButtonContainer>
    </ClickableBlock>
  );
}