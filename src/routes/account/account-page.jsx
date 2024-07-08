// 계좌 페이지
import { useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import TransferHistory from "../../components/transfer-history";
import * as S from "./styles/account-page.style";
import { IoArrowBackOutline } from "react-icons/io5";
import { IoIosSettings } from "react-icons/io";
import DetailModal from "../../components/transfer-detail-modal";

export default function AccountPage() {
  const { accountId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setOpen] = useState(false);

  const accountData = location.state || {};

  // 이체하기 버튼 핸들러
  const handleTransferClick = (e) => {
    e.stopPropagation();
    navigate(`/transfer/${accountId}`);
  };

  // 뒤로 가기 버튼 핸들러
  const handleBackClick = () => {
    navigate('/home');
  };

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
        <S.HeaderButton onClick={handleBackClick}>
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
        <S.ActionButton onClick={handleTransferClick}>이체하기</S.ActionButton>
        <S.ActionButton>가져오기</S.ActionButton>
      </S.ButtonGroup>
      {/* 하단부: 입출금 내역 */}
      <TransferHistory />
    </S.Wrapper>
  );
}
