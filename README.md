# QRGenerator

Ez egy React Native alkalmazás, amely lehetővé teszi QR-kódok generálását a megadott URL alapján.

## Főbb funkciók
- Felhasználó megadhat egy URL-t egy beviteli mezőben
- Egy gomb megnyomásával generálhat QR-kódot
- Ha nincs beírt URL, akkor egy alapértelmezett szöveg jelenik meg a QR-kód helyén
- Stílusos, modern UI sötét háttérrel és zöld dizájnelemekkel

## Használt technológiák
- **React Native**: Az alkalmazás fő keretrendszere
- **Expo**: Fejlesztési és futtatási környezet
- **react-native-qrcode-svg**: A QR-kód generálásához használt könyvtár

## Telepítés és futtatás
1. Klónozd a repository-t:
   ```bash
   git clone https://github.com/dajkagabi/QRGenerator-master.git
   cd QRGenerator-master
   ```
2. Telepítsd a szükséges csomagokat:
   ```bash
   npm install
   ```
3. Indítsd el az alkalmazást Expo segítségével:
   ```bash
   npx expo start
   ```

## Fájlstruktúra
- **App.js**: Az alkalmazás fő komponense
- **styles**: A React Native `StyleSheet` segítségével definiált stílusok
- **components**: Az UI elemek, például a QR-kód megjelenítése és az input mező kezelése

## Használat
1. Indítsd el az alkalmazást
2. Írj be egy URL-t a beviteli mezőbe
3. Nyomd meg a "Generate QR" gombot
4. A generált QR-kód megjelenik a képernyőn

## Képernyőképek



## Licenc
Ez a projekt nyílt forráskódú, és szabadon felhasználható.

