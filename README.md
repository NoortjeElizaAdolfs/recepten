#       Handleiding React
##      Inhoudsopgave
###     Inleiding
####    Installatie
#####   React project uitvoeren
######  Werking Applicatie

https://github.com/NoortjeElizaAdolfs/recepten
______________________________________________________________________________________________________
# Handleiding React
Zelfgeschreven installatiehandleiding als README.md in de projectmap

## Inhoudsopgave
Ik ga een applicatie bedenken en bouwen waarvan je alleen de frontend gaat programmeren. Je bedenkt welk probleem je wil oplossen met jouw product en aan welke eisen de applicatie moet voldoen. Hiervoor ga je eerst een plan schrijven en schermontwerpen maken. Daarna ga je de frontend code schrijven. Door deze opdracht uit te voeren toon je aan een volwaardige webapplicatie te kunnen bouwen in de frontend.

### Installatie
Om React op ons systeem te installeren, moeten we eerst weten wat npm is en begrijpen waarom we ze nodig hebben. Npm staat voor Node Package Manager, en het is 's werelds grootste open source software-register. Npm is een hulpprogramma voor afhankelijkheidsbeheer voor javascript-applicaties, wat helpt bij het installeren van alle bibliotheken en andere tools om de ontwikkeling van de JS-applicaties te ondersteunen. Door hieronder in te voeren is er duidelijk welke installatie nodig is om een project op te zetten en te starten.

1. `sudo apt install nodejs`

Nadat de npm-installatie is voltooid, kunnen we controleer uw versie en die van node​ We kunnen dit doen met het commando:
	
2. `npm -v`

Als u niet de nieuwste versie van npm op uw systeem heeft geïnstalleerd, u kunt Node Package Manager (npm) bijwerken naar de nieuwste versie deze opdracht uitvoeren in terminal:

3. `sudo npm install -g npm@latest`

We kunnen installeer create-react-app met npm​ Om dit te doen, hoeven we in een terminal (Ctrl + Alt + T) alleen de volgende installatieopdracht uit te voeren:

4. `sudo npm install -g create-react-app`

Zodra de installatie van de create-react-app-applicatie in ons systeem is voltooid, kunnen we controleer de geïnstalleerde versie het volgende commando uitvoeren:

5. `create-react-app --version`

De bovenstaande opdracht gaat een React-applicatie maken met de naam mijn-eerste-app​ Tegelijkertijd er wordt een nieuwe map gemaakt met dezelfde naam als de applicatie die alle benodigde bestanden, configuraties en bibliotheken bevat.

#### React uitvoeren

Zodra het React-project is gemaakt, we zullen naar de projectdirectory moeten gaan en de React-applicatie moeten uitvoeren met behulp van de volgende opdracht in terminal:

1 `npm start`

De terminal zal ons vertellen dat de browser moeten openen en laad de applicatie die standaard wordt uitgevoerd op de URL:
Wanneer de browser wordt geopend, zien we het React-logo en de teksten op het scherm.

2 `http://localhost:3000`​ 

De pagina wordt opnieuw geladen wanneer u wijzigingen aanbrengt.
Mogelijk ziet u ook lintfouten in de console

3 `npm test`

Start de testloper in de interactieve kijkmodus.

4 `npm run build`

Bouwt de app voor productie naar de `build`-map.
Het bundelt React correct in productiemodus en optimaliseert de build voor de beste prestaties.

De build is verkleind en de bestandsnamen bevatten de hashes.
Uw app is klaar om te worden geïmplementeerd!

Als er een werkend applicatie gebouwd is zoals bij deze appiclicatie zorg dan dat de eerste stappen worden uitgevoerd zodat er een werkend Node.js programma is en de Node Package Manager. Voer dan bij het bestaande project:

1 `npm install`

Op deze manier installeert hij alles wat hij nodig is en u kan de applicatie starten vanuit u eigen Editor (Ik maak gebruik van Visual Studio Code) met de bestaande locatie:

2 `http://localhost:3000`​ 

##### Werking applicatie
Met deze applicatie programmeer ik een website om te zoeken naar recepten en motivatie-om-te-koken-niveau. Wanneer iemand geen zin heeft om te koken, worden er snelle en makkelijke recepten getoond. Ten slotte heeft de gebruiker ook de mogelijkheid om recepten te bekijken op basis van de ingrediënten die nog in de koelkast liggen. Om dit te doen maak ik gebruik ik de Edamam API(https://www.edamam.com/) om zo recepten op te vragen en te verwerken in mijn applicatie. Daarnaast is het mogelijk om te registreren en in te loggen. Het is belangrijk om eerst te registreren anders kan er niet ingelogd worden.
