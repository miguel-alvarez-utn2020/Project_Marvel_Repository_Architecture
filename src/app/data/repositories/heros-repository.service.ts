import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Hero } from 'src/app/core/models/hero/hero.model';
import { HeroRepository } from 'src/app/core/models/hero/hero.repository';
import { ApiResponse } from 'src/app/core/models/hero/response.model';
import { apiEndpoints } from 'src/environments/endpoint-list';
import { environment } from 'src/environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class HerosRepositoryService implements HeroRepository {
 // public key 74894c50af91c5f2d5b527b420981568
 // private key: bfa9441e11f6cce6e3779fe56bc1f74186a7913b



  constructor(private httpClient: HttpClient) { }



  getHeroById(id: number): Observable<Hero>{
    const url = `${environment.apiUrl}${apiEndpoints.getCharacters}/${id}?apikey=${environment.apiKey}`

    return this.httpClient.get<ApiResponse>(url).pipe(
      map((apiResponse: ApiResponse) => {
        return apiResponse.data.results[0]
      })
    );
  }

  getHeroList(): Observable<Hero[]>{
    const url = apiEndpoints.getCharacters();

    return this.httpClient.get<ApiResponse>(url).pipe(
      map((apiResponse: ApiResponse) => {
        console.log(apiResponse);

        return apiResponse.data.results
      })
    );
  }


}
