import { Directive, ElementRef, Renderer2 } from '@angular/core';
import { AuthService } from 'src/services/autenticacion.service';

@Directive({
  selector: '[appEmail]'
})
export class EmailDirective {

  constructor(el: ElementRef, private authService: AuthService,  private _renderer: Renderer2) {
    el.nativeElement.style.position = 'fixed';
    el.nativeElement.style.top = '10%';
    el.nativeElement.style.left = '2%';
    el.nativeElement.style.display = 'none';

    authService.currentUserObeservable().subscribe(user => {
      if (user){
        el.nativeElement.style.display = 'inline-block';
        this._renderer.setProperty(el.nativeElement, 'innerHTML', user.email)
      } else {
        el.nativeElement.style.display = 'none';
      }
    })
 }
}
