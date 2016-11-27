function comoros(){
	theData = [];
	$(document).ready(function(){
		jQuery.ajax({
			url: 'https://webcupcosmo.eu.meteorapp.com/api/cosmonautes/comores', 
			success: function ( datas ) {
		    	datas.forEach( function(item) {
		    		theData.push(item);
		    	});

		    	$('#comorosId').empty().prepend(theData[theData.length -1].userId);
		    	$('#comorosheures').empty().prepend(theData[theData.length -1].heures);
		    	$('#comorostemperature').empty().prepend(theData[theData.length -1].temperature);
		    	$('#comorospressionArterielle').empty().prepend(theData[theData.length -1].pressionArterielle);
		    	$('#comorospulsations').empty().prepend(theData[theData.length -1].pulsations);
		    	$('#comoroshumeur').empty().prepend(theData[theData.length -1].humeur);
		    	$('#comorosenergie').empty().prepend(theData[theData.length -1].energie);
			}
		});

	});

};

function madagascar(){
	theData = [];
	$(document).ready(function(){
		jQuery.ajax({
			url: 'https://webcupcosmo.eu.meteorapp.com/api/cosmonautes/madagascar', 
			success: function ( datas ) {
		    	datas.forEach( function(item) {
		    		theData.push(item);
		    	});

		    	$('#madagascarId').empty().prepend(theData[theData.length -1].userId);
		    	$('#madagascarheures').empty().prepend(theData[theData.length -1].heures);
		    	$('#madagascartemperature').empty().prepend(theData[theData.length -1].temperature);
		    	$('#madagascarpressionArterielle').empty().prepend(theData[theData.length -1].pressionArterielle);
		    	$('#madagascarpulsations').empty().prepend(theData[theData.length -1].pulsations);
		    	$('#madagascarhumeur').empty().prepend(theData[theData.length -1].humeur);
		    	$('#madagascarenergie').empty().prepend(theData[theData.length -1].energie);
			}
		});

	});

};

function maurice () {
    theData = [];
    $(document).ready(function(){
        jQuery.ajax({
            url: 'https://webcupcosmo.eu.meteorapp.com/api/cosmonautes/maurice', 
            success: function ( datas ) {
                datas.forEach( function(item) {
                    theData.push(item);
                });
                // console.log(theData[theData.length -1].heures);
                // $('#mauriceId').empty().prepend(theData[theData.length -1].userId);
                $('#mauriceheures').empty().prepend(theData[theData.length -1].heures);
                $('#mauricetemperature').empty().prepend(theData[theData.length -1].temperature);                
                $('#mauricepressionArterielle').empty().prepend(theData[theData.length -1].pressionArterielle);
                $('#mauricepulsations').empty().prepend(theData[theData.length -1].pulsations);
                $('#mauricehumeur').empty().prepend(theData[theData.length -1].humeur);
                $('#mauriceenergie').empty().prepend(theData[theData.length -1].energie);                                                                
            }
        });
    });
};

function mayotte(){
	theData = [];
	$(document).ready(function(){
		jQuery.ajax({
			url: 'https://webcupcosmo.eu.meteorapp.com/api/cosmonautes/mayotte', 
			success: function ( datas ) {
		    	datas.forEach( function(item) {
		    		theData.push(item);
		    	});

		    	$('#mayotteId').empty().prepend(theData[theData.length -1].userId);
		    	$('#mayotteheures').empty().prepend(theData[theData.length -1].heures);
		    	$('#mayottetemperature').empty().prepend(theData[theData.length -1].temperature);
		    	$('#mayottepressionArterielle').empty().prepend(theData[theData.length -1].pressionArterielle);
		    	$('#mayottepulsations').empty().prepend(theData[theData.length -1].pulsations);
		    	$('#mayottehumeur').empty().prepend(theData[theData.length -1].humeur);
		    	$('#mayotteenergie').empty().prepend(theData[theData.length -1].energie);
			}
		});

	});

};

function reunion(){
	theData = [];
	$(document).ready(function(){
		jQuery.ajax({
			url: 'https://webcupcosmo.eu.meteorapp.com/api/cosmonautes/reunion', 
			success: function ( datas ) {
		    	datas.forEach( function(item) {
		    		theData.push(item);
		    	});

		    	$('#reunionId').empty().prepend(theData[theData.length -1].userId);
		    	$('#reunionheures').empty().prepend(theData[theData.length -1].heures);
		    	$('#reuniontemperature').empty().prepend(theData[theData.length -1].temperature);
		    	$('#reunionpressionArterielle').empty().prepend(theData[theData.length -1].pressionArterielle);
		    	$('#reunionpulsations').empty().prepend(theData[theData.length -1].pulsations);
		    	$('#reunionhumeur').empty().prepend(theData[theData.length -1].humeur);
		    	$('#reunionenergie').empty().prepend(theData[theData.length -1].energie);
			}
		});

	});

};

function rodrigues(){
	theData = [];
	$(document).ready(function(){
		jQuery.ajax({
			url: 'https://webcupcosmo.eu.meteorapp.com/api/cosmonautes/rodrigues', 
			success: function ( datas ) {
		    	datas.forEach( function(item) {
		    		theData.push(item);
		    	});

		    	$('#rodriguesId').empty().prepend(theData[theData.length -1].userId);
		    	$('#rodriguesheures').empty().prepend(theData[theData.length -1].heures);
		    	$('#rodriguestemperature').empty().prepend(theData[theData.length -1].temperature);
		    	$('#rodriguespressionArterielle').empty().prepend(theData[theData.length -1].pressionArterielle);
		    	$('#rodriguespulsations').empty().prepend(theData[theData.length -1].pulsations);
		    	$('#rodrigueshumeur').empty().prepend(theData[theData.length -1].humeur);
		    	$('#rodriguesenergie').empty().prepend(theData[theData.length -1].energie);
			}
		});

	});

};







