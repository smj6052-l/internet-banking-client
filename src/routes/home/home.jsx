import { useEffect, useState } from "react";
import AccountBlock from "../../components/account-block";
import * as S from "./styles/home.style";
import axios from "axios";
import { MdAccountBalance } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

// 메인 홈
export default function Home() {
  const [myAccounts, setMyAccounts] = useState([]);
  const [clientName, setClientName] = useState("");

  // GET: 사용자 계좌 목록
  const readMyAccounts = async () => {
    const myAccountsListURL = "api/account";
    await axios
      .get(myAccountsListURL)
      .then((res) => {
        if (res.status === 200) {
          setClientName(res.data.client);
          setMyAccounts(res.data.accounts);
        }
      })
      .catch(() => {
        alert("계좌 정보를 불러오는데 실패했습니다.");
      });
  };

  useEffect(() => {
    readMyAccounts();
  }, []);

  return (
    <S.Container>
      <S.InnerContainer>
        {/* 헤더 */}
        <S.Header>
          <S.HeaderLeft>
            <S.UserName>{clientName}</S.UserName>
          </S.HeaderLeft>
          <S.IconBig>
            {/* 프로필 이미지 */}
            {/* <MdAccountBalance /> */}
          </S.IconBig>
        </S.Header>
        {/* 계좌 목록 */}
        <S.AccountList>
          {myAccounts.map((account, index) => (
            <AccountBlock
              key={index}
              color={account.color}
              accountId={account.account_pk}
              accountNumber={account.account_number}
              name={account.account_name}
              balance={account.account_balance}
            />
            // </Link>
          ))}
        </S.AccountList>
        <S.EmptyBox>
          <S.IconBiger>
            <FaPlus />
          </S.IconBiger>
        </S.EmptyBox>
      </S.InnerContainer>
    </S.Container>
  );
}
