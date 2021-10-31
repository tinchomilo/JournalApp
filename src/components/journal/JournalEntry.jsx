import React from 'react'

export const JournalEntry = () => {
    return (
        <div className="journal__entry pointer">

            <div 
                className="journal__entry-picture"
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: 'url(https://www.mochilerosviajeros.com/wp-content/uploads/2021/02/AURORA-BOREAL-scaled.jpg)'
                }}
            >
            </div>

            <div className="journal__entry-body">
                <p className="journal__entry-titile">
                    Un nuevo día
                </p>
                <p className="journal__entry-content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ex aliquid, illo 
                </p>
            </div>

            <div className="journal__entry-date-box">
                <span>Monday</span>
                <h4>28</h4>
            </div>
            
            
            
        </div>
    )
}
