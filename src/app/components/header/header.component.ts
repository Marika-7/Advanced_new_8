import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { clickOutsideDirective } from 'src/app/click-outside.directive';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public screenIs1200 = false;
  public burgerIsOpen = false;

  constructor(public breakpoinObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.breakpoinObserver
      .observe(['(max-width: 1200px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.screenIs1200 = true;
        } else {
          this.screenIs1200 = false;
        }
      });
  }

  openBurgerMenu(): void {
    this.burgerIsOpen = !this.burgerIsOpen;
  }

  closeBurgerMenu(): void {
    this.burgerIsOpen = false
  }

}
