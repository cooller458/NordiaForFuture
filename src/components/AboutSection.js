import React from 'react';
import '../App.css';
import PersonCard from './PersonCard';

import './AboutSection.css';

function TeamSection() {
  return (
    <div className='hero-container'>
      <img
        className='cards__item__img'
        src={'images/aboutbg.png'}
      />
      <img
        className='item__img2'
        src={'images/aboutbody.png'}
      />
      <link href="https://fonts.googleapis.com/css2?family=Saira+Stencil+One&display=swap" rel="stylesheet"></link>
      <div style={{ position: 'absolute', justifyContent: 'center', alignSelf: 'flex-end', flex: 1, top: 10, margin: 200 }}>
        <div>
          <p style={{ color: '#000' }} className='headText'>Mission and Nordia's Future

          </p>
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100&family=Saira+Stencil+One&display=swap" rel="stylesheet" />
     
          <p className='subText2'>Building a stable future. Our goal is
            to create a Web3 brand and ecosystem that is accepted by our members or everyone by creating a chain of DeFi, Nordia NFTs and P2E. We are taking sure steps along this path to provide our members with benefits due to their support. Our project, which is developing day by day, has always kept its goal at the top since the first day. We aim to make money by entertaining. Our ecosystem is based on a happy future. Check out our Ecosystem Roadmap for more.
            The mission we have is progressing to ensure extra earning programs that collectors and the crypto community can also use. Certainly, our first goal is to create a mass for the construction of the future. We do not work for only creating an NFT collection or Token brand, but also for creating an Ecosystem. Remember, you can make the biggest investment for the future.<br/><br/>

            We do not proceed distanced from our audience. Moving forward on the common path is the most favorable for our future. Therefore, this future that we will build together including our members will undoubtedly be great.
            While we are doing all this, our members will be able to build, have fun, earn money and connect with thousands of members that alike themselves. Imagine that you are guided by the scenario of the future and finally you can live in that world. We're creating this.
            Nordia For The Future is undoubtedly a long-term project. We are working to make you feel this world even without the Internet. These are the designs of the future. A world that will exist over the time.

            We want to create an error-free ecosystem by having many utilities in it. We want to take Nordia For Future to advanced levels.

            Read more detailed information about this on the Ecosystem Roadmap.
          </p>
        </div>


      </div>



    </div>
  );
}

export default TeamSection;
