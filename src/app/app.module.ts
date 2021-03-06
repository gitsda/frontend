import { UserModule } from './user/user.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { GmapModule } from './gmap/gmap.module';
import { LoginModule } from './login/login.module';
import { PlaybackModule } from './playback/playback.module';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { DeviceModule } from './device/device.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FormsModule,
    HttpModule,
    GmapModule,
    LoginModule,
    PlaybackModule,
    AppRoutingModule,
    DeviceModule,
    UserModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:  [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
