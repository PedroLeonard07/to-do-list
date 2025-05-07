interface CheckBoxProps {
    id: number;
    onChange?: React.ChangeEventHandler;
    className?: string;
}

export function CheckBox({id, onChange, className}: CheckBoxProps) {
    return (
        <div>
            <input type="checkbox" id={`checkbos${id}`} className="checkbox" onChange={onChange}/>
            <label htmlFor={`checkbos${id}`} className={className}>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
                   <path d="M4 12.6111L8.92308 17.5L20 6.5" stroke="#F3EFEE" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
            </label>
        </div>
    )
}