// Globalne konstante sajta
// Ove vrednosti se koriste za SEO, metadata, itd.

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const SITE_NAME =
  process.env.NEXT_PUBLIC_SITE_NAME ?? "Colorium";

export const SITE_DESCRIPTION =
  "Colorium – moler u Nišu. Molerski radovi, gletovanje, krečenje, dekorativne tehnike i adaptacija stanova. Brzo, uredno i po dogovorenom roku.";

export const SITE_TAGLINE = "Moler Niš i okolina";

// ─── Kontakt ──────────────────────────────────────────────────────────────────

export const CONTACT_PHONE = "064 186 1730";
export const CONTACT_PHONE_HREF = "+381641861730";
export const CONTACT_EMAIL = "coolorium@gmail.com";
export const CONTACT_LOCATION = "Niš i okolina";

// ─── Društvene mreže ──────────────────────────────────────────────────────────

export const SOCIAL_FACEBOOK =
  "https://www.facebook.com/profile.php?id=61586588904256";
export const SOCIAL_INSTAGRAM = "https://www.instagram.com/colorium_nis/";

// ─── Usluge ───────────────────────────────────────────────────────────────────

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceBreakdown {
  title: string;
  intro: string;
  process: string;
  priceFactors: string[];
  image?: string;
}

export interface Service {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  bullets: string[];
  image: string;
  faq?: ServiceFAQ[];
  subServices?: ServiceBreakdown[];
}

