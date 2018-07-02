import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/AuthInterceptor';
import { DomainFormsModule } from './domain-forms/domain-forms.module';
import { ViewComponentsModule } from './view-components/view-components.module';
import { LoginService } from './services/Login.service';
import { TimeFilterInterceptor } from './interceptors/TimeFilterInterceptor';

@NgModule({
  imports: [
    CommonModule,
    DomainFormsModule,
    ViewComponentsModule
  ],
  declarations: [],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: TimeFilterInterceptor, multi: true }
  ],
  exports: [
    DomainFormsModule,
    ViewComponentsModule
  ]
})
export class DomainModule { }
