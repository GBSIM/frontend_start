import { useState } from "react";

import IconTextButton from "../IconTextButton/IconTextButton";
import ShippingAddModal from "../ShippingAddModal/ShippingAddModal";
import ShippingAddMobileModal from "../ShippingAddMobileModal/ShippingAddMobileModal";

export default function ShippingAddButton(props) {
    const [isMobileModalOn, setMobileModalOn] = useState(false);

    const openMobileModal = () => {
        setMobileModalOn(true);
    }

    const closeMobileModal = () => {
        setMobileModalOn(false);
    }

    const showShippingAddModal = () => {
        if (window.innerWidth > 700) {
            const ShippingAddModal = document.getElementById('shipping-add-modal');
            ShippingAddModal.showModal();
        } else {
            openMobileModal();
        }
    }

    return (
        <div>
            <IconTextButton
                image={require('../../icons/round_plus_grey.png')}
                iconSize={24}
                color='#ccc'
                text='새로운 배송지 추가하기'
                textType='h3'
                clickEvent={showShippingAddModal}/>
            <ShippingAddModal></ShippingAddModal>
            <ShippingAddMobileModal isOn={isMobileModalOn} closeEvent={closeMobileModal}></ShippingAddMobileModal>
        </div>
        
    )
}