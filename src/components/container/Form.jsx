import PropTypes from "prop-types";
import Input from "../pure/Input";
import arrowIcon from "../../assets/img/icon-arrow.svg";

const Form = ({
  data,
  handleChange,
  handleBlur,
  handleSubmit,
  errors,
  form,
}) => {
  return (
    <form className="flex flex-col gap-7 md:gap-0" onSubmit={handleSubmit}>
      <div className="flex justify-between gap-3 xs:gap-4 md:w-3/4">
        {data.map((input, i) => (
          <Input
            key={input.id}
            type={input.type}
            label={input.label}
            name={input.name}
            placeholder={input.placeholder}
            handleChange={handleChange}
            handleBlur={handleBlur}
            errors={errors}
            state={form[i]}
          />
        ))}
      </div>
      <div className="relative flex flex-col justify-center items-center md:items-end">
        <hr className="absolute w-full text-woodsmoke-100 border-t-2" />
        <button className="relative rounded-full p-5 bg-electric-violet-600 cursor-pointer transition-colors duration-300 hover:bg-electric-violet-800">
          <img src={arrowIcon} alt="Arrow" className="size-5 md:size-9" />
        </button>
      </div>
    </form>
  );
};

Form.propTypes = {
  data: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  errors: PropTypes.object,
  form: PropTypes.array.isRequired,
};

export default Form;
