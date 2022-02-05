import React from 'react';
import cn from 'classnames/bind';
import style from './Greetings.scss';
import cat from '@assets/cat.jpg';

const cx = cn.bind(style);

export const Greetings = () => {
    return <>
    <div className={cx('css_module_ex')}>
        <h1>hi</h1>
        <img src={cat} alt="" />
    </div>

    <div className={style.css_module_ex}>
        <h1>hi</h1>
    </div>
</>
};