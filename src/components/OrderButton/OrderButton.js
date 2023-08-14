import './OrderButton.css';

import QuadrangleButton from '../QuadrangleButton/QuadrangleButton';

export default function OrderButton(props) {
    return (
        <div className='order-button'>
            <QuadrangleButton
                textType='h3'
                text={props.text}
                paddingTop='8px'
                paddingBottom='8px'
                clickEvent={props.clickEvent}/>
        </div>
    )    
}

const defaultClickEvent = () => {
    
}

OrderButton.defaultProps = {
    clickEvent: defaultClickEvent,
    text: '주문하러 가기'
}