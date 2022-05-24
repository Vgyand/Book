import React from 'react'
import style from './Footer.module.scss'
import logo from '../../../assets/images/Header/Header.svg'
import vk from '../../../assets/images/Footer/015-vkontakte.svg'
import inst from '../../../assets/images/Footer/005-instagram.svg'
import teleg from '../../../assets/images/Footer/telegram.svg'

const category = ['Drama', 'Detective', 'Comedy', 'Tragedy']
const socials = ['Telegram', 'Vk', 'Instagramm']

const Footer = () => {
    return (
        <div className={style.footer}>
            <div className="container">
                <hr className={style.footer__line} />
                <div className="row">
                    <div className={`${style.footer__item} col-md-3 ${style.footer__logoNsoc}`}>
                        <div className={style.footer__logo}>
                            <img src={logo} alt="" />
                            <p className={style.footer__logo_phone}>+7 ********</p>
                            <p className={style.footer__logo_email}>mail@mail.ru</p>
                        </div>
                        <div className={style.footer__socials}>
                            <img src={vk} alt="" />
                            <img src={inst} alt="" />
                            <img src={teleg} alt="" />
                        </div>
                    </div>
                    <div className={`${style.footer__item} col-md-3`}>
                        <p className={style.footer__item_title}>
                            Category
                        </p>
                        <ul className={style.footer__item_list}>
                            {category.map((item) => (
                                <li>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={`${style.footer__item} col-md-3`}>
                        <p className={style.footer__item_title}>
                            Contacts
                        </p>
                        <ul className={style.footer__item_list}>
                            {socials.map((item) => (
                                <li>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={`${style.footer__item} col-md-3`}>
                        <p className={style.footer__item_title}>
                            Info
                        </p>
                        <ul className={style.footer__item_list}>
                            <li>News</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Footer