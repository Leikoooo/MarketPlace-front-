"use client";
import '@/components/NewsContentSlider/NewsContentSlider.scss'
import Image from 'next/image'
import React, { useState } from 'react'



export default function Newsletter() {
    const news = [
        {
            id: "1",
            title: 'Lorem ipsum dolor sit amet, consectetur',
            date: 'JUNE 11, 2023',
            src: '/images/slider/pic.jpg'
        },
        {
            id: "2",
            title: 'Lorem ipsum',
            date: 'JUNE 9, 2023',
            src: '/images/slider/pic2.jpg'
        },
        {
            id: "3",
            title: 'Lorem ipsum dolor sit amet, consectetur',
            date: 'JUNE 7, 2023',
            src: '/images/slider/pic.jpg'
        },
        {
            id: "4",
            title: 'Lorem ipsum dolor sit amet, consectetur',
            date: 'JUNE 5, 2023',
            src: '/images/slider/pic2.jpg'
        },
        {
            id: "5",
            title: 'Lorem ipsum dolor sit amet, consectetur',
            date: 'JUNE 3, 2023',
            src: '/images/slider/pic.jpg'
        },
        {
            id: "6",
            title: 'Lorem ipsum dolor sit amet, consectetur',
            date: 'JUNE 1, 2023',
            src: '/images/slider/pic2.jpg'
        },
    ]

    const [index, setIndex] = useState(0)
    const [trans, setTrans] = useState(false)
    const [transR, setTransR] = useState(false);
    const itemWidth = 401; // ширина одного элемента слайдера

    const handlePrev = () => {
        setTransR(true);
        setTrans(false);
        const nextIndex = index - 1;
        document.querySelector('.NewsArrowsRight')!.classList.remove('disabled');
        document.querySelector('.NewsArrowsRightBtn')!.classList.remove('disabled');
        if (nextIndex < 1) {
            document.querySelector('.NewsArrowsLeft')!.classList.add('disabled')
            document.querySelector('.NewsArrowsLeftBtn')!.classList.add('disabled')
            setIndex(nextIndex);
        } else {
            ;
            setIndex(nextIndex);
        }
    };

    const handleNext = () => {
        setTrans(true);
        setTransR(false);
        const nextIndex = index + 1;
        document.querySelector('.NewsArrowsLeft')!.classList.remove('disabled');
        document.querySelector('.NewsArrowsLeftBtn')!.classList.remove('disabled');
        if (nextIndex >= news.length - 3) {
            document.querySelector('.NewsArrowsRight')!.classList.add('disabled')
            document.querySelector('.NewsArrowsRightBtn')!.classList.add('disabled')
            setIndex(nextIndex);
        } else {
            setIndex(nextIndex);
        }
    };

    const transformValue = `translateX(-${index * itemWidth}px)`;

    const Slides = () => news.map((item) => (
        <div className="SliderItem" key={item.id}>
            <div className="SliderItemImg">
                <Image src={item.src} width={300} height={300} alt="newsPic" />
            </div>
            <div className="SliderItemContent">
                <div className="SliderItemDate">
                    <p>{item.date}</p>
                </div>
                <div className="SliderItemTitle">
                    <p>{item.title}</p>
                </div>
            </div>
        </div>
    ));

    return (
        <div className="InTheNewsContainer">
            <div className="InTheNews">
                <div className="HeadNews">
                    <div className="InTheNewsText">
                        <p>In the news</p>
                    </div>
                    <div className="NewsArrows">
                        <div className="NewsArrowsLeft disabled" onClick={handlePrev} >
                            <button className="NewsArrowsLeftBtn disabled" />
                        </div>
                        <div className="NewsArrowsRight" onClick={handleNext} >
                            <button className="NewsArrowsRightBtn" />
                        </div>
                    </div>

                </div>
                <div className="NewsContentSliderContainer">
                    <div className="NewsContentSlider">
                        <div className="SliderContent" style={{ transform: transformValue }}>
                            <Slides />
                        </div>
                    </div >
                </div>
            </div>
        </div>
    )
}