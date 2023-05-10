import './UnitBoxContainer.css';

export default function UnitBoxContainer(props){
    return (
        <div className='unit-box-container'>
            {props.children}
        </div>
    )
}