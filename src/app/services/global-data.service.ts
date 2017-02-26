import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import '../rxjs-operators';

@Injectable()
export class GlobalDataService {
  private headers = new Headers({'Content-Type': 'application/json'});
  domainValue: string;
  constructor(private http: Http) { }

  getData (url: string): Observable<any> {
    return this.http.get(url)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  getDataPromise(url: string): Promise<any> {
    return this.http.get(url)
                    .toPromise()
                    .then(response => response.json().data)
                    .catch(this.handleErrorPromise);
  }

  updateDomain (url: string, value: string): Promise<any> {
    return this.http.put(url, JSON.stringify({domain: value}), {headers: this.headers})
                    .toPromise()
                    .then(() => value)
                    .catch(this.handleErrorPromise);
  }

  private extractData(res: Response) {
    const body = res.json();
    return body.data || { };
  }

  private updateData(res: Response) {
    console.log(res);
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.log(errMsg);
    return Observable.throw(errMsg);
  }

  private handleErrorPromise(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
