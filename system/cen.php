<?
session_start();
define("SITEROOTDIR", $_SERVER['DOCUMENT_ROOT']);
require_once ('../func/gen0.php');

if(isset($_POST['d'])) 
{
$da_is = $_POST['d'];
$da_ks = $_POST['v'];
$da_ls = $_POST['m'];
$da_ms = $_POST['n'];
$da_ss = $_POST['i'];
$da_ww = $_POST['w'];

if($da_is == 'create'){
	mysqli_query($link, "INSERT INTO `l_projects`(`name`, `author`, `bl1`, `stat`) VALUES ('','{$_SESSION['user_id']}','','2')");
	echo"<div id='cre_pa'>
			<div id='cre_do'>
				<div class='cre_nm'>New project:</div>
				<div>
					<div class='nmprdf'>
						<img src='/content/sys/osho.png'>
						<input class='nmprji pole2' type='text' value='' placeholder='enter name'>
					</div>
				</div>
				<div class='cre_pd'>
					<input id='pit_po' type='button' value='Save'>
				</div>
			</div>
		</div>";
}
if($da_is == 'to_nam'){
$nn_new = mysqli_query($link, "SELECT 1 FROM l_projects WHERE author='{$_SESSION['user_id']}' and stat='2'");
$orage = mysqli_num_rows($nn_new);
if($orage != 0){
$query44 = mysqli_query($link, "SELECT id FROM l_projects WHERE author='{$_SESSION['user_id']}' and stat='2'");
$row4 = mysqli_fetch_array($query44);
$id_s = $row4['id'];
mysqli_query($link, "UPDATE `l_projects` SET `name` = '{$da_ks}',`stat` = '0' WHERE `author` = '{$_SESSION['user_id']}' and stat='2'");
echo"<p>Проект ".$da_ks." создан<br><a href='/builder/".$id_s."'>Перейти в конструктор</a></p>";
mkdir(SITEROOTDIR.'/content/projects/'.$da_ks.'/content/', 0777, true);
mkdir(SITEROOTDIR.'/content/projects/'.$da_ks.'/style/', 0777, true);
copy(SITEROOTDIR.'/templates/default/css/project.css', SITEROOTDIR.'/content/projects/'.$da_ks.'/style/project.css');
}
}
}else{
	header("Location: /");exit;
}

?>