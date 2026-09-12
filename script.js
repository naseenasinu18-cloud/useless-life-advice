// ==========================================
// 🗿 USELESS LIFE ADVICE - SCRIPT.JS
// ==========================================

// 1. FAKE SPECIAL DAYS DATABASE (25+ Hilarious Days)
const FAKE_DAYS = [
  {
    emoji: "🪑",
    name: "CHAIR DAY",
    malayalamName: "കസേര ദിനം",
    text: "ഇന്ന് കസേരയിൽ ഇരിക്കുമ്പോൾ കസേരയ്ക്ക് ഒരു നന്ദി പറയൂ. നിങ്ങളെക്കാൾ കൂടുതൽ സമയം അത് നിങ്ങളെ താങ്ങുന്നുണ്ട്. 😂",
    actionTip: "കസേരയെ പതിയെ തടവി കൊടുക്കുക."
  },
  {
    emoji: "🛏️",
    name: "BED DAY",
    malayalamName: "കിടക്ക ദിനം",
    text: "ഇന്ന് കിടക്കയിൽ നിന്ന് എഴുന്നേൽക്കാതിരിക്കാൻ ഇതൊരു നല്ല excuse ആണ്. കിടന്നോളൂ, ലോകം എങ്ങോട്ടും പോകുന്നില്ല. 😴",
    actionTip: "പുതപ്പ് തലവഴി മൂടുക."
  },
  {
    emoji: "🥄",
    name: "SPOON DAY",
    malayalamName: "സ്പൂൺ ദിനം",
    text: "Spoon ഇല്ലാതെ ചോറ് കഴിക്കാൻ ശ്രമിക്കൂ... എന്തിനാണെന്ന് ചോദിക്കരുത്. ചില അനുഭവങ്ങൾ അങ്ങനെയാണ്. 😂",
    actionTip: "സ്പൂണിനോട് വിട പറയൂ."
  },
  {
    emoji: "🧦",
    name: "MISSING SOCK DAY",
    malayalamName: "കാണാതായ സോക്സ് ദിനം",
    text: "വാഷിംഗ് മെഷീനിൽ കാണാതായ sock-നെ അന്വേഷിക്കണ്ട. അത് സ്വന്തം career നോക്കി സ്വതന്ത്രമായി പോയതാണ്! 🗿",
    actionTip: "ഒറ്റ സോക്സ് മാത്രം ഇട്ട് നടക്കുക."
  },
  {
    emoji: "📱",
    name: "PHONE BATTERY DAY",
    malayalamName: "1% ബാറ്ററി ദിനം",
    text: "Battery 1% ആയിട്ടും charger കുത്താതെ reel സ്ക്രോൾ ചെയ്യുന്നത് വെറും മടിയല്ല, അസാമാന്യ ആത്മവിശ്വാസമാണ്! 😂",
    actionTip: "ഫോൺ ഓഫാകുന്ന ആ ത്രില്ല് ആസ്വദിക്കുക."
  },
  {
    emoji: "🧠",
    name: "OVERTHINKING DAY",
    malayalamName: "ഓവർതിങ്കിംഗ് ദിനം",
    text: "ഇന്നത്തെ ചെറിയ പ്രശ്നം ആലോചിച്ച് അടുത്ത 15 വർഷത്തെ ഭാവി കൂടി തകർക്കൂ. Overthinking is an underrated art! 🤯",
    actionTip: "വെറുതെ ഇരിക്കുമ്പോൾ എന്തെങ്കിലും ഓർത്തു കരയുക."
  },
  {
    emoji: "🚪",
    name: "DOOR DAY",
    malayalamName: "വാതിൽ ദിനം",
    text: "Door തുറക്കുന്നതിന് മുമ്പ് അകത്ത് ആരുമില്ലെന്ന് ഉറപ്പാക്കൂ. തികച്ചും വിപ്ലവകരവും ഉപയോഗശൂന്യവുമായ ഉപദേശം. 😂",
    actionTip: "വാതിലിനോട് 'വരട്ടെ' എന്ന് ചോദിക്കുക."
  },
  {
    emoji: "🗿",
    name: "DOING NOTHING DAY",
    malayalamName: "വെറുതെയിരിപ്പ് ദിനം",
    text: "ഇന്ന് ഒന്നും ചെയ്യാതിരിക്കുക. നാളെ അതിന്റെ guilt നന്നായി enjoy ചെയ്യാം. Life is that simple! 😭",
    actionTip: "സീലിംഗിലേക്ക് നോക്കി കണ്ണുചിമ്മാതെ ഇരിക്കുക."
  },
  {
    emoji: "☕",
    name: "TEA DAY",
    malayalamName: "കട്ടൻ ചായ ദിനം",
    text: "എല്ലാ പ്രശ്നങ്ങൾക്കും solution ചായയല്ല... പക്ഷേ 3 ഗ്ലാസ് ചായ കുടിച്ചിട്ട് പ്രശ്നം വീണ്ടും സാവധാനം ആലോചിക്കാം. 😂",
    actionTip: "ചായയിൽ ബിസ്ക്കറ്റ് മുക്കി മുങ്ങിപ്പോകുന്നത് കാണുക."
  },
  {
    emoji: "🪞",
    name: "MIRROR DAY",
    malayalamName: "കണ്ണാടി ദിനം",
    text: "കണ്ണാടിയിൽ നോക്കി 'ഞാൻ എന്തിനാണ് ഭൂമിയിൽ വന്നത്?' എന്ന് 5 മിനിറ്റ് ചോദിക്കൂ. ഉത്തരം കണ്ണാടിക്കും അറിയില്ല! 🗿",
    actionTip: "കണ്ണാടിയെ നോക്കി കണ്ണിറുക്കുക."
  },
  {
    emoji: "💡",
    name: "LIGHT BULB DAY",
    malayalamName: "ബൾബ് ദിനം",
    text: "തലയിൽ idea ഒന്നും കിട്ടിയില്ലെങ്കിൽ മുറിയിലെ bulb എങ്കിലും off ചെയ്ത് കറന്റ് ബില്ല് ലാഭിക്കൂ. സാമ്പത്തിക ശാസ്ത്രം! 😂",
    actionTip: "സ്വിച്ച് തനിയെ ഇട്ടു നോക്കുക."
  },
  {
    emoji: "⌛",
    name: "WAITING DAY",
    malayalamName: "കാത്തിരിപ്പ് ദിനം",
    text: "ഒന്നും ചെയ്യാതെ വെറുതെ ഇരുന്ന് എന്തെങ്കിലും അത്ഭുതം സംഭവിക്കാൻ കാത്തിരിക്കുക. അതാണ് യഥാർത്ഥ patience. 🗿",
    actionTip: "ക്ലോക്കിലെ സെക്കൻഡ് സൂചി എണ്ണുക."
  },
  {
    emoji: "🎧",
    name: "EARPHONE DAY",
    malayalamName: "ഇയർഫോൺ ദിനം",
    text: "Earphone കാതിൽ വച്ച് പാട്ടൊന്നും വയ്ക്കാതെ നാട്ടുകാരുടെ വർത്തമാനം ഒളിച്ചു കേൾക്കാൻ പറ്റിയ അന്താരാഷ്ട്ര ദിനം. 🤫",
    actionTip: "തലയാട്ടി പാട്ട് കേൾക്കുന്നതായി അഭിനയിക്കുക."
  },
  {
    emoji: "🔌",
    name: "CHARGER DAY",
    malayalamName: "ചാർജർ ദിനം",
    text: "Charger cable ഒരു പ്രത്യേക ആംഗിളിൽ വളച്ചു വച്ചാൽ മാത്രം ചാർജ് ആകുന്ന മൊബൈൽ ഉടമസ്ഥർക്ക് അഭിവാദ്യങ്ങൾ! ⚡",
    actionTip: "കേബിൾ അനക്കാതെ ശ്വാസമടക്കി ഇരിക്കുക."
  },
  {
    emoji: "🛋️",
    name: "SOFA DAY",
    malayalamName: "സോഫാ ദിനം",
    text: "സോഫയിൽ ചാരി ഇരുന്നാൽ പിന്നെ എഴുന്നേൽക്കരുത്. ഭൂമിയുടെ ആകർഷണബലം കൂടുതൽ സോഫയിലാണെന്ന് ശാസ്ത്രം പറയുന്നു! 🛋️",
    actionTip: "റിമോട്ട് കാലുകൊണ്ട് വലിച്ചെടുക്കാൻ ശ്രമിക്കുക."
  },
  {
    emoji: "🍚",
    name: "RICE DAY",
    malayalamName: "ഉച്ചയൂണ് ദിനം",
    text: "ഉച്ചയ്ക്ക് വയറുനിറയെ ചോറുണ്ണുക, പിന്നെ വൈകുന്നേരം 6 മണി വരെ ബോധമില്ലാതെ ഉറങ്ങുക. Pure Malayali Nirvana! 🍚",
    actionTip: "ചോറുണ്ട ശേഷം തൈര് കുടിക്കുക."
  },
  {
    emoji: "🧴",
    name: "SHAMPOO BOTTLE DAY",
    malayalamName: "ഷാംപൂ കുപ്പി ദിനം",
    text: "തീരാറായ shampoo കുപ്പിയിൽ വെള്ളമൊഴിച്ച് കുലുക്കി അടുത്ത ഒരാഴ്ച കൂടി ഉപയോഗിക്കുക. മിഡിൽ ക്ലാസ് മാജിക്! 🧴",
    actionTip: "കുപ്പി തലകീഴായി നിർത്തുക."
  },
  {
    emoji: "🧻",
    name: "TISSUE DAY",
    malayalamName: "ടിഷ്യൂ പേപ്പർ ദിനം",
    text: "കണ്ണീര് തുടയ്ക്കാൻ മാത്രമല്ല, മൊബൈൽ ഫോൺ സ്ക്രീനിലെ വിരലടയാളം തുടയ്ക്കാനും tissue ധാരാളമാണ്. 🧻",
    actionTip: "ടിഷ്യൂ ചുരുട്ടി വെയ്ക്കുക."
  },
  {
    emoji: "🪥",
    name: "TOOTHBRUSH DAY",
    malayalamName: "പഴയ ബ്രഷ് ദിനം",
    text: "തേഞ്ഞു തീർന്ന പല്ലുതേപ്പ് ബ്രഷ് കൊണ്ട് ഇനി സൈക്കിൾ ചെയിനോ ടൈൽസോ വൃത്തിയാക്കാം. Never retire a brush! 🪥",
    actionTip: "ബ്രഷിന് പുതിയ ജോലി നൽകുക."
  },
  {
    emoji: "🧢",
    name: "CAP DAY",
    malayalamName: "തൊപ്പി ദിനം",
    text: "തലമുടി ചീകാൻ മടിയുള്ള ദിവസം ക്യാപ്പ് വച്ച് മാസ്സ് കാട്ടുക. ഇതിനെയാണ് 'ഫാഷൻ വിപ്ലവം' എന്ന് പറയുന്നത്. 🧢",
    actionTip: "കണ്ണിലേക്ക് ക്യാപ്പ് താഴ്ത്തി വെക്കുക."
  },
  {
    emoji: "🌀",
    name: "CEILING FAN DAY",
    malayalamName: "ഫാൻ ദിനം",
    text: "ഫാനിന്റെ മൂന്ന് ലീഫുകളും ഒരേ സ്പീഡിലാണോ കറങ്ങുന്നതെന്ന് ശാന്തമായി നിരീക്ഷിക്കാൻ ഏറ്റവും നല്ല ദിവസം. 🌀",
    actionTip: "സ്പീഡ് 4-ൽ നിന്ന് 5-ലേക്ക് ആക്കുക."
  },
  {
    emoji: "⏰",
    name: "SNOOZE DAY",
    malayalamName: "സ്നൂസ് ദിനം",
    text: "അലാറം ഓഫ് ചെയ്ത് അടുത്ത 5 മിനിറ്റ് സ്നൂസ് ചെയ്യുമ്പോൾ ലഭിക്കുന്ന സുഖം ഒരു ലോകനേതാവിനും ലഭിക്കില്ല. 😴",
    actionTip: "അലാറം 10 തവണ സ്നൂസ് ചെയ്യുക."
  },
  {
    emoji: "🧊",
    name: "FRIDGE OPEN DAY",
    malayalamName: "ഫ്രിഡ്ജ് തുറക്കൽ ദിനം",
    text: "വിശപ്പില്ലെങ്കിലും ഓരോ 10 മിനിറ്റിലും ഫ്രിഡ്ജ് തുറന്ന് നോക്കുക. വല്ല പുതിയ പലഹാരവും മുളച്ചു വന്നിട്ടുണ്ടോ എന്ന് നോക്കണ്ടേ! 🧊",
    actionTip: "തണുത്ത കാറ്റേറ്റ് 1 മിനിറ്റ് നിൽക്കുക."
  },
  {
    emoji: "📶",
    name: "WIFI ROUTER DAY",
    malayalamName: "റൂട്ടർ റീസ്റ്റാർട്ട് ദിനം",
    text: "ഇന്റർനെറ്റ് സ്ലോ ആവുമ്പോൾ റൂട്ടർ ഓഫ് ചെയ്ത് ഓൺ ചെയ്യുക. ലോകത്തിലെ 99% പ്രശ്നങ്ങൾക്കും ഇതാണ് പരിഹാരം. 📶",
    actionTip: "വയറുകൾ ശരിയായി ഇളക്കി നോക്കുക."
  }
];

