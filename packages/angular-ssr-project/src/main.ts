import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { defineCustomElements } from '../../component-lib/loader';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

const green = "#228B22";
(window as any).CustomConfig = { color: green, onReady: (api: any) => console.log("Angular SSR Custom API", api)};

defineCustomElements(window);
