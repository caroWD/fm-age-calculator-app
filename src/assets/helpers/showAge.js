export const getAge = (form) => {
  const newForm = [...form];
  const [{ day }, { month }, { year }] = newForm;

  const date = [year, month - 1, day];

  const now = Date.now();
  const birthdate = new Date(date[0], date[1], date[2]).getTime();

  const difference = now - birthdate;

  const ageYears = Math.floor(difference / (1000 * 60 * 60 * 24 * 365));
  const ageMonths = Math.floor(
    (difference % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30)
  );
  const ageDays = Math.floor(
    (difference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)
  );

  return [ageDays, ageMonths, ageYears];
};

export const setAge = (form, age) => {
  const newForm = [...form];

  newForm.forEach((item, i) => {
    item.age = age[i];
  });

  return newForm;
};
