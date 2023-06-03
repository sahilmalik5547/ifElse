import { Component, OnInit } from '@angular/core';
import * as am5 from '@amcharts/amcharts5';
import * as am5percent from '@amcharts/amcharts5/percent';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';

@Component({
  selector: 'app-donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.scss'],
})
export class DonutChartComponent implements OnInit {
  outcome: any = [
    { title: 'Daily', value: 573.12 },
    { title: 'Monthly', value: 4791.23 },
    { title: 'Yearly', value: 19112.16 }
  ];
  ngOnInit() {
    this.createChart();
  }

  createChart() {
    let root = am5.Root.new('chartdiv');

    // Set themes
    root.setThemes([am5themes_Animated.new(root)]);

    // Create chart
    let chart = root.container.children.push(
      am5percent.PieChart.new(root, {
        layout: root.horizontalLayout,
        innerRadius: am5.percent(65),
      })
    );

    // Create series
    let series = chart.series.push(
      am5percent.PieSeries.new(root, {
        valueField: 'value',
        categoryField: 'category',
        // fillField: "color",
        alignLabels: false,
      })
    );

    series.labels.template.setAll({
      forceHidden: true,
    });

    // Set data
    series.data.setAll([
      { value: 10, category: 'Shopping', color: '#0a0a4b' },
      { value: 9, category: 'Workspace', color: '#1919c4' },
      { value: 6, category: 'Food', color: '#73738a' },
      { value: 5, category: 'Entertrainments', color: '#bfbfcc' },
    ]);

    // Create legend
    let legend = chart.children.push(
      am5.Legend.new(root, {
        y: am5.percent(50),
        centerY: am5.percent(50),
        layout: root.verticalLayout,
      })
    );
    legend.valueLabels.template.set('forceHidden', true);

    legend.data.setAll(series.dataItems);

    series.appear(1000, 100);
    root._logo!.dispose();
  }
}
