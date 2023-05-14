import Button from "../ui/button";

function Pagination({ next, prev, currentPage, maxPage }) {
  return (
    <div className="center">
      <Button onClick={prev} disabled={currentPage === 1}>
        ＜
      </Button>
      <span className="pages">
        <span>{currentPage}</span> / <span>{maxPage}</span>
      </span>
      <Button onClick={next} disabled={currentPage === maxPage}>
        ＞
      </Button>
    </div>
  );
}

export default Pagination;
