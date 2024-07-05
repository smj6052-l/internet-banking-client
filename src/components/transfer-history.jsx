import styled from 'styled-components';
import React, { useState }  from 'react';
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
`;

const TransactionBalance = styled.div`
  text-align: right;
  font-size: 0.875rem;
  color: #888;
`;

// 입출금 내역 목록
export default function TransferHistory() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
        <Transaction>
          <TransactionDate>07.04</TransactionDate>
          <TransactionDetails>
            <TransactionName>서민정</TransactionName>
            <TransactionMemo>이체</TransactionMemo>
          </TransactionDetails>
          <TransactionDetails>
            <TransactionAmount>0원</TransactionAmount>
            <TransactionBalance>5원</TransactionBalance>
          </TransactionDetails>
        </Transaction>
        <Transaction>
          <TransactionDate>06.29</TransactionDate>
          <TransactionDetails>
            <TransactionName>입출금통장 이자</TransactionName>
            <TransactionMemo>#예금이자</TransactionMemo>
          </TransactionDetails>
          <TransactionDetails>
            <TransactionAmount>0원</TransactionAmount>
            <TransactionBalance>5원</TransactionBalance>
          </TransactionDetails>
        </Transaction>
        
        {/* 추가 거래 내역들 */}
      </TransactionList>
    </Container>
  );
}
