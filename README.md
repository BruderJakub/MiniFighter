# Pirate Cove: going online

The game is plain files, so GitHub Pages can host it. Online play (player IDs, saved progress, admin roles, friend battles and ranked) runs on a free Firebase project.

Files:
- `index.html`: the whole game
- `config.js`: your Firebase settings and your owner ID
- `database.rules.json`: who may read and write what (paste this into Firebase)
- `.nojekyll`: tells GitHub Pages to serve the files as they are

## 1. Put the game on GitHub Pages

1. Create a new repository on GitHub (it can be private if you have GitHub Pro; otherwise public).
2. Upload all four files to the repository root (Add file > Upload files > Commit).
3. Settings > Pages > Build and deployment > Source: "Deploy from a branch", branch `main`, folder `/ (root)` > Save.
4. After a minute your game is at `https://YOUR-NAME.github.io/REPO-NAME/`. It already works offline at this point (vs Bot, progress saved in the browser).

## 2. Create the Firebase project (free)

1. Go to https://console.firebase.google.com > Add project. Google Analytics is not needed.
2. Build > Authentication > Get started > Sign-in method > enable **Anonymous**.
3. Authentication > Settings > Authorized domains > Add domain > `YOUR-NAME.github.io`.
4. Build > Realtime Database > Create database. Pick a location close to you, then start in **locked mode**.
5. Project settings (gear icon) > General > Your apps > Web (`</>`) > register an app (no hosting needed). Copy the `firebaseConfig` values into `config.js`. Check that `databaseURL` is included; it is shown on the Realtime Database page.
6. Upload the changed `config.js` to GitHub.

## 3. Make yourself the owner

1. Open your game on the GitHub Pages link and tap your name (top left) to open the profile. Your 8-character **Player ID** is shown there.
2. Put that ID in `config.js` as `ownerCode` and upload it again.
3. In `database.rules.json`, replace `YOURCODE` with the same ID. Then in Firebase go to Realtime Database > Rules, paste the whole file and click **Publish**.
4. Reload the game. Your profile now says **Owner**.

## Managing admins

In your profile, type a friend's Player ID and click **Make admin**, or **Remove admin** to take it away. The list below shows everyone who is an admin, with a ✕ button to remove each one. Changes reach your friend instantly, even mid-game.

Admins and the owner see the **Admin panel** in their profile (top up resources, max characters, unlock characters, trophies). The database only accepts admin changes from your owner account, so nobody can make themselves an admin.

## Playing together

- **Friendly**: one player taps Play with "Friendly" selected > Create room and shares the 5-letter code; the other chooses Friendly > types the code > Join.
- **Ranked**: tap Play with "Ranked". If someone else is searching within 25 seconds you play each other for trophies, otherwise you play the bot.
- Each round you have 45 seconds to place your crew; then press Ready. When both are ready, the round plays out the same on both screens.
- Leaving a match, or disconnecting for more than 12 seconds, gives the win to the other player.

## Good to know

- Player IDs come from Firebase's anonymous sign-in, which belongs to one browser. Clearing the browser's site data or switching device gives you a new ID. Signing in with Google could be added later so an ID can follow you between devices.
- Progress is saved online and is not stored in the browser, so it can't be edited there. The game logic still runs on each player's device, though, so a determined programmer could change their own save with the browser tools. Fully cheat-proof saves would need Firebase Cloud Functions, which require the paid Blaze plan.
- Free Spark plan limits (100 simultaneous connections, 1 GB stored, 10 GB downloaded per month) are far more than a group of friends will use.
- Test online play without Firebase: open the game with `?net=local` in two tabs of the same browser. They share a pretend server, so you can try rooms, ranked and roles. Add `&owner=YOURID` to make that ID the owner.
