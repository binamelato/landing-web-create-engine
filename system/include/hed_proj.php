<?
if(isset($_GET['par'])){
	$prop = $_GET['par'];
	$query4c = mysqli_query($link, "SELECT 1 FROM l_projects WHERE id='{$prop}' and author='{$_SESSION['user_id']}'");
	$mamb = mysqli_num_rows($query4c);
	if($mamb != 0){
		$qyqr = mysqli_query($link, "SELECT name FROM l_projects WHERE id='{$prop}' and author='{$_SESSION['user_id']}'");
		$vein = mysqli_fetch_array($qyqr);
		$pi_dis = $vein['name'];
	}
}
echo'
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta http-equiv="content-type" content="text/html; charset=utf8" />
<meta name="description" content="'.$rdesc.'">
<meta name="keywords" content="'.$rkey.'">
<title>'.$rname.'</title>
<link rel="stylesheet" type="text/css" media="all"  href="/templates/default/css/dommon.css" />
<link rel="stylesheet" type="text/css" media="all"  href="/content/projects/'.$pi_dis.'/style/project.css" />
';
?>
