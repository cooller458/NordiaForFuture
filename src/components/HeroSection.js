import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <img
        className='cards__item__img'
        src={'images/HomeBg.png'}
      />
      <link href="https://fonts.googleapis.com/css2?family=Saira+Stencil+One&display=swap" rel="stylesheet"></link>
      <div style={{ position: 'absolute', maxWidth: 1300 }}>
        <p style={{ color: '#fff' }} className='headTextS'>WELCOME</p>
        <p style={{ color: '#fff' }} className='headTextS'>
          TO THE</p>
        <p style={{ color: '#fff' }} className='headText2'>NORDIA</p>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100&family=Saira+Stencil+One&display=swap" rel="stylesheet">
        </link>
        <p style={{ color: '#fff' }} className="headText3">DISCOVER  DIGITAL  ART  AND  COLLECT  NFTS</p>
        <p style={{ color: '#fff', marginTop: 10 }} className="headText3">LET’S ORBIT         <img
          className='footerItemSocial'
            src={'images/arrowRight.png'}
          /></p>

      </div>

      <div className='footer'>
        <div className='footerItem'>
          <p style={{ color: '#fff', fontSize: 40, }} className="headText3">27K+</p>
          <p style={{ color: '#fff', fontSize: 16 }} className="headText3">TOKEN FIYATI</p>
        </div>
        <div className='line' />
        <div className='footerItem'>
          <p style={{ color: '#fff', fontSize: 40, marginHorizontal: 20 }} className="headText3">876K+</p>
          <p style={{ color: '#fff', fontSize: 16, marginHorizontal: 20 }} className="headText3">NFT SAYISI</p>
        </div>
        <div className='line' />
        <div className='footerItem'>
          <p style={{ color: '#fff', fontSize: 40, marginHorizontal: 20 }} className="headText3">20K+</p>
          <p style={{ color: '#fff', fontSize: 16, marginHorizontal: 20 }} className="headText3">TOPLAM UYE</p>
        </div>
        <div className='line' />
        <div className='footerItemFourth'  >
          <img
            src={'images/Play.png'}
          />
          <p style={{ color: '#fff', fontSize: 16, padding: 10 }} className="headText3">PLAY VIDEO</p>
        </div>
        <div className='line' />
        <div className='footerItem'>
          <img className='footerItemSocial'
            src={'images/FbIcon.png'}
          />
          <img
          className='footerItemSocial'
            src={'images/IgIcon.png'}
          />
          <img
          className='footerItemSocial'
            src={'images/TwtIcon.png'}
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
