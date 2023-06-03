import { Component, OnInit } from '@angular/core';
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';

@Component({
  selector: 'app-area-fill-chart',
  templateUrl: './area-fill-chart.component.html',
  styleUrls: ['./area-fill-chart.component.scss'],
})
export class AreaFillChartComponent implements OnInit {
  ngOnInit(): void {
    this.createChart();
  }

  createChart() {
    // Create root element
    let root = am5.Root.new('fillchart');

    // Set themes
    root.setThemes([am5themes_Animated.new(root)]);

    // Create chart
    let chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panX: true,
        panY: true,
        wheelX: 'panX',
        wheelY: 'zoomX',
        pinchZoomX: true,
        layout: root.verticalLayout

      })
    );

    // Add cursor
    let cursor = chart.set(
      'cursor',
      am5xy.XYCursor.new(root, {
        behavior: 'none',
      })
    );
    cursor.lineY.set('visible', false);

    // The data
    let data = [
      {
        value: '01',
        income: 0,
        outcome: 2510,
      },
      {
        value: '05',
        income: 1110,
        outcome: 2110,
      },
      {
        value: '10',
        income: 1510,
        outcome: 1710,
      },
      {
        value: '15',
        income: 2110,
        outcome: 1410,
      },
      {
        value: '20',
        income: 2510,
        outcome:1110,
      },
      {
        value: '25',
        income: 3610,
        outcome: 910,
      },
      {
        value: '30',
        income: 4110,
        outcome: 710,
      }
    ];

    // Create axes
    let xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(root, {
        categoryField: 'value',
        startLocation: 0.5,
        endLocation: 0.5,
        renderer: am5xy.AxisRendererX.new(root, {}),
        tooltip: am5.Tooltip.new(root, {}),
      })
    );

    xAxis.data.setAll(data);

    let yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererY.new(root, {}),
      })
    );

    // Add series
    function createSeries(name: string, field:string,color:string) {
      let series = chart.series.push(
        am5xy.LineSeries.new(root, {
          name: name,
          xAxis: xAxis,
          yAxis: yAxis,
          stacked: true,
          valueYField: field,
          categoryXField: 'value',
          // fill: new am5.Gradient(90deg, rgba(255, 255, 255, 1), 0 %, rgba(41, 71, 170, 0.5102415966386555), 27 %),
          stroke:color as unknown as am5.Color,
          tooltip: am5.Tooltip.new(root, {
            pointerOrientation: 'horizontal',
            labelText: '[bold]{name}[/]\n{categoryX}: {valueY}',
          }),
        })
      );

      series.fills.template.setAll({
        fillOpacity: 0.5,
        visible: true,
      });

      series.data.setAll(data);
      series.appear(1000);
    }

    createSeries('Income', 'income', "#2947AA", );
    createSeries('Outcome', 'outcome', "#E0B1AE");
    // Create axis ranges
    let rangeDataItem :any = xAxis.makeDataItem({
      category: '0',
      endCategory: '5000',
    });

    let range = xAxis.createAxisRange(rangeDataItem);

    rangeDataItem.get('grid').setAll({
      stroke: am5.color(0x00ff33),
      strokeOpacity: 0.5,
      strokeDasharray: [3],
    });

    rangeDataItem.get('axisFill').setAll({
      fill: am5.color(0x00ff33),
      fillOpacity: 0.1,
      visible: true,
    });

    let rangeDataItem2:any = xAxis.makeDataItem({
      category: '0',
      endCategory:"35"
    });

    let range2 = xAxis.createAxisRange(rangeDataItem2);

    rangeDataItem2.get('grid').setAll({
      stroke: am5.color(0x00ff33),
      strokeOpacity: 1,
      strokeDasharray: [3],
    });

    rangeDataItem2.get('axisFill').setAll({
      fill: am5.color(0x00ff33),
      fillOpacity: 0.1,
      visible: true,
    });

    // Make stuff animate on load
    chart.appear(1000, 100);
    root._logo!.dispose();
  }
}
