<?
require_once ('func/date.php');
?>
<!DOCTYPE html">
<html>
<head>
<?
require_once ('system/include/header.php');
?>
</head>
<?
echo"
<div id='login_o'>
	<div>
	<div class='authp_f'><p class='authp_p'>Sign In</p></div>
	<form  method='post' action='/pass'>
	<div>
		<input class='pole2' name='nLog' placeholder='Your profile name' data-error='Login' required='required' maxlength='15'>
		<input class='pole2' name='nPas' placeholder='Your profile password *' data='Password' type='Password' required='required' maxlength='15'>
	<div>
		<input name='lohin' id='inin_o' type='submit' value='Continue'>
	</div>
	</div>
	</form>
	<div class='podfi'>
		<div>Or</div>
		<a href='/new'>Have not account?</a>
	</div>
	</div>
</div>";
?>