import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SharedModule } from '../shared/shared.module';
import { MyErrorStateMatcher } from './components/register/myErrorStateMatcher';

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [SharedModule, AuthRoutingModule],
  providers: [{ provide: MyErrorStateMatcher, useClass: MyErrorStateMatcher }],
})
export class AuthModule {}
