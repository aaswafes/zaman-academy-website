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
    name_en: 'Mr. Mahmud al-Hashimi',
    name_ru: 'Махмуд аль-Хашими',
    photo: 'img/teachers/placeholder-1.svg',
    badge: 'Native · C2',
    years: 8,
    bioShort: 'Ona tili Arab — Misrdan kelgan muallim. Talaffuz va og’zaki nutq bo’yicha mutaxassis.',
    bioShort_en: 'Native Arabic speaker from Egypt. Specialist in pronunciation and spoken language.',
    bioShort_ru: 'Носитель арабского из Египта. Специалист по произношению и устной речи.',
    bioLong:
      'Ustoz Mahmud Qohira Universitetida arab tili va adabiyotidan magistr darajasini olgan. ' +
      '2019-yildan beri Toshkentda yashaydi va Zaman Akademiyasida darslar olib boradi. ' +
      'Talaba va kattalar uchun og’zaki nutq, talaffuz va kundalik muloqotni rivojlantirish ' +
      'bo’yicha individual va guruhli darslar o’tkazadi.',
    bioLong_en:
      'Mr. Mahmud holds a Master’s in Arabic Language and Literature from Cairo University. ' +
      'He has lived in Tashkent since 2019 and teaches at Zaman Academy. ' +
      'He runs individual and group lessons for students and adults focused on spoken language, pronunciation and everyday communication.',
    bioLong_ru:
      'Магистр арабской филологии Каирского университета. С 2019 года живёт в Ташкенте и преподаёт в академии Zaman. ' +
      'Ведёт индивидуальные и групповые занятия по устной речи, произношению и повседневному общению для студентов и взрослых.',
    education: ['Cairo University — MA, Arab tili va adabiyoti'],
    education_en: ['Cairo University — MA, Arabic Language and Literature'],
    education_ru: ['Каирский университет — магистр, арабский язык и литература'],
    certs: ['Ona tili (C2)', 'TESOL Arabic (Cairo, 2018)'],
    certs_en: ['Native speaker (C2)', 'TESOL Arabic (Cairo, 2018)'],
    certs_ru: ['Носитель языка (C2)', 'TESOL Arabic (Каир, 2018)'],
    telegram: 'https://t.me/arabtili_admin'
  },
  {
    id: 'ustoz-c1',
    name: 'Ustoz Sardor Karimov',
    name_en: 'Mr. Sardor Karimov',
    name_ru: 'Сардор Каримов',
    photo: 'img/teachers/placeholder-2.svg',
    badge: 'C1 · 6 yil',
    years: 6,
    bioShort: 'CEFR va at-Tanall yo’nalishlarining yetakchi metodisti.',
    bioShort_en: 'Lead methodist for the CEFR and at-Tanall tracks.',
    bioShort_ru: 'Ведущий методист направлений CEFR и at-Tanall.',
    bioLong:
      'Sardor ustoz Madina Islom Universitetining bitiruvchisi. CEFR B2/C1 va at-Tanall ' +
      'imtihonlariga tayyorlash bo’yicha 6 yildan ortiq tajribaga ega. Akademiyaning ' +
      'asosiy metodik dasturini ishlab chiqishda qatnashgan.',
    bioLong_en:
      'Mr. Sardor is a graduate of the Islamic University of Madinah. He has 6+ years of experience preparing students for the CEFR B2/C1 and at-Tanall exams and contributed to the Academy’s core methodology.',
    bioLong_ru:
      'Выпускник Исламского университета Медины. Более 6 лет готовит студентов к экзаменам CEFR B2/C1 и at-Tanall. Участвовал в разработке основной методики Академии.',
    education: ['Madina Islom Universiteti — Arab tili (bakalavr)'],
    education_en: ['Islamic University of Madinah — Arabic Language (BA)'],
    education_ru: ['Исламский университет Медины — арабский язык (бакалавр)'],
    certs: ['CEFR C1', 'at-Tanall ustoz sertifikati'],
    certs_en: ['CEFR C1', 'at-Tanall teacher certificate'],
    certs_ru: ['CEFR C1', 'Сертификат преподавателя at-Tanall'],
    telegram: 'https://t.me/arabtili_admin'
  },
  {
    id: 'ustoz-fonetika',
    name: 'Ustoz Madina Yusupova',
    name_en: 'Ms. Madina Yusupova',
    name_ru: 'Мадина Юсупова',
    photo: 'img/teachers/placeholder-3.svg',
    badge: 'C1 · Fonetika',
    years: 5,
    bioShort: 'Tajvid va fonetika bo’yicha mutaxassis. Boshlovchi guruhlar bilan ishlaydi.',
    bioShort_en: 'Specialist in tajweed and phonetics. Works with beginner groups.',
    bioShort_ru: 'Специалист по таджвиду и фонетике. Работает с начинающими группами.',
    bioLong:
      'Madina opa fonetika va tajvid yo’nalishlarida ixtisoslashgan. Uning 3 oylik ' +
      'fonetika kursini tugatgan o’quvchilar arab tilida xatosiz o’qishni o’rganadi. ' +
      'Maktab yoshidagi o’quvchilar bilan ishlash bo’yicha alohida ko’nikmaga ega.',
    bioLong_en:
      'Ms. Madina specialises in phonetics and tajweed. Students who finish her 3-month phonetics course learn to read Arabic without mistakes. She has a particular skill working with school-age learners.',
    bioLong_ru:
      'Специализируется на фонетике и таджвиде. Студенты, прошедшие её 3-месячный курс фонетики, учатся читать на арабском без ошибок. Особый опыт работы со школьниками.',
    education: ['ToshDSHI — Sharq tillari fakulteti'],
    education_en: ['Tashkent State University of Oriental Studies'],
    education_ru: ['ТашГИВ — факультет восточных языков'],
    certs: ['CEFR C1', 'Tajvid Ijoza'],
    certs_en: ['CEFR C1', 'Tajweed Ijazah'],
    certs_ru: ['CEFR C1', 'Иджаза по таджвиду'],
    telegram: 'https://t.me/arabtili_admin'
  },
  {
    id: 'ustoz-nahv',
    name: 'Ustoz Ibrohim Ahmedov',
    name_en: 'Mr. Ibrohim Ahmedov',
    name_ru: 'Иброхим Ахмедов',
    photo: 'img/teachers/placeholder-4.svg',
    badge: 'C1 · Sarf-Nahv',
    years: 7,
    bioShort: 'Sarf va Nahv (grammatika) bo’yicha akademiyaning mas’ul ustozi.',
    bioShort_en: 'The Academy’s lead instructor for Sarf and Nahw (grammar).',
    bioShort_ru: 'Ведущий преподаватель Академии по сарфу и нахву (грамматике).',
    bioLong:
      'Ibrohim ustoz Saudiya Arabistonida 5 yil tahsil olgan va Sarf-Nahv ' +
      'yo’nalishida ixtisoslashgan. Sertifikat dasturlari bilan birga ' +
      'chuqurlashtirilgan grammatika kursini olib boradi.',
    bioLong_en:
      'Mr. Ibrohim studied in Saudi Arabia for 5 years and specialises in Sarf and Nahw. He teaches an in-depth grammar course alongside the certificate preparation programs.',
    bioLong_ru:
      'Учился 5 лет в Саудовской Аравии, специализируется по сарфу и нахву. Ведёт углублённый курс грамматики параллельно с программами подготовки к сертификатам.',
    education: ['Umm al-Qura University — Arab tili (bakalavr)'],
    education_en: ['Umm al-Qura University — Arabic Language (BA)'],
    education_ru: ['Университет Умм аль-Кура — арабский язык (бакалавр)'],
    certs: ['CEFR C1', 'Ijoza fi Sarf wa Nahv'],
    certs_en: ['CEFR C1', 'Ijazah in Sarf and Nahw'],
    certs_ru: ['CEFR C1', 'Иджаза по сарфу и нахву'],
    telegram: 'https://t.me/arabtili_admin'
  }
];

