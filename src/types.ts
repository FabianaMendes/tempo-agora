export type CepLocation = {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
}

export type City = {
  index: number;
  temp: number;
  city: string;
  uf: string;
  cep: string;
  logradouro: string;
}