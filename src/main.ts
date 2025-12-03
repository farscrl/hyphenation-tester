import { provideZoneChangeDetection, importProvidersFrom } from "@angular/core";
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { BrowserModule, bootstrapApplication } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app/app.component";


bootstrapApplication(AppComponent, {
    providers: [importProvidersFrom(BrowserModule, FormsModule)]
})
  .catch(err => console.error(err));
