import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GlobalDataService } from '../services/global-data.service';
import { Domain } from '../data/domain';
import { Menu } from '../data/menu';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.sass']
})
export class NavComponent implements OnInit {
  @Input() title: string;
  @Input() menus: Menu[];
  domains: Domain[] = [
            {
                'id': 1,
                'label': '集团',
                'value': 'group'
            }, {
                'id': 2,
                'label': '湖北',
                'value': 'hubei'
            }
        ];
  errorMessage: string;
  private value = {};
  domain: string;

  constructor(private _globalDataService: GlobalDataService, private router: Router) {  }

  ngOnInit() {
    // this.getDomain();
    this.domain = 'group';
  }

  domainChange(data) {
    this.domain = data;
    if (data === 'group') {
      // this.router.navigate(['/dashboard/products/ecs']);
    }
  }

  updateDomain(data) {
    // console.log(this.domains);
    for (const i in this.domains) {
      if (this.domains[i].id > 0) {
        // console.log(this.domains[i].name);
        // console.log(this.domains[i].id);
      }
    }
    // this._globalDataService.updateDomain('api/domains', data).then(
    //   () => console.log(this.domainValue)
    // );
  }

  getDomain() {
    this._globalDataService.getData('api/domains').subscribe(
      domains => { this.domains = domains; this.domain = 'group'; },
      error => this.errorMessage = <any>error
    );
  }

}
