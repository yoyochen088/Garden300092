// ════════════════════════════════════════════
//  ♡十里桃花♡ - 設定檔
// ════════════════════════════════════════════
const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbz5PxkgkbwSmZUgNWajhHNsYr6P57hWNrwoDO6ASNxrIG5aP8awOzKcVdmwXqnkt1-k/exec';
const SHEET_ID        = '1LB4pyFOF18TzKkX0oe0GWTOfPT46NtDkYnInBmkhGgI';
const API_KEY         = 'AIzaSyBwkQMXg2ImpWENV2SQKnCXRlXbuuTzxnA'; // 填入十里桃花的 Google Sheets API Key

// 前台讀取設定
const SHEET_CONFIG = {
  apiKey:  API_KEY,
  sheetId: SHEET_ID,
  ranges:  ['flowers!A1:Z', 'members!A1:Z', 'ownership!A1:Z']
};

