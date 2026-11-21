# FilmPicker · GRKit

Lekka aplikacja webowa/PWA pomagająca dobrać jeden z 30 filmlooków GRKit v1.6.4 do tematu zdjęcia, światła, pogody i pożądanego nastroju. Działa bez serwera aplikacyjnego; cały ranking liczy się lokalnie w przeglądarce.

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

## Katalog i rekomendacje

Katalog w `films.js` jest przypięty do GRKit v1.6.4 i zawiera 22 profile kolorowe oraz 8 czarno-białych. `app.js` punktuje dopasowanie na podstawie pięciu odpowiedzi i po każdym kroku pokazuje aktualne typy; wynik zawsze zawiera trzy propozycje.

Filmlooki są dopasowaniami symulacji LUT, nie dokładnymi odpowiednikami filmów. Efekty GRKit nie dodają ziarna ani halacji. [Oficjalne informacje GRKit](https://github.com/ahonn/grkit/blob/v1.6.4/effects/NOTICE.md).
