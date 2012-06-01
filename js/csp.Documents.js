//Дополняем переменную определенную на сервере
$.extend(window.page,{
	doctype: "" //выбранный тип документа
	///Дополнительные функции
	,fn: {
		docTypeChange: function( docTypeData ){ /// Сменить тип документа
			page.doctype=docTypeData.id; //запоминаем выбранный класс документов в глобальную переменную
			var doctypeName=docTypeData.nm //имя выбранного типа документа на русском
			var docColModels={ /// Настройки колонок грида, в зависимости от типа документа
				"Common.Dicts": { colModel: [ {name: "Name", label: "Наименование"}, {name: "Comment", label: "Описание"}]}, "Common.Kontragent": { colModel: [ {name: "Name", label: "Название"}, {name: "Activity", label: "Активность"}, {name: "Address", label: "Адрес фактический"}, {name: "AddressUr", label: "Адрес юридический"}, {name: "AdPhone", label: "Телефон указанный в рекламе"}, {name: "Agree", label: "№ договора"}, {name: "Balance", label: "Баланс"}, {name: "ChangeDate", label: "Дата последнего изменения"}, {name: "ChangeTime", label: "Время последнего изменения"}, {name: "ChangeUser->Name", label: "Человек внесший изменения"}, {name: "chief", label: "Директор"}, {name: "City", label: "Город (факт адрес)"}, {name: "CityCode", label: "Код города"}, {name: "CityUr", label: "Город (юр адрес)"}, {name: "Code", label: "Уникальный номер "}, {name: "Comment", label: "Комментарий"}, {name: "ContPers", label: "Контактные лица"}, {name: "Currency", label: "Валюта расчётов"}, {name: "Discount", label: "Скидка (%)"}, {name: "EMail", label: "e-mail"}, {name: "fax", label: "Факс"}, {name: "Federal->Name", label: "Федеральный округ"}, {name: "glavbuh", label: "Главный бухгалтер"}, {name: "Holding->Name", label: "Холдинг"}, {name: "IsWe", label: "Это юр лицо принадлежит нам"}, {name: "Koeff", label: "Работает (коэфф. 1-3)"}, {name: "Manager", label: "Менеджер"}, {name: "NDSPayment", label: "Оплата по договору (с НДС, Без НДС)"}, {name: "NotifyEmails", label: "Уведомлять о сообщении от этого клиента"}, {name: "OtgruzPrincip", label: "Принцип отгрузки запчастей"}, {name: "OurCompany->Name", label: "Наше юр. лицо с которым работает этот контрагент"}, {name: "Password", label: "Пароль"}, {name: "Phones", label: "Контактные телефоны"}, {name: "Postalcode", label: "Индекс (факт адрес)"}, {name: "PostalcodeUr", label: "Индекс (юр адрес)"}, {name: "Property126->Name", label: "Категория цен инструмент"}, {name: "Property127->Name", label: "Категория цен бытовка"}, {name: "Property2506", label: "Вид деятельности"}, {name: "Property831->Name", label: "Способ доставки"}, {name: "Pseudonym", label: "Псевдоним"}, {name: "region2->Name", label: "Регион"}, {name: "Status", label: "Статус"}, {name: "WCalc", label: "Как рассчитываемся"}, {name: "WCalc2", label: "Как рассчитываемся"}]}, "Docs.Act": { colModel: [ {name: "NameSorted", label: "Номер пригодный для сортировки"}, {name: "Name", label: "Номер"}, {name: "Serial", label: "Серийный номер"}, {name: "Paid", label: "Погашен"}, {name: "Comment", label: "Комментарий"}, {name: "Garant", label: "Гарантийный номер"}, {name: "ActDate", label: "Дата акта"}, {name: "CustomerName", label: "Потребитель"}, {name: "DefectDescription", label: "Неисправность"}, {name: "Kontr->Name", label: "Контрагент"}, {name: "NumbersHistory", label: "История изменений номеров"}, {name: "PaidDate", label: "Дата погашения"}, {name: "RepairsQnt", label: "Количество ремонтов"}, {name: "SellerName", label: "Продавец"}, {name: "Source->Name", label: "Родитель"}, {name: "SrvFIO", label: "Директор сервисного центра"}, {name: "SrvName", label: "Наименование сервисного центра"}, {name: "User1->Name", label: "Оператор"}]}, "Docs.ActItems": { colModel: [ {name: "Price", label: "Цена"}, {name: "Quantity", label: "Количество"}, {name: "Request->Name", label: "Заявка"}, {name: "Total", label: "Сумма"}]}, "Docs.ActNote": { colModel: [ {name: "Name", label: "Номер"}, {name: "Chief->Name", label: "Начальник"}, {name: "CloseDate", label: "Дата закрытия"}, {name: "CloseTime", label: "Время закрытия"}, {name: "CloseUser->Name", label: "Человек закрывший"}, {name: "Comment", label: "Комментарий"}, {name: "Dat", label: "Дата создания"}, {name: "Kontr->Name", label: "Контрагент"}, {name: "Manager", label: "Менеджер"}, {name: "PaymentPoluh->Name", label: "Получатель платежа"}, {name: "Source->Name", label: "Родитель"}, {name: "Stat", label: "Статус"}, {name: "Summa", label: "Сумма"}, {name: "Tim", label: "Время"}, {name: "User1->Name", label: "Оператор"}]}, "Docs.ActNoteItems": { colModel: [ {name: "Act->Name", label: "Акт"}, {name: "Price", label: "Цена"}, {name: "Quantity", label: "Количество"}, {name: "Total", label: "Сумма"}]}, "Docs.Brakremont": { colModel: [ {name: "Name", label: "Номер"}, {name: "CloseDate", label: "Дата закрытия"}, {name: "CloseTime", label: "Время закрытия"}, {name: "CloseUser->Name", label: "Человек закрывший"}, {name: "Comment", label: "Комментарий"}, {name: "Dat", label: "Дата создания"}, {name: "Kontr->Name", label: "Контрагент"}, {name: "Source->Name", label: "Родитель"}, {name: "Stat", label: "Статус"}, {name: "Summa", label: "Сумма"}, {name: "Tim", label: "Время"}, {name: "User1->Name", label: "Оператор"}]}, "Docs.BrakremontItems": { colModel: [ {name: "addr->Name", label: "Место"}, {name: "Price", label: "Цена"}, {name: "Quantity", label: "Количество"}, {name: "Total", label: "Сумма"}]}, "Docs.Diff": { colModel: [ {name: "Name", label: "Номер"}, {name: "CloseDate", label: "Дата закрытия"}, {name: "CloseTime", label: "Время закрытия"}, {name: "CloseUser->Name", label: "Человек закрывший"}, {name: "Comment", label: "Комментарий"}, {name: "Dat", label: "Дата создания"}, {name: "Kontr->Name", label: "Контрагент"}, {name: "Source->Name", label: "Родитель"}, {name: "Stat", label: "Статус"}, {name: "Summa", label: "Сумма"}, {name: "Tim", label: "Время"}, {name: "User1->Name", label: "Оператор"}]}, "Docs.DiffItems": { colModel: [ {name: "Kolfact", label: "Количество по документу"}, {name: "Price", label: "Цена"}, {name: "Quantity", label: "Количество"}, {name: "Total", label: "Сумма"}]}, "Docs.DocBrak": { colModel: [ {name: "Name", label: "Номер"}, {name: "CloseDate", label: "Дата закрытия"}, {name: "CloseTime", label: "Время закрытия"}, {name: "CloseUser->Name", label: "Человек закрывший"}, {name: "Comment", label: "Комментарий"}, {name: "Dat", label: "Дата создания"}, {name: "datend", label: "Дата завершения"}, {name: "datpriem", label: "Дата приема"}, {name: "Kontr->Name", label: "Контрагент"}, {name: "Source->Name", label: "Родитель"}, {name: "Stat", label: "Статус"}, {name: "Summa", label: "Сумма"}, {name: "Tim", label: "Время"}, {name: "User1->Name", label: "Оператор"}]}, "Docs.DocBrakItems": { colModel: [ {name: "PlanQuant", label: "Планируемое количество"}, {name: "Price", label: "Цена"}, {name: "Quantity", label: "Количество"}, {name: "result", label: "Результат"}, {name: "Total", label: "Сумма"}]}, "Docs.Docs": { colModel: [ {name: "Name", label: "Наименование"}, {name: "OperType", label: "Тип Операции"}]}, "Docs.Inner": { colModel: [ {name: "Name", label: "Номер"}, {name: "CloseDate", label: "Дата закрытия"}, {name: "CloseTime", label: "Время закрытия"}, {name: "CloseUser->Name", label: "Человек закрывший"}, {name: "Comment", label: "Комментарий"}, {name: "Dat", label: "Дата создания"}, {name: "Kontr->Name", label: "Контрагент"}, {name: "Source->Name", label: "Родитель"}, {name: "Stat", label: "Статус"}, {name: "Summa", label: "Сумма"}, {name: "Tim", label: "Время"}, {name: "User1->Name", label: "Оператор"}]}, "Docs.InnerDiff": { colModel: [ {name: "Name", label: "Номер"}, {name: "CloseDate", label: "Дата закрытия"}, {name: "CloseTime", label: "Время закрытия"}, {name: "CloseUser->Name", label: "Человек закрывший"}, {name: "Comment", label: "Комментарий"}, {name: "Dat", label: "Дата создания"}, {name: "Kontr->Name", label: "Контрагент"}, {name: "Source->Name", label: "Родитель"}, {name: "Stat", label: "Статус"}, {name: "storeman->Name", label: "Грузчик"}, {name: "Summa", label: "Сумма"}, {name: "Tim", label: "Время"}, {name: "User1->Name", label: "Оператор"}]}, "Docs.InnerDiffItems": { colModel: [ {name: "addr->Name", label: "Адрес"}, {name: "Price", label: "Цена"}, {name: "quantdefault", label: "Количество по накладной"}, {name: "Quantity", label: "Количество"}, {name: "quantreal", label: "Количество фактическое"}, {name: "Total", label: "Сумма"}]}, "Docs.InnerItems": { colModel: [ {name: "addr->Name", label: "Место назначения"}, {name: "addr2->Name", label: "Текущее место "}, {name: "Price", label: "Цена"}, {name: "Quantity", label: "Количество"}, {name: "Total", label: "Сумма"}]}, "Docs.Invent": { colModel: [ {name: "Name", label: "Номер"}, {name: "Address->Name", label: "Блокировка адреса"}, {name: "CloseDate", label: "Дата закрытия"}, {name: "CloseTime", label: "Время закрытия"}, {name: "CloseUser->Name", label: "Человек закрывший"}, {name: "Comment", label: "Комментарий"}, {name: "Dat", label: "Дата создания"}, {name: "FullName", label: "Блокировка адреса"}, {name: "Kontr->Name", label: "Контрагент"}, {name: "Source->Name", label: "Родитель"}, {name: "Stat", label: "Статус"}, {name: "Summa", label: "Сумма"}, {name: "Tim", label: "Время"}, {name: "User1->Name", label: "Оператор"}]}, "Docs.InventItems": { colModel: [ {name: "addr", label: "Ячейка"}]}, "Docs.Otchet": { colModel: [ {name: "NameSorted", label: "Номер пригодный для сортировки"}, {name: "Name", label: "Номер"}, {name: "Dat", label: "Дата создания"}, {name: "Summa", label: "Сумма"}, {name: "Stat", label: "Статус"}, {name: "ErrorDescription", label: "Ответ контрагенту"}, {name: "GotPaperProve", label: "Бумажный отчёт проверен"}, {name: "CloseDate", label: "Дата закрытия"}, {name: "CloseTime", label: "Время закрытия"}, {name: "CloseUser->Name", label: "Человек закрывший"}, {name: "Comment", label: "Комментарий"}, {name: "DatePaperProve", label: "Дата проверки бумажного отчёта"}, {name: "Errors", label: "Ошибки отчёта"}, {name: "Kontr->Name", label: "Контрагент"}, {name: "Kurs", label: "Курс валюты"}, {name: "Rem->Name", label: "Заявка"}, {name: "Source->Name", label: "Родитель"}, {name: "SummaCurrency", label: "Сумма в валюте"}, {name: "Tim", label: "Время"}, {name: "User1->Name", label: "Оператор"}, {name: "UserPaperProve->Name", label: "Оператор проверивший бумажный отчёт"}]}, "Docs.OtchetItems": { colModel: [ {name: "ActNumber", label: "Номер акта"}, {name: "Comment", label: "Примечание"}, {name: "Currency", label: "Валюта в которой считали"}, {name: "Dat", label: "Дата"}, {name: "garant", label: "Гарантийный талон"}, {name: "goodssource", label: "Источник товара"}, {name: "Price", label: "Цена"}, {name: "Quantity", label: "Количество"}, {name: "remcost", label: "Стоимость ремонта"}, {name: "RemTovar->Name", label: "Ремонтируемый товар"}, {name: "RemType", label: "Тип ремонта"}, {name: "serial", label: "Серийный номер"}, {name: "StringType", label: "Тип строки"}, {name: "SummaRub", label: "Рублёвая стоимость"}, {name: "talon", label: "Отрывной талон"}, {name: "Total", label: "Сумма"}]}, "Docs.OtchetNote": { colModel: [ {name: "Name", label: "Номер"}, {name: "CloseDate", label: "Дата закрытия"}, {name: "CloseTime", label: "Время закрытия"}, {name: "CloseUser->Name", label: "Человек закрывший"}, {name: "Comment", label: "Комментарий"}, {name: "Dat", label: "Дата создания"}, {name: "Kontr->Name", label: "Контрагент"}, {name: "Manager", label: "Менеджер"}, {name: "Otchet->Name", label: "Отчёт"}, {name: "OurCompany->Name", label: "Наше юр лицо"}, {name: "Source->Name", label: "Родитель"}, {name: "Stat", label: "Статус"}, {name: "Summa", label: "Сумма"}, {name: "Tim", label: "Время"}, {name: "User1->Name", label: "Оператор"}]}, "Docs.OtchetNoteItems": { colModel: [ {name: "Brand->Name", label: "Бренд"}, {name: "Period", label: "Период"}, {name: "Price", label: "Цена"}, {name: "Quantity", label: "Количество"}, {name: "Total", label: "Сумма"}]}, "Docs.Platejka": { colModel: [ {name: "Name", label: "Номер"}, {name: "CloseDate", label: "Дата закрытия"}, {name: "CloseTime", label: "Время закрытия"}, {name: "CloseUser->Name", label: "Человек закрывший"}, {name: "Comment", label: "Комментарий"}, {name: "Dat", label: "Дата создания"}, {name: "Kontr->Name", label: "Контрагент"}, {name: "Kurs", label: "Курс"}, {name: "MastermaxSummCurr", label: "Сумма Mastermax в валюте"}, {name: "MastermaxSummRub", label: "Сумма Mastermax в рублях"}, {name: "PlatejDate", label: "Дата платёжного поручения"}, {name: "Poluh->Name", label: "Получатель"}, {name: "RubSumma", label: "Рублёвая сумма"}, {name: "Source->Name", label: "Родитель"}, {name: "Stat", label: "Статус"}, {name: "Summa", label: "Сумма"}, {name: "Tim", label: "Время"}, {name: "TullSummCurr", label: "Сумма Tull в валюте"}, {name: "TullSummRub", label: "Сумма Tull в рублях"}, {name: "Typeplatej->Name", label: "Тип платежа"}, {name: "User1->Name", label: "Оператор"}, {name: "ViconteSummCurr", label: "Сумма Viconte в валюте"}, {name: "ViconteSummRub", label: "Сумма Viconte в рублях"}]}, "Docs.PlatejkaItems": { colModel: [ {name: "Rash->Name", label: "Отгрузка"}, {name: "Summa", label: "Cумма"}]}, "Docs.Prih": { colModel: [ {name: "Name", label: "Номер"}, {name: "CloseDate", label: "Дата закрытия"}, {name: "CloseTime", label: "Время закрытия"}, {name: "CloseUser->Name", label: "Человек закрывший"}, {name: "Comment", label: "Комментарий"}, {name: "Dat", label: "Дата создания"}, {name: "Kontr->Name", label: "Контрагент"}, {name: "Source->Name", label: "Родитель"}, {name: "Stat", label: "Статус"}, {name: "Summa", label: "Сумма"}, {name: "Tim", label: "Время"}, {name: "User1->Name", label: "Оператор"}]}, "Docs.PrihItems": { colModel: [ {name: "Kolfact", label: "Количество по документу"}, {name: "Price", label: "Цена"}, {name: "Quantity", label: "Количество"}, {name: "Total", label: "Сумма"}]}, "Docs.Rash": { colModel: [ {name: "Name", label: "Номер"}, {name: "CloseDate", label: "Дата закрытия"}, {name: "CloseTime", label: "Время закрытия"}, {name: "CloseUser->Name", label: "Человек закрывший"}, {name: "Comment", label: "Комментарий"}, {name: "Dat", label: "Дата создания"}, {name: "Kontr->Name", label: "Контрагент"}, {name: "kurs", label: "Курс"}, {name: "opl->Name", label: "Оплата"}, {name: "OplatStatus", label: "Статус оплаты"}, {name: "OplSumma", label: "Оплаченная сумма"}, {name: "Platej->Name", label: "Платёжный документ"}, {name: "RubSumma", label: "Рублёвая сумма"}, {name: "Source->Name", label: "Родитель"}, {name: "Stat", label: "Статус"}, {name: "Summa", label: "Сумма"}, {name: "Tim", label: "Время"}, {name: "User1->Name", label: "Оператор"}]}, "Docs.RashItems": { colModel: [ {name: "Price", label: "Цена"}, {name: "Quantity", label: "Количество"}, {name: "Total", label: "Сумма"}, {name: "Zakaz", label: "Заказ"}, {name: "ZakazDat", label: "Дата замены"}, {name: "ZakazTim", label: "Время замены"}, {name: "ZakazUser1->Name", label: "Оператор"}]}, "Docs.Remont": { colModel: [ {name: "Name", label: "Номер"}, {name: "CloseDate", label: "Дата закрытия"}, {name: "CloseTime", label: "Время закрытия"}, {name: "CloseUser->Name", label: "Человек закрывший"}, {name: "Comment", label: "Комментарий"}, {name: "Dat", label: "Дата создания"}, {name: "Kontr->Name", label: "Контрагент"}, {name: "Oplacheno", label: "Оплачено"}, {name: "Otchet->Name", label: "Отчёт"}, {name: "Source->Name", label: "Родитель"}, {name: "Stat", label: "Статус"}, {name: "Summa", label: "Сумма"}, {name: "Tim", label: "Время"}, {name: "User1->Name", label: "Оператор"}]}, "Docs.RemontItems": { colModel: [ {name: "Name", label: "Описание поломки"}, {name: "garant", label: "№ Гарантийного талона"}, {name: "Price", label: "Цена"}, {name: "Quantity", label: "Количество"}, {name: "seller", label: "Организация продавшая товар"}, {name: "serial", label: "Серийный номер"}, {name: "Total", label: "Сумма"}]}, "Docs.StorageIn": { colModel: [ {name: "Name", label: "Номер"}, {name: "CloseDate", label: "Дата закрытия"}, {name: "CloseTime", label: "Время закрытия"}, {name: "CloseUser->Name", label: "Человек закрывший"}, {name: "Comment", label: "Комментарий"}, {name: "Dat", label: "Дата создания"}, {name: "Kontr->Name", label: "Контрагент"}, {name: "PrihodType", label: "Тип приёма"}, {name: "Source->Name", label: "Родитель"}, {name: "Stat", label: "Статус"}, {name: "storeman->Name", label: "Грузчик"}, {name: "Summa", label: "Сумма"}, {name: "Tim", label: "Время"}, {name: "User1->Name", label: "Оператор"}]}, "Docs.StorageInItems": { colModel: [ {name: "addr->Name", label: "Адрес"}, {name: "Price", label: "Цена"}, {name: "quantdefault", label: "Количество по накладной"}, {name: "Quantity", label: "Количество"}, {name: "quantreal", label: "Количество фактическое"}, {name: "Total", label: "Сумма"}]}, "Docs.StorageOut": { colModel: [ {name: "Name", label: "Номер"}, {name: "Brak", label: ""}, {name: "CloseDate", label: "Дата закрытия"}, {name: "CloseTime", label: "Время закрытия"}, {name: "CloseUser->Name", label: "Человек закрывший"}, {name: "Comment", label: "Комментарий"}, {name: "Dat", label: "Дата создания"}, {name: "Images", label: ""}, {name: "Kontr->Name", label: "Контрагент"}, {name: "Source->Name", label: "Родитель"}, {name: "Stat", label: "Статус"}, {name: "storeman->Name", label: "Грузчик"}, {name: "Summa", label: "Сумма"}, {name: "Tim", label: "Время"}, {name: "User1->Name", label: "Оператор"}]}, "Docs.StorageOutItems": { colModel: [ {name: "addr->Name", label: "Адрес"}, {name: "comment", label: "Гарантийный талон"}, {name: "garant", label: "Гарантийный талон"}, {name: "Price", label: "Цена"}, {name: "quantdefault", label: "Количество по накладной"}, {name: "Quantity", label: "Количество"}, {name: "quantreal", label: "Количество фактическое"}, {name: "serial", label: "Гарантийный талон"}, {name: "Total", label: "Сумма"}]}, "Docs.Super": { colModel: [ {name: "Kontr", label: "Контрагент"}]}, "Docs.Utiliz": { colModel: [ {name: "Name", label: "Номер"}, {name: "CloseDate", label: "Дата закрытия"}, {name: "CloseTime", label: "Время закрытия"}, {name: "CloseUser->Name", label: "Человек закрывший"}, {name: "Comment", label: "Комментарий"}, {name: "Dat", label: "Дата создания"}, {name: "Komissia", label: "Комиссия"}, {name: "Kontr->Name", label: "Контрагент"}, {name: "Source->Name", label: "Родитель"}, {name: "SourceTbl", label: "Откуда утилизировать"}, {name: "Stat", label: "Статус"}, {name: "Summa", label: "Сумма"}, {name: "Tim", label: "Время"}, {name: "User1->Name", label: "Оператор"}]}, "Docs.UtilizItems": { colModel: [ {name: "addr->Name", label: "Место"}, {name: "Client->Name", label: "Клиент"}, {name: "garant", label: "Гарантийный талон"}, {name: "goodsdir", label: "Действие с товаром"}, {name: "Price", label: "Цена"}, {name: "Quantity", label: "Количество"}, {name: "sn", label: "Серийный номер изделия"}, {name: "SourceTbl", label: "Откуда утилизировать"}, {name: "spravka", label: "№ и дата выписки Справки"}, {name: "Total", label: "Сумма"}]}, "Docs.waste": { colModel: [ {name: "meas", label: "Единица"}]}, "Goods.Goods": { colModel: [ {name: "Name", label: "Наименование"}, {name: "Property5300", label: "Номер по схеме"}, {name: "Property312", label: "Количество в упаковке"}, {name: "abbr", label: "Аббревиатура модели"}, {name: "AllowAct", label: "Разрешать выписывать акт без заявки"}, {name: "codedetail", label: "Код детали"}, {name: "CodeOKVED", label: "Код ТНВЭД"}, {name: "Comment", label: "Комментарий"}, {name: "Composition", label: "Состав запчасти"}, {name: "Description", label: "Подробное описание"}, {name: "EnglishName", label: "Английское наименование"}, {name: "FullName", label: "Полное наименование"}, {name: "MaterialEng", label: "Материал (англ.)"}, {name: "ModelNumber", label: "Модель и номер"}, {name: "Price", label: "Цена"}, {name: "Property3609", label: "Модель"}, {name: "Property675", label: "Ед. Изм."}, {name: "Property7053", label: "Изделие"}, {name: "Property9469", label: "Категория"}, {name: "Size1", label: "Объём"}, {name: "Weight", label: "Вес"}]}, "Kontragent.SendMailLog": { colModel: [ {name: "Attach", label: "Файл"}, {name: "Cc", label: "Копия"}, {name: "Comment", label: "Комментарий"}, {name: "Dat", label: "Дата"}, {name: "MessageTo", label: "Кому"}, {name: "Result", label: "Результат"}, {name: "Tim", label: "Время"}]}, "Operation.Instructions": { colModel: [ {name: "Name", label: "Краткое описание"}, {name: "CloseDate", label: "Дата закрытия"}, {name: "CloseTime", label: "Время закрытия"}, {name: "CloseUser->Name", label: "Человек закрывший"}, {name: "Comment", label: "Комментарий"}, {name: "Depot1->Name", label: "Склад"}, {name: "dostavka->Name", label: "Способ доставки"}, {name: "HasBeenSent", label: "Инструкция отправлена"}, {name: "InstDate", label: "Дата"}, {name: "Kontr->Name", label: "Контрагент"}, {name: "Oper->Name", label: "Шаблон операции"}, {name: "RefuseReason", label: "Причина отклонения заявки"}, {name: "Source->Name", label: "Родитель"}, {name: "State", label: "Состояние"}, {name: "User1->Name", label: "Оператор"}]}, "Operation.InstructionsItems": { colModel: [ {name: "addr->Name", label: "Ячейка"}, {name: "addr2->Name", label: "Место назначения"}, {name: "BrakComment", label: "Комментарий клиента"}, {name: "Client->Name", label: "Клиент"}, {name: "garant", label: "Гарантийный талон"}, {name: "goodsdir", label: "Действие с товаром"}, {name: "opispolomki", label: "Описание поломки"}, {name: "Price", label: "Цена"}, {name: "Quantity", label: "Количество"}, {name: "quantplan", label: "Количество по плану"}, {name: "SellDate", label: "Комментарий клиента"}, {name: "seller", label: "Организация продавшая товар"}, {name: "sn", label: "Серийный номер изделия"}, {name: "spravka", label: "№ и дата выписки Справки"}, {name: "Total", label: "Сумма"}]}, "Operation.Plan": { colModel: [ {name: "Name", label: "Номер"}, {name: "CloseDate", label: "Дата закрытия"}, {name: "CloseTime", label: "Время закрытия"}, {name: "CloseUser->Name", label: "Человек закрывший"}, {name: "Dat", label: "Дата создания"}, {name: "DocLanguage", label: "Язык"}, {name: "Kontr->Name", label: "Контрагент"}, {name: "PlanDate", label: "Начальная дата"}, {name: "PlanDate2", label: "Конечная дата"}, {name: "Source->Name", label: "Родитель"}, {name: "Stat", label: "Статус"}, {name: "Summa", label: "Сумма"}, {name: "Tim", label: "Время"}, {name: "User1->Name", label: "Оператор"}]}, "Operation.PlanItems": { colModel: [ {name: "Price", label: "Цена"}, {name: "Quantity", label: "Количество"}, {name: "Total", label: "Сумма"}]}			}
						
			var doctypesItemID=doctypes.ItemID	//название класса выбранного в списке типов документов
			docums.ClassName=doctypesItemID;
			//if(doctypesItemID=="Docs.Platejka")return
			if(doctypesItemID=="Docs.PrihKassOrder")return
			docitems.ClassName=doctypesItemID+"Items";
			var ExcludeFields="Goods,Doc,DocType,RequestItem";
			var AdditionalFields="";
			if(doctypesItemID!="Docs.Platejka")var AdditionalFields="Goods->FullName~Наименование~~~@%String~~~~~#@#";
			if(docitems.ClassName=="Docs.RashItems") {
				var ExcludeFields=ExcludeFields+",ZakazGoods";
				var AdditionalFields=AdditionalFields+"ZakazGoods->FullName~Заказанный товар~~~@%String~~~~~#@#";
			}
			if(doctypes.ItemID=="Docs.Rash"){
				okbwut3.style.display="inline";
			} else {
				okbwut3.style.display="none";
			}
			if(doctypesItemID=="Docs.Otchet"){
				OtchetSpecButton.style.display="inline";
			} else {
				OtchetSpecButton.style.display="none";
			}
			if ( doctypesItemID=="Operation.Instructions" )	{
				InstrSpecButton.style.display="inline";
			} else { 
				InstrSpecButton.style.display="none";
			}	
	
			if(ActRights==1)	{
				if(doctypesItemID=="Docs.Act") {
					ActSpecButton.style.display="inline";
					ActAddFields.style.display="inline";
				} else {
					ActSpecButton.style.display="none";
					ActAddFields.style.display="none";
				}
			}
			if(doctypes.ItemID=="Docs.StorageOut"){StorageOutField.style.display="inline";}
	
			d1 = new Date();
			docums.LoadHeaders("ActType","",AdditionalFieldsDocs);
			docitems.LoadHeaders(ExcludeFields,"",AdditionalFields);			
				}
	}
	///коллекция гридов страницы
	, grids: {} 
});

