import { Routes } from '@angular/router';
import {VoitureComponent} from "./components/voiture/voiture.component";
import {DetailVoitureComponent} from "./components/detail-voiture/detail-voiture.component";
import {LoginComponent} from "./components/login/login.component";
import {AdminVoitureComponent} from "./components/admin-voiture/admin-voiture.component";
import {loginGuard} from "./guards/login-guard";
import {AdminEditVoitureComponent} from "./components/admin-edit-voiture/admin-edit-voiture.component";
import {AdminAddVoitureComponent} from "./components/admin-add-voiture/admin-add-voiture.component";

export const routes: Routes = [
  {path:"" ,component:VoitureComponent},
  {path:"voiture/detail/:id" ,component:DetailVoitureComponent},
  {path:"login" ,component:LoginComponent},
  {path:"admin", component:AdminVoitureComponent,canActivate: [loginGuard]},
  {path:"admin/add", component:AdminAddVoitureComponent,canActivate: [loginGuard]},
  {path:"admin/edit/:id", component:AdminEditVoitureComponent,canActivate: [loginGuard]}
];
