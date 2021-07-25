@ECHO off
SETLOCAL

CD /D %~dp0
sass src\style.scss style.css --no-source-map

ENDLOCAL
