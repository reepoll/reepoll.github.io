$(function () {
        $('#container-line').highcharts({
            title: {
                text: 'PPC by Week',
                x: -20 //center
            },
            subtitle: { 
                text: 'Click Subcontractor for Reasons Missed By Week',
                x: -20
            },
            xAxis: {
                categories: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5']
            },
            yAxis: {
                title: {
                    text: 'PPC (%)'
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            tooltip: {
                valueSuffix: '%'
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle',
                borderWidth: 0
            },
            series: [{
                name: 'Carpenter',
                data: [100, 50, 50, 100, 100]
            }, {
                name: 'Plumber',
                data: [50, 55, 30, 40, 40]
            }, {
                name: 'Electrician',
                data: [60, 100, 40, 40, 70]
            }, {
                name: 'Mason',
                data: [100, 70, 60, 60, 80]
            }]
        });
    });
    
