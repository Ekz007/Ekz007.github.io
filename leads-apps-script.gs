/**
 * Leads do portfólio → Google Sheets
 * Script ACOPLADO à planilha (Extensões → Apps Script). Usa a planilha ativa,
 * então NÃO precisa de ID. Recebe o POST do form em index.html e grava uma linha.
 *
 * Publicar: Implantar → Nova implantação → Tipo "App da Web"
 *   - Executar como: Eu
 *   - Quem tem acesso: Qualquer pessoa
 *   Copie a URL que termina em /exec e cole em LEADS_ENDPOINT no index.html.
 */

var SHEET_NAME = 'Leads';
var HEADERS = ['Data/Hora', 'Nome', 'Telefone', 'Orçamento', 'Idioma', 'Origem'];

function doPost(e) {
  try {
    var p = (e && e.parameter) || {};
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);

    // cria o cabeçalho na primeira vez
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(HEADERS);
      sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold');
      sheet.setFrozenRows(1);
    }

    sheet.appendRow([
      new Date(),
      p.name || '',
      p.phone || '',
      p.budget || '',
      p.lang || '',
      p.source || ''
    ]);

    return json({ ok: true });
  } catch (err) {
    return json({ ok: false, error: String(err) });
  }
}

// GET só pra testar no navegador que a implantação está no ar
function doGet() {
  return json({ ok: true, service: 'leads-portfolio' });
}

function json(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
