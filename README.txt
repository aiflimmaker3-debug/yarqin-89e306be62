YARQIN APP MAKER 1.0.0 — WINDOWS EXE
App: My App
App ID: com.example.myapp
Version: 1.0.0

Electron project. Produces an installer (Setup.exe) and a portable .exe.

AUTOMATIC BUILD (GitHub Actions, windows-latest):
1. Create a NEW (private) GitHub repository.
2. Upload ALL files INSIDE WindowsElectronProject (including .github) to the repository root. (APP MAKER can do this for you.)
3. Open Actions > "Build Windows EXE", wait until green, download artifact my-app-windows.

LOCAL BUILD (Windows, Node.js 20+): run build-local.bat  (or: npm install && npm run dist). Output is in dist/.
TEST WITHOUT BUILDING: npm install && npm start

The build is unsigned; Windows SmartScreen may warn ("More info > Run anyway") for private use.
