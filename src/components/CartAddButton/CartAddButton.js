import './CartAddButton.css';

import QuadrangleButton from '../QuadrangleButton/QuadrangleButton';

export default function CartAddButton(props) {
    return (
        <QuadrangleButton
            text='장바구니에 담기'
            type='span'
            width={props.width}
            paddingTop={props.paddingTop}
            paddingBottom={props.paddingBottom}
            paddingLeft={props.paddingLeft}
            paddingRight={props.paddingRight}
            />
    )
}

CartAddButton.defaultProps = {
    width: '100%',
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 20,
    paddingRight: 20
}