import type { SupportedLanguage } from "./ui";

export interface FeatureItem {
  icon: string;
  badgeBg: string;
  badgeColor: string;
  title: string;
  description: string;
}

export interface StepItem {
  number: number;
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface PageSeoContent {
  title: string;
  description: string;
  keywords: string;
  badge: string;
  heroTitle: string;
  heroSubtitle: string;
  primaryCta: string;
  secondaryCta?: string;
}

export interface HomeLanguageContent {
  seo: PageSeoContent;
  featuresTitle: string;
  featuresSubtitle: string;
  featuresDesc: string;
  features: FeatureItem[];
  howToTitle: string;
  howToSubtitle: string;
  steps: StepItem[];
  guideTitle: string;
  guideParagraphs: Array<{ heading?: string; text: string; list?: string[] }>;
  faqTitle: string;
  faqs: FaqItem[];
}

export interface SubpageContent {
  seo: PageSeoContent;
  guideTitle?: string;
  guideParagraphs?: Array<{ heading?: string; text: string; list?: string[] }>;
  faqs?: FaqItem[];
}

export const homeContent: Record<SupportedLanguage, HomeLanguageContent> = {
  en: {
    seo: {
      title: "Free Bulk Image Downloader Online - Download from URL List",
      description: "Need a bulk image downloader from URL list or webpage? Try the best free bulk image downloader online. Fast, secure client-side batch downloader.",
      keywords: "free bulk image downloader, bulk image downloader from url list, bulk image downloader chrome, chrome bulk image downloader, bulk image downloader free, bulk image downloader online, download bulk image downloader, best bulk image downloader, free bulk image downloader online, free bulk image downloader from url list",
      badge: "⚡ 100% Client-Side & Secure",
      heroTitle: "Download images in bulk, instantly.",
      heroSubtitle: "Paste a list of image URLs or extract images from any webpage. Package them instantly into a single ZIP file without exhausting your server bandwidth or compromising privacy.",
      primaryCta: "Start Downloading",
      secondaryCta: "Learn More",
    },
    featuresTitle: "Why Bulk Image Downloader is better.",
    featuresSubtitle: "Engineered for Performance",
    featuresDesc: "We examined current batch downloading utilities and re-engineered the process to solve privacy bottlenecks, loading delays, and CORS blocks.",
    features: [
      {
        icon: "🔒",
        badgeBg: "bg-link-bg-soft",
        badgeColor: "text-link",
        title: "100% Client-Side Privacy",
        description: "Competitors fetch and compile your images on their servers. We do all fetching and ZIP packaging locally inside your browser cache. Your links and image downloads remain completely private.",
      },
      {
        icon: "🌐",
        badgeBg: "bg-cyan-soft",
        badgeColor: "text-cyan-deep",
        title: "Transparent CORS Proxy Fallback",
        description: "Downloading directly from foreign domains normally triggers CORS browser security blocks. Our engine automatically redirects CORS-blocked images through a secure server proxy to guarantee a 100% download success rate.",
      },
      {
        icon: "🖼️",
        badgeBg: "bg-violet-soft",
        badgeColor: "text-violet-deep",
        title: "Live Thumbnail Preview Grid",
        description: "Don't download blind. Our interactive grid shows full thumbnail previews, format extensions, size calculations, and resolution details before you trigger the final download.",
      },
      {
        icon: "🎛️",
        badgeBg: "bg-warning-soft",
        badgeColor: "text-warning-deep",
        title: "Fine-Grained Filtering",
        description: "Easily deselect icons, spacers, or duplicate assets. Use the format filter tabs to view and select only specific file extensions (PNG, JPG, WebP, SVG) in a single click.",
      },
      {
        icon: "⚡",
        badgeBg: "bg-error-soft",
        badgeColor: "text-error-deep",
        title: "Speed & Time Estimator",
        description: "Our downloading queue processes up to 10 concurrent requests. Live metrics display average download speed, processing bandwidth, and accurate time-to-completion countdowns.",
      },
      {
        icon: "🕷️",
        badgeBg: "bg-neutral-200",
        badgeColor: "text-ink",
        title: "Deep Webpage Extraction",
        description: "Give us a single URL. We inspect image elements, responsive srcset tags, inline CSS background declarations, and direct anchor links to scrape every possible image asset.",
      },
    ],
    howToTitle: "How to use the bulk downloader.",
    howToSubtitle: "Simple Workflow",
    steps: [
      {
        number: 1,
        title: "Paste Links or Enter Webpage",
        description: "Select the direct link option to paste custom URLs. Alternatively, select the Webpage Extractor tab and paste a target website URL (e.g. https://unsplash.com).",
      },
      {
        number: 2,
        title: "Analyze and Preview",
        description: "Click Load & Analyze URLs. The system will process your query, identify the images, and load them into the interactive preview grid.",
      },
      {
        number: 3,
        title: "Filter, Customize and Download",
        description: "Review the images, deselect any unwanted icons, specify a custom ZIP name, and click Download Selected. Watch the real-time download bar finish, and your files are saved.",
      },
    ],
    guideTitle: "The Ultimate Guide to Free Bulk Image Downloader Online",
    guideParagraphs: [
      {
        text: "In today's digital landscape, content creators, developers, designers, and marketers deal with thousands of images daily. Manually downloading images one by one is tedious, time-consuming, and highly inefficient. That is why a high-performance free bulk image downloader is an essential utility.",
      },
      {
        text: "Whether you need to extract media assets for a website migration, download mockups for a client presentation, or compile research datasets, having the right tool makes all the difference. Our free bulk image downloader online is engineered to simplify this workflow. By allowing you to extract images directly from a bulk image downloader from url list or crawl any live webpage, this application offers unmatched convenience—completely free, private, and running entirely in your browser.",
      },
      {
        heading: "Why Choose a Web-Based Bulk Image Downloader Free Tool?",
        text: "Many users default to searching for a download bulk image downloader software installer or searching for browser extensions. However, web-based utilities offer major advantages:",
        list: [
          "Zero Installation: With a bulk image downloader online, you do not need to download executables that might contain malware or bloat your operating system.",
          "Platform Independence: It runs anywhere there is a modern browser—whether you are on Windows, macOS, Linux, ChromeOS, or mobile.",
          "100% Secure & Private: Unlike typical server-side tools, our bulk image downloader free application processes files locally in your browser. Your source URL list and downloaded image blobs are never uploaded to our servers, keeping your data confidential.",
        ],
      },
      {
        heading: "Crawl and Extract: Bulk Image Downloader from URL List",
        text: "The most common workflow for automation is downloading a pre-compiled list of links. Our utility is the perfect free bulk image downloader from url list. If you have a CSV, a spreadsheet column, or a text document containing image links, you can paste the entire block directly into our input workspace. The engine automatically handles parsing, filters out duplicate links, cleans up whitespace, and queues them for downloading.",
      },
      {
        heading: "Webpage Extraction vs. Chrome Bulk Image Downloader",
        text: "Many professionals search for a chrome bulk image downloader or a bulk image downloader chrome extension. While browser extensions are useful, they come with significant permission warnings and security risks, as they can read all data on the websites you visit. Our online extractor functions as a powerful alternative without compromising your browser's security or exposing your private browsing data.",
      },
    ],
    faqTitle: "Frequently Asked Questions",
    faqs: [
      {
        question: "How to use bulk image downloader?",
        answer: "To use our bulk image downloader, select either the 'Paste URL List' or 'Extract From Webpage' tab, input your target URLs, click the process button to load preview thumbnails, filter files by extension if needed, and click 'Download Selected' to save them bundled inside a single ZIP file.",
      },
      {
        question: "What is bulk image downloader?",
        answer: "A bulk image downloader is an online utility designed to extract and download multiple images simultaneously from various web sources. Unlike standard downloaders that force you to save files one by one, our platform processes bulk actions client-side in your browser, keeping your data 100% secure and private.",
      },
      {
        question: "How to bulk download images from a URL list?",
        answer: "To bulk download images from a list, paste your direct image URLs (one per line) into the input workspace. Click Load & Analyze, preview the thumbnails, and click Download Selected to receive all images in a compressed ZIP file.",
      },
      {
        question: "How to download 100 images at once?",
        answer: "Downloading 100 images at once is seamless with our free online tool. Paste your list of 100 image URLs into the downloader input workspace. The client-side download engine fetches the assets in parallel, packages them securely, and generates a single ZIP file containing all 100 images for a quick, one-click download.",
      },
      {
        question: "How to save a lot of images at once from a website?",
        answer: "Paste the webpage URL into the Webpage Image Scraper tab. Our crawler extracts all image tags, CSS backgrounds, and responsive assets, allowing you to select and download everything in one ZIP archive.",
      },
      {
        question: "Is there a free bulk file downloader available?",
        answer: "Yes, our online utility is a fully functional, 100% free bulk image downloader. It does not require software installation, user registration, account sign-up, or premium subscriptions. You can download unlimited images with maximum performance directly within your browser window.",
      },
    ],
  },
  es: {
    seo: {
      title: "Descargador de Imágenes Masivo Gratis Online - Descargar por Lista de URLs",
      description: "¿Necesitas descargar imágenes masivamente desde una lista de URLs o página web? Prueba el mejor descargador de imágenes masivo gratis online. Rápido, privado y en ZIP.",
      keywords: "descargador de imagenes masivo, descargar imagenes masivamente, descargar imagenes por lista de urls, bajar imagenes en lote gratis, extractor de imagenes web, descargar fotos en lote online, guardar imagenes en zip",
      badge: "⚡ 100% en el Navegador y Seguro",
      heroTitle: "Descarga imágenes en lote al instante.",
      heroSubtitle: "Pega una lista de enlaces de imágenes o extrae fotos de cualquier página web. Empaquétalas al instante en un único archivo ZIP sin consumir el ancho de banda de tu servidor ni comprometer tu privacidad.",
      primaryCta: "Empezar a Descargar",
      secondaryCta: "Más Información",
    },
    featuresTitle: "Por qué nuestro descargador masivo es superior.",
    featuresSubtitle: "Diseñado para Rendimiento",
    featuresDesc: "Analizamos las herramientas de descarga en lote existentes y reinventamos el proceso para resolver cuellos de botella de privacidad, lentitud y bloqueos CORS.",
    features: [
      {
        icon: "🔒",
        badgeBg: "bg-link-bg-soft",
        badgeColor: "text-link",
        title: "100% Privacidad en el Navegador",
        description: "Otros sitios descargan y guardan tus imágenes en sus servidores. Nosotros procesamos todo localmente en la memoria de tu navegador. Tus enlaces y fotos nunca salen de tu equipo.",
      },
      {
        icon: "🌐",
        badgeBg: "bg-cyan-soft",
        badgeColor: "text-cyan-deep",
        title: "Proxy CORS Automático",
        description: "Descargar de servidores externos suele generar bloqueos de seguridad CORS. Nuestro motor detecta estos bloqueos y canaliza la petición de forma segura para garantizar un 100% de éxito.",
      },
      {
        icon: "🖼️",
        badgeBg: "bg-violet-soft",
        badgeColor: "text-violet-deep",
        title: "Vista Previa Interactiva",
        description: "No descargues a ciegas. Visualiza miniaturas, resoluciones, formatos y tamaños estimados de archivo antes de confirmar la descarga final.",
      },
      {
        icon: "🎛️",
        badgeBg: "bg-warning-soft",
        badgeColor: "text-warning-deep",
        title: "Filtros por Formato",
        description: "Desmarca iconos pequeños o recursos innecesarios. Filtra por extensiones específicas (PNG, JPG, WebP, SVG, AVIF) con un solo clic.",
      },
      {
        icon: "⚡",
        badgeBg: "bg-error-soft",
        badgeColor: "text-error-deep",
        title: "Descargas Concurrentes Rápidas",
        description: "Procesamos hasta 10 imágenes en paralelo con medidor de velocidad en vivo y empaquetado ZIP instantáneo sin esperas.",
      },
      {
        icon: "🕷️",
        badgeBg: "bg-neutral-200",
        badgeColor: "text-ink",
        title: "Extracción Profunda de Webs",
        description: "Introduce una URL. Analizamos etiquetas <img>, srcset responsivos, estilos de fondo CSS y enlaces directos para extraer todo el contenido visual.",
      },
    ],
    howToTitle: "Cómo usar el descargador masivo de imágenes.",
    howToSubtitle: "Flujo de Trabajo Sencillo",
    steps: [
      {
        number: 1,
        title: "Pega Enlaces o Introduce una Web",
        description: "Selecciona la pestaña de lista de URLs para pegar enlaces directos o la pestaña de Extractor Web para ingresar una dirección completa.",
      },
      {
        number: 2,
        title: "Analiza y Previsualiza",
        description: "Haz clic en Cargar y Analizar. El sistema procesará las imágenes y las mostrará en la cuadrícula de previsualización interactiva.",
      },
      {
        number: 3,
        title: "Filtra y Descarga en ZIP",
        description: "Revisa las miniaturas, selecciona tus fotos deseadas, asigna un nombre al archivo y pulsa en Descargar Seleccionadas.",
      },
    ],
    guideTitle: "Guía Definitiva del Descargador de Imágenes Masivo Gratis Online",
    guideParagraphs: [
      {
        text: "En el entorno digital moderno, diseñadores, desarrolladores, creadores de contenido y especialistas en marketing gestionan cientos o miles de imágenes cada día. Guardar archivos uno por uno mediante 'Guardar como' es una tarea lenta y agotadora. Un descargador de imágenes masivo gratis es la herramienta fundamental para optimizar este proceso.",
      },
      {
        text: "Nuestra aplicación online te permite descargar fotos en lote desde una lista de URLs o extraer todas las imágenes de cualquier sitio web en cuestión de segundos, comprimidas en un archivo ZIP sin registros ni costes.",
      },
      {
        heading: "¿Por qué elegir una herramienta web sin instalación?",
        text: "A diferencia de los programas ejecutables o las extensiones de Chrome que pueden contener adware o espiar tu navegación, nuestro descargador web ofrece:",
        list: [
          "Cero instalación y compatibilidad total con Windows, Mac, Linux y móviles.",
          "Máxima privacidad: el procesamiento se realiza en la memoria de tu navegador.",
          "Descarga simultánea de múltiples formatos (WebP, PNG, JPG, SVG, AVIF, GIF).",
        ],
      },
    ],
    faqTitle: "Preguntas Frecuentes",
    faqs: [
      {
        question: "¿Cómo descargar imágenes masivamente desde una lista de URLs?",
        answer: "Copia tu lista de enlaces de imágenes (uno por línea), pégalos en el cuadro de texto del descargador y haz clic en 'Cargar y Analizar'. Luego previsualiza las miniaturas y pulsa 'Descargar Seleccionadas' para guardarlas en un archivo ZIP.",
      },
      {
        question: "¿Es gratis y seguro este descargador?",
        answer: "Sí, es 100% gratuito, ilimitado y seguro. Las imágenes se procesan directamente en tu navegador sin almacenarse en servidores externos.",
      },
      {
        question: "¿Cómo descargar todas las imágenes de una página web?",
        answer: "Entra a la pestaña 'Extraer de Página Web', pega la URL del sitio web que quieres analizar y pulsa 'Extraer'. La herramienta encontrará todas las imágenes y te permitirá guardarlas juntas en un ZIP.",
      },
    ],
  },
  ja: {
    seo: {
      title: "無料一括画像ダウンローダー - URLリスト・Webサイトから画像を一括保存",
      description: "URLリストやWebページから画像を一括ダウンロードできる無料オンラインツール。高速、安全、完全ブラウザ完結でZIP保存可能。",
      keywords: "画像 一括 ダウンロード, 画像 一括保存, URLリスト 画像 ダウンロード, Webサイト 画像 一括 抽出, 画像 一括取得 オンライン, 無料 画像 ダウンローダー, Chrome 拡張機能 代替 画像保存",
      badge: "⚡ 100% クライアントサイド & 完全安全",
      heroTitle: "画像を瞬時に一括ダウンロード。",
      heroSubtitle: "画像URLのリストを貼り付けるか、WebページのURLを入力するだけ。サーバーに負担をかけず、プライバシーを保護しながら、すべての画像を単一のZIPファイルにまとめて高速保存できます。",
      primaryCta: "ダウンロードを開始",
      secondaryCta: "詳しく見る",
    },
    featuresTitle: "当サービスの一括画像ダウンローダーが選ばれる理由",
    featuresSubtitle: "パフォーマンスと安全性を追求",
    featuresDesc: "既存の画像一括取得ツールや拡張機能の課題を分析し、セキュリティ、高速性、CORSエラー回避を両立した設計を実現しました。",
    features: [
      {
        icon: "🔒",
        badgeBg: "bg-link-bg-soft",
        badgeColor: "text-link",
        title: "100% クライアントサイド・プライバシー保護",
        description: "外部サーバーへ画像データをアップロードしません。すべての取得とZIP圧縮はブラウザ内で完結するため、機密画像やプライベートリンクも安全です。",
      },
      {
        icon: "🌐",
        badgeBg: "bg-cyan-soft",
        badgeColor: "text-cyan-deep",
        title: "CORS制限を自動回避するセキュアプロキシ",
        description: "通常ブラウザがブロックする外部ドメインの画像も、セキュアな自動プロキシフォールバックにより100%の成功率で取得できます。",
      },
      {
        icon: "🖼️",
        badgeBg: "bg-violet-soft",
        badgeColor: "text-violet-deep",
        title: "リアルタイムサムネイルプレビュー",
        description: "ダウンロード前に画像一覧、解像度、拡張子、推定ファイルサイズを確認し、不要なアイコンを簡単に除外できます。",
      },
      {
        icon: "🎛️",
        badgeBg: "bg-warning-soft",
        badgeColor: "text-warning-deep",
        title: "フォーマット別フィルター",
        description: "WebP、PNG、JPG、SVG、AVIFなど、必要なファイル形式だけをワンクリックで抽出・選択できます。",
      },
      {
        icon: "⚡",
        badgeBg: "bg-error-soft",
        badgeColor: "text-error-deep",
        title: "高速並列ダウンロード & 速度推定",
        description: "最大10リクエストを同時処理。ダウンロード進行状況や残り時間をリアルタイムに表示します。",
      },
      {
        icon: "🕷️",
        badgeBg: "bg-neutral-200",
        badgeColor: "text-ink",
        title: "Webページ丸ごと抽出クローラー",
        description: "WebページのURLを入力するだけで、<img>タグ、レスポンシブsrcset、CSS背景画像まで徹底的にスキャンして抽出します。",
      },
    ],
    howToTitle: "一括画像ダウンローダーの使い方",
    howToSubtitle: "簡単3ステップ",
    steps: [
      {
        number: 1,
        title: "URLリストの貼り付けまたはWebページ入力",
        description: "画像URLを直接貼り付けるか、「Webページから抽出」タブに対象サイトのURLを入力します。",
      },
      {
        number: 2,
        title: "解析とプレビュー確認",
        description: "「URLを読み込んで解析」ボタンをクリックすると、画像が一覧表示されます。",
      },
      {
        number: 3,
        title: "選択してZIPダウンロード",
        description: "保存したい画像を選択し、ZIPファイル名を指定して「選択した画像をダウンロード」を押すだけで保存完了です。",
      },
    ],
    guideTitle: "画像一括ダウンロード完全ガイド（無料オンラインツール）",
    guideParagraphs: [
      {
        text: "Web制作、デザイン、機械学習用データセット収集、ECサイトの移転作業など、大量の画像を一括で保存したい場面は頻繁に発生します。画像を1枚ずつ右クリックして保存するのは非常に非効率です。",
      },
      {
        text: "当サイトの『無料一括画像ダウンローダー』は、URLリストからの直接一括ダウンロードと、Webページ内の画像丸ごと抽出の両方に対応した最新のオンラインツールです。インストール不要で、安全かつ快適にご利用いただけます。",
      },
    ],
    faqTitle: "よくある質問 (FAQ)",
    faqs: [
      {
        question: "画像を一括でダウンロードするにはどうすればよいですか？",
        answer: "画像URLをテキストエリアに1行ずつ貼り付けて「解析」ボタンを押すだけで、全画像を1つのZIPファイルとして一括保存できます。",
      },
      {
        question: "利用料金や枚数制限はありますか？",
        answer: "完全無料で、登録も不要です。ブラウザのメモリが許す限り何枚でも無制限にダウンロードできます。",
      },
      {
        question: "Webサイト内の画像をすべて保存できますか？",
        answer: "「Webページから抽出」タブに対象サイトのURLを入力すれば、ページ内の画像、アイコン、背景画像を自動検出して一括ダウンロード可能です。",
      },
    ],
  },
  fr: {
    seo: {
      title: "Téléchargeur d'Images en Masse Gratuit en Ligne - Télécharger depuis une Liste d'URLs",
      description: "Téléchargez des images en masse depuis une liste d'URLs ou une page web. Le meilleur téléchargeur par lot gratuit, rapide, sécurisé et zippé.",
      keywords: "télécharger images en masse, téléchargeur d'images par lot, télécharger images liste url, scraper images site web, sauvegarder photos en masse zip, extracteur d'images gratuit",
      badge: "⚡ 100% Côté Client & Sécurisé",
      heroTitle: "Téléchargez vos images en masse, instantanément.",
      heroSubtitle: "Collez une liste d'URLs d'images ou extrayez les médias de n'importe quel site web. Regroupez-les immédiatement dans un fichier ZIP sans saturer vos serveurs ni compromettre votre vie privée.",
      primaryCta: "Démarrer le Téléchargement",
      secondaryCta: "En Savoir Plus",
    },
    featuresTitle: "Pourquoi notre téléchargeur d'images est le meilleur choix.",
    featuresSubtitle: "Conçu pour la Performance",
    featuresDesc: "Nous avons repensé le téléchargement par lot pour éliminer les ralentissements, les risques de sécurité et les blocages CORS.",
    features: [
      {
        icon: "🔒",
        badgeBg: "bg-link-bg-soft",
        badgeColor: "text-link",
        title: "Confidentialité 100% Navigateur",
        description: "Aucune image n'est stockée sur nos serveurs. L'analyse, le téléchargement et la création du fichier ZIP s'exécutent entièrement dans votre navigateur.",
      },
      {
        icon: "🌐",
        badgeBg: "bg-cyan-soft",
        badgeColor: "text-cyan-deep",
        title: "Contournement Sécurisé des Blocages CORS",
        description: "Notre proxy sécurisé prend automatiquement le relais lorsque les serveurs distants bloquent l'accès direct, assurant un taux de réussite de 100%.",
      },
      {
        icon: "🖼️",
        badgeBg: "bg-violet-soft",
        badgeColor: "text-violet-deep",
        title: "Grille de Prévisualisation Complète",
        description: "Inspectez les miniatures, dimensions, formats et tailles de fichier avant de lancer le téléchargement final.",
      },
      {
        icon: "🎛️",
        badgeBg: "bg-warning-soft",
        badgeColor: "text-warning-deep",
        title: "Filtres Précis par Format",
        description: "Filtrez et sélectionnez instantanément les extensions dont vous avez besoin (PNG, JPG, WebP, SVG, AVIF).",
      },
      {
        icon: "⚡",
        badgeBg: "bg-error-soft",
        badgeColor: "text-error-deep",
        title: "Téléchargement Parallèle Ultra-Rapide",
        description: "Jusqu'à 10 requêtes simultanées pour un traitement immédiat avec estimation du temps restant.",
      },
      {
        icon: "🕷️",
        badgeBg: "bg-neutral-200",
        badgeColor: "text-ink",
        title: "Extraction Web Approfondie",
        description: "Entrez l'URL d'un site. Nous analysons les balises <img>, srcset et arrière-plans CSS pour tout extraire.",
      },
    ],
    howToTitle: "Comment utiliser le téléchargeur d'images par lot",
    howToSubtitle: "Processus Simple",
    steps: [
      {
        number: 1,
        title: "Coller les liens ou l'URL du site",
        description: "Insérez vos liens d'images directs ou entrez l'adresse d'un site web à analyser.",
      },
      {
        number: 2,
        title: "Analyser et prévisualiser",
        description: "Cliquez sur 'Charger et Analyser'. L'outil affiche toutes les images trouvées.",
      },
      {
        number: 3,
        title: "Filtrer et télécharger le ZIP",
        description: "Choisissez vos images, nommez votre archive et cliquez sur 'Télécharger la Sélection'.",
      },
    ],
    guideTitle: "Le Guide Ultime du Téléchargement d'Images en Masse Gratuit",
    guideParagraphs: [
      {
        text: "Dans le monde numérique, sauvegarder des dizaines ou des centaines d'images une par une est une perte de temps considérable. Notre outil gratuit en ligne vous permet de traiter vos listes d'URLs et d'aspirer les images d'un site en quelques clics.",
      },
    ],
    faqTitle: "Foire Aux Questions",
    faqs: [
      {
        question: "Comment télécharger plusieurs images en même temps ?",
        answer: "Collez votre liste d'URLs d'images dans notre outil, lancez l'analyse et cliquez sur 'Télécharger la Sélection' pour obtenir toutes les photos dans un fichier ZIP unique.",
      },
      {
        question: "Est-ce gratuit et sécurisé ?",
        answer: "Oui, notre outil est 100% gratuit, sans inscription, et fonctionne directement dans votre navigateur sans stocker vos données.",
      },
    ],
  },
  de: {
    seo: {
      title: "Kostenloser Bulk Bilder Downloader Online - Bilder aus URL-Liste herunterladen",
      description: "Massenhaft Bilder aus URL-Listen oder Webseiten herunterladen. Der beste kostenlose Bulk Image Downloader online. Schnell, privat und als ZIP-Datei.",
      keywords: "bulk bilder downloader, bilder im batch herunterladen, bilder aus url liste downloaden, webseiten bilder extrahieren, kostenlose bilder批量herunterladen, chrome bild downloader alternative",
      badge: "⚡ 100% Client-Seitig & Sicher",
      heroTitle: "Bilder im Batch herunterladen, blitzschnell.",
      heroSubtitle: "Fügen Sie eine Liste von Bild-URLs ein oder extrahieren Sie Medien von beliebigen Webseiten. Packen Sie alle Dateien direkt im Browser in ein praktisches ZIP-Archiv.",
      primaryCta: "Download Starten",
      secondaryCta: "Mehr Erfahren",
    },
    featuresTitle: "Warum unser Bulk Bilder Downloader überlegen ist.",
    featuresSubtitle: "Für Maximale Geschwindigkeit Entwickelt",
    featuresDesc: "Wir haben die Mängel bestehender Batch-Downloader beseitigt, um Ihnen ein 100% privates und schnelles Download-Erlebnis zu bieten.",
    features: [
      {
        icon: "🔒",
        badgeBg: "bg-link-bg-soft",
        badgeColor: "text-link",
        title: "100% Privatsphäre im Browser",
        description: "Keine Server-Uploads. Alle Bildabrufe und die ZIP-Komprimierung finden lokal im Speicher Ihres Browsers statt.",
      },
      {
        icon: "🌐",
        badgeBg: "bg-cyan-soft",
        badgeColor: "text-cyan-deep",
        title: "Intelligenter CORS-Proxy Fallback",
        description: "Verhindert Download-Abbrüche durch externe Sicherheitsrichtlinien automatisch für eine 100%ige Erfolgsquote.",
      },
      {
        icon: "🖼️",
        badgeBg: "bg-violet-soft",
        badgeColor: "text-violet-deep",
        title: "Live-Vorschau mit Bilddetails",
        description: "Sehen Sie Miniaturbilder, Auflösungen und Dateiformate vor dem finalen Download.",
      },
      {
        icon: "🎛️",
        badgeBg: "bg-warning-soft",
        badgeColor: "text-warning-deep",
        title: "Dateiformat-Filter",
        description: "Filtern Sie blitzschnell nach WebP, PNG, JPG, SVG oder AVIF mit nur einem Klick.",
      },
      {
        icon: "⚡",
        badgeBg: "bg-error-soft",
        badgeColor: "text-error-deep",
        title: "Parallele High-Speed Downloads",
        description: "Verarbeitet bis zu 10 Anfragen gleichzeitig mit Live-Geschwindigkeitsanzeige.",
      },
      {
        icon: "🕷️",
        badgeBg: "bg-neutral-200",
        badgeColor: "text-ink",
        title: "Webseiten Bild-Crawler",
        description: "Geben Sie eine Webadresse ein und extrahieren Sie alle Bilder, responsive Sets und CSS-Hintergründe.",
      },
    ],
    howToTitle: "So nutzen Sie den Bulk Downloader",
    howToSubtitle: "Einfacher Ablauf",
    steps: [
      {
        number: 1,
        title: "Links einfügen oder Webseite eingeben",
        description: "Fügen Sie direkte Bild-Links zeilenweise ein oder wählen Sie die Webseiten-Scraper-Option.",
      },
      {
        number: 2,
        title: "Analysieren und Prüfen",
        description: "Klicken Sie auf 'URLs Laden & Analysieren', um die Miniaturansichten zu laden.",
      },
      {
        number: 3,
        title: "Auswählen und als ZIP speichern",
        description: "Wählen Sie gewünschte Bilder aus und klicken Sie auf 'Ausgewählte Herunterladen'.",
      },
    ],
    guideTitle: "Der ultimative Leitfaden für kostenlose Bulk Bild-Downloads",
    guideParagraphs: [
      {
        text: "Das manuelle Speichern einzelner Bilder ist mühsam und ineffizient. Mit unserem kostenlosen Online-Tool können Sie hunderte Bilder aus URL-Listen oder Webseiten im Handumdrehen als ZIP-Archiv bündeln.",
      },
    ],
    faqTitle: "Häufig gestellte Fragen",
    faqs: [
      {
        question: "Wie kann ich viele Bilder auf einmal herunterladen?",
        answer: "Kopieren Sie Ihre Bild-URLs in das Eingabefeld, starten Sie die Analyse und laden Sie alle Dateien mit einem Klick als ZIP-Paket herunter.",
      },
      {
        question: "Kostet die Nutzung etwas?",
        answer: "Nein, unser Service ist zu 100% kostenlos und erfordert keine Registrierung oder Installation.",
      },
    ],
  },
  pt: {
    seo: {
      title: "Baixador de Imagens em Massa Grátis Online - Baixar por Lista de URLs",
      description: "Baixe imagens em lote a partir de listas de URLs ou páginas web. O melhor baixador de imagens em massa gratuito, rápido, privado e compactado em ZIP.",
      keywords: "baixar imagens em massa, baixador de imagens em lote, download de fotos em lote online, extrair imagens de site, baixar lista de urls imagens, salvar imagens em zip gratis",
      badge: "⚡ 100% no Navegador & Seguro",
      heroTitle: "Baixe imagens em lote instantaneamente.",
      heroSubtitle: "Cole uma lista de URLs de imagens ou extraia fotos de qualquer página da web. Junte tudo em um único arquivo ZIP sem gastar a banda do seu servidor nem expor sua privacidade.",
      primaryCta: "Começar a Baixar",
      secondaryCta: "Saiba Mais",
    },
    featuresTitle: "Por que nosso baixador em massa é a melhor escolha.",
    featuresSubtitle: "Focado em Desempenho",
    featuresDesc: "Repensamos a experiência de download em lote para garantir total privacidade, máxima velocidade e evitar bloqueios CORS.",
    features: [
      {
        icon: "🔒",
        badgeBg: "bg-link-bg-soft",
        badgeColor: "text-link",
        title: "100% Privacidade no Navegador",
        description: "Não salvamos nada em servidores. O processamento e a compactação ZIP acontecem direto na memória do seu navegador.",
      },
      {
        icon: "🌐",
        badgeBg: "bg-cyan-soft",
        badgeColor: "text-cyan-deep",
        title: "Desbloqueio CORS Automático",
        description: "Garante 100% de sucesso nos downloads contornando restrições de domínios externos de forma segura.",
      },
      {
        icon: "🖼️",
        badgeBg: "bg-violet-soft",
        badgeColor: "text-violet-deep",
        title: "Pré-visualização em Miniaturas",
        description: "Veja tamanhos, formatos e resolução das fotos antes de fazer o download final.",
      },
      {
        icon: "🎛️",
        badgeBg: "bg-warning-soft",
        badgeColor: "text-warning-deep",
        title: "Filtros por Extensão",
        description: "Filtre facilmente por WebP, PNG, JPG, SVG ou AVIF com um único clique.",
      },
      {
        icon: "⚡",
        badgeBg: "bg-error-soft",
        badgeColor: "text-error-deep",
        title: "Downloads Simultâneos Rápidos",
        description: "Baixe até 10 imagens em paralelo com medidor de velocidade em tempo real.",
      },
      {
        icon: "🕷️",
        badgeBg: "bg-neutral-200",
        badgeColor: "text-ink",
        title: "Extrator Completo de Sites",
        description: "Insira um endereço web para extrair tags de imagem, fundos CSS e arquivos responsivos.",
      },
    ],
    howToTitle: "Como usar o baixador de imagens em massa",
    howToSubtitle: "Passo a Passo Simples",
    steps: [
      {
        number: 1,
        title: "Cole os links ou insira o site",
        description: "Insira os links diretos de imagens ou informe o endereço do site que deseja raspar.",
      },
      {
        number: 2,
        title: "Analise e visualize",
        description: "Clique em 'Carregar e Analisar' para visualizar a lista completa de imagens.",
      },
      {
        number: 3,
        title: "Selecione e baixe o ZIP",
        description: "Escolha as fotos desejadas e clique em 'Baixar Selecionadas' para receber o arquivo ZIP.",
      },
    ],
    guideTitle: "Guia Completo para Download de Imagens em Massa Grátis",
    guideParagraphs: [
      {
        text: "Salvar imagens manualmente uma a uma é cansativo e demorado. Nossa ferramenta online permite que você faça downloads em massa de fotos via lista de links ou diretamente de páginas web em segundos.",
      },
    ],
    faqTitle: "Perguntas Frequentes",
    faqs: [
      {
        question: "Como baixar várias imagens de uma vez?",
        answer: "Cole a lista de links no campo de texto, clique em Analisar e depois em 'Baixar Selecionadas' para salvar tudo em um ZIP.",
      },
      {
        question: "O serviço é gratuito?",
        answer: "Sim, é 100% gratuito e ilimitado, sem necessidade de cadastro.",
      },
    ],
  },
  ko: {
    seo: {
      title: "무료 대량 이미지 다운로더 - URL 목록 및 웹페이지에서 일괄 저장",
      description: "URL 목록이나 웹사이트에서 이미지를 한 번에 대량 다운로드하세요. 빠르고 안전한 100% 브라우저 기반 무료 ZIP 압축 다운로더.",
      keywords: "이미지 일괄 다운로드, 이미지 대량 다운로드, URL 목록 이미지 다운, 웹페이지 이미지 추출, 대량 사진 다운로더, 무료 이미지 일괄 저장",
      badge: "⚡ 100% 브라우저 내 처리 & 보안",
      heroTitle: "대량의 이미지를 즉시 다운로드하세요.",
      heroSubtitle: "이미지 URL 목록을 붙여넣거나 웹페이지 주소를 입력하세요. 서버 대역폭 낭비나 개인정보 유출 걱정 없이 브라우저에서 즉시 ZIP 파일로 압축하여 저장합니다.",
      primaryCta: "다운로드 시작하기",
      secondaryCta: "자세히 보기",
    },
    featuresTitle: "왜 우리 이미지 대량 다운로더가 최고일까요?",
    featuresSubtitle: "압도적인 성능과 편의성",
    featuresDesc: "기존 도구들의 느린 속도, 개인정보 문제, CORS 다운로드 차단 문제를 완벽하게 개선했습니다.",
    features: [
      {
        icon: "🔒",
        badgeBg: "bg-link-bg-soft",
        badgeColor: "text-link",
        title: "100% 브라우저 내 보안 처리",
        description: "외부 서버로 이미지를 업로드하지 않습니다. 모든 다운로드와 ZIP 파일 생성은 사용자의 브라우저 내에서 안전하게 실행됩니다.",
      },
      {
        icon: "🌐",
        badgeBg: "bg-cyan-soft",
        badgeColor: "text-cyan-deep",
        title: "자동 CORS 보안 우회",
        description: "외부 도메인 차단 문제를 안전한 프록시를 통해 자동 해결하여 100% 다운로드 성공률을 보장합니다.",
      },
      {
        icon: "🖼️",
        badgeBg: "bg-violet-soft",
        badgeColor: "text-violet-deep",
        title: "실시간 썸네일 미리보기",
        description: "다운로드 전에 썸네일, 해상도, 확장자, 파일 크기를 미리 확인하고 불필요한 아이콘을 손쉽게 제외할 수 있습니다.",
      },
      {
        icon: "🎛️",
        badgeBg: "bg-warning-soft",
        badgeColor: "text-warning-deep",
        title: "파일 포맷별 필터링",
        description: "WebP, PNG, JPG, SVG, AVIF 등 필요한 확장자만 클릭 한 번으로 선택하여 받을 수 있습니다.",
      },
      {
        icon: "⚡",
        badgeBg: "bg-error-soft",
        badgeColor: "text-error-deep",
        title: "초고속 동시 다운로드",
        description: "최대 10개 파일을 동시 병렬 처리하여 대용량 이미지도 몇 초 만에 압축 저장합니다.",
      },
      {
        icon: "🕷️",
        badgeBg: "bg-neutral-200",
        badgeColor: "text-ink",
        title: "웹페이지 전체 이미지 크롤러",
        description: "웹사이트 주소만 넣으면 <img> 태그, 반응형 이미지, CSS 배경 이미지까지 모두 찾아냅니다.",
      },
    ],
    howToTitle: "대량 이미지 다운로더 사용법",
    howToSubtitle: "간단한 3단계",
    steps: [
      {
        number: 1,
        title: "URL 목록 입력 또는 웹사이트 주소 입력",
        description: "이미지 링크를 한 줄씩 붙여넣거나 추출할 웹사이트 URL을 입력합니다.",
      },
      {
        number: 2,
        title: "분석 및 미리보기 확인",
        description: "'URL 로드 및 분석' 버튼을 눌러 이미지 목록을 확인합니다.",
      },
      {
        number: 3,
        title: "선택 후 ZIP으로 저장",
        description: "필요한 이미지를 선택하고 '선택한 이미지 다운로드'를 누르면 즉시 ZIP 파일로 저장됩니다.",
      },
    ],
    guideTitle: "무료 대량 이미지 다운로더 완벽 가이드",
    guideParagraphs: [
      {
        text: "웹 디자이너, 개발자, 마케터에게 대량의 이미지 수집은 번거로운 작업입니다. 일일이 '다른 이름으로 저장'을 누를 필요 없이 본 도구를 사용하면 수백 장의 사진을 순식간에 ZIP 파일로 일괄 저장할 수 있습니다.",
      },
    ],
    faqTitle: "자주 묻는 질문",
    faqs: [
      {
        question: "여러 장의 이미지를 한 번에 다운로드하는 방법은?",
        answer: "이미지 URL 목록을 입력창에 붙여넣고 분석 후 다운로드 버튼을 누르면 모든 이미지가 하나의 ZIP 파일로 저장됩니다.",
      },
      {
        question: "무료인가요?",
        answer: "네, 설치나 회원가입 없이 100% 무료로 무제한 사용하실 수 있습니다.",
      },
    ],
  },
  it: {
    seo: {
      title: "Scaricatore di Immagini di Massa Gratis Online - Scarica da Elenco URL",
      description: "Scarica immagini in blocco da una lista di URL o pagine web. Il miglior tool online gratuito per scaricare immagini in batch in formato ZIP.",
      keywords: "scaricare immagini in blocco, download immagini di massa, scaricatore immagini da lista url, estrarre immagini da sito web, download foto batch zip, salvare immagini multiple gratis",
      badge: "⚡ 100% Lato Client & Sicuro",
      heroTitle: "Scarica immagini in blocco, istantaneamente.",
      heroSubtitle: "Incolla un elenco di URL di immagini o estrai i contenuti multimediali da qualsiasi pagina web. Raccoglile subito in un unico archivio ZIP senza consumare banda né violare la tua privacy.",
      primaryCta: "Inizia a Scaricare",
      secondaryCta: "Scopri di Più",
    },
    featuresTitle: "Perché il nostro scaricatore di massa è la scelta migliore.",
    featuresSubtitle: "Progettato per le Massime Prestazioni",
    featuresDesc: "Abbiamo ottimizzato l'intero processo di download per eliminare rallentamenti, rischi di sicurezza e blocchi CORS.",
    features: [
      {
        icon: "🔒",
        badgeBg: "bg-link-bg-soft",
        badgeColor: "text-link",
        title: "100% Privacy nel Browser",
        description: "Nessun dato viene inviato a server esterni. Tutto il download e la creazione del file ZIP avvengono localmente sul tuo dispositivo.",
      },
      {
        icon: "🌐",
        badgeBg: "bg-cyan-soft",
        badgeColor: "text-cyan-deep",
        title: "Bypass Automatico dei Blocchi CORS",
        description: "Garantisce il 100% di successo nei download superando in sicurezza le restrizioni dei domini remoti.",
      },
      {
        icon: "🖼️",
        badgeBg: "bg-violet-soft",
        badgeColor: "text-violet-deep",
        title: "Anteprima Interattiva delle Immagini",
        description: "Visualizza miniature, risoluzione e formati prima di avviare il salvataggio definitivo.",
      },
      {
        icon: "🎛️",
        badgeBg: "bg-warning-soft",
        badgeColor: "text-warning-deep",
        title: "Filtri Rapidi per Formato",
        description: "Seleziona con un clic solo i formati desiderati (PNG, JPG, WebP, SVG, AVIF).",
      },
      {
        icon: "⚡",
        badgeBg: "bg-error-soft",
        badgeColor: "text-error-deep",
        title: "Download Paralleli ad Alta Velocità",
        description: "Scarica fino a 10 immagini contemporaneamente con indicatore di velocità in tempo reale.",
      },
      {
        icon: "🕷️",
        badgeBg: "bg-neutral-200",
        badgeColor: "text-ink",
        title: "Scraping Approfondito di Pagine Web",
        description: "Inserisci un URL per scansionare tag <img>, srcset responsivi e immagini di sfondo CSS.",
      },
    ],
    howToTitle: "Come usare lo scaricatore di immagini di massa",
    howToSubtitle: "Procedura Semplice",
    steps: [
      {
        number: 1,
        title: "Incolla i link o inserisci il sito",
        description: "Inserisci l'elenco degli URL delle immagini o l'indirizzo della pagina web da estrarre.",
      },
      {
        number: 2,
        title: "Analizza e visualizza l'anteprima",
        description: "Clicca su 'Carica e Analizza' per caricare la griglia con tutte le immagini rilevate.",
      },
      {
        number: 3,
        title: "Seleziona e scarica in ZIP",
        description: "Scegli le immagini da salvare e premi 'Scarica Selezionate' per ottenere l'archivio compresso.",
      },
    ],
    guideTitle: "Guida Completa al Download di Immagini in Massa Gratis",
    guideParagraphs: [
      {
        text: "Salvare le immagini manualmente una per una richiede troppo tempo. Il nostro strumento online gratuito ti consente di scaricare centinaia di immagini in batch da elenchi di link o direttamente da siti web in pochi secondi.",
      },
    ],
    faqTitle: "Domande Frequenti",
    faqs: [
      {
        question: "Come scaricare molte immagini contemporaneamente?",
        answer: "Incolla l'elenco degli URL, avvia l'analisi e clicca su Scarica per ricevere tutte le foto in un unico file ZIP compresso.",
      },
      {
        question: "Il servizio è gratuito e sicuro?",
        answer: "Sì, è gratuito al 100%, illimitato e sicuro perché funziona interamente all'interno del tuo browser.",
      },
    ],
  },
};

export const urlListContent: Record<
  SupportedLanguage,
  {
    title: string;
    description: string;
    keywords: string;
    badge: string;
    heroTitle: string;
    heroSubtitle: string;
    heroCta: string;
    guideTitle: string;
    guideParagraphs: Array<{ heading?: string; text: string; list?: string[] }>;
  }
> = {
  en: {
    title: "Bulk Image Downloader from URL List - Free Online Batch Tool",
    description: "Download images in bulk from a list of URLs. Paste your image links and batch download them instantly in a ZIP package. 100% private and client-side.",
    keywords: "bulk image downloader from url list, free bulk image downloader from url list, download images from urls in bulk, batch image downloader from list",
    badge: "⚡ Batch Downloader from Link List",
    heroTitle: "Bulk download images from URL lists.",
    heroSubtitle: "Have a list of direct image links? Paste them all here to parse, verify, and package them into a single high-speed ZIP archive locally in your browser.",
    heroCta: "Open URL Paste Tool",
    guideTitle: "The Complete Guide to Bulk Image Downloading from URL Lists",
    guideParagraphs: [
      {
        text: "Managing bulk image downloads can quickly become a bottleneck for web design agencies, data scientists, digital marketers, and e-commerce professionals. A dedicated bulk image downloader from url list provides a browser-based, zero-code environment to process hundreds of image URLs simultaneously.",
      },
      {
        heading: "How to Generate a Clean Image URL List for Downloading",
        text: "Copy the links from your spreadsheet (Excel, Google Sheets), CSV, or text file and paste them directly. The downloader engine will automatically clean duplicate links and extract valid image URLs.",
      },
    ],
  },
  es: {
    title: "Descargador de Imágenes por Lista de URLs - Herramienta Online Gratis",
    description: "Descarga imágenes en lote desde una lista de URLs. Pega tus enlaces y descárgalos al instante en un archivo ZIP. 100% privado y seguro.",
    keywords: "descargar imagenes por lista de urls, descarga masiva de imagenes urls, bajar imagenes por lote desde lista, descargar fotos desde enlaces zip",
    badge: "⚡ Descarga Masiva desde Lista de Enlaces",
    heroTitle: "Descarga imágenes en lote desde listas de URLs.",
    heroSubtitle: "¿Tienes una lista de enlaces directos de imágenes? Pégalos aquí para analizarlos, verificarlos y empaquetarlos en un archivo ZIP de alta velocidad en tu navegador.",
    heroCta: "Abrir Herramienta de Pegado",
    guideTitle: "Guía Completa para Descargar Imágenes por Lista de URLs",
    guideParagraphs: [
      {
        text: "La gestión de descargas masivas de imágenes es fundamental para diseñadores web, desarrolladores y especialistas en marketing. Nuestra herramienta procesa listas de enlaces de forma 100% segura en tu navegador sin enviar datos a servidores externos.",
      },
    ],
  },
  ja: {
    title: "URLリストから画像一括ダウンロード - 無料オンラインツール",
    description: "URLリストから画像を一括ダウンロード。リンクを貼り付けるだけでZIPファイルにまとめて高速保存。100%プライベートで安全。",
    keywords: "URLリスト 画像一括ダウンロード, 複数画像 URL まとめ保存, 画像URL 一括保存 ZIP, 画像リンク 一括取得",
    badge: "⚡ リンク一覧からの一括ダウンロード",
    heroTitle: "URLリストから画像を一括ダウンロード",
    heroSubtitle: "画像URLのリストを貼り付けるだけで、ブラウザ内で高速に検証・ZIP圧縮して一括保存できます。",
    heroCta: "URL貼り付けツールを開く",
    guideTitle: "URLリストからの画像一括ダウンロード完全ガイド",
    guideParagraphs: [
      {
        text: "スプレッドシートやテキストファイルに保存された大量の画像URLを、1枚ずつ保存する手間なく一度にZIPファイルとしてダウンロードできます。",
      },
    ],
  },
  fr: {
    title: "Téléchargeur d'Images par Liste d'URLs - Outil Gratuit en Ligne",
    description: "Téléchargez des images en masse à partir d'une liste d'URLs. Collez vos liens et téléchargez-les instantanément dans une archive ZIP.",
    keywords: "télécharger images par liste url, téléchargement groupé images liens, extraire images liste url zip, enregistrer plusieurs photos par url",
    badge: "⚡ Téléchargement par Liste de Liens",
    heroTitle: "Téléchargez des images en masse à partir de listes d'URLs.",
    heroSubtitle: "Vous avez une liste de liens d'images ? Collez-les ici pour les analyser, vérifier et regrouper dans une archive ZIP ultra-rapide.",
    heroCta: "Ouvrir l'Outil par URLs",
    guideTitle: "Guide Complet du Téléchargement d'Images par Liste d'URLs",
    guideParagraphs: [
      {
        text: "Téléchargez des centaines d'images simultanément à partir d'un simple fichier texte ou d'une feuille de calcul, en toute confidentialité.",
      },
    ],
  },
  de: {
    title: "Massen-Bilder-Downloader aus URL-Liste - Kostenloses Online-Tool",
    description: "Bilder im Batch von einer Liste von URLs herunterladen. Fügen Sie Ihre Bild-Links ein und laden Sie sie sofort als ZIP-Archiv herunter.",
    keywords: "bilder aus url liste herunterladen, massen bild downloader url liste, batch bilder download links zip, mehrere bilder gleichzeitig speichern",
    badge: "⚡ Batch-Downloader aus Link-Liste",
    heroTitle: "Bilder im Batch aus URL-Listen herunterladen.",
    heroSubtitle: "Fügen Sie eine Liste direkter Bild-URLs ein, um sie lokal im Browser zu prüfen und in einer schnellen ZIP-Datei zusammenzufassen.",
    heroCta: "URL-Tool Öffnen",
    guideTitle: "Vollständiger Leitfaden zum Massen-Download von Bildern aus URL-Listen",
    guideParagraphs: [
      {
        text: "Sparen Sie wertvolle Zeit, indem Sie Listen von Bild-URLs aus Tabellen oder Textdateien in einem einzigen Schritt als ZIP herunterladen.",
      },
    ],
  },
  pt: {
    title: "Baixar Imagens em Massa de Lista de URLs - Ferramenta Online Grátis",
    description: "Baixe imagens em lote a partir de uma lista de URLs. Cole seus links e faça o download instantâneo em um arquivo ZIP seguro.",
    keywords: "baixar imagens por lista de urls, download em lote fotos links, salvar multiplas imagens lista url zip, descarregar imagens em massa",
    badge: "⚡ Download em Lote por Lista de Links",
    heroTitle: "Baixe imagens em lote a partir de listas de URLs.",
    heroSubtitle: "Cole sua lista de links diretos de imagens para processar, visualizar e compactar tudo em um arquivo ZIP no seu navegador.",
    heroCta: "Abrir Ferramenta de URLs",
    guideTitle: "Guia Completo para Download em Massa de Imagens por Lista de URLs",
    guideParagraphs: [
      {
        text: "Cole URLs de planilhas ou documentos de texto e salve dezenas ou centenas de imagens de forma totalmente gratuita e privada.",
      },
    ],
  },
  ko: {
    title: "URL 목록 이미지 대량 다운로더 - 무료 온라인 일괄 저장 툴",
    description: "URL 목록에서 이미지를 일괄 다운로드하세요. 이미지 링크를 붙여넣고 한 번의 클릭으로 ZIP 압축 파일로 즉시 저장합니다.",
    keywords: "URL 목록 이미지 다운로드, 링크 목록 사진 일괄 저장, 여러 이미지 한번에 다운로드 ZIP, 대량 이미지 추출기",
    badge: "⚡ 링크 목록 일괄 다운로더",
    heroTitle: "URL 목록에서 이미지를 일괄 다운로드하세요.",
    heroSubtitle: "이미지 링크 목록을 붙여넣으면 브라우저에서 직접 검증하고 초고속 ZIP 압축 파일로 일괄 저장해 드립니다.",
    heroCta: "URL 붙여넣기 도구 열기",
    guideTitle: "URL 목록을 통한 이미지 대량 다운로드 가이드",
    guideParagraphs: [
      {
        text: "스프레드시트나 메모장에 정리된 이미지 링크 목록을 복사하여 붙여넣으면 즉시 하나의 ZIP 파일로 다운로드할 수 있습니다.",
      },
    ],
  },
  it: {
    title: "Scaricatore di Immagini da Elenco URL - Tool Online Gratis",
    description: "Scarica immagini in blocco da una lista di URL. Incolla i link e scarica all'istante tutte le immagini in un archivio ZIP sicuro.",
    keywords: "scaricare immagini da lista url, download immagini da elenco link, download foto in batch zip, scaricatore immagini url",
    badge: "⚡ Download in Batch da Elenco Link",
    heroTitle: "Scarica immagini in blocco da elenchi di URL.",
    heroSubtitle: "Incolla un elenco di link diretti alle immagini per analizzarle, visualizzarle e scaricarle in un unico archivio ZIP.",
    heroCta: "Apri Tool Elenco URL",
    guideTitle: "Guida Completa al Download di Immagini da Liste di URL",
    guideParagraphs: [
      {
        text: "Estrai e scarica centinaia di immagini partendo da una lista di link in fogli di calcolo o file di testo in maniera rapida e sicura.",
      },
    ],
  },
};

export const scraperContent: Record<
  SupportedLanguage,
  {
    title: string;
    description: string;
    keywords: string;
    badge: string;
    heroTitle: string;
    heroSubtitle: string;
    heroCta: string;
    guideTitle: string;
    guideParagraphs: Array<{ heading?: string; text: string; list?: string[] }>;
  }
> = {
  en: {
    title: "Webpage Image Scraper - Extract & Download All Images from Website",
    description: "Scrape and download all images from any webpage. Enter a website URL to extract image elements, CSS backgrounds, and responsive srcsets. Free & secure.",
    keywords: "webpage image scraper, extract images from webpage, download all images from website, website image downloader, scrape images from site",
    badge: "⚡ Webpage Scraper & Crawler",
    heroTitle: "Extract and download website images.",
    heroSubtitle: "Enter any public website URL. Our crawler will instantly search for and extract all images, icons, backgrounds, and responsive assets for easy packaging.",
    heroCta: "Open Webpage Scraper",
    guideTitle: "The Comprehensive Guide to Webpage Image Scraping",
    guideParagraphs: [
      {
        text: "Extracting media assets from modern websites requires parsing complex HTML DOM trees, responsive image picture tags, inline CSS background declarations, and SVG elements. Our scraper automates all of this directly in your browser.",
      },
    ],
  },
  es: {
    title: "Extractor de Imágenes de Páginas Web - Descargar Fotos de Sitios",
    description: "Extrae y descarga todas las imágenes de cualquier página web. Introduce la URL para obtener etiquetas img, fondos CSS y recursos en ZIP.",
    keywords: "extraer imagenes de pagina web, descargar todas las fotos de un sitio web, extractor de imagenes web, scraper de imagenes gratis",
    badge: "⚡ Extractor de Sitios Web",
    heroTitle: "Extrae y descarga imágenes de cualquier sitio web.",
    heroSubtitle: "Introduce la URL de cualquier página pública. Nuestro motor extraerá al instante todas las imágenes, iconos y fondos para descargarlos en ZIP.",
    heroCta: "Abrir Extractor Web",
    guideTitle: "Guía Completa para Extraer Imágenes de Páginas Web",
    guideParagraphs: [
      {
        text: "Extrae automáticamente todas las fotos, recursos visuales y fondos CSS de cualquier sitio web en segundos sin instalar extensiones.",
      },
    ],
  },
  ja: {
    title: "Webページ画像抽出ツール - サイト内の全画像をまとめてダウンロード",
    description: "任意のWebサイトからすべての画像を抽出してダウンロード。URLを入力するだけでimgタグやCSS背景画像を検出しZIP保存。",
    keywords: "Webページ 画像抽出, サイト内 画像 一括ダウンロード, Webサイト 画像保存, ホームページ 写真 まとめて保存",
    badge: "⚡ Webページ画像抽出＆クローラー",
    heroTitle: "Webサイトの画像をまとめて抽出・ダウンロード",
    heroSubtitle: "WebページのURLを入力するだけで、掲載されているすべての写真、アイコン、背景画像を抽出してZIP保存できます。",
    heroCta: "Web抽出ツールを開く",
    guideTitle: "Webページ画像抽出・保存の完全ガイド",
    guideParagraphs: [
      {
        text: "サイトの引っ越しやデザインリサーチの際に、ページ内の画像を一括で取得して効率的に整理できます。",
      },
    ],
  },
  fr: {
    title: "Extracteur d'Images de Page Web - Télécharger les Photos d'un Site",
    description: "Extrayez et téléchargez toutes les images de n'importe quel site web. Entrez une URL pour récupérer balises img, fonds CSS et srcsets.",
    keywords: "extraire images page web, télécharger toutes les images site internet, scraper images site web, aspirateur photos en ligne",
    badge: "⚡ Extracteur de Pages Web",
    heroTitle: "Extrayez et téléchargez les images d'un site web.",
    heroSubtitle: "Entrez l'URL d'un site public. Notre moteur analyse et extrait toutes les images, icônes et arrière-plans pour les enregistrer en ZIP.",
    heroCta: "Ouvrir l'Extracteur Web",
    guideTitle: "Guide Complet de l'Extraction d'Images depuis un Site Web",
    guideParagraphs: [
      {
        text: "Récupérez facilement tous les éléments visuels d'une page sans installer d'extension suspecte dans votre navigateur.",
      },
    ],
  },
  de: {
    title: "Webseiten-Bilder-Scraper - Alle Bilder einer Website Herunterladen",
    description: "Bilder von beliebigen Webseiten extrahieren und herunterladen. Geben Sie eine URL ein, um Bilder, CSS-Hintergründe und Assets als ZIP zu speichern.",
    keywords: "bilder von website extrahieren, alle bilder einer webseite herunterladen, webseiten bilder scraper, bilder aus homepage speichern",
    badge: "⚡ Webseiten-Scraper & Crawler",
    heroTitle: "Bilder von beliebigen Websites extrahieren und herunterladen.",
    heroSubtitle: "Geben Sie eine Webseiten-URL ein, um alle Bilder, Icons und CSS-Hintergründe sofort zu erfassen und als ZIP-Paket herunterzuladen.",
    heroCta: "Scraper-Tool Öffnen",
    guideTitle: "Leitfaden zum Extrahieren von Bildern aus Webseiten",
    guideParagraphs: [
      {
        text: "Extrahieren Sie alle Mediendateien einer Webseite mit einem Klick und laden Sie diese gebündelt und sicher herunter.",
      },
    ],
  },
  pt: {
    title: "Extrator de Imagens de Páginas Web - Baixar Fotos de Sites",
    description: "Extraia e baixe todas as imagens de qualquer página da internet. Digite a URL para extrair fotos, fundos CSS e salvar em ZIP.",
    keywords: "extrair imagens de pagina web, baixar todas as fotos de um site, extrator de fotos web, scraper de imagens online",
    badge: "⚡ Extrator e Rastreador de Páginas Web",
    heroTitle: "Extraia e baixe imagens de páginas web.",
    heroSubtitle: "Digite o endereço de qualquer site público para extrair todas as imagens, ícones e planos de fundo de forma rápida e segura.",
    heroCta: "Abrir Extrator Web",
    guideTitle: "Guia Completo de Extração de Imagens de Sites da Web",
    guideParagraphs: [
      {
        text: "Economize tempo extraindo fotos e ilustrações de páginas web diretamente para um pacote ZIP compactado.",
      },
    ],
  },
  ko: {
    title: "웹페이지 이미지 추출기 - 웹사이트의 모든 사진 일괄 다운로드",
    description: "모든 웹페이지에서 이미지를 추출하고 다운로드하세요. 웹사이트 URL만 입력하면 img 태그, CSS 배경 이미지까지 모두 찾아 ZIP으로 저장합니다.",
    keywords: "웹페이지 이미지 추출, 웹사이트 사진 일괄 다운로드, 사이트 이미지 크롤러, 홈페이지 사진 추출기",
    badge: "⚡ 웹페이지 스크래퍼 & 크롤러",
    heroTitle: "웹사이트 이미지를 손쉽게 추출하고 다운로드하세요.",
    heroSubtitle: "공개된 웹사이트 주소를 입력하면 페이지 내 모든 이미지, 아이콘, 배경 에셋을 자동으로 검색하여 ZIP 파일로 묶어 드립니다.",
    heroCta: "웹페이지 추출 도구 열기",
    guideTitle: "웹페이지 이미지 추출 및 일괄 저장 완벽 가이드",
    guideParagraphs: [
      {
        text: "웹사이트 내 모든 시각 자료를 별도의 프로그램 설치 없이 웹 브라우저에서 바로 추출하여 편리하게 관리하세요.",
      },
    ],
  },
  it: {
    title: "Estrattore Immagini da Pagine Web - Scarica Foto da Qualsiasi Sito",
    description: "Estrai e scarica tutte le immagini da una pagina web. Inserisci l'URL di un sito per trovare tag img, sfondi CSS e salvare tutto in ZIP.",
    keywords: "estrarre immagini da pagina web, scaricare tutte le foto da un sito, scraper immagini web, salvataggio foto sito internet",
    badge: "⚡ Estrattore e Crawler di Pagine Web",
    heroTitle: "Estrai e scarica immagini da qualsiasi sito web.",
    heroSubtitle: "Inserisci l'URL di una pagina pubblica. Il nostro crawler troverà tutte le foto, icone e sfondi per scaricarli in un file ZIP.",
    heroCta: "Apri Estrattore Web",
    guideTitle: "Guida Completa all'Estrazione di Immagini da Siti Web",
    guideParagraphs: [
      {
        text: "Scarica tutte le risorse visive di un sito in pochissimi secondi, senza installare estensioni invasive nel tuo browser.",
      },
    ],
  },
};

export const chromeAltContent: Record<
  SupportedLanguage,
  {
    title: string;
    description: string;
    keywords: string;
    badge: string;
    heroTitle: string;
    heroSubtitle: string;
    ctaList: string;
    ctaScraper: string;
    sectionTitle: string;
    paragraphs: Array<{ heading?: string; text: string; list?: string[] }>;
  }
> = {
  en: {
    title: "Chrome Bulk Image Downloader Alternative - Safe & Extension-Free",
    description: "Looking for a Chrome bulk image downloader? Avoid browser extension security risks. Try this 100% private, client-side online alternative that requires no installation.",
    keywords: "chrome bulk image downloader, bulk image downloader chrome, chrome image downloader extension alternative",
    badge: "🔒 Secure Browser-Native Alternative",
    heroTitle: "A safer alternative to Chrome image downloader extensions.",
    heroSubtitle: "Why risk your privacy installing extensions that read all your browsing data? Try our free, client-side web application that processes files entirely in your browser memory.",
    ctaList: "Use URL List Downloader",
    ctaScraper: "Use Webpage Scraper",
    sectionTitle: "Web App vs. Chrome Extensions: The Security Breakdown",
    paragraphs: [
      {
        text: "Chrome extensions often ask for dangerous permissions ('Read and change all your data on the websites you visit'). Our tool operates purely as an in-browser web app with 0 installation and 100% privacy.",
      },
    ],
  },
  es: {
    title: "Alternativa Segura a Extensiones de Chrome para Descargar Imágenes",
    description: "¿Buscas una extensión de Chrome para descargar imágenes? Evita riesgos de seguridad. Prueba esta alternativa online 100% privada sin instalación.",
    keywords: "alternativa extension chrome descargar imagenes, bulk image downloader chrome alternativa, descargar imagenes sin extensiones",
    badge: "🔒 Alternativa Nativa y Segura",
    heroTitle: "Una alternativa más segura a las extensiones de Chrome.",
    heroSubtitle: "¿Por qué arriesgar tu privacidad instalando extensiones invasivas? Prueba nuestra aplicación web gratuita que procesa todo localmente.",
    ctaList: "Usar Descargador por URLs",
    ctaScraper: "Usar Extractor Web",
    sectionTitle: "Aplicación Web vs. Extensiones de Chrome: Comparativa de Seguridad",
    paragraphs: [
      {
        text: "Nuestra herramienta no requiere permisos especiales ni instalación. Todo se ejecuta de forma segura en tu navegador sin rastreo.",
      },
    ],
  },
  ja: {
    title: "Chrome拡張機能の安全な代替 - インストール不要の画像一括ダウンローダー",
    description: "Chromeの画像一括ダウンロード拡張機能をお探しですか？権限リスクのない100%プライベートなWebツールをお試しください。",
    keywords: "Chrome 画像ダウンロード 拡張機能 代替, 画像 一括保存 拡張機能 なし, 安全な画像ダウンローダー",
    badge: "🔒 安全なブラウザ完結型ツール",
    heroTitle: "Chrome拡張機能より安全な画像一括ダウンロードツール",
    heroSubtitle: "閲覧データを読み取る拡張機能をインストールする必要はありません。ブラウザメモリ内で完結する安全なWebツールです。",
    ctaList: "URLリストツールを使う",
    ctaScraper: "Web抽出ツールを使う",
    sectionTitle: "WebアプリとChrome拡張機能の比較",
    paragraphs: [
      {
        text: "インストール不要で、端末のセキュリティを損なうことなく安全に画像を一括保存できます。",
      },
    ],
  },
  fr: {
    title: "Alternative aux Extensions Chrome de Téléchargement d'Images",
    description: "Vous cherchez une extension Chrome ? Évitez les risques de sécurité et profitez d'une alternative en ligne 100% privée sans installation.",
    keywords: "alternative extension chrome images, telecharger images sans extension chrome, outil telechargement images sécurisé",
    badge: "🔒 Alternative Sécurisée sans Extension",
    heroTitle: "Une alternative plus sûre aux extensions Chrome.",
    heroSubtitle: "Protégez vos données de navigation en utilisant notre outil web 100% client-side sans aucune installation requise.",
    ctaList: "Utiliser l'Outil par URLs",
    ctaScraper: "Utiliser l'Extracteur Web",
    sectionTitle: "Application Web vs Extensions Chrome : Sécurité et Confidentialité",
    paragraphs: [
      {
        text: "Profitez de toutes les fonctionnalités de téléchargement en lot sans exposer vos données personnelles.",
      },
    ],
  },
  de: {
    title: "Sichere Chrome-Erweiterungs-Alternative für Massen-Bilder-Download",
    description: "Suchen Sie einen Chrome-Bilder-Downloader? Vermeiden Sie Sicherheitsrisiken von Browser-Erweiterungen mit unserem sicheren Online-Tool.",
    keywords: "chrome bilder downloader alternative, bilder herunterladen ohne browser erweiterung, sicherer massen bilder download",
    badge: "🔒 Sichere Browser-Native Alternative",
    heroTitle: "Eine sicherere Alternative zu Chrome-Bilder-Erweiterungen.",
    heroSubtitle: "Keine riskanten Browser-Erweiterungen nötig. Nutzen Sie unsere kostenlose Webanwendung, die lokal im Speicher läuft.",
    ctaList: "URL-Listen-Tool Nutzen",
    ctaScraper: "Webseiten-Scraper Nutzen",
    sectionTitle: "Web-App vs. Chrome-Erweiterungen: Sicherheitsvergleich",
    paragraphs: [
      {
        text: "Laden Sie Bilder schnell und sicher herunter, ohne zusätzliche Add-ons installieren zu müssen.",
      },
    ],
  },
  pt: {
    title: "Alternativa Segura a Extensões do Chrome para Baixar Imagens",
    description: "Procurando um downloader do Chrome? Evite riscos de segurança com esta alternativa web 100% privada sem instalação.",
    keywords: "alternativa extensao chrome baixar imagens, bulk image downloader chrome sem extensao, baixar imagens seguro",
    badge: "🔒 Alternativa Nativa e Segura",
    heroTitle: "Uma alternativa mais segura às extensões do Chrome.",
    heroSubtitle: "Evite instalar extensões que leem seus dados. Use nosso aplicativo web gratuito que processa tudo diretamente no navegador.",
    ctaList: "Usar Downloader por URLs",
    ctaScraper: "Usar Extrator de Sites",
    sectionTitle: "Web App vs Extensões do Chrome: Análise de Segurança",
    paragraphs: [
      {
        text: "Processamento 100% no navegador para máxima segurança e privacidade dos seus downloads.",
      },
    ],
  },
  ko: {
    title: "크롬 확장프로그램 대체 - 설치 없는 안전한 이미지 일괄 다운로더",
    description: "크롬 이미지 다운로더 확장프로그램을 찾고 계신가요? 보안 위험 없이 브라우저에서 바로 실행되는 100% 안전한 무료 웹 도구를 사용해 보세요.",
    keywords: "크롬 이미지 다운로더 확장프로그램 대체, 확장프로그램 없이 사진 다운로드, 안전한 대량 이미지 다운로더",
    badge: "🔒 안전한 웹 기반 대체 솔루션",
    heroTitle: "크롬 확장프로그램보다 안전한 이미지 다운로더",
    heroSubtitle: "개인정보를 수집하는 확장프로그램 대신, 브라우저 내부에서만 안전하게 동작하는 무료 웹 툴을 이용하세요.",
    ctaList: "URL 목록 도구 사용",
    ctaScraper: "웹페이지 추출기 사용",
    sectionTitle: "웹 앱과 크롬 확장프로그램의 보안 비교",
    paragraphs: [
      {
        text: "추가 프로그램 설치 없이 안전하게 웹사이트의 이미지를 한곳에 모아 다운로드할 수 있습니다.",
      },
    ],
  },
  it: {
    title: "Alternativa Sicura alle Estensioni Chrome per Scaricare Immagini",
    description: "Cerchi un'estensione per Chrome? Evita i rischi per la sicurezza e prova questa alternativa online gratuita, privata e senza installazione.",
    keywords: "alternativa estensione chrome immagini, scaricare immagini senza estensioni, download foto sicuro online",
    badge: "🔒 Alternativa Sicura nel Browser",
    heroTitle: "Un'alternativa più sicura alle estensioni di Chrome.",
    heroSubtitle: "Non rischiare la tua privacy con estensioni invasive. Usa la nostra applicazione web che lavora interamente nella memoria del browser.",
    ctaList: "Usa Tool Elenco URL",
    ctaScraper: "Usa Estrattore Web",
    sectionTitle: "Applicazione Web vs Estensioni Chrome: Confronto Sicurezza",
    paragraphs: [
      {
        text: "Tutti i vantaggi del download in batch con zero rischi per la privacy e nessuna installazione richiesta.",
      },
    ],
  },
};

export const subpageGeneralContent: Record<
  SupportedLanguage,
  {
    about: {
      title: string;
      description: string;
      badge: string;
      heroTitle: string;
      heroSubtitle: string;
      contentHtml: string;
    };
    contact: {
      title: string;
      description: string;
      badge: string;
      heroTitle: string;
      heroSubtitle: string;
      directTitle: string;
      directDesc: string;
      faqTitle: string;
      faqDesc: string;
    };
    privacy: {
      title: string;
      description: string;
      badge: string;
      heroTitle: string;
      heroSubtitle: string;
      contentHtml: string;
    };
    terms: {
      title: string;
      description: string;
      badge: string;
      heroTitle: string;
      heroSubtitle: string;
      contentHtml: string;
    };
  }
> = {
  en: {
    about: {
      title: "About Us - Free Bulk Image Downloader",
      description: "Learn about the philosophy and mission behind our free client-side Bulk Image Downloader. Fast, secure, and extension-free.",
      badge: "💡 Our Philosophy",
      heroTitle: "About Bulk Image Downloader",
      heroSubtitle: "A high-performance, private, client-side utility designed to simplify asset gathering for creators and developers worldwide.",
      contentHtml: `<div><h2 class="text-2xl font-bold tracking-tight text-ink mb-4 font-sans">Why we built this tool</h2><p class="text-body leading-relaxed mb-4">Finding and downloading multiple image assets for web development, design work, machine learning training, or content creation is often a repetitive and frustrating task. While browser extensions exist, they frequently request excessive permissions.</p><p class="text-body leading-relaxed">We developed <strong>Bulk Image Downloader</strong> as a 100% client-side web application. It runs directly in your browser, keeping your workflow secure, private, and fast.</p></div>`,
    },
    contact: {
      title: "Contact Us - Bulk Image Downloader Support",
      description: "Have feedback, feature requests, or questions? Contact us at our support email and our team will get in touch with you shortly.",
      badge: "✉️ Get in Touch",
      heroTitle: "Contact Us",
      heroSubtitle: "Have questions, feedback, or custom feature requests? Reach out to us via email and our support team will assist you.",
      directTitle: "Direct Contact",
      directDesc: "For business inquiries, partnership proposals, general feedback, or direct support, please email us directly:",
      faqTitle: "Instant Help & Troubleshooting",
      faqDesc: "Before emailing, check our answers to common questions about CORS proxy support and format compatibility on our homepage.",
    },
    privacy: {
      title: "Privacy Policy - Free Bulk Image Downloader",
      description: "Privacy is our core feature. Read how we protect your data with 100% client-side processing. No logs, no image tracking.",
      badge: "🛡️ Privacy First",
      heroTitle: "Privacy Policy",
      heroSubtitle: "We prioritize your digital privacy. All operations are run securely in your browser without tracking.",
      contentHtml: `<div><h2 class="text-2xl font-bold tracking-tight text-ink mb-4 font-sans">1. 100% Client-Side Processing</h2><p class="text-body leading-relaxed">The core philosophy of Bulk Image Downloader is that your data belongs to you. Unlike traditional scrapers that upload URL lists to remote servers, our tool processes all images locally in your browser.</p></div>`,
    },
    terms: {
      title: "Terms of Service - Free Bulk Image Downloader",
      description: "Read our terms of service for using the free Bulk Image Downloader web application.",
      badge: "⚖️ Legal Information",
      heroTitle: "Terms of Service",
      heroSubtitle: "Clear guidelines on fair and responsible usage of our free online batch downloading tools.",
      contentHtml: `<div><h2 class="text-2xl font-bold tracking-tight text-ink mb-4 font-sans">1. Acceptance of Terms</h2><p class="text-body leading-relaxed">By accessing and using this web tool, you agree to comply with and be bound by these terms. This tool is provided free of charge for lawful personal and commercial uses.</p></div>`,
    },
  },
  es: {
    about: {
      title: "Sobre Nosotros - Descargador Masivo de Imágenes",
      description: "Conoce la misión de nuestro descargador de imágenes por lote gratuito y 100% privado.",
      badge: "💡 Nuestra Filosofía",
      heroTitle: "Sobre Bulk Image Downloader",
      heroSubtitle: "Una herramienta de alto rendimiento, privada y segura para creadores y desarrolladores.",
      contentHtml: `<div><h2 class="text-2xl font-bold tracking-tight text-ink mb-4 font-sans">Por qué creamos esta herramienta</h2><p class="text-body leading-relaxed mb-4">Descargar imágenes en lote para diseño o desarrollo suele ser tedioso. Creamos esta aplicación 100% en el navegador para garantizar rapidez y privacidad total.</p></div>`,
    },
    contact: {
      title: "Contacto - Soporte de Descargador de Imágenes",
      description: "¿Tienes dudas o sugerencias? Ponte en contacto con nuestro equipo de soporte.",
      badge: "✉️ Contáctanos",
      heroTitle: "Contáctanos",
      heroSubtitle: "¿Tienes preguntas o comentarios? Escríbenos y te responderemos a la brevedad.",
      directTitle: "Contacto Directo",
      directDesc: "Para consultas generales, propuestas de colaboración o soporte, escríbenos a:",
      faqTitle: "Ayuda y Preguntas Frecuentes",
      faqDesc: "Consulta nuestras respuestas a dudas habituales en la página principal.",
    },
    privacy: {
      title: "Política de Privacidad - Descargador de Imágenes",
      description: "Tu privacidad es lo primero. Conoce cómo protegemos tus datos procesando todo en tu navegador.",
      badge: "🛡️ Privacidad Garantizada",
      heroTitle: "Política de Privacidad",
      heroSubtitle: "Priorizamos tu privacidad digital. Todas las operaciones se ejecutan en tu propio navegador.",
      contentHtml: `<div><h2 class="text-2xl font-bold tracking-tight text-ink mb-4 font-sans">1. Procesamiento 100% en el Navegador</h2><p class="text-body leading-relaxed">Tus listas de enlaces y las imágenes descargadas nunca se almacenan ni se transmiten a nuestros servidores.</p></div>`,
    },
    terms: {
      title: "Términos del Servicio - Descargador de Imágenes",
      description: "Lee los términos y condiciones de uso de nuestra herramienta online gratuita.",
      badge: "⚖️ Información Legal",
      heroTitle: "Términos del Servicio",
      heroSubtitle: "Directrices claras sobre el uso responsable de nuestra herramienta gratuita.",
      contentHtml: `<div><h2 class="text-2xl font-bold tracking-tight text-ink mb-4 font-sans">1. Aceptación de Términos</h2><p class="text-body leading-relaxed">Al utilizar este servicio web, aceptas cumplir con los presentes términos de uso responsable y legal.</p></div>`,
    },
  },
  ja: {
    about: {
      title: "当サイトについて - 無料画像一括ダウンローダー",
      description: "ブラウザ完結型で高速・安全な画像一括ダウンロードツールの理念と機能をご紹介します。",
      badge: "💡 開発理念",
      heroTitle: "当サービスについて",
      heroSubtitle: "クリエイターやエンジニアの作業効率を高める、完全無料・安全な画像一括保存ツールです。",
      contentHtml: `<div><h2 class="text-2xl font-bold tracking-tight text-ink mb-4 font-sans">開発の背景</h2><p class="text-body leading-relaxed">拡張機能のセキュリティリスクを排除し、誰もが安心・安全に画像を一括保存できる環境を提供するために作られました。</p></div>`,
    },
    contact: {
      title: "お問い合わせ - 画像一括ダウンローダーサポート",
      description: "ご質問やご要望がございましたら、お気軽にサポートチームまでご連絡ください。",
      badge: "✉️ お問い合わせ",
      heroTitle: "お問い合わせ",
      heroSubtitle: "機能に関するご意見やお問い合わせは、メールにて受け付けております。",
      directTitle: "直接連絡",
      directDesc: "一般的なご質問や提携のご提案は下記アドレスまでお送りください:",
      faqTitle: "よくあるご質問",
      faqDesc: "まずはトップページのFAQセクションもあわせてご確認ください。",
    },
    privacy: {
      title: "プライバシーポリシー - 無料画像一括ダウンローダー",
      description: "プライバシー重視の設計。ブラウザ内処理によりお客様のデータはサーバーへ送信されません。",
      badge: "🛡️ プライバシー保護",
      heroTitle: "プライバシーポリシー",
      heroSubtitle: "お客様の個人情報とダウンロード履歴は厳重に保護されます。",
      contentHtml: `<div><h2 class="text-2xl font-bold tracking-tight text-ink mb-4 font-sans">1. 完全ブラウザ内処理</h2><p class="text-body leading-relaxed">入力されたURLやダウンロードされた画像データは、外部サーバーに保存されることなくブラウザ内でのみ処理されます。</p></div>`,
    },
    terms: {
      title: "利用規約 - 無料画像一括ダウンローダー",
      description: "無料画像一括ダウンロードツールの利用規約です。",
      badge: "⚖️ 法的情報",
      heroTitle: "利用規約",
      heroSubtitle: "当サービスの適切な利用に関するガイドラインです。",
      contentHtml: `<div><h2 class="text-2xl font-bold tracking-tight text-ink mb-4 font-sans">1. 規約への同意</h2><p class="text-body leading-relaxed">本ツールを利用することにより、利用規約に同意したものとみなされます。</p></div>`,
    },
  },
  fr: {
    about: {
      title: "À Propos - Téléchargeur d'Images en Masse Gratuit",
      description: "Découvrez notre outil de téléchargement d'images sécurisé et rapide fonctionnant dans le navigateur.",
      badge: "💡 Notre Philosophie",
      heroTitle: "À Propos de Bulk Image Downloader",
      heroSubtitle: "Un outil performant et respectueux de la vie privée pour développeurs et créateurs.",
      contentHtml: `<div><h2 class="text-2xl font-bold tracking-tight text-ink mb-4 font-sans">Pourquoi nous avons créé cet outil</h2><p class="text-body leading-relaxed">Offrir une alternative sécurisée aux extensions Chrome tout en garantissant une rapidité maximale de téléchargement en format ZIP.</p></div>`,
    },
    contact: {
      title: "Contactez-Nous - Support Bulk Image Downloader",
      description: "Une question ou une suggestion ? Contactez notre équipe de support.",
      badge: "✉️ Contact",
      heroTitle: "Contactez-Nous",
      heroSubtitle: "N'hésitez pas à nous envoyer un e-mail pour toute question ou retour d'expérience.",
      directTitle: "Contact Direct",
      directDesc: "Pour toute demande générale ou partenariat, écrivez-nous à :",
      faqTitle: "Aide & FAQ",
      faqDesc: "Consultez notre foire aux questions sur la page d'accueil.",
    },
    privacy: {
      title: "Politique de Confidentialité - Bulk Image Downloader",
      description: "Vos données vous appartiennent. Traitement 100% côté client sans conservation de fichiers.",
      badge: "🛡️ Confidentialité Garantie",
      heroTitle: "Politique de Confidentialité",
      heroSubtitle: "Toutes les opérations s'exécutent en local dans votre navigateur.",
      contentHtml: `<div><h2 class="text-2xl font-bold tracking-tight text-ink mb-4 font-sans">1. Traitement 100% Côté Client</h2><p class="text-body leading-relaxed">Aucune image ni liste de liens n'est stockée sur nos serveurs.</p></div>`,
    },
    terms: {
      title: "Conditions d'Utilisation - Bulk Image Downloader",
      description: "Consultez nos conditions d'utilisation du service en ligne gratuit.",
      badge: "⚖️ Informations Légales",
      heroTitle: "Conditions d'Utilisation",
      heroSubtitle: "Règles d'utilisation responsable de notre service gratuit.",
      contentHtml: `<div><h2 class="text-2xl font-bold tracking-tight text-ink mb-4 font-sans">1. Acceptation des Conditions</h2><p class="text-body leading-relaxed">En utilisant ce site, vous vous engagez à respecter les lois en vigueur et les droits d'auteur.</p></div>`,
    },
  },
  de: {
    about: {
      title: "Über Uns - Kostenloser Massen-Bilder-Downloader",
      description: "Erfahren Sie mehr über unsere datenschutzfreundliche und schnelle Lösung zum Batch-Download von Bildern.",
      badge: "💡 Unsere Philosophie",
      heroTitle: "Über Bulk Image Downloader",
      heroSubtitle: "Ein leistungsstarkes, privates Tool für Entwickler und Designer weltweit.",
      contentHtml: `<div><h2 class="text-2xl font-bold tracking-tight text-ink mb-4 font-sans">Warum wir dieses Tool entwickelt haben</h2><p class="text-body leading-relaxed">Wir bieten eine sichere, erweiterungsfreie Möglichkeit, Bilder im Batch direkt im Browser als ZIP herunterzuladen.</p></div>`,
    },
    contact: {
      title: "Kontakt - Bulk Image Downloader Support",
      description: "Haben Sie Fragen oder Feedback? Kontaktieren Sie unser Support-Team.",
      badge: "✉️ Kontakt Aufnehmen",
      heroTitle: "Kontaktieren Sie Uns",
      heroSubtitle: "Bei Fragen oder Vorschlägen schreiben Sie uns gerne eine E-Mail.",
      directTitle: "Direkter Kontakt",
      directDesc: "Für Support, geschäftliche Anfragen oder Feedback:",
      faqTitle: "Hilfe & FAQ",
      faqDesc: "Antworten auf häufige Fragen finden Sie auf unserer Startseite.",
    },
    privacy: {
      title: "Datenschutzerklärung - Bulk Image Downloader",
      description: "Datenschutz steht an erster Stelle. Alle Vorgänge laufen lokal in Ihrem Browser ab.",
      badge: "🛡️ Datenschutz Zuerst",
      heroTitle: "Datenschutzerklärung",
      heroSubtitle: "Ihre Privatsphäre ist geschützt. Keine Protokolle, keine Bildspeicherung.",
      contentHtml: `<div><h2 class="text-2xl font-bold tracking-tight text-ink mb-4 font-sans">1. 100% Lokale Browser-Verarbeitung</h2><p class="text-body leading-relaxed">Ihre URLs und Downloads werden zu keinem Zeitpunkt auf unseren Servern gespeichert.</p></div>`,
    },
    terms: {
      title: "Nutzungsbedingungen - Bulk Image Downloader",
      description: "Nutzungsbedingungen für die Verwendung unseres kostenlosen Bild-Downloaders.",
      badge: "⚖️ Rechtliche Hinweise",
      heroTitle: "Nutzungsbedingungen",
      heroSubtitle: "Richtlinien für eine verantwortungsvolle und rechtmäßige Nutzung.",
      contentHtml: `<div><h2 class="text-2xl font-bold tracking-tight text-ink mb-4 font-sans">1. Annahme der Bedingungen</h2><p class="text-body leading-relaxed">Mit der Nutzung dieses Dienstes erklären Sie sich mit den Nutzungsbedingungen einverstanden.</p></div>`,
    },
  },
  pt: {
    about: {
      title: "Sobre Nós - Baixador de Imagens em Massa Grátis",
      description: "Conheça a missão do nosso utilitário privado e rápido para download de imagens em lote.",
      badge: "💡 Nossa Filosofia",
      heroTitle: "Sobre o Bulk Image Downloader",
      heroSubtitle: "Um utilitário de alto desempenho focado em privacidade para criadores de conteúdo e desenvolvedores.",
      contentHtml: `<div><h2 class="text-2xl font-bold tracking-tight text-ink mb-4 font-sans">Por que criamos esta ferramenta</h2><p class="text-body leading-relaxed">Para permitir que qualquer pessoa baixe imagens em massa sem precisar instalar extensões com permissões invasivas.</p></div>`,
    },
    contact: {
      title: "Contato - Suporte Bulk Image Downloader",
      description: "Tem dúvidas ou sugestões? Entre em contato com nossa equipe.",
      badge: "✉️ Fale Conosco",
      heroTitle: "Fale Conosco",
      heroSubtitle: "Envie sua mensagem e nossa equipe terá prazer em ajudar.",
      directTitle: "Contato Direto",
      directDesc: "Para dúvidas gerais, propostas ou suporte direto:",
      faqTitle: "Perguntas Frequentes",
      faqDesc: "Consulte respostas rápidas na seção FAQ da página inicial.",
    },
    privacy: {
      title: "Política de Privacidade - Bulk Image Downloader",
      description: "Privacidade total: todo o processamento ocorre localmente no navegador do usuário.",
      badge: "🛡️ Privacidade em Primeiro Lugar",
      heroTitle: "Política de Privacidade",
      heroSubtitle: "Suas imagens e URLs nunca são armazenadas em servidores externos.",
      contentHtml: `<div><h2 class="text-2xl font-bold tracking-tight text-ink mb-4 font-sans">1. Processamento 100% no Navegador</h2><p class="text-body leading-relaxed">Garantimos sigilo total e zero rastreamento durante seus downloads.</p></div>`,
    },
    terms: {
      title: "Termos de Uso - Bulk Image Downloader",
      description: "Termos e diretrizes para o uso do nosso serviço gratuito de download.",
      badge: "⚖️ Informações Legais",
      heroTitle: "Termos de Uso",
      heroSubtitle: "Orientações sobre o uso legal e responsável da ferramenta.",
      contentHtml: `<div><h2 class="text-2xl font-bold tracking-tight text-ink mb-4 font-sans">1. Aceitação dos Termos</h2><p class="text-body leading-relaxed">O uso da ferramenta implica na aceitação plena destes termos de serviço.</p></div>`,
    },
  },
  ko: {
    about: {
      title: "서비스 소개 - 무료 대량 이미지 다운로더",
      description: "브라우저 기반의 안전하고 빠른 대량 이미지 다운로드 서비스 소개입니다.",
      badge: "💡 서비스 철학",
      heroTitle: "Bulk Image Downloader 소개",
      heroSubtitle: "전 세계 크리에이터와 개발자를 위한 안전하고 편리한 브라우저 완결형 이미지 다운로더입니다.",
      contentHtml: `<div><h2 class="text-2xl font-bold tracking-tight text-ink mb-4 font-sans">도구를 만든 이유</h2><p class="text-body leading-relaxed">불필요한 권한을 요구하는 확장프로그램 대신, 누구나 브라우저에서 안전하게 사진을 대량 저장할 수 있도록 개발했습니다.</p></div>`,
    },
    contact: {
      title: "문의하기 - 대량 이미지 다운로더 고객지원",
      description: "궁금한 점이나 기능 제안이 있으신가요? 지원팀으로 편하게 문의해 주세요.",
      badge: "✉️ 문의하기",
      heroTitle: "고객 문의",
      heroSubtitle: "기능 문의 및 피드백은 이메일로 언제든지 보내주세요.",
      directTitle: "직접 문의",
      directDesc: "비즈니스 제휴 및 일반 문의:",
      faqTitle: "자주 묻는 질문",
      faqDesc: "홈페이지의 FAQ 섹션에서 빠른 해결책을 확인하실 수 있습니다.",
    },
    privacy: {
      title: "개인정보 처리방침 - 대량 이미지 다운로더",
      description: "완벽한 프라이버시 보호: 브라우저 내부에서만 동작하여 서버에 데이터를 저장하지 않습니다.",
      badge: "🛡️ 프라이버시 보호",
      heroTitle: "개인정보 처리방침",
      heroSubtitle: "사용자의 프라이버시를 최우선으로 보호합니다.",
      contentHtml: `<div><h2 class="text-2xl font-bold tracking-tight text-ink mb-4 font-sans">1. 100% 클라이언트 사이드 처리</h2><p class="text-body leading-relaxed">입력된 링크 및 다운로드된 파일은 일체 외부 서버로 전송되거나 저장되지 않습니다.</p></div>`,
    },
    terms: {
      title: "이용약관 - 대량 이미지 다운로더",
      description: "무료 대량 이미지 다운로더의 이용약관 및 가이드라인입니다.",
      badge: "⚖️ 법적 고지",
      heroTitle: "이용약관",
      heroSubtitle: "공정하고 책임 있는 서비스 이용을 위한 기본 규정입니다.",
      contentHtml: `<div><h2 class="text-2xl font-bold tracking-tight text-ink mb-4 font-sans">1. 약관의 효력</h2><p class="text-body leading-relaxed">본 사이트를 이용함으로써 본 이용약관에 동의하는 것으로 간주됩니다.</p></div>`,
    },
  },
  it: {
    about: {
      title: "Chi Siamo - Scaricatore di Immagini di Massa Gratis",
      description: "Scopri la nostra missione: fornire uno strumento veloce, privato e senza estensioni per salvare immagini in batch.",
      badge: "💡 La Nostra Filosofia",
      heroTitle: "Informazioni su Bulk Image Downloader",
      heroSubtitle: "Uno strumento ad alte prestazioni e orientato alla privacy per designer e sviluppatori.",
      contentHtml: `<div><h2 class="text-2xl font-bold tracking-tight text-ink mb-4 font-sans">Perché abbiamo creato questo strumento</h2><p class="text-body leading-relaxed">Per consentire a chiunque di scaricare centinaia di immagini in sicurezza senza installare estensioni invasive nel browser.</p></div>`,
    },
    contact: {
      title: "Contattaci - Supporto Bulk Image Downloader",
      description: "Hai domande o suggerimenti? Contatta il nostro team di supporto.",
      badge: "✉️ Contattaci",
      heroTitle: "Contattaci",
      heroSubtitle: "Scrivici una email per qualsiasi richiesta di assistenza o proposta di collaborazione.",
      directTitle: "Contatto Diretto",
      directDesc: "Per supporto, partnership o feedback generali:",
      faqTitle: "Aiuto Rapido & FAQ",
      faqDesc: "Consulta le risposte alle domande più frequenti direttamente in homepage.",
    },
    privacy: {
      title: "Informativa sulla Privacy - Bulk Image Downloader",
      description: "La tua privacy è fondamentale. Elaborazione al 100% nel tuo browser senza registrazione dati.",
      badge: "🛡️ Privacy Garantita",
      heroTitle: "Informativa sulla Privacy",
      heroSubtitle: "Nessun dato o file di immagine viene mai inviato o salvato su server remoti.",
      contentHtml: `<div><h2 class="text-2xl font-bold tracking-tight text-ink mb-4 font-sans">1. Elaborazione Locale al 100%</h2><p class="text-body leading-relaxed">Tutti i link e le immagini rimangono confinati nella memoria locale del tuo browser.</p></div>`,
    },
    terms: {
      title: "Termini di Servizio - Bulk Image Downloader",
      description: "Termini e condizioni per l'utilizzo del nostro strumento online gratuito.",
      badge: "⚖️ Note Legali",
      heroTitle: "Termini di Servizio",
      heroSubtitle: "Linee guida per un utilizzo responsabile e lecito del servizio.",
      contentHtml: `<div><h2 class="text-2xl font-bold tracking-tight text-ink mb-4 font-sans">1. Accettazione dei Termini</h2><p class="text-body leading-relaxed">L'utilizzo di questo sito implica l'accettazione espressa dei presenti termini di servizio.</p></div>`,
    },
  },
};