// 2. MAIN ADVICE DATABASE (45+ Humorous Malayalam Advice items in 8 categories)
const ADVICE_DATABASE = [
  // --- FUNNY 😂 ---
  {
    id: "fn-1",
    category: "funny",
    categoryName: "😂 Funny",
    emoji: "🪑",
    text: "കസേരയിൽ ഇരിക്കുമ്പോൾ കസേരയ്ക്ക് ഒരു നന്ദി പറയൂ. നിങ്ങളെക്കാൾ കൂടുതൽ സമയം അത് നിങ്ങളെ താങ്ങുന്നുണ്ട്. 😂",
    subtext: "കസേരയുടെ ത്യാഗം മറക്കരുത്!",
    uselessScore: "99.9%"
  },
  {
    id: "fn-2",
    category: "funny",
    categoryName: "😂 Funny",
    emoji: "🪞",
    text: "ആരെങ്കിലും നിങ്ങളെ 'ഭംഗിയില്ല' എന്ന് പറഞ്ഞാൽ വിഷമിക്കണ്ട... അവർ സത്യം തുറന്നു പറയാൻ ധൈര്യമുള്ളവരാണ്! 😂",
    subtext: "സത്യസന്ധതയെ മാനിക്കുക.",
    uselessScore: "98.7%"
  },
  {
    id: "fn-3",
    category: "funny",
    categoryName: "😂 Funny",
    emoji: "🤫",
    text: "രഹസ്യങ്ങൾ സൂക്ഷിക്കാൻ ഏറ്റവും നല്ല വഴി അത് മറന്നു പോവുക എന്നതാണ്. Brain 100% efficient! 🗿",
    subtext: "മെമ്മറി ലോസ്സ് ഒരു അനുഗ്രഹമാണ്.",
    uselessScore: "99.4%"
  },
  {
    id: "fn-4",
    category: "funny",
    categoryName: "😂 Funny",
    emoji: "🏃",
    text: "ഓടാൻ മടിയാണെങ്കിൽ നടക്കൂ. നടക്കാൻ മടിയാണെങ്കിൽ നിൽക്കൂ. നിൽക്കാൻ മടിയാണെങ്കിൽ കിടക്കൂ. പ്രകൃതി നിയമം! 😂",
    subtext: "Lazy evolution at its finest.",
    uselessScore: "100%"
  },
  {
    id: "fn-5",
    category: "funny",
    categoryName: "😂 Funny",
    emoji: "☔",
    text: "മഴ പെയ്യുമ്പോൾ കുട ഇല്ലെങ്കിൽ വിഷമിക്കേണ്ട. നനഞ്ഞാൽ അങ്ങ് തീരാവുന്ന പ്രശ്നമേ ഉള്ളൂ! 🌧️",
    subtext: "വാട്ടർപ്രൂഫ് മനുഷ്യൻ.",
    uselessScore: "96.5%"
  },
  {
    id: "fn-6",
    category: "funny",
    categoryName: "😂 Funny",
    emoji: "🤹",
    text: "ജീവിതത്തിൽ ടെൻഷൻ വരുമ്പോൾ കണ്ണുകൾ അടയ്ക്കുക. ഇപ്പോൾ ഇരുട്ടല്ലേ? പ്രശ്നം കാണാനില്ലല്ലോ! പരിഹാരം കഴിഞ്ഞു. 😂",
    subtext: "Out of sight, out of mind!",
    uselessScore: "99.8%"
  },

  // --- USELESS 🗿 ---
  {
    id: "us-1",
    category: "useless",
    categoryName: "🗿 Useless",
    emoji: "🗿",
    text: "ഇന്ന് ഒന്നും ചെയ്യാതിരിക്കുക. നാളെ അതിന്റെ guilt നന്നായി enjoy ചെയ്യാം. അതാണ് യഥാർത്ഥ പ്രൊഡക്റ്റിവിറ്റി! 😭",
    subtext: "Tomorrow's headache today.",
    uselessScore: "100%"
  },
  {
    id: "us-2",
    category: "useless",
    categoryName: "🗿 Useless",
    emoji: "🚪",
    text: "Door തുറക്കുന്നതിന് മുമ്പ് അകത്ത് ആരുമില്ലെന്ന് ഉറപ്പാക്കൂ. വളരെ advanced ആയുള്ള ഉപയോഗശൂന്യ advice. 😂",
    subtext: "വാതിലിന്റെ രഹസ്യം.",
    uselessScore: "99.9%"
  },
  {
    id: "us-3",
    category: "useless",
    categoryName: "🗿 Useless",
    emoji: "🥄",
    text: "Spoon ഇല്ലാതെ ചോറ് കഴിക്കാൻ ശ്രമിക്കൂ... എന്തിനാണെന്ന് ചോദിക്കരുത്. ഒരു ആവശ്യവുമില്ലാത്ത പരീക്ഷണമാണ്. 😂",
    subtext: "No reason at all.",
    uselessScore: "99.5%"
  },
  {
    id: "us-4",
    category: "useless",
    categoryName: "🗿 Useless",
    emoji: "⌛",
    text: "ഒന്നും ചെയ്യാതെ വെറുതെ ഇരുന്ന് എന്തെങ്കിലും അത്ഭുതം സംഭവിക്കാൻ കാത്തിരിക്കുക. അതാണ് ക്ഷമ! 🗿",
    subtext: "Waiting mode: ON.",
    uselessScore: "98.9%"
  },
  {
    id: "us-5",
    category: "useless",
    categoryName: "🗿 Useless",
    emoji: "🧦",
    text: "കാണാതായ സോക്സിനെ തിരയരുത്. അത് സ്വന്തം കാലിൽ നിൽക്കാൻ വേണ്ടി വീടുവിട്ട് പോയതാണ്! 🧦",
    subtext: "Respect sock independence.",
    uselessScore: "99.7%"
  },
  {
    id: "us-6",
    category: "useless",
    categoryName: "🗿 Useless",
    emoji: "🧊",
    text: "വെള്ളം ദാഹിക്കുമ്പോൾ ഐസ് കഴിക്കുക. ദാഹവും മാറും, കഠിനമായ പല്ലുവേദനയും കിട്ടും. Combo offer! 🧊",
    subtext: "Tooth sensitivity unlocked.",
    uselessScore: "97.4%"
  },

  // --- TECH 💻 ---
  {
    id: "tc-1",
    category: "tech",
    categoryName: "💻 Tech",
    emoji: "💻",
    text: "Laptop slow ആണെങ്കിൽ അതിനെ തന്നെ നോക്കി ഇരിക്കുക. അത് നിന്റെ patience test ചെയ്യുന്നതാണ്. 🗿",
    subtext: "Stare competition with Windows.",
    uselessScore: "99.1%"
  },
  {
    id: "tc-2",
    category: "tech",
    categoryName: "💻 Tech",
    emoji: "📱",
    text: "Battery 1% ആയിട്ടും phone ഉപയോഗിക്കുന്നത് മടിയല്ല... അത് മരണത്തെ മുഖാമുഖം കാണുന്ന തന്റേടമാണ്! 😂",
    subtext: "Daredevil of low battery.",
    uselessScore: "98.6%"
  },
  {
    id: "tc-3",
    category: "tech",
    categoryName: "💻 Tech",
    emoji: "⌨️",
    text: "Code വർക്ക് ചെയ്യുന്നില്ലെങ്കിൽ ലാപ്ടോപ്പ് റീസ്റ്റാർട്ട് ചെയ്യുക. എന്നിട്ടും പറ്റിയില്ലെങ്കിൽ ഫീൽഡ് മാറുക! 💻",
    subtext: "Senior developer strategy.",
    uselessScore: "99.4%"
  },
  {
    id: "tc-4",
    category: "tech",
    categoryName: "💻 Tech",
    emoji: "🔔",
    text: "Group chat-ൽ എല്ലാവരും വഴക്കിടുമ്പോൾ വെറുതെ ഒരു '👍' അയച്ചു നോക്കൂ. അടിപൊളി തീപ്പൊരി ആകും! 🔥",
    subtext: "Maximum chaos unlocked.",
    uselessScore: "97.9%"
  },
  {
    id: "tc-5",
    category: "tech",
    categoryName: "💻 Tech",
    emoji: "🎧",
    text: "Earphone കാതിൽ വച്ചാൽ ആരും നമ്മളോട് സംസാരിക്കില്ല. പാട്ട് വെക്കേണ്ട ആവശ്യമില്ല, വെറും ഷോ മതി! 🤫",
    subtext: "Anti-social shielding technique.",
    uselessScore: "99.2%"
  },
  {
    id: "tc-6",
    category: "tech",
    categoryName: "💻 Tech",
    emoji: "📶",
    text: "Wi-Fi സ്പീഡ് കുറവാണെങ്കിൽ ഫോൺ തലതിരിച്ചു പിടിക്കുക. സിഗ്നൽ ഗ്രാവിറ്റി വഴി വേഗത്തിൽ താഴേക്ക് ഇറങ്ങും! 📶",
    subtext: "Physics professors crying.",
    uselessScore: "100%"
  },

  // --- STUDENT 🎓 ---
  {
    id: "st-1",
    category: "student",
    categoryName: "🎓 Student",
    emoji: "🎓",
    text: "Exam നാളെ ആണെങ്കിൽ ഇന്ന് syllabus തുറക്കുക. അത് കണ്ട് ഭയന്ന് പുസ്തകം അടയ്ക്കുക. Preparation complete! 😂",
    subtext: "Mental preparation is everything.",
    uselessScore: "99.9%"
  },
  {
    id: "st-2",
    category: "student",
    categoryName: "🎓 Student",
    emoji: "📚",
    text: "പഠിക്കാൻ ഇരിക്കുമ്പോൾ മേശ തുടച്ച് പുസ്തകം വൃത്തിയായി അടുക്കി വെക്കുക. പഠിച്ചില്ലെങ്കിലും പഠിപ്പിസ്റ്റിന്റെ ലുക്ക് കിട്ടും! 📖",
    subtext: "Aesthetic over marks.",
    uselessScore: "98.2%"
  },
  {
    id: "st-3",
    category: "student",
    categoryName: "🎓 Student",
    emoji: "✍️",
    text: "പരീക്ഷയിൽ ചോദ്യത്തിന് ഉത്തരം അറിയില്ലെങ്കിൽ നല്ല കൈപ്പടയിൽ ചോദ്യം തന്നെ 4 തവണ വ്യത്യസ്തമായി എഴുതുക! ✍️",
    subtext: "Examiner confusion theory.",
    uselessScore: "99.3%"
  },
  {
    id: "st-4",
    category: "student",
    categoryName: "🎓 Student",
    emoji: "😴",
    text: "പുസ്തകം തലയിണയുടെ അടിയിൽ വച്ച് ഉറങ്ങിയാൽ അറിവ് തനിയെ തലച്ചോറിലേക്ക് osmosis വഴി എത്തും. ശാസ്ത്രം! 🧠",
    subtext: "Biology exam hack.",
    uselessScore: "99.8%"
  },
  {
    id: "st-5",
    category: "student",
    categoryName: "🎓 Student",
    emoji: "⏰",
    text: "പുലർച്ചെ 4 മണിക്ക് പഠിക്കാൻ അലാറം വെക്കുക. അലാറം അടിക്കുമ്പോൾ ഓഫ് ചെയ്ത് ഉറങ്ങുക. Perfect routine! 😴",
    subtext: "Consistency is key.",
    uselessScore: "99.5%"
  },

  // --- RELATIONSHIP ❤️ ---
  {
    id: "rl-1",
    category: "relationship",
    categoryName: "❤️ Relationship",
    emoji: "❤️",
    text: "Crush-ന് മെസ്സേജ് അയച്ചിട്ട് ഫോൺ ഉടൻ ഫ്ലൈറ്റ് മോഡിൽ ഇടുക. Reply വന്നില്ലെന്ന വേദന അറിയേണ്ടല്ലോ! ✈️",
    subtext: "Self-defense mechanism.",
    uselessScore: "99.0%"
  },
  {
    id: "rl-2",
    category: "relationship",
    categoryName: "❤️ Relationship",
    emoji: "💬",
    text: "Partner 'എന്താ ചിന്തിക്കുന്നത്?' എന്ന് ചോദിച്ചാൽ 'നിന്നെ കുറിച്ച്' എന്ന് പറയുക. ഉള്ളിൽ ബിരിയാണി ആയിരിക്കും ഓർക്കുന്നത്! 🍗",
    subtext: "Relationship survival tactic.",
    uselessScore: "97.8%"
  },
  {
    id: "rl-3",
    category: "relationship",
    categoryName: "❤️ Relationship",
    emoji: "🤐",
    text: "ഒരു വഴക്കിൽ ജയിക്കാൻ ഏറ്റവും എളുപ്പമുള്ള വഴി 'ശരി, നിന്റെ ഇഷ്ടം' എന്ന് പറഞ്ഞ് മുറി വിട്ട് ഇറങ്ങി പോവുക എന്നതാണ്! 🚪",
    subtext: "Psychological warfare.",
    uselessScore: "98.9%"
  },
  {
    id: "rl-4",
    category: "relationship",
    categoryName: "❤️ Relationship",
    emoji: "💔",
    text: "Heartbreak ആയാൽ വിഷമിക്കേണ്ട. ഒരു കട്ടൻ ചായ കുടിക്കൂ. പ്രണയത്തേക്കാൾ ചൂടും വിശ്വസ്തതയും ചായയ്ക്കുണ്ട്! ☕",
    subtext: "Tea will never cheat.",
    uselessScore: "96.7%"
  },
  {
    id: "rl-5",
    category: "relationship",
    categoryName: "❤️ Relationship",
    emoji: "👀",
    text: "ആരെങ്കിലും 'Seen' ചെയ്തിട്ട് റീപ്ലേ തന്നില്ലെങ്കിൽ അവരെ തിരിച്ച് 3 ദിവസം കഴിഞ്ഞ് Seen ചെയ്യുക. Revenge! 🗿",
    subtext: "Childish yet satisfying.",
    uselessScore: "99.6%"
  },

  // --- WORK 💼 ---
  {
    id: "wk-1",
    category: "work",
    categoryName: "💼 Work",
    emoji: "💼",
    text: "ഓഫീസിൽ ഗൗരവത്തിൽ നോട്ട്ബുക്കും പേനയുമായി നടക്കുക. ജോലി ഒന്നുമില്ലെങ്കിലും നിങ്ങൾ ഭയങ്കര busy ആണെന്ന് തോന്നും! 📋",
    subtext: "Corporate strategy 101.",
    uselessScore: "99.2%"
  },
  {
    id: "wk-2",
    category: "work",
    categoryName: "💼 Work",
    emoji: "☕",
    text: "മീറ്റിംഗ് തുടങ്ങിയാൽ ആദ്യത്തെ 5 മിനിറ്റ് 'Can you hear me?' എന്നും അവസാന 5 മിനിറ്റ് 'You are on mute' എന്നും പറയുക. ജോലി കഴിഞ്ഞു! 🎙️",
    subtext: "Remote work championship.",
    uselessScore: "98.8%"
  },
  {
    id: "wk-3",
    category: "work",
    categoryName: "💼 Work",
    emoji: "📊",
    text: "തിങ്കളാഴ്ച രാവിലെ തന്നെ വെള്ളിയാഴ്ച വൈകുന്നേരത്തെ പ്ലാൻ ആലോചിക്കുക. ആഴ്ച മുഴുവൻ അങ്ങനെ സന്തോഷമായി തീരും! 🏖️",
    subtext: "Mental time travel.",
    uselessScore: "97.5%"
  },
  {
    id: "wk-4",
    category: "work",
    categoryName: "💼 Work",
    emoji: "💻",
    text: "ബോസ് വരുമ്പോൾ ടൈപ്പ് ചെയ്യുന്ന സ്പീഡ് ഇരട്ടിയാക്കുക. ബാക്ക്സ്പേസ് അമർത്തിക്കൊണ്ടിരുന്നാലും പ്രശ്നമില്ല! ⌨️",
    subtext: "Aggressive productivity illusion.",
    uselessScore: "99.4%"
  },
  {
    id: "wk-5",
    category: "work",
    categoryName: "💼 Work",
    emoji: "📧",
    text: "ഇമെയിലിന് മറുപടി കൊടുക്കാൻ മടിയാണെങ്കിൽ 'Let me align with my team' എന്ന് അയച്ച് 4 ദിവസം മുങ്ങുക! 🌊",
    subtext: "Corporate ghosting wizard.",
    uselessScore: "99.7%"
  },

  // --- SLEEP 😴 ---
  {
    id: "sl-1",
    category: "sleep",
    categoryName: "😴 Sleep",
    emoji: "😴",
    text: "ഉറങ്ങുന്നതിന് മുമ്പ് 'വെറും 5 minutes' ഫോൺ നോക്കാം എന്ന് തീരുമാനിക്കുക. അടുത്ത 3 മണിക്കൂർ Instagram ഉറപ്പാണ്! 📱",
    subtext: "Classic bedtime trap.",
    uselessScore: "99.9%"
  },
  {
    id: "sl-2",
    category: "sleep",
    categoryName: "😴 Sleep",
    emoji: "🛏️",
    text: "ഉച്ചയ്ക്ക് 12 മണി വരെ ഉറങ്ങിയാൽ ദിവസത്തിൽ 2 നേരത്തെ ഭക്ഷണം മാത്രം കഴിച്ചാൽ മതി. സാമ്പത്തിക ബുദ്ധി! 🧠",
    subtext: "Inflation-proof life plan.",
    uselessScore: "98.5%"
  },
  {
    id: "sl-3",
    category: "sleep",
    categoryName: "😴 Sleep",
    emoji: "🛌",
    text: "തലയിണയുടെ തണുത്ത ഭാഗം കണ്ടുപിടിക്കാൻ കിടക്കയിൽ ഉരുളുക. ഈ ജീവിതത്തിലെ ഏറ്റവും വലിയ നേട്ടങ്ങളിൽ ഒന്നാണത്! ❄️",
    subtext: "Pillow cold side conquest.",
    uselessScore: "99.1%"
  },
  {
    id: "sl-4",
    category: "sleep",
    categoryName: "😴 Sleep",
    emoji: "🥱",
    text: "ഉറക്കം വരുന്നില്ലെങ്കിൽ നാളെ രാവിലെ ചെയ്യാനുള്ള എല്ലാ പണികളും ഒന്നുകൂടി ഓർക്കുക. ഉടൻ ബോധം പോകും! 🤯",
    subtext: "Stress-induced unconsciousness.",
    uselessScore: "96.9%"
  },
  {
    id: "sl-5",
    category: "sleep",
    categoryName: "😴 Sleep",
    emoji: "⏰",
    text: "അലാറം അടിച്ച് ഉണർന്നാൽ ഉടൻ എഴുന്നേൽക്കരുത്. പുതപ്പിലേക്ക് ഒരു നോട്ടം നോക്കൂ... അതാണ് യഥാർത്ഥ പ്രണയം! 💖",
    subtext: "Bed is true soulmate.",
    uselessScore: "99.8%"
  },

  // --- FOOD 🍕 ---
  {
    id: "fd-1",
    category: "food",
    categoryName: "🍕 Food",
    emoji: "🍕",
    text: "Diet ചെയ്യാൻ ആഗ്രഹമുണ്ടെങ്കിൽ പിസ്സ 4 കഷ്ണത്തിന് പകരം 2 കഷ്ണമാക്കി മുറിക്കുക. കുറഞ്ഞ കഷ്ണം = കുറഞ്ഞ കലോറി! 🍕",
    subtext: "Dietitians hate this trick.",
    uselessScore: "99.9%"
  },
  {
    id: "fd-2",
    category: "food",
    categoryName: "🍕 Food",
    emoji: "🍚",
    text: "ഉച്ചയ്ക്ക് വയറുനിറയെ ബിരിയാണി കഴിഞ്ഞ് ഒരു കട്ടൻ ചായ കുടിച്ചാൽ വണ്ണം വെക്കില്ലെന്ന് ശാസ്ത്രം പറയുന്നില്ല, പക്ഷെ നമ്മൾ പറയും! 🍗",
    subtext: "Biriyani + Sulaimani delusion.",
    uselessScore: "98.9%"
  },
  {
    id: "fd-3",
    category: "food",
    categoryName: "🍕 Food",
    emoji: "🍪",
    text: "ബിസ്ക്കറ്റ് ചായയിൽ മുക്കുമ്പോൾ അത് മുങ്ങിപ്പോയാൽ സ്പൂൺ എടുക്കണ്ട. അടുത്ത ബിസ്ക്കറ്റ് മുക്കി അതിനെ രക്ഷിക്കാൻ ശ്രമിക്കുക! ☕",
    subtext: "Rescue mission tragedy.",
    uselessScore: "99.7%"
  },
  {
    id: "fd-4",
    category: "food",
    categoryName: "🍕 Food",
    emoji: "🍟",
    text: "കൂട്ടുകാരന്റെ പ്ലേറ്റിലെ ഫ്രൈസ് ആദ്യം തിന്നു തീർക്കുക. സ്വന്തം പ്ലേറ്റിലെ ഫ്രൈസ് അവസാനം ആസ്വദിച്ചു കഴിക്കാം! 🍟",
    subtext: "Friendship test passed.",
    uselessScore: "97.8%"
  },
  {
    id: "fd-5",
    category: "food",
    categoryName: "🍕 Food",
    emoji: "☕",
    text: "രാവിലെ ഒരു ഗ്ലാസ് ചൂടുവെള്ളം കുടിക്കുന്നത് ആരോഗ്യത്തിന് നല്ലതാണ്. പക്ഷേ ചായ കുടിച്ചാൽ സന്തോഷത്തിന് നല്ലതാണ്! ☕",
    subtext: "Happiness > Health.",
    uselessScore: "99.2%"
  }
];

