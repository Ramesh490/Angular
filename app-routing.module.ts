import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateuserComponent } from './createuser/createuser.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:'',component:CreateuserComponent},
  {path:'users', component:UserComponent},
  {path:'create-user',component:CreateuserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
