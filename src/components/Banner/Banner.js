import './Banner.css';

import { useState } from 'react';

export default function Banner(props) {
    const [bannerIndex, setBannerIndex] = useState(1);
    let viewportWidth = window.innerWidth;
    const initialLeftPosition = -viewportWidth;

    let bannerNumber = 0;
    if (props.bannerList && Array.isArray(props.bannerList)) bannerNumber = props.bannerList.length;

    function BannerImageContainer (props) {
        return (
            <a className='banner-image-container' href='/'>
                <img
                    src={props.wideScreenImage}
                    className='banner-image wide'
                    alt='banner-wide-screen'></img>
                <img
                    src={props.mobileImage}
                    className='banner-image mobile'
                    alt='banner-mobile'></img>
            </a>
        )
    }
    let BannerImageContainers = props.bannerList.map((banner,index) => {
        return (
            <BannerImageContainer
                wideScreenImage={banner.wideScreenImage}
                mobileImage={banner.mobileImage}
                key={'banner-'+String(index)} />
        )
    })
    const LastBanner = <BannerImageContainer  
                            wideScreenImage={props.bannerList[props.bannerList.length-1].wideScreenImage}
                            mobileImage={props.bannerList[props.bannerList.length-1].mobileImage}
                            key='first-banner'/>
    const FirstBanner = <BannerImageContainer  
                            wideScreenImage={props.bannerList[1].wideScreenImage}
                            mobileImage={props.bannerList[1].mobileImage}
                            key='last-banner'/>
    BannerImageContainers.push(FirstBanner);
    BannerImageContainers.unshift(LastBanner);

    return (
        <div className='banner'>
            <button className='banner-button left'></button>
            <button className='banner-button right'></button>
            <div className='banner-counter'>
                <span className='banner-counter-number'>
                    {bannerIndex} / {bannerNumber}
                </span>
            </div>
            <div className='banner-contents' style={{'left':-initialLeftPosition}}>
                {BannerImageContainers}
            </div>
        </div>
    )
}

Banner.defaultProps = {
    bannerList: [
        {"bannerImage":"","mobileImage":"","link":"/"},
        {"bannerImage":"","mobileImage":"","link":"/"},
        {"bannerImage":"","mobileImage":"","link":"/"},
        {"bannerImage":"","mobileImage":"","link":"/"},
    ]
}