function whenDomReady(callback) {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', callback, { once: true });
    } else {
        Promise.resolve().then(callback);
    }
}


    // Запрет на скачивание и ПКМ
    document.addEventListener('contextmenu', e => {
        if (e.target.tagName === 'IMG' || e.target.tagName === 'VIDEO') e.preventDefault();
    });
    document.addEventListener('dragstart', e => {
        if (e.target.tagName === 'IMG' || e.target.tagName === 'VIDEO') e.preventDefault();
    });

    // Проверка на админа
    whenDomReady(() => {
        const params = new URLSearchParams(window.location.search);
        if (params.has('admin') || window.location.hash === '#admin') {
            checkAdminToken();
        }
    });

/* ══════════════════════════════════════════════════════════════
   ЛОКАЛИЗАЦИЯ (i18n)
   ══════════════════════════════════════════════════════════════ */
const i18n = {
    en: {
        subtitle_main: 'portfolio',
        tab_all: 'all', tab_fashion: 'fashion', tab_event: 'event', tab_brands: 'brands', tab_art: 'art & personal', tab_film: 'film', tab_backstage: 'backstage', tab_blog: 'blog', tab_about: 'about',
        admin_title: '⚡ administrator — direct github commit',
        admin_gh: 'github settings', admin_about: 'about me — text', admin_about_photos: 'about me — photos', admin_new_post: 'new post / media',
        admin_create_album: 'create album',
        placeholder_post: 'text, hashtags (#fashion #brands)...', placeholder_album: 'album (optional)', placeholder_album_name: 'album name',
        dropzone: '📎 drag & drop file(s) here or click to pick from media library',
        btn_add: '+ add', btn_save_gh: '💾 save and commit to github', btn_logout: 'logout', btn_upload_photo: '📎 upload photo', btn_select_media: '📁 pick from library',
        btn_add_selected: 'Add selected', btn_add_album: '+ album', modal_title: 'media library — select files', btn_close: 'close',
        about_default: "I’m Korlan, a photographer and videographer currently based in Bangkok, Thailand. I create visual stories through photography and video, with a focus on people, brands and meaningful moments. I’m open to creative projects and collaborations. For enquiries and bookings, please get in touch via Instagram: @kkkorlan.",
        empty_section: '— no media in this section yet —'
    },
    ru: {
        subtitle_main: 'портфолио',
        tab_all: 'все', tab_fashion: 'мода', tab_event: 'события', tab_brands: 'бренды', tab_art: 'арт и личное', tab_film: 'фильм', tab_backstage: 'бэкстейдж', tab_blog: 'блог', tab_about: 'обо мне',
        admin_title: '⚡ администратор — прямой коммит в github',
        admin_gh: 'настройки github', admin_about: 'обо мне — текст', admin_about_photos: 'обо мне — фото', admin_new_post: 'новый пост / медиа',
        admin_create_album: 'создать альбом',
        placeholder_post: 'текст, хэштеги (#fashion #brands)...', placeholder_album: 'альбом (опционально)', placeholder_album_name: 'название альбома',
        dropzone: '📎 перетащите файл(ы) сюда или нажмите, чтобы выбрать из медиатеки',
        btn_add: '+ добавить', btn_save_gh: '💾 сохранить и закоммитить', btn_logout: 'выйти из админки', btn_upload_photo: '📎 загрузить фото', btn_select_media: '📁 выбрать из медиатеки',
        btn_add_selected: 'Добавить выбранные', btn_add_album: '+ альбом', modal_title: 'медиатека — выберите файлы', btn_close: 'закрыть',
        about_default: "Меня зовут Курлан. Я фотограф и видеограф, сейчас нахожусь в Бангкоке, Таиланд. Создаю визуальные истории через фотографию и видео, работаю с людьми, брендами и интересными проектами. Открыт к сотрудничеству и новым предложениям. По вопросам съемок и сотрудничества пишите в Instagram: @kkkorlan.",
        empty_section: '— в этом разделе пока нет медиа —'
    },
    kz: {
        subtitle_main: 'портфолио',
        tab_all: 'барлығы', tab_fashion: 'сән', tab_event: 'оқиғалар', tab_brands: 'брендтер', tab_art: 'арт және жеке', tab_film: 'фильм', tab_backstage: 'бэкстейдж', tab_blog: 'блог', tab_about: 'мен туралы',
        admin_title: '⚡ әкімші — github-қа тікелей коммит',
        admin_gh: 'github параметрлері', admin_about: 'мен туралы — мәтін', admin_about_photos: 'мен туралы — фото', admin_new_post: 'жаңа пост / медиа',
        admin_create_album: 'альбом жасау',
        placeholder_post: 'мәтін, хэштегтер (#fashion #brands)...', placeholder_album: 'альбом (міндетті емес)', placeholder_album_name: 'альбом атауы',
        dropzone: '📎 файлдарды осында сүйреңіз немесе медиатекадан таңдаңыз',
        btn_add: '+ қосу', btn_save_gh: '💾 сақтау және коммит жасау', btn_logout: 'админнен шығу', btn_upload_photo: '📎 фото жүктеу', btn_select_media: '📁 медиатекадан таңдау',
        btn_add_selected: 'Таңдалғандарды қосу', btn_add_album: '+ альбом', modal_title: 'медиатека — файлдарды таңдаңыз', btn_close: 'жабу',
        about_default: "Менің атым Құрлан. Мен фотограф және видеографпын, қазір Тайландтың Бангкок қаласындамын. Фотография мен видео арқылы адамдар, брендтер және маңызды сәттер туралы визуалды оқиғалар жасаймын. Шығармашылық жобалар мен ынтымақтастыққа ашықпын. Түсірілім және ұсыныстар бойынша Instagram арқылы хабарласыңыз: @kkkorlan.",
        empty_section: '— бұл бөлімде әзірге медиа жоқ —'
    },
    vi: {
        subtitle_main: 'hồ sơ năng lực',
        tab_all: 'tất cả', tab_fashion: 'thời trang', tab_event: 'sự kiện', tab_brands: 'thương hiệu', tab_art: 'nghệ thuật & cá nhân', tab_film: 'phim', tab_backstage: 'hậu trường', tab_blog: 'blog', tab_about: 'giới thiệu',
        admin_title: '⚡ quản trị viên — commit trực tiếp lên github',
        admin_gh: 'cài đặt github', admin_about: 'giới thiệu — văn bản', admin_about_photos: 'giới thiệu — ảnh', admin_new_post: 'bài viết / media mới',
        admin_create_album: 'tạo album',
        placeholder_post: 'văn bản, hashtag (#fashion #brands)...', placeholder_album: 'album (tùy chọn)', placeholder_album_name: 'tên album',
        dropzone: '📎 kéo thả tệp vào đây hoặc nhấp để chọn từ thư viện',
        btn_add: '+ thêm', btn_save_gh: '💾 lưu và commit lên github', btn_logout: 'đăng xuất', btn_upload_photo: '📎 tải ảnh lên', btn_select_media: '📁 chọn từ thư viện',
        btn_add_selected: 'Thêm mục đã chọn', btn_add_album: '+ album', modal_title: 'thư viện media — chọn tệp', btn_close: 'đóng',
        about_default: "Mình là Korlan, nhiếp ảnh gia và nhà quay phim hiện đang ở Bangkok, Thái Lan. Mình kể những câu chuyện bằng hình ảnh và video, tập trung vào con người, thương hiệu và những khoảnh khắc ý nghĩa. Mình luôn sẵn sàng cho các dự án sáng tạo và hợp tác. Để trao đổi công việc, vui lòng liên hệ qua Instagram: @kkkorlan.",
        empty_section: '— chưa có media trong phần này —'
    }
};

let currentLang = localStorage.getItem('korlan_lang') || 'en';

function toggleLangMenu(event) {
    if (event) event.stopPropagation();
    const wrap = document.getElementById('lang-switch-container');
    const trigger = document.getElementById('current-lang-label');
    const open = wrap.classList.toggle('open');
    trigger.setAttribute('aria-expanded', String(open));
}
document.addEventListener('click', event => {
    const wrap = document.getElementById('lang-switch-container');
    if (wrap && !wrap.contains(event.target)) {
        wrap.classList.remove('open');
        document.getElementById('current-lang-label').setAttribute('aria-expanded', 'false');
    }
});
function setLang(lang) {
    const wrap = document.getElementById('lang-switch-container');
    if (wrap) { wrap.classList.remove('open'); document.getElementById('current-lang-label').setAttribute('aria-expanded', 'false'); }
    currentLang = lang;
    localStorage.setItem('korlan_lang', lang);
    document.getElementById('current-lang-label').textContent = lang.toUpperCase();
    document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (i18n[lang] && i18n[lang][key]) el.textContent = i18n[lang][key];
    });
    
    document.getElementById('post-text').placeholder = i18n[lang].placeholder_post;
    document.getElementById('post-album').placeholder = i18n[lang].placeholder_album;
    document.getElementById('album-name').placeholder = i18n[lang].placeholder_album_name;
    
    renderPortfolio(currentTab);
    renderBlog();
    renderAbout();
}

/* ══════════════════════════════════════════════════════════════
   ХЕЛПЕРЫ И МОДУЛИ КОНТЕНТА
   ══════════════════════════════════════════════════════════════ */
function J(dir, base, from, to) {
    const out = [];
    for (let i = from; i <= to; i++) out.push(dir + '/' + base + '_' + i + '.jpg');
    return out;
}
function T(path, type, stars) { return { p: path, t: type, s: stars || 2 }; }
function TI(paths, stars) { return paths.map(p => T(p, 'video', stars)); }
function PI(paths, stars) { return paths.map(p => T(p, 'image', stars)); }

const A = '03_Brand_Collaborations';
const TS = A + '/@tisou.official';

/* 
   ══════════════════════════════════════════════════════════════
   МОДУЛЬНАЯ СИСТЕМА ДЛЯ БУДУЩИХ ДОБАВЛЕНИЙ
   Чтобы добавить новый год/проект, просто скопируйте блок {} и поменяйте данные.
   ══════════════════════════════════════════════════════════════
*/
const PORTFOLIO_MODULES = [
    {
        year: '2026',
        folders: [
            // FASHION
            { name: '01 · main fashion & commercial', section: 'fashion', album: 'main commercial',
              files: [ T('01_Main_Fashion_Commercial/Video by kkkorlan [DIJQLXFIGu1].mp4', 'video', 5) ] },
            { name: '03 · @titre_3', section: 'fashion', album: '@titre_3',
              files: TI([
                  A + '/@titre_3/2026-05-10_13-06-23_UTC.mp4',
                  A + '/@titre_3/2026-05-10_16-19-22_UTC.mp4',
                  A + '/@titre_3/2026-08-13_10-48-24_UTC.mp4'
              ], 5) },
              
            // TISOU CAMPAIGNS
            { name: '03 · @tisou.official / c01', section: 'brands', album: '@tisou.official / c01',
              files: PI(J(TS + '/1',  '2024-12-16_12-57-14_UTC', 1, 5), 2) },
            { name: '03 · @tisou.official / c02', section: 'brands', album: '@tisou.official / c02',
              files: PI(J(TS + '/2',  '2025-01-22_12-58-33_UTC', 1, 6), 2) },
            { name: '03 · @tisou.official / c03', section: 'brands', album: '@tisou.official / c03',
              files: PI(J(TS + '/3',  '2025-01-23_06-06-39_UTC', 1, 5), 2) },
            { name: '03 · @tisou.official / c04', section: 'brands', album: '@tisou.official / c04',
              files: PI(J(TS + '/4',  '2025-02-04_05-20-55_UTC', 1, 4), 2) },
            { name: '03 · @tisou.official / c05', section: 'brands', album: '@tisou.official / c05',
              files: PI(J(TS + '/5',  '2025-03-27_11-28-38_UTC', 1, 4), 2) },
            { name: '03 · @tisou.official / c06', section: 'brands', album: '@tisou.official / c06',
              files: PI(J(TS + '/6',  '2025-03-06_11-44-50_UTC', 1, 6), 2) },
            { name: '03 · @tisou.official / c07', section: 'brands', album: '@tisou.official / c07',
              files: PI(J(TS + '/7',  '2025-06-16_07-53-33_UTC', 1, 7), 2) },
            { name: '03 · @tisou.official / c08', section: 'brands', album: '@tisou.official / c08',
              files: PI(J(TS + '/8',  '2025-06-19_12-08-08_UTC', 1, 3), 2) },
            { name: '03 · @tisou.official / c09', section: 'brands', album: '@tisou.official / c09',
              files: TI([TS + '/9/2025-08-04_12-57-48_UTC.mp4'], 2) },
            { name: '03 · @tisou.official / c11', section: 'brands', album: '@tisou.official / c11',
              files: PI(J(TS + '/11', '2025-07-15_05-27-27_UTC', 1, 3), 2) },
            { name: '03 · @tisou.official / c12', section: 'brands', album: '@tisou.official / c12',
              files: [].concat(
                  TI([
                      TS + '/12/2025-08-07_07-14-21_UTC.mp4',
                      TS + '/12/2025-08-07_09-19-56_UTC.mp4',
                      TS + '/12/2025-08-07_13-17-00_UTC.mp4',
                      TS + '/12/2025-08-08_12-16-27_UTC.mp4'
                  ], 2),
                  PI(J(TS + '/12', '2025-08-08_08-00-00_UTC', 1, 5), 2)
              ) },
            { name: '03 · @tisou.official / c13', section: 'brands', album: '@tisou.official / c13',
              files: TI([TS + '/13/2025-07-31_10-10-00_UTC.mp4'], 2) },
            { name: '03 · @tisou.official / c14', section: 'brands', album: '@tisou.official / c14',
              files: [].concat(
                  PI(J(TS + '/14', '2025-12-01_07-57-43_UTC', 1, 7), 2),
                  PI(J(TS + '/14', '2025-12-03_06-57-53_UTC', 1, 5), 2),
                  PI(J(TS + '/14', '2025-12-04_10-31-03_UTC', 1, 10), 2),
                  PI(J(TS + '/14', '2025-12-22_17-12-46_UTC', 1, 13), 2)
              ) },
            { name: '03 · @tisou.official / c15', section: 'brands', album: '@tisou.official / c15',
              files: [].concat(
                  PI(J(TS + '/15', '2026-01-07_10-00-00_UTC', 1, 8), 2),
                  PI(J(TS + '/15', '2026-01-08_04-58-07_UTC', 1, 8), 2),
                  PI(J(TS + '/15', '2026-01-09_05-00-08_UTC', 1, 3), 2)
              ) },
            { name: '03 · @tisou.official / c16', section: 'brands', album: '@tisou.official / c16',
              files: PI(J(TS + '/16', '2026-02-13_12-45-58_UTC', 1, 7), 2) },

            // AIMAQ CAMPAIGNS
            { name: '03 · @aimaq_kz / c01', section: 'brands', album: '@aimaq_kz / c01',
              files: PI([A + '/@aimaq_kz/2026-02-27_09-31-51_UTC.jpg'], 2) },
            { name: '03 · @aimaq_kz / c02', section: 'brands', album: '@aimaq_kz / c02',
              files: TI([A + '/@aimaq_kz/2026-03-02_13-06-37_UTC.mp4'], 2) },
            { name: '03 · @aimaq_kz / c03', section: 'brands', album: '@aimaq_kz / c03',
              files: PI(J(A + '/@aimaq_kz', '2026-03-04_14-32-18_UTC', 1, 4), 2) },
            { name: '03 · @aimaq_kz / c04', section: 'brands', album: '@aimaq_kz / c04',
              files: TI([A + '/@aimaq_kz/2026-03-05_14-14-49_UTC.mp4'], 2) },
            { name: '03 · @aimaq_kz / c05', section: 'brands', album: '@aimaq_kz / c05',
              files: PI(J(A + '/@aimaq_kz', '2026-03-28_13-00-25_UTC', 1, 3), 2) },
            { name: '03 · @aimaq_kz / c06', section: 'brands', album: '@aimaq_kz / c06',
              files: PI([A + '/@aimaq_kz/2026-04-20_14-53-23_UTC.jpg'], 2) },
            { name: '03 · @aimaq_kz / c07', section: 'brands', album: '@aimaq_kz / c07',
              files: PI(J(A + '/@aimaq_kz', '2026-04-23_14-23-56_UTC', 1, 3), 2) },
            { name: '03 · @aimaq_kz / c08', section: 'brands', album: '@aimaq_kz / c08',
              files: PI(J(A + '/@aimaq_kz', '2026-07-14_15-50-26_UTC', 1, 2), 2) },

            // EVENT
            { name: '02 · backstage & process', section: 'event', album: 'process',
              files: [ T('02_Backstage_And_Process/Video by kkkorlan [DPtGmaEiL_z].mp4', 'video', 5) ] },
            { name: '03 · @titre_3 / backstage', section: 'event', album: 'titre backstage',
              files: (() => {
                  const dir = A + '/@titre_3/Titre backstage';
                  const out = [];
                  for (let i = 1; i <= 18; i++) {
                      out.push(T(dir + '/2026-10-10_14-02-37_UTC_' + i + (i === 5 ? '.mp4' : '.jpg'),
                                 i === 5 ? 'video' : 'image',
                                 (i === 18) ? 5 : 2));
                  }
                  return out;
              })() },
            { name: '03 · @atelierbar.almaty', section: 'event', album: '@atelierbar.almaty',
              files: [].concat(
                  TI([A + '/@atelierbar.almaty/2025-10-24_11-37-51_UTC.mp4'], 3),
                  PI(J(A + '/@atelierbar.almaty/1', '2026-05-06_17-20-41_UTC', 1, 19), 2),
                  PI(J(A + '/@atelierbar.almaty/2', '2026-05-09_12-03-59_UTC', 1, 20), 2)
              ) },

            // BRANDS (остальные)
            { name: '03 · @chocolatebeautysalon', section: 'brands', album: '@chocolatebeautysalon',
              files: TI([A + '/@chocolatebeautysalon/2026-09-14_15-39-20_UTC.mp4'], 2) },
            { name: '03 · @aqqu.cafe', section: 'brands', album: '@aqqu.cafe',
              files: TI([A + '/@aqqu.cafe/2026-09-26_15-23-31_UTC.mp4'], 2) },
            { name: '03 · @thesix.kz', section: 'brands', album: '@thesix.kz',
              files: [].concat(
                  PI(J(A + '/@thesix.kz', '2026-05-10_11-49-47_UTC', 1, 14), 2),
                  PI(J(A + '/@thesix.kz', '2026-05-11_12-19-45_UTC', 1, 13), 2)
              ) },

            // ART
            { name: '03 · @offbeatkz', section: 'art', album: '@offbeatkz',
              files: TI([
                  A + '/@offbeatkz/2026-07-04_06-33-31_UTC.mp4',
                  A + '/@offbeatkz/2026-07-17_13-27-40_UTC.mp4'
              ], 5) },
            { name: '04 · art & personal', section: 'art', album: 'personal',
              files: TI(['04_Art_And_Personal/2026-10-25_15-33-01_UTC.mp4'], 3) }
        ]
    }
];

