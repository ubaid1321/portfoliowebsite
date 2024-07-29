import React, { useEffect, useState } from 'react'
import Odometer from 'react-odometerjs'
import './Header.css'
const Facts = () => {
    const [experience,setExprience]=useState(0)
    const [Projects, setProjects] = useState(0)
    const [client, setclient] = useState(0)

    useEffect(()=>{
        const timeoutId =setTimeout(() => {
            setExprience(4)
            setProjects(14)
            setclient(14)
        }, 3000)
        return ()=>{
            clearTimeout(timeoutId)
        }
    },[])
  return (
    <div className='fact_container'>
        <div className='fact_item'>
            <div className='count_container'>
                <Odometer 
                value={experience}

                />
                <span className='indicator'>+</span>
            </div>
            <p className='name'>Years of Experience</p>
        </div>
        <div className='fact_item'>
            <div className='count_container'>
                <Odometer value={Projects}
/>
                <span className='indicator'>+</span>
            </div>
            <p className='name'>Projects Completed</p>
        </div>
        <div className='fact_item'>
            <div className='count_container'>
                <Odometer value={client}

                />
                <span className='indicator'>+</span>
            </div>
            <p className='name'>Satisfied Clients</p>
        </div>
      
    </div>
  )
}

export default Facts
