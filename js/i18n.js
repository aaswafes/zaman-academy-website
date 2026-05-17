/* Zaman Akademiyasi — i18n bundles.
 * UZ is authoritative. EN/RU are review-ready stubs — owner should proof.
 *
 * Markup contract:
 *   <span data-i18n="HERO.TITLE">…</span>           — textContent
 *   <h1  data-i18n-html="HERO.TITLE_HTML">…</h1>    — innerHTML (rich markup allowed)
 *   <input data-i18n-attr="placeholder:LEAD.NAME_PLACEHOLDER" />
 *
 * Use setLang(code) from main.js to switch. Defaults to localStorage.zaman_lang,
 * then navigator.language, then 'uz'. */

window.STRINGS = {

  /* ============================================================
   * UZBEK (authoritative)
   * ============================================================ */
  uz: {
    NAV: {
      COURSES: 'Kurslar',
      TEACHERS: 'Ustozlar',
      GALLERY: 'Galereya',
      RESULTS: 'Natijalar',
      PRICING: 'Narxlar',
      FAQ: 'Savol-javob',
      CONTACT: 'Aloqa',
      CTA: 'Bepul sinov darsi'
    },
    HERO: {
      PILL: '2022-yildan beri • Toshkentda 1 ta filial',
      TITLE_HTML:
        'Arab tilini\n          <span class="block">\n            <span class="italic">o&rsquo;zlashtirish</span>\n            <span class="arabic-mark inline-block align-middle ml-2 text-[0.65em] translate-y-[-0.05em]">العربية</span>\n          </span>\n          <span class="block">eng yaxshi <span class="text-rose-500">sarmoya</span>.</span>',
      DESC_HTML:
        'Zaman Akademiyasi — CEFR va at-Tanall xalqaro sertifikatlariga tayyorlovchi Arab tili markazi. C1/C2 darajadagi ustozlar, native arab muallim va haftasiga 4 marta dars. <span class="text-zinc-900 font-medium">10–12 oyda B2 yoki C1 darajasiga — kafolat bilan.</span>',
      CTA_PRIMARY: 'Bepul sinov darsiga yozilish',
      CTA_GHOST: 'Kurslarni ko&rsquo;rish',
      STAT_1_LABEL_HTML: 'yillik o&rsquo;qitish<br/>tajribasi',
      STAT_2_LABEL_HTML: 'oyda B2 yoki C1<br/>darajasiga',
      STAT_3_LABEL_HTML: 'marta dars<br/>haftasiga',
      STAT_4_LABEL_HTML: 'birinchi dars<br/>mutlaqo bepul'
    },
    ABOUT: {
      EYEBROW: '01 — Biz haqimizda',
      TITLE_HTML: 'Til&mdash;<br/><span class="italic">kelajak uchun</span><br/>kalit.',
      QUOTE: '“Eng yaxshi sarmoya — kelajak uchun sarmoya.”',
      P1_HTML:
        'Zaman Xorijiy Tillar Akademiyasi 2022-yilda asos solingan. To&rsquo;rt yildan ortiq vaqt davomida abituriyentlar, talabalar va arab tilini chuqur o&rsquo;rganmoqchi bo&rsquo;lgan kattalarni <span class="text-zinc-900">CEFR</span> va <span class="text-zinc-900">at-Tanall</span> xalqaro sertifikatlariga tayyorlab kelyapmiz.',
      P2: 'Olmazor tumanida, Chorsu bozori yaqinida joylashganmiz. Bizning ustozlarimiz — C1 va C2 darajadagi mutaxassislar, jumladan ona tili Arab bo&rsquo;lgan muallim ham bor. Haftasiga to&rsquo;rt marta dars o&rsquo;tamiz va natijaga kafolat beramiz.',
      STAT_YEARS: 'yillik tajriba',
      STAT_STUDENTS: 'o&rsquo;quvchi',
      STAT_RATE: 'B2/C1 muvaffaqiyat',
      STAT_LEVELS: 'CEFR darajalari (A1–C2)'
    },
    COURSES: {
      EYEBROW: '02 — Kurslar',
      TITLE_HTML: 'Sizga mos<br/><span class="italic">yo&rsquo;nalish</span> tanlang.',
      SUBHEAD_HTML: 'Barcha kurslarimiz <span class="text-zinc-900">12 yoshdan</span> katta yigit-qizlar, talabalar, abituriyent va kattalar uchun mo&rsquo;ljallangan. Birinchi dars — bepul.',
      C1_BADGE: 'flagship',
      C1_NAME_HTML: 'CEFR<br/><span class="italic">&amp; at-Tanall</span>',
      C1_DESC_HTML: 'Xalqaro sertifikatlarga to&rsquo;liq tayyorlov. 10–12 oyda <strong class="text-zinc-900">B2 yoki C1</strong> darajasi — natijaga kafolat.',
      C1_B1: '10–12 oylik dastur',
      C1_B2: 'Haftasiga 4 marta dars',
      C1_B3: 'Native arab ustoz darslari',
      C1_B4: 'Sertifikat beriladi',
      C1_UNIT: 'so&rsquo;m / oy',
      C2_BADGE: '3 oy',
      C2_NAME_HTML: 'Fonetika<br/><span class="italic">&amp; o&rsquo;qish</span>',
      C2_DESC_HTML: 'Atigi 3 oyda arab tilida har qanday matnni <strong class="text-zinc-900">be xato o&rsquo;qishni</strong> kafolatlaymiz. Boshlovchilar uchun ideal start.',
      C2_B1: '3 oylik dastur',
      C2_B2: 'Harflar va tovushlar',
      C2_B3: 'Tajvid asoslari',
      C2_B4: 'Eng arzon kursimiz',
      C2_UNIT: 'so&rsquo;m / oy',
      C3_BADGE: 'premium',
      C3_NAME_HTML: 'Individual<br/><span class="italic">dars</span>',
      C3_DESC: 'Bir o&rsquo;quvchi — bir ustoz. Maksimal sur&rsquo;at, faqat sizga mos dastur. Sertifikatga eng tez yo&rsquo;l.',
      C3_B1: '1-1 darslar',
      C3_B2: 'Shaxsiy dars jadvali',
      C3_B3: 'Tezroq natija',
      C3_B4: 'Maxsus dastur',
      C3_UNIT: 'so&rsquo;m / oy',
      CARD_CTA: 'Yozilish →',
      SIDE_TITLE: 'Sarf va Nahv kursi',
      SIDE_DESC: 'Arab tili grammatikasi — sarf (morfologiya) va nahv (sintaksis) bo&rsquo;yicha alohida chuqurlashtirilgan kurs. Sertifikatga tayyorlik bilan birga olib boriladi.',
      SIDE_CTA: 'Batafsil →'
    },
    TEACHERS: {
      EYEBROW: '03 — Ustozlar',
      TITLE: 'Tajribali ustozlar.',
      CTA: 'Barcha ustozlar →',
      MODAL_EDUCATION: 'Ta’lim',
      MODAL_CERTS: 'Sertifikatlar',
      MODAL_CONTACT: 'Telegram orqali bog’lanish',
      YEARS_SUFFIX: 'yil tajriba',
      MORE: 'Batafsil →'
    },
    WHY: {
      EYEBROW: '04 — Farqimiz',
      TITLE_HTML: 'Nima uchun<br/><span class="italic">Zaman</span>.',
      SUBHEAD: 'Toshkentda Arab tili markazlari ko&rsquo;p, lekin natija kafolatini hammasi ham bermaydi. Mana, nima uchun o&rsquo;quvchilar bizni tanlaydi.',
      W1_TITLE: 'C1 / C2 ustozlar',
      W1_DESC: 'Barcha o&rsquo;qituvchilarimiz xalqaro sertifikatga ega C1 va C2 darajadagi mutaxassislar. Native arab muallim ham dars beradi.',
      W2_TITLE: 'Natijaga kafolat',
      W2_DESC: '10–12 oy ichida B2 yoki C1 darajaga erishishni kafolatlaymiz. 3 oylik fonetika kursida xatosiz o&rsquo;qishni kafolatlaymiz.',
      W3_TITLE: 'Haftasiga 4 dars',
      W3_DESC: 'Boshqa markazlarda haftasiga 2–3 marta dars bo&rsquo;ladi. Bizda — to&rsquo;rt marta. Tezroq, chuqurroq, samaraliroq.',
      W4_TITLE: 'Birinchi dars bepul',
      W4_DESC: 'Avval keling, dars metodikasini, ustozni va guruhni ko&rsquo;ring. Yoqsa — davom etamiz.',
      W5_TITLE: 'Sertifikat',
      W5_DESC: 'Kurs yakunida har bir o&rsquo;quvchi Akademiya sertifikati bilan ta&rsquo;minlanadi.',
      W6_TITLE: 'Chegirmalar',
      W6_DESC: 'Oilada 2+ kishi — 10%, do&rsquo;st olib kelsa — 10%, oldindan to&rsquo;lov uchun — 10%.'
    },
    PROCESS: {
      EYEBROW: '05 — Jarayon',
      TITLE_HTML: 'Uch qadamda<br/><span class="italic">natijaga</span>.',
      S1_TITLE: 'Murojaat qilish',
      S1_DESC: 'Telegram, telefon yoki Instagram orqali yozing. Sizga mos kursni tanlashda yordam beramiz.',
      S2_TITLE: 'Guruhga yozilish',
      S2_DESC: 'Vaqtingizga mos jadvalni tanlaysiz, bepul sinov darsiga keling — darajangiz aniqlanadi.',
      S3_TITLE: 'Darsni boshlash',
      S3_DESC: 'Haftasiga 4 marta dars, doimiy nazorat, va belgilangan muddatda — kerakli darajaga.'
    },
    RESULTS: {
      EYEBROW: '06 — Natijalar',
      TITLE: 'Real o&rsquo;quvchi natijalari.',
      LABEL_FROM: 'Boshlanish',
      LABEL_TO: 'Natija',
      LABEL_CERT: 'Sertifikat'
    },
    CERTS: {
      EYEBROW: '07 — Sertifikatlar',
      TITLE_HTML: 'Davlat tomonidan<br/><span class="italic">tan olingan</span> natijalar.',
      DESC: 'O&rsquo;quvchilarimiz O&rsquo;zbekiston Respublikasi Bilim va malakalarni baholash agentligi tomonidan beriladigan rasmiy Arab tili sertifikatini B1, B2 va C1 darajalarida qo&rsquo;lga kiritmoqdalar.',
      CTA_VERIFY: 'Sertifikatni tekshirish →'
    },
    GALLERY: {
      EYEBROW: '08 — Galereya',
      TITLE: 'Akademiya ichidan.',
      CTA: 'Barcha rasmlar →'
    },
    PRICING: {
      EYEBROW: '09 — Narxlar',
      TITLE_HTML: 'Aniq narxlar.<br/><span class="italic text-zinc-400">Yashirin to&rsquo;lovlar yo&rsquo;q.</span>',
      SUBHEAD: 'Naqd, Uzcard, Click va to&rsquo;lov ilovalari orqali to&rsquo;lash mumkin. 1 oyga bo&rsquo;lib to&rsquo;lash imkoniyati bor.',
      COL_COURSE: 'Kurs',
      COL_DURATION: 'Davomiyligi',
      COL_WEEKLY: 'Haftasiga',
      COL_PRICE: 'Narx',
      R1_NAME: 'Fonetika',
      R1_SUB: 'Xatosiz o&rsquo;qishni kafolatlaymiz',
      R1_DURATION: '3 oy',
      R1_WEEKLY: '4 dars',
      R1_UNIT: 'so&rsquo;m / oy',
      R2_NAME: 'CEFR &amp; at-Tanall',
      R2_BADGE: 'Eng mashhur',
      R2_SUB: 'B2 yoki C1 darajaga kafolat',
      R2_DURATION: '10–12 oy',
      R2_WEEKLY: '4 dars',
      R2_UNIT: 'so&rsquo;m / oy',
      R3_NAME: 'Individual dars',
      R3_SUB: '1-1 format, eng tez sur&rsquo;at',
      R3_DURATION: 'moslashtirilgan',
      R3_WEEKLY: 'jadval bo&rsquo;yicha',
      R3_UNIT: 'so&rsquo;m / oy',
      DISC_FAMILY_HTML: '<span class="text-white">10%</span> chegirma — oilada 2+ kishi',
      DISC_FRIEND_HTML: '<span class="text-white">10%</span> chegirma — do&rsquo;st olib kelsangiz',
      DISC_EARLY_HTML: '<span class="text-white">10%</span> chegirma — 20-sanagacha to&rsquo;lov',
      FOOTNOTE: '* Darslik kitoblari narxga kirmaydi; daraja va kursga qarab alohida narxlanadi. Narxlar har 12 oyda yangilanadi.'
    },
    FAQ: {
      EYEBROW: '10 — Savol-javob',
      TITLE_HTML: 'Tez-tez<br/>so&rsquo;raladigan<br/><span class="italic">savollar</span>.',
      SUB: 'Javob topilmadimi? Bemalol murojaat qiling — operatorlarimiz 09:00 dan 20:00 gacha xizmatingizda.',
      Q1: 'Birinchi dars haqiqatan bepulmi?',
      A1: 'Ha, har qanday kursning birinchi darsi mutlaqo bepul. Darajangiz aniqlanadi, ustozni va guruhni ko&rsquo;rasiz. Yoqmasa — hech qanday majburiyat yo&rsquo;q.',
      Q2: 'Bo&rsquo;lib to&rsquo;lash imkoniyati bormi?',
      A2: 'Ha, 1 oyga bo&rsquo;lib to&rsquo;lash mumkin. Asosiy shart — qatnashilgan darslarga qarzdor bo&rsquo;lib qolmaslik. Kredit yoki rassrochka tizimi yo&rsquo;q.',
      Q3: 'Yosh chegarasi qanday?',
      A3: 'Barcha kurslarimiz 12 yoshdan katta o&rsquo;quvchilar uchun. Maktab o&rsquo;quvchilari, abituriyentlar, talabalar, ishlovchilar va kattalar — bizning auditoriyamiz.',
      Q4: 'Onlayn dars taklif qilasizmi?',
      A4: 'Hozircha darslarimiz Toshkentda, Olmazor tumanidagi filialimizda o&rsquo;tkaziladi. Yozga yaqin onlayn Fonetika va CEFR/at-Tanall kurslarini ham yo&rsquo;lga qo&rsquo;yishni rejalashtirmoqdamiz.',
      Q5: 'Qaytarish (pulni qaytarib olish) bormi?',
      A5: 'Agar o&rsquo;quvchi o&rsquo;qishni tugatsa va balansida ortiqcha pul qolsa — albatta qaytariladi.',
      Q6: 'Hozir aksiya bormi?',
      A6: 'Hozircha maxsus aksiya yo&rsquo;q, lekin uchta doimiy chegirma har doim amal qiladi: oilada 2+ o&rsquo;quvchi (10%), do&rsquo;st olib kelish (10%) va 20-sanagacha to&rsquo;lov (10%).'
    },
    CONTACT: {
      EYEBROW: '11 — Aloqa',
      TITLE_HTML: 'Birinchi dars<br/><span class="italic">bepul</span> — keling,<br/>tanishamiz.',
      INTRO: 'Quyidagi kanallar orqali bog&rsquo;laning yoki shunchaki yozib qoldiring — biz 1 ish kunida o&rsquo;zimiz aloqaga chiqamiz.',
      OPEN_YANDEX: 'Yandex Maps',
      OPEN_GOOGLE: 'Google Maps',
      OPEN_2GIS: '2GIS',
      EMAIL_LABEL: 'Email',
      ADDR_LABEL: 'Manzil',
      ADDR_TEXT_HTML: 'Toshkent sh., Olmazor t.,<br/>Qiziltut tor ko&rsquo;chasi 84-1<br/><span class="text-zinc-500">Chorsu bozori yaqinida</span>',
      HOURS_LABEL: 'Ish vaqti',
      HOURS_TEXT_HTML: 'Du–Sha: 09:00–20:00<br/>Yakshanba: 12:30–17:00',
      HOURS_NOTE: 'Diniy bayramlar va Yangi yil — yopiq',
      PHONES_LABEL: 'Qo&rsquo;shimcha raqamlar'
    },
    LEAD: {
      TITLE: 'Sinov darsiga yozilish',
      DESC: 'Yozib qoldiring — biz bog’lanamiz va sizga mos vaqtni tanlaymiz.',
      NAME_LABEL: 'Ismingiz',
      NAME_PLACEHOLDER: 'Masalan, Asilbek',
      PHONE_LABEL: 'Telefon raqam',
      PHONE_PLACEHOLDER: '+998 __ ___ __ __',
      COURSE_LABEL: 'Qiziqtirgan kurs',
      SUBMIT: 'Yuborish',
      SUCCESS_TITLE: 'Rahmat!',
      SUCCESS_BODY: 'Murojaatingiz qabul qilindi. Tez orada bog’lanamiz.',
      ERROR_RATE: 'Iltimos 30 daqiqadan keyin qayta urinib ko’ring.',
      ERROR_GENERIC: 'Xatolik. Iltimos qayta urinib ko’ring yoki telefon orqali bog’laning.'
    },
    NEWSLETTER: {
      TITLE: 'Yangiliklarga obuna',
      DESC: 'Yangi guruhlar va aksiyalar haqida xabardor bo&rsquo;ling.',
      PLACEHOLDER: 'Email manzilingiz',
      SUBMIT: 'Obuna bo&rsquo;lish'
    },
    FOOTER: {
      COL_SITE: 'Saytda',
      COL_CONTACT: 'Aloqa',
      OFFER: 'Ommaviy oferta',
      PRIVACY: 'Maxfiylik siyosati',
      RIGHTS: 'Barcha huquqlar himoyalangan.',
      QUOTE: '“Eng yaxshi sarmoya — kelajak uchun sarmoya.”'
    },
    SEO: {
      H1: 'Toshkentda Arab tili kurslari — CEFR, at-Tanall, Fonetika',
      P1: 'Zaman Akademiyasi 2022-yilda Toshkent shahrida ochilgan Arab tili o&rsquo;qitish markazi. Toshkentdagi yagona Akademiyalardan biri sifatida biz o&rsquo;quvchilarimizni nafaqat tilni o&rsquo;rganishga, balki CEFR (Common European Framework of Reference) va at-Tanall xalqaro sertifikatlariga tayyorlaymiz.',
      P2: 'Arab tili — Qur&rsquo;on tili, milliardlab musulmonning ibodat tili va dunyodagi eng katta 22 davlat rasmiy tili. Uni bilish diniy bilimlarni asl manbadan o&rsquo;rganish, Saudiya, BAA, Misr va boshqa arab davlatlarida ta&rsquo;lim olish, hamda xalqaro biznesda yangi imkoniyatlar ochish demakdir.',
      P3: 'Ustozlarimiz — C1/C2 darajadagi mutaxassislar, jumladan Misrdan kelgan native arab muallim. Haftasiga 4 marta dars, kichik guruhlar, doimiy nazorat va aniq metodika — bularning birlashmasi 10–12 oyda B2/C1 darajaga olib chiqadi.'
    }
  },

  /* ============================================================
   * ENGLISH
   * ============================================================ */
  en: {
    NAV: {
      COURSES: 'Courses',
      TEACHERS: 'Teachers',
      GALLERY: 'Gallery',
      RESULTS: 'Results',
      PRICING: 'Pricing',
      FAQ: 'FAQ',
      CONTACT: 'Contact',
      CTA: 'Free trial lesson'
    },
    HERO: {
      PILL: 'Since 2022 • 1 branch in Tashkent',
      TITLE_HTML:
        'Mastering\n          <span class="block">\n            <span class="italic">Arabic</span>\n            <span class="arabic-mark inline-block align-middle ml-2 text-[0.65em] translate-y-[-0.05em]">العربية</span>\n          </span>\n          <span class="block">is the best <span class="text-rose-500">investment</span>.</span>',
      DESC_HTML:
        'Zaman Academy — an Arabic-language centre in Tashkent preparing students for the CEFR and at-Tanall international certificates. C1/C2 instructors, a native Arab teacher and four lessons per week. <span class="text-zinc-900 font-medium">B2 or C1 in 10–12 months — guaranteed.</span>',
      CTA_PRIMARY: 'Book a free trial lesson',
      CTA_GHOST: 'See courses',
      STAT_1_LABEL_HTML: 'years of<br/>teaching',
      STAT_2_LABEL_HTML: 'months to<br/>B2 or C1',
      STAT_3_LABEL_HTML: 'lessons<br/>per week',
      STAT_4_LABEL_HTML: 'first lesson<br/>fully free'
    },
    ABOUT: {
      EYEBROW: '01 — About us',
      TITLE_HTML: 'Language —<br/><span class="italic">the key to</span><br/>your future.',
      QUOTE: '“The best investment is an investment in the future.”',
      P1_HTML:
        'Zaman Foreign Languages Academy was founded in 2022. For more than four years we have been preparing high-schoolers, university applicants, students and adults for the <span class="text-zinc-900">CEFR</span> and <span class="text-zinc-900">at-Tanall</span> international certificates.',
      P2: 'We are located in the Olmazor district, next to Chorsu bazaar. Our teachers are C1 and C2 specialists, including a native Arab instructor. We hold lessons four times a week and guarantee the result.',
      STAT_YEARS: 'years of teaching',
      STAT_STUDENTS: 'students',
      STAT_RATE: 'B2/C1 success rate',
      STAT_LEVELS: 'CEFR levels (A1–C2)'
    },
    COURSES: {
      EYEBROW: '02 — Courses',
      TITLE_HTML: 'Pick the right<br/><span class="italic">track</span> for you.',
      SUBHEAD_HTML: 'All of our courses are designed for students <span class="text-zinc-900">12 and older</span> — schoolchildren, applicants, university students and adults. First lesson is free.',
      C1_BADGE: 'flagship',
      C1_NAME_HTML: 'CEFR<br/><span class="italic">&amp; at-Tanall</span>',
      C1_DESC_HTML: 'Full preparation for international certificates. <strong class="text-zinc-900">B2 or C1</strong> in 10–12 months — result guaranteed.',
      C1_B1: '10–12 month program',
      C1_B2: '4 lessons per week',
      C1_B3: 'Lessons with a native Arab teacher',
      C1_B4: 'Certificate awarded',
      C1_UNIT: 'UZS / month',
      C2_BADGE: '3 months',
      C2_NAME_HTML: 'Phonetics<br/><span class="italic">&amp; reading</span>',
      C2_DESC_HTML: 'In just 3 months we guarantee you can <strong class="text-zinc-900">read any Arabic text without mistakes</strong>. The ideal start for beginners.',
      C2_B1: '3 month program',
      C2_B2: 'Letters and sounds',
      C2_B3: 'Tajweed fundamentals',
      C2_B4: 'Our most affordable course',
      C2_UNIT: 'UZS / month',
      C3_BADGE: 'premium',
      C3_NAME_HTML: 'Individual<br/><span class="italic">lessons</span>',
      C3_DESC: 'One student, one teacher. Maximum pace, a program built around you. The fastest path to a certificate.',
      C3_B1: '1-on-1 sessions',
      C3_B2: 'Personal schedule',
      C3_B3: 'Faster results',
      C3_B4: 'Custom program',
      C3_UNIT: 'UZS / month',
      CARD_CTA: 'Sign up →',
      SIDE_TITLE: 'Sarf and Nahw course',
      SIDE_DESC: 'A separate deep-dive into Arabic grammar — sarf (morphology) and nahw (syntax). Runs alongside the certificate-preparation programs.',
      SIDE_CTA: 'Details →'
    },
    TEACHERS: {
      EYEBROW: '03 — Teachers',
      TITLE: 'Experienced instructors.',
      CTA: 'All teachers →',
      MODAL_EDUCATION: 'Education',
      MODAL_CERTS: 'Certifications',
      MODAL_CONTACT: 'Contact via Telegram',
      YEARS_SUFFIX: 'years experience',
      MORE: 'More →'
    },
    WHY: {
      EYEBROW: '04 — Why us',
      TITLE_HTML: 'Why<br/><span class="italic">Zaman</span>.',
      SUBHEAD: 'There are many Arabic centres in Tashkent, but not all of them guarantee the result. Here is why students choose us.',
      W1_TITLE: 'C1 / C2 teachers',
      W1_DESC: 'Every instructor holds an international C1 or C2 certificate. A native Arab teacher also runs classes.',
      W2_TITLE: 'Result guaranteed',
      W2_DESC: 'We guarantee B2 or C1 in 10–12 months. The 3-month phonetics course guarantees you can read without mistakes.',
      W3_TITLE: '4 lessons per week',
      W3_DESC: 'Other centres run lessons 2–3 times a week. We run four. Faster, deeper, more effective.',
      W4_TITLE: 'First lesson free',
      W4_DESC: 'Come first, see the methodology, the teacher and the group. If you like it — we continue.',
      W5_TITLE: 'Certificate',
      W5_DESC: 'At the end of each course every student receives the Academy certificate.',
      W6_TITLE: 'Discounts',
      W6_DESC: 'Family of 2+ — 10%, bring a friend — 10%, early payment — 10%.'
    },
    PROCESS: {
      EYEBROW: '05 — Process',
      TITLE_HTML: 'Three steps to<br/><span class="italic">results</span>.',
      S1_TITLE: 'Get in touch',
      S1_DESC: 'Reach out via Telegram, phone or Instagram. We will help you choose the right course.',
      S2_TITLE: 'Join a group',
      S2_DESC: 'Pick a schedule that fits, come to the free trial lesson — we will assess your level.',
      S3_TITLE: 'Start learning',
      S3_DESC: 'Four lessons per week, ongoing assessment and your target level by the agreed date.'
    },
    RESULTS: {
      EYEBROW: '06 — Results',
      TITLE: 'Real student outcomes.',
      LABEL_FROM: 'Start',
      LABEL_TO: 'Outcome',
      LABEL_CERT: 'Certificate'
    },
    CERTS: {
      EYEBROW: '07 — Certificates',
      TITLE_HTML: 'State-recognised<br/><span class="italic">results</span>.',
      DESC: 'Our students earn the official Arabic-language certificate issued by the Knowledge Assessment Agency of the Republic of Uzbekistan at B1, B2 and C1 levels.',
      CTA_VERIFY: 'Verify a certificate →'
    },
    GALLERY: {
      EYEBROW: '08 — Gallery',
      TITLE: 'Inside the academy.',
      CTA: 'All photos →'
    },
    PRICING: {
      EYEBROW: '09 — Pricing',
      TITLE_HTML: 'Clear pricing.<br/><span class="italic text-zinc-400">No hidden fees.</span>',
      SUBHEAD: 'Cash, Uzcard, Click and mobile-payment apps accepted. Monthly installments available.',
      COL_COURSE: 'Course',
      COL_DURATION: 'Duration',
      COL_WEEKLY: 'Per week',
      COL_PRICE: 'Price',
      R1_NAME: 'Phonetics',
      R1_SUB: 'Read without mistakes — guaranteed',
      R1_DURATION: '3 months',
      R1_WEEKLY: '4 lessons',
      R1_UNIT: 'UZS / month',
      R2_NAME: 'CEFR &amp; at-Tanall',
      R2_BADGE: 'Most popular',
      R2_SUB: 'B2 or C1 — guaranteed',
      R2_DURATION: '10–12 months',
      R2_WEEKLY: '4 lessons',
      R2_UNIT: 'UZS / month',
      R3_NAME: 'Individual lessons',
      R3_SUB: '1-on-1 format, fastest pace',
      R3_DURATION: 'flexible',
      R3_WEEKLY: 'by schedule',
      R3_UNIT: 'UZS / month',
      DISC_FAMILY_HTML: '<span class="text-white">10%</span> off — family of 2+',
      DISC_FRIEND_HTML: '<span class="text-white">10%</span> off — bring a friend',
      DISC_EARLY_HTML: '<span class="text-white">10%</span> off — pay by the 20th',
      FOOTNOTE: '* Textbooks are billed separately depending on level and course. Prices are reviewed every 12 months.'
    },
    FAQ: {
      EYEBROW: '10 — FAQ',
      TITLE_HTML: 'Frequently<br/>asked<br/><span class="italic">questions</span>.',
      SUB: 'Didn’t find your answer? Reach out — our team is on 09:00–20:00.',
      Q1: 'Is the first lesson really free?',
      A1: 'Yes — the first lesson of any course is fully free. We assess your level, you meet the teacher and see the group. If it is not a fit — no obligation.',
      Q2: 'Can I pay in instalments?',
      A2: 'Yes, monthly instalments are available. The only condition: you may not fall behind on lessons already attended. We do not work with credit or third-party rassrochka.',
      Q3: 'What is the age range?',
      A3: 'All of our courses are for students aged 12 and older — schoolchildren, university applicants, students, working professionals and adults.',
      Q4: 'Do you offer online lessons?',
      A4: 'For now lessons run on-site in Tashkent, at our branch in the Olmazor district. Online Phonetics and CEFR/at-Tanall courses are on the roadmap for closer to summer.',
      Q5: 'Are refunds available?',
      A5: 'Yes. If a student stops the course and there is a remaining balance, it will be refunded.',
      Q6: 'Are there any promotions right now?',
      A6: 'There is no special seasonal promotion at the moment, but three permanent discounts always apply: family of 2+ (10%), bring a friend (10%) and payment by the 20th of the month (10%).'
    },
    CONTACT: {
      EYEBROW: '11 — Contact',
      TITLE_HTML: 'Your first lesson<br/>is <span class="italic">free</span> — come<br/>and meet us.',
      INTRO: 'Reach out through any of the channels below or just leave your details — we will get back to you within one business day.',
      OPEN_YANDEX: 'Yandex Maps',
      OPEN_GOOGLE: 'Google Maps',
      OPEN_2GIS: '2GIS',
      EMAIL_LABEL: 'Email',
      ADDR_LABEL: 'Address',
      ADDR_TEXT_HTML: 'Tashkent, Olmazor district,<br/>Qiziltut tor street 84-1<br/><span class="text-zinc-500">Near Chorsu bazaar</span>',
      HOURS_LABEL: 'Opening hours',
      HOURS_TEXT_HTML: 'Mon–Sat: 09:00–20:00<br/>Sunday: 12:30–17:00',
      HOURS_NOTE: 'Religious holidays and New Year — closed',
      PHONES_LABEL: 'Additional numbers'
    },
    LEAD: {
      TITLE: 'Sign up for a trial lesson',
      DESC: 'Leave your details — we’ll reach out and pick a time that works.',
      NAME_LABEL: 'Your name',
      NAME_PLACEHOLDER: 'e.g. Asilbek',
      PHONE_LABEL: 'Phone number',
      PHONE_PLACEHOLDER: '+998 __ ___ __ __',
      COURSE_LABEL: 'Course of interest',
      SUBMIT: 'Send',
      SUCCESS_TITLE: 'Thank you!',
      SUCCESS_BODY: 'We received your request and will get back to you shortly.',
      ERROR_RATE: 'Please try again in 30 minutes.',
      ERROR_GENERIC: 'Something went wrong. Please try again or call us.'
    },
    NEWSLETTER: {
      TITLE: 'Subscribe to updates',
      DESC: 'Get notified about new groups and promotions.',
      PLACEHOLDER: 'Your email',
      SUBMIT: 'Subscribe'
    },
    FOOTER: {
      COL_SITE: 'Site',
      COL_CONTACT: 'Contact',
      OFFER: 'Public offer',
      PRIVACY: 'Privacy policy',
      RIGHTS: 'All rights reserved.',
      QUOTE: '“The best investment is an investment in the future.”'
    },
    SEO: {
      H1: 'Arabic-language courses in Tashkent — CEFR, at-Tanall, Phonetics',
      P1: 'Zaman Academy is an Arabic-language teaching centre opened in 2022 in Tashkent. As one of the city’s few specialised academies we prepare students not only to learn the language but also to pass the CEFR (Common European Framework of Reference) and at-Tanall international certificates.',
      P2: 'Arabic is the language of the Qur’an, the prayer language of over a billion Muslims and the official language of 22 of the world’s countries. Knowing it opens up Islamic studies from primary sources, education in Saudi Arabia, the UAE, Egypt and other Arab states, and new opportunities in international business.',
      P3: 'Our instructors are C1/C2 specialists, including a native Arab teacher from Egypt. Four lessons per week, small groups, continuous assessment and a clear methodology together bring students to B2/C1 in 10–12 months.'
    }
  },

  /* ============================================================
   * RUSSIAN
   * ============================================================ */
  ru: {
    NAV: {
      COURSES: 'Курсы',
      TEACHERS: 'Преподаватели',
      GALLERY: 'Галерея',
      RESULTS: 'Результаты',
      PRICING: 'Цены',
      FAQ: 'Вопросы',
      CONTACT: 'Контакты',
      CTA: 'Бесплатный пробный урок'
    },
    HERO: {
      PILL: 'С 2022 года • 1 филиал в Ташкенте',
      TITLE_HTML:
        'Освоить\n          <span class="block">\n            <span class="italic">арабский</span>\n            <span class="arabic-mark inline-block align-middle ml-2 text-[0.65em] translate-y-[-0.05em]">العربية</span>\n          </span>\n          <span class="block">— лучшая <span class="text-rose-500">инвестиция</span>.</span>',
      DESC_HTML:
        'Академия Zaman — центр арабского языка в Ташкенте, который готовит к международным сертификатам CEFR и at-Tanall. Преподаватели уровня C1/C2, носитель арабского и 4 занятия в неделю. <span class="text-zinc-900 font-medium">B2 или C1 за 10–12 месяцев — с гарантией.</span>',
      CTA_PRIMARY: 'Записаться на бесплатный урок',
      CTA_GHOST: 'Смотреть курсы',
      STAT_1_LABEL_HTML: 'лет опыта<br/>преподавания',
      STAT_2_LABEL_HTML: 'месяцев до<br/>B2 или C1',
      STAT_3_LABEL_HTML: 'занятий<br/>в неделю',
      STAT_4_LABEL_HTML: 'первый урок<br/>полностью бесплатно'
    },
    ABOUT: {
      EYEBROW: '01 — О нас',
      TITLE_HTML: 'Язык —<br/><span class="italic">ключ к</span><br/>будущему.',
      QUOTE: '«Лучшая инвестиция — инвестиция в будущее.»',
      P1_HTML:
        'Академия иностранных языков Zaman основана в 2022 году. Более четырёх лет мы готовим школьников, абитуриентов, студентов и взрослых к международным сертификатам <span class="text-zinc-900">CEFR</span> и <span class="text-zinc-900">at-Tanall</span>.',
      P2: 'Находимся в Алмазарском районе, рядом с базаром Чорсу. Наши преподаватели — специалисты уровня C1 и C2, среди них носитель арабского языка. Занятия проходят 4 раза в неделю, результат — с гарантией.',
      STAT_YEARS: 'лет опыта',
      STAT_STUDENTS: 'студентов',
      STAT_RATE: 'успешных B2/C1',
      STAT_LEVELS: 'уровни CEFR (A1–C2)'
    },
    COURSES: {
      EYEBROW: '02 — Курсы',
      TITLE_HTML: 'Выберите<br/>подходящее <span class="italic">направление</span>.',
      SUBHEAD_HTML: 'Все наши курсы рассчитаны на учеников <span class="text-zinc-900">от 12 лет</span> — школьники, абитуриенты, студенты и взрослые. Первый урок — бесплатный.',
      C1_BADGE: 'флагман',
      C1_NAME_HTML: 'CEFR<br/><span class="italic">&amp; at-Tanall</span>',
      C1_DESC_HTML: 'Полная подготовка к международным сертификатам. <strong class="text-zinc-900">B2 или C1</strong> за 10–12 месяцев — с гарантией результата.',
      C1_B1: 'Программа 10–12 месяцев',
      C1_B2: '4 занятия в неделю',
      C1_B3: 'Уроки с носителем арабского',
      C1_B4: 'Выдаётся сертификат',
      C1_UNIT: 'сум / месяц',
      C2_BADGE: '3 месяца',
      C2_NAME_HTML: 'Фонетика<br/><span class="italic">и чтение</span>',
      C2_DESC_HTML: 'За 3 месяца гарантируем, что вы будете <strong class="text-zinc-900">читать арабский текст без ошибок</strong>. Идеальный старт для начинающих.',
      C2_B1: 'Программа 3 месяца',
      C2_B2: 'Буквы и звуки',
      C2_B3: 'Основы таджвида',
      C2_B4: 'Самый доступный курс',
      C2_UNIT: 'сум / месяц',
      C3_BADGE: 'премиум',
      C3_NAME_HTML: 'Индивидуальные<br/><span class="italic">занятия</span>',
      C3_DESC: 'Один ученик — один преподаватель. Максимальный темп, программа только под вас. Самый быстрый путь к сертификату.',
      C3_B1: 'Формат 1-на-1',
      C3_B2: 'Личное расписание',
      C3_B3: 'Быстрее результат',
      C3_B4: 'Индивидуальная программа',
      C3_UNIT: 'сум / месяц',
      CARD_CTA: 'Записаться →',
      SIDE_TITLE: 'Курс «Сарф и Нахв»',
      SIDE_DESC: 'Отдельный углублённый курс по арабской грамматике — сарф (морфология) и нахв (синтаксис). Ведётся параллельно с подготовкой к сертификатам.',
      SIDE_CTA: 'Подробнее →'
    },
    TEACHERS: {
      EYEBROW: '03 — Преподаватели',
      TITLE: 'Опытные преподаватели.',
      CTA: 'Все преподаватели →',
      MODAL_EDUCATION: 'Образование',
      MODAL_CERTS: 'Сертификаты',
      MODAL_CONTACT: 'Связаться в Telegram',
      YEARS_SUFFIX: 'лет опыта',
      MORE: 'Подробнее →'
    },
    WHY: {
      EYEBROW: '04 — Отличия',
      TITLE_HTML: 'Почему<br/><span class="italic">Zaman</span>.',
      SUBHEAD: 'В Ташкенте много центров арабского языка, но не все из них гарантируют результат. Вот почему ученики выбирают нас.',
      W1_TITLE: 'Преподаватели C1 / C2',
      W1_DESC: 'Все преподаватели — специалисты с международным сертификатом C1 или C2. Уроки также ведёт носитель арабского языка.',
      W2_TITLE: 'Гарантия результата',
      W2_DESC: 'Гарантируем B2 или C1 за 10–12 месяцев. На курсе фонетики (3 месяца) гарантируем чтение без ошибок.',
      W3_TITLE: '4 занятия в неделю',
      W3_DESC: 'В других центрах — 2–3 занятия в неделю. У нас — четыре. Быстрее, глубже, эффективнее.',
      W4_TITLE: 'Первый урок бесплатно',
      W4_DESC: 'Сначала придите, посмотрите методику, преподавателя и группу. Понравится — продолжаем.',
      W5_TITLE: 'Сертификат',
      W5_DESC: 'По завершении курса каждый ученик получает сертификат Академии.',
      W6_TITLE: 'Скидки',
      W6_DESC: 'Семья 2+ человека — 10%, привели друга — 10%, оплата заранее — 10%.'
    },
    PROCESS: {
      EYEBROW: '05 — Процесс',
      TITLE_HTML: 'Три шага<br/>к <span class="italic">результату</span>.',
      S1_TITLE: 'Обратитесь к нам',
      S1_DESC: 'Напишите в Telegram, по телефону или в Instagram. Поможем выбрать подходящий курс.',
      S2_TITLE: 'Запишитесь в группу',
      S2_DESC: 'Выберите удобное расписание, придите на бесплатный пробный урок — определим ваш уровень.',
      S3_TITLE: 'Начните заниматься',
      S3_DESC: 'Четыре занятия в неделю, постоянный контроль и нужный уровень в оговорённый срок.'
    },
    RESULTS: {
      EYEBROW: '06 — Результаты',
      TITLE: 'Реальные результаты студентов.',
      LABEL_FROM: 'Старт',
      LABEL_TO: 'Результат',
      LABEL_CERT: 'Сертификат'
    },
    CERTS: {
      EYEBROW: '07 — Сертификаты',
      TITLE_HTML: 'Государственно<br/><span class="italic">признанные</span> результаты.',
      DESC: 'Наши студенты получают официальный сертификат арабского языка, выданный Агентством по оценке знаний и компетенций Республики Узбекистан, уровни B1, B2 и C1.',
      CTA_VERIFY: 'Проверить сертификат →'
    },
    GALLERY: {
      EYEBROW: '08 — Галерея',
      TITLE: 'Изнутри академии.',
      CTA: 'Все фото →'
    },
    PRICING: {
      EYEBROW: '09 — Цены',
      TITLE_HTML: 'Понятные цены.<br/><span class="italic text-zinc-400">Никаких скрытых платежей.</span>',
      SUBHEAD: 'Принимаем наличные, Uzcard, Click и платёжные приложения. Доступна рассрочка на 1 месяц.',
      COL_COURSE: 'Курс',
      COL_DURATION: 'Длительность',
      COL_WEEKLY: 'В неделю',
      COL_PRICE: 'Цена',
      R1_NAME: 'Фонетика',
      R1_SUB: 'Гарантия чтения без ошибок',
      R1_DURATION: '3 мес.',
      R1_WEEKLY: '4 урока',
      R1_UNIT: 'сум / мес.',
      R2_NAME: 'CEFR &amp; at-Tanall',
      R2_BADGE: 'Самый популярный',
      R2_SUB: 'Гарантия B2 или C1',
      R2_DURATION: '10–12 мес.',
      R2_WEEKLY: '4 урока',
      R2_UNIT: 'сум / мес.',
      R3_NAME: 'Индивидуальные занятия',
      R3_SUB: 'Формат 1-на-1, максимальный темп',
      R3_DURATION: 'гибко',
      R3_WEEKLY: 'по расписанию',
      R3_UNIT: 'сум / мес.',
      DISC_FAMILY_HTML: '<span class="text-white">10%</span> скидка — семья 2+ человека',
      DISC_FRIEND_HTML: '<span class="text-white">10%</span> скидка — привели друга',
      DISC_EARLY_HTML: '<span class="text-white">10%</span> скидка — оплата до 20-го числа',
      FOOTNOTE: '* Учебники оплачиваются отдельно, цена зависит от уровня и курса. Цены пересматриваются раз в 12 месяцев.'
    },
    FAQ: {
      EYEBROW: '10 — Вопросы',
      TITLE_HTML: 'Часто<br/>задаваемые<br/><span class="italic">вопросы</span>.',
      SUB: 'Не нашли ответ? Напишите нам — мы на связи 09:00–20:00.',
      Q1: 'Первый урок действительно бесплатный?',
      A1: 'Да, первый урок любого курса полностью бесплатен. Определяем ваш уровень, вы знакомитесь с преподавателем и группой. Не подойдёт — никаких обязательств.',
      Q2: 'Можно ли оплачивать в рассрочку?',
      A2: 'Да, оплата ежемесячно. Главное условие — не накапливать задолженность по уже пройденным занятиям. Кредит или рассрочка через банки не используются.',
      Q3: 'Какие возрастные ограничения?',
      A3: 'Все наши курсы рассчитаны на учеников от 12 лет: школьники, абитуриенты, студенты, работающие и взрослые — наша аудитория.',
      Q4: 'Есть ли онлайн-уроки?',
      A4: 'Сейчас занятия проходят в Ташкенте, в нашем филиале в Алмазарском районе. Онлайн-курсы по фонетике и CEFR/at-Tanall планируем запустить ближе к лету.',
      Q5: 'Возвращаете ли деньги?',
      A5: 'Да. Если студент завершает обучение и на балансе остаются неизрасходованные средства — они возвращаются.',
      Q6: 'Есть ли сейчас акции?',
      A6: 'Специальной сезонной акции сейчас нет, но три постоянных скидки действуют всегда: семья 2+ ученика (10%), привести друга (10%) и оплата до 20-го числа месяца (10%).'
    },
    CONTACT: {
      EYEBROW: '11 — Контакты',
      TITLE_HTML: 'Первый урок<br/><span class="italic">бесплатно</span> —<br/>приходите знакомиться.',
      INTRO: 'Свяжитесь с нами по любому из каналов ниже или просто оставьте заявку — мы перезвоним в течение одного рабочего дня.',
      OPEN_YANDEX: 'Yandex Карты',
      OPEN_GOOGLE: 'Google Карты',
      OPEN_2GIS: '2GIS',
      EMAIL_LABEL: 'Email',
      ADDR_LABEL: 'Адрес',
      ADDR_TEXT_HTML: 'г. Ташкент, Алмазарский р-н,<br/>ул. Кизилтут тор 84-1<br/><span class="text-zinc-500">Рядом с базаром Чорсу</span>',
      HOURS_LABEL: 'Часы работы',
      HOURS_TEXT_HTML: 'Пн–Сб: 09:00–20:00<br/>Воскресенье: 12:30–17:00',
      HOURS_NOTE: 'Религиозные праздники и Новый год — закрыто',
      PHONES_LABEL: 'Дополнительные номера'
    },
    LEAD: {
      TITLE: 'Запись на пробный урок',
      DESC: 'Оставьте данные — мы свяжемся и подберём удобное время.',
      NAME_LABEL: 'Ваше имя',
      NAME_PLACEHOLDER: 'Например, Асылбек',
      PHONE_LABEL: 'Номер телефона',
      PHONE_PLACEHOLDER: '+998 __ ___ __ __',
      COURSE_LABEL: 'Интересующий курс',
      SUBMIT: 'Отправить',
      SUCCESS_TITLE: 'Спасибо!',
      SUCCESS_BODY: 'Заявка принята. Скоро свяжемся.',
      ERROR_RATE: 'Попробуйте ещё раз через 30 минут.',
      ERROR_GENERIC: 'Что-то пошло не так. Попробуйте снова или позвоните нам.'
    },
    NEWSLETTER: {
      TITLE: 'Подписка на обновления',
      DESC: 'Получайте уведомления о новых группах и акциях.',
      PLACEHOLDER: 'Ваш email',
      SUBMIT: 'Подписаться'
    },
    FOOTER: {
      COL_SITE: 'Сайт',
      COL_CONTACT: 'Контакты',
      OFFER: 'Публичная оферта',
      PRIVACY: 'Политика конфиденциальности',
      RIGHTS: 'Все права защищены.',
      QUOTE: '«Лучшая инвестиция — инвестиция в будущее.»'
    },
    SEO: {
      H1: 'Курсы арабского языка в Ташкенте — CEFR, at-Tanall, фонетика',
      P1: 'Академия Zaman — центр арабского языка, открытый в 2022 году в Ташкенте. Как одна из немногих специализированных академий мы готовим студентов не только к изучению языка, но и к международным сертификатам CEFR (Common European Framework of Reference) и at-Tanall.',
      P2: 'Арабский — язык Корана, молитвенный язык миллиардов мусульман и официальный язык 22 стран мира. Его знание открывает доступ к исламскому знанию из первоисточников, обучению в Саудовской Аравии, ОАЭ, Египте и других арабских странах, а также новые возможности в международном бизнесе.',
      P3: 'Наши преподаватели — специалисты уровня C1/C2, в том числе носитель арабского из Египта. 4 занятия в неделю, маленькие группы, постоянная проверка и чёткая методика — всё вместе приводит студентов к B2/C1 за 10–12 месяцев.'
    }
  }
};
