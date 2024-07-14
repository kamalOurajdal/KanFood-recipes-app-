import React from 'react';

interface PaginatorProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const Paginator: React.FC<PaginatorProps> = ({ currentPage, totalPages, onPageChange }) => {
    const getPages = () => {
        let pages = [];
        if (totalPages <= 5) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            if (currentPage <= 3) {
                pages = [1, 2, 3, 4, '...', totalPages];
            } else if (currentPage > totalPages - 3) {
                pages = [1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
            } else {
                pages = [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages];
            }
        }
        return pages;
    };

    return (
        <div className="flex flex-wrap justify-center items-center gap-2 mt-4">
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-2 py-1 rounded text-sm sm:text-base ${
                    currentPage === 1 ? 'text-gray-400 cursor-not-allowed' : 'text-orange-500 hover:bg-orange-100'
                }`}
                aria-label="Previous page"
            >
                <span className="sr-only sm:not-sr-only">Previous</span>
                <span className="sm:hidden">&larr;</span>
            </button>
            <div className="flex flex-wrap justify-center items-center gap-1 sm:gap-2">
                {getPages().map((page, index) => (
                    <button
                        key={index}
                        onClick={() => typeof page === 'number' && onPageChange(page)}
                        className={`px-2 sm:px-3 py-1 rounded text-sm sm:text-base ${
                            currentPage === page
                                ? 'bg-orange-500 text-white'
                                : 'text-orange-500 hover:bg-orange-100'
                        } ${typeof page !== 'number' ? 'cursor-default' : ''}`}
                        disabled={typeof page !== 'number'}
                    >
                        {page}
                    </button>
                ))}
            </div>
            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`px-2 py-1 rounded text-sm sm:text-base ${
                    currentPage === totalPages ? 'text-gray-400 cursor-not-allowed' : 'text-orange-500 hover:bg-orange-100'
                }`}
                aria-label="Next page"
            >
                <span className="sr-only sm:not-sr-only">Next</span>
                <span className="sm:hidden">&rarr;</span>
            </button>
        </div>
    );
};

export default Paginator;