export const MAKE_LIST_BASE_URL =
  "https://parallelum.com.br/fipe/api/v1/carros/marcas";

export const MODEL_LIST_BASE_URL = (make) => {
  return `https://parallelum.com.br/fipe/api/v1/carros/marcas/${make}/modelos`;
};

export const YEAR_LIST_BASE_URL = (make, model) => {
  return `https://parallelum.com.br/fipe/api/v1/carros/marcas/${make}/modelos/${model}/anos`;
};

export const VEHICLE_BASE_URL = (make, model, year) => {
  return `https://parallelum.com.br/fipe/api/v1/carros/marcas/${make}/modelos/${model}/anos/${year}`;
};
