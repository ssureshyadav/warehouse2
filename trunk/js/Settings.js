var settings={
	"Common.Dicts": { colModel: [ 
	{name: "Name", label: "Наименование"}
	, {name: "Comment", label: "Описание"}]
	}
	, "Common.Kontragent": { colModel: [ 
	{name: "Name", label: "Название"}
	, {name: "Activity", label: "Активность"}
	, {name: "Address", label: "Адрес фактический"}
	, {name: "AddressUr", label: "Адрес юридический"}
	, {name: "AdPhone", label: "Телефон указанный в рекламе"}
	, {name: "Agree", label: "№ договора"}
	, {name: "Balance", label: "Баланс"}
	, {name: "ChangeDate", label: "Дата последнего изменения"}
	, {name: "ChangeTime", label: "Время последнего изменения"}
	, {name: "ChangeUser->Name", label: "Человек внесший изменения"}
	, {name: "chief", label: "Директор"}
	, {name: "City", label: "Город (факт адрес)"}
	, {name: "CityCode", label: "Код города"}
	, {name: "CityUr", label: "Город (юр адрес)"}
	, {name: "Code", label: "Уникальный номер "}
	, {name: "Comment", label: "Комментарий"}
	, {name: "ContPers", label: "Контактные лица"}
	, {name: "Currency", label: "Валюта расчётов"}
	, {name: "Discount", label: "Скидка (%)"}
	, {name: "EMail", label: "e-mail"}
	, {name: "fax", label: "Факс"}
	, {name: "Federal->Name", label: "Федеральный округ"}
	, {name: "glavbuh", label: "Главный бухгалтер"}
	, {name: "Holding->Name", label: "Холдинг"}
	, {name: "IsWe", label: "Это юр лицо принадлежит нам"}
	, {name: "Koeff", label: "Работает (коэфф. 1-3)"}
	, {name: "Manager", label: "Менеджер"}
	, {name: "NDSPayment", label: "Оплата по договору (с НДС, Без НДС)"}
	, {name: "NotifyEmails", label: "Уведомлять о сообщении от этого клиента"}
	, {name: "OtgruzPrincip", label: "Принцип отгрузки запчастей"}
	, {name: "OurCompany->Name", label: "Наше юр. лицо с которым работает этот контрагент"}
	, {name: "Password", label: "Пароль"}
	, {name: "Phones", label: "Контактные телефоны"}
	, {name: "Postalcode", label: "Индекс (факт адрес)"}
	, {name: "PostalcodeUr", label: "Индекс (юр адрес)"}
	, {name: "Property126->Name", label: "Категория цен инструмент"}
	, {name: "Property127->Name", label: "Категория цен бытовка"}
	, {name: "Property2506", label: "Вид деятельности"}
	, {name: "Property831->Name", label: "Способ доставки"}
	, {name: "Pseudonym", label: "Псевдоним"}
	, {name: "region2->Name", label: "Регион"}
	, {name: "Status", label: "Статус"}
	, {name: "WCalc", label: "Как рассчитываемся"}
	, {name: "WCalc2", label: "Как рассчитываемся"}]}

, "Docs.Act": { colModel: [
	{name: "NameSorted", label: "Номер пригодный для сортировки"}
	, {name: "Name", label: "Номер"}
	, {name: "Serial", label: "Серийный номер"}
	, {name: "Paid", label: "Погашен"}
	, {name: "Comment", label: "Комментарий"}
	, {name: "Garant", label: "Гарантийный номер"}
	, {name: "ActDate", label: "Дата акта"}
	, {name: "CustomerName", label: "Потребитель"}
	, {name: "DefectDescription", label: "Неисправность"}
	, {name: "Kontr->Name", label: "Контрагент"}
	, {name: "NumbersHistory", label: "История изменений номеров"}
	, {name: "PaidDate", label: "Дата погашения"}
	, {name: "RepairsQnt", label: "Количество ремонтов"}
	, {name: "SellerName", label: "Продавец"}
	, {name: "Source->Name", label: "Родитель"}
	, {name: "SrvFIO", label: "Директор сервисного центра"}
	, {name: "SrvName", label: "Наименование сервисного центра"}
	, {name: "User1->Name", label: "Оператор"}]}
, "Docs.ActItems": { colModel: [
	{name: "Price", label: "Цена"}
	, {name: "Quantity", label: "Количество"}
	, {name: "Request->Name", label: "Заявка"}
	, {name: "Total", label: "Сумма"}]}
, "Docs.ActNote": { colModel: [
	{name: "Name", label: "Номер"}
	, {name: "Chief->Name", label: "Начальник"}
	, {name: "CloseDate", label: "Дата закрытия"}
	, {name: "CloseTime", label: "Время закрытия"}
	, {name: "CloseUser->Name", label: "Человек закрывший"}
	, {name: "Comment", label: "Комментарий"}
	, {name: "Dat", label: "Дата создания"}
	, {name: "Kontr->Name", label: "Контрагент"}
	, {name: "Manager", label: "Менеджер"}
	, {name: "PaymentPoluh->Name", label: "Получатель платежа"}
	, {name: "Source->Name", label: "Родитель"}
	, {name: "Stat", label: "Статус"}
	, {name: "Summa", label: "Сумма"}
	, {name: "Tim", label: "Время"}
	, {name: "User1->Name", label: "Оператор"}]}
, "Docs.ActNoteItems": { colModel: [
	{name: "Act->Name", label: "Акт"}
	, {name: "Price", label: "Цена"}
	, {name: "Quantity", label: "Количество"}
	, {name: "Total", label: "Сумма"}]}
, "Docs.Brakremont": { colModel: [
	{name: "Name", label: "Номер"}
	, {name: "CloseDate", label: "Дата закрытия"}
	, {name: "CloseTime", label: "Время закрытия"}
	, {name: "CloseUser->Name", label: "Человек закрывший"}
	, {name: "Comment", label: "Комментарий"}
	, {name: "Dat", label: "Дата создания"}
	, {name: "Kontr->Name", label: "Контрагент"}
	, {name: "Source->Name", label: "Родитель"}
	, {name: "Stat", label: "Статус"}
	, {name: "Summa", label: "Сумма"}
	, {name: "Tim", label: "Время"}
	, {name: "User1->Name", label: "Оператор"}]}
, "Docs.BrakremontItems": { colModel: [
	{name: "addr->Name", label: "Место"}
	, {name: "Price", label: "Цена"}
	, {name: "Quantity", label: "Количество"}
	, {name: "Total", label: "Сумма"}]}
, "Docs.Diff": { colModel: [
	{name: "Name", label: "Номер"}
	, {name: "CloseDate", label: "Дата закрытия"}
	, {name: "CloseTime", label: "Время закрытия"}
	, {name: "CloseUser->Name", label: "Человек закрывший"}
	, {name: "Comment", label: "Комментарий"}
	, {name: "Dat", label: "Дата создания"}
	, {name: "Kontr->Name", label: "Контрагент"}
	, {name: "Source->Name", label: "Родитель"}
	, {name: "Stat", label: "Статус"}
	, {name: "Summa", label: "Сумма"}
	, {name: "Tim", label: "Время"}
	, {name: "User1->Name", label: "Оператор"}]}
, "Docs.DiffItems": { colModel: [
	{name: "Kolfact", label: "Количество по документу"}
	, {name: "Price", label: "Цена"}
	, {name: "Quantity", label: "Количество"}
	, {name: "Total", label: "Сумма"}]}
, "Docs.DocBrak": { colModel: [
	{name: "Name", label: "Номер"}
	, {name: "CloseDate", label: "Дата закрытия"}
	, {name: "CloseTime", label: "Время закрытия"}
	, {name: "CloseUser->Name", label: "Человек закрывший"}
	, {name: "Comment", label: "Комментарий"}
	, {name: "Dat", label: "Дата создания"}
	, {name: "datend", label: "Дата завершения"}
	, {name: "datpriem", label: "Дата приема"}
	, {name: "Kontr->Name", label: "Контрагент"}
	, {name: "Source->Name", label: "Родитель"}
	, {name: "Stat", label: "Статус"}
	, {name: "Summa", label: "Сумма"}
	, {name: "Tim", label: "Время"}
	, {name: "User1->Name", label: "Оператор"}]}
, "Docs.DocBrakItems": { colModel: [
	{name: "PlanQuant", label: "Планируемое количество"}
	, {name: "Price", label: "Цена"}
	, {name: "Quantity", label: "Количество"}
	, {name: "result", label: "Результат"}
	, {name: "Total", label: "Сумма"}]}
, "Docs.Docs": { colModel: [
	{name: "Name", label: "Наименование"}
	, {name: "OperType", label: "Тип Операции"}]}
, "Docs.Inner": { colModel: [
	{name: "Name", label: "Номер"}
	, {name: "CloseDate", label: "Дата закрытия"}
	, {name: "CloseTime", label: "Время закрытия"}
	, {name: "CloseUser->Name", label: "Человек закрывший"}
	, {name: "Comment", label: "Комментарий"}
	, {name: "Dat", label: "Дата создания"}
	, {name: "Kontr->Name", label: "Контрагент"}
	, {name: "Source->Name", label: "Родитель"}
	, {name: "Stat", label: "Статус"}
	, {name: "Summa", label: "Сумма"}
	, {name: "Tim", label: "Время"}
	, {name: "User1->Name", label: "Оператор"}]}
, "Docs.InnerDiff": { colModel: [
	{name: "Name", label: "Номер"}
	, {name: "CloseDate", label: "Дата закрытия"}
	, {name: "CloseTime", label: "Время закрытия"}
	, {name: "CloseUser->Name", label: "Человек закрывший"}
	, {name: "Comment", label: "Комментарий"}
	, {name: "Dat", label: "Дата создания"}
	, {name: "Kontr->Name", label: "Контрагент"}
	, {name: "Source->Name", label: "Родитель"}
	, {name: "Stat", label: "Статус"}
	, {name: "storeman->Name", label: "Грузчик"}
	, {name: "Summa", label: "Сумма"}
	, {name: "Tim", label: "Время"}
	, {name: "User1->Name", label: "Оператор"}]}
, "Docs.InnerDiffItems": { colModel: [
	{name: "addr->Name", label: "Адрес"}
	, {name: "Price", label: "Цена"}
	, {name: "quantdefault", label: "Количество по накладной"}
	, {name: "Quantity", label: "Количество"}
	, {name: "quantreal", label: "Количество фактическое"}
	, {name: "Total", label: "Сумма"}]}
, "Docs.InnerItems": { colModel: [
	{name: "addr->Name", label: "Место назначения"}
	, {name: "addr2->Name", label: "Текущее место "}
	, {name: "Price", label: "Цена"}
	, {name: "Quantity", label: "Количество"}
	, {name: "Total", label: "Сумма"}]}
, "Docs.Invent": { colModel: [
	{name: "Name", label: "Номер"}
	, {name: "Address->Name", label: "Блокировка адреса"}
	, {name: "CloseDate", label: "Дата закрытия"}
	, {name: "CloseTime", label: "Время закрытия"}
	, {name: "CloseUser->Name", label: "Человек закрывший"}
	, {name: "Comment", label: "Комментарий"}
	, {name: "Dat", label: "Дата создания"}
	, {name: "FullName", label: "Блокировка адреса"}
	, {name: "Kontr->Name", label: "Контрагент"}
	, {name: "Source->Name", label: "Родитель"}
	, {name: "Stat", label: "Статус"}
	, {name: "Summa", label: "Сумма"}
	, {name: "Tim", label: "Время"}
	, {name: "User1->Name", label: "Оператор"}]}
, "Docs.InventItems": { colModel: [
	{name: "addr", label: "Ячейка"}]}
, "Docs.Otchet": { colModel: [
	{name: "NameSorted", label: "Номер пригодный для сортировки"}
	, {name: "Name", label: "Номер"}
	, {name: "Dat", label: "Дата создания"}
	, {name: "Summa", label: "Сумма"}
	, {name: "Stat", label: "Статус"}
	, {name: "ErrorDescription", label: "Ответ контрагенту"}
	, {name: "GotPaperProve", label: "Бумажный отчёт проверен"}
	, {name: "CloseDate", label: "Дата закрытия"}
	, {name: "CloseTime", label: "Время закрытия"}
	, {name: "CloseUser->Name", label: "Человек закрывший"}
	, {name: "Comment", label: "Комментарий"}
	, {name: "DatePaperProve", label: "Дата проверки бумажного отчёта"}
	, {name: "Errors", label: "Ошибки отчёта"}
	, {name: "Kontr->Name", label: "Контрагент"}
	, {name: "Kurs", label: "Курс валюты"}
	, {name: "Rem->Name", label: "Заявка"}
	, {name: "Source->Name", label: "Родитель"}
	, {name: "SummaCurrency", label: "Сумма в валюте"}
	, {name: "Tim", label: "Время"}
	, {name: "User1->Name", label: "Оператор"}
	, {name: "UserPaperProve->Name", label: "Оператор проверивший бумажный отчёт"}]}
, "Docs.OtchetItems": { colModel: [
	{name: "ActNumber", label: "Номер акта"}
	, {name: "Comment", label: "Примечание"}
	, {name: "Currency", label: "Валюта в которой считали"}
	, {name: "Dat", label: "Дата"}
	, {name: "garant", label: "Гарантийный талон"}
	, {name: "goodssource", label: "Источник товара"}
	, {name: "Price", label: "Цена"}
	, {name: "Quantity", label: "Количество"}
	, {name: "remcost", label: "Стоимость ремонта"}
	, {name: "RemTovar->Name", label: "Ремонтируемый товар"}
	, {name: "RemType", label: "Тип ремонта"}
	, {name: "serial", label: "Серийный номер"}
	, {name: "StringType", label: "Тип строки"}
	, {name: "SummaRub", label: "Рублёвая стоимость"}
	, {name: "talon", label: "Отрывной талон"}
	, {name: "Total", label: "Сумма"}]}
, "Docs.OtchetNote": { colModel: [
	{name: "Name", label: "Номер"}
	, {name: "CloseDate", label: "Дата закрытия"}
	, {name: "CloseTime", label: "Время закрытия"}
	, {name: "CloseUser->Name", label: "Человек закрывший"}
	, {name: "Comment", label: "Комментарий"}
	, {name: "Dat", label: "Дата создания"}
	, {name: "Kontr->Name", label: "Контрагент"}
	, {name: "Manager", label: "Менеджер"}
	, {name: "Otchet->Name", label: "Отчёт"}
	, {name: "OurCompany->Name", label: "Наше юр лицо"}
	, {name: "Source->Name", label: "Родитель"}
	, {name: "Stat", label: "Статус"}
	, {name: "Summa", label: "Сумма"}
	, {name: "Tim", label: "Время"}
	, {name: "User1->Name", label: "Оператор"}]}
, "Docs.OtchetNoteItems": { colModel: [
	{name: "Brand->Name", label: "Бренд"}
	, {name: "Period", label: "Период"}
	, {name: "Price", label: "Цена"}
	, {name: "Quantity", label: "Количество"}
	, {name: "Total", label: "Сумма"}]}
, "Docs.Platejka": { colModel: [
	{name: "Name", label: "Номер"}
	, {name: "CloseDate", label: "Дата закрытия"}
	, {name: "CloseTime", label: "Время закрытия"}
	, {name: "CloseUser->Name", label: "Человек закрывший"}
	, {name: "Comment", label: "Комментарий"}
	, {name: "Dat", label: "Дата создания"}
	, {name: "Kontr->Name", label: "Контрагент"}
	, {name: "Kurs", label: "Курс"}
	, {name: "MastermaxSummCurr", label: "Сумма Mastermax в валюте"}
	, {name: "MastermaxSummRub", label: "Сумма Mastermax в рублях"}
	, {name: "PlatejDate", label: "Дата платёжного поручения"}
	, {name: "Poluh->Name", label: "Получатель"}
	, {name: "RubSumma", label: "Рублёвая сумма"}
	, {name: "Source->Name", label: "Родитель"}
	, {name: "Stat", label: "Статус"}
	, {name: "Summa", label: "Сумма"}
	, {name: "Tim", label: "Время"}
	, {name: "TullSummCurr", label: "Сумма Tull в валюте"}
	, {name: "TullSummRub", label: "Сумма Tull в рублях"}
	, {name: "Typeplatej->Name", label: "Тип платежа"}
	, {name: "User1->Name", label: "Оператор"}
	, {name: "ViconteSummCurr", label: "Сумма Viconte в валюте"}
	, {name: "ViconteSummRub", label: "Сумма Viconte в рублях"}]}
, "Docs.PlatejkaItems": { colModel: [
	{name: "Rash->Name", label: "Отгрузка"}
	, {name: "Summa", label: "Cумма"}]}
, "Docs.Prih": { colModel: [
	{name: "Name", label: "Номер"}
	, {name: "CloseDate", label: "Дата закрытия"}
	, {name: "CloseTime", label: "Время закрытия"}
	, {name: "CloseUser->Name", label: "Человек закрывший"}
	, {name: "Comment", label: "Комментарий"}
	, {name: "Dat", label: "Дата создания"}
	, {name: "Kontr->Name", label: "Контрагент"}
	, {name: "Source->Name", label: "Родитель"}
	, {name: "Stat", label: "Статус"}
	, {name: "Summa", label: "Сумма"}
	, {name: "Tim", label: "Время"}
	, {name: "User1->Name", label: "Оператор"}]}
, "Docs.PrihItems": { colModel: [
	{name: "Kolfact", label: "Количество по документу"}
	, {name: "Price", label: "Цена"}
	, {name: "Quantity", label: "Количество"}
	, {name: "Total", label: "Сумма"}]}
, "Docs.Rash": { colModel: [
	{name: "Name", label: "Номер"}
	, {name: "CloseDate", label: "Дата закрытия"}
	, {name: "CloseTime", label: "Время закрытия"}
	, {name: "CloseUser->Name", label: "Человек закрывший"}
	, {name: "Comment", label: "Комментарий"}
	, {name: "Dat", label: "Дата создания"}
	, {name: "Kontr->Name", label: "Контрагент"}
	, {name: "kurs", label: "Курс"}
	, {name: "opl->Name", label: "Оплата"}
	, {name: "OplatStatus", label: "Статус оплаты"}
	, {name: "OplSumma", label: "Оплаченная сумма"}
	, {name: "Platej->Name", label: "Платёжный документ"}
	, {name: "RubSumma", label: "Рублёвая сумма"}
	, {name: "Source->Name", label: "Родитель"}
	, {name: "Stat", label: "Статус"}
	, {name: "Summa", label: "Сумма"}
	, {name: "Tim", label: "Время"}
	, {name: "User1->Name", label: "Оператор"}]}
, "Docs.RashItems": { colModel: [
	{name: "Price", label: "Цена"}
	, {name: "Quantity", label: "Количество"}
	, {name: "Total", label: "Сумма"}
	, {name: "Zakaz", label: "Заказ"}
	, {name: "ZakazDat", label: "Дата замены"}
	, {name: "ZakazTim", label: "Время замены"}
	, {name: "ZakazUser1->Name", label: "Оператор"}]}
, "Docs.Remont": { colModel: [
	{name: "Name", label: "Номер"}
	, {name: "CloseDate", label: "Дата закрытия"}
	, {name: "CloseTime", label: "Время закрытия"}
	, {name: "CloseUser->Name", label: "Человек закрывший"}
	, {name: "Comment", label: "Комментарий"}
	, {name: "Dat", label: "Дата создания"}
	, {name: "Kontr->Name", label: "Контрагент"}
	, {name: "Oplacheno", label: "Оплачено"}
	, {name: "Otchet->Name", label: "Отчёт"}
	, {name: "Source->Name", label: "Родитель"}
	, {name: "Stat", label: "Статус"}
	, {name: "Summa", label: "Сумма"}
	, {name: "Tim", label: "Время"}
	, {name: "User1->Name", label: "Оператор"}]}
, "Docs.RemontItems": { colModel: [
	{name: "Name", label: "Описание поломки"}
	, {name: "garant", label: "№ Гарантийного талона"}
	, {name: "Price", label: "Цена"}
	, {name: "Quantity", label: "Количество"}
	, {name: "seller", label: "Организация продавшая товар"}
	, {name: "serial", label: "Серийный номер"}
	, {name: "Total", label: "Сумма"}]}
, "Docs.StorageIn": { colModel: [
	{name: "Name", label: "Номер"}
	, {name: "CloseDate", label: "Дата закрытия"}
	, {name: "CloseTime", label: "Время закрытия"}
	, {name: "CloseUser->Name", label: "Человек закрывший"}
	, {name: "Comment", label: "Комментарий"}
	, {name: "Dat", label: "Дата создания"}
	, {name: "Kontr->Name", label: "Контрагент"}
	, {name: "PrihodType", label: "Тип приёма"}
	, {name: "Source->Name", label: "Родитель"}
	, {name: "Stat", label: "Статус"}
	, {name: "storeman->Name", label: "Грузчик"}
	, {name: "Summa", label: "Сумма"}
	, {name: "Tim", label: "Время"}
	, {name: "User1->Name", label: "Оператор"}]}
, "Docs.StorageInItems": { colModel: [
	{name: "addr->Name", label: "Адрес"}
	, {name: "Price", label: "Цена"}
	, {name: "quantdefault", label: "Количество по накладной"}
	, {name: "Quantity", label: "Количество"}
	, {name: "quantreal", label: "Количество фактическое"}
	, {name: "Total", label: "Сумма"}]}
, "Docs.StorageOut": { colModel: [
	{name: "Name", label: "Номер"}
	, {name: "Brak", label: ""}
	, {name: "CloseDate", label: "Дата закрытия"}
	, {name: "CloseTime", label: "Время закрытия"}
	, {name: "CloseUser->Name", label: "Человек закрывший"}
	, {name: "Comment", label: "Комментарий"}
	, {name: "Dat", label: "Дата создания"}
	, {name: "Images", label: ""}
	, {name: "Kontr->Name", label: "Контрагент"}
	, {name: "Source->Name", label: "Родитель"}
	, {name: "Stat", label: "Статус"}
	, {name: "storeman->Name", label: "Грузчик"}
	, {name: "Summa", label: "Сумма"}
	, {name: "Tim", label: "Время"}
	, {name: "User1->Name", label: "Оператор"}]}
, "Docs.StorageOutItems": { colModel: [
	{name: "addr->Name", label: "Адрес"}
	, {name: "comment", label: "Гарантийный талон"}
	, {name: "garant", label: "Гарантийный талон"}
	, {name: "Price", label: "Цена"}
	, {name: "quantdefault", label: "Количество по накладной"}
	, {name: "Quantity", label: "Количество"}
	, {name: "quantreal", label: "Количество фактическое"}
	, {name: "serial", label: "Гарантийный талон"}
	, {name: "Total", label: "Сумма"}]}
, "Docs.Super": { colModel: [
	{name: "Kontr", label: "Контрагент"}]}
, "Docs.Utiliz": { colModel: [
	{name: "Name", label: "Номер"}
	, {name: "CloseDate", label: "Дата закрытия"}
	, {name: "CloseTime", label: "Время закрытия"}
	, {name: "CloseUser->Name", label: "Человек закрывший"}
	, {name: "Comment", label: "Комментарий"}
	, {name: "Dat", label: "Дата создания"}
	, {name: "Komissia", label: "Комиссия"}
	, {name: "Kontr->Name", label: "Контрагент"}
	, {name: "Source->Name", label: "Родитель"}
	, {name: "SourceTbl", label: "Откуда утилизировать"}
	, {name: "Stat", label: "Статус"}
	, {name: "Summa", label: "Сумма"}
	, {name: "Tim", label: "Время"}
	, {name: "User1->Name", label: "Оператор"}]}
, "Docs.UtilizItems": { colModel: [
	{name: "addr->Name", label: "Место"}
	, {name: "Client->Name", label: "Клиент"}
	, {name: "garant", label: "Гарантийный талон"}
	, {name: "goodsdir", label: "Действие с товаром"}
	, {name: "Price", label: "Цена"}
	, {name: "Quantity", label: "Количество"}
	, {name: "sn", label: "Серийный номер изделия"}
	, {name: "SourceTbl", label: "Откуда утилизировать"}
	, {name: "spravka", label: "№ и дата выписки Справки"}
	, {name: "Total", label: "Сумма"}]}
, "Docs.waste": { colModel: [
	{name: "meas", label: "Единица"}]}, "Goods.Goods": { colModel: [
	{name: "Name", label: "Наименование"}
	, {name: "Property5300", label: "Номер по схеме"}
	, {name: "Property312", label: "Количество в упаковке"}
	, {name: "abbr", label: "Аббревиатура модели"}
	, {name: "AllowAct", label: "Разрешать выписывать акт без заявки"}
	, {name: "codedetail", label: "Код детали"}
	, {name: "CodeOKVED", label: "Код ТНВЭД"}
	, {name: "Comment", label: "Комментарий"}
	, {name: "Composition", label: "Состав запчасти"}
	, {name: "Description", label: "Подробное описание"}
	, {name: "EnglishName", label: "Английское наименование"}
	, {name: "FullName", label: "Полное наименование"}
	, {name: "MaterialEng", label: "Материал (англ.)"}
	, {name: "ModelNumber", label: "Модель и номер"}
	, {name: "Price", label: "Цена"}
	, {name: "Property3609", label: "Модель"}
	, {name: "Property675", label: "Ед. Изм."}
	, {name: "Property7053", label: "Изделие"}
	, {name: "Property9469", label: "Категория"}
	, {name: "Size1", label: "Объём"}
	, {name: "Weight", label: "Вес"}]}, "Kontragent.SendMailLog": { colModel: [
	{name: "Attach", label: "Файл"}
	, {name: "Cc", label: "Копия"}
	, {name: "Comment", label: "Комментарий"}
	, {name: "Dat", label: "Дата"}
	, {name: "MessageTo", label: "Кому"}
	, {name: "Result", label: "Результат"}
	, {name: "Tim", label: "Время"}]}, "Operation.Instructions": { colModel: [
	{name: "Name", label: "Краткое описание"}
	, {name: "CloseDate", label: "Дата закрытия"}
	, {name: "CloseTime", label: "Время закрытия"}
	, {name: "CloseUser->Name", label: "Человек закрывший"}
	, {name: "Comment", label: "Комментарий"}
	, {name: "Depot1->Name", label: "Склад"}
	, {name: "dostavka->Name", label: "Способ доставки"}
	, {name: "HasBeenSent", label: "Инструкция отправлена"}
	, {name: "InstDate", label: "Дата"}
	, {name: "Kontr->Name", label: "Контрагент"}
	, {name: "Oper->Name", label: "Шаблон операции"}
	, {name: "RefuseReason", label: "Причина отклонения заявки"}
	, {name: "Source->Name", label: "Родитель"}
	, {name: "State", label: "Состояние"}
	, {name: "User1->Name", label: "Оператор"}]}, "Operation.InstructionsItems": { colModel: [
	{name: "addr->Name", label: "Ячейка"}
	, {name: "addr2->Name", label: "Место назначения"}
	, {name: "BrakComment", label: "Комментарий клиента"}
	, {name: "Client->Name", label: "Клиент"}
	, {name: "garant", label: "Гарантийный талон"}
	, {name: "goodsdir", label: "Действие с товаром"}
	, {name: "opispolomki", label: "Описание поломки"}
	, {name: "Price", label: "Цена"}
	, {name: "Quantity", label: "Количество"}
	, {name: "quantplan", label: "Количество по плану"}
	, {name: "SellDate", label: "Комментарий клиента"}
	, {name: "seller", label: "Организация продавшая товар"}
	, {name: "sn", label: "Серийный номер изделия"}
	, {name: "spravka", label: "№ и дата выписки Справки"}
	, {name: "Total", label: "Сумма"}]}, "Operation.Plan": { colModel: [
	{name: "Name", label: "Номер"}
	, {name: "CloseDate", label: "Дата закрытия"}
	, {name: "CloseTime", label: "Время закрытия"}
	, {name: "CloseUser->Name", label: "Человек закрывший"}
	, {name: "Dat", label: "Дата создания"}
	, {name: "DocLanguage", label: "Язык"}
	, {name: "Kontr->Name", label: "Контрагент"}
	, {name: "PlanDate", label: "Начальная дата"}
	, {name: "PlanDate2", label: "Конечная дата"}
	, {name: "Source->Name", label: "Родитель"}
	, {name: "Stat", label: "Статус"}
	, {name: "Summa", label: "Сумма"}
	, {name: "Tim", label: "Время"}
	, {name: "User1->Name", label: "Оператор"}]}, "Operation.PlanItems": { colModel: [
	{name: "Price", label: "Цена"}
	, {name: "Quantity", label: "Количество"}
	, {name: "Total", label: "Сумма"}]} 
}
