/* Zaman Akademiyasi — content arrays.
 * Edit this file to add/remove teachers, gallery photos, certificates, results, FAQ.
 * All UI lists on the site pull from here at runtime. */

/* ---------- TEACHERS ---------- */
/* Photos live under /img/teachers/ — SVG placeholders are used until real
 * portraits are supplied. Telegram link opens in a new tab. */
window.TEACHERS = [
  {
    id: 'ustoz-arab',
    name: 'Ustoz Mahmud al-Hashimi',
    photo: 'img/teachers/placeholder-1.svg',
    badge: 'Native · C2',
    years: 8,
    bioShort: 'Ona tili Arab — Misrdan kelgan muallim. Talaffuz va og’zaki nutq bo’yicha mutaxassis.',
    bioLong:
      'Ustoz Mahmud Qohira Universitetida arab tili va adabiyotidan magistr darajasini olgan. ' +
      '2019-yildan beri Toshkentda yashaydi va Zaman Akademiyasida darslar olib boradi. ' +
      'Talaba va kattalar uchun og’zaki nutq, talaffuz va kundalik muloqotni rivojlantirish ' +
      'bo’yicha individual va guruhli darslar o’tkazadi.',
    education: ['Cairo University — MA, Arab tili va adabiyoti'],
    certs: ['Ona tili (C2)', 'TESOL Arabic (Cairo, 2018)'],
    telegram: 'https://t.me/arabtili_admin'
  },
  {
    id: 'ustoz-c1',
    name: 'Ustoz Sardor Karimov',
    photo: 'img/teachers/placeholder-2.svg',
    badge: 'C1 · 6 yil',
    years: 6,
    bioShort: 'CEFR va at-Tanall yo’nalishlarining yetakchi metodisti.',
    bioLong:
      'Sardor ustoz Madina Islom Universitetining bitiruvchisi. CEFR B2/C1 va at-Tanall ' +
      'imtihonlariga tayyorlash bo’yicha 6 yildan ortiq tajribaga ega. Akademiyaning ' +
      'asosiy metodik dasturini ishlab chiqishda qatnashgan.',
    education: ['Madina Islom Universiteti — Arab tili (bakalavr)'],
    certs: ['CEFR C1', 'at-Tanall ustoz sertifikati'],
    telegram: 'https://t.me/arabtili_admin'
  },
  {
    id: 'ustoz-fonetika',
    name: 'Ustoz Madina Yusupova',
    photo: 'img/teachers/placeholder-3.svg',
    badge: 'C1 · Fonetika',
    years: 5,
    bioShort: 'Tajvid va fonetika bo’yicha mutaxassis. Boshlovchi guruhlar bilan ishlaydi.',
    bioLong:
      'Madina opa fonetika va tajvid yo’nalishlarida ixtisoslashgan. Uning 3 oylik ' +
      'fonetika kursini tugatgan o’quvchilar arab tilida xatosiz o’qishni o’rganadi. ' +
      'Maktab yoshidagi o’quvchilar bilan ishlash bo’yicha alohida ko’nikmaga ega.',
    education: ['ToshDSHI — Sharq tillari fakulteti'],
    certs: ['CEFR C1', 'Tajvid Ijoza'],
    telegram: 'https://t.me/arabtili_admin'
  },
  {
    id: 'ustoz-nahv',
    name: 'Ustoz Ibrohim Ahmedov',
    photo: 'img/teachers/placeholder-4.svg',
    badge: 'C1 · Sarf-Nahv',
    years: 7,
    bioShort: 'Sarf va Nahv (grammatika) bo’yicha akademiyaning mas’ul ustozi.',
    bioLong:
      'Ibrohim ustoz Saudiya Arabistonida 5 yil tahsil olgan va Sarf-Nahv ' +
      'yo’nalishida ixtisoslashgan. Sertifikat dasturlari bilan birga ' +
      'chuqurlashtirilgan grammatika kursini olib boradi.',
    education: ['Umm al-Qura University — Arab tili (bakalavr)'],
    certs: ['CEFR C1', 'Ijoza fi Sarf wa Nahv'],
    telegram: 'https://t.me/arabtili_admin'
  }
];

/* ---------- ACADEMY GALLERY ---------- */
/* Replace placeholder.svg with real /img/gallery/*.webp when photos are ready. */
window.GALLERY = [
  { src: 'img/gallery/placeholder-1.svg', caption: 'Asosiy dars xonasi' },
  { src: 'img/gallery/placeholder-2.svg', caption: 'Kutubxona burchagi' },
  { src: 'img/gallery/placeholder-3.svg', caption: 'Guruh darslari' },
  { src: 'img/gallery/placeholder-4.svg', caption: 'Akademiya peshtaxtasi' },
  { src: 'img/gallery/placeholder-5.svg', caption: 'Bitiruv marosimi' },
  { src: 'img/gallery/placeholder-6.svg', caption: 'Native arab ustoz bilan amaliyot' }
];

/* ---------- CERTIFICATES ---------- */
/* Real photos already shipped under images/certificates/.
 * `level`, `student`, `issuedOn` populate lightbox captions. */
