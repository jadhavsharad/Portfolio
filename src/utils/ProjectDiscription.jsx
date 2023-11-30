import React from 'react'

export default function ProjectDiscription({Title, Discription}) {
    return (
        <div>
            <h1 className=' my-8 '>{Title}</h1>
            <p className=' my-8 text-xl text-justify text-zinc-400'>{Discription}</p>
        </div>
    )
}
