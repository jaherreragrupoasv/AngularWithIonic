import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import { ChartsModule } from 'ng2-charts';


import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { SigninPageModule } from '../pages/signin/signin.module';
import { QuotesPageModule } from '../pages/quotes/quotes.module';
import { OrdersPageModule } from '../pages/orders/orders.module';
import { QuotedetailPageModule } from '../pages/quotedetail/quotedetail.module';
import { OrderbookPageModule } from '../pages/orderbook/orderbook.module';
import { SettingsPageModule } from '../pages/settings/settings.module';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BitstampProvider } from '../providers/bitstamp/bitstamp';
import { BitfinexProvider } from '../providers/bitfinex/bitfinex';
import { MetadataProvider } from '../providers/metadata/metadata';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    ChartsModule,
    SigninPageModule,
    QuotesPageModule,
    QuotedetailPageModule,
    OrderbookPageModule,
    SettingsPageModule,
    OrdersPageModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BitstampProvider,
    BitfinexProvider,
    MetadataProvider
  ]
})
export class AppModule {}
