# Laboration 4, del 2
Detta projekt är en webbapplikation (frontend) byggd för att interagera med en RESTful webbtjänst. Applikationen hanterar användarautentisering via JSON Web Tokens (JWT) och använder Fetch API för all kommunikation med backend. Applikation är skapad i kursen Backend-baserad webbutveckling vid Mittuniversitetet. 

## Beskrivning

Applikationen är skapad för att öva på att använda autentisering av webbinnehåll. Applikationen tillåter användare att registrera nya konton, logga in och få tillgång till skyddat innehåll som endast är tillgängligt för autentiserade användare.

### Huvudfunktioner:
* **Registrering:** Formulär för att skapa ett nytt konto (POST-anrop).
* **Inloggning:** Autentisering mot webbtjänst som returnerar en JWT vid lyckat resultat.
* **Sessionshantering:** JWT lagras i localStorage.
* **Skyddad undersida:** En vy som kräver inloggning. Om en användare försöker nå sidan utan giltig token nekas åtkomst eller omdirigeras.

## Tekniker

* **HTML5 & CSS:** För struktur och responsiv design.
* **Vanilla JavaScript:** För logik och DOM-manipulering.
* **Vite:** För snabb utvecklingsmiljö och prestandaoptimering.
* **Fetch API:** För asynkrona HTTP-anrop till backend.
* **JWT (JSON Web Token):** För säker identifiering av användaren.
* **Bcrypt** För kryptering av lösenord.

## Komma igång

### Förutsättningar
För att köra denna frontend krävs att webbtjänsten (API:et) från Uppgift 1 är startad och tillgänglig.

### Installation
1. Klona detta repository:
   ```bash
   git clone [https://github.com/Jwcub/auth_frontend.git](https://github.com/Jwcub/auth_frontend.git)
   ```

## Tillgänglig
Applikationen finns tillgänglig vid: [https://frontendaut.netlify.app/](https://frontendaut.netlify.app/)