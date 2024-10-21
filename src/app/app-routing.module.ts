import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { DiceComponent } from './dice/dice.component';
import { CircleComponent } from './circle/circle.component';
import { DirectivesComponent } from './directives/directives.component';
import { PipesComponent } from './pipes/pipes.component';
import { TasksComponent } from './tasks/tasks.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { HigherOrderComponent } from './higher-order/higher-order.component';
import { PraticeComponent } from './pratice/pratice.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { BankComponent } from './bank/bank.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { StudentsComponent } from './students/students.component';
import { CreateUserComponent } from './create-user/create-user.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },

  { path: 'dashboard', component: DashboardComponent, children: [
      { path: 'home', component: HomeComponent },
      { path: 'welcome', component: WelcomeComponent },
      { path: 'databinding', component: DataBindingComponent },
      { path: 'calculator', component: CalculatorComponent },
      { path: 'directives', component: DirectivesComponent },
      { path: 'pipes', component: PipesComponent },
      { path: 'tasks', component: TasksComponent },
      { path: 'higher-order', component: HigherOrderComponent },
      { path: 'flipkart', component: FlipkartComponent },
      { path: 'dice', component: DiceComponent },
      { path: 'circle', component: CircleComponent },
      {path:'pratice',component:PraticeComponent},
      {path:'vehicle',component:VehicleComponent},
      {path:'bank',component:BankComponent},
      {path:'create-vehicle',component:CreateVehicleComponent},
      {path:'students',component:StudentsComponent},
      {path:'create-user',component:CreateUserComponent},
      {path:'studentuser',component:StudentsComponent},
      


      
    ]},




  { path: '', component: LoginComponent },
  { path: '**', component: PagenotfoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
