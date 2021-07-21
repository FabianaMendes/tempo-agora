export type CepLocation = {
  bairro: string;
  cep: string;
  complemento: string;
  ddd: string;
  gia: string;
  ibge: string;
  localidade: string;
  logradouro: string;
  siafi: string;
  uf: string;
}

export type CepList = {
  ceps: CepLocation[];
}

export type Data = {
  by: string;
  execution_time: number;
  from_cache: boolean;
  results: Results[];
  valid_key: boolean;
}

export type Results = {
  cid: string;
  city: string;
  city_name: string;
  condition_code: string;
  condition_slug: string;
  currently: string;
  date: string;
  description: string;
  forecast: Forecast[];
  humidity: number;
  img_id: string;
  sunrise: string;
  sunset: string;
  temp: number;
  time: string;
  wind_speedy: string;
}

export type Forecast = {
  objects: Object[];
}

export type Object = {
  condition: string;
  date: string;
  description: string;
  max: number;
  min: number;
  weekday: string;
}

export type City = {
  index: number;
  temp: number;
  city: string;
  uf: string;
  cep: string;
  logradouro: string;
}

export type ListOfCities = {
  cities: City[];
}