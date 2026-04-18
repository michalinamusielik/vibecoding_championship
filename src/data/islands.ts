/**
 * Treść wysp — archipelag wiedzy o starości dla trzech odbiorców:
 * bliskich seniorów, osób ciekawych tematu oraz samych seniorów.
 * Materiały sparafrazowane na podstawie "Przewodnika pracy z seniorami"
 * (Fundacja Biedronki, Szlachetna Paczka, 2020), raportów o osamotnieniu
 * (infuture.institute 2023) i materiałów towarzyszących z katalogu context/.
 */

import type { PersonaId } from "./personas";

export type AccentColor =
  | "sand"
  | "honey"
  | "amber"
  | "clay"
  | "rust"
  | "brown";

export type Section =
  | {
      kind: "pigulka" | "praktyki" | "unikaj" | "zapamietaj";
      title: string;
      bullets: string[];
    }
  | {
      kind: "cytat";
      title: string;
      quote: string;
      author: string;
    }
  | {
      kind: "tabela";
      title: string;
      columns: [string, string];
      rows: [string, string][];
    };

export type SectionKind = Section["kind"];

export interface Island {
  id: string;
  title: string;
  tagline: string;
  emoji: string;
  accentColor: AccentColor;
  personas: PersonaId[];
  intro: string;
  sections: Section[];
}

