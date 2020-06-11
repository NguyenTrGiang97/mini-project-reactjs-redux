import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Images from '../../../../constants/images';
import { PHOTO_CATEGORY_OPTIONS } from '../../../../constants/global';
import Select from "react-select";




PhotoForm.propTypes = {
    onSubmit: PropTypes.func,   
};

PhotoForm.defaultProps = {
    onSubmit: null,
}

function PhotoForm(props) {
    return (
        <Form>
            <FormGroup>
                <Label for="titleId">Title</Label>
                <Input name="title" id="titleId" placeholder="Eg: Wow nature..." />
            </FormGroup>
        
            <FormGroup>
                <Label for="categoryId">Category</Label>
                <Select
                    id="categoryId"
                    name="categoryId"
                    placeholder="what's your photo category"
                    options={PHOTO_CATEGORY_OPTIONS}
                />
            </FormGroup>

            <FormGroup>
                <Label for="categoryId">Photo</Label>
                
                <div>
                    <Button outline color="primary">
                        Random a Photo
                    </Button>
                    <div>
                        <img width="200px" height="200px" src={Images.WHITE_BG} />
                    </div>
                </div>
            </FormGroup>

            <FormGroup>
                <Button color="primary">Add to album</Button>
            </FormGroup>
        </Form>
    );
}

export default PhotoForm;