import { Component, OnInit, AfterViewChecked, ViewChild, OnChanges, Input, SimpleChanges } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EcsOrder } from './ecs-order';
import { Product } from '../../data/product';
import { ProductService } from '../../services/product.service';
import { async } from '@angular/core/testing';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import '../../rxjs-operators';

@Component({
  selector: 'app-ecs',
  templateUrl: './ecs.component.html',
  styleUrls: ['./ecs.component.sass']
})
export class EcsComponent implements OnInit, AfterViewChecked {
  autoTicks = false;
  disabled = false;
  invert = false;
  max = 100;
  min = 0;
  showTicks = false;
  step = 1;
  thumbLabel = false;
  value = 0;
  vertical = false;
  model = new EcsOrder('test20170101', '2018', 'project02', '', '', '', '', '', '');
  times = [
    {value: '2015', label: '2015'},
    {value: '2016', label: '2016'},
    {value: '2017', label: '2017'},
    {value: '2018', label: '2018'},
    {value: '2019', label: '2019'},
    {value: '2020', label: '2020'}
  ];
  projects = [
    {value: 'project01', label: 'project01'},
    {value: 'project02', label: 'project02'}
  ];
  subNetworks = [];
  subNetworkIps = [];
  areas: string[];
  cpus: string[];
  memorys: string[];
  // vdcs = ['noadapter', 'CSwebConsole'];
  submitted = false;
  product: any;
  spec: any;
  errorMessage: string;

  // orderForm: NgForm;
  // @ViewChild('orderForm') currentForm: NgForm;

  // formErrors = {
  //   'name': '',
  //   'power': ''
  // };
  vdcModel: NgModel;
  @ViewChild('vdcRef') vdcCurrentModel: NgModel;
  areaModel: NgModel;
  @ViewChild('areaRef') areaCurrentModel: NgModel;
  cpuModel: NgModel;
  @ViewChild('cpuRef') cpuCurrentModel: NgModel;

  // validationMessages = {
  //   'name': {
  //     'required':      'Name is required.',
  //     'minlength':     'Name must be at least 4 characters long.',
  //     'maxlength':     'Name cannot be more than 24 characters long.',
  //     'forbiddenName': 'Someone named "Bob" cannot be a hero.'
  //   },
  //   'power': {
  //     'required': 'Power is required.'
  //   }
  // };

  private projectId = '0e085dbde2ba49c3a6f62cc8a58be0d7';
  private productId = 'ea3c901593cf4f8d9bad612fb7f75dba';
  private morgId = '9ebbe3c1-628e-11e6-9e1b-e0db55cd9154';

  vdcs: string[];
  // _model: EcsOrder;

  // set model(value: EcsOrder) {
  //   this._model.name = value.name || '';
  //   this._model.time = value.time || '';
  //   this._model.project = value.project || '';
  //   this._model.vdc = value.vdc || '';
  //   this._model.area = value.area || '';
  //   this._model.subNetwork = value.subNetwork || '';
  //   this._model.subNetworkIp = value.subNetworkIp || '';
  //   this._model.cpu = value.cpu || '';
  //   this._model.memory = value.memory || '';
  // }

  // get model() {
  //   return this._model;
  // }

  constructor(private route: ActivatedRoute, private router: Router, private _productService: ProductService) {  }

  ngOnInit() {
    this.getVdc(this.morgId, '1');
  }

  ngAfterViewChecked() {
    this.vdcModelChanged();
  }

  vdcModelChanged() {
    if (this.vdcModel === this.vdcCurrentModel) { return; }
    this.vdcModel = this.vdcCurrentModel;
    if (this.vdcModel) {
      this.vdcModel.valueChanges.subscribe(
        data => { if (data) { this.getVpool(this.morgId, this.productId, data, '1'); this.areaModelChanged(); } }
      );
    }
  }

  areaModelChanged() {
    if (this.areaModel === this.areaCurrentModel) { return; }
    this.areaModel = this.areaCurrentModel;
    if (this.areaModel) {
      this.areaModel.valueChanges.subscribe(
        data => { if (data) { this.getCpuSpec(this.productId, 'vm_cpu', { vm_res_pool: data }); this.cpuModelChanged(); } }
      );
    }
  }

  cpuModelChanged() {
    if (this.cpuModel === this.cpuCurrentModel) { return; }
    this.cpuModel = this.cpuCurrentModel;
    if (this.cpuModel) {
      this.cpuModel.valueChanges.subscribe(
        data => { if (data) { this.getMemorySpec(this.productId, 'vm_memory', { vm_res_pool: this.model.area, vm_cpu: data }); } }
      );
    }
  }


  // formChanged() {
  //   if (this.currentForm === this.orderForm) { return; }
  //   this.orderForm = this.currentForm;
  //   if (this.orderForm) {
  //     console.log(this.orderForm);
  //     this.orderForm.valueChanges
  //       .subscribe(data => this.onValueChanged(data));
  //   }
  // }

  // onValueChanged(data?: any) {
  //   console.log(data);
  //   if (!this.orderForm) { return; }
  //   const form = this.orderForm.form;
  //   for (const field in this.formErrors) {
  //     if (this.formErrors.hasOwnProperty(field)) {
  //       // clear previous error message (if any)
  //       this.formErrors[field] = '';
  //       const control = form.get(field);
  //       if (control && control.dirty && !control.valid) {
  //         const messages = this.validationMessages[field];
  //         for (const key in control.errors) {
  //           if (this.formErrors.hasOwnProperty(field)) {
  //             this.formErrors[field] += messages[key] + ' ';
  //           }
  //         }
  //       }
  //     }
  //   }
  // }

  onSubmit() {
    this.submitted = true;
  }

  getProduct() {
    this._productService.getProduct(this.productId).subscribe(
      product => { this.product = product; },
      error => this.errorMessage = <any>error
    );
  }

  getVdc(morgId: string, state: string) {
    this._productService.getVdc(morgId, state).subscribe(
      vdcs => { this.vdcs = vdcs; this.model.vdc = vdcs[0].id; },
      error => this.errorMessage = <any>error
    );
  }

  getVdcOptions() {
    this._productService.getVdcOptions(this.projectId).subscribe(
      project => { this.getVdc(project[0].tenantResource.morgId, '1'); },
      error => this.errorMessage = <any>error
    );
  }

  getCpuSpec(productId: string, attr: string, params: Object) {
    this._productService.getSpecOptions(productId, attr, params).subscribe(
      cpus => { this.cpus = cpus.values; this.model.cpu = cpus.values[0]; },
      error => this.errorMessage = <any>error
    );
  }

  getMemorySpec(productId: string, attr: string, params: Object) {
    this._productService.getSpecOptions(productId, attr, params).subscribe(
      memorys => { this.memorys = memorys.values; this.model.memory = memorys.values[0]; },
      error => this.errorMessage = <any>error
    );
  }

  getVpool(morgId: string, productId: string, vdcId: string, state: string) {
    this._productService.getVpoolOptions(morgId, productId, vdcId, state).subscribe(
      vpool => { this.areas = vpool; if (vpool.length > 0) { this.model.area = vpool[0].id; } },
      error => this.errorMessage = <any>error
    );
  }

  get diagnostic() { return JSON.stringify(this.model); }

}
