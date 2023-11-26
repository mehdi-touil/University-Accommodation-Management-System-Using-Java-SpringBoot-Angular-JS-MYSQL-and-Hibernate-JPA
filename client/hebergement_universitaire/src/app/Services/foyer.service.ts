import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map } from 'rxjs';
import { environment } from 'src/environement/environement';
import { Foyer } from '../Models/foyer';

@Injectable({
  providedIn: 'root',
})
export class FoyerService {
  private backendApi = environment.apiBaseUrl;
  constructor(private _http: HttpClient) {}

  NewFoyer(nouveauFoyer: any): Observable<any> {
    return this._http
      .post(`${this.backendApi}/api/logement/add_foyer`, nouveauFoyer)
      .pipe(
        catchError((error) => {
          console.error('Error during API call:', error);
          throw error; // Rethrow the error for further handling
        })
      );
  }
  RecupererTousLesFoyer(): Observable<any> {
    return this._http.get(`${this.backendApi}/api/logement/get/all_foyes`).pipe(
      catchError((error) => {
        console.log('error', error);
        throw error;
      })
    );
  }
  deleteFoyer(id: number): Observable<any> {
    return this._http
      .delete(`${this.backendApi}/api/logement/supprimer/foyer/${id}`)
      .pipe(
        catchError((error) => {
          console.log('errrr', error);
          throw error;
        })
      );
  }
  getById(idFoyer: number): Observable<any> {
    return this._http.get(
      `${this.backendApi}/api/logement/get/foyer/${idFoyer}`
    );
  }
  modifierFoyer(foyer: Foyer) {
    return this._http.put(`${this.backendApi}/api/logement/edit`, foyer).pipe(
      map((response: any) => response),
      catchError((error) => {
        console.log('qulque chose mal passé', error);
        throw error;
      })
    );
  }
}