var d1,d2,ItemsClassName;



$(function (){ //onload
	
	var docTypeDlg=$("#docTypeDlg").dialog({
		title:"Выберите тип документа"
		,autoOpen:false
		,width:500
		,height:480
		,buttons:{
			"OK":function(){$(this).close()}
			,"Cancel":function(){$(this).close()}	
		}
	});
	
	var GRID="#doctypeg",BAR="#doctypeb",JSON="json.DocsDocs.cls";
	
	page.grids.doctype= //запоминаем в глобальную переменную
	$(GRID).jqGrid({ //Таблица с типами  документов
	 url: JSON
	 , colModel: [
	  {name:'id', hidden:true}
      , {name:'nm',label:'Тип', width:250}
      , {name:'ot',label:'Операция', width:150}
  	 ]
  	 , datatype: "json", jsonReader : { repeatitems: false }
  	 , pager: BAR
  	 , viewrecords:true
  	 , height:300
  	 , hidegrid: false
     , gridview:true ,rownumbers:true,viewrecords:true,rowNum:100
     , hoverrows:true ,scroll:1 
  	 //,ondblClickRow: catSelected
  	 , onSelectRow: function(){ //выбран новый тип документа
		 var grid=page.grids.doctype; //сохранили при инициализации
		 var doctype=grid.jqGrid("getGridParam","selrow"); //название выбранного класса
		 if (!doctype) return; //не выбран
		 if (page.doctype==doctype) return; //тип документа не изменился
		 var docTypeData=grid.jqGrid("getRowData",doctype); 
		 page.fn.docTypeChange(docTypeData);
	  }
	  
	})
	.jqGrid('navGrid',BAR, 
       {add:false,edit:false,del:false,view:false,search:false}
       ,{} //Параметры редактирования
       ,{} //Параметры добавления
       ,{} //Удаления
	);
 
 	
 
	
});

