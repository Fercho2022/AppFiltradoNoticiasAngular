import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  constructor(private http: HttpClient) { }

  getNoticias(parametros:any): Observable<any>{

    const URL=`https://newsapi.org/v2/top-headlines?country=${parametros.pais}&category=${parametros.categoria}&apiKey=2f06d419c0824314a13f245eff8e7f4a`;

    return this.http.get(URL);
  }

}
