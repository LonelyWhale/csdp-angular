import { Injectable } from '@angular/core';
import { Http, Response, Headers, Jsonp, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import '../rxjs-operators';

@Injectable()
export class ProductService {
  private headers = new Headers({
    'Content-Type': 'application/json',
    'authToken': '43a3fe81fda3de52654714457c338f8b'
  });

  private productUrl = '/product/api/v2/products/${product.id}';
  private projectUrl = '/auth/api/v2/project/projectsTenant/';
  private vdcUrl = '/rack/api/v2/vdatacenters/';
  private vpoolUrl = '/rack/api/v2/vpools/listSpecvPool';
  private subnetworkUrl = '/resource/api/v2/resourceCsObj/subnetworks';
  private productSpecsUrl = '/product/api/v2/productSpecs/serviceRequest/product/';

  constructor(private http: Http, private jsonp: Jsonp) { }

  getProduct (productId: string): Observable<any> {
    const url = `/product/api/v2/products/${productId}`;
    return this.http.get(url, {headers: this.headers})
                    .distinctUntilChanged()
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  getVdcOptions (projectId: string): Observable<any> {
    const url = '/auth/api/v2/project/projectsTenant';
    const param = new URLSearchParams();
    param.set('param', JSON.stringify({project_uuid: projectId}));
    return this.http.get(url, {headers: this.headers, search: param})
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  getVdc(morgId: string, state = '1'): Observable<any> {
    const url = '/rack/api/v2/vdatacenters';
    const param = new URLSearchParams();
    param.set('param', JSON.stringify({morgId: morgId, state: state}));
    return this.http.get(url, {headers: this.headers, search: param})
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  getVpoolOptions (morgId: string, productId: string, vdcId: string, state = '1'): Observable<any> {
    const url = '/rack/api/v2/vpools/listSpecvPool';
    const param = new URLSearchParams();
    param.set('param', JSON.stringify({morgId: morgId, productId: productId, vdatacenterId: vdcId, state: state}));
    return this.http.get(url, {headers: this.headers, search: param})
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  getSubNetworkOptions (projectId: string, vpoolId: string, scope = 'order'): Observable<any> {
    const url = '/resource/api/v2/resourceCsObj/subnetworks';
    const param = new URLSearchParams();
    param.set('param', JSON.stringify({projectId: projectId, resourcePoolId: vpoolId, scope: scope}));
    return this.http.get(url, {headers: this.headers, search: param})
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  getSpecOptions (productId: string, targetAttrId: string, params: Object): Observable<any> {
    const url = `/product/api/v2/productSpecs/serviceRequest/product/${productId}/Attr/${targetAttrId}`;
    return this.http.post(url, JSON.stringify(params), {headers: this.headers})
                    .map(this.extractData)
                    .catch(this.handleError);
  }


  private extractData(res: Response) {
    const body = res.json();
    return body || { };
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.log(error);
    return Observable.throw(errMsg);
  }

}