export const SERVICES: Service[] = [
  {
    slug: "molerski-radovi",
    title: "Moleraj, krečenje i gletovanje",
    description:
      "Kompletni molerski radovi u Nišu – gletovanje, krečenje i zaštita prostora, od pripreme do završnog sloja.",
    longDescription:
      "Molerski radovi obuhvataju sve faze obrade zidova i plafona – od gletovanja i pripreme podloge, do krečenja u željenoj boji i tehnici nanošenja. Radimo u stanovima, kućama i poslovnom prostoru, uz zaštitu nameštaja i podova pre početka posla. Ispod pogledajte kako izvodimo svaku fazu i šta utiče na cenu.",
    bullets: [
      "Farbanje stolarije i radijatora",
      "Zaštita podova, nameštaja, prozora i vrata pre početka radova",
      "Rad u stanovima, kućama i poslovnom prostoru",
      "Dogovoren rok i cena pre početka posla",
    ],
    image: "/616760407_122096099175219630_5800983690351344552_n.jpg",
    subServices: [
      {
        title: "Gletovanje",
        intro:
          "Priprema podloge koja odlučuje kako će zid izgledati posle bojenja – ravna i glatka površina bez koje ni jedna boja neće leći kako treba.",
        process:
          "Prvo se podloga očisti i pregleda, sanira se oštećenje i bandažiraju spojevi, zatim se nanosi glet masa u jednom ili više slojeva. Na kraju se površina brusi do glatkog i ravnog rezultata, spremnog za krečenje.",
        image: "/2148384472.jpg",
        priceFactors: [
          "Stanje postojeće podloge (pukotine, vlaga, neravnine)",
          "Broj potrebnih slojeva gleta",
          "Da li se gletuju samo zidovi ili i plafoni",
          "Visina plafona i pristupačnost prostora",
        ],
      },
      {
        title: "Krečenje",
        intro:
          "Završni sloj koji najviše utiče na izgled prostora – ravnomerno nanet, bez fleka i tragova valjka.",
        process:
          "Boja se nanosi u jednom ili više slojeva, u zavisnosti od tona i tipa boje (poludisperzija ili periva boja). Kod intenzivnih i pastelnih tonova prvo se nanosi osnovni premaz, kako bi boja legla ravnomerno i u jednom nijansi.",
        image: "/m3.png",
        priceFactors: [
          "Vrsta boje (poludisperzija, periva, intenzivni ili pastelni tonovi)",
          "Broj slojeva",
          "Da li je potreban osnovni premaz",
          "Da li se kreči samo zid ili i plafon",
        ],
      },
    ],
    faq: [
      {
        question: "Da li štitite nameštaj i podove tokom radova?",
        answer:
          "Da, nameštaj, podovi, prozori i vrata se pokrivaju pre početka radova, a prostor se ostavlja čist tokom i nakon izvođenja.",
      },
      {
        question: "Koliko slojeva boje je potrebno?",
        answer:
          "Zavisi od boje i podloge – obično jedan do dva sloja, uz osnovni premaz kod intenzivnih ili pastelnih tonova.",
      },
      {
        question: "Da li gletujete i betonske površine?",
        answer:
          "Da, radimo gletovanje betonskih površina, kao i bandažiranje spojeva i sanaciju oštećenja pre krečenja.",
      },
      {
        question: "Koliko košta gletovanje i krečenje?",
        answer:
          "Tačne cene po m² i vrsti usluge pogledajte na stranici Cenovnik.",
      },
    ],
  },
  {
    slug: "dekorativne-tehnike",
    title: "Dekorativne tehnike",
    description:
      "Sahara, Velvet, Marmorino i Venecijanska tehnika za zidove sa posebnim izgledom i karakterom.",
    longDescription:
      "Za prostore kojima želite da date poseban karakter, radimo dekorativne tehnike Sahara, Velvet, Marmorino i Venecijanska. Svaka tehnika ima svoj postupak nanošenja i završni efekat, od mat teksture do svilenkastog sjaja.",
    bullets: [
      "Sahara – teksturirani mat efekat",
      "Velvet – somotski, baršunasti sjaj",
      "Marmorino – imitacija prirodnog kamena",
      "Venecijanska tehnika – glatka, sjajna površina",
    ],
    image: "/616385393_122096098965219630_7897491740410218622_n.jpg",
    subServices: [
      {
        title: "Sahara",
        intro:
          "Teksturirana dekorativna tehnika sa mat, peskovitim efektom koji podseća na pustinjski pesak.",
        process:
          "Nanosi se u jednom ili dva sloja posebnom glet masom sa finim zrnom, a zatim se obrađuje alatom (gletericom, sunđerom ili četkom) kako bi se dobila željena tekstura i pravac.",
        image: "/m10.png",
        priceFactors: [
          "Broj slojeva i gustina teksture",
          "Priprema podloge pre nanošenja",
          "Boja i toniranje premaza",
          "Površina i pristupačnost prostora",
        ],
      },
      {
        title: "Velvet",
        intro:
          "Dekorativni premaz sa efektom somota – meki, baršunasti sjaj koji menja intenzitet u zavisnosti od ugla svetlosti.",
        process:
          "Nanosi se u dva tanka sloja specijalnom rukavicom ili četkom, uz kružne pokrete koji stvaraju karakterističan svileni sjaj.",
        image: "/616760407_122096099175219630_5800983690351344552_n.jpg",
        priceFactors: [
          "Broj slojeva",
          "Priprema i gletovanje podloge",
          "Izbor boje i intenzitet sjaja",
          "Površina prostorije",
        ],
      },
      {
        title: "Marmorino",
        intro:
          "Klasična italijanska tehnika koja imitira izgled prirodnog mermera, sa dubinom i teksturom kamena.",
        process:
          "Nanosi se u više tankih slojeva glet mase na bazi kreča, uz poliranje mistrijom između slojeva radi postizanja sjaja i efekta kamena.",
        image: "/108223.jpg",
        priceFactors: [
          "Broj slojeva i stepen poliranja",
          "Priprema podloge",
          "Boja i efekat vena",
          "Površina i visina plafona",
        ],
      },
      {
        title: "Venecijanska",
        intro:
          "Venecijanska tehnika daje glatku, sjajnu površinu sličnu poliranom kamenu, sa dubokim, staklastim efektom.",
        process:
          "Nanosi se u više vrlo tankih slojeva specijalne glet mase, uz poliranje čeličnom mistrijom nakon svakog sloja dok se ne postigne željeni sjaj.",
        image: "/9512.jpg",
        priceFactors: [
          "Broj slojeva (obično tri ili više)",
          "Priprema i gletovanje podloge",
          "Stepen sjaja i poliranja",
          "Površina i pristupačnost prostora",
        ],
      },
    ],
    faq: [
      {
        question:
          "Koja je razlika između Sahare, Velveta, Marmorina i Venecijanske tehnike?",
        answer:
          "Sahara ima teksturiran mat efekat, Velvet baršunasti sjaj, Marmorino imitira mermer, a Venecijanska tehnika daje glatku, staklastu površinu. Razlikuju se po broju slojeva, alatu za nanošenje i završnom sjaju.",
      },
      {
        question: "Da li se dekorativne tehnike mogu naneti na već okrečen zid?",
        answer:
          "Da, uz odgovarajuću pripremu podloge – gletovanje ili čišćenje postojećeg premaza pre nanošenja dekorativne tehnike.",
      },
      {
        question: "Koliko traje izvođenje dekorativne tehnike?",
        answer:
          "Zavisi od tehnike i površine – većina tehnika zahteva više tankih slojeva sa vremenom sušenja između njih, pa posao obično traje nekoliko dana.",
      },
      {
        question: "Koliko košta dekorativna tehnika po m²?",
        answer:
          "Cene po tehnici i m² pogledajte na stranici Cenovnik.",
      },
    ],
  },
  {
    slug: "adaptacija-stanova",
    title: "Adaptacija stanova",
    description:
      "Adaptacija stanova i poslovnog prostora – gletovanje, farbanje stolarije, sitni građevinski radovi.",
    longDescription:
      "Adaptacija stanova i poslovnog prostora obuhvata gletovanje, krečenje, farbanje stolarije i sitne pripremne radove potrebne da se prostor kompletno sredi. Sve faze posla dogovaramo unapred, na osnovu obilaska prostora i procene stanja.",
    bullets: [
      "Gletovanje i krečenje kompletnog prostora",
      "Farbanje vrata, prozora i radijatora",
      "Sitni pripremni i građevinski radovi",
      "Dogovoren rok i cena pre početka posla",
    ],
    image: "/m2.png",
  },
];

// ─── Cenovnik ─────────────────────────────────────────────────────────────────

export interface PriceItem {
  service: string;
  price: string;
}

export interface PriceCategory {
  number: string;
  title: string;
  items: PriceItem[];
}

export const PRICING: PriceCategory[] = [
  {
    number: "01",
    title: "Gletovanje",
    items: [
      { service: "Gletovanje zidova", price: "od 2,5 €/m²" },
      { service: "Gletovanje plafona", price: "od 3,5 €/m²" },
      { service: "Gletovanje betonskih površina", price: "od 3 €/m²" },
      { service: "Bandažiranje i gletovanje spojeva", price: "od 2 €/m²" },
      { service: "Krpljenje i sanacija oštećenja", price: "od 2 €/m²" },
      {
        service: "Mašinsko šmirglanje zidova i plafona",
        price: "od 1,5 €/m²",
      },
      { service: "Uklanjanje stare boje", price: "od 1,5 €/m²" },
      { service: "Uklanjanje tapeta", price: "od 1,5 €/m²" },
      {
        service: "Zaštita podova, nameštaja, prozora, vrata",
        price: "od 1 €/m²",
      },
      {
        service: "Obrada špaletni oko prozora i vrata",
        price: "od 10 €/kom",
      },
    ],
  },
  {
    number: "02",
    title: "Krečenje",
    items: [
      { service: "Poludisperzija, 1 sloj", price: "od 1,5 €/m²" },
      { service: "Poludisperzija, 2 sloja", price: "od 2 €/m²" },
      {
        service: "Poludisperzija, 2 sloja + osnovni premaz",
        price: "od 2,5 €/m²",
      },
      { service: "Periva boja, 1 sloj", price: "od 2 €/m²" },
      { service: "Periva boja, 2 sloja", price: "od 3 €/m²" },
      {
        service: "Periva boja, 2 sloja + osnovni premaz",
        price: "od 3,5 €/m²",
      },
      { service: "Intenzivni tonovi, 1 sloj", price: "od 2 €/m²" },
      { service: "Intenzivni tonovi, 2 sloja", price: "od 3 €/m²" },
      {
        service: "Intenzivni tonovi, 2 sloja + osnovni premaz",
        price: "od 3,5 €/m²",
      },
      { service: "Pastelni tonovi, 1 sloj", price: "od 2 €/m²" },
      { service: "Pastelni tonovi, 2 sloja", price: "od 3 €/m²" },
      {
        service: "Pastelni tonovi, 2 sloja + osnovni premaz",
        price: "od 3,5 €/m²",
      },
      { service: "Krečenje plafona", price: "od 1,5 €/m²" },
    ],
  },
  {
    number: "03",
    title: "Dekorativne tehnike",
    items: [
      { service: "Sahara", price: "od 8,5 €/m²" },
      { service: "Velvet", price: "od 9 €/m²" },
      { service: "Marmorino", price: "od 9 €/m²" },
      { service: "Venecijanska", price: "od 8,5 €/m²" },
    ],
  },
  {
    number: "04",
    title: "Adaptacija stana",
    items: [
      { service: "Kompletna adaptacija stana", price: "Cena nakon procene" },
      { service: "Delimična adaptacija stana", price: "Cena nakon procene" },
    ],
  },
];