export const islands: Island[] = [
  {
    id: "portret-seniora",
    title: "Portret seniora",
    tagline: "Dziesięć milionów twarzy, nie jedna etykieta.",
    emoji: "🪞",
    accentColor: "clay",
    personas: ["curious"],
    intro:
      "W Polsce żyje już blisko 10 milionów osób po sześćdziesiątce, a za trzydzieści lat będzie ich prawie połowa społeczeństwa. To ogromna, bardzo różnorodna grupa — od osób aktywnych zawodowo i podróżujących po świecie, po tych, którym codzienność wypełnia czekanie na telefon. Ta wyspa pomaga odłożyć jedną wspólną wyobrażoną „babcię” i zobaczyć konkretnego człowieka: jego tempo, humor, historię.",
    sections: [
      {
        kind: "pigulka",
        title: "W pigułce",
        bullets: [
          "Seniorka to wg ustawy osoba po 60. roku życia, ale fazy starości wg WHO są trzy: 60–74 „młodzi starzy”, 75–89 „dojrzała starość”, 90+ „długowieczni”.",
          "Po 75. roku życia częściej pojawiają się trudności z wychodzeniem z domu i rośnie poczucie osamotnienia.",
          "Większość polskich seniorów to kobiety — wśród 85-latków jest ich już ponad dwa razy więcej niż mężczyzn.",
          "„Młodzi seniorzy” to często ludzie, którzy pracują, podróżują, uczą się nowych rzeczy i są bardzo aktywni cyfrowo.",
        ],
      },
      {
        kind: "unikaj",
        title: "Stereotypy, które warto rozbroić",
        bullets: [
          "„Starość to choroba” — nieprawda, to naturalny etap życia, z którym wiąże się większe ryzyko, ale nie wyrok.",
          "„Seniorzy to jedna grupa” — między 62-latkiem a 92-letnią wdową jest więcej różnic niż podobieństw.",
          "„Już sobie nie poradzi z internetem” — wiele osób po 70. obsługuje bankowość online lepiej niż ich dzieci dwie dekady temu.",
          "„Stary już nie skorzysta z nowej wiedzy” — badania Becki Levy pokazują, że pozytywne przekonania o własnym starzeniu wydłużają życie średnio o 7,5 roku.",
        ],
      },
      {
        kind: "praktyki",
        title: "Dobre praktyki",
        bullets: [
          "Pytaj, nie zakładaj: „Wolisz, żebym to zrobił/a, czy żebyśmy zrobili razem?”.",
          "Dobieraj język do osoby, nie do wieku — nie każdy 75-latek musi słyszeć „babciu”.",
          "Zauważaj myśl „wszyscy seniorzy…” i dopytuj siebie: skąd to wiem?",
          "Jeśli sam/a jesteś seniorem, kwestionuj stereotypy o sobie — „już się do tego nie nadaję” to często nie fakt, tylko nawyk myślenia.",
        ],
      },
      {
        kind: "cytat",
        title: "Z życia",
        quote:
          "My, w sile wieku, rzeczywiście jesteśmy szybsi i lepiej zorganizowani, jednak to seniorzy mają doświadczenie i mądrość życiową, by podpowiedzieć, w którą stronę biec. Widzę dużą wartość w dialogu międzypokoleniowym.",
        author: "wolontariuszka Szlachetnej Paczki",
      },
      {
        kind: "zapamietaj",
        title: "Do zapamiętania",
        bullets: [
          "Starość ma wiele wariantów — tak samo jak młodość.",
          "Najlepszym lekarstwem na uprzedzenia jest konkretna, regularna relacja.",
        ],
      },
    ],
  },
  {
    id: "rozmowa",
    title: "Rozmowa",
    tagline: "Aktywne słuchanie bije każdą gadkę.",
    emoji: "💬",
    accentColor: "amber",
    personas: ["caregiver"],
    intro:
      "Dobra rozmowa jest sercem każdej relacji — tym bardziej, gdy rozmawiasz z osobą, której świat się zwęża. Nie trzeba być psychologiem. Wystarczy słuchać naprawdę, zadawać pytania, które otwierają, i nie zalewać drugiej strony własnymi rozwiązaniami. Ta wyspa to prosty zestaw startowy: jak wejść, jak nie zgasić rozmowy i jak zadbać o zaufanie.",
    sections: [
      {
        kind: "pigulka",
        title: "W pigułce",
        bullets: [
          "Słuchanie aktywne to coś innego niż słyszenie — reagujesz, dopytujesz, parafrazujesz.",
          "Zaufanie buduje się tygodniami, nie w jedno popołudnie. Nie oczekuj go na starcie.",
          "Komunikat „ja” („czuję”, „potrzebuję”) zamiast „ty” zmniejsza napięcie w trudnych chwilach.",
          "Wspomnienia to najbezpieczniejszy temat na start: szkoła, pierwsza praca, ulubione potrawy z dzieciństwa.",
        ],
      },
      {
        kind: "praktyki",
        title: "Pytania, które otwierają",
        bullets: [
          "„Co miłego wydarzyło się w tym tygodniu?” — lepsze wejście niż „co słychać?”.",
          "„Jaki był najlepszy film, który pamiętasz?” — wraca się do czasów młodości bez patosu.",
          "„Czy jest jakaś potrawa, której zawsze chciałaś/chciałeś spróbować?” — otwiera rozmowę o marzeniach.",
          "„Jaka piosenka kojarzy ci się z najlepszym okresem życia?” — bezcenne przy towarzyszeniu komuś samotnemu.",
        ],
      },
      {
        kind: "praktyki",
        title: "Jak dostroić rozmowę",
        bullets: [
          "Jeśli rozmówca ma kłopot ze słuchem lub skupieniem, wyciszcie telewizor i usiądźcie twarzą w twarz.",
          "Mów krótszymi zdaniami i jednym wątkiem naraz. Daj czas na odpowiedź, nie kończ zdań za drugą stronę.",
          "Jeśli rozmowa kręci się w kółko, dopytaj o szczegół, którego wcześniej nie znałeś/aś — historia zyska nowy bieg.",
          "Pamiętaj o sobie: jeśli czujesz, że rozmowa cię obciąża, powiedz o tym wprost albo poproś o wsparcie bliską osobę.",
        ],
      },
      {
        kind: "unikaj",
        title: "Czego unikać",
        bullets: [
          "Rad „z góry” — „powinieneś/powinnaś więcej wychodzić”. Najpierw pytanie, potem ewentualne wsparcie.",
          "Przerywania w połowie wypowiedzi, nawet jeśli historia się powtarza już trzeci raz.",
          "Ciężkich tematów z gazety (polityka, katastrofy), chyba że sam rozmówca chce o nich rozmawiać.",
          "Mówienia o drugiej osobie w trzeciej osobie, gdy jest obok — włączaj ją do rozmowy.",
        ],
      },
      {
        kind: "cytat",
        title: "Z życia wolontariusza",
        quote:
          "Uwielbiam rozmawiać z seniorami o historii. O tej ich własnej historii, która zawsze ma połączenie z tą nadmuchaną dziejową historią.",
        author: "Michał, wolontariusz Paczki Seniorów",
      },
      {
        kind: "zapamietaj",
        title: "Do zapamiętania",
        bullets: [
          "Milczenie w rozmowie to nie pustka — to miejsce na oddech i pomyślenie.",
          "Dobra rozmowa zostawia obu stronom energię, nie zabiera jej.",
        ],
      },
    ],
  },
  {
    id: "cialo-i-zdrowie",
    title: "Ciało i zdrowie",
    tagline: "Nawet siadanie na łóżku to ruch.",
    emoji: "❤️",
    accentColor: "rust",
    personas: ["curious", "senior"],
    intro:
      "Z wiekiem wszystko w ciele zwalnia: ubywa masy mięśniowej, pogarsza się równowaga, wzrok i słuch. Dobra wiadomość: ruch działa jak lek o szerokim spektrum — na serce, na nastrój, na pamięć, na jelita. Nie chodzi o maratony. Chodzi o to, żeby codziennie coś się działo, choćby minimalnie.",
    sections: [
      {
        kind: "pigulka",
        title: "W pigułce",
        bullets: [
          "WHO zaleca osobom starszym ok. 150 minut umiarkowanej aktywności tygodniowo plus 2 razy w tygodniu ćwiczenia siłowe i równoważne.",
          "Upadki to jedna z głównych przyczyn utraty samodzielności po 75. r.ż. — ćwiczenia równowagi realnie je ograniczają.",
          "Woda jest równie ważna jak ruch. W starszym wieku rzadziej odczuwa się pragnienie, więc odwodnienie wchodzi niepostrzeżenie.",
          "Każda forma ruchu się liczy: spacer do kiosku, wstawanie z krzesła bez pomocy rąk, rozciąganie przy stole.",
        ],
      },
      {
        kind: "praktyki",
        title: "Dobre praktyki",
        bullets: [
          "Małe, codzienne rzeczy: 10 minut spaceru, 5 powtórzeń wstawania z krzesła, marsz w miejscu przy ulubionej piosence.",
          "Bezpieczny dom: dobrze dopasowane obuwie, dywaniki na antypoślizgowej podkładce, światło w drodze do łazienki.",
          "Nawodnienie: szklanka wody pod ręką, dzbanek na widoku, herbata lub kompot zamiast słodkich napojów.",
          "Okulary, aparat słuchowy, laska — sprawdź, czy działają, zanim zacznie się ruch.",
          "Jeśli odwiedzasz bliskiego seniora: wpleć ruch w wizytę. Krótki spacer razem to też „ćwiczenia”.",
        ],
      },
      {
        kind: "unikaj",
        title: "Czego unikać",
        bullets: [
          "Znoszenia seniora po schodach bez planu i drugiej pary rąk — ryzyko urazu jest duże dla wszystkich.",
          "Forsowania „jeszcze jednej serii” — lepiej krócej, ale regularnie.",
          "Ignorowania bólu — jeśli coś boli tak, że zmienia się mimika, zatrzymaj się i porozmawiaj z lekarzem.",
          "Drastycznych diet odchudzających — u osób starszych częstszym problemem jest niedowaga niż nadwaga.",
        ],
      },
      {
        kind: "zapamietaj",
        title: "Do zapamiętania",
        bullets: [
          "Ruch to nie cel sam w sobie. To paliwo, żeby dalej robić to, co się lubi — odwiedzać wnuki, chodzić do kościoła, podlewać kwiaty.",
          "Zacznij od tego, co już potrafisz i lubisz, i dołóż tylko jeden mały element.",
        ],
      },
    ],
  },
  {
    id: "umysl-i-pamiec",
    title: "Umysł i pamięć",
    tagline: "Kiedy „zapomniałem” to norma, a kiedy sygnał?",
    emoji: "🧠",
    accentColor: "brown",
    personas: ["caregiver", "curious", "senior"],
    intro:
      "Zapominanie, gdzie są klucze, zdarza się każdemu. Inaczej jest, gdy ktoś nie pamięta, że rozmowa w ogóle się odbyła, albo chowa jedzenie do szafy. Ta wyspa pomaga odróżnić naturalne starzenie się umysłu od objawów choroby otępiennej — i podpowiada, co z tym robić na co dzień.",
    sections: [
      {
        kind: "pigulka",
        title: "W pigułce",
        bullets: [
          "Naturalne starzenie się mózgu spowalnia reakcje, ale nie odbiera codziennej sprawności.",
          "W chorobie otępiennej pogarszają się funkcje, które wcześniej były oczywiste: ubieranie się, gotowanie znanego dania, obsługa pralki.",
          "Pierwszym zwiastunem demencji bywa obniżony nastrój i wycofanie, a nie „typowe zapominanie”.",
          "Regularne drobne treningi (rozmowa, gry, czytanie, wspomnienia) realnie pomagają utrzymać formę poznawczą.",
        ],
      },
      {
        kind: "tabela",
        title: "Naturalne starzenie vs choroba otępienna",
        columns: ["Naturalne starzenie", "Choroba otępienna"],
        rows: [
          [
            "Zapominasz, jak nazywa się ktoś nowo poznany.",
            "Zapominasz imion osób bliskich — dzieci, wnuków.",
          ],
          [
            "Szukasz słowa, ale podajesz wyraz o podobnym znaczeniu albo opisujesz przedmiot.",
            "Mylisz nazwy (nazywasz stół „szafą”), często gubisz wątek w rozmowie.",
          ],
          [
            "Pomylisz datę dzienną, ale wiesz, jaki mamy miesiąc i rok.",
            "Nie wiesz, jaki jest miesiąc, pora roku, regularnie nie pamiętasz daty.",
          ],
          [
            "Czasem zgubisz się w nowej okolicy.",
            "Gubisz się w dobrze znanych sobie miejscach.",
          ],
          [
            "Nie pamiętasz szczegółów rozmowy.",
            "Nie pamiętasz, że rozmowa w ogóle się odbyła; zapominasz ważne fakty z życia rodziny.",
          ],
          [
            "Nie pamiętasz, żeby do kogoś zadzwonić.",
            "Nie pamiętasz, że ktoś do ciebie dzwonił.",
          ],
          [
            "Wolniej wykonujesz codzienne czynności, trudno ci robić kilka rzeczy naraz.",
            "Masz kłopot z prostymi czynnościami: zapinaniem guzików, odróżnieniem pasty od szamponu, wkładasz kilka par skarpet naraz.",
          ],
          [
            "Szukasz okularów albo kluczy.",
            "Odkładasz rzeczy w nietypowe miejsca — klucze do lodówki, jedzenie do szafy — i potem ich szukasz.",
          ],
          [
            "Wolniej liczysz, potrzebujesz ciszy i skupienia.",
            "Masz problem z policzeniem reszty w sklepie lub prostymi działaniami.",
          ],
          [
            "Dłużej zastanawiasz się, w co się ubrać.",
            "Ubierasz się nieadekwatnie do pogody, np. klapki w zimie.",
          ],
          [
            "Musisz dłużej pogłówkować nad instrukcją nowego urządzenia.",
            "Nie potrafisz ugotować dania według znanego przepisu, nie umiesz obsłużyć odkurzacza, którego używałaś/eś latami.",
          ],
        ],
      },
      {
        kind: "praktyki",
        title: "Dobre praktyki",
        bullets: [
          "Jeśli odwiedzasz bliskiego seniora — przypominaj, kim jesteś, ilekroć trzeba: „Cześć, to ja, Kasia, dzisiaj sobota”.",
          "Rozmawiajcie w cichym pomieszczeniu, z wyłączonym telewizorem. Utrzymujcie kontakt wzrokowy.",
          "Zapisujcie ważne informacje (kiedy przyjdziesz, nazwisko lekarza, numer sąsiadki) w widocznym miejscu.",
          "Doceniajcie drobne sukcesy — kiedy uda się znaleźć właściwe słowo albo zrobić coś nowego.",
          "Jeśli to ty niepokoisz się o swoją pamięć — zapisuj rzeczy, układaj rytuały („klucze zawsze na tym samym haczyku”) i porozmawiaj z lekarzem pierwszego kontaktu.",
        ],
      },
      {
        kind: "unikaj",
        title: "Czego unikać",
        bullets: [
          "Odpytywania „a pamiętasz, co robiliśmy wczoraj?” — to stresuje i przypomina o deficycie.",
          "Poprawiania przy innych, kiedy ktoś się myli.",
          "Przeskakiwania z tematu na temat, łączenia kilku zadań w jedno polecenie.",
          "Personalnego odbierania gorszego dnia — demencja ma swoje fale, to nie twoja wina.",
        ],
      },
      {
        kind: "zapamietaj",
        title: "Kiedy reagować",
        bullets: [
          "Jeśli niepokojące sygnały się powtarzają — warto porozmawiać z rodziną i umówić wizytę u lekarza (geriatra, neurolog).",
          "Pomocny test trzech słów: ktoś powtarza trzy znane słowa, a po 3–5 minutach stara się je przypomnieć.",
        ],
      },
    ],
  },
  {
    id: "kuchnia-i-dieta",
    title: "Kuchnia i dieta",
    tagline: "Mniej kalorii, więcej białka i wody.",
    emoji: "🍽️",
    accentColor: "honey",
    personas: ["caregiver", "senior"],
    intro:
      "Apetyt z wiekiem maleje, zmysł smaku i węchu słabnie, a leki potrafią zmieniać odczuwanie jedzenia. Łatwo wpaść w rutynę „herbatka i kromka” — tyle że to prosta droga do niedożywienia i spadku sił. Dobre jedzenie w starszym wieku to mniejsze porcje, ale bogatsze: więcej białka, dobrego tłuszczu, warzyw i płynów.",
    sections: [
      {
        kind: "pigulka",
        title: "W pigułce",
        bullets: [
          "Zapotrzebowanie na kalorie spada, ale na białko, wapń, witaminę D i B12 — rośnie.",
          "Woda to podstawa: min. 1,5–2 litra dziennie, nawet jeśli pragnienia się nie czuje.",
          "Pięć mniejszych posiłków dziennie jest łatwiejsze do przyjęcia niż trzy duże.",
          "Samotne jedzenie często oznacza gorsze jedzenie — wspólny posiłek to też forma profilaktyki.",
        ],
      },
      {
        kind: "praktyki",
        title: "Dobre praktyki",
        bullets: [
          "Rób zakupy razem, jeśli to możliwe — lepiej smakuje to, co sam/a się wybrało.",
          "Dosypuj białko: jajko do zupy, biały ser do kanapki, fasola do sałatki, jogurt naturalny zamiast dżemu.",
          "Struktura dnia: owsianka na śniadanie, ciepły obiad w środku dnia, lekka kolacja na 2 godz. przed snem.",
          "Prosty plan tygodnia pomaga, jeśli mieszka się samemu — mniej chaosu, mniej pominiętych posiłków.",
          "Jeśli odwiedzasz bliskiego seniora, zjedzcie coś razem. Rozmowa przy stole jest często najcenniejsza.",
        ],
      },
      {
        kind: "unikaj",
        title: "Czego unikać",
        bullets: [
          "Bardzo słonych zup w kostkach i gotowych dań „na szybko” — podbijają ciśnienie.",
          "Drastycznych diet odchudzających — u seniorów częstszym problemem jest niedowaga niż nadwaga.",
          "Zbyt twardych potraw, jeśli są kłopoty z zębami czy protezą — zmiksowany gulasz to wciąż gulasz.",
          "Przymuszania do jedzenia — to psuje i apetyt, i relację.",
        ],
      },
      {
        kind: "zapamietaj",
        title: "Do zapamiętania",
        bullets: [
          "Pilnuj płynów równie mocno co jedzenia — odwodnienie w starszym wieku wygląda czasem jak dezorientacja.",
          "Dobrze zjeść razem = dobrze porozmawiać. Kuchnia to drugi pokój rozmów.",
        ],
      },
    ],
  },
  {
    id: "samotnosc-i-relacje",
    title: "Samotność i relacje",
    tagline: "Nie zawsze pustka, czasem tłum bez więzi.",
    emoji: "🤝",
    accentColor: "sand",
    personas: ["caregiver", "senior"],
    intro:
      "Osamotnienie to nie to samo co samotność. Można mieszkać w wielopokoleniowym domu i czuć, że nikt cię nie zna. Można żyć samotnie i mieć mocne więzi. Ta wyspa o tym, jak rozpoznać, kiedy osamotnienie zaczyna szkodzić, i jakie mikroruchy pomagają wrócić do relacji.",
    sections: [
      {
        kind: "pigulka",
        title: "W pigułce",
        bullets: [
          "53% Polaków doświadcza poczucia samotności; 39% często lub czasami czuje się opuszczonych (infuture.institute 2023).",
          "Najbardziej osamotnieni są seniorzy po 80. r.ż. — co dziesiątego nikt nie odwiedza.",
          "Chroniczne poczucie samotności zwiększa ryzyko wcześniejszej śmierci o ok. 14%, zaburza sen, osłabia odporność.",
          "Samotność w dużym mieście doskwiera częściej niż na wsi — zwykli sąsiedzi często się tam nie znają.",
        ],
      },
      {
        kind: "praktyki",
        title: "Dobre praktyki",
        bullets: [
          "Regularność bije wielkie gesty. Nawet 20 minut telefonu raz w tygodniu o stałej porze daje punkt zaczepienia.",
          "Jeśli odwiedzasz bliskiego seniora — proponuj drobne wspólne wyjścia: kawę, ławkę przed blokiem, spacer do sklepu.",
          "Jeśli sam/a czujesz się samotnie — zacznij od jednego mikrokontaktu dziennie: rozmowa z kasjerką, listonoszem, sąsiadem na klatce.",
          "Poszukaj struktury lokalnej: koło seniorów, biblioteka, Uniwersytet Trzeciego Wieku, parafia, klub działkowców.",
          "Zostaw w widocznym miejscu telefon zaufania z informacją, do czego służy — u siebie lub u bliskiej osoby starszej.",
        ],
      },
      {
        kind: "unikaj",
        title: "Czego unikać",
        bullets: [
          "Nacisku „no wyjdź, będzie fajnie” — proponuj, ale nic na siłę.",
          "Znikania bez słowa — niezapowiedziane odwołanie boli mocniej, niż się wydaje.",
          "Obiecywania więcej, niż jesteś w stanie dać. Lepiej krócej, ale konkretnie.",
          "Traktowania osamotnienia jako „samego tylko smutku” — w tle często jest ból, lęk, wycofanie, które wymagają profesjonalnej pomocy.",
        ],
      },
      {
        kind: "cytat",
        title: "Z życia",
        quote:
          "Można mieć rodzinę w drugiej części miasta, można mieć sąsiadów za ścianą, ale przy tym można być bardzo samotnym. Kasia mnie znalazła. Jesteśmy kumpele i już.",
        author: "pani Marylka, beneficjentka Paczki Seniorów",
      },
      {
        kind: "zapamietaj",
        title: "Do zapamiętania",
        bullets: [
          "Twoja obecność bywa dla kogoś jedynym kontaktem ze światem w ciągu całego tygodnia.",
          "Jeśli osamotnienie trwa tygodniami i zmienia się w przygnębienie — to sprawa dla lekarza lub psychologa, nie dla silnej woli.",
        ],
      },
    ],
  },
];
