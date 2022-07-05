/*
var inlog = document.querySelectorAll("#logi");
inlog.onclick = toogle('#login_o');

function toggle(el){
  el.style.display = (el.style.display == 'none') ? '' : 'none'
}
*/

$(document).ready(function(){
$('.hspol').click(function(){
	$('.bspol').toggle("fade", { direction: "up" }, 1000);
});
$('#adproj').click(function(){
	park = 'create';
	$.ajax({
		type: 'post', 
		url: "../system/cen.php", 
		data: ({
			d: park,
		}), 
		success: function(response){
			$(".in_fol").html(response);
			$('#pit_po').click(function(){
				dot = $('.nmprji').val();
				console.log(dot);
				park = 'to_nam';
				$.ajax({
					type: 'post', 
					url: "../system/cen.php", 
					data: ({
						d: park,
						v: dot,
					}), 
				success: function(response){
					$('#cre_pa').hide();
					$("#indo").html(response);
				}
				});
			});
		}
	});
});
$('#adlock').click(function(){
	/*$('#tl').append("<div id='header' class='_t dpform'><div>Rexf ujnjds[ ,kjrjd</div></div>");//вот сюда форму засунуть
	//$('.dpform').show();//show form with forms
	console.log($('#tl'));
	////add block*/
});
/*
$('#tybl').click(function(){
	var par1 = 'save';
	var par2 = $("#tl").prop("innerHTML");
	var par3 = lad_ind;
	var formData = new FormData();
	formData.append("par_1", par2);
	/*------------*//*
	var par = [par1, par2, par3];
	var formData = new FormData();
	for(var i=0;i<3;i++){
		formData.append("par_"+i, par[i]);
	}
	*/
	/*------------*/
	/*$.ajax({
		type: 'post', 
		url: "../system/gen.php", 
		processData: false,
        contentType: false,
		dataType: 'html',
		data: formData, 
		success: function(response){
			$("#boro").html(response);
			}
	});
	});*/
});