$(function(){

	var GRID="#docg",BAR="#docb",JSON="json.DocsDocs.cls";
	page.grids.docs= //запоминаем в глобальную переменную таблицу с документами
	$(GRID).jqGrid({ //Таблица с типами  документов
	 url: JSON
	 , caption: "Документы"
	 , colModel: [
	  {name:'id', hidden:true}
      , {name:'nb',label:'Номер', width:110}
      , {name:'dt',label:'Дата', width:150}
  	 ]
  	 , datatype: "json", jsonReader : { repeatitems: false }
  	 , pager: BAR
  	 , viewrecords:true
  	 , height:300
  	 , hidegrid: false
     , gridview:true ,rownumbers:true,viewrecords:true,rowNum:100
     , hoverrows:true ,scroll:1 
  	 //,ondblClickRow: catSelected
  	 , onSelectRow: function(){ //выбран новый тип документа
		 
	  }
	  
	})
	.jqGrid('navGrid',BAR, 
       {add:false,edit:false,del:false,view:false,search:false}
       ,{} //Параметры редактирования
       ,{} //Параметры добавления
       ,{} //Удаления
	);
 
	
});



function show(){
	doctypes.DownLoad();
}

//показать документы
function showdocums()
{
	var order="";
	//if(doctypes.ItemID=="Docs.Otchet"){var order="NameSorted"}
	dateArr=dat1.value.split("/")
	Data1=dateArr[2]+"-"+dateArr[1]+"-"+dateArr[0]
	dateArr=dat2.value.split("/")
	Data2=dateArr[2]+"-"+dateArr[1]+"-"+dateArr[0]
	var request="Dat>=CAST('"+Data1+"' AS DATE) and Dat<=CAST('"+Data2+"' AS DATE)";
	if(docssame==0){var requst=request+" and Depot="+depot;} //если  показ всех документов для всех складов то
	var currentKontragent=ChooseKontragent.value;
	if(currentKontragent!="all"){var request=request+" and Kontr="+currentKontragent}
	if(DocName.value!=""){var request=request+" and Name %STARTSWITH '"+DocName.value+"'";}
	var ShowUnpaidObject = document.getElementById("ShowUnpaid");
	if(typeof(ShowUnpaid)=="object")
	{
		if(ShowUnpaidObject.checked)var request=request+" and Paid=0"
	}
	
	
	docums.DownLoad(request,"","",order)
	d2 = new Date();
	//alert("вывод документов\n" + (d2-d1) + "\n" + d1.toLocaleTimeString() + "\n" + d2.toLocaleTimeString());
	LoadIgridHeaders();
}

