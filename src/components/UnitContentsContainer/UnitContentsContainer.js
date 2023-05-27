import './UnitContentsContainer.css';

export default function UnitContentsContainer(props) {
    return (
        <div className='unit-contents-container'>
            <div className='unit-contents-title-container'>
                <h1 className='unit-contents-title'>{props.title}</h1>
            </div>
            {props.children}
        </div>
    )
}

UnitContentsContainer.defaultProps = {
    title: "컨텐츠 제목",
}