<? 
session_start(); 
require_once ('func/gen0.php');
require_once ('func/date.php');
if (isset($_GET['logout'])){ 
$logout = $_GET['logout'];
if ($logout == 1) {
unset($_SESSION['gLog']);
unset($_SESSION['gPas']);
unset($_SESSION['ip']);
unset($_SESSION['user_id']); 
header("Location: http://".$_SERVER['HTTP_HOST']); session_destroy();}}
?>
<!DOCTYPE html">
<html>
<head>
<?
require_once ('system/include/header.php');
?>
</head>
<body >
<div class="in_fol">
</div>
<?
if(isset($_SESSION['nLog'])){
	require('system/include/potolok.php');
	echo"<div id='header' class='_m'>
			<div id='indo'>
				<a><input id='adproj' class='heart' type='button' value='New project'></a>
			</div>
		</div>";
	require('system/include/projects.php');
}else{
	header("Location: /auth");exit;
}
	
?>
<?
require_once ('system/include/footer.php');
?>
<script></script>
</body>
</html>
