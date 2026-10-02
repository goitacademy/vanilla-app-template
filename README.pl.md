# Vanilla App Template

> Ten szablon jest przeznaczony do **projektów zespołowych**. Zadania domowe wykonuje się w osobnym szablonie.

Ten projekt został zbudowany przy użyciu Vite. Aby zapoznać się i skonfigurować
dodatkowe funkcje [zapoznaj się z dokumentacją](https://vitejs.dev/).

## Tworzenie repozytorium za pomocą szablonu

Użyj tego repozytorium jako szablonu, aby utworzyć repozytorium dla swojego
projektu. By to zrobić, kliknij przycisk `«Use this template»` i wybierz opcję
`«Create a new repository»`, jak pokazano na obrazku.

![Creating repo from a template step 1](./assets/template-step-1.png)

Na kolejnym etapie otworzy się strona tworzenia nowego repozytorium. Wypełnij
pole nazwy, upewnij się, że repozytorium jest publiczne, a następnie kliknij
przycisk `«Create repository from template»`.

![Creating repo from a template step 2](./assets/template-step-2.png)

Po utworzeniu repozytorium włącz dla niego GitHub Pages: przejdź do
`Settings` > `Pages` i w sekcji `Build and deployment` wybierz `Source` →
`GitHub Actions`. To jedyne jednorazowe ustawienie.

![GitHub Pages: Source → GitHub Actions](./assets/repo-settings.jpg)

Teraz masz osobiste repozytorium projektu ze strukturą plików i folderów
repozytorium wzorcowego. Pracuj z nim tak, jak z każdym innym osobistym
repozytorium: klonuj je na swój komputer, pisz kod, dokonuj zatwierdzeń i
przesyłaj je do GitHub.

## Przygotowanie do pracy

1. Upewnij się, że na komputerze zainstalowana jest wersja LTS Node.js.
   [W razie potrzeby pobierz ją i zainstaluj](https://nodejs.org/en/).
2. Zainstaluj podstawowe zależności projektu w terminalu za pomocą polecenia `npm install`.
3. Uruchom tryb deweloperski, uruchamiając polecenie `npm run dev`.
4. Wejdź na stronę [http://localhost:5173](http://localhost:5173) w przeglądarce. Strona
   ta zostanie automatycznie przeładowana po zapisaniu zmian w plikach projektu.

## Pliki i foldery

- Swój kod JavaScript pisz w `src/main.js` oraz w innych plikach, które utworzysz w razie potrzeby.
- Pliki znaczników dla komponentów strony powinny być umieszczone w folderze `src/partials` i
  zaimportowane do pliku `index.html`. Na przykład, plik ze znacznikami nagłówka
  `header.html` należy utworzyć w folderze `partials` i zaimportować do `index.html`.
- Pliki stylów powinny być umieszczone w folderze `src/css` i podłączane do plików HTML
  stron. Na przykład `index.html` podłącza `./css/styles.css`.
- Obrazy należy dodawać do folderu `src/img`. Konstruktor zoptymalizuje je, ale dopiero po
  wdrożeniu produkcyjnej wersji projektu. Wszystko to dzieje się w chmurze, aby nie
  obciążać Twojego komputera, ponieważ na słabych komputerach może to zająć dużo czasu.

## Wdrożenie

Wersja live strony aktualizuje się automatycznie: za każdym razem, gdy zmieniasz
pliki projektu i wysyłasz zmiany na GitHub do gałęzi `main` (bezpośrednim pushem
lub przez zaakceptowany pull request), projekt sam się przebudowuje i publikuje
na GitHub Pages.

### Status wdrożenia

Status wdrożenia ostatniego zatwierdzenia jest wyświetlany za pomocą ikony obok jego identyfikatora.

- **Żółty** - projekt jest budowany i wdrażany.
- **Zielony** - wdrożenie zakończyło się pomyślnie.
- **Czerwony** - wystąpił błąd podczas budowania lub wdrażania.

Bardziej szczegółowe informacje na temat statusu można wyświetlić, klikając ikonę,
a następnie link `Details` znajdujący się w rozwijanym oknie.

![Deployment status](./assets/deploy-status.png)

### Strona na żywo

Po pewnym czasie, zwykle kilku minutach, stronę na żywo można zobaczyć pod
adresem podanym w zakładce `Settings` > `Pages` w ustawieniach Twojego
repozytorium. Dla przykładu, oto link do wersji live tego repozytorium-szablonu —
u Ciebie będzie własny:

[https://goitacademy.github.io/vanilla-app-template/](https://goitacademy.github.io/vanilla-app-template/).

Jeśli otworzy się pusta strona, sprawdź, czy GitHub Pages jest włączone
(`Settings` > `Pages`) i czy ostatnie wdrożenie w zakładce `Actions` zakończyło
się pomyślnie (na zielono).

## Jak to działa

![How it works](./assets/how-it-works.png)

Pod maską: po pushu do `main` uruchamia się GitHub Action z
`.github/workflows/deploy.yml`, który buduje projekt i publikuje go na GitHub
Pages. Jeśli coś pójdzie nie tak — szczegóły znajdziesz w zakładce `Actions`.
