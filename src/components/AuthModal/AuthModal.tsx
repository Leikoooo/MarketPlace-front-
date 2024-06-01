"use client";
import './AuthModal.scss';
import modalAuthStore from '@/app/(site)/store/modalAuth';
import UserStore from '@/app/(site)/store/UserStore';
import { observer } from "mobx-react-lite";
import { AuthBack } from '../../../public/images/imgs'
import Link from 'next/link';
import { login, registration } from '@/http/userAPI'
import { useForm } from 'react-hook-form';

const handleModalClose = () => {
  modalAuthStore.setIsActive(false);
  modalAuthStore.setIsLoginWindow(true);
};


export const AuthComp = observer(() => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const click = async (data: any) => {
    try {
      if (!data.email || !data.password) {
        alert('Заполните все поля');
      } else {
        const user = await login(data.email, data.password);
        console.log("login\n" + user);
        UserStore.setIsAuth(true);
        UserStore.setUser(user);
        modalAuthStore.setIsActive(false);
      }
    } catch (err: any) {
      if (err?.response) {
        alert(err.response.data.message);
      }
      else {
        alert(err);
      }
    }
  }

  return (
    <div className={modalAuthStore.isActive ? "modal active" : "modal"} onClick={handleModalClose}>
      <div className="RegisterWindow">
        <div className="modal__overlay" />
        <div className="modal__body" onClick={e => e.stopPropagation()}>
          <div className="AuthModalImg">
            <AuthBack />
          </div>
          <div className="modal__content">
            <div className="modal__header">
              <h2 className="modal__title">{"Sign up"}</h2>
              <button className="modal__close" />
            </div>
            <div className="modal__forms">
              <form className="form" onSubmit={handleSubmit(click)}>
                <div className="form__group">
                  <label className="form__label" htmlFor="email">
                    {"Email address"}
                  </label>
                  <input
                    className="authFormInput"
                    type="text"
                    id="email"
                    required
                    autoComplete='email'
                    placeholder=""
                    {...register('email')}
                  />
                </div>
                <div className="form__group">
                  <label className="form__label" htmlFor="password">
                    {"Password"}
                  </label>
                  <input
                    className="authFormInput"
                    type="password"
                    id="password"
                    autoComplete='current-password'
                    placeholder=""
                    required
                    {...register('password')}
                  />
                </div>
                <div className="checkbox__group1">
                  <div className='rememberCheckbox'>
                    <input type="checkbox" name="radio" id="radio" />
                    <label htmlFor="checkbox">Remember me</label>
                  </div>
                  <Link href="/" className="form__link">
                    {"Forgot password?"}
                  </Link>
                </div>
                <div className="checkbox__group2">
                  <div className="isRegister">
                    <p>
                      {"Don't have an account?"}
                    </p>
                    <button onClick={() => modalAuthStore.setIsLoginWindow(false)} className="form__link" type="button">
                      {"Sign up"}
                    </button>
                  </div>
                  <input className="form__button" type="submit" value={'Login'} />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
})

export const RegComp = observer(() => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const click = async (data: any) => {
    try {
      if (!data.email || !data.password || !data.username || !data.password_confirm) {
        alert('Заполните все поля' + data.email + data.password + data.username + data.password_confirm);
      }
      else if (data.password !== data.password_confirm) {
        alert('Пароли не совпадают');
      }
      else {
        const user = await registration(data.username, data.email, data.password);
        UserStore.setIsAuth(true);
        UserStore.setUser(user);
        modalAuthStore.setIsActive(false)
        console.log(user);
      }
    } catch (err: any) {
      if (err?.response) {
        alert(err.response.data.message);
      }
      else {
        alert(err);
      }
    }
  }
  return (
    <div className={modalAuthStore.isActive ? "modal active" : "modal"} onClick={handleModalClose}>
      <div className="RegisterWindow">
        <div className="modal__overlay" />
        <div className="modal__body" onClick={e => e.stopPropagation()}>
          <div className="AuthModalImg">
            <AuthBack />
          </div>
          <div className="modal__content">
            <div className="modal__header">
              <h2 className="modal__title">{"Sign up"}</h2>
              <button className="modal__close" />
            </div>
            <div className="modal__forms">
              <form className="form" onSubmit={handleSubmit(click)}>
                <div className="form__group">
                  <label className="form__label" htmlFor="Username">
                    {"Username"}
                  </label>
                  <input
                    className="regFormInput"
                    type="text"
                    id="Username"
                    autoComplete='username'
                    placeholder=""
                    required
                    {...register('username')} />
                </div>
                <div className="form__group">
                  <label className="form__label" htmlFor="email">
                    {"Your E-mail"}
                  </label>
                  <input
                    className="regFormInput"
                    type='text'
                    id="email"
                    autoComplete='email'
                    placeholder=""
                    required
                    {...register('email')} />
                </div>
                <div className="form__group_pass">
                  <div className="pass__group">
                    <label className="form__label" htmlFor="password">
                      {"Password"}
                    </label>
                    <input
                      className="pass__input"
                      type="password"
                      id="password"
                      autoComplete='current-password'
                      placeholder=""
                      required
                      {...register('password')} />
                  </div>
                  <div className="pass__group">
                    <label className="form__label" htmlFor="password">
                      {"Confirm"}
                    </label>
                    <input
                      className="pass__input"
                      type="password"
                      id="conf_password"
                      autoComplete='current-password'
                      placeholder=""
                      required
                      {...register('password_confirm')} />
                  </div>
                </div>
                <div className="checkbox__group2">
                  <div className="isRegister">
                    <p>
                      {"Already have an account?"}
                    </p>
                    <button onClick={() => modalAuthStore.setIsLoginWindow(true)} className="form__link" type="button">
                      {"Sign in"}
                    </button>
                  </div>
                  <input className="form__button" type="submit" value={"Sign up"} />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
})

