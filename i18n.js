(function () {
  const translations = {
    "Никита Фролов": "Nikita Frolov",
    "Product designer ✦ B2B продукты и внутренние системы": "Product designer ✦ B2B products and internal systems",
    "Проектирую сложные B2B-сервисы и внутренние системы уже 10 лет — от геосервисов до финансовых платформ. Работаю с бизнес-процессами, данными и дизайн-системами.": "For 10 years, I have been designing complex B2B services and internal systems—from location-based services to financial platforms. I work with business processes, data, and design systems.",
    "Проекты": "Projects",
    "Система инвестиционного планирования": "Investment Planning System",
    "Ростелеком ИТ": "Rostelecom IT",
    "Запуск и работа над внутреннним корпоративным продуктом для финансового планирования и анализа проектов компании": "Launched and developed an internal corporate product for financial planning and project analysis.",
    "Подробнее": "View case study",
    "Дизайн-система РТК ИТ": "Rostelecom IT Design System",
    "Работа над внутренней дизайн-системой: разработка паттернов проектирования для комплексных таблиц, расширение набора пиктограмм": "Contributed to the internal design system by creating patterns for complex tables and expanding the icon set.",
    "Система управления взаимоотношениями с клиентами сегмента B2O, разработанная для автоматизации бизнес-процессов и повышения эффективности продаж.": "A customer relationship management system for the B2O segment, designed to automate business processes and improve sales efficiency.",
    "МегаФон Контроль Кадров": "MegaFon Workforce Management",
    "B2B-продукт для компаний с выездным персоналом (курьеры, перевозчики, полевые сотрудники). Система объединяет несколько сервисов: управление задачами, отслеживание перемещений сотрудников, формирование отчётов, интерфейсы коммуникации и аналитики маршрутов.": "A B2B product for companies with mobile workforces such as couriers, drivers, and field employees. It combines task management, employee location tracking, reporting, communication tools, and route analytics.",
    "Прототип с треком сотрудника": "Employee route prototype",
    "Шрифт kakbudto": "kakbudto Typeface",
    "Опубликовал свой первый шрифт. Это экспериментальный шрифт с поддержкой латиницы и кириллицы, включая оба регистра.": "I published my first typeface—an experimental font supporting uppercase and lowercase Latin and Cyrillic scripts.",
    "Проект был начат в рамках специального курса по дизайну шрифтов от Designworkout®.": "The project began during a special type design course by Designworkout®.",
    "Минцифры Коронаконтроль": "Ministry of Digital Development Coronacontrol",
    "МинЦифры Коронаконтроль": "Ministry of Digital Development Coronacontrol",
    "Анализ карантинной обстановки в регионах.": "Analysis of the quarantine situation across Russian regions.",
    "Билайн Локатор": "Beeline Locator",
    "Проект «Билайн Локатор» позволяет определять местоположение вашего ребёнка или близких людей. В рамках этого продукта я руководил командой дизайнеров. Основной задачей был полный редизайн сервиса.": "Beeline Locator helps users find their children or other family members. I led the design team, with a complete product redesign as our main objective.",
    "Во время активной фазы разработки мы выпустили обновлённые интерфейсы, несколько языковых версий и создали дизайн-систему, которая затем легла в основу iOS- и Android-приложений.": "During active development, we released redesigned interfaces in several languages and created a design system that later became the foundation for the iOS and Android apps.",
    "Мы обновили весь продукт целиком. Отдельным направлением стала адаптация сервиса для Узбекистана.": "We redesigned the entire product and also adapted the service for the Uzbekistan market.",
    "МегаФон Родительский контроль": "MegaFon Parental Control",
    "Я участвовал в развитии продукта. В рамках работы мы переработали глобальное меню, интерфейсы детских профилей, функциональность «зон», а также подготовили прототип настроек для контроля приложений и сайтов на телефоне ребёнка.": "I contributed to the product’s development. We redesigned the global navigation, child profile screens, and geofence features, and prototyped settings for managing apps and websites on a child’s phone.",
    "Tele2 Геопоиск": "Tele2 Geosearch",
    "Проект «Теле2 Геопоиск» — ещё один сервис на базе геолокации. Он позволяет отслеживать местоположение до пяти человек одновременно.": "Tele2 Geosearch is another location-based service. It lets users track up to five people at the same time.",
    "Tele2 Родительский контроль": "Tele2 Parental Control",
    "Сервис Tele2 для контроля активности и местоположения детей, позволяющий поддерживать семейную безопасность.": "A Tele2 service for monitoring children’s activity and location, designed to support family safety.",
    "У Tele2 не было внешней дизайн-системы, поэтому, опираясь на бренд-гайдлайны и анализируя визуальный стиль основного портала того периода, я разработал UI-библиотеку и дизайн-систему специально для этого продукта. Основной задачей было сохранить характер и визуальный язык бренда Tele2.": "Tele2 did not have a public design system, so I created a UI library and product-specific design system based on its brand guidelines and the visual language of its main website at the time. The primary goal was to preserve Tele2’s distinctive brand character.",
    "Помимо веб-сервиса, разрабатывались приложения для iOS и Android. На обеих платформах предусмотрены две версии: для родителя и для ребёнка. Я создал первоначальный дизайн для родительского приложения на iOS.": "Alongside the web service, separate iOS and Android apps were developed for parents and children. I created the initial design for the iOS parent app.",
    "Единый реестр субъектов малого и среднего предпринимательства": "Unified Register of Small and Medium-Sized Businesses",
    "Федеральная налоговая служба поставила задачу создать доступный и структурированный инструмент для поиска и анализа компаний различных категорий. В результате была разработана веб-платформа с аналитической статистикой, расширенным поиском и подробной информацией о компаниях во всех регионах России — Единый реестр субъектов малого и среднего предпринимательства.": "The Federal Tax Service needed an accessible, structured tool for finding and analysing businesses across different categories. The result was the Unified Register of Small and Medium-Sized Businesses—a web platform with analytics, advanced search, and detailed company information covering every region of Russia.",
    "Дополнительно команда спроектировала концепцию Android-приложения, однако проект остался на стадии дизайна и не был реализован в продакшене.": "The team also designed an Android app concept, though it remained at the design stage and was not released.",
    "Опыт": "Experience",
    "Старший дизайнер": "Senior Product Designer",
    "Март 2022 – Октябрь 2025": "March 2022 – October 2025",
    "Проектирование и дизайн финансовых сервисов для внутреннего бюджетирования проектов.": "Designed financial services for internal project budgeting.",
    "Участие в дизайне CRM сервисов для операторов связи.": "Contributed to CRM products for telecommunications operators.",
    "Работа над внутренней дизайн-системой: разработка паттернов проектирования для сложных таблиц, расширение набора пиктограмм.": "Contributed to the internal design system by creating patterns for complex tables and expanding the icon set.",
    "Ведущий дизайнер": "Lead Product Designer",
    "Декабрь 2021 – Февраль 2022": "December 2021 – February 2022",
    "Юзабилитилаб": "UsabilityLab",
    "Проектирование кабинета сотрудника фронт-офиса банка.": "Designed a workspace for bank front-office employees.",
    "Проведение исследований и интервью с сотрудниками банка.": "Conducted research and interviews with bank employees.",
    "Дизайнер → Ведущий дизайнер": "Product Designer → Lead Product Designer",
    "Август 2017 – Сентябрь 2021": "August 2017 – September 2021",
    "Работа в команде геосервисов, которая разрабатывала продукты для сотовых операторов. Ключевые проекты, в которых принимал участие:": "Worked in a location services team building products for mobile operators. Key projects:",
    "Tele2 «Родительский контроль»": "Tele2 Parental Control",
    "МегаФон «Контроль Кадров»": "MegaFon Workforce Management",
    "Дизайнер": "Product Designer",
    "Июль 2016 – Июнь 2017": "July 2016 – June 2017",
    "Фриланс": "Freelance",
    "Работа с малым бизнесом: готовил интерактивные прототипы, макеты для разработки, сайты на Tilda.": "Worked with small businesses, creating interactive prototypes, development-ready designs, and websites on Tilda.",
    "Дизайнер интерфейсов": "Interface Designer",
    "Октябрь 2015 – Июнь 2016": "October 2015 – June 2016",
    "Проектировал веб и мобильные приложения, выстраивал пользовательские сценарии и интерфейсы. Участвовал в проектах для МегаФон, ФНС, Сбербанк, X5 Retail — от клиентских сервисов до внутренних B2B-решений.": "Designed web and mobile applications, user flows, and interfaces. Worked on projects for MegaFon, the Federal Tax Service, Sberbank, and X5 Retail—from customer-facing services to internal B2B products.",
    "Ключевые проекты:": "Key projects:",
    "Единый реестр субъектов МСП": "Unified Register of SMEs",
    "X5 Group iOS для отбора локаций под магазины (демо на YaC 2017)": "X5 Group iOS app for store location selection (demo at YaC 2017)",
    "UX-исследования и редизайн тарифных страниц": "UX research and redesign of mobile plan pages",
    "Контакты": "Contact",
    "Задизайнено и свёрстано мной @ 2026": "Designed and built by me @ 2026",
    "О СЕБЕ": "ABOUT",
    "ПРОЕКТЫ": "PROJECTS",
    "ОПЫТ": "EXPERIENCE",
    "КОНТАКТЫ": "CONTACT",
    "Система инвестиционного планирования — кейс": "Investment Planning System — Case Study",
    "Внутренняя система для управления бюджетами, планами и прогнозами капитальных вложений.": "An internal system for managing capital expenditure budgets, plans, and forecasts.",
    "Проект создавался в условиях сложных регламентов, большого объёма данных и разрозненных процессов, которые годами жили в Excel и корпоративной почте.": "The product was developed around complex regulations, large data volumes, and fragmented processes that had relied on Excel and corporate email for years.",
    "Подход": "Approach",
    "Работа строилась в связке дизайнер — аналитик — заказчик. Интерфейсы использовались как инструмент проработки бизнес-логики: через макеты формировались процессы и согласовывались решения.": "The designer, analyst, and stakeholder worked closely together. Interfaces served as a tool for shaping business logic: layouts helped define processes and align decisions.",
    "Системой пользуются около 1000 сотрудников финансово-экономического блока. За время развития продукта объём проектов, который ведёт один сотрудник, вырос до 10 раз.": "Around 1,000 employees in finance and economics use the system. Over the product’s lifetime, the number of projects one employee can manage has increased by up to ten times.",
    "Последние 1,5–2 года я вёл продукт самостоятельно, синхронизируясь с дизайн-лидом по ключевым решениям.": "For the final 18–24 months, I led the product independently, aligning key decisions with the design lead.",
    "Данные и таблицы": "Data and Tables",
    "Основная работа пользователя происходит в таблицах. Интерфейс заменяет Excel: поддерживает расчёты, валидации и редактирование без потери контекста.": "Most user work happens in tables. The interface replaces Excel with calculations, validation, and editing that preserve context.",
    "Задача — сохранить управляемость при большом объёме данных и сложной структуре показателей.": "The challenge was to keep large datasets and complex metric structures manageable.",
    "Согласование": "Approvals",
    "Система поддерживает многоступенчатые процессы согласования. Интерфейс показывает статус, историю изменений и помогает принимать решения без дополнительных инструментов.": "The system supports multi-stage approval workflows. It shows status and change history, helping users make decisions without additional tools.",
    "Tele2 Родительский контроль — кейс": "Tele2 Parental Control — Case Study",
    "Продукт строился на данных мобильного оператора и предоставлял доступ к информации о перемещениях и использовании устройства.": "The product used mobile operator data to provide information about location history and device usage.",
    "Я отвечал за проектирование интерфейсов и разработку UI-библиотеки, так как готовой дизайн-системы у Tele2 не было.": "I was responsible for interface design and the UI library because Tele2 did not have an existing design system.",
    "Активность": "Activity",
    "Основной сценарий — просмотр активности ребёнка: запуск приложений, перемещения и тревожные события. Интерфейс строится вокруг временной шкалы, где пользователь быстро считывает происходящее.": "The primary flow is reviewing a child’s activity: app launches, movements, and alerts. The interface centres on a timeline that makes events easy to scan.",
    "Сценарии": "Use Cases",
    "Сервис объединяет несколько ключевых сценариев: просмотр текущего местоположения, анализ маршрутов, контроль активности и быстрый доступ к действиям.": "The service combines several key use cases: checking current location, reviewing routes, monitoring activity, and quickly accessing actions.",
    "Помимо веб-сервиса, разрабатывались приложения для iOS и Android. На обеих платформах были предусмотрены две версии: для родителя и для ребёнка. Я создал первоначальный дизайн для родительского приложения на iOS.": "Alongside the web service, separate iOS and Android apps were developed for parents and children. I created the initial design for the iOS parent app.",
    "Профиль и управление": "Profile and Controls",
    "Экран профиля объединяет информацию о ребёнке и основные действия: проверка баланса, активности и быстрые команды.": "The profile brings together information about the child and essential actions such as checking balance and activity or sending quick commands.",
    "Карта и геозоны": "Map and Geofences",
    "Карта выступает центральным элементом продукта — через неё пользователь взаимодействует с большинством функций, связанных с местоположением ребёнка.": "The map is the core of the product and provides access to most child-location features.",
    "Отдельное внимание уделено геозонам — пользователь может задавать безопасные зоны и получать уведомления при входе или выходе ребёнка из них.": "Geofences received particular attention: users can define safe areas and get notified when a child enters or leaves them.",
    "iOS приложение": "iOS App",
    "Разрабатывались отдельные приложения для родителя и ребёнка. Я спроектировал первоначальный интерфейс родительского приложения для iOS.": "Separate apps were developed for parents and children. I designed the initial interface for the iOS parent app.",
    "UI-библиотека": "UI Library",
    "В проекте не было готовой дизайн-системы, поэтому я разработал UI-библиотеку с нуля, опираясь на бренд-гайдлайны и визуальный стиль Tele2 того периода.": "The project had no existing design system, so I built a UI library from scratch based on Tele2’s brand guidelines and visual style at the time.",
    "Это позволило сохранить целостность продукта на всех платформах и собрать единый визуальный язык для веба и мобильных приложений.": "This kept the product consistent across platforms and established a shared visual language for web and mobile apps.",
    "Коронаконтроль — кейс": "Coronacontrol — Case Study",
    "Сервис для анализа карантинной обстановки в регионах России.": "A service for analysing the quarantine situation across Russian regions.",
    "Разрабатывался в начале пандемии COVID-19 для мониторинга соблюдения самоизоляции и поддержки управленческих решений.": "It was developed at the start of the COVID-19 pandemic to monitor self-isolation compliance and support government decision-making.",
    "Контекст": "Context",
    "Весной 2020 года государственным органам требовался инструмент для контроля соблюдения карантина после возвращения граждан из-за рубежа. Источником данных выступали мобильные операторы.": "In spring 2020, government agencies needed a way to monitor quarantine compliance among citizens returning from abroad. Mobile operators supplied the data.",
    "Проект разрабатывался в условиях высокой неопределённости и сжатых сроков: первую версию нужно было собрать за несколько недель.": "The project was developed under high uncertainty and tight deadlines: the first version had to be delivered within a few weeks.",
    "В условиях ограниченного времени было важно не изобретать визуальный стиль с нуля. В качестве основы использовал государственную дизайн-систему standart.gov.design, что позволило быстро собрать интерфейсы и сосредоточиться на логике продукта.": "With limited time, creating a visual style from scratch would have been inefficient. I used the government design system at standart.gov.design as a foundation, which made it possible to build the interfaces quickly and focus on product logic.",
    "Основной фокус на простоте интерфейса и скорости получения информации.": "The primary focus was interface simplicity and quick access to information.",
    "Работа с данными": "Working with Data",
    "Система показывала:": "The system displayed:",
    "текущую ситуацию по регионам": "the current situation by region",
    "динамику показателей": "changes in key metrics",
    "список пользователей и события": "users and related events",
    "Интерфейс объединял карту, графики и таблицы, позволяя быстро переходить от общей картины к деталям.": "The interface combined maps, charts, and tables, making it easy to move from the big picture to specific details.",
    "НАЗАД": "BACK",
    "Портфолио": "Portfolio",
    "Портфолио Никиты Фролова": "Nikita Frolov’s portfolio",
    "Портфолио Никиты Фролова, продуктового дизайнера B2B-продуктов и внутренних систем.": "Portfolio of Nikita Frolov, a product designer specialising in B2B products and internal systems.",
    "Портфолио продуктового дизайнера B2B-продуктов и внутренних систем.": "Portfolio of a product designer specialising in B2B products and internal systems.",
    "Кейс Никиты Фролова: Система инвестиционного планирования.": "Nikita Frolov’s case study: Investment Planning System.",
    "Кейс Никиты Фролова: Tele2 Родительский контроль.": "Nikita Frolov’s case study: Tele2 Parental Control.",
    "Кейс Никиты Фролова: МинЦифры Коронаконтроль.": "Nikita Frolov’s case study: Ministry of Digital Development Coronacontrol.",
    "Кейс продуктового дизайна внутренней системы для финансового планирования и анализа проектов.": "Product design case study of an internal system for financial planning and project analysis.",
    "Кейс продуктового дизайна сервиса Tele2 для контроля активности и местоположения детей.": "Product design case study of a Tele2 service for monitoring children’s activity and location.",
    "Кейс продуктового дизайна сервиса для анализа карантинной обстановки в регионах России.": "Product design case study of a service for analysing the quarantine situation across Russian regions.",
    "Кейс проекта": "Project case study",
    "Навигация по кейсу": "Case study navigation",
    "Навигация по разделам": "Section navigation",
    "Навигация по слайдам": "Slide navigation",
    "О себе": "About",
    "Открыть CV в новой вкладке": "Open CV in a new tab",
    "Открыть проект в новой вкладке": "Open project in a new tab",
    "Открыть сайт компании в новой вкладке": "Open company website in a new tab",
    "Предыдущий": "Previous",
    "Следующий": "Next",
    "Свернуть или развернуть описание должности": "Collapse or expand job description",
    "Скопировать E-Mail": "Copy email address",
    "Скриншот проекта": "Project screenshot",
    "Скриншот проекта Tele2 Геопоиск": "Tele2 Geosearch project screenshot",
    "Скриншот проекта Tele2 Родительский контроль": "Tele2 Parental Control project screenshot",
    "Скриншоты МегаФон онтроля Кадров": "MegaFon Workforce Management screenshots",
    "Таблицы и списки статусы ситуации": "Situation tables and status lists",
    "Карты ситуации по регионам": "Regional situation maps",
    "Шрифт на элементах": "Typeface in use",
    "Теги": "Tags",
    "Tele2 Родительский контроль — экран активности на вебе и мобильном устройстве": "Tele2 Parental Control — activity screen on web and mobile",
    "Tele2 Родительский контроль — мобильные экраны активности, карты и маршрута": "Tele2 Parental Control — mobile activity, map, and route screens",
    "Tele2 Родительский контроль — профиль ребёнка на вебе и мобильном устройстве": "Tele2 Parental Control — child profile on web and mobile",
    "Tele2 Родительский контроль — карта и основные действия на вебе и мобильном устройстве": "Tele2 Parental Control — map and primary actions on web and mobile",
    "Tele2 Родительский контроль — активность и карта на iOS": "Tele2 Parental Control — activity and map on iOS",
    "Tele2 Родительский контроль — UI-библиотека и базовые компоненты": "Tele2 Parental Control — UI library and core components",
    "Скопировано": "Copied",
    "Ошибка": "Error",
    "открыть в новой вкладке": "open in a new tab"
  };

  const normalize = (value) => value.replace(/\s+/g, " ").trim();
  const normalizedTranslations = Object.fromEntries(
    Object.entries(translations).map(([key, value]) => [normalize(key), value])
  );
  const translate = (value) => {
    const normalized = normalize(value);
    if (normalizedTranslations[normalized]) return normalizedTranslations[normalized];
    const numberedLabel = normalized.match(/^(.*) (\d+)(: открыть в новой вкладке)?$/);
    if (!numberedLabel) return value;
    const translatedBase = normalizedTranslations[numberedLabel[1]];
    if (!translatedBase) return value;
    const suffix = numberedLabel[3] ? ": open in a new tab" : "";
    return `${translatedBase} ${numberedLabel[2]}${suffix}`;
  };

  function translatePage(language) {
    const isEnglish = language === "en";
    document.documentElement.lang = isEnglish ? "en" : "ru";

    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    while (walker.nextNode()) {
      const node = walker.currentNode;
      if (!normalize(node.nodeValue || "")) continue;
      if (typeof node.__i18nOriginal !== "string") node.__i18nOriginal = node.nodeValue;
      node.nodeValue = isEnglish ? translate(node.__i18nOriginal) : node.__i18nOriginal;
    }

    document.querySelectorAll("[aria-label], [alt], [data-alt], meta[content]").forEach((element) => {
      ["aria-label", "alt", "data-alt", "content"].forEach((attribute) => {
        if (!element.hasAttribute(attribute)) return;
        const dataAttribute = `data-i18n-${attribute}`;
        if (!element.hasAttribute(dataAttribute)) {
          element.setAttribute(dataAttribute, element.getAttribute(attribute) || "");
        }
        const original = element.getAttribute(dataAttribute) || "";
        element.setAttribute(attribute, isEnglish ? translate(original) : original);
      });
    });

    const originalTitle = document.documentElement.getAttribute("data-i18n-title") || document.title;
    document.documentElement.setAttribute("data-i18n-title", originalTitle);
    document.title = isEnglish ? translate(originalTitle) : originalTitle;

    document.querySelectorAll("[data-lang]").forEach((link) => {
      const active = link.getAttribute("data-lang") === language;
      link.classList.toggle("menu__link--active-language", active);
      if (active) link.setAttribute("aria-current", "page");
      else link.removeAttribute("aria-current");
    });

    document.querySelectorAll('a[href]:not([data-lang])').forEach((link) => {
      if (!link.hasAttribute("data-i18n-href")) {
        link.setAttribute("data-i18n-href", link.getAttribute("href") || "");
      }
      const original = link.getAttribute("data-i18n-href") || "";
      if (!/^[^:/?#]+\.html(?:[?#].*)?$/.test(original)) return;
      if (!isEnglish) {
        link.setAttribute("href", original);
        return;
      }
      const target = new URL(original, window.location.href);
      target.searchParams.set("lang", "en");
      link.setAttribute("href", `${target.pathname.split("/").pop()}${target.search}${target.hash}`);
    });
  }

  const params = new URLSearchParams(window.location.search);
  let language = params.get("lang") === "en" ? "en" : "ru";
  window.siteLanguage = language;
  window.t = (value) => language === "en" ? translate(value) : value;
  translatePage(language);

  document.addEventListener("click", (event) => {
    if (!(event.target instanceof Element)) return;
    const link = event.target.closest("[data-lang]");
    if (!link) return;
    event.preventDefault();
    language = link.getAttribute("data-lang") === "en" ? "en" : "ru";
    window.siteLanguage = language;
    const url = new URL(window.location.href);
    if (language === "en") url.searchParams.set("lang", "en");
    else url.searchParams.delete("lang");
    history.pushState({ language }, "", url);
    translatePage(language);
  });

  window.addEventListener("popstate", () => {
    const nextParams = new URLSearchParams(window.location.search);
    language = nextParams.get("lang") === "en" ? "en" : "ru";
    window.siteLanguage = language;
    translatePage(language);
  });
})();
