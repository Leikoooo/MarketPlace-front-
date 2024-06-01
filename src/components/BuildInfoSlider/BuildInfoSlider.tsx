"use client";
import '@/components/BuildInfoSlider/BuildInfoSlider.scss'
import Image from 'next/image'
import React, { useState } from 'react'



export default function BuildInfoSlider() {
    const [activeTab, setActiveTab] = useState('Gaming');

    const openTab = (tabName: string) => {
        setActiveTab(tabName);
    }

    return (
        <div className="BuildInfoTabsContainer">
            <div className="BuildInfoTabs">
                <div className="BuildHeader">
                    <h1>Build for growth</h1>
                    <div className="BuildBtns">
                        <div className={`buttonTab ${activeTab === 'Gaming' ? 'active' : ''}`} onClick={() => openTab('Gaming')}>
                            <button className="Gaming active">Gaming</button>
                        </div>
                        <div className={`buttonTab ${activeTab === 'Software' ? 'active' : ''}`} onClick={() => openTab('Software')}>
                            <button className="Software">Software</button>
                        </div>
                        <div className={`buttonTab ${activeTab === 'Game coins' ? 'active' : ''}`} onClick={() => openTab('Game coins')}>
                            <button className="Game coins">Game coins</button>
                        </div>
                        <div className={`buttonTab ${activeTab === 'Social Media' ? 'active' : ''}`} onClick={() => openTab('Social Media')}>
                            <button className="Social Media">Social Media</button>
                        </div>
                    </div>
                </div>
                <div className="InfoTabs">
                    <div id="Gaming" className="tabcontent" style={{ display: activeTab === 'Gaming' ? 'block' : 'none' }}>
                        <div className="BuildInfoSliderItem">
                            <div className="BuildInfoSliderItemImg">
                                <Image src="/images/buildTabs/pics2.jpg" width={409} height={279} alt="GamingPic" />
                            </div>
                            <div className="BuildInfoSliderItemText">
                                <h2>Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, consectetur</h2>
                                <p>Learn more about Gaming</p>
                            </div>
                        </div>
                    </div>
                    <div id="Software" className="tabcontent" style={{ display: activeTab === 'Software' ? 'block' : 'none' }}>
                        <div className="BuildInfoSliderItem">
                            <div className="BuildInfoSliderItemImg" >
                                <Image src="/images/buildTabs/pics.jpg" width={409} height={279} alt="GamingPic" />
                            </div>
                            <div className="BuildInfoSliderItemText">
                                <h2>Lore dolor sit amet, consectetur</h2>
                                <p>Learn more about Software</p>
                            </div>
                        </div>
                    </div>
                    <div id="Game coins" className="tabcontent" style={{ display: activeTab === 'Game coins' ? 'block' : 'none' }}>
                        <div className="BuildInfoSliderItem">
                            <div className="BuildInfoSliderItemImg">
                                <Image src="/images/buildTabs/pics2.jpg" width={409} height={279} alt="GamingPic" />
                            </div>
                            <div className="BuildInfoSliderItemText">
                                <h2>Lorem ipsum dolor sim dolor sit amet, consectetur</h2>
                                <p>Learn more about Game coins</p>
                            </div>
                        </div>
                    </div>
                    <div id="Social Media" className="tabcontent" style={{ display: activeTab === 'Social Media' ? 'block' : 'none' }}>
                        <div className="BuildInfoSliderItem">
                            <div className="BuildInfoSliderItemImg">
                                <Image src="/images/buildTabs/pics.jpg" width={409} height={279} alt="GamingPic" />
                            </div>
                            <div className="BuildInfoSliderItemText">
                                <h2>Lorsectetur lorem ipsum dolor sit amet, consectetur</h2>
                                <p>Learn more about Social Media</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}