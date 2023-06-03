import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaFillChartComponent } from './area-fill-chart.component';

describe('AreaFillChartComponent', () => {
  let component: AreaFillChartComponent;
  let fixture: ComponentFixture<AreaFillChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AreaFillChartComponent]
    });
    fixture = TestBed.createComponent(AreaFillChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
