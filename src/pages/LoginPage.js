import React from 'react';
import Login from '../components/login/Login';
import { useNavigate, useParams } from 'react-router-dom';

const LoginPage = () => {
  console.log(useParams());

  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        뒤로가기
      </button>
      <button
        onClick={() => {
          navigate('/');
        }}
      >
        홈으로 가기
      </button>
      <Login />
    </div>
  );
};

export default LoginPage;