window.CERTIFICATES = [
  { src: 'images/certificates/photo_2024-06-21_06-03-39.jpg', level: 'B2', student: 'Xudoyorov Javohir', issuedOn: '20.06.2024' },
  { src: 'images/certificates/photo_2024-06-21_06-18-42.jpg', level: 'B2', student: 'Shukurlloyeva Mushtariy', issuedOn: '20.06.2024' },
  { src: 'images/certificates/photo_2024-10-11_17-01-36.jpg', level: 'C1', student: 'Shoabdiyeva Saodat', issuedOn: '11.10.2024' },
  { src: 'images/certificates/photo_2024-10-11_19-45-51.jpg', level: 'B2', student: 'Tohirova Zilola', issuedOn: '11.10.2024' },
  { src: 'images/certificates/photo_2025-12-13_21-52-59.jpg', level: 'C1', student: 'Eshnazarova Fotima', issuedOn: '12.12.2025' },
  { src: 'images/certificates/photo_2026-01-15_17-32-03.jpg', level: 'B2', student: 'Xoshimxonov Oqilxon', issuedOn: '15.01.2026' },
  { src: 'images/certificates/photo_2026-01-15_18-51-31.jpg', level: 'B2', student: 'Izzatuloyeva Jasmina', issuedOn: '15.01.2026' },
  { src: 'images/certificates/photo_2026-05-16_17-20-34.jpg', level: 'B1', student: 'Azimjonova Hadicha', issuedOn: '02.05.2025' }
];

/* ---------- RESULTS (case studies) ---------- */
/* youtubeId may be empty string — slot is hidden when absent. */
window.RESULTS = [
  {
    name: 'Asilbek, 19 yosh',
    role: 'Talaba',
    before: 'A2',
    after: 'B2',
    duration: '9 oyda',
    cert: 'CEFR B2',
    quote: 'Fonetika kursini tugatib, atigi 3 oyda Qur’onni mustaqil o’qiy boshladim. Keyin CEFR’ga o’tib, 9 oyda B2 sertifikatini oldim.',
    youtubeId: ''
  },
  {
    name: 'Madina, 22 yosh',
    role: 'Abituriyent',
    before: 'B1',
    after: 'C1',
    duration: '11 oyda',
    cert: 'at-Tanall',
    quote: '11 oydan keyin at-Tanall sertifikatini qo’lga kiritdim. Ustozlar haqiqatan kuchli, dasturlari aniq.',
    youtubeId: ''
  },
  {
    name: 'Bekzod, 24 yosh',
    role: 'Ishlovchi',
    before: 'A1',
    after: 'B2',
    duration: '12 oyda',
    cert: 'CEFR B2',
    quote: 'Native arab ustoz bilan amaliyot — boshqa markazlarda yo’q narsa. Sertifikatga 12 oyda yetdim.',
    youtubeId: ''
  }
];

/* ---------- FAQ ---------- */
/* Used both for the on-page accordion and for FAQPage JSON-LD. */
window.FAQ = [
  {
    q: 'Birinchi dars haqiqatan bepulmi?',
    a: 'Ha, har qanday kursning birinchi darsi mutlaqo bepul. Darajangiz aniqlanadi, ustozni va guruhni ko’rasiz. Yoqmasa — hech qanday majburiyat yo’q.'
  },
  {
    q: 'Bo’lib to’lash imkoniyati bormi?',
    a: 'Ha, 1 oyga bo’lib to’lash mumkin. Asosiy shart — qatnashilgan darslarga qarzdor bo’lib qolmaslik. Kredit yoki rassrochka tizimi yo’q.'
  },
  {
    q: 'Yosh chegarasi qanday?',
    a: 'Barcha kurslarimiz 12 yoshdan katta o’quvchilar uchun. Maktab o’quvchilari, abituriyentlar, talabalar, ishlovchilar va kattalar — bizning auditoriyamiz.'
  },
  {
    q: 'Onlayn dars taklif qilasizmi?',
    a: 'Hozircha darslarimiz Toshkentda, Olmazor tumanidagi filialimizda o’tkaziladi. Yozga yaqin onlayn Fonetika va CEFR/at-Tanall kurslarini ham yo’lga qo’yishni rejalashtirmoqdamiz.'
  },
  {
    q: 'Qaytarish (pulni qaytarib olish) bormi?',
    a: 'Agar o’quvchi o’qishni tugatsa va balansida ortiqcha pul qolsa — albatta qaytariladi.'
  },
  {
    q: 'Hozir aksiya bormi?',
    a: 'Hozircha maxsus aksiya yo’q, lekin uchta doimiy chegirma har doim amal qiladi: oilada 2+ o’quvchi (10%), do’st olib kelish (10%) va 20-sanagacha to’lov (10%).'
  },
  {
    q: 'Sertifikatim haqiqiyligini qanday tekshirish mumkin?',
    a: 'Davlat tomonidan beriladigan sertifikatlarni sertifikat.uzbmb.uz sayti orqali tekshirish mumkin. Akademiya sertifikatlari uchun /certificate.html sahifasidagi tekshiruv shaklidan foydalaning.'
  }
];

/* ---------- LOCATIONS (for map button row) ---------- */
window.LOCATION = {
  address: 'Toshkent sh., Olmazor t., Qiziltut tor ko’chasi 84-1',
  lat: 41.32612468,
  lon: 69.23074248,
  yandexEmbed:
    'https://yandex.uz/map-widget/v1/?ll=69.230742%2C41.326125&mode=whatshere&whatshere%5Bpoint%5D=69.230742%2C41.326125&whatshere%5Bzoom%5D=18&z=18',
  yandex: 'https://yandex.uz/maps?whatshere%5Bpoint%5D=69.23074247897723%2C41.32612468156315&whatshere%5Bzoom%5D=18.345442&ll=69.2307424789772%2C41.326124681187444&z=18.345442',
  google: 'https://www.google.com/maps?q=41.32612468,69.23074248',
  gis: 'https://2gis.uz/tashkent/geo/41.326125,69.230742'
};
