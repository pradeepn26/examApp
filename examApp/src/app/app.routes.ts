import { Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { ExperienceComponent } from './experience/experience.component';
import { ExpertiseComponent } from './expertise/expertise.component';
import { GoalsComponent } from './goals/goals.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { HomeComponent } from './home/home.component';
import { TrainingsComponent } from './trainings/trainings.component';

export const routes: Routes = [
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home',component:HomeComponent},
    {path:'expertise',component:ExpertiseComponent},
    {path:'experience',component:ExperienceComponent},
    {path:'goals',component:GoalsComponent},
    {path:'trainings',component:TrainingsComponent},
    {path:'hobbies',component:HobbiesComponent},
    {path:'contact',component:ContactComponent},
];
