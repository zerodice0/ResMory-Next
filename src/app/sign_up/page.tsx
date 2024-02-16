"use client"

import './sign_up.css'
import { useFormState } from 'react-dom';
import { createUser } from '../actions/create_user';

const Page = () => {
  const initialState = {
    message: ''
  }
  const [state, formAction] = useFormState(createUser, initialState)

  return (
    <div className="signup-container">
      <form className="signup-form" action={formAction}>
        <h1>회원가입</h1>
        <input
          className="email-input"
          type="email"
          placeholder="이메일 주소"
          name="email"
        />
        <input
          className="nickname-input"
          type="text"
          placeholder="닉네임"
          name="nickname"
        />
        <input
          className="password-input"
          type="password"
          placeholder="비밀번호"
          name="password"
        />
        <input
          className="confirm-password-input"
          type="password"
          placeholder="비밀번호 확인"
          name="confirmPassword"
        />
        <p aria-live="polite" className="sr-only">
          {state?.message}
        </p>
        <button className="signup-button">회원가입</button>
      </form>
    </div>
  );
}

export default Page;