/* Автоматическая сборка портфолио из модулей */
const ART_OVERRIDES = new Set([
    '01_Main_Fashion_Commercial/Video by kkkorlan [DIJQLXFIGu1].mp4',
    '02_Backstage_And_Process/Video by kkkorlan [DPtGmaEiL_z].mp4',
    '03_Brand_Collaborations/@offbeatkz/2026-07-04_06-33-31_UTC.mp4'
]);
const FAV_PHOTOS = new Set([
    '03_Brand_Collaborations/@titre_3/Titre backstage/2026-10-10_14-02-37_UTC_18.jpg',
    '03_Brand_Collaborations/@tisou.official/14/2025-12-22_17-12-46_UTC_1.jpg'
]);

const REPO_MEDIA_FILES = [{"path":"01_Main_Fashion_Commercial/Video by kkkorlan [DIJQLXFIGu1].mp4","type":"video","category":"brands","categories":["brands"],"album":"@fujifilmkazakhstan"},{"path":"02_Backstage_And_Process/Video by kkkorlan [DPtGmaEiL_z].mp4","type":"video","category":"backstage","categories":["backstage"],"album":"Backstage"},{"path":"03_Brand_Collaborations/@aimaq_kz/2026-02-27_09-31-51_UTC.jpg","type":"image","category":"brands","categories":["brands","fashion"],"album":"@aimaq_kz"},{"path":"03_Brand_Collaborations/@aimaq_kz/2026-03-02_13-06-37_UTC.mp4","type":"video","category":"brands","categories":["brands"],"album":"@aimaq_kz"},{"path":"03_Brand_Collaborations/@aimaq_kz/2026-03-04_14-32-18_UTC_1.jpg","type":"image","category":"brands","categories":["brands","fashion"],"album":"@aimaq_kz"},{"path":"03_Brand_Collaborations/@aimaq_kz/2026-03-04_14-32-18_UTC_2.jpg","type":"image","category":"brands","categories":["brands"],"album":"@aimaq_kz"},{"path":"03_Brand_Collaborations/@aimaq_kz/2026-03-04_14-32-18_UTC_3.jpg","type":"image","category":"brands","categories":["brands"],"album":"@aimaq_kz"},{"path":"03_Brand_Collaborations/@aimaq_kz/2026-03-04_14-32-18_UTC_4.jpg","type":"image","category":"brands","categories":["brands"],"album":"@aimaq_kz"},{"path":"03_Brand_Collaborations/@aimaq_kz/2026-03-05_14-14-49_UTC.mp4","type":"video","category":"brands","categories":["brands"],"album":"@aimaq_kz"},{"path":"03_Brand_Collaborations/@aimaq_kz/2026-03-28_13-00-25_UTC_1.jpg","type":"image","category":"brands","categories":["brands","fashion"],"album":"@aimaq_kz"},{"path":"03_Brand_Collaborations/@aimaq_kz/2026-03-28_13-00-25_UTC_2.jpg","type":"image","category":"brands","categories":["brands"],"album":"@aimaq_kz"},{"path":"03_Brand_Collaborations/@aimaq_kz/2026-03-28_13-00-25_UTC_3.jpg","type":"image","category":"brands","categories":["brands"],"album":"@aimaq_kz"},{"path":"03_Brand_Collaborations/@aimaq_kz/2026-04-20_14-53-23_UTC.jpg","type":"image","category":"brands","categories":["brands"],"album":"@aimaq_kz"},{"path":"03_Brand_Collaborations/@aimaq_kz/2026-04-23_14-23-56_UTC_1.jpg","type":"image","category":"brands","categories":["brands"],"album":"@aimaq_kz"},{"path":"03_Brand_Collaborations/@aimaq_kz/2026-04-23_14-23-56_UTC_2.jpg","type":"image","category":"brands","categories":["brands"],"album":"@aimaq_kz"},{"path":"03_Brand_Collaborations/@aimaq_kz/2026-04-23_14-23-56_UTC_3.jpg","type":"image","category":"brands","categories":["brands"],"album":"@aimaq_kz"},{"path":"03_Brand_Collaborations/@aimaq_kz/2026-07-14_15-50-26_UTC_1.jpg","type":"image","category":"brands","categories":["brands"],"album":"@aimaq_kz"},{"path":"03_Brand_Collaborations/@aimaq_kz/2026-07-14_15-50-26_UTC_2.jpg","type":"image","category":"brands","categories":["brands"],"album":"@aimaq_kz"},{"path":"03_Brand_Collaborations/@aqqu.cafe/2026-09-26_15-23-31_UTC.mp4","type":"video","category":"brands","categories":["brands"],"album":"@aqqu.cafe"},{"path":"03_Brand_Collaborations/@atelierbar.almaty/1/2026-05-06_17-20-41_UTC_1.jpg","type":"image","category":"brands","categories":["brands","event"],"album":"@atelierbar.almaty / 1"},{"path":"03_Brand_Collaborations/@atelierbar.almaty/1/2026-05-06_17-20-41_UTC_10.jpg","type":"image","category":"brands","categories":["brands","event"],"album":"@atelierbar.almaty / 1"},{"path":"03_Brand_Collaborations/@atelierbar.almaty/1/2026-05-06_17-20-41_UTC_11.jpg","type":"image","category":"brands","categories":["brands","event"],"album":"@atelierbar.almaty / 1"},{"path":"03_Brand_Collaborations/@atelierbar.almaty/1/2026-05-06_17-20-41_UTC_12.jpg","type":"image","category":"brands","categories":["brands","event"],"album":"@atelierbar.almaty / 1"},{"path":"03_Brand_Collaborations/@atelierbar.almaty/1/2026-05-06_17-20-41_UTC_13.jpg","type":"image","category":"brands","categories":["brands","event"],"album":"@atelierbar.almaty / 1"},{"path":"03_Brand_Collaborations/@atelierbar.almaty/1/2026-05-06_17-20-41_UTC_14.jpg","type":"image","category":"brands","categories":["brands","event"],"album":"@atelierbar.almaty / 1"},{"path":"03_Brand_Collaborations/@atelierbar.almaty/1/2026-05-06_17-20-41_UTC_15.jpg","type":"image","category":"brands","categories":["brands","event"],"album":"@atelierbar.almaty / 1"},{"path":"03_Brand_Collaborations/@atelierbar.almaty/1/2026-05-06_17-20-41_UTC_16.jpg","type":"image","category":"brands","categories":["brands","event"],"album":"@atelierbar.almaty / 1"},{"path":"03_Brand_Collaborations/@atelierbar.almaty/1/2026-05-06_17-20-41_UTC_17.jpg","type":"image","category":"brands","categories":["brands","event"],"album":"@atelierbar.almaty / 1"},{"path":"03_Brand_Collaborations/@atelierbar.almaty/1/2026-05-06_17-20-41_UTC_18.jpg","type":"image","category":"brands","categories":["brands","event"],"album":"@atelierbar.almaty / 1"},{"path":"03_Brand_Collaborations/@atelierbar.almaty/1/2026-05-06_17-20-41_UTC_19.jpg","type":"image","category":"brands","categories":["brands","event"],"album":"@atelierbar.almaty / 1"},{"path":"03_Brand_Collaborations/@atelierbar.almaty/1/2026-05-06_17-20-41_UTC_2.jpg","type":"image","category":"brands","categories":["brands","event"],"album":"@atelierbar.almaty / 1"},{"path":"03_Brand_Collaborations/@atelierbar.almaty/1/2026-05-06_17-20-41_UTC_3.jpg","type":"image","category":"brands","categories":["brands","event"],"album":"@atelierbar.almaty / 1"},{"path":"03_Brand_Collaborations/@atelierbar.almaty/1/2026-05-06_17-20-41_UTC_4.jpg","type":"image","category":"brands","categories":["brands","event"],"album":"@atelierbar.almaty / 1"},{"path":"03_Brand_Collaborations/@atelierbar.almaty/1/2026-05-06_17-20-41_UTC_5.jpg","type":"image","category":"brands","categories":["brands","event"],"album":"@atelierbar.almaty / 1"},{"path":"03_Brand_Collaborations/@atelierbar.almaty/1/2026-05-06_17-20-41_UTC_6.jpg","type":"image","category":"brands","categories":["brands","event"],"album":"@atelierbar.almaty / 1"},{"path":"03_Brand_Collaborations/@atelierbar.almaty/1/2026-05-06_17-20-41_UTC_7.jpg","type":"image","category":"brands","categories":["brands","event"],"album":"@atelierbar.almaty / 1"},{"path":"03_Brand_Collaborations/@atelierbar.almaty/1/2026-05-06_17-20-41_UTC_8.jpg","type":"image","category":"brands","categories":["brands","event"],"album":"@atelierbar.almaty / 1"},{"path":"03_Brand_Collaborations/@atelierbar.almaty/1/2026-05-06_17-20-41_UTC_9.jpg","type":"image","category":"brands","categories":["brands","event"],"album":"@atelierbar.almaty / 1"},{"path":"03_Brand_Collaborations/@atelierbar.almaty/2/2026-05-09_12-03-59_UTC_1.jpg","type":"image","category":"brands","categories":["brands","event"],"album":"@atelierbar.almaty / 2"},{"path":"03_Brand_Collaborations/@atelierbar.almaty/2/2026-05-09_12-03-59_UTC_10.jpg","type":"image","category":"brands","categories":["brands","event"],"album":"@atelierbar.almaty / 2"},{"path":"03_Brand_Collaborations/@atelierbar.almaty/2/2026-05-09_12-03-59_UTC_11.jpg","type":"image","category":"brands","categories":["brands","event"],"album":"@atelierbar.almaty / 2"},{"path":"03_Brand_Collaborations/@atelierbar.almaty/2/2026-05-09_12-03-59_UTC_12.jpg","type":"image","category":"brands","categories":["brands","event"],"album":"@atelierbar.almaty / 2"},{"path":"03_Brand_Collaborations/@atelierbar.almaty/2/2026-05-09_12-03-59_UTC_13.jpg","type":"image","category":"brands","categories":["brands","event"],"album":"@atelierbar.almaty / 2"},{"path":"03_Brand_Collaborations/@atelierbar.almaty/2/2026-05-09_12-03-59_UTC_14.jpg","type":"image","category":"brands","categories":["brands","event"],"album":"@atelierbar.almaty / 2"},{"path":"03_Brand_Collaborations/@atelierbar.almaty/2/2026-05-09_12-03-59_UTC_15.jpg","type":"image","category":"brands","categories":["brands","event"],"album":"@atelierbar.almaty / 2"},{"path":"03_Brand_Collaborations/@atelierbar.almaty/2/2026-05-09_12-03-59_UTC_16.jpg","type":"image","category":"brands","categories":["brands","event"],"album":"@atelierbar.almaty / 2"},{"path":"03_Brand_Collaborations/@atelierbar.almaty/2/2026-05-09_12-03-59_UTC_17.jpg","type":"image","category":"brands","categories":["brands","event"],"album":"@atelierbar.almaty / 2"},{"path":"03_Brand_Collaborations/@atelierbar.almaty/2/2026-05-09_12-03-59_UTC_18.jpg","type":"image","category":"brands","categories":["brands","event"],"album":"@atelierbar.almaty / 2"},{"path":"03_Brand_Collaborations/@atelierbar.almaty/2/2026-05-09_12-03-59_UTC_19.jpg","type":"image","category":"brands","categories":["brands","event"],"album":"@atelierbar.almaty / 2"},{"path":"03_Brand_Collaborations/@atelierbar.almaty/2/2026-05-09_12-03-59_UTC_2.jpg","type":"image","category":"brands","categories":["brands","event"],"album":"@atelierbar.almaty / 2"},{"path":"03_Brand_Collaborations/@atelierbar.almaty/2/2026-05-09_12-03-59_UTC_20.jpg","type":"image","category":"brands","categories":["brands","event"],"album":"@atelierbar.almaty / 2"},{"path":"03_Brand_Collaborations/@atelierbar.almaty/2/2026-05-09_12-03-59_UTC_3.jpg","type":"image","category":"brands","categories":["brands","event"],"album":"@atelierbar.almaty / 2"},{"path":"03_Brand_Collaborations/@atelierbar.almaty/2/2026-05-09_12-03-59_UTC_4.jpg","type":"image","category":"brands","categories":["brands","event"],"album":"@atelierbar.almaty / 2"},{"path":"03_Brand_Collaborations/@atelierbar.almaty/2/2026-05-09_12-03-59_UTC_5.jpg","type":"image","category":"brands","categories":["brands","event"],"album":"@atelierbar.almaty / 2"},{"path":"03_Brand_Collaborations/@atelierbar.almaty/2/2026-05-09_12-03-59_UTC_6.jpg","type":"image","category":"brands","categories":["brands","event"],"album":"@atelierbar.almaty / 2"},{"path":"03_Brand_Collaborations/@atelierbar.almaty/2/2026-05-09_12-03-59_UTC_7.jpg","type":"image","category":"brands","categories":["brands","event"],"album":"@atelierbar.almaty / 2"},{"path":"03_Brand_Collaborations/@atelierbar.almaty/2/2026-05-09_12-03-59_UTC_8.jpg","type":"image","category":"brands","categories":["brands","event"],"album":"@atelierbar.almaty / 2"},{"path":"03_Brand_Collaborations/@atelierbar.almaty/2/2026-05-09_12-03-59_UTC_9.jpg","type":"image","category":"brands","categories":["brands","event"],"album":"@atelierbar.almaty / 2"},{"path":"03_Brand_Collaborations/@atelierbar.almaty/2025-10-24_11-37-51_UTC.mp4","type":"video","category":"brands","categories":["brands","event"],"album":"@atelierbar.almaty"},{"path":"03_Brand_Collaborations/@chocolatebeautysalon /2026-09-14_15-39-20_UTC.mp4","type":"video","category":"brands","categories":["brands"],"album":"@chocolatebeautysalon"},{"path":"03_Brand_Collaborations/@offbeatkz/2026-07-04_06-33-31_UTC.mp4","type":"video","category":"brands","categories":["art","brands","fashion"],"album":"@offbeatkz"},{"path":"03_Brand_Collaborations/@offbeatkz/2026-07-17_13-27-40_UTC.mp4","type":"video","category":"brands","categories":["brands","fashion"],"album":"@offbeatkz"},{"path":"03_Brand_Collaborations/@thesix.kz/2026-05-10_11-49-47_UTC_1.jpg","type":"image","category":"brands","categories":["brands","fashion"],"album":"@thesix.kz"},{"path":"03_Brand_Collaborations/@thesix.kz/2026-05-10_11-49-47_UTC_10.jpg","type":"image","category":"brands","categories":["brands"],"album":"@thesix.kz"},{"path":"03_Brand_Collaborations/@thesix.kz/2026-05-10_11-49-47_UTC_11.jpg","type":"image","category":"brands","categories":["brands"],"album":"@thesix.kz"},{"path":"03_Brand_Collaborations/@thesix.kz/2026-05-10_11-49-47_UTC_12.jpg","type":"image","category":"brands","categories":["brands"],"album":"@thesix.kz"},{"path":"03_Brand_Collaborations/@thesix.kz/2026-05-10_11-49-47_UTC_13.jpg","type":"image","category":"brands","categories":["brands"],"album":"@thesix.kz"},{"path":"03_Brand_Collaborations/@thesix.kz/2026-05-10_11-49-47_UTC_14.jpg","type":"image","category":"brands","categories":["brands"],"album":"@thesix.kz"},{"path":"03_Brand_Collaborations/@thesix.kz/2026-05-10_11-49-47_UTC_2.jpg","type":"image","category":"brands","categories":["brands","fashion"],"album":"@thesix.kz"},{"path":"03_Brand_Collaborations/@thesix.kz/2026-05-10_11-49-47_UTC_3.jpg","type":"image","category":"brands","categories":["brands"],"album":"@thesix.kz"},{"path":"03_Brand_Collaborations/@thesix.kz/2026-05-10_11-49-47_UTC_4.jpg","type":"image","category":"brands","categories":["brands"],"album":"@thesix.kz"},{"path":"03_Brand_Collaborations/@thesix.kz/2026-05-10_11-49-47_UTC_5.jpg","type":"image","category":"brands","categories":["brands"],"album":"@thesix.kz"},{"path":"03_Brand_Collaborations/@thesix.kz/2026-05-10_11-49-47_UTC_6.jpg","type":"image","category":"brands","categories":["brands"],"album":"@thesix.kz"},{"path":"03_Brand_Collaborations/@thesix.kz/2026-05-10_11-49-47_UTC_7.jpg","type":"image","category":"brands","categories":["brands"],"album":"@thesix.kz"},{"path":"03_Brand_Collaborations/@thesix.kz/2026-05-10_11-49-47_UTC_8.jpg","type":"image","category":"brands","categories":["brands"],"album":"@thesix.kz"},{"path":"03_Brand_Collaborations/@thesix.kz/2026-05-10_11-49-47_UTC_9.jpg","type":"image","category":"brands","categories":["brands"],"album":"@thesix.kz"},{"path":"03_Brand_Collaborations/@thesix.kz/2026-05-11_12-19-45_UTC_1.jpg","type":"image","category":"brands","categories":["brands","fashion"],"album":"@thesix.kz"},{"path":"03_Brand_Collaborations/@thesix.kz/2026-05-11_12-19-45_UTC_10.jpg","type":"image","category":"brands","categories":["brands"],"album":"@thesix.kz"},{"path":"03_Brand_Collaborations/@thesix.kz/2026-05-11_12-19-45_UTC_11.jpg","type":"image","category":"brands","categories":["brands"],"album":"@thesix.kz"},{"path":"03_Brand_Collaborations/@thesix.kz/2026-05-11_12-19-45_UTC_12.jpg","type":"image","category":"brands","categories":["brands"],"album":"@thesix.kz"},{"path":"03_Brand_Collaborations/@thesix.kz/2026-05-11_12-19-45_UTC_13.jpg","type":"image","category":"brands","categories":["brands"],"album":"@thesix.kz"},{"path":"03_Brand_Collaborations/@thesix.kz/2026-05-11_12-19-45_UTC_2.jpg","type":"image","category":"brands","categories":["brands"],"album":"@thesix.kz"},{"path":"03_Brand_Collaborations/@thesix.kz/2026-05-11_12-19-45_UTC_3.jpg","type":"image","category":"brands","categories":["brands"],"album":"@thesix.kz"},{"path":"03_Brand_Collaborations/@thesix.kz/2026-05-11_12-19-45_UTC_4.jpg","type":"image","category":"brands","categories":["brands"],"album":"@thesix.kz"},{"path":"03_Brand_Collaborations/@thesix.kz/2026-05-11_12-19-45_UTC_5.jpg","type":"image","category":"brands","categories":["brands"],"album":"@thesix.kz"},{"path":"03_Brand_Collaborations/@thesix.kz/2026-05-11_12-19-45_UTC_6.jpg","type":"image","category":"brands","categories":["brands"],"album":"@thesix.kz"},{"path":"03_Brand_Collaborations/@thesix.kz/2026-05-11_12-19-45_UTC_7.jpg","type":"image","category":"brands","categories":["brands"],"album":"@thesix.kz"},{"path":"03_Brand_Collaborations/@thesix.kz/2026-05-11_12-19-45_UTC_8.jpg","type":"image","category":"brands","categories":["brands"],"album":"@thesix.kz"},{"path":"03_Brand_Collaborations/@thesix.kz/2026-05-11_12-19-45_UTC_9.jpg","type":"image","category":"brands","categories":["brands"],"album":"@thesix.kz"},{"path":"03_Brand_Collaborations/@tisou.official/1/2024-12-16_12-57-14_UTC_1.jpg","type":"image","category":"brands","categories":["brands","fashion"],"album":"@tisou.official / 1"},{"path":"03_Brand_Collaborations/@tisou.official/1/2024-12-16_12-57-14_UTC_2.jpg","type":"image","category":"brands","categories":["brands","fashion"],"album":"@tisou.official / 1"},{"path":"03_Brand_Collaborations/@tisou.official/1/2024-12-16_12-57-14_UTC_3.jpg","type":"image","category":"brands","categories":["brands","fashion"],"album":"@tisou.official / 1"},{"path":"03_Brand_Collaborations/@tisou.official/1/2024-12-16_12-57-14_UTC_4.jpg","type":"image","category":"brands","categories":["brands","fashion"],"album":"@tisou.official / 1"},{"path":"03_Brand_Collaborations/@tisou.official/1/2024-12-16_12-57-14_UTC_5.jpg","type":"image","category":"brands","categories":["brands","fashion"],"album":"@tisou.official / 1"},{"path":"03_Brand_Collaborations/@tisou.official/11/2025-07-15_05-27-27_UTC_1.jpg","type":"image","category":"brands","categories":["brands","fashion"],"album":"@tisou.official / 11"},{"path":"03_Brand_Collaborations/@tisou.official/11/2025-07-15_05-27-27_UTC_2.jpg","type":"image","category":"brands","categories":["brands","fashion"],"album":"@tisou.official / 11"},{"path":"03_Brand_Collaborations/@tisou.official/11/2025-07-15_05-27-27_UTC_3.jpg","type":"image","category":"brands","categories":["brands","fashion"],"album":"@tisou.official / 11"},{"path":"03_Brand_Collaborations/@tisou.official/12/2025-08-07_07-14-21_UTC.mp4","type":"video","category":"brands","categories":["brands","fashion"],"album":"@tisou.official / 12"},{"path":"03_Brand_Collaborations/@tisou.official/12/2025-08-07_09-19-56_UTC.mp4","type":"video","category":"brands","categories":["brands","fashion"],"album":"@tisou.official / 12"},{"path":"03_Brand_Collaborations/@tisou.official/12/2025-08-07_13-17-00_UTC.mp4","type":"video","category":"brands","categories":["brands","fashion"],"album":"@tisou.official / 12"},{"path":"03_Brand_Collaborations/@tisou.official/12/2025-08-08_08-00-00_UTC_1.jpg","type":"image","category":"brands","categories":["brands","fashion"],"album":"@tisou.official / 12"},{"path":"03_Brand_Collaborations/@tisou.official/12/2025-08-08_08-00-00_UTC_2.jpg","type":"image","category":"brands","categories":["brands","fashion"],"album":"@tisou.official / 12"},{"path":"03_Brand_Collaborations/@tisou.official/12/2025-08-08_08-00-00_UTC_3.jpg","type":"image","category":"brands","categories":["brands","fashion"],"album":"@tisou.official / 12"},{"path":"03_Brand_Collaborations/@tisou.official/12/2025-08-08_08-00-00_UTC_4.jpg","type":"image","category":"brands","categories":["brands","fashion"],"album":"@tisou.official / 12"},{"path":"03_Brand_Collaborations/@tisou.official/12/2025-08-08_08-00-00_UTC_5.jpg","type":"image","category":"brands","categories":["brands","fashion"],"album":"@tisou.official / 12"},{"path":"03_Brand_Collaborations/@tisou.official/12/2025-08-08_12-16-27_UTC.mp4","type":"video","category":"brands","categories":["brands","fashion"],"album":"@tisou.official / 12"},{"path":"03_Brand_Collaborations/@tisou.official/13/2025-07-31_10-10-00_UTC.mp4","type":"video","category":"brands","categories":["brands","fashion"],"album":"@tisou.official / 13"},{"path":"03_Brand_Collaborations/@tisou.official/14/2025-12-01_07-57-43_UTC_1.jpg","type":"image","category":"brands","categories":["brands","fashion"],"album":"@tisou.official / 14"},{"path":"03_Brand_Collaborations/@tisou.official/14/2025-12-01_07-57-43_UTC_2.jpg","type":"image","category":"brands","categories":["brands","fashion"],"album":"@tisou.official / 14"},{"path":"03_Brand_Collaborations/@tisou.official/14/2025-12-01_07-57-43_UTC_3.jpg","type":"image","category":"brands","categories":["brands","fashion"],"album":"@tisou.official / 14"},{"path":"03_Brand_Collaborations/@tisou.official/14/2025-12-01_07-57-43_UTC_4.jpg","type":"image","category":"brands","categories":["brands","fashion"],"album":"@tisou.official / 14"},{"path":"03_Brand_Collaborations/@tisou.official/14/2025-12-01_07-57-43_UTC_5.jpg","type":"image","category":"brands","categories":["brands","fashion"],"album":"@tisou.official / 14"},{"path":"03_Brand_Collaborations/@tisou.official/14/2025-12-01_07-57-43_UTC_6.jpg","type":"image","category":"brands","categories":["brands","fashion"],"album":"@tisou.official / 14"},{"path":"03_Brand_Collaborations/@tisou.official/14/2025-12-01_07-57-43_UTC_7.jpg","type":"image","category":"brands","categories":["brands","fashion"],"album":"@tisou.official / 14"},{"path":"03_Brand_Collaborations/@tisou.official/14/2025-12-03_06-57-53_UTC_1.jpg","type":"image","category":"brands","categories":["brands","fashion"],"album":"@tisou.official / 14"},{"path":"03_Brand_Collaborations/@tisou.official/14/2025-12-03_06-57-53_UTC_2.jpg","type":"image","category":"brands","categories":["brands","fashion"],"album":"@tisou.official / 14"},{"path":"03_Brand_Collaborations/@tisou.official/14/2025-12-03_06-57-53_UTC_3.jpg","type":"image","category":"brands","categories":["brands","fashion"],"album":"@tisou.official / 14"},{"path":"03_Brand_Collaborations/@tisou.official/14/2025-12-03_06-57-53_UTC_4.jpg","type":"image","category":"brands","categories":["brands","fashion"],"album":"@tisou.official / 14"},{"path":"03_Brand_Collaborations/@tisou.official/14/2025-12-03_06-57-53_UTC_5.jpg","type":"image","category":"brands","categories":["brands","fashion"],"album":"@tisou.official / 14"},{"path":"03_Brand_Collaborations/@tisou.official/14/2025-12-04_10-31-03_UTC_1.jpg","type":"image","category":"brands","categories":["brands","fashion"],"album":"@tisou.official / 14"},{"path":"03_Brand_Collaborations/@tisou.official/14/2025-12-04_10-31-03_UTC_10.jpg","type":"image","category":"brands","categories":["brands","fashion"],"album":"@tisou.official / 14"},{"path":"03_Brand_Collaborations/@tisou.official/14/2025-12-04_10-31-03_UTC_2.jpg","type":"image","category":"brands","categories":["brands","fashion"],"album":"@tisou.official / 14"},{"path":"03_Brand_Collaborations/@tisou.official/14/2025-12-04_10-31-03_UTC_3.jpg","type":"image","category":"brands","categories":["brands","fashion"],"album":"@tisou.official / 14"},{"path":"03_Brand_Collaborations/@tisou.official/14/2025-12-04_10-31-03_UTC_4.jpg","type":"image","category":"brands","categories":["brands","fashion"],"album":"@tisou.official / 14"},{"path":"03_Brand_Collaborations/@tisou.official/14/2025-12-04_10-31-03_UTC_5.jpg","type":"image","category":"brands","categories":["brands","fashion"],"album":"@tisou.official / 14"},{"path":"03_Brand_Collaborations/@tisou.official/14/2025-12-04_10-31-03_UTC_6.jpg","type":"image","category":"brands","categories":["brands","fashion"],"album":"@tisou.official / 14"},{"path":"03_Brand_Collaborations/@tisou.official/14/2025-12-04_10-31-03_UTC_7.jpg","type":"image","category":"brands","categories":["brands","fashion"],"album":"@tisou.official / 14"},{"path":"03_Brand_Collaborations/@tisou.official/14/2025-12-04_10-31-03_UTC_8.jpg","type":"image","category":"brands","categories":["brands","fashion"],"album":"@tisou.official / 14"},{"path":"03_Brand_Collaborations/@tisou.official/14/2025-12-04_10-31-03_UTC_9.jpg","type":"image","category":"brands","categories":["brands","fashion"],"album":"@tisou.official / 14"},{"path":"03_Brand_Collaborations/@tisou.official/14/2025-12-22_17-12-46_UTC_1.jpg","type":"image","category":"brands","categories":["brands","fashion"],"album":"@tisou.official / 14"},{"path":"03_Brand_Collaborations/@tisou.official/14/2025-12-22_17-12-46_UTC_10.jpg","type":"image","category":"brands","categories":["brands","fashion"],"album":"@tisou.official / 14"},{"path":"03_Brand_Collaborations/@tisou.official/14/2025-12-22_17-12-46_UTC_11.jpg","type":"image","category":"brands","categories":["brands","fashion"],"album":"@tisou.official / 14"},{"path":"03_Brand_Collaborations/@tisou.official/14/2025-12-22_17-12-46_UTC_12.jpg","type":"image","category":"brands","categories":["brands","fashion"],"album":"@tisou.official / 14"},{"path":"03_Brand_Collaborations/@tisou.official/14/2025-12-22_17-12-46_UTC_13.jpg","type":"image","category":"brands","categories":["brands","fashion"],"album":"@tisou.official / 14"},{"path":"03_Brand_Collaborations/@tisou.official/14/2025-12-22_17-12-46_UTC_2.jpg","type":"image","category":"brands","categories":["brands","fashion"],"album":"@tisou.official / 14"},{"path":"03_Brand_Collaborations/@tisou.official/14/2025-12-22_17-12-46_UTC_3.jpg","type":"image","category":"brands","categories":["brands","fashion"],"album":"@tisou.official / 14"},{"path":"03_Brand_Collaborations/@tisou.official/14/2025-12-22_17-12-46_UTC_4.jpg","type":"image","category":"brands","categories":["brands","fashion"],"album":"@tisou.official / 14"},{"path":"03_Brand_Collaborations/@tisou.official/14/2025-12-22_17-12-46_UTC_5.jpg","type":"image","category":"brands","categories":["brands","fashion"],"album":"@tisou.official / 14"},{"path":"03_Brand_Collaborations/@tisou.official/14/2025-12-22_17-12-46_UTC_6.jpg","type":"image","category":"brands","categories":["brands","fashion"],"album":"@tisou.official / 14"},{"path":"03_Brand_Collaborations/@tisou.official/14/2025-12-22_17-12-46_UTC_7.jpg","type":"image","category":"brands","categories":["brands","fashion"],"album":"@tisou.official / 14"},{"path":"03_Brand_Collaborations/@tisou.official/14/2025-12-22_17-12-46_UTC_8.jpg","type":"image","category":"brands","categories":["brands","fashion"],"album":"@tisou.official / 14"},{"path":"03_Brand_Collaborations/@tisou.official/14/2025-12-22_17-12-46_UTC_9.jpg","type":"image","category":"brands","categories":["brands","fashion"],"album":"@tisou.official / 14"},{"path":"03_Brand_Collaborations/@tisou.official/15/2026-01-07_10-00-00_UTC_1.jpg","type":"image","category":"brands","categories":["brands","fashion"],"album":"@tisou.official / 15"},{"path":"03_Brand_Collaborations/@tisou.official/15/2026-01-07_10-00-00_UTC_2.jpg","type":"image","category":"brands","categories":["brands","fashion"],"album":"@tisou.official / 15"},{"path":"03_Brand_Collaborations/@tisou.official/15/2026-01-07_10-00-00_UTC_3.jpg","type":"image","category":"brands","categories":["brands","fashion"],"album":"@tisou.official / 15"},{"path":"03_Brand_Collaborations/@tisou.official/15/2026-01-07_10-00-00_UTC_4.jpg","type":"image","category":"brands","categories":["brands","fashion"],"album":"@tisou.official / 15"},{"path":"03_Brand_Collaborations/@tisou.official/15/2026-01-07_10-00-00_UTC_5.jpg","type":"image","category":"brands","categories":["brands","fashion"],"album":"@tisou.official / 15"},{"path":"03_Brand_Collaborations/@tisou.official/15/2026-01-07_10-00-00_UTC_6.jpg","type":"image","category":"brands","categories":["brands","fashion"],"album":"@tisou.official / 15"},{"path":"03_Brand_Collaborations/@tisou.official/15/2026-01-07_10-00-00_UTC_7.jpg","type":"image","category":"brands","categories":["brands","fashion"],"album":"@tisou.official / 15"},{"path":"03_Brand_Collaborations/@tisou.official/15/2026-01-07_10-00-00_UTC_8.jpg","type":"image","category":"brands","categories":["brands","fashion"],"album":"@tisou.official / 15"},{"path":"03_Brand_Collaborations/@tisou.official/15/2026-01-08_04-58-07_UTC_1.jpg","type":"image","category":"brands","categories":["brands","fashion"],"album":"@tisou.official / 15"},{"path":"03_Brand_Collaborations/@tisou.official/15/2026-01-08_04-58-07_UTC_2.jpg","type":"image","category":"brands","categories":["brands","fashion"],"album":"@tisou.official / 15"},{"path":"03_Brand_Collaborations/@tisou.official/15/2026-01-08_04-58-07_UTC_3.jpg","type":"image","category":"brands","categories":["brands","fashion"],"album":"@tisou.official / 15"},{"path":"03_Brand_Collaborations/@tisou.official/15/2026-01-08_04-58-07_UTC_4.jpg","type":"image","category":"brands","categories":["brands","fashion"],"album":"@tisou.official / 15"},{"path":"03_Brand_Collaborations/@tisou.official/15/2026-01-08_04-58-07_UTC_5.jpg","type":"image","category":"brands","categories":["brands","fashion"],"album":"@tisou.official / 15"},{"path":"03_Brand_Collaborations/@tisou.official/15/2026-01-08_04-58-07_UTC_6.jpg","type":"image","category":"brands","categories":["brands","fashion"],"album":"@tisou.official / 15"},{"path":"03_Brand_Collaborations/@tisou.official/15/2026-01-08_04-58-07_UTC_7.jpg","type":"image","category":"brands","categories":["brands","fashion"],"album":"@tisou.official / 15"},{"path":"03_Brand_Collaborations/@tisou.official/15/2026-01-08_04-58-07_UTC_8.jpg","type":"image","category":"brands","categories":["brands","fashion"],"album":"@tisou.official / 15"},{"path":"03_Brand_Collaborations/@tisou.official/15/2026-01-09_05-00-08_UTC_1.jpg","type":"image","category":"brands","categories":["brands","fashion"],"album":"@tisou.official / 15"},{"path":"03_Brand_Collaborations/@tisou.official/15/2026-01-09_05-00-08_UTC_2.jpg","type":"image","category":"brands","categories":["brands","fashion"],"album":"@tisou.official / 15"},{"path":"03_Brand_Collaborations/@tisou.official/15/2026-01-09_05-00-08_UTC_3.jpg","type":"image","category":"brands","categories":["brands","fashion"],"album":"@tisou.official / 15"},{"path":"03_Brand_Collaborations/@tisou.official/16/2026-02-13_12-45-58_UTC_1.jpg","type":"image","category":"brands","categories":["brands","fashion"],"album":"@tisou.official / 16"},{"path":"03_Brand_Collaborations/@tisou.official/16/2026-02-13_12-45-58_UTC_2.jpg","type":"image","category":"brands","categories":["brands","fashion"],"album":"@tisou.official / 16"},{"path":"03_Brand_Collaborations/@tisou.official/16/2026-02-13_12-45-58_UTC_3.jpg","type":"image","category":"brands","categories":["brands","fashion"],"album":"@tisou.official / 16"},{"path":"03_Brand_Collaborations/@tisou.official/16/2026-02-13_12-45-58_UTC_4.jpg","type":"image","category":"brands","categories":["brands","fashion"],"album":"@tisou.official / 16"},{"path":"03_Brand_Collaborations/@tisou.official/16/2026-02-13_12-45-58_UTC_5.jpg","type":"image","category":"brands","categories":["brands","fashion"],"album":"@tisou.official / 16"},{"path":"03_Brand_Collaborations/@tisou.official/16/2026-02-13_12-45-58_UTC_6.jpg","type":"image","category":"brands","categories":["brands","fashion"],"album":"@tisou.official / 16"},{"path":"03_Brand_Collaborations/@tisou.official/16/2026-02-13_12-45-58_UTC_7.jpg","type":"image","category":"brands","categories":["brands","fashion"],"album":"@tisou.official / 16"},{"path":"03_Brand_Collaborations/@tisou.official/2/2025-01-22_12-58-33_UTC_1.jpg","type":"image","category":"brands","categories":["brands","fashion"],"album":"@tisou.official / 2"},{"path":"03_Brand_Collaborations/@tisou.official/2/2025-01-22_12-58-33_UTC_2.jpg","type":"image","category":"brands","categories":["brands","fashion"],"album":"@tisou.official / 2"},{"path":"03_Brand_Collaborations/@tisou.official/2/2025-01-22_12-58-33_UTC_3.jpg","type":"image","category":"brands","categories":["brands","fashion"],"album":"@tisou.official / 2"},{"path":"03_Brand_Collaborations/@tisou.official/2/2025-01-22_12-58-33_UTC_4.jpg","type":"image","category":"brands","categories":["brands","fashion"],"album":"@tisou.official / 2"},{"path":"03_Brand_Collaborations/@tisou.official/2/2025-01-22_12-58-33_UTC_5.jpg","type":"image","category":"brands","categories":["brands","fashion"],"album":"@tisou.official / 2"},{"path":"03_Brand_Collaborations/@tisou.official/2/2025-01-22_12-58-33_UTC_6.jpg","type":"image","category":"brands","categories":["brands","fashion"],"album":"@tisou.official / 2"},{"path":"03_Brand_Collaborations/@tisou.official/3/2025-01-23_06-06-39_UTC_1.jpg","type":"image","category":"brands","categories":["brands","fashion"],"album":"@tisou.official / 3"},{"path":"03_Brand_Collaborations/@tisou.official/3/2025-01-23_06-06-39_UTC_2.jpg","type":"image","category":"brands","categories":["brands","fashion"],"album":"@tisou.official / 3"},{"path":"03_Brand_Collaborations/@tisou.official/3/2025-01-23_06-06-39_UTC_3.jpg","type":"image","category":"brands","categories":["brands","fashion"],"album":"@tisou.official / 3"},{"path":"03_Brand_Collaborations/@tisou.official/3/2025-01-23_06-06-39_UTC_4.jpg","type":"image","category":"brands","categories":["brands","fashion"],"album":"@tisou.official / 3"},{"path":"03_Brand_Collaborations/@tisou.official/3/2025-01-23_06-06-39_UTC_5.jpg","type":"image","category":"brands","categories":["brands","fashion"],"album":"@tisou.official / 3"},{"path":"03_Brand_Collaborations/@tisou.official/4/2025-02-04_05-20-55_UTC_1.jpg","type":"image","category":"brands","categories":["brands","fashion"],"album":"@tisou.official / 4"},{"path":"03_Brand_Collaborations/@tisou.official/4/2025-02-04_05-20-55_UTC_2.jpg","type":"image","category":"brands","categories":["brands","fashion"],"album":"@tisou.official / 4"},{"path":"03_Brand_Collaborations/@tisou.official/4/2025-02-04_05-20-55_UTC_3.jpg","type":"image","category":"brands","categories":["brands","fashion"],"album":"@tisou.official / 4"},{"path":"03_Brand_Collaborations/@tisou.official/4/2025-02-04_05-20-55_UTC_4.jpg","type":"image","category":"brands","categories":["brands","fashion"],"album":"@tisou.official / 4"},{"path":"03_Brand_Collaborations/@tisou.official/5/2025-03-27_11-28-38_UTC_1.jpg","type":"image","category":"brands","categories":["brands","fashion"],"album":"@tisou.official / 5"},{"path":"03_Brand_Collaborations/@tisou.official/5/2025-03-27_11-28-38_UTC_2.jpg","type":"image","category":"brands","categories":["brands","fashion"],"album":"@tisou.official / 5"},{"path":"03_Brand_Collaborations/@tisou.official/5/2025-03-27_11-28-38_UTC_3.jpg","type":"image","category":"brands","categories":["brands","fashion"],"album":"@tisou.official / 5"},{"path":"03_Brand_Collaborations/@tisou.official/5/2025-03-27_11-28-38_UTC_4.jpg","type":"image","category":"brands","categories":["brands","fashion"],"album":"@tisou.official / 5"},{"path":"03_Brand_Collaborations/@tisou.official/6/2025-03-06_11-44-50_UTC_1.jpg","type":"image","category":"brands","categories":["brands","fashion"],"album":"@tisou.official / 6"},{"path":"03_Brand_Collaborations/@tisou.official/6/2025-03-06_11-44-50_UTC_2.jpg","type":"image","category":"brands","categories":["brands","fashion"],"album":"@tisou.official / 6"},{"path":"03_Brand_Collaborations/@tisou.official/6/2025-03-06_11-44-50_UTC_3.jpg","type":"image","category":"brands","categories":["brands","fashion"],"album":"@tisou.official / 6"},{"path":"03_Brand_Collaborations/@tisou.official/6/2025-03-06_11-44-50_UTC_4.jpg","type":"image","category":"brands","categories":["brands","fashion"],"album":"@tisou.official / 6"},{"path":"03_Brand_Collaborations/@tisou.official/6/2025-03-06_11-44-50_UTC_5.jpg","type":"image","category":"brands","categories":["brands","fashion"],"album":"@tisou.official / 6"},{"path":"03_Brand_Collaborations/@tisou.official/6/2025-03-06_11-44-50_UTC_6.jpg","type":"image","category":"brands","categories":["brands","fashion"],"album":"@tisou.official / 6"},{"path":"03_Brand_Collaborations/@tisou.official/7/2025-06-16_07-53-33_UTC_1.jpg","type":"image","category":"brands","categories":["brands","fashion"],"album":"@tisou.official / 7"},{"path":"03_Brand_Collaborations/@tisou.official/7/2025-06-16_07-53-33_UTC_2.jpg","type":"image","category":"brands","categories":["brands","fashion"],"album":"@tisou.official / 7"},{"path":"03_Brand_Collaborations/@tisou.official/7/2025-06-16_07-53-33_UTC_3.jpg","type":"image","category":"brands","categories":["brands","fashion"],"album":"@tisou.official / 7"},{"path":"03_Brand_Collaborations/@tisou.official/7/2025-06-16_07-53-33_UTC_4.jpg","type":"image","category":"brands","categories":["brands","fashion"],"album":"@tisou.official / 7"},{"path":"03_Brand_Collaborations/@tisou.official/7/2025-06-16_07-53-33_UTC_5.jpg","type":"image","category":"brands","categories":["brands","fashion"],"album":"@tisou.official / 7"},{"path":"03_Brand_Collaborations/@tisou.official/7/2025-06-16_07-53-33_UTC_6.jpg","type":"image","category":"brands","categories":["brands","fashion"],"album":"@tisou.official / 7"},{"path":"03_Brand_Collaborations/@tisou.official/7/2025-06-16_07-53-33_UTC_7.jpg","type":"image","category":"brands","categories":["brands","fashion"],"album":"@tisou.official / 7"},{"path":"03_Brand_Collaborations/@tisou.official/8/2025-06-19_12-08-08_UTC_1.jpg","type":"image","category":"brands","categories":["brands","fashion"],"album":"@tisou.official / 8"},{"path":"03_Brand_Collaborations/@tisou.official/8/2025-06-19_12-08-08_UTC_2.jpg","type":"image","category":"brands","categories":["brands","fashion"],"album":"@tisou.official / 8"},{"path":"03_Brand_Collaborations/@tisou.official/8/2025-06-19_12-08-08_UTC_3.jpg","type":"image","category":"brands","categories":["brands","fashion"],"album":"@tisou.official / 8"},{"path":"03_Brand_Collaborations/@tisou.official/9/2025-08-04_12-57-48_UTC.mp4","type":"video","category":"brands","categories":["brands","fashion"],"album":"@tisou.official / 9"},{"path":"03_Brand_Collaborations/@titre_3/2026-05-10_13-06-23_UTC.mp4","type":"video","category":"brands","categories":["brands"],"album":"@titre_3"},{"path":"03_Brand_Collaborations/@titre_3/2026-05-10_16-19-22_UTC.mp4","type":"video","category":"brands","categories":["brands"],"album":"@titre_3"},{"path":"03_Brand_Collaborations/@titre_3/2026-08-13_10-48-24_UTC.mp4","type":"video","category":"brands","categories":["brands"],"album":"@titre_3"},{"path":"03_Brand_Collaborations/@titre_3/Titre backstage/2026-10-10_14-02-37_UTC_1.jpg","type":"image","category":"brands","categories":["brands","fashion"],"album":"@titre_3 / Titre backstage"},{"path":"03_Brand_Collaborations/@titre_3/Titre backstage/2026-10-10_14-02-37_UTC_10.jpg","type":"image","category":"brands","categories":["brands"],"album":"@titre_3 / Titre backstage"},{"path":"03_Brand_Collaborations/@titre_3/Titre backstage/2026-10-10_14-02-37_UTC_11.jpg","type":"image","category":"brands","categories":["brands"],"album":"@titre_3 / Titre backstage"},{"path":"03_Brand_Collaborations/@titre_3/Titre backstage/2026-10-10_14-02-37_UTC_12.jpg","type":"image","category":"brands","categories":["brands"],"album":"@titre_3 / Titre backstage"},{"path":"03_Brand_Collaborations/@titre_3/Titre backstage/2026-10-10_14-02-37_UTC_13.jpg","type":"image","category":"brands","categories":["brands"],"album":"@titre_3 / Titre backstage"},{"path":"03_Brand_Collaborations/@titre_3/Titre backstage/2026-10-10_14-02-37_UTC_14.jpg","type":"image","category":"brands","categories":["brands"],"album":"@titre_3 / Titre backstage"},{"path":"03_Brand_Collaborations/@titre_3/Titre backstage/2026-10-10_14-02-37_UTC_15.jpg","type":"image","category":"brands","categories":["brands"],"album":"@titre_3 / Titre backstage"},{"path":"03_Brand_Collaborations/@titre_3/Titre backstage/2026-10-10_14-02-37_UTC_16.jpg","type":"image","category":"brands","categories":["brands"],"album":"@titre_3 / Titre backstage"},{"path":"03_Brand_Collaborations/@titre_3/Titre backstage/2026-10-10_14-02-37_UTC_17.jpg","type":"image","category":"brands","categories":["brands"],"album":"@titre_3 / Titre backstage"},{"path":"03_Brand_Collaborations/@titre_3/Titre backstage/2026-10-10_14-02-37_UTC_18.jpg","type":"image","category":"brands","categories":["brands"],"album":"@titre_3 / Titre backstage"},{"path":"03_Brand_Collaborations/@titre_3/Titre backstage/2026-10-10_14-02-37_UTC_2.jpg","type":"image","category":"brands","categories":["brands","fashion"],"album":"@titre_3 / Titre backstage"},{"path":"03_Brand_Collaborations/@titre_3/Titre backstage/2026-10-10_14-02-37_UTC_3.jpg","type":"image","category":"brands","categories":["brands","fashion"],"album":"@titre_3 / Titre backstage"},{"path":"03_Brand_Collaborations/@titre_3/Titre backstage/2026-10-10_14-02-37_UTC_4.jpg","type":"image","category":"brands","categories":["brands"],"album":"@titre_3 / Titre backstage"},{"path":"03_Brand_Collaborations/@titre_3/Titre backstage/2026-10-10_14-02-37_UTC_5.mp4","type":"video","category":"brands","categories":["brands"],"album":"@titre_3 / Titre backstage"},{"path":"03_Brand_Collaborations/@titre_3/Titre backstage/2026-10-10_14-02-37_UTC_6.jpg","type":"image","category":"brands","categories":["brands"],"album":"@titre_3 / Titre backstage"},{"path":"03_Brand_Collaborations/@titre_3/Titre backstage/2026-10-10_14-02-37_UTC_7.jpg","type":"image","category":"brands","categories":["brands"],"album":"@titre_3 / Titre backstage"},{"path":"03_Brand_Collaborations/@titre_3/Titre backstage/2026-10-10_14-02-37_UTC_8.jpg","type":"image","category":"brands","categories":["brands"],"album":"@titre_3 / Titre backstage"},{"path":"03_Brand_Collaborations/@titre_3/Titre backstage/2026-10-10_14-02-37_UTC_9.jpg","type":"image","category":"brands","categories":["brands"],"album":"@titre_3 / Titre backstage"},{"path":"04_Art_And_Personal/2026-10-25_15-33-01_UTC.mp4","type":"video","category":"art","categories":["art"],"album":"personal"},{"path":"03_Brand_Collaborations/@mardan/Mardan1 and also film frame.jpg","type":"image","category":"brands","categories":["brands","film"],"album":"Mardan"},{"path":"03_Brand_Collaborations/@mardan/Mardan1.jpg","type":"image","category":"brands","categories":["brands"],"album":"Mardan"},{"path":"03_Brand_Collaborations/@mardan/Mardan2.jpg","type":"image","category":"brands","categories":["brands"],"album":"Mardan"},{"path":"03_Brand_Collaborations/@mardan/Mardan3.jpg","type":"image","category":"brands","categories":["brands"],"album":"Mardan"},{"path":"03_Brand_Collaborations/@mardan/Mardan4.jpg","type":"image","category":"brands","categories":["brands"],"album":"Mardan"},{"path":"03_Brand_Collaborations/@vfwalmaty/Visa photo.jpg","type":"image","category":"brands","categories":["brands"],"album":"@vfwalmaty"},{"path":"03_Brand_Collaborations/@vfwalmaty/Visa vid.mp4","type":"video","category":"brands","categories":["brands"],"album":"@vfwalmaty"},{"path":"04_Art_And_Personal/film/FilmKori1.jpg","type":"image","category":"film","categories":["film"],"album":"Film"},{"path":"04_Art_And_Personal/film/FilmKori10.jpg","type":"image","category":"film","categories":["film"],"album":"Film"},{"path":"04_Art_And_Personal/film/FilmKori2.jpg","type":"image","category":"film","categories":["film"],"album":"Film"},{"path":"04_Art_And_Personal/film/FilmKori3.jpg","type":"image","category":"film","categories":["film"],"album":"Film"},{"path":"04_Art_And_Personal/film/FilmKori4.jpg","type":"image","category":"film","categories":["film"],"album":"Film"},{"path":"04_Art_And_Personal/film/FilmKori5.webp","type":"image","category":"film","categories":["film"],"album":"Film"},{"path":"04_Art_And_Personal/film/FilmKori6.jpg","type":"image","category":"film","categories":["film"],"album":"Film"},{"path":"04_Art_And_Personal/film/FilmKori7.jpg","type":"image","category":"film","categories":["film"],"album":"Film"},{"path":"04_Art_And_Personal/film/FilmKori8.jpg","type":"image","category":"film","categories":["film"],"album":"Film"},{"path":"04_Art_And_Personal/film/FilmKori9.jpg","type":"image","category":"film","categories":["film"],"album":"Film"},{"path":"04_Art_And_Personal/blue hour.mp4","type":"video","category":"art","categories":["art"],"album":"Personal"},{"path":"02_Backstage_And_Process/backstage_compressed.webm","type":"video","category":"backstage","categories":["backstage"],"album":"Backstage"}];

const DEFAULT_META_BY_PATH = new Map();
PORTFOLIO_MODULES.forEach(mod => {
    mod.folders.forEach(def => def.files.forEach(f => {
        DEFAULT_META_BY_PATH.set(f.p, { stars: f.s || 2, hashtags: [] });
    }));
});

function getItemCategories(item) {
    const values = Array.isArray(item && item.categories) ? item.categories.slice() : [];
    if (item && item.category && !values.includes(item.category)) values.unshift(item.category);
    return [...new Set(values.filter(v => ['fashion','event','brands','art','film','backstage'].includes(v)))];
}
function itemHasCategory(item, section) {
    return getItemCategories(item).includes(section);
}
function getDefaultAlbumForPath(path) {
    const def = REPO_MEDIA_FILES.find(x => x.path === path);
    if (def) return def.album;
    if (!path || path.indexOf('data:') === 0) return 'uploads';
    const parts = path.split('/');
    return parts.length > 1 ? parts.slice(0,-1).join(' / ') : 'uploads';
}
function categoryHashtag(category) {
    return '#' + category;
}

const DEFAULT_PORTFOLIO = REPO_MEDIA_FILES.map(def => {
    const meta = DEFAULT_META_BY_PATH.get(def.path) || {};
    const categories = def.categories.slice();
    const item = {
        path: def.path, type: def.type, category: def.category, categories,
        album: def.album, hashtags: [...new Set(categories.map(categoryHashtag))],
        scale: 1, x: 0, y: 0
    };
    if (meta.hashtags && meta.hashtags.length) item.hashtags = [...new Set(item.hashtags.concat(meta.hashtags))];
    return item;
});

/* ══════════════════════════════════════════════════════════════
   СОСТОЯНИЕ
   ══════════════════════════════════════════════════════════════ */
let portfolioItems = [];
let blogPosts = [];
let customAlbums = [];
let aboutText = {
    en: "I’m Korlan, a photographer and videographer currently based in Bangkok, Thailand. I create visual stories through photography and video, with a focus on people, brands and meaningful moments. I’m open to creative projects and collaborations. For enquiries and bookings, please get in touch via Instagram: @kkkorlan.",
    ru: "Меня зовут Курлан. Я фотограф и видеограф, сейчас нахожусь в Бангкоке, Таиланд. Создаю визуальные истории через фотографию и видео, работаю с людьми, брендами и интересными проектами. Открыт к сотрудничеству и новым предложениям. По вопросам съемок и сотрудничества пишите в Instagram: @kkkorlan.",
    kz: "Менің атым Құрлан. Мен фотограф және видеографпын, қазір Тайландтың Бангкок қаласындамын. Фотография мен видео арқылы адамдар, брендтер және маңызды сәттер туралы визуалды оқиғалар жасаймын. Шығармашылық жобалар мен ынтымақтастыққа ашықпын. Түсірілім және ұсыныстар бойынша Instagram арқылы хабарласыңыз: @kkkorlan.",
    vi: "Mình là Korlan, nhiếp ảnh gia và nhà quay phim hiện đang ở Bangkok, Thái Lan. Mình kể những câu chuyện bằng hình ảnh và video, tập trung vào con người, thương hiệu và những khoảnh khắc ý nghĩa. Mình luôn sẵn sàng cho các dự án sáng tạo và hợp tác. Để trao đổi công việc, vui lòng liên hệ qua Instagram: @kkkorlan."
};
let aboutPhotos = [];
let renderedItems = [];
let currentTab = 'all';
let allFeedItems = [];
let allFeedIndex = 0;
let allFeedObserver = null;
const ALL_BATCH_SIZE = 12;
let mediaPickerMode = 'post';
let pendingPostMedia = '';
let pickerSelection = [];
let lastPickerIdx = -1;

let lbSeries = [];
let lbIndex = -1;
let activeAvatar = 'portfolio my photo.png';

(function loadSiteData() {
    let data = null;
    try { data = window.__KORLAN_SITE_DATA__ || null; } catch (e) {}

    if (data && Array.isArray(data.portfolio) && data.portfolio.length) {
        portfolioItems = data.portfolio;
    } else {
        const draft = localStorage.getItem('korlan_portfolio_data');
        portfolioItems = draft ? JSON.parse(draft) : DEFAULT_PORTFOLIO.slice();
    }

    if (data && Array.isArray(data.blog) && data.blog.length) {
        blogPosts = data.blog;
    } else {
        const draft = localStorage.getItem('korlan_blog_data');
        blogPosts = draft ? JSON.parse(draft) : [];
    }

    if (data && Array.isArray(data.albums)) {
        customAlbums = data.albums;
    } else {
        const draft = localStorage.getItem('korlan_albums_data');
        customAlbums = draft ? JSON.parse(draft) : [];
    }

    if (data && typeof data.about === 'object' && data.about !== null) {
        aboutText = data.about;
    } else {
        const draft = localStorage.getItem('korlan_about_data');
        if (draft) {
            try { aboutText = JSON.parse(draft); } catch (e) {}
        }
    }

    if (data && Array.isArray(data.aboutPhotos)) {
        aboutPhotos = data.aboutPhotos;
    } else {
        const draft = localStorage.getItem('korlan_about_photos');
        if (draft) {
            try { aboutPhotos = JSON.parse(draft); } catch (e) { aboutPhotos = []; }
        }
    }
})();
 
// Exclude portraits that do not work well in the circular About avatar.
const EXCLUDED_ABOUT_PHOTOS = new Set(['me1.webp', 'me3.jpg', 'me5.jpg']);
aboutPhotos = aboutPhotos.filter(photo => !EXCLUDED_ABOUT_PHOTOS.has(String(photo || '').split('/').pop().toLowerCase()));

// Keep the Tisou brand selection consistent even when an older browser draft exists.
const TISOU11_KEEP = new Set([
    '03_Brand_Collaborations/@tisou.official/11/2025-07-15_05-27-27_UTC_1.jpg',
    '03_Brand_Collaborations/@tisou.official/11/2025-07-15_05-27-27_UTC_2.jpg',
    '03_Brand_Collaborations/@tisou.official/11/2025-07-15_05-27-27_UTC_3.jpg'
]);
portfolioItems = portfolioItems.filter(item => {
    const path = String(item && (item.path || item.p) || '');
    if (path.includes('/@tisou.official/10/')) return false;
    if (path.includes('/@tisou.official/11/')) return TISOU11_KEEP.has(path);
    return true;
});
customAlbums = customAlbums.filter(album => !String(album && (album.name || album.album) || '').includes('@tisou.official / c10'));

// Replace outdated About drafts that mention CapCut classes with the current approved bio.
if (Object.values(aboutText || {}).some(value => /capcut|masterclass|мастер-класс|мастер-клас/i.test(String(value))) || /Я Кори, фотограф и видеограф/.test(String(aboutText.ru || ''))) {
    aboutText = {
        en: 'Hi, I am Korlan. I am a young photographer, videographer, director and model. I have been doing photography for almost three years, and I genuinely love what I do.\n\nI am currently travelling around Central Asia. Maybe soon I will start sharing blogs and vlogs here too.\n\nSay hello: @kkkorlan',
        ru: 'Всем привет, меня зовут Корлан.\n\nЯ молодая фотограф, видеограф, режиссер и модель. Занимаюсь фотографией почти три года, и мне действительно нравится моя работа.\n\nСейчас я путешествую по Центральной Азии. Возможно, скоро начну делиться здесь блогами и влогами.\n\nБуду рада знакомству: @kkkorlan',
        kz: 'Мен Кори, фотограф және видеографпын. Адамдардың шынайы эмоцияларын, тыныш сәттерді және оқиғаны ерекше ететін ұсақ бөлшектерді жақсы көремін.\n\nШығармашылық жобаларға, брендтермен ынтымақтастыққа және жеке фотосессияларға ашықпын.\n\nХабарласыңыз: @kkkorlan',
        vi: 'Mình là Korlan, nhiếp ảnh gia và nhà quay phim. Mình yêu những cảm xúc chân thật, khoảnh khắc nhẹ nhàng và các chi tiết nhỏ tạo nên câu chuyện riêng.\n\nMình luôn sẵn sàng cho các dự án sáng tạo, hợp tác cùng thương hiệu và chụp ảnh cá nhân.\n\nRất vui được kết nối: @kkkorlan'
    };
}

function mergePortfolioWithDefaults(savedItems) {
    const savedByPath = new Map();
    (Array.isArray(savedItems) ? savedItems : []).forEach(item => {
        if (!item || !item.path) return;
        const old = savedByPath.get(item.path);
        if (!old) savedByPath.set(item.path, item);
        else {
            const categories = [...new Set(getItemCategories(old).concat(getItemCategories(item)))];
            savedByPath.set(item.path, { ...old, ...item, categories, category: item.category || old.category });
        }
    });
    const merged = DEFAULT_PORTFOLIO.map(def => {
        const saved = savedByPath.get(def.path);
        if (!saved) return { ...def, categories: def.categories.slice(), hashtags: def.hashtags.slice() };
        savedByPath.delete(def.path);
        const categories = [...new Set(getItemCategories(def).concat(getItemCategories(saved)))];
        return {
            ...def, ...saved,
            category: saved.category && categories.includes(saved.category) ? saved.category : def.category,
            categories,
            album: def.album,
            hashtags: [...new Set((def.hashtags || []).concat(saved.hashtags || [], categories.map(categoryHashtag)))]
        };
    });
    savedByPath.forEach(item => {
        const categories = getItemCategories(item);
        merged.push({ ...item, categories, category: item.category || categories[0] || 'art', album: item.album || getDefaultAlbumForPath(item.path) });
    });
    return merged;
}
portfolioItems = mergePortfolioWithDefaults(portfolioItems);
portfolioItems.forEach(item => {
    if (typeof item.featuredAll !== 'boolean') item.featuredAll = false;
});

// Curated section placement for selected work. These overrides also migrate older saved browser data.
const CURATED_SECTION_OVERRIDES = new Map([
    ["01_Main_Fashion_Commercial/Video by kkkorlan [DIJQLXFIGu1].mp4", { categories: ['brands'], album: '@fujifilmkazakhstan' }],
    ['02_Backstage_And_Process/Video by kkkorlan [DPtGmaEiL_z].mp4', { categories: ['backstage'], album: 'Backstage' }],
    ['02_Backstage_And_Process/backstage_compressed.webm', { categories: ['backstage'], album: 'Backstage' }],
    ...["03_Brand_Collaborations/@aimaq_kz/2026-02-27_09-31-51_UTC.jpg","03_Brand_Collaborations/@aimaq_kz/2026-03-04_14-32-18_UTC_1.jpg","03_Brand_Collaborations/@aimaq_kz/2026-03-28_13-00-25_UTC_1.jpg","03_Brand_Collaborations/@thesix.kz/2026-05-10_11-49-47_UTC_1.jpg","03_Brand_Collaborations/@thesix.kz/2026-05-10_11-49-47_UTC_2.jpg","03_Brand_Collaborations/@thesix.kz/2026-05-11_12-19-45_UTC_1.jpg","03_Brand_Collaborations/@tisou.official/1/2024-12-16_12-57-14_UTC_1.jpg","03_Brand_Collaborations/@tisou.official/1/2024-12-16_12-57-14_UTC_2.jpg","03_Brand_Collaborations/@tisou.official/2/2025-01-22_12-58-33_UTC_1.jpg","03_Brand_Collaborations/@titre_3/Titre backstage/2026-10-10_14-02-37_UTC_1.jpg","03_Brand_Collaborations/@titre_3/Titre backstage/2026-10-10_14-02-37_UTC_2.jpg","03_Brand_Collaborations/@titre_3/Titre backstage/2026-10-10_14-02-37_UTC_3.jpg","03_Brand_Collaborations/@offbeatkz/2026-07-04_06-33-31_UTC.mp4","03_Brand_Collaborations/@offbeatkz/2026-07-17_13-27-40_UTC.mp4"].map(path => [path, { categories: [...new Set([...(REPO_MEDIA_FILES.find(item => item.path === path)?.categories || []), 'fashion'])] }])
]);
portfolioItems.forEach(item => {
    const override = CURATED_SECTION_OVERRIDES.get(item.path);
    if (override) {
        item.categories = override.categories.slice();
        item.category = item.categories[0];
        if (override.album) item.album = override.album;
        item.hashtags = [...new Set((item.hashtags || []).filter(tag => !['#fashion','#event','#brands','#art'].includes(tag)).concat(item.categories.map(categoryHashtag)))];
    }
    if (item.path.startsWith('03_Brand_Collaborations/@atelierbar.almaty/')) {
        item.categories = [...new Set(getItemCategories(item).concat('event'))];
        item.category = item.category || 'brands';
        item.hashtags = [...new Set((item.hashtags || []).concat('#event'))];
    }
    if (item.path.startsWith('03_Brand_Collaborations/@chocolatebeautysalon /')) {
        item.album = (item.album || '').replace('@chocolatebeautysalon ', '@chocolatebeautysalon');
    }
});

portfolioItems.forEach(it => {
    if (typeof it.stars === 'string') it.stars = (it.stars.match(/★/g) || []).length || 2;
    if (typeof it.stars !== 'number' || it.stars < 1) it.stars = 2;
    it.categories = getItemCategories(it);
    if (!it.categories.length) it.categories = [it.category || 'art'];
    if (!it.category || !it.categories.includes(it.category)) it.category = it.categories[0];
    if (!Array.isArray(it.hashtags)) it.hashtags = [];
    it.categories.forEach(c => { const tag = categoryHashtag(c); if (!it.hashtags.includes(tag)) it.hashtags.push(tag); });
    if (it.scale === undefined) it.scale = 1;
    if (it.x === undefined) it.x = 0;
    if (it.y === undefined) it.y = 0;
});

function resolveRandomAvatar() {
    return 'portfolio my photo.png';
}

/* ══════════════════════════════════════════════════════════════
   ИНИЦИАЛИЗАЦИЯ
   ══════════════════════════════════════════════════════════════ */
whenDomReady(() => {
    activeAvatar = resolveRandomAvatar();
    
    document.querySelectorAll('.about-avatar, .post-avatar').forEach(img => {
        img.src = activeAvatar;
        img.onerror = function() {
            this.onerror = null;
            this.src = 'portfolio my photo.png';
        };
    });

    setLang(currentLang);
    switchTab('all');

    document.getElementById('gh-user').value = localStorage.getItem('gh_repo_owner') || 'aiz1k1989-web';
    document.getElementById('gh-repo').value = localStorage.getItem('gh_repo_name') || 'portfolio';
    document.getElementById('gh-branch').value = localStorage.getItem('gh_repo_branch') || 'main';
    const savedDataPath = localStorage.getItem('gh_file_path');
    document.getElementById('gh-path').value = savedDataPath && savedDataPath !== 'index.html' ? savedDataPath : 'data/site-data.json';

    renderAboutPhotosEditor();
});

function checkAdminToken() {
    let token = localStorage.getItem('gh_pat_token');
    if (!token) {
        token = prompt('🔒 login. enter github personal access token (ghp_...):');
        if (token) localStorage.setItem('gh_pat_token', token.trim());
    }
    if (localStorage.getItem('gh_pat_token')) {
        document.body.classList.add('admin-mode');
        renderPortfolio(currentTab);
    }
}
function logoutAdmin() {
    localStorage.removeItem('gh_pat_token');
    document.body.classList.remove('admin-mode');
    history.replaceState(null, '', window.location.pathname);
    renderPortfolio(currentTab);
    alert('🔒 logged out.');
}

/* ══════════════════════════════════════════════════════════════
   НАВИГАЦИЯ
   ══════════════════════════════════════════════════════════════ */
function switchTab(tab, btnEl) {
    currentTab = tab;
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    if (btnEl) btnEl.classList.add('active');
    else {
        const b = document.querySelector('.tab-btn[data-tab="' + tab + '"]');
        if (b) b.classList.add('active');
    }

    const main = document.getElementById('portfolio-main');
    const feed = document.getElementById('blog-feed');
    const about = document.getElementById('about-section');

    main.style.display = 'none';
    feed.style.display = 'none';
    about.classList.remove('active');

    if (tab === 'blog') {
        feed.style.display = 'flex';
        renderBlog();
    } else if (tab === 'about') {
        about.classList.add('active');
        renderAbout();
    } else {
        main.style.display = 'block';
        renderPortfolio(tab);
    }
}

/* ══════════════════════════════════════════════════════════════
   ЛЕНТА "ALL" (Высокие рейтинги сверху)
   ══════════════════════════════════════════════════════════════ */
function buildAllFeed(items) {
    return items.filter(item => item.featuredAll === true)
        .sort((a, b) => (a.type === 'image' ? 0 : 1) - (b.type === 'image' ? 0 : 1) || (a.allOrder || 0) - (b.allOrder || 0));
}
function toggleFeaturedAll(idx) {
    const item = renderedItems[idx];
    if (!item || !document.body.classList.contains('admin-mode')) return;
    if (!item.featuredAll) {
        item.featuredAll = true;
        item.allOrder = Math.max(0, ...portfolioItems.filter(x => x.featuredAll).map(x => x.allOrder || 0)) + 1;
    } else {
        item.featuredAll = false;
        item.allOrder = 0;
        portfolioItems.filter(x => x.featuredAll).sort((a,b)=>(a.allOrder||0)-(b.allOrder||0)).forEach((x,i)=>x.allOrder=i+1);
    }
    saveLocal();
    renderPortfolio(currentTab);
}
function shuffle(arr) {
    const r = arr.slice();
    for (let i = r.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [r[i], r[j]] = [r[j], r[i]];
    }
    return r;
}

/* ══════════════════════════════════════════════════════════════
   РЕНДЕР ПОРТФОЛИО
   ══════════════════════════════════════════════════════════════ */
function renderPortfolio(tab) {
    const main = document.getElementById('portfolio-main');
    if (allFeedObserver) { allFeedObserver.disconnect(); allFeedObserver = null; }
    main.innerHTML = '';
    renderedItems = [];
    if (tab === 'all') {
        allFeedItems = buildAllFeed(portfolioItems);
        allFeedIndex = 0;
        if (!allFeedItems.length) {
            const empty = document.createElement('div'); empty.className = 'all-empty';
            empty.textContent = document.body.classList.contains('admin-mode')
                ? 'All is your personal edit. Open Fashion or Brands and press + ALL on the images you want to feature, then save to GitHub.'
                : 'A curated selection of work is coming soon.';
            main.appendChild(empty);
            if (document.body.classList.contains('admin-mode')) {
                const manage = document.createElement('button'); manage.className='btn secondary'; manage.textContent='Open Fashion'; manage.style.margin='0 auto 60px'; manage.onclick=()=>switchTab('fashion'); main.appendChild(manage);
            }
            return;
        }
        const grid = document.createElement('div'); grid.className = 'all-collage'; grid.id = 'all-feed-grid';
        grid.style.maxWidth = '1600px'; grid.style.margin = '0 auto'; main.appendChild(grid);
        const sentinel = document.createElement('div'); sentinel.id = 'all-feed-sentinel'; sentinel.style.cssText = 'height:1px;width:100%;'; main.appendChild(sentinel);
        loadMoreAll();
        if ('IntersectionObserver' in window) {
            allFeedObserver = new IntersectionObserver(entries => { if (entries.some(e => e.isIntersecting)) loadMoreAll(); }, { rootMargin:'900px 0px' });
            allFeedObserver.observe(sentinel);
        }
    } else renderSectionWithAlbums(main, tab);
    observeMedia();
}
function loadMoreAll() {
    const grid = document.getElementById('all-feed-grid');
    if (!grid || allFeedIndex >= allFeedItems.length) return;
    const fragment = document.createDocumentFragment();
    const stop = Math.min(allFeedIndex + ALL_BATCH_SIZE, allFeedItems.length);
    for (; allFeedIndex < stop; allFeedIndex++) {
        const item = allFeedItems[allFeedIndex], idx = renderedItems.length;
        renderedItems.push(item); fragment.appendChild(makeCard(item, idx));
    }
    grid.appendChild(fragment); observeMedia();
    if (allFeedIndex >= allFeedItems.length && allFeedObserver) { allFeedObserver.disconnect(); allFeedObserver = null; const sentinel=document.getElementById('all-feed-sentinel'); if(sentinel) sentinel.remove(); }
}

function renderSectionWithAlbums(container, section) {
    const sortVideosFirst = (a, b) => Number(b.type === 'video') - Number(a.type === 'video');
    const items = portfolioItems.filter(i => itemHasCategory(i, section));
    if (section === 'fashion' || section === 'brands') items.sort(sortVideosFirst);
    const makeGrid = list => {
        const grid = document.createElement('div');
        grid.className = 'portfolio-grid';
        list.forEach(item => {
            const idx = renderedItems.length;
            renderedItems.push(item);
            grid.appendChild(makeCard(item, idx));
        });
        return grid;
    };
    if (section === 'brands') {
        const brands = new Map();
        items.forEach(item => {
            const parts = (item.album || 'other').split(' / ');
            const brand = (parts.shift() || 'other').trim();
            if (!brands.has(brand)) brands.set(brand, []);
            brands.get(brand).push(item);
        });
        customAlbums.filter(album => album.section === section).forEach(album => {
            const parts = (album.name || 'other').split(' / ');
            const brand = (parts.shift() || 'other').trim();
            if (!brands.has(brand)) brands.set(brand, []);
        });

        const brandGrid = document.createElement('div');
        brandGrid.className = 'brands-index-grid';
        container.appendChild(brandGrid);

        const brandNames = [...brands.keys()].sort((a, b) => {
            const aTisou = a.toLowerCase() === '@tisou.official';
            const bTisou = b.toLowerCase() === '@tisou.official';
            if (aTisou !== bTisou) return aTisou ? 1 : -1;
            const aVideos = brands.get(a).filter(item => item.type === 'video').length;
            const bVideos = brands.get(b).filter(item => item.type === 'video').length;
            if (aVideos !== bVideos) return bVideos - aVideos;
            return a.localeCompare(b);
        });

        brandNames.forEach(brand => {
            const brandItems = brands.get(brand).slice().sort(sortVideosFirst);
            const details = document.createElement('details');
            details.className = 'brand-accordion';
            const summary = document.createElement('summary');
            summary.className = 'brand-accordion-title';

            const coverItem = brandItems.find(item => item.type === 'image') || brandItems[0];
            if (coverItem) {
                const cover = document.createElement('img');
                cover.className = 'brand-cover';
                cover.src = encodeMediaPath(coverItem.path);
                cover.loading = 'lazy';
                cover.decoding = 'async';
                cover.alt = '';
                summary.appendChild(cover);
            }

            const name = document.createElement('span');
            name.textContent = brand;
            const count = document.createElement('span');
            count.className = 'brand-accordion-count';
            count.textContent = brandItems.length + (brandItems.length === 1 ? ' work' : ' works');
            summary.append(name, count);
            details.appendChild(summary);

            let built = false;
            details.addEventListener('toggle', () => {
                if (!details.open || built) return;
                built = true;
                const grid = document.createElement('div');
                grid.className = 'portfolio-grid brand-mosaic';
                brandItems.forEach(item => {
                    const index = renderedItems.length;
                    renderedItems.push(item);
                    grid.appendChild(makeCard(item, index));
                });
                details.appendChild(grid);
                observeMedia();
            });
            brandGrid.appendChild(details);
        });
        return;
    }
    const albums = {};
    items.forEach(it => {
        const key = it.album || 'other';
        (albums[key] = albums[key] || []).push(it);
    });
    customAlbums.filter(a => a.section === section).forEach(a => {
        if (!albums[a.name]) albums[a.name] = [];
    });
    const albumNames = Object.keys(albums).sort((a, b) => {
        if (section === 'fashion') {
            const aTisou = a.toLowerCase().startsWith('@tisou.official / ');
            const bTisou = b.toLowerCase().startsWith('@tisou.official / ');
            if (aTisou !== bTisou) return aTisou ? 1 : -1;
            if (aTisou && bTisou) {
                const priority = ['16', '14', '12', '7', '1'];
                const aGroup = a.split('/').pop().trim();
                const bGroup = b.split('/').pop().trim();
                const aRank = priority.indexOf(aGroup) === -1 ? 99 : priority.indexOf(aGroup);
                const bRank = priority.indexOf(bGroup) === -1 ? 99 : priority.indexOf(bGroup);
                if (aRank !== bRank) return aRank - bRank;
                const aVideos = albums[a].filter(item => item.type === 'video').length;
                const bVideos = albums[b].filter(item => item.type === 'video').length;
                if (aVideos !== bVideos) return bVideos - aVideos;
                return Number(aGroup) - Number(bGroup);
            }
            const aVideos = albums[a].filter(item => item.type === 'video').length;
            const bVideos = albums[b].filter(item => item.type === 'video').length;
            if (aVideos !== bVideos) return bVideos - aVideos;
        }
        return a.localeCompare(b, undefined, {numeric:true});
    });
    if (!albumNames.length) {
        const msg = document.createElement('p');
        msg.style.cssText = 'color:var(--muted);text-align:center;padding:60px 20px;font-size:0.85rem;';
        msg.textContent = i18n[currentLang].empty_section;
        container.appendChild(msg);
        return;
    }
    albumNames.forEach(name => {
        const sectionEl = document.createElement('div');
        sectionEl.className = 'album-section';
        const title = document.createElement('div');
        title.className = 'album-title';
        const titleText = document.createElement('span');
        titleText.textContent = name;
        title.appendChild(titleText);
        if (document.body.classList.contains('admin-mode')) {
            const delBtn = document.createElement('button');
            delBtn.className = 'album-del-btn';
            delBtn.textContent = '✕ ' + i18n[currentLang].btn_delete_album;
            delBtn.onclick = () => deleteAlbum(section, name);
            title.appendChild(delBtn);
        }
        sectionEl.appendChild(title);
        if (albums[name].length) sectionEl.appendChild(makeGrid(albums[name]));
        container.appendChild(sectionEl);
    });
}

function encodeMediaPath(path) {
    if (!path || path.indexOf('data:') === 0 || /^https?:\/\//i.test(path)) return path;
    return path.split('/').map(segment => encodeURIComponent(segment)).join('/');
}

function makeCard(item, idx) {
    const card = document.createElement('div');
    card.className = 'card';
    card.dataset.i = idx;

    const mediaWrap = document.createElement('div');
    mediaWrap.className = 'card-media-wrap';
    
    let mediaEl;
    if (item.type === 'video') {
        mediaEl = document.createElement('video');
        mediaEl.dataset.src = encodeMediaPath(item.path);
        mediaEl.muted = true; mediaEl.loop = true; mediaEl.playsInline = true; mediaEl.controls = true;
        mediaEl.setAttribute('controlslist', 'nodownload');
        mediaEl.preload = 'none';
    } else {
        mediaEl = document.createElement('img');
        mediaEl.dataset.src = item.path;
        mediaEl.loading = idx < 3 ? 'eager' : 'lazy';
        mediaEl.decoding = 'async';
        mediaEl.fetchPriority = idx < 2 ? 'high' : 'low';
        mediaEl.alt = '';
    }
    
    mediaEl.style.transform = `scale(${item.scale}) translate(${item.x}px, ${item.y}px)`;
    mediaWrap.appendChild(mediaEl);
    card.appendChild(mediaWrap);

    const meta = document.createElement('div');
    meta.className = 'card-meta';
    const featureBtn = document.createElement('button');
    featureBtn.type = 'button';
    featureBtn.className = 'all-feature-btn' + (item.featuredAll ? ' active' : '');
    featureBtn.textContent = item.featuredAll ? '✓ IN ALL' : '+ ALL';
    featureBtn.title = item.featuredAll ? 'Remove from All' : 'Add to All';
    featureBtn.onclick = event => { event.stopPropagation(); toggleFeaturedAll(idx); };
    meta.insertBefore(featureBtn, meta.firstChild);
    card.appendChild(meta);

    return card;
}

function deleteCard(idx) {
    const item = renderedItems[idx];
    if (!item) return;
    if (!confirm('delete card?')) return;
    const real = portfolioItems.indexOf(item);
    if (real > -1) portfolioItems.splice(real, 1);
    saveLocal();
    renderPortfolio(currentTab);
}

/* ══════════════════════════════════════════════════════════════
   АЛЬБОМЫ И ABOUT
   ══════════════════════════════════════════════════════════════ */
function createAlbum() {
    const section = document.getElementById('album-section').value;
    const name = document.getElementById('album-name').value.trim();
    if (!name) return alert('enter album name');
    if (customAlbums.some(a => a.section === section && a.name === name)) {
        return alert('album already exists');
    }
    customAlbums.push({ section: section, name: name });
    document.getElementById('album-name').value = '';
    saveLocal();
    renderPortfolio(currentTab);
    alert('album created');
}
function deleteAlbum(section, name) {
    const items = portfolioItems.filter(i => i.category === section && i.album === name);
    const msg = 'delete album "' + name + '"' +
                (items.length ? ' and all ' + items.length + ' media inside?' : '?');
    if (!confirm(msg)) return;
    portfolioItems = portfolioItems.filter(
        i => !(i.category === section && i.album === name)
    );
    customAlbums = customAlbums.filter(
        a => !(a.section === section && a.name === name)
    );
    saveLocal();
    renderPortfolio(currentTab);
}

function renderAboutPhotosEditor() {
    const list = document.getElementById('about-photos-list');
    if (!list) return;
    list.innerHTML = '';

    if (!aboutPhotos.length) {
        const p = document.createElement('p');
        p.style.color = 'var(--muted)';
        p.style.fontSize = '0.78rem';
        p.style.padding = '6px 4px';
        p.textContent = '—';
        list.appendChild(p);
        return;
    }

    aboutPhotos.forEach((src, i) => {
        const item = document.createElement('div');
        item.className = 'about-photo-item';
        item.innerHTML =
            '<img src="' + src + '" alt="" loading="lazy">' +
            '<button class="remove-about-photo" onclick="removeAboutPhoto(' + i + ')">✕</button>';
        list.appendChild(item);
    });
}

function handleAboutPhotoUpload(event) {
    const files = event.target.files;
    if (!files || !files.length) return;
    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        if (file.type.indexOf('image') !== 0) continue;
        const reader = new FileReader();
        reader.onload = evt => {
            aboutPhotos.push(evt.target.result);
            saveLocal();
            renderAboutPhotosEditor();
            renderAbout();
        };
        reader.readAsDataURL(file);
    }
    event.target.value = '';
}

function removeAboutPhoto(i) {
    aboutPhotos.splice(i, 1);
    saveLocal();
    renderAboutPhotosEditor();
    renderAbout();
}

function renderAbout() {
    const el = document.getElementById('about-text-rendered');
    if (el) {
        const txt = aboutText[currentLang] || i18n[currentLang].about_default;
        el.textContent = txt;
    }

    const avatar = document.getElementById('about-avatar-img');
    const gallery = document.getElementById('about-gallery');
    if (gallery) {
        gallery.innerHTML = '';
        gallery.style.display = 'none';
    }
    if (avatar) {
        const candidates = aboutPhotos.filter(src => /\.(jpe?g|png|webp|avif)$/i.test(src) && !EXCLUDED_ABOUT_PHOTOS.has(String(src || '').split('/').pop().toLowerCase()));
        const selected = candidates.length ? candidates[Math.floor(Math.random() * candidates.length)] : 'portfolio my photo.png';
        avatar.onerror = () => { avatar.onerror = null; avatar.src = 'portfolio my photo.png'; };
        avatar.src = encodeMediaPath(selected);
        avatar.alt = 'Korlan';
    }
}

/* ══════════════════════════════════════════════════════════════
   МЕДИАТЕКА (С ПРЕВЬЮ ВИДЕО)
   ══════════════════════════════════════════════════════════════ */
let currentPickerFiles = [];

function renderMediaPickerFolders() {
    const container = document.getElementById('folder-picker-body');
    container.innerHTML = '';
    currentPickerFiles = [];
    const groups = new Map();
    portfolioItems.forEach(item => {
        if (mediaPickerMode === 'about' && item.type !== 'image') return;
        const path = item.path || '';
        const folder = path.indexOf('data:') === 0 ? 'uploads' : (path.split('/').slice(0,-1).join('/') || 'uploads');
        if (!groups.has(folder)) groups.set(folder, []);
        groups.get(folder).push(item);
    });
    [...groups.keys()].sort((a,b)=>a.localeCompare(b)).forEach(folder => {
        const group = document.createElement('div');
        group.className = 'folder-group';
        const title = document.createElement('h4');
        title.textContent = '📁 ' + folder;
        group.appendChild(title);
        const grid = document.createElement('div');
        grid.className = 'folder-grid';
        groups.get(folder).forEach(file => {
            const currentIdx = currentPickerFiles.length;
            currentPickerFiles.push({ ...file, categories: getItemCategories(file) });
            const item = document.createElement('div');
            item.className = 'picker-item';
            item.dataset.idx = currentIdx;
            if (pickerSelection.some(selected => selected.path === file.path)) item.classList.add('selected');
            item.onclick = e => handlePickerClick(e, currentIdx);
            if (file.type === 'video') {
                const video = document.createElement('video');
                video.dataset.src = file.path + '#t=0.5';
                video.muted = true;
                video.preload = 'none';
                item.appendChild(video);
            } else {
                const img = document.createElement('img');
                img.loading = 'lazy';
                img.src = file.path;
                item.appendChild(img);
            }
            grid.appendChild(item);
        });
        group.appendChild(grid);
        container.appendChild(group);
    });
    const videos = container.querySelectorAll('video[data-src]');
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver(entries => entries.forEach(entry => {
            if (entry.isIntersecting) {
                const video = entry.target;
                if (!video.src) video.src = video.dataset.src;
                observer.unobserve(video);
            }
        }), { rootMargin: '150px' });
        videos.forEach(video => observer.observe(video));
    }
}

