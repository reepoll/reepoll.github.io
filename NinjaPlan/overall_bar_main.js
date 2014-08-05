$(function () {
        $('#container-bar').highcharts({
            chart: {
                type: 'column'
            },
            title: {
                text: 'PPC by Subcontractor'
            },
            subtitle: { 
                text: 'Click Subcontractor for Reasons Missed',
            },
            xAxis: {
                categories: ['Carpenter', 'Plumber', 'Electrician', 'Mason','']
            },
            yAxis: {
                min: 0,
								max: 100,
                title: {
                    text: 'Percent Plan Complete (%)'
                },
                stackLabels: {
                    enabled: true,
                    style: {
                        fontWeight: '',
                        color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                    }
                }
            },
            legend: {
                align: 'right',
                x: 0,
                verticalAlign: 'top',
                y: 50,
                floating: true,
                backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
                borderColor: '#CCC',
                borderWidth: 1,
                shadow: false
            },
            tooltip: {
                formatter: function() {
                    return '<b>'+ this.x +'</b><br/>'+
                        this.series.name +': '+ this.y +'<br/>'+
                        'Total: '+ this.point.stackTotal;
                }
            },
            plotOptions: {
                column: {
                    stacking: 'normal',
                    dataLabels: {
                        enabled: true,
                        format: '{point.percentage:.1f} %',
                        color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'black',
                        style: {
                            textShadow: '0 0 0px black, 0 0 0px black'
                        }
                    }
                }
            },
            series: [{
                name: 'Incomplete',
                data: [20, 57, 38, 26,0],
                color: '#f7a35c'
            }, {
                name: 'Complete',
                data: [80, 43, 62, 74,0],
                color: '#90ED7D'
            }]
        });
    });
    
