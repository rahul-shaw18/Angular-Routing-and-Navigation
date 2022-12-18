import { Component } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  RouterStateSnapshot,
} from "@angular/router";

import { Observable } from "rxjs";
import { ContactComponent } from "../contact/contact.component";

export interface IDeactivateComponent{
    canExit:()=> Observable<boolean>|Promise<boolean>|boolean;
}

export class CanDeactivateGuardService implements CanDeactivate<IDeactivateComponent> {
  canDeactivate(
    component: IDeactivateComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot
  ) {
    return component.canExit();
  }
}
