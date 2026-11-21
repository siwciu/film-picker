# FilmPicker · GRKit

Lekka aplikacja webowa/PWA pomagająca dobrać jeden z 30 filmlooków GRKit v1.6.4 do tematu zdjęcia, światła, pogody i pożądanego nastroju. Działa bez serwera aplikacyjnego; cały ranking liczy się lokalnie w przeglądarce.

Przy otwarciu aplikacja sprawdza dostępność nowych filmlooków (maksymalnie raz na dobę); można też uruchomić sprawdzanie przyciskiem pod logo. Porównywane są stabilne identyfikatory efektów w najnowszym wydaniu GRKit, więc sama zmiana numeru wersji nie jest zgłaszana jako nowość. Sprawdzanie wymaga połączenia z internetem.

## Uruchomienie lokalne

Otwórz folder przez lokalny serwer HTTP, np.:

```powershell
python -m http.server 8000
```

Następnie otwórz `http://localhost:8000`. Service worker i instalacja PWA wymagają bezpiecznego kontekstu: HTTPS albo `localhost`.

## Publikacja na GitHub Pages

1. Wypchnij pliki projektu do repozytorium GitHub.
2. W ustawieniach repozytorium otwórz **Pages** i wybierz publikację z gałęzi oraz katalogu zawierającego `index.html`.
3. Otwórz adres HTTPS na iPhonie w Safari, wybierz **Udostępnij → Do ekranu początkowego**.
4. Uruchom aplikację raz online; potem katalog i ankieta są dostępne także offline.

Wszystkie odwołania do zasobów są względne, więc aplikacja działa również pod ścieżką repozytorium GitHub Pages.
Logo w nagłówku i ikona PWA korzystają z `icon.png`.

## Katalog i rekomendacje

Katalog w `films.js` jest przypięty do GRKit v1.6.4 i zawiera 22 profile kolorowe oraz 8 czarno-białych. `app.js` punktuje dopasowanie na podstawie pięciu odpowiedzi i po każdym kroku pokazuje aktualne typy; wynik zawsze zawiera trzy propozycje.

Filmlooki są dopasowaniami symulacji LUT, nie dokładnymi odpowiednikami filmów. Efekty GRKit nie dodają ziarna ani halacji. [Oficjalne informacje GRKit](https://github.com/ahonn/grkit/blob/v1.6.4/effects/NOTICE.md).

---

## English

FilmPicker is a lightweight web app/PWA that helps you choose one of 30 GRKit v1.6.4 film looks based on your subject, lighting, weather, and desired mood. It runs without an application server; recommendations are ranked locally in your browser.

Use the language menu in the top-right corner to switch between Polish and English. Your selection is saved in the browser.

On launch, the app checks for new film looks at most once every 24 hours. You can also start a check with the button below the logo. It compares stable effect IDs in the latest GRKit release, so a version-number change alone is not reported as a new look. An internet connection is required.

### Run locally

Serve the project folder over HTTP, for example:

```powershell
python -m http.server 8000
```

Then open `http://localhost:8000`. The service worker and PWA installation require a secure context: HTTPS or `localhost`.

### Publish on GitHub Pages

1. Push the project files to a GitHub repository.
2. In the repository settings, open **Pages** and select the branch and folder containing `index.html`.
3. Open the HTTPS site in Safari on your iPhone and choose **Share → Add to Home Screen**.
4. Open the app online once; the catalog and questionnaire will then also be available offline.

All asset paths are relative, so the app also works from a GitHub Pages repository path. The header logo and PWA icon use `icon.png`.

### Catalog and recommendations

The catalog in `films.js` is based on GRKit v1.6.4 and contains 22 color profiles and 8 black-and-white profiles. `app.js` scores matches based on five answers and refreshes the current picks after each step; the final result always contains three suggestions.

Film looks are LUT-simulation matches, not exact film equivalents. GRKit effects do not add grain or halation. See the [official GRKit information](https://github.com/ahonn/grkit/blob/v1.6.4/effects/NOTICE.md).