/* ---------- ACADEMY GALLERY ---------- */
/* Replace placeholder.svg with real /img/gallery/*.webp when photos are ready. */
window.GALLERY = [
  { src: 'img/gallery/placeholder-1.svg', caption: 'Asosiy dars xonasi', caption_en: 'Main classroom', caption_ru: 'Основной учебный класс' },
  { src: 'img/gallery/placeholder-2.svg', caption: 'Kutubxona burchagi', caption_en: 'Library corner', caption_ru: 'Уголок библиотеки' },
  { src: 'img/gallery/placeholder-3.svg', caption: 'Guruh darslari', caption_en: 'Group lessons', caption_ru: 'Групповые занятия' },
  { src: 'img/gallery/placeholder-4.svg', caption: 'Akademiya peshtaxtasi', caption_en: 'Academy entrance', caption_ru: 'Вход в академию' },
  { src: 'img/gallery/placeholder-5.svg', caption: 'Bitiruv marosimi', caption_en: 'Graduation ceremony', caption_ru: 'Выпускная церемония' },
  { src: 'img/gallery/placeholder-6.svg', caption: 'Native arab ustoz bilan amaliyot', caption_en: 'Practice with a native Arab teacher', caption_ru: 'Практика с носителем арабского' }
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
    name_en: 'Asilbek, 19',
    name_ru: 'Асилбек, 19 лет',
    role: 'Talaba',
    role_en: 'Student',
    role_ru: 'Студент',
    before: 'A2',
    after: 'B2',
    duration: '9 oyda',
    duration_en: 'in 9 months',
    duration_ru: 'за 9 месяцев',
    cert: 'CEFR B2',
    quote: 'Fonetika kursini tugatib, atigi 3 oyda Qur’onni mustaqil o’qiy boshladim. Keyin CEFR’ga o’tib, 9 oyda B2 sertifikatini oldim.',
    quote_en: 'After the Phonetics course I started reading the Qur’an on my own in just 3 months. Then I moved to CEFR and earned my B2 certificate in 9 months.',
    quote_ru: 'После курса фонетики я уже через 3 месяца сам читал Коран. Затем перешёл на CEFR и за 9 месяцев получил сертификат B2.',
    youtubeId: ''
  },
  {
    name: 'Madina, 22 yosh',
    name_en: 'Madina, 22',
    name_ru: 'Мадина, 22 года',
    role: 'Abituriyent',
    role_en: 'University applicant',
    role_ru: 'Абитуриент',
    before: 'B1',
    after: 'C1',
    duration: '11 oyda',
    duration_en: 'in 11 months',
    duration_ru: 'за 11 месяцев',
    cert: 'at-Tanall',
    quote: '11 oydan keyin at-Tanall sertifikatini qo’lga kiritdim. Ustozlar haqiqatan kuchli, dasturlari aniq.',
    quote_en: 'After 11 months I earned the at-Tanall certificate. The teachers are genuinely strong and the program is precise.',
    quote_ru: 'Через 11 месяцев получила сертификат at-Tanall. Преподаватели действительно сильные, программа чёткая.',
    youtubeId: ''
  },
  {
    name: 'Bekzod, 24 yosh',
    name_en: 'Bekzod, 24',
    name_ru: 'Бекзод, 24 года',
    role: 'Ishlovchi',
    role_en: 'Working professional',
    role_ru: 'Работающий',
    before: 'A1',
    after: 'B2',
    duration: '12 oyda',
    duration_en: 'in 12 months',
    duration_ru: 'за 12 месяцев',
    cert: 'CEFR B2',
    quote: 'Native arab ustoz bilan amaliyot — boshqa markazlarda yo’q narsa. Sertifikatga 12 oyda yetdim.',
    quote_en: 'Practice with a native Arab teacher is something I haven’t seen at other centres. I reached the certificate in 12 months.',
    quote_ru: 'Практика с носителем арабского — такого нет в других центрах. До сертификата дошёл за 12 месяцев.',
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
