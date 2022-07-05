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
	<div class='authp_f'><p class='authp_p'>Registration</p></div>
	<form  method='post' action='/reg'>
	<div>
		<input class='pole2' name='nLog' placeholder='Enter name' data-error='Login' required='required' maxlength='15'>
		<input class='pole2' name='nPas' placeholder='Enter password *' data='Password' type='Password' required='required' maxlength='15'>
	<div>
		<input name='inin_o' id='inin_o' type='submit' value='Registration'>
	</div>
	</div>
	</form>
	<div class='podfi'>
		<div>Or</div>
		<a href='/auth'>I have account</a>
	</div>
	</div>
</div>";
?>