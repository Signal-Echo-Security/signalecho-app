import type { Locale } from "@signalecho/contracts";

export type PrototypeMessages = Record<"prototype" | "check" | "example" | "reveal" | "advice" | "simulated" | "sample", string>;
export const prototypeCatalogs = {
  "en-GB": {
    "prototype": "Prototype · data stays on this page",
    "check": "Check a message",
    "example": "Example message",
    "reveal": "See the example check",
    "advice": "An unexpected fee is a reason to verify the delivery with the carrier before paying.",
    "simulated": "Example received for review. Nothing was sent.",
    "sample": "Example of a reviewed alert"
  },
  "en-US": {
    "prototype": "Prototype · data stays on this page",
    "check": "Check a message",
    "example": "Example message",
    "reveal": "See the example check",
    "advice": "An unexpected fee is a reason to verify the delivery with the carrier before paying.",
    "simulated": "Example received for review. Nothing was sent.",
    "sample": "Example of a reviewed alert"
  },
  "es-ES": {
    "prototype": "Prototipo · los datos se quedan en esta página",
    "check": "Comprueba un mensaje",
    "example": "Mensaje de ejemplo",
    "reveal": "Ver la comprobación de ejemplo",
    "advice": "Si te piden un pago inesperado, comprueba la entrega con la empresa de transporte antes de pagar.",
    "simulated": "Ejemplo recibido para revisión. No se ha enviado nada.",
    "sample": "Ejemplo de alerta revisada"
  },
  "ca-ES": {
    "prototype": "Prototip · les dades es queden en aquesta pàgina",
    "check": "Comprova un missatge",
    "example": "Missatge d’exemple",
    "reveal": "Veure la comprovació d’exemple",
    "advice": "Si et demanen un pagament inesperat, comprova el lliurament amb l’empresa de transport abans de pagar.",
    "simulated": "Exemple rebut per revisar. No s’ha enviat res.",
    "sample": "Exemple d’alerta revisada"
  },
  "pt-PT": {
    "prototype": "Protótipo · os dados ficam nesta página",
    "check": "Verifique uma mensagem",
    "example": "Mensagem de exemplo",
    "reveal": "Ver a análise de exemplo",
    "advice": "Se lhe pedirem um pagamento inesperado, confirme a entrega com a transportadora antes de pagar.",
    "simulated": "Exemplo recebido para revisão. Nada foi enviado.",
    "sample": "Exemplo de alerta revisto"
  },
  "pt-BR": {
    "prototype": "Protótipo · os dados ficam nesta página",
    "check": "Verifique uma mensagem",
    "example": "Mensagem de exemplo",
    "reveal": "Ver a análise de exemplo",
    "advice": "Se pedirem um pagamento inesperado, confirme a entrega com a transportadora antes de pagar.",
    "simulated": "Exemplo recebido para revisão. Nada foi enviado.",
    "sample": "Exemplo de alerta revisado"
  },
  "it-IT": {
    "prototype": "Prototipo · i dati restano in questa pagina",
    "check": "Controlla un messaggio",
    "example": "Messaggio di esempio",
    "reveal": "Vedi il controllo di esempio",
    "advice": "Se ti chiedono un pagamento inatteso, verifica la consegna con il corriere prima di pagare.",
    "simulated": "Esempio ricevuto per la revisione. Nessun dato inviato.",
    "sample": "Esempio di avviso esaminato"
  },
  "ru-RU": {
    "prototype": "Прототип · данные остаются на этой странице",
    "check": "Проверьте сообщение",
    "example": "Пример сообщения",
    "reveal": "Посмотреть пример проверки",
    "advice": "Если у вас неожиданно просят оплату, проверьте доставку у перевозчика, прежде чем платить.",
    "simulated": "Пример принят на проверку. Ничего не отправлено.",
    "sample": "Пример проверенного предупреждения"
  },
  "de-DE": {
    "prototype": "Prototyp · Daten bleiben auf dieser Seite",
    "check": "Nachricht prüfen",
    "example": "Beispielnachricht",
    "reveal": "Beispielprüfung ansehen",
    "advice": "Bei einer unerwarteten Zahlungsaufforderung prüfen Sie die Lieferung beim Zustelldienst, bevor Sie bezahlen.",
    "simulated": "Beispiel zur Prüfung erhalten. Es wurde nichts gesendet.",
    "sample": "Beispiel einer geprüften Warnung"
  },
  "fr-FR": {
    "prototype": "Prototype · les données restent sur cette page",
    "check": "Vérifiez un message",
    "example": "Exemple de message",
    "reveal": "Voir l’exemple de vérification",
    "advice": "Si on vous demande un paiement inattendu, vérifiez la livraison auprès du transporteur avant de payer.",
    "simulated": "Exemple reçu pour examen. Rien n’a été envoyé.",
    "sample": "Exemple d’alerte vérifiée"
  },
  "uk-UA": {
    "prototype": "Прототип · дані залишаються на цій сторінці",
    "check": "Перевірте повідомлення",
    "example": "Приклад повідомлення",
    "reveal": "Переглянути приклад перевірки",
    "advice": "Якщо у вас раптово просять оплату, перевірте доставку в перевізника, перш ніж платити.",
    "simulated": "Приклад отримано на перевірку. Нічого не надіслано.",
    "sample": "Приклад перевіреного попередження"
  },
  "et-EE": {
    "prototype": "Prototüüp · andmed jäävad sellele lehele",
    "check": "Kontrolli sõnumit",
    "example": "Näidissõnum",
    "reveal": "Vaata kontrolli näidet",
    "advice": "Kui küsitakse ootamatut tasu, kontrolli saadetist enne maksmist vedaja juures.",
    "simulated": "Näide on ülevaatamiseks vastu võetud. Midagi ei saadetud.",
    "sample": "Ülevaadatud hoiatuse näide"
  },
  "pl-PL": {
    "prototype": "Prototyp · dane pozostają na tej stronie",
    "check": "Sprawdź wiadomość",
    "example": "Przykładowa wiadomość",
    "reveal": "Zobacz przykładowe sprawdzenie",
    "advice": "Jeśli ktoś żąda niespodziewanej opłaty, sprawdź dostawę u przewoźnika przed zapłatą.",
    "simulated": "Przykład przyjęty do sprawdzenia. Niczego nie wysłano.",
    "sample": "Przykład sprawdzonego ostrzeżenia"
  },
  "bg-BG": {
    "prototype": "Прототип · данните остават на тази страница",
    "check": "Проверете съобщение",
    "example": "Примерно съобщение",
    "reveal": "Вижте примерната проверка",
    "advice": "Ако поискат неочаквано плащане, проверете доставката при превозвача, преди да платите.",
    "simulated": "Примерът е получен за преглед. Нищо не е изпратено.",
    "sample": "Пример за прегледано предупреждение"
  },
  "zh-Hans": {
    "prototype": "原型 · 数据只保留在本页",
    "check": "检查消息",
    "example": "示例消息",
    "reveal": "查看检查示例",
    "advice": "如果有人要求支付意外费用，请先向承运商核实配送情况，再付款。",
    "simulated": "示例已进入演示审核流程。没有发送任何数据。",
    "sample": "已审核警示示例"
  },
  "hi-IN": {
    "prototype": "प्रोटोटाइप · डेटा इसी पेज पर रहता है",
    "check": "संदेश की जाँच करें",
    "example": "उदाहरण संदेश",
    "reveal": "जाँच का उदाहरण देखें",
    "advice": "अचानक शुल्क माँगा जाए तो भुगतान से पहले डिलीवरी कंपनी से पुष्टि करें।",
    "simulated": "उदाहरण समीक्षा के लिए लिया गया। कोई जानकारी नहीं भेजी गई।",
    "sample": "समीक्षित चेतावनी का उदाहरण"
  },
  "ja-JP": {
    "prototype": "プロトタイプ · データはこのページ内に留まります",
    "check": "メッセージを確認",
    "example": "メッセージの例",
    "reveal": "確認結果の例を見る",
    "advice": "予想外の料金を請求されたら、支払う前に配送会社へ確認してください。",
    "simulated": "レビューの例を受け付けました。データは送信されていません。",
    "sample": "確認済み警告の例"
  },
  "he-IL": {
    "prototype": "אב טיפוס · הנתונים נשארים בדף הזה",
    "check": "בדיקת הודעה",
    "example": "הודעה לדוגמה",
    "reveal": "להצגת בדיקה לדוגמה",
    "advice": "אם נדרש תשלום לא צפוי, כדאי לבדוק את המשלוח מול חברת השילוח לפני התשלום.",
    "simulated": "הדוגמה התקבלה לבדיקה. דבר לא נשלח.",
    "sample": "דוגמה לאזהרה שנבדקה"
  },
  "ur-PK": {
    "prototype": "نمونہ · ڈیٹا اسی صفحے پر رہتا ہے",
    "check": "پیغام چیک کریں",
    "example": "نمونہ پیغام",
    "reveal": "جانچ کی مثال دیکھیں",
    "advice": "اگر غیر متوقع فیس مانگی جائے تو ادائیگی سے پہلے ڈیلیوری کمپنی سے تصدیق کریں۔",
    "simulated": "نمونہ جائزے کے لیے موصول ہوا۔ کچھ بھی نہیں بھیجا گیا۔",
    "sample": "جائزہ شدہ تنبیہ کی مثال"
  },
  "af-ZA": {
    "prototype": "Prototipe · data bly op hierdie blad",
    "check": "Gaan ’n boodskap na",
    "example": "Voorbeeldboodskap",
    "reveal": "Sien die voorbeeld van ’n kontrole",
    "advice": "As iemand ’n onverwagte fooi vra, bevestig die aflewering by die vervoerder voordat jy betaal.",
    "simulated": "Voorbeeld vir hersiening ontvang. Niks is gestuur nie.",
    "sample": "Voorbeeld van ’n nagegane waarskuwing"
  },
  "ar": {
    "prototype": "نموذج أولي · تبقى البيانات في هذه الصفحة",
    "check": "تحقق من رسالة",
    "example": "رسالة نموذجية",
    "reveal": "اطّلع على نموذج التحقق",
    "advice": "إذا طُلب منك دفع رسوم غير متوقعة، فتأكد من الشحنة لدى شركة التوصيل قبل الدفع.",
    "simulated": "تم استلام المثال للمراجعة. لم يُرسل شيء.",
    "sample": "مثال لتنبيه تمت مراجعته"
  },
  "ko-KR": {
    "prototype": "프로토타입 · 데이터는 이 페이지 안에만 남습니다",
    "check": "메시지 확인",
    "example": "예시 메시지",
    "reveal": "확인 결과 예시 보기",
    "advice": "예상치 못한 요금을 요청받으면 결제하기 전에 배송업체에 확인하세요.",
    "simulated": "검토용 예시를 받았습니다. 전송된 데이터는 없습니다.",
    "sample": "검토된 경고 예시"
  },
  "tr-TR": {
    "prototype": "Prototip · veriler bu sayfada kalır",
    "check": "Bir mesajı kontrol edin",
    "example": "Örnek mesaj",
    "reveal": "Örnek kontrolü görün",
    "advice": "Beklenmedik bir ödeme istenirse ödeme yapmadan önce teslimatı kargo şirketinden doğrulayın.",
    "simulated": "Örnek inceleme için alındı. Hiçbir şey gönderilmedi.",
    "sample": "İncelenmiş uyarı örneği"
  },
  "id-ID": {
    "prototype": "Prototipe · data tetap di halaman ini",
    "check": "Periksa pesan",
    "example": "Contoh pesan",
    "reveal": "Lihat contoh pemeriksaan",
    "advice": "Jika diminta membayar biaya tak terduga, konfirmasikan pengiriman kepada kurir sebelum membayar.",
    "simulated": "Contoh diterima untuk ditinjau. Tidak ada yang dikirim.",
    "sample": "Contoh peringatan yang ditinjau"
  },
  "vi-VN": {
    "prototype": "Bản thử nghiệm · dữ liệu ở lại trên trang này",
    "check": "Kiểm tra tin nhắn",
    "example": "Tin nhắn mẫu",
    "reveal": "Xem ví dụ kiểm tra",
    "advice": "Nếu có yêu cầu thanh toán bất ngờ, hãy xác minh với đơn vị vận chuyển trước khi trả tiền.",
    "simulated": "Ví dụ đã được nhận để xem xét. Không có dữ liệu nào được gửi.",
    "sample": "Ví dụ cảnh báo đã được xem xét"
  }
} satisfies Record<Locale, PrototypeMessages>;

// This synthetic message is shown as a Spanish example in every locale.
export const spanishExample = "No pudimos entregar tu paquete. Paga una tasa para reprogramar la entrega.";
