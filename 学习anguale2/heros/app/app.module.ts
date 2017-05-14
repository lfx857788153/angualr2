import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { AppRoutingModule, routedComponents } from './app-routing.module';


@NgModule({
  imports: [
    BrowserModule,
    // FormsModule,
    AppRoutingModule,
    // HttpModule,
    //InMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 600 })
  ],
  declarations: [
    AppComponent,
    // HeroSearchComponent,
    routedComponents
  ],
  providers: [
    // HeroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
