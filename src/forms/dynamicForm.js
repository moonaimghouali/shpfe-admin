import React from "react";
import { useForm, Controller } from "react-hook-form";
import { TextBoxComponent } from "@syncfusion/ej2-react-inputs";
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";
import {CheckBoxComponent, RadioButtonComponent, ButtonComponent } from "@syncfusion/ej2-react-buttons";
import { RxCross2}  from 'react-icons/rx'

import {utilisateursForm } from './formContent';

//Error Component
const Error = ({ children }) => <p style={{ color: "red" }}>{children}</p>;

const Input = ({ value, onChange, type, ...rest }) => {
  switch (type) {
    case "text":
      return (
        <TextBoxComponent
          placeholder={rest?.placeholder}
          change={({ value }) => onChange(value)}
          value={value}
        />
      );
    case "radio":
      return rest?.options.map((e) => (
        <RadioButtonComponent
          key={e}
          label={e}
          value={e}
          onChange={(value) => onChange(value)}
          checked={value === e}
        />
      ));
    case "dropdown":
      return (
        <DropDownListComponent
          dataSource={rest?.options}
          select={({ itemData }) => {
            onChange(itemData.value);
          }}
          value={value}
        />
      );

    case "checkbox":
      return (
        <CheckBoxComponent
          label={rest?.checkboxLabel}
          onChange={(e) => onChange(e.target.checked)}
          checked={value}
        />
      );

      case "password":
      return (
        <TextBoxComponent
          type="password"  
          label={rest?.checkboxLabel}
          onChange={(e) => onChange(e.target.checked)}
          checked={value}
        />
      );

    default:
      return null;
  }
};

const Dynamic = () => {
    const {
      handleSubmit,
      control,
      // watch,
      formState: { errors },
    } = useForm();
  
    const formInputs = Object.keys(utilisateursForm).map((e) => {
      const { rules, defaultValue, label } = utilisateursForm[e];
  
      return (
        <section key={e}>
          <label>{label}</label>
          <Controller
            name={e}
            control={control}
            rules={rules}
            defaultValue={defaultValue}
            render={({ field }) => (
              <div>
                <Input
                  value={field.value}
                  onChange={field.onChange}
                  {...utilisateursForm[e]}
                />
              </div>
            )}
          />
          {errors[e] && <Error>This field is required</Error>}
        </section>
      );
    });
  
    const onSubmit = (data) => console.log(data);

    return (
        <div className='absolute flex flex-col justify-center items-center content-center z-50 overflow-hidden w-full h-full bg-neutral-900 opacity-90'>
        <div className='flex flex-col w-5/12 h-5/6 bg-white rounded p-4'>
            {/* Header */}
            <div className="flex flex-row justify-between">
                <p className='font-semibold text-2xl'>Ajouter un utilisateur</p>
                <button onClick={"askjs"}> <RxCross2 className='' size={32}/></button>
            </div>

            {/* divider */}
            <div className='h-px w-full bg-gray-300 mt-5'></div>

            {/* Form */}
            <div className="flex flex-col w-full mt-5 px-6">
            {formInputs}
            </div>

            {/* Buttons */}
            <div className="flex"></div>
        </div>
    </div>
            
            
      );
    };
    
    export default Dynamic;