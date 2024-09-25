import { forwardRef } from "react";
import Input from "./Input";
import Label from "./Label";
import PropTypes from 'prop-types';




const InputForm = forwardRef(function InputFormWithRef(props, ref) {
    const {type,name,placeholder,label,onChange,value } = props
    return (
        <div className="w-80">
            <Label text={name} name={label} />
            <Input name={label} value={value} type={type} placeholder={placeholder} ref={ref} onChange={onChange} />
        </div>
    )
})

InputForm.propTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired, // Add this line
    label: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.string,
};

export default InputForm