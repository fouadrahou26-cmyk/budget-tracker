/* DZ Budget Tracker - LocalStorage SPA
   - No backend
   - i18n: ar/extra RTL, fr/en
   - Chart.js auto-updates
*/

(() => {
  'use strict';

  const STORAGE_KEY = 'dz_budget_tracker_v1';

  const i18n = {
    ar: {
      appName: 'DZ Budget Tracker',
      appSubtitle: 'تتبّع الدخل والمصاريف والميزانية — محليًا فقط.',
      theme: 'الثيم',
      language: 'اللغة',
      dashboard: 'لوحة التحكم',
      transactions: 'العمليات',
      statistics: 'الإحصائيات',
      reports: 'ملخص وتقارير',
      settings: 'الإعدادات',

      dashboardTitle: 'لوحة التحكم',
      currentBalance: 'الرصيد الحالي',
      currentBalanceHint: 'الدخل − المصاريف',
      incomeThisMonth: 'إجمالي الدخل (هذا الشهر)',
      incomeHint: 'كل الدخل الذي تم إضافته هذا الشهر',
      expenseThisMonth: 'إجمالي المصاريف (هذا الشهر)',
      expenseHint: 'كل المصاريف التي تم إضافتها هذا الشهر',

      monthlyBudget: 'الميزانية الشهرية',
      budgetSet: 'الميزانية',
      spentLabel: 'تم إنفاقه',
      remainingLabel: 'المتبقي',
      budgetProgress: 'مستعمل',
      addIncome: 'إضافة دخل',
      addIncomeFormTitle: 'إضافة دخل',
      incomeBadge: 'دخل',
      addIncomeBtn: 'إضافة دخل',
      source: 'المصدر',
      srcSalary: 'راتب',
      srcFreelance: 'عمل حر',
      srcBusiness: 'تجارة/عمل',
      srcGift: 'هدية',
      srcOther: 'أخرى',

      addExpenseFormTitle: 'إضافة مصروف',
      expenseBadge: 'مصروف',
      addExpenseBtn: 'إضافة مصروف',
      category: 'التصنيف',
      catFood: 'طعام',
      catTransport: 'مواصلات',
      catShopping: 'تسوق',
      catBills: 'فواتير',
      catHealth: 'صحة',
      catEducation: 'تعليم',
      catEntertainment: 'ترفيه',
      catOther: 'أخرى',

      date: 'التاريخ',
      note: 'ملاحظة',
      amount: 'المبلغ',

      transactionsTitle: 'العمليات',
      search: 'بحث',
      filterType: 'تصفية حسب النوع',
      filterCategory: 'تصفية حسب التصنيف/المصدر',
      filterDate: 'تصفية حسب التاريخ',
      allTypes: 'الكل',
      incomeLabel: 'دخل',
      expenseLabel: 'مصروف',
      allCategories: 'الكل',

      type: 'النوع',
      actions: 'الإجراءات',
      edit: 'تعديل',
      delete: 'حذف',

      noTransactionsTitle: 'لا توجد عمليات بعد',
      noTransactionsDesc: 'أضف أول دخل أو مصروف لتظهر هنا السجلات.',
      addFirstBtn: 'أضف أول عملية',

      statisticsTitle: 'الإحصائيات',
      expenseByCategory: 'المصاريف حسب التصنيف',
      monthlyExpenses: 'مصاريف الأشهر',
      incomeVsExpenses: 'الدخل مقابل المصاريف',
      tipsTitle: 'نصيحة',
      tipsText: 'الرسوم تتحدث تلقائيًا عند إضافة/تعديل/حذف عمليات.',

      reportsTitle: 'ملخص وتقارير',
      exportData: 'تصدير البيانات',
      exportCsv: 'تصدير CSV',
      exportHint: 'يتم تصدير كل العمليات إلى ملف CSV على جهازك.',

      totalIncome: 'إجمالي الدخل',
      totalExpenses: 'إجمالي المصاريف',
      currentBalanceReport: 'الرصيد الحالي',
      numTransactions: 'عدد العمليات',
      highestExpenseCategory: 'أعلى تصنيف مصاريف',
      avgDailySpending: 'متوسط المصروف اليومي',

      preferences: 'التفضيلات',
      dataManagement: 'إدارة البيانات',
      monthlyBudgetInputLabel: 'الميزانية الشهرية',
      currencyDisplay: 'عرض العملة',
      currencyCode: 'اعرض الكود (DZD)',
      currencySuffix: 'لاحقة (50,000 DZD)',
      currencyPrefix: 'سَبْق (DZD 50,000)',
      saveBtn: 'حفظ',

      clearAllData: 'مسح كل البيانات',
      clearAllWarning: 'سيتم حذف بياناتك المحلية بشكل دائم.',
      loadDemoData: 'تحميل بيانات تجريبية',

      localStorageNote: 'بياناتك محفوظة محليًا على جهازك.',

      confirmTitle: 'تأكيد',
      confirmText: 'هل أنت متأكد؟',
      cancelBtn: 'إلغاء',
      deleteBtn: 'حذف',

      editModalHint: 'قم بتحديث الحقول ثم احفظ.',
      saveChanges: 'حفظ التغييرات',

      exceededBudget: 'لقد تجاوزت ميزانيتك الشهرية.',
      zeroValue: '—',
    },
    fr: {
      appName: 'DZ Budget Tracker',
      appSubtitle: 'Suivez vos revenus, dépenses et budget — localement.',
      theme: 'Thème',
      language: 'Langue',
      dashboard: 'Tableau de bord',
      transactions: 'Transactions',
      statistics: 'Statistiques',
      reports: 'Résumé & Rapports',
      settings: 'Paramètres',

      dashboardTitle: 'Tableau de bord',
      currentBalance: 'Solde actuel',
      currentBalanceHint: 'Revenus − Dépenses',
      incomeThisMonth: 'Revenus (Ce mois-ci)',
      incomeHint: 'Tous les revenus ajoutés ce mois-ci',
      expenseThisMonth: 'Dépenses (Ce mois-ci)',
      expenseHint: 'Toutes les dépenses ajoutées ce mois-ci',

      monthlyBudget: 'Budget mensuel',
      budgetSet: 'Budget',
      spentLabel: 'Dépensé',
      remainingLabel: 'Restant',
      budgetProgress: 'Utilisé',
      addIncome: 'Ajouter un revenu',
      addIncomeFormTitle: 'Ajouter un revenu',
      incomeBadge: 'Revenu',
      addIncomeBtn: 'Ajouter le revenu',
      source: 'Source',
      srcSalary: 'Salaire',
      srcFreelance: 'Freelance',
      srcBusiness: 'Entreprise',
      srcGift: 'Cadeau',
      srcOther: 'Autre',

      addExpenseFormTitle: 'Ajouter une dépense',
      expenseBadge: 'Dépense',
      addExpenseBtn: 'Ajouter la dépense',
      category: 'Catégorie',
      catFood: 'Alimentation',
      catTransport: 'Transport',
      catShopping: 'Achats',
      catBills: 'Factures',
      catHealth: 'Santé',
      catEducation: 'Éducation',
      catEntertainment: 'Divertissement',
      catOther: 'Autre',

      date: 'Date',
      note: 'Note',
      amount: 'Montant',

      transactionsTitle: 'Transactions',
      search: 'Recherche',
      filterType: 'Filtrer par type',
      filterCategory: 'Filtrer par catégorie/source',
      filterDate: 'Filtrer par date',
      allTypes: 'Tous',
      incomeLabel: 'Revenu',
      expenseLabel: 'Dépense',
      allCategories: 'Toutes',

      type: 'Type',
      actions: 'Actions',
      edit: 'Modifier',
      delete: 'Supprimer',

      noTransactionsTitle: 'Aucune transaction pour l’instant',
      noTransactionsDesc: 'Ajoutez votre premier revenu ou dépense pour voir l’historique.',
      addFirstBtn: 'Ajouter la première',

      statisticsTitle: 'Statistiques',
      expenseByCategory: 'Dépenses par catégorie',
      monthlyExpenses: 'Dépenses mensuelles',
      incomeVsExpenses: 'Revenus vs Dépenses',
      tipsTitle: 'Astuce',
      tipsText: 'Les graphiques se mettent à jour automatiquement après ajout/modification/suppression.',

      reportsTitle: 'Résumé & Rapports',
      exportData: 'Exporter les données',
      exportCsv: 'Exporter CSV',
      exportHint: 'Toutes les transactions seront exportées en CSV sur votre appareil.',

      totalIncome: 'Total des revenus',
      totalExpenses: 'Total des dépenses',
      currentBalanceReport: 'Solde actuel',
      numTransactions: 'Nombre de transactions',
      highestExpenseCategory: 'Catégorie de dépense la plus élevée',
      avgDailySpending: 'Dépense quotidienne moyenne',

      preferences: 'Préférences',
      dataManagement: 'Gestion des données',
      monthlyBudgetInputLabel: 'Budget mensuel',
      currencyDisplay: 'Affichage de la devise',
      currencyCode: 'Afficher le code (DZD)',
      currencySuffix: 'Suffixe (50,000 DZD)',
      currencyPrefix: 'Préfixe (DZD 50,000)',
      saveBtn: 'Enregistrer',

      clearAllData: 'Effacer toutes les données',
      clearAllWarning: 'Cela supprimera définitivement vos données locales.',
      loadDemoData: 'Charger des données démo',

      localStorageNote: 'Vos données sont stockées localement sur votre appareil.',

      confirmTitle: 'Confirmation',
      confirmText: 'Êtes-vous sûr ?',
      cancelBtn: 'Annuler',
      deleteBtn: 'Supprimer',

      editModalHint: 'Mettez à jour les champs puis enregistrez.',
      saveChanges: 'Enregistrer les modifications',

      exceededBudget: 'Vous avez dépassé votre budget mensuel.',
      zeroValue: '—',
    },
    en: {
      appName: 'DZ Budget Tracker',
      appSubtitle: 'Track income, expenses & budget — locally.',
      theme: 'Theme',
      language: 'Language',
      dashboard: 'Dashboard',
      transactions: 'Transactions',
      statistics: 'Statistics',
      reports: 'Summary & Reports',
      settings: 'Settings',

      dashboardTitle: 'Dashboard',
      currentBalance: 'Current Balance',
      currentBalanceHint: 'Income − Expenses',
      incomeThisMonth: 'Income (This Month)',
      incomeHint: 'All income added this month',
      expenseThisMonth: 'Expenses (This Month)',
      expenseHint: 'All expenses added this month',

      monthlyBudget: 'Monthly Budget',
      budgetSet: 'Budget',
      spentLabel: 'Spent',
      remainingLabel: 'Remaining',
      budgetProgress: 'Used',
      addIncome: 'Add Income',
      addIncomeFormTitle: 'Add Income',
      incomeBadge: 'Income',
      addIncomeBtn: 'Add Income',
      source: 'Source',
      srcSalary: 'Salary',
      srcFreelance: 'Freelance',
      srcBusiness: 'Business',
      srcGift: 'Gift',
      srcOther: 'Other',

      addExpenseFormTitle: 'Add Expense',
      expenseBadge: 'Expense',
      addExpenseBtn: 'Add Expense',
      category: 'Category',
      catFood: 'Food',
      catTransport: 'Transport',
      catShopping: 'Shopping',
      catBills: 'Bills',
      catHealth: 'Health',
      catEducation: 'Education',
      catEntertainment: 'Entertainment',
      catOther: 'Other',

      date: 'Date',
      note: 'Note',
      amount: 'Amount',

      transactionsTitle: 'Transactions',
      search: 'Search',
      filterType: 'Filter by Type',
      filterCategory: 'Filter by Category/Source',
      filterDate: 'Filter by Date',
      allTypes: 'All',
      incomeLabel: 'Income',
      expenseLabel: 'Expense',
      allCategories: 'All',

      type: 'Type',
      actions: 'Actions',
      edit: 'Edit',
      delete: 'Delete',

      noTransactionsTitle: 'No transactions yet',
      noTransactionsDesc: 'Add your first income or expense to see your history.',
      addFirstBtn: 'Add first one',

      statisticsTitle: 'Statistics',
      expenseByCategory: 'Expense by Category',
      monthlyExpenses: 'Monthly Expenses',
      incomeVsExpenses: 'Income vs Expenses',
      tipsTitle: 'Tip',
      tipsText: 'Charts update automatically when you add, edit, or delete transactions.',

      reportsTitle: 'Summary & Reports',
      exportData: 'Export Data',
      exportCsv: 'Export CSV',
      exportHint: 'This exports all transactions to a CSV file on your device.',

      totalIncome: 'Total Income',
      totalExpenses: 'Total Expenses',
      currentBalanceReport: 'Current Balance',
      numTransactions: 'Number of Transactions',
      highestExpenseCategory: 'Highest Expense Category',
      avgDailySpending: 'Average Daily Spending',

      preferences: 'Preferences',
      dataManagement: 'Data Management',
      monthlyBudgetInputLabel: 'Monthly Budget',
      currencyDisplay: 'Currency Display',
      currencyCode: 'Show Code (DZD)',
      currencySuffix: 'Suffix (50,000 DZD)',
      currencyPrefix: 'Prefix (DZD 50,000)',
      saveBtn: 'Save',

      clearAllData: 'Clear All Data',
      clearAllWarning: 'This will permanently remove your local data.',
      loadDemoData: 'Load Demo Data',

      localStorageNote: 'Your data is stored locally on your device.',

      confirmTitle: 'Confirm',
      confirmText: 'Are you sure?',
      cancelBtn: 'Cancel',
      deleteBtn: 'Delete',

      editModalHint: 'Update fields and save.',
      saveChanges: 'Save Changes',

      exceededBudget: 'You have exceeded your monthly budget.',
      zeroValue: '—',
    }
  };

  const DEFAULT_SETTINGS = {
    monthlyBudget: 50000,
    currency: { mode: 'suffix' }, // code | suffix | prefix
    theme: 'dark', // dark | light
    lang: 'ar',
  };

  const DEFAULT_DATA = {
    transactions: [],
    settings: DEFAULT_SETTINGS,
  };

  const els = {
    // nav & sections
    navLinks: Array.from(document.querySelectorAll('.nav-link')),
    bottomNavLinks: Array.from(document.querySelectorAll('.bottom-nav-link')),
    pages: {
      dashboard: document.getElementById('section-dashboard'),
      transactions: document.getElementById('section-transactions'),
      statistics: document.getElementById('section-statistics'),
      reports: document.getElementById('section-reports'),
      settings: document.getElementById('section-settings'),
    },

    // theme/lang
    langSelect: document.getElementById('langSelect'),
    themeToggle: document.getElementById('themeToggle'),
    themeToggleIcon: document.getElementById('themeToggleIcon'),

    // dashboard metrics
    currentBalance: document.getElementById('currentBalance'),
    incomeThisMonth: document.getElementById('incomeThisMonth'),
    expenseThisMonth: document.getElementById('expenseThisMonth'),
    budgetValue: document.getElementById('budgetValue'),
    budgetSpent: document.getElementById('budgetSpent'),
    budgetRemaining: document.getElementById('budgetRemaining'),
    budgetPercent: document.getElementById('budgetPercent'),
    budgetBar: document.getElementById('budgetBar'),
    budgetWarning: document.getElementById('budgetWarning'),

    // forms
    incomeForm: document.getElementById('incomeForm'),
    expenseForm: document.getElementById('expenseForm'),
    incomeAmount: document.getElementById('incomeAmount'),
    incomeSource: document.getElementById('incomeSource'),
    incomeDate: document.getElementById('incomeDate'),
    incomeNote: document.getElementById('incomeNote'),
    incomeFormError: document.getElementById('incomeFormError'),

    expenseAmount: document.getElementById('expenseAmount'),
    expenseCategory: document.getElementById('expenseCategory'),
    expenseDate: document.getElementById('expenseDate'),
    expenseNote: document.getElementById('expenseNote'),
    expenseFormError: document.getElementById('expenseFormError'),

    // transactions filters & table
    searchInput: document.getElementById('searchInput'),
    typeFilter: document.getElementById('typeFilter'),
    categoryFilter: document.getElementById('categoryFilter'),
    dateFilter: document.getElementById('dateFilter'),
    transactionsBody: document.getElementById('transactionsBody'),
    transactionsEmpty: document.getElementById('transactionsEmpty'),

    // edit modal
    editModal: document.getElementById('editModal'),
    editForm: document.getElementById('editForm'),
    editId: document.getElementById('editId'),
    editType: document.getElementById('editType'),
    editAmount: document.getElementById('editAmount'),
    editCategory: document.getElementById('editCategory'),
    editDate: document.getElementById('editDate'),
    editNote: document.getElementById('editNote'),
    editFormError: document.getElementById('editFormError'),

    // confirm modal
    confirmModal: document.getElementById('confirmModal'),
    confirmText: document.getElementById('confirmText'),
    confirmYesBtn: document.getElementById('confirmYesBtn'),

    // toasts
    toastContainer: document.getElementById('toastContainer'),

    // reports metrics
    totalIncome: document.getElementById('totalIncome'),
    totalExpenses: document.getElementById('totalExpenses'),
    currentBalanceReport: document.getElementById('currentBalanceReport'),
    highestExpenseCategory: document.getElementById('highestExpenseCategory'),
    numTransactions: document.getElementById('numTransactions'),
    avgDailySpending: document.getElementById('avgDailySpending'),

    exportCsvBtn: document.getElementById('exportCsvBtn'),

    // settings
    monthlyBudgetInput: document.getElementById('monthlyBudgetInput'),
    currencyMode: document.getElementById('currencyMode'),
    saveSettingsBtn: document.getElementById('saveSettingsBtn'),
    clearAllBtn: document.getElementById('clearAllBtn'),
    loadDemoDataBtn: document.getElementById('loadDemoDataBtn'),
  };

  let state = loadState();

  // Chart instances
  let chartExpenseByCategory = null;
  let chartMonthlyExpenses = null;
  let chartIncomeVsExpenses = null;

  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return structuredClone(DEFAULT_DATA);
      const parsed = JSON.parse(raw);

      // merge safely
      const merged = {
        transactions: Array.isArray(parsed.transactions) ? parsed.transactions : [],
        settings: {
          ...structuredClone(DEFAULT_SETTINGS),
          ...(parsed.settings || {}),
          currency: { ...DEFAULT_SETTINGS.currency, ...((parsed.settings || {}).currency || {}) }
        }
      };
      // normalize transactions
      merged.transactions = merged.transactions.map(tx => ({
        id: String(tx.id ?? crypto.randomUUID()),
        type: tx.type === 'Expense' ? 'Expense' : 'Income',
        amount: Number(tx.amount || 0),
        category: String(tx.category || ''),
        date: String(tx.date || ''),
        note: String(tx.note || '')
      }));
      return merged;
    } catch {
      return structuredClone(DEFAULT_DATA);
    }
  }

  function saveState() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }

  function getLang() { return state.settings.lang || 'ar'; }

  function applyLanguage(lang) {
    const dict = i18n[lang] || i18n.ar;
    const root = document.documentElement;
    root.lang = lang;
    root.dir = (lang === 'ar') ? 'rtl' : 'ltr';

    // Update texts based on [data-i18n]
    document.querySelectorAll('[data-i18n]').forEach(node => {
      const key = node.getAttribute('data-i18n');
      if (!key) return;
      const value = dict[key];
      if (value !== undefined) node.textContent = value;
    });

    // Also update option labels
    document.querySelectorAll('option[data-i18n]').forEach(opt => {
      const k = opt.getAttribute('data-i18n');
      if (dict[k] !== undefined) opt.textContent = dict[k];
    });

    // Budget warning message placeholder changes
    // (handled in UI update)
  }

  function t(key) {
    const dict = i18n[getLang()] || i18n.ar;
    return dict[key] ?? key;
  }

  function applyTheme(theme) {
    document.documentElement.dataset.theme = theme === 'light' ? 'light' : 'dark';
    const isLight = theme === 'light';
    els.themeToggleIcon.textContent = isLight ? '☀️' : '🌙';
  }

  function formatMoney(amount) {
    const n = Number(amount || 0);
    const mode = state.settings.currency?.mode || 'suffix';
    const locale = (getLang() === 'ar') ? 'ar-DZ' : (getLang() === 'fr' ? 'fr-DZ' : 'en-DZ');
    // We keep "DZD" as currency code, user can control placement mode.
    const formatted = new Intl.NumberFormat(locale, { maximumFractionDigits: 0 }).format(n);
    if (mode === 'code') return formatted + ' DZD';
    if (mode === 'prefix') return `DZD ${formatted}`;
    return `${formatted} DZD`;
  }

  function parseAmount(input) {
    // Accept "50,000" "50000" "50.000" by removing separators.
    const raw = String(input ?? '').trim();
    if (!raw) return NaN;

    // Keep digits and separators
    // Strategy: remove commas and spaces; if both '.' and ',' exist, assume thousand separators.
    const cleaned = raw
      .replace(/\s/g, '')
      .replace(/,/g, '')
      .replace(/،/g, '')
      .replace(/’/g, '')
      .replace(/ـ/g, '')
      .replace(/[^\d.]/g, '');

    // If multiple dots, keep last as decimal separator and remove others
    const parts = cleaned.split('.');
    const normalized = (parts.length <= 1) ? cleaned : parts.slice(0, -1).join('') + '.' + parts[parts.length - 1];

    const val = Number(normalized);
    return val;
  }

  function todayISO() {
    const d = new Date();
    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const dd = String(d.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
  }

  function monthKeyFromISO(isoDate) {
    // isoDate: YYYY-MM-DD -> YYYY-MM
    if (!isoDate || isoDate.length < 7) return '';
    return isoDate.slice(0, 7);
  }

  function compareDateDesc(a, b) {
    return (a.date > b.date) ? -1 : (a.date < b.date) ? 1 : 0;
  }

  function getCurrentMonthKey() {
    return monthKeyFromISO(todayISO());
  }

  function isValidISODate(iso) {
    // basic validation for YYYY-MM-DD
    return typeof iso === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(iso);
  }

  function normalizeTxCategoryForDisplay(tx) {
    // For Income: category acts as Source. For Expense: category is Category.
    return tx.category || '';
  }

  function upsertCategoryFilterOptions() {
    // Build categories based on current transactions + fixed list so filter remains usable.
    const incomeSources = ['Salary', 'Freelance', 'Business', 'Gift', 'Other'];
    const expenseCats = ['Food', 'Transport', 'Shopping', 'Bills', 'Health', 'Education', 'Entertainment', 'Other'];

    const all = new Set([...incomeSources, ...expenseCats]);
    const options = Array.from(all);

    // preserve "all"
    els.categoryFilter.innerHTML = '';
    const allOpt = document.createElement('option');
    allOpt.value = 'all';
    allOpt.textContent = t('allCategories');
    els.categoryFilter.appendChild(allOpt);

    // Add each option with localized labels when possible
    options.sort((a, b) => a.localeCompare(b));
    options.forEach(code => {
      const opt = document.createElement('option');
      opt.value = code;

      const labelKey =
        code === 'Salary' ? 'srcSalary' :
        code === 'Freelance' ? 'srcFreelance' :
        code === 'Business' ? 'srcBusiness' :
        code === 'Gift' ? 'srcGift' :
        code === 'Other' ? 'catOther' : // will be overridden below for expense categories
        null;

      const expenseLabelKeyMap = {
        Food: 'catFood',
        Transport: 'catTransport',
        Shopping: 'catShopping',
        Bills: 'catBills',
        Health: 'catHealth',
        Education: 'catEducation',
        Entertainment: 'catEntertainment',
        Other: 'catOther',
      };

      const key = labelKey || expenseLabelKeyMap[code] || null;
      opt.textContent = key ? t(key) : code;
      els.categoryFilter.appendChild(opt);
    });
  }

  function getFilteredTransactions() {
    const search = (els.searchInput.value || '').trim().toLowerCase();
    const type = els.typeFilter.value; // all|Income|Expense
    const category = els.categoryFilter.value; // all|code
    const date = els.dateFilter.value; // '' or YYYY-MM-DD

    return [...state.transactions]
      .sort(compareDateDesc)
      .filter(tx => {
        if (type !== 'all' && tx.type !== type) return false;
        if (category !== 'all' && tx.category !== category) return false;
        if (date && tx.date !== date) return false;

        if (search) {
          const hay = [
            tx.type,
            tx.category,
            tx.note,
            tx.date,
            String(tx.amount)
          ].join(' ').toLowerCase();
          if (!hay.includes(search)) return false;
        }
        return true;
      });
  }

  function renderTransactions() {
    const list = getFilteredTransactions();
    els.transactionsBody.innerHTML = '';

    if (list.length === 0) {
      els.transactionsEmpty.classList.remove('hidden');
      return;
    }
    els.transactionsEmpty.classList.add('hidden');

    const frag = document.createDocumentFragment();

    for (const tx of list) {
      const tr = document.createElement('tr');

      const typeTd = document.createElement('td');
      const pill = document.createElement('span');
      pill.className = `type-pill ${tx.type === 'Income' ? 'type-income' : 'type-expense'}`;
      pill.textContent = tx.type === 'Income' ? t('incomeLabel') : t('expenseLabel');
      typeTd.appendChild(pill);

      const amtTd = document.createElement('td');
      amtTd.innerHTML = `<span class="${tx.type === 'Income' ? 'amount-income' : 'amount-expense'}">${formatMoney(tx.amount)}</span>`;

      const catTd = document.createElement('td');
      catTd.textContent = tx.category ? tx.category : t('zeroValue');

      const dateTd = document.createElement('td');
      dateTd.textContent = tx.date || '—';

      const noteTd = document.createElement('td');
      noteTd.className = 'row-note';
      noteTd.textContent = tx.note ? tx.note : '—';

      const actionsTd = document.createElement('td');
      actionsTd.className = 'td-actions';
      const btnWrap = document.createElement('div');
      btnWrap.className = 'action-btns';

      const editBtn = document.createElement('button');
      editBtn.type = 'button';
      editBtn.className = 'icon-btn';
      editBtn.textContent = t('edit');
      editBtn.addEventListener('click', () => openEditModal(tx));

      const delBtn = document.createElement('button');
      delBtn.type = 'button';
      delBtn.className = 'icon-btn danger';
      delBtn.textContent = t('delete');
      delBtn.addEventListener('click', () => askDelete(tx.id));

      btnWrap.appendChild(editBtn);
      btnWrap.appendChild(delBtn);
      actionsTd.appendChild(btnWrap);

      tr.appendChild(typeTd);
      tr.appendChild(amtTd);
      tr.appendChild(catTd);
      tr.appendChild(dateTd);
      tr.appendChild(noteTd);
      tr.appendChild(actionsTd);

      frag.appendChild(tr);
    }

    els.transactionsBody.appendChild(frag);
  }

  function getMonthlyTotals() {
    const currentMonth = getCurrentMonthKey();
    let income = 0;
    let expense = 0;

    for (const tx of state.transactions) {
      if (monthKeyFromISO(tx.date) !== currentMonth) continue;
      if (tx.type === 'Income') income += tx.amount;
      else expense += tx.amount;
    }
    return { income, expense };
  }

  function updateDashboardAndBudget() {
    const { income, expense } = getMonthlyTotals();
    const totalIncome = state.transactions.reduce((s, tx) => s + (tx.type === 'Income' ? tx.amount : 0), 0);
    const totalExpenses = state.transactions.reduce((s, tx) => s + (tx.type === 'Expense' ? tx.amount : 0), 0);
    const balance = totalIncome - totalExpenses;

    els.currentBalance.textContent = formatMoney(balance);
    els.incomeThisMonth.textContent = formatMoney(income);
    els.expenseThisMonth.textContent = formatMoney(expense);

    const monthlyBudget = Number(state.settings.monthlyBudget || 0);
    const spent = expense;
    const remaining = monthlyBudget - spent;

    els.budgetValue.textContent = formatMoney(monthlyBudget);
    els.budgetSpent.textContent = formatMoney(spent);
    els.budgetRemaining.textContent = formatMoney(remaining);

    const percent = monthlyBudget > 0 ? Math.round((spent / monthlyBudget) * 100) : 0;
    els.budgetPercent.textContent = `${percent}%`;

    let width = percent;
    if (monthlyBudget <= 0) width = 0;

    // clamp bar to 100 but still show exceeded state
    const barWidth = Math.min(100, Math.max(0, width));
    els.budgetBar.style.width = `${barWidth}%`;

    const exceeded = monthlyBudget > 0 && spent > monthlyBudget;
    const warningText = t('exceededBudget');

    if (exceeded) {
      els.budgetWarning.textContent = warningText;
      els.budgetWarning.classList.remove('hidden');
      els.budgetBar.style.background = 'linear-gradient(90deg, #ef4444, #f97316)';
      els.budgetBar.style.border = '1px solid rgba(255,255,255,.15)';
      els.budgetBar.style.filter = 'saturate(1.15)';
    } else {
      els.budgetWarning.textContent = '';
      els.budgetWarning.classList.add('hidden');
      els.budgetBar.style.background = 'var(--progress-bar)';
      els.budgetBar.style.filter = '';
    }

    // a11y
    const progress = els.budgetBar.closest('.progress');
    if (progress) {
      progress.setAttribute('aria-valuenow', String(Math.min(100, Math.max(0, percent))));
    }
  }

  function computeStats() {
    const totalIncome = state.transactions.reduce((s, tx) => s + (tx.type === 'Income' ? tx.amount : 0), 0);
    const totalExpenses = state.transactions.reduce((s, tx) => s + (tx.type === 'Expense' ? tx.amount : 0), 0);
    const balance = totalIncome - totalExpenses;
    const numTransactions = state.transactions.length;

    // Highest expense category
    const expenseByCat = new Map();
    for (const tx of state.transactions) {
      if (tx.type !== 'Expense') continue;
      const key = tx.category || 'Other';
      expenseByCat.set(key, (expenseByCat.get(key) || 0) + tx.amount);
    }
    let highest = null;
    let highestVal = -Infinity;
    for (const [cat, val] of expenseByCat.entries()) {
      if (val > highestVal) { highestVal = val; highest = cat; }
    }

    // Average daily spending
    const expenseTx = state.transactions.filter(t => t.type === 'Expense');
    let avgDaily = 0;
    if (expenseTx.length > 0) {
      const dates = expenseTx
        .map(t => t.date)
        .filter(isValidISODate)
        .sort();
      const minDate = dates[0];
      const maxDate = dates[dates.length - 1];
      const start = new Date(minDate + 'T00:00:00');
      const end = new Date(maxDate + 'T00:00:00');
      const days = Math.max(1, Math.round((end - start) / (1000*60*60*24)) + 1);
      const sum = expenseTx.reduce((s, t) => s + t.amount, 0);
      avgDaily = sum / days;
    }

    return {
      totalIncome,
      totalExpenses,
      balance,
      numTransactions,
      highestExpenseCategory: highest,
      avgDailySpending: avgDaily,
    };
  }

  function updateReportsSummary() {
    const s = computeStats();
    els.totalIncome.textContent = formatMoney(s.totalIncome);
    els.totalExpenses.textContent = formatMoney(s.totalExpenses);
    els.currentBalanceReport.textContent = formatMoney(s.balance);
    els.numTransactions.textContent = String(s.numTransactions);

    if (!s.highestExpenseCategory) {
      els.highestExpenseCategory.textContent = t('zeroValue');
    } else {
      // attempt localized label
      const keyMap = {
        Food: 'catFood',
        Transport: 'catTransport',
        Shopping: 'catShopping',
        Bills: 'catBills',
        Health: 'catHealth',
        Education: 'catEducation',
        Entertainment: 'catEntertainment',
        Other: 'catOther',
      };
      els.highestExpenseCategory.textContent = keyMap[s.highestExpenseCategory] ? t(keyMap[s.highestExpenseCategory]) : s.highestExpenseCategory;
    }

    els.avgDailySpending.textContent = formatMoney(Math.round(s.avgDailySpending));
  }

  function destroyCharts() {
    if (chartExpenseByCategory) chartExpenseByCategory.destroy();
    if (chartMonthlyExpenses) chartMonthlyExpenses.destroy();
    if (chartIncomeVsExpenses) chartIncomeVsExpenses.destroy();
    chartExpenseByCategory = chartMonthlyExpenses = chartIncomeVsExpenses = null;
  }

  function chartColors() {
    const isLight = document.documentElement.dataset.theme === 'light';
    // choose readable defaults
    const grid = isLight ? 'rgba(15,23,42,.10)' : 'rgba(255,255,255,.10)';
    const text = isLight ? '#0f172a' : '#e8eefc';
    return { grid, text };
  }

  function updateCharts() {
    destroyCharts();

    const expenseTx = state.transactions.filter(t => t.type === 'Expense');
    const incomeTx = state.transactions.filter(t => t.type === 'Income');

    // Expense by Category (Doughnut)
    const expenseByCat = new Map();
    for (const tx of expenseTx) {
      const key = tx.category || 'Other';
      expenseByCat.set(key, (expenseByCat.get(key) || 0) + tx.amount);
    }
    const expCats = Array.from(expenseByCat.keys());
    const expValues = expCats.map(c => expenseByCat.get(c));

    const catLabelKey = {
      Food: 'catFood',
      Transport: 'catTransport',
      Shopping: 'catShopping',
      Bills: 'catBills',
      Health: 'catHealth',
      Education: 'catEducation',
      Entertainment: 'catEntertainment',
      Other: 'catOther',
    };

    const expLabels = expCats.map(c => catLabelKey[c] ? t(catLabelKey[c]) : c);

    const { grid, text } = chartColors();

    const donutData = {
      labels: expLabels.length ? expLabels : ['—'],
      datasets: [{
        data: expValues.length ? expValues : [0],
        backgroundColor: [
          '#4f7dff', '#22c55e', '#ef4444', '#f59e0b', '#a855f7', '#06b6d4', '#f97316', '#94a3b8'
        ],
        borderColor: document.documentElement.dataset.theme === 'light' ? 'rgba(15,23,42,.15)' : 'rgba(255,255,255,.15)',
        borderWidth: 1
      }]
    };

    const ctx1 = document.getElementById('chartExpenseByCategory');
    chartExpenseByCategory = new Chart(ctx1, {
      type: 'doughnut',
      data: donutData,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { labels: { color: text } }
        },
        cutout: '62%'
      }
    });

    // Monthly Expenses (Bar for last 6 months including current)
    const current = new Date();
    const months = [];
    for (let i = 5; i >= 0; i--) {
      const d = new Date(current.getFullYear(), current.getMonth() - i, 1);
      const y = d.getFullYear();
      const m = String(d.getMonth() + 1).padStart(2, '0');
      months.push(`${y}-${m}`);
    }

    const expensesByMonth = months.map(mk => {
      const sum = expenseTx
        .filter(tx => monthKeyFromISO(tx.date) === mk)
        .reduce((s, tx) => s + tx.amount, 0);
      return sum;
    });

    const monthLabels = months.map(mk => {
      const [y, m] = mk.split('-').map(Number);
      const d = new Date(y, m - 1, 1);
      // localized month name
      return d.toLocaleString(getLang() === 'ar' ? 'ar-DZ' : (getLang() === 'fr' ? 'fr-FR' : 'en-US'), { month: 'short' });
    });

    const ctx2 = document.getElementById('chartMonthlyExpenses');
    chartMonthlyExpenses = new Chart(ctx2, {
      type: 'bar',
      data: {
        labels: monthLabels,
        datasets: [{
          label: t('monthlyExpenses'),
          data: expensesByMonth,
          backgroundColor: 'rgba(239,68,68,.35)',
          borderColor: 'rgba(239,68,68,1)',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { labels: { color: text } }
        },
        scales: {
          x: { grid: { color: 'transparent' }, ticks: { color: text } },
          y: { grid: { color: grid }, ticks: { color: text } }
        }
      }
    });

    // Income vs Expenses (line)
    const incomeByMonth = months.map(mk => {
      return incomeTx
        .filter(tx => monthKeyFromISO(tx.date) === mk)
        .reduce((s, tx) => s + tx.amount, 0);
    });

    const ctx3 = document.getElementById('chartIncomeVsExpenses');
    chartIncomeVsExpenses = new Chart(ctx3, {
      type: 'line',
      data: {
        labels: monthLabels,
        datasets: [
          {
            label: t('incomeLabel'),
            data: incomeByMonth,
            borderColor: '#22c55e',
            backgroundColor: 'rgba(34,197,94,.15)',
            tension: 0.35,
            fill: true
          },
          {
            label: t('expenseLabel'),
            data: expensesByMonth,
            borderColor: '#ef4444',
            backgroundColor: 'rgba(239,68,68,.15)',
            tension: 0.35,
            fill: true
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { labels: { color: text } } },
        scales: {
          x: { grid: { color: 'transparent' }, ticks: { color: text } },
          y: { grid: { color: grid }, ticks: { color: text } }
        }
      }
    });
  }

  function openEditModal(tx) {
    els.editId.value = tx.id;
    els.editType.value = tx.type;
    els.editAmount.value = String(tx.amount);
    els.editDate.value = tx.date;
    els.editNote.value = tx.note || '';

    // category select depends on type
    els.editCategory.innerHTML = '';

    const incomeSources = ['Salary', 'Freelance', 'Business', 'Gift', 'Other'];
    const expenseCats = ['Food', 'Transport', 'Shopping', 'Bills', 'Health', 'Education', 'Entertainment', 'Other'];

    const values = tx.type === 'Income' ? incomeSources : expenseCats;

    values.forEach(v => {
      const opt = document.createElement('option');
      opt.value = v;

      const keyMap = {
        Salary: 'srcSalary',
        Freelance: 'srcFreelance',
        Business: 'srcBusiness',
        Gift: 'srcGift',
        Other: (tx.type === 'Income') ? 'srcOther' : 'catOther',
        Food: 'catFood',
        Transport: 'catTransport',
        Shopping: 'catShopping',
        Bills: 'catBills',
        Health: 'catHealth',
        Education: 'catEducation',
        Entertainment: 'catEntertainment',
      };
      const key = keyMap[v] || null;
      opt.textContent = key ? t(key) : v;

      els.editCategory.appendChild(opt);
    });

    // set selected
    els.editCategory.value = tx.category;

    els.editFormError.textContent = '';
    els.editModal.classList.remove('hidden');
    // focus
    els.editAmount.focus();
  }

  function closeModal(modalEl) {
    modalEl.classList.add('hidden');
  }

  function validateTransactionFields({ amount, category, date, type }) {
    const errors = [];

    const parsed = parseAmount(amount);
    if (!String(amount ?? '').trim()) errors.push('Amount is required.');
    if (!Number.isFinite(parsed) || parsed <= 0) errors.push('Amount must be greater than 0.');
    if (!date || !isValidISODate(date)) errors.push('Date is required.');
    if (!category || String(category).trim() === '') errors.push('Category/Source is required.');
    if (type !== 'Income' && type !== 'Expense') errors.push('Invalid type.');

    if (errors.length) return { ok: false, errors };
    return { ok: true, value: { parsedAmount: parsed, category: String(category), date } };
  }

  function toast(type, title, desc = '') {
    const el = document.createElement('div');
    el.className = `toast ${type}`;
    el.innerHTML = `
      <div class="toast-title">${escapeHtml(title)}</div>
      ${desc ? `<div class="toast-desc">${escapeHtml(desc)}</div>` : ''}
    `;
    els.toastContainer.appendChild(el);

    setTimeout(() => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(6px)';
      el.style.transition = 'opacity .25s ease, transform .25s ease';
    }, 2200);

    setTimeout(() => el.remove(), 2550);
  }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, m => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;'
    }[m]));
  }

  function askDelete(txId) {
    const tx = state.transactions.find(t => t.id === txId);
    if (!tx) return;

    els.confirmText.textContent = `${t('confirmText')}`;

    els.confirmYesBtn.onclick = () => {
      deleteTransaction(txId);
      closeModal(els.confirmModal);
    };

    els.confirmModal.classList.remove('hidden');
  }

  function addTransaction(tx) {
    state.transactions.push(tx);
    saveState();
  }

  function deleteTransaction(id) {
    state.transactions = state.transactions.filter(t => t.id !== id);
    saveState();
    renderTransactions();
    updateDashboardAndBudget();
    updateReportsSummary();
    updateCharts();
    toast('danger', 'Deleted', 'Transaction removed successfully.');
  }

  function editTransaction(id, newFields) {
    const idx = state.transactions.findIndex(t => t.id === id);
    if (idx < 0) return;

    state.transactions[idx] = { ...state.transactions[idx], ...newFields };
    saveState();
    renderTransactions();
    updateDashboardAndBudget();
    updateReportsSummary();
    updateCharts();
  }

  function handleSaveIncome(e) {
    e.preventDefault();
    els.incomeFormError.textContent = '';

    const type = 'Income';
    const res = validateTransactionFields({
      type,
      amount: els.incomeAmount.value,
      category: els.incomeSource.value,
      date: els.incomeDate.value
    });

    if (!res.ok) {
      els.incomeFormError.textContent = res.errors[0];
      return;
    }

    const tx = {
      id: crypto.randomUUID(),
      type,
      amount: Math.round(res.value.parsedAmount),
      category: els.incomeSource.value,
      date: els.incomeDate.value,
      note: (els.incomeNote.value || '').trim(),
    };

    addTransaction(tx);

    renderTransactions();
    updateDashboardAndBudget();
    updateReportsSummary();
    updateCharts();
    toast('success', 'Added', 'Income saved successfully.');

    els.incomeForm.reset();
    els.incomeDate.value = todayISO();
  }

  function handleSaveExpense(e) {
    e.preventDefault();
    els.expenseFormError.textContent = '';

    const type = 'Expense';
    const res = validateTransactionFields({
      type,
      amount: els.expenseAmount.value,
      category: els.expenseCategory.value,
      date: els.expenseDate.value
    });

    if (!res.ok) {
      els.expenseFormError.textContent = res.errors[0];
      return;
    }

    const tx = {
      id: crypto.randomUUID(),
      type,
      amount: Math.round(res.value.parsedAmount),
      category: els.expenseCategory.value,
      date: els.expenseDate.value,
      note: (els.expenseNote.value || '').trim(),
    };

    addTransaction(tx);

    renderTransactions();
    updateDashboardAndBudget();
    updateReportsSummary();
    updateCharts();
    toast('success', 'Added', 'Expense saved successfully.');

    els.expenseForm.reset();
    els.expenseDate.value = todayISO();
  }

  function handleEditSubmit(e) {
    e.preventDefault();
    els.editFormError.textContent = '';

    const id = els.editId.value;
    const type = els.editType.value;

    const res = validateTransactionFields({
      type,
      amount: els.editAmount.value,
      category: els.editCategory.value,
      date: els.editDate.value
    });

    if (!res.ok) {
      els.editFormError.textContent = res.errors[0];
      return;
    }

    editTransaction(id, {
      amount: Math.round(res.value.parsedAmount),
      category: els.editCategory.value,
      date: els.editDate.value,
      note: (els.editNote.value || '').trim()
    });

    closeModal(els.editModal);
    toast('success', 'Updated', 'Transaction updated successfully.');
  }

  function exportToCSV() {
    const header = ['id', 'type', 'amount', 'category', 'date', 'note'];
    const rows = state.transactions
      .slice()
      .sort(compareDateDesc)
      .map(tx => [
        tx.id,
        tx.type,
        String(tx.amount),
        tx.category,
        tx.date,
        tx.note ? tx.note : ''
      ]);

    const csv = [
      header.join(','),
      ...rows.map(r => r.map(v => `"${String(v).replace(/"/g, '""')}"`).join(','))
    ].join('\n');

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    const d = new Date();
    const stamp = `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
    a.download = `dz-budget-tracker-${stamp}.csv`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);

    toast('success', 'Exported', 'CSV file downloaded.');
  }

  function clearAllData() {
    state.transactions = [];
    state.settings = { ...structuredClone(DEFAULT_SETTINGS), ...state.settings };
    saveState();
    els.searchInput.value = '';
    els.typeFilter.value = 'all';
    els.categoryFilter.value = 'all';
    els.dateFilter.value = '';
    upsertCategoryFilterOptions();
    renderTransactions();
    updateDashboardAndBudget();
    updateReportsSummary();
    updateCharts();
    toast('danger', 'Cleared', 'All data removed from this device.');
  }

  function loadDemoData() {
    if (state.transactions.length) {
      toast('danger', 'Not loaded', 'Clear existing data first if you want a fresh demo.');
      return;
    }

    const today = new Date();
    const mkDate = (daysAgo) => {
      const d = new Date(today);
      d.setDate(d.getDate() - daysAgo);
      const yyyy = d.getFullYear();
      const mm = String(d.getMonth()+1).padStart(2,'0');
      const dd = String(d.getDate()).padStart(2,'0');
      return `${yyyy}-${mm}-${dd}`;
    };

    state.transactions = [
      { id: crypto.randomUUID(), type:'Income', amount: 120000, category:'Salary', date: mkDate(2), note:'Monthly salary' },
      { id: crypto.randomUUID(), type:'Income', amount: 25000, category:'Freelance', date: mkDate(9), note:'Website work' },
      { id: crypto.randomUUID(), type:'Expense', amount: 18000, category:'Food', date: mkDate(1), note:'Groceries' },
      { id: crypto.randomUUID(), type:'Expense', amount: 6500, category:'Transport', date: mkDate(3), note:'Fuel' },
      { id: crypto.randomUUID(), type:'Expense', amount: 22000, category:'Shopping', date: mkDate(7), note:'Clothes' },
      { id: crypto.randomUUID(), type:'Expense', amount: 9000, category:'Bills', date: mkDate(5), note:'Internet' },
      { id: crypto.randomUUID(), type:'Expense', amount: 7000, category:'Health', date: mkDate(10), note:'Pharmacy' },
      { id: crypto.randomUUID(), type:'Expense', amount: 5000, category:'Entertainment', date: mkDate(6), note:'Cinema' },
      { id: crypto.randomUUID(), type:'Income', amount: 15000, category:'Gift', date: mkDate(12), note:'Birthday gift' },
    ];

    // A bit more for previous months
    state.transactions.push(
      { id: crypto.randomUUID(), type:'Income', amount: 98000, category:'Salary', date: mkDate(35), note:'Salary (prev)' },
      { id: crypto.randomUUID(), type:'Expense', amount: 24000, category:'Food', date: mkDate(28), note:'Food (prev)' },
      { id: crypto.randomUUID(), type:'Expense', amount: 11000, category:'Bills', date: mkDate(22), note:'Bills (prev)' },
      { id: crypto.randomUUID(), type:'Expense', amount: 8000, category:'Transport', date: mkDate(18), note:'Transport (prev)' }
    );

    saveState();
    upsertCategoryFilterOptions();
    renderTransactions();
    updateDashboardAndBudget();
    updateReportsSummary();
    updateCharts();
    toast('success', 'Loaded', 'Demo data added.');
  }

  function setActivePage(target) {
    Object.values(els.pages).forEach(p => p.classList.remove('is-active'));
    els.pages[target]?.classList.add('is-active');

    // sidebar active
    els.navLinks.forEach(b => b.classList.toggle('is-active', b.dataset.target === target));
    // bottom nav active
    els.bottomNavLinks.forEach(b => b.classList.toggle('is-active', b.dataset.target === target));
  }

  function initEvents() {
    // Nav
    els.navLinks.forEach(btn => btn.addEventListener('click', () => setActivePage(btn.dataset.target)));
    els.bottomNavLinks.forEach(btn => btn.addEventListener('click', () => setActivePage(btn.dataset.target)));

    // Scroll helper
    document.querySelectorAll('[data-scroll]').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-scroll');
        const target = document.getElementById(id);
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });

    // Empty-state go
    document.querySelectorAll('[data-go]').forEach(btn => {
      btn.addEventListener('click', () => setActivePage(btn.dataset.go));
    });

    // Filter changes
    [els.searchInput, els.typeFilter, els.categoryFilter, els.dateFilter].forEach(el => {
      el.addEventListener('input', renderTransactions);
      el.addEventListener('change', renderTransactions);
    });

    // Theme toggle
    els.themeToggle.addEventListener('click', () => {
      const next = (state.settings.theme === 'light') ? 'dark' : 'light';
      state.settings.theme = next;
      saveState();
      applyTheme(next);
      updateDashboardAndBudget();
      updateCharts(); // recolor charts
      toast('success', 'Theme updated', next === 'light' ? 'Light mode enabled.' : 'Dark mode enabled.');
    });

    // Lang select
    els.langSelect.addEventListener('change', () => {
      state.settings.lang = els.langSelect.value;
      saveState();
      applyLanguage(state.settings.lang);
      // update direction already handled
      // update charts (labels)
      updateDashboardAndBudget();
      updateReportsSummary();
      updateCharts();
      renderTransactions(); // category labels in filter might be updated
      upsertCategoryFilterOptions();
    });

    // Income/Expense forms
    els.incomeForm.addEventListener('submit', handleSaveIncome);
    els.expenseForm.addEventListener('submit', handleSaveExpense);

    // Edit modal close
    document.querySelectorAll('[data-close="modal"]').forEach(x => {
      x.addEventListener('click', () => {
        closeModal(els.editModal);
        closeModal(els.confirmModal);
      });
    });

    // Edit submit
    els.editForm.addEventListener('submit', handleEditSubmit);

    // Export
    els.exportCsvBtn.addEventListener('click', exportToCSV);

    // Settings save
    els.saveSettingsBtn.addEventListener('click', () => {
      // validate monthly budget
      const v = parseAmount(els.monthlyBudgetInput.value);
      if (!Number.isFinite(v) || v < 0) {
        toast('danger', 'Invalid budget', 'Please enter a valid monthly budget.');
        return;
      }
      state.settings.monthlyBudget = Math.round(v);
      state.settings.currency = state.settings.currency || {};
      state.settings.currency.mode = els.currencyMode.value;

      saveState();
      updateDashboardAndBudget();
      updateCharts();
      toast('success', 'Saved', 'Settings updated successfully.');
    });

    // Clear all with confirmation
    els.clearAllBtn.addEventListener('click', () => {
      els.confirmText.textContent = t('clearAllWarning');
      els.confirmYesBtn.onclick = () => {
        clearAllData();
        closeModal(els.confirmModal);
      };
      els.confirmModal.classList.remove('hidden');
    });

    // Load demo
    els.loadDemoDataBtn.addEventListener('click', () => loadDemoData());
  }

  function initDefaults() {
    // set initial date inputs
    els.incomeDate.value = todayISO();
    els.expenseDate.value = todayISO();

    // initialize selectors
    els.langSelect.value = getLang();
    applyLanguage(getLang());

    applyTheme(state.settings.theme || 'dark');

    // settings fields
    els.monthlyBudgetInput.value = String(state.settings.monthlyBudget ?? 0);
    els.currencyMode.value = state.settings.currency?.mode || 'suffix';

    upsertCategoryFilterOptions();
  }

  function refreshAll() {
    renderTransactions();
    updateDashboardAndBudget();
    updateReportsSummary();
    updateCharts();
  }

  // Disable horizontal scrolling safety
  document.documentElement.style.overflowX = 'hidden';

  // Prevent console errors: guard missing canvases (should exist)
  function safeInit() {
    if (!window.Chart) return;
  }

  function initApp() {
    safeInit();
    initDefaults();
    initEvents();
    refreshAll();

    // re-render charts on resize to fit properly
    let tmr = null;
    window.addEventListener('resize', () => {
      clearTimeout(tmr);
      tmr = setTimeout(() => {
        if (els.pages.statistics.classList.contains('is-active')) updateCharts();
      }, 250);
    });

    // delegated close modals by ESC
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeModal(els.editModal);
        closeModal(els.confirmModal);
      }
    });
  }

  initApp();
})();
