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

  const answers = {};
  let currentStep = 0;
  let catalogOpen = false;
  const weights = { subjects: 5, light: 4, weather: 3, palette: 5 };

  const make = (tag, className, text) => {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (text !== undefined) element.textContent = text;
    return element;
  };

  const chosenOption = (question, value) =>
    question.options.find((option) => option.value === value);

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
      .map((question) => chosenOption(question, answers[question.key]).label);
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
    box.setAttribute("aria-label", "Aktualne dopasowanie");
    box.append(make("div", "live-label", hasStyleAnswer
      ? `Aktualne typy · ${matches} pasujących profili`
      : `Pula po wyborze · ${ranked.length} filmlooków`));
    if (!hasStyleAnswer) {
      box.append(make("p", "live-hint", "Odpowiedz o temacie i świetle, aby ustawić kolejność rekomendacji."));
      return box;
    }
    const chips = make("div", "chips");
    ranked.slice(0, 3).forEach(({ film }) => chips.append(make("span", "chip", film.name)));
    box.append(chips);
    return box;
  }

  function renderQuestion() {
    const question = QUESTIONS[currentStep];
    progressWrap.hidden = false;
    stepLabel.textContent = `Krok ${currentStep + 1} z ${QUESTIONS.length}`;
    answerCount.textContent = `${Object.keys(answers).length} odpowiedzi`;
    renderProgress();

    const section = document.createElement("section");
    section.append(make("p", "eyebrow", "Znajdź swój filmlook"));
    section.append(make("h1", "", "Dopasuj wygląd do kadru"));
    section.append(make("p", "lead", "Odpowiedz na kilka krótkich pytań. Po każdym kroku odświeżymy propozycje."));
    section.append(make("h2", "question-title", question.title));
    section.append(make("p", "question-hint", question.hint));

    const options = make("div", question.grid ? "options grid" : "options");
    options.setAttribute("role", "group");
    options.setAttribute("aria-label", question.title);
    question.options.forEach((option) => {
      const button = make("button", "option");
      button.type = "button";
      button.setAttribute("aria-label", option.note ? `${option.label}. ${option.note}` : option.label);
      button.append(make("span", "option-icon", option.icon));
      const copy = make("span", "option-label", option.label);
      if (option.note) copy.append(make("span", "option-note", option.note));
      button.append(copy);
      button.addEventListener("click", () => {
        answers[question.key] = option.value;
        if (currentStep < QUESTIONS.length - 1) {
          currentStep += 1;
          render();
        } else {
          renderResults();
        }
      });
      options.append(button);
    });
    section.append(options);

    const picks = renderLivePicks();
    if (picks) section.append(picks);

    const nav = make("div", "nav-row");
    if (currentStep > 0) {
      const back = make("button", "action secondary", "← Wstecz");
      back.type = "button";
      back.addEventListener("click", () => {
        currentStep -= 1;
        render();
      });
      nav.append(back);
    }
    const reset = make("button", "text-button", "Od początku");
    reset.type = "button";
    reset.addEventListener("click", restart);
    nav.append(reset);
    section.append(nav);
    wizardContent.replaceChildren(section);
  }

  function renderResults() {
    progressWrap.hidden = false;
    stepLabel.textContent = "Twoje rekomendacje";
    answerCount.textContent = "3 propozycje";
    renderProgress();

    const section = document.createElement("section");
    section.append(make("p", "eyebrow", "Gotowe do zdjęć"));
    section.append(make("h1", "", "Trzy filmlooki dla Ciebie"));
    const summary = QUESTIONS
      .map((question) => chosenOption(question, answers[question.key]))
      .filter(Boolean)
      .map((option) => option.label)
      .join(" · ");
    section.append(make("p", "lead", `Na podstawie: ${summary}.`));

    const results = make("div", "results");
    rankFilms().slice(0, 3).forEach(({ film }, index) => {
      const card = make("article", index === 0 ? "result-card best" : "result-card");
      const top = make("div", "result-top");
      const identity = document.createElement("div");
      identity.append(make("div", "rank", index === 0 ? "Najlepsze dopasowanie" : `Alternatywa ${index}`));
      identity.append(make("h2", "film-name", film.name));
      identity.append(make("div", "film-kind", film.kind === "bw" ? "Czarno-biały" : "Kolorowy"));
      top.append(identity);
      top.append(make("span", "chip", `#${index + 1}`));
      card.append(top);
      card.append(make("p", "film-desc", film.desc));
      const matches = getMatches(film);
      if (matches.length) card.append(make("p", "match-reason", `Pasuje do: ${matches.slice(0, 3).join(" · ")}`));
      results.append(card);
    });
    section.append(results);

    const nav = make("div", "nav-row");
    const edit = make("button", "action secondary", "Zmień odpowiedzi");
    edit.type = "button";
    edit.addEventListener("click", () => {
      currentStep = QUESTIONS.length - 1;
      render();
    });
    const reset = make("button", "action primary", "Dobierz ponownie");
    reset.type = "button";
    reset.addEventListener("click", restart);
    nav.append(edit, reset);
    section.append(nav);
    section.append(make("p", "source-note", "FilmPicker podpowiada kierunek artystyczny. To nie jest pomiar światła ani gwarancja identycznego odwzorowania filmu."));
    wizardContent.replaceChildren(section);
  }

  function renderCatalog() {
    catalogList.replaceChildren();
    for (const kind of ["color", "bw"]) {
      const group = make("section", "");
      group.append(make("p", "eyebrow", kind === "bw" ? "Czerń i biel · 8" : "Kolor · 22"));
      FILMS.filter((film) => film.kind === kind).forEach((film) => {
        const card = make("article", "catalog-card");
        const heading = make("div", "catalog-heading");
        heading.append(make("span", "catalog-name", film.name));
        heading.append(make("span", "catalog-type", kind === "bw" ? "B&W" : "Color"));
        card.append(heading);
        card.append(make("p", "", film.desc));
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
    catalogToggle.textContent = catalogOpen ? "Wróć do pytań" : `Katalog · ${FILMS.length}`;
    wizardView.hidden = catalogOpen;
    catalogView.hidden = !catalogOpen;
    if (catalogOpen) renderCatalog();
  });

  render();

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./sw.js").catch((error) => {
      console.error("Nie udało się zarejestrować service workera FilmPicker.", error);
    });
  }
})();
