import { useState, useRef } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import * as S from "./styles/login.style";
import { useForm } from "react-hook-form";
import Recaptcha from "../../components/recaptcha";

// 로그인 페이지
export default function Login() {
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  // Google captcha
  const [captchaToken, setCaptchaToken] = useState(null);

  // POST: 로그인
  const onSubmit = async (data) => {
    if (!captchaToken) {
      alert("봇 인증 검사를 진행해주세요.");
      return;
    }

    const response = await axios.post("api/login/verify-captcha", {
      token: captchaToken,
    });
    console.log("🚀 ~ onSubmit ~ response:", response);
    if (response.status === 200) {
      console.log("🚀 ~ onSubmit ~ response:", response);
      // POST: 로그인
      const loginPostURL = `api/login`;
      axios
        ?.post(loginPostURL, data, {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        })
        ?.then((res) => {
          if (res.status === 200) {
            navigate("/home");
            alert(res.data?.message);
          }
        })
        .catch((error) => {
          if (error.response) {
            switch (error.response.status) {
              // 로그인 실패
              case 400:
                alert(error.response.data.message);
                break;
              // 로그인 시도 횟수 초과
              case 403:
                alert(error.response.data.message);
                break;
              // 서버 에러
              case 500:
                alert(error.response.data.message);
                break;
              default:
                alert("에러가 발생했습니다. 관리자에게 문의해주세요.");
                break;
            }
            location.reload();
          } else {
            alert("에러가 발생했습니다. 관리자에게 문의해주세요.");
          }
        });
    }
  };

  const handleCaptchaVerify = (token) => {
    setCaptchaToken(token);
  };

  return (
    <S.FormWrapper
      onClick={(e) => e.stopPropagation()}
      onSubmit={handleSubmit(onSubmit)}
    >
      <S.FormContent>
        <S.Header>
          <S.Title>BANK!T</S.Title>
        </S.Header>
        <S.Input
          type="text"
          placeholder="아이디"
          {...register("client_id", { required: true, maxLength: 20 })}
        />
        <S.Input
          type="password"
          placeholder="비밀번호"
          {...register("client_pw", { required: true, maxLength: 20 })}
        />
        <S.LoginButton>로그인</S.LoginButton>
        <Recaptcha onVerify={handleCaptchaVerify} />
        <S.SignupHeader>아직 계정이 없으신가요?</S.SignupHeader>
        <S.SignupButton>
          <Link to={"/signup"}>회원가입하기 &rarr;</Link>
        </S.SignupButton>
      </S.FormContent>
    </S.FormWrapper>
  );
}
