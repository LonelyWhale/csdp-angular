import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Menu } from './menu';
import { Product } from './product';
import { Domain } from './domain';

export class InMemAppDataService implements InMemoryDbService {
    createDb() {
        const title = 'CSDP管理控制台';
        const domains: Domain[] = [
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
        const menus: Menu[] = [
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
            // }, {
            //     'id': 4,
            //     'name': '控制中心',
            //     'url': '/dashboard/controllers'
            // }, {
            //     'id': 5,
            //     'name': '管理中心',
            //     'url': '/dashboard/managers'
            // }
        ];
        const products: Product[] = [
            {
                'id': 1,
                'name': 'Ecs',
                'url': '../ecs'
            }, {
                'id': 2,
                'name': 'Rds',
                'url': '../rds'
            }
            // }, {
            //     'id': 3,
            //     'name': 'Slb',
            //     'url': '../slb'
            // }, {
            //     'id': 4,
            //     'name': 'Oss',
            //     'url': '../oss'
            // }
        ];
        return {title, menus, products, domains};
    }
}
