import { Routes } from '@angular/router';
import { Randomizer } from './randomizer/randomizer';
import { BreakTimer } from './break-timer/break-timer';

export const routes: Routes = [
    {path : 'random', component : Randomizer},
    {path : 'timer', component : BreakTimer}
];
