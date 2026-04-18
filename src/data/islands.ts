/**
 * Treść wysp — archipelag wiedzy dla wolontariuszy Szlachetnej Paczki
 * pracujących z seniorami. Materiały sparafrazowane na podstawie
 * "Przewodnika pracy z seniorami" (Fundacja Biedronki, Szlachetna Paczka, 2020)
 * oraz raportów i materiałów towarzyszących z katalogu context/.
 */

export type SectionKind =
  | "pigulka"
  | "praktyki"
  | "unikaj"
  | "cytat"
  | "zapamietaj"
  | "tabela";

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

export interface Island {
  id: string;
  title: string;
  tagline: string;
  intro: string;
  sections: Section[];
}

export const islands: Island[] = [
  {
    id: "kim-jest-senior",
    title: "Kim jest senior?",
    tagline: "Dziesięć milionów twarzy, nie jedna etykieta.",
    intro:
      "W Polsce żyje już blisko 10 milionów osób po sześćdziesiątce, a za trzydzieści lat będzie ich prawie połowa społeczeństwa. To ogromna, bardzo różnorodna grupa — od osób aktywnych zawodowo i podróżujących po świecie, po tych, którym codzienność wypełnia czekanie na telefon od bliskich. Jeśli zaczynasz wolontariat, warto na samym początku odłożyć jedną wspólną wyobrażoną „babcię” i zobaczyć konkretnego człowieka, z jego historią, tempem i humorem.",
    sections: [
      {
        kind: "pigulka",
        title: "W pigułce",
        bullets: [
          "Seniorka to wg ustawy osoba, która skończyła 60 lat — ale fazy starości są trzy: 60–74 „młodzi starzy”, 75–89 „dojrzała starość”, 90+ „długowieczni”.",
          "Po 75. roku życia częściej pojawiają się trudności z wychodzeniem z domu i rośnie poczucie osamotnienia.",
          "Większość polskich seniorów to kobiety — wśród 85-latków jest ich już ponad dwa razy więcej niż mężczyzn.",
          "Rośnie grupa „młodych seniorów”, którzy pracują, uczą się i są bardzo aktywni cyfrowo.",
        ],
      },
      {
        kind: "praktyki",
        title: "Dobre praktyki na start",
        bullets: [
          "Zapytaj, jak senior chce być nazywany — imieniem, panią/panem, a może pseudonimem z dawnych lat.",
          "Na pierwszych spotkaniach więcej słuchaj niż mów. Pozwól, żeby opowiedział ci o sobie w swoim tempie.",
          "Pytaj o konkrety: zawód, podróże, ulubione potrawy, wnuki. Te tematy otwierają drzwi.",
          "Notuj w głowie drobiazgi (imię kota, ulubiona audycja w radiu) — to potem buduje prawdziwą bliskość.",
        ],
      },
      {
        kind: "unikaj",
        title: "Czego lepiej unikać",
        bullets: [
          "Mówienia „babciu/dziadku”, jeśli nie padła wyraźna zgoda.",
          "Wchodzenia z założeniem, że wiesz lepiej, co seniorowi potrzeba.",
          "Pośpiechu — zamiast „szybkiej wizyty” umów się na konkretne 45–60 minut bez spoglądania w telefon.",
        ],
      },
      {
        kind: "cytat",
        title: "Z życia wolontariusza",
        quote:
          "My, w sile wieku, rzeczywiście jesteśmy szybsi i lepiej zorganizowani, jednak to seniorzy mają doświadczenie i mądrość życiową, by podpowiedzieć, w którą stronę biec. Widzę dużą wartość dla każdej ze stron we wzmacnianiu dialogu międzypokoleniowego.",
        author: "wolontariuszka Szlachetnej Paczki",
      },
    ],
  },
  {
    id: "stereotypy",
    title: "Stereotypy",
    tagline: "„Starsza pani z kotem” — i co dalej?",
    intro:
      "Wszyscy nosimy w głowie obrazki, które podsuwają nam uproszczone role: zrzędliwy dziadek, schorowana babcia, zagubiony emeryt przy bankomacie. Te obrazki bywają ciepłe, ale zamykają ludzi w ciasnych pudełkach. Twoją robotą jako wolontariusza/ki jest zobaczyć człowieka zanim etykieta zdąży się przykleić.",
    sections: [
      {
        kind: "pigulka",
        title: "W pigułce",
        bullets: [
          "Stereotyp to automatyczny skrót myślowy — pojawia się, zanim zdążysz się zastanowić.",
          "Negatywne stereotypy o starości realnie skracają życie: badania Becki Levy pokazały różnicę 7,5 roku.",
          "Wśród seniorów są i hipochondrycy, i triathloniści po siedemdziesiątce. Średnia nie mówi nic o jednej osobie.",
          "Wielu seniorów internalizuje stereotypy i sami mówią o sobie „ja już się nie nadaję” — warto delikatnie to rozbrajać.",
        ],
      },
      {
        kind: "praktyki",
        title: "Dobre praktyki",
        bullets: [
          "Zauważaj, kiedy łapiesz się na myśli „wszyscy seniorzy…” — i dopytuj siebie: skąd to wiem?",
          "Pytaj zamiast zakładać: „Woli pan, żebym zrobił to za pana, czy żebym tylko towarzyszył?”.",
          "Dobieraj język do osoby, nie do wieku — wielu 70-latków świetnie sobie radzi ze smartfonem i memami.",
          "Dziel się z seniorem swoim światem tak samo, jak pytasz o jego. Równorzędność leczy stereotypy.",
        ],
      },
      {
        kind: "unikaj",
        title: "Czego unikać",
        bullets: [
          "Protekcjonalnego tonu — zdrobnień typu „słoneczko”, głośnego mówienia „na wszelki wypadek”, mówienia o seniorze w trzeciej osobie przy nim.",
          "Zaskakiwania pomocą, o którą nikt nie prosił (np. „wyręczenia” w gotowaniu).",
          "Traktowania niezgody lub wolniejszego tempa jako „upartości starego człowieka”.",
        ],
      },
      {
        kind: "zapamietaj",
        title: "Do zapamiętania",
        bullets: [
          "Stereotyp mówi więcej o tobie niż o osobie, którą opisuje.",
          "Najlepszym lekarstwem na uprzedzenia jest konkretna, regularna relacja.",
        ],
      },
    ],
  },
  {
    id: "samotnosc",
    title: "Samotność",
    tagline: "Nie zawsze pustka, czasem tłum bez więzi.",
    intro:
      "Samotność w Polsce ma najczęściej twarz starszej kobiety po osiemdziesiątce — ale spotkasz ją też w domu pomocy, w bloku z sąsiadami za ścianą i u osoby otoczonej rodziną. Nie chodzi o liczbę ludzi dookoła, tylko o jakość więzi. Właśnie tu, jako wolontariusz/ka, możesz zdziałać najwięcej.",
    sections: [
      {
        kind: "pigulka",
        title: "W pigułce",
        bullets: [
          "Chroniczne poczucie samotności zwiększa ryzyko wcześniejszej śmierci o ok. 14%, zaburza sen, osłabia odporność.",
          "Najbardziej osamotnieni są seniorzy po 80. r.ż. — co dziesiątego nikt nie odwiedza.",
          "Osamotnienie to brak więzi, nie brak ludzi. Może dotknąć seniora mieszkającego z rodziną, zamkniętego w małym pokoju.",
          "Samotność w dużym mieście doskwiera częściej niż na wsi — zwykli sąsiedzi często się tam nie znają.",
        ],
      },
      {
        kind: "praktyki",
        title: "Dobre praktyki",
        bullets: [
          "Bądź regularny/a. Nawet 20 minut telefonu raz w tygodniu, ale zawsze o tej samej porze, daje seniorowi punkt zaczepienia.",
          "Wejdź pierwszy/a: zapukaj do sąsiada, którego nigdy nie widziałeś, zapytaj z uśmiechem, czy nie potrzeba pomocy.",
          "Zaproponuj drobne wspólne wyjście — na kawę, do sklepu, na ławkę przed blokiem.",
          "Jeśli senior nie wychodzi z powodów fizycznych, pomyśl o asekuracji na schodach albo pożyczeniu wózka.",
          "Zostaw w widocznym miejscu numer telefonu zaufania z informacją, do czego służy.",
        ],
      },
      {
        kind: "unikaj",
        title: "Czego unikać",
        bullets: [
          "Nacisku „no niech pani wyjdzie, będzie fajnie” — proponuj, ale nic na siłę.",
          "Znikania bez słowa. Jeśli nie możesz przyjść, uprzedź — niezapowiedziane odwołanie boli mocniej, niż się wydaje.",
          "Obiecywania więcej, niż jesteś w stanie dać. Lepiej krócej, ale konkretnie.",
        ],
      },
      {
        kind: "cytat",
        title: "Z życia wolontariusza",
        quote:
          "Można mieć rodzinę w drugiej części miasta, można mieć sąsiadów za ścianą, ale przy tym można być bardzo samotnym. Kasia mnie znalazła. Jesteśmy kumpele i już.",
        author: "pani Marylka, beneficjentka Paczki Seniorów",
      },
      {
        kind: "zapamietaj",
        title: "Do zapamiętania",
        bullets: [
          "Regularność bije wielkie gesty. Lepsze 15 minut co tydzień niż trzygodzinna wizyta raz na kwartał.",
          "Twoja obecność bywa dla seniora jedynym kontaktem ze światem w ciągu całego tygodnia.",
        ],
      },
    ],
  },
  {
    id: "cialo-i-ruch",
    title: "Ciało w ruchu",
    tagline: "Nawet siadanie na łóżku to ruch.",
    intro:
      "Z wiekiem wszystko w ciele zwalnia: ubywa masy mięśniowej, pogarsza się równowaga, wzrok i słuch. Dobra wiadomość: ruch działa jak lek o szerokim spektrum — na serce, na nastrój, na pamięć, na jelita. Nie chodzi o bieganie maratonów. Chodzi o to, żeby codziennie coś się działo.",
    sections: [
      {
        kind: "pigulka",
        title: "W pigułce",
        bullets: [
          "WHO zaleca seniorom ok. 150 minut umiarkowanej aktywności tygodniowo plus 2 razy w tygodniu ćwiczenia siłowe i równoważne.",
          "Upadki to jedna z głównych przyczyn utraty samodzielności po 75. r.ż. — ćwiczenia równowagi realnie je zmniejszają.",
          "Woda jest równie ważna jak ruch. Seniorzy często nie czują pragnienia, więc odwadniają się niepostrzeżenie.",
          "Każda forma ruchu się liczy: spacer do kiosku, wstawanie z krzesła bez pomocy rąk, rozciąganie przy stole.",
        ],
      },
      {
        kind: "praktyki",
        title: "Dobre praktyki",
        bullets: [
          "Proponuj krótkie, codzienne rzeczy: 10 minut spaceru, 5 powtórzeń wstawania z krzesła, marsz w miejscu przy ulubionej piosence.",
          "Zadbaj o bezpieczeństwo: dobrze dopasowane obuwie, dywaniki na antypoślizgowej podkładce, światło w korytarzu do łazienki.",
          "Wspieraj nawodnienie — przynieś szklankę wody, wstaw dzbanek w zasięgu ręki, zaproponuj herbatę lub kompot.",
          "Jeśli senior ma okulary, aparat słuchowy lub laskę — sprawdźcie razem przed ćwiczeniami, czy wszystko działa.",
        ],
      },
      {
        kind: "unikaj",
        title: "Czego unikać",
        bullets: [
          "Dźwigania seniora po schodach bez planu i drugiej pary rąk — ryzyko urazu jest duże dla wszystkich.",
          "Forsowania „jeszcze jednej serii” — lepiej krócej, ale regularnie.",
          "Ignorowania bólu — jeśli coś boli tak, że zmienia się mimika, przerywacie i pytacie lekarza.",
        ],
      },
      {
        kind: "zapamietaj",
        title: "Do zapamiętania",
        bullets: [
          "Ruch to nie cel. To paliwo, żeby dalej robić to, co lubisz — odwiedzać wnuki, chodzić do kościoła, podlewać kwiaty.",
          "Zacznijcie od tego, co senior już potrafi i lubi, i dołóżcie tylko jeden mały element.",
        ],
      },
    ],
  },
  {
    id: "przy-stole",
    title: "Przy stole",
    tagline: "Mniej kalorii, więcej białka i wody.",
    intro:
      "Apetyt z wiekiem maleje, zmysł smaku i węchu słabnie, a leki potrafią zmieniać odczuwanie jedzenia. Łatwo wpaść w rutynę „herbatka i kromka” — tyle że to prosta droga do niedożywienia i spadku sił. Dobre jedzenie u seniora to mniejsze porcje, ale bogatsze: więcej białka, dobrego tłuszczu, warzyw i płynów.",
    sections: [
      {
        kind: "pigulka",
        title: "W pigułce",
        bullets: [
          "Zapotrzebowanie na kalorie spada, ale na białko, wapń, witaminę D i B12 — rośnie.",
          "Woda to podstawa: min. 1,5–2 litra dziennie, nawet jeśli senior nie czuje pragnienia.",
          "Pięć mniejszych posiłków dziennie jest łatwiejsze do przyjęcia niż trzy duże.",
          "Samotne jedzenie często oznacza gorsze jedzenie — wspólny posiłek to też forma profilaktyki.",
        ],
      },
      {
        kind: "praktyki",
        title: "Dobre praktyki",
        bullets: [
          "Rób zakupy razem, jeśli to możliwe — senior lepiej je, gdy sam wybrał, co chce ugotować.",
          "Proponuj dosypanie białka: jajko do zupy, biały ser do kanapki, fasola do sałatki, jogurt naturalny.",
          "Zadbaj o strukturę posiłków: owsianka na śniadanie, ciepły obiad w środku dnia, lekka kolacja na 2 godz. przed snem.",
          "Podziel tydzień na proste, powtarzalne dni, jeśli senior mieszka sam — jasny plan zmniejsza chaos.",
        ],
      },
      {
        kind: "unikaj",
        title: "Czego unikać",
        bullets: [
          "Bardzo słonych zup w kostkach i gotowych dań „na szybko” — one podbijają ciśnienie.",
          "Drastycznych diet odchudzających — u seniorów częstszym problemem jest niedowaga niż nadwaga.",
          "Zbyt twardych potraw, jeśli senior ma kłopot z zębami czy protezą — zmiksowany gulasz to wciąż gulasz.",
        ],
      },
      {
        kind: "zapamietaj",
        title: "Do zapamiętania",
        bullets: [
          "Pilnuj płynów równie mocno, co jedzenia — odwodnienie u seniora wygląda czasem jak dezorientacja.",
          "Dobrze zjeść razem = dobrze porozmawiać. Kuchnia to drugi pokój rozmów.",
        ],
      },
    ],
  },
  {
    id: "umysl-i-pamiec",
    title: "Umysł i pamięć",
    tagline: "Kiedy „zapomniałem” to norma, a kiedy sygnał?",
    intro:
      "Zapominanie, gdzie są klucze, zdarza się każdemu. Inaczej jest, gdy senior nie pamięta, że rozmowa w ogóle się odbyła, albo chowa jedzenie do szafy. Ta wyspa pomoże ci rozróżnić naturalne starzenie się umysłu od objawów choroby otępiennej — i dowiedzieć się, co z tym robić na co dzień.",
    sections: [
      {
        kind: "pigulka",
        title: "W pigułce",
        bullets: [
          "Naturalne starzenie się mózgu spowalnia reakcje, ale nie odbiera codziennej sprawności.",
          "W chorobie otępiennej pogarszają się funkcje, które wcześniej były oczywiste: ubieranie się, gotowanie znanego dania, obsługa pralki.",
          "Pierwszym zwiastunem demencji bywa obniżony nastrój i wycofanie, a nie „typowe zapominanie”.",
          "Regularne drobne treningi pamięci (rozmowa, gry, czytanie, wspomnienia) realnie pomagają.",
        ],
      },
      {
        kind: "tabela",
        title: "Naturalne starzenie vs choroba otępienna",
        columns: ["Naturalne starzenie", "Choroba otępienna"],
        rows: [
          [
            "Osoba zapomina, jak nazywa się ktoś nowo poznany.",
            "Zapomina imion osób bliskich — dzieci, wnuków.",
          ],
          [
            "Szuka słowa, ale podaje wyraz o podobnym znaczeniu albo opisuje przedmiot.",
            "Myli nazwy (nazywa stół „szafą”), często gubi wątek w rozmowie.",
          ],
          [
            "Pomyli datę dzienną, ale wie, jaki mamy miesiąc i rok.",
            "Nie wie, jaki jest miesiąc, pora roku, regularnie nie pamięta daty.",
          ],
          [
            "Czasem zgubi się w nowej okolicy.",
            "Gubi się w dobrze znanych sobie miejscach.",
          ],
          [
            "Nie pamięta szczegółów rozmowy.",
            "Nie pamięta, że rozmowa w ogóle się odbyła; zapomina ważne fakty z życia rodziny.",
          ],
          [
            "Nie pamięta, żeby do kogoś zadzwonić.",
            "Nie pamięta, że ktoś do niej dzwonił.",
          ],
          [
            "Wolniej wykonuje codzienne czynności, trudno jej robić kilka rzeczy naraz.",
            "Ma kłopot z prostymi czynnościami: zapinaniem guzików, odróżnieniem pasty od szamponu, wkłada kilka par skarpet naraz.",
          ],
          [
            "Szuka okularów albo kluczy.",
            "Odkłada rzeczy w nietypowe miejsca — klucze do lodówki, jedzenie do szafy — i potem ich szuka.",
          ],
          [
            "Wolniej liczy, potrzebuje ciszy i skupienia.",
            "Ma problem z policzeniem reszty w sklepie lub prostymi działaniami.",
          ],
          [
            "Dłużej zastanawia się, w co się ubrać.",
            "Ubiera się nieadekwatnie do pogody, np. klapki w zimie.",
          ],
          [
            "Musi dłużej pogłówkować nad instrukcją nowego urządzenia.",
            "Nie potrafi ugotować dania według znanego przepisu, nie umie obsłużyć odkurzacza, którego używała latami.",
          ],
        ],
      },
      {
        kind: "praktyki",
        title: "Dobre praktyki",
        bullets: [
          "Przypominaj, kim jesteś, ilekroć to potrzebne: „Dzień dobry, pani Halino, to ja, Kasia z Paczki, jest sobota”.",
          "Rozmawiajcie w cichym pomieszczeniu, z wyłączonym telewizorem. Utrzymuj kontakt wzrokowy.",
          "Używaj krótkich zdań i jednego wątku naraz. Daj czas na odpowiedź, nie kończ zdań za seniora.",
          "Zapisuj ważne informacje (kiedy przyjdziesz, nazwisko lekarza, numer sąsiadki) w widocznym miejscu.",
          "Doceniaj drobne sukcesy — kiedy senior znajdzie właściwe słowo albo zrobi coś nowego.",
        ],
      },
      {
        kind: "unikaj",
        title: "Czego unikać",
        bullets: [
          "Odpytywania „a pamięta pani, co robiliśmy wczoraj?” — to stresuje i przypomina o deficycie.",
          "Poprawiania przy innych, kiedy senior się myli.",
          "Przeskakiwania z tematu na temat, łączenia kilku zadań w jedno polecenie.",
          "Personalnego odbierania gorszego dnia — demencja ma swoje fale, to nie twoja wina.",
        ],
      },
      {
        kind: "zapamietaj",
        title: "Kiedy delikatnie zadziałać",
        bullets: [
          "Jeśli niepokojące sygnały się powtarzają — porozmawiaj z rodziną seniora i zachęć do wizyty u lekarza (geriatra, neurolog).",
          "Pomocny jest test trzech słów: poproś o powtórzenie trzech znanych słów, a po 3–5 minutach o przypomnienie ich ponownie.",
        ],
      },
    ],
  },
  {
    id: "jak-rozmawiac",
    title: "Jak rozmawiać",
    tagline: "Aktywne słuchanie bije każdą gadkę.",
    intro:
      "Dobra rozmowa jest sercem wolontariatu z seniorami. Nie trzeba być psychologiem — wystarczy słuchać naprawdę, zadawać pytania, które otwierają, i nie zalewać seniora swoimi rozwiązaniami. Ta wyspa to prosty zestaw startowy: jak wejść, jak nie zgasić rozmowy i jak zadbać o zaufanie.",
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
          "„Co miłego wydarzyło się u pani w tym tygodniu?” — lepiej zaczyna rozmowę niż „co słychać?”.",
          "„Jaki był najlepszy film, który pani pamięta?” — wraca się do czasów młodości bez patosu.",
          "„Czy jest jakaś potrawa, którą zawsze chciała pani spróbować?” — otwiera rozmowę o marzeniach.",
          "„Jaka piosenka kojarzy się pani z najlepszym okresem życia?” — bezcenne przy towarzyszeniu osobie samotnej.",
        ],
      },
      {
        kind: "unikaj",
        title: "Czego unikać",
        bullets: [
          "Rad „z góry” — „powinna pani więcej wychodzić”. Najpierw pytanie, potem ewentualne wsparcie.",
          "Przerywania w połowie wypowiedzi, nawet jeśli historia się powtarza już trzeci raz.",
          "Tematów z gazety, które mogą zestresować (polityka, katastrofy), chyba że senior sam chce o nich rozmawiać.",
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
          "Jeśli senior opowiada trzeci raz tę samą historię, dopytaj o szczegół, którego wcześniej nie znałeś/aś. Historia zyska nowy bieg.",
        ],
      },
    ],
  },
  {
    id: "systemowa-praca",
    title: "Systemowa praca",
    tagline: "Od pierwszego spotkania do planu na miesiące.",
    intro:
      "Wolontariat z seniorem to nie seria przypadkowych wizyt. To mała, ale prawdziwa relacja, którą projektujesz razem z podopiecznym i koordynatorem. Ta wyspa pokazuje, jak rozłożyć wsparcie na etapy i korzystać z prostych narzędzi, takich jak koło życia czy system motywatorów zmiany.",
    sections: [
      {
        kind: "pigulka",
        title: "W pigułce",
        bullets: [
          "Najpierw poznanie (2–3 wizyty bez zadań), potem wspólne cele, potem konkretny plan.",
          "Małe, mierzalne kroki działają lepiej niż wielkie postanowienia („dzwonię do córki raz w tygodniu” > „będę więcej rozmawiać z rodziną”).",
          "Koordynator w Paczce jest twoim zapleczem — dzwoń, pytaj, konsultuj, nie zostawaj z trudnościami sam/a.",
          "Każde spotkanie warto podsumować zdaniem: „Co dzisiaj się udało?”.",
        ],
      },
      {
        kind: "praktyki",
        title: "Dobre praktyki",
        bullets: [
          "Ustalcie stały rytm: ten sam dzień tygodnia, ta sama godzina, orientacyjny czas trwania.",
          "Spisz z seniorem listę 3–5 rzeczy, które chciałby w tym półroczu — i wracajcie do niej co miesiąc.",
          "Używaj prostych narzędzi: koło życia (ocena ważnych obszarów w skali 1–10) albo margerytki (role i wsparcia).",
          "Notuj u siebie krótkie wnioski po każdej wizycie: co zadziałało, co zabrać na kolejny raz.",
        ],
      },
      {
        kind: "unikaj",
        title: "Czego unikać",
        bullets: [
          "Wchodzenia z gotowym planem od pierwszej wizyty.",
          "Przekraczania swoich kompetencji — jeśli pojawia się depresja albo przemoc w rodzinie, to sprawa dla specjalisty i koordynatora.",
          "Obiecywania rzeczy „poza zasięgiem”: załatwienia leczenia, mieszkania, pieniędzy.",
        ],
      },
      {
        kind: "zapamietaj",
        title: "Do zapamiętania",
        bullets: [
          "Twoim zadaniem jest towarzyszyć, nie naprawiać całego życia seniora.",
          "Najtrwalsze zmiany dzieją się powoli i przez relację, nie przez instrukcję.",
        ],
      },
    ],
  },
  {
    id: "zadbaj-o-siebie",
    title: "Zadbaj o siebie",
    tagline: "Żeby dać, trzeba mieć skąd czerpać.",
    intro:
      "Wypalenie w wolontariacie to nie jednorazowy kryzys — to proces. Najpierw entuzjazm, potem zmęczenie, irytacja, wreszcie cynizm i chęć odpuszczenia. Dobra wiadomość: bardzo łatwo go wyhamować, jeśli w porę zauważysz sygnały u siebie i masz komu o nich powiedzieć.",
    sections: [
      {
        kind: "pigulka",
        title: "W pigułce",
        bullets: [
          "Osoby pracujące jako wolontariusze w więcej niż jednej organizacji są bardziej narażone na wypalenie.",
          "Najczęstsze sygnały: drażliwość, spadek satysfakcji, poczucie, że już „muszę” iść na wizytę.",
          "Dojazd dłuższy niż godzina w jedną stronę z czasem podcina nawet silną motywację.",
          "Integracja z innymi wolontariuszami jest jedną z najsilniejszych ochron przed wypaleniem.",
        ],
      },
      {
        kind: "praktyki",
        title: "Dobre praktyki",
        bullets: [
          "Ustal z koordynatorem jasne granice: ile godzin w tygodniu dajesz, czego nie robisz.",
          "Wpisz wizyty u seniora do kalendarza — to pomaga nie kraść czasu z reszty życia.",
          "Raz w miesiącu spotkaj się z innymi wolontariuszami — pogadanie „po ludzku” rozładowuje.",
          "Korzystaj ze szkoleń i rozmów z psychologiem, jeśli organizacja je oferuje.",
          "Zauważaj sygnały w ciele: chroniczne zmęczenie po wizycie, sen gorszy niż zwykle, napięty kark.",
        ],
      },
      {
        kind: "unikaj",
        title: "Czego unikać",
        bullets: [
          "Brania na siebie więcej, niż organizacja od ciebie oczekuje.",
          "Cierpienia w ciszy — „zgłoszenie, że nie daję rady” to nie porażka, tylko wyraz zawodowości.",
          "Porównywania swojego wolontariatu z czyimś — każda para wolontariusz–senior ma swój rytm.",
        ],
      },
      {
        kind: "cytat",
        title: "Z życia wolontariusza",
        quote:
          "Ja przeznaczam na hospicjum ok. dwóch godzin na tydzień. To dużo i niedużo. Kiedyś policzyłam, że to ok. 1,5–2% mojej życiowej aktywności, kiedy nie śpię. Dzięki tym 2% przez pozostałe 98% mądrzej żyję.",
        author: "Justyna, wolontariuszka Hospicjum Onkologicznego św. Krzysztofa",
      },
      {
        kind: "zapamietaj",
        title: "Do zapamiętania",
        bullets: [
          "Wolontariusz, który o siebie nie dba, szybko przestaje być pomocny komukolwiek — łącznie z sobą.",
          "Pomaganie ma rytm: zaangażowanie, chwila wytchnienia, powrót. Oddychaj tym rytmem świadomie.",
        ],
      },
    ],
  },
];
