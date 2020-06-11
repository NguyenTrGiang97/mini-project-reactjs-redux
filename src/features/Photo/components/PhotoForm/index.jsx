import React from 'react';
import PropTypes from 'prop-types';
import { Button, FormGroup, Label, Input } from 'reactstrap';
import Images from '../../../../constants/images';
import { PHOTO_CATEGORY_OPTIONS } from '../../../../constants/global';
import Select from "react-select";
import { Formik, Form, FastField } from 'formik';
import InputField from 'custom-fields/InputField';
import SelectField from 'custom-fields/SelectField';

PhotoForm.propTypes = {
   onSubmit: PropTypes.func,
};

PhotoForm.defaultProps = {
   onSubmit: null,
}

function PhotoForm(props) {
   const initialValues = {
      title: '',
      categoryId: null,
   }
   return (
      <Formik  
         initialValues={initialValues}
      >
         {formikProps => {

            const { values, errors, touched } = formikProps;
            console.log({ values, errors, touched });
            return (
               <Form>
                  {/* FastField sẽ truyền vào component InputField những props của nó như : field, form (là của formik)*/}
                  <FastField
                     name="title"
                     component={InputField}

                     label="Title"
                     placeholder="Eg: Wow nature..."
                  />

                  {/* <FormGroup>
                     <Label for="titleId">Title</Label>
                     <Input name="title" id="titleId" placeholder="Eg: Wow nature..." />
                  </FormGroup> */}

                  <FastField
                     name="categoryId"
                     component={SelectField}

                     label="category"
                     placeholder="what's your photo category"
                     options={PHOTO_CATEGORY_OPTIONS}
                  />

                  {/* <FormGroup>
                     <Label for="categoryId">Category</Label>
                     <Select
                        id="categoryId"
                        name="categoryId"
                        placeholder="what's your photo category"
                        options={PHOTO_CATEGORY_OPTIONS}
                     />
                  </FormGroup> */}

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
            )
         }}
      </Formik>
   );
}

export default PhotoForm;