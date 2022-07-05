document.onreadystatechange = function(){
	if(document.readyState === 'complete'){
		
	var button1 = document.querySelector("#adlock"); //Добавление блока
	var button2 = document.querySelector("#tybl"); //Сохранить dom - дерево
	var flma = document.querySelector("#tl"); //Форма в которую все вставляется
	var shot=15; //Предел кол-ва блоков каждого типа
	var puls=30; //Предел элементов в каждом блоке
	var ccs='position:relative;z-index:10;';
		
		viewHom(); //Вызов функции взаиможействия с уже существующими на странице dom-элементами(редактирование/удаление)
		button1.addEventListener("click", function(){
			var el = document.getElementById('header2');
			if(el){}else{
				flma.insertAdjacentHTML("beforeend", "<div id='header2' class='_m dpform'></div>");
				var p_typ = ['header','ysk.polosa','vitrina'];
				for(var i = 0; i <= 2; i++) {
					var punkt = document.querySelector(".dpform");
					punkt.insertAdjacentHTML("beforeend", "<div class='_mji_' id='bl"+i+"'><img src='/content/sys/2/bl"+i+".png'><p style='text-align:center;'>"+p_typ[i]+"</p></div>");
				}
				var bloc1 = document.querySelector("#bl0"), bloc2 = document.querySelector("#bl1"), bloc3 = document.querySelector("#bl2");
				bloc1.addEventListener("click", function(){ //Широкий div
					var pod4 = document.querySelector(".dpform");
					pod4.remove();
					pr_p = document.querySelectorAll('div[id^="pod"]').length;
					if(pr_p == 0){ipt = 1;}else{ipt = pr_p+1;}
					if(ipt < shot){
						flma.insertAdjacentHTML("beforeend", "<div id='header' class='_t'><div id='pod"+ipt+"' class='tpi'>add elements</div></div>");
						console.log("Добавлен хеадер.");
						var pi1 = document.querySelector("#pod"+ipt);
						pi1.addEventListener("click", addElements, false);
					}else{}
				});
				bloc2.addEventListener("click", function(){ //Узкий div
					var pod4 = document.querySelector(".dpform");
					pod4.remove();
					pr_t = document.querySelectorAll('div[id^="poy"]').length;
					if(pr_t == 0){ivt = 1;}else{ivt = pr_t+1;}
					if(ivt < shot){
						flma.insertAdjacentHTML("beforeend", "<div id='header' class='_m'><div id='poy"+ivt+"' class='tpi'>add elements</div></div>");
						console.log("Добавлен узкая панелька.");
						var pi2 = document.querySelector("#poy"+ivt);
						pi2.addEventListener("click", addElements, false);
					}else{}
				});
				bloc3.addEventListener("click", function(){ //Витрина.
					var pod4 = document.querySelector(".dpform");
					pod4.remove();
					pr_s = document.querySelectorAll('div[id^="vi"]').length;
					if(pr_s == 0){ist = 1;}else{ist = pr_s+1;}
					if(ist < shot){
						flma.insertAdjacentHTML("beforeend", "<div id='header' class='_t'><div id='vi"+ist+"'><div class='vprelod'><div>How many blocks you want add?</div><button id='sl3'>на 3</button><button id='sl4'>на 4</button><button id='sl5'>на 5</button></div></div></div>");
						console.log("Добавлена витрина.");
						var adb3 = document.querySelector("#sl3"),adb4 = document.querySelector("#sl4"),adb5 = document.querySelector("#sl5");
						adb3.addEventListener("click", zaVitag, false);
						adb4.addEventListener("click", zaVitag, false);
						adb5.addEventListener("click", zaVitag, false);
					}else{}
				});
			}
		});
		button2.addEventListener("click", function(){//кнопко отправки post для сохранения dom-a в базу
			/* Функции кнопки сохранить*/
			var finc ='save';
			var soloma = document.querySelector("#tl").innerHTML;
			var kit = lad_ind;
			var par = [finc, soloma, kit];
			var formData = new FormData();
			for(var i=0;i<3;i++){
				formData.append("par_"+i, par[i]);
			}
			fetch('../system/gen.php', {
				method: 'POST',
				credentials: 'same-origin',
    			body: formData
			}).then(function(response){
				console.log("Watch in mysql db");
			}).catch(function(error){
			   console.log("Error");
			});
		});
		function addElements(){
			var parl = this.parentElement;
			var dlmnt = document.querySelector(".in_fol");
			dlmnt.insertAdjacentHTML("beforeend", "<div id='cre_pa'><div id='cre_do'><div class='cre_nm'>Elements:</div><div class='plt_fg'><div class=''><div class='_kji_ plt_elem ele1'>Zagalovok</div><div class='_kji_ plt_elem ele2'>Text</div></div><div class=''><div class='_kji_ plt_elem ele3'>Button</div><div class='_kji_ plt_elem ele4'>Soc. buttons</div></div><div class=''><div class='_kji_ plt_elem ele5'>Background</div><div class='_kji_ plt_elem ele6'>Logo</div></div><div class=''><div class='_kji_ plt_elem ele7'>Video</div><div class='_kji_ plt_elem ele8'>Map</div></div><div class=''><div class='_kji_ plt_elem ele9'>Spoiler</div><div class='_kji_ plt_elem ele10'>Citata</div></div><div class=''><div class='_kji_ plt_elem ele11'>Icon+text</div><div class='_kji_ plt_elem ele12'>Line</div></div><div class=''><div class='_kji_ plt_elem ele13'>Icon</div><div class='_kji_ plt_elem ele14'>Radial image</div></div><div class=''><div class='_kji_ plt_elem ele15'>Timer</div><div class='_kji_ plt_elem ele16'>Url</div></div><div class=''><div class='_kji_ plt_elem ele17'>Иконка+Контакты+Подпись</div><div class='_kji_ plt_elem ele18'>Slider</div></div><div class=''><div class='_kji_ plt_elem ele19'>Questions/Answers</div><div class='_kji_ plt_elem ele20'>Делитель горизонт</div></div></div><div class='cre_pd'><input id='pit_at' type='button' value='Discard'></div></div></div>");
			var dism = document.querySelector("#pit_at"), kn1 = document.querySelector(".ele1"),kn2 = document.querySelector(".ele2"),kn3 = document.querySelector(".ele3"),kn4 = document.querySelector(".ele4"),kn5 = document.querySelector(".ele5"),kn6 = document.querySelector(".ele6"),kn7 = document.querySelector(".ele7"),kn8 = document.querySelector(".ele8"),kn9 = document.querySelector(".ele9"),kn10 = document.querySelector(".ele10"),kn11 = document.querySelector(".ele11"),kn12 = document.querySelector(".ele12"),kn13 = document.querySelector(".ele13"),kn14 = document.querySelector(".ele14"),kn15 = document.querySelector(".ele15"),kn16 = document.querySelector(".ele16"),kn17 = document.querySelector(".ele17"),kn18 = document.querySelector(".ele18"),kn19 = document.querySelector(".ele19"),kn20 = document.querySelector(".ele20");
			
			dism.addEventListener("click", function(){ //функция отмены
				var mif = document.querySelector("#cre_pa");
				mif.remove();
			});
			kn1.addEventListener("click", function(){ //события по клику на вставленный элемент
				var mif = document.querySelector("#cre_pa");
				tj1 = document.querySelectorAll('div[class^="zag"]').length;
				if(tj1 == 0){tn1 = 1;}else{tn1 = tj1+1;}
				if(tn1 < puls){
					parl.insertAdjacentHTML("beforeend", "<div class='zag"+tn1+"' style='"+ccs+"'>Заголовок</div>");
					var ui1 = document.querySelector(".zag"+tn1);
					ui1.addEventListener("click", changeOption, false);
				}else{}
				mif.remove();
			});
			kn2.addEventListener("click", function(){ 
				var mif = document.querySelector("#cre_pa");
				tj2 = document.querySelectorAll('div[class^="txt"]').length;
				if(tj2 == 0){tn2 = 1;}else{tn2 = tj2+1;}
				if(tn2 < puls){
					parl.insertAdjacentHTML("beforeend", "<div class='txt"+tn2+"' style='"+ccs+"'>Текст</div>");
					var ui2 = document.querySelector(".txt"+tn2);
					ui2.addEventListener("click", changeOption, false);
				}else{}
				mif.remove();
			});
			kn3.addEventListener("click", function(){ 
				var mif = document.querySelector("#cre_pa");
				tj3 = document.querySelectorAll('div[class^="btn"]').length;
				if(tj3 == 0){tn3 = 1;}else{tn3 = tj3+1;}
				if(tn3 < puls){
					parl.insertAdjacentHTML("beforeend", "<div class='btn"+tn3+"' style='"+ccs+"'>Кнопка</div>");
					var ui3 = document.querySelector(".btn"+tn3);
					ui3.addEventListener("click", changeOption, false);
				}else{}
				mif.remove();
			});
			kn4.addEventListener("click", function(){ 
				var mif = document.querySelector("#cre_pa");
				tj4 = document.querySelectorAll('div[class^="sobut"]').length;
				if(tj4 == 0){tn4 = 1;}else{tn4 = tj4+1;}
				if(tn4 < puls){
					parl.insertAdjacentHTML("beforeend", "<div class='sobut"+tn4+"' style='"+ccs+"'>Соц. кнопки</div>");
					var ui4 = document.querySelector(".sobut"+tn4);
					ui4.addEventListener("click", changeOption, false);
				}else{}
				mif.remove();
			});
			kn5.addEventListener("click", function(){ 
				var mif = document.querySelector("#cre_pa");
				tj5 = document.querySelectorAll('div[class^="backu"]').length;
				if(tj5 == 0){tn5 = 1;}else{tn5 = tj5+1;}
				if(tn5 < puls){
					parl.insertAdjacentHTML("beforeend", "<div class='backu"+tn5+"' style='"+ccs+"'>Фон</div>");
					var ui5 = document.querySelector(".backu"+tn5);
					ui5.addEventListener("click", changeOption, false);
				}else{}
				mif.remove();
			});
			kn6.addEventListener("click", function(){ 
				var mif = document.querySelector("#cre_pa");
				tj6 = document.querySelectorAll('div[class^="loga"]').length;
				if(tj6 == 0){tn6 = 1;}else{tn6 = tj6+1;}
				if(tn6 < puls){
					parl.insertAdjacentHTML("beforeend", "<div class='loga"+tn6+"' style='"+ccs+"'>Логотип</div>");
					var ui6 = document.querySelector(".loga"+tn6);
					ui6.addEventListener("click", changeOption, false);
				}else{}
				mif.remove();
			});
			kn7.addEventListener("click", function(){ 
				var mif = document.querySelector("#cre_pa");
				tj7 = document.querySelectorAll('div[class^="dvd"]').length;
				if(tj7 == 0){tn7 = 1;}else{tn7 = tj7+1;}
				if(tn7 < puls){
					parl.insertAdjacentHTML("beforeend", "<div class='dvd"+tn7+"' style='"+ccs+"'>V</div>");
					var ui7 = document.querySelector(".dvd"+tn7);
					ui7.addEventListener("click", changeOption, false);
				}else{}
				mif.remove();
			});
			kn8.addEventListener("click", function(){ 
				var mif = document.querySelector("#cre_pa");
				tj8 = document.querySelectorAll('div[class^="map"]').length;
				if(tj8 == 0){tn8 = 1;}else{tn8 = tj8+1;}
				if(tn8 < puls){
					parl.insertAdjacentHTML("beforeend", "<div class='map"+tn8+"' style='"+ccs+"'>Map</div>");
					var ui8 = document.querySelector(".map"+tn8);
					ui8.addEventListener("click", changeOption, false);
				}else{}
				mif.remove();
			});
			kn9.addEventListener("click", function(){ 
				var mif = document.querySelector("#cre_pa");
				tj9 = document.querySelectorAll('div[class^="spol"]').length;
				if(tj9 == 0){tn9 = 1;}else{tn9 = tj9+1;}
				if(tn9 < puls){
					parl.insertAdjacentHTML("beforeend", "<div class='spol"+tn9+"'>Spoiler</div>");
					var ui9 = document.querySelector(".spol"+tn9);
					ui9.addEventListener("click", changeOption, false);
				}else{}
				mif.remove();
			});
			kn10.addEventListener("click", function(){ 
				var mif = document.querySelector("#cre_pa");
				tj10 = document.querySelectorAll('div[class^="cita"]').length;
				if(tj10 == 0){tn10 = 1;}else{tn10 = tj10+1;}
				if(tn10 < puls){
					parl.insertAdjacentHTML("beforeend", "<div class='cita"+tn10+"'>Цитата</div>");
					var ui10 = document.querySelector(".cita"+tn10);
					ui10.addEventListener("click", changeOption, false);
				}else{}
				mif.remove();
			});
			kn11.addEventListener("click", function(){ 
				var mif = document.querySelector("#cre_pa");
				tj11 = document.querySelectorAll('div[class^="icot"]').length;
				if(tj11 == 0){tn11 = 1;}else{tn11 = tj11+1;}
				if(tn11 < puls){
					parl.insertAdjacentHTML("beforeend", "<div class='icot"+tn11+"'>Icon+text</div>");
					var ui11 = document.querySelector(".icot"+tn11);
					ui11.addEventListener("click", changeOption, false);
				}else{}
				mif.remove();
			});
			kn12.addEventListener("click", function(){ 
				var mif = document.querySelector("#cre_pa");
				tj12 = document.querySelectorAll('div[class^="line"]').length;
				if(tj12 == 0){tn12 = 1;}else{tn12 = tj12+1;}
				if(tn12 < puls){
					parl.insertAdjacentHTML("beforeend", "<div class='line"+tn12+"'><div style='border-bottom:3px solid #cccddd; margin:10 10px 10 10px;'></div></div>");
					var ui12 = document.querySelector(".line"+tn12);
					ui12.addEventListener("click", changeOption, false);
				}else{}
				mif.remove();
			});
			kn13.addEventListener("click", function(){ 
				var mif = document.querySelector("#cre_pa");
				tj13 = document.querySelectorAll('div[class^="icok"]').length;
				if(tj13 == 0){tn13 = 1;}else{tn13 = tj13+1;}
				if(tn13 < puls){
					parl.insertAdjacentHTML("beforeend", "<div class='icok"+tn13+"'>Icon</div>");
					var ui13 = document.querySelector(".icok"+tn13);
					ui13.addEventListener("click", changeOption, false);
				}else{}
				mif.remove();
			});
			kn14.addEventListener("click", function(){ 
				var mif = document.querySelector("#cre_pa");
				tj14 = document.querySelectorAll('div[class^="rima"]').length;
				if(tj14 == 0){tn14 = 1;}else{tn14 = tj14+1;}
				if(tn14 < puls){
					parl.insertAdjacentHTML("beforeend", "<div class='rima"+tn14+"'>Radial image</div>");
					var ui14 = document.querySelector(".rima"+tn14);
					ui14.addEventListener("click", changeOption, false);
				}else{}
				mif.remove();
			});
			kn15.addEventListener("click", function(){ 
				var mif = document.querySelector("#cre_pa");
				tj15 = document.querySelectorAll('div[class^="timer"]').length;
				if(tj15 == 0){tn15 = 1;}else{tn15 = tj15+1;}
				if(tn15 < puls){
					parl.insertAdjacentHTML("beforeend", "<div class='timer"+tn15+"'>Timer</div>");
					var ui15 = document.querySelector(".timer"+tn15);
					ui15.addEventListener("click", changeOption, false);
				}else{}
				mif.remove();
			});
			kn16.addEventListener("click", function(){ 
				var mif = document.querySelector("#cre_pa");
				tj16 = document.querySelectorAll('div[class^="burl"]').length;
				if(tj16 == 0){tn16 = 1;}else{tn16 = tj16+1;}
				if(tn16 < puls){
					parl.insertAdjacentHTML("beforeend", "<div class='burl"+tn16+"'>Url</div>");
					var ui16 = document.querySelector(".burl"+tn16);
					ui16.addEventListener("click", changeOption, false);
				}else{}
				mif.remove();
			});
			kn17.addEventListener("click", function(){ 
				var mif = document.querySelector("#cre_pa");
				tj17 = document.querySelectorAll('div[class^="icalp"]').length;
				if(tj17 == 0){tn17 = 1;}else{tn17 = tj17+1;}
				if(tn17 < puls){
					parl.insertAdjacentHTML("beforeend", "<div class='icalp"+tn17+"'>Иконка+Контакты+Подпись</div>");
					var ui17 = document.querySelector(".icalp"+tn17);
					ui17.addEventListener("click", changeOption, false);
				}else{}
				mif.remove();
			});
			kn18.addEventListener("click", function(){ 
				var mif = document.querySelector("#cre_pa");
				tj18 = document.querySelectorAll('div[class^="slid"]').length;
				if(tj18 == 0){tn18 = 1;}else{tn18 = tj18+1;}
				if(tn18 < puls){
					parl.insertAdjacentHTML("beforeend", "<div class='slid"+tn18+"'>Slider</div>");
					var ui18 = document.querySelector(".slid"+tn18);
					ui18.addEventListener("click", changeOption, false);
				}else{}
				mif.remove();
			});
			kn19.addEventListener("click", function(){ 
				var mif = document.querySelector("#cre_pa");
				tj19 = document.querySelectorAll('div[class^="qanu"]').length;
				if(tj19 == 0){tn19 = 1;}else{tn19 = tj19+1;}
				if(tn19 < puls){
					parl.insertAdjacentHTML("beforeend", "<div class='qanu"+tn19+"'>Questions/Answers</div>");
					var ui19 = document.querySelector(".qanu"+tn19);
					ui19.addEventListener("click", changeOption, false);
				}else{}
				mif.remove();
			});
			kn20.addEventListener("click", function(){ 
				var mif = document.querySelector("#cre_pa");
				tj20 = document.querySelectorAll('div[class^="degu"]').length;
				if(tj20 == 0){tn20 = 1;}else{tn20 = tj20+1;}
				if(tn20 < puls){
					parl.insertAdjacentHTML("beforeend", "<div class='degu"+tn20+"'>Делитель горизонт</div></div>");
					var ui20 = document.querySelector(".degu"+tn20);
					ui20.addEventListener("click", changeOption, false);
				}else{}
				mif.remove();
			});
		}
		function changeOption(){// Настройки элемента
			event.preventDefault();
			var ptblock = this.getAttribute('class'); // class элемента, настройки которого нужно открыть.
			var banch = this.innerHTML;
			var ofical = ptblock.replace(/\d/g, '');
			switch(ofical){
				case ofical = 'zag': case ofical = 'cita': case ofical = 'txt':  //заголовок, цитата, текст
					var itnas = "<div class='opti1'><select id='shrif'><option value='monospace'>monospace</option><option value='sans-serif'>sans-serif</option><option value='cursive'>cursive</option><option value='arial'>arial</option></select></div><div class='opti2'><select id='stil'><option value='5' selected>Нормальный</option><option value='1'>Жирный</option><option value='2'>Курсив</option><option value='3'>Подчеркнутый</option><option value='4'>Зачеркнутый</option></select></div><div class='opti3'><input type='button' id='lpiz' value='left'><input type='button' id='cpiz' value='center'><input type='button' id='rpiz' value='right'></div><div class='opti4'><input type='color' id='clcl' value='#ffffff'></div><div class='opti5'>Рядом ?</div><div class='opti6'><select id='fotf'><option value='12'>12px</option><option value='14'>14px</option><option value='16'>16px</option><option value='20'>20px</option></select></div><div class='opti7'><select id='debtr'><option value='normal'>Normal</option><option value='capitalize'>Capitalize</option><option value='uppercase'>uppercase</option><option value='lowercase'>lowercase</option></select></div><div class='opti8'><input id='lap' style='width:280px;height:30px;font-size:14px;' type='range' min='0' max='90' step='1' list='st_tick'><datalist id='st_tick'><option value='0' label='0'><option value='10'><option value='20'><option value='30'><option value='40'><option value='50' label='50'><option value='60'><option value='70'><option value='80'><option value='90'><option value='100' label='100'></datalist></div>";
					var vklid = "<div class='_kji_ vkln nat'>Text</div>";
					var ttext = "<div class='plt_fg2'>tyt polya dlya texta</div>";
					break;
				case ofical = 'btn': case ofical = 'sobut': //Объект
					var itnas = "<div class='opti1'>Объектный блок кнопка</div><div class='opti2'></div><div class='opti3'></div><div class='opti4'></div><div class='opti5'></div><div class='opti6'></div><div class='opti7'></div><div class='opti8'></div><div class='opti9'></div><div class='opti10'></div>";
					var vklid = "", ttext = "";
					break;
				case ofical = 'backu': case ofical = 'dvd'://Фон или Видео
					var itnas = "<div class='opti1'>Фон или Видео</div><div class='opti2'><input id='uplco' type='file' content='jpg,gif,png,mp4,avi,webm'><input id='afid' type='button' value='upload'></div><div class='opti3'>Background ?</div><div class='opti4'></div><div class='opti5'></div><div class='opti6'></div><div class='opti7'></div><div class='opti8'></div><div class='opti9'></div><div class='opti10'></div>";
					var vklid = "", ttext = "";
					break;
				case ofical = 'line': //Линия
					var itnas = "<div class='opti1'><input type='color' id='clcl' value='#ffffff'></div><div class='opti2'></div><div class='opti3'></div><div class='opti4'></div><div class='opti5'></div><div class='opti6'></div><div class='opti7'></div><div class='opti8'></div><div class='opti9'></div><div class='opti10'></div>";
					var vklid = "", ttext = "";
					break;
				case ofical = 'burl': //ссылка
					var itnas = "<div class='opti1'><input type='color' id='clcl' value='#ffffff'></div><div class='opti2'><input placeholder='URL' id='siurl' type='url'><input id='sibut' type='button' value='link'></div><div class='opti3'></div><div class='opti4'></div><div class='opti5'></div><div class='opti6'></div><div class='opti7'></div><div class='opti8'></div><div class='opti9'></div><div class='opti10'></div>";
					var vklid = "", ttext = "";
					break;
			}
			var natn = document.querySelector(".deep");
			natn.insertAdjacentHTML("beforeend", "<div id='natne'><div id='cre_do'><div class='cre_nm'><div class='_kji_ vkla act'>Settings</div>"+vklid+"</div><div class='plt_fg'><input id='ll1' hidden><input id='ll2' hidden><input id='ll3' hidden><input id='ll4' hidden><input id='ll5' hidden><input id='ll6' hidden><input id='ll7' hidden><input id='ll8' hidden>"+itnas+"</div>"+ttext+"<div class='cre_pd'><input id='pit_so' type='button' value='Save'><input id='pit_na' type='button' value='Discard'></div></div></div>");
			var dina = document.querySelector("#pit_na"),fina = document.querySelector("#pit_so"),vkla = document.querySelector(".vkla"),vkln = document.querySelector(".vkln"), clcl = document.querySelector("#clcl"), ftl = document.querySelector("#shrif"), lap = document.querySelector("#lap"), stl = document.querySelector("#stil"), fotf = document.querySelector("#fotf"), dabtr = document.querySelector("#dabtr"), lpig = document.querySelector("#lpiz"), cpig = document.querySelector("#cpiz"), rpig = document.querySelector("#rpiz"), afid = document.querySelector("#afid"), uplco = document.querySelector("#uplco");
			
			dina.addEventListener("click", function(){ //функция отмены
				var miv = document.querySelector("#natne");
				miv.remove();
			});
			vkla.addEventListener("click", function(){ //вкладка настроек 
				this.classList.add('act');
				this.classList.remove("nat");
				var bog = document.querySelector(".vkln"),tty = document.querySelector(".plt_fg"),ttg = document.querySelector(".plt_fg2");
				bog.classList.remove("act");
				bog.classList.add('nat');
				tty.style.display = 'block';
				ttg.style.display = 'none';
			});
			if(vkln){vkln.addEventListener("click", function(){ //вкладка содержания 
				this.classList.add('act');
				this.classList.remove("nat");
				var bog = document.querySelector(".vkla"),tty = document.querySelector(".plt_fg2"),ttg = document.querySelector(".plt_fg");
				bog.classList.remove("act");
				bog.classList.add('nat');
				tty.style.display = 'block';
				ttg.style.display = 'none';
			});}
			if(clcl){clcl.addEventListener("change", function(){ //Цвет текста
				var ll4 = clcl.value;
				var nn4 = document.querySelector("#ll4");
				nn4.value= ll4;
			});}
			if(ftl){ftl.addEventListener("change", function(){ //Шрифт
				var ll1 = ftl.value;
				var nn1 = document.querySelector("#ll1");
				nn1.value= ll1;
			});}
			if(lap){lap.addEventListener("change", function(){ //рейндж
				var ll8 = lap.value;
				var nn8 = document.querySelector("#ll8");
				nn8.value= ll8;
			});}
			if(stl){stl.addEventListener("change", function(){ //стиль
				var ll2 = stl.value;
				var nn2 = document.querySelector("#ll2");
				nn2.value= ll2;
			});}
			if(fotf){fotf.addEventListener("change", function(){ //размер шрифта
				var ll6 = fotf.value;
				var nn6 = document.querySelector("#ll6");
				nn6.value= ll6;
			});}
			if(dabtr){debtr.addEventListener("change", function(){ //тарнсформ текста
				var ll7 = debtr.value;
				var nn7 = document.querySelector("#ll7");
				nn7.value= ll7;
			});}
			if(lpig){lpig.addEventListener("click", function(){ //стиль
				var ll3 = lpig.value;
				var nn3 = document.querySelector("#ll3");
				nn3.value= ll3;
			});}
			if(cpig){cpig.addEventListener("click", function(){ //стиль
				var ll3 = cpig.value;
				var nn3 = document.querySelector("#ll3");
				nn3.value= ll3;
			});}
			if(rpig){rpig.addEventListener("click", function(){ //стиль
				var ll3 = rpig.value;
				var nn3 = document.querySelector("#ll3");
				nn3.value= ll3;
			});}
			if(afid){afid.addEventListener("click", function(){ //загрузка картинки или видео
				var fvci = uplco.value;
				console.log(fvci);
				var finc ='upload';
				var soloma = fvci;
				var kit = lad_ind;
				var par = [finc, soloma, kit];
				var formData = new FormData();
				for(var i=0;i<3;i++){
					formData.append("par_"+i, par[i]);
				}
				fetch('../system/gen.php', {
					method: 'POST',
					credentials: 'same-origin',
					body: formData
				}).then(function(response){
					console.log("Watch in mysql db");
				}).catch(function(error){
				console.log("Error");
				});
			});}
			fina.addEventListener("click", function(){ //функция применить изменения и закрыть форму
				var miv = document.querySelector("#natne"), csed = document.querySelector("."+ptblock);
				
				/* Применяем ТЕКСТОВЫЕ настройки к элементу*/
				
				var k4i4 = document.querySelector("#ll4").value,k1i1 = document.querySelector("#ll1").value,k2i2 = document.querySelector("#ll2").value,k3i3 = document.querySelector("#ll3").value,k6i6 = document.querySelector("#ll6").value,k7i7 = document.querySelector("#ll7").value,k8i8 = document.querySelector("#ll8").value;
				if(k4i4){csed.style.color = k4i4;}
				if(k1i1){csed.style.fontFamily = k1i1;}
				if(k6i6){csed.style.fontSize = k6i6;}
				if(k7i7){csed.style.textTransform = k7i7;}
				if(k8i8){csed.style.letterSpacing = k8i8;}
				if(k2i2 == 1){csed.style.fontWeight=600;}
				if(k2i2 == 2){csed.style.fontStyle='italic';}
				if(k2i2 == 3){csed.style.textDecoration='underline';}
				if(k2i2 == 4){csed.style.textDecoration='line-through';}
				if(k2i2 == 5){csed.style.textDecoration='none';csed.style.fontStyle='normal';csed.style.fontWeight=300;}
				if(k3i3){csed.style.textAlign = k3i3;}
				//csed.setAttribute('style', 'color:'+ll4+';');//массовая запись свойств
				/* ========================= */
			//zadatb iz text -> url //надо на ходу проверять правильность введенного адреса
			/*
			sibut = document.querySelector("#sibut");
			k5i5 = document.querySelector("#ll5").value;
			if(sibut){sibut.addEventListener("click", function(){ 
				var nn5 = document.querySelector("#ll5");
				nn5.value= 1;
			});}
			if(k5i5 == 1){
					bj = document.querySelector("#siurl").value;
					kad = '<a href="'+bj+'" >'+banch+'</a>'; 
					csed.innerHTML = kad;
			}*/
			//Zadatb video kak background
			/*
			style for gif
				background-image:url(/content/projects/Testovii/content/prev.gif);
				background-size:cover;
				background-position-x:center;
			style for module(затемнитель)
				height: 362px;
				position: absolute;
    			width: 100%;
				background-color: #00000078;
				top: 0px;
			
			*/
			
				miv.remove();
			});
			
		}
		function zaVitag(){// Добавление оснастки для витрины 3,4,5 стобцов
			var zaz = this.getAttribute('id'); //id button click
			var zui = this.parentElement;
			var vvit = zui.parentElement;
			console.log(vvit);
			if(zaz == 'sl3'){
				kpar = 3;
				styler = 'width:278px;color:#000;margin-left:60px;margin-right:60px;box-shadow:0 0 2px #000;height:300px;position:relative;';
			}else{
				if(zaz == 'sl4'){
					kpar = 4;
					styler = 'width:278px;color:#000;margin-left:10px;margin-right:10px;box-shadow:0 0 2px #000;height:300px;position:relative;';
				}else{
					kpar = 5;
					styler = 'width:225px;color:#000;margin-left:10px;margin-right:10px;box-shadow:0 0 2px #000;height:300px;position:relative;';
				}
			}
						
			for(var s = 1; s <= kpar; s++){
				vvit.insertAdjacentHTML("beforeend", "<div class='_mji_' style='"+styler+"'><div class='may"+s+" tpi'>add elements</div></div>");//id=may
			
			var ubka = vvit.querySelectorAll('div[class^="may"]').length;
			for(var i = 1; i <= ubka; i++){
				var fff = vvit.querySelector(".may"+i); 
				fff.addEventListener("click", addElements, false);
			}}
			zui.remove();
		}
		function viewHom(){// Адд элементов после сохранки, после загрузки dom
			var iin = document.querySelectorAll('div[id^="pod"]').length,iuu = document.querySelectorAll('div[id^="poy"]').length,irr = document.querySelectorAll('div[id^="poh"]').length,bid = document.querySelectorAll('div[class^="may"]').length,ix1 = document.querySelectorAll('div[class^="zag"]').length,ix2 = document.querySelectorAll('div[class^="txt"]').length,ix3 = document.querySelectorAll('div[class^="btn"]').length,ix4 = document.querySelectorAll('div[class^="sobut"]').length,ix5 = document.querySelectorAll('div[class^="backu"]').length,ix6 = document.querySelectorAll('div[class^="loga"]').length,ix7 = document.querySelectorAll('div[class^="dvd"]').length,ix8 = document.querySelectorAll('div[class^="map"]').length,ix9 = document.querySelectorAll('div[class^="spol"]').length,ix10 = document.querySelectorAll('div[class^="cita"]').length,ix11= document.querySelectorAll('div[class^="icot"]').length,ix12 = document.querySelectorAll('div[class^="line"]').length,ix13 = document.querySelectorAll('div[class^="icok"]').length,ix14 = document.querySelectorAll('div[class^="rima"]').length,ix15 = document.querySelectorAll('div[class^="timer"]').length,ix16 = document.querySelectorAll('div[class^="burl"]').length,ix17 = document.querySelectorAll('div[class^="icalp"]').length,ix18 = document.querySelectorAll('div[class^="slid"]').length,ix19 = document.querySelectorAll('div[class^="qanu"]').length,ix20 = document.querySelectorAll('div[class^="degu"]').length;
			for(var i = 1; i <= iin; i++){
				var to_ii = document.querySelector("#pod"+i); 
				to_ii.addEventListener("click", addElements, false);
			}
			for(var i = 1; i <= iuu; i++){
				var to_ya = document.querySelector("#poy"+i); 
				to_ya.addEventListener("click", addElements, false);
			}
			for(var i = 1; i <= irr; i++){
				var to_ha = document.querySelector("#poh"+i); 
				to_ha.addEventListener("click", addElements, false);
			}
			for(var i = 1; i <= bid; i++){
				var to_va = document.querySelector(".may"+i); 
				to_va.addEventListener("click", addElements, false);
			}
			for(var i = 1; i <= ix1; i++){
				var ixt1 = document.querySelector(".zag"+i); 
				ixt1.addEventListener("click", changeOption, false);
			}
			for(var i = 1; i <= ix2; i++){
				var ixt2 = document.querySelector(".txt"+i); 
				ixt2.addEventListener("click", changeOption, false);
			}
			for(var i = 1; i <= ix3; i++){
				var ixt3 = document.querySelector(".btn"+i); 
				ixt3.addEventListener("click", changeOption, false);
			}
			for(var i = 1; i <= ix4; i++){
				var ixt4 = document.querySelector(".sobut"+i); 
				ixt4.addEventListener("click", changeOption, false);
			}
			for(var i = 1; i <= ix5; i++){
				var ixt5 = document.querySelector(".backu"+i); 
				ixt5.addEventListener("click", changeOption, false);
			}
			for(var i = 1; i <= ix6; i++){
				var ixt6 = document.querySelector(".loga"+i); 
				ixt6.addEventListener("click", changeOption, false);
			}
			for(var i = 1; i <= ix7; i++){
				var ixt7 = document.querySelector(".dvd"+i); 
				ixt7.addEventListener("click", changeOption, false);
			}
			for(var i = 1; i <= ix8; i++){
				var ixt8 = document.querySelector(".map"+i); 
				ixt8.addEventListener("click", changeOption, false);
			}
			for(var i = 1; i <= ix9; i++){
				var ixt9 = document.querySelector(".spol"+i); 
				ixt9.addEventListener("click", changeOption, false);
			}
			for(var i = 1; i <= ix10; i++){
				var ixt10 = document.querySelector(".cita"+i); 
				ixt10.addEventListener("click", changeOption, false);
			}
			for(var i = 1; i <= ix11; i++){
				var ixt11 = document.querySelector(".icot"+i); 
				ixt11.addEventListener("click", changeOption, false);
			}
			for(var i = 1; i <= ix12; i++){
				var ixt12 = document.querySelector(".line"+i); 
				ixt12.addEventListener("click", changeOption, false);
			}
			for(var i = 1; i <= ix13; i++){
				var ixt13 = document.querySelector(".icok"+i); 
				ixt13.addEventListener("click", changeOption, false);
			}
			for(var i = 1; i <= ix14; i++){
				var ixt14 = document.querySelector(".rima"+i); 
				ixt14.addEventListener("click", changeOption, false);
			}
			for(var i = 1; i <= ix15; i++){
				var ixt15 = document.querySelector(".timer"+i); 
				ixt15.addEventListener("click", changeOption, false);
			}
			for(var i = 1; i <= ix16; i++){
				var ixt16 = document.querySelector(".burl"+i); 
				ixt16.addEventListener("click", changeOption, false);
			}
			for(var i = 1; i <= ix17; i++){
				var ixt17 = document.querySelector(".icalp"+i); 
				ixt17.addEventListener("click", changeOption, false);
			}
			for(var i = 1; i <= ix18; i++){
				var ixt18 = document.querySelector(".slid"+i); 
				ixt18.addEventListener("click", changeOption, false);
			}
			for(var i = 1; i <= ix19; i++){
				var ixt19 = document.querySelector(".qanu"+i); 
				ixt19.addEventListener("click", changeOption, false);
			}
			for(var i = 1; i <= ix20; i++){
				var ixt20 = document.querySelector(".degu"+i); 
				ixt20.addEventListener("click", changeOption, false);
			}
		}
		
	}
}