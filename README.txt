BLACKSPIRE WEBSITE — UPDATED BUILD

Changes made:
- Renamed the GODZ venture to "Ghost Model Studio".
- Replaced the crowded header logo image with the clean spire icon so it aligns with the BLACKSPIRE wordmark.
- Contact enquiries and login email records are saved to an Excel workbook by server.py.
- Login now waits for the save to succeed; it will show an error instead of silently pretending the record was saved.

RUN LOCALLY (Excel storage):
1. Install Python 3.
2. Open a terminal in this folder.
3. Run: pip install -r requirements.txt
4. Run: python server.py
5. Open http://localhost:3000
6. The workbook is created at data/blackspire-data.xlsx. It contains Enquiries and Logins sheets.
   Passwords are never stored.

IMPORTANT HOSTING NOTE:
This project uses a small Python server to write the Excel file. A normal static Vercel deployment
does not run server.py and cannot persist a local Excel workbook. If you deploy this exact Excel
workflow, host it on a Python-capable service (for example Render) using a persistent disk.
If you want to keep it on Vercel, the form API must be connected to an external database or
Google Sheets service and configured with its credentials; that connection is not configured
in this ZIP, so do not publish it as a working live form on Vercel yet.

Before public launch, verify the company details, venture descriptions, privacy notice and contact process.
