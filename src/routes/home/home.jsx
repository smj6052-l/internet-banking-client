import React, { useEffect, useState } from "react";
import AccountBlock from "../../components/account-block";
import * as S from "./styles/home.style";
import axios from "axios";

// DB에서 받아올 계좌 정보
const accountData = [
  {
    accountId: 1,
    color: "#3aafa9",
    title: "NH1934우대통장(저축)",
    balance: "4,661원",
  },
  {
    accountId: 1,
    color: "#f8e9a1",
    title: "계좌번호 ★",
    balance: "0원",
  },
  {
    accountId: 1,
    color: "#fd7272",
    title: "스키장 🏂",
    balance: "300000원",
  },

  {
    accountId: 1,
    color: "#6a8fe9",
    title: "모임통장1",
    balance: "200400원",
  },
  {
    accountId: 1,
    color: "#fea47f",
    title: "모임통장2",
    balance: "0원",
  },
  {
    accountId: 1,
    color: "#3aafa9",
    title: "모임통장3",
    balance: "0원",
  },
];

// 메인 홈
export default function Home() {
  const [myAccounts, setMyAccounts] = useState([]);
  useEffect(() => {
    const readMyAccounts = async () => {
      const myAccountsListURL = "api/account";
      const response = await axios.get(myAccountsListURL);
      console.log("🚀 ~ readMyAccounts ~ response:", response);
      setMyAccounts(response);
    };
    readMyAccounts();
  }, []);

  return (
    <S.Container>
      <S.InnerContainer>
        <S.Header>
          <S.HeaderLeft>
            <S.IconBig>
              {/* 프로필 이미지 */}
              {/* <MdAccountBalance /> */}
            </S.IconBig>
            <S.UserName>서민정님</S.UserName>
          </S.HeaderLeft>
          <S.ViewAccount>내 계좌</S.ViewAccount>
        </S.Header>
        <S.AccountList>
          {accountData.map((account, index) => (
            <AccountBlock
              key={index}
              accountId={account.accountId}
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
