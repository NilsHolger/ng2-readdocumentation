import './rxjs-extensions';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app.routing.module';

import { InMemoryWebApiModule } from '../../node_modules/angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data-service';

import { HeroService } from './hero.service';
import { HeroSearchService } from './herosearch.service';
import { NgDiService } from './ngdi.service';
import { LoggerService } from './logger.service';
import { UserService } from './user.service';
import { NgDiProviderService } from './ngdiprovider.service';
import { HeroesAnimationsService } from './heroesanimations.service';

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroSearchComponent } from './herosearch/herosearch.component';
import { DisplayingDataComponent } from './displayingdata/displayingdata.component';
import { ClickMeComponent } from './clickme/clickme.component';
import { NgFormComponent } from './ngform/ngform.component';
import { IWantAndroidComponent } from './iwantandroid/iwantandroid.component';
import { NgDependencyInjectionComponent } from './ngdependencyinjection/ngdependencyinjection.component';
import { AnimTrans2StatesComponent } from './animtrans2states/animtrans2states.component';
import { AnimTransEnterLeaveComponent } from './animtransenterleave/animtransenterleave.component';
import { AttributeHostComponent } from './attributehost/attributehost.component';
import { HighlightDirective } from './highlight.directive';


@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent,
    HeroSearchComponent,
    DisplayingDataComponent,
    ClickMeComponent,
    NgFormComponent,
    IWantAndroidComponent,
    NgDependencyInjectionComponent,
    AnimTrans2StatesComponent,
    AnimTransEnterLeaveComponent,
    AttributeHostComponent,
    HighlightDirective 
  ],
  imports: [
    BrowserModule,
    FormsModule,  
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [HeroService, HeroSearchService,
  NgDiService, LoggerService, UserService, NgDiProviderService, HeroesAnimationsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
