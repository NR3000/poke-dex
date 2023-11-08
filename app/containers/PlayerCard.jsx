import React from 'react'

const PlayerCard = (props) => {


    let zone = new Date(props.playerData.UpComingMatchesList[0].MDate)

    return (
        <div className='inline-flex flex-col h-full bg-white p-4 rounded-lg gap-2 shadow-md shadow-neutral-700/50'>
            {/* <div className='w-full'><img src={`./player-images/${props.playerData.Id}.jpg`} alt={props.playerData.PDName} /></div> */}
            <div className='player-details'>
                <p><span className='font-xs font-bold'>Name: </span>{props.playerData.PFName}</p>
                <p><span className='font-xs font-bold'>Skills: </span>{props.playerData.SkillDesc}</p>
                <p><span className='font-xs font-bold'>Value: </span>${props.playerData.Value}</p>
                <p>
                    <span className='font-xs font-bold'>Match: </span>
                    {
                        props.playerData.UpComingMatchesList[0].CCode === "" ?
                            "-"
                            :
                            props.playerData.UpComingMatchesList[0].CCode + " vs " + props.playerData.UpComingMatchesList[0].VsCCode
                    }
                </p>
                <p>
                    <span className='font-xs font-bold'>Date: </span>
                    {
                        props.playerData.UpComingMatchesList[0].MDate === "" ?
                            "-"
                            :
                            zone.getDate() + "-" + (zone.getMonth() < 10 ? "0" + (zone.getMonth() + 1) : (zone.getMonth() + 1)) + "-" + zone.getFullYear() + " " + zone.toLocaleTimeString()
                    }
                </p>
            </div>
        </div>
    )
}


export default PlayerCard