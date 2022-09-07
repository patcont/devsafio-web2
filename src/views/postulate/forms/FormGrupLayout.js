import React from 'react';
import { InputComponent } from '../../../components/common/InputComponent';

export const FormGrupLayout = ({inputs, stateFormik , onChange, slice = {start: undefined, end: undefined}}) => {
  return (
    <>
      {
        inputs.slice(slice.start, slice.end).map((item, index) => (
          <InputComponent
            key={`input-${index}${item.name}`}
            label={item.label}
            type={item.type}
            titleHead={item.titleHead}
            id={item.id}
            placeholder={item.placeholder}
            name={item.name}
            formik={stateFormik}
            onChange={onChange}
            options={item.options}
            dataset={item.dataset}
            checkValue={item.value}
            radioValue={item.value}
          />
        ))
      }
    </>
  );
};
