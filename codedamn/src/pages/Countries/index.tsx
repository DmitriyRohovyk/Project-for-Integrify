import React, {useEffect, useState} from 'react'
import axios from 'axios';
import * as Styled from './styles'
import {Input} from '../../components/Input'
import {CountryItem} from '../../components/CountryItem'

type Country = { name: any; population: number; region: string; capital: string; flag: string, flags: any, cca2: string }
export const Countries = () => {
    const [countries, setCountries] = useState<Country[]>([])
    const [loading, setLoading] = useState(true)
    const [searchValue, setSearchValue] = useState('')

    useEffect(() => {
        setLoading(true);
        axios.get('https://restcountries.com/v3.1/all')
            .then(res => {
                setCountries(res.data);
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
            })
    }, [])

    const filterCountries = countries.filter(country => country.name.common.toLowerCase().includes(searchValue.toLowerCase()));

    return (
        <Styled.Root>
            <Input value={searchValue} setSearchValue={setSearchValue}/>
            <div className='countries'>
                {loading &&
                    <div className=''>Loading...</div>
                }
                {!loading && filterCountries.length === 0 && <div>No data</div>}
                {!loading && filterCountries.length > 0 &&
                    <Styled.CountriesWrapper>{filterCountries.map((item) => {
                        return <CountryItem
                            name={item.name.common}
                            population={item.population}
                            region={item.region}
                            capital={item.capital}
                            flag={item.flags.png}
                            code={item.cca2}
                            key={item.cca2}
                        />
                    })}
                    </Styled.CountriesWrapper>
                }
            </div>
        </Styled.Root>
    )
}

export default Countries