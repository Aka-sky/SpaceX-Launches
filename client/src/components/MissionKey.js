import React from 'react'

export default function MissionKey() {
    return (
        <div className="my-3">
            <p>
                <span class="px-3 bg-success rounded" style={{marginRight: '5px'}}/> = Success
            </p>
            <p>
                <span class="inline-block px-3 bg-danger rounded" style={{marginRight: '5px'}}/> = Failure
            </p>
            
        </div>
    )
}
