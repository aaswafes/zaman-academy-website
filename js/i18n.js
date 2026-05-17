/* Zaman Akademiyasi — i18n bundles.
 * UZ is authoritative. EN/RU are review-ready stubs — owner should proof.
 *
 * Markup contract:
 *   <span data-i18n="HERO.TITLE">…</span>
 *   <input data-i18n-attr="placeholder:LEAD.NAME_PLACEHOLDER" />
 *
 * Use setLang(code) from main.js to switch. Defaults to localStorage.zaman_lang,
 * then navigator.language, then 'uz'. */

window.STRINGS = {

  /* ===== UZBEK (authoritative) ===== */
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
      TITLE_1: 'Arab tilini',
      TITLE_2: 'o’zlashtirish',
      TITLE_3: 'eng yaxshi',
      TITLE_4: 'sarmoya.',
      DESC: 'Zaman Akademiyasi — CEFR va at-Tanall xalqaro sertifikatlariga tayyorlovchi Arab tili markazi. C1/C2 darajadagi ustozlar, native arab muallim va haftasiga 4 marta dars.',
      DESC_STRONG: '10–12 oyda B2 yoki C1 darajasiga — kafolat bilan.',
      CTA_PRIMARY: 'Bepul sinov darsiga yozilish',
      CTA_GHOST: 'Kurslarni ko’rish'
    },
    ABOUT: {
      EYEBROW: '01 — Biz haqimizda',
      TITLE: 'Til — kelajak uchun kalit.',
      QUOTE: '“Eng yaxshi sarmoya — kelajak uchun sarmoya.”',
      P1: 'Zaman Xorijiy Tillar Akademiyasi 2022-yilda asos solingan.',
      P2: 'Olmazor tumanida, Chorsu bozori yaqinida joylashganmiz.',
      STAT_YEARS: 'yillik tajriba',
      STAT_STUDENTS: 'o’quvchi',
      STAT_RATE: 'B2/C1 muvaffaqiyat',
      STAT_LEVELS: 'CEFR darajalari'
    },
    COURSES: {
      EYEBROW: '02 — Kurslar',
      TITLE: 'Sizga mos yo’nalish tanlang.'
    },
    TEACHERS: {
      EYEBROW: '03 — Ustozlar',
      TITLE: 'Tajribali ustozlar.',
      CTA: 'Barcha ustozlar →',
      MODAL_EDUCATION: 'Ta’lim',
      MODAL_CERTS: 'Sertifikatlar',
      MODAL_CONTACT: 'Telegram orqali bog’lanish'
    },
    WHY: {
      EYEBROW: '04 — Farqimiz',
      TITLE: 'Nima uchun Zaman.'
    },
    PROCESS: {
      EYEBROW: '05 — Jarayon',
      TITLE: 'Uch qadamda natijaga.'
    },
    RESULTS: {
      EYEBROW: '06 — Natijalar',
      TITLE: 'Real o’quvchi natijalari.',
      LABEL_FROM: 'Boshlanish',
      LABEL_TO: 'Natija',
      LABEL_CERT: 'Sertifikat'
    },
    CERTS: {
      EYEBROW: '07 — Sertifikatlar',
      TITLE: 'Davlat tomonidan tan olingan natijalar.',
      DESC: 'O’quvchilarimiz O’zbekiston Respublikasi Bilim va malakalarni baholash agentligi tomonidan beriladigan rasmiy Arab tili sertifikatini B1, B2 va C1 darajalarida qo’lga kiritmoqdalar.',
      CTA_VERIFY: 'Sertifikatni tekshirish →'
    },
    GALLERY: {
      EYEBROW: '08 — Galereya',
      TITLE: 'Akademiya ichidan.',
      CTA: 'Barcha rasmlar →'
    },
    PRICING: {
      EYEBROW: '09 — Narxlar',
      TITLE: 'Aniq narxlar. Yashirin to’lovlar yo’q.'
    },
    FAQ: {
      EYEBROW: '10 — Savol-javob',
      TITLE: 'Tez-tez so’raladigan savollar.',
      SUB: 'Javob topilmadimi? Bemalol murojaat qiling — operatorlarimiz 09:00 dan 20:00 gacha xizmatingizda.'
    },
    CONTACT: {
      EYEBROW: '11 — Aloqa',
      TITLE: 'Birinchi dars bepul — keling, tanishamiz.',
      OPEN_YANDEX: 'Yandex Maps',
      OPEN_GOOGLE: 'Google Maps',
      OPEN_2GIS: '2GIS'
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
      DESC: 'Yangi guruhlar va aksiyalar haqida xabardor bo’ling.',
      PLACEHOLDER: 'Email manzilingiz',
      SUBMIT: 'Obuna bo’lish'
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
      P1: 'Zaman Akademiyasi 2022-yilda Toshkent shahrida ochilgan Arab tili o’qitish markazi. Toshkentdagi yagona Akademiyalardan biri sifatida biz o’quvchilarimizni nafaqat tilni o’rganishga, balki CEFR (Common European Framework of Reference) va at-Tanall xalqaro sertifikatlariga tayyorlaymiz.',
      P2: 'Arab tili — Qur’on tili, milliardlab musulmonning ibodat tili va dunyodagi eng katta 22 davlat rasmiy tili. Uni bilish diniy bilimlarni asl manbadan o’rganish, Saudiya, BAA, Misr va boshqa arab davlatlarida ta’lim olish, hamda xalqaro biznesda yangi imkoniyatlar ochish demakdir.',
      P3: 'Ustozlarimiz — C1/C2 darajadagi mutaxassislar, jumladan Misrdan kelgan native arab muallim. Haftasiga 4 marta dars, kichik guruhlar, doimiy nazorat va aniq metodika — bularning birlashmasi 10–12 oyda B2/C1 darajaga olib chiqadi.'
    }
  },

  /* ===== ENGLISH (review needed) ===== */
  en: {
    NAV: {
      COURSES: 'Courses', TEACHERS: 'Teachers', GALLERY: 'Gallery', RESULTS: 'Results',
      PRICING: 'Pricing', FAQ: 'FAQ', CONTACT: 'Contact', CTA: 'Free trial lesson'
    },
    HERO: {
      PILL: 'Since 2022 • 1 branch in Tashkent',
      TITLE_1: 'Mastering', TITLE_2: 'Arabic', TITLE_3: 'is the best', TITLE_4: 'investment.',
      DESC: 'Zaman Academy — an Arabic-language centre in Tashkent preparing students for the CEFR and at-Tanall international certificates. C1/C2 instructors, a native Arab teacher and four lessons per week.',
      DESC_STRONG: 'B2 or C1 in 10–12 months — guaranteed.',
      CTA_PRIMARY: 'Book a free trial lesson', CTA_GHOST: 'See courses'
    },
    ABOUT: {
      EYEBROW: '01 — About us', TITLE: 'Language is the key to your future.',
      QUOTE: '“The best investment is an investment in the future.”',
      P1: 'Zaman Foreign Languages Academy was founded in 2022.',
      P2: 'We are located in the Olmazor district, next to Chorsu bazaar.',
      STAT_YEARS: 'years of teaching', STAT_STUDENTS: 'students',
      STAT_RATE: 'B2/C1 success rate', STAT_LEVELS: 'CEFR levels'
    },
    COURSES: { EYEBROW: '02 — Courses', TITLE: 'Pick the right track.' },
    TEACHERS: {
      EYEBROW: '03 — Teachers', TITLE: 'Experienced instructors.',
      CTA: 'All teachers →', MODAL_EDUCATION: 'Education',
      MODAL_CERTS: 'Certifications', MODAL_CONTACT: 'Contact via Telegram'
    },
    WHY: { EYEBROW: '04 — Why us', TITLE: 'Why Zaman.' },
    PROCESS: { EYEBROW: '05 — Process', TITLE: 'Three steps to results.' },
    RESULTS: {
      EYEBROW: '06 — Results', TITLE: 'Real student outcomes.',
      LABEL_FROM: 'Start', LABEL_TO: 'Outcome', LABEL_CERT: 'Certificate'
    },
    CERTS: {
      EYEBROW: '07 — Certificates', TITLE: 'State-recognized results.',
      DESC: 'Our students earn the official Arabic-language certificate issued by the Knowledge Assessment Agency of the Republic of Uzbekistan at B1, B2 and C1 levels.',
      CTA_VERIFY: 'Verify a certificate →'
    },
    GALLERY: { EYEBROW: '08 — Gallery', TITLE: 'Inside the academy.', CTA: 'All photos →' },
    PRICING: { EYEBROW: '09 — Pricing', TITLE: 'Clear pricing. No hidden fees.' },
    FAQ: {
      EYEBROW: '10 — FAQ', TITLE: 'Frequently asked questions.',
      SUB: 'Didn’t find your answer? Reach out — our team is on 09:00–20:00.'
    },
    CONTACT: {
      EYEBROW: '11 — Contact', TITLE: 'Your first lesson is free — come meet us.',
      OPEN_YANDEX: 'Yandex Maps', OPEN_GOOGLE: 'Google Maps', OPEN_2GIS: '2GIS'
    },
    LEAD: {
      TITLE: 'Sign up for a trial lesson',
      DESC: 'Leave your details — we’ll reach out and pick a time that works.',
      NAME_LABEL: 'Your name', NAME_PLACEHOLDER: 'e.g. Asilbek',
      PHONE_LABEL: 'Phone number', PHONE_PLACEHOLDER: '+998 __ ___ __ __',
      COURSE_LABEL: 'Course of interest', SUBMIT: 'Send',
      SUCCESS_TITLE: 'Thank you!', SUCCESS_BODY: 'We received your request and will get back to you shortly.',
      ERROR_RATE: 'Please try again in 30 minutes.',
      ERROR_GENERIC: 'Something went wrong. Please try again or call us.'
    },
    NEWSLETTER: {
      TITLE: 'Subscribe to updates',
      DESC: 'Get notified about new groups and promotions.',
      PLACEHOLDER: 'Your email', SUBMIT: 'Subscribe'
    },
    FOOTER: {
      COL_SITE: 'Site', COL_CONTACT: 'Contact', OFFER: 'Public offer',
      PRIVACY: 'Privacy policy', RIGHTS: 'All rights reserved.',
      QUOTE: '“The best investment is an investment in the future.”'
    },
    SEO: {
      H1: 'Arabic-language courses in Tashkent — CEFR, at-Tanall, Phonetics',
      P1: 'Zaman Academy is an Arabic-language teaching centre opened in 2022 in Tashkent. As one of the city’s few specialised academies we prepare students not only to learn the language but also to pass the CEFR (Common European Framework of Reference) and at-Tanall international certificates.',
      P2: 'Arabic is the language of the Qur’an, the prayer language of over a billion Muslims and the official language of 22 of the world’s countries. Knowing it opens up Islamic studies from primary sources, education in Saudi Arabia, the UAE, Egypt and other Arab states, and new opportunities in international business.',
      P3: 'Our instructors are C1/C2 specialists, including a native Arab teacher from Egypt. Four lessons per week, small groups, continuous assessment and a clear methodology together bring students to B2/C1 in 10–12 months.'
    }
  },

  /* ===== RUSSIAN (review needed) ===== */
  ru: {
    NAV: {
      COURSES: 'Курсы', TEACHERS: 'Преподаватели', GALLERY: 'Галерея', RESULTS: 'Результаты',
      PRICING: 'Цены', FAQ: 'Вопросы', CONTACT: 'Контакты', CTA: 'Бесплатный пробный урок'
    },
    HERO: {
      PILL: 'С 2022 года • 1 филиал в Ташкенте',
      TITLE_1: 'Освоить', TITLE_2: 'арабский', TITLE_3: '— лучшая', TITLE_4: 'инвестиция.',
      DESC: 'Академия Zaman — центр арабского языка в Ташкенте, который готовит к международным сертификатам CEFR и at-Tanall. Преподаватели уровня C1/C2, носитель арабского и 4 занятия в неделю.',
      DESC_STRONG: 'B2 или C1 за 10–12 месяцев — с гарантией.',
      CTA_PRIMARY: 'Записаться на бесплатный урок', CTA_GHOST: 'Смотреть курсы'
    },
    ABOUT: {
      EYEBROW: '01 — О нас', TITLE: 'Язык — ключ к будущему.',
      QUOTE: '«Лучшая инвестиция — инвестиция в будущее.»',
      P1: 'Академия иностранных языков Zaman была основана в 2022 году.',
      P2: 'Мы находимся в Алмазарском районе, рядом с базаром Чорсу.',
      STAT_YEARS: 'лет опыта', STAT_STUDENTS: 'студентов',
      STAT_RATE: 'успешных B2/C1', STAT_LEVELS: 'уровни CEFR'
    },
    COURSES: { EYEBROW: '02 — Курсы', TITLE: 'Выберите подходящее направление.' },
    TEACHERS: {
      EYEBROW: '03 — Преподаватели', TITLE: 'Опытные преподаватели.',
      CTA: 'Все преподаватели →', MODAL_EDUCATION: 'Образование',
      MODAL_CERTS: 'Сертификаты', MODAL_CONTACT: 'Связаться в Telegram'
    },
    WHY: { EYEBROW: '04 — Отличия', TITLE: 'Почему Zaman.' },
    PROCESS: { EYEBROW: '05 — Процесс', TITLE: 'Три шага к результату.' },
    RESULTS: {
      EYEBROW: '06 — Результаты', TITLE: 'Реальные результаты студентов.',
      LABEL_FROM: 'Старт', LABEL_TO: 'Результат', LABEL_CERT: 'Сертификат'
    },
    CERTS: {
      EYEBROW: '07 — Сертификаты', TITLE: 'Государственно признанные результаты.',
      DESC: 'Наши студенты получают официальный сертификат арабского языка, выданный Агентством по оценке знаний и компетенций Республики Узбекистан, уровни B1, B2 и C1.',
      CTA_VERIFY: 'Проверить сертификат →'
    },
    GALLERY: { EYEBROW: '08 — Галерея', TITLE: 'Изнутри академии.', CTA: 'Все фото →' },
    PRICING: { EYEBROW: '09 — Цены', TITLE: 'Понятные цены. Никаких скрытых платежей.' },
    FAQ: {
      EYEBROW: '10 — Вопросы', TITLE: 'Часто задаваемые вопросы.',
      SUB: 'Не нашли ответ? Напишите нам — мы на связи 09:00–20:00.'
    },
    CONTACT: {
      EYEBROW: '11 — Контакты', TITLE: 'Первый урок бесплатно — приходите знакомиться.',
      OPEN_YANDEX: 'Yandex Карты', OPEN_GOOGLE: 'Google Карты', OPEN_2GIS: '2GIS'
    },
    LEAD: {
      TITLE: 'Запись на пробный урок',
      DESC: 'Оставьте данные — мы свяжемся и подберём удобное время.',
      NAME_LABEL: 'Ваше имя', NAME_PLACEHOLDER: 'Например, Асылбек',
      PHONE_LABEL: 'Номер телефона', PHONE_PLACEHOLDER: '+998 __ ___ __ __',
      COURSE_LABEL: 'Интересующий курс', SUBMIT: 'Отправить',
      SUCCESS_TITLE: 'Спасибо!', SUCCESS_BODY: 'Заявка принята. Скоро свяжемся.',
      ERROR_RATE: 'Попробуйте ещё раз через 30 минут.',
      ERROR_GENERIC: 'Что-то пошло не так. Попробуйте снова или позвоните нам.'
    },
    NEWSLETTER: {
      TITLE: 'Подписка на обновления',
      DESC: 'Получайте уведомления о новых группах и акциях.',
      PLACEHOLDER: 'Ваш email', SUBMIT: 'Подписаться'
    },
    FOOTER: {
      COL_SITE: 'Сайт', COL_CONTACT: 'Контакты', OFFER: 'Публичная оферта',
      PRIVACY: 'Политика конфиденциальности', RIGHTS: 'Все права защищены.',
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
