# Signal Echo personal app

React and Vite foundation for the personal Signal Echo website. This is the first reviewable delivery. The first page supports the Harbor Lens locale set and opens official Spanish guidance. The signed-in and scam-check flows are planned in the [full specification](https://github.com/Signal-Echo-Security/hub-signalecho/blob/develop/SPECS-FULL-SIGNAL-ECHO.md).

After assembling the hub checkout and building its contracts library:

```sh
yarn install --immutable
yarn build
yarn dev
```

Preview Spanish with /?lang=es-ES or an RTL locale with /?lang=ar. The private reporting form stays in browser memory and prints a Spanish-language draft. The menu links to the example message check, the draft, the example community alert and the official channels. Community submissions and sharing are simulated locally in this frontend prototype. Android packaging with Tauri follows review of the web foundation.
