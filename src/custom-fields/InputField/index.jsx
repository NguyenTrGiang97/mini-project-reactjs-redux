import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Label, Input } from 'reactstrap';

InputField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    type: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
};

InputField.defaultProps = {
    type: 'text',
    label: '',
    placeholder: '',
    disabled: false,
}

function InputField(props) {
    const {
        field, form,
        type, label, placeholder, disabled,
    } = props;

    const {name, value, onChange, onBlur} = field;

    return (
        <div>
            <FormGroup>
                {/* Conditional rendering : Nếu label có giá trị thì sẽ render ra bên phải */}
                {/* for: dùng 1 cái unit, trong mỗi form thì mỗi control có 1 cái name (là unit). name lấy trong field */}
                {label && <Label for={name}>{label}</Label>}

                {/* id phải tương ứng với name  */}
                <Input 
                    id={name}
                    // name={name}
                    // value={value}
                    // onChange={onChane}
                    // onBlur={onBlur}
                        // tương tự với 
                        {...field}
                    type={type}
                    disabled={disabled}
                    placeholder={placeholder}
                />
            </FormGroup>
        </div>
    );
}

export default InputField;