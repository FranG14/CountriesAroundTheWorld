import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import "./activity.css"

const Activities = () => {

    const [title, setTitle] = useState('')
    const [difficulty, setDifficulty] = useState('')
    const [length, setLength] = useState('')
    const [season, setSeason] = useState('')
    const [country, setCountry] = useState([])
    const [paises, setPaises] = useState([])
    const [activity, setActivity] = useState({ countries: country })

    const actividad = { title: title, difficulty: difficulty, length: length, season: season, countries: activity.countries }

    useEffect(() => {
        const getData = async () => {
            const res = await axios.get("http://localhost:3001/countries/all");
            setPaises(res.data);
        }

        getData()
    }, [])

    const handleAddCountry = (e) => {
        e.preventDefault()
        let selectedCountry = null;
        if (document.querySelector('#countrySelect') !== null) {
            selectedCountry = document.querySelector('#countrySelect').value
        }
        let joined = activity.countries.concat(selectedCountry)
        setActivity({
            ...country,
            countries: joined,
        })
        console.log(activity.countries)
    }

    const resetCountries = (e) => {
        e.preventDefault()
        activity.countries = []
        alert("Selected Countries Have Been Reseted, Please Select New Countries")
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        axios.post('http://localhost:3001/activity', actividad)
            .then(response => {
                if (response.data != null) {
                alert("Activity successfullty created")
            }
        } )
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
            </div>
            <div className="backgroundColorActivity">
            <div className="activityTitle">
                    <h1>Create an Activity</h1>
            </div>
            <div className="activityHolder">
                
                <div className="activityDivContainer">
                    <form className="activityForm" onSubmit={handleSubmit}>
                        <div className="activityDiv">
                            <input className="activityName" placeholder="Activity" type="text" value={title}
                            onChange={(e) => setTitle(e.target.value)} required ></input>
                        </div>
                        <div className="activityDiv">
                            <select className="activityDifficulty" name="Difficulty" value={difficulty}
                            onChange={(e) => setDifficulty(e.target.value)} required>
                                <option value="">--Please select a difficulty--</option>
                                <option value='1'>1</option>
                                <option value='2'>2</option>
                                <option value='3'>3</option>
                                <option value='4'>4</option>
                                <option value='5'>5</option>
                            </select>
                        </div>
                        <div className="activityDiv">
                            <input className="activityLength" placeholder="Length (hrs)" type='text' required value={length}
                            onChange={(e) => setLength(e.target.value)}></input>
                        </div>
                        <div className="activityDiv">
                            {/* <input className="activitySeason" placeholder="Season"></input> */}
                            <select className="activitySeason" name="Season" value={season}
                            onChange={(e) => setSeason(e.target.value)} required>
                                <option value="">--Please select a season--</option>
                                <option value='Summer'>Summer</option>
                                <option value='Fall'>Fall</option>
                                <option value='Winter'>Winter</option>
                                <option value='Spring'>Spring</option>
                            </select>
                        </div>
                        <div className="activityDiv">
                                <select className="activityCountry" placeholder="Country" id="countrySelect" required>
                                    <option value=''>--Please select a country--</option>
                                    {paises.length && paises.map(selected => {
                                        return (
                                            <option value={selected.id}>{ selected.name }</option>
                                        )
                                    })}
                                </select>
                                <button className="submitCountryButton" onClick={handleAddCountry}>Add Country</button>
                                <button className="resetCountryButton" onClick={resetCountries}>Reset Countries</button>
                        </div>
                        <div>
                            <button className="postActivity" onClick={handleSubmit}>Submit</button>
                        </div>
                    </form>
                    </div>
                    <div className="activityPreview">
                        <div className="activityNamePreview">Activity: {title}</div>
                        <div className="activityDifficultyPreview">Difficulty: {difficulty}</div>
                        <div className="activityLengthPreview">Length: {length} hrs</div>
                        <div className="activitySeasonPreview">Season: {season}</div>
                        <div className="activityCountryPreview">Selected Country: {actividad.countries + ''}</div>
                    </div>

            </div>
            </div>
        </div>
    )
}

export default Activities
