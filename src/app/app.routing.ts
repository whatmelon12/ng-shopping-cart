import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from "@angular/core";

import { UserLoginComponent } from './user/user-login/user-login.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { OrderSuccessComponent } from './shared/components/order-success/order-success.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { UserSingupComponent } from './user/user-singup/user-singup.component';
import { AdminNewProductComponent } from './admin/admin-new-product/admin-new-product.component';
import { AdminEditProductComponent } from './admin/admin-edit-product/admin-edit-product.component';

import { AuthGuard } from './core/guards/auth-guard.service';

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
        component: CheckOutComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'order-success',
        component: OrderSuccessComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'user/orders',
        component: MyOrdersComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'user/login',
        component: UserLoginComponent
    },
    {
        path: 'user/signup',
        component: UserSingupComponent
    },
    {
        path: 'admin/products',
        component: AdminProductsComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'admin/products/new',
        component: AdminNewProductComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'admin/products/:id',
        component: AdminEditProductComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'admin/orders',
        component: AdminOrdersComponent,
        canActivate: [AuthGuard]
    }
];

export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes);