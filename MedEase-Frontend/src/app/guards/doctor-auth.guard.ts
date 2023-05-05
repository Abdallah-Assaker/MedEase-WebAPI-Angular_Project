import { UserAuthService } from 'src/app/services/authentication/user-auth.service';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DoctorAuthGuard implements CanActivate {
  constructor(
    private _userAuthService: UserAuthService,
    private _router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (
      this._userAuthService.isUserLogged &&
      this._userAuthService.getLoggedUserRole === 'Doctor'
    ) {
      return true;
    } else {
      this._router.navigate(['/notallowed']);
    }
    return true;
  }
}
