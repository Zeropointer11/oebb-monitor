import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { HttpClientModule } from '@angular/common/http';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import { ConnectionComponent } from './components/home/connection/connection.component';
import { ConnectinSectionsComponent } from './components/home/connection/connection-sections/connection-sections.component';
import { ConnectionDetailsComponent } from './components/home/connection/connection-details/connection-details.component';
import { ConnectionSectionItemComponent } from './components/home/connection/connection-sections/connection-section-item/connection-section-item.component';
import localeDe from '@angular/common/locales/de';
import {registerLocaleData} from '@angular/common';

registerLocaleData(localeDe);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavMenuComponent,
    ConnectionComponent,
    ConnectinSectionsComponent,
    ConnectionDetailsComponent,
    ConnectionSectionItemComponent
  ],
  imports: [
    BrowserModule,
    // import HttpClientModule after BrowserModule.
    HttpClientModule,
    LoggerModule.forRoot({
      level: NgxLoggerLevel.DEBUG,
      serverLogLevel: NgxLoggerLevel.DEBUG
    }),
    AppRoutingModule,
  ],
  providers: [
    Title,
    { provide: LOCALE_ID, useValue: "de-at"}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