// загрузить заголовки iGrid
function LoadIgridHeaders(){
	if(ItemsClassName==doctypes.ItemID+"Items")return;
	
	//IGridDocstrObj.Clear(true);
	ItemsClassName = doctypes.ItemID+"Items";
	
	alert(window.page.fn.ShowDocItemsHeaders);
	headers=page.fn.ShowDocItemsHeaders(ItemsClassName);
	
	headersArray = headers.split("#@#");
	var headersArraylength = headersArray.length;
	
	var Captions = new Array(headersArraylength);
	var Keys = new Array(headersArraylength);
	var Tags = new Array(headersArraylength);
	var Widths = new Array(headersArraylength);
	
	for (var i = 0; i< headersArray.length-1; i++)
	{
		//здесь каждый отдельный заголовок
		var h = headersArray[i];
		var headerArray = h.split("~");
		Captions[i] = headerArray[1];
		Keys[i] = headerArray[0];
		Tags[i] = "";
		Widths[i] = 80;
	}
	
	//IGridDocstrObj.DrawHeaders(Captions,Keys,Tags);
}

//загрузить данные в iGrid
function LoadIgridData(DocId) {
	var data = page.fn.ShowDocItems(ItemsClassName,DocId)
	IGridDocstrObj.Clear(false);
	IGridDocstrObj.LoadStringData(data);
}

