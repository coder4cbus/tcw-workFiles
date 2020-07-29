import { NgModule } from '@angular/core';
import { Routes} from '@angular/router';
import { HomeComponent } from './home.component';

const appRoutes: Routes = [
    {path: '', component: HomeComponent, pathMatch: 'full'}
    ,{path: 'home', component: HomeComponent}
];

@NgModule({
    imports: [ RouterModule.forRoot(appRoutes) ],
    exports: [ RouterModule],
    providers: [ ]
})

export class AppRoutingModule {}

