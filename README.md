# Literature - Card game

An online multiplayer card game power by react-native

For initial setup use the below commands after doing yarn install

`npm install -g react-native typescript`

`mkdir android/app/src/main/assets`

`react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res`

`react-native link react-native-gesture-handler`

To run the app


`yarn start` starts the package server

`react-native run-android` installs apk in the connected device or virtual device