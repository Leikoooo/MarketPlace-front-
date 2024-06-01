"use client";

import './Header.scss';
import Link from 'next/link';
import { observer } from 'mobx-react-lite';
import { Logo, DefaultAvatar } from '../../../public/images/imgs'
import authStore from '@/app/(site)/store/UserStore';
import modalAuthStore from '@/app/(site)/store/modalAuth';
import dropsStore from '@/app/(site)/store/dropsStore';
import { useClickOutside } from '@/app/(site)/hooks/useClickOutside';
import { useRef } from 'react';


const Header = observer(() => {
    const menuRef = useRef(null);

    useClickOutside(menuRef, () => dropsStore.setIsProfileActive(false));

    let avatar
    if (authStore?._user?.avatar) {
        avatar = authStore._user?.avatar;
    }
    const logout = () => {
        authStore.setIsAuth(false);
        authStore.setUser({
            'id': null,
            'email': null,
            'name': null,
            'role': null,
            'avatar': null
        });
        dropsStore.setIsProfileActive(false);
        localStorage.removeItem('token');
    }

    return (
        <header className="header">
            <nav className="navigate">
                <Link href="/">
                    <div className="logo">
                        <Logo />
                        <div className="title">
                            <p>FNM</p>
                        </div>
                    </div>
                </Link>
                <div className="searchField">
                    <input type="search" id="search" className="search" placeholder="Search..." />
                </div>
                <div className="links">
                    <div className="products">
                        <Link href={"/Catalog"}>Catalog</Link>
                    </div>
                    <div className="news">
                        <Link href={"/news"}>News</Link>
                    </div>
                    <div className="support">
                        <Link href={"/support"}>Support</Link>
                    </div>
                </div>
                {/* <Socials /> */}
                {authStore._isAuth ? (
                    <div className="authLogin" ref={menuRef}>
                        <button className='avatarbnt' onClick={() => dropsStore.setIsProfileActive(!dropsStore.isProfileActive)}>
                            <div className="avatar">
                                {avatar ? <img src={avatar} alt="avatar" /> : <DefaultAvatar />}
                            </div>
                        </button>
                        <div className={dropsStore.isProfileActive ? 'dropdown active' : 'dropdown'}>
                            <Link className='dropitem' href="/"  onClick={() => dropsStore.setIsProfileActive(false)}>Profile</Link>
                            <Link className='dropitem' href="/settings" onClick={() => dropsStore.setIsProfileActive(false)}>Settings</Link>
                            <Link className='dropitem' href="/balance" onClick={() => dropsStore.setIsProfileActive(false)}>Balance</Link>
                            <Link className='dropitem' href="/alerts" onClick={() => dropsStore.setIsProfileActive(false)}>Alerts</Link>
                            <button className='dropitem' onClick={logout}>Log Out</button>
                        </div>
                    </div>
                ) : (
                    <div className="auth">
                        <button className="Signin" onClick={() => modalAuthStore.setIsActive(true)}>Sign in</button>
                    </div>
                )}
            </nav>
        </header>
    );
});

export default Header;
