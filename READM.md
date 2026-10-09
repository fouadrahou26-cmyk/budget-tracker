
---

## How to Run
1. Download the folder.
2. Open `index.html` in your browser.
   - No installation needed.

> Note: Some browsers may block `crypto.randomUUID()` in very old versions. Most modern browsers support it.

---

## How Data is Saved
- Transactions are stored in LocalStorage under:
  - `dz_budget_tracker_v1`
- Schema:
  - `transactions: [{ id, type, amount, category, date, note }]`
  - `settings: { monthlyBudget, currency: { mode }, theme, lang }`

Data stays on your device — nothing is sent to any server.

---

## Technologies Used
- HTML5
- CSS3 (responsive, modern UI, RTL support)
- JavaScript (modular functions, LocalStorage)
- Chart.js (charts)

---

## Currency
Base currency is **DZD (Algerian Dinar)**.
Numbers are formatted with `Intl.NumberFormat` and the display mode can be changed in Settings:
- Code: `12,000 DZD`
- Prefix: `DZD 12,000`
- Suffix: `12,000 DZD`

---

## Usage
1. Go to **Dashboard**
2. Add Income / Expense
3. Check **Transactions** for history, search and filters
4. Open **Statistics** for charts
5. Export CSV in **Summary & Reports**
6. Customize language/theme/budget in **Settings**
