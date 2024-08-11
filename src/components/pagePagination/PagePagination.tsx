import React from "react";
import Link from "next/link";

interface PagePaginationProps {
  totalPages: number;
  currentPage: number;
}

const PagePagination = ({totalPages, currentPage}: PagePaginationProps) => {
  // Convert currentPage to an integer to avoid string concatenation issues
  const page = parseInt(currentPage.toString(), 10);
  
  return (
    <div className="flex justify-between mt-4">
      {/* Previous Button */}
      {page > 1 ? (
        <Link href={`/blog/?page=${page - 1}`}>
          <button className="px-4 py-2 bg-gray-300 rounded">
            Previous
          </button>
        </Link>
      ) : (
        <button
          disabled
          className="px-4 py-2 bg-gray-300 rounded opacity-50 cursor-not-allowed"
        >
          Previous
        </button>
      )}
      
      {/* Page Numbers */}
      {[...Array(totalPages)].map((_, index) => (
        <Link href={`/blog/?page=${index + 1}`} key={index}>
          <button
            className={`px-4 py-2 rounded ${
              page === index + 1 ? "bg-blue-500 text-white" : "bg-gray-300"
            }`}
          >
            {index + 1}
          </button>
        </Link>
      ))}
      
      {/* Next Button */}
      {page < totalPages ? (
        <Link href={`/blog/?page=${page + 1}`}>
          <button className="px-4 py-2 bg-gray-300 rounded">
            Next
          </button>
        </Link>
      ) : (
        <button
          disabled
          className="px-4 py-2 bg-gray-300 rounded opacity-50 cursor-not-allowed"
        >
          Next
        </button>
      )}
    </div>
  );
};

export default PagePagination;
