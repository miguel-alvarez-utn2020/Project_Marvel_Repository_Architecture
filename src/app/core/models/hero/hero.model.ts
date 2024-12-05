import { Comics, Stories, Thumbnail } from "./response.model";

export interface Hero {
  id:          number;
  name:        string;
  description: string;
  modified:    string;
  thumbnail:   Thumbnail;
  resourceURI: string;
  comics:      Comics;
  series:      Comics;
  stories:     Stories;
  events:      Comics;
  urls:        URL[];
}
