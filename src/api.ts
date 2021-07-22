import axios from 'axios';

const API_URL = 'https://viacep.com.br/ws';
const HG_KEY = '6c72300f';

export function searchCep(cep: string) {
  return axios(`${API_URL}/${cep}/json/`)
};

export function searchTemperature(city: string, uf: string) {
  return axios.get(`https://api.hgbrasil.com/weather?format=json-cors&key=${HG_KEY}&city_name=${city},${uf}`)
};