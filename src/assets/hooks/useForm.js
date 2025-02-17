import { useState } from "react";
import {
  validateChangesInForm,
  validateDatePast,
  validateDateExists,
} from "../helpers/validateForm";
import { getAge, setAge } from "../helpers/showAge";

export const useForm = (initial) => {
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newForm = JSON.parse(JSON.stringify(form));
    newForm.forEach((data) => {
      if (Object.prototype.hasOwnProperty.call(data, name)) {
        data[name] = Number(value) < 0 ? parseInt(value) * -1 : parseInt(value);
      }
    });
    setForm(newForm);
  };

  const handleBlur = (e) => {
    handleChange(e);
    setErrors(validateChangesInForm(form, e.target.name, errors));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleChange(e);

    let age;

    if (form[2].year === new Date().getFullYear()) {
      setErrors(validateDatePast(form, errors));
    } else if (form[0].day > 30) {
      setErrors(validateDateExists(form, errors));
    } else if (Object.keys(errors).length === 0) {
      age = getAge(form);
    }

    if (age) setForm(setAge(form, age));
  };

  return [form, errors, handleChange, handleBlur, handleSubmit];
};
