import './form-input.styles.scss'

const FormInput = ({label, ...otherProps}) => {
    return (
    <div className="group">
        {/* <input className="form-input" placeholder={label} type="text"/> */}
        <input className="form-input" {...otherProps} />
        {label}
    </div>
    )
}

export default FormInput