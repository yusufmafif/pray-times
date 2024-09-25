import PropTypes from 'prop-types';

const Label = (props) => {
    const { name } = props
    return (
        <label className='block text- font-bold mb-2 text-white' htmlFor={name}>{name}</label>
    )
}
Label.propTypes = {
    name: PropTypes.string.isRequired
};

export default Label;