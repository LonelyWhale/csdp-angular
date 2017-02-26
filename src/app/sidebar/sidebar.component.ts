import { Component, OnInit } from '@angular/core';
import { GlobalDataService } from '../services/global-data.service';
import { Product } from '../data/product';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent implements OnInit {
  products: Product[] = [
            {
                'id': 1,
                'name': 'Ecs',
                'url': '../ecs'
            }, {
                'id': 2,
                'name': 'Rds',
                'url': '../rds'
            }
        ];
  errorMessage: string;

  constructor(private _globalDataService: GlobalDataService) { }

  ngOnInit() {
    // this.getProduct();
  }

  getProduct() {
    this._globalDataService.getData('api/products').subscribe(
      products => this.products = products,
      error => this.errorMessage = <any>error
    );
  }

}
