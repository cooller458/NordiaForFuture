
import React, { useState, useEffect } from 'react';
import '../App.css';
import RoadMapCard from './RoadMapCard';
import './RoadMap.css';

function RoadMap() {
    const [click, setClick] = useState(0);
    return (
        <div className='hero-container'>
            <img
                className='cards__item__img'
                src={'images/roadmapbg.png'}
            />
            <link href="https://fonts.googleapis.com/css2?family=Saira+Stencil+One&display=swap" rel="stylesheet"></link>
            <div className='container'  >
                {click == 0 &&
                    <div className='card-container'  >
                        <div className='card-body'>
                            <div className='card-two-items'>
                                <div onClick={() => setClick(1)} className='square-item'>
                                    <p className='title'>VISION</p>
                                    <img
                                        className='image'
                                        src={'images/vision.png'}
                                    />
                                    <div className='sub-title'>
                                        <p >01</p>
                                    </div>
                                </div>
                                <div onClick={() => setClick(2)} className='square-item'>
                                    <p className='title'>Team</p>
                                    <p className='title2'> & Community</p>
                                    <img
                                        className='image2'
                                        src={'images/collaboration.png'}
                                    />
                                    <div className='sub-title'>
                                        <p >02</p>
                                    </div>
                                </div>
                            </div>
                            <div onClick={() => setClick(3)} className='card-one-items'>
                                <div className='long-item'>
                                    <p className='title-bold'>NFT </p>
                                    <p className='title-bold-alt'>LAUNCH</p>
                                </div>
                                <img
                                    className='image-long'
                                    src={'images/3d-artist.png'}
                                />
                                <div className='sub-title-long'>
                                    <p >03</p>
                                </div>
                            </div>
                        </div>
                        <div className='card-body2'>
                            <div className='card-two-items'>
                                <div onClick={() => setClick(6)} className='square-item'>
                                    <p className='title'>P2E Game</p>
                                    <img
                                        className='image2'
                                        src={'images/folder.png'}
                                    />
                                    <div className='sub-title'>
                                        <p >06</p>
                                    </div>
                                </div>
                                <div onClick={() => setClick(5)} className='square-item2'>

                                    <p className='title-bold2'>Tangible </p>
                                    <p className='title-bold-alt2'>Works</p>
                                    <img
                                        className='image-long2'
                                        src={'images/t-shirt.png'}
                                    />
                                    <div className='sub-title-long2'>
                                        <p >05</p>
                                    </div>
                                </div>
                            </div>
                            <div onClick={() => setClick(4)} className='card-two-items'>
                                <div className='square-item'>
                                    <p className='title'>TOKEN</p>
                                    <img
                                        className='image2'
                                        src={'images/trading.png'}
                                    />
                                    <div className='sub-title'>
                                        <p >04</p>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                }
                {click == 1 && <div className='openModal'><p className='title'>VISION</p>
                    <p className='subtitle'>
                        Building a stable future. Our goal is to create a Web3 brand and ecosystem that is accepted by our members or everyone by creating a chain of DeFi, Nordia NFTs and P2E.
                        We are taking sure steps along this path to provide our members with benefits due to their support. Our project, which is developing day by day, has always kept its goal at the top since the first day. We aim to make money by entertaining. Our ecosystem is based on a happy future. Check out our Ecosystem Roadmap for more.
                        The mission we have is progressing to ensure extra earning programs that collectors and the crypto community can also use. Certainly, our first goal is to create a mass for the construction of the future. We do not work for only creating an NFT collection or Token brand, but also for creating an Ecosystem. Remember, you can make the biggest investment for the future.

                        We do not proceed distanced from our audience. Moving forward on the common path is the most favorable for our future. Therefore, this future that we will build together including our members will undoubtedly be great.
                        While we are doing all this, our members will be able to build, have fun, earn money and connect with thousands of members that alike themselves. Imagine that you are guided by the scenario of the future and finally you can live in that world. We're creating this.
                        Nordia For The Future is undoubtedly a long-term project. We are working to make you feel this world even without the Internet. These are the designs of the future. A world that will exist over the time.
                        We want to create an error-free ecosystem by having many utilities in it.
                        We want to take Nordia For Future to advanced levels.

                    </p>
                    <div>
                        <img
                            className='imageOpacity'
                            src={'images/vision.png'}
                        />
                        <button

                            onClick={() => setClick(0)}

                        >
                            <img
                                className='closeIcon'
                                src={'images/close.png'}
                            />
                        </button>
                    </div>
                </div>}
                {click == 2 && <div className='openModal'><p className='title'>Team & Community</p>
                    <p className='subtitle'><div style={{ height: 30, width: 120, backgroundColor: '#17A300', position: 'absolute', left: '57%', borderRadius: 5 }}><p style={{ textAlign: 'center', color: '#fff' }}>Complete</p></div>
                        <div> <h3>MAIN TEAM:</h3></div>
                        Our team consists of expert web3 developers, social media managers and Token experts. They are doing their best to create the future and show it to you.
                        These people exist to move the Ecosystem forward day by day.

                    </p>
                    <p className='subtitle'><div style={{ height: 30, width: 120, backgroundColor: '#17A300', position: 'absolute', left: '57%', borderRadius: 5 }}><p style={{ textAlign: 'center', color: '#fff' }}>Complete</p></div>
                        <h3>DESIGNER TEAM:</h3>

                        Our team of website designers and artists, who are experts in their fields, produce content for our community under the roof of NFF every day and draw their own roadmaps with the feedback from them.
                        They work full time within the NFF Ecosystem. And they will be the chief architects of many of the innovations we will make in the future.

                    </p>
                    <p className='subtitle'><div style={{ height: 30, width: 120, backgroundColor: '#A39C00', position: 'absolute', left: '57%', borderRadius: 5 }}><p style={{ textAlign: 'center', color: '#fff' }}>Updating</p></div>
                        <h3>MODERATION TEAM: </h3>
                        Our mods lead the way to grow and protect the NFF community.
                        Our Large Mod team works part-time or full-time with certain hours.
                        Our mod team, which consists of experts in the field of NFT and DeFi, also undertakes the communication of our Community.
                    </p>
                    <div>
                        <img
                            className='imageOpacity'
                            src={'images/collaboration.png'}
                        />
                        <button

                            onClick={() => setClick(0)}

                        >
                            <img
                                className='closeIcon'
                                src={'images/close.png'}
                            />
                        </button>
                    </div>
                </div>}
                {click == 3 && <div className='openModal'><p className='title'>NFT Launch</p>
                    <p className='subtitle'><div style={{ height: 30, width: 120, backgroundColor: '#00A38F', position: 'absolute', left: '57%', borderRadius: 5 }}><p style={{ textAlign: 'center', color: '#fff' }}>Ready</p></div>
                        <div> <h3>BIG BANG:</h3></div>

                        The Nordia For Future NFT Collection, consisting of 6 classes and consisting of 10,021 pieces, is prepared by our artists and presented to the community. Each member carries their own Nordia For Future NFT(s).

                    </p>
                    <p className='subtitle'><div style={{ height: 30, width: 120, backgroundColor: '#17A300', position: 'absolute', left: '57%', borderRadius: 5 }}><p style={{ textAlign: 'center', color: '#fff' }}>Complete</p></div>
                        <h3>    NFT Smart Contract:</h3>

                        3 smart contracts were written for 3 different sales processes. These contracts provide security, speed and cheap transaction fees.
                    </p>

                    <div>
                        <img
                            className='imageOpacity'
                            src={'images/3d-artist.png'}
                        />
                        <button

                            onClick={() => setClick(0)}

                        >
                            <img
                                className='closeIcon'
                                src={'images/close.png'}
                            />
                        </button>
                    </div>
                </div>}
                {click == 4 && <div className='openModal'><p className='title'>TOKEN</p>
                    <p className='subtitle'><div style={{ height: 30, width: 120, backgroundColor: '#17A300', position: 'absolute', left: '57%', borderRadius: 5 }}><p style={{ textAlign: 'center', color: '#fff' }}>Complete</p></div>
                        <div> <h3>CONTRACTS:</h3></div>
                        We have 5 smart contracts in total, all of which are transparently presented to our community. After testing the sustainable token economy a lot, we brought together our expert token team and lawyers. and this team has demonstrated that it has legal compliance.
                        Each nft created plays an important role in the Nordia Ecosystem.
                    </p>
                    <p className='subtitle'><div style={{ height: 30, width: 120, backgroundColor: '#00A38F', position: 'absolute', left: '57%', borderRadius: 5 }}><p style={{ textAlign: 'center', color: '#fff' }}>Ready</p></div>
                        <h3>Passive Daily Earnings: </h3>
                        The biggest incentive for the Nordia For Future ecosystem to grow and for new members to join us will undoubtedly be to earn passive daily NRD Coin rewards.
                        NRD coin will be the main currency of the ecosystem and they can be exchanged with other cryptocurrencies.      </p>

                    <div>
                        <img
                            className='imageOpacity'
                            src={'images/trading.png'}
                        />
                        <button

                            onClick={() => setClick(0)}

                        >
                            <img
                                className='closeIcon'
                                src={'images/close.png'}
                            />
                        </button>
                    </div>
                </div>}
                {click == 5 && <div className='openModal'><p className='title'>Tangible Works</p>
                    <p className='subtitle'><div style={{ height: 30, width: 120, backgroundColor: '#A3007F', position: 'absolute', left: '57%', borderRadius: 5 }}><p style={{ textAlign: 'center', color: '#fff' }}>Drawing</p></div>
                        <div> <h3> Nordia Fashion</h3></div>
                        As NFF brand, we step into street wear and fashion. We produce conceptual clothing, jewelry, accessories and futuristic icon products in many areas. They will be fully wearable, wearable and displayable. To the whole world.     </p>
                    <p className='subtitle'><div style={{ height: 50, width: 120, backgroundColor: '#00A38F', position: 'absolute', left: '57%', borderRadius: 5 }}><p style={{ textAlign: 'center', color: '#fff' }}>Under Construction</p></div>
                        <h3 style={{ marginTop: 40 }}> Modern Agriculture:</h3>
                        We will build fields and planting areas that you can fully monitor remotely. with small structures
                        We are trying to start and make them sustainable. We can handle all works such as harvesting, planting and spraying without even getting close to the soil. This is possible.   </p>
                    <p className='subtitle'><div style={{ height: 30, width: 120, backgroundColor: '#A30000', position: 'absolute', left: '57%', borderRadius: 5 }}><p style={{ textAlign: 'center', color: '#fff' }}>Plan</p></div>
                        <div> <h3>     Architectural Change:</h3></div>

                        We are forming a large department under the name of NFF Brand. from minimal builds to big jobs
                        most will do architectural ventures. In addition to these, we will be serving the whole world.</p>     <div>
                        <img
                            className='imageOpacity'
                            src={'images/t-shirt.png'}
                        />
                        <button

                            onClick={() => setClick(0)}

                        >
                            <img
                                className='closeIcon'
                                src={'images/close.png'}
                            />
                        </button>
                    </div>
                </div>}
                {click == 6 && <div className='openModal'><p className='title'>P2E Game</p>
                    <p className='subtitle'><div style={{ height: 30, width: 120, backgroundColor: 'purple', position: 'absolute', left: '57%', borderRadius: 5 }}><p style={{ textAlign: 'center', color: '#fff' }}>Processing</p></div>
                        <div> <h3>  Characters:</h3></div>

                        There are 10,020 unique characters made for players, consisting of 7 different classes in total. You can now get your characters in 2D as NFT, but each character is prepared in 3D for the game. Characters are open to empowerment.  </p>
                    <p className='subtitle'><div style={{ height: 30, width: 120, backgroundColor: '#A3007F', position: 'absolute', left: '57%', borderRadius: 5 }}><p style={{ textAlign: 'center', color: '#fff' }}>Drawing</p></div>
                        <h3 style={{ marginTop: 40 }}>Nordia Cards:</h3>
                        Specially designed and produced for the Nordia P2E game, the cards will strengthen your character in the game.
                        We will share much more information about these and the map with our community in the coming weeks.  </p>
                    <div>
                        <img
                            className='imageOpacity'
                            src={'images/folder.png'}
                        />
                        <button

                            onClick={() => setClick(0)}

                        >
                            <img
                                className='closeIcon'
                                src={'images/close.png'}
                            />
                        </button>
                    </div>
                </div>}

            </div>



        </div>
    );
}

export default RoadMap;
