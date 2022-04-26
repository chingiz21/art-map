import React, { useContext } from 'react';
import './Form.css';
import { login, registration } from '../../../../http/userApi';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { LOGIN_ROUTE } from '../../../../utils/consts';
import { observer } from 'mobx-react-lite';
import { Context } from '../../../../index';

const Form: React.FC = observer(() => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const location = useLocation();
  const navigate = useNavigate();
  const userState = useContext(Context);
  const isLogin = location.pathname == LOGIN_ROUTE;

  const signIn = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    if (isLogin) {
      const data = await login(email, password);
      userState?.user?.setUser(data);
      navigate('/', { replace: true });
      return;
    }
    
    const data = await registration(email, username, password);
  }

  return (
    <div className='form__wrapper'>
        <h1>{isLogin? 'Вход' : 'Регистрация'}</h1>
        <form className='auth_form'>
            <input id='email' type="text" placeholder='Введите email' onChange={e => setEmail(e.target.value)} />
            {isLogin ? null : <input id='username' type="text" placeholder='Введите имя пользователя' onChange={e => setUsername(e.target.value)} />}
            <input id='password' type="password" placeholder='Введите пароль' onChange={e => setPassword(e.target.value)} />
            <button className='btn btn-login' onClick={e => signIn(e)}>{isLogin ? 'Войти' : 'Создать аккаунт'}</button>
        </form>
        <div className="links">
            <a href={isLogin ? '/auth' : '/login'} >{isLogin ? 'Нет аккаунта?' : 'Есть аккаунт?'}</a>
            <span> / </span>
            <a href="#">Забыли пароль?</a>
        </div>
    </div>
  )
}
)

export default Form