import { getAuth } from 'firebase/auth';
import './sign_in.css'

const auth = getAuth();

const Page = () => {
  const login = async (formData: FormData) => {
    "use server"

    const email = formData.get("email");
    const password = formData.get("password");

    console.log(email, password);

  }

  return (
    <div className="login-container">
      <form className="login-form" action={login}>
        <h1>로그인</h1>
        <input
          className="email-input"
          type="email"
          placeholder="이메일 주소"
          name="email"
        />
        <input
          className="password-input"
          type="password"
          placeholder="비밀번호"
          name="password"
        />
        <button className="login-button">로그인</button>
        <div className="forgot-password">
          <a href="#">비밀번호를 잊으셨나요?</a>
        </div>
      </form>
    </div>
  );
}

export default Page;
