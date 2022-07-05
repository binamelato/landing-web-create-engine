<div id='header' class='_m'>
<div class='h_upbl'>
		<div class='_kji_ lef'>
			<div><a href="/"><?echo $rname;?></a></div>
		</div>
		<div class='_kji_ rih'>
			<div>
<?
if (isset($_SESSION['user_id'])){
				 echo"
				 <div class='_kji_'><a href='/logout/1'><span class='inlig'>".$_SESSION['nLog']."</span></a></div>
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
</div>