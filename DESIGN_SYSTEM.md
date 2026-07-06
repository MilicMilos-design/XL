# XL Pizzeria — Dizajn sistem

Izvor istine za vizuelni identitet sajta. Dark premium stil izveden iz loga i menija lokala.

## Karakter brenda
- **Premium, ali toplo** — crna baza kao meni, elegantno ali ne hladno.
- **Italijanski akcenti** — trobojka (zelena/bela/crvena) suptilno, ne kao zastava.
- **XL = veliko** — velika tipografija, prostor, samopouzdanje. Poslastičarnica + igraonica = porodično.

## Boje (tokeni)

| Token | Hex | Uloga |
|---|---|---|
| `--ink` | `#0d0d0f` | Glavna crna pozadina |
| `--ink-2` | `#16161a` | Kartice, sekcije (elevacija 1) |
| `--ink-3` | `#1f1f25` | Elevacija 2, hover |
| `--line` | `#2c2c34` | Borderi, razdelnici |
| `--cream` | `#f5f1e8` | Glavni tekst na crnom (topla bela) |
| `--muted` | `#a5a1997 → #a29e94` | Sekundarni tekst |
| `--gold` | `#e0b055` | Primarni akcenat (cene, istaknuto) — topli zlatni |
| `--red` | `#c8342f` | CTA, italijanski crveni |
| `--green` | `#2e8b57` | Italijanski zeleni (suptilno, badge dostava) |

Kontrast: `--cream` na `--ink` = ~15:1 (AAA). `--gold` na `--ink` = ~9:1 (AAA). `--red` tekst se koristi samo na svetlom dugmetu ili kao pozadina dugmeta sa `--cream` tekstom (proveren AA).

## Tipografija
- **Naslovi (display):** "Fraunces" ili "Playfair Display" — elegantan serif, italijanski dah.
- **Podnaslovi / UI:** "Manrope" — moderan, čist sans.
- **Telo teksta:** "Manrope" (isti radi konzistentnosti i brzine).
- Fallback: `Georgia, serif` za display, `system-ui, sans-serif` za sans.

Skala (rem, 1rem=16px): 0.75 / 0.875 / 1 / 1.125 / 1.375 / 1.75 / 2.25 / 3 / 4.5 (clamp za hero).

## Spacing (8px grid)
4, 8, 12, 16, 24, 32, 48, 64, 96, 128.

## Oblici
- Radijus: kartice 14px, dugmad 999px (pill), slike 12px.
- Senke: mekane, tople crne — `0 10px 40px rgba(0,0,0,.45)`.
- Border 1px `--line` na karticama za definiciju na crnom.

## Komponente
- **Dugme primarno:** crvena pozadina, cream tekst, pill, hover blago svetlije + lift.
- **Dugme sekundarno:** outline `--line`, cream tekst, hover zlatni border.
- **CTA telefon:** uvek vidljiv, klik-to-call `tel:`.
- **Kartica jela:** slika + naziv + opis + cena (zlatna).
- **Tab meni:** aktivni tab zlatni underline/pozadina.

## Pristupačnost
- Touch mete ≥44px. Focus ring vidljiv (zlatni outline). `prefers-reduced-motion` gasi animacije. Bez horizontalnog scrolla. Hijerarhija h1→h2→h3.

## Podaci lokala (za sve stranice)
- Adresa: Trg Ćire Milekića 18, 22000 Sremska Mitrovica
- Telefon: 022/621-360, 022/621-900
- Radno vreme: pon 07–00, uto 06:30–00, sre 07–00, čet 07–23:30, pet 07–01, sub 07–01, ned 06:30–00
- Dostava: besplatna kućna + Wolt
- Instagram: @xlpizzeria.rs · Facebook: Xl Pizzeria Sremska Mitrovica
- Google koord: 44.96825, 19.60680
