<?
$par1 = $_SESSION['user_id'];
$quei = mysqli_query($link, "SELECT 1 FROM l_projects WHERE author='{$par1}'");
$roi = mysqli_num_rows($quei);
if($roi != 0){
	echo"
	<div id='header' class='_m'>
	<div class='hspol'>See all personal projects</div>
	<div class='bspol'>
	<div class='plprog'>";
	$quer0 = mysqli_query($link, "SELECT * FROM `l_projects` where author='{$par1}'");
	while($ro0 = mysqli_fetch_array($quer0)){
		$au_id = $ro0['id'];
		$au_nm = $ro0['name'];
	echo"
		<div class='_mji_ pr_vij'>
			<div><a href='/builder/".$au_id."'>".$au_nm."</a></div>
		</div>
		";
	}
	echo"
	</div>
	</div>
	</div>";
}else{}

?>