// ==========================================
// 3. STATE & STORAGE MANAGEMENT
// ==========================================

const STORAGE_KEYS = {
  FAVORITES: "useless_advice_favorites_v1",
  ADVICE_COUNT: "useless_advice_generated_count_v1",
  CONFUSED_COUNT: "useless_confused_people_v1"
};

let currentAdvice = null;
let currentDayIndex = 0;
let currentCategory = "all";
let favorites = [];
let adviceGeneratedCount = 0;
let simulatedConfusedCount = 1420;

// ==========================================
// 4. DOM ELEMENTS
// ==========================================

const el = {
  // Navigation
  mobileToggle: document.getElementById("mobileToggle"),
  navMenu: document.getElementById("navMenu"),
  favBadge: document.getElementById("favBadge"),
  
  // Today's Day
  todayEmoji: document.getElementById("todayEmoji"),
  todayTitle: document.getElementById("todayTitle"),
  todayMalayalam: document.getElementById("todayMalayalam"),
  todayText: document.getElementById("todayText"),
  todayTip: document.getElementById("todayTip"),
  changeDayBtn: document.getElementById("changeDayBtn"),
  copyDayBtn: document.getElementById("copyDayBtn"),
  todayCard: document.getElementById("todayCard"),

  // Advice Generator
  adviceCard: document.getElementById("adviceCard"),
  adviceEmoji: document.getElementById("adviceEmoji"),
  adviceCategoryTag: document.getElementById("adviceCategoryTag"),
  adviceQuote: document.getElementById("adviceQuote"),
  adviceSubtext: document.getElementById("adviceSubtext"),
  meterScore: document.getElementById("meterScore"),
  meterFill: document.getElementById("meterFill"),
  giveAdviceBtn: document.getElementById("giveAdviceBtn"),
  copyBtn: document.getElementById("copyBtn"),
  shareBtn: document.getElementById("shareBtn"),
  favBtn: document.getElementById("favBtn"),
  favIcon: document.getElementById("favIcon"),
  categoryPills: document.querySelectorAll(".category-pill"),
  reactionChips: document.querySelectorAll(".reaction-chip"),

  // Favorites Section
  favList: document.getElementById("favList"),
  emptyFavState: document.getElementById("emptyFavState"),
  clearFavsBtn: document.getElementById("clearFavsBtn"),
  favCountHeading: document.getElementById("favCountHeading"),

  // Stats Section
  statAdviceCount: document.getElementById("statAdviceCount"),
  statConfusedCount: document.getElementById("statConfusedCount"),
  statProductivity: document.getElementById("statProductivity"),
  statTeaRecs: document.getElementById("statTeaRecs"),
  statFavoritesSaved: document.getElementById("statFavoritesSaved"),

  // Toast & Confetti
  toast: document.getElementById("toast"),
  confettiContainer: document.getElementById("confettiContainer")
};

