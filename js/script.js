import { Quiz } from "./Quiz.js";

const kviz = new Quiz();
const betuk = ["A", "B", "C", "D"];

const bevezeto = document.getElementById("kviz-bevezeto");
const kerdesResz = document.getElementById("kviz-kerdes-resz");
const eredmenyResz = document.getElementById("kviz-eredmeny-resz");

const inditasGomb = document.getElementById("kviz-inditas-gomb");
const kovetkezoGomb = document.getElementById("kviz-kovetkezo-gomb");
const ujraGomb = document.getElementById("kviz-ujra-gomb");

const szamlalo = document.getElementById("kviz-szamlalo");
const pontszamKijelzo = document.getElementById("kviz-pontszam");
const haladas = document.getElementById("kviz-haladas");
const haladasSav = document.getElementById("kviz-haladas-sav");
const kerdesSzoveg = document.getElementById("kviz-kerdes-szoveg");
const valaszokHely = document.getElementById("kviz-valaszok");

const visszajelzes = document.getElementById("kviz-visszajelzes");
const visszajelzesCim = document.getElementById("kviz-visszajelzes-cim");
const magyarazat = document.getElementById("kviz-magyarazat");

const vegsoPontszam = document.getElementById("kviz-vegso-pontszam");
const vegsoSzazalek = document.getElementById("kviz-vegso-szazalek");
const vegsoUzenet = document.getElementById("kviz-vegso-uzenet");

function pontszamFrissites() {
  pontszamKijelzo.textContent = "Pontszám: " + kviz.pontszam + " / " + kviz.kerdesekSzama();
}

function haladasFrissites(kesz) {
  const szazalek = (kesz / kviz.kerdesekSzama()) * 100;
  haladasSav.style.width = szazalek + "%";
  haladas.setAttribute("aria-valuenow", kesz);
}

function kerdesMegjelenites() {
  const kerdes = kviz.jelenlegiKerdes();

  szamlalo.textContent = "Kérdés " + kviz.jelenlegiSorszam() + " / " + kviz.kerdesekSzama();
  kerdesSzoveg.textContent = kerdes.szoveg;
  pontszamFrissites();
  haladasFrissites(kviz.jelenlegiIndex);

  valaszokHely.innerHTML = "";
  for (let i = 0; i < kerdes.valaszok.length; i++) {
    const gomb = document.createElement("button");
    gomb.type = "button";
    gomb.className = "btn btn-outline-secondary text-start py-3";
    gomb.textContent = betuk[i] + ") " + kerdes.valaszok[i];
    gomb.addEventListener("click", function () {
      valaszKivalasztva(i);
    });
    valaszokHely.appendChild(gomb);
  }

  visszajelzes.hidden = true;
  kovetkezoGomb.hidden = true;
  kerdesSzoveg.focus();
}

function valaszKivalasztva(valasztottIndex) {
  const eredmeny = kviz.valaszEllenorzes(valasztottIndex);

  if (eredmeny === null) {
    return;
  }

  const gombok = valaszokHely.querySelectorAll("button");
  for (let i = 0; i < gombok.length; i++) {
    gombok[i].classList.add("pe-none");

    if (i === eredmeny.helyesIndex) {
      gombok[i].classList.remove("btn-outline-secondary");
      gombok[i].classList.add("btn-success");
    } else if (i === valasztottIndex) {
      gombok[i].classList.remove("btn-outline-secondary");
      gombok[i].classList.add("btn-danger");
    } else {
      gombok[i].classList.add("opacity-50");
    }
  }


  if (eredmeny.helyes) {
    visszajelzes.className = "alert alert-success mt-4 mb-0";
    visszajelzesCim.textContent = "✓ Helyes válasz!";
  } else {
    visszajelzes.className = "alert alert-danger mt-4 mb-0";
    visszajelzesCim.textContent = "✗ Sajnos nem ez a helyes válasz.";
  }
  magyarazat.textContent = eredmeny.magyarazat;
  visszajelzes.hidden = false;

  pontszamFrissites();
  haladasFrissites(kviz.jelenlegiSorszam());

  if (kviz.utolsoKerdesE()) {
    kovetkezoGomb.textContent = "Eredmény megtekintése";
  } else {
    kovetkezoGomb.textContent = "Következő kérdés";
  }
  kovetkezoGomb.hidden = false;
  kovetkezoGomb.focus();
}

function eredmenyMegjelenites() {
  const eredmeny = kviz.eredmeny();

  vegsoPontszam.textContent = eredmeny.pontszam + " / " + eredmeny.osszes;
  vegsoSzazalek.textContent = eredmeny.szazalek + "%";
  vegsoUzenet.textContent = eredmeny.uzenet;

  kerdesResz.hidden = true;
  eredmenyResz.hidden = false;
}

function kvizInditas() {
  bevezeto.hidden = true;
  eredmenyResz.hidden = true;
  kerdesResz.hidden = false;
  kerdesMegjelenites();
}

function kovetkezoKerdesre() {
  const vanTovabb = kviz.kovetkezoKerdes();

  if (vanTovabb) {
    kerdesMegjelenites();
  } else {
    eredmenyMegjelenites();
  }
}

function ujrakezdes() {
  kviz.ujrakezdes();
  kvizInditas();
}

inditasGomb.addEventListener("click", kvizInditas);
kovetkezoGomb.addEventListener("click", kovetkezoKerdesre);
ujraGomb.addEventListener("click", ujrakezdes);