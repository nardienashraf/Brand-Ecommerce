import { Routes } from '@angular/router';
import { AuthComponent } from './Layout/Components/auth/auth.component';
import { MainComponent } from './Layout/Components/main/main.component';
import { HomeComponent } from './Pages/Components/home/home.component';
import { NotFoundComponent } from './Pages/Components/not-found/not-found.component';
import { LoginComponent } from './Pages/Components/login/login.component';
import { RegisterComponent } from './Pages/Components/register/register.component';
import { ProductsComponent } from './Pages/Components/products/products.component';
import { BrandsComponent } from './Pages/Components/brands/brands.component';
import { CategoriesComponent } from './Pages/Components/categories/categories.component';
import { CartComponent } from './Pages/Components/cart/cart.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    //Auth Layout
    {
        path: '',
        component: AuthComponent,
        children: [
            {
                path: 'login',
                component: LoginComponent,
                title: 'login'
            },
            {
                path: 'register',
                component: RegisterComponent,
                title: 'register'
            }
        ]
    },
    //Main Layout
    {
        path: '',
        component: MainComponent,
        children:[
            {
                path: 'home',
                component: HomeComponent,
                title: 'home'
            },
            {
                path: 'products',
                component: ProductsComponent,
                title: 'products'
            },
            {
                path: 'brands',
                component: BrandsComponent,
                title: 'brands'
            },
            {
                path: 'categories',
                component: CategoriesComponent,
                title: 'categories'
            },
            {
                path: 'cart',
                component: CartComponent,
                title: 'cart'
            }
        ]
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];
