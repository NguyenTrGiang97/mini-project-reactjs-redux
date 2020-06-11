import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Label } from 'reactstrap';
import Select from 'react-select';

SelectField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    disabled: PropTypes.bool,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    options: PropTypes.array,
};

SelectField.defaultProps = {
    disabled: false,
    label: '',
    placeholder: '',
    options: [],
}

function SelectField(props) {
    const { field, form, options, label, placeholder, disabled } = props;

    const {name, value} = field;
    const selectedOption = options.find(option => options.value === value);

    const handleSelectedOptionChange = (selectedOption) => {
        const selectedValue = selectedOption ? selectedOption.value : selectedOption;

        const changeEvent = {
            target: {
                name: name,
                value: selectedValue
            }
        };
        field.onChange(changeEvent);
    }

    return (
        <div>
            <FormGroup>
                {/* Conditional rendering : Nếu label có giá trị thì sẽ render ra bên phải */}
                {/* for: dùng 1 cái unit, trong mỗi form thì mỗi control có 1 cái name (là unit). name lấy trong field */}
                {label && <Label for={name}>{label}</Label>}

                {/* id phải tương ứng với name  */}
                <Select 
                    id={name}
                    // name={name}
                    // value={value}
                    // onChange={onChane}
                    // onBlur={onBlur}
                        // tương tự với 
                        {...field}
                    value={selectedOption}
                    onChange={handleSelectedOptionChange}

                    options={options}
                    isDisabled={disabled}
                    placeholder={placeholder}
                />
            </FormGroup>
        </div>
    );
}

export default SelectField;