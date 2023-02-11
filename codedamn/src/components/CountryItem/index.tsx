import React, {FC} from 'react'
import * as Styled from './styles'
import {Link} from 'react-router-dom'

type Props = { name: string; population: number; region: string; capital: string; flag: string, code?: string, withLink?: boolean }
export const CountryItem: FC<Props> = ({name, population, region, capital, flag, code, withLink = true}) => {
    const element = <>
        <div className='img--area'>
            <img src={flag} alt={`Flag off: ${name}`} width={50}/>
        </div>
        <Styled.Description>
            <p className='name'>{name}</p>
            <p>Population: <span>{population}</span></p>
            <p>Region: <span>{region}</span></p>
            <p>Capital: <span>{capital}</span></p>
        </Styled.Description>
    </>
    return (
        <Styled.CountryItem>
            {withLink ? <Link to={`country/${code}`} className='link'>
                {element}
            </Link> : element}

        </Styled.CountryItem>
    )
}