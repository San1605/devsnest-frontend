
import { FC } from 'react'
interface AppProps{
title: string
}
const Card :FC<AppProps>= ({title}) => {
    return (
        <div>
            <h1>{title}</h1>
        </div>
    )
}

export default Card