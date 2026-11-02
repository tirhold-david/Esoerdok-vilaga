export class Quiz {
  constructor() {
    this.kerdesek = [
      {
        szoveg: "Becslések szerint hányszor gyorsabb a jelenlegi kihalási ütem a természetes háttér-kihalási rátánál?",
        valaszok: [
          "Körülbelül kétszer",
          "100-szor, sőt akár 1000-szer",
          "10–20-szor",
          "Egyáltalán nem gyorsabb"
        ],
        helyesIndex: 1,
        magyarazat: "A fajok kihalása természetes folyamat, de az emberi tevékenység miatt a jelenlegi ütem a becslések szerint 100–1000-szer gyorsabb a természetes alapértéknél."
      },
      {
        szoveg: "Az IUCN adatai szerint hány faj áll közvetlenül a kihalás veszélyével szemben?",
        valaszok: [
          "Több mint 45 000 faj",
          "Körülbelül 500 faj",
          "Körülbelül 5000 faj",
          "Körülbelül 1 millió faj"
        ],
        helyesIndex: 0,
        magyarazat: "A Természetvédelmi Világszövetség szerint több mint 45 000 fajt fenyeget közvetlenül a kihalás, és ezek jelentős része a trópusi esőerdőkben él."
      },
      {
        szoveg: "Az IUCN Vörös Listáján melyik kategóriába tartozik az orangután?",
        valaszok: [
          "Sérülékeny (VU)",
          "Veszélyeztetett (EN)",
          "Kritikusan veszélyeztetett (CR)",
          "Nem veszélyeztetett"
        ],
        helyesIndex: 2,
        magyarazat: "Az orangután a kritikusan veszélyeztetett kategóriába tartozik: a végveszély szélén áll, és azonnali beavatkozás nélkül a kihalása elkerülhetetlen."
      },
      {
        szoveg: "Milyen gyorsan tűnik el az esőerdők területe a cikk szerint?",
        valaszok: [
          "Percenként körülbelül egy futballpályányi",
          "Percenként körülbelül három futballpályányi",
          "Óránként egy futballpályányi",
          "Percenként több mint harminc futballpályányi"
        ],
        helyesIndex: 3,
        magyarazat: "Percenként több mint harminc futballpályányi érintetlen őserdő tűnik el a láncfűrészek, a buldózerek és a szándékos gyújtogatások miatt."
      },
      {
        szoveg: "A globális üvegházhatású gázkibocsátás hány százalékáért felelős az erdőirtás?",
        valaszok: [
          "Körülbelül 1%",
          "Közel 15%",
          "Körülbelül 5%",
          "Több mint 50%"
        ],
        helyesIndex: 1,
        magyarazat: "Az erdőirtás a kibocsátás közel 15%-áért felelős, ami több, mint a világ összes autójának, repülőjének és hajójának együttes kibocsátása."
      },
      {
        szoveg: "A modern rák-, szív- és érrendszeri, valamint antibiotikus gyógyszerek hány százaléka alapul esőerdei növények hatóanyagain?",
        valaszok: [
          "Több mint 25%",
          "Körülbelül 10%",
          "Kevesebb mint 2%",
          "Szinte mind"
        ],
        helyesIndex: 0,
        magyarazat: "A gyógyszerek több mint 25%-a esőerdei növényekből származik, pedig a trópusi növényvilágnak még a szűk 1%-át sem vizsgálták meg orvosi szempontból."
      },
      {
        szoveg: "Mit jelent az esőerdők „repülő folyók” jelensége?",
        valaszok: [
          "Az esőerdők feletti légifolyosókat a madarak használják",
          "Az esőerdők hatalmas mennyiségű vizet párologtatnak a légkörbe, ami szabályozza az esőzéseket",
          "A folyók vize a levegőben szállítja a fákat",
          "Az esőerdők elnyelik az összes csapadékot, így nem keletkeznek folyók"
        ],
        helyesIndex: 1,
        magyarazat: "Az esőerdők hatalmas párologtató rendszerként „repülő folyókat” hoznak létre a légkörben, így szabályozzák az esőzéseket és a monszunokat, még más kontinenseken is."
      },
      {
        szoveg: "Mi az esőerdők kiirtásának egyik legfőbb oka?",
        valaszok: [
          "Városi parkok fejlesztése",
          "Megújuló energiaparkok építése",
          "Természetes meteorrajok",
          "Mezőgazdasági területek, például marhalegelők, szója- és pálmaolaj-ültetvények terjeszkedése"
        ],
        helyesIndex: 3,
        magyarazat: "A mezőgazdasági területek, különösen a marhalegelők, a szója- és a pálmaolaj-ültetvények terjeszkedése az erdőirtás egyik fő mozgatórugója."
      },
      {
        szoveg: "Melyik NEM szerepel az esőerdők veszélyeztetettségének négy fő oka között?",
        valaszok: [
          "Élőhelyek elvesztése és feldarabolódása",
          "Orvvadászat és illegális kereskedelem",
          "Az óceánok túlhalászata",
          "Invazív fajok és betegségek terjedése"
        ],
        helyesIndex: 2,
        magyarazat: "A négy fő ok: élőhelyvesztés és fragmentáció, orvvadászat és illegális kereskedelem, klímaváltozás és mikroklíma-összeomlás, valamint invazív fajok és betegségek terjedése."
      },
      {
        szoveg: "Mit tehetünk egyénileg az esőerdők védelméért vásárláskor?",
        valaszok: [
          "Fenntarthatósági tanúsítvánnyal (például FSC) ellátott termékeket keresünk",
          "Mindig a legolcsóbb terméket választjuk",
          "Növeljük a húsfogyasztásunkat",
          "A papír és a faáru eredetével nem foglalkozunk"
        ],
        helyesIndex: 0,
        magyarazat: "A tudatos vásárlás kulcsfontosságú: érdemes tanúsítvánnyal ellátott, újrahasznosított vagy FSC-minősítésű termékeket választani, és csökkenteni a húsfogyasztást."
      }
    ];

    this.jelenlegiIndex = 0;
    this.pontszam = 0;
    this.megvalaszolva = false;
  }

  kerdesekSzama() {
    return this.kerdesek.length;
  }

  jelenlegiKerdes() {
    return this.kerdesek[this.jelenlegiIndex];
  }

  jelenlegiSorszam() {
    return this.jelenlegiIndex + 1;
  }

  utolsoKerdesE() {
    return this.jelenlegiIndex === this.kerdesek.length - 1;
  }

  valaszEllenorzes(valasztottIndex) {
    if (this.megvalaszolva) {
      return null;
    }

    const kerdes = this.jelenlegiKerdes();
    const helyes = valasztottIndex === kerdes.helyesIndex;

    this.megvalaszolva = true;
    if (helyes) {
      this.pontszam = this.pontszam + 1;
    }

    return {
      helyes: helyes,
      helyesIndex: kerdes.helyesIndex,
      magyarazat: kerdes.magyarazat
    };
  }

  kovetkezoKerdes() {
    this.jelenlegiIndex = this.jelenlegiIndex + 1;
    this.megvalaszolva = false;
    return this.jelenlegiIndex < this.kerdesek.length;
  }

  eredmeny() {
    const szazalek = Math.round((this.pontszam / this.kerdesek.length) * 100);
    let uzenet = "";

    if (szazalek >= 90) {
      uzenet = "Kiváló! Igazi esőerdő-szakértő vagy. Oszd meg a tudásodat másokkal is!";
    } else if (szazalek >= 70) {
      uzenet = "Nagyon jó eredmény! Már sokat tudsz az esőerdőkről, és csak néhány részlet hiányzik.";
    } else if (szazalek >= 40) {
      uzenet = "Jó alap! Olvasd át újra az oldal tartalmát, és próbáld meg még egyszer.";
    } else {
      uzenet = "Ez még csak a kezdet. Böngészd át az oldalt, aztán próbáld újra a kvízt!";
    }

    return {
      pontszam: this.pontszam,
      osszes: this.kerdesek.length,
      szazalek: szazalek,
      uzenet: uzenet
    };
  }

  ujrakezdes() {
    this.jelenlegiIndex = 0;
    this.pontszam = 0;
    this.megvalaszolva = false;
  }
}