# Linernote product biografie

## Samenvatting
De afgelopen weken heb ik mij, samen met Laup, op de frontend van de Linernote applicatie gefocust. Zekkie heeft zich gefocust op de backend. Er is tijdens dit project naar mijn idee lang onderzoek gedaan naar mogelijkheden. Ik heb mezelf op verschillende manieren moeten pushen

## Inhoud
- [Introductie](#Introductie)
- [Proces](#Proces)
  - [Week 1](#Week-1)
  - [Week 2](#Week-2)
  - [Week 3](#Week-3)
  - [Week 4](#Week-4)
  - [Week 5](#Week-5)
- [Leerdoelen](#Leerdoelen)
  - [Reflectie](#Reflectie)


## Introductie


## Proces

### Week 1
Om te beginnen heb ik deze week de belangrijkste punten uit de debriefing op een rijtje gezet

1. Linernote is een (social) media platform dat gebruik maakt van content van (populaire) bestaande platformen
2. Moeten data ophalen uit verschillende API's
3. Gebruikers moeten met een Linernote account kunnen liken, reageren en delen
4. Gebruikers moeten artiesten kunnen volgen
5. Opgehaalde data moet in een feed geladen worden
6. Linernote account moet verbonden zijn met een Spotify account + player

Vervolgens heb ik onderzoek gedaan naar de verschillende API's die Joost wil gebruiken in Linernote. Zo heb ik onderzoek gedaan naar de mogelijkheden van `Instagram`, `Spotify`, `TicketMaster` en `Youtube`. Uit dit onderzoek zijn enkele interessanten dingen gekomen.

- `Instagram` -> Het is niet mogelijk om content van Instagram via een API in te laden, omdat Instagram geen API meer aanbied. Wel is het mogelijk om posts via een embed te implementeren.

- `Spotify` -> Het is mogelijk om Spotify te implementeren in Linernote door middel van de Spotify API. Door met een Oauth registratie in te loggen, kan de Spotify data opgehaald worden.

- `TicketMaster` -> TicketMaster bied een vrij toegankelijke API die geïmplementeerd kan worden in de Linernote applicatie.

- `Youtube` -> Data afkomstig van YouTube kan door middel van iframes geïmplementeerd worden.

#### Design
Joost heeft om te beginnen een design gemaakt voor de home feed en een begin van de artiesten pagina. Het design is gebaseerd op Netflix en Spotify en heeft qua gebruikservaring iets weg van Instagram (zoals een feed).

Afhankelijk van de API mogelijkheden zal het design aangepast moeten worden. Voor volgende week zullen we moeten bedenken hoe we met de API's om zullen gaan.

Ik heb voor volgende week enkele vragen aan Joost met betrekking tot de werking en core functionaliteiten van de applicatie. Zo vraag ik me af wat de toegevoegde waarde van reacties plaatsen en posts liken is binnen de context van deze app. Krijgen gebruikers eigen profielen? Kan ik deze profielen met mijn profiel ook bezoeken? Kan ik met deze profielen interacteren? - Dit zijn allemaal dingen waar dan rekening mee gehouden moet worden.

### Week 2
Deze week hebben we met Joost afgesproken in het Volkshotel. Hier hebben we onze bevindingen uit het eerste onderzoek met elkaar gedeeld. Ik heb deze week besloten mij bij Laup en Zekkie in de groep te voegen. Dit omdat ik denk dat wij zo een "compleet" eindproduct (proof of concept) kunnen opleveren.

Joost heeft ons hierna gevraagd nog naar andere API's te kijken, in verband met de mogelijkheid van embedden en het gebruik van iframes. Menno heeft veel aan dit onderzoek bijgedragen. Door snel te handelen en bevindingen te delen zijn we met z'n alle tot een aardig onderzoek gekomen. We zijn tot de conclusie gekomen dat content van alle platformen zal worden ge-embed.

De rest van de week heb ik gespendeerd aan prototypen. Dit heeft deze week enkel bestaan uit het nabouwen van Joost zijn design en het opzetten van server. Laup had in een eerder project de Spotify API met Oauth al gemaakt. Die heeft hij geimplementeerd in dit project. Hierdoor hebben we ons eerste prototype met Spotify en socket.io opgezet.

Een belangerijk leerpunt deze week vond ik het leren werken in "onduidelijkheid". Ik ben er achter gekomen dat ik het moeilijk vind om te beginnen wanneer er naar mijn idee nog veel uitgedacht moet worden. Ook merk ik dat ik moet leren mij neer te leggen bij een design en gewoon te doen. Dat "gewoon doen" ging mij dit project iets minder soepel af dan anders.

De onduidelijkheid rondom de Instagram embeds was voor mij een frustratie punt. Natuurlijk wil ik graag doen wat Joost verwacht, maar ik wil ook graag achter mijn ontwerp staan.

#### Albert Meronyo
Op donderdag hadden we opnieuw een meeting met Joost, alleen dit keer had hij Albert Meronyo uitgenodigd om ons een workshop te geven over Linked data; RDF en SparQL. Albert werkt aan de Vrije Universiteit van Amsterdam en heeft samen met studenten een kleine database opgezet die het mogelijk maakt om van data van artiesten te vinden. Persoonlijk vond ik het een interessante workshop.

![design-feed](/img/workshop.png)

### Week 3
Deze week hebben we Joost niet gezien.

We zijn deze week ook opnieuw met een prototype begonnen. Het eerdere prototype begon onoverzichtelijk te worden dus hebben we de code in een nieuw prototype opgeschoond. *Dit proces zal zich nog een keer voordoen dit project.*

Zekkie is druk bezig geweest met het opzetten van de database, terwijl Laup en ik de frontend verder in elkaar hebben gezet. Al met al begint de app wat vorm te krijgen. Aan de voorkant klopt het nog niet helemaal met het design, maar de structuur begint te kloppen.

Het design is ook bijgewerkt. Zo is het nu de bedoeling dat alle content via iframes of embeds geïmplementeerd wordt.

### Week 4
Deze week heeft voor mij in het teken gestaan van loslaten. Ik heb mijn ideëen en frustraties over het project losgelaten.

Persoonlijk vind ik dat ook een belangrijke ontwikkeling. Niet alleen het loslaten, maar ook het accepteren van de situatie en doorgaan. Lees hier meer over in mijn [reflectie](#Reflectie).

### Week 5
Deze week hebben we Joost weer gezien om de laatste bevindingen te delen.

## Leerdoelen
Over het algemeen ben in tevreden over het behalen van mijn leerdoelen. Helaas heb ik wegens complicaties en tijdgebrek de Service worker niet meer kunnen implementeren in het eindproduct.

| Vak        | Doel           | Uitleg  | Rubric |
| ------------- |:-------------:| -----:|
| [WAFS](https://github.com/cmda-minor-web/web-app-from-scratch-1819) | *Data ophalen, manipuleren en tonen* | Tijdens dit project zal ik werken met verschillende API's en deze data gebruiken | [Rubric](https://docs.google.com/spreadsheets/d/e/2PACX-1vTjZGWGPC_RMvTMry8YW5XOM79GEIdgS7I5JlOe6OeeOUdmv7ok1s9jQhzojNE4AsyzgL-jJCbRj1LN/pubhtml?gid=0&single=true) |
|    | *Structuur van de applicatie en de code* | Door te werken met modules word ik "gedwongen" beter na te denken over de structuur van mijn code |    |
| [CSS](https://github.com/cmda-minor-web/css-to-the-rescue-1819) | *The student understands the progressive enhancement parts of CSS* | Tijdens dit project zal ik letten op mijn code stijl en zal ik gebruik maken van de BEM methode | [Rubric](https://docs.google.com/spreadsheets/d/1Xv48MSiACNmnM6nXpGGUb8mJDC459uSaxJszO_zLEp8/edit#gid=0) |
|    | *The student understands the broader scope of CSS* | Door mijn nieuwe kennis van CSS (variables, viewport etc) toe te passen kan ik laten zien hoe ik mij heb ontwikkeld |    |
| [Performance matters](https://github.com/cmda-minor-web/performance-matters-1819) | *Je begrijpt hoe een Service Worker werkt en kan deze in jouw applicatie op een nuttige wijze implementeren* | Ik wil gebruikers zowel een positieve online- als offline ervaring bieden | [Rubric](https://docs.google.com/spreadsheets/d/e/2PACX-1vTO-pc2UMvpT0pUjt6NJeckc5N9E7QvCxEfVJW1JjuM0m_9MM8ra05J0s6br486Rocz5JVMhAX_C37_/pubhtml?gid=0&single=true) |

### Reflectie


## License
[MIT](LICENSE) © [Luna May Johansson](https://github.com/maybuzz)