function CreateDocument(ItemID) {
	CurrentDocementClass=docums.ClassName
	if(CurrentDocementClass==""){alert("Не выбран тип документа");return}
	ItemID=ReturnSpace(ItemID)
	var doccsp="document.csp";
	//if (CurrentDocementClass=="Docs.DocBrak"){alert("Документы на приём брака создаются и редактируются на рабочем месте сервис менеджера. Инструкциями с типом \"Приём брака\"");return}
	if(CurrentDocementClass=="Docs.Rash"){var doccsp="DocsRash.csp?source="+ItemID;}
	if(CurrentDocementClass=="Docs.Utiliz") {
		if(window.confirm("Открывать в новой форме?")){var doccsp="UtilizationDoc.csp?DocId="+ItemID}
		else{doccsp="docutiliz.csp"}
	}
	if(CurrentDocementClass=="Docs.PrihKassOrder")doccsp="docplatej.csp?DocId="+ItemID;
	if(CurrentDocementClass=="Docs.Platejka")doccsp="docplatej.csp?DocId="+ItemID;
	if(CurrentDocementClass=="Docs.Invent")
	{
		if(window.confirm("Открывать в новой форме?")){var doccsp="InventarizationIgrid.csp?source="+ItemID}
		else{doccsp="docinvent.csp"}
	}
	if(CurrentDocementClass=="Docs.Inner")doccsp="docinner.csp"
	if(CurrentDocementClass=="Docs.Diff")doccsp="docdiff.csp"
	if(CurrentDocementClass=="Docs.InnerDiff")doccsp="docinnerdiff.csp"
	if(CurrentDocementClass=="Docs.Remont"){alert("Заявка на запчасти создается инструкцией руководителя\nили в карточке контрагента");return;}
	if(CurrentDocementClass=="Docs.Otchet")
	{
		if(ItemID==""){doccsp="Otchet.csp?docid="+ItemID;}
		else{alert("Отчёты редактировать запрещено.");return;}
	}
	if(CurrentDocementClass=="Docs.Act")
	{
		doccsp="ActFromClient.CSP?docid="+ItemID;
		//alert("Акты технического состояния создаются только в менеджере отчётов");return;
	}
	if((CurrentDocementClass=="Docs.StorageIn")||(CurrentDocementClass=="Docs.StorageOut")){alert("Внутренняя инструкция создается на рабочем месте кладовщика");return;}
	if(CurrentDocementClass=="Operation.Instructions"){doccsp="createinstructIgrid.csp?source="+ItemID}
	WinResult=window.showModalDialog(doccsp,CurrentDocementClass+InnerSplitter+ItemID+InnerSplitter+doctypes.ItemName,"center:yes;status:no;dialogHeight:600px;dialogWidth:800px;resizable:yes;")
	if(WinResult==1)showdocums();
}
	
