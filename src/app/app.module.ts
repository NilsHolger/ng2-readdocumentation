import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { InMemoryWebApiModule } from '../../node_modules/angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data-service';

import './rxjs-extensions';

import { AppRoutingModule } from './app.routing.module';
import { HeroService } from './hero.service';
import { HeroSearchService } from './herosearch.service';
import { NgDiService } from './ngdi.service';
import { LoggerService } from './logger.service';
import { UserService } from './user.service';
import { NgDiProviderService } from './ngdiprovider.service';
import { HeroesAnimationsService } from './heroesanimations.service';
import { WikipediaService } from './wikipedia.service';

import { HdiHeroesService } from './hdiheroes.service';
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
import { ComponentStylesComponent } from './componentstyles/componentstyles.component';
import { QuestRetrieveA1StyleGuideDeleteJonPapaIsMSRepositoryComponent } from './quest-retrieve-a1-styleguide-delete-jonpapa-isms-repository/quest-retrieve-a1-styleguide-delete-jonpapa-isms-repository.component';
import { ComponentStylesMainComponent } from './componentstyles-main/componentstyles-main.component';
import { ComponentStylesHeroTeamComponent } from './componentstylesteam/componentstylesteam.component';
import { ComponentStylesDetailsComponent } from './componentstylesdetails/componentstylesdetails.component';
import { ComponentStylesControlsComponent } from './componentstylescontrols/componentstylescontrols.component';
import { HierarchicalDependencyInjectorsListComponent } from './hierarchicaldependencyinjectorslist/hierarchicaldependencyinjectorslist.component';
import { HdiEditorComponent } from './hdieditor/hdieditor.component';
import { HdiCardComponent } from './hdicard/hdicard.component';
import { HomeComponent } from './home/home.component';
import { HttpClientComponent } from './httpclient/httpclient.component';
import { HttpClientTohListComponent } from './httpclienttohlist/httpclienttohlist.component';
import { HttpClientTohListPromiseComponent } from './httpclienttohlistpromise/httpclienttohlistpromise.component';
import { WikiComponent } from './wiki/wiki.component';
import { WikiSmartComponent } from './wiki-smart/wiki-smart.component';
import { LifeCycleHooksComponent } from './lifecyclehooks/lifecyclehooks.component';
import { PeekaBooParentComponent } from './peekabooparent/peekabooparent.component';
import { PeekaBooComponent } from './peekaboo/peekaboo.component';
import { SpyComponent } from './spy/spy.component';
import { SpyDirective } from './spy.directive';
import { OnChangesComponent } from './onchanges/onchanges.component';
import { OnChangesParentComponent } from './onchangesparent/onchangesparent.component';
import { DoCheckComponent } from './docheck/docheck.component';
import { DoCheckParentComponent } from './docheckparent/docheckparent.component';
import { AfterViewComponent } from './afterview/afterview.component';
import { AfterViewParentComponent } from './afterviewparent/afterviewparent.component';
import { AfterViewParentParentComponent } from './afterviewparentparent/afterviewparentparent.component';
import { MakeChildComponent } from './makechild/makechild.component';
import { AfterContentComponent } from './aftercontent/aftercontent.component';
import { AfterContentParentComponent } from './aftercontentparent/aftercontentparent.component';
import { MyCounterComponent } from './mycounter/mycounter.component';
import { CounterParentComponent } from './counterparent/counterparent.component';
import { PipesComponent } from './pipes/pipes.component';
import { HappyBirthdayV1Component } from './happybirthdayv1/happybirthdayv1.component';
import { HappyBirthdayV2Component } from './happybirthdayv2/happybirthdayv2.component';
import { ExponentialStrengthPipe } from './exponentialstrength.pipe';
import { PowerBoosterComponent } from './powerbooster/powerbooster.component';
import { PowerBoosterCalculatorComponent } from './powerboostercalculator/powerboostercalculator.component';
import { FlyingHeroesPureComponent } from './flyingheroespure/flyingheroespure.component';
import { FlyingHeroesImpureComponent } from './flyingheroesimpure/flyingheroesimpure.component';
import { TeleportingHeroesPipe, TeleportingHeroesPipeImpure } from './teleportingheroes.pipe';
import { HeroAsyncMessageComponent } from './heroasyncmessage/heroasyncmessage.component';
import { HeroListComponent } from './herolist/herolist.component';
import { RoutingComponent } from './routing/routing.component';
import { AdminComponent } from './routing/admin/admin.component';
import { CrisisHeroesComponent } from './routing/heroes/heroes.component';
import { LoginComponent } from './routing/login/login.component';
import { CrisisCenterHomeComponent } from './routing/crisiscenter/crisiscenterhome/crisiscenterhome.component';
import { CrisisCenterListComponent } from './routing/crisiscenter/crisiscenterlist/crisiscenterlist.component';
import { CrisisCenterDetailComponent } from './routing/crisiscenter/crisiscenterdetail/crisiscenterdetail.component';
import { CrisisCenterRouterComponent } from './routing/crisiscenter/crisiscenter/crisiscenter.component';


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
    HighlightDirective,
    ComponentStylesComponent,
    QuestRetrieveA1StyleGuideDeleteJonPapaIsMSRepositoryComponent,
    ComponentStylesMainComponent,
    ComponentStylesHeroTeamComponent,
    ComponentStylesDetailsComponent,
    ComponentStylesControlsComponent,
    HierarchicalDependencyInjectorsListComponent,
    HdiEditorComponent,
    HdiCardComponent,
    HomeComponent,
    HttpClientComponent,
    HttpClientTohListComponent,
    HttpClientTohListPromiseComponent,
    WikiComponent,
    WikiSmartComponent,
    LifeCycleHooksComponent,
    PeekaBooParentComponent,
    PeekaBooComponent,
    SpyComponent,
    SpyDirective,
    OnChangesComponent,
    OnChangesParentComponent,
    DoCheckComponent,
    DoCheckParentComponent,
    AfterViewComponent,
    AfterViewParentComponent,
    AfterViewParentParentComponent,
    MakeChildComponent,
    AfterContentComponent,
    AfterContentParentComponent,
    MyCounterComponent,
    CounterParentComponent,
    PipesComponent,
    HappyBirthdayV1Component,
    HappyBirthdayV2Component,
    ExponentialStrengthPipe,
    PowerBoosterComponent,
    PowerBoosterCalculatorComponent,
    FlyingHeroesPureComponent,
    FlyingHeroesImpureComponent,
    TeleportingHeroesPipe,
    TeleportingHeroesPipeImpure,
    HeroAsyncMessageComponent,
    HeroListComponent,
    RoutingComponent,
    AdminComponent,
    HeroesComponent,
    LoginComponent,
    CrisisCenterHomeComponent,
    CrisisCenterListComponent,
    CrisisCenterDetailComponent,
    CrisisCenterRouterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,  
    AppRoutingModule,
    HttpModule,
    JsonpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [HeroService, HeroSearchService,
  NgDiService, LoggerService, UserService, NgDiProviderService,
   HeroesAnimationsService, HdiHeroesService, WikipediaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
