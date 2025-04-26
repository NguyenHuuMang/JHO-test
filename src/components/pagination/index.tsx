import {
  faChevronDown,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import leftIcon from "../../assets/images/leftIcon.png";
import rightIcon from "../../assets/images/rightIcon.png";
import "./style.scss";

interface PaginationProps {
  totalItems: number;
  itemsPerPageOptions?: number[];
  defaultItemsPerPage?: number;
  onPageChange: (page: number) => void;
  onItemsPerPageChange?: (itemsPerPage: number) => void;
  className?: string;
}

const Pagination: React.FC<PaginationProps> = ({
  totalItems,
  itemsPerPageOptions = [5, 10, 25, 50, 100],
  defaultItemsPerPage = 25,
  onPageChange,
  onItemsPerPageChange,
  className = "",
}) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(defaultItemsPerPage);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  useEffect(() => {
    setCurrentPage(1);
    if (onPageChange) {
      onPageChange(1);
    }
  }, [itemsPerPage]);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages || page === currentPage) return;

    setCurrentPage(page);
    if (onPageChange) {
      onPageChange(page);
    }
  };

  const handleItemsPerPageChange = (value: number) => {
    setItemsPerPage(value);
    setIsDropdownOpen(false);

    if (onItemsPerPageChange) {
      onItemsPerPageChange(value);
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  return (
    <div className={`pagination-container ${className}`}>
      <div className="left-pagination">
        <div className="items-per-page">
          <span className="label">Éléments par page</span>
          <div className="dropdown">
            <button className="dropdown-toggle" onClick={toggleDropdown}>
              {itemsPerPage}{" "}
              <FontAwesomeIcon icon={faChevronDown} className="" />
            </button>
            {isDropdownOpen && (
              <div className="custom-popup">
                {itemsPerPageOptions.map((option) => (
                  <div
                    key={option}
                    className={`dropdown-item ${
                      itemsPerPage === option ? "active" : ""
                    }`}
                    onClick={() => handleItemsPerPageChange(option)}
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="items-range">
          {startItem}-{endItem} sur {totalItems} éléments
        </div>
      </div>

      <div className="navigation-controls">
        <button
          className="nav-button first-page"
          onClick={() => handlePageChange(1)}
          disabled={currentPage === 1}
        >
          <img src={leftIcon} alt="leftIcon" />
        </button>
        <button
          className="nav-button prev-page"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <FontAwesomeIcon icon={faChevronLeft} className="" />
        </button>

        <div className="page-indicator">
          <div className="current-page">
            {currentPage.toString().padStart(2, "0")}
          </div>
          <div className="per-page">
            <div className="page-separator">de</div>
            <div className="total-pages">{totalPages}</div>
          </div>
        </div>

        <button
          className="nav-button next-page"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <FontAwesomeIcon icon={faChevronRight} className="" />
        </button>
        <button
          className="nav-button last-page"
          onClick={() => handlePageChange(totalPages)}
          disabled={currentPage === totalPages}
        >
          <img src={rightIcon} alt="rightIcon" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
