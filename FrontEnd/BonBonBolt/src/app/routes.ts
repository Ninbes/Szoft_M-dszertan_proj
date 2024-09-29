import { Routes } from "@angular/router";
import { BonbonComponent } from "./bonbon/bonbon.component";
import { DetailsComponent } from "./details/details.component";
const routerConfig: Routes = [
    {
        path:'',
        component:BonbonComponent,
        title: 'Fő oldal'
    },
    {
        path:'details/:id',
        component:DetailsComponent,
        title:'Bővebben'
    }
];
export default routerConfig;