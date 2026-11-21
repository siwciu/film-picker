const FILMS = [
  {
    id: "aerocolor-iv", name: "Aerocolor IV", kind: "color",
    desc: "Wyrazisty, czysty kolor do ulicy, podróży i scen z mocnym światłem.",
    tags: { subjects: ["street", "landscape", "architecture"], light: ["hard", "soft"], weather: ["clear"], palette: ["vivid", "cool"], mood: ["natural"] }
  },
  {
    id: "astia-100f", name: "Astia 100F", kind: "color",
    desc: "Łagodny kontrast i subtelne kolory; dobry do portretów oraz miękkiego światła.",
    tags: { subjects: ["portrait", "street"], light: ["soft", "golden"], weather: ["cloudy", "fog"], palette: ["pastel", "natural"], mood: ["natural", "nostalgic"] }
  },
  {
    id: "ektachrome-e100", name: "Ektachrome E100", kind: "color",
    desc: "Przejrzysty, zdecydowany charakter slajdu do plenerów i mocnego światła.",
    tags: { subjects: ["landscape", "travel", "architecture"], light: ["hard", "soft"], weather: ["clear"], palette: ["cool", "vivid"], mood: ["natural"] }
  },
  {
    id: "ektar-100", name: "Ektar 100", kind: "color",
    desc: "Nasycone barwy i mocniejszy kontrast; szczególnie pasuje do krajobrazu i architektury.",
    tags: { subjects: ["landscape", "nature", "architecture"], light: ["hard", "golden"], weather: ["clear"], palette: ["vivid", "warm"], mood: ["natural"] }
  },
  {
    id: "eterna-500t", name: "Eterna 500T", kind: "color",
    desc: "Stonowany, kinowy wygląd do wnętrz, wieczornych scen i światła sztucznego.",
    tags: { subjects: ["night", "street", "portrait"], light: ["blue", "artificial"], weather: ["rain", "fog"], palette: ["cool", "cinematic"], mood: ["cinematic", "dramatic"] }
  },
  {
    id: "fujicolor-c200", name: "Fujicolor C200", kind: "color",
    desc: "Przyjazny, uniwersalny kolor do codziennych kadrów, spacerów i podróży.",
    tags: { subjects: ["street", "portrait", "travel"], light: ["hard", "soft", "golden"], weather: ["clear", "cloudy"], palette: ["natural", "warm"], mood: ["natural", "nostalgic"] }
  },
  {
    id: "fuji-160c", name: "Fuji 160C", kind: "color",
    desc: "Miękki, żywy kolor do portretów i dziennych scen, bez skrajnego nasycenia.",
    tags: { subjects: ["portrait", "street"], light: ["hard", "soft", "golden"], weather: ["clear", "cloudy"], palette: ["natural", "warm"], mood: ["natural"] }
  },
  {
    id: "gold-200", name: "Gold 200", kind: "color",
    desc: "Ciepły, nostalgiczny klimat; złota godzina, jesień i słoneczne ulice.",
    tags: { subjects: ["portrait", "street", "travel", "nature"], light: ["golden", "hard"], weather: ["clear"], palette: ["warm", "vivid"], mood: ["nostalgic", "natural"] }
  },
  {
    id: "instax", name: "Instax", kind: "color",
    desc: "Lekki, natychmiastowy charakter do bliskich kadrów i jasnych, swobodnych chwil.",
    tags: { subjects: ["portrait", "street"], light: ["soft", "golden"], weather: ["clear", "cloudy"], palette: ["pastel", "warm"], mood: ["nostalgic"] }
  },
  {
    id: "kodachrome-64", name: "Kodachrome 64", kind: "color",
    desc: "Klasyczny, wyrazisty wygląd do podróży, reportażu i mocnych kolorów.",
    tags: { subjects: ["street", "travel", "portrait"], light: ["hard", "golden"], weather: ["clear"], palette: ["warm", "vivid"], mood: ["nostalgic", "dramatic"] }
  },
  {
    id: "portra-160-vc", name: "Portra 160 VC", kind: "color",
    desc: "Żywszy portretowy kolor w dobrym świetle, z mocniejszym kontrastem.",
    tags: { subjects: ["portrait", "travel"], light: ["hard", "golden"], weather: ["clear"], palette: ["vivid", "warm"], mood: ["natural"] }
  },
  {
    id: "portra-400", name: "Portra 400", kind: "color",
    desc: "Uniwersalny wybór do portretu, ulicy i zmiennego światła; naturalny charakter.",
    tags: { subjects: ["portrait", "street", "travel"], light: ["soft", "golden", "hard"], weather: ["cloudy", "clear", "rain"], palette: ["natural", "pastel"], mood: ["natural", "nostalgic"] }
  },
  {
    id: "portra-800", name: "Portra 800 +2", kind: "color",
    desc: "Cieplejszy, mocniejszy efekt do cienia, wnętrz i wieczornych kadrów.",
    tags: { subjects: ["night", "portrait", "street"], light: ["blue", "artificial", "soft"], weather: ["rain", "fog"], palette: ["warm", "cinematic"], mood: ["cinematic", "nostalgic"] }
  },
  {
    id: "precisa-100", name: "Precisa 100", kind: "color",
    desc: "Chłodniejszy slajdowy charakter do krajobrazu, podróży i jasnych plenerów.",
    tags: { subjects: ["landscape", "travel", "architecture"], light: ["hard", "soft"], weather: ["clear", "cloudy"], palette: ["cool", "natural"], mood: ["natural"] }
  },
  {
    id: "pro-400h", name: "Pro 400H", kind: "color",
    desc: "Pastelowe, łagodne barwy do portretów, zieleni i pochmurnych dni.",
    tags: { subjects: ["portrait", "nature", "street"], light: ["soft", "golden"], weather: ["cloudy", "fog"], palette: ["pastel", "cool"], mood: ["natural", "nostalgic"] }
  },
  {
    id: "provia-100f", name: "Provia 100F", kind: "color",
    desc: "Czysty, wyraźny kolor do krajobrazów i podróży, bez skrajnego nasycenia.",
    tags: { subjects: ["landscape", "travel", "architecture"], light: ["hard", "soft"], weather: ["clear"], palette: ["natural", "vivid"], mood: ["natural"] }
  },
  {
    id: "superia-400", name: "Superia 400", kind: "color",
    desc: "Żywy, nieco chłodniejszy charakter do ulicy, zieleni i zmiennego światła.",
    tags: { subjects: ["street", "nature", "travel"], light: ["soft", "hard"], weather: ["cloudy", "clear"], palette: ["cool", "vivid"], mood: ["natural"] }
  },
  {
    id: "ultramax-400", name: "UltraMax 400", kind: "color",
    desc: "Ciepły i energiczny wybór do podróży, reportażu oraz codziennych scen.",
    tags: { subjects: ["street", "travel", "portrait"], light: ["hard", "golden"], weather: ["clear", "cloudy"], palette: ["warm", "vivid"], mood: ["nostalgic", "natural"] }
  },
  {
    id: "velvia-100", name: "Velvia 100", kind: "color",
    desc: "Mocno nasycone barwy do krajobrazów, roślin i kwiatów; mniej neutralna dla skóry.",
    tags: { subjects: ["landscape", "nature"], light: ["hard", "golden"], weather: ["clear"], palette: ["vivid", "warm"], mood: ["dramatic"] }
  },
  {
    id: "vision3-250d", name: "Vision3 250D", kind: "color",
    desc: "Stonowany, kinowy kolor do scen dziennych, miasta i podróży.",
    tags: { subjects: ["street", "landscape", "travel"], light: ["hard", "soft", "golden"], weather: ["clear", "cloudy"], palette: ["natural", "cool"], mood: ["cinematic"] }
  },
  {
    id: "vision3-500t", name: "Vision3 500T", kind: "color",
    desc: "Kinowy profil do wnętrz, nocnych ulic i oświetlenia sztucznego.",
    tags: { subjects: ["night", "street", "portrait"], light: ["blue", "artificial"], weather: ["rain", "fog"], palette: ["cool", "cinematic"], mood: ["cinematic", "dramatic"] }
  },
  {
    id: "vista-200", name: "Vista 200", kind: "color",
    desc: "Swobodny, pogodny kolor do codziennych portretów, ulicy i plenerów.",
    tags: { subjects: ["street", "portrait", "travel"], light: ["hard", "golden"], weather: ["clear"], palette: ["warm", "vivid"], mood: ["natural", "nostalgic"] }
  },
  {
    id: "delta-100", name: "Delta 100", kind: "bw",
    desc: "Czysta, uporządkowana czerń i biel do architektury, detali i dobrego światła.",
    tags: { subjects: ["architecture", "landscape", "nature"], light: ["hard", "soft"], weather: ["clear", "cloudy"], palette: ["natural"], mood: ["natural"] }
  },
  {
    id: "double-x-5222", name: "Double-X 5222", kind: "bw",
    desc: "Wyrazisty, kinowy monochrom do ulicy, nocy i dramatycznych scen.",
    tags: { subjects: ["street", "night", "architecture"], light: ["hard", "blue", "artificial"], weather: ["rain", "fog"], palette: ["natural"], mood: ["cinematic", "dramatic"] }
  },
  {
    id: "hp5-plus-400", name: "HP5 Plus 400", kind: "bw",
    desc: "Wszechstronna klasyczna czerń i biel do reportażu, portretu i ulicy.",
    tags: { subjects: ["portrait", "street", "travel"], light: ["soft", "hard", "artificial"], weather: ["cloudy", "rain"], palette: ["natural"], mood: ["natural", "nostalgic"] }
  },
  {
    id: "neopan-acros", name: "Neopan Acros", kind: "bw",
    desc: "Precyzyjny, klarowny monochrom do krajobrazu, architektury i detali.",
    tags: { subjects: ["landscape", "architecture", "nature"], light: ["hard", "soft"], weather: ["clear", "fog"], palette: ["natural"], mood: ["natural"] }
  },
  {
    id: "tri-x-400-red", name: "Tri-X 400 Red", kind: "bw",
    desc: "Dramatyczny efekt filtra czerwonego; mocno różnicuje niebo i barwne detale.",
    tags: { subjects: ["landscape", "street", "portrait"], light: ["hard", "golden"], weather: ["clear"], palette: ["natural"], mood: ["dramatic"] }
  },
  {
    id: "t-max-400", name: "T-Max 400", kind: "bw",
    desc: "Klarowny monochrom z wyraźnym rysunkiem; dobry do detali i kontrastowych scen.",
    tags: { subjects: ["architecture", "street", "portrait"], light: ["hard", "soft"], weather: ["clear", "cloudy"], palette: ["natural"], mood: ["natural"] }
  },
  {
    id: "tri-x-400", name: "Tri-X 400", kind: "bw",
    desc: "Klasyczna, zdecydowana czerń i biel do ulicy, reportażu i mocnego światła.",
    tags: { subjects: ["street", "portrait", "travel"], light: ["hard", "artificial"], weather: ["clear", "rain"], palette: ["natural"], mood: ["dramatic", "nostalgic"] }
  },
  {
    id: "xp2-super", name: "XP2 Super", kind: "bw",
    desc: "Łagodniejsza, płynna tonalność do portretów i codziennego reportażu.",
    tags: { subjects: ["portrait", "street", "travel"], light: ["soft", "golden"], weather: ["cloudy", "fog"], palette: ["natural"], mood: ["natural", "nostalgic"] }
  }
];

