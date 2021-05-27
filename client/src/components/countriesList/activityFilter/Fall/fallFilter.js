import React, { useState } from 'react'
import './headersFall.css'


const FallFilters = ({fallFilter, onSorting}) => {
    
    const [sortingField, setSortingField] = useState("")
    const [sortingOrder, setSortingOrder] = useState("asc")

    const onSortingChange = field => {
        const order = field === sortingField && sortingOrder === "asc" ? "desc" : "asc"
        setSortingField(field);
        setSortingOrder(order);
        onSorting(field, order)
    }
    

    return (
        <div className="sortsFall">
            <div className="sortItemFall">
                {fallFilter.map(({ name, field, sortable }) => (
                    <div className="sortingFall" key={name} onClick={() => sortable ? onSortingChange(field) : null}>
                        {name}
                        {sortingField && sortingField === field && (
                            <div className="arrowFall">{ sortingOrder === "asc" ? '❦' : "❦" }</div>
                        )}
                    </div>))}
            </div>
        </div>
    )
}

export default FallFilters
