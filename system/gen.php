<?
session_start();
var_dump($_SESSION);
require_once ('../func/gen0.php');

if(isset($_POST)) 
{
$dt_j = $_POST['par_0']; //save
$da_is = $_POST['par_1']; //data
$da_ls = $_POST['par_2']; //id

if($dt_j == 'save'){
$nn_new = mysqli_query($link, "SELECT 1 FROM l_projects WHERE id='{$da_ls}'and author='{$_SESSION['user_id']}'");
$orage = mysqli_num_rows($nn_new);
if($orage != 0){
mysqli_query($link, "UPDATE `l_projects` SET `bl1` = '{$da_is}' WHERE `id`='{$da_ls}' and `author` = '{$_SESSION['user_id']}'");// 
}
}
if($dt_j == 'upload'){
	//тут обработка картинки или видео на загрузке
	
}
if($dt_j == 'giback'){
	//тут трансформация видео в gif и сохранение в папку проекта
	
}
}

?>