/**
 * Библиотека функций для
 * Сохранение размеров грида (ширина и высота) 
 * Сохранение размеров колонок (ширина)
 * Сохранение последовательности колонок
 * Сохранение видимости колонок (для версии выше 4.3.2)
 * Сохранение сортировки колонок
 * Добавление контекстного меню для грида
 * Не надо добавлять кнопку выбора отображения колонок
 * Не надо разрещать перестановку колонок
 * 
 * Соглашение: ID грида должен быть уникальным в приложении
 * 
 * Зависимости от других библиотек
 * jQuery 1.7.2,jQueryUI 1.8.20, jqGrid 4.3.2
 * ,jquery.obj2json - для IE 6,7
 * ,jquery.contextMenu
 * ,jquery.cookie
 * jqGrid plugins: setColumns
 * 
 * Использование: перед инициализацией грида обновитье его опции
 * var grid_options={...}; //свои опции грида
 * var user_options=$("#table").jqGrid("userSettings",grid_options);  //восстановление опций
 * $("#table").jqGrid( user_options ); //собственно инициализация
 * //После добавления бара с кнопками запускаем удобнящки
 * $("#table").jqGrid('improve', {contextMenu: false});
 */

;(function($){
	
	//Приватные функции
	
	/**
	 * Функция перевода объекта в строку
	 * Ранняя детекция наличия нативной поддержки JSON в браузере
	 * в IE 6-7 такой поддержки нет
	 * @obj - object 
	 * @returns string 
	 **/
	var fn_obj2json=(!!JSON)?function(obj){
		 return JSON.stringify(obj);
		}:function(obj){  
		 return $.obj2json(obj); //собственная реализация перевода в JSON формат 	
	};
	
	/** Сохранить настройки 
	 *  @key - string - ключ настроек
	 *  @obj - object - значение настроек
	 *  @returns boolean  
	 * */
	var fn_set=function( key, obj ){
		var json=fn_obj2json(obj);
		$.cookie( key, json );
	};

	/**
	 * Возвращает значение настроек в виде объекта
	 * @key - string - ключ настройки
	 * @returns object 
	 **/
	var fn_get=function(key){
		var settings=$.cookie(key); 
		return $.parseJSON(settings) || {};
	};

	
	/**
	 * Добавление кнопки выбора колонок
	 **/
	var fn_addSetColumnsButton=function(grid,pager){
		$(grid).jqGrid('navButtonAdd',pager,{ id:"bSetColumns",caption:"",title:"Показать/Скрыть колонки"
	         ,buttonicon:"ui-icon-newwin"
		     ,onClickButton:function(){
		       	 $(grid).setColumns({width:350,colnameview:false});  return false;
		     }
		     , position: "last", cursor: "pointer"
		});
	};
	
	
	/**
	 * Создаем контекстное меню из кнопок бара
	 * @grid - string || object - идентификатор или объект грида
	 * @menu_options - object - настройки контекстного меню
	 * */ 
	var fn_contextMenu=function(grid,bar){
		var $bar=$(bar), id=$bar.attr("id")+"_cxmn"
		, $div=$("<div id='"+id+"' class='contextMenu' style='display:none'></div>").appendTo($("body"))
		, $ul=$("<ul></ul>").appendTo($div)
		, bindings={} //обработчики кнопок
		; 
		$bar.find(".ui-pg-button").each(function(){
			var $btn=$(this), separator=($btn.find('.ui-separator').size()>0); if (separator) return;
			var bid=$btn.attr("id")
			, itemid = bid + "_cxmi"
			, title=$btn.attr("title")
			, content=$btn.find('.ui-pg-div');
			
			//не пропускаем в контекстное меню кнопки обновить и настройка столбцов
			var text=content.text(); if (text==="") return;
			var html=content.html();
			$("<li id='"+itemid+"'></li>").appendTo($ul)
				.attr('title',title)
				.html(html)
				.find('span.ui-icon').css('display','inline-block')
			;
			bindings[itemid]=function(){
				$btn.click();
			};
		});
		$(grid).contextMenu(id,$.extend({bindings: bindings}));
	};
	
	/** восстановление настроек из куков
	* при восстановлении надо учитывать, что гридом будет добавлена колонка 
	* с  порядковым номером строки (опция).
	* В сохраненных настройках colModel:[{name:'rn'},{name:'id'}]
	* В модели colModel:[{name:'id'}]
	**/
	var fn_restoreSettings=function(gSett,uSett){
			if ((!gSett) || (!uSett)) return;
			if (uSett.width && ((uSett.width-0)>0) ) { gSett.width=uSett.width;	}
			if (uSett.height && ((uSett.height-0)>0) ) { gSett.height=uSett.height;	}
			
			if ((uSett.sortname)){
					gSett.sortname=uSett.sortname;
					if ((uSett.sortorder)){
							 gSett.sortorder=uSett.sortorder;
					 }
			}
				
			//пользовательская ширина колонок	
			if ((uSett.colModel) && (gSett.colModel)) { 
				var gModel=gSett.colModel, uModel=uSett.colModel
				, glen=gModel.length;
				
				for (var ci=0;ci<glen;ci++){ 
					var gcol=gModel[ci], gname=gcol.name //верим в лучшее
					, ucol=uModel[gname]
					;
					if (!ucol) continue; //нет настроек 
					if ( (ucol.width) && ((ucol.width-0) > 0) ) {
				 		gcol.width=ucol.width;
				 	}
				 	if (( ucol.hidden !== undefined ) && ( ucol.hidden !== null )) {
						gcol.hidden= (ucol.hidden) ? true : false;
					}
					 	 
				}
			}
					
			/// Пользовательский порядок колонок
		 	if ((uSett.cord) && (gSett.colModel)){
			 	var gModel=gSett.colModel, len=gModel.length, oModel=[];
			 	for (var ci=0;ci<len;ci++) {
				 	var col=gModel[ci], colName=col.name, order=uSett.cord[colName];
				 	oModel[order]=col;
				 }
				 gSett.colModel=oModel;
			}
			 	
	  	};
	
	//Расширяем стандартный грид своими функциями
	$.jgrid.extend({
		
		userSettings: function(grid_options){
			//пока не видно смысла возвращать для каждого из гридов
			//предполагается что будет вызываться только для одного
			var $grid=$(this), gr_id=$grid.attr("id")
			///"улучшаем" настройки дополнительными обработчиками 
			, improveOptions=$.extend(grid_options,{
				//разрешаем перетаскивать столбцы
				sortable: { 
					update: function(permutation){
			        	//расшифровываем порядок 
			        	var colModel=$grid.jqGrid("getGridParam","colModel")
			        	//если выставлена опция rownumbers после инициализации грида
			        	//будет лишняя нулевая колонка rn
			        	//(ее имя вроде тоже может настраиваться)
			        	, rownumbers=$grid.jqGrid("getGridParam","rownumbers")
			        	/// еще одна служебная колонка для множественного выделения
			        	, multiselect=$grid.jqGrid("getGridParam","multiselect")
			        	;
			        	
			        	colModel=colModel.slice((rownumbers)?1:0); //копируем без rn или все
			        	colModel=colModel.slice((multiselect)?1:0); //копируем без cb или все
			        	
			        	
			        	var columnOrder={}, len=colModel.length; 
			        	for (var i=0;i<len;i++){
			    	    	var  col=colModel[i], colName=col.name; 
			    	    	columnOrder[colName]=i;
			    	    }
			    	    var sett=fn_get(gr_id); sett.cord=columnOrder; fn_set(gr_id,sett);
					}
				}
				//обрабатываем событие сортировки по колонке
				,onSortCol: function(name,index,order){
				 var sett=fn_get(gr_id); sett.sortname=name, sett.sortorder=order; fn_set(gr_id, sett);					
				}
				//обработчик изменения ширины колонки
				,resizeStop: function(width,columnIndex){
					var gopts=$grid.jqGrid("getGridParam","colModel")
					, gcol=gopts[columnIndex] //из текущей модели
					, colname=gcol.name //уникальное имя колонки
					;
					var sett = fn_get(gr_id); sett.colModel=sett["colModel"] || {};
					var obj={}; obj[colname]={width: width};
					$.extend(sett.colModel, obj);
					fn_set(gr_id, sett);
				}
			})
			, userOptions=fn_get(gr_id);
			fn_restoreSettings(improveOptions,userOptions);
			
			return improveOptions;
			
		}
		, improve: function( opts ){
			opts = opts || {};
			var _options={ contextMenu: true };
			$.extend(_options,opts);
			
			/**
			 * Функция которая будет получать экземпялры грида и их улучшать
			 * */
			var _fn_improve=function(){
				var $this=$(this), id=$this.attr("id")
				, pager=$this.jqGrid("getGridParam","pager")
				;
				//Убираем из пагинатора среднюю часть, чтобы хватало места для кнопок
				var $center=$(pager+"_center"), $left=$center.prev();
				$center.remove(); $left.css("width","70%");
				//Добавляем кнопку выбора отображаемых колонок
				fn_addSetColumnsButton($this,pager);
				//Добавляем контекстное меню
				if (_options.contextMenu) fn_contextMenu($this,pager);
				//Добавляем изменение и запоминание размеров грида 
				$this.jqGrid('gridResize',{
				   	//сохраняем настройки размеров таблицы
				   	stop: function(e,ui){  
						   	var height=$("#gview_"+id+" .ui-jqgrid-bdiv").height()
						   	, width=ui.size.width;
						   	var sett=fn_get(id);
						   	sett.width=width; sett.height=height;
						   	fn_set(id,sett);
					}
			    });
				
				/// Обработчик события показать, спрятать колонку
				/// В гридах ниже 4.3.2 нет такого события
				$this.bind("jqGridShowHideCol",function(e,show,name,index){
					 	var sett= fn_get(id) || {};
						sett.colModel=sett["colModel"] || {};
						var obj={}; obj[name]={hidden: !show};
						$.extend(sett.colModel, obj);
						fn_set(id, sett);
				});
			}; //_fn_improve
			return this.each( _fn_improve );
		} //improve		
	});	
})(jQuery);