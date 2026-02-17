"use client"
import Slider from "react-slick";
import React, { Component } from "react";
import Image from "next/image";

// CAROUSEL DATA
interface DataType {
    imgSrc: string;
}

const postData: DataType[] = [
    { imgSrc: '/images/wework/seminar1.png' },
    { imgSrc: '/images/wework/seminar2.png' },
    { imgSrc: '/images/wework/seminar3.png' },
    { imgSrc: '/images/wework/seminar4.png' },
    { imgSrc: '/images/wework/seminar5.png' },
    { imgSrc: '/images/wework/seminar6.png' },
    { imgSrc: '/images/wework/seminar7.png' },
    { imgSrc: '/images/wework/seminar8.png' },
    { imgSrc: '/images/wework/seminar9.png' },
    { imgSrc: '/images/wework/seminar10.png' },
    { imgSrc: '/images/wework/seminar11.png' },
    { imgSrc: '/images/wework/seminar12.png' },
    { imgSrc: '/images/wework/seminar13.png' },
    { imgSrc: '/images/wework/seminar14.png' },
    { imgSrc: '/images/wework/seminar15.png' },
    { imgSrc: '/images/wework/seminar16.png' },
    { imgSrc: '/images/wework/seminar17.png' },
    { imgSrc: '/images/wework/seminar18.png' },
    { imgSrc: '/images/wework/seminar19.png' },
    { imgSrc: '/images/wework/seminar20.png' },
    { imgSrc: '/images/wework/seminar21.png' },
    { imgSrc: '/images/wework/seminar22.png' },
    { imgSrc: '/images/wework/seminar23.png' },
    { imgSrc: '/images/wework/seminar24.png' },
    { imgSrc: '/images/wework/seminar25.png' },
    { imgSrc: '/images/wework/seminar26.png' },
    { imgSrc: '/images/wework/seminar27.png' },
    { imgSrc: '/images/wework/seminar28.png' },
];

// CAROUSEL SETTINGS
export default class MultipleItems extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 5,
            autoplay: true,
            speed: 4000,
            autoplaySpeed: 0, // ensures continuous autoplay without pauses
            cssEase: "linear", // smooth transition
            variableWidth: true, // enables continuous sliding
            arrows: false,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: { slidesToShow: 3, slidesToScroll: 3, infinite: true, dots: false }
                },
                {
                    breakpoint: 800,
                    settings: { slidesToShow: 2, slidesToScroll: 2, infinite: true, dots: false }
                },
                {
                    breakpoint: 450,
                    settings: { slidesToShow: 1, slidesToScroll: 1, infinite: true, dots: false }
                }
            ]
        };

        return (
            <div className="bg-wework py-16">
                <div className='mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8'>
                    <div className="text-center">
                        <h3 className="text-4xl sm:text-6xl font-bold text-black my-2">We work in child & family counseling.</h3>
                        <h3 className="text-4xl sm:text-6xl font-bold text-black opacity-50 lg:mr-48 my-2">We work in career guidance.</h3>
                        <h3 className="text-4xl sm:text-6xl font-bold text-black opacity-25 lg:-mr-32 my-2">We work in mental health counseling.</h3>
                    </div>
                </div>

                <Slider {...settings}>
                    {postData.map((item, i) => (
                        <div key={i} className='m-3 py-6 text-center shadow-xl rounded-3xl'>
                            <Image src={item.imgSrc} alt={`carousel-image-${i}`} width={320} height={340} className="inline-block m-auto" />
                        </div>
                    ))}
                </Slider>
            </div>
        );
    }
}
