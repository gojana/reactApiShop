import { usePagination, DOTS } from '../../hooks/usePagination';

const Pagination = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];

  return (
    <div className="btn-group mt-10 justify-center ">
      <button
        className={`btn ${currentPage === 1 ? 'hidden' : ''}`}
        onClick={onPrevious}
      >
        &#60;
      </button>
      {paginationRange.map((pageNumber) => {
        if (pageNumber === DOTS) {
          return (
            <button key={pageNumber} className="btn">
              &#8230;
            </button>
          );
        }
        return (
          <button
            key={pageNumber}
            className={`btn ${pageNumber === currentPage ? 'btn-primary' : ''}`}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </button>
        );
      })}
      <button
        className={`btn ${currentPage === lastPage ? 'hidden' : ''}`}
        onClick={onNext}
      >
        &#62;
      </button>
    </div>
  );
};

export default Pagination;
