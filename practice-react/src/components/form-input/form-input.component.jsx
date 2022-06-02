import './form-input.styles.scss'

const FormInput = ({label, ...otherProps}) => {
    return (
    <div className="group">
        {/* <input className="form-input" placeholder={label} type="text"/> */}
        <input className="form-input" {...otherProps}  type="text"/>
        <label className="this-is-a-label">{label}</label>
    </div>
    )
}

export default FormInput