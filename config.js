// Google Sheets Configuration
const CONFIG = {
    // Your Google Sheet ID
    SHEET_ID: '1RNPJcs7g1yUqJ2XXBBE3jYy5LWNBO0Glq6Zfud3vPhI',
    
    // Sheet name (the tab name in your spreadsheet)
    SHEET_NAME: 'Sheet1',
    
    // Column mappings - adjust these based on your sheet structure
    COLUMNS: {
        pb_id: 'A',           // Column with PB# (e.g., "PB#001")
        month: 'B',           // Column with Month (e.g., "January", "2024-01")
        status: 'C'           // Column with Current Status (e.g., "Completed", "Pending")
    },
    
    // Status values (case-insensitive)
    STATUS: {
        completed: 'Completed',
        remaining: ['Pending', 'In Progress', 'Open']
    }
};
