# Vanilla App Template

Ten projekt został zbudowany przy użyciu Vite. Aby zapoznać się i skonfigurować
dodatkowe funkcje [zapoznaj się z dokumentacją](https://vitejs.dev/).

## Tworzenie repozytorium za pomocą szablonu

Użyj tego repozytorium GoIT jako szablonu, aby utworzyć repozytorium
dla swojego projektu. By to zrobić, kliknij przycisk `«Use this template»` і
wybierz opcję `«Create a new repository»`, jak pokazano na obrazku.

![Creating repo from a template step 1](./assets/template-step-1.png)

Na kolejnym etapie otworzy się strona tworzenia nowego repozytorium. Wypełnij
pole nazwy, upewnij się, że repozytorium jest publiczne, a następnie kliknij
przycisk `«Create repository from template»`.

![Creating repo from a template step 2](./assets/template-step-2.png)

Po utworzeniu repozytorium należy przejść do ustawień
utworzonego repozytorium w zakładce `Settings` > `Actions` > `General`,
jak pokazano na obrazku.

![Settings GitHub Actions permissions step 1](./assets/gh-actions-perm-1.png)

Przewiń do samego końca strony, w sekcji `«Workflow permissions»` wybierz
opcję `«Read and write permissions»` i zaznacz pole wyboru. Jest to konieczne,
aby zautomatyzować proces wdrażania projektu.

![Settings GitHub Actions permissions step 2](./assets/gh-actions-perm-2.png)

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

- Pliki znaczników dla komponentów strony powinny być umieszczone w folderze `src/partials` i
  zaimportowane do pliku `index.html`. Na przykład, plik ze znacznikami nagłówka
  `header.html` należy utworzyć w folderze `partials` i zaimportować do `index.html`.
- Pliki stylów powinny być umieszczone w folderze `src/css` i zaimportowane do plików HTML
  stron. Na przykład, dla `index.html` plik stylów nazywa się `index.css`.
- Obrazy należy dodawać do folderu `src/img`. Konstruktor zoptymalizuje je, ale dopiero po 
  wdrożeniu produkcyjnej wersji projektu. Wszystko to dzieje się w chmurze, aby nie
  obciążać Twojego komputera, ponieważ na słabych komputerach może to zająć dużo czasu.

## Wdrożenie

Wersja produkcyjna projektu zostanie automatycznie zbudowana i wdrożona na GitHub
Pages, w gałęzi `gh-pages`, za każdym razem, gdy gałąź `main` zostanie zaktualizowana.
Na przykład po bezpośrednim przesłaniu lub zaakceptowaniu pull request. Aby to zrobić, 
należy w pliku `package.json` zmienić wartość flagi `--base=/<REPO>/`, dla polecenia `build`,
zastępując `<REPO>` nazwą repozytorium i wysłać zmiany do GitHub.

```json
"build": "vite build --base=/<REPO>/",
```

Następnie należy przejść do ustawień repozytorium GitHub (`Settings` > `Pages`) i
i ustawić dystrybucję wersji produkcyjnej plików z folderu `/root` gałęzi `gh-pages`,
jeśli nie zostało to zrobione automatycznie.

![GitHub Pages settings](./assets/repo-settings.png)

### Status wdrożenia

Status wdrożenia ostatniego zatwierdzenia jest wyświetlany za pomocą ikony obok jego identyfikatora.

- **Żółty** - projekt jest budowany i wdrażany.
- **Zielony** - wdrożenie zakończyło się pomyślnie.
- **Czerwony** - wystąpił błąd podczas lintingu, budowania lub wdrażania.

Bardziej szczegółowe informacje na temat statusu można wyświetlić, klikając ikonę, 
a następnie link `Details` znajdujący się w rozwijanym oknie.

![Deployment status](./assets/deploy-status.png)

### Strona na żywo

Po pewnym czasie, zwykle kilku minutach, strona na żywo może być wyświetlona
pod adresem określonym w zakładce `Settings` > `Pages` w ustawieniach repozytorium. 
Na przykład, oto link do wersji live dla tego repozytorium:

[https://goitacademy.github.io/vanilla-app-template/](https://goitacademy.github.io/vanilla-app-template/).

Jeśli widzisz pustą stronę, upewnij się, że w zakładce `Console` nie ma
błędów związanych z nieprawidłowymi ścieżkami do plików CSS i JS projektu
(**404**). Najprawdopodobniej masz nieprawidłową wartość flagi `--base`
dla polecenia `build` w pliku `package.json`.

## Jak to działa

![How it works](./assets/how-it-works.png)

1. Po każdym wysłaniu do gałęzi `main` repozytorium GitHub, uruchamiany jest
   specjalny skrypt (GitHub Action) z pliku `.github/workflows/deploy.yml`.
2. Wszystkie pliki repozytorium są kopiowane na serwer, gdzie projekt jest
   inicjalizowany, przechodzi linting i budowanie przed wdrożeniem.
3. Jeśli wszystkie kroki zakończą się powodzeniem, zmontowana wersja produkcyjna
   plików projektu zostanie wysłana do gałęzi `gh-pages`. W przeciwnym razie
   w logu wykonania skryptu pojawi się informacja o problemie.
