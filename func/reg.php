<?
require_once ('gen0.php');
//require_once ('func/date.php');
?>
<!DOCTYPE html">
<html>
<head>
<?
require_once ('../system/include/header.php');
?>
</head>
<?
//var_dump($_POST);
if(isset($_POST['inin_o'])){
	$nPas = (md5(md5($_POST['nPas'])));
	$nLog = $_POST['nLog'];
	$nPi = $_SERVER['REMOTE_ADDR'];
	$reg_dt = date("Y-m-d");
	$tmp_login = preg_replace('![^\w\d\s]*!','',$nLog);
	$tmp_lomin = preg_replace('/\s/', '', $tmp_login);

	if(strlen($tmp_lomin) > 4){
	$iq_aa = mysqli_query($link, "SELECT 1 FROM l_users WHERE login='{$tmp_lomin}'");
	$_mora = mysqli_num_rows($iq_aa);
		if($_mora == 0){
		$query = mysqli_query ($link, "INSERT INTO `l_users` (`login`,`password`,`email`,`npi`) VALUES ('{$tmp_lomin}','{$nPas}','{$nMail}','{$nPi}')");
		$kuerk = mysqli_query ($link, "INSERT INTO `l_profile` (`login`,`rating`) VALUES ('{$tmp_lomin}','1')");
			echo"
			<div id='login_o'>
			<div>
				<div class='authp_f'><p class='authp_p'>Congratulations !</p></div>
				<div>
					<div class='pole'><div class='okt'>".$tmp_lomin." your account has been created</div></div>
					<div>
						<a href='/autn'><input id='inin_o' type='button' value='Sign In'></a>
					</div>
				</div>
				<div class='podfi'>
					<div>Or</div>
					<a href='/'>main page</a>
				</div>
			</div>
			</div>";
		}else{
			echo"
			<div id='login_o'>
			<div>
				<div class='authp_f'><p class='authp_p'>Error !</p></div>
				<div>
					<div class='pole'><div class='ert'>A user with this login already exists</div></div>
					<div>
						<a href='/new'><input id='inin_o' type='button' value='try again'></a>
					</div>
				</div>
				<div class='podfi'>
					<div>Or</div>
					<a href='/'>main page</a>
				</div>
			</div>
			</div>";
		}
	}else{
		echo"
			<div id='login_o'>
			<div>
				<div class='authp_f'><p class='authp_p'>Error !</p></div>
				<div>
					<div class='pole'><div class='ert'>Login must be at least 4 characters and not more than 15</div></div>
					<div>
						<a href='/new'><input id='inin_o' type='button' value='try again'></a>
					</div>
				</div>
				<div class='podfi'>
					<div>Or</div>
					<a href='/'>main page</a>
				</div>
			</div>
			</div>";
	}
}else{
	header("Location: /new");
}

?> 

