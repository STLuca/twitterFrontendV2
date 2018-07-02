import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { TweetFormComponent } from './tweet-form/tweet-form.component';
import { CustomMaterialModule } from '../../custom-material/custom-material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    CustomMaterialModule,
    ReactiveFormsModule
  ],
  declarations: [
    LoginFormComponent,
    RegisterFormComponent,
    TweetFormComponent,
  ],
  exports: [
    LoginFormComponent,
    RegisterFormComponent,
    TweetFormComponent,
  ]
})
export class DomainFormsModule { }
