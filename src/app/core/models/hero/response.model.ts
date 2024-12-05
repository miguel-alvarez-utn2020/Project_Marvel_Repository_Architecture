import { Hero } from "./hero.model";


export interface ApiResponse {
  code:            number;
  status:          string;
  copyright:       string;
  attributionText: string;
  attributionHTML: string;
  etag:            string;
  data:            Data;
}



export interface Data {
  offset:  number;
  limit:   number;
  total:   number;
  count:   number;
  results: Hero[];
}

export interface Comics {
  available:     number;
  collectionURI: string;
  items:         ComicsItem[];
  returned:      number;
}

export interface ComicsItem {
  resourceURI: string;
  name:        string;
}

export interface Stories {
  available:     number;
  collectionURI: string;
  items:         StoriesItem[];
  returned:      number;
}

export interface StoriesItem {
  resourceURI: string;
  name:        string;
  type:        string;
}

export interface Thumbnail {
  path:      string;
  extension: string;
}

export interface URL {
  type: string;
  url:  string;
}
