@ECHO OFF
IF NOT "%~f0" == "~f0" GOTO :WinNT
@"c:\RailsInstaller\Ruby2.2.0\bin\ruby.exe" "c:/Repositorios/letsplay_dev/vendor/bundle/ruby/2.2.0/bin/rake" %1 %2 %3 %4 %5 %6 %7 %8 %9
GOTO :EOF
:WinNT
@"c:\RailsInstaller\Ruby2.2.0\bin\ruby.exe" "%~dpn0" %*
