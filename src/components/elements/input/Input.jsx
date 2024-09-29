import { forwardRef } from "react";
import PropTypes from 'prop-types';

const InputForm = forwardRef((props, ref) => {
    const { type, placeholder, name, onChange, value } = props
    return (
        <input type={type} className='text-sm border rounded w-full py-2 px-3 text-white text-center' placeholder={placeholder} id={name} ref={ref} onChange={onChange} value={value} />
    )
})

InputForm.displayName = 'InputForm';

InputForm.propTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired, // Add this line
    label: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.string,
};

export default InputForm;