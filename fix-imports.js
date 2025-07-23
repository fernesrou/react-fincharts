const fs = require("fs");
const path = require("path");
const glob = require("glob");

// Función para consolidar imports duplicados de @react-fincharts/charts
function consolidateImports(filePath) {
    const content = fs.readFileSync(filePath, "utf8");
    const lines = content.split("\n");

    // Encontrar todas las líneas de import de @react-fincharts/charts
    const importLines = [];
    const nonImportLines = [];
    let importStarted = false;
    let allImports = [];

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];

        if (line.includes('from "@react-fincharts/charts"')) {
            // Extraer los imports
            const match = line.match(/import\s*{([^}]+)}\s*from\s*"@react-fincharts\/charts"/);
            if (match) {
                const imports = match[1].split(",").map((imp) => imp.trim());
                allImports.push(...imports);
            }
        } else if (line.includes("import") && !line.includes("@react-fincharts/charts")) {
            nonImportLines.push(line);
        } else if (!line.includes("import") || line.trim() === "") {
            if (importStarted) {
                // Hemos terminado con los imports, agregar el import consolidado
                if (allImports.length > 0) {
                    const consolidatedImport = `import {\n    ${allImports.join(",\n    ")},\n} from "@react-fincharts/charts";`;
                    nonImportLines.push(consolidatedImport);
                    allImports = []; // Reset para evitar duplicación
                    importStarted = false;
                }
            }
            nonImportLines.push(line);
        }

        if (line.includes("import") && !importStarted) {
            importStarted = true;
        }
    }

    // Si aún hay imports pendientes, agregarlos
    if (allImports.length > 0) {
        const consolidatedImport = `import {\n    ${allImports.join(",\n    ")},\n} from "@react-fincharts/charts";`;
        // Insertar después de los otros imports
        let insertIndex = 0;
        for (let i = 0; i < nonImportLines.length; i++) {
            if (nonImportLines[i].includes("import")) {
                insertIndex = i + 1;
            }
        }
        nonImportLines.splice(insertIndex, 0, consolidatedImport);
    }

    return nonImportLines.join("\n");
}

// Buscar todos los archivos .tsx en stories
const files = glob.sync("packages/stories/src/**/*.tsx");

console.log(`Procesando ${files.length} archivos...`);

files.forEach((file) => {
    const content = fs.readFileSync(file, "utf8");
    if (content.includes("@react-fincharts/charts")) {
        console.log(`Consolidando imports en: ${file}`);
        const newContent = consolidateImports(file);
        fs.writeFileSync(file, newContent);
    }
});

console.log("¡Proceso completado!");
