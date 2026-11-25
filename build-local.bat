@echo off
rem Requires Node.js 20+
call npm install
call npm run dist
echo Output: dist\
pause
