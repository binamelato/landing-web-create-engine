<?
session_start(); 
require_once ('func/gen0.php');
require_once ('func/date.php');
require_once ('system/include/header.php');
?>
<body>
<div id="gkHeader" class="mess" style='background: url(/include/afon/<?echo $rlogo; ?>) center;background-size:cover;'>
<div class="mess">
	<div class='h_upbl'>
		<div class='_kji_ lef'>
			<div></div>
		</div>
		<div class='_kji_ rih'>
			<div>
<?
if (isset($_SESSION['user_id'])){
				 echo"
				 <div class='_kji_'><a href='/profile'><span class='keyki'>".$_SESSION['nLog']."</span></a></div>
				 ";
				}else{
				 echo'
			<div class="_kji_"><a href="/profile"><span class="ml_t2">Sing In</span></a></div>
			<div class="_kji_"><span class="mr_t">Or</span></div>
			<div class="_kji_"><a href="/new"><span class="mf_t">Create Account</span></a></div>
				 ';
				}
?>
			</div>
		</div>
	</div>
	<div>
		<div class='sig'>
			<p><span>Create a personal landing</span></p>
			<p>Build landing - it so simply!</p>
		</div>
	</div>
</div>
</div>
<div id='header' class='_t'>

</div>
<?
require_once ('system/include/footer.php');
?>
