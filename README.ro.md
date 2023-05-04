# Vanilla App Template

Acest proiect a fost creat cu ajutorul Vite. Pentru o mai bună cunoaștere 
și configurare a funcțiilor suplimentare [consultă documentația](https://vitejs.dev/).

## Crearea repozitoriului pe baza unui model

Utilizează acest repozitoriu al organizației GoIT ca model pentru crearea unui 
repozitoriu pentru proiectul personal. Pentru a face acest lucru, dă click pe 
`"Use this template"` și selectează opțiunea `"Create a new repository"`, conform 
imaginii.

![Creating repo from a template step 1](./assets/template-step-1.png)

Următorul pas te va duce la pagina de creare a noului repozitoriu. Completează 
câmpul cu numele acestuia, asigură-te că repozitoriul este public, apoi dă click pe 
butonul `"Create repository from template"`.

![Creating repo from a template step 2](./assets/template-step-2.png)

Odată ce repozitoriul a fost creat, trebuie să accesezi setările repozitoriului 
creat în fila `Settings` > `Actions` > `General`, conform imaginii.

![Settings GitHub Actions permissions step 1](./assets/gh-actions-perm-1.png)

După ce ai derulat până la sfârșitul paginii, în secțiunea `"Workflow 
permissions"`, selectează `"Read and write permissions"` și bifează caseta. Acest 
lucru este necesară pentru a automatiza procesul de deployment al proiectului.

![Settings GitHub Actions permissions step 2](./assets/gh-actions-perm-2.png)

Acum ai un repozitoriu personal cu proiecte, cu o structură de fișiere și foldere 
de tip repozitoriu-model. În continuare, poți lucra cu acesta așa cum ai face-o cu 
orice alt repozitoriu privat – clonează-l pe calculatorul tău, scrie cod, 
fă commit-uri și încarcă-le pe GitHub.

## Pregătirea pentru lucru

1. Asigură-te că ai instalat pe calculator versiunea LTS a Node.js.
   [Descarc-o și instaleaz-o](https://nodejs.org/en/) dacă este necesar.
2. Instalează dependențele de bază ale proiectului în terminal folosind comanda `npm install`.
3. Lansează modul de dezvoltare prin executarea în terminal a comenzii `npm run dev`.
4. Accesează în browser [http://localhost:5173](http://localhost:5173).
Această pagină se va reîncărca automat după salvarea modificărilor în fișierele proiectului.

## Fișiere și foldere

- Fișierele cu marcaje pentru componentele paginii trebuie să se afle în folderul `src/partials` și să fie importate în fișierul `index.html`. De exemplu, fișierul cu marcajul antetului `header.html`, trebuie creat în folderul `partials` și importat în `index.html`.
- Fișierele cu stiluri trebuie să fie în folderul `rc/css` și importate în fișierele HTML ale paginilor. De exemplu, pentru `index.html`, fișierul cu stiluri se numește `index.css`.
- Imaginile trebuie adăugate în folderul `src/img`. Builderul le va optimiza, dar numai atunci când este încărcată versiunea de producție a proiectului. Toate acestea se fac în cloud, pentru a nu încărca calculatorul, deoarece pe calculatoarele slabe ar putea să dureze mult timp.

## Deployment

Versiunea de producție a proiectului va fi construită și distribuită automat pe 
GitHub Pages, în ramura `gh-pages`, de fiecare dată când ramura `main` este 
actualizată. De exemplu, după un push direct sau o cerere de pool-request acceptată. 
Pentru a face acest lucru, modifică valoarea flag-ului `--base=/<REPO>/` din 
fișierul `package.json`, pentru comanda `build`, înlocuind `<REPO>` cu numele 
repozitoriului tău și trimite modificările pe
GitHub.

```json
"build": "vite build --base=/<REPO>/",
```

Apoi, accesează setările repozitoriului GitHub (`Settings` > `Pages`) și selectează 
să fie distribuită versiunea de producție a fișierelor din folderul `/root` al 
ramurii `gh-pages`, dacă acest lucru nu a fost făcut automat.

![GitHub Pages settings](./assets/repo-settings.png)

### Status deployment

Starea ultimului commit este indicată de iconița situată lângă identificator.

- **Galben** - Proiectul este în curs de construcție și deployment.
- **Verde** - Deployment-ul a fost finalizat cu succes.
- **Roșu** - A apărut o eroare în timpul la linting, asamblare sau deployment.

Informații mai detaliate privind starea pot fi vizualizate făcând click pe 
iconiță, iar în fereastra derulantă accesează linkul `Details`.

![Deployment status](./assets/deploy-status.png)

### Pagina live

După o perioadă de timp, de obicei câteva minute, pagina live poate fi vizualizată 
la adresa specificată în secțiunea `Settings` > `Pages` din setările repozitoriului. 
De exemplu: iată linkul către versiunea live pentru acest repozitoriu
[https://goitacademy.github.io/vanilla-app-template/](https://goitacademy.github.io/vanilla-app-template/).

Dacă se deschide o pagină goală, verifică dacă nu sunt erori în fila `Console`, 
legate de căile de acces incorecte către fișierele CSS și JS ale proiectului 
(**404**). Cel mai probabil, ai o valoare greșită a flag-ului `--base` pentru 
comanda `build` din fișierul `package.json`.

## Cum funcționează

![How it works](./assets/how-it-works.png)

1. După fiecare push către ramura `main` a repozitoriului GitHub, se execută un script special (GitHub Action) din fișierul `.github/workflows/deploy.yml`.
2. Toate fișierele din repozitoriu sunt copiate pe server, unde proiectul se inițializează și trece prin linting și asamblare înainte de deployment.
3. Dacă toți pașii sunt reușiți, versiunea de producție asamblată a fișierelor proiectului este trimisă la ramura `gh-pages`. În caz contrar, log-ul de execuție al scriptului va indica care este problema.
