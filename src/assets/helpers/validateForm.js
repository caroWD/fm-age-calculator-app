export const validateChangesInForm = (form, name, errors) => {
  const newErrors = { ...errors };

  let index;
  switch (name) {
    case "day":
      index = 0;
      break;
    case "month":
      index = 1;
      break;
    case "year":
      index = 2;
      break;
    default:
      break;
  }

  const atPresent = new Date();

  if (!form[index][name]) {
    newErrors[name] = "This field is required";
  } else if (
    form[0].day > 31 ||
    form[1].month > 12 ||
    form[2].year > atPresent.getFullYear()
  ) {
    switch (name) {
      case "day":
        if (form[0].day > 31) newErrors[name] = `Must be a valid ${name}`;
        break;
      case "month":
        if (form[1].month > 12) newErrors[name] = `Must be a valid ${name}`;
        break;
      case "year":
        if (form[2].year > atPresent.getFullYear())
          newErrors[name] = `Must be in the past`;
        break;
      default:
        break;
    }
  } else {
    delete newErrors[name];
  }

  return newErrors;
};

export const validateDatePast = (form, errors) => {
  const newErrors = { ...errors };

  const atPresent = new Date();

  if (
    form[2].year === atPresent.getFullYear() &&
    form[0].day > atPresent.getDate()
  ) {
    newErrors.day = "Must be a valid past";
  } else {
    delete newErrors.day;
  }
  if (
    form[2].year === atPresent.getFullYear() &&
    form[1].month > atPresent.getMonth() + 1
  ) {
    newErrors.month = "Must be a valid past";
  } else {
    delete newErrors.month;
  }

  return newErrors;
};

export const validateDateExists = (form, errors) => {
  const newErrors = { ...errors };

  const [{ day }, { month }, { year }] = form;
  const birthDate = new Date(`${year}/${month}/${day}`);

  const validateBirthDate =
    birthDate.toLocaleDateString() === `${day}/${month}/${year}` ? true : false;

  if (!validateBirthDate) {
    newErrors.day = "Must be a valid date";
  } else {
    delete newErrors.day;
  }

  return newErrors;
};
