import './CartAddButton.css';

import QuadrangleButton from '../QuadrangleButton/QuadrangleButton';

export default function CartAddButton(props) {
    if (props.isPurchaseable) {
        return (
            <QuadrangleButton
                text='장바구니에 담기'
                textType={props.textType}
                width={props.width}
                paddingTop={props.paddingTop}
                paddingBottom={props.paddingBottom}
                paddingLeft={props.paddingLeft}
                paddingRight={props.paddingRight}
                clickEvent={props.cartAddAction}
                />
        )
    } else {
        return (
            <QuadrangleButton
                text='구매할 수 없는 상품이에요.'
                textType={props.textType}
                width={props.width}
                paddingTop={props.paddingTop}
                paddingBottom={props.paddingBottom}
                paddingLeft={props.paddingLeft}
                paddingRight={props.paddingRight}
                clickEvent={props.cartAddAction}
                backgroundColor='#aaa'
                borderColor='#aaa'
                />
        )
    }
}

const defaultClickEvent = () => {
    
}

CartAddButton.defaultProps = {
    width: '100%',
    paddingTop: 7,
    paddingBottom: 7,
    paddingLeft: 20,
    paddingRight: 20,
    textType: 'span',
    cartAddAction: defaultClickEvent,
    isPurchaseable: true,
}