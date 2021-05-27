import React, { useEffect, useMemo, useState } from 'react'
import Header from './Header'
import PaginationComponent from './Pagination'
import Filters from './Filter/index'
import Search from './Search'
import axios from 'axios'
import '../countryList.css'
import { Link } from 'react-router-dom';
import SummerFilters from './activityFilter/Summer/summerFilter'
import WinterFilters from './activityFilter/Winter/winterFilters'
import SpringFilters from './activityFilter/Spring/springFilter'
import FallFilters from './activityFilter/Fall/fallFilter'


const CountryCards = () => {
    const [countries, setCountries] = useState([])
    const [loading, setLoading] = useState(false);
    const [totalCountries, setTotalCountries] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState("");
    const [sorting, setSorting] = useState({ field: "", order: "" })
    const [filter, setFilter] = useState({ field: "", order: "" })

    const ITEMS_PER_PAGE = 10


    const headers = [
        { name: 'A-Z / Z-A', field: 'name', sortable: true },
        { name: 'Least Population / Most Population', field: 'population', sortable: true },
    ]
    
    const fallFilter = [
        { name: 'Fall Activities', field: 'Fall', sortable: true },
    ]
    
    const summerFilter = [
        { name: 'Summer Activities', field: 'Summer', sortable: true },
    ]
    
    const winterFilter = [
        { name: 'Winter Activities', field: 'Winter', sortable: true },
    ]
    
    const springFilter = [
        { name: 'Spring Activities', field: 'Spring', sortable: true }
    ]

    const filters = [
        { name: 'All Countries', field: 'All', sortable: true },
        { name: 'Americas', field: 'Americas', sortable: true },
        { name: 'Asia', field: 'Asia', sortable: true },
        { name: 'Europe', field: 'Europe', sortable: true },
        { name: 'Africa', field: 'Africa', sortable: true },
        { name: 'Oceania', field: 'Oceania', sortable: true },
        { name: 'Polar', field: 'Polar', sortable: true },
    ]


    useEffect(() => {
        const getData = async () => {
            setLoading(true);
            const res = await axios.get("http://localhost:3001/countries/all");
            setCountries(res.data);
            setLoading(false);
            console.log(res.data)
        }

        getData()
    }, [])

    const countriesData = useMemo(() => {
        let computedCountry = countries;

        

        if (search) {
            computedCountry = computedCountry.filter(
                country => country.name.toLowerCase().includes(search.toLowerCase())
            )
        }

        setTotalCountries(computedCountry.length)

        if (sorting.field === 'name') {
            const reversed = sorting.order === "asc" ? 1 : -1
            computedCountry = computedCountry.sort((a, b) => reversed * a[sorting.field].localeCompare(b[sorting.field]))
        }

        if (sorting.field === 'population') {
            const reversed = sorting.order === "asc" ? 1 : -1
            computedCountry = computedCountry.sort((a, b) => reversed * (a.population - b.population))
        }

        if (filter.field === 'Americas') {
            computedCountry = computedCountry.filter(a => a.region === 'Americas')
        }
        if (filter.field === 'Asia') {
            computedCountry = computedCountry.filter(a => a.region === 'Asia')
        }
        if (filter.field === 'Africa') {
            computedCountry = computedCountry.filter(a => a.region === 'Africa')
        }
        if (filter.field === 'Europe') {
            computedCountry = computedCountry.filter(a => a.region === 'Europe')
        }
        if (filter.field === 'Oceania') {
            computedCountry = computedCountry.filter(a => a.region === 'Oceania')
        }
        if (filter.field === 'Polar') {
            computedCountry = computedCountry.filter(a => a.region === 'Polar')
        }
        if (filter.field === 'All') {
            computedCountry = computedCountry
            console.log(countries[0].activities)
        }
        if (sorting.field === 'Summer') {
            let paises = computedCountry.filter(country => {
                let currentSeasons = country.activities.map(activity => activity.season)
                console.log(currentSeasons)
                let seasonExists = false
                currentSeasons.forEach(season => {
                    if ('Summer' === season) {
                        seasonExists = true
                    }
                })
                return seasonExists
            })
            computedCountry = paises
        }
        if (sorting.field === 'Winter') {
            let paises = computedCountry.filter(country => {
                let currentSeasons = country.activities.map(activity => activity.season)
                console.log(currentSeasons)
                let seasonExists = false
                currentSeasons.forEach(season => {
                    if ('Winter' === season) {
                        seasonExists = true
                    }
                })
                return seasonExists
            })
            computedCountry = paises
        }
        if (sorting.field === 'Fall') {
            let paises = computedCountry.filter(country => {
                let currentSeasons = country.activities.map(activity => activity.season)
                console.log(currentSeasons)
                let seasonExists = false
                currentSeasons.forEach(season => {
                    if ('Fall' === season) {
                        seasonExists = true
                    }
                })
                return seasonExists
            })
            computedCountry = paises
        }
        if (sorting.field === 'Spring') {
            let paises = computedCountry.filter(country => {
                let currentSeasons = country.activities.map(activity => activity.season)
                console.log(currentSeasons)
                let seasonExists = false
                currentSeasons.forEach(season => {
                    if ('Spring' === season) {
                        seasonExists = true
                    }
                })
                return seasonExists
            })
            computedCountry = paises
        }
        
        return computedCountry.slice(
            (currentPage - 1) * ITEMS_PER_PAGE,
            (currentPage - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE);
    }, [countries, currentPage, search, sorting, filter])


    if (loading) {
        return <div class="lds-dual-ring">
            <h2 className="loadingText">Loading...</h2>
        </div>
    }
    
    return (
        <div>
            <div className="grid-container"> 
                <div>
                    <img alt="Globe" className="logo" height="80" width="100" src="https://i.pinimg.com/originals/8b/63/da/8b63dada06707627f15789fb14890aa0.png"></img>
                </div>
                <div className="title">
                    <h1>Countries Around the Globe</h1>
                </div>
                <div>
                    <Link to="/activities/new">
                        <img alt="Create Task" className='activityImage' height='80' width='100' src='https://cdn.iconscout.com/icon/premium/png-512-thumb/add-new-task-1854468-1571299.png'></img>
                    </Link>
                </div>
            </div>
            <div>
                <div className="headers">
                    <Header headers={headers} onSorting={(field, order) => setSorting({ field, order })} />
                    <SummerFilters summerFilter={summerFilter} onSorting={(field, order) => setSorting({ field, order })} />
                    <FallFilters fallFilter={fallFilter} onSorting={(field, order) => setSorting({ field, order })} />
                    <WinterFilters winterFilter={winterFilter} onSorting={(field, order) => setSorting({ field, order })} />
                    <SpringFilters springFilter={springFilter} onSorting={(field, order) => setSorting({ field, order })} />
                    <div className="totalCountries">There's a total of {countries.length} countries around the Globe</div>
                </div>
                <div className="headers">
                    <Filters filters={filters} onFilter={(field, order) => setFilter({ field, order })} />
                        <Search onSearch={(value) => {
                            setSearch(value);
                            setCurrentPage(1);
                        }} />
                    

                </div>
                <div className="countryCardGrid">
                    {countriesData.map(country => (
                        <div className="countryCard">
                            <div><img alt={country.name + " Flag"} src={country.flag} width='200' height='125' /> </div>
                            <div className="cardName">{country.name}</div>
                            <div className="cardRegion">Region: {country.region}</div>
                            <div>
                                <Link to={`/country/${country.id}`}>
                                    {"Learn more"}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <PaginationComponent
                    total={totalCountries}
                    itemsPerPage={ITEMS_PER_PAGE}
                    currentPage={currentPage}
                    onPageChange={page => setCurrentPage(page)}
                />
                
            </div>
            
        </div>
    )
}

export default CountryCards
