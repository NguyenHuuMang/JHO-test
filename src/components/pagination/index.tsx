import React from "react";
import "./style.scss";

type PaginationProps = {
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
  onItemsPerPageChange: (itemsPerPage: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalItems,
  itemsPerPage,
  onPageChange,
  onItemsPerPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  const handleFirstPage = () => onPageChange(1);
  const handleLastPage = () => onPageChange(totalPages);
  const handlePrevPage = () => onPageChange(Math.max(currentPage - 1, 1));
  const handleNextPage = () =>
    onPageChange(Math.min(currentPage + 1, totalPages));

  return (
    <div className="pagination-container">
      {/* Left */}
      <div className="pagination-left">
        <span>Éléments par page</span>
        <select
          value={itemsPerPage}
          onChange={(e) => onItemsPerPageChange(Number(e.target.value))}
        >
          {[10, 25, 50, 100].map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
        <span>
          {startItem}-{endItem} sur {totalItems} éléments
        </span>
      </div>

      {/* Right */}
      <div className="pagination-right">
        <button onClick={handleFirstPage} disabled={currentPage === 1}>
          &laquo;
        </button>
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          &lsaquo;
        </button>
        <span className="current-page">
          {String(currentPage).padStart(2, "0")}
        </span>
        <span>de {totalPages}</span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          &rsaquo;
        </button>
        <button onClick={handleLastPage} disabled={currentPage === totalPages}>
          &raquo;
        </button>
      </div>
    </div>
  );
};

export default Pagination;
