import React, {FC, useState, useEffect} from 'react';
import axios from 'axios';

import {CountryItem} from '../../components/CountryItem';

import {useParams} from "react-router-dom";
import * as Styled from './styles'

export const CountryPage: FC<{}> = (props: any) => {
    const {countryCode} = useParams();
    const [countryData, setCountryData] = useState({ population: 0, region: '', capital: [''], flags: {png: '',}, name: {common: '', }});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        if (countryCode) {
            axios.get(`https://restcountries.com/v3.1/alpha/${countryCode}`).then(res => {
                setCountryData(res.data[0])
                setLoading(false);

            }).catch(() => {
                setLoading(false);
            })
        }
    }, [countryCode]);

    if (loading) {
        return <div>
            Loading...
        </div>
    }

    return <Styled.Country>{

        <CountryItem
            name={countryData.name.common}
            population={countryData.population}
            region={countryData.region}
            capital={countryData.capital[0]}
            withLink={false}
            flag={countryData.flags.png}
        />
    }</Styled.Country>
}