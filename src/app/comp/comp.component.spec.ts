
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CompComponent } from './comp.component';

describe('CompComponent', () => {
  let component: CompComponent;
  let fixture: ComponentFixture<CompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have aria-live attribute set to polite', () => {
    const compiled = fixture.nativeElement;
    const liveRegion = compiled.querySelector('[aria-live]');
    expect(liveRegion.getAttribute('aria-live')).toBe('polite');
  });

  it('should toggle aria-expanded and aria-hidden attributes', () => {
    const compiled = fixture.nativeElement;
    const button = compiled.querySelector('button');
    const content = compiled.querySelector('#content1');

    button.click();
    fixture.detectChanges();

    expect(button.getAttribute('aria-expanded')).toBe('true');
    expect(content.getAttribute('aria-hidden')).toBe('false');

    button.click();
    fixture.detectChanges();

    expect(button.getAttribute('aria-expanded')).toBe('false');
    expect(content.getAttribute('aria-hidden')).toBe('true');
  });
});

