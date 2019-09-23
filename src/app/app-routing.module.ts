import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CheckOutComponent } from './check-out/check-out.component';


const routes: Routes = [{
  path: '',
  component: ProductListComponent,
},
{
  // here :Id is given to in form inform router that another param is
  // following the product in the url
  path: 'product/:Ids',
  component: ProductDetailsComponent
},
{
  path: 'checkout',
  component: CheckOutComponent
},
// wildcard path ----this has order and has to be placed last
// this path includes all the other paths that an\re not mentioned above
{
  path: '**',
  redirectTo: ''
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
