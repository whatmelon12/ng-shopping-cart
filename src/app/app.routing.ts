import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from "@angular/core";

import { UserLoginComponent } from './user/user-login/user-login.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { OrderSuccessComponent } from './shared/order-success/order-success.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'products',
        component: ProductsComponent
    },    
    {
        path: 'cart',
        component: ShoppingCartComponent
    },
    {
        path: 'checkout',
        component: CheckOutComponent
    },
    {
        path: 'order-success',
        component: OrderSuccessComponent
    },
    {
        path: 'user/orders',
        component: MyOrdersComponent
    },
    {
        path: 'user/login',
        component: UserLoginComponent
    },
    {
        path: 'admin/products',
        component: AdminProductsComponent
    },
    {
        path: 'admin/orders',
        component: AdminOrdersComponent
    }
];

export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes);