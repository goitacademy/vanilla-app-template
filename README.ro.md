# Vanilla App Template

Acest template pentru proiecte de echipă a fost creat cu ajutorul Vite. Pentru o mai bună cunoaștere
și configurare a funcțiilor suplimentare [consultă documentația](https://vitejs.dev/).

## Crearea repository-ului pe baza unui template

Utilizează acest repository ca model pentru crearea unui repository pentru
proiectul personal. Pentru a face acest lucru, dă click pe `"Use this template"`
și selectează opțiunea `"Create a new repository"`, conform imaginii.

![Creating repo from a template step 1](./assets/template-step-1.png)

Următorul pas te va duce la pagina de creare a noului repository. Completează
câmpul cu numele acestuia, asigură-te că repository-ul este public, apoi dă click pe
butonul `"Create repository from template"`.

![Creating repo from a template step 2](./assets/template-step-2.png)

Odată ce repository-ul a fost creat, activează GitHub Pages pentru el: accesează
`Settings` > `Pages` și în secțiunea `Build and deployment` alege `Source` →
`GitHub Actions`. Aceasta este singura setare unică.

![GitHub Pages: Source → GitHub Actions](./assets/repo-settings.jpg)

Acum ai un repository personal cu proiecte, cu o structură de fișiere și foldere
de tip repository template. În continuare, poți lucra cu acesta așa cum ai face-o cu
orice alt repository privat – clonează-l pe calculatorul tău, scrie cod,
fă commit-uri și încarcă-le pe GitHub.

## Pregătirea pentru lucru

1. Asigură-te că ai instalat pe calculator versiunea LTS a Node.js.
   [Descarc-o și instaleaz-o](https://nodejs.org/en/) dacă este necesar.
2. Instalează dependențele de bază ale proiectului în terminal folosind comanda `npm install`.
3. Lansează modul de dezvoltare prin executarea în terminal a comenzii `npm run dev`.
4. Accesează în browser [http://localhost:5173](http://localhost:5173).
Această pagină se va reîncărca automat după salvarea modificărilor în fișierele proiectului.

## Fișiere și foldere

- Scrie codul tău JavaScript în `src/main.js` și în alte fișiere pe care le creezi la nevoie.
- Fișierele cu markup pentru componentele paginii trebuie să se afle în folderul `src/partials` și să fie importate în fișierul `index.html`. De exemplu, fișierul cu markup-ul header-ului `header.html`, trebuie creat în folderul `partials` și importat în `index.html`.
- Fișierele cu stiluri trebuie să fie în folderul `src/css` și conectate la fișierele HTML ale paginilor. De exemplu, `index.html` conectează `./css/styles.css`.
- Imaginile trebuie adăugate în folderul `src/img`. Builderul le va optimiza, dar numai atunci când este încărcată versiunea de producție a proiectului. Toate acestea se fac în cloud, pentru a nu încărca calculatorul, deoarece pe calculatoarele slabe ar putea să dureze mult timp.

## Deployment

Versiunea live a paginii se actualizează automat: de fiecare dată când modifici
fișierele proiectului și trimiți modificările pe GitHub în branch-ul `main`
(printr-un push direct sau un pull request acceptat), proiectul se reconstruiește
singur și se publică pe GitHub Pages.

### Status deployment

Starea ultimului commit este indicată de iconița situată lângă identificator.

- **Galben** - Proiectul este în curs de asamblare și deployment.
- **Verde** - Deployment-ul a fost finalizat cu succes.
- **Roșu** - A apărut o eroare în timpul asamblării sau deployment-ului.

Informații mai detaliate privind starea pot fi vizualizate făcând click pe
iconiță, iar în fereastra derulantă accesează link-ul `Details`.

![Deployment status](./assets/deploy-status.png)

### Pagina live

După o perioadă de timp, de obicei câteva minute, pagina live poate fi vizualizată
la adresa specificată în secțiunea `Settings` > `Pages` din setările repository-ului
tău. De exemplu, iată link-ul către versiunea live a acestui repository-template —
tu vei avea propriul link:

[https://goitacademy.github.io/vanilla-app-template/](https://goitacademy.github.io/vanilla-app-template/).

Dacă se deschide o pagină goală, verifică dacă GitHub Pages este activat
(`Settings` > `Pages`) și dacă ultimul deployment din fila `Actions` s-a încheiat
cu succes (verde).

## Cum funcționează

![How it works](./assets/how-it-works.png)

Sub capotă: după un push pe `main` se execută un GitHub Action din
`.github/workflows/deploy.yml`, care construiește proiectul și îl publică pe
GitHub Pages. Dacă ceva nu merge — detaliile sunt în fila `Actions`.
