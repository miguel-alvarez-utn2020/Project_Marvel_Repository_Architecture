import { environment } from "./environment.prod";

export const apiEndpoints = {
  // getCharacters: 'v1/public/characters',
  getCharacters: () => `${environment.apiUrl}/v1/public/characters?apikey=${environment.apiKey}`,
  
};
