/**
 * Configuration file for external endpoints and integrations.
 * 
 * TO CONNECT YOUR GOOGLE SHEET:
 * 1. Open your Google Sheet -> Extensions -> Apps Script.
 * 2. Paste the provided Apps Script code (see instructions in README or below).
 * 3. Click 'Deploy' -> 'New Deployment' -> Select type 'Web app'.
 * 4. Set 'Execute as' = 'Me' and 'Who has access' = 'Anyone'.
 * 5. Copy the generated Web App URL and paste it below into GOOGLE_APPS_SCRIPT_URL
 *    (or set VITE_APPS_SCRIPT_URL in your environment).
 */

export const GOOGLE_APPS_SCRIPT_URL: string =
  (import.meta.env.VITE_APPS_SCRIPT_URL as string) || '';
