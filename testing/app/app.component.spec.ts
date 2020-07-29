import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome.component';
import { AppRoutingModule,  } from './app-routing.module';
import { UserService } from './model';
import { AboutComponent } from './about.component';
import { BannerComponent } from './banner.component';
import { TwainService } from './shared/twain.service';
import { SharedModule } from './shared/shared.module';
import { APP_BASE_HREF } from '@angular/common';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ AppRoutingModule, SharedModule ],
      providers: [ UserService, TwainService, {provide: APP_BASE_HREF, useValue: '/'} ],
      declarations: [
        AppComponent, AboutComponent, BannerComponent, 
        WelcomeComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Test Tour of Heroes');
  }));
});
