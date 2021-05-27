import React, { useState } from 'react'
import './headersSpring.css'


const SpringFilters = ({springFilter, onSorting}) => {
    
    const [sortingField, setSortingField] = useState("")
    const [sortingOrder, setSortingOrder] = useState("asc")

    const onSortingChange = field => {
        const order = field === sortingField && sortingOrder === "asc" ? "desc" : "asc"
        setSortingField(field);
        setSortingOrder(order);
        onSorting(field, order)
    }
    

    return (
        <div className="sortsSpring">
            <div className="sortItemSpring">
                {springFilter.map(({ name, field, sortable }) => (
                    <div className="sortingSpring" key={name} onClick={() => sortable ? onSortingChange(field) : null}>
                        {name}
                        {sortingField && sortingField === field && (
                            <div className="arrowSpring">{ sortingOrder === "asc" ? '❀' : "❀" }</div>
                        )}
                    </div>))}
            </div>
        </div>
    )
}

export default SpringFilters
