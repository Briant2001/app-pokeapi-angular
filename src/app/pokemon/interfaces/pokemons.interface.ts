export interface SearchResponse {
  count:    number;
  next:     string;
  previous: null;
  results:  URLPokemon[];
}

export interface URLPokemon {
  name: string;
  url:  string;
}