const QUESTIONS = [
  {
    key: "kind", title: "Kolor czy czerń i biel?", hint: "Najpierw wybierz kierunek — możesz też zostawić wszystkie profile w grze.",
    grid: true, options: [
      { value: "color", icon: "🌈", label: "Kolor", note: "Pełna paleta barw" },
      { value: "bw", icon: "◐", label: "Czerń i biel", note: "Monochromatyczny klimat" },
      { value: "any", icon: "✳", label: "Bez preferencji", note: "Zobacz oba warianty" }
    ]
  },
  {
    key: "subjects", title: "Co fotografujesz?", hint: "Wybierz temat, który najlepiej opisuje kadr.",
    grid: true, options: [
      { value: "portrait", icon: "🧑", label: "Portret" },
      { value: "street", icon: "🚶", label: "Ulica / reportaż" },
      { value: "landscape", icon: "⛰️", label: "Krajobraz" },
      { value: "architecture", icon: "🏛️", label: "Architektura" },
      { value: "nature", icon: "🌿", label: "Natura" },
      { value: "night", icon: "🌃", label: "Noc / wnętrze" },
      { value: "travel", icon: "🧳", label: "Podróż / codzienność" }
    ]
  },
  {
    key: "light", title: "Jakie jest światło?", hint: "Weź pod uwagę światło na fotografowanym obiekcie.",
    grid: true, options: [
      { value: "hard", icon: "☀️", label: "Ostre słońce" },
      { value: "soft", icon: "☁️", label: "Miękkie / rozproszone" },
      { value: "golden", icon: "🌅", label: "Złota godzina" },
      { value: "blue", icon: "🌆", label: "Zmierzch / niebieska godzina" },
      { value: "artificial", icon: "💡", label: "Sztuczne światło" }
    ]
  },
  {
    key: "weather", title: "Jaka jest pogoda?", hint: "Pomyśl też o atmosferze w kadrze — odpowiedź jest opcjonalnie intuicyjna.",
    grid: true, options: [
      { value: "clear", icon: "🌤️", label: "Pogodnie" },
      { value: "cloudy", icon: "☁️", label: "Pochmurno" },
      { value: "rain", icon: "🌧️", label: "Deszcz / mokre ulice" },
      { value: "fog", icon: "🌫️", label: "Mgła / zamglenie" },
      { value: "any", icon: "✳", label: "Nie wiem / bez znaczenia" }
    ]
  },
  {
    key: "palette", title: "Jaki klimat chcesz uzyskać?", hint: "Wybierz nastrój i kolor, które najbardziej pasują do pomysłu.",
    grid: true, options: [
      { value: "natural", icon: "🎞️", label: "Naturalny i spokojny" },
      { value: "warm", icon: "🍂", label: "Ciepły i nostalgiczny" },
      { value: "vivid", icon: "🎨", label: "Żywe, nasycone barwy" },
      { value: "cool", icon: "🧊", label: "Chłodny i stonowany" },
      { value: "pastel", icon: "🫧", label: "Pastelowy i miękki" },
      { value: "cinematic", icon: "🎬", label: "Filmowy" },
      { value: "dramatic", icon: "🌑", label: "Dramatyczny kontrast" }
    ]
  }
];