// ==========================================
// 5. INITIALIZATION
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
  initStorage();
  initNavigation();
  initTodayDay();
  initAdviceGenerator();
  initFavorites();
  initStats();
  initReactions();
  initThemeButton();
  initFadeInObserver();
  initNavbarScroll();
});

// ==========================================
// THEME BUTTON (🌙 / ☀️)
// ==========================================

function initThemeButton() {
  const themeBtn = document.getElementById("themeBtn");
  if (!themeBtn) return;
  // No full light mode — just a fun easter-egg toggle with toast
  themeBtn.addEventListener("click", () => {
    showToast("ഒരു light mode ഇല്ല. Dark mode only! 🌙 🗿");
    themeBtn.textContent = themeBtn.textContent === "🌙" ? "☀️" : "🌙";
    setTimeout(() => { themeBtn.textContent = "🌙"; }, 2000);
  });
}

// ==========================================
// NAVBAR SCROLL SHADOW
// ==========================================

function initNavbarScroll() {
  const navbar = document.getElementById("navbar");
  if (!navbar) return;
  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }, { passive: true });
}

// ==========================================
// FADE-IN-UP INTERSECTION OBSERVER
// ==========================================

function initFadeInObserver() {
  const elements = document.querySelectorAll(".fade-in-up");
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  elements.forEach(el => observer.observe(el));
}

