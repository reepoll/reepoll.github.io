$(function () {
        $('#container').highcharts({
            chart: {
                type: 'area'
            },
            title: {
                text: 'Reason for Promises Missed'
            },
            subtitle: {
                text: 'Plumber'
            },
            xAxis: {
                categories: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 6'],
                tickmarkPlacement: 'on',
                title: {
                    enabled: false
                }
            },
            yAxis: {
                title: {
                    text: '# Misses'
                },
                labels: {
                    formatter: function() {
                        return this.value;
                    }
                }
            },
            tooltip: {
                shared: true,
                valueSuffix: ' misses'
            },
            plotOptions: {
                area: {
                    stacking: 'normal',
                    lineColor: '#666666',
                    lineWidth: 1,
                    marker: {
                        lineWidth: 1,
                        lineColor: '#666666'
                    }
                }
            },
            series: [{
                name: 'Weather',
                data: [0, 3, 1, 0, 0]
            }, {
                name: 'Coordination/Scheduling',
                data: [1, 2, 2, 2, 4]
            }, {
                name: 'Materials/Equipment',
                data: [0, 0, 0, 2, 2]
            }, {
                name: 'Permits/Inspection',
                data: [3, 0, 0, 0, 0]
            }]
        });
    });
    
