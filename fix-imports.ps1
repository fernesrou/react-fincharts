# Script para consolidar imports duplicados de @react-fincharts/charts
$files = Get-ChildItem -Path "packages/stories/src" -Recurse -Filter "*.tsx"

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    
    # Solo procesar archivos que tienen imports duplicados de @react-fincharts/charts
    if ($content -match 'from "@react-fincharts/charts"') {
        Write-Host "Procesando: $($file.Name)"
        
        # Encontrar todas las líneas de import de @react-fincharts/charts
        $lines = $content -split "`n"
        $newLines = @()
        $imports = @()
        $inImportSection = $true
        
        foreach ($line in $lines) {
            if ($line -match 'import.*from "@react-fincharts/charts"') {
                # Extraer los imports de esta línea
                if ($line -match 'import\s*{\s*([^}]+)\s*}\s*from\s*"@react-fincharts/charts"') {
                    $importList = $matches[1] -split ',' | ForEach-Object { $_.Trim() }
                    $imports += $importList
                }
            }
            elseif ($line -match '^import' -or $line.Trim() -eq '') {
                # Otras líneas de import o líneas vacías
                if ($imports.Count -gt 0 -and -not ($line -match 'from "@react-fincharts/charts"')) {
                    # Agregar el import consolidado antes de continuar
                    $consolidatedImport = "import {`n    " + ($imports -join ",`n    ") + ",`n} from `"@react-fincharts/charts`";"
                    $newLines += $consolidatedImport
                    $imports = @()
                    $inImportSection = $false
                }
                if (-not ($line -match 'from "@react-fincharts/charts"')) {
                    $newLines += $line
                }
            }
            else {
                # No es una línea de import
                if ($imports.Count -gt 0) {
                    # Agregar el import consolidado
                    $consolidatedImport = "import {`n    " + ($imports -join ",`n    ") + ",`n} from `"@react-fincharts/charts`";"
                    $newLines += $consolidatedImport
                    $imports = @()
                }
                $newLines += $line
                $inImportSection = $false
            }
        }
        
        # Si aún hay imports pendientes
        if ($imports.Count -gt 0) {
            $consolidatedImport = "import {`n    " + ($imports -join ",`n    ") + ",`n} from `"@react-fincharts/charts`";"
            $newLines += $consolidatedImport
        }
        
        # Escribir el archivo modificado
        $newContent = $newLines -join "`n"
        Set-Content -Path $file.FullName -Value $newContent -Encoding UTF8
    }
}

Write-Host "¡Proceso completado!"
