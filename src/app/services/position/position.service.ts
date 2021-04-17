import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppResponse } from '../../models/response.model';

@Injectable({
  providedIn: 'root'
})
export class PositionService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Promise<Array<string>> {
    return new Promise<Array<string>>(resolve => {
      return this.httpClient.get('position')
          .subscribe((response: AppResponse) => {
            if (response.result) {
              resolve(response.result);
            }
          });
    });
  }
}
