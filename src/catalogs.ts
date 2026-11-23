import type { Locale } from "@signalecho/contracts";

type Catalog = Record<"language" | "headline" | "bank" | "delivery" | "guidance", string>;

export const catalogs = {
  "en-GB": {
    "language": "Language",
    "headline": "Spot online scams",
    "bank": "Fake bank notices",
    "delivery": "Fake delivery messages",
    "guidance": "Official guidance for Spain"
  },
  "en-US": {
    "language": "Language",
    "headline": "Spot online scams",
    "bank": "Fake bank notices",
    "delivery": "Fake delivery messages",
    "guidance": "Official guidance for Spain"
  },
  "es-ES": {
    "language": "Idioma",
    "headline": "Detecta estafas en internet",
    "bank": "Falsos avisos bancarios",
    "delivery": "Falsos mensajes de entrega",
    "guidance": "Orientación oficial en España"
  },
  "ca-ES": {
    "language": "Idioma",
    "headline": "Detecta estafes a internet",
    "bank": "Avisos bancaris falsos",
    "delivery": "Missatges de lliurament falsos",
    "guidance": "Orientació oficial a Espanya"
  },
  "pt-PT": {
    "language": "Idioma",
    "headline": "Identifica burlas online",
    "bank": "Falsos avisos bancários",
    "delivery": "Falsas mensagens de entrega",
    "guidance": "Orientações oficiais em Espanha"
  },
  "pt-BR": {
    "language": "Idioma",
    "headline": "Identifique golpes online",
    "bank": "Avisos bancários falsos",
    "delivery": "Mensagens falsas de entrega",
    "guidance": "Orientações oficiais na Espanha"
  },
  "it-IT": {
    "language": "Lingua",
    "headline": "Riconosci le truffe online",
    "bank": "Falsi avvisi bancari",
    "delivery": "Falsi messaggi di consegna",
    "guidance": "Indicazioni ufficiali per la Spagna"
  },
  "ru-RU": {
    "language": "Язык",
    "headline": "Распознавайте интернет-мошенничество",
    "bank": "Поддельные банковские уведомления",
    "delivery": "Поддельные сообщения о доставке",
    "guidance": "Официальные рекомендации для Испании"
  },
  "de-DE": {
    "language": "Sprache",
    "headline": "Online-Betrug erkennen",
    "bank": "Gefälschte Bankmitteilungen",
    "delivery": "Gefälschte Zustellnachrichten",
    "guidance": "Offizielle Hinweise für Spanien"
  },
  "fr-FR": {
    "language": "Langue",
    "headline": "Repérez les arnaques en ligne",
    "bank": "Fausses alertes bancaires",
    "delivery": "Faux messages de livraison",
    "guidance": "Conseils officiels en Espagne"
  },
  "uk-UA": {
    "language": "Мова",
    "headline": "Розпізнавайте онлайн-шахрайство",
    "bank": "Підроблені банківські сповіщення",
    "delivery": "Підроблені повідомлення про доставку",
    "guidance": "Офіційні поради для Іспанії"
  },
  "et-EE": {
    "language": "Keel",
    "headline": "Tunne ära veebipettused",
    "bank": "Võltsitud pangateated",
    "delivery": "Võltsitud tarneteated",
    "guidance": "Ametlikud juhised Hispaanias"
  },
  "pl-PL": {
    "language": "Język",
    "headline": "Rozpoznawaj oszustwa w internecie",
    "bank": "Fałszywe powiadomienia bankowe",
    "delivery": "Fałszywe wiadomości o dostawie",
    "guidance": "Oficjalne wskazówki w Hiszpanii"
  },
  "bg-BG": {
    "language": "Език",
    "headline": "Разпознавайте онлайн измамите",
    "bank": "Фалшиви банкови известия",
    "delivery": "Фалшиви съобщения за доставка",
    "guidance": "Официални насоки за Испания"
  },
  "zh-Hans": {
    "language": "语言",
    "headline": "识别网络诈骗",
    "bank": "虚假银行通知",
    "delivery": "虚假快递消息",
    "guidance": "西班牙官方指南"
  },
  "hi-IN": {
    "language": "भाषा",
    "headline": "ऑनलाइन धोखाधड़ी की पहचान करें",
    "bank": "नकली बैंक सूचनाएँ",
    "delivery": "डिलीवरी के नकली संदेश",
    "guidance": "स्पेन के लिए आधिकारिक मार्गदर्शन"
  },
  "ja-JP": {
    "language": "言語",
    "headline": "オンライン詐欺を見分ける",
    "bank": "偽の銀行通知",
    "delivery": "偽の配達メッセージ",
    "guidance": "スペインの公的ガイド"
  },
  "he-IL": {
    "language": "שפה",
    "headline": "זהו הונאות מקוונות",
    "bank": "התראות בנק מזויפות",
    "delivery": "הודעות משלוח מזויפות",
    "guidance": "הנחיות רשמיות בספרד"
  },
  "ur-PK": {
    "language": "زبان",
    "headline": "آن لائن دھوکا دہی پہچانیں",
    "bank": "جعلی بینک اطلاعات",
    "delivery": "ڈیلیوری کے جعلی پیغامات",
    "guidance": "اسپین میں سرکاری رہنمائی"
  },
  "af-ZA": {
    "language": "Taal",
    "headline": "Herken aanlyn swendelary",
    "bank": "Vervalste bankkennisgewings",
    "delivery": "Vervalste afleweringsboodskappe",
    "guidance": "Amptelike riglyne vir Spanje"
  },
  "ar": {
    "language": "اللغة",
    "headline": "تعرّف على الاحتيال عبر الإنترنت",
    "bank": "إشعارات مصرفية مزيفة",
    "delivery": "رسائل توصيل مزيفة",
    "guidance": "إرشادات رسمية في إسبانيا"
  },
  "ko-KR": {
    "language": "언어",
    "headline": "온라인 사기 알아보기",
    "bank": "가짜 은행 알림",
    "delivery": "가짜 배송 메시지",
    "guidance": "스페인 공식 안내"
  },
  "tr-TR": {
    "language": "Dil",
    "headline": "Çevrim içi dolandırıcılığı tanıyın",
    "bank": "Sahte banka bildirimleri",
    "delivery": "Sahte teslimat mesajları",
    "guidance": "İspanya için resmî rehber"
  },
  "id-ID": {
    "language": "Bahasa",
    "headline": "Kenali penipuan daring",
    "bank": "Pemberitahuan bank palsu",
    "delivery": "Pesan pengiriman palsu",
    "guidance": "Panduan resmi di Spanyol"
  },
  "vi-VN": {
    "language": "Ngôn ngữ",
    "headline": "Nhận biết lừa đảo trực tuyến",
    "bank": "Thông báo ngân hàng giả",
    "delivery": "Tin nhắn giao hàng giả",
    "guidance": "Hướng dẫn chính thức tại Tây Ban Nha"
  }
} satisfies Record<Locale, Catalog>;
