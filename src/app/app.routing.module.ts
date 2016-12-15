import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { DisplayingDataComponent } from './displayingdata/displayingdata.component'
import { ClickMeComponent } from './clickme/clickme.component';
import { NgFormComponent } from './ngform/ngform.component';
import { NgDependencyInjectionComponent } from './ngdependencyinjection/ngdependencyinjection.component';
import { AnimTrans2StatesComponent } from './animtrans2states/animtrans2states.component';
import { AnimTransEnterLeaveComponent } from './animtransenterleave/animtransenterleave.component';
import { AttributeHostComponent } from './attributehost/attributehost.component';
import { ComponentStylesComponent } from './componentstyles/componentstyles.component';
import { HierarchicalDependencyInjectorsListComponent } from './hierarchicaldependencyinjectorslist/hierarchicaldependencyinjectorslist.component';
import { HttpClientComponent } from './httpclient/httpclient.component';
import { LifeCycleHooksComponent } from './lifecyclehooks/lifecyclehooks.component';
import { PipesComponent } from './pipes/pipes.component';
import { CrisisCenterHomeComponent } from './routing/crisiscenter/crisiscenterhome/crisiscenterhome.component';
const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'detail/:id', component: HeroDetailComponent},
    {path: 'heroes', component: HeroesComponent},
    {path: 'displayingdata', component: DisplayingDataComponent},
    {path: 'clickme', component: ClickMeComponent},
    {path: 'ngform', component: NgFormComponent},
    {path: 'dependencyinjection', component: NgDependencyInjectionComponent},
    {path: 'transition2states', component: AnimTrans2StatesComponent },
    {path: 'transitionenterleave', component: AnimTransEnterLeaveComponent},
    {path: 'attributehighlight', component: AttributeHostComponent},
    {path: 'componentstyles', component: ComponentStylesComponent},
    {path: 'hierarchicaldependencyinjection', component: HierarchicalDependencyInjectorsListComponent},
    {path: 'http', component: HttpClientComponent},
    {path: 'lifecyclehooks', component: LifeCycleHooksComponent},
    {path: 'pipes', component: PipesComponent},
    {path: 'routing', component: CrisisCenterHomeComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