//показать строки документа
function showitems()
{
	var dd1 = new Date();
	var currentdoc=ReturnSpace(docums.ItemID);
	if(currentdoc=="")return
	docitems.DownLoad("Doc="+currentdoc,1)
	var dd2 = new Date();
	//LoadIgridData(currentdoc);
	//alert("вывод строк\n" + (dd2-dd1) + "\n" + dd1.toTimeString() + "\n" + dd2.toTimeString());	
}

function processdoc()
{
	if(docums.ItemID=="")return
	var doc=docums.ItemID+"@"+doctypes.ItemID;
	var ok=page.fn.processdoc(doc);
	//alert("код результата обработки документа: " + ok);
	if(isNaN(ok))
		{
			alert(ok)
			if(doctypes.ItemID=="Docs.Otchet")
			{
				ShowOtchetErrorsFn('Errors');
			}
		}
	else{
			showdocums();
		}
}

function printdoc()
{
	var doc=docums.ItemID+"@"+doctypes.ItemID;
	var doccsp="document.csp";
	if(CurrentDocementClass=="Docs.Utiliz")doccsp="docutiliz.csp"
	if(CurrentDocementClass=="Docs.Invent")doccsp="docinvent.csp"
	if(CurrentDocementClass=="Docs.Inner")doccsp="docinner.csp"
	if(CurrentDocementClass=="Docs.Diff")doccsp="docdiff.csp"
	WinResult=window.showModalDialog(doccsp,CurrentDocementClass+InnerSplitter+ItemID+InnerSplitter+doctypes.ItemName,"center:yes;status:no;dialogHeight:600px;dialogWidth:800px;resizable:yes;")
	//window.open("print.csp?doc="+doc);
}

