import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { ProjectEntryComponent } from './components/project-entry/project-entry.component';
import { ProjectDataMemoryStoreService } from './services/project-data-memory-store.service';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { LinkComponent } from './components/link/link.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectEntryComponent,
    ProjectListComponent,
    LinkComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	HttpClientModule,
	HttpClientInMemoryWebApiModule.forRoot(
		ProjectDataMemoryStoreService, { dataEncapsulation: false }
	),
	NgbCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
