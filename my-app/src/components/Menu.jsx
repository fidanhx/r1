import React from 'react';
import styles from './Menu.module.css';
import profile from './profile.jpg'

const Menu = () => {
  return (
    <div className={styles.main}>
        <div className={styles.gray}>
          <img src={profile} alt='profile' />
          <div>
          <ul className={styles.contact}>
            <li>ƏLAQƏ</li>
            <li><hr  className={styles.hr1}/></li>
            <li>050 555 55 55</li>
            <li>aylinrajabli@gmail.com</li>
            <li>Bakı, Azərbaycan</li>
            <li>linkedin.com/in/aylin-rajabli-7316b8228</li>
          </ul>
          </div>
          <div>
          <ul className={styles.edu}>
            <li>TƏHSİL MƏLUMATLARI</li>
            <li><hr className={styles.hr2}/></li>
            <li>2021-2025</li>
            <li>İnformasiya Təhlükəsizliyi</li>
            <li>AZƏRBAYCAN DÖVLƏT NEFT VƏ SƏNAYE UNİVERSİTETİ</li>
          </ul>
          </div>
        </div>
        <div className={styles.middle}>
        <p className={styles.name}>Aylin Rəcəbli</p>
        <ul className={styles.abNN}>
        <li className={styles.abN}>Xülasə</li>
        <hr className={styles.hr5}/>
        <li className={styles.about}>Mən rəqəmsal təcrübələr yaratmaq üçün dərin 
        maraqla idarə olunan bir veb tərtibatçısıyam. Mənim veb-inkişafına 
        səyahətim ideyaları interaktiv, funksional veb-saytlara çevirmək 
        həvəsindən qaynaqlandı.</li>
        </ul>
        <ul className={styles.skills}>
          <li>Bacarıqlar</li>
          <li><hr className={styles.hr3}/></li>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>ReactJS</li>
          <li>MySQL</li>
        </ul>
        <ul className={styles.skill2}>
          <li><hr className={styles.hr4}/></li>
          <li>Komandada işləmək</li>
          <li>Tapşırıqların idarə edilməsi</li>
          <li>Problemlərin həll edilməsi</li>
          <li>Zamanın idarə edilməsi</li>
        </ul>
        </div>
    </div>

  )
}

export default Menu;