//распечатать документ
function prnt(docid,docclass,param){
var url="print.csp?id="+docid+"&class="+docclass+"&sessionid="+sessionid;
if(param=="word")
{
	url=url+"&word=on"
}
if ((docclass=="Docs.Otchet")&&(param=="word"))
{
	if(window.confirm("Печатать все поля документа?")){url=url+"&AllColumns=1"}
	//window.prompt(url,url);
}
window.open(url);
}

function makescet(cl){
var doc=docums.ItemID;
if(doc==""){alert("Не выбран документ - основание для формирования платежного поручения");return}
WinResult=window.showModalDialog("makescet.csp?docid="+doc+"&class="+cl,"","cener:yes;status:no;dialogHeight:250px;dialogWidth:400px;resizable:yes;")
}
function maketovnakl(tovnakladn){
var doctov=docums.ItemID;
if(doctov==""){alert("Не выбран документ - основание для формирования товарной накладной");return}
WinResult=window.showModalDialog("maketovnakl.csp?docid="+doctov+"&class="+tovnakladn,"","cener:yes;status:no;dialogHeight:300px;dialogWidth:450px;resizable:yes;")
}

function deldoc(){
	if(!window.confirm("Удалить документ " + docums.ItemName + " ?"))return false;
	var classname=docums.ClassName;
	var itemid=docums.ItemID;
	var ok1=page.fn.deletedoc(classname,itemid);
	if(isNaN(ok1)){alert(ok1)}
	else{okfunc();}
}

// Выбрать контрагента
function ChooseKontragentFunc(){
	var UsersSelection=ChooseKontragent.options(ChooseKontragent.selectedIndex).value;
	if(UsersSelection=="choose")
	{
		var newKontragent=window.showModalDialog("Dictionary.csp","Common.Kontragent","center:yes;status:no;dialogHeight:400px;dialogWidth:650px;resizable:yes;");
		if(newKontragent==null){
			ChooseKontragent.selectedIndex=0;
			return false;}
		var ChooseKontragentLength = ChooseKontragent.options.length;
		ChooseKontragent.options.length= ChooseKontragentLength + 1;
		ChooseKontragent.options(ChooseKontragentLength).value=newKontragent.split("~")[0];
		ChooseKontragent.options(ChooseKontragentLength).text=newKontragent.split("~")[1];
		ChooseKontragent.selectedIndex=ChooseKontragentLength;
	}
}