function handlePickerClick(e, idx) {
    const file = currentPickerFiles[idx];
    if (!file) return;
    const itemEl = document.querySelector(`.picker-item[data-idx="${idx}"]`);

    if (e.shiftKey && lastPickerIdx !== -1) {
        const start = Math.min(lastPickerIdx, idx);
        const end = Math.max(lastPickerIdx, idx);
        
        pickerSelection = [];
        document.querySelectorAll('.picker-item').forEach(el => el.classList.remove('selected'));
        
        for (let i = start; i <= end; i++) {
            if (currentPickerFiles[i]) {
                pickerSelection.push(currentPickerFiles[i]);
                const el = document.querySelector(`.picker-item[data-idx="${i}"]`);
                if (el) el.classList.add('selected');
            }
        }
    } else {
        const existingIdx = pickerSelection.findIndex(s => s.path === file.path);
        if (existingIdx > -1) {
            pickerSelection.splice(existingIdx, 1);
            if (itemEl) itemEl.classList.remove('selected');
        } else {
            pickerSelection.push(file);
            if (itemEl) itemEl.classList.add('selected');
        }
        lastPickerIdx = idx;
    }
    
    updatePickerFooter();
}

function updatePickerFooter() {
    const footer = document.getElementById('picker-footer');
    const count = document.getElementById('picker-count');
    if (pickerSelection.length > 0) {
        footer.style.display = 'flex';
        count.textContent = 'Selected: ' + pickerSelection.length;
    } else {
        footer.style.display = 'none';
    }
}

function getSelectedCategories() {
    return [...document.querySelectorAll('#post-categories input[type="checkbox"]:checked')].map(input => input.value);
}

function confirmPickerSelection() {
    if (!pickerSelection.length) return;

    if (mediaPickerMode === 'about') {
        pickerSelection.forEach(file => {
            if (file.type === 'image' && aboutPhotos.indexOf(file.path) === -1) {
                aboutPhotos.push(file.path);
            }
        });
        saveLocal();
        renderAboutPhotosEditor();
        renderAbout();
        closeMediaLibrary();
        return;
    }

    if (mediaPickerMode === 'post') {
        const selected = pickerSelection.find(file => file.type === 'image') || pickerSelection[0];
        pendingPostMedia = selected.path;
        const zone = document.getElementById('dropzone');
        if (zone) zone.textContent = 'Selected for blog post: ' + selected.path.split('/').pop();
        closeMediaLibrary();
        return;
    }

    const selectedCategories = getSelectedCategories();
    if (!selectedCategories.length) return alert('select at least one section');

    pickerSelection.forEach(file => {
        const existing = portfolioItems.find(item => item.path === file.path);
        if (existing) {
            existing.categories = selectedCategories.slice();
            existing.category = selectedCategories[0];
            const sectionTags = ['#fashion','#event','#brands','#art'];
            existing.hashtags = [...new Set((existing.hashtags || []).filter(tag => !sectionTags.includes(tag)).concat(selectedCategories.map(categoryHashtag)))];
        } else {
            const categories = selectedCategories.slice();
            portfolioItems.unshift({
                path: file.path, type: file.type, category: categories[0], categories,
                album: file.album || getDefaultAlbumForPath(file.path), stars: file.stars || 2,
                hashtags: [...new Set((file.hashtags || []).concat(categories.map(categoryHashtag)))],
                scale: file.scale || 1, x: file.x || 0, y: file.y || 0
            });
        }
    });

    saveLocal();
    renderPortfolio(currentTab);
    closeMediaLibrary();
    alert('Added ' + pickerSelection.length + ' media files.');
}

function openMediaLibrary() {
    pickerSelection = [];
    lastPickerIdx = -1;
    updatePickerFooter();
    renderMediaPickerFolders();
    document.getElementById('media-modal').style.display = 'flex';
}
function openMediaLibraryForPost() { mediaPickerMode = 'post'; openMediaLibrary(); }
function openMediaLibraryForAbout() { mediaPickerMode = 'about'; openMediaLibrary(); }
function closeMediaLibrary() { document.getElementById('media-modal').style.display = 'none'; }

function handleDragOver(e) { e.preventDefault(); e.currentTarget.classList.add('dragover'); }
function handleDragLeave(e) { e.currentTarget.classList.remove('dragover'); }
function handleDrop(e) {
    e.preventDefault();
    e.currentTarget.classList.remove('dragover');
    const files = e.dataTransfer.files;
    if (!files.length) return;

    const categories = getSelectedCategories();
    if (!categories.length) return alert('select at least one section');
    const category = categories[0];
    const album = document.getElementById('post-album').value.trim() || 'uploads';

    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();
        reader.onload = evt => {
            portfolioItems.unshift({
                path: evt.target.result,
                type: file.type.indexOf('video') === 0 ? 'video' : 'image',
                category: category,
                categories: categories.slice(),
                album: album,
                stars: 2,
                hashtags: categories.map(categoryHashtag),
                scale: 1, x: 0, y: 0
            });
            if (i === files.length - 1) {
                saveLocal();
                renderPortfolio(currentTab);
            }
        };
        reader.readAsDataURL(file);
    }
    alert('Uploaded: ' + files.length);
}

/* ══════════════════════════════════════════════════════════════
   БЛОГ
   ══════════════════════════════════════════════════════════════ */
function publishPost() {
    const textEl = document.getElementById('post-text');
    const text = textEl.value.trim();

    if (!text && !pendingPostMedia) {
        alert('add a caption or choose a photo');
        return;
    }

    blogPosts.unshift({
        text: text,
        media: pendingPostMedia || '',
        date: new Date().toLocaleDateString('ru-RU')
    });

    saveLocal();
    renderBlog();

    textEl.value = '';
    pendingPostMedia = '';
    const dropzone = document.getElementById('dropzone');
    if (dropzone) dropzone.textContent = i18n[currentLang].dropzone;
    alert('published!');
}

function renderBlog() {
    const feed = document.getElementById('blog-feed');
    feed.innerHTML = '';

    if (!blogPosts.length) {
        feed.innerHTML = '<p style="color:var(--muted);text-align:center;">— empty —</p>';
        return;
    }

    blogPosts.forEach((p, idx) => {
        const escaped = (p.text || '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
        const txt = escaped.replace(/(#[\wа-яё]+)/gi, '<span class="hashtag" onclick="tagClick(\'$1\')">$1</span>');

        let mediaHtml = '';
        if (p.media) {
            if (/\.mp4$/i.test(p.media) || p.media.indexOf('data:video') === 0) {
                mediaHtml = '<video class="post-media" src="' + p.media + '" muted loop playsinline preload="none" controls controlslist="nodownload"></video>';
            } else {
                mediaHtml = '<img class="post-media" src="' + p.media + '" loading="lazy" decoding="async" alt="">';
            }
        }

        const div = document.createElement('div');
        div.className = 'blog-post';
        div.innerHTML =
            '<div class="post-header">' +
                '<img class="post-avatar" src="' + activeAvatar + '" loading="lazy" decoding="async" onerror="this.src=\'portfolio my photo.png\'" alt="">' +
                '<span class="post-name">Korlan</span>' +
                '<span class="post-date">' + (p.date || '') + '</span>' +
            '</div>' +
            mediaHtml +
            '<div class="post-text">' + txt + '</div>' +
            '<div class="post-actions">' +
                '<button onclick="editPost(' + idx + ')">edit</button>' +
                '<button class="del" onclick="deletePost(' + idx + ')">delete</button>' +
            '</div>';
        feed.appendChild(div);
    });
}

function tagClick(tag) {
    const t = tag.replace('#', '').toLowerCase();
    const map = { fashion: 'fashion', event: 'event', brands: 'brands', brand: 'brands', art: 'art', personal: 'art' };
    if (map[t]) switchTab(map[t]);
    else switchTab('all');
}
function editPost(idx) {
    const post = blogPosts[idx];
    if (!post) return;
    const newText = prompt('edit text:', post.text);
    if (newText !== null) {
        post.text = newText;
        saveLocal();
        renderBlog();
    }
}
function deletePost(idx) {
    if (!confirm('delete post?')) return;
    blogPosts.splice(idx, 1);
    saveLocal();
    renderBlog();
}

/* ══════════════════════════════════════════════════════════════
   ПЕРСИСТЕНС И МЕДИА-ОБСЕРВЕР
   ══════════════════════════════════════════════════════════════ */
function saveLocal() {
    try {
        localStorage.setItem('korlan_portfolio_data', JSON.stringify(portfolioItems));
        localStorage.setItem('korlan_blog_data', JSON.stringify(blogPosts));
        localStorage.setItem('korlan_albums_data', JSON.stringify(customAlbums));
        localStorage.setItem('korlan_about_data', JSON.stringify(aboutText));
        localStorage.setItem('korlan_about_photos', JSON.stringify(aboutPhotos));
    } catch (e) { /* quota */ }
}

let mediaObserver = null;
function observeMedia() {
    if (mediaObserver) mediaObserver.disconnect();
    const media = document.querySelectorAll('.card-media-wrap img, .card-media-wrap video');

    if (!('IntersectionObserver' in window)) {
        media.forEach(el => {
            if (!el.src && el.dataset.src) {
                el.src = el.dataset.src;
                if (el.tagName === 'VIDEO') el.load();
            }
        });
        return;
    }

    mediaObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const el = entry.target;
            if (entry.isIntersecting) {
                if (!el.src && el.dataset.src) {
                    el.src = el.dataset.src;
                    if (el.tagName === 'VIDEO') el.load();
                }
                if (el.tagName === 'VIDEO') {
                    if (entry.intersectionRatio >= 0.55) el.play().catch(() => {});
                    else el.pause();
                }
            } else if (el.tagName === 'VIDEO') {
                el.pause();
            }
        });
    }, { threshold: [0, 0.55, 0.8], rootMargin: '180px 0px' });

    media.forEach(el => mediaObserver.observe(el));
}

/* ══════════════════════════════════════════════════════════════
   GITHUB SAVE
   ══════════════════════════════════════════════════════════════ */
async function saveToGitHub() {
    const token = localStorage.getItem('gh_pat_token');
    if (!token) { alert('token not found'); return; }

    const owner = document.getElementById('gh-user').value.trim();
    const repo = document.getElementById('gh-repo').value.trim();
    const branch = document.getElementById('gh-branch').value.trim() || 'main';
    const path = document.getElementById('gh-path').value.trim() || 'data/site-data.json';

    if (!owner || !repo) { alert('fill username and repository'); return; }

    localStorage.setItem('gh_repo_owner', owner);
    localStorage.setItem('gh_repo_name', repo);
    localStorage.setItem('gh_repo_branch', branch);
    localStorage.setItem('gh_file_path', path);

    try {
        await uploadPendingMedia(token, owner, repo);

        const content = JSON.stringify({
            portfolio: portfolioItems,
            blog: blogPosts,
            albums: customAlbums,
            about: aboutText,
            aboutPhotos: aboutPhotos
        }, null, 2);

        const encodedPath = path.split('/').map(encodeURIComponent).join('/');
        const apiUrl = 'https://api.github.com/repos/' + owner + '/' + repo + '/contents/' + encodedPath;
        const headers = { 'Authorization': 'token ' + token };

        const getRes = await fetch(apiUrl + '?ref=' + encodeURIComponent(branch), { headers });
        let existingSha = null;
        if (getRes.ok) {
            const fileData = await getRes.json();
            existingSha = fileData.sha;
        } else if (getRes.status !== 404) {
            const errorData = await getRes.json().catch(() => ({}));
            throw new Error(errorData.message || 'Could not read the content file.');
        }

        const payload = {
            message: 'update portfolio content',
            content: btoa(unescape(encodeURIComponent(content))),
            branch: branch
        };
        if (existingSha) payload.sha = existingSha;

        const putRes = await fetch(apiUrl, {
            method: 'PUT',
            headers: { ...headers, 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        if (putRes.ok) alert('content saved to GitHub!');
        else {
            const errorData = await putRes.json().catch(() => ({}));
            throw new Error(errorData.message || 'GitHub save failed.');
        }
    } catch (error) {
        alert('save error: ' + error.message);
    }
}

async function uploadPendingMedia(token, owner, repo) {
    for (const item of portfolioItems) {
        if (item.path && item.path.indexOf('data:') === 0) {
            const uploaded = await uploadDataUrl(token, owner, repo, item.path);
            if (!uploaded) throw new Error('Could not upload portfolio media.');
            item.path = uploaded;
        }
    }
    for (const post of blogPosts) {
        if (post.media && post.media.indexOf('data:') === 0) {
            const uploaded = await uploadDataUrl(token, owner, repo, post.media);
            if (!uploaded) throw new Error('Could not upload blog media.');
            post.media = uploaded;
        }
    }
    for (let i = 0; i < aboutPhotos.length; i++) {
        if (aboutPhotos[i].indexOf('data:') === 0) {
            const uploaded = await uploadDataUrl(token, owner, repo, aboutPhotos[i]);
            if (!uploaded) throw new Error('Could not upload About photo.');
            aboutPhotos[i] = uploaded;
        }
    }
}

async function uploadDataUrl(token, owner, repo, dataUrl) {
    const m = dataUrl.match(/^data:([^;]+);base64,(.+)$/);
    if (!m) return null;
    const ext = (m[1].split('/')[1] || 'bin').replace('jpeg', 'jpg');
    const filename = 'uploads/' + Date.now() + '_' + Math.random().toString(36).slice(2, 8) + '.' + ext;
    const url = 'https://api.github.com/repos/' + owner + '/' + repo + '/contents/' + filename;
    try {
        const res = await fetch(url, {
            method: 'PUT',
            headers: { 'Authorization': 'token ' + token, 'Content-Type': 'application/json' },
            body: JSON.stringify({ message: 'upload media', content: m[2] })
        });
        if (res.ok) return filename;
    } catch (e) { /* ignore */ }
    return null;
}
