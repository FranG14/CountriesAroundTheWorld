import React, { useState } from 'react'
import './headersSummer.css'


const SummerFilters = ({summerFilter, onSorting}) => {
    
    const [sortingField, setSortingField] = useState("")
    const [sortingOrder, setSortingOrder] = useState("asc")

    const onSortingChange = field => {
        const order = field === sortingField && sortingOrder === "asc" ? "desc" : "asc"
        setSortingField(field);
        setSortingOrder(order);
        onSorting(field, order)
    }
    

    return (
        <div className="sortsSummer">
            <div className="sortItemSummer">
                {summerFilter.map(({ name, field, sortable }) => (
                    <div className="sortingSummer" key={name} onClick={() => sortable ? onSortingChange(field) : null}>
                        {name}
                        {sortingField && sortingField === field && (
                            <div className="arrowSummer">{ sortingOrder === "asc" ? '☀' : "☀" }</div>
                        )}
                    </div>))}
            </div>
        </div>
    )
}

export default SummerFilters