// Load stored values
function initStorage() {
  try {
    const savedFavs = localStorage.getItem(STORAGE_KEYS.FAVORITES);
    favorites = savedFavs ? JSON.parse(savedFavs) : [];

    const savedCount = localStorage.getItem(STORAGE_KEYS.ADVICE_COUNT);
    adviceGeneratedCount = savedCount ? parseInt(savedCount, 10) : 12;

    const savedConfused = localStorage.getItem(STORAGE_KEYS.CONFUSED_COUNT);
    simulatedConfusedCount = savedConfused ? parseInt(savedConfused, 10) : 1420;
  } catch (e) {
    console.warn("localStorage unavailable or error loading:", e);
    favorites = [];
    adviceGeneratedCount = 12;
  }
}

// Navigation handling
function initNavigation() {
  const navLinks = document.querySelectorAll(".nav-link");

  if (el.mobileToggle && el.navMenu) {
    el.mobileToggle.addEventListener("click", () => {
      el.navMenu.classList.toggle("active");
      el.mobileToggle.classList.toggle("open");
    });

    // Close menu when link is clicked
    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        el.navMenu.classList.remove("active");
        el.mobileToggle.classList.remove("open");
      });
    });
  }

  // Smooth scroll and active indicator switching
  navLinks.forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId && targetId !== "#") {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          navLinks.forEach(l => l.classList.remove("active"));
          this.classList.add("active");
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      }
    });
  });

  // ScrollSpy to automatically highlight current section in navigation
  const sections = document.querySelectorAll("section[id]");
  window.addEventListener("scroll", () => {
    let scrollY = window.pageYOffset;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute("id");
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        });
      }
    });
  });

  updateFavBadge();
}

