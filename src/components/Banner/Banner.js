import './Banner.css';

export default function Banner(props) {
    let bannerNumber = 0;
    if (props.bannerList && Array.isArray(props.bannerList)) bannerNumber = props.bannerList.length;

    props.bannerList.map((banner,index) => {
        return (
            <div className='banner-image-container' key={'banner-'+String(index)}>
                <img
                    src={banner.wideScreenImage}
                    className='banner-image wide'
                    alt='banner-wide-screen'></img>
                <img
                    src={banner.mobileImage}
                    className='banner-image mobile'
                    alt='banner-mobile'></img>
            </div>
        )
    })

    return (
        <div className='banner'>
            <button className='banner-button left'></button>
            <button className='banner-button right'></button>
            <div className='banner-counter'>
                <span className='banner-counter-number'>
                    {bannerNumber} / {bannerNumber}
                </span>
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