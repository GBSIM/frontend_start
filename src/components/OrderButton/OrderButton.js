import './OrderButton.css';

import QuadrangleButton from '../QuadrangleButton/QuadrangleButton';

export default function OrderButton(props) {
    return (
        <div className='order-button'>
            <QuadrangleButton
                textType='h3'
                text='주문하러 가기'
                paddingTop='8px'
                paddingBottom='8px'/>
        </div>
    )    
}