import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { ProjectEntryComponent } from './project-entry/project-entry.component';
import { ProjectDataMemoryStoreService } from './services/project-data-memory-store.service';
import { ProjectListComponent } from './project-list/project-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectEntryComponent,
    ProjectListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	HttpClientModule,
	HttpClientInMemoryWebApiModule.forRoot(
		ProjectDataMemoryStoreService, { dataEncapsulation: false }
	)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
