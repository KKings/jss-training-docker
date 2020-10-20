# Clean data folders
Get-ChildItem -Path (Join-Path $PSScriptRoot "\data\cm") -Exclude ".gitkeep" -Recurse | Remove-Item -Force -Recurse -Verbose
Get-ChildItem -Path (Join-Path $PSScriptRoot "\data\mssql") -Exclude ".gitkeep" -Recurse | Remove-Item -Force -Recurse -Verbose
Get-ChildItem -Path (Join-Path $PSScriptRoot "\data\solr") -Exclude ".gitkeep" -Recurse | Remove-Item -Force -Recurse -Verbose