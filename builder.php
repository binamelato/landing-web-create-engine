<? 
session_start(); 
require_once ('func/gen0.php');
require_once ('func/date.php');
?>
<!DOCTYPE html">
<html>
<head>
<?
require_once ('system/include/hed_proj.php');
?>
<script type="text/javascript" src="/system/js/main.js"></script>
</head>
<body >
<div class="in_fol">
</div>
<div class="deep"></div>
<?
if(isset($_SESSION['nLog'])){
	if(isset($_GET['par'])){
	$prop = $_GET['par'];
	$query4 = mysqli_query($link, "SELECT 1 FROM l_projects WHERE id='{$prop}' and author='{$_SESSION['user_id']}'");
	$quex = mysqli_num_rows($query4);
	if($quex != 0){
		require_once ('system/include/builder.php');
		}
	}else{
		require_once ('system/include/builder.php');
	}
}else{
	header("Location: /auth");exit;
}
	
require_once ('system/include/footer.php');
?>
<script>
	lad_ind = '<? echo $_GET['par']; ?>';
</script>
</body>
</html>
