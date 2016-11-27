var selectedItem = null;
var theDatas = [];
var chart = null;


var onSelectItem = function(item) {
	chart.config.data.datasets[0].borderWidth = theDatas.map(function(i, ind) {
		if(item._index == ind) {
			return 5
		}

		return 2
	});

	chart.config.data.datasets[0].backgroundColor = theDatas.map(function(i, ind) {
		if(item._index == ind) {
			return "#98AFC7"
		}

		return "rgba(255, 159, 64, 0.2)"
	});

	console.log(theDatas[item._index]);

	jQuery('.heure').text(theDatas[item._index].heures);
	jQuery('.temperature .data').text(theDatas[item._index].temperature);
	jQuery('.energie .data').text(theDatas[item._index].energie);
	jQuery('.humeur .data').text(theDatas[item._index].humeur);
	jQuery('.pressionArterielle .data').text(theDatas[item._index].pressionArterielle);
	jQuery('.pulsations .data').text(theDatas[item._index].pulsations);

	jQuery(".informations").fadeIn(5000);
	chart.update();
};

var onDeselectAllItems = function() {
	chart.config.data.datasets[0].borderWidth = 2

	jQuery(".informations").fadeOut(5000);
	chart.update();
}


$(document).ready(function(){
	jQuery.ajax({
		url: 'https://webcupcosmo.eu.meteorapp.com/api/cosmonautes/maurice',
		success: function ( datas ) {
			theDatas = datas

			chart = new Chart("myChart", {
			    type: 'line',
			    data: {
				    labels: datas.map(function(d) {
				        return d.heures;
				    }),
				    datasets: [
				        {
				            label: "Temperature",
				            backgroundColor: '#FFFFFF' ,
				            // opacity: 0.2,
				            borderColor: 'orange',
				            borderWidth: 2,
				            data: datas.map(function(d) {
				            	return d.temperature
				            }),
				        }
				    ]
				},
			    options: {
			        scales: {
			            xAxes: [{
			                stacked: true
			            }],
			            yAxes: [{
			                stacked: false
			            }]
			        },
			        maintainAspectRatio: false,
			        onClick: function(e, a) {
			        	if(a[0]) {
			        		onSelectItem(a[0]);
			        	}
			        	else {
			        		onDeselectAllItems();
			        	}
			        }
			    }
			});
		}
	});

});