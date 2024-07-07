import * as S from "./styles/transfer.style";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

// 입/출금 페이지
export default function Transfer() {
  const options = ["one", "two", "three"];
  const defaultOption = options[0];
  return (
    <>
      <S.Wrapper>
        <S.Container>
          <S.Header>
            <S.AccountNumber></S.AccountNumber>
          </S.Header>
          <S.TransferAmount placeholder="보낼 금액"></S.TransferAmount>
          {/* 보내는 계좌 */}
          <Dropdown
            options={options}
            // onChange={this._onSelect}
            value={defaultOption}
            placeholder="Select an option"
          />
          {/* 표기란 */}
          <S.TitleContainer>
            <S.Description>받는 분에게 표기</S.Description>
            <S.TitleToRecieverInput></S.TitleToRecieverInput>
          </S.TitleContainer>
          <S.TitleContainer>
            <S.Description>나에게 표기</S.Description>
            <S.TitleToMeInput></S.TitleToMeInput>
          </S.TitleContainer>
          {/* 완료 버튼 */}
          <S.TransferBtn>이체하기</S.TransferBtn>
        </S.Container>
      </S.Wrapper>
    </>
  );
}
