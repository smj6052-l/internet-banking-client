import styled from 'styled-components';
import React, { useState }  from 'react';
import DetailModal from './transfer-detail-modal';
import { IoSearchCircleOutline } from "react-icons/io5";


const Container = styled.div`
  width: 100%;
  padding: 1rem;
  background-color: white;
  padding-bottom: 100%;
`;

const SearchHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  `;

const SearchButton = styled.button`
  padding: initial;
  font-size: 2rem;
  cursor: pointer;
`;

const FilterButton = styled.button`
  background: none;
  border: none;
  font-size: 1rem;
  cursor: pointer;
`;

const FilterMenu = styled.div`
  position: absolute;
  background: #fff;
  border: 1px solid #ddd;
  padding: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const MenuItem = styled.div`
  padding: 0.5rem 0;
`;

const TransactionList = styled.div`
  display: flex;
  flex-direction: column;
`;

const Transaction = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 1px solid #ddd;
`;

const TransactionDate = styled.div`
  width: 10%;
  font-size: 1rem;
  margin-right:2rem;
`;

const TransactionDetails = styled.div`
  width: 60%;
`;

const TransactionName = styled.div`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom:0.5rem;
`;

const TransactionMemo = styled.div`
  font-size: 0.875rem;
  color: #888;
`;

const TransactionAmount = styled.div`
  text-align: right;
  font-size: 1rem;
  font-weight: bold;
  margin-bottom:0.5rem;
  color: ${props => props.type === '출금' ? '#00A5FF' : 'initial'};
`;

const TransactionBalance = styled.div`
  text-align: right;
  font-size: 0.875rem;
  color: #888;
`;

const DepositColor=styled.div`
`;

// 입출금 내역 목록
export default function TransferHistory() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // DB에서 거래내역 가져옴
  const [transactions, setTransactions] = useState([]);
  // 모달
  const [selectedTransaction, setSelectedTransaction] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const openModal = (transaction) => {
    setSelectedTransaction(transaction);
  };

  const closeModal = () => {
    setSelectedTransaction(null);
  };

  // 임시 데이터
  const txData = [
    {
      transaction_pk: 1,
      transaction_date: '07.04',
      transaction_name: '홍길동',
      transaction_description: '정산',
      transaction_amount: '10000',
      transaction_balance: '15000',
      transaction_type:"이체"
    },
    {
      transaction_pk: 2,
      transaction_date: '06.29',
      transaction_name: '미미네 떡볶이',
      transaction_description: '떡볶이 고구마튀김',
      transaction_amount: '-5000',
      transaction_balance: '5000',
      transaction_type:"출금"
    },
    // 추가 거래 내역들...
  ];

  return (
    <Container>
      <SearchHeader>
        <SearchButton><IoSearchCircleOutline /></SearchButton>
        <FilterButton onClick={toggleMenu}>기간 ▼</FilterButton>
        {isMenuOpen && (
          <FilterMenu>
            <MenuItem>조회 기간</MenuItem>
            <MenuItem>유형 선택</MenuItem>
          </FilterMenu>
        )}
        </SearchHeader>
      
        <TransactionList>
        {txData.map(transaction => (
          <Transaction key={transaction.transaction_pk} onClick={() => openModal(transaction)}>
            <TransactionDate>{transaction.transaction_date}</TransactionDate>
            <TransactionDetails>
              <TransactionName>{transaction.transaction_name}</TransactionName>
              <TransactionMemo>{transaction.transaction_description}</TransactionMemo>
            </TransactionDetails>
            <TransactionDetails>
              <TransactionAmount type={transaction.transaction_type}>{transaction.transaction_amount}원</TransactionAmount>
              <TransactionBalance>{transaction.transaction_balance}원</TransactionBalance>
            </TransactionDetails>
          </Transaction>
        ))}
      </TransactionList>

      {selectedTransaction && (
        <DetailModal
          isOpen={!!selectedTransaction}
          onRequestClose={closeModal}
          transaction={selectedTransaction}
        />
      )}

    </Container>
  );
}
