# functional-programming

## De Volkskrant

Voor de Volkskrant zullen we het parkeren in Nederland onderzoeken en waardevolle data verzamelen en daar digitaal interactieve visualisaties van te maken die journalisten en onderzoekers kunnen gebruiken als interessante onderwerpen.

## Hoofdvraag

### Wat gebeurt er met de betalingsmethodes, als de verkooppunten stijgen/dalen?

De wereld is continu in verandering. Technologisering zorgt ervoor dat we steeds op makkelijkere manieren kunnen betalen voor diensten. Dit heeft ook gevolgen op de verkooppunten van de parkeergarage. Tegenwoordig is het zelfs mogelijk om je mobiel te scannen op het moment dat je in een garage rijdt. Daalt het aantal verkooppunten in Nederland door technologisering? En zijn er steeds minder plekken waar we contant kunnen betalen?

## Deelvragen

* Hoeveel verkooppunten zijn er op nu ten opzichte van vijf jaar geleden?

Om antwoord te kunnen geven op de vraag moeten we eerst in kaart brengen wat het aantal verkooppunten is in Nederland op dit moment en of er sprake is van een stijging of een daling.

* Welke betalingsopties kennen we in Nederland?

Het is belangrijk om te weten welke betalingsopties we op dit moment kennen in Nederland zodat we kunnen kijken naar welke betalingsopties wellicht zijn verdwenen en welke nieuwe betalingsopties we hebben gekregen.

* Welke verkooppunten hebben deze nieuwe betalingsopties?

Het is interessant om in kaart te brengen welke steden gebruik maken van de nieuwste betalingsopties. Zijn er steden die op dit gebied nog achterlopen op de rest?

* Welke betalingsopties zijn verminderd ten opzichte van vijf jaar geleden?

Het is interessant om in kaart te brengen welke betalingsopties zijn verminderd of misschien zelfd verdwenen? Wordt het steeds lastiger om contant te betalen voor het parkeren? Of verdwijnt het betalen met creditcard juist?

## Variabelen

Om deze vragen te beantwoorden zal ik de [Open Data Parkeren: VERKOOPPUNT](https://opendata.rdw.nl/d/fk68-nf2y/visualization) en de [Open Data Parkeren: BETAALMETHODE VERKOOPPUNT](https://opendata.rdw.nl/d/j96a-7nhx/visualization) gebruiken.

#### Open Data Parkeren: VERKOOPPUNT

Deze dataset heeft de volgende relevante variabelen
* StartDateSellingPoint (Datum vanaf wanneer een verkooppunt actief is)
* EndDateSellingPoint (Datum vanaf wanneer een verkooppunt niet meer actief is)
* SellingPointDesc (Omschrijving van een verkooppunt)

#### Open Data Parkeren: BETAALMETHODE VERKOOPPUNT

Deze dataset heeft de volgende relevante variabelen
* PaymentMethod (Betaal methode die gebruikt kan worden voor het betalen van parkeren)
* StartDatePaymentMethod  (Begindatum van een periode waarin de betalingsmogelijkheid geldig is)
* EndDatePaymentMethod (Einddatum van een periode waarin de betalingsmogelijkheid geldig is)
* SellingPointNumber (Identificatie van een verkooppunt)
