import React from 'react';
import AccountBlock from '../../components/account-block';
import * as S from './styles/home.style';
import { MdAccountBalance } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { Link } from 'react-router-dom';


// DB에서 받아올 계좌 정보
// DB에서 account를 받아 일반 입출금 / 메인을 나눠야됨
// type을 주어 계좌 구분
const accountData = [
  {
    color: '#3aafa9', 
    account_id:1,
    account_name: 'NH1934우대통장(저축)',
    account_balance: '4,661원',
    account_type:'normal'
  },
  {
    color: '#f8e9a1', 
    account_id:2,
    account_name: '계좌번호 ★',
    account_balance: '0원',
    account_type:'normal'
  },
  {
    color: '#fd7272', 
    account_id:3,
    account_name: '스키장 🏂',
    account_balance: '300000원',
    account_type:'normal'
  },
  
  {
    color: '#6a8fe9', 
    account_id:4,
    account_name: '모임통장1',
    account_balance: '200400원',
    account_type:'joint'
  },
  {
    color: '#fea47f', 
    account_id:5,
    account_name: '모임통장2',
    account_balance: '0원',
    account_type:'joint'
  },
  {
    color: '#3aafa9', 
    account_id:6,
    account_name: '모임통장3',
    account_balance: '0원',
    account_type:'joint'
  },
];

// 메인 홈
export default function Home() {

  // DB에서 계좌 목록 불러오기

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
          // account_pk 이슈
          <Link
            key={account.account_id} to={`/account/${account.account_id}`}>
          <AccountBlock
            color={account.color}
            account_name={account.account_name}
            account_balance={account.account_balance}
            account_type={account.account_type}
          />
          </Link>
        ))}
      </S.AccountList>
      <S.EmptyBox>
      <S.IconBiger><FaPlus /></S.IconBiger>
      </S.EmptyBox>
      </S.InnerContainer>
    </S.Container>
  );
}
