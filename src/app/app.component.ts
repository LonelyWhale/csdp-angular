import { Component } from '@angular/core';
import { GlobalDataService } from './services/global-data.service';
import { Observable } from 'rxjs/Observable';
import { Menu } from './data/menu';
import { Domain } from './data/domain';
import { ProductService } from './services/product.service';
import { Product } from './data/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  providers: [],
  animations: []
})
export class AppComponent {
  title = 'CSDP管理控制台';
  menus: Menu[] = [
            {
                'id': 1,
                'name': '首页',
                'url': '/dashboard/home'
            }, {
                'id': 2,
                'name': '云服务',
                'url': '/dashboard/products'
            }, {
                'id': 3,
                'name': '用户中心',
                'url': '/dashboard/users'
            }
        ];
  errorMessage: string;

  constructor(private _globalDataService: GlobalDataService, private _productService: ProductService) {
    // this.getTitle();
    // this.getMenus();
  }

  getTitle() {
    // Observable
    // this._globalDataService.getData('api/title').subscribe(
    //   title => this.title = title,
    //   error => this.errorMessage = <any>error
    // );

    // Promise
    this._globalDataService.getDataPromise('api/title').then(title => this.title = title);
  }

  getMenus() {
    this._globalDataService.getData('api/menus').subscribe(
      menu => this.menus = menu,
      error => this.errorMessage = <any>error
    );
  }

}
