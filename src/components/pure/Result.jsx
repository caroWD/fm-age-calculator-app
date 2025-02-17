import PropTypes from "prop-types";

const Result = ({ item, name, title, age }) => {
  return (
    <p className="text-[2.75rem] leading-[115%] font-bold italic xs:text-[3.25rem] md:text-8xl">
      <span className="text-electric-violet-600">
        {!item[name] && !age ? "--" : !age ? "--" : age}
      </span>{" "}
      {age === 1 ? title[0] : title[1]}
    </p>
  );
};

Result.propTypes = {
  item: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.array.isRequired,
  age: PropTypes.number.isRequired,
};

export default Result;
