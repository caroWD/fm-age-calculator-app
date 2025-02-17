import PropTypes from "prop-types";

const Input = ({
  type,
  label,
  name,
  placeholder,
  handleChange,
  handleBlur,
  errors,
  state,
}) => {
  const id = `input${name.charAt(0).toUpperCase() + name.slice(1)}`;

  const min = name === "year" ? 100 : 1;

  let value;

  switch (name) {
    case "year":
      value = state[name] ? ("000" + state[name]).slice(-4) : "";
      break;
    default:
      value = state[name] ? ("0" + state[name]).slice(-2) : "";
      break;
  }

  return (
    <div className="flex flex-col gap-1">
      <label
        htmlFor={id}
        className={`text-[0.625rem] tracking-[0.3em] ${
          errors[name] ? "text-carnation-500" : "text-woodsmoke-500"
        } font-semibold uppercase xs:text-xs md:text-base`}
      >
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        min={min}
        value={value}
        required
        placeholder={placeholder}
        className={`w-full border border-solid ${
          errors[name] ? "border-carnation-500" : "border-woodsmoke-200"
        } rounded-md px-3 py-2 font-bold placeholder:text-woodsmoke-300 focus:outline-electric-violet-600 xs:px-4 xs:py-3 xs:text-lg md:text-2xl`}
        onBlur={handleBlur}
        onChange={handleChange}
      />
      {errors[name] && (
        <p className="text-[0.625rem] italic text-carnation-500 xs:text-xs">
          {errors[name]}
        </p>
      )}
    </div>
  );
};

Input.defaultProps = {
  type: "text",
};

Input.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  errors: PropTypes.func,
  state: PropTypes.object.isRequired,
};

export default Input;