// ==========================================
// 6. TODAY'S USELESS DAY FEATURE
// ==========================================

function initTodayDay() {
  // Pick random day on load
  currentDayIndex = Math.floor(Math.random() * FAKE_DAYS.length);
  renderTodayDay(false);

  if (el.changeDayBtn) {
    el.changeDayBtn.addEventListener("click", () => {
      changeTodayDay();
    });
  }

  if (el.copyDayBtn) {
    el.copyDayBtn.addEventListener("click", () => {
      const day = FAKE_DAYS[currentDayIndex];
      const textToCopy = `📅 ${day.name} (${day.malayalamName})\n\n"${day.text}"\n\n💡 Tip: ${day.actionTip}\n\n— via 🗿 Useless Life Advice`;
      copyToClipboard(textToCopy, "Day advice copied! 😂");
    });
  }
}

function changeTodayDay() {
  let nextIndex;
  do {
    nextIndex = Math.floor(Math.random() * FAKE_DAYS.length);
  } while (nextIndex === currentDayIndex && FAKE_DAYS.length > 1);

  currentDayIndex = nextIndex;

  // Trigger animation
  if (el.todayCard) {
    el.todayCard.classList.remove("card-pulse");
    void el.todayCard.offsetWidth; // Force reflow
    el.todayCard.classList.add("card-pulse");
  }

  renderTodayDay(true);
}

