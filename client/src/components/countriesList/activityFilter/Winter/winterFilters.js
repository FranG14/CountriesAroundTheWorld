import React, { useState } from 'react'
import './headersWinter.css'


const WinterFilters = ({winterFilter, onSorting}) => {
    
    const [sortingField, setSortingField] = useState("")
    const [sortingOrder, setSortingOrder] = useState("asc")

    const onSortingChange = field => {
        const order = field === sortingField && sortingOrder === "asc" ? "desc" : "asc"
        setSortingField(field);
        setSortingOrder(order);
        onSorting(field, order)
    }
    

    return (
        <div className="sortsWinter">
            <div className="sortItemWinter">
                {winterFilter.map(({ name, field, sortable }) => (
                    <div className="sortingWinter" key={name} onClick={() => sortable ? onSortingChange(field) : null}>
                        {name}
                        {sortingField && sortingField === field && (
                            <div className="arrowWinter">{ sortingOrder === "asc" ? '❆' : "❆" }</div>
                        )}
                    </div>))}
            </div>
        </div>
    )
}

export default WinterFilters
