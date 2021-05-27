import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './countryDetails.css'
import { Link, useParams } from 'react-router-dom';


const CountryDetail = (props) => {

    const [detail, setDetail] = useState([])
    const [loading, setLoading] = useState(false);
    const [activity, setActivity] = useState([]);

    var {id} = useParams()
    console.log(id)
    useEffect(() => {
        const getData = async () => {
            setLoading(true)
            const res = await axios.get("http://localhost:3001/countries/"+ id);
            setDetail(res.data);
            setActivity(res.data.activities);
            setLoading(false)
        }

        getData()
    }, [id])

    if (loading) {
        return <div class="lds-dual-ring">
            <h2 className="loadingText">Loading...</h2>
        </div>
    }
    
    return (
        <div>
            <div className="grid-container-detail"> 
                <div>
                    <Link to={`/countries/?#`}>
                        <img alt="Globe" className="logo" height="80" width="100" src="https://i.pinimg.com/originals/8b/63/da/8b63dada06707627f15789fb14890aa0.png"></img>
                    </Link>
                </div>
                <div className="titleDetail">
                    <h1>Countries Around the Globe</h1>
                </div>
                <div>
                    <Link to="/activities/new">
                        <img alt="Create Task" className='activityImage' height='80' width='100' src='https://cdn.iconscout.com/icon/premium/png-512-thumb/add-new-task-1854468-1571299.png'></img>
                    </Link>
                </div>
            </div>
            <div className="backgroundColorDetail">
            <div className="countryCardGridDetail">
                <div className="countryCardDetail">
                    <div className="cardFlagDetail"><img className="cardFlagImgDetail" alt={detail.name + " Flag"} src={detail.flag} width='450' height='250' /> </div>
                    <div className="cardNameDetail">{detail.name} - ({detail.id})</div>
                    <div className="cardCapitalDetail">Capital: { detail.capital }</div>
                    <div className="cardRegionDetail">Region: {detail.subregion} - ({ detail.region})</div>
                    <div className="cardPopulationDetail">Population: {detail.population}</div>
                    <div className="cardAreaDetail">Area: {detail.area} km²</div>    
                </div>
                <div className='activitiesGridContainer'>
                    <div className='activitiesGrid'>
                        <div className="activityHeader">Activity {activity.map(activities => (
                            <div className="activityData">{ activities.title }</div>
                        ))}</div>
                        <div className="activityHeader">Season {activity.map(activities => (
                            <div className="activityData">{ activities.season }</div>
                        ))}</div>
                        <div className="activityHeader">Length (hrs) {activity.map(activities => (
                            <div className="activityData">{ activities.length }</div>
                        ))}</div>
                        <div className="activityHeader">Difficulty {activity.map(activities => (
                            <div className="activityData">{ activities.difficulty }</div>
                        ))}</div>
                            
                        </div>
                    </div>
                
            </div>
            </div>
        </div>
    )
}

export default CountryDetail
