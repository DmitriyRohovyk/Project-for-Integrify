import axios from "axios";

const http = axios.create({
    baseURL: 'https://restcountries.com/v3.1/all'
})

export const api = {
    getCountries: async () => {
    let response = await http.get('/all')
   },
   getCountry: async (name:string) => {
    let response = await http.get('/name/${name}?fullText=true')
    return response.data
   },
 getCountryByCode: async (code:string) => {
    let response = await http.get('/alpha?codes=${code}')
    return response.data
   }
}