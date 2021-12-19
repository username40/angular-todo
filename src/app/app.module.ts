import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AppComponent} from './app.component';
import {CategoriesComponent} from './views/categories/categories.component';
import {TasksComponent} from './views/tasks/tasks.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    TasksComponent
  ],
  exports: [
    CategoriesComponent,
    TasksComponent
  ],
  imports: [
    BrowserModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