function renderTodayDay(animate = true) {
  const day = FAKE_DAYS[currentDayIndex];
  if (!day) return;

  const update = () => {
    if (el.todayEmoji) el.todayEmoji.textContent = day.emoji;
    if (el.todayTitle) el.todayTitle.textContent = day.name;
    if (el.todayMalayalam) el.todayMalayalam.textContent = day.malayalamName;
    if (el.todayText) el.todayText.textContent = `"${day.text}"`;
    if (el.todayTip) el.todayTip.textContent = day.actionTip;
  };

  if (animate && el.todayCard) {
    el.todayCard.style.opacity = "0.4";
    el.todayCard.style.transform = "scale(0.98)";
    setTimeout(() => {
      update();
      el.todayCard.style.opacity = "1";
      el.todayCard.style.transform = "scale(1)";
    }, 150);
  } else {
    update();
  }
}

// ==========================================
// 7. MAIN ADVICE GENERATOR
// ==========================================

function initAdviceGenerator() {
  // Category Pill Clicks
  el.categoryPills.forEach(pill => {
    pill.addEventListener("click", () => {
      el.categoryPills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      currentCategory = pill.dataset.category || "all";
      generateAdvice(currentCategory);
    });
  });

  // Giant CTA button
  if (el.giveAdviceBtn) {
    el.giveAdviceBtn.addEventListener("click", () => {
      generateAdvice(currentCategory);
    });
  }

  // Copy Button
  if (el.copyBtn) {
    el.copyBtn.addEventListener("click", () => {
      if (!currentAdvice) return;
      const textToCopy = `🗿 Useless Life Advice:\n\n"${currentAdvice.text}"\n\n💡 ${currentAdvice.subtext}\nUselessness Score: ${currentAdvice.uselessScore} 😂`;
      copyToClipboard(textToCopy, "Advice copied to clipboard! 😂");
    });
  }

  // Share Button
  if (el.shareBtn) {
    el.shareBtn.addEventListener("click", () => {
      shareAdvice();
    });
  }

  // Favorite Button
  if (el.favBtn) {
    el.favBtn.addEventListener("click", () => {
      toggleFavoriteCurrent();
    });
  }

  // Initial advice state:
  generateAdvice("all", false);
}

function generateAdvice(category = "all", increment = true) {
  let pool = ADVICE_DATABASE;
  if (category && category !== "all") {
    pool = ADVICE_DATABASE.filter(item => item.category === category);
    if (pool.length === 0) pool = ADVICE_DATABASE;
  }

  // Pick random different item if possible
  let selected;
  if (pool.length === 1) {
    selected = pool[0];
  } else {
    do {
      selected = pool[Math.floor(Math.random() * pool.length)];
    } while (currentAdvice && selected.id === currentAdvice.id && pool.length > 1);
  }

  currentAdvice = selected;

  // Increment counters
  if (increment) {
    adviceGeneratedCount++;
    simulatedConfusedCount += Math.floor(Math.random() * 3) + 1;
    saveStats();
    updateStatsUI();
  }

  // Animate Card
  animateAdviceCard(selected);
}

function animateAdviceCard(advice) {
  if (!el.adviceCard) return;

  el.adviceCard.classList.add("switching");

  setTimeout(() => {
    if (el.adviceEmoji) el.adviceEmoji.textContent = advice.emoji;
    if (el.adviceCategoryTag) el.adviceCategoryTag.textContent = advice.categoryName;
    if (el.adviceQuote) el.adviceQuote.textContent = advice.text;
    if (el.adviceSubtext) el.adviceSubtext.textContent = advice.subtext;
    if (el.meterScore) el.meterScore.textContent = advice.uselessScore;
    if (el.meterFill) el.meterFill.style.width = advice.uselessScore;

    updateFavButtonUI();

    el.adviceCard.classList.remove("switching");
    el.adviceCard.classList.add("popped");
    setTimeout(() => {
      el.adviceCard.classList.remove("popped");
    }, 300);
  }, 180);
}

// Check if currently displayed advice is in favorites
function isCurrentFavorited() {
  if (!currentAdvice) return false;
  return favorites.some(fav => fav.id === currentAdvice.id);
}

function updateFavButtonUI() {
  if (!el.favBtn || !el.favIcon) return;
  const isFav = isCurrentFavorited();
  if (isFav) {
    el.favBtn.classList.add("favorited");
    el.favIcon.textContent = "❤️";
    el.favBtn.setAttribute("aria-label", "Remove from Favorites");
  } else {
    el.favBtn.classList.remove("favorited");
    el.favIcon.textContent = "🤍";
    el.favBtn.setAttribute("aria-label", "Add to Favorites");
  }
}

function toggleFavoriteCurrent() {
  if (!currentAdvice) return;
  const index = favorites.findIndex(fav => fav.id === currentAdvice.id);

  if (index > -1) {
    // Remove from favorites
    favorites.splice(index, 1);
    showToast("Removed from favorites 💔");
  } else {
    // Add to favorites
    favorites.unshift({ ...currentAdvice, savedAt: new Date().toLocaleDateString() });
    showToast("Saved to Favorites! ❤️ (You'll regret this 😂)");
    spawnParticles("❤️", 8);
  }

  saveFavorites();
  updateFavButtonUI();
  renderFavorites();
  updateFavBadge();
  updateStatsUI();
}

// ==========================================
// 8. FAVORITES SECTION MANAGEMENT
// ==========================================

function initFavorites() {
  renderFavorites();

  if (el.clearFavsBtn) {
    el.clearFavsBtn.addEventListener("click", () => {
      if (favorites.length === 0) return;
      if (confirm("Are you sure you want to delete all saved useless wisdom? 😂")) {
        favorites = [];
        saveFavorites();
        updateFavButtonUI();
        renderFavorites();
        updateFavBadge();
        updateStatsUI();
        showToast("All favorites cleared! 🧹");
      }
    });
  }
}

