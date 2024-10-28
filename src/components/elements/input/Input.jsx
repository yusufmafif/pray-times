import { forwardRef } from "react";
import PropTypes from 'prop-types';
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const InputForm = forwardRef((props, ref) => {
    const { type, placeholder, name, onChange, value, isLoading } = props
    return (
        <div className="input-container relative">
        <input 
          type={type} 
          className='text-sm border rounded w-full py-2 px-3 text-white text-center' 
          placeholder={placeholder} 
          id={name} 
          ref={ref} 
          onChange={onChange} 
          value={value} 
        />
        {isLoading && (
          <AiOutlineLoading3Quarters 
            className="text-white animate-spin absolute right-3 top-3" 
          />
        )}
    </div>
    
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
    isLoading: PropTypes.bool
};

export default InputForm;