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

export type City = {
  index: number;
  temp: number;
  city: string;
  uf: string;
  cep: string;
  logradouro: string;
}