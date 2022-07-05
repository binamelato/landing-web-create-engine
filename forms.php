<!DOCTYPE html">
<html>
<head>
<?
require_once ('system/include/header.php');
?>
</head>
<div id='natne'><div id='cre_do'><div class='cre_nm'>Settings:</div>
<div class='plt_fg'>
<div class='opti1'><select style='width:280px;height:30px;font-size:14px;'><option value='' style='font-family:monospace'>monospace</option><option value='' style='font-family:sans-serif'>sans-serif</option><option value='' style='font-family:cursive'>cursive</option><option value='' style='font-family:arial'>arial</option></select></div>
<div class='opti2'><input type='button' value='bold'><input type='button' value='cursive'><input type='button' value='pod4erk'><input type='button' value='za4erk'></div>
<div class='opti3'><input type='button' value='left'><input type='button' value='center'><input type='button' value='right'></div>
<div class='opti4'><input type='color' id='clcl' value></div>
<div class='opti5'><input type='text' value='url'><input type='button' value='link'></div>
<div class='opti6'><select><option value=''>12px</option><option value=''>14px</option><option value=''>16px</option><option value=''>20px</option></select></div>
<div class='opti7'><select><option value=''>Capitalise</option><option value=''>uppercase</option><option value=''>lowercase</option></select></div>
<div class='opti8'><input style='width:280px;height:30px;font-size:14px;' type='range' min='0' max='90' step='1' list='st_tick'>
<datalist id='st_tick'>
<option value='0' label='0'>
<option value='10'>
<option value='20'>
<option value='30'>
<option value='40'>
<option value='50' label='50'>
<option value='60'>
<option value='70'>
<option value='80'>
<option value='90'>
<option value='100' label='100'>
</datalist></div>
</div><div class='cre_pd'><input id='pit_so' type='button' value='Save'><input id='pit_na' type='button' value='Discard'></div></div></div>

</html>
