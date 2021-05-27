import React, { useEffect, useMemo, useState } from 'react'
import '../../pagination.css'

const PaginationComponent = ({ total = 0, itemsPerPage = 10, currentPage = 1, onPageChange }) => {
    const [totalPages, setTotalPages] = useState(0)

    useEffect(() => {
        if (total > 0 && itemsPerPage > 0)
            setTotalPages(Math.ceil(total / itemsPerPage));
    }, [total, itemsPerPage])
    
    const paginationItems = useMemo(() => {
        const pages = [];
        for (let i = 1; i <= totalPages; i++) {
            pages.push(<div key={i} active={i === currentPage} onClick={() => onPageChange(i)}>{i}</div>)
        }

        return pages
    }, [totalPages, currentPage, onPageChange]);

    if (totalPages === 0) return null;

    return (
        <div className="paginationDiv">
            <ul>
                <button name="Prev" className="paginationNumberButton" onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>Prev</button>
                <a className="paginationNumberGrid" href="/countries/?#">{paginationItems}</a>
                <button name="Next" className="paginationNumberButton" onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>Next</button>
            </ul>
        </div>
    )
}

export default PaginationComponent;