function EmailDocumentFn(ItemID,ItemClass){
	alert("Функция отключена");
	return;
	var MailSetup=window.showModalDialog("MailSetup.csp","","center:yes;status:no;dialogHeight:200px;dialogWidth:500px;resizable:yes;");
	//вернётся следующая строка
	//Формировать DOC файл (false/true);Открывать Email программу (false/true);принудительный адрес отправки;Файл-шаблон
	//например: "true;true;"
	//или: "false;true;artemu78@rambler.ru;first-template"
	if(MailSetup==null)return
	var values=MailSetup.split(";");
	
	if(ReturnBoolean(values[0])){
		//создать файл
		var WaitWindow=window.open("wait.csp","win2", "status=no,width=200,height=200");
		ok=page.fn.MakeFile(ItemID,ItemClass,values[3]);
		WaitWindow.close();
		if(isNaN(ok)){alert(ok);return}
		else{alert("Файл успешно создан")}
	}
	if(ReturnBoolean(values[1])){
		//открыть почтовую программу
		if(values[2]!=""){
			var MailAddress=values[2];		//
		} else {
			var MailValues=page.fn.EmailFromDoc(ItemID,ItemClass);
			var MailValuesArray=MailValues.split(StringSplitter);
			var MailAddress=MailValuesArray[0];
			var KontrName=MailValuesArray[1];
			var DocTypeName=MailValuesArray[2];
			var DocName=MailValuesArray[3];
			if(MailValues==""){alert("Не удалось определить E-mail у контрагента записанного в документе.\nУкажите пожалуйста адрес вручную или заполните соответствующее поле контрагента.");return}
			
			}
	window.open("mailto:"+KontrName+" <"+MailAddress+">?subject="+OurName+"&body=Здравствуйте "+KontrName+"\n\n\n---------\n"+OurName)
	}
}

function ChangeTovInDocFn(){
	var itemid=docums.ItemID;
	var answer=window.showModalDialog("ChangeGoods.csp?DocId="+itemid+"&sessionid="+sessionid,"","center:yes;status:no;dialogHeight:550px;dialogWidth:800px;resizable:yes;");
	if(answer)showitems()
}

function ShowLogOfCreation(){
	var docid=docums.ItemID;
	if(ReturnSpace(docid)==""){alert("Не выбрана инструкция по отгрузке.");return;}
	window.open("LogOfCreation.csp?doc="+docums.ItemID);
}

//указанное поле документа в отдельном окне
function ShowOtchetErrorsFn(PropertyName) {
	window.showModalDialog("Info.csp?docid="+docums.ItemID+"&class="+doctypes.ItemID+"&property="+PropertyName,"","center:yes;status:no;dialogHeight:450px;dialogWidth:600px;resizable:yes;");
}

//отклонить отчёт
function setOtchetFailed() {
	if(!window.confirm("Отклонить отчёт?"))return;
	var docid=docums.ItemID;
	if(ReturnSpace(docid)==""){alert("Не выбран отчёт.");return;}
	var Descr = window.prompt("Укажите причину","");
	if(Descr==null)return;
	var ok=SetOthcetStatFailed2(docid,Descr);
	if(isNaN(ok)){alert(ok)}
	else{okfunc();}
}

function setOtchetAccepted(){
	if(!window.confirm("Поставить отчёту статус \"Принят\"?"))return;
	var docid=docums.ItemID;
	if(ReturnSpace(docid)==""){alert("Не выбран отчёт.");return;}
	var ok= page.fn.SetOthcetStatAccepted(docid);
	if(isNaN(ok)){alert(ok)}
	else{okfunc();}
}

function setActFailed() {
	if(!window.confirm("Отклонить акт?"))return;
	var docid=docums.ItemID;
	if(ReturnSpace(docid)==""){alert("Не выбран акт.");return;}
	var Descr = window.prompt("Укажите причину","");
	var ok=SetActStatFailed(docid,Descr)
	if(isNaN(ok)){alert(ok)}
	else{okfunc();}
}

function setActAccepted(){
	var docid=docums.ItemID;
	var ActNumber = page.fn.getRashNumb("Docs.Act");
	var ActSumma = page.fn.GetActSumma(docid);
	if(isNaN(ActSumma)){alert("Невозможно расчитать сумму акта.\n"+ActSumma);return;}
	var ActType = page.fn.GetActType(docid);
	if(isNaN(ActSumma)){alert("Невозможно расчитать тип акта.\n"+ActType);return;}
	var answer = window.confirm("Поставить акту статус \"Принят\"?\n"+
		"Будущий номер акта "+ActNumber + "\n" + 
		"Сумма акта " + ActSumma);
	if(!answer)return;
	if(ReturnSpace(docid)==""){alert("Не выбран акт.");return;}
	var ok= page.fn.SetActStatAccepted(docid,ActNumber,ActSumma,ActType);
	if(isNaN(ok)){alert(ok)}
	else{okfunc();}
}

function ShowReqsFromActFn() {
	window.showModalDialog("widetext.csp?docid="+docums.ItemID+"&class="+doctypes.ItemID+"&property=CheckResult","","center:yes;status:no;dialogHeight:300px;dialogWidth:400px;resizable:yes;");
}

//сформировать служебную записку
function MakeActNote()
{
	var newItem = "";
	//var newItem=window.showModalDialog("Dictionary.csp","Common.Kontragent","center:yes;status:no;dialogHeight:400px;dialogWidth:650px;resizable:yes;");
	//if(newItem==null)return;
	//var newItem=newItem.split("~")[0];
	var docids=escape(docums.ListViewGetItems('selected',1));
	var Comment = window.prompt("Введите комментарий к актам которые погасятся.","");
	var NoteId = page.fn.CreateActNote(docids,newItem,Comment);
	if(isNaN(NoteId)) {
		alert(NoteId);
	} else {
		alert("Акты погашены. Сформирована служебная записка.");
		okfunc();		
		//window.open('screen/actnote.csp?id='+NoteId+'&sessionid='+sessionid);
	}
}

//пришло бумажное подтверждение отчёта
function ProveOthet() {
	if(!window.confirm("Указать, что бумажный отчёт проверен?"))return;
	var ok = page.fn.SetParerProve(docItemID);
	if(isNaN(ok)){alert(ok)} else{okfunc()}
}

//сервис менеджер отвечает на негативный отзыв контрагента
function SetBrakAnswer() {
	var Answer = window.prompt("Укажите причину","");	
	if (Answer==null) return;
	var DocId = docums.ItemID;
	ok = page.fn.SetBrakAnswer(DocId,Answer);
	if (isNaN(ok)){alert(ok);}
	else{alert('Ответ на негативный отзыв сохранён');}
}

