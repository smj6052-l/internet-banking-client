import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import * as S from "./styles/signup.style";

export default function Signup() {
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const [isIdChecked, setIsIdChecked] = useState(false);
  const [idCheckMessage, setIdCheckMessage] = useState("");

  // POST: 사용자 회원가입 정보 입력
  const onSubmit = (data) => {
    if (!isIdChecked) {
      setError("client_id", {
        type: "manual",
        message: "아이디 중복 확인을 해주세요.",
      });
      return;
    }

    const signupPostURL = `/api/signup`;
    axios
      .post(signupPostURL, data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res);
        alert("회원가입 성공");
        navigate("/login");
      })
      .catch(() => {
        alert("회원가입 실패");
      });
  };

  // POST: 아이디 중복 확인
  const checkIdDuplication = (client_id) => {
    axios
      .post(`api/signup/check-id`, { client_id })
      .then((res) => {
        // 사용 가능
        clearErrors("client_id");
        setIdCheckMessage(res.data?.message);
        setIsIdChecked(true);
      })
      .catch((error) => {
        if (error.response) {
          switch (error.response.status) {
            // 아이디 중복
            case 409:
              setError("client_id", {
                type: "manual",
                message: error.response.data.message,
              });
              break;
            // 서버 에러
            case 500:
              setIdCheckMessage(error.response.data.message);
              break;
            default:
              setIdCheckMessage(
                `에러가 발생했습니다. 상태 코드: ${error.response.status}`
              );
              break;
          }
        } else {
          setError("client_id", {
            type: "manual",
            message: "아이디 중복 확인 실패",
          });
          setIdCheckMessage("아이디 중복 확인 실패");
        }
        setIsIdChecked(false);
      });
  };

  return (
    <S.FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <S.FormContent>
        <S.Header>
          <S.Title>회원가입</S.Title>
        </S.Header>
        <S.InputContainer>
          <S.Label>성명</S.Label>
          <S.Input
            type="text"
            placeholder="이름을 입력하세요"
            required
            {...register("client_name", { required: true, maxLength: 20 })}
          />
          <S.Label>대표 사진</S.Label>
          <S.Input type="file" {...register("client_photo")} />
          <S.Label>아이디</S.Label>
          <S.Input
            type="text"
            placeholder="아이디를 입력하세요"
            required
            {...register("client_id", { required: true, maxLength: 20 })}
          />
          <S.IdDuplicationCheck
            onClick={(e) => {
              e.preventDefault();
              const client_id = document.querySelector(
                'input[name="client_id"]'
              ).value;
              checkIdDuplication(client_id);
            }}
          >
            아이디 중복 확인
          </S.IdDuplicationCheck>
          {errors.client_id && (
            <S.ErrorMessage>{errors.client_id.message}</S.ErrorMessage>
          )}
          {idCheckMessage && (
            <S.IdCheckMessage>{idCheckMessage}</S.IdCheckMessage>
          )}
          <S.Label>비밀번호</S.Label>
          <S.Input
            type="password"
            placeholder="비밀번호를 입력하세요."
            required
            {...register("client_pw", { required: true, maxLength: 20 })}
          />
          <S.Label>비밀번호 확인</S.Label>
          <S.Input
            type="password"
            placeholder="비밀번호 확인"
            required
            {...register("client_pw_confirmation", {
              required: true,
              maxLength: 20,
            })}
          />
          <S.Label>이메일</S.Label>
          <S.Input
            type="email"
            placeholder="이메일을 입력하세요."
            required
            {...register("client_email", { required: true, maxLength: 40 })}
          />
          <S.Label>주민등록번호</S.Label>
          <S.Input
            type="text"
            placeholder="주민등록번호를 입력하세요."
            required
            {...register("client_resi", { required: true, maxLength: 20 })}
          />
          <S.Label>주소</S.Label>
          <S.Input
            type="text"
            placeholder="주소를 입력하세요."
            required
            {...register("client_address", { required: true, maxLength: 255 })}
          />
          <S.Label>휴대폰 번호</S.Label>
          <S.Input
            type="text"
            placeholder="휴대폰 번호를 입력하세요."
            required
            {...register("client_phone", { required: true, maxLength: 255 })}
          />
          <S.SubmitButton>완료</S.SubmitButton>
          <S.gotoLogin>이미 계정이 있으신가요?</S.gotoLogin>
          <S.gotoLoginBtn>
            <Link to={"/login"}>&larr; 로그인 하러가기</Link>
          </S.gotoLoginBtn>
        </S.InputContainer>
      </S.FormContent>
    </S.FormWrapper>
  );
}