function renderFavorites() {
  if (!el.favList || !el.emptyFavState) return;

  if (el.favCountHeading) {
    el.favCountHeading.textContent = favorites.length;
  }

  if (favorites.length === 0) {
    el.emptyFavState.style.display = "flex";
    el.favList.style.display = "none";
    if (el.clearFavsBtn) el.clearFavsBtn.style.display = "none";
    return;
  }

  el.emptyFavState.style.display = "none";
  el.favList.style.display = "grid";
  if (el.clearFavsBtn) el.clearFavsBtn.style.display = "inline-flex";

  el.favList.innerHTML = "";

  favorites.forEach((item) => {
    const card = document.createElement("div");
    card.className = "fav-card";
    card.innerHTML = `
      <div class="fav-card-header">
        <div class="fav-tag">
          <span class="fav-emoji">${item.emoji}</span>
          <span>${item.categoryName}</span>
        </div>
        <button class="remove-fav-btn" title="Remove from favorites" data-id="${item.id}" aria-label="Remove">
          ✕
        </button>
      </div>
      <p class="fav-card-quote">“${item.text}”</p>
      <div class="fav-card-footer">
        <span class="fav-score">⚡ ${item.uselessScore} Useless</span>
        <div class="fav-actions">
          <button class="fav-action-btn copy-fav" data-id="${item.id}" title="Copy" aria-label="Copy advice">
            📋 Copy
          </button>
          <button class="fav-action-btn share-fav" data-id="${item.id}" title="Share" aria-label="Share advice">
            📤 Share
          </button>
        </div>
      </div>
    `;

    // Bind remove button
    card.querySelector(".remove-fav-btn").addEventListener("click", (e) => {
      e.stopPropagation();
      removeFavorite(item.id);
    });

    // Bind copy button
    card.querySelector(".copy-fav").addEventListener("click", (e) => {
      e.stopPropagation();
      const text = `🗿 Saved Useless Advice:\n\n"${item.text}"\n\n— via 🗿 Useless Life Advice`;
      copyToClipboard(text, "Favorite copied! 😂");
    });

    // Bind share button
    card.querySelector(".share-fav").addEventListener("click", (e) => {
      e.stopPropagation();
      shareSpecificAdvice(item);
    });

    el.favList.appendChild(card);
  });
}

function removeFavorite(id) {
  favorites = favorites.filter(item => item.id !== id);
  saveFavorites();
  updateFavButtonUI();
  renderFavorites();
  updateFavBadge();
  updateStatsUI();
  showToast("Removed from saved advice 🗑️");
}

function saveFavorites() {
  try {
    localStorage.setItem(STORAGE_KEYS.FAVORITES, JSON.stringify(favorites));
  } catch (e) {
    console.warn("Could not save to localStorage", e);
  }
}

function updateFavBadge() {
  if (!el.favBadge) return;
  el.favBadge.textContent = favorites.length;
  if (favorites.length > 0) {
    el.favBadge.classList.add("visible");
  } else {
    el.favBadge.classList.remove("visible");
  }
}

// ==========================================
// 9. COPY & SHARE UTILITIES
// ==========================================

function copyToClipboard(text, successMsg = "Copied! 😂") {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text)
      .then(() => {
        showToast(successMsg);
      })
      .catch(() => {
        fallbackCopy(text, successMsg);
      });
  } else {
    fallbackCopy(text, successMsg);
  }
}

function fallbackCopy(text, successMsg) {
  try {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.opacity = "0";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    const successful = document.execCommand("copy");
    document.body.removeChild(textArea);
    if (successful) {
      showToast(successMsg);
    } else {
      showToast("Select and copy manually!");
    }
  } catch (err) {
    showToast("Failed to copy automatically.");
  }
}

function shareAdvice() {
  if (!currentAdvice) return;
  shareSpecificAdvice(currentAdvice);
}

function shareSpecificAdvice(item) {
  const shareData = {
    title: "🗿 Useless Life Advice",
    text: `"${item.text}"\n\nUselessness Score: ${item.uselessScore} 😂\n`,
    url: window.location.href
  };

  if (navigator.share) {
    navigator.share(shareData)
      .then(() => {
        showToast("Shared this useless wisdom 😂");
      })
      .catch((err) => {
        if (err.name !== "AbortError") {
          // Fallback to clipboard if share failed
          copyToClipboard(`"${item.text}" — via Useless Life Advice 😂`, "Share copied to clipboard! 😂");
        }
      });
  } else {
    // Fallback: Copy to clipboard
    const textToCopy = `"${item.text}"\n\n— 🗿 Useless Life Advice: 100% Useless. 0% Life Improvement. 😂`;
    copyToClipboard(textToCopy, "Share link & advice copied to clipboard! 😂");
  }
}

// ==========================================
// 10. STATISTICS TRACKER
// ==========================================

function initStats() {
  updateStatsUI();
}

function saveStats() {
  try {
    localStorage.setItem(STORAGE_KEYS.ADVICE_COUNT, adviceGeneratedCount.toString());
    localStorage.setItem(STORAGE_KEYS.CONFUSED_COUNT, simulatedConfusedCount.toString());
  } catch (e) {
    console.warn("Error saving stats to localStorage", e);
  }
}

function updateStatsUI() {
  if (el.statAdviceCount) {
    animateNumber(el.statAdviceCount, adviceGeneratedCount);
  }
  if (el.statConfusedCount) {
    animateNumber(el.statConfusedCount, simulatedConfusedCount);
  }
  if (el.statFavoritesSaved) {
    animateNumber(el.statFavoritesSaved, favorites.length);
  }
  if (el.statProductivity) {
    el.statProductivity.textContent = "0.00%";
  }
  if (el.statTeaRecs) {
    // Simulated proportional tea cups
    const teaCount = 42 + Math.floor(adviceGeneratedCount * 1.5);
    animateNumber(el.statTeaRecs, teaCount);
  }
}

function animateNumber(element, target) {
  const current = parseInt(element.textContent.replace(/,/g, ""), 10) || 0;
  if (current === target) {
    element.textContent = target.toLocaleString();
    return;
  }
  const diff = target - current;
  const step = Math.ceil(diff / 10);
  let val = current;

  const timer = setInterval(() => {
    val += step;
    if ((step > 0 && val >= target) || (step < 0 && val <= target)) {
      val = target;
      clearInterval(timer);
    }
    element.textContent = val.toLocaleString();
  }, 25);
}

// ==========================================
// 11. REACTION CHIPS & PARTICLES
// ==========================================

function initReactions() {
  el.reactionChips.forEach(chip => {
    chip.addEventListener("click", (e) => {
      const emoji = chip.dataset.emoji || "😂";
      const rect = chip.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top;
      spawnParticles(emoji, 6, x, y);
      showToast(`Reacted with ${emoji}!`);
    });
  });
}

function spawnParticles(emoji, count = 6, startX = null, startY = null) {
  if (!el.confettiContainer) return;

  const centerX = startX || window.innerWidth / 2;
  const centerY = startY || window.innerHeight / 2;

  for (let i = 0; i < count; i++) {
    const particle = document.createElement("span");
    particle.className = "floating-particle";
    particle.textContent = emoji;
    
    // Random spread
    const spreadX = (Math.random() - 0.5) * 160;
    const spreadY = (Math.random() - 0.5) * 60;
    const dur = 1.2 + Math.random() * 0.6;
    const scale = 0.8 + Math.random() * 0.6;

    particle.style.left = `${centerX + spreadX}px`;
    particle.style.top = `${centerY + spreadY}px`;
    particle.style.animationDuration = `${dur}s`;
    particle.style.transform = `scale(${scale})`;

    el.confettiContainer.appendChild(particle);

    setTimeout(() => {
      if (particle.parentNode) {
        particle.parentNode.removeChild(particle);
      }
    }, dur * 1000);
  }
}

// ==========================================
// 12. TOAST SYSTEM
// ==========================================

let toastTimer = null;

function showToast(message) {
  if (!el.toast) return;

  el.toast.textContent = message;
  el.toast.classList.add("show");

  if (toastTimer) clearTimeout(toastTimer);

  toastTimer = setTimeout(() => {
    el.toast.classList.remove("show");
  }, 2400);
}
