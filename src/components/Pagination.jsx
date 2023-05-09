import "./Pagination.scss"
const Pagination = ({ prev, next, onPrevious, onNext }) => {
  const handlePrevious = () => {
    onPrevious();
  };
  const handleNext = () => {
    onNext();
  };

  return (
      <ul className="btn__list">
        {prev ? (
          <li>
            <button onClick={handlePrevious}>🡰</button>
          </li>
        ) : null}

        {next ? (
        <li>
          <button onClick={handleNext}>🡲</button>
        </li> ): null 
        }
      </ul>
  );
};

export default Pagination;
