import React, { useState } from 'react'
import './filters.css'


const Filters = ({filters, onFilter}) => {
    
    const [filterField, setFilterField] = useState("")
    const [filterOrder, setFilterOrder] = useState("asc")

    const onFilterChange = field => {
        const order = field === filterField && filterOrder === "asc" ? "desc" : "asc"
        setFilterField(field);
        setFilterOrder(order);
        onFilter(field, order)
    }
    

    return (
        <div className="filters">
            <div className="filterItems">
                {filters.map(({ name, field, sortable }) => (
                    <div className="filtering" key={name} onClick={() => sortable ? onFilterChange(field) : null}>
                        {name}
                        {filterField && filterField === field && (
                            <div className="arrow">{ filterOrder === "asc" ? '' : '' }</div>
                        )}
                    </div>))}
            </div>
        </div>
    )
}

export default Filters
