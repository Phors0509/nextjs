"use client";
import React from "react";

interface PagePaginationProps {
    currentPage: number;
    setCurrentPage: (currentPage: number) => void;
    totalPages: number;
    setTotalPages: (totalPages: number) => void;
}
const PagePagination = ({
    currentPage,
    setCurrentPage,
    totalPages,
}: PagePaginationProps) => {
    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <>
            <div className="flex justify-between mt-4">
                <button
                    onClick={handlePreviousPage}
                    disabled={currentPage === 1}
                    className="px-4 py-2 bg-gray-300 rounded"
                >
                    Previous
                </button>
                <span>
                    Page {currentPage} of {totalPages}
                </span>
                <button
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 bg-gray-300 rounded"
                >
                    Next
                </button>
            </div>
        </>
    );
};

export default PagePagination;
