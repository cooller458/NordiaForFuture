import React from 'react';
import '../App.css';
import PersonCard from './PersonCard';

import './TeamSection.css';

function TeamSection() {
  return (
    <div className='hero-container'>
      <img
        className='cards__item__img'
        src={'images/teamBg.png'}
      />
      <img
        className='item__img'
        src={'images/teamImage.png'}
      />
      <link href="https://fonts.googleapis.com/css2?family=Saira+Stencil+One&display=swap" rel="stylesheet"></link>
      <div style={{ position: 'absolute', justifyContent: 'center', alignSelf: 'flex-start', flex: 1 ,top:120}}>
        <div>
          <p style={{ color: '#000' }} className='headText'>Team And Community
          </p>
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100&family=Saira+Stencil+One&display=swap" rel="stylesheet" />
          <p className='subText'>
            MAIN TEAM</p>
          <p className='subText2'>As of the date of this writing, our team consists more than 30 people who are working actively for Nordia For Future to achieve our goals.
            Our team consists of expert artists, web3 developers, social consists of media managers and Token experts who are experts in their fields.
            They do their best to create the future and represent it to you.
            The purpose of our team are to gather under one roof and to make future-oriented constructions. So we can experience all the process with all Nordia members.
            We will build the future together. Nordia needs every single member.<h4>We will experience it together with those who believe in this project.</h4> </p>
        </div>
        <div className='container'>
          <div className="card-First">
            <div className='padding'>
              <PersonCard title={'FOUNDER'} personName={'HAKANHADID'} image={'images/liderh.png'} />
            </div>
            <div className='padding'>
              <PersonCard title={'FOUNDER'} personName={'HAKANHADID'} image={'images/22.png'} />
            </div>
          </div>
          <div className="card-Second">
            <div className='padding'>
              <PersonCard title={'FOUNDER'} personName={'HAKANHADID'} image={'images/7.png'} />
            </div>
            <div className='padding'>
              <PersonCard title={'FOUNDER'} personName={'HAKANHADID'} image={'images/15.png'} />
            </div>
            <div className='padding'>
              <PersonCard title={'FOUNDER'} personName={'HAKANHADID'} image={'images/6.png'} />
            </div>
            <div className='padding'>
              <PersonCard title={'FOUNDER'} personName={'HAKANHADID'} image={'images/8.png'} />
            </div>
            <div className='padding'>
              <PersonCard title={'FOUNDER'} personName={'HAKANHADID'} image={'images/24.png'} />
            </div>

          </div>
          <div className="card-Second">
            <div className='padding'>
              <PersonCard title={'FOUNDER'} personName={'HAKANHADID'} image={'images/14.png'} />
            </div>
            <div className='padding'>
              <PersonCard title={'FOUNDER'} personName={'HAKANHADID'} image={'images/23.png'} />
            </div>
            <div className='padding'>
              <PersonCard title={'FOUNDER'} personName={'HAKANHADID'} image={'images/5.png'} />
            </div>
            <div className='padding'>
              <PersonCard title={'FOUNDER'} personName={'HAKANHADID'} image={'images/16.png'} />
            </div>
            <div className='padding'>
              <PersonCard title={'FOUNDER'} personName={'HAKANHADID'} image={'images/13.png'} />
            </div>
          </div>
          <div className="card-Second">
            <div className='padding'>
              <PersonCard title={'FOUNDER'} personName={'HAKANHADID'} image={'images/21.png'} />
            </div>
            <div className='padding'>
              <PersonCard title={'FOUNDER'} personName={'HAKANHADID'} image={'images/29.png'} />
            </div>
            <div className='padding'>
              <PersonCard title={'FOUNDER'} personName={'HAKANHADID'} image={'images/29.png'} />
            </div>
            <div className='padding'>
              <PersonCard title={'FOUNDER'} personName={'HAKANHADID'} image={'images/6.png'} />
            </div>

          </div>
          <p className='subText'>
            WHO ARE WE , WILL WE MEET?</p>
          <p className='subText2'>We chose not to reveal our identities for now.The important thing here is not ones who manage, the important thing is the project, it is Nordia itself.
            But this doesn't mean we can’t meet. Maybe we can do an event.
            It's not our current plan, but we have it in mind. </p>

        </div>

      </div>



    </div>
  );
}

export default TeamSection;
