import axios from 'axios';

const API_URL = 'https://viacep.com.br/ws';

export function searchCep(cep: string) {
  return axios(`${API_URL}/${cep}/json`)
};

export function searchTemperature( city:string, uf:string ) {
  return axios.get(`https://api.hgbrasil.com/weather?format=json-cors&key=ddbfde26&city_name=${city},${uf}`)
}