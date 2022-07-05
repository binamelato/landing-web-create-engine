<div id='tl'>
<?
$quer0 = mysqli_query($link, "SELECT * FROM `l_projects` WHERE id='{$prop}' and author='{$_SESSION['user_id']}'");
	$ro1 = mysqli_fetch_array($quer0);
	$au_id = $ro1['id'];
	$au_nm = $ro1['name'];
	$au_bl = $ro1['bl1'];
	echo $au_bl;
?>
</div>
<div id='header' class='_m pipi'>
	<div class='fr_but'>
		<input id='adlock' type='button' value='add block'>
		<div id='boro'></div>
		<input id='tybl' type='button' value='save project'>
	</div>
</div>


