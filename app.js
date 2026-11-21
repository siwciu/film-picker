(() => {
  const wizardView = document.getElementById("wizard-view");
  const catalogView = document.getElementById("catalog-view");
  const wizardContent = document.getElementById("wizard-content");
  const progressWrap = document.getElementById("progress-wrap");
  const progress = document.getElementById("progress");
  const stepLabel = document.getElementById("step-label");
  const answerCount = document.getElementById("answer-count");
  const catalogList = document.getElementById("catalog-list");
  const catalogToggle = document.getElementById("catalog-toggle");
  const languageSelect = document.getElementById("language-select");
  const metaDescription = document.getElementById("meta-description");

  const copy = {
    pl: {
      catalog: "Katalog", returnToQuestions: "Wróć do pytań", progress: "Postęp",
      step: (current, total) => `Krok ${current} z ${total}`,
      answers: (count) => `${count} odpowiedzi`,
      currentMatch: "Aktualne dopasowanie",
      livePicks: (count) => `Aktualne typy · ${count} pasujących profili`,
      pool: (count) => `Pula po wyborze · ${count} filmlooków`,
      answerForPicks: "Odpowiedz o temacie i świetle, aby ustawić kolejność rekomendacji.",
      findLook: "Znajdź swój filmlook", fitLook: "Dopasuj wygląd do kadru",
      wizardLead: "Odpowiedz na kilka krótkich pytań. Po każdym kroku odświeżymy propozycje.",
      back: "← Wstecz", restart: "Od początku", recommendations: "Twoje rekomendacje",
      proposals: "3 propozycje", ready: "Gotowe do zdjęć", threeLooks: "Trzy filmlooki dla Ciebie",
      basedOn: (summary) => `Na podstawie: ${summary}.`,
      bestMatch: "Najlepsze dopasowanie", alternative: (index) => `Alternatywa ${index}`,
      blackAndWhite: "Czarno-biały", color: "Kolorowy",
      matches: (items) => `Pasuje do: ${items}`,
      editAnswers: "Zmień odpowiedzi", recommendAgain: "Dobierz ponownie",
      resultNote: "FilmPicker podpowiada kierunek artystyczny. To nie jest pomiar światła ani gwarancja identycznego odwzorowania filmu.",
      effectsGuide: "Przewodnik po efektach", allLooks: "Wszystkie filmlooki",
      catalogIntro: "30 wbudowanych efektów GRKit v1.6.4. Wybierz kategorię pytań, by znaleźć styl dla swojej sceny.",
      catalogSource: "Efekty GRKit są dopasowaniami symulacji LUT, a nie dokładnymi odpowiednikami filmu. Nie dodają ziarna ani halacji.",
      sourceLink: "Źródło i podglądy GRKit ↗", footnote: "Dobór jest inspiracją — sprawdź podgląd w aparacie.",
      colorGroup: "Kolor", bwGroup: "Czerń i biel", language: "Język",
      description: "Dobierz filmlook GRKit do tematu i światła."
    },
    en: {
      catalog: "Catalog", returnToQuestions: "Back to questions", progress: "Progress",
      step: (current, total) => `Step ${current} of ${total}`,
      answers: (count) => `${count} answers`,
      currentMatch: "Current matches",
      livePicks: (count) => `Current picks · ${count} matching profiles`,
      pool: (count) => `Available after selection · ${count} film looks`,
      answerForPicks: "Choose a subject and lighting to rank the recommendations.",
      findLook: "Find your film look", fitLook: "Match a look to your scene",
      wizardLead: "Answer a few quick questions. We’ll refresh the suggestions after each step.",
      back: "← Back", restart: "Start over", recommendations: "Your recommendations",
      proposals: "3 suggestions", ready: "Ready to shoot", threeLooks: "Three film looks for you",
      basedOn: (summary) => `Based on: ${summary}.`,
      bestMatch: "Best match", alternative: (index) => `Alternative ${index}`,
      blackAndWhite: "Black and white", color: "Color",
      matches: (items) => `Matches: ${items}`,
      editAnswers: "Change answers", recommendAgain: "Recommend again",
      resultNote: "FilmPicker suggests an artistic direction. It does not measure light or guarantee an exact film reproduction.",
      effectsGuide: "Film look guide", allLooks: "All film looks",
      catalogIntro: "30 built-in GRKit v1.6.4 effects. Answer the questions to find a look for your scene.",
      catalogSource: "GRKit effects are LUT-simulation matches, not exact film equivalents. They do not add grain or halation.",
      sourceLink: "GRKit source and previews ↗", footnote: "Use these suggestions as inspiration — check the preview in your camera.",
      colorGroup: "Color", bwGroup: "Black and white", language: "Language",
      description: "Find a GRKit film look for your subject and lighting."
    }
  };

  const englishQuestions = {
    kind: {
      title: "Color or black and white?",
      hint: "Choose a direction first — or keep every profile in the mix.",
      options: {
        color: ["Color", "Full color palette"],
        bw: ["Black and white", "A monochrome look"],
        any: ["No preference", "See both options"]
      }
    },
    subjects: {
      title: "What are you photographing?",
      hint: "Choose the subject that best describes your scene.",
      options: {
        portrait: ["Portrait"], street: ["Street / documentary"],
        landscape: ["Landscape"], architecture: ["Architecture"],
        nature: ["Nature"], night: ["Night / indoors"],
        travel: ["Travel / everyday life"]
      }
    },
    light: {
      title: "What is the lighting like?",
      hint: "Consider the light falling on your subject.",
      options: {
        hard: ["Bright, direct sun"], soft: ["Soft / diffused light"],
        golden: ["Golden hour"], blue: ["Dusk / blue hour"],
        artificial: ["Artificial light"]
      }
    },
    weather: {
      title: "What is the weather like?",
      hint: "Think about the atmosphere in the scene too — go with your instinct.",
      options: {
        clear: ["Clear"], cloudy: ["Cloudy"], rain: ["Rain / wet streets"],
        fog: ["Fog / haze"], any: ["Not sure / doesn't matter"]
      }
    },
    palette: {
      title: "What mood are you after?",
      hint: "Choose the mood and colors that best fit your idea.",
      options: {
        natural: ["Natural and calm"], warm: ["Warm and nostalgic"],
        vivid: ["Vivid, saturated colors"], cool: ["Cool and muted"],
        pastel: ["Soft pastels"], cinematic: ["Cinematic"],
        dramatic: ["Dramatic contrast"]
      }
    }
  };

  const englishFilmDescriptions = {
    "aerocolor-iv": "Vivid, clean color for street scenes, travel, and strong light.",
    "astia-100f": "Gentle contrast and subtle color; suited to portraits and soft light.",
    "ektachrome-e100": "A clear, distinctive slide-film character for outdoors and bright light.",
    "ektar-100": "Rich color and stronger contrast, especially suited to landscapes and architecture.",
    "eterna-500t": "A subdued, cinematic look for interiors, evening scenes, and artificial light.",
    "fujicolor-c200": "Friendly, versatile color for everyday scenes, walks, and travel.",
    "fuji-160c": "Soft, lively color for portraits and daytime scenes without extreme saturation.",
    "gold-200": "A warm, nostalgic mood for golden hour, autumn, and sunny streets.",
    instax: "A light, instant-film character for close-up scenes and bright, carefree moments.",
    "kodachrome-64": "A bold, classic look for travel, documentary photography, and strong colors.",
    "portra-160-vc": "Lively portrait color in good light, with stronger contrast.",
    "portra-400": "A versatile choice for portraits, street scenes, and changing light, with a natural character.",
    "portra-800": "A warmer, punchier look for shade, interiors, and evening scenes.",
    "precisa-100": "A cooler slide-film character for landscapes, travel, and bright outdoor scenes.",
    "pro-400h": "Soft pastel colors for portraits, greenery, and overcast days.",
    "provia-100f": "Clean, crisp color for landscapes and travel without extreme saturation.",
    "superia-400": "A lively, slightly cooler character for street scenes, greenery, and changing light.",
    "ultramax-400": "A warm, energetic choice for travel, documentary photography, and everyday scenes.",
    "velvia-100": "Highly saturated colors for landscapes, plants, and flowers; less neutral for skin tones.",
    "vision3-250d": "A subdued, cinematic color look for daytime scenes, cities, and travel.",
    "vision3-500t": "A cinematic profile for interiors, night streets, and artificial lighting.",
    "vista-200": "An easygoing, cheerful color look for everyday portraits, street scenes, and outdoors.",
    "delta-100": "Clean, controlled black and white for architecture, details, and good light.",
    "double-x-5222": "A bold, cinematic monochrome look for street scenes, nights, and dramatic scenes.",
    "hp5-plus-400": "Versatile, classic black and white for documentary photography, portraits, and street scenes.",
    "neopan-acros": "Precise, clear monochrome for landscapes, architecture, and details.",
    "tri-x-400-red": "A dramatic red-filter effect that strongly separates skies and colored details.",
    "t-max-400": "Clear monochrome with crisp detail, suited to details and high-contrast scenes.",
    "tri-x-400": "Classic, bold black and white for street scenes, documentary photography, and strong light.",
    "xp2-super": "Softer, smooth tonal range for portraits and everyday documentary photography."
  };

  const answers = {};
  let currentStep = 0;
  let catalogOpen = false;
  let language = "pl";
  const weights = { subjects: 5, light: 4, weather: 3, palette: 5 };

  try {
    const savedLanguage = localStorage.getItem("film-picker-language");
    if (savedLanguage === "pl" || savedLanguage === "en") language = savedLanguage;
  } catch (error) {
    console.error("Nie udało się odczytać zapisanego języka FilmPicker.", error);
  }
  languageSelect.value = language;

  const t = (key, ...args) => {
    const value = copy[language][key];
    return typeof value === "function" ? value(...args) : value;
  };

  const make = (tag, className, text) => {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (text !== undefined) element.textContent = text;
    return element;
  };

  const chosenOption = (question, value) =>
    question.options.find((option) => option.value === value);

  function getQuestionCopy(question) {
    return language === "en" ? englishQuestions[question.key] : question;
  }

  function getOptionLabel(question, option) {
    const questionCopy = getQuestionCopy(question);
    const translated = questionCopy.options && questionCopy.options[option.value];
    return translated ? translated[0] : option.label;
  }

  function applyLanguage() {
    const text = copy[language];
    document.documentElement.lang = language;
    metaDescription.content = text.description;
    document.getElementById("language-label").textContent = text.language;
    document.getElementById("progress-wrap").setAttribute("aria-label", text.progress);
    document.getElementById("catalog-eyebrow").textContent = text.effectsGuide;
    document.getElementById("catalog-title").textContent = text.allLooks;
    document.getElementById("catalog-intro").textContent = text.catalogIntro;
    document.getElementById("catalog-source-copy").textContent = text.catalogSource;
    document.getElementById("catalog-source-link").textContent = text.sourceLink;
    document.getElementById("footnote").textContent = text.footnote;
    catalogToggle.textContent = catalogOpen ? text.returnToQuestions : `${text.catalog} · ${FILMS.length}`;
  }

  function getEligibleFilms() {
    if (answers.kind === "color" || answers.kind === "bw") {
      return FILMS.filter((film) => film.kind === answers.kind);
    }
    return FILMS;
  }

  function scoreFilm(film) {
    let score = 0;
    for (const question of QUESTIONS) {
      const answer = answers[question.key];
      if (!answer || question.key === "kind" || answer === "any") continue;
      if (film.tags[question.key].includes(answer)) score += weights[question.key];
    }
    return score;
  }

  function rankFilms() {
    return getEligibleFilms()
      .map((film, index) => ({ film, index, score: scoreFilm(film) }))
      .sort((a, b) => b.score - a.score || a.index - b.index);
  }

  function getMatches(film) {
    return QUESTIONS
      .filter((question) => question.key !== "kind" && answers[question.key])
      .filter((question) => film.tags[question.key].includes(answers[question.key]))
      .map((question) => getOptionLabel(question, chosenOption(question, answers[question.key])));
  }

  function renderProgress() {
    progress.replaceChildren();
    QUESTIONS.forEach((question, index) => {
      const segment = make("span", index <= currentStep ? "active" : "");
      progress.append(segment);
    });
  }

  function renderLivePicks() {
    const answered = Object.keys(answers).length;
    if (answered === 0) return null;

    const ranked = rankFilms();
    const hasStyleAnswer = QUESTIONS.some((question) => question.key !== "kind" && answers[question.key] && answers[question.key] !== "any");
    const matches = hasStyleAnswer ? ranked.filter((item) => item.score > 0).length : ranked.length;
    const box = make("aside", "live-picks");
    box.setAttribute("aria-label", t("currentMatch"));
    box.append(make("div", "live-label", hasStyleAnswer
      ? t("livePicks", matches)
      : t("pool", ranked.length)));
    if (!hasStyleAnswer) {
      box.append(make("p", "live-hint", t("answerForPicks")));
      return box;
    }
    const chips = make("div", "chips");
    ranked.slice(0, 3).forEach(({ film }) => chips.append(make("span", "chip", film.name)));
    box.append(chips);
    return box;
  }

  function renderQuestion() {
    const question = QUESTIONS[currentStep];
    const localized = getQuestionCopy(question);
    progressWrap.hidden = false;
    stepLabel.textContent = t("step", currentStep + 1, QUESTIONS.length);
    answerCount.textContent = t("answers", Object.keys(answers).length);
    renderProgress();

    const section = document.createElement("section");
    section.append(make("p", "eyebrow", t("findLook")));
    section.append(make("h1", "", t("fitLook")));
    section.append(make("p", "lead", t("wizardLead")));
    section.append(make("h2", "question-title", localized.title));
    section.append(make("p", "question-hint", localized.hint));

    const options = make("div", question.grid ? "options grid" : "options");
    options.setAttribute("role", "group");
    options.setAttribute("aria-label", localized.title);
    question.options.forEach((option) => {
      const button = make("button", "option");
      button.type = "button";
      const optionCopy = localized.options && localized.options[option.value];
      const label = optionCopy ? optionCopy[0] : option.label;
      const note = optionCopy && optionCopy[1] ? optionCopy[1] : option.note;
      button.setAttribute("aria-label", note ? `${label}. ${note}` : label);
      button.append(make("span", "option-icon", option.icon));
      const optionElement = make("span", "option-label", label);
      if (note) optionElement.append(make("span", "option-note", note));
      button.append(optionElement);
      button.addEventListener("click", () => {
        answers[question.key] = option.value;
        if (currentStep < QUESTIONS.length - 1) {
          currentStep += 1;
          render();
        } else {
          currentStep += 1;
          render();
        }
      });
      options.append(button);
    });
    section.append(options);

    const picks = renderLivePicks();
    if (picks) section.append(picks);

    const nav = make("div", "nav-row");
    if (currentStep > 0) {
      const back = make("button", "action secondary", t("back"));
      back.type = "button";
      back.addEventListener("click", () => {
        currentStep -= 1;
        render();
      });
      nav.append(back);
    }
    const reset = make("button", "text-button", t("restart"));
    reset.type = "button";
    reset.addEventListener("click", restart);
    nav.append(reset);
    section.append(nav);
    wizardContent.replaceChildren(section);
  }

  function renderResults() {
    progressWrap.hidden = false;
    stepLabel.textContent = t("recommendations");
    answerCount.textContent = t("proposals");
    renderProgress();

    const section = document.createElement("section");
    section.append(make("p", "eyebrow", t("ready")));
    section.append(make("h1", "", t("threeLooks")));
    const summary = QUESTIONS
      .map((question) => {
        const option = chosenOption(question, answers[question.key]);
        return option ? getOptionLabel(question, option) : null;
      })
      .filter(Boolean)
      .join(" · ");
    section.append(make("p", "lead", t("basedOn", summary)));

    const results = make("div", "results");
    rankFilms().slice(0, 3).forEach(({ film }, index) => {
      const card = make("article", index === 0 ? "result-card best" : "result-card");
      const top = make("div", "result-top");
      const identity = document.createElement("div");
      identity.append(make("div", "rank", index === 0 ? t("bestMatch") : t("alternative", index)));
      identity.append(make("h2", "film-name", film.name));
      identity.append(make("div", "film-kind", film.kind === "bw" ? t("blackAndWhite") : t("color")));
      top.append(identity);
      top.append(make("span", "chip", `#${index + 1}`));
      card.append(top);
      card.append(make("p", "film-desc", language === "en" ? englishFilmDescriptions[film.id] : film.desc));
      const matches = getMatches(film);
      if (matches.length) card.append(make("p", "match-reason", t("matches", matches.slice(0, 3).join(" · "))));
      results.append(card);
    });
    section.append(results);

    const nav = make("div", "nav-row");
    const edit = make("button", "action secondary", t("editAnswers"));
    edit.type = "button";
    edit.addEventListener("click", () => {
      currentStep = QUESTIONS.length - 1;
      render();
    });
    const reset = make("button", "action primary", t("recommendAgain"));
    reset.type = "button";
    reset.addEventListener("click", restart);
    nav.append(edit, reset);
    section.append(nav);
    section.append(make("p", "source-note", t("resultNote")));
    wizardContent.replaceChildren(section);
  }

  function renderCatalog() {
    catalogList.replaceChildren();
    for (const kind of ["color", "bw"]) {
      const group = make("section", "");
      group.append(make("p", "eyebrow", `${kind === "bw" ? t("bwGroup") : t("colorGroup")} · ${kind === "bw" ? 8 : 22}`));
      FILMS.filter((film) => film.kind === kind).forEach((film) => {
        const card = make("article", "catalog-card");
        const heading = make("div", "catalog-heading");
        heading.append(make("span", "catalog-name", film.name));
        heading.append(make("span", "catalog-type", kind === "bw" ? "B&W" : "Color"));
        card.append(heading);
        card.append(make("p", "", language === "en" ? englishFilmDescriptions[film.id] : film.desc));
        group.append(card);
      });
      catalogList.append(group);
    }
  }

  function render() {
    if (catalogOpen) return;
    wizardView.hidden = false;
    catalogView.hidden = true;
    if (currentStep < QUESTIONS.length) renderQuestion();
    else renderResults();
  }

  function restart() {
    for (const key of Object.keys(answers)) delete answers[key];
    currentStep = 0;
    render();
  }

  catalogToggle.addEventListener("click", () => {
    catalogOpen = !catalogOpen;
    catalogToggle.setAttribute("aria-expanded", String(catalogOpen));
    applyLanguage();
    wizardView.hidden = catalogOpen;
    catalogView.hidden = !catalogOpen;
    if (catalogOpen) renderCatalog();
    else render();
  });

  languageSelect.addEventListener("change", () => {
    language = languageSelect.value === "en" ? "en" : "pl";
    try {
      localStorage.setItem("film-picker-language", language);
    } catch (error) {
      console.error("Nie udało się zapisać ustawienia języka FilmPicker.", error);
    }
    applyLanguage();
    if (catalogOpen) renderCatalog();
    else render();
  });

  applyLanguage();
  render();

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./sw.js").catch((error) => {
      console.error("Nie udało się zarejestrować service workera FilmPicker.", error);
    });
  }
})();
