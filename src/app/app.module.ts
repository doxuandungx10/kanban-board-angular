import { MainViewComponent } from './main-view/main-view.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import {DragDropModule} from '@angular/cdk/drag-drop';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { AppConfigService } from '../app-config.service';
import {
  APP_INITIALIZER,
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
} from '@angular/core';

export function configServiceFactory(config: AppConfigService) {
  return () => config.load();
}



@NgModule({
  declarations: [AppComponent, MainViewComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    FontAwesomeModule,
    SharedModule,
    HttpClientModule,
  ],
  providers: [
    AppConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: configServiceFactory,
      deps: [AppConfigService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
