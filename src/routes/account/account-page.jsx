// 계좌 페이지
import { useState } from "react";
import { useParams, useLocation} from "react-router-dom";
import TransferHistory from "../../components/transfer-history";
import * as S from "./styles/account-page.style";
import { IoArrowBackOutline } from "react-icons/io5";
import { IoIosSettings } from "react-icons/io";
import DetailModal from "../../components/transfer-detail-modal";

export default function AccountPage() {
  const { accountId } = useParams();
  const location = useLocation();
  const [isOpen, setOpen] = useState(false);

  const accountData = location.state || {};

  // //임시  데이터
  // const accountData = {
  //   account_name: "NH1934",
  //   account_balance: "4,661원",
  //   account_type: "normal",
  //   account_number: "3333-09-5576906",
  // };

  return (
    <S.Wrapper>
      {/* 상단부: 계좌 정보 */}
      <S.Header>
        <S.HeaderButton>
          <IoArrowBackOutline />
        </S.HeaderButton>
        {/* 계좌명 */}
        <S.AccountName>
          {accountId} {accountData.name}
        </S.AccountName>
        <S.HeaderButton>
          <IoIosSettings />
        </S.HeaderButton>
      </S.Header>
      <S.AccountInfo>
        {/* 계좌 번호 */}
        <S.AccountNumber>{accountData.accountNumber}</S.AccountNumber>
        {/* 계좌 잔액 */}
        <S.AccountBalance>{accountData.balance}</S.AccountBalance>
      </S.AccountInfo>
      <S.ButtonGroup>
        <S.ActionButton>이체하기</S.ActionButton>
        <S.ActionButton>가져오기</S.ActionButton>
      </S.ButtonGroup>
      {/* 하단부: 입출금 내역 */}
      <TransferHistory />
    </S.Wrapper>
  );
}
