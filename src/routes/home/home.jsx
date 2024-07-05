import React from 'react';
import AccountBlock from '../../components/account-block';
import * as S from './styles/home.style';
import { MdAccountBalance } from "react-icons/md";

// DB에서 받아올 계좌 정보
const accountData = [
  {
    color: '#3aafa9', 
    title: 'NH1934우대통장(저축)',
    balance: '4,661원',
  },
  {
    color: '#f8e9a1', 
    title: '계좌번호 ★',
    balance: '0원',
  },
  {
    color: '#fd7272', 
    title: '스키장 🏂',
    balance: '300000원',
  },
  
  {
    color: '#6a8fe9', 
    title: '모임통장1',
    balance: '200400원',
  },
  {
    color: '#fea47f', 
    title: '모임통장2',
    balance: '0원',
  },
  {
    color: '#3aafa9', 
    title: '모임통장3',
    balance: '0원',
  },
];

// 메인 홈
export default function Home() {
  return (
    <S.Container>
      <S.InnerContainer>
      <S.Header>
        <S.IconBig> <MdAccountBalance /></S.IconBig>
        <S.UserName>서민정님</S.UserName>
        <S.ViewAccount>계좌 목록 보기</S.ViewAccount>
       
      </S.Header>
      <S.AccountList>
        {accountData.map((account, index) => (
          <AccountBlock
            key={index}
            color={account.color}
            title={account.title}
            balance={account.balance}
          />
        ))}
      </S.AccountList>
      </S.InnerContainer>
    </S.Container>
  );
}
