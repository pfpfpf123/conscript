var isFormSubmited = false;
var Ze = Object.create;
var Qt = Object.defineProperty;
var Je = Object.getOwnPropertyDescriptor;
var Qe = Object.getOwnPropertyNames;
var ti = Object.getPrototypeOf,
    ei = Object.prototype.hasOwnProperty;
var te = (t, e) => () => (e || t((e = { exports: {} }).exports, e), e.exports);
var ii = (t, e, i, r) => {
    if ((e && typeof e == "object") || typeof e == "function")
        for (let d of Qe(e))
            !ei.call(t, d) &&
                d !== i &&
                Qt(t, d, {
                    get: () => e[d],
                    enumerable: !(r = Je(e, d)) || r.enumerable,
                });
    return t;
};
var ri = (t, e, i) => (
    (i = t != null ? Ze(ti(t)) : {}),
    ii(
        e || !t || !t.__esModule
            ? Qt(i, "default", { value: t, enumerable: !0 })
            : i,
        t,
    )
);
var ee = te((qr, dt) => {
    (function (t) {
        typeof dt == "object" && dt.exports
            ? (dt.exports = t())
            : (window.intlTelInput = t());
    })(function (t) {
        "use strict";
        return (function () {
            for (
                var e = [
                    [
                        "Afghanistan (\u202B\u0627\u0641\u063A\u0627\u0646\u0633\u062A\u0627\u0646\u202C\u200E)",
                        "af",
                        "93",
                    ],
                    ["Albania (Shqip\xEBri)", "al", "355"],
                    [
                        "Algeria (\u202B\u0627\u0644\u062C\u0632\u0627\u0626\u0631\u202C\u200E)",
                        "dz",
                        "213",
                    ],
                    ["American Samoa", "as", "1", 5, ["684"]],
                    ["Andorra", "ad", "376"],
                    ["Angola", "ao", "244"],
                    ["Anguilla", "ai", "1", 6, ["264"]],
                    ["Antigua and Barbuda", "ag", "1", 7, ["268"]],
                    ["Argentina", "ar", "54"],
                    [
                        "Armenia (\u0540\u0561\u0575\u0561\u057D\u057F\u0561\u0576)",
                        "am",
                        "374",
                    ],
                    ["Aruba", "aw", "297"],
                    ["Ascension Island", "ac", "247"],
                    ["Australia", "au", "61", 0],
                    ["Austria (\xD6sterreich)", "at", "43"],
                    ["Azerbaijan (Az\u0259rbaycan)", "az", "994"],
                    ["Bahamas", "bs", "1", 8, ["242"]],
                    [
                        "Bahrain (\u202B\u0627\u0644\u0628\u062D\u0631\u064A\u0646\u202C\u200E)",
                        "bh",
                        "973",
                    ],
                    [
                        "Bangladesh (\u09AC\u09BE\u0982\u09B2\u09BE\u09A6\u09C7\u09B6)",
                        "bd",
                        "880",
                    ],
                    ["Barbados", "bb", "1", 9, ["246"]],
                    [
                        "Belarus (\u0411\u0435\u043B\u0430\u0440\u0443\u0441\u044C)",
                        "by",
                        "375",
                    ],
                    ["Belgium (Belgi\xEB)", "be", "32"],
                    ["Belize", "bz", "501"],
                    ["Benin (B\xE9nin)", "bj", "229"],
                    ["Bermuda", "bm", "1", 10, ["441"]],
                    ["Bhutan (\u0F60\u0F56\u0FB2\u0F74\u0F42)", "bt", "975"],
                    ["Bolivia", "bo", "591"],
                    [
                        "Bosnia and Herzegovina (\u0411\u043E\u0441\u043D\u0430 \u0438 \u0425\u0435\u0440\u0446\u0435\u0433\u043E\u0432\u0438\u043D\u0430)",
                        "ba",
                        "387",
                    ],
                    ["Botswana", "bw", "267"],
                    ["Brazil (Brasil)", "br", "55"],
                    ["British Indian Ocean Territory", "io", "246"],
                    ["British Virgin Islands", "vg", "1", 11, ["284"]],
                    ["Brunei", "bn", "673"],
                    [
                        "Bulgaria (\u0411\u044A\u043B\u0433\u0430\u0440\u0438\u044F)",
                        "bg",
                        "359",
                    ],
                    ["Burkina Faso", "bf", "226"],
                    ["Burundi (Uburundi)", "bi", "257"],
                    [
                        "Cambodia (\u1780\u1798\u17D2\u1796\u17BB\u1787\u17B6)",
                        "kh",
                        "855",
                    ],
                    ["Cameroon (Cameroun)", "cm", "237"],
                    [
                        "Canada",
                        "ca",
                        "1",
                        1,
                        [
                            "204",
                            "226",
                            "236",
                            "249",
                            "250",
                            "289",
                            "306",
                            "343",
                            "365",
                            "387",
                            "403",
                            "416",
                            "418",
                            "431",
                            "437",
                            "438",
                            "450",
                            "506",
                            "514",
                            "519",
                            "548",
                            "579",
                            "581",
                            "587",
                            "604",
                            "613",
                            "639",
                            "647",
                            "672",
                            "705",
                            "709",
                            "742",
                            "778",
                            "780",
                            "782",
                            "807",
                            "819",
                            "825",
                            "867",
                            "873",
                            "902",
                            "905",
                        ],
                    ],
                    ["Cape Verde (Kabu Verdi)", "cv", "238"],
                    ["Caribbean Netherlands", "bq", "599", 1, ["3", "4", "7"]],
                    ["Cayman Islands", "ky", "1", 12, ["345"]],
                    [
                        "Central African Republic (R\xE9publique centrafricaine)",
                        "cf",
                        "236",
                    ],
                    ["Chad (Tchad)", "td", "235"],
                    ["Chile", "cl", "56"],
                    ["China (\u4E2D\u56FD)", "cn", "86"],
                    ["Christmas Island", "cx", "61", 2, ["89164"]],
                    ["Cocos (Keeling) Islands", "cc", "61", 1, ["89162"]],
                    ["Colombia", "co", "57"],
                    [
                        "Comoros (\u202B\u062C\u0632\u0631 \u0627\u0644\u0642\u0645\u0631\u202C\u200E)",
                        "km",
                        "269",
                    ],
                    ["Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)", "cd", "243"],
                    ["Congo (Republic) (Congo-Brazzaville)", "cg", "242"],
                    ["Cook Islands", "ck", "682"],
                    ["Costa Rica", "cr", "506"],
                    ["C\xF4te d\u2019Ivoire", "ci", "225"],
                    ["Croatia (Hrvatska)", "hr", "385"],
                    ["Cuba", "cu", "53"],
                    ["Cura\xE7ao", "cw", "599", 0],
                    ["Cyprus (\u039A\u03CD\u03C0\u03C1\u03BF\u03C2)", "cy", "357"],
                    ["Czech Republic (\u010Cesk\xE1 republika)", "cz", "420"],
                    ["Denmark (Danmark)", "dk", "45"],
                    ["Djibouti", "dj", "253"],
                    ["Dominica", "dm", "1", 13, ["767"]],
                    [
                        "Dominican Republic (Rep\xFAblica Dominicana)",
                        "do",
                        "1",
                        2,
                        ["809", "829", "849"],
                    ],
                    ["Ecuador", "ec", "593"],
                    ["Egypt (\u202B\u0645\u0635\u0631\u202C\u200E)", "eg", "20"],
                    ["El Salvador", "sv", "503"],
                    ["Equatorial Guinea (Guinea Ecuatorial)", "gq", "240"],
                    ["Eritrea", "er", "291"],
                    ["Estonia (Eesti)", "ee", "372"],
                    ["Eswatini", "sz", "268"],
                    ["Ethiopia", "et", "251"],
                    ["Falkland Islands (Islas Malvinas)", "fk", "500"],
                    ["Faroe Islands (F\xF8royar)", "fo", "298"],
                    ["Fiji", "fj", "679"],
                    ["Finland (Suomi)", "fi", "358", 0],
                    ["France", "fr", "33"],
                    ["French Guiana (Guyane fran\xE7aise)", "gf", "594"],
                    ["French Polynesia (Polyn\xE9sie fran\xE7aise)", "pf", "689"],
                    ["Gabon", "ga", "241"],
                    ["Gambia", "gm", "220"],
                    [
                        "Georgia (\u10E1\u10D0\u10E5\u10D0\u10E0\u10D7\u10D5\u10D4\u10DA\u10DD)",
                        "ge",
                        "995",
                    ],
                    ["Germany (Deutschland)", "de", "49"],
                    ["Ghana (Gaana)", "gh", "233"],
                    ["Gibraltar", "gi", "350"],
                    ["Greece (\u0395\u03BB\u03BB\u03AC\u03B4\u03B1)", "gr", "30"],
                    ["Greenland (Kalaallit Nunaat)", "gl", "299"],
                    ["Grenada", "gd", "1", 14, ["473"]],
                    ["Guadeloupe", "gp", "590", 0],
                    ["Guam", "gu", "1", 15, ["671"]],
                    ["Guatemala", "gt", "502"],
                    ["Guernsey", "gg", "44", 1, ["1481", "7781", "7839", "7911"]],
                    ["Guinea (Guin\xE9e)", "gn", "224"],
                    ["Guinea-Bissau (Guin\xE9 Bissau)", "gw", "245"],
                    ["Guyana", "gy", "592"],
                    ["Haiti", "ht", "509"],
                    ["Honduras", "hn", "504"],
                    ["Hong Kong (\u9999\u6E2F)", "hk", "852"],
                    ["Hungary (Magyarorsz\xE1g)", "hu", "36"],
                    ["Iceland (\xCDsland)", "is", "354"],
                    ["India (\u092D\u093E\u0930\u0924)", "in", "91"],
                    ["Indonesia", "id", "62"],
                    [
                        "Iran (\u202B\u0627\u06CC\u0631\u0627\u0646\u202C\u200E)",
                        "ir",
                        "98",
                    ],
                    [
                        "Iraq (\u202B\u0627\u0644\u0639\u0631\u0627\u0642\u202C\u200E)",
                        "iq",
                        "964",
                    ],
                    ["Ireland", "ie", "353"],
                    [
                        "Isle of Man",
                        "im",
                        "44",
                        2,
                        ["1624", "74576", "7524", "7924", "7624"],
                    ],
                    [
                        "Israel (\u202B\u05D9\u05E9\u05E8\u05D0\u05DC\u202C\u200E)",
                        "il",
                        "972",
                    ],
                    ["Italy (Italia)", "it", "39", 0],
                    ["Jamaica", "jm", "1", 4, ["876", "658"]],
                    ["Japan (\u65E5\u672C)", "jp", "81"],
                    [
                        "Jersey",
                        "je",
                        "44",
                        3,
                        ["1534", "7509", "7700", "7797", "7829", "7937"],
                    ],
                    [
                        "Jordan (\u202B\u0627\u0644\u0623\u0631\u062F\u0646\u202C\u200E)",
                        "jo",
                        "962",
                    ],
                    [
                        "Kazakhstan (\u041A\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043D)",
                        "kz",
                        "7",
                        1,
                        ["33", "7"],
                    ],
                    ["Kenya", "ke", "254"],
                    ["Kiribati", "ki", "686"],
                    ["Kosovo", "xk", "383"],
                    [
                        "Kuwait (\u202B\u0627\u0644\u0643\u0648\u064A\u062A\u202C\u200E)",
                        "kw",
                        "965",
                    ],
                    [
                        "Kyrgyzstan (\u041A\u044B\u0440\u0433\u044B\u0437\u0441\u0442\u0430\u043D)",
                        "kg",
                        "996",
                    ],
                    ["Laos (\u0EA5\u0EB2\u0EA7)", "la", "856"],
                    ["Latvia (Latvija)", "lv", "371"],
                    [
                        "Lebanon (\u202B\u0644\u0628\u0646\u0627\u0646\u202C\u200E)",
                        "lb",
                        "961",
                    ],
                    ["Lesotho", "ls", "266"],
                    ["Liberia", "lr", "231"],
                    [
                        "Libya (\u202B\u0644\u064A\u0628\u064A\u0627\u202C\u200E)",
                        "ly",
                        "218",
                    ],
                    ["Liechtenstein", "li", "423"],
                    ["Lithuania (Lietuva)", "lt", "370"],
                    ["Luxembourg", "lu", "352"],
                    ["Macau (\u6FB3\u9580)", "mo", "853"],
                    ["Madagascar (Madagasikara)", "mg", "261"],
                    ["Malawi", "mw", "265"],
                    ["Malaysia", "my", "60"],
                    ["Maldives", "mv", "960"],
                    ["Mali", "ml", "223"],
                    ["Malta", "mt", "356"],
                    ["Marshall Islands", "mh", "692"],
                    ["Martinique", "mq", "596"],
                    [
                        "Mauritania (\u202B\u0645\u0648\u0631\u064A\u062A\u0627\u0646\u064A\u0627\u202C\u200E)",
                        "mr",
                        "222",
                    ],
                    ["Mauritius (Moris)", "mu", "230"],
                    ["Mayotte", "yt", "262", 1, ["269", "639"]],
                    ["Mexico (M\xE9xico)", "mx", "52"],
                    ["Micronesia", "fm", "691"],
                    ["Moldova (Republica Moldova)", "md", "373"],
                    ["Monaco", "mc", "377"],
                    ["Mongolia (\u041C\u043E\u043D\u0433\u043E\u043B)", "mn", "976"],
                    ["Montenegro (Crna Gora)", "me", "382"],
                    ["Montserrat", "ms", "1", 16, ["664"]],
                    [
                        "Morocco (\u202B\u0627\u0644\u0645\u063A\u0631\u0628\u202C\u200E)",
                        "ma",
                        "212",
                        0,
                    ],
                    ["Mozambique (Mo\xE7ambique)", "mz", "258"],
                    [
                        "Myanmar (Burma) (\u1019\u103C\u1014\u103A\u1019\u102C)",
                        "mm",
                        "95",
                    ],
                    ["Namibia (Namibi\xEB)", "na", "264"],
                    ["Nauru", "nr", "674"],
                    ["Nepal (\u0928\u0947\u092A\u093E\u0932)", "np", "977"],
                    ["Netherlands (Nederland)", "nl", "31"],
                    ["New Caledonia (Nouvelle-Cal\xE9donie)", "nc", "687"],
                    ["New Zealand", "nz", "64"],
                    ["Nicaragua", "ni", "505"],
                    ["Niger (Nijar)", "ne", "227"],
                    ["Nigeria", "ng", "234"],
                    ["Niue", "nu", "683"],
                    ["Norfolk Island", "nf", "672"],
                    [
                        "North Korea (\uC870\uC120 \uBBFC\uC8FC\uC8FC\uC758 \uC778\uBBFC \uACF5\uD654\uAD6D)",
                        "kp",
                        "850",
                    ],
                    [
                        "North Macedonia (\u0421\u0435\u0432\u0435\u0440\u043D\u0430 \u041C\u0430\u043A\u0435\u0434\u043E\u043D\u0438\u0458\u0430)",
                        "mk",
                        "389",
                    ],
                    ["Northern Mariana Islands", "mp", "1", 17, ["670"]],
                    ["Norway (Norge)", "no", "47", 0],
                    [
                        "Oman (\u202B\u0639\u064F\u0645\u0627\u0646\u202C\u200E)",
                        "om",
                        "968",
                    ],
                    [
                        "Pakistan (\u202B\u067E\u0627\u06A9\u0633\u062A\u0627\u0646\u202C\u200E)",
                        "pk",
                        "92",
                    ],
                    ["Palau", "pw", "680"],
                    [
                        "Palestine (\u202B\u0641\u0644\u0633\u0637\u064A\u0646\u202C\u200E)",
                        "ps",
                        "970",
                    ],
                    ["Panama (Panam\xE1)", "pa", "507"],
                    ["Papua New Guinea", "pg", "675"],
                    ["Paraguay", "py", "595"],
                    ["Peru (Per\xFA)", "pe", "51"],
                    ["Philippines", "ph", "63"],
                    ["Poland (Polska)", "pl", "48"],
                    ["Portugal", "pt", "351"],
                    ["Puerto Rico", "pr", "1", 3, ["787", "939"]],
                    ["Qatar (\u202B\u0642\u0637\u0631\u202C\u200E)", "qa", "974"],
                    ["R\xE9union (La R\xE9union)", "re", "262", 0],
                    ["Romania (Rom\xE2nia)", "ro", "40"],
                    ["Russia (\u0420\u043E\u0441\u0441\u0438\u044F)", "ru", "7", 0],
                    ["Rwanda", "rw", "250"],
                    ["Saint Barth\xE9lemy", "bl", "590", 1],
                    ["Saint Helena", "sh", "290"],
                    ["Saint Kitts and Nevis", "kn", "1", 18, ["869"]],
                    ["Saint Lucia", "lc", "1", 19, ["758"]],
                    [
                        "Saint Martin (Saint-Martin (partie fran\xE7aise))",
                        "mf",
                        "590",
                        2,
                    ],
                    [
                        "Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)",
                        "pm",
                        "508",
                    ],
                    ["Saint Vincent and the Grenadines", "vc", "1", 20, ["784"]],
                    ["Samoa", "ws", "685"],
                    ["San Marino", "sm", "378"],
                    [
                        "S\xE3o Tom\xE9 and Pr\xEDncipe (S\xE3o Tom\xE9 e Pr\xEDncipe)",
                        "st",
                        "239",
                    ],
                    [
                        "Saudi Arabia (\u202B\u0627\u0644\u0645\u0645\u0644\u0643\u0629 \u0627\u0644\u0639\u0631\u0628\u064A\u0629 \u0627\u0644\u0633\u0639\u0648\u062F\u064A\u0629\u202C\u200E)",
                        "sa",
                        "966",
                    ],
                    ["Senegal (S\xE9n\xE9gal)", "sn", "221"],
                    ["Serbia (\u0421\u0440\u0431\u0438\u0458\u0430)", "rs", "381"],
                    ["Seychelles", "sc", "248"],
                    ["Sierra Leone", "sl", "232"],
                    ["Singapore", "sg", "65"],
                    ["Sint Maarten", "sx", "1", 21, ["721"]],
                    ["Slovakia (Slovensko)", "sk", "421"],
                    ["Slovenia (Slovenija)", "si", "386"],
                    ["Solomon Islands", "sb", "677"],
                    ["Somalia (Soomaaliya)", "so", "252"],
                    ["South Africa", "za", "27"],
                    ["South Korea (\uB300\uD55C\uBBFC\uAD6D)", "kr", "82"],
                    [
                        "South Sudan (\u202B\u062C\u0646\u0648\u0628 \u0627\u0644\u0633\u0648\u062F\u0627\u0646\u202C\u200E)",
                        "ss",
                        "211",
                    ],
                    ["Spain (Espa\xF1a)", "es", "34"],
                    [
                        "Sri Lanka (\u0DC1\u0DCA\u200D\u0DBB\u0DD3 \u0DBD\u0D82\u0D9A\u0DCF\u0DC0)",
                        "lk",
                        "94",
                    ],
                    [
                        "Sudan (\u202B\u0627\u0644\u0633\u0648\u062F\u0627\u0646\u202C\u200E)",
                        "sd",
                        "249",
                    ],
                    ["Suriname", "sr", "597"],
                    ["Svalbard and Jan Mayen", "sj", "47", 1, ["79"]],
                    ["Sweden (Sverige)", "se", "46"],
                    ["Switzerland (Schweiz)", "ch", "41"],
                    [
                        "Syria (\u202B\u0633\u0648\u0631\u064A\u0627\u202C\u200E)",
                        "sy",
                        "963",
                    ],
                    ["Taiwan (\u53F0\u7063)", "tw", "886"],
                    ["Tajikistan", "tj", "992"],
                    ["Tanzania", "tz", "255"],
                    ["Thailand (\u0E44\u0E17\u0E22)", "th", "66"],
                    ["Timor-Leste", "tl", "670"],
                    ["Togo", "tg", "228"],
                    ["Tokelau", "tk", "690"],
                    ["Tonga", "to", "676"],
                    ["Trinidad and Tobago", "tt", "1", 22, ["868"]],
                    [
                        "Tunisia (\u202B\u062A\u0648\u0646\u0633\u202C\u200E)",
                        "tn",
                        "216",
                    ],
                    ["Turkey (T\xFCrkiye)", "tr", "90"],
                    ["Turkmenistan", "tm", "993"],
                    ["Turks and Caicos Islands", "tc", "1", 23, ["649"]],
                    ["Tuvalu", "tv", "688"],
                    ["U.S. Virgin Islands", "vi", "1", 24, ["340"]],
                    ["Uganda", "ug", "256"],
                    [
                        "Ukraine (\u0423\u043A\u0440\u0430\u0457\u043D\u0430)",
                        "ua",
                        "380",
                    ],
                    [
                        "United Arab Emirates (\u202B\u0627\u0644\u0625\u0645\u0627\u0631\u0627\u062A \u0627\u0644\u0639\u0631\u0628\u064A\u0629 \u0627\u0644\u0645\u062A\u062D\u062F\u0629\u202C\u200E)",
                        "ae",
                        "971",
                    ],
                    ["United Kingdom", "gb", "44", 0],
                    ["United States", "us", "1", 0],
                    ["Uruguay", "uy", "598"],
                    ["Uzbekistan (O\u02BBzbekiston)", "uz", "998"],
                    ["Vanuatu", "vu", "678"],
                    ["Vatican City (Citt\xE0 del Vaticano)", "va", "39", 1, ["06698"]],
                    ["Venezuela", "ve", "58"],
                    ["Vietnam (Vi\u1EC7t Nam)", "vn", "84"],
                    ["Wallis and Futuna (Wallis-et-Futuna)", "wf", "681"],
                    [
                        "Western Sahara (\u202B\u0627\u0644\u0635\u062D\u0631\u0627\u0621 \u0627\u0644\u063A\u0631\u0628\u064A\u0629\u202C\u200E)",
                        "eh",
                        "212",
                        1,
                        ["5288", "5289"],
                    ],
                    [
                        "Yemen (\u202B\u0627\u0644\u064A\u0645\u0646\u202C\u200E)",
                        "ye",
                        "967",
                    ],
                    ["Zambia", "zm", "260"],
                    ["Zimbabwe", "zw", "263"],
                    ["\xC5land Islands", "ax", "358", 1, ["18"]],
                ],
                i = 0;
                i < e.length;
                i++
            ) {
                var r = e[i];
                e[i] = {
                    name: r[0],
                    iso2: r[1],
                    dialCode: r[2],
                    priority: r[3] || 0,
                    areaCodes: r[4] || null,
                };
            }
            function d(x, s) {
                if (!(x instanceof s))
                    throw new TypeError("Cannot call a class as a function");
            }
            function l(x, s) {
                for (var n = 0; n < s.length; n++) {
                    var o = s[n];
                    (o.enumerable = o.enumerable || !1),
                        (o.configurable = !0),
                        "value" in o && (o.writable = !0),
                        Object.defineProperty(x, o.key, o);
                }
            }
            function $(x, s, n) {
                return s && l(x.prototype, s), n && l(x, n), x;
            }
            var f = {
                getInstance: function (s) {
                    var n = s.getAttribute("data-intl-tel-input-id");
                    return window.intlTelInputGlobals.instances[n];
                },
                instances: {},
                documentReady: function () {
                    return document.readyState === "complete";
                },
            };
            typeof window == "object" && (window.intlTelInputGlobals = f);
            var h = 0,
                _ = {
                    allowDropdown: !0,
                    autoHideDialCode: !0,
                    autoPlaceholder: "polite",
                    customContainer: "",
                    customPlaceholder: null,
                    dropdownContainer: null,
                    excludeCountries: [],
                    formatOnDisplay: !0,
                    geoIpLookup: null,
                    hiddenInput: "",
                    initialCountry: "",
                    localizedCountries: null,
                    nationalMode: !0,
                    onlyCountries: [],
                    placeholderNumberType: "MOBILE",
                    preferredCountries: ["us", "gb"],
                    separateDialCode: !1,
                    utilsScript: "",
                },
                v = [
                    "800",
                    "822",
                    "833",
                    "844",
                    "855",
                    "866",
                    "877",
                    "880",
                    "881",
                    "882",
                    "883",
                    "884",
                    "885",
                    "886",
                    "887",
                    "888",
                    "889",
                ],
                I = function (s, n) {
                    for (var o = Object.keys(s), a = 0; a < o.length; a++)
                        n(o[a], s[o[a]]);
                },
                w = function (s) {
                    I(window.intlTelInputGlobals.instances, function (n) {
                        window.intlTelInputGlobals.instances[n][s]();
                    });
                },
                S = (function () {
                    function x(s, n) {
                        var o = this;
                        d(this, x),
                            (this.id = h++),
                            (this.telInput = s),
                            (this.activeItem = null),
                            (this.highlightedItem = null);
                        var a = n || {};
                        (this.options = {}),
                            I(_, function (u, p) {
                                o.options[u] = a.hasOwnProperty(u) ? a[u] : p;
                            }),
                            (this.hadInitialPlaceholder = !!s.getAttribute("placeholder"));
                    }
                    return (
                        $(x, [
                            {
                                key: "_init",
                                value: function () {
                                    var n = this;
                                    if (
                                        (this.options.nationalMode &&
                                            (this.options.autoHideDialCode = !1),
                                            this.options.separateDialCode &&
                                            (this.options.autoHideDialCode =
                                                this.options.nationalMode =
                                                !1),
                                            (this.isMobile =
                                                /Android.+Mobile|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                                                    navigator.userAgent,
                                                )),
                                            this.isMobile &&
                                            (document.body.classList.add("iti-mobile"),
                                                this.options.dropdownContainer ||
                                                (this.options.dropdownContainer = document.body)),
                                            typeof Promise < "u")
                                    ) {
                                        var o = new Promise(function (u, p) {
                                            (n.resolveAutoCountryPromise = u),
                                                (n.rejectAutoCountryPromise = p);
                                        }),
                                            a = new Promise(function (u, p) {
                                                (n.resolveUtilsScriptPromise = u),
                                                    (n.rejectUtilsScriptPromise = p);
                                            });
                                        this.promise = Promise.all([o, a]);
                                    } else
                                        (this.resolveAutoCountryPromise =
                                            this.rejectAutoCountryPromise =
                                            function () { }),
                                            (this.resolveUtilsScriptPromise =
                                                this.rejectUtilsScriptPromise =
                                                function () { });
                                    (this.selectedCountryData = {}),
                                        this._processCountryData(),
                                        this._generateMarkup(),
                                        this._setInitialState(),
                                        this._initListeners(),
                                        this._initRequests();
                                },
                            },
                            {
                                key: "_processCountryData",
                                value: function () {
                                    this._processAllCountries(),
                                        this._processCountryCodes(),
                                        this._processPreferredCountries(),
                                        this.options.localizedCountries &&
                                        this._translateCountriesByLocale(),
                                        (this.options.onlyCountries.length ||
                                            this.options.localizedCountries) &&
                                        this.countries.sort(this._countryNameSort);
                                },
                            },
                            {
                                key: "_addCountryCode",
                                value: function (n, o, a) {
                                    o.length > this.countryCodeMaxLen &&
                                        (this.countryCodeMaxLen = o.length),
                                        this.countryCodes.hasOwnProperty(o) ||
                                        (this.countryCodes[o] = []);
                                    for (var u = 0; u < this.countryCodes[o].length; u++)
                                        if (this.countryCodes[o][u] === n) return;
                                    var p = a !== t ? a : this.countryCodes[o].length;
                                    this.countryCodes[o][p] = n;
                                },
                            },
                            {
                                key: "_processAllCountries",
                                value: function () {
                                    if (this.options.onlyCountries.length) {
                                        var n = this.options.onlyCountries.map(function (a) {
                                            return a.toLowerCase();
                                        });
                                        this.countries = e.filter(function (a) {
                                            return n.indexOf(a.iso2) > -1;
                                        });
                                    } else if (this.options.excludeCountries.length) {
                                        var o = this.options.excludeCountries.map(function (a) {
                                            return a.toLowerCase();
                                        });
                                        this.countries = e.filter(function (a) {
                                            return o.indexOf(a.iso2) === -1;
                                        });
                                    } else this.countries = e;
                                },
                            },
                            {
                                key: "_translateCountriesByLocale",
                                value: function () {
                                    for (var n = 0; n < this.countries.length; n++) {
                                        var o = this.countries[n].iso2.toLowerCase();
                                        this.options.localizedCountries.hasOwnProperty(o) &&
                                            (this.countries[n].name =
                                                this.options.localizedCountries[o]);
                                    }
                                },
                            },
                            {
                                key: "_countryNameSort",
                                value: function (n, o) {
                                    return n.name.localeCompare(o.name);
                                },
                            },
                            {
                                key: "_processCountryCodes",
                                value: function () {
                                    (this.countryCodeMaxLen = 0),
                                        (this.dialCodes = {}),
                                        (this.countryCodes = {});
                                    for (var n = 0; n < this.countries.length; n++) {
                                        var o = this.countries[n];
                                        this.dialCodes[o.dialCode] ||
                                            (this.dialCodes[o.dialCode] = !0),
                                            this._addCountryCode(o.iso2, o.dialCode, o.priority);
                                    }
                                    for (var a = 0; a < this.countries.length; a++) {
                                        var u = this.countries[a];
                                        if (u.areaCodes)
                                            for (
                                                var p = this.countryCodes[u.dialCode][0], g = 0;
                                                g < u.areaCodes.length;
                                                g++
                                            ) {
                                                for (var m = u.areaCodes[g], C = 1; C < m.length; C++) {
                                                    var A = u.dialCode + m.substr(0, C);
                                                    this._addCountryCode(p, A),
                                                        this._addCountryCode(u.iso2, A);
                                                }
                                                this._addCountryCode(u.iso2, u.dialCode + m);
                                            }
                                    }
                                },
                            },
                            {
                                key: "_processPreferredCountries",
                                value: function () {
                                    this.preferredCountries = [];
                                    for (
                                        var n = 0;
                                        n < this.options.preferredCountries.length;
                                        n++
                                    ) {
                                        var o = this.options.preferredCountries[n].toLowerCase(),
                                            a = this._getCountryData(o, !1, !0);
                                        a && this.preferredCountries.push(a);
                                    }
                                },
                            },
                            {
                                key: "_createEl",
                                value: function (n, o, a) {
                                    var u = document.createElement(n);
                                    return (
                                        o &&
                                        I(o, function (p, g) {
                                            return u.setAttribute(p, g);
                                        }),
                                        a && a.appendChild(u),
                                        u
                                    );
                                },
                            },
                            {
                                key: "_generateMarkup",
                                value: function () {
                                    !this.telInput.hasAttribute("autocomplete") &&
                                        !(
                                            this.telInput.form &&
                                            this.telInput.form.hasAttribute("autocomplete")
                                        ) &&
                                        this.telInput.setAttribute("autocomplete", "off");
                                    var n = "iti";
                                    this.options.allowDropdown && (n += " iti--allow-dropdown"),
                                        this.options.separateDialCode &&
                                        (n += " iti--separate-dial-code"),
                                        this.options.customContainer &&
                                        ((n += " "), (n += this.options.customContainer));
                                    var o = this._createEl("div", { class: n });
                                    if (
                                        (this.telInput.parentNode.insertBefore(o, this.telInput),
                                            (this.flagsContainer = this._createEl(
                                                "div",
                                                { class: "iti__flag-container" },
                                                o,
                                            )),
                                            o.appendChild(this.telInput),
                                            (this.selectedFlag = this._createEl(
                                                "div",
                                                {
                                                    class: "iti__selected-flag",
                                                    role: "combobox",
                                                    "aria-controls": "iti-".concat(
                                                        this.id,
                                                        "__country-listbox",
                                                    ),
                                                    "aria-owns": "iti-".concat(
                                                        this.id,
                                                        "__country-listbox",
                                                    ),
                                                    "aria-expanded": "false",
                                                },
                                                this.flagsContainer,
                                            )),
                                            (this.selectedFlagInner = this._createEl(
                                                "div",
                                                { class: "iti__flag" },
                                                this.selectedFlag,
                                            )),
                                            this.options.separateDialCode &&
                                            (this.selectedDialCode = this._createEl(
                                                "div",
                                                { class: "iti__selected-dial-code" },
                                                this.selectedFlag,
                                            )),
                                            this.options.allowDropdown &&
                                            (this.selectedFlag.setAttribute("tabindex", "0"),
                                                (this.dropdownArrow = this._createEl(
                                                    "div",
                                                    { class: "iti__arrow" },
                                                    this.selectedFlag,
                                                )),
                                                (this.countryList = this._createEl("ul", {
                                                    class: "iti__country-list iti__hide",
                                                    id: "iti-".concat(this.id, "__country-listbox"),
                                                    role: "listbox",
                                                    "aria-label": "List of countries",
                                                })),
                                                this.preferredCountries.length &&
                                                (this._appendListItems(
                                                    this.preferredCountries,
                                                    "iti__preferred",
                                                    !0,
                                                ),
                                                    this._createEl(
                                                        "li",
                                                        {
                                                            class: "iti__divider",
                                                            role: "separator",
                                                            "aria-disabled": "true",
                                                        },
                                                        this.countryList,
                                                    )),
                                                this._appendListItems(this.countries, "iti__standard"),
                                                this.options.dropdownContainer
                                                    ? ((this.dropdown = this._createEl("div", {
                                                        class: "iti iti--container",
                                                    })),
                                                        this.dropdown.appendChild(this.countryList))
                                                    : this.flagsContainer.appendChild(this.countryList)),
                                            this.options.hiddenInput)
                                    ) {
                                        var a = this.options.hiddenInput,
                                            u = this.telInput.getAttribute("name");
                                        if (u) {
                                            var p = u.lastIndexOf("[");
                                            p !== -1 &&
                                                (a = "".concat(u.substr(0, p), "[").concat(a, "]"));
                                        }
                                        (this.hiddenInput = this._createEl("input", {
                                            type: "hidden",
                                            name: a,
                                        })),
                                            o.appendChild(this.hiddenInput);
                                    }
                                },
                            },
                        
                            {
                                key: "_appendListItems",
                                value: function (n, o, a) {
                                    for (var u = "", p = 0; p < n.length; p++) {
                                        var g = n[p],
                                            m = a ? "-preferred" : "";
                                        (u += "<li class='iti__country "
                                            .concat(o, "' tabIndex='-1' id='iti-")
                                            .concat(this.id, "__item-")
                                            .concat(g.iso2)
                                            .concat(m, "' role='option' data-dial-code='")
                                            .concat(g.dialCode, "' data-country-code='")
                                            .concat(g.iso2, "' aria-selected='false'>")),
                                            (u +=
                                                "<div class='iti__flag-box'><div class='iti__flag iti__".concat(
                                                    g.iso2,
                                                    "'></div></div>",
                                                )),
                                            (u += "<span class='iti__country-name'>".concat(
                                                g.name,
                                                "</span>",
                                            )),
                                            (u += "<span class='iti__dial-code'>+".concat(
                                                g.dialCode,
                                                "</span>",
                                            )),
                                            (u += "</li>");
                                    }
                                    this.countryList.insertAdjacentHTML("beforeend", u);
                                },
                            },
                            {
                                key: "_setInitialState",
                                value: function () {
                                    var n = this.telInput.getAttribute("value"),
                                        o = this.telInput.value,
                                        a = n && n.charAt(0) === "+" && (!o || o.charAt(0) !== "+"),
                                        u = a ? n : o,
                                        p = this._getDialCode(u),
                                        g = this._isRegionlessNanp(u),
                                        m = this.options,
                                        C = m.initialCountry,
                                        A = m.nationalMode,
                                        M = m.autoHideDialCode,
                                        L = m.separateDialCode;
                                    p && !g
                                        ? this._updateFlagFromNumber(u)
                                        : C !== "auto" &&
                                        (C
                                            ? this._setFlag(C.toLowerCase())
                                            : p && g
                                                ? this._setFlag("us")
                                                : ((this.defaultCountry = this.preferredCountries
                                                    .length
                                                    ? this.preferredCountries[0].iso2
                                                    : this.countries[0].iso2),
                                                    u || this._setFlag(this.defaultCountry)),
                                            !u &&
                                            !A &&
                                            !M &&
                                            !L &&
                                            (this.telInput.value = "+".concat(
                                                this.selectedCountryData.dialCode,
                                            ))),
                                        u && this._updateValFromNumber(u);
                                },
                            },
                            {
                                key: "_initListeners",
                                value: function () {
                                    this._initKeyListeners(),
                                        this.options.autoHideDialCode && this._initBlurListeners(),
                                        this.options.allowDropdown && this._initDropdownListeners(),
                                        this.hiddenInput && this._initHiddenInputListener();
                                },
                            },
                            {
                                key: "_initHiddenInputListener",
                                value: function () {
                                    var n = this;
                                    (this._handleHiddenInputSubmit = function () {
                                        n.hiddenInput.value = n.getNumber();
                                    }),
                                        this.telInput.form &&
                                        this.telInput.form.addEventListener(
                                            "submit",
                                            this._handleHiddenInputSubmit,
                                        );
                                },
                            },
                            {
                                key: "_getClosestLabel",
                                value: function () {
                                    for (var n = this.telInput; n && n.tagName !== "LABEL";)
                                        n = n.parentNode;
                                    return n;
                                },
                            },
                            {
                                key: "_initDropdownListeners",
                                value: function () {
                                    var n = this;
                                    this._handleLabelClick = function (a) {
                                        n.countryList.classList.contains("iti__hide")
                                            ? n.telInput.focus()
                                            : a.preventDefault();
                                    };
                                    var o = this._getClosestLabel();
                                    o && o.addEventListener("click", this._handleLabelClick),
                                        (this._handleClickSelectedFlag = function () {
                                            n.countryList.classList.contains("iti__hide") &&
                                                !n.telInput.disabled &&
                                                !n.telInput.readOnly &&
                                                n._showDropdown();
                                        }),
                                        this.selectedFlag.addEventListener(
                                            "click",
                                            this._handleClickSelectedFlag,
                                        ),
                                        (this._handleFlagsContainerKeydown = function (a) {
                                            var u = n.countryList.classList.contains("iti__hide");
                                            u &&
                                                [
                                                    "ArrowUp",
                                                    "Up",
                                                    "ArrowDown",
                                                    "Down",
                                                    " ",
                                                    "Enter",
                                                ].indexOf(a.key) !== -1 &&
                                                (a.preventDefault(),
                                                    a.stopPropagation(),
                                                    n._showDropdown()),
                                                a.key === "Tab" && n._closeDropdown();
                                        }),
                                        this.flagsContainer.addEventListener(
                                            "keydown",
                                            this._handleFlagsContainerKeydown,
                                        );
                                },
                            },
                            {
                                key: "_initRequests",
                                value: function () {
                                    var n = this;
                                    this.options.utilsScript && !window.intlTelInputUtils
                                        ? window.intlTelInputGlobals.documentReady()
                                            ? window.intlTelInputGlobals.loadUtils(
                                                this.options.utilsScript,
                                            )
                                            : window.addEventListener("load", function () {
                                                window.intlTelInputGlobals.loadUtils(
                                                    n.options.utilsScript,
                                                );
                                            })
                                        : this.resolveUtilsScriptPromise(),
                                        this.options.initialCountry === "auto"
                                            ? this._loadAutoCountry()
                                            : this.resolveAutoCountryPromise();
                                },
                            },
                            {
                                key: "_loadAutoCountry",
                                value: function () {
                                    window.intlTelInputGlobals.autoCountry
                                        ? this.handleAutoCountry()
                                        : window.intlTelInputGlobals.startedLoadingAutoCountry ||
                                        ((window.intlTelInputGlobals.startedLoadingAutoCountry =
                                            !0),
                                            typeof this.options.geoIpLookup == "function" &&
                                            this.options.geoIpLookup(
                                                function (n) {
                                                    (window.intlTelInputGlobals.autoCountry =
                                                        n.toLowerCase()),
                                                        setTimeout(function () {
                                                            return w("handleAutoCountry");
                                                        });
                                                },
                                                function () {
                                                    return w("rejectAutoCountryPromise");
                                                },
                                            ));
                                },
                            },
                            {
                                key: "_initKeyListeners",
                                value: function () {
                                    var n = this;
                                    (this._handleKeyupEvent = function () {
                                        n._updateFlagFromNumber(n.telInput.value) &&
                                            n._triggerCountryChange();
                                    }),
                                        this.telInput.addEventListener(
                                            "keyup",
                                            this._handleKeyupEvent,
                                        ),
                                        (this._handleClipboardEvent = function () {
                                            setTimeout(n._handleKeyupEvent);
                                        }),
                                        this.telInput.addEventListener(
                                            "cut",
                                            this._handleClipboardEvent,
                                        ),
                                        this.telInput.addEventListener(
                                            "paste",
                                            this._handleClipboardEvent,
                                        );
                                },
                            },
                            {
                                key: "_cap",
                                value: function (n) {
                                    var o = this.telInput.getAttribute("maxlength");
                                    return o && n.length > o ? n.substr(0, o) : n;
                                },
                            },
                            {
                                key: "_initBlurListeners",
                                value: function () {
                                    var n = this;
                                    (this._handleSubmitOrBlurEvent = function () {
                                        n._removeEmptyDialCode();
                                    }),
                                        this.telInput.form &&
                                        this.telInput.form.addEventListener(
                                            "submit",
                                            this._handleSubmitOrBlurEvent,
                                        ),
                                        this.telInput.addEventListener(
                                            "blur",
                                            this._handleSubmitOrBlurEvent,
                                        );
                                },
                            },
                            {
                                key: "_removeEmptyDialCode",
                                value: function () {
                                    if (this.telInput.value.charAt(0) === "+") {
                                        var n = this._getNumeric(this.telInput.value);
                                        (!n || this.selectedCountryData.dialCode === n) &&
                                            (this.telInput.value = "");
                                    }
                                },
                            },
                            {
                                key: "_getNumeric",
                                value: function (n) {
                                    return n.replace(/\D/g, "");
                                },
                            },
                            {
                                key: "_trigger",
                                value: function (n) {
                                    var o = document.createEvent("Event");
                                    o.initEvent(n, !0, !0), this.telInput.dispatchEvent(o);
                                },
                            },
                            {
                                key: "_showDropdown",
                                value: function () {
                                    this.countryList.classList.remove("iti__hide"),
                                        this.selectedFlag.setAttribute("aria-expanded", "true"),
                                        this._setDropdownPosition(),
                                        this.activeItem &&
                                        (this._highlightListItem(this.activeItem, !1),
                                            this._scrollTo(this.activeItem, !0)),
                                        this._bindDropdownListeners(),
                                        this.dropdownArrow.classList.add("iti__arrow--up"),
                                        this._trigger("open:countrydropdown");
                                },
                            },
                            {
                                key: "_toggleClass",
                                value: function (n, o, a) {
                                    a && !n.classList.contains(o)
                                        ? n.classList.add(o)
                                        : !a && n.classList.contains(o) && n.classList.remove(o);
                                },
                            },
                            {
                                key: "_setDropdownPosition",
                                value: function () {
                                    var n = this;
                                    if (
                                        (this.options.dropdownContainer &&
                                            this.options.dropdownContainer.appendChild(this.dropdown),
                                            !this.isMobile)
                                    ) {
                                        var o = this.telInput.getBoundingClientRect(),
                                            a =
                                                window.pageYOffset ||
                                                document.documentElement.scrollTop,
                                            u = o.top + a,
                                            p = this.countryList.offsetHeight,
                                            g =
                                                u + this.telInput.offsetHeight + p <
                                                a + window.innerHeight,
                                            m = u - p > a;
                                        if (
                                            (this._toggleClass(
                                                this.countryList,
                                                "iti__country-list--dropup",
                                                !g && m,
                                            ),
                                                this.options.dropdownContainer)
                                        ) {
                                            var C = !g && m ? 0 : this.telInput.offsetHeight;
                                            (this.dropdown.style.top = "".concat(u + C, "px")),
                                                (this.dropdown.style.left = "".concat(
                                                    o.left + document.body.scrollLeft,
                                                    "px",
                                                )),
                                                (this._handleWindowScroll = function () {
                                                    return n._closeDropdown();
                                                }),
                                                window.addEventListener(
                                                    "scroll",
                                                    this._handleWindowScroll,
                                                );
                                        }
                                    }
                                },
                            },
                            {
                                key: "_getClosestListItem",
                                value: function (n) {
                                    for (
                                        var o = n;
                                        o &&
                                        o !== this.countryList &&
                                        !o.classList.contains("iti__country");

                                    )
                                        o = o.parentNode;
                                    return o === this.countryList ? null : o;
                                },
                            },
                            {
                                key: "_bindDropdownListeners",
                                value: function () {
                                    var n = this;
                                    (this._handleMouseoverCountryList = function (p) {
                                        var g = n._getClosestListItem(p.target);
                                        g && n._highlightListItem(g, !1);
                                    }),
                                        this.countryList.addEventListener(
                                            "mouseover",
                                            this._handleMouseoverCountryList,
                                        ),
                                        (this._handleClickCountryList = function (p) {
                                            var g = n._getClosestListItem(p.target);
                                            g && n._selectListItem(g);
                                        }),
                                        this.countryList.addEventListener(
                                            "click",
                                            this._handleClickCountryList,
                                        );
                                    var o = !0;
                                    (this._handleClickOffToClose = function () {
                                        o || n._closeDropdown(), (o = !1);
                                    }),
                                        document.documentElement.addEventListener(
                                            "click",
                                            this._handleClickOffToClose,
                                        );
                                    var a = "",
                                        u = null;
                                    (this._handleKeydownOnDropdown = function (p) {
                                        p.preventDefault(),
                                            p.key === "ArrowUp" ||
                                                p.key === "Up" ||
                                                p.key === "ArrowDown" ||
                                                p.key === "Down"
                                                ? n._handleUpDownKey(p.key)
                                                : p.key === "Enter"
                                                    ? n._handleEnterKey()
                                                    : p.key === "Escape"
                                                        ? n._closeDropdown()
                                                        : /^[a-zA-ZÀ-ÿа-яА-Я ]$/.test(p.key) &&
                                                        (u && clearTimeout(u),
                                                            (a += p.key.toLowerCase()),
                                                            n._searchForCountry(a),
                                                            (u = setTimeout(function () {
                                                                a = "";
                                                            }, 1e3)));
                                    }),
                                        document.addEventListener(
                                            "keydown",
                                            this._handleKeydownOnDropdown,
                                        );
                                },
                            },
                            {
                                key: "_handleUpDownKey",
                                value: function (n) {
                                    var o =
                                        n === "ArrowUp" || n === "Up"
                                            ? this.highlightedItem.previousElementSibling
                                            : this.highlightedItem.nextElementSibling;
                                    o &&
                                        (o.classList.contains("iti__divider") &&
                                            (o =
                                                n === "ArrowUp" || n === "Up"
                                                    ? o.previousElementSibling
                                                    : o.nextElementSibling),
                                            this._highlightListItem(o, !0));
                                },
                            },
                            {
                                key: "_handleEnterKey",
                                value: function () {
                                    this.highlightedItem &&
                                        this._selectListItem(this.highlightedItem);
                                },
                            },
                            {
                                key: "_searchForCountry",
                                value: function (n) {
                                    for (var o = 0; o < this.countries.length; o++)
                                        if (this._startsWith(this.countries[o].name, n)) {
                                            var a = this.countryList.querySelector(
                                                "#iti-"
                                                    .concat(this.id, "__item-")
                                                    .concat(this.countries[o].iso2),
                                            );
                                            this._highlightListItem(a, !1), this._scrollTo(a, !0);
                                            break;
                                        }
                                },
                            },
                            {
                                key: "_startsWith",
                                value: function (n, o) {
                                    return n.substr(0, o.length).toLowerCase() === o;
                                },
                            },
                            {
                                key: "_updateValFromNumber",
                                value: function (n) {
                                    var o = n;
                                    if (
                                        this.options.formatOnDisplay &&
                                        window.intlTelInputUtils &&
                                        this.selectedCountryData
                                    ) {
                                        var a =
                                            !this.options.separateDialCode &&
                                            (this.options.nationalMode || o.charAt(0) !== "+"),
                                            u = intlTelInputUtils.numberFormat,
                                            p = u.NATIONAL,
                                            g = u.INTERNATIONAL,
                                            m = a ? p : g;
                                        o = intlTelInputUtils.formatNumber(
                                            o,
                                            this.selectedCountryData.iso2,
                                            m,
                                        );
                                    }
                                    (o = this._beforeSetNumber(o)), (this.telInput.value = o);
                                },
                            },
                            {
                                key: "_updateFlagFromNumber",
                                value: function (n) {
                                    var o = n,
                                        a = this.selectedCountryData.dialCode,
                                        u = a === "1";
                                    o &&
                                        this.options.nationalMode &&
                                        u &&
                                        o.charAt(0) !== "+" &&
                                        (o.charAt(0) !== "1" && (o = "1".concat(o)),
                                            (o = "+".concat(o))),
                                        this.options.separateDialCode &&
                                        a &&
                                        o.charAt(0) !== "+" &&
                                        (o = "+".concat(a).concat(o));
                                    var p = this._getDialCode(o, !0),
                                        g = this._getNumeric(o),
                                        m = null;
                                    if (p) {
                                        var C = this.countryCodes[this._getNumeric(p)],
                                            A =
                                                C.indexOf(this.selectedCountryData.iso2) !== -1 &&
                                                g.length <= p.length - 1,
                                            M = a === "1" && this._isRegionlessNanp(g);
                                        if (!M && !A) {
                                            for (var L = 0; L < C.length; L++)
                                                if (C[L]) {
                                                    m = C[L];
                                                    break;
                                                }
                                        }
                                    } else
                                        o.charAt(0) === "+" && g.length
                                            ? (m = "")
                                            : (!o || o === "+") && (m = this.defaultCountry);
                                    return m !== null ? this._setFlag(m) : !1;
                                },
                            },
                            {
                                key: "_isRegionlessNanp",
                                value: function (n) {
                                    var o = this._getNumeric(n);
                                    if (o.charAt(0) === "1") {
                                        var a = o.substr(1, 3);
                                        return v.indexOf(a) !== -1;
                                    }
                                    return !1;
                                },
                            },
                            {
                                key: "_highlightListItem",
                                value: function (n, o) {
                                    var a = this.highlightedItem;
                                    a && a.classList.remove("iti__highlight"),
                                        (this.highlightedItem = n),
                                        this.highlightedItem.classList.add("iti__highlight"),
                                        o && this.highlightedItem.focus();
                                },
                            },
                            {
                                key: "_getCountryData",
                                value: function (n, o, a) {
                                    for (var u = o ? e : this.countries, p = 0; p < u.length; p++)
                                        if (u[p].iso2 === n) return u[p];
                                    if (a) return null;
                                    throw new Error("No country data for '".concat(n, "'"));
                                },
                            },
                            {
                                key: "_setFlag",
                                value: function (n) {
                                    var o = this.selectedCountryData.iso2
                                        ? this.selectedCountryData
                                        : {};
                                    (this.selectedCountryData = n
                                        ? this._getCountryData(n, !1, !1)
                                        : {}),
                                        this.selectedCountryData.iso2 &&
                                        (this.defaultCountry = this.selectedCountryData.iso2),
                                        this.selectedFlagInner.setAttribute(
                                            "class",
                                            "iti__flag iti__".concat(n),
                                        );
                                    var a = n
                                        ? ""
                                            .concat(this.selectedCountryData.name, ": +")
                                            .concat(this.selectedCountryData.dialCode)
                                        : "Unknown";
                                    if (
                                        (this.selectedFlag.setAttribute("title", a),
                                            this.options.separateDialCode)
                                    ) {
                                        var u = this.selectedCountryData.dialCode
                                            ? "+".concat(this.selectedCountryData.dialCode)
                                            : "";
                                        this.selectedDialCode.innerHTML = u;
                                        var p =
                                            this.selectedFlag.offsetWidth ||
                                            this._getHiddenSelectedFlagWidth();
                                        this.telInput.style.paddingLeft = "".concat(p + 6, "px");
                                    }
                                    if ((this._updatePlaceholder(), this.options.allowDropdown)) {
                                        var g = this.activeItem;
                                        if (
                                            (g &&
                                                (g.classList.remove("iti__active"),
                                                    g.setAttribute("aria-selected", "false")),
                                                n)
                                        ) {
                                            var m =
                                                this.countryList.querySelector(
                                                    "#iti-"
                                                        .concat(this.id, "__item-")
                                                        .concat(n, "-preferred"),
                                                ) ||
                                                this.countryList.querySelector(
                                                    "#iti-".concat(this.id, "__item-").concat(n),
                                                );
                                            m.setAttribute("aria-selected", "true"),
                                                m.classList.add("iti__active"),
                                                (this.activeItem = m),
                                                this.selectedFlag.setAttribute(
                                                    "aria-activedescendant",
                                                    m.getAttribute("id"),
                                                );
                                        }
                                    }
                                    return o.iso2 !== n;
                                },
                            },
                            {
                                key: "_getHiddenSelectedFlagWidth",
                                value: function () {
                                    var n = this.telInput.parentNode.cloneNode();
                                    (n.style.visibility = "hidden"), document.body.appendChild(n);
                                    var o = this.flagsContainer.cloneNode();
                                    n.appendChild(o);
                                    var a = this.selectedFlag.cloneNode(!0);
                                    o.appendChild(a);
                                    var u = a.offsetWidth;
                                    return n.parentNode.removeChild(n), u;
                                },
                            },
                            {
                                key: "_updatePlaceholder",
                                value: function () {
                                    var n =
                                        this.options.autoPlaceholder === "aggressive" ||
                                        (!this.hadInitialPlaceholder &&
                                            this.options.autoPlaceholder === "polite");
                                    if (window.intlTelInputUtils && n) {
                                        var o =
                                            intlTelInputUtils.numberType[
                                            this.options.placeholderNumberType
                                            ],
                                            a = this.selectedCountryData.iso2
                                                ? intlTelInputUtils.getExampleNumber(
                                                    this.selectedCountryData.iso2,
                                                    this.options.nationalMode,
                                                    o,
                                                )
                                                : "";
                                        (a = this._beforeSetNumber(a)),
                                            typeof this.options.customPlaceholder == "function" &&
                                            (a = this.options.customPlaceholder(
                                                a,
                                                this.selectedCountryData,
                                            )),
                                            this.telInput.setAttribute("placeholder", a);
                                    }
                                },
                            },
                            {
                                key: "_selectListItem",
                                value: function (n) {
                                    var o = this._setFlag(n.getAttribute("data-country-code"));
                                    this._closeDropdown(),
                                        this._updateDialCode(n.getAttribute("data-dial-code"), !0),
                                        this.telInput.focus();
                                    var a = this.telInput.value.length;
                                    this.telInput.setSelectionRange(a, a),
                                        o && this._triggerCountryChange();
                                },
                            },
                            {
                                key: "_closeDropdown",
                                value: function () {
                                    this.countryList.classList.add("iti__hide"),
                                        this.selectedFlag.setAttribute("aria-expanded", "false"),
                                        this.dropdownArrow.classList.remove("iti__arrow--up"),
                                        document.removeEventListener(
                                            "keydown",
                                            this._handleKeydownOnDropdown,
                                        ),
                                        document.documentElement.removeEventListener(
                                            "click",
                                            this._handleClickOffToClose,
                                        ),
                                        this.countryList.removeEventListener(
                                            "mouseover",
                                            this._handleMouseoverCountryList,
                                        ),
                                        this.countryList.removeEventListener(
                                            "click",
                                            this._handleClickCountryList,
                                        ),
                                        this.options.dropdownContainer &&
                                        (this.isMobile ||
                                            window.removeEventListener(
                                                "scroll",
                                                this._handleWindowScroll,
                                            ),
                                            this.dropdown.parentNode &&
                                            this.dropdown.parentNode.removeChild(this.dropdown)),
                                        this._trigger("close:countrydropdown");
                                },
                            },
                            {
                                key: "_scrollTo",
                                value: function (n, o) {
                                    var a = this.countryList,
                                        u =
                                            window.pageYOffset || document.documentElement.scrollTop,
                                        p = a.offsetHeight,
                                        g = a.getBoundingClientRect().top + u,
                                        m = g + p,
                                        C = n.offsetHeight,
                                        A = n.getBoundingClientRect().top + u,
                                        M = A + C,
                                        L = A - g + a.scrollTop,
                                        U = p / 2 - C / 2;
                                    if (A < g) o && (L -= U), (a.scrollTop = L);
                                    else if (M > m) {
                                        o && (L += U);
                                        var ht = p - C;
                                        a.scrollTop = L - ht;
                                    }
                                },
                            },
                            {
                                key: "_updateDialCode",
                                value: function (n, o) {
                                    var a = this.telInput.value,
                                        u = "+".concat(n),
                                        p;
                                    if (a.charAt(0) === "+") {
                                        var g = this._getDialCode(a);
                                        g ? (p = a.replace(g, u)) : (p = u);
                                    } else {
                                        if (
                                            this.options.nationalMode ||
                                            this.options.separateDialCode
                                        )
                                            return;
                                        if (a) p = u + a;
                                        else if (o || !this.options.autoHideDialCode) p = u;
                                        else return;
                                    }
                                    this.telInput.value = p;
                                },
                            },
                            {
                                key: "_getDialCode",
                                value: function (n, o) {
                                    var a = "";
                                    if (n.charAt(0) === "+")
                                        for (var u = "", p = 0; p < n.length; p++) {
                                            var g = n.charAt(p);
                                            if (!isNaN(parseInt(g, 10))) {
                                                if (((u += g), o))
                                                    this.countryCodes[u] && (a = n.substr(0, p + 1));
                                                else if (this.dialCodes[u]) {
                                                    a = n.substr(0, p + 1);
                                                    break;
                                                }
                                                if (u.length === this.countryCodeMaxLen) break;
                                            }
                                        }
                                    return a;
                                },
                            },
                            {
                                key: "_getFullNumber",
                                value: function () {
                                    var n = this.telInput.value.trim(),
                                        o = this.selectedCountryData.dialCode,
                                        a,
                                        u = this._getNumeric(n);
                                    return (
                                        this.options.separateDialCode &&
                                            n.charAt(0) !== "+" &&
                                            o &&
                                            u
                                            ? (a = "+".concat(o))
                                            : (a = ""),
                                        a + n
                                    );
                                },
                            },
                            {
                                key: "_beforeSetNumber",
                                value: function (n) {
                                    var o = n;
                                    if (this.options.separateDialCode) {
                                        var a = this._getDialCode(o);
                                        if (a) {
                                            a = "+".concat(this.selectedCountryData.dialCode);
                                            var u =
                                                o[a.length] === " " || o[a.length] === "-"
                                                    ? a.length + 1
                                                    : a.length;
                                            o = o.substr(u);
                                        }
                                    }
                                    return this._cap(o);
                                },
                            },
                            {
                                key: "_triggerCountryChange",
                                value: function () {
                                    this._trigger("countrychange");
                                },
                            },
                            {
                                key: "handleAutoCountry",
                                value: function () {
                                    this.options.initialCountry === "auto" &&
                                        ((this.defaultCountry =
                                            window.intlTelInputGlobals.autoCountry),
                                            this.telInput.value || this.setCountry(this.defaultCountry),
                                            this.resolveAutoCountryPromise());
                                },
                            },
                            {
                                key: "handleUtils",
                                value: function () {
                                    window.intlTelInputUtils &&
                                        (this.telInput.value &&
                                            this._updateValFromNumber(this.telInput.value),
                                            this._updatePlaceholder()),
                                        this.resolveUtilsScriptPromise();
                                },
                            },
                            {
                                key: "destroy",
                                value: function () {
                                    var n = this.telInput.form;
                                    if (this.options.allowDropdown) {
                                        this._closeDropdown(),
                                            this.selectedFlag.removeEventListener(
                                                "click",
                                                this._handleClickSelectedFlag,
                                            ),
                                            this.flagsContainer.removeEventListener(
                                                "keydown",
                                                this._handleFlagsContainerKeydown,
                                            );
                                        var o = this._getClosestLabel();
                                        o && o.removeEventListener("click", this._handleLabelClick);
                                    }
                                    this.hiddenInput &&
                                        n &&
                                        n.removeEventListener(
                                            "submit",
                                            this._handleHiddenInputSubmit,
                                        ),
                                        this.options.autoHideDialCode &&
                                        (n &&
                                            n.removeEventListener(
                                                "submit",
                                                this._handleSubmitOrBlurEvent,
                                            ),
                                            this.telInput.removeEventListener(
                                                "blur",
                                                this._handleSubmitOrBlurEvent,
                                            )),
                                        this.telInput.removeEventListener(
                                            "keyup",
                                            this._handleKeyupEvent,
                                        ),
                                        this.telInput.removeEventListener(
                                            "cut",
                                            this._handleClipboardEvent,
                                        ),
                                        this.telInput.removeEventListener(
                                            "paste",
                                            this._handleClipboardEvent,
                                        ),
                                        this.telInput.removeAttribute("data-intl-tel-input-id");
                                    var a = this.telInput.parentNode;
                                    a.parentNode.insertBefore(this.telInput, a),
                                        a.parentNode.removeChild(a),
                                        delete window.intlTelInputGlobals.instances[this.id];
                                },
                            },
                            {
                                key: "getExtension",
                                value: function () {
                                    return window.intlTelInputUtils
                                        ? intlTelInputUtils.getExtension(
                                            this._getFullNumber(),
                                            this.selectedCountryData.iso2,
                                        )
                                        : "";
                                },
                            },
                            {
                                key: "getNumber",
                                value: function (n) {
                                    if (window.intlTelInputUtils) {
                                        var o = this.selectedCountryData.iso2;
                                        return intlTelInputUtils.formatNumber(
                                            this._getFullNumber(),
                                            o,
                                            n,
                                        );
                                    }
                                    return "";
                                },
                            },
                            {
                                key: "getNumberType",
                                value: function () {
                                    return window.intlTelInputUtils
                                        ? intlTelInputUtils.getNumberType(
                                            this._getFullNumber(),
                                            this.selectedCountryData.iso2,
                                        )
                                        : -99;
                                },
                            },
                            {
                                key: "getSelectedCountryData",
                                value: function () {
                                    return this.selectedCountryData;
                                },
                            },
                            {
                                key: "getValidationError",
                                value: function () {
                                    if (window.intlTelInputUtils) {
                                        var n = this.selectedCountryData.iso2;
                                        return intlTelInputUtils.getValidationError(
                                            this._getFullNumber(),
                                            n,
                                        );
                                    }
                                    return -99;
                                },
                            },
                            {
                                key: "isValidNumber",
                                value: function () {
                                    var n = this._getFullNumber().trim(),
                                        o = this.options.nationalMode
                                            ? this.selectedCountryData.iso2
                                            : "";
                                    return window.intlTelInputUtils
                                        ? intlTelInputUtils.isValidNumber(n, o)
                                        : null;
                                },
                            },
                            {
                                key: "setCountry",
                                value: function (n) {
                                    var o = n.toLowerCase();
                                    this.selectedFlagInner.classList.contains(
                                        "iti__".concat(o),
                                    ) ||
                                        (this._setFlag(o),
                                            this._updateDialCode(this.selectedCountryData.dialCode, !1),
                                            this._triggerCountryChange());
                                },
                            },
                            {
                                key: "setNumber",
                                value: function (n) {
                                    var o = this._updateFlagFromNumber(n);
                                    this._updateValFromNumber(n),
                                        o && this._triggerCountryChange();
                                },
                            },
                            {
                                key: "setPlaceholderNumberType",
                                value: function (n) {
                                    (this.options.placeholderNumberType = n),
                                        this._updatePlaceholder();
                                },
                            },
                        ]),
                        x
                    );
                })();
            f.getCountryData = function () {
                return e;
            };
            var F = function (s, n, o) {
                var a = document.createElement("script");
                (a.onload = function () {
                    w("handleUtils"), n && n();
                }),
                    (a.onerror = function () {
                        w("rejectUtilsScriptPromise"), o && o();
                    }),
                    (a.className = "iti-load-utils"),
                    (a.async = !0),
                    (a.src = s),
                    document.body.appendChild(a);
            };
            return (
                (f.loadUtils = function (x) {
                    if (
                        !window.intlTelInputUtils &&
                        !window.intlTelInputGlobals.startedLoadingUtilsScript
                    ) {
                        if (
                            ((window.intlTelInputGlobals.startedLoadingUtilsScript = !0),
                                typeof Promise < "u")
                        )
                            return new Promise(function (s, n) {
                                return F(x, s, n);
                            });
                        F(x);
                    }
                    return null;
                }),
                (f.defaults = _),
                (f.version = "17.0.21"),
                function (x, s) {
                    var n = new S(x, s);
                    return (
                        n._init(),
                        x.setAttribute("data-intl-tel-input-id", n.id),
                        (window.intlTelInputGlobals.instances[n.id] = n),
                        n
                    );
                }
            );
        })();
    });
});
var re = te((Xr, ie) => {
    ie.exports = ee();
});
var je = ri(re());
function ot(t) {
    "@babel/helpers - typeof";
    return (
        typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
            ? (ot = function (i) {
                return typeof i;
            })
            : (ot = function (i) {
                return i &&
                    typeof Symbol == "function" &&
                    i.constructor === Symbol &&
                    i !== Symbol.prototype
                    ? "symbol"
                    : typeof i;
            }),
        ot(t)
    );
}
function D(t) {
    var e = typeof t == "string" || t instanceof String;
    if (!e) {
        var i = ot(t);
        throw (
            (t === null ? (i = "null") : i === "object" && (i = t.constructor.name),
                new TypeError("Expected a string but received a ".concat(i)))
        );
    }
}
function at(t) {
    "@babel/helpers - typeof";
    return (
        typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
            ? (at = function (i) {
                return typeof i;
            })
            : (at = function (i) {
                return i &&
                    typeof Symbol == "function" &&
                    i.constructor === Symbol &&
                    i !== Symbol.prototype
                    ? "symbol"
                    : typeof i;
            }),
        at(t)
    );
}
function Z(t, e) {
    D(t);
    var i, r;
    at(e) === "object"
        ? ((i = e.min || 0), (r = e.max))
        : ((i = arguments[1]), (r = arguments[2]));
    var d = encodeURI(t).split(/%..|./).length - 1;
    return d >= i && (typeof r > "u" || d <= r);
}
function J() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
        e = arguments.length > 1 ? arguments[1] : void 0;
    for (var i in e) typeof t[i] > "u" && (t[i] = e[i]);
    return t;
}
var ni = {
    require_tld: !0,
    allow_underscores: !1,
    allow_trailing_dot: !1,
    allow_numeric_tld: !1,
    allow_wildcard: !1,
    ignore_max_length: !1,
};
function _t(t, e) {
    D(t),
        (e = J(e, ni)),
        e.allow_trailing_dot &&
        t[t.length - 1] === "." &&
        (t = t.substring(0, t.length - 1)),
        e.allow_wildcard === !0 && t.indexOf("*.") === 0 && (t = t.substring(2));
    var i = t.split("."),
        r = i[i.length - 1];
    return (e.require_tld &&
        (i.length < 2 ||
            (!e.allow_numeric_tld &&
                !/^([a-z\u00A1-\u00A8\u00AA-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}|xn[a-z0-9-]{2,})$/i.test(
                    r,
                )) ||
            /\s/.test(r))) ||
        (!e.allow_numeric_tld && /^\d+$/.test(r))
        ? !1
        : i.every(function (d) {
            return !(
                (d.length > 63 && !e.ignore_max_length) ||
                !/^[a-z_\u00a1-\uffff0-9-]+$/i.test(d) ||
                /[\uff01-\uff5e]/.test(d) ||
                /^-|-$/.test(d) ||
                (!e.allow_underscores && /_/.test(d))
            );
        });
}
var ne = "(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])",
    G = "(".concat(ne, "[.]){3}").concat(ne),
    di = new RegExp("^".concat(G, "$")),
    N = "(?:[0-9a-fA-F]{1,4})",
    oi = new RegExp(
        "^(" +
        "(?:".concat(N, ":){7}(?:").concat(N, "|:)|") +
        "(?:".concat(N, ":){6}(?:").concat(G, "|:").concat(N, "|:)|") +
        "(?:".concat(N, ":){5}(?::").concat(G, "|(:").concat(N, "){1,2}|:)|") +
        "(?:"
            .concat(N, ":){4}(?:(:")
            .concat(N, "){0,1}:")
            .concat(G, "|(:")
            .concat(N, "){1,3}|:)|") +
        "(?:"
            .concat(N, ":){3}(?:(:")
            .concat(N, "){0,2}:")
            .concat(G, "|(:")
            .concat(N, "){1,4}|:)|") +
        "(?:"
            .concat(N, ":){2}(?:(:")
            .concat(N, "){0,3}:")
            .concat(G, "|(:")
            .concat(N, "){1,5}|:)|") +
        "(?:"
            .concat(N, ":){1}(?:(:")
            .concat(N, "){0,4}:")
            .concat(G, "|(:")
            .concat(N, "){1,6}|:)|") +
        "(?::((?::"
            .concat(N, "){0,5}:")
            .concat(G, "|(?::")
            .concat(N, "){1,7}|:))") +
        ")(%[0-9a-zA-Z-.:]{1,})?$",
    );
function K(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    return (
        D(t),
        (e = String(e)),
        e
            ? e === "4"
                ? di.test(t)
                : e === "6"
                    ? oi.test(t)
                    : !1
            : K(t, 4) || K(t, 6)
    );
}
var ai = {
    allow_display_name: !1,
    allow_underscores: !1,
    require_display_name: !1,
    allow_utf8_local_part: !0,
    require_tld: !0,
    blacklisted_chars: "",
    ignore_max_length: !1,
    host_blacklist: [],
    host_whitelist: [],
},
    li = /^([^\x00-\x1F\x7F-\x9F\cX]+)</i,
    si = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i,
    ui = /^[a-z\d]+$/,
    $i =
        /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i,
    fi =
        /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A1-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i,
    pi =
        /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i,
    ci = 254;
function hi(t) {
    var e = t.replace(/^"(.+)"$/, "$1");
    if (!e.trim()) return !1;
    var i = /[\.";<>]/.test(e);
    if (i) {
        if (e === t) return !1;
        var r = e.split('"').length === e.split('\\"').length;
        if (!r) return !1;
    }
    return !0;
}
function mt(t, e) {
    if ((D(t), (e = J(e, ai)), e.require_display_name || e.allow_display_name)) {
        var i = t.match(li);
        if (i) {
            var r = i[1];
            if (
                ((t = t.replace(r, "").replace(/(^<|>$)/g, "")),
                    r.endsWith(" ") && (r = r.slice(0, -1)),
                    !hi(r))
            )
                return !1;
        } else if (e.require_display_name) return !1;
    }
    if (!e.ignore_max_length && t.length > ci) return !1;
    var d = t.split("@"),
        l = d.pop(),
        $ = l.toLowerCase();
    if (
        e.host_blacklist.includes($) ||
        (e.host_whitelist.length > 0 && !e.host_whitelist.includes($))
    )
        return !1;
    var f = d.join("@");
    if (
        e.domain_specific_validation &&
        ($ === "gmail.com" || $ === "googlemail.com")
    ) {
        f = f.toLowerCase();
        var h = f.split("+")[0];
        if (!Z(h.replace(/\./g, ""), { min: 6, max: 30 })) return !1;
        for (var _ = h.split("."), v = 0; v < _.length; v++)
            if (!ui.test(_[v])) return !1;
    }
    if (e.ignore_max_length === !1 && (!Z(f, { max: 64 }) || !Z(l, { max: 254 })))
        return !1;
    if (
        !_t(l, {
            require_tld: e.require_tld,
            ignore_max_length: e.ignore_max_length,
            allow_underscores: e.allow_underscores,
        })
    ) {
        if (!e.allow_ip_domain) return !1;
        if (!K(l)) {
            if (!l.startsWith("[") || !l.endsWith("]")) return !1;
            var I = l.slice(1, -1);
            if (I.length === 0 || !K(I)) return !1;
        }
    }
    if (f[0] === '"')
        return (
            (f = f.slice(1, f.length - 1)),
            e.allow_utf8_local_part ? pi.test(f) : $i.test(f)
        );
    for (
        var w = e.allow_utf8_local_part ? fi : si, S = f.split("."), F = 0;
        F < S.length;
        F++
    )
        if (!w.test(S[F])) return !1;
    return !(
        e.blacklisted_chars &&
        f.search(new RegExp("[".concat(e.blacklisted_chars, "]+"), "g")) !== -1
    );
}
var de = {
    version: 4,
    country_calling_codes: {
        1: [
            "US",
            "AG",
            "AI",
            "AS",
            "BB",
            "BM",
            "BS",
            "CA",
            "DM",
            "DO",
            "GD",
            "GU",
            "JM",
            "KN",
            "KY",
            "LC",
            "MP",
            "MS",
            "PR",
            "SX",
            "TC",
            "TT",
            "VC",
            "VG",
            "VI",
        ],
        7: ["RU", "KZ"],
        20: ["EG"],
        27: ["ZA"],
        30: ["GR"],
        31: ["NL"],
        32: ["BE"],
        33: ["FR"],
        34: ["ES"],
        36: ["HU"],
        39: ["IT", "VA"],
        40: ["RO"],
        41: ["CH"],
        43: ["AT"],
        44: ["GB", "GG", "IM", "JE"],
        45: ["DK"],
        46: ["SE"],
        47: ["NO", "SJ"],
        48: ["PL"],
        49: ["DE"],
        51: ["PE"],
        52: ["MX"],
        53: ["CU"],
        54: ["AR"],
        55: ["BR"],
        56: ["CL"],
        57: ["CO"],
        58: ["VE"],
        60: ["MY"],
        61: ["AU", "CC", "CX"],
        62: ["ID"],
        63: ["PH"],
        64: ["NZ"],
        65: ["SG"],
        66: ["TH"],
        81: ["JP"],
        82: ["KR"],
        84: ["VN"],
        86: ["CN"],
        90: ["TR"],
        91: ["IN"],
        92: ["PK"],
        93: ["AF"],
        94: ["LK"],
        95: ["MM"],
        98: ["IR"],
        211: ["SS"],
        212: ["MA", "EH"],
        213: ["DZ"],
        216: ["TN"],
        218: ["LY"],
        220: ["GM"],
        221: ["SN"],
        222: ["MR"],
        223: ["ML"],
        224: ["GN"],
        225: ["CI"],
        226: ["BF"],
        227: ["NE"],
        228: ["TG"],
        229: ["BJ"],
        230: ["MU"],
        231: ["LR"],
        232: ["SL"],
        233: ["GH"],
        234: ["NG"],
        235: ["TD"],
        236: ["CF"],
        237: ["CM"],
        238: ["CV"],
        239: ["ST"],
        240: ["GQ"],
        241: ["GA"],
        242: ["CG"],
        243: ["CD"],
        244: ["AO"],
        245: ["GW"],
        246: ["IO"],
        247: ["AC"],
        248: ["SC"],
        249: ["SD"],
        250: ["RW"],
        251: ["ET"],
        252: ["SO"],
        253: ["DJ"],
        254: ["KE"],
        255: ["TZ"],
        256: ["UG"],
        257: ["BI"],
        258: ["MZ"],
        260: ["ZM"],
        261: ["MG"],
        262: ["RE", "YT"],
        263: ["ZW"],
        264: ["NA"],
        265: ["MW"],
        266: ["LS"],
        267: ["BW"],
        268: ["SZ"],
        269: ["KM"],
        290: ["SH", "TA"],
        291: ["ER"],
        297: ["AW"],
        298: ["FO"],
        299: ["GL"],
        350: ["GI"],
        351: ["PT"],
        352: ["LU"],
        353: ["IE"],
        354: ["IS"],
        355: ["AL"],
        356: ["MT"],
        357: ["CY"],
        358: ["FI", "AX"],
        359: ["BG"],
        370: ["LT"],
        371: ["LV"],
        372: ["EE"],
        373: ["MD"],
        374: ["AM"],
        375: ["BY"],
        376: ["AD"],
        377: ["MC"],
        378: ["SM"],
        380: ["UA"],
        381: ["RS"],
        382: ["ME"],
        383: ["XK"],
        385: ["HR"],
        386: ["SI"],
        387: ["BA"],
        389: ["MK"],
        420: ["CZ"],
        421: ["SK"],
        423: ["LI"],
        500: ["FK"],
        501: ["BZ"],
        502: ["GT"],
        503: ["SV"],
        504: ["HN"],
        505: ["NI"],
        506: ["CR"],
        507: ["PA"],
        508: ["PM"],
        509: ["HT"],
        590: ["GP", "BL", "MF"],
        591: ["BO"],
        592: ["GY"],
        593: ["EC"],
        594: ["GF"],
        595: ["PY"],
        596: ["MQ"],
        597: ["SR"],
        598: ["UY"],
        599: ["CW", "BQ"],
        670: ["TL"],
        672: ["NF"],
        673: ["BN"],
        674: ["NR"],
        675: ["PG"],
        676: ["TO"],
        677: ["SB"],
        678: ["VU"],
        679: ["FJ"],
        680: ["PW"],
        681: ["WF"],
        682: ["CK"],
        683: ["NU"],
        685: ["WS"],
        686: ["KI"],
        687: ["NC"],
        688: ["TV"],
        689: ["PF"],
        690: ["TK"],
        691: ["FM"],
        692: ["MH"],
        850: ["KP"],
        852: ["HK"],
        853: ["MO"],
        855: ["KH"],
        856: ["LA"],
        880: ["BD"],
        886: ["TW"],
        960: ["MV"],
        961: ["LB"],
        962: ["JO"],
        963: ["SY"],
        964: ["IQ"],
        965: ["KW"],
        966: ["SA"],
        967: ["YE"],
        968: ["OM"],
        970: ["PS"],
        971: ["AE"],
        972: ["IL"],
        973: ["BH"],
        974: ["QA"],
        975: ["BT"],
        976: ["MN"],
        977: ["NP"],
        992: ["TJ"],
        993: ["TM"],
        994: ["AZ"],
        995: ["GE"],
        996: ["KG"],
        998: ["UZ"],
    },
    countries: {
        AC: ["247", "00", "(?:[01589]\\d|[46])\\d{4}", [5, 6]],
        AD: [
            "376",
            "00",
            "(?:1|6\\d)\\d{7}|[135-9]\\d{5}",
            [6, 8, 9],
            [
                ["(\\d{3})(\\d{3})", "$1 $2", ["[135-9]"]],
                ["(\\d{4})(\\d{4})", "$1 $2", ["1"]],
                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]],
            ],
        ],
        AE: [
            "971",
            "00",
            "(?:[4-7]\\d|9[0-689])\\d{7}|800\\d{2,9}|[2-4679]\\d{7}",
            [5, 6, 7, 8, 9, 10, 11, 12],
            [
                ["(\\d{3})(\\d{2,9})", "$1 $2", ["60|8"]],
                ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[236]|[479][2-8]"], "0$1"],
                ["(\\d{3})(\\d)(\\d{5})", "$1 $2 $3", ["[479]"]],
                ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["5"], "0$1"],
            ],
            "0",
        ],
        AF: [
            "93",
            "00",
            "[2-7]\\d{8}",
            [9],
            [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-7]"], "0$1"]],
            "0",
        ],
        AG: [
            "1",
            "011",
            "(?:268|[58]\\d\\d|900)\\d{7}",
            [10],
            0,
            "1",
            0,
            "([457]\\d{6})$|1",
            "268$1",
            0,
            "268",
        ],
        AI: [
            "1",
            "011",
            "(?:264|[58]\\d\\d|900)\\d{7}",
            [10],
            0,
            "1",
            0,
            "([2457]\\d{6})$|1",
            "264$1",
            0,
            "264",
        ],
        AL: [
            "355",
            "00",
            "(?:700\\d\\d|900)\\d{3}|8\\d{5,7}|(?:[2-5]|6\\d)\\d{7}",
            [6, 7, 8, 9],
            [
                ["(\\d{3})(\\d{3,4})", "$1 $2", ["80|9"], "0$1"],
                ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["4[2-6]"], "0$1"],
                ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2358][2-5]|4"], "0$1"],
                ["(\\d{3})(\\d{5})", "$1 $2", ["[23578]"], "0$1"],
                ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["6"], "0$1"],
            ],
            "0",
        ],
        AM: [
            "374",
            "00",
            "(?:[1-489]\\d|55|60|77)\\d{6}",
            [8],
            [
                ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[89]0"], "0 $1"],
                ["(\\d{3})(\\d{5})", "$1 $2", ["2|3[12]"], "(0$1)"],
                ["(\\d{2})(\\d{6})", "$1 $2", ["1|47"], "(0$1)"],
                ["(\\d{2})(\\d{6})", "$1 $2", ["[3-9]"], "0$1"],
            ],
            "0",
        ],
        AO: [
            "244",
            "00",
            "[29]\\d{8}",
            [9],
            [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[29]"]]],
        ],
        AR: [
            "54",
            "00",
            "(?:11|[89]\\d\\d)\\d{8}|[2368]\\d{9}",
            [10, 11],
            [
                [
                    "(\\d{4})(\\d{2})(\\d{4})",
                    "$1 $2-$3",
                    [
                        "2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9])",
                        "2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8]))|2(?:2[24-9]|3[1-59]|47)",
                        "2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5[56][46]|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]",
                        "2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|58|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|54(?:4|5[13-7]|6[89])|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:454|85[56])[46]|3(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]",
                    ],
                    "0$1",
                    1,
                ],
                ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["1"], "0$1", 1],
                ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[68]"], "0$1"],
                ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2-$3", ["[23]"], "0$1", 1],
                [
                    "(\\d)(\\d{4})(\\d{2})(\\d{4})",
                    "$2 15-$3-$4",
                    [
                        "9(?:2[2-469]|3[3-578])",
                        "9(?:2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9]))",
                        "9(?:2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8])))|92(?:2[24-9]|3[1-59]|47)",
                        "9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5(?:[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]",
                        "9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|5(?:4(?:4|5[13-7]|6[89])|[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]",
                    ],
                    "0$1",
                    0,
                    "$1 $2 $3-$4",
                ],
                [
                    "(\\d)(\\d{2})(\\d{4})(\\d{4})",
                    "$2 15-$3-$4",
                    ["91"],
                    "0$1",
                    0,
                    "$1 $2 $3-$4",
                ],
                ["(\\d{3})(\\d{3})(\\d{5})", "$1-$2-$3", ["8"], "0$1"],
                [
                    "(\\d)(\\d{3})(\\d{3})(\\d{4})",
                    "$2 15-$3-$4",
                    ["9"],
                    "0$1",
                    0,
                    "$1 $2 $3-$4",
                ],
            ],
            "0",
            0,
            "0?(?:(11|2(?:2(?:02?|[13]|2[13-79]|4[1-6]|5[2457]|6[124-8]|7[1-4]|8[13-6]|9[1267])|3(?:02?|1[467]|2[03-6]|3[13-8]|[49][2-6]|5[2-8]|[67])|4(?:7[3-578]|9)|6(?:[0136]|2[24-6]|4[6-8]?|5[15-8])|80|9(?:0[1-3]|[19]|2\\d|3[1-6]|4[02568]?|5[2-4]|6[2-46]|72?|8[23]?))|3(?:3(?:2[79]|6|8[2578])|4(?:0[0-24-9]|[12]|3[5-8]?|4[24-7]|5[4-68]?|6[02-9]|7[126]|8[2379]?|9[1-36-8])|5(?:1|2[1245]|3[237]?|4[1-46-9]|6[2-4]|7[1-6]|8[2-5]?)|6[24]|7(?:[069]|1[1568]|2[15]|3[145]|4[13]|5[14-8]|7[2-57]|8[126])|8(?:[01]|2[15-7]|3[2578]?|4[13-6]|5[4-8]?|6[1-357-9]|7[36-8]?|8[5-8]?|9[124])))15)?",
            "9$1",
        ],
        AS: [
            "1",
            "011",
            "(?:[58]\\d\\d|684|900)\\d{7}",
            [10],
            0,
            "1",
            0,
            "([267]\\d{6})$|1",
            "684$1",
            0,
            "684",
        ],
        AT: [
            "43",
            "00",
            "1\\d{3,12}|2\\d{6,12}|43(?:(?:0\\d|5[02-9])\\d{3,9}|2\\d{4,5}|[3467]\\d{4}|8\\d{4,6}|9\\d{4,7})|5\\d{4,12}|8\\d{7,12}|9\\d{8,12}|(?:[367]\\d|4[0-24-9])\\d{4,11}",
            [4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
            [
                ["(\\d)(\\d{3,12})", "$1 $2", ["1(?:11|[2-9])"], "0$1"],
                ["(\\d{3})(\\d{2})", "$1 $2", ["517"], "0$1"],
                ["(\\d{2})(\\d{3,5})", "$1 $2", ["5[079]"], "0$1"],
                [
                    "(\\d{3})(\\d{3,10})",
                    "$1 $2",
                    ["(?:31|4)6|51|6(?:5[0-3579]|[6-9])|7(?:20|32|8)|[89]"],
                    "0$1",
                ],
                ["(\\d{4})(\\d{3,9})", "$1 $2", ["[2-467]|5[2-6]"], "0$1"],
                ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["5"], "0$1"],
                ["(\\d{2})(\\d{4})(\\d{4,7})", "$1 $2 $3", ["5"], "0$1"],
            ],
            "0",
        ],
        AU: [
            "61",
            "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011",
            "1(?:[0-79]\\d{7}(?:\\d(?:\\d{2})?)?|8[0-24-9]\\d{7})|[2-478]\\d{8}|1\\d{4,7}",
            [5, 6, 7, 8, 9, 10, 12],
            [
                ["(\\d{2})(\\d{3,4})", "$1 $2", ["16"], "0$1"],
                ["(\\d{2})(\\d{3})(\\d{2,4})", "$1 $2 $3", ["16"], "0$1"],
                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["14|4"], "0$1"],
                ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["[2378]"], "(0$1)"],
                ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:30|[89])"]],
            ],
            "0",
            0,
            "(183[12])|0",
            0,
            0,
            0,
            [
                [
                    "(?:(?:(?:2(?:[0-26-9]\\d|3[0-8]|4[02-9]|5[0135-9])|7(?:[013-57-9]\\d|2[0-8]))\\d|3(?:(?:[0-3589]\\d|6[1-9]|7[0-35-9])\\d|4(?:[0-578]\\d|90)))\\d\\d|8(?:51(?:0(?:0[03-9]|[12479]\\d|3[2-9]|5[0-8]|6[1-9]|8[0-7])|1(?:[0235689]\\d|1[0-69]|4[0-589]|7[0-47-9])|2(?:0[0-79]|[18][13579]|2[14-9]|3[0-46-9]|[4-6]\\d|7[89]|9[0-4])|3\\d\\d)|(?:6[0-8]|[78]\\d)\\d{3}|9(?:[02-9]\\d{3}|1(?:(?:[0-58]\\d|6[0135-9])\\d|7(?:0[0-24-9]|[1-9]\\d)|9(?:[0-46-9]\\d|5[0-79])))))\\d{3}",
                    [9],
                ],
                [
                    "4(?:(?:79|94)[01]|83[0-389])\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[0-36-9]|7[02-8]|8[0-24-9]|9[0-37-9])\\d{6}",
                    [9],
                ],
                ["180(?:0\\d{3}|2)\\d{3}", [7, 10]],
                ["190[0-26]\\d{6}", [10]],
                0,
                0,
                0,
                ["163\\d{2,6}", [5, 6, 7, 8, 9]],
                ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]],
                ["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", [6, 8, 10, 12]],
            ],
            "0011",
        ],
        AW: [
            "297",
            "00",
            "(?:[25-79]\\d\\d|800)\\d{4}",
            [7],
            [["(\\d{3})(\\d{4})", "$1 $2", ["[25-9]"]]],
        ],
        AX: [
            "358",
            "00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))",
            "2\\d{4,9}|35\\d{4,5}|(?:60\\d\\d|800)\\d{4,6}|7\\d{5,11}|(?:[14]\\d|3[0-46-9]|50)\\d{4,8}",
            [5, 6, 7, 8, 9, 10, 11, 12],
            0,
            "0",
            0,
            0,
            0,
            0,
            "18",
            0,
            "00",
        ],
        AZ: [
            "994",
            "00",
            "365\\d{6}|(?:[124579]\\d|60|88)\\d{7}",
            [9],
            [
                ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["90"], "0$1"],
                [
                    "(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
                    "$1 $2 $3 $4",
                    ["1[28]|2|365|46", "1[28]|2|365[45]|46", "1[28]|2|365(?:4|5[02])|46"],
                    "(0$1)",
                ],
                ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[13-9]"], "0$1"],
            ],
            "0",
        ],
        BA: [
            "387",
            "00",
            "6\\d{8}|(?:[35689]\\d|49|70)\\d{6}",
            [8, 9],
            [
                ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[1-3]|[7-9]"], "0$1"],
                ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2-$3", ["[3-5]|6[56]"], "0$1"],
                ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["6"], "0$1"],
            ],
            "0",
        ],
        BB: [
            "1",
            "011",
            "(?:246|[58]\\d\\d|900)\\d{7}",
            [10],
            0,
            "1",
            0,
            "([2-9]\\d{6})$|1",
            "246$1",
            0,
            "246",
        ],
        BD: [
            "880",
            "00",
            "[1-469]\\d{9}|8[0-79]\\d{7,8}|[2-79]\\d{8}|[2-9]\\d{7}|[3-9]\\d{6}|[57-9]\\d{5}",
            [6, 7, 8, 9, 10],
            [
                ["(\\d{2})(\\d{4,6})", "$1-$2", ["31[5-8]|[459]1"], "0$1"],
                [
                    "(\\d{3})(\\d{3,7})",
                    "$1-$2",
                    [
                        "3(?:[67]|8[013-9])|4(?:6[168]|7|[89][18])|5(?:6[128]|9)|6(?:[15]|28|4[14])|7[2-589]|8(?:0[014-9]|[12])|9[358]|(?:3[2-5]|4[235]|5[2-578]|6[0389]|76|8[3-7]|9[24])1|(?:44|66)[01346-9]",
                    ],
                    "0$1",
                ],
                ["(\\d{4})(\\d{3,6})", "$1-$2", ["[13-9]|22"], "0$1"],
                ["(\\d)(\\d{7,8})", "$1-$2", ["2"], "0$1"],
            ],
            "0",
        ],
        BE: [
            "32",
            "00",
            "4\\d{8}|[1-9]\\d{7}",
            [8, 9],
            [
                ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:80|9)0"], "0$1"],
                [
                    "(\\d)(\\d{3})(\\d{2})(\\d{2})",
                    "$1 $2 $3 $4",
                    ["[239]|4[23]"],
                    "0$1",
                ],
                ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[15-8]"], "0$1"],
                ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["4"], "0$1"],
            ],
            "0",
        ],
        BF: [
            "226",
            "00",
            "[025-7]\\d{7}",
            [8],
            [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[025-7]"]]],
        ],
        BG: [
            "359",
            "00",
            "00800\\d{7}|[2-7]\\d{6,7}|[89]\\d{6,8}|2\\d{5}",
            [6, 7, 8, 9, 12],
            [
                ["(\\d)(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["2"], "0$1"],
                ["(\\d{3})(\\d{4})", "$1 $2", ["43[1-6]|70[1-9]"], "0$1"],
                ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2"], "0$1"],
                [
                    "(\\d{2})(\\d{3})(\\d{2,3})",
                    "$1 $2 $3",
                    ["[356]|4[124-7]|7[1-9]|8[1-6]|9[1-7]"],
                    "0$1",
                ],
                ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:70|8)0"], "0$1"],
                ["(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3", ["43[1-7]|7"], "0$1"],
                ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[48]|9[08]"], "0$1"],
                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1"],
            ],
            "0",
        ],
        BH: [
            "973",
            "00",
            "[136-9]\\d{7}",
            [8],
            [["(\\d{4})(\\d{4})", "$1 $2", ["[13679]|8[02-4679]"]]],
        ],
        BI: [
            "257",
            "00",
            "(?:[267]\\d|31)\\d{6}",
            [8],
            [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2367]"]]],
        ],
        BJ: [
            "229",
            "00",
            "[24-689]\\d{7}",
            [8],
            [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24-689]"]]],
        ],
        BL: [
            "590",
            "00",
            "590\\d{6}|(?:69|80|9\\d)\\d{7}",
            [9],
            0,
            "0",
            0,
            0,
            0,
            0,
            0,
            [
                ["590(?:2[7-9]|3[3-7]|5[12]|87)\\d{4}"],
                ["69(?:0\\d\\d|1(?:2[2-9]|3[0-5]))\\d{4}"],
                ["80[0-5]\\d{6}"],
                0,
                0,
                0,
                0,
                0,
                ["9(?:(?:395|76[018])\\d|475[0-5])\\d{4}"],
            ],
        ],
        BM: [
            "1",
            "011",
            "(?:441|[58]\\d\\d|900)\\d{7}",
            [10],
            0,
            "1",
            0,
            "([2-9]\\d{6})$|1",
            "441$1",
            0,
            "441",
        ],
        BN: [
            "673",
            "00",
            "[2-578]\\d{6}",
            [7],
            [["(\\d{3})(\\d{4})", "$1 $2", ["[2-578]"]]],
        ],
        BO: [
            "591",
            "00(?:1\\d)?",
            "(?:[2-467]\\d\\d|8001)\\d{5}",
            [8, 9],
            [
                ["(\\d)(\\d{7})", "$1 $2", ["[23]|4[46]"]],
                ["(\\d{8})", "$1", ["[67]"]],
                ["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["8"]],
            ],
            "0",
            0,
            "0(1\\d)?",
        ],
        BQ: ["599", "00", "(?:[34]1|7\\d)\\d{5}", [7], 0, 0, 0, 0, 0, 0, "[347]"],
        BR: [
            "55",
            "00(?:1[245]|2[1-35]|31|4[13]|[56]5|99)",
            "(?:[1-46-9]\\d\\d|5(?:[0-46-9]\\d|5[0-46-9]))\\d{8}|[1-9]\\d{9}|[3589]\\d{8}|[34]\\d{7}",
            [8, 9, 10, 11],
            [
                [
                    "(\\d{4})(\\d{4})",
                    "$1-$2",
                    ["300|4(?:0[02]|37)", "4(?:02|37)0|[34]00"],
                ],
                ["(\\d{3})(\\d{2,3})(\\d{4})", "$1 $2 $3", ["(?:[358]|90)0"], "0$1"],
                [
                    "(\\d{2})(\\d{4})(\\d{4})",
                    "$1 $2-$3",
                    ["(?:[14689][1-9]|2[12478]|3[1-578]|5[13-5]|7[13-579])[2-57]"],
                    "($1)",
                ],
                [
                    "(\\d{2})(\\d{5})(\\d{4})",
                    "$1 $2-$3",
                    ["[16][1-9]|[2-57-9]"],
                    "($1)",
                ],
            ],
            "0",
            0,
            "(?:0|90)(?:(1[245]|2[1-35]|31|4[13]|[56]5|99)(\\d{10,11}))?",
            "$2",
        ],
        BS: [
            "1",
            "011",
            "(?:242|[58]\\d\\d|900)\\d{7}",
            [10],
            0,
            "1",
            0,
            "([3-8]\\d{6})$|1",
            "242$1",
            0,
            "242",
        ],
        BT: [
            "975",
            "00",
            "[17]\\d{7}|[2-8]\\d{6}",
            [7, 8],
            [
                ["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-68]|7[246]"]],
                ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[67]|7"]],
            ],
        ],
        BW: [
            "267",
            "00",
            "(?:0800|(?:[37]|800)\\d)\\d{6}|(?:[2-6]\\d|90)\\d{5}",
            [7, 8, 10],
            [
                ["(\\d{2})(\\d{5})", "$1 $2", ["90"]],
                ["(\\d{3})(\\d{4})", "$1 $2", ["[24-6]|3[15-9]"]],
                ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[37]"]],
                ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["0"]],
                ["(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3", ["8"]],
            ],
        ],
        BY: [
            "375",
            "810",
            "(?:[12]\\d|33|44|902)\\d{7}|8(?:0[0-79]\\d{5,7}|[1-7]\\d{9})|8(?:1[0-489]|[5-79]\\d)\\d{7}|8[1-79]\\d{6,7}|8[0-79]\\d{5}|8\\d{5}",
            [6, 7, 8, 9, 10, 11],
            [
                ["(\\d{3})(\\d{3})", "$1 $2", ["800"], "8 $1"],
                ["(\\d{3})(\\d{2})(\\d{2,4})", "$1 $2 $3", ["800"], "8 $1"],
                [
                    "(\\d{4})(\\d{2})(\\d{3})",
                    "$1 $2-$3",
                    [
                        "1(?:5[169]|6[3-5]|7[179])|2(?:1[35]|2[34]|3[3-5])",
                        "1(?:5[169]|6(?:3[1-3]|4|5[125])|7(?:1[3-9]|7[0-24-6]|9[2-7]))|2(?:1[35]|2[34]|3[3-5])",
                    ],
                    "8 0$1",
                ],
                [
                    "(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
                    "$1 $2-$3-$4",
                    ["1(?:[56]|7[467])|2[1-3]"],
                    "8 0$1",
                ],
                ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[1-4]"], "8 0$1"],
                ["(\\d{3})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["[89]"], "8 $1"],
            ],
            "8",
            0,
            "0|80?",
            0,
            0,
            0,
            0,
            "8~10",
        ],
        BZ: [
            "501",
            "00",
            "(?:0800\\d|[2-8])\\d{6}",
            [7, 11],
            [
                ["(\\d{3})(\\d{4})", "$1-$2", ["[2-8]"]],
                ["(\\d)(\\d{3})(\\d{4})(\\d{3})", "$1-$2-$3-$4", ["0"]],
            ],
        ],
        CA: [
            "1",
            "011",
            "(?:[2-8]\\d|90)\\d{8}|3\\d{6}",
            [7, 10],
            0,
            "1",
            0,
            0,
            0,
            0,
            0,
            [
                [
                    "(?:2(?:04|[23]6|[48]9|50|63)|3(?:06|43|54|6[578]|82)|4(?:03|1[68]|[26]8|3[178]|50|74)|5(?:06|1[49]|48|79|8[147])|6(?:04|[18]3|39|47|72)|7(?:0[59]|42|53|78|8[02])|8(?:[06]7|19|25|73)|90[25])[2-9]\\d{6}",
                    [10],
                ],
                ["", [10]],
                ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", [10]],
                ["900[2-9]\\d{6}", [10]],
                [
                    "52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|(?:5(?:00|2[125-9]|33|44|66|77|88)|622)[2-9]\\d{6}",
                    [10],
                ],
                0,
                ["310\\d{4}", [7]],
                0,
                ["600[2-9]\\d{6}", [10]],
            ],
        ],
        CC: [
            "61",
            "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011",
            "1(?:[0-79]\\d{8}(?:\\d{2})?|8[0-24-9]\\d{7})|[148]\\d{8}|1\\d{5,7}",
            [6, 7, 8, 9, 10, 12],
            0,
            "0",
            0,
            "([59]\\d{7})$|0",
            "8$1",
            0,
            0,
            [
                [
                    "8(?:51(?:0(?:02|31|60|89)|1(?:18|76)|223)|91(?:0(?:1[0-2]|29)|1(?:[28]2|50|79)|2(?:10|64)|3(?:[06]8|22)|4[29]8|62\\d|70[23]|959))\\d{3}",
                    [9],
                ],
                [
                    "4(?:(?:79|94)[01]|83[0-389])\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[0-36-9]|7[02-8]|8[0-24-9]|9[0-37-9])\\d{6}",
                    [9],
                ],
                ["180(?:0\\d{3}|2)\\d{3}", [7, 10]],
                ["190[0-26]\\d{6}", [10]],
                0,
                0,
                0,
                0,
                ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]],
                ["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", [6, 8, 10, 12]],
            ],
            "0011",
        ],
        CD: [
            "243",
            "00",
            "[189]\\d{8}|[1-68]\\d{6}",
            [7, 9],
            [
                ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["88"], "0$1"],
                ["(\\d{2})(\\d{5})", "$1 $2", ["[1-6]"], "0$1"],
                ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"],
                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[89]"], "0$1"],
            ],
            "0",
        ],
        CF: [
            "236",
            "00",
            "(?:[27]\\d{3}|8776)\\d{4}",
            [8],
            [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[278]"]]],
        ],
        CG: [
            "242",
            "00",
            "222\\d{6}|(?:0\\d|80)\\d{7}",
            [9],
            [
                ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["8"]],
                ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[02]"]],
            ],
        ],
        CH: [
            "41",
            "00",
            "8\\d{11}|[2-9]\\d{8}",
            [9],
            [
                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8[047]|90"], "0$1"],
                [
                    "(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
                    "$1 $2 $3 $4",
                    ["[2-79]|81"],
                    "0$1",
                ],
                [
                    "(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
                    "$1 $2 $3 $4 $5",
                    ["8"],
                    "0$1",
                ],
            ],
            "0",
        ],
        CI: [
            "225",
            "00",
            "[02]\\d{9}",
            [10],
            [
                ["(\\d{2})(\\d{2})(\\d)(\\d{5})", "$1 $2 $3 $4", ["2"]],
                ["(\\d{2})(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3 $4", ["0"]],
            ],
        ],
        CK: [
            "682",
            "00",
            "[2-578]\\d{4}",
            [5],
            [["(\\d{2})(\\d{3})", "$1 $2", ["[2-578]"]]],
        ],
        CL: [
            "56",
            "(?:0|1(?:1[0-69]|2[02-5]|5[13-58]|69|7[0167]|8[018]))0",
            "12300\\d{6}|6\\d{9,10}|[2-9]\\d{8}",
            [9, 10, 11],
            [
                ["(\\d{5})(\\d{4})", "$1 $2", ["219", "2196"], "($1)"],
                ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["44"]],
                ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2[1-36]"], "($1)"],
                ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["9[2-9]"]],
                [
                    "(\\d{2})(\\d{3})(\\d{4})",
                    "$1 $2 $3",
                    ["3[2-5]|[47]|5[1-3578]|6[13-57]|8(?:0[1-9]|[1-9])"],
                    "($1)",
                ],
                ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["60|8"]],
                ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]],
                ["(\\d{3})(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["60"]],
            ],
        ],
        CM: [
            "237",
            "00",
            "[26]\\d{8}|88\\d{6,7}",
            [8, 9],
            [
                ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["88"]],
                [
                    "(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
                    "$1 $2 $3 $4 $5",
                    ["[26]|88"],
                ],
            ],
        ],
        CN: [
            "86",
            "00|1(?:[12]\\d|79)\\d\\d00",
            "1[127]\\d{8,9}|2\\d{9}(?:\\d{2})?|[12]\\d{6,7}|86\\d{6}|(?:1[03-689]\\d|6)\\d{7,9}|(?:[3-579]\\d|8[0-57-9])\\d{6,9}",
            [7, 8, 9, 10, 11, 12],
            [
                [
                    "(\\d{2})(\\d{5,6})",
                    "$1 $2",
                    [
                        "(?:10|2[0-57-9])[19]",
                        "(?:10|2[0-57-9])(?:10|9[56])",
                        "10(?:10|9[56])|2[0-57-9](?:100|9[56])",
                    ],
                    "0$1",
                ],
                [
                    "(\\d{3})(\\d{5,6})",
                    "$1 $2",
                    [
                        "3(?:[157]|35|49|9[1-68])|4(?:[17]|2[179]|6[47-9]|8[23])|5(?:[1357]|2[37]|4[36]|6[1-46]|80)|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]|4[13]|5[1-5])|(?:4[35]|59|85)[1-9]",
                        "(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))[19]",
                        "85[23](?:10|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:10|9[56])",
                        "85[23](?:100|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:100|9[56])",
                    ],
                    "0$1",
                ],
                ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["(?:4|80)0"]],
                [
                    "(\\d{2})(\\d{4})(\\d{4})",
                    "$1 $2 $3",
                    [
                        "10|2(?:[02-57-9]|1[1-9])",
                        "10|2(?:[02-57-9]|1[1-9])",
                        "10[0-79]|2(?:[02-57-9]|1[1-79])|(?:10|21)8(?:0[1-9]|[1-9])",
                    ],
                    "0$1",
                    1,
                ],
                [
                    "(\\d{3})(\\d{3})(\\d{4})",
                    "$1 $2 $3",
                    [
                        "3(?:[3-59]|7[02-68])|4(?:[26-8]|3[3-9]|5[2-9])|5(?:3[03-9]|[468]|7[028]|9[2-46-9])|6|7(?:[0-247]|3[04-9]|5[0-4689]|6[2368])|8(?:[1-358]|9[1-7])|9(?:[013479]|5[1-5])|(?:[34]1|55|79|87)[02-9]",
                    ],
                    "0$1",
                    1,
                ],
                ["(\\d{3})(\\d{7,8})", "$1 $2", ["9"]],
                ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["80"], "0$1", 1],
                ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["[3-578]"], "0$1", 1],
                ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["1[3-9]"]],
                ["(\\d{2})(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["[12]"], "0$1", 1],
            ],
            "0",
            0,
            "(1(?:[12]\\d|79)\\d\\d)|0",
            0,
            0,
            0,
            0,
            "00",
        ],
        CO: [
            "57",
            "00(?:4(?:[14]4|56)|[579])",
            "(?:60\\d\\d|9101)\\d{6}|(?:1\\d|3)\\d{9}",
            [10, 11],
            [
                ["(\\d{3})(\\d{7})", "$1 $2", ["6"], "($1)"],
                ["(\\d{3})(\\d{7})", "$1 $2", ["3[0-357]|91"]],
                ["(\\d)(\\d{3})(\\d{7})", "$1-$2-$3", ["1"], "0$1", 0, "$1 $2 $3"],
            ],
            "0",
            0,
            "0([3579]|4(?:[14]4|56))?",
        ],
        CR: [
            "506",
            "00",
            "(?:8\\d|90)\\d{8}|(?:[24-8]\\d{3}|3005)\\d{4}",
            [8, 10],
            [
                ["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]|8[3-9]"]],
                ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[89]"]],
            ],
            0,
            0,
            "(19(?:0[0-2468]|1[09]|20|66|77|99))",
        ],
        CU: [
            "53",
            "119",
            "[27]\\d{6,7}|[34]\\d{5,7}|63\\d{6}|(?:5|8\\d\\d)\\d{7}",
            [6, 7, 8, 10],
            [
                ["(\\d{2})(\\d{4,6})", "$1 $2", ["2[1-4]|[34]"], "(0$1)"],
                ["(\\d)(\\d{6,7})", "$1 $2", ["7"], "(0$1)"],
                ["(\\d)(\\d{7})", "$1 $2", ["[56]"], "0$1"],
                ["(\\d{3})(\\d{7})", "$1 $2", ["8"], "0$1"],
            ],
            "0",
        ],
        CV: [
            "238",
            "0",
            "(?:[2-59]\\d\\d|800)\\d{4}",
            [7],
            [["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[2-589]"]]],
        ],
        CW: [
            "599",
            "00",
            "(?:[34]1|60|(?:7|9\\d)\\d)\\d{5}",
            [7, 8],
            [
                ["(\\d{3})(\\d{4})", "$1 $2", ["[3467]"]],
                ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["9[4-8]"]],
            ],
            0,
            0,
            0,
            0,
            0,
            "[69]",
        ],
        CX: [
            "61",
            "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011",
            "1(?:[0-79]\\d{8}(?:\\d{2})?|8[0-24-9]\\d{7})|[148]\\d{8}|1\\d{5,7}",
            [6, 7, 8, 9, 10, 12],
            0,
            "0",
            0,
            "([59]\\d{7})$|0",
            "8$1",
            0,
            0,
            [
                [
                    "8(?:51(?:0(?:01|30|59|88)|1(?:17|46|75)|2(?:22|35))|91(?:00[6-9]|1(?:[28]1|49|78)|2(?:09|63)|3(?:12|26|75)|4(?:56|97)|64\\d|7(?:0[01]|1[0-2])|958))\\d{3}",
                    [9],
                ],
                [
                    "4(?:(?:79|94)[01]|83[0-389])\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[0-36-9]|7[02-8]|8[0-24-9]|9[0-37-9])\\d{6}",
                    [9],
                ],
                ["180(?:0\\d{3}|2)\\d{3}", [7, 10]],
                ["190[0-26]\\d{6}", [10]],
                0,
                0,
                0,
                0,
                ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]],
                ["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", [6, 8, 10, 12]],
            ],
            "0011",
        ],
        CY: [
            "357",
            "00",
            "(?:[279]\\d|[58]0)\\d{6}",
            [8],
            [["(\\d{2})(\\d{6})", "$1 $2", ["[257-9]"]]],
        ],
        CZ: [
            "420",
            "00",
            "(?:[2-578]\\d|60)\\d{7}|9\\d{8,11}",
            [9],
            [
                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-8]|9[015-7]"]],
                ["(\\d{2})(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3 $4", ["96"]],
                ["(\\d{2})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]],
                ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]],
            ],
        ],
        DE: [
            "49",
            "00",
            "[2579]\\d{5,14}|49(?:[34]0|69|8\\d)\\d\\d?|49(?:37|49|60|7[089]|9\\d)\\d{1,3}|49(?:2[024-9]|3[2-689]|7[1-7])\\d{1,8}|(?:1|[368]\\d|4[0-8])\\d{3,13}|49(?:[015]\\d|2[13]|31|[46][1-8])\\d{1,9}",
            [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
            [
                ["(\\d{2})(\\d{3,13})", "$1 $2", ["3[02]|40|[68]9"], "0$1"],
                [
                    "(\\d{3})(\\d{3,12})",
                    "$1 $2",
                    [
                        "2(?:0[1-389]|1[124]|2[18]|3[14])|3(?:[35-9][15]|4[015])|906|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1",
                        "2(?:0[1-389]|12[0-8])|3(?:[35-9][15]|4[015])|906|2(?:[13][14]|2[18])|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1",
                    ],
                    "0$1",
                ],
                [
                    "(\\d{4})(\\d{2,11})",
                    "$1 $2",
                    [
                        "[24-6]|3(?:[3569][02-46-9]|4[2-4679]|7[2-467]|8[2-46-8])|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]",
                        "[24-6]|3(?:3(?:0[1-467]|2[127-9]|3[124578]|7[1257-9]|8[1256]|9[145])|4(?:2[135]|4[13578]|9[1346])|5(?:0[14]|2[1-3589]|6[1-4]|7[13468]|8[13568])|6(?:2[1-489]|3[124-6]|6[13]|7[12579]|8[1-356]|9[135])|7(?:2[1-7]|4[145]|6[1-5]|7[1-4])|8(?:21|3[1468]|6|7[1467]|8[136])|9(?:0[12479]|2[1358]|4[134679]|6[1-9]|7[136]|8[147]|9[1468]))|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]|3[68]4[1347]|3(?:47|60)[1356]|3(?:3[46]|46|5[49])[1246]|3[4579]3[1357]",
                    ],
                    "0$1",
                ],
                ["(\\d{3})(\\d{4})", "$1 $2", ["138"], "0$1"],
                ["(\\d{5})(\\d{2,10})", "$1 $2", ["3"], "0$1"],
                ["(\\d{3})(\\d{5,11})", "$1 $2", ["181"], "0$1"],
                ["(\\d{3})(\\d)(\\d{4,10})", "$1 $2 $3", ["1(?:3|80)|9"], "0$1"],
                ["(\\d{3})(\\d{7,8})", "$1 $2", ["1[67]"], "0$1"],
                ["(\\d{3})(\\d{7,12})", "$1 $2", ["8"], "0$1"],
                ["(\\d{5})(\\d{6})", "$1 $2", ["185", "1850", "18500"], "0$1"],
                ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["7"], "0$1"],
                ["(\\d{4})(\\d{7})", "$1 $2", ["18[68]"], "0$1"],
                ["(\\d{4})(\\d{7})", "$1 $2", ["15[1279]"], "0$1"],
                ["(\\d{5})(\\d{6})", "$1 $2", ["15[03568]", "15(?:[0568]|31)"], "0$1"],
                ["(\\d{3})(\\d{8})", "$1 $2", ["18"], "0$1"],
                ["(\\d{3})(\\d{2})(\\d{7,8})", "$1 $2 $3", ["1(?:6[023]|7)"], "0$1"],
                ["(\\d{4})(\\d{2})(\\d{7})", "$1 $2 $3", ["15[279]"], "0$1"],
                ["(\\d{3})(\\d{2})(\\d{8})", "$1 $2 $3", ["15"], "0$1"],
            ],
            "0",
        ],
        DJ: [
            "253",
            "00",
            "(?:2\\d|77)\\d{6}",
            [8],
            [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[27]"]]],
        ],
        DK: [
            "45",
            "00",
            "[2-9]\\d{7}",
            [8],
            [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-9]"]]],
        ],
        DM: [
            "1",
            "011",
            "(?:[58]\\d\\d|767|900)\\d{7}",
            [10],
            0,
            "1",
            0,
            "([2-7]\\d{6})$|1",
            "767$1",
            0,
            "767",
        ],
        DO: [
            "1",
            "011",
            "(?:[58]\\d\\d|900)\\d{7}",
            [10],
            0,
            "1",
            0,
            0,
            0,
            0,
            "8001|8[024]9",
        ],
        DZ: [
            "213",
            "00",
            "(?:[1-4]|[5-79]\\d|80)\\d{7}",
            [8, 9],
            [
                ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[1-4]"], "0$1"],
                ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["9"], "0$1"],
                ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-8]"], "0$1"],
            ],
            "0",
        ],
        EC: [
            "593",
            "00",
            "1\\d{9,10}|(?:[2-7]|9\\d)\\d{7}",
            [8, 9, 10, 11],
            [
                [
                    "(\\d)(\\d{3})(\\d{4})",
                    "$1 $2-$3",
                    ["[2-7]"],
                    "(0$1)",
                    0,
                    "$1-$2-$3",
                ],
                ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["9"], "0$1"],
                ["(\\d{4})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1"]],
            ],
            "0",
        ],
        EE: [
            "372",
            "00",
            "8\\d{9}|[4578]\\d{7}|(?:[3-8]\\d|90)\\d{5}",
            [7, 8, 10],
            [
                [
                    "(\\d{3})(\\d{4})",
                    "$1 $2",
                    [
                        "[369]|4[3-8]|5(?:[0-2]|5[0-478]|6[45])|7[1-9]|88",
                        "[369]|4[3-8]|5(?:[02]|1(?:[0-8]|95)|5[0-478]|6(?:4[0-4]|5[1-589]))|7[1-9]|88",
                    ],
                ],
                [
                    "(\\d{4})(\\d{3,4})",
                    "$1 $2",
                    ["[45]|8(?:00|[1-49])", "[45]|8(?:00[1-9]|[1-49])"],
                ],
                ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["7"]],
                ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]],
            ],
        ],
        EG: [
            "20",
            "00",
            "[189]\\d{8,9}|[24-6]\\d{8}|[135]\\d{7}",
            [8, 9, 10],
            [
                ["(\\d)(\\d{7,8})", "$1 $2", ["[23]"], "0$1"],
                [
                    "(\\d{2})(\\d{6,7})",
                    "$1 $2",
                    ["1[35]|[4-6]|8[2468]|9[235-7]"],
                    "0$1",
                ],
                ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"],
                ["(\\d{2})(\\d{8})", "$1 $2", ["1"], "0$1"],
            ],
            "0",
        ],
        EH: ["212", "00", "[5-8]\\d{8}", [9], 0, "0", 0, 0, 0, 0, "528[89]"],
        ER: [
            "291",
            "00",
            "[178]\\d{6}",
            [7],
            [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[178]"], "0$1"]],
            "0",
        ],
        ES: [
            "34",
            "00",
            "[5-9]\\d{8}",
            [9],
            [
                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[89]00"]],
                ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-9]"]],
            ],
        ],
        ET: [
            "251",
            "00",
            "(?:11|[2-579]\\d)\\d{7}",
            [9],
            [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-579]"], "0$1"]],
            "0",
        ],
        FI: [
            "358",
            "00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))",
            "[1-35689]\\d{4}|7\\d{10,11}|(?:[124-7]\\d|3[0-46-9])\\d{8}|[1-9]\\d{5,8}",
            [5, 6, 7, 8, 9, 10, 11, 12],
            [
                ["(\\d{5})", "$1", ["20[2-59]"], "0$1"],
                ["(\\d{3})(\\d{3,7})", "$1 $2", ["(?:[1-3]0|[68])0|70[07-9]"], "0$1"],
                ["(\\d{2})(\\d{4,8})", "$1 $2", ["[14]|2[09]|50|7[135]"], "0$1"],
                ["(\\d{2})(\\d{6,10})", "$1 $2", ["7"], "0$1"],
                [
                    "(\\d)(\\d{4,9})",
                    "$1 $2",
                    ["(?:1[3-79]|[2568])[1-8]|3(?:0[1-9]|[1-9])|9"],
                    "0$1",
                ],
            ],
            "0",
            0,
            0,
            0,
            0,
            "1[03-79]|[2-9]",
            0,
            "00",
        ],
        FJ: [
            "679",
            "0(?:0|52)",
            "45\\d{5}|(?:0800\\d|[235-9])\\d{6}",
            [7, 11],
            [
                ["(\\d{3})(\\d{4})", "$1 $2", ["[235-9]|45"]],
                ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"]],
            ],
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            "00",
        ],
        FK: ["500", "00", "[2-7]\\d{4}", [5]],
        FM: [
            "691",
            "00",
            "(?:[39]\\d\\d|820)\\d{4}",
            [7],
            [["(\\d{3})(\\d{4})", "$1 $2", ["[389]"]]],
        ],
        FO: [
            "298",
            "00",
            "[2-9]\\d{5}",
            [6],
            [["(\\d{6})", "$1", ["[2-9]"]]],
            0,
            0,
            "(10(?:01|[12]0|88))",
        ],
        FR: [
            "33",
            "00",
            "[1-9]\\d{8}",
            [9],
            [
                ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0 $1"],
                [
                    "(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
                    "$1 $2 $3 $4 $5",
                    ["[1-79]"],
                    "0$1",
                ],
            ],
            "0",
        ],
        GA: [
            "241",
            "00",
            "(?:[067]\\d|11)\\d{6}|[2-7]\\d{6}",
            [7, 8],
            [
                ["(\\d)(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-7]"], "0$1"],
                ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"]],
                ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["11|[67]"], "0$1"],
            ],
            0,
            0,
            "0(11\\d{6}|60\\d{6}|61\\d{6}|6[256]\\d{6}|7[467]\\d{6})",
            "$1",
        ],
        GB: [
            "44",
            "00",
            "[1-357-9]\\d{9}|[18]\\d{8}|8\\d{6}",
            [7, 9, 10],
            [
                [
                    "(\\d{3})(\\d{4})",
                    "$1 $2",
                    ["800", "8001", "80011", "800111", "8001111"],
                    "0$1",
                ],
                [
                    "(\\d{3})(\\d{2})(\\d{2})",
                    "$1 $2 $3",
                    ["845", "8454", "84546", "845464"],
                    "0$1",
                ],
                ["(\\d{3})(\\d{6})", "$1 $2", ["800"], "0$1"],
                [
                    "(\\d{5})(\\d{4,5})",
                    "$1 $2",
                    [
                        "1(?:38|5[23]|69|76|94)",
                        "1(?:(?:38|69)7|5(?:24|39)|768|946)",
                        "1(?:3873|5(?:242|39[4-6])|(?:697|768)[347]|9467)",
                    ],
                    "0$1",
                ],
                ["(\\d{4})(\\d{5,6})", "$1 $2", ["1(?:[2-69][02-9]|[78])"], "0$1"],
                [
                    "(\\d{2})(\\d{4})(\\d{4})",
                    "$1 $2 $3",
                    ["[25]|7(?:0|6[02-9])", "[25]|7(?:0|6(?:[03-9]|2[356]))"],
                    "0$1",
                ],
                ["(\\d{4})(\\d{6})", "$1 $2", ["7"], "0$1"],
                ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1389]"], "0$1"],
            ],
            "0",
            0,
            0,
            0,
            0,
            0,
            [
                [
                    "(?:1(?:1(?:3(?:[0-58]\\d\\d|73[0235])|4(?:[0-5]\\d\\d|69[7-9]|70[0-79])|(?:(?:5[0-26-9]|[78][0-49])\\d|6(?:[0-4]\\d|50))\\d)|(?:2(?:(?:0[024-9]|2[3-9]|3[3-79]|4[1-689]|[58][02-9]|6[0-47-9]|7[013-9]|9\\d)\\d|1(?:[0-7]\\d|8[0-2]))|(?:3(?:0\\d|1[0-8]|[25][02-9]|3[02-579]|[468][0-46-9]|7[1-35-79]|9[2-578])|4(?:0[03-9]|[137]\\d|[28][02-57-9]|4[02-69]|5[0-8]|[69][0-79])|5(?:0[1-35-9]|[16]\\d|2[024-9]|3[015689]|4[02-9]|5[03-9]|7[0-35-9]|8[0-468]|9[0-57-9])|6(?:0[034689]|1\\d|2[0-35689]|[38][013-9]|4[1-467]|5[0-69]|6[13-9]|7[0-8]|9[0-24578])|7(?:0[0246-9]|2\\d|3[0236-8]|4[03-9]|5[0-46-9]|6[013-9]|7[0-35-9]|8[024-9]|9[02-9])|8(?:0[35-9]|2[1-57-9]|3[02-578]|4[0-578]|5[124-9]|6[2-69]|7\\d|8[02-9]|9[02569])|9(?:0[02-589]|[18]\\d|2[02-689]|3[1-57-9]|4[2-9]|5[0-579]|6[2-47-9]|7[0-24578]|9[2-57]))\\d)\\d)|2(?:0[013478]|3[0189]|4[017]|8[0-46-9]|9[0-2])\\d{3})\\d{4}|1(?:2(?:0(?:46[1-4]|87[2-9])|545[1-79]|76(?:2\\d|3[1-8]|6[1-6])|9(?:7(?:2[0-4]|3[2-5])|8(?:2[2-8]|7[0-47-9]|8[3-5])))|3(?:6(?:38[2-5]|47[23])|8(?:47[04-9]|64[0157-9]))|4(?:044[1-7]|20(?:2[23]|8\\d)|6(?:0(?:30|5[2-57]|6[1-8]|7[2-8])|140)|8(?:052|87[1-3]))|5(?:2(?:4(?:3[2-79]|6\\d)|76\\d)|6(?:26[06-9]|686))|6(?:06(?:4\\d|7[4-79])|295[5-7]|35[34]\\d|47(?:24|61)|59(?:5[08]|6[67]|74)|9(?:55[0-4]|77[23]))|7(?:26(?:6[13-9]|7[0-7])|(?:442|688)\\d|50(?:2[0-3]|[3-68]2|76))|8(?:27[56]\\d|37(?:5[2-5]|8[239])|843[2-58])|9(?:0(?:0(?:6[1-8]|85)|52\\d)|3583|4(?:66[1-8]|9(?:2[01]|81))|63(?:23|3[1-4])|9561))\\d{3}",
                    [9, 10],
                ],
                [
                    "7(?:457[0-57-9]|700[01]|911[028])\\d{5}|7(?:[1-3]\\d\\d|4(?:[0-46-9]\\d|5[0-689])|5(?:0[0-8]|[13-9]\\d|2[0-35-9])|7(?:0[1-9]|[1-7]\\d|8[02-9]|9[0-689])|8(?:[014-9]\\d|[23][0-8])|9(?:[024-9]\\d|1[02-9]|3[0-689]))\\d{6}",
                    [10],
                ],
                ["80[08]\\d{7}|800\\d{6}|8001111"],
                [
                    "(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[2-49]))\\d{7}|845464\\d",
                    [7, 10],
                ],
                ["70\\d{8}", [10]],
                0,
                ["(?:3[0347]|55)\\d{8}", [10]],
                [
                    "76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}",
                    [10],
                ],
                ["56\\d{8}", [10]],
            ],
            0,
            " x",
        ],
        GD: [
            "1",
            "011",
            "(?:473|[58]\\d\\d|900)\\d{7}",
            [10],
            0,
            "1",
            0,
            "([2-9]\\d{6})$|1",
            "473$1",
            0,
            "473",
        ],
        GE: [
            "995",
            "00",
            "(?:[3-57]\\d\\d|800)\\d{6}",
            [9],
            [
                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["70"], "0$1"],
                ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["32"], "0$1"],
                ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[57]"]],
                ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[348]"], "0$1"],
            ],
            "0",
        ],
        GF: [
            "594",
            "00",
            "[56]94\\d{6}|(?:80|9\\d)\\d{7}",
            [9],
            [
                [
                    "(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
                    "$1 $2 $3 $4",
                    ["[56]|9[47]"],
                    "0$1",
                ],
                ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[89]"], "0$1"],
            ],
            "0",
        ],
        GG: [
            "44",
            "00",
            "(?:1481|[357-9]\\d{3})\\d{6}|8\\d{6}(?:\\d{2})?",
            [7, 9, 10],
            0,
            "0",
            0,
            "([25-9]\\d{5})$|0",
            "1481$1",
            0,
            0,
            [
                ["1481[25-9]\\d{5}", [10]],
                ["7(?:(?:781|839)\\d|911[17])\\d{5}", [10]],
                ["80[08]\\d{7}|800\\d{6}|8001111"],
                ["(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[0-3]))\\d{7}|845464\\d", [7, 10]],
                ["70\\d{8}", [10]],
                0,
                ["(?:3[0347]|55)\\d{8}", [10]],
                [
                    "76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}",
                    [10],
                ],
                ["56\\d{8}", [10]],
            ],
        ],
        GH: [
            "233",
            "00",
            "(?:[235]\\d{3}|800)\\d{5}",
            [8, 9],
            [
                ["(\\d{3})(\\d{5})", "$1 $2", ["8"], "0$1"],
                ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[235]"], "0$1"],
            ],
            "0",
        ],
        GI: [
            "350",
            "00",
            "(?:[25]\\d|60)\\d{6}",
            [8],
            [["(\\d{3})(\\d{5})", "$1 $2", ["2"]]],
        ],
        GL: [
            "299",
            "00",
            "(?:19|[2-689]\\d|70)\\d{4}",
            [6],
            [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["19|[2-9]"]]],
        ],
        GM: [
            "220",
            "00",
            "[2-9]\\d{6}",
            [7],
            [["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]],
        ],
        GN: [
            "224",
            "00",
            "722\\d{6}|(?:3|6\\d)\\d{7}",
            [8, 9],
            [
                ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["3"]],
                ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[67]"]],
            ],
        ],
        GP: [
            "590",
            "00",
            "590\\d{6}|(?:69|80|9\\d)\\d{7}",
            [9],
            [
                ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[569]"], "0$1"],
                ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"],
            ],
            "0",
            0,
            0,
            0,
            0,
            0,
            [
                [
                    "590(?:0[1-68]|[14][0-24-9]|2[0-68]|3[1-9]|5[3-579]|[68][0-689]|7[08]|9\\d)\\d{4}",
                ],
                ["69(?:0\\d\\d|1(?:2[2-9]|3[0-5]))\\d{4}"],
                ["80[0-5]\\d{6}"],
                0,
                0,
                0,
                0,
                0,
                ["9(?:(?:395|76[018])\\d|475[0-5])\\d{4}"],
            ],
        ],
        GQ: [
            "240",
            "00",
            "222\\d{6}|(?:3\\d|55|[89]0)\\d{7}",
            [9],
            [
                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235]"]],
                ["(\\d{3})(\\d{6})", "$1 $2", ["[89]"]],
            ],
        ],
        GR: [
            "30",
            "00",
            "5005000\\d{3}|8\\d{9,11}|(?:[269]\\d|70)\\d{8}",
            [10, 11, 12],
            [
                ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["21|7"]],
                [
                    "(\\d{4})(\\d{6})",
                    "$1 $2",
                    ["2(?:2|3[2-57-9]|4[2-469]|5[2-59]|6[2-9]|7[2-69]|8[2-49])|5"],
                ],
                ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2689]"]],
                ["(\\d{3})(\\d{3,4})(\\d{5})", "$1 $2 $3", ["8"]],
            ],
        ],
        GT: [
            "502",
            "00",
            "80\\d{6}|(?:1\\d{3}|[2-7])\\d{7}",
            [8, 11],
            [
                ["(\\d{4})(\\d{4})", "$1 $2", ["[2-8]"]],
                ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]],
            ],
        ],
        GU: [
            "1",
            "011",
            "(?:[58]\\d\\d|671|900)\\d{7}",
            [10],
            0,
            "1",
            0,
            "([2-9]\\d{6})$|1",
            "671$1",
            0,
            "671",
        ],
        GW: [
            "245",
            "00",
            "[49]\\d{8}|4\\d{6}",
            [7, 9],
            [
                ["(\\d{3})(\\d{4})", "$1 $2", ["40"]],
                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[49]"]],
            ],
        ],
        GY: [
            "592",
            "001",
            "(?:[2-8]\\d{3}|9008)\\d{3}",
            [7],
            [["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]],
        ],
        HK: [
            "852",
            "00(?:30|5[09]|[126-9]?)",
            "8[0-46-9]\\d{6,7}|9\\d{4,7}|(?:[2-7]|9\\d{3})\\d{7}",
            [5, 6, 7, 8, 9, 11],
            [
                ["(\\d{3})(\\d{2,5})", "$1 $2", ["900", "9003"]],
                ["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]|8[1-4]|9(?:0[1-9]|[1-8])"]],
                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]],
                ["(\\d{3})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]],
            ],
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            "00",
        ],
        HN: [
            "504",
            "00",
            "8\\d{10}|[237-9]\\d{7}",
            [8, 11],
            [["(\\d{4})(\\d{4})", "$1-$2", ["[237-9]"]]],
        ],
        HR: [
            "385",
            "00",
            "(?:[24-69]\\d|3[0-79])\\d{7}|80\\d{5,7}|[1-79]\\d{7}|6\\d{5,6}",
            [6, 7, 8, 9],
            [
                ["(\\d{2})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["6[01]"], "0$1"],
                ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["8"], "0$1"],
                ["(\\d)(\\d{4})(\\d{3})", "$1 $2 $3", ["1"], "0$1"],
                ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[67]"], "0$1"],
                ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"], "0$1"],
                ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-5]"], "0$1"],
                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"], "0$1"],
            ],
            "0",
        ],
        HT: [
            "509",
            "00",
            "(?:[2-489]\\d|55)\\d{6}",
            [8],
            [["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[2-589]"]]],
        ],
        HU: [
            "36",
            "00",
            "[235-7]\\d{8}|[1-9]\\d{7}",
            [8, 9],
            [
                ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "(06 $1)"],
                [
                    "(\\d{2})(\\d{3})(\\d{3})",
                    "$1 $2 $3",
                    ["[27][2-9]|3[2-7]|4[24-9]|5[2-79]|6|8[2-57-9]|9[2-69]"],
                    "(06 $1)",
                ],
                ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-9]"], "06 $1"],
            ],
            "06",
        ],
        ID: [
            "62",
            "00[89]",
            "(?:(?:00[1-9]|8\\d)\\d{4}|[1-36])\\d{6}|00\\d{10}|[1-9]\\d{8,10}|[2-9]\\d{7}",
            [7, 8, 9, 10, 11, 12, 13],
            [
                ["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["15"]],
                ["(\\d{2})(\\d{5,9})", "$1 $2", ["2[124]|[36]1"], "(0$1)"],
                ["(\\d{3})(\\d{5,7})", "$1 $2", ["800"], "0$1"],
                ["(\\d{3})(\\d{5,8})", "$1 $2", ["[2-79]"], "(0$1)"],
                ["(\\d{3})(\\d{3,4})(\\d{3})", "$1-$2-$3", ["8[1-35-9]"], "0$1"],
                ["(\\d{3})(\\d{6,8})", "$1 $2", ["1"], "0$1"],
                ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["804"], "0$1"],
                ["(\\d{3})(\\d)(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["80"], "0$1"],
                ["(\\d{3})(\\d{4})(\\d{4,5})", "$1-$2-$3", ["8"], "0$1"],
            ],
            "0",
        ],
        IE: [
            "353",
            "00",
            "(?:1\\d|[2569])\\d{6,8}|4\\d{6,9}|7\\d{8}|8\\d{8,9}",
            [7, 8, 9, 10],
            [
                [
                    "(\\d{2})(\\d{5})",
                    "$1 $2",
                    ["2[24-9]|47|58|6[237-9]|9[35-9]"],
                    "(0$1)",
                ],
                ["(\\d{3})(\\d{5})", "$1 $2", ["[45]0"], "(0$1)"],
                ["(\\d)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["1"], "(0$1)"],
                [
                    "(\\d{2})(\\d{3})(\\d{3,4})",
                    "$1 $2 $3",
                    ["[2569]|4[1-69]|7[14]"],
                    "(0$1)",
                ],
                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["70"], "0$1"],
                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["81"], "(0$1)"],
                ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[78]"], "0$1"],
                ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]],
                ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["4"], "(0$1)"],
                ["(\\d{2})(\\d)(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["8"], "0$1"],
            ],
            "0",
        ],
        IL: [
            "972",
            "0(?:0|1[2-9])",
            "1\\d{6}(?:\\d{3,5})?|[57]\\d{8}|[1-489]\\d{7}",
            [7, 8, 9, 10, 11, 12],
            [
                ["(\\d{4})(\\d{3})", "$1-$2", ["125"]],
                ["(\\d{4})(\\d{2})(\\d{2})", "$1-$2-$3", ["121"]],
                ["(\\d)(\\d{3})(\\d{4})", "$1-$2-$3", ["[2-489]"], "0$1"],
                ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["[57]"], "0$1"],
                ["(\\d{4})(\\d{3})(\\d{3})", "$1-$2-$3", ["12"]],
                ["(\\d{4})(\\d{6})", "$1-$2", ["159"]],
                ["(\\d)(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3-$4", ["1[7-9]"]],
                ["(\\d{3})(\\d{1,2})(\\d{3})(\\d{4})", "$1-$2 $3-$4", ["15"]],
            ],
            "0",
        ],
        IM: [
            "44",
            "00",
            "1624\\d{6}|(?:[3578]\\d|90)\\d{8}",
            [10],
            0,
            "0",
            0,
            "([25-8]\\d{5})$|0",
            "1624$1",
            0,
            "74576|(?:16|7[56])24",
        ],
        IN: [
            "91",
            "00",
            "(?:000800|[2-9]\\d\\d)\\d{7}|1\\d{7,12}",
            [8, 9, 10, 11, 12, 13],
            [
                [
                    "(\\d{8})",
                    "$1",
                    [
                        "5(?:0|2[23]|3[03]|[67]1|88)",
                        "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|888)",
                        "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|8888)",
                    ],
                    0,
                    1,
                ],
                ["(\\d{4})(\\d{4,5})", "$1 $2", ["180", "1800"], 0, 1],
                ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["140"], 0, 1],
                [
                    "(\\d{2})(\\d{4})(\\d{4})",
                    "$1 $2 $3",
                    [
                        "11|2[02]|33|4[04]|79[1-7]|80[2-46]",
                        "11|2[02]|33|4[04]|79(?:[1-6]|7[19])|80(?:[2-4]|6[0-589])",
                        "11|2[02]|33|4[04]|79(?:[124-6]|3(?:[02-9]|1[0-24-9])|7(?:1|9[1-6]))|80(?:[2-4]|6[0-589])",
                    ],
                    "0$1",
                    1,
                ],
                [
                    "(\\d{3})(\\d{3})(\\d{4})",
                    "$1 $2 $3",
                    [
                        "1(?:2[0-249]|3[0-25]|4[145]|[68]|7[1257])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|5[12]|[78]1)|6(?:12|[2-4]1|5[17]|6[13]|80)|7(?:12|3[134]|4[47]|61|88)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91)|(?:43|59|75)[15]|(?:1[59]|29|67|72)[14]",
                        "1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|674|7(?:(?:2[14]|3[34]|5[15])[2-6]|61[346]|88[0-8])|8(?:70[2-6]|84[235-7]|91[3-7])|(?:1(?:29|60|8[06])|261|552|6(?:12|[2-47]1|5[17]|6[13]|80)|7(?:12|31|4[47])|8(?:16|2[014]|3[126]|6[136]|7[78]|83))[2-7]",
                        "1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|6(?:12(?:[2-6]|7[0-8])|74[2-7])|7(?:(?:2[14]|5[15])[2-6]|3171|61[346]|88(?:[2-7]|82))|8(?:70[2-6]|84(?:[2356]|7[19])|91(?:[3-6]|7[19]))|73[134][2-6]|(?:74[47]|8(?:16|2[014]|3[126]|6[136]|7[78]|83))(?:[2-6]|7[19])|(?:1(?:29|60|8[06])|261|552|6(?:[2-4]1|5[17]|6[13]|7(?:1|4[0189])|80)|7(?:12|88[01]))[2-7]",
                    ],
                    "0$1",
                    1,
                ],
                [
                    "(\\d{4})(\\d{3})(\\d{3})",
                    "$1 $2 $3",
                    [
                        "1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2[2457-9]|3[2-5]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1[013-9]|28|3[129]|4[1-35689]|5[29]|6[02-5]|70)|807",
                        "1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2(?:[2457]|84|95)|3(?:[2-4]|55)|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1(?:[013-8]|9[6-9])|28[6-8]|3(?:17|2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4|5[0-367])|70[13-7])|807[19]",
                        "1(?:[2-479]|5(?:[0236-9]|5[013-9]))|[2-5]|6(?:2(?:84|95)|355|83)|73179|807(?:1|9[1-3])|(?:1552|6(?:1[1358]|2[2457]|3[2-4]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[124-6])\\d|7(?:1(?:[013-8]\\d|9[6-9])|28[6-8]|3(?:2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]\\d|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4\\d|5[0-367])|70[13-7]))[2-7]",
                    ],
                    "0$1",
                    1,
                ],
                ["(\\d{5})(\\d{5})", "$1 $2", ["[6-9]"], "0$1", 1],
                [
                    "(\\d{4})(\\d{2,4})(\\d{4})",
                    "$1 $2 $3",
                    ["1(?:6|8[06])", "1(?:6|8[06]0)"],
                    0,
                    1,
                ],
                ["(\\d{4})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["18"], 0, 1],
            ],
            "0",
        ],
        IO: ["246", "00", "3\\d{6}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["3"]]]],
        IQ: [
            "964",
            "00",
            "(?:1|7\\d\\d)\\d{7}|[2-6]\\d{7,8}",
            [8, 9, 10],
            [
                ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"],
                ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-6]"], "0$1"],
                ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"],
            ],
            "0",
        ],
        IR: [
            "98",
            "00",
            "[1-9]\\d{9}|(?:[1-8]\\d\\d|9)\\d{3,4}",
            [4, 5, 6, 7, 10],
            [
                ["(\\d{4,5})", "$1", ["96"], "0$1"],
                [
                    "(\\d{2})(\\d{4,5})",
                    "$1 $2",
                    [
                        "(?:1[137]|2[13-68]|3[1458]|4[145]|5[1468]|6[16]|7[1467]|8[13467])[12689]",
                    ],
                    "0$1",
                ],
                ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"], "0$1"],
                ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["[1-8]"], "0$1"],
            ],
            "0",
        ],
        IS: [
            "354",
            "00|1(?:0(?:01|[12]0)|100)",
            "(?:38\\d|[4-9])\\d{6}",
            [7, 9],
            [
                ["(\\d{3})(\\d{4})", "$1 $2", ["[4-9]"]],
                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["3"]],
            ],
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            "00",
        ],
        IT: [
            "39",
            "00",
            "0\\d{5,10}|1\\d{8,10}|3(?:[0-8]\\d{7,10}|9\\d{7,8})|(?:43|55|70)\\d{8}|8\\d{5}(?:\\d{2,4})?",
            [6, 7, 8, 9, 10, 11],
            [
                ["(\\d{2})(\\d{4,6})", "$1 $2", ["0[26]"]],
                [
                    "(\\d{3})(\\d{3,6})",
                    "$1 $2",
                    [
                        "0[13-57-9][0159]|8(?:03|4[17]|9[2-5])",
                        "0[13-57-9][0159]|8(?:03|4[17]|9(?:2|3[04]|[45][0-4]))",
                    ],
                ],
                ["(\\d{4})(\\d{2,6})", "$1 $2", ["0(?:[13-579][2-46-8]|8[236-8])"]],
                ["(\\d{4})(\\d{4})", "$1 $2", ["894"]],
                ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[26]|5"]],
                ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1(?:44|[679])|[378]|43"]],
                ["(\\d{3})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[13-57-9][0159]|14"]],
                ["(\\d{2})(\\d{4})(\\d{5})", "$1 $2 $3", ["0[26]"]],
                ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"]],
                ["(\\d{3})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["3"]],
            ],
            0,
            0,
            0,
            0,
            0,
            0,
            [
                [
                    "0669[0-79]\\d{1,6}|0(?:1(?:[0159]\\d|[27][1-5]|31|4[1-4]|6[1356]|8[2-57])|2\\d\\d|3(?:[0159]\\d|2[1-4]|3[12]|[48][1-6]|6[2-59]|7[1-7])|4(?:[0159]\\d|[23][1-9]|4[245]|6[1-5]|7[1-4]|81)|5(?:[0159]\\d|2[1-5]|3[2-6]|4[1-79]|6[4-6]|7[1-578]|8[3-8])|6(?:[0-57-9]\\d|6[0-8])|7(?:[0159]\\d|2[12]|3[1-7]|4[2-46]|6[13569]|7[13-6]|8[1-59])|8(?:[0159]\\d|2[3-578]|3[1-356]|[6-8][1-5])|9(?:[0159]\\d|[238][1-5]|4[12]|6[1-8]|7[1-6]))\\d{2,7}",
                ],
                ["3[2-9]\\d{7,8}|(?:31|43)\\d{8}", [9, 10]],
                ["80(?:0\\d{3}|3)\\d{3}", [6, 9]],
                [
                    "(?:0878\\d{3}|89(?:2\\d|3[04]|4(?:[0-4]|[5-9]\\d\\d)|5[0-4]))\\d\\d|(?:1(?:44|6[346])|89(?:38|5[5-9]|9))\\d{6}",
                    [6, 8, 9, 10],
                ],
                ["1(?:78\\d|99)\\d{6}", [9, 10]],
                0,
                0,
                0,
                ["55\\d{8}", [10]],
                ["84(?:[08]\\d{3}|[17])\\d{3}", [6, 9]],
            ],
        ],
        JE: [
            "44",
            "00",
            "1534\\d{6}|(?:[3578]\\d|90)\\d{8}",
            [10],
            0,
            "0",
            0,
            "([0-24-8]\\d{5})$|0",
            "1534$1",
            0,
            0,
            [
                ["1534[0-24-8]\\d{5}"],
                ["7(?:(?:(?:50|82)9|937)\\d|7(?:00[378]|97[7-9]))\\d{5}"],
                ["80(?:07(?:35|81)|8901)\\d{4}"],
                [
                    "(?:8(?:4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|90(?:066[59]|1810|71(?:07|55)))\\d{4}",
                ],
                ["701511\\d{4}"],
                0,
                [
                    "(?:3(?:0(?:07(?:35|81)|8901)|3\\d{4}|4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|55\\d{4})\\d{4}",
                ],
                [
                    "76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}",
                ],
                ["56\\d{8}"],
            ],
        ],
        JM: [
            "1",
            "011",
            "(?:[58]\\d\\d|658|900)\\d{7}",
            [10],
            0,
            "1",
            0,
            0,
            0,
            0,
            "658|876",
        ],
        JO: [
            "962",
            "00",
            "(?:(?:[2689]|7\\d)\\d|32|53)\\d{6}",
            [8, 9],
            [
                ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2356]|87"], "(0$1)"],
                ["(\\d{3})(\\d{5,6})", "$1 $2", ["[89]"], "0$1"],
                ["(\\d{2})(\\d{7})", "$1 $2", ["70"], "0$1"],
                ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["7"], "0$1"],
            ],
            "0",
        ],
        JP: [
            "81",
            "010",
            "00[1-9]\\d{6,14}|[257-9]\\d{9}|(?:00|[1-9]\\d\\d)\\d{6}",
            [8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
            [
                ["(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3", ["(?:12|57|99)0"], "0$1"],
                [
                    "(\\d{4})(\\d)(\\d{4})",
                    "$1-$2-$3",
                    [
                        "1(?:26|3[79]|4[56]|5[4-68]|6[3-5])|499|5(?:76|97)|746|8(?:3[89]|47|51)|9(?:80|9[16])",
                        "1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:76|97)9|7468|8(?:3(?:8[7-9]|96)|477|51[2-9])|9(?:802|9(?:1[23]|69))|1(?:45|58)[67]",
                        "1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:769|979[2-69])|7468|8(?:3(?:8[7-9]|96[2457-9])|477|51[2-9])|9(?:802|9(?:1[23]|69))|1(?:45|58)[67]",
                    ],
                    "0$1",
                ],
                ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["60"], "0$1"],
                [
                    "(\\d)(\\d{4})(\\d{4})",
                    "$1-$2-$3",
                    ["[36]|4(?:2[09]|7[01])", "[36]|4(?:2(?:0|9[02-69])|7(?:0[019]|1))"],
                    "0$1",
                ],
                [
                    "(\\d{2})(\\d{3})(\\d{4})",
                    "$1-$2-$3",
                    [
                        "1(?:1|5[45]|77|88|9[69])|2(?:2[1-37]|3[0-269]|4[59]|5|6[24]|7[1-358]|8[1369]|9[0-38])|4(?:[28][1-9]|3[0-57]|[45]|6[248]|7[2-579]|9[29])|5(?:2|3[0459]|4[0-369]|5[29]|8[02389]|9[0-389])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9[2-6])|8(?:2[124589]|3[26-9]|49|51|6|7[0-468]|8[68]|9[019])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9[1-489])",
                        "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2(?:[127]|3[014-9])|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9[19])|62|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|8[1-9]|9[29])|5(?:2|3(?:[045]|9[0-8])|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0-2469])|3(?:[29]|60)|49|51|6(?:[0-24]|36|5[0-3589]|7[23]|9[01459])|7[0-468]|8[68])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9(?:[1289]|3[34]|4[0178]))|(?:264|837)[016-9]|2(?:57|93)[015-9]|(?:25[0468]|422|838)[01]|(?:47[59]|59[89]|8(?:6[68]|9))[019]",
                        "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2[127]|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9(?:17|99))|6(?:2|4[016-9])|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|9[29])|5(?:2|3(?:[045]|9(?:[0-58]|6[4-9]|7[0-35689]))|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0169])|3(?:[29]|60|7(?:[017-9]|6[6-8]))|49|51|6(?:[0-24]|36[2-57-9]|5(?:[0-389]|5[23])|6(?:[01]|9[178])|7(?:2[2-468]|3[78])|9[0145])|7[0-468]|8[68])|9(?:4[15]|5[138]|7[156]|8[189]|9(?:[1289]|3(?:31|4[357])|4[0178]))|(?:8294|96)[1-3]|2(?:57|93)[015-9]|(?:223|8699)[014-9]|(?:25[0468]|422|838)[01]|(?:48|8292|9[23])[1-9]|(?:47[59]|59[89]|8(?:68|9))[019]",
                    ],
                    "0$1",
                ],
                [
                    "(\\d{3})(\\d{2})(\\d{4})",
                    "$1-$2-$3",
                    ["[14]|[289][2-9]|5[3-9]|7[2-4679]"],
                    "0$1",
                ],
                ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["800"], "0$1"],
                ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[257-9]"], "0$1"],
            ],
            "0",
            0,
            "(000[259]\\d{6})$|(?:(?:003768)0?)|0",
            "$1",
        ],
        KE: [
            "254",
            "000",
            "(?:[17]\\d\\d|900)\\d{6}|(?:2|80)0\\d{6,7}|[4-6]\\d{6,8}",
            [7, 8, 9, 10],
            [
                ["(\\d{2})(\\d{5,7})", "$1 $2", ["[24-6]"], "0$1"],
                ["(\\d{3})(\\d{6})", "$1 $2", ["[17]"], "0$1"],
                ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[89]"], "0$1"],
            ],
            "0",
        ],
        KG: [
            "996",
            "00",
            "8\\d{9}|[235-9]\\d{8}",
            [9, 10],
            [
                ["(\\d{4})(\\d{5})", "$1 $2", ["3(?:1[346]|[24-79])"], "0$1"],
                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235-79]|88"], "0$1"],
                ["(\\d{3})(\\d{3})(\\d)(\\d{2,3})", "$1 $2 $3 $4", ["8"], "0$1"],
            ],
            "0",
        ],
        KH: [
            "855",
            "00[14-9]",
            "1\\d{9}|[1-9]\\d{7,8}",
            [8, 9, 10],
            [
                ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-9]"], "0$1"],
                ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]],
            ],
            "0",
        ],
        KI: [
            "686",
            "00",
            "(?:[37]\\d|6[0-79])\\d{6}|(?:[2-48]\\d|50)\\d{3}",
            [5, 8],
            0,
            "0",
        ],
        KM: [
            "269",
            "00",
            "[3478]\\d{6}",
            [7],
            [["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[3478]"]]],
        ],
        KN: [
            "1",
            "011",
            "(?:[58]\\d\\d|900)\\d{7}",
            [10],
            0,
            "1",
            0,
            "([2-7]\\d{6})$|1",
            "869$1",
            0,
            "869",
        ],
        KP: [
            "850",
            "00|99",
            "85\\d{6}|(?:19\\d|[2-7])\\d{7}",
            [8, 10],
            [
                ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"], "0$1"],
                ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-7]"], "0$1"],
                ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"],
            ],
            "0",
        ],
        KR: [
            "82",
            "00(?:[125689]|3(?:[46]5|91)|7(?:00|27|3|55|6[126]))",
            "00[1-9]\\d{8,11}|(?:[12]|5\\d{3})\\d{7}|[13-6]\\d{9}|(?:[1-6]\\d|80)\\d{7}|[3-6]\\d{4,5}|(?:00|7)0\\d{8}",
            [5, 6, 8, 9, 10, 11, 12, 13, 14],
            [
                [
                    "(\\d{2})(\\d{3,4})",
                    "$1-$2",
                    ["(?:3[1-3]|[46][1-4]|5[1-5])1"],
                    "0$1",
                ],
                ["(\\d{4})(\\d{4})", "$1-$2", ["1"]],
                ["(\\d)(\\d{3,4})(\\d{4})", "$1-$2-$3", ["2"], "0$1"],
                ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["60|8"], "0$1"],
                ["(\\d{2})(\\d{3,4})(\\d{4})", "$1-$2-$3", ["[1346]|5[1-5]"], "0$1"],
                ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[57]"], "0$1"],
                ["(\\d{2})(\\d{5})(\\d{4})", "$1-$2-$3", ["5"], "0$1"],
            ],
            "0",
            0,
            "0(8(?:[1-46-8]|5\\d\\d))?",
        ],
        KW: [
            "965",
            "00",
            "18\\d{5}|(?:[2569]\\d|41)\\d{6}",
            [7, 8],
            [
                ["(\\d{4})(\\d{3,4})", "$1 $2", ["[169]|2(?:[235]|4[1-35-9])|52"]],
                ["(\\d{3})(\\d{5})", "$1 $2", ["[245]"]],
            ],
        ],
        KY: [
            "1",
            "011",
            "(?:345|[58]\\d\\d|900)\\d{7}",
            [10],
            0,
            "1",
            0,
            "([2-9]\\d{6})$|1",
            "345$1",
            0,
            "345",
        ],
        KZ: [
            "7",
            "810",
            "(?:33622|8\\d{8})\\d{5}|[78]\\d{9}",
            [10, 14],
            0,
            "8",
            0,
            0,
            0,
            0,
            "33|7",
            0,
            "8~10",
        ],
        LA: [
            "856",
            "00",
            "[23]\\d{9}|3\\d{8}|(?:[235-8]\\d|41)\\d{6}",
            [8, 9, 10],
            [
                ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2[13]|3[14]|[4-8]"], "0$1"],
                [
                    "(\\d{2})(\\d{2})(\\d{2})(\\d{3})",
                    "$1 $2 $3 $4",
                    ["30[013-9]"],
                    "0$1",
                ],
                ["(\\d{2})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[23]"], "0$1"],
            ],
            "0",
        ],
        LB: [
            "961",
            "00",
            "[27-9]\\d{7}|[13-9]\\d{6}",
            [7, 8],
            [
                [
                    "(\\d)(\\d{3})(\\d{3})",
                    "$1 $2 $3",
                    ["[13-69]|7(?:[2-57]|62|8[0-7]|9[04-9])|8[02-9]"],
                    "0$1",
                ],
                ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[27-9]"]],
            ],
            "0",
        ],
        LC: [
            "1",
            "011",
            "(?:[58]\\d\\d|758|900)\\d{7}",
            [10],
            0,
            "1",
            0,
            "([2-8]\\d{6})$|1",
            "758$1",
            0,
            "758",
        ],
        LI: [
            "423",
            "00",
            "[68]\\d{8}|(?:[2378]\\d|90)\\d{5}",
            [7, 9],
            [
                [
                    "(\\d{3})(\\d{2})(\\d{2})",
                    "$1 $2 $3",
                    ["[2379]|8(?:0[09]|7)", "[2379]|8(?:0(?:02|9)|7)"],
                ],
                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]],
                ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["69"]],
                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]],
            ],
            "0",
            0,
            "(1001)|0",
        ],
        LK: [
            "94",
            "00",
            "[1-9]\\d{8}",
            [9],
            [
                ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"],
                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[1-689]"], "0$1"],
            ],
            "0",
        ],
        LR: [
            "231",
            "00",
            "(?:[245]\\d|33|77|88)\\d{7}|(?:2\\d|[4-6])\\d{6}",
            [7, 8, 9],
            [
                ["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["4[67]|[56]"], "0$1"],
                ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"], "0$1"],
                ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-578]"], "0$1"],
            ],
            "0",
        ],
        LS: [
            "266",
            "00",
            "(?:[256]\\d\\d|800)\\d{5}",
            [8],
            [["(\\d{4})(\\d{4})", "$1 $2", ["[2568]"]]],
        ],
        LT: [
            "370",
            "00",
            "(?:[3469]\\d|52|[78]0)\\d{6}",
            [8],
            [
                ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["52[0-7]"], "(8-$1)", 1],
                ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[7-9]"], "8 $1", 1],
                ["(\\d{2})(\\d{6})", "$1 $2", ["37|4(?:[15]|6[1-8])"], "(8-$1)", 1],
                ["(\\d{3})(\\d{5})", "$1 $2", ["[3-6]"], "(8-$1)", 1],
            ],
            "8",
            0,
            "[08]",
        ],
        LU: [
            "352",
            "00",
            "35[013-9]\\d{4,8}|6\\d{8}|35\\d{2,4}|(?:[2457-9]\\d|3[0-46-9])\\d{2,9}",
            [4, 5, 6, 7, 8, 9, 10, 11],
            [
                [
                    "(\\d{2})(\\d{3})",
                    "$1 $2",
                    ["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"],
                ],
                [
                    "(\\d{2})(\\d{2})(\\d{2})",
                    "$1 $2 $3",
                    ["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"],
                ],
                ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["20[2-689]"]],
                [
                    "(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})",
                    "$1 $2 $3 $4",
                    ["2(?:[0367]|4[3-8])"],
                ],
                ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["80[01]|90[015]"]],
                ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["20"]],
                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]],
                [
                    "(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})",
                    "$1 $2 $3 $4 $5",
                    ["2(?:[0367]|4[3-8])"],
                ],
                [
                    "(\\d{2})(\\d{2})(\\d{2})(\\d{1,5})",
                    "$1 $2 $3 $4",
                    ["[3-57]|8[13-9]|9(?:0[89]|[2-579])|(?:2|80)[2-9]"],
                ],
            ],
            0,
            0,
            "(15(?:0[06]|1[12]|[35]5|4[04]|6[26]|77|88|99)\\d)",
        ],
        LV: [
            "371",
            "00",
            "(?:[268]\\d|90)\\d{6}",
            [8],
            [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[269]|8[01]"]]],
        ],
        LY: [
            "218",
            "00",
            "[2-9]\\d{8}",
            [9],
            [["(\\d{2})(\\d{7})", "$1-$2", ["[2-9]"], "0$1"]],
            "0",
        ],
        MA: [
            "212",
            "00",
            "[5-8]\\d{8}",
            [9],
            [
                ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5[45]"], "0$1"],
                [
                    "(\\d{4})(\\d{5})",
                    "$1-$2",
                    [
                        "5(?:2[2-489]|3[5-9]|9)|8(?:0[89]|92)",
                        "5(?:2(?:[2-49]|8[235-9])|3[5-9]|9)|8(?:0[89]|92)",
                    ],
                    "0$1",
                ],
                ["(\\d{2})(\\d{7})", "$1-$2", ["8"], "0$1"],
                ["(\\d{3})(\\d{6})", "$1-$2", ["[5-7]"], "0$1"],
            ],
            "0",
            0,
            0,
            0,
            0,
            0,
            [
                [
                    "5(?:2(?:[0-25-79]\\d|3[1-578]|4[02-46-8]|8[0235-7])|3(?:[0-47]\\d|5[02-9]|6[02-8]|8[014-9]|9[3-9])|(?:4[067]|5[03])\\d)\\d{5}",
                ],
                [
                    "(?:6(?:[0-79]\\d|8[0-247-9])|7(?:[0167]\\d|2[0-2]|5[01]|8[0-3]))\\d{6}",
                ],
                ["80[0-7]\\d{6}"],
                ["89\\d{7}"],
                0,
                0,
                0,
                0,
                ["(?:592(?:4[0-2]|93)|80[89]\\d\\d)\\d{4}"],
            ],
        ],
        MC: [
            "377",
            "00",
            "(?:[3489]|6\\d)\\d{7}",
            [8, 9],
            [
                ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["4"], "0$1"],
                ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[389]"]],
                [
                    "(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
                    "$1 $2 $3 $4 $5",
                    ["6"],
                    "0$1",
                ],
            ],
            "0",
        ],
        MD: [
            "373",
            "00",
            "(?:[235-7]\\d|[89]0)\\d{6}",
            [8],
            [
                ["(\\d{3})(\\d{5})", "$1 $2", ["[89]"], "0$1"],
                ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["22|3"], "0$1"],
                ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[25-7]"], "0$1"],
            ],
            "0",
        ],
        ME: [
            "382",
            "00",
            "(?:20|[3-79]\\d)\\d{6}|80\\d{6,7}",
            [8, 9],
            [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-9]"], "0$1"]],
            "0",
        ],
        MF: [
            "590",
            "00",
            "590\\d{6}|(?:69|80|9\\d)\\d{7}",
            [9],
            0,
            "0",
            0,
            0,
            0,
            0,
            0,
            [
                ["590(?:0[079]|[14]3|[27][79]|3[03-7]|5[0-268]|87)\\d{4}"],
                ["69(?:0\\d\\d|1(?:2[2-9]|3[0-5]))\\d{4}"],
                ["80[0-5]\\d{6}"],
                0,
                0,
                0,
                0,
                0,
                ["9(?:(?:395|76[018])\\d|475[0-5])\\d{4}"],
            ],
        ],
        MG: [
            "261",
            "00",
            "[23]\\d{8}",
            [9],
            [["(\\d{2})(\\d{2})(\\d{3})(\\d{2})", "$1 $2 $3 $4", ["[23]"], "0$1"]],
            "0",
            0,
            "([24-9]\\d{6})$|0",
            "20$1",
        ],
        MH: [
            "692",
            "011",
            "329\\d{4}|(?:[256]\\d|45)\\d{5}",
            [7],
            [["(\\d{3})(\\d{4})", "$1-$2", ["[2-6]"]]],
            "1",
        ],
        MK: [
            "389",
            "00",
            "[2-578]\\d{7}",
            [8],
            [
                [
                    "(\\d)(\\d{3})(\\d{4})",
                    "$1 $2 $3",
                    ["2|34[47]|4(?:[37]7|5[47]|64)"],
                    "0$1",
                ],
                ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[347]"], "0$1"],
                ["(\\d{3})(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[58]"], "0$1"],
            ],
            "0",
        ],
        ML: [
            "223",
            "00",
            "[24-9]\\d{7}",
            [8],
            [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24-9]"]]],
        ],
        MM: [
            "95",
            "00",
            "1\\d{5,7}|95\\d{6}|(?:[4-7]|9[0-46-9])\\d{6,8}|(?:2|8\\d)\\d{5,8}",
            [6, 7, 8, 9, 10],
            [
                ["(\\d)(\\d{2})(\\d{3})", "$1 $2 $3", ["16|2"], "0$1"],
                [
                    "(\\d{2})(\\d{2})(\\d{3})",
                    "$1 $2 $3",
                    ["[45]|6(?:0[23]|[1-689]|7[235-7])|7(?:[0-4]|5[2-7])|8[1-6]"],
                    "0$1",
                ],
                ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[12]"], "0$1"],
                ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[4-7]|8[1-35]"], "0$1"],
                [
                    "(\\d)(\\d{3})(\\d{4,6})",
                    "$1 $2 $3",
                    ["9(?:2[0-4]|[35-9]|4[137-9])"],
                    "0$1",
                ],
                ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2"], "0$1"],
                ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"],
                ["(\\d)(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["92"], "0$1"],
                ["(\\d)(\\d{5})(\\d{4})", "$1 $2 $3", ["9"], "0$1"],
            ],
            "0",
        ],
        MN: [
            "976",
            "001",
            "[12]\\d{7,9}|[5-9]\\d{7}",
            [8, 9, 10],
            [
                ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[12]1"], "0$1"],
                ["(\\d{4})(\\d{4})", "$1 $2", ["[5-9]"]],
                ["(\\d{3})(\\d{5,6})", "$1 $2", ["[12]2[1-3]"], "0$1"],
                [
                    "(\\d{4})(\\d{5,6})",
                    "$1 $2",
                    [
                        "[12](?:27|3[2-8]|4[2-68]|5[1-4689])",
                        "[12](?:27|3[2-8]|4[2-68]|5[1-4689])[0-3]",
                    ],
                    "0$1",
                ],
                ["(\\d{5})(\\d{4,5})", "$1 $2", ["[12]"], "0$1"],
            ],
            "0",
        ],
        MO: [
            "853",
            "00",
            "0800\\d{3}|(?:28|[68]\\d)\\d{6}",
            [7, 8],
            [
                ["(\\d{4})(\\d{3})", "$1 $2", ["0"]],
                ["(\\d{4})(\\d{4})", "$1 $2", ["[268]"]],
            ],
        ],
        MP: [
            "1",
            "011",
            "[58]\\d{9}|(?:67|90)0\\d{7}",
            [10],
            0,
            "1",
            0,
            "([2-9]\\d{6})$|1",
            "670$1",
            0,
            "670",
        ],
        MQ: [
            "596",
            "00",
            "596\\d{6}|(?:69|80|9\\d)\\d{7}",
            [9],
            [
                ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[569]"], "0$1"],
                ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"],
            ],
            "0",
        ],
        MR: [
            "222",
            "00",
            "(?:[2-4]\\d\\d|800)\\d{5}",
            [8],
            [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-48]"]]],
        ],
        MS: [
            "1",
            "011",
            "(?:[58]\\d\\d|664|900)\\d{7}",
            [10],
            0,
            "1",
            0,
            "([34]\\d{6})$|1",
            "664$1",
            0,
            "664",
        ],
        MT: [
            "356",
            "00",
            "3550\\d{4}|(?:[2579]\\d\\d|800)\\d{5}",
            [8],
            [["(\\d{4})(\\d{4})", "$1 $2", ["[2357-9]"]]],
        ],
        MU: [
            "230",
            "0(?:0|[24-7]0|3[03])",
            "(?:[57]|8\\d\\d)\\d{7}|[2-468]\\d{6}",
            [7, 8, 10],
            [
                ["(\\d{3})(\\d{4})", "$1 $2", ["[2-46]|8[013]"]],
                ["(\\d{4})(\\d{4})", "$1 $2", ["[57]"]],
                ["(\\d{5})(\\d{5})", "$1 $2", ["8"]],
            ],
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            "020",
        ],
        MV: [
            "960",
            "0(?:0|19)",
            "(?:800|9[0-57-9]\\d)\\d{7}|[34679]\\d{6}",
            [7, 10],
            [
                ["(\\d{3})(\\d{4})", "$1-$2", ["[34679]"]],
                ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"]],
            ],
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            "00",
        ],
        MW: [
            "265",
            "00",
            "(?:[1289]\\d|31|77)\\d{7}|1\\d{6}",
            [7, 9],
            [
                ["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["1[2-9]"], "0$1"],
                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"], "0$1"],
                ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[137-9]"], "0$1"],
            ],
            "0",
        ],
        MX: [
            "52",
            "0[09]",
            "1(?:(?:[27]2|44|87|99)[1-9]|65[0-689])\\d{7}|(?:1(?:[01]\\d|2[13-9]|[35][1-9]|4[0-35-9]|6[0-46-9]|7[013-9]|8[1-69]|9[1-8])|[2-9]\\d)\\d{8}",
            [10, 11],
            [
                ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["33|5[56]|81"], 0, 1],
                ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-9]"], 0, 1],
                [
                    "(\\d)(\\d{2})(\\d{4})(\\d{4})",
                    "$2 $3 $4",
                    ["1(?:33|5[56]|81)"],
                    0,
                    1,
                ],
                ["(\\d)(\\d{3})(\\d{3})(\\d{4})", "$2 $3 $4", ["1"], 0, 1],
            ],
            "01",
            0,
            "0(?:[12]|4[45])|1",
            0,
            0,
            0,
            0,
            "00",
        ],
        MY: [
            "60",
            "00",
            "1\\d{8,9}|(?:3\\d|[4-9])\\d{7}",
            [8, 9, 10],
            [
                ["(\\d)(\\d{3})(\\d{4})", "$1-$2 $3", ["[4-79]"], "0$1"],
                [
                    "(\\d{2})(\\d{3})(\\d{3,4})",
                    "$1-$2 $3",
                    [
                        "1(?:[02469]|[378][1-9]|53)|8",
                        "1(?:[02469]|[37][1-9]|53|8(?:[1-46-9]|5[7-9]))|8",
                    ],
                    "0$1",
                ],
                ["(\\d)(\\d{4})(\\d{4})", "$1-$2 $3", ["3"], "0$1"],
                ["(\\d)(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3-$4", ["1(?:[367]|80)"]],
                ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2 $3", ["15"], "0$1"],
                ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2 $3", ["1"], "0$1"],
            ],
            "0",
        ],
        MZ: [
            "258",
            "00",
            "(?:2|8\\d)\\d{7}",
            [8, 9],
            [
                ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2|8[2-79]"]],
                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]],
            ],
        ],
        NA: [
            "264",
            "00",
            "[68]\\d{7,8}",
            [8, 9],
            [
                ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["88"], "0$1"],
                ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["6"], "0$1"],
                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["87"], "0$1"],
                ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"],
            ],
            "0",
        ],
        NC: [
            "687",
            "00",
            "(?:050|[2-57-9]\\d\\d)\\d{3}",
            [6],
            [["(\\d{2})(\\d{2})(\\d{2})", "$1.$2.$3", ["[02-57-9]"]]],
        ],
        NE: [
            "227",
            "00",
            "[027-9]\\d{7}",
            [8],
            [
                ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["08"]],
                [
                    "(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
                    "$1 $2 $3 $4",
                    ["[089]|2[013]|7[047]"],
                ],
            ],
        ],
        NF: [
            "672",
            "00",
            "[13]\\d{5}",
            [6],
            [
                ["(\\d{2})(\\d{4})", "$1 $2", ["1[0-3]"]],
                ["(\\d)(\\d{5})", "$1 $2", ["[13]"]],
            ],
            0,
            0,
            "([0-258]\\d{4})$",
            "3$1",
        ],
        NG: [
            "234",
            "009",
            "2[0-24-9]\\d{8}|[78]\\d{10,13}|[7-9]\\d{9}|[1-9]\\d{7}|[124-7]\\d{6}",
            [7, 8, 10, 11, 12, 13, 14],
            [
                ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["78"], "0$1"],
                [
                    "(\\d)(\\d{3})(\\d{3,4})",
                    "$1 $2 $3",
                    ["[12]|9(?:0[3-9]|[1-9])"],
                    "0$1",
                ],
                ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["[3-7]|8[2-9]"], "0$1"],
                ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[7-9]"], "0$1"],
                ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["20[129]"], "0$1"],
                ["(\\d{4})(\\d{2})(\\d{4})", "$1 $2 $3", ["2"], "0$1"],
                ["(\\d{3})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["[78]"], "0$1"],
                ["(\\d{3})(\\d{5})(\\d{5,6})", "$1 $2 $3", ["[78]"], "0$1"],
            ],
            "0",
        ],
        NI: [
            "505",
            "00",
            "(?:1800|[25-8]\\d{3})\\d{4}",
            [8],
            [["(\\d{4})(\\d{4})", "$1 $2", ["[125-8]"]]],
        ],
        NL: [
            "31",
            "00",
            "(?:[124-7]\\d\\d|3(?:[02-9]\\d|1[0-8]))\\d{6}|8\\d{6,9}|9\\d{6,10}|1\\d{4,5}",
            [5, 6, 7, 8, 9, 10, 11],
            [
                ["(\\d{3})(\\d{4,7})", "$1 $2", ["[89]0"], "0$1"],
                ["(\\d{2})(\\d{7})", "$1 $2", ["66"], "0$1"],
                ["(\\d)(\\d{8})", "$1 $2", ["6"], "0$1"],
                [
                    "(\\d{3})(\\d{3})(\\d{3})",
                    "$1 $2 $3",
                    ["1[16-8]|2[259]|3[124]|4[17-9]|5[124679]"],
                    "0$1",
                ],
                ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-578]|91"], "0$1"],
                ["(\\d{3})(\\d{3})(\\d{5})", "$1 $2 $3", ["9"], "0$1"],
            ],
            "0",
        ],
        NO: [
            "47",
            "00",
            "(?:0|[2-9]\\d{3})\\d{4}",
            [5, 8],
            [
                ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["8"]],
                ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-79]"]],
            ],
            0,
            0,
            0,
            0,
            0,
            "[02-689]|7[0-8]",
        ],
        NP: [
            "977",
            "00",
            "(?:1\\d|9)\\d{9}|[1-9]\\d{7}",
            [8, 10, 11],
            [
                ["(\\d)(\\d{7})", "$1-$2", ["1[2-6]"], "0$1"],
                [
                    "(\\d{2})(\\d{6})",
                    "$1-$2",
                    ["1[01]|[2-8]|9(?:[1-59]|[67][2-6])"],
                    "0$1",
                ],
                ["(\\d{3})(\\d{7})", "$1-$2", ["9"]],
            ],
            "0",
        ],
        NR: [
            "674",
            "00",
            "(?:444|(?:55|8\\d)\\d|666)\\d{4}",
            [7],
            [["(\\d{3})(\\d{4})", "$1 $2", ["[4-68]"]]],
        ],
        NU: [
            "683",
            "00",
            "(?:[4-7]|888\\d)\\d{3}",
            [4, 7],
            [["(\\d{3})(\\d{4})", "$1 $2", ["8"]]],
        ],
        NZ: [
            "64",
            "0(?:0|161)",
            "[1289]\\d{9}|50\\d{5}(?:\\d{2,3})?|[27-9]\\d{7,8}|(?:[34]\\d|6[0-35-9])\\d{6}|8\\d{4,6}",
            [5, 6, 7, 8, 9, 10],
            [
                ["(\\d{2})(\\d{3,8})", "$1 $2", ["8[1-79]"], "0$1"],
                [
                    "(\\d{3})(\\d{2})(\\d{2,3})",
                    "$1 $2 $3",
                    ["50[036-8]|8|90", "50(?:[0367]|88)|8|90"],
                    "0$1",
                ],
                [
                    "(\\d)(\\d{3})(\\d{4})",
                    "$1 $2 $3",
                    ["24|[346]|7[2-57-9]|9[2-9]"],
                    "0$1",
                ],
                ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2(?:10|74)|[589]"], "0$1"],
                ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["1|2[028]"], "0$1"],
                [
                    "(\\d{2})(\\d{3})(\\d{3,5})",
                    "$1 $2 $3",
                    ["2(?:[169]|7[0-35-9])|7"],
                    "0$1",
                ],
            ],
            "0",
            0,
            0,
            0,
            0,
            0,
            0,
            "00",
        ],
        OM: [
            "968",
            "00",
            "(?:1505|[279]\\d{3}|500)\\d{4}|800\\d{5,6}",
            [7, 8, 9],
            [
                ["(\\d{3})(\\d{4,6})", "$1 $2", ["[58]"]],
                ["(\\d{2})(\\d{6})", "$1 $2", ["2"]],
                ["(\\d{4})(\\d{4})", "$1 $2", ["[179]"]],
            ],
        ],
        PA: [
            "507",
            "00",
            "(?:00800|8\\d{3})\\d{6}|[68]\\d{7}|[1-57-9]\\d{6}",
            [7, 8, 10, 11],
            [
                ["(\\d{3})(\\d{4})", "$1-$2", ["[1-57-9]"]],
                ["(\\d{4})(\\d{4})", "$1-$2", ["[68]"]],
                ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]],
            ],
        ],
        PE: [
            "51",
            "00|19(?:1[124]|77|90)00",
            "(?:[14-8]|9\\d)\\d{7}",
            [8, 9],
            [
                ["(\\d{3})(\\d{5})", "$1 $2", ["80"], "(0$1)"],
                ["(\\d)(\\d{7})", "$1 $2", ["1"], "(0$1)"],
                ["(\\d{2})(\\d{6})", "$1 $2", ["[4-8]"], "(0$1)"],
                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"]],
            ],
            "0",
            0,
            0,
            0,
            0,
            0,
            0,
            "00",
            " Anexo ",
        ],
        PF: [
            "689",
            "00",
            "4\\d{5}(?:\\d{2})?|8\\d{7,8}",
            [6, 8, 9],
            [
                ["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["44"]],
                ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["4|8[7-9]"]],
                ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]],
            ],
        ],
        PG: [
            "675",
            "00|140[1-3]",
            "(?:180|[78]\\d{3})\\d{4}|(?:[2-589]\\d|64)\\d{5}",
            [7, 8],
            [
                ["(\\d{3})(\\d{4})", "$1 $2", ["18|[2-69]|85"]],
                ["(\\d{4})(\\d{4})", "$1 $2", ["[78]"]],
            ],
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            "00",
        ],
        PH: [
            "63",
            "00",
            "(?:[2-7]|9\\d)\\d{8}|2\\d{5}|(?:1800|8)\\d{7,9}",
            [6, 8, 9, 10, 11, 12, 13],
            [
                ["(\\d)(\\d{5})", "$1 $2", ["2"], "(0$1)"],
                [
                    "(\\d{4})(\\d{4,6})",
                    "$1 $2",
                    [
                        "3(?:23|39|46)|4(?:2[3-6]|[35]9|4[26]|76)|544|88[245]|(?:52|64|86)2",
                        "3(?:230|397|461)|4(?:2(?:35|[46]4|51)|396|4(?:22|63)|59[347]|76[15])|5(?:221|446)|642[23]|8(?:622|8(?:[24]2|5[13]))",
                    ],
                    "(0$1)",
                ],
                [
                    "(\\d{5})(\\d{4})",
                    "$1 $2",
                    ["346|4(?:27|9[35])|883", "3469|4(?:279|9(?:30|56))|8834"],
                    "(0$1)",
                ],
                ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2"], "(0$1)"],
                ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[3-7]|8[2-8]"], "(0$1)"],
                ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"],
                ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]],
                ["(\\d{4})(\\d{1,2})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["1"]],
            ],
            "0",
        ],
        PK: [
            "92",
            "00",
            "122\\d{6}|[24-8]\\d{10,11}|9(?:[013-9]\\d{8,10}|2(?:[01]\\d\\d|2(?:[06-8]\\d|1[01]))\\d{7})|(?:[2-8]\\d{3}|92(?:[0-7]\\d|8[1-9]))\\d{6}|[24-9]\\d{8}|[89]\\d{7}",
            [8, 9, 10, 11, 12],
            [
                ["(\\d{3})(\\d{3})(\\d{2,7})", "$1 $2 $3", ["[89]0"], "0$1"],
                ["(\\d{4})(\\d{5})", "$1 $2", ["1"]],
                [
                    "(\\d{3})(\\d{6,7})",
                    "$1 $2",
                    [
                        "2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:2[2-8]|3[27-9]|4[2-6]|6[3569]|9[25-8])",
                        "9(?:2[3-8]|98)|(?:2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:22|3[27-9]|4[2-6]|6[3569]|9[25-7]))[2-9]",
                    ],
                    "(0$1)",
                ],
                [
                    "(\\d{2})(\\d{7,8})",
                    "$1 $2",
                    ["(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)[2-9]"],
                    "(0$1)",
                ],
                ["(\\d{5})(\\d{5})", "$1 $2", ["58"], "(0$1)"],
                ["(\\d{3})(\\d{7})", "$1 $2", ["3"], "0$1"],
                [
                    "(\\d{2})(\\d{3})(\\d{3})(\\d{3})",
                    "$1 $2 $3 $4",
                    ["2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91"],
                    "(0$1)",
                ],
                [
                    "(\\d{3})(\\d{3})(\\d{3})(\\d{3})",
                    "$1 $2 $3 $4",
                    ["[24-9]"],
                    "(0$1)",
                ],
            ],
            "0",
        ],
        PL: [
            "48",
            "00",
            "(?:6|8\\d\\d)\\d{7}|[1-9]\\d{6}(?:\\d{2})?|[26]\\d{5}",
            [6, 7, 8, 9, 10],
            [
                ["(\\d{5})", "$1", ["19"]],
                ["(\\d{3})(\\d{3})", "$1 $2", ["11|20|64"]],
                [
                    "(\\d{2})(\\d{2})(\\d{3})",
                    "$1 $2 $3",
                    [
                        "(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])1",
                        "(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])19",
                    ],
                ],
                ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["64"]],
                [
                    "(\\d{3})(\\d{3})(\\d{3})",
                    "$1 $2 $3",
                    ["21|39|45|5[0137]|6[0469]|7[02389]|8(?:0[14]|8)"],
                ],
                [
                    "(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
                    "$1 $2 $3 $4",
                    ["1[2-8]|[2-7]|8[1-79]|9[145]"],
                ],
                ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["8"]],
            ],
        ],
        PM: [
            "508",
            "00",
            "[45]\\d{5}|(?:708|80\\d)\\d{6}",
            [6, 9],
            [
                ["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["[45]"], "0$1"],
                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["7"]],
                ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"],
            ],
            "0",
        ],
        PR: [
            "1",
            "011",
            "(?:[589]\\d\\d|787)\\d{7}",
            [10],
            0,
            "1",
            0,
            0,
            0,
            0,
            "787|939",
        ],
        PS: [
            "970",
            "00",
            "[2489]2\\d{6}|(?:1\\d|5)\\d{8}",
            [8, 9, 10],
            [
                ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2489]"], "0$1"],
                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["5"], "0$1"],
                ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]],
            ],
            "0",
        ],
        PT: [
            "351",
            "00",
            "1693\\d{5}|(?:[26-9]\\d|30)\\d{7}",
            [9],
            [
                ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["2[12]"]],
                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["16|[236-9]"]],
            ],
        ],
        PW: [
            "680",
            "01[12]",
            "(?:[24-8]\\d\\d|345|900)\\d{4}",
            [7],
            [["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]],
        ],
        PY: [
            "595",
            "00",
            "59\\d{4,6}|9\\d{5,10}|(?:[2-46-8]\\d|5[0-8])\\d{4,7}",
            [6, 7, 8, 9, 10, 11],
            [
                ["(\\d{3})(\\d{3,6})", "$1 $2", ["[2-9]0"], "0$1"],
                [
                    "(\\d{2})(\\d{5})",
                    "$1 $2",
                    ["[26]1|3[289]|4[1246-8]|7[1-3]|8[1-36]"],
                    "(0$1)",
                ],
                [
                    "(\\d{3})(\\d{4,5})",
                    "$1 $2",
                    ["2[279]|3[13-5]|4[359]|5|6(?:[34]|7[1-46-8])|7[46-8]|85"],
                    "(0$1)",
                ],
                [
                    "(\\d{2})(\\d{3})(\\d{3,4})",
                    "$1 $2 $3",
                    ["2[14-68]|3[26-9]|4[1246-8]|6(?:1|75)|7[1-35]|8[1-36]"],
                    "(0$1)",
                ],
                ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["87"]],
                ["(\\d{3})(\\d{6})", "$1 $2", ["9(?:[5-79]|8[1-7])"], "0$1"],
                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-8]"], "0$1"],
                ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["9"]],
            ],
            "0",
        ],
        QA: [
            "974",
            "00",
            "800\\d{4}|(?:2|800)\\d{6}|(?:0080|[3-7])\\d{7}",
            [7, 8, 9, 11],
            [
                ["(\\d{3})(\\d{4})", "$1 $2", ["2[16]|8"]],
                ["(\\d{4})(\\d{4})", "$1 $2", ["[3-7]"]],
            ],
        ],
        RE: [
            "262",
            "00",
            "(?:26|[689]\\d)\\d{7}",
            [9],
            [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2689]"], "0$1"]],
            "0",
            0,
            0,
            0,
            0,
            0,
            [
                ["26(?:2\\d\\d|3(?:0\\d|1[0-6]))\\d{4}"],
                [
                    "69(?:2\\d\\d|3(?:[06][0-6]|1[013]|2[0-2]|3[0-39]|4\\d|5[0-5]|7[0-37]|8[0-8]|9[0-479]))\\d{4}",
                ],
                ["80\\d{7}"],
                ["89[1-37-9]\\d{6}"],
                0,
                0,
                0,
                0,
                ["9(?:399[0-3]|479[0-5]|76(?:2[27]|3[0-37]))\\d{4}"],
                ["8(?:1[019]|2[0156]|84|90)\\d{6}"],
            ],
        ],
        RO: [
            "40",
            "00",
            "(?:[236-8]\\d|90)\\d{7}|[23]\\d{5}",
            [6, 9],
            [
                ["(\\d{3})(\\d{3})", "$1 $2", ["2[3-6]", "2[3-6]\\d9"], "0$1"],
                ["(\\d{2})(\\d{4})", "$1 $2", ["219|31"], "0$1"],
                ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[23]1"], "0$1"],
                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[236-9]"], "0$1"],
            ],
            "0",
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            " int ",
        ],
        RS: [
            "381",
            "00",
            "38[02-9]\\d{6,9}|6\\d{7,9}|90\\d{4,8}|38\\d{5,6}|(?:7\\d\\d|800)\\d{3,9}|(?:[12]\\d|3[0-79])\\d{5,10}",
            [6, 7, 8, 9, 10, 11, 12],
            [
                ["(\\d{3})(\\d{3,9})", "$1 $2", ["(?:2[389]|39)0|[7-9]"], "0$1"],
                ["(\\d{2})(\\d{5,10})", "$1 $2", ["[1-36]"], "0$1"],
            ],
            "0",
        ],
        RU: [
            "7",
            "810",
            "8\\d{13}|[347-9]\\d{9}",
            [10, 14],
            [
                [
                    "(\\d{4})(\\d{2})(\\d{2})(\\d{2})",
                    "$1 $2 $3 $4",
                    [
                        "7(?:1[0-8]|2[1-9])",
                        "7(?:1(?:[0-356]2|4[29]|7|8[27])|2(?:1[23]|[2-9]2))",
                        "7(?:1(?:[0-356]2|4[29]|7|8[27])|2(?:13[03-69]|62[013-9]))|72[1-57-9]2",
                    ],
                    "8 ($1)",
                    1,
                ],
                [
                    "(\\d{5})(\\d)(\\d{2})(\\d{2})",
                    "$1 $2 $3 $4",
                    [
                        "7(?:1[0-68]|2[1-9])",
                        "7(?:1(?:[06][3-6]|[18]|2[35]|[3-5][3-5])|2(?:[13][3-5]|[24-689]|7[457]))",
                        "7(?:1(?:0(?:[356]|4[023])|[18]|2(?:3[013-9]|5)|3[45]|43[013-79]|5(?:3[1-8]|4[1-7]|5)|6(?:3[0-35-9]|[4-6]))|2(?:1(?:3[178]|[45])|[24-689]|3[35]|7[457]))|7(?:14|23)4[0-8]|71(?:33|45)[1-79]",
                    ],
                    "8 ($1)",
                    1,
                ],
                ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "8 ($1)", 1],
                [
                    "(\\d{3})(\\d{3})(\\d{2})(\\d{2})",
                    "$1 $2-$3-$4",
                    ["[349]|8(?:[02-7]|1[1-8])"],
                    "8 ($1)",
                    1,
                ],
                ["(\\d{4})(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["8"], "8 ($1)"],
            ],
            "8",
            0,
            0,
            0,
            0,
            "3[04-689]|[489]",
            0,
            "8~10",
        ],
        RW: [
            "250",
            "00",
            "(?:06|[27]\\d\\d|[89]00)\\d{6}",
            [8, 9],
            [
                ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"]],
                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"]],
                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[7-9]"], "0$1"],
            ],
            "0",
        ],
        SA: [
            "966",
            "00",
            "92\\d{7}|(?:[15]|8\\d)\\d{8}",
            [9, 10],
            [
                ["(\\d{4})(\\d{5})", "$1 $2", ["9"]],
                ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"],
                ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["5"], "0$1"],
                ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["81"], "0$1"],
                ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]],
            ],
            "0",
        ],
        SB: [
            "677",
            "0[01]",
            "(?:[1-6]|[7-9]\\d\\d)\\d{4}",
            [5, 7],
            [["(\\d{2})(\\d{5})", "$1 $2", ["7|8[4-9]|9(?:[1-8]|9[0-8])"]]],
        ],
        SC: [
            "248",
            "010|0[0-2]",
            "800\\d{4}|(?:[249]\\d|64)\\d{5}",
            [7],
            [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[246]|9[57]"]]],
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            "00",
        ],
        SD: [
            "249",
            "00",
            "[19]\\d{8}",
            [9],
            [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[19]"], "0$1"]],
            "0",
        ],
        SE: [
            "46",
            "00",
            "(?:[26]\\d\\d|9)\\d{9}|[1-9]\\d{8}|[1-689]\\d{7}|[1-4689]\\d{6}|2\\d{5}",
            [6, 7, 8, 9, 10],
            [
                [
                    "(\\d{2})(\\d{2,3})(\\d{2})",
                    "$1-$2 $3",
                    ["20"],
                    "0$1",
                    0,
                    "$1 $2 $3",
                ],
                ["(\\d{3})(\\d{4})", "$1-$2", ["9(?:00|39|44|9)"], "0$1", 0, "$1 $2"],
                [
                    "(\\d{2})(\\d{3})(\\d{2})",
                    "$1-$2 $3",
                    ["[12][136]|3[356]|4[0246]|6[03]|90[1-9]"],
                    "0$1",
                    0,
                    "$1 $2 $3",
                ],
                [
                    "(\\d)(\\d{2,3})(\\d{2})(\\d{2})",
                    "$1-$2 $3 $4",
                    ["8"],
                    "0$1",
                    0,
                    "$1 $2 $3 $4",
                ],
                [
                    "(\\d{3})(\\d{2,3})(\\d{2})",
                    "$1-$2 $3",
                    [
                        "1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[125689]|4[02-57]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])",
                    ],
                    "0$1",
                    0,
                    "$1 $2 $3",
                ],
                [
                    "(\\d{3})(\\d{2,3})(\\d{3})",
                    "$1-$2 $3",
                    ["9(?:00|39|44)"],
                    "0$1",
                    0,
                    "$1 $2 $3",
                ],
                [
                    "(\\d{2})(\\d{2,3})(\\d{2})(\\d{2})",
                    "$1-$2 $3 $4",
                    ["1[13689]|2[0136]|3[1356]|4[0246]|54|6[03]|90[1-9]"],
                    "0$1",
                    0,
                    "$1 $2 $3 $4",
                ],
                [
                    "(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
                    "$1-$2 $3 $4",
                    ["10|7"],
                    "0$1",
                    0,
                    "$1 $2 $3 $4",
                ],
                [
                    "(\\d)(\\d{3})(\\d{3})(\\d{2})",
                    "$1-$2 $3 $4",
                    ["8"],
                    "0$1",
                    0,
                    "$1 $2 $3 $4",
                ],
                [
                    "(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
                    "$1-$2 $3 $4",
                    [
                        "[13-5]|2(?:[247-9]|5[0138])|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])",
                    ],
                    "0$1",
                    0,
                    "$1 $2 $3 $4",
                ],
                [
                    "(\\d{3})(\\d{2})(\\d{2})(\\d{3})",
                    "$1-$2 $3 $4",
                    ["9"],
                    "0$1",
                    0,
                    "$1 $2 $3 $4",
                ],
                [
                    "(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
                    "$1-$2 $3 $4 $5",
                    ["[26]"],
                    "0$1",
                    0,
                    "$1 $2 $3 $4 $5",
                ],
            ],
            "0",
        ],
        SG: [
            "65",
            "0[0-3]\\d",
            "(?:(?:1\\d|8)\\d\\d|7000)\\d{7}|[3689]\\d{7}",
            [8, 10, 11],
            [
                ["(\\d{4})(\\d{4})", "$1 $2", ["[369]|8(?:0[1-8]|[1-9])"]],
                ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]],
                ["(\\d{4})(\\d{4})(\\d{3})", "$1 $2 $3", ["7"]],
                ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]],
            ],
        ],
        SH: [
            "290",
            "00",
            "(?:[256]\\d|8)\\d{3}",
            [4, 5],
            0,
            0,
            0,
            0,
            0,
            0,
            "[256]",
        ],
        SI: [
            "386",
            "00|10(?:22|66|88|99)",
            "[1-7]\\d{7}|8\\d{4,7}|90\\d{4,6}",
            [5, 6, 7, 8],
            [
                ["(\\d{2})(\\d{3,6})", "$1 $2", ["8[09]|9"], "0$1"],
                ["(\\d{3})(\\d{5})", "$1 $2", ["59|8"], "0$1"],
                [
                    "(\\d{2})(\\d{3})(\\d{3})",
                    "$1 $2 $3",
                    ["[37][01]|4[0139]|51|6"],
                    "0$1",
                ],
                ["(\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[1-57]"], "(0$1)"],
            ],
            "0",
            0,
            0,
            0,
            0,
            0,
            0,
            "00",
        ],
        SJ: [
            "47",
            "00",
            "0\\d{4}|(?:[489]\\d|79)\\d{6}",
            [5, 8],
            0,
            0,
            0,
            0,
            0,
            0,
            "79",
        ],
        SK: [
            "421",
            "00",
            "[2-689]\\d{8}|[2-59]\\d{6}|[2-5]\\d{5}",
            [6, 7, 9],
            [
                ["(\\d)(\\d{2})(\\d{3,4})", "$1 $2 $3", ["21"], "0$1"],
                [
                    "(\\d{2})(\\d{2})(\\d{2,3})",
                    "$1 $2 $3",
                    ["[3-5][1-8]1", "[3-5][1-8]1[67]"],
                    "0$1",
                ],
                ["(\\d)(\\d{3})(\\d{3})(\\d{2})", "$1/$2 $3 $4", ["2"], "0$1"],
                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[689]"], "0$1"],
                ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1/$2 $3 $4", ["[3-5]"], "0$1"],
            ],
            "0",
        ],
        SL: [
            "232",
            "00",
            "(?:[237-9]\\d|66)\\d{6}",
            [8],
            [["(\\d{2})(\\d{6})", "$1 $2", ["[236-9]"], "(0$1)"]],
            "0",
        ],
        SM: [
            "378",
            "00",
            "(?:0549|[5-7]\\d)\\d{6}",
            [8, 10],
            [
                ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-7]"]],
                ["(\\d{4})(\\d{6})", "$1 $2", ["0"]],
            ],
            0,
            0,
            "([89]\\d{5})$",
            "0549$1",
        ],
        SN: [
            "221",
            "00",
            "(?:[378]\\d|93)\\d{7}",
            [9],
            [
                ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]],
                ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[379]"]],
            ],
        ],
        SO: [
            "252",
            "00",
            "[346-9]\\d{8}|[12679]\\d{7}|[1-5]\\d{6}|[1348]\\d{5}",
            [6, 7, 8, 9],
            [
                ["(\\d{2})(\\d{4})", "$1 $2", ["8[125]"]],
                ["(\\d{6})", "$1", ["[134]"]],
                ["(\\d)(\\d{6})", "$1 $2", ["[15]|2[0-79]|3[0-46-8]|4[0-7]"]],
                ["(\\d)(\\d{7})", "$1 $2", ["(?:2|90)4|[67]"]],
                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[348]|64|79|90"]],
                ["(\\d{2})(\\d{5,7})", "$1 $2", ["1|28|6[0-35-9]|77|9[2-9]"]],
            ],
            "0",
        ],
        SR: [
            "597",
            "00",
            "(?:[2-5]|68|[78]\\d)\\d{5}",
            [6, 7],
            [
                ["(\\d{2})(\\d{2})(\\d{2})", "$1-$2-$3", ["56"]],
                ["(\\d{3})(\\d{3})", "$1-$2", ["[2-5]"]],
                ["(\\d{3})(\\d{4})", "$1-$2", ["[6-8]"]],
            ],
        ],
        SS: [
            "211",
            "00",
            "[19]\\d{8}",
            [9],
            [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[19]"], "0$1"]],
            "0",
        ],
        ST: [
            "239",
            "00",
            "(?:22|9\\d)\\d{5}",
            [7],
            [["(\\d{3})(\\d{4})", "$1 $2", ["[29]"]]],
        ],
        SV: [
            "503",
            "00",
            "[267]\\d{7}|[89]00\\d{4}(?:\\d{4})?",
            [7, 8, 11],
            [
                ["(\\d{3})(\\d{4})", "$1 $2", ["[89]"]],
                ["(\\d{4})(\\d{4})", "$1 $2", ["[267]"]],
                ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["[89]"]],
            ],
        ],
        SX: [
            "1",
            "011",
            "7215\\d{6}|(?:[58]\\d\\d|900)\\d{7}",
            [10],
            0,
            "1",
            0,
            "(5\\d{6})$|1",
            "721$1",
            0,
            "721",
        ],
        SY: [
            "963",
            "00",
            "[1-39]\\d{8}|[1-5]\\d{7}",
            [8, 9],
            [
                ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-5]"], "0$1", 1],
                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1", 1],
            ],
            "0",
        ],
        SZ: [
            "268",
            "00",
            "0800\\d{4}|(?:[237]\\d|900)\\d{6}",
            [8, 9],
            [
                ["(\\d{4})(\\d{4})", "$1 $2", ["[0237]"]],
                ["(\\d{5})(\\d{4})", "$1 $2", ["9"]],
            ],
        ],
        TA: ["290", "00", "8\\d{3}", [4], 0, 0, 0, 0, 0, 0, "8"],
        TC: [
            "1",
            "011",
            "(?:[58]\\d\\d|649|900)\\d{7}",
            [10],
            0,
            "1",
            0,
            "([2-479]\\d{6})$|1",
            "649$1",
            0,
            "649",
        ],
        TD: [
            "235",
            "00|16",
            "(?:22|[69]\\d|77)\\d{6}",
            [8],
            [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2679]"]]],
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            "00",
        ],
        TG: [
            "228",
            "00",
            "[279]\\d{7}",
            [8],
            [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[279]"]]],
        ],
        TH: [
            "66",
            "00[1-9]",
            "(?:001800|[2-57]|[689]\\d)\\d{7}|1\\d{7,9}",
            [8, 9, 10, 13],
            [
                ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2"], "0$1"],
                ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[13-9]"], "0$1"],
                ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]],
            ],
            "0",
        ],
        TJ: [
            "992",
            "810",
            "[0-57-9]\\d{8}",
            [9],
            [
                ["(\\d{6})(\\d)(\\d{2})", "$1 $2 $3", ["331", "3317"]],
                ["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["44[02-479]|[34]7"]],
                ["(\\d{4})(\\d)(\\d{4})", "$1 $2 $3", ["3[1-5]"]],
                ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[0-57-9]"]],
            ],
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            "8~10",
        ],
        TK: ["690", "00", "[2-47]\\d{3,6}", [4, 5, 6, 7]],
        TL: [
            "670",
            "00",
            "7\\d{7}|(?:[2-47]\\d|[89]0)\\d{5}",
            [7, 8],
            [
                ["(\\d{3})(\\d{4})", "$1 $2", ["[2-489]|70"]],
                ["(\\d{4})(\\d{4})", "$1 $2", ["7"]],
            ],
        ],
        TM: [
            "993",
            "810",
            "[1-6]\\d{7}",
            [8],
            [
                ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["12"], "(8 $1)"],
                ["(\\d{3})(\\d)(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[1-5]"], "(8 $1)"],
                ["(\\d{2})(\\d{6})", "$1 $2", ["6"], "8 $1"],
            ],
            "8",
            0,
            0,
            0,
            0,
            0,
            0,
            "8~10",
        ],
        TN: [
            "216",
            "00",
            "[2-57-9]\\d{7}",
            [8],
            [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-57-9]"]]],
        ],
        TO: [
            "676",
            "00",
            "(?:0800|(?:[5-8]\\d\\d|999)\\d)\\d{3}|[2-8]\\d{4}",
            [5, 7],
            [
                ["(\\d{2})(\\d{3})", "$1-$2", ["[2-4]|50|6[09]|7[0-24-69]|8[05]"]],
                ["(\\d{4})(\\d{3})", "$1 $2", ["0"]],
                ["(\\d{3})(\\d{4})", "$1 $2", ["[5-9]"]],
            ],
        ],
        TR: [
            "90",
            "00",
            "4\\d{6}|8\\d{11,12}|(?:[2-58]\\d\\d|900)\\d{7}",
            [7, 10, 12, 13],
            [
                ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["512|8[01589]|90"], "0$1", 1],
                [
                    "(\\d{3})(\\d{3})(\\d{2})(\\d{2})",
                    "$1 $2 $3 $4",
                    ["5(?:[0-59]|61)", "5(?:[0-59]|61[06])", "5(?:[0-59]|61[06]1)"],
                    "0$1",
                    1,
                ],
                [
                    "(\\d{3})(\\d{3})(\\d{2})(\\d{2})",
                    "$1 $2 $3 $4",
                    ["[24][1-8]|3[1-9]"],
                    "(0$1)",
                    1,
                ],
                ["(\\d{3})(\\d{3})(\\d{6,7})", "$1 $2 $3", ["80"], "0$1", 1],
            ],
            "0",
        ],
        TT: [
            "1",
            "011",
            "(?:[58]\\d\\d|900)\\d{7}",
            [10],
            0,
            "1",
            0,
            "([2-46-8]\\d{6})$|1",
            "868$1",
            0,
            "868",
        ],
        TV: [
            "688",
            "00",
            "(?:2|7\\d\\d|90)\\d{4}",
            [5, 6, 7],
            [
                ["(\\d{2})(\\d{3})", "$1 $2", ["2"]],
                ["(\\d{2})(\\d{4})", "$1 $2", ["90"]],
                ["(\\d{2})(\\d{5})", "$1 $2", ["7"]],
            ],
        ],
        TW: [
            "886",
            "0(?:0[25-79]|19)",
            "[2-689]\\d{8}|7\\d{9,10}|[2-8]\\d{7}|2\\d{6}",
            [7, 8, 9, 10, 11],
            [
                ["(\\d{2})(\\d)(\\d{4})", "$1 $2 $3", ["202"], "0$1"],
                ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[258]0"], "0$1"],
                [
                    "(\\d)(\\d{3,4})(\\d{4})",
                    "$1 $2 $3",
                    [
                        "[23568]|4(?:0[02-48]|[1-47-9])|7[1-9]",
                        "[23568]|4(?:0[2-48]|[1-47-9])|(?:400|7)[1-9]",
                    ],
                    "0$1",
                ],
                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[49]"], "0$1"],
                ["(\\d{2})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["7"], "0$1"],
            ],
            "0",
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            "#",
        ],
        TZ: [
            "255",
            "00[056]",
            "(?:[25-8]\\d|41|90)\\d{7}",
            [9],
            [
                ["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"],
                ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[24]"], "0$1"],
                ["(\\d{2})(\\d{7})", "$1 $2", ["5"]],
                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[67]"], "0$1"],
            ],
            "0",
        ],
        UA: [
            "380",
            "00",
            "[89]\\d{9}|[3-9]\\d{8}",
            [9, 10],
            [
                [
                    "(\\d{3})(\\d{3})(\\d{3})",
                    "$1 $2 $3",
                    [
                        "6[12][29]|(?:3[1-8]|4[136-8]|5[12457]|6[49])2|(?:56|65)[24]",
                        "6[12][29]|(?:35|4[1378]|5[12457]|6[49])2|(?:56|65)[24]|(?:3[1-46-8]|46)2[013-9]",
                    ],
                    "0$1",
                ],
                [
                    "(\\d{4})(\\d{5})",
                    "$1 $2",
                    [
                        "3[1-8]|4(?:[1367]|[45][6-9]|8[4-6])|5(?:[1-5]|6[0135689]|7[4-6])|6(?:[12][3-7]|[459])",
                        "3[1-8]|4(?:[1367]|[45][6-9]|8[4-6])|5(?:[1-5]|6(?:[015689]|3[02389])|7[4-6])|6(?:[12][3-7]|[459])",
                    ],
                    "0$1",
                ],
                ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[3-7]|89|9[1-9]"], "0$1"],
                ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[89]"], "0$1"],
            ],
            "0",
            0,
            0,
            0,
            0,
            0,
            0,
            "0~0",
        ],
        UG: [
            "256",
            "00[057]",
            "800\\d{6}|(?:[29]0|[347]\\d)\\d{7}",
            [9],
            [
                ["(\\d{4})(\\d{5})", "$1 $2", ["202", "2024"], "0$1"],
                ["(\\d{3})(\\d{6})", "$1 $2", ["[27-9]|4(?:6[45]|[7-9])"], "0$1"],
                ["(\\d{2})(\\d{7})", "$1 $2", ["[34]"], "0$1"],
            ],
            "0",
        ],
        US: [
            "1",
            "011",
            "[2-9]\\d{9}|3\\d{6}",
            [10],
            [
                ["(\\d{3})(\\d{4})", "$1-$2", ["310"], 0, 1],
                ["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", ["[2-9]"], 0, 1, "$1-$2-$3"],
            ],
            "1",
            0,
            0,
            0,
            0,
            0,
            [
                [
                    "(?:5056(?:[0-35-9]\\d|4[468])|7302[01]\\d)\\d{4}|(?:472[24]|505[2-57-9]|983[289])\\d{6}|(?:2(?:0[1-35-9]|1[02-9]|2[03-57-9]|3[149]|4[08]|5[1-46]|6[0279]|7[0269]|8[13])|3(?:0[1-57-9]|1[02-9]|2[013569]|3[0-24679]|4[167]|5[0-2]|6[0149]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[023578]|58|6[349]|7[0589]|8[04])|5(?:0[1-47-9]|1[0235-8]|20|3[0149]|4[01]|5[179]|6[1-47]|7[0-5]|8[0256])|6(?:0[1-35-9]|1[024-9]|2[03689]|3[016]|4[0156]|5[01679]|6[0-279]|78|8[0-29])|7(?:0[1-46-8]|1[2-9]|2[04-7]|3[1247]|4[037]|5[47]|6[02359]|7[0-59]|8[156])|8(?:0[1-68]|1[02-8]|2[068]|3[0-2589]|4[03578]|5[046-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[0146-8]|4[01357-9]|5[12469]|7[0-389]|8[04-69]))[2-9]\\d{6}",
                ],
                [""],
                ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"],
                ["900[2-9]\\d{6}"],
                [
                    "52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|33|44|66|77|88)[2-9]\\d{6}",
                ],
            ],
        ],
        UY: [
            "598",
            "0(?:0|1[3-9]\\d)",
            "0004\\d{2,9}|[1249]\\d{7}|(?:[49]\\d|80)\\d{5}",
            [6, 7, 8, 9, 10, 11, 12, 13],
            [
                ["(\\d{3})(\\d{3,4})", "$1 $2", ["0"]],
                ["(\\d{3})(\\d{4})", "$1 $2", ["[49]0|8"], "0$1"],
                ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1"],
                ["(\\d{4})(\\d{4})", "$1 $2", ["[124]"]],
                ["(\\d{3})(\\d{3})(\\d{2,4})", "$1 $2 $3", ["0"]],
                ["(\\d{3})(\\d{3})(\\d{3})(\\d{2,4})", "$1 $2 $3 $4", ["0"]],
            ],
            "0",
            0,
            0,
            0,
            0,
            0,
            0,
            "00",
            " int. ",
        ],
        UZ: [
            "998",
            "810",
            "(?:20|33|[5-79]\\d|88)\\d{7}",
            [9],
            [
                [
                    "(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
                    "$1 $2 $3 $4",
                    ["[235-9]"],
                    "8 $1",
                ],
            ],
            "8",
            0,
            0,
            0,
            0,
            0,
            0,
            "8~10",
        ],
        VA: [
            "39",
            "00",
            "0\\d{5,10}|3[0-8]\\d{7,10}|55\\d{8}|8\\d{5}(?:\\d{2,4})?|(?:1\\d|39)\\d{7,8}",
            [6, 7, 8, 9, 10, 11],
            0,
            0,
            0,
            0,
            0,
            0,
            "06698",
        ],
        VC: [
            "1",
            "011",
            "(?:[58]\\d\\d|784|900)\\d{7}",
            [10],
            0,
            "1",
            0,
            "([2-7]\\d{6})$|1",
            "784$1",
            0,
            "784",
        ],
        VE: [
            "58",
            "00",
            "[68]00\\d{7}|(?:[24]\\d|[59]0)\\d{8}",
            [10],
            [["(\\d{3})(\\d{7})", "$1-$2", ["[24-689]"], "0$1"]],
            "0",
        ],
        VG: [
            "1",
            "011",
            "(?:284|[58]\\d\\d|900)\\d{7}",
            [10],
            0,
            "1",
            0,
            "([2-578]\\d{6})$|1",
            "284$1",
            0,
            "284",
        ],
        VI: [
            "1",
            "011",
            "[58]\\d{9}|(?:34|90)0\\d{7}",
            [10],
            0,
            "1",
            0,
            "([2-9]\\d{6})$|1",
            "340$1",
            0,
            "340",
        ],
        VN: [
            "84",
            "00",
            "[12]\\d{9}|[135-9]\\d{8}|[16]\\d{7}|[16-8]\\d{6}",
            [7, 8, 9, 10],
            [
                ["(\\d{2})(\\d{5})", "$1 $2", ["80"], "0$1", 1],
                ["(\\d{4})(\\d{4,6})", "$1 $2", ["1"], 0, 1],
                ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["6"], "0$1", 1],
                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[357-9]"], "0$1", 1],
                ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["2[48]"], "0$1", 1],
                ["(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3", ["2"], "0$1", 1],
            ],
            "0",
        ],
        VU: [
            "678",
            "00",
            "[57-9]\\d{6}|(?:[238]\\d|48)\\d{3}",
            [5, 7],
            [["(\\d{3})(\\d{4})", "$1 $2", ["[57-9]"]]],
        ],
        WF: [
            "681",
            "00",
            "(?:40|72)\\d{4}|8\\d{5}(?:\\d{3})?",
            [6, 9],
            [
                ["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["[478]"]],
                ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]],
            ],
        ],
        WS: [
            "685",
            "0",
            "(?:[2-6]|8\\d{5})\\d{4}|[78]\\d{6}|[68]\\d{5}",
            [5, 6, 7, 10],
            [
                ["(\\d{5})", "$1", ["[2-5]|6[1-9]"]],
                ["(\\d{3})(\\d{3,7})", "$1 $2", ["[68]"]],
                ["(\\d{2})(\\d{5})", "$1 $2", ["7"]],
            ],
        ],
        XK: [
            "383",
            "00",
            "[23]\\d{7,8}|(?:4\\d\\d|[89]00)\\d{5}",
            [8, 9],
            [
                ["(\\d{3})(\\d{5})", "$1 $2", ["[89]"], "0$1"],
                ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-4]"], "0$1"],
                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[23]"], "0$1"],
            ],
            "0",
        ],
        YE: [
            "967",
            "00",
            "(?:1|7\\d)\\d{7}|[1-7]\\d{6}",
            [7, 8, 9],
            [
                [
                    "(\\d)(\\d{3})(\\d{3,4})",
                    "$1 $2 $3",
                    ["[1-6]|7(?:[24-6]|8[0-7])"],
                    "0$1",
                ],
                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["7"], "0$1"],
            ],
            "0",
        ],
        YT: [
            "262",
            "00",
            "(?:80|9\\d)\\d{7}|(?:26|63)9\\d{6}",
            [9],
            0,
            "0",
            0,
            0,
            0,
            0,
            0,
            [
                ["269(?:0[0-467]|15|5[0-4]|6\\d|[78]0)\\d{4}"],
                ["639(?:0[0-79]|1[019]|[267]\\d|3[09]|40|5[05-9]|9[04-79])\\d{4}"],
                ["80\\d{7}"],
                0,
                0,
                0,
                0,
                0,
                ["9(?:(?:39|47)8[01]|769\\d)\\d{4}"],
            ],
        ],
        ZA: [
            "27",
            "00",
            "[1-79]\\d{8}|8\\d{4,9}",
            [5, 6, 7, 8, 9, 10],
            [
                ["(\\d{2})(\\d{3,4})", "$1 $2", ["8[1-4]"], "0$1"],
                ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["8[1-4]"], "0$1"],
                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["860"], "0$1"],
                ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-9]"], "0$1"],
                ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"],
            ],
            "0",
        ],
        ZM: [
            "260",
            "00",
            "800\\d{6}|(?:21|63|[79]\\d)\\d{7}",
            [9],
            [
                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[28]"], "0$1"],
                ["(\\d{2})(\\d{7})", "$1 $2", ["[79]"], "0$1"],
            ],
            "0",
        ],
        ZW: [
            "263",
            "00",
            "2(?:[0-57-9]\\d{6,8}|6[0-24-9]\\d{6,7})|[38]\\d{9}|[35-8]\\d{8}|[3-6]\\d{7}|[1-689]\\d{6}|[1-3569]\\d{5}|[1356]\\d{4}",
            [5, 6, 7, 8, 9, 10],
            [
                [
                    "(\\d{3})(\\d{3,5})",
                    "$1 $2",
                    [
                        "2(?:0[45]|2[278]|[49]8)|3(?:[09]8|17)|6(?:[29]8|37|75)|[23][78]|(?:33|5[15]|6[68])[78]",
                    ],
                    "0$1",
                ],
                ["(\\d)(\\d{3})(\\d{2,4})", "$1 $2 $3", ["[49]"], "0$1"],
                ["(\\d{3})(\\d{4})", "$1 $2", ["80"], "0$1"],
                [
                    "(\\d{2})(\\d{7})",
                    "$1 $2",
                    [
                        "24|8[13-59]|(?:2[05-79]|39|5[45]|6[15-8])2",
                        "2(?:02[014]|4|[56]20|[79]2)|392|5(?:42|525)|6(?:[16-8]21|52[013])|8[13-59]",
                    ],
                    "(0$1)",
                ],
                ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"],
                [
                    "(\\d{3})(\\d{3})(\\d{3,4})",
                    "$1 $2 $3",
                    [
                        "2(?:1[39]|2[0157]|[378]|[56][14])|3(?:12|29)",
                        "2(?:1[39]|2[0157]|[378]|[56][14])|3(?:123|29)",
                    ],
                    "0$1",
                ],
                ["(\\d{4})(\\d{6})", "$1 $2", ["8"], "0$1"],
                [
                    "(\\d{2})(\\d{3,5})",
                    "$1 $2",
                    [
                        "1|2(?:0[0-36-9]|12|29|[56])|3(?:1[0-689]|[24-6])|5(?:[0236-9]|1[2-4])|6(?:[013-59]|7[0-46-9])|(?:33|55|6[68])[0-69]|(?:29|3[09]|62)[0-79]",
                    ],
                    "0$1",
                ],
                ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["29[013-9]|39|54"], "0$1"],
                ["(\\d{4})(\\d{3,5})", "$1 $2", ["(?:25|54)8", "258|5483"], "0$1"],
            ],
            "0",
        ],
    },
    nonGeographic: {
        800: [
            "800",
            0,
            "(?:00|[1-9]\\d)\\d{6}",
            [8],
            [["(\\d{4})(\\d{4})", "$1 $2", ["\\d"]]],
            0,
            0,
            0,
            0,
            0,
            0,
            [0, 0, ["(?:00|[1-9]\\d)\\d{6}"]],
        ],
        808: [
            "808",
            0,
            "[1-9]\\d{7}",
            [8],
            [["(\\d{4})(\\d{4})", "$1 $2", ["[1-9]"]]],
            0,
            0,
            0,
            0,
            0,
            0,
            [0, 0, 0, 0, 0, 0, 0, 0, 0, ["[1-9]\\d{7}"]],
        ],
        870: [
            "870",
            0,
            "7\\d{11}|[35-7]\\d{8}",
            [9, 12],
            [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[35-7]"]]],
            0,
            0,
            0,
            0,
            0,
            0,
            [0, ["(?:[356]|774[45])\\d{8}|7[6-8]\\d{7}"]],
        ],
        878: [
            "878",
            0,
            "10\\d{10}",
            [12],
            [["(\\d{2})(\\d{5})(\\d{5})", "$1 $2 $3", ["1"]]],
            0,
            0,
            0,
            0,
            0,
            0,
            [0, 0, 0, 0, 0, 0, 0, 0, ["10\\d{10}"]],
        ],
        881: [
            "881",
            0,
            "6\\d{9}|[0-36-9]\\d{8}",
            [9, 10],
            [
                ["(\\d)(\\d{3})(\\d{5})", "$1 $2 $3", ["[0-37-9]"]],
                ["(\\d)(\\d{3})(\\d{5,6})", "$1 $2 $3", ["6"]],
            ],
            0,
            0,
            0,
            0,
            0,
            0,
            [0, ["6\\d{9}|[0-36-9]\\d{8}"]],
        ],
        882: [
            "882",
            0,
            "[13]\\d{6}(?:\\d{2,5})?|[19]\\d{7}|(?:[25]\\d\\d|4)\\d{7}(?:\\d{2})?",
            [7, 8, 9, 10, 11, 12],
            [
                ["(\\d{2})(\\d{5})", "$1 $2", ["16|342"]],
                ["(\\d{2})(\\d{6})", "$1 $2", ["49"]],
                ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["1[36]|9"]],
                ["(\\d{2})(\\d{4})(\\d{3})", "$1 $2 $3", ["3[23]"]],
                ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["16"]],
                [
                    "(\\d{2})(\\d{4})(\\d{4})",
                    "$1 $2 $3",
                    ["10|23|3(?:[15]|4[57])|4|51"],
                ],
                ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["34"]],
                ["(\\d{2})(\\d{4,5})(\\d{5})", "$1 $2 $3", ["[1-35]"]],
            ],
            0,
            0,
            0,
            0,
            0,
            0,
            [
                0,
                [
                    "342\\d{4}|(?:337|49)\\d{6}|(?:3(?:2|47|7\\d{3})|50\\d{3})\\d{7}",
                    [7, 8, 9, 10, 12],
                ],
                0,
                0,
                0,
                0,
                0,
                0,
                [
                    "1(?:3(?:0[0347]|[13][0139]|2[035]|4[013568]|6[0459]|7[06]|8[15-8]|9[0689])\\d{4}|6\\d{5,10})|(?:345\\d|9[89])\\d{6}|(?:10|2(?:3|85\\d)|3(?:[15]|[69]\\d\\d)|4[15-8]|51)\\d{8}",
                ],
            ],
        ],
        883: [
            "883",
            0,
            "(?:[1-4]\\d|51)\\d{6,10}",
            [8, 9, 10, 11, 12],
            [
                [
                    "(\\d{3})(\\d{3})(\\d{2,8})",
                    "$1 $2 $3",
                    ["[14]|2[24-689]|3[02-689]|51[24-9]"],
                ],
                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["510"]],
                ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["21"]],
                ["(\\d{4})(\\d{4})(\\d{4})", "$1 $2 $3", ["51[13]"]],
                ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[235]"]],
            ],
            0,
            0,
            0,
            0,
            0,
            0,
            [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                [
                    "(?:2(?:00\\d\\d|10)|(?:370[1-9]|51\\d0)\\d)\\d{7}|51(?:00\\d{5}|[24-9]0\\d{4,7})|(?:1[0-79]|2[24-689]|3[02-689]|4[0-4])0\\d{5,9}",
                ],
            ],
        ],
        888: [
            "888",
            0,
            "\\d{11}",
            [11],
            [["(\\d{3})(\\d{3})(\\d{5})", "$1 $2 $3"]],
            0,
            0,
            0,
            0,
            0,
            0,
            [0, 0, 0, 0, 0, 0, ["\\d{11}"]],
        ],
        979: [
            "979",
            0,
            "[1359]\\d{8}",
            [9],
            [["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["[1359]"]]],
            0,
            0,
            0,
            0,
            0,
            0,
            [0, 0, 0, ["[1359]\\d{8}"]],
        ],
    },
};
function bt(t, e) {
    var i = Array.prototype.slice.call(e);
    return i.push(de), t.apply(this, i);
}
function xt(t) {
    "@babel/helpers - typeof";
    return (
        (xt =
            typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (e) {
                    return typeof e;
                }
                : function (e) {
                    return e &&
                        typeof Symbol == "function" &&
                        e.constructor === Symbol &&
                        e !== Symbol.prototype
                        ? "symbol"
                        : typeof e;
                }),
        xt(t)
    );
}
function oe(t, e) {
    for (var i = 0; i < e.length; i++) {
        var r = e[i];
        (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
    }
}
function gi(t, e, i) {
    return (
        e && oe(t.prototype, e),
        i && oe(t, i),
        Object.defineProperty(t, "prototype", { writable: !1 }),
        t
    );
}
function _i(t, e) {
    if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function");
}
function mi(t, e) {
    if (typeof e != "function" && e !== null)
        throw new TypeError("Super expression must either be null or a function");
    (t.prototype = Object.create(e && e.prototype, {
        constructor: { value: t, writable: !0, configurable: !0 },
    })),
        Object.defineProperty(t, "prototype", { writable: !1 }),
        e && Q(t, e);
}
function bi(t) {
    var e = le();
    return function () {
        var r = tt(t),
            d;
        if (e) {
            var l = tt(this).constructor;
            d = Reflect.construct(r, arguments, l);
        } else d = r.apply(this, arguments);
        return xi(this, d);
    };
}
function xi(t, e) {
    if (e && (xt(e) === "object" || typeof e == "function")) return e;
    if (e !== void 0)
        throw new TypeError(
            "Derived constructors may only return object or undefined",
        );
    return ae(t);
}
function ae(t) {
    if (t === void 0)
        throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
        );
    return t;
}
function yt(t) {
    var e = typeof Map == "function" ? new Map() : void 0;
    return (
        (yt = function (r) {
            if (r === null || !yi(r)) return r;
            if (typeof r != "function")
                throw new TypeError(
                    "Super expression must either be null or a function",
                );
            if (typeof e < "u") {
                if (e.has(r)) return e.get(r);
                e.set(r, d);
            }
            function d() {
                return lt(r, arguments, tt(this).constructor);
            }
            return (
                (d.prototype = Object.create(r.prototype, {
                    constructor: {
                        value: d,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0,
                    },
                })),
                Q(d, r)
            );
        }),
        yt(t)
    );
}
function lt(t, e, i) {
    return (
        le()
            ? (lt = Reflect.construct)
            : (lt = function (d, l, $) {
                var f = [null];
                f.push.apply(f, l);
                var h = Function.bind.apply(d, f),
                    _ = new h();
                return $ && Q(_, $.prototype), _;
            }),
        lt.apply(null, arguments)
    );
}
function le() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
        return !1;
    if (typeof Proxy == "function") return !0;
    try {
        return (
            Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () { }),
            ),
            !0
        );
    } catch (t) {
        return !1;
    }
}
function yi(t) {
    return Function.toString.call(t).indexOf("[native code]") !== -1;
}
function Q(t, e) {
    return (
        (Q =
            Object.setPrototypeOf ||
            function (r, d) {
                return (r.__proto__ = d), r;
            }),
        Q(t, e)
    );
}
function tt(t) {
    return (
        (tt = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (i) {
                return i.__proto__ || Object.getPrototypeOf(i);
            }),
        tt(t)
    );
}
var O = (function (t) {
    mi(i, t);
    var e = bi(i);
    function i(r) {
        var d;
        return (
            _i(this, i),
            (d = e.call(this, r)),
            Object.setPrototypeOf(ae(d), i.prototype),
            (d.name = d.constructor.name),
            d
        );
    }
    return gi(i);
})(yt(Error));
var et = 2,
    se = 17,
    ue = 3,
    P = "0-9\uFF10-\uFF19\u0660-\u0669\u06F0-\u06F9",
    vi = "-\u2010-\u2015\u2212\u30FC\uFF0D",
    Ci = "\uFF0F/",
    ki = "\uFF0E.",
    Ni = " \xA0\xAD\u200B\u2060\u3000",
    wi = "()\uFF08\uFF09\uFF3B\uFF3D\\[\\]",
    Ii = "~\u2053\u223C\uFF5E",
    z = "".concat(vi).concat(Ci).concat(ki).concat(Ni).concat(wi).concat(Ii),
    it = "+\uFF0B";
function vt(t, e) {
    (t = t.split("-")), (e = e.split("-"));
    for (var i = t[0].split("."), r = e[0].split("."), d = 0; d < 3; d++) {
        var l = Number(i[d]),
            $ = Number(r[d]);
        if (l > $) return 1;
        if ($ > l) return -1;
        if (!isNaN(l) && isNaN($)) return 1;
        if (isNaN(l) && !isNaN($)) return -1;
    }
    return t[1] && e[1]
        ? t[1] > e[1]
            ? 1
            : t[1] < e[1]
                ? -1
                : 0
        : !t[1] && e[1]
            ? 1
            : t[1] && !e[1]
                ? -1
                : 0;
}
var Pi = {}.constructor;
function B(t) {
    return t != null && t.constructor === Pi;
}
function Ct(t) {
    "@babel/helpers - typeof";
    return (
        (Ct =
            typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (e) {
                    return typeof e;
                }
                : function (e) {
                    return e &&
                        typeof Symbol == "function" &&
                        e.constructor === Symbol &&
                        e !== Symbol.prototype
                        ? "symbol"
                        : typeof e;
                }),
        Ct(t)
    );
}
function st(t, e) {
    if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function");
}
function $e(t, e) {
    for (var i = 0; i < e.length; i++) {
        var r = e[i];
        (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
    }
}
function ut(t, e, i) {
    return (
        e && $e(t.prototype, e),
        i && $e(t, i),
        Object.defineProperty(t, "prototype", { writable: !1 }),
        t
    );
}
var Ei = "1.2.0",
    Si = "1.7.35",
    fe = " ext. ",
    Fi = /^\d+$/,
    y = (function () {
        function t(e) {
            st(this, t), Ti(e), (this.metadata = e), ge.call(this, e);
        }
        return (
            ut(t, [
                {
                    key: "getCountries",
                    value: function () {
                        return Object.keys(this.metadata.countries).filter(function (i) {
                            return i !== "001";
                        });
                    },
                },
                {
                    key: "getCountryMetadata",
                    value: function (i) {
                        return this.metadata.countries[i];
                    },
                },
                {
                    key: "nonGeographic",
                    value: function () {
                        if (!(this.v1 || this.v2 || this.v3))
                            return (
                                this.metadata.nonGeographic || this.metadata.nonGeographical
                            );
                    },
                },
                {
                    key: "hasCountry",
                    value: function (i) {
                        return this.getCountryMetadata(i) !== void 0;
                    },
                },
                {
                    key: "hasCallingCode",
                    value: function (i) {
                        if (this.getCountryCodesForCallingCode(i)) return !0;
                        if (this.nonGeographic()) {
                            if (this.nonGeographic()[i]) return !0;
                        } else {
                            var r = this.countryCallingCodes()[i];
                            if (r && r.length === 1 && r[0] === "001") return !0;
                        }
                    },
                },
                {
                    key: "isNonGeographicCallingCode",
                    value: function (i) {
                        return this.nonGeographic()
                            ? !!this.nonGeographic()[i]
                            : !this.getCountryCodesForCallingCode(i);
                    },
                },
                {
                    key: "country",
                    value: function (i) {
                        return this.selectNumberingPlan(i);
                    },
                },
                {
                    key: "selectNumberingPlan",
                    value: function (i, r) {
                        if ((i && Fi.test(i) && ((r = i), (i = null)), i && i !== "001")) {
                            if (!this.hasCountry(i))
                                throw new Error("Unknown country: ".concat(i));
                            this.numberingPlan = new pe(this.getCountryMetadata(i), this);
                        } else if (r) {
                            if (!this.hasCallingCode(r))
                                throw new Error("Unknown calling code: ".concat(r));
                            this.numberingPlan = new pe(
                                this.getNumberingPlanMetadata(r),
                                this,
                            );
                        } else this.numberingPlan = void 0;
                        return this;
                    },
                },
                {
                    key: "getCountryCodesForCallingCode",
                    value: function (i) {
                        var r = this.countryCallingCodes()[i];
                        if (r) return r.length === 1 && r[0].length === 3 ? void 0 : r;
                    },
                },
                {
                    key: "getCountryCodeForCallingCode",
                    value: function (i) {
                        var r = this.getCountryCodesForCallingCode(i);
                        if (r) return r[0];
                    },
                },
                {
                    key: "getNumberingPlanMetadata",
                    value: function (i) {
                        var r = this.getCountryCodeForCallingCode(i);
                        if (r) return this.getCountryMetadata(r);
                        if (this.nonGeographic()) {
                            var d = this.nonGeographic()[i];
                            if (d) return d;
                        } else {
                            var l = this.countryCallingCodes()[i];
                            if (l && l.length === 1 && l[0] === "001")
                                return this.metadata.countries["001"];
                        }
                    },
                },
                {
                    key: "countryCallingCode",
                    value: function () {
                        return this.numberingPlan.callingCode();
                    },
                },
                {
                    key: "IDDPrefix",
                    value: function () {
                        return this.numberingPlan.IDDPrefix();
                    },
                },
                {
                    key: "defaultIDDPrefix",
                    value: function () {
                        return this.numberingPlan.defaultIDDPrefix();
                    },
                },
                {
                    key: "nationalNumberPattern",
                    value: function () {
                        return this.numberingPlan.nationalNumberPattern();
                    },
                },
                {
                    key: "possibleLengths",
                    value: function () {
                        return this.numberingPlan.possibleLengths();
                    },
                },
                {
                    key: "formats",
                    value: function () {
                        return this.numberingPlan.formats();
                    },
                },
                {
                    key: "nationalPrefixForParsing",
                    value: function () {
                        return this.numberingPlan.nationalPrefixForParsing();
                    },
                },
                {
                    key: "nationalPrefixTransformRule",
                    value: function () {
                        return this.numberingPlan.nationalPrefixTransformRule();
                    },
                },
                {
                    key: "leadingDigits",
                    value: function () {
                        return this.numberingPlan.leadingDigits();
                    },
                },
                {
                    key: "hasTypes",
                    value: function () {
                        return this.numberingPlan.hasTypes();
                    },
                },
                {
                    key: "type",
                    value: function (i) {
                        return this.numberingPlan.type(i);
                    },
                },
                {
                    key: "ext",
                    value: function () {
                        return this.numberingPlan.ext();
                    },
                },
                {
                    key: "countryCallingCodes",
                    value: function () {
                        return this.v1
                            ? this.metadata.country_phone_code_to_countries
                            : this.metadata.country_calling_codes;
                    },
                },
                {
                    key: "chooseCountryByCountryCallingCode",
                    value: function (i) {
                        return this.selectNumberingPlan(i);
                    },
                },
                {
                    key: "hasSelectedNumberingPlan",
                    value: function () {
                        return this.numberingPlan !== void 0;
                    },
                },
            ]),
            t
        );
    })();
var pe = (function () {
    function t(e, i) {
        st(this, t),
            (this.globalMetadataObject = i),
            (this.metadata = e),
            ge.call(this, i.metadata);
    }
    return (
        ut(t, [
            {
                key: "callingCode",
                value: function () {
                    return this.metadata[0];
                },
            },
            {
                key: "getDefaultCountryMetadataForRegion",
                value: function () {
                    return this.globalMetadataObject.getNumberingPlanMetadata(
                        this.callingCode(),
                    );
                },
            },
            {
                key: "IDDPrefix",
                value: function () {
                    if (!(this.v1 || this.v2)) return this.metadata[1];
                },
            },
            {
                key: "defaultIDDPrefix",
                value: function () {
                    if (!(this.v1 || this.v2)) return this.metadata[12];
                },
            },
            {
                key: "nationalNumberPattern",
                value: function () {
                    return this.v1 || this.v2 ? this.metadata[1] : this.metadata[2];
                },
            },
            {
                key: "possibleLengths",
                value: function () {
                    if (!this.v1) return this.metadata[this.v2 ? 2 : 3];
                },
            },
            {
                key: "_getFormats",
                value: function (i) {
                    return i[this.v1 ? 2 : this.v2 ? 3 : 4];
                },
            },
            {
                key: "formats",
                value: function () {
                    var i = this,
                        r =
                            this._getFormats(this.metadata) ||
                            this._getFormats(this.getDefaultCountryMetadataForRegion()) ||
                            [];
                    return r.map(function (d) {
                        return new Li(d, i);
                    });
                },
            },
            {
                key: "nationalPrefix",
                value: function () {
                    return this.metadata[this.v1 ? 3 : this.v2 ? 4 : 5];
                },
            },
            {
                key: "_getNationalPrefixFormattingRule",
                value: function (i) {
                    return i[this.v1 ? 4 : this.v2 ? 5 : 6];
                },
            },
            {
                key: "nationalPrefixFormattingRule",
                value: function () {
                    return (
                        this._getNationalPrefixFormattingRule(this.metadata) ||
                        this._getNationalPrefixFormattingRule(
                            this.getDefaultCountryMetadataForRegion(),
                        )
                    );
                },
            },
            {
                key: "_nationalPrefixForParsing",
                value: function () {
                    return this.metadata[this.v1 ? 5 : this.v2 ? 6 : 7];
                },
            },
            {
                key: "nationalPrefixForParsing",
                value: function () {
                    return this._nationalPrefixForParsing() || this.nationalPrefix();
                },
            },
            {
                key: "nationalPrefixTransformRule",
                value: function () {
                    return this.metadata[this.v1 ? 6 : this.v2 ? 7 : 8];
                },
            },
            {
                key: "_getNationalPrefixIsOptionalWhenFormatting",
                value: function () {
                    return !!this.metadata[this.v1 ? 7 : this.v2 ? 8 : 9];
                },
            },
            {
                key: "nationalPrefixIsOptionalWhenFormattingInNationalFormat",
                value: function () {
                    return (
                        this._getNationalPrefixIsOptionalWhenFormatting(this.metadata) ||
                        this._getNationalPrefixIsOptionalWhenFormatting(
                            this.getDefaultCountryMetadataForRegion(),
                        )
                    );
                },
            },
            {
                key: "leadingDigits",
                value: function () {
                    return this.metadata[this.v1 ? 8 : this.v2 ? 9 : 10];
                },
            },
            {
                key: "types",
                value: function () {
                    return this.metadata[this.v1 ? 9 : this.v2 ? 10 : 11];
                },
            },
            {
                key: "hasTypes",
                value: function () {
                    return this.types() && this.types().length === 0
                        ? !1
                        : !!this.types();
                },
            },
            {
                key: "type",
                value: function (i) {
                    if (this.hasTypes() && ce(this.types(), i))
                        return new Oi(ce(this.types(), i), this);
                },
            },
            {
                key: "ext",
                value: function () {
                    return this.v1 || this.v2 ? fe : this.metadata[13] || fe;
                },
            },
        ]),
        t
    );
})(),
    Li = (function () {
        function t(e, i) {
            st(this, t), (this._format = e), (this.metadata = i);
        }
        return (
            ut(t, [
                {
                    key: "pattern",
                    value: function () {
                        return this._format[0];
                    },
                },
                {
                    key: "format",
                    value: function () {
                        return this._format[1];
                    },
                },
                {
                    key: "leadingDigitsPatterns",
                    value: function () {
                        return this._format[2] || [];
                    },
                },
                {
                    key: "nationalPrefixFormattingRule",
                    value: function () {
                        return (
                            this._format[3] || this.metadata.nationalPrefixFormattingRule()
                        );
                    },
                },
                {
                    key: "nationalPrefixIsOptionalWhenFormattingInNationalFormat",
                    value: function () {
                        return (
                            !!this._format[4] ||
                            this.metadata.nationalPrefixIsOptionalWhenFormattingInNationalFormat()
                        );
                    },
                },
                {
                    key: "nationalPrefixIsMandatoryWhenFormattingInNationalFormat",
                    value: function () {
                        return (
                            this.usesNationalPrefix() &&
                            !this.nationalPrefixIsOptionalWhenFormattingInNationalFormat()
                        );
                    },
                },
                {
                    key: "usesNationalPrefix",
                    value: function () {
                        return !!(
                            this.nationalPrefixFormattingRule() &&
                            !Ai.test(this.nationalPrefixFormattingRule())
                        );
                    },
                },
                {
                    key: "internationalFormat",
                    value: function () {
                        return this._format[5] || this.format();
                    },
                },
            ]),
            t
        );
    })(),
    Ai = /^\(?\$1\)?$/,
    Oi = (function () {
        function t(e, i) {
            st(this, t), (this.type = e), (this.metadata = i);
        }
        return (
            ut(t, [
                {
                    key: "pattern",
                    value: function () {
                        return this.metadata.v1 ? this.type : this.type[0];
                    },
                },
                {
                    key: "possibleLengths",
                    value: function () {
                        if (!this.metadata.v1)
                            return this.type[1] || this.metadata.possibleLengths();
                    },
                },
            ]),
            t
        );
    })();
function ce(t, e) {
    switch (e) {
        case "FIXED_LINE":
            return t[0];
        case "MOBILE":
            return t[1];
        case "TOLL_FREE":
            return t[2];
        case "PREMIUM_RATE":
            return t[3];
        case "PERSONAL_NUMBER":
            return t[4];
        case "VOICEMAIL":
            return t[5];
        case "UAN":
            return t[6];
        case "PAGER":
            return t[7];
        case "VOIP":
            return t[8];
        case "SHARED_COST":
            return t[9];
    }
}
function Ti(t) {
    if (!t)
        throw new Error(
            "[libphonenumber-js] `metadata` argument not passed. Check your arguments.",
        );
    if (!B(t) || !B(t.countries))
        throw new Error(
            "[libphonenumber-js] `metadata` argument was passed but it's not a valid metadata. Must be an object having `.countries` child object property. Got ".concat(
                B(t)
                    ? "an object of shape: { " + Object.keys(t).join(", ") + " }"
                    : "a " + Di(t) + ": " + t,
                ".",
            ),
        );
}
var Di = function (e) {
    return Ct(e);
};
function V(t, e) {
    if (((e = new y(e)), e.hasCountry(t)))
        return e.country(t).countryCallingCode();
    throw new Error("Unknown country: ".concat(t));
}
function he(t, e) {
    return e.countries.hasOwnProperty(t);
}
function ge(t) {
    var e = t.version;
    typeof e == "number"
        ? ((this.v1 = e === 1),
            (this.v2 = e === 2),
            (this.v3 = e === 3),
            (this.v4 = e === 4))
        : e
            ? vt(e, Ei) === -1
                ? (this.v2 = !0)
                : vt(e, Si) === -1
                    ? (this.v3 = !0)
                    : (this.v4 = !0)
            : (this.v1 = !0);
}
var Mi = ";ext=",
    W = function (e) {
        return "([".concat(P, "]{1,").concat(e, "})");
    };
function rt(t) {
    var e = "20",
        i = "15",
        r = "9",
        d = "6",
        l = "[ \xA0\\t,]*",
        $ = "[:\\.\uFF0E]?[ \xA0\\t,-]*",
        f = "#?",
        h =
            "(?:e?xt(?:ensi(?:o\u0301?|\xF3))?n?|\uFF45?\uFF58\uFF54\uFF4E?|\u0434\u043E\u0431|anexo)",
        _ = "(?:[x\uFF58#\uFF03~\uFF5E]|int|\uFF49\uFF4E\uFF54)",
        v = "[- ]+",
        I = "[ \xA0\\t]*",
        w = "(?:,{2}|;)",
        S = Mi + W(e),
        F = l + h + $ + W(e) + f,
        x = l + _ + $ + W(r) + f,
        s = v + W(d) + "#",
        n = I + w + $ + W(i) + f,
        o = I + "(?:,)+" + $ + W(r) + f;
    return S + "|" + F + "|" + x + "|" + s + "|" + n + "|" + o;
}
var Ri = "[" + P + "]{" + et + "}",
    Gi = "[" + it + "]{0,1}(?:[" + z + "]*[" + P + "]){3,}[" + z + P + "]*",
    Ui = new RegExp("^[" + it + "]{0,1}(?:[" + z + "]*[" + P + "]){1,2}$", "i"),
    Bi = Gi + "(?:" + rt() + ")?",
    Vi = new RegExp("^" + Ri + "$|^" + Bi + "$", "i");
function kt(t) {
    return t.length >= et && Vi.test(t);
}
function _e(t) {
    return Ui.test(t);
}
var me = new RegExp("(?:" + rt() + ")$", "i");
function Nt(t) {
    var e = t.search(me);
    if (e < 0) return {};
    for (var i = t.slice(0, e), r = t.match(me), d = 1; d < r.length;) {
        if (r[d]) return { number: i, ext: r[d] };
        d++;
    }
}
var ji = {
    0: "0",
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9",
    "\uFF10": "0",
    "\uFF11": "1",
    "\uFF12": "2",
    "\uFF13": "3",
    "\uFF14": "4",
    "\uFF15": "5",
    "\uFF16": "6",
    "\uFF17": "7",
    "\uFF18": "8",
    "\uFF19": "9",
    "\u0660": "0",
    "\u0661": "1",
    "\u0662": "2",
    "\u0663": "3",
    "\u0664": "4",
    "\u0665": "5",
    "\u0666": "6",
    "\u0667": "7",
    "\u0668": "8",
    "\u0669": "9",
    "\u06F0": "0",
    "\u06F1": "1",
    "\u06F2": "2",
    "\u06F3": "3",
    "\u06F4": "4",
    "\u06F5": "5",
    "\u06F6": "6",
    "\u06F7": "7",
    "\u06F8": "8",
    "\u06F9": "9",
};
function be(t) {
    return ji[t];
}
function Hi(t, e) {
    var i = (typeof Symbol < "u" && t[Symbol.iterator]) || t["@@iterator"];
    if (i) return (i = i.call(t)).next.bind(i);
    if (
        Array.isArray(t) ||
        (i = Ki(t)) ||
        (e && t && typeof t.length == "number")
    ) {
        i && (t = i);
        var r = 0;
        return function () {
            return r >= t.length ? { done: !0 } : { done: !1, value: t[r++] };
        };
    }
    throw new TypeError(
        "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
    );
}
function Ki(t, e) {
    if (t) {
        if (typeof t == "string") return xe(t, e);
        var i = Object.prototype.toString.call(t).slice(8, -1);
        if (
            (i === "Object" && t.constructor && (i = t.constructor.name),
                i === "Map" || i === "Set")
        )
            return Array.from(t);
        if (i === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))
            return xe(t, e);
    }
}
function xe(t, e) {
    (e == null || e > t.length) && (e = t.length);
    for (var i = 0, r = new Array(e); i < e; i++) r[i] = t[i];
    return r;
}
function $t(t) {
    for (var e = "", i = Hi(t.split("")), r; !(r = i()).done;) {
        var d = r.value;
        e += zi(d, e) || "";
    }
    return e;
}
function zi(t, e, i) {
    if (t === "+") {
        if (e) {
            typeof i == "function" && i("end");
            return;
        }
        return "+";
    }
    return be(t);
}
function Wi(t, e) {
    var i = (typeof Symbol < "u" && t[Symbol.iterator]) || t["@@iterator"];
    if (i) return (i = i.call(t)).next.bind(i);
    if (
        Array.isArray(t) ||
        (i = qi(t)) ||
        (e && t && typeof t.length == "number")
    ) {
        i && (t = i);
        var r = 0;
        return function () {
            return r >= t.length ? { done: !0 } : { done: !1, value: t[r++] };
        };
    }
    throw new TypeError(
        "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
    );
}
function qi(t, e) {
    if (t) {
        if (typeof t == "string") return ye(t, e);
        var i = Object.prototype.toString.call(t).slice(8, -1);
        if (
            (i === "Object" && t.constructor && (i = t.constructor.name),
                i === "Map" || i === "Set")
        )
            return Array.from(t);
        if (i === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))
            return ye(t, e);
    }
}
function ye(t, e) {
    (e == null || e > t.length) && (e = t.length);
    for (var i = 0, r = new Array(e); i < e; i++) r[i] = t[i];
    return r;
}
function wt(t, e) {
    for (var i = t.slice(), r = Wi(e), d; !(d = r()).done;) {
        var l = d.value;
        t.indexOf(l) < 0 && i.push(l);
    }
    return i.sort(function ($, f) {
        return $ - f;
    });
}
function j(t, e) {
    return ve(t, void 0, e);
}
function ve(t, e, i) {
    var r = i.type(e),
        d = (r && r.possibleLengths()) || i.possibleLengths();
    if (!d) return "IS_POSSIBLE";
    if (e === "FIXED_LINE_OR_MOBILE") {
        if (!i.type("FIXED_LINE")) return ve(t, "MOBILE", i);
        var l = i.type("MOBILE");
        l && (d = wt(d, l.possibleLengths()));
    } else if (e && !r) return "INVALID_LENGTH";
    var $ = t.length,
        f = d[0];
    return f === $
        ? "IS_POSSIBLE"
        : f > $
            ? "TOO_SHORT"
            : d[d.length - 1] < $
                ? "TOO_LONG"
                : d.indexOf($, 1) >= 0
                    ? "IS_POSSIBLE"
                    : "INVALID_LENGTH";
}
function It(t, e, i) {
    if ((e === void 0 && (e = {}), (i = new y(i)), e.v2)) {
        if (!t.countryCallingCode)
            throw new Error("Invalid phone number object passed");
        i.selectNumberingPlan(t.countryCallingCode);
    } else {
        if (!t.phone) return !1;
        if (t.country) {
            if (!i.hasCountry(t.country))
                throw new Error("Unknown country: ".concat(t.country));
            i.country(t.country);
        } else {
            if (!t.countryCallingCode)
                throw new Error("Invalid phone number object passed");
            i.selectNumberingPlan(t.countryCallingCode);
        }
    }
    if (i.possibleLengths()) return Pt(t.phone || t.nationalNumber, i);
    if (
        t.countryCallingCode &&
        i.isNonGeographicCallingCode(t.countryCallingCode)
    )
        return !0;
    throw new Error(
        'Missing "possibleLengths" in metadata. Perhaps the metadata has been generated before v1.0.18.',
    );
}
function Pt(t, e) {
    switch (j(t, e)) {
        case "IS_POSSIBLE":
            return !0;
        default:
            return !1;
    }
}
function E(t, e) {
    return (t = t || ""), new RegExp("^(?:" + e + ")$").test(t);
}
function Xi(t, e) {
    var i = (typeof Symbol < "u" && t[Symbol.iterator]) || t["@@iterator"];
    if (i) return (i = i.call(t)).next.bind(i);
    if (
        Array.isArray(t) ||
        (i = Yi(t)) ||
        (e && t && typeof t.length == "number")
    ) {
        i && (t = i);
        var r = 0;
        return function () {
            return r >= t.length ? { done: !0 } : { done: !1, value: t[r++] };
        };
    }
    throw new TypeError(
        "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
    );
}
function Yi(t, e) {
    if (t) {
        if (typeof t == "string") return Ce(t, e);
        var i = Object.prototype.toString.call(t).slice(8, -1);
        if (
            (i === "Object" && t.constructor && (i = t.constructor.name),
                i === "Map" || i === "Set")
        )
            return Array.from(t);
        if (i === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))
            return Ce(t, e);
    }
}
function Ce(t, e) {
    (e == null || e > t.length) && (e = t.length);
    for (var i = 0, r = new Array(e); i < e; i++) r[i] = t[i];
    return r;
}
var Zi = [
    "MOBILE",
    "PREMIUM_RATE",
    "TOLL_FREE",
    "SHARED_COST",
    "VOIP",
    "PERSONAL_NUMBER",
    "PAGER",
    "UAN",
    "VOICEMAIL",
];
function H(t, e, i) {
    if (((e = e || {}), !(!t.country && !t.countryCallingCode))) {
        (i = new y(i)), i.selectNumberingPlan(t.country, t.countryCallingCode);
        var r = e.v2 ? t.nationalNumber : t.phone;
        if (E(r, i.nationalNumberPattern())) {
            if (Et(r, "FIXED_LINE", i))
                return (i.type("MOBILE") && i.type("MOBILE").pattern() === "") ||
                    !i.type("MOBILE") ||
                    Et(r, "MOBILE", i)
                    ? "FIXED_LINE_OR_MOBILE"
                    : "FIXED_LINE";
            for (var d = Xi(Zi), l; !(l = d()).done;) {
                var $ = l.value;
                if (Et(r, $, i)) return $;
            }
        }
    }
}
function Et(t, e, i) {
    return (
        (e = i.type(e)),
        !e ||
            !e.pattern() ||
            (e.possibleLengths() && e.possibleLengths().indexOf(t.length) < 0)
            ? !1
            : E(t, e.pattern())
    );
}
function St(t, e, i) {
    if (
        ((e = e || {}),
            (i = new y(i)),
            i.selectNumberingPlan(t.country, t.countryCallingCode),
            i.hasTypes())
    )
        return H(t, e, i.metadata) !== void 0;
    var r = e.v2 ? t.nationalNumber : t.phone;
    return E(r, i.nationalNumberPattern());
}
function Ft(t, e, i) {
    var r = new y(i),
        d = r.getCountryCodesForCallingCode(t);
    return d
        ? d.filter(function (l) {
            return Ji(e, l, i);
        })
        : [];
}
function Ji(t, e, i) {
    var r = new y(i);
    return (
        r.selectNumberingPlan(e),
        r.numberingPlan.possibleLengths().indexOf(t.length) >= 0
    );
}
function Lt(t) {
    return t.replace(new RegExp("[".concat(z, "]+"), "g"), " ").trim();
}
var Qi = /(\$\d)/;
function At(t, e, i) {
    var r = i.useInternationalFormat,
        d = i.withNationalPrefix,
        l = i.carrierCode,
        $ = i.metadata,
        f = t.replace(
            new RegExp(e.pattern()),
            r
                ? e.internationalFormat()
                : d && e.nationalPrefixFormattingRule()
                    ? e.format().replace(Qi, e.nationalPrefixFormattingRule())
                    : e.format(),
        );
    return r ? Lt(f) : f;
}
var tr = /^[\d]+(?:[~\u2053\u223C\uFF5E][\d]+)?$/;
function Ot(t, e, i) {
    var r = new y(i);
    if ((r.selectNumberingPlan(t, e), r.defaultIDDPrefix()))
        return r.defaultIDDPrefix();
    if (tr.test(r.IDDPrefix())) return r.IDDPrefix();
}
function ke(t) {
    var e = t.number,
        i = t.ext;
    if (!e) return "";
    if (e[0] !== "+")
        throw new Error(
            '"formatRFC3966()" expects "number" to be in E.164 format.',
        );
    return "tel:".concat(e).concat(i ? ";ext=" + i : "");
}
function er(t, e) {
    var i = (typeof Symbol < "u" && t[Symbol.iterator]) || t["@@iterator"];
    if (i) return (i = i.call(t)).next.bind(i);
    if (
        Array.isArray(t) ||
        (i = ir(t)) ||
        (e && t && typeof t.length == "number")
    ) {
        i && (t = i);
        var r = 0;
        return function () {
            return r >= t.length ? { done: !0 } : { done: !1, value: t[r++] };
        };
    }
    throw new TypeError(
        "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
    );
}
function ir(t, e) {
    if (t) {
        if (typeof t == "string") return Ne(t, e);
        var i = Object.prototype.toString.call(t).slice(8, -1);
        if (
            (i === "Object" && t.constructor && (i = t.constructor.name),
                i === "Map" || i === "Set")
        )
            return Array.from(t);
        if (i === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))
            return Ne(t, e);
    }
}
function Ne(t, e) {
    (e == null || e > t.length) && (e = t.length);
    for (var i = 0, r = new Array(e); i < e; i++) r[i] = t[i];
    return r;
}
function we(t, e) {
    var i = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e &&
            (r = r.filter(function (d) {
                return Object.getOwnPropertyDescriptor(t, d).enumerable;
            })),
            i.push.apply(i, r);
    }
    return i;
}
function Ie(t) {
    for (var e = 1; e < arguments.length; e++) {
        var i = arguments[e] != null ? arguments[e] : {};
        e % 2
            ? we(Object(i), !0).forEach(function (r) {
                rr(t, r, i[r]);
            })
            : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
                : we(Object(i)).forEach(function (r) {
                    Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(i, r));
                });
    }
    return t;
}
function rr(t, e, i) {
    return (
        e in t
            ? Object.defineProperty(t, e, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0,
            })
            : (t[e] = i),
        t
    );
}
var Pe = {
    formatExtension: function (e, i, r) {
        return "".concat(e).concat(r.ext()).concat(i);
    },
};
function Dt(t, e, i, r) {
    if (
        (i ? (i = Ie(Ie({}, Pe), i)) : (i = Pe),
            (r = new y(r)),
            t.country && t.country !== "001")
    ) {
        if (!r.hasCountry(t.country))
            throw new Error("Unknown country: ".concat(t.country));
        r.country(t.country);
    } else if (t.countryCallingCode) r.selectNumberingPlan(t.countryCallingCode);
    else return t.phone || "";
    var d = r.countryCallingCode(),
        l = i.v2 ? t.nationalNumber : t.phone,
        $;
    switch (e) {
        case "NATIONAL":
            return l
                ? (($ = ft(l, t.carrierCode, "NATIONAL", r, i)),
                    Tt($, t.ext, r, i.formatExtension))
                : "";
        case "INTERNATIONAL":
            return l
                ? (($ = ft(l, null, "INTERNATIONAL", r, i)),
                    ($ = "+".concat(d, " ").concat($)),
                    Tt($, t.ext, r, i.formatExtension))
                : "+".concat(d);
        case "E.164":
            return "+".concat(d).concat(l);
        case "RFC3966":
            return ke({ number: "+".concat(d).concat(l), ext: t.ext });
        case "IDD":
            if (!i.fromCountry) return;
            var f = dr(l, t.carrierCode, d, i.fromCountry, r);
            return Tt(f, t.ext, r, i.formatExtension);
        default:
            throw new Error(
                'Unknown "format" argument passed to "formatNumber()": "'.concat(
                    e,
                    '"',
                ),
            );
    }
}
function ft(t, e, i, r, d) {
    var l = nr(r.formats(), t);
    return l
        ? At(t, l, {
            useInternationalFormat: i === "INTERNATIONAL",
            withNationalPrefix: !(
                l.nationalPrefixIsOptionalWhenFormattingInNationalFormat() &&
                d &&
                d.nationalPrefix === !1
            ),
            carrierCode: e,
            metadata: r,
        })
        : t;
}
function nr(t, e) {
    for (var i = er(t), r; !(r = i()).done;) {
        var d = r.value;
        if (d.leadingDigitsPatterns().length > 0) {
            var l = d.leadingDigitsPatterns()[d.leadingDigitsPatterns().length - 1];
            if (e.search(l) !== 0) continue;
        }
        if (E(e, d.pattern())) return d;
    }
}
function Tt(t, e, i, r) {
    return e ? r(t, e, i) : t;
}
function dr(t, e, i, r, d) {
    var l = V(r, d.metadata);
    if (l === i) {
        var $ = ft(t, e, "NATIONAL", d);
        return i === "1" ? i + " " + $ : $;
    }
    var f = Ot(r, void 0, d.metadata);
    if (f)
        return ""
            .concat(f, " ")
            .concat(i, " ")
            .concat(ft(t, null, "INTERNATIONAL", d));
}
function Ee(t, e) {
    var i = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e &&
            (r = r.filter(function (d) {
                return Object.getOwnPropertyDescriptor(t, d).enumerable;
            })),
            i.push.apply(i, r);
    }
    return i;
}
function Se(t) {
    for (var e = 1; e < arguments.length; e++) {
        var i = arguments[e] != null ? arguments[e] : {};
        e % 2
            ? Ee(Object(i), !0).forEach(function (r) {
                or(t, r, i[r]);
            })
            : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
                : Ee(Object(i)).forEach(function (r) {
                    Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(i, r));
                });
    }
    return t;
}
function or(t, e, i) {
    return (
        e in t
            ? Object.defineProperty(t, e, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0,
            })
            : (t[e] = i),
        t
    );
}
function ar(t, e) {
    if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function");
}
function Fe(t, e) {
    for (var i = 0; i < e.length; i++) {
        var r = e[i];
        (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
    }
}
function lr(t, e, i) {
    return (
        e && Fe(t.prototype, e),
        i && Fe(t, i),
        Object.defineProperty(t, "prototype", { writable: !1 }),
        t
    );
}
var sr = !1,
    Le = (function () {
        function t(e, i, r) {
            if ((ar(this, t), !e))
                throw new TypeError("`country` or `countryCallingCode` not passed");
            if (!i) throw new TypeError("`nationalNumber` not passed");
            if (!r) throw new TypeError("`metadata` not passed");
            var d = $r(e, r),
                l = d.country,
                $ = d.countryCallingCode;
            (this.country = l),
                (this.countryCallingCode = $),
                (this.nationalNumber = i),
                (this.number = "+" + this.countryCallingCode + this.nationalNumber),
                (this.getMetadata = function () {
                    return r;
                });
        }
        return (
            lr(t, [
                {
                    key: "setExt",
                    value: function (i) {
                        this.ext = i;
                    },
                },
                {
                    key: "getPossibleCountries",
                    value: function () {
                        return this.country
                            ? [this.country]
                            : Ft(
                                this.countryCallingCode,
                                this.nationalNumber,
                                this.getMetadata(),
                            );
                    },
                },
                {
                    key: "isPossible",
                    value: function () {
                        return It(this, { v2: !0 }, this.getMetadata());
                    },
                },
                {
                    key: "isValid",
                    value: function () {
                        return St(this, { v2: !0 }, this.getMetadata());
                    },
                },
                {
                    key: "isNonGeographic",
                    value: function () {
                        var i = new y(this.getMetadata());
                        return i.isNonGeographicCallingCode(this.countryCallingCode);
                    },
                },
                {
                    key: "isEqual",
                    value: function (i) {
                        return this.number === i.number && this.ext === i.ext;
                    },
                },
                {
                    key: "getType",
                    value: function () {
                        return H(this, { v2: !0 }, this.getMetadata());
                    },
                },
                {
                    key: "format",
                    value: function (i, r) {
                        return Dt(
                            this,
                            i,
                            r ? Se(Se({}, r), {}, { v2: !0 }) : { v2: !0 },
                            this.getMetadata(),
                        );
                    },
                },
                {
                    key: "formatNational",
                    value: function (i) {
                        return this.format("NATIONAL", i);
                    },
                },
                {
                    key: "formatInternational",
                    value: function (i) {
                        return this.format("INTERNATIONAL", i);
                    },
                },
                {
                    key: "getURI",
                    value: function (i) {
                        return this.format("RFC3966", i);
                    },
                },
            ]),
            t
        );
    })();
var ur = function (e) {
    return /^[A-Z]{2}$/.test(e);
};
function $r(t, e) {
    var i,
        r,
        d = new y(e);
    return (
        ur(t)
            ? ((i = t), d.selectNumberingPlan(i), (r = d.countryCallingCode()))
            : ((r = t), sr && d.isNonGeographicCallingCode(r) && (i = "001")),
        { country: i, countryCallingCode: r }
    );
}
var fr = new RegExp("([" + P + "])");
function Mt(t, e, i, r) {
    if (e) {
        var d = new y(r);
        d.selectNumberingPlan(e, i);
        var l = new RegExp(d.IDDPrefix());
        if (t.search(l) === 0) {
            t = t.slice(t.match(l)[0].length);
            var $ = t.match(fr);
            if (!($ && $[1] != null && $[1].length > 0 && $[1] === "0")) return t;
        }
    }
}
function Rt(t, e) {
    if (t && e.numberingPlan.nationalPrefixForParsing()) {
        var i = new RegExp(
            "^(?:" + e.numberingPlan.nationalPrefixForParsing() + ")",
        ),
            r = i.exec(t);
        if (r) {
            var d,
                l,
                $ = r.length - 1,
                f = $ > 0 && r[$];
            if (e.nationalPrefixTransformRule() && f)
                (d = t.replace(i, e.nationalPrefixTransformRule())),
                    $ > 1 && (l = r[1]);
            else {
                var h = r[0];
                (d = t.slice(h.length)), f && (l = r[1]);
            }
            var _;
            if (f) {
                var v = t.indexOf(r[1]),
                    I = t.slice(0, v);
                I === e.numberingPlan.nationalPrefix() &&
                    (_ = e.numberingPlan.nationalPrefix());
            } else _ = r[0];
            return { nationalNumber: d, nationalPrefix: _, carrierCode: l };
        }
    }
    return { nationalNumber: t };
}
function q(t, e) {
    var i = Rt(t, e),
        r = i.carrierCode,
        d = i.nationalNumber;
    if (d !== t) {
        if (!pr(t, d, e)) return { nationalNumber: t };
        if (e.possibleLengths() && !cr(d, e)) return { nationalNumber: t };
    }
    return { nationalNumber: d, carrierCode: r };
}
function pr(t, e, i) {
    return !(E(t, i.nationalNumberPattern()) && !E(e, i.nationalNumberPattern()));
}
function cr(t, e) {
    switch (j(t, e)) {
        case "TOO_SHORT":
        case "INVALID_LENGTH":
            return !1;
        default:
            return !0;
    }
}
function Gt(t, e, i, r) {
    var d = e ? V(e, r) : i;
    if (t.indexOf(d) === 0) {
        (r = new y(r)), r.selectNumberingPlan(e, i);
        var l = t.slice(d.length),
            $ = q(l, r),
            f = $.nationalNumber,
            h = q(t, r),
            _ = h.nationalNumber;
        if (
            (!E(_, r.nationalNumberPattern()) && E(f, r.nationalNumberPattern())) ||
            j(_, r) === "TOO_LONG"
        )
            return { countryCallingCode: d, number: l };
    }
    return { number: t };
}
function Ut(t, e, i, r) {
    if (!t) return {};
    var d;
    if (t[0] !== "+") {
        var l = Mt(t, e, i, r);
        if (l && l !== t) (d = !0), (t = "+" + l);
        else {
            if (e || i) {
                var $ = Gt(t, e, i, r),
                    f = $.countryCallingCode,
                    h = $.number;
                if (f)
                    return {
                        countryCallingCodeSource: "FROM_NUMBER_WITHOUT_PLUS_SIGN",
                        countryCallingCode: f,
                        number: h,
                    };
            }
            return { number: t };
        }
    }
    if (t[1] === "0") return {};
    r = new y(r);
    for (var _ = 2; _ - 1 <= ue && _ <= t.length;) {
        var v = t.slice(1, _);
        if (r.hasCallingCode(v))
            return (
                r.selectNumberingPlan(v),
                {
                    countryCallingCodeSource: d
                        ? "FROM_NUMBER_WITH_IDD"
                        : "FROM_NUMBER_WITH_PLUS_SIGN",
                    countryCallingCode: v,
                    number: t.slice(_),
                }
            );
        _++;
    }
    return {};
}
function hr(t, e) {
    var i = (typeof Symbol < "u" && t[Symbol.iterator]) || t["@@iterator"];
    if (i) return (i = i.call(t)).next.bind(i);
    if (
        Array.isArray(t) ||
        (i = gr(t)) ||
        (e && t && typeof t.length == "number")
    ) {
        i && (t = i);
        var r = 0;
        return function () {
            return r >= t.length ? { done: !0 } : { done: !1, value: t[r++] };
        };
    }
    throw new TypeError(
        "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
    );
}
function gr(t, e) {
    if (t) {
        if (typeof t == "string") return Ae(t, e);
        var i = Object.prototype.toString.call(t).slice(8, -1);
        if (
            (i === "Object" && t.constructor && (i = t.constructor.name),
                i === "Map" || i === "Set")
        )
            return Array.from(t);
        if (i === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))
            return Ae(t, e);
    }
}
function Ae(t, e) {
    (e == null || e > t.length) && (e = t.length);
    for (var i = 0, r = new Array(e); i < e; i++) r[i] = t[i];
    return r;
}
function Bt(t, e) {
    var i = e.countries,
        r = e.defaultCountry,
        d = e.metadata;
    d = new y(d);
    for (var l = [], $ = hr(i), f; !(f = $()).done;) {
        var h = f.value;
        if ((d.country(h), d.leadingDigits())) {
            if (t && t.search(d.leadingDigits()) === 0) return h;
        } else if (H({ phone: t, country: h }, void 0, d.metadata))
            if (r) {
                if (h === r) return h;
                l.push(h);
            } else return h;
    }
    if (l.length > 0) return l[0];
}
var _r = !1;
function Vt(t, e) {
    var i = e.nationalNumber,
        r = e.defaultCountry,
        d = e.metadata;
    if (_r && d.isNonGeographicCallingCode(t)) return "001";
    var l = d.getCountryCodesForCallingCode(t);
    if (l)
        return l.length === 1
            ? l[0]
            : Bt(i, { countries: l, defaultCountry: r, metadata: d.metadata });
}
var Ht = "+",
    mr = "[\\-\\.\\(\\)]?",
    Oe = "([" + P + "]|" + mr + ")",
    br = "^\\" + Ht + Oe + "*[" + P + "]" + Oe + "*$",
    xr = new RegExp(br, "g"),
    jt = P,
    yr = "[" + jt + "]+((\\-)*[" + jt + "])*",
    vr = "a-zA-Z",
    Cr = "[" + vr + "]+((\\-)*[" + jt + "])*",
    kr = "^(" + yr + "\\.)*" + Cr + "\\.?$",
    Nr = new RegExp(kr, "g"),
    Kt = "tel:",
    pt = ";phone-context=",
    Te = ";isub=";
function zt(t) {
    var e = t.indexOf(pt);
    if (e < 0) return null;
    var i = e + pt.length;
    if (i >= t.length) return "";
    var r = t.indexOf(";", i);
    return r >= 0 ? t.substring(i, r) : t.substring(i);
}
function De(t) {
    return t === null ? !0 : t.length === 0 ? !1 : xr.test(t) || Nr.test(t);
}
function Wt(t, e) {
    var i = e.extractFormattedPhoneNumber,
        r = zt(t);
    if (!De(r)) throw new O("NOT_A_NUMBER");
    var d;
    if (r === null) d = i(t) || "";
    else {
        (d = ""), r.charAt(0) === Ht && (d += r);
        var l = t.indexOf(Kt),
            $;
        l >= 0 ? ($ = l + Kt.length) : ($ = 0);
        var f = t.indexOf(pt);
        d += t.substring($, f);
    }
    var h = d.indexOf(Te);
    if ((h > 0 && (d = d.substring(0, h)), d !== "")) return d;
}
var wr = 250,
    Ir = new RegExp("[" + it + P + "]"),
    Pr = new RegExp("[^" + P + "#]+$"),
    Er = !1;
function qt(t, e, i) {
    if (
        ((e = e || {}),
            (i = new y(i)),
            e.defaultCountry && !i.hasCountry(e.defaultCountry))
    )
        throw e.v2
            ? new O("INVALID_COUNTRY")
            : new Error("Unknown country: ".concat(e.defaultCountry));
    var r = Fr(t, e.v2, e.extract),
        d = r.number,
        l = r.ext,
        $ = r.error;
    if (!d) {
        if (e.v2)
            throw $ === "TOO_SHORT" ? new O("TOO_SHORT") : new O("NOT_A_NUMBER");
        return {};
    }
    var f = Ar(d, e.defaultCountry, e.defaultCallingCode, i),
        h = f.country,
        _ = f.nationalNumber,
        v = f.countryCallingCode,
        I = f.countryCallingCodeSource,
        w = f.carrierCode;
    if (!i.hasSelectedNumberingPlan()) {
        if (e.v2) throw new O("INVALID_COUNTRY");
        return {};
    }
    if (!_ || _.length < et) {
        if (e.v2) throw new O("TOO_SHORT");
        return {};
    }
    if (_.length > se) {
        if (e.v2) throw new O("TOO_LONG");
        return {};
    }
    if (e.v2) {
        var S = new Le(v, _, i.metadata);
        return (
            h && (S.country = h),
            w && (S.carrierCode = w),
            l && (S.ext = l),
            (S.__countryCallingCodeSource = I),
            S
        );
    }
    var F = (e.extended ? i.hasSelectedNumberingPlan() : h)
        ? E(_, i.nationalNumberPattern())
        : !1;
    return e.extended
        ? {
            country: h,
            countryCallingCode: v,
            carrierCode: w,
            valid: F,
            possible: F
                ? !0
                : !!(e.extended === !0 && i.possibleLengths() && Pt(_, i)),
            phone: _,
            ext: l,
        }
        : F
            ? Lr(h, _, l)
            : {};
}
function Sr(t, e, i) {
    if (t) {
        if (t.length > wr) {
            if (i) throw new O("TOO_LONG");
            return;
        }
        if (e === !1) return t;
        var r = t.search(Ir);
        if (!(r < 0)) return t.slice(r).replace(Pr, "");
    }
}
function Fr(t, e, i) {
    var r = Wt(t, {
        extractFormattedPhoneNumber: function ($) {
            return Sr($, i, e);
        },
    });
    if (!r) return {};
    if (!kt(r)) return _e(r) ? { error: "TOO_SHORT" } : {};
    var d = Nt(r);
    return d.ext ? d : { number: r };
}
function Lr(t, e, i) {
    var r = { country: t, phone: e };
    return i && (r.ext = i), r;
}
function Ar(t, e, i, r) {
    var d = Ut($t(t), e, i, r.metadata),
        l = d.countryCallingCodeSource,
        $ = d.countryCallingCode,
        f = d.number,
        h;
    if ($) r.selectNumberingPlan($);
    else if (f && (e || i))
        r.selectNumberingPlan(e, i),
            e ? (h = e) : Er && r.isNonGeographicCallingCode(i) && (h = "001"),
            ($ = i || V(e, r.metadata));
    else return {};
    if (!f) return { countryCallingCodeSource: l, countryCallingCode: $ };
    var _ = q($t(f), r),
        v = _.nationalNumber,
        I = _.carrierCode,
        w = Vt($, { nationalNumber: v, defaultCountry: e, metadata: r });
    return (
        w && ((h = w), w === "001" || r.country(h)),
        {
            country: h,
            countryCallingCode: $,
            countryCallingCodeSource: l,
            nationalNumber: v,
            carrierCode: I,
        }
    );
}
function Me(t, e) {
    var i = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e &&
            (r = r.filter(function (d) {
                return Object.getOwnPropertyDescriptor(t, d).enumerable;
            })),
            i.push.apply(i, r);
    }
    return i;
}
function Re(t) {
    for (var e = 1; e < arguments.length; e++) {
        var i = arguments[e] != null ? arguments[e] : {};
        e % 2
            ? Me(Object(i), !0).forEach(function (r) {
                Or(t, r, i[r]);
            })
            : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
                : Me(Object(i)).forEach(function (r) {
                    Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(i, r));
                });
    }
    return t;
}
function Or(t, e, i) {
    return (
        e in t
            ? Object.defineProperty(t, e, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0,
            })
            : (t[e] = i),
        t
    );
}
function Xt(t, e, i) {
    return qt(t, Re(Re({}, e), {}, { v2: !0 }), i);
}
function Ge(t, e) {
    var i = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e &&
            (r = r.filter(function (d) {
                return Object.getOwnPropertyDescriptor(t, d).enumerable;
            })),
            i.push.apply(i, r);
    }
    return i;
}
function Tr(t) {
    for (var e = 1; e < arguments.length; e++) {
        var i = arguments[e] != null ? arguments[e] : {};
        e % 2
            ? Ge(Object(i), !0).forEach(function (r) {
                Dr(t, r, i[r]);
            })
            : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
                : Ge(Object(i)).forEach(function (r) {
                    Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(i, r));
                });
    }
    return t;
}
function Dr(t, e, i) {
    return (
        e in t
            ? Object.defineProperty(t, e, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0,
            })
            : (t[e] = i),
        t
    );
}
function Mr(t, e) {
    return Br(t) || Ur(t, e) || Gr(t, e) || Rr();
}
function Rr() {
    throw new TypeError(
        "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
    );
}
function Gr(t, e) {
    if (t) {
        if (typeof t == "string") return Ue(t, e);
        var i = Object.prototype.toString.call(t).slice(8, -1);
        if (
            (i === "Object" && t.constructor && (i = t.constructor.name),
                i === "Map" || i === "Set")
        )
            return Array.from(t);
        if (i === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))
            return Ue(t, e);
    }
}
function Ue(t, e) {
    (e == null || e > t.length) && (e = t.length);
    for (var i = 0, r = new Array(e); i < e; i++) r[i] = t[i];
    return r;
}
function Ur(t, e) {
    var i =
        t == null
            ? null
            : (typeof Symbol < "u" && t[Symbol.iterator]) || t["@@iterator"];
    if (i != null) {
        var r = [],
            d = !0,
            l = !1,
            $,
            f;
        try {
            for (
                i = i.call(t);
                !(d = ($ = i.next()).done) && (r.push($.value), !(e && r.length === e));
                d = !0
            );
        } catch (h) {
            (l = !0), (f = h);
        } finally {
            try {
                !d && i.return != null && i.return();
            } finally {
                if (l) throw f;
            }
        }
        return r;
    }
}
function Br(t) {
    if (Array.isArray(t)) return t;
}
function Yt(t) {
    var e = Array.prototype.slice.call(t),
        i = Mr(e, 4),
        r = i[0],
        d = i[1],
        l = i[2],
        $ = i[3],
        f,
        h,
        _;
    if (typeof r == "string") f = r;
    else throw new TypeError("A text for parsing must be a string.");
    if (!d || typeof d == "string")
        $ ? ((h = l), (_ = $)) : ((h = void 0), (_ = l)),
            d && (h = Tr({ defaultCountry: d }, h));
    else if (B(d)) l ? ((h = d), (_ = l)) : (_ = d);
    else throw new Error("Invalid second argument: ".concat(d));
    return { text: f, options: h, metadata: _ };
}
function Be(t, e) {
    var i = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e &&
            (r = r.filter(function (d) {
                return Object.getOwnPropertyDescriptor(t, d).enumerable;
            })),
            i.push.apply(i, r);
    }
    return i;
}
function Ve(t) {
    for (var e = 1; e < arguments.length; e++) {
        var i = arguments[e] != null ? arguments[e] : {};
        e % 2
            ? Be(Object(i), !0).forEach(function (r) {
                Vr(t, r, i[r]);
            })
            : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
                : Be(Object(i)).forEach(function (r) {
                    Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(i, r));
                });
    }
    return t;
}
function Vr(t, e, i) {
    return (
        e in t
            ? Object.defineProperty(t, e, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0,
            })
            : (t[e] = i),
        t
    );
}
function Zt(t, e, i) {
    e &&
        e.defaultCountry &&
        !he(e.defaultCountry, i) &&
        (e = Ve(Ve({}, e), {}, { defaultCountry: void 0 }));
    try {
        return Xt(t, e, i);
    } catch (r) {
        if (!(r instanceof O)) throw r;
    }
}
function nt() {
    var t = Yt(arguments),
        e = t.text,
        i = t.options,
        r = t.metadata;
    return Zt(e, i, r);
}
function ct() {
    return bt(nt, arguments);
}
var jr = '.iti--allow-dropdown .iti__flag-container:hover .iti__selected-flag,.iti--separate-dial-code .iti__selected-flag,.iti__country.iti__highlight{background-color:rgba(0,0,0,.05)}.iti--separate-dial-code .iti__selected-dial-code,.iti__arrow{margin-left:6px}.iti--allow-dropdown .iti__flag-container:hover,.iti--container:hover{cursor:pointer}.iti{position:relative;display:inline-block}.iti *{box-sizing:border-box;-moz-box-sizing:border-box}.iti__hide{display:none}.iti__v-hide{visibility:hidden}.iti input,.iti input[type=tel],.iti input[type=text]{position:relative;z-index:0;margin-top:0!important;margin-bottom:0!important;padding-right:36px;margin-right:0}.iti__flag-container{position:absolute;top:0;bottom:0;right:0;padding:1px}.iti__selected-flag{z-index:1;position:relative;display:flex;align-items:center;height:100%;padding:0 6px 0 8px}.iti__arrow{width:0;height:0;border-left:3px solid transparent;border-right:3px solid transparent;border-top:4px solid #555}.iti__arrow--up{border-top:none;border-bottom:4px solid #555}.iti__country-list{position:absolute;z-index:2;list-style:none;text-align:left;padding:0;margin:0 0 0 -1px;box-shadow:1px 1px 4px rgba(0,0,0,.2);background-color:#fff;border:1px solid #ccc;white-space:nowrap;max-height:200px;overflow-y:scroll;-webkit-overflow-scrolling:touch}.iti__country-list--dropup{bottom:100%;margin-bottom:-1px}@media (max-width:500px){.iti__country-list{white-space:normal}}.iti__flag-box{display:inline-block;width:20px}.iti__divider{padding-bottom:5px;margin-bottom:5px;border-bottom:1px solid #ccc}.iti__country{padding:5px 10px;outline:0}.iti__dial-code{color:#999}.iti__country-name,.iti__dial-code,.iti__flag-box{vertical-align:middle}.iti__country-name,.iti__flag-box{margin-right:6px}.iti--allow-dropdown input,.iti--allow-dropdown input[type=tel],.iti--allow-dropdown input[type=text],.iti--separate-dial-code input,.iti--separate-dial-code input[type=tel],.iti--separate-dial-code input[type=text]{padding-right:6px;margin-left:0}.iti--allow-dropdown .iti__flag-container,.iti--separate-dial-code .iti__flag-container{right:auto;left:0}.iti--allow-dropdown input[disabled]+.iti__flag-container:hover .iti__selected-flag,.iti--allow-dropdown input[readonly]+.iti__flag-container:hover .iti__selected-flag,.iti__flag.iti__np{background-color:transparent}.iti--allow-dropdown input[disabled]+.iti__flag-container:hover,.iti--allow-dropdown input[readonly]+.iti__flag-container:hover{cursor:default}.iti--container{position:absolute;top:-1000px;left:-1000px;z-index:1060;padding:1px}.iti-mobile .iti--container{top:30px;bottom:30px;left:30px;right:30px;position:fixed}.iti-mobile .iti__country-list{max-height:100%;width:100%}.iti-mobile .iti__country{padding:10px;line-height:1.5em}.iti__flag{width:20px;height:15px;box-shadow:0 0 1px 0 #888;background-image:url("https://cdn.jsdelivr.net/gh/jockwe53/form@ab43687bce04f9b5783eb57952e261bef0b7a408/flags.png");background-repeat:no-repeat;background-color:#dbdbdb;background-position:20px 0}.iti__flag.iti__be,.iti__flag.iti__ne{width:18px}.iti__flag.iti__ch{width:15px}.iti__flag.iti__ac{height:10px;background-position:0 0}.iti__flag.iti__ad{height:14px;background-position:-22px 0}.iti__flag.iti__ae{height:10px;background-position:-44px 0}.iti__flag.iti__af{height:14px;background-position:-66px 0}.iti__flag.iti__ag{height:14px;background-position:-88px 0}.iti__flag.iti__ai{height:10px;background-position:-110px 0}.iti__flag.iti__al{height:15px;background-position:-132px 0}.iti__flag.iti__am{height:10px;background-position:-154px 0}.iti__flag.iti__ao{height:14px;background-position:-176px 0}.iti__flag.iti__aq{height:14px;background-position:-198px 0}.iti__flag.iti__ar{height:13px;background-position:-220px 0}.iti__flag.iti__as{height:10px;background-position:-242px 0}.iti__flag.iti__at{height:14px;background-position:-264px 0}.iti__flag.iti__au{height:10px;background-position:-286px 0}.iti__flag.iti__aw{height:14px;background-position:-308px 0}.iti__flag.iti__ax{height:13px;background-position:-330px 0}.iti__flag.iti__az{height:10px;background-position:-352px 0}.iti__flag.iti__ba{height:10px;background-position:-374px 0}.iti__flag.iti__bb{height:14px;background-position:-396px 0}.iti__flag.iti__bd{height:12px;background-position:-418px 0}.iti__flag.iti__be{height:15px;background-position:-440px 0}.iti__flag.iti__bf{height:14px;background-position:-460px 0}.iti__flag.iti__bg{height:12px;background-position:-482px 0}.iti__flag.iti__bh{height:12px;background-position:-504px 0}.iti__flag.iti__bi{height:12px;background-position:-526px 0}.iti__flag.iti__bj{height:14px;background-position:-548px 0}.iti__flag.iti__bl{height:14px;background-position:-570px 0}.iti__flag.iti__bm{height:10px;background-position:-592px 0}.iti__flag.iti__bn{height:10px;background-position:-614px 0}.iti__flag.iti__bo{height:14px;background-position:-636px 0}.iti__flag.iti__bq{height:14px;background-position:-658px 0}.iti__flag.iti__br{height:14px;background-position:-680px 0}.iti__flag.iti__bs{height:10px;background-position:-702px 0}.iti__flag.iti__bt{height:14px;background-position:-724px 0}.iti__flag.iti__bv{height:15px;background-position:-746px 0}.iti__flag.iti__bw{height:14px;background-position:-768px 0}.iti__flag.iti__by{height:10px;background-position:-790px 0}.iti__flag.iti__bz{height:14px;background-position:-812px 0}.iti__flag.iti__ca{height:10px;background-position:-834px 0}.iti__flag.iti__cc{height:10px;background-position:-856px 0}.iti__flag.iti__cd{height:15px;background-position:-878px 0}.iti__flag.iti__cf{height:14px;background-position:-900px 0}.iti__flag.iti__cg{height:14px;background-position:-922px 0}.iti__flag.iti__ch{height:15px;background-position:-944px 0}.iti__flag.iti__ci{height:14px;background-position:-961px 0}.iti__flag.iti__ck{height:10px;background-position:-983px 0}.iti__flag.iti__cl{height:14px;background-position:-1005px 0}.iti__flag.iti__cm{height:14px;background-position:-1027px 0}.iti__flag.iti__cn{height:14px;background-position:-1049px 0}.iti__flag.iti__co{height:14px;background-position:-1071px 0}.iti__flag.iti__cp{height:14px;background-position:-1093px 0}.iti__flag.iti__cr{height:12px;background-position:-1115px 0}.iti__flag.iti__cu{height:10px;background-position:-1137px 0}.iti__flag.iti__cv{height:12px;background-position:-1159px 0}.iti__flag.iti__cw{height:14px;background-position:-1181px 0}.iti__flag.iti__cx{height:10px;background-position:-1203px 0}.iti__flag.iti__cy{height:14px;background-position:-1225px 0}.iti__flag.iti__cz{height:14px;background-position:-1247px 0}.iti__flag.iti__de{height:12px;background-position:-1269px 0}.iti__flag.iti__dg{height:10px;background-position:-1291px 0}.iti__flag.iti__dj{height:14px;background-position:-1313px 0}.iti__flag.iti__dk{height:15px;background-position:-1335px 0}.iti__flag.iti__dm{height:10px;background-position:-1357px 0}.iti__flag.iti__do{height:14px;background-position:-1379px 0}.iti__flag.iti__dz{height:14px;background-position:-1401px 0}.iti__flag.iti__ea{height:14px;background-position:-1423px 0}.iti__flag.iti__ec{height:14px;background-position:-1445px 0}.iti__flag.iti__ee{height:13px;background-position:-1467px 0}.iti__flag.iti__eg{height:14px;background-position:-1489px 0}.iti__flag.iti__eh{height:10px;background-position:-1511px 0}.iti__flag.iti__er{height:10px;background-position:-1533px 0}.iti__flag.iti__es{height:14px;background-position:-1555px 0}.iti__flag.iti__et{height:10px;background-position:-1577px 0}.iti__flag.iti__eu{height:14px;background-position:-1599px 0}.iti__flag.iti__fi{height:12px;background-position:-1621px 0}.iti__flag.iti__fj{height:10px;background-position:-1643px 0}.iti__flag.iti__fk{height:10px;background-position:-1665px 0}.iti__flag.iti__fm{height:11px;background-position:-1687px 0}.iti__flag.iti__fo{height:15px;background-position:-1709px 0}.iti__flag.iti__fr{height:14px;background-position:-1731px 0}.iti__flag.iti__ga{height:15px;background-position:-1753px 0}.iti__flag.iti__gb{height:10px;background-position:-1775px 0}.iti__flag.iti__gd{height:12px;background-position:-1797px 0}.iti__flag.iti__ge{height:14px;background-position:-1819px 0}.iti__flag.iti__gf{height:14px;background-position:-1841px 0}.iti__flag.iti__gg{height:14px;background-position:-1863px 0}.iti__flag.iti__gh{height:14px;background-position:-1885px 0}.iti__flag.iti__gi{height:10px;background-position:-1907px 0}.iti__flag.iti__gl{height:14px;background-position:-1929px 0}.iti__flag.iti__gm{height:14px;background-position:-1951px 0}.iti__flag.iti__gn{height:14px;background-position:-1973px 0}.iti__flag.iti__gp{height:14px;background-position:-1995px 0}.iti__flag.iti__gq{height:14px;background-position:-2017px 0}.iti__flag.iti__gr{height:14px;background-position:-2039px 0}.iti__flag.iti__gs{height:10px;background-position:-2061px 0}.iti__flag.iti__gt{height:13px;background-position:-2083px 0}.iti__flag.iti__gu{height:11px;background-position:-2105px 0}.iti__flag.iti__gw{height:10px;background-position:-2127px 0}.iti__flag.iti__gy{height:12px;background-position:-2149px 0}.iti__flag.iti__hk{height:14px;background-position:-2171px 0}.iti__flag.iti__hm{height:10px;background-position:-2193px 0}.iti__flag.iti__hn{height:10px;background-position:-2215px 0}.iti__flag.iti__hr{height:10px;background-position:-2237px 0}.iti__flag.iti__ht{height:12px;background-position:-2259px 0}.iti__flag.iti__hu{height:10px;background-position:-2281px 0}.iti__flag.iti__ic{height:14px;background-position:-2303px 0}.iti__flag.iti__id{height:14px;background-position:-2325px 0}.iti__flag.iti__ie{height:10px;background-position:-2347px 0}.iti__flag.iti__il{height:15px;background-position:-2369px 0}.iti__flag.iti__im{height:10px;background-position:-2391px 0}.iti__flag.iti__in{height:14px;background-position:-2413px 0}.iti__flag.iti__io{height:10px;background-position:-2435px 0}.iti__flag.iti__iq{height:14px;background-position:-2457px 0}.iti__flag.iti__ir{height:12px;background-position:-2479px 0}.iti__flag.iti__is{height:15px;background-position:-2501px 0}.iti__flag.iti__it{height:14px;background-position:-2523px 0}.iti__flag.iti__je{height:12px;background-position:-2545px 0}.iti__flag.iti__jm{height:10px;background-position:-2567px 0}.iti__flag.iti__jo{height:10px;background-position:-2589px 0}.iti__flag.iti__jp{height:14px;background-position:-2611px 0}.iti__flag.iti__ke{height:14px;background-position:-2633px 0}.iti__flag.iti__kg{height:12px;background-position:-2655px 0}.iti__flag.iti__kh{height:13px;background-position:-2677px 0}.iti__flag.iti__ki{height:10px;background-position:-2699px 0}.iti__flag.iti__km{height:12px;background-position:-2721px 0}.iti__flag.iti__kn{height:14px;background-position:-2743px 0}.iti__flag.iti__kp{height:10px;background-position:-2765px 0}.iti__flag.iti__kr{height:14px;background-position:-2787px 0}.iti__flag.iti__kw{height:10px;background-position:-2809px 0}.iti__flag.iti__ky{height:10px;background-position:-2831px 0}.iti__flag.iti__kz{height:10px;background-position:-2853px 0}.iti__flag.iti__la{height:14px;background-position:-2875px 0}.iti__flag.iti__lb{height:14px;background-position:-2897px 0}.iti__flag.iti__lc{height:10px;background-position:-2919px 0}.iti__flag.iti__li{height:12px;background-position:-2941px 0}.iti__flag.iti__lk{height:10px;background-position:-2963px 0}.iti__flag.iti__lr{height:11px;background-position:-2985px 0}.iti__flag.iti__ls{height:14px;background-position:-3007px 0}.iti__flag.iti__lt{height:12px;background-position:-3029px 0}.iti__flag.iti__lu{height:12px;background-position:-3051px 0}.iti__flag.iti__lv{height:10px;background-position:-3073px 0}.iti__flag.iti__ly{height:10px;background-position:-3095px 0}.iti__flag.iti__ma{height:14px;background-position:-3117px 0}.iti__flag.iti__mc{width:19px;height:15px;background-position:-3139px 0}.iti__flag.iti__md{height:10px;background-position:-3160px 0}.iti__flag.iti__me{height:10px;background-position:-3182px 0}.iti__flag.iti__mf{height:14px;background-position:-3204px 0}.iti__flag.iti__mg{height:14px;background-position:-3226px 0}.iti__flag.iti__mh{height:11px;background-position:-3248px 0}.iti__flag.iti__mk{height:10px;background-position:-3270px 0}.iti__flag.iti__ml{height:14px;background-position:-3292px 0}.iti__flag.iti__mm{height:14px;background-position:-3314px 0}.iti__flag.iti__mn{height:10px;background-position:-3336px 0}.iti__flag.iti__mo{height:14px;background-position:-3358px 0}.iti__flag.iti__mp{height:10px;background-position:-3380px 0}.iti__flag.iti__mq{height:14px;background-position:-3402px 0}.iti__flag.iti__mr{height:14px;background-position:-3424px 0}.iti__flag.iti__ms{height:10px;background-position:-3446px 0}.iti__flag.iti__mt{height:14px;background-position:-3468px 0}.iti__flag.iti__mu{height:14px;background-position:-3490px 0}.iti__flag.iti__mv{height:14px;background-position:-3512px 0}.iti__flag.iti__mw{height:14px;background-position:-3534px 0}.iti__flag.iti__mx{height:12px;background-position:-3556px 0}.iti__flag.iti__my{height:10px;background-position:-3578px 0}.iti__flag.iti__mz{height:14px;background-position:-3600px 0}.iti__flag.iti__na{height:14px;background-position:-3622px 0}.iti__flag.iti__nc{height:10px;background-position:-3644px 0}.iti__flag.iti__ne{height:15px;background-position:-3666px 0}.iti__flag.iti__nf{height:10px;background-position:-3686px 0}.iti__flag.iti__ng{height:10px;background-position:-3708px 0}.iti__flag.iti__ni{height:12px;background-position:-3730px 0}.iti__flag.iti__nl{height:14px;background-position:-3752px 0}.iti__flag.iti__no{height:15px;background-position:-3774px 0}.iti__flag.iti__np{width:13px;height:15px;background-position:-3796px 0}.iti__flag.iti__nr{height:10px;background-position:-3811px 0}.iti__flag.iti__nu{height:10px;background-position:-3833px 0}.iti__flag.iti__nz{height:10px;background-position:-3855px 0}.iti__flag.iti__om{height:10px;background-position:-3877px 0}.iti__flag.iti__pa{height:14px;background-position:-3899px 0}.iti__flag.iti__pe{height:14px;background-position:-3921px 0}.iti__flag.iti__pf{height:14px;background-position:-3943px 0}.iti__flag.iti__pg{height:15px;background-position:-3965px 0}.iti__flag.iti__ph{height:10px;background-position:-3987px 0}.iti__flag.iti__pk{height:14px;background-position:-4009px 0}.iti__flag.iti__pl{height:13px;background-position:-4031px 0}.iti__flag.iti__pm{height:14px;background-position:-4053px 0}.iti__flag.iti__pn{height:10px;background-position:-4075px 0}.iti__flag.iti__pr{height:14px;background-position:-4097px 0}.iti__flag.iti__ps{height:10px;background-position:-4119px 0}.iti__flag.iti__pt{height:14px;background-position:-4141px 0}.iti__flag.iti__pw{height:13px;background-position:-4163px 0}.iti__flag.iti__py{height:11px;background-position:-4185px 0}.iti__flag.iti__qa{height:8px;background-position:-4207px 0}.iti__flag.iti__re{height:14px;background-position:-4229px 0}.iti__flag.iti__ro{height:14px;background-position:-4251px 0}.iti__flag.iti__rs{height:14px;background-position:-4273px 0}.iti__flag.iti__ru{height:14px;background-position:-4295px 0}.iti__flag.iti__rw{height:14px;background-position:-4317px 0}.iti__flag.iti__sa{height:14px;background-position:-4339px 0}.iti__flag.iti__sb{height:10px;background-position:-4361px 0}.iti__flag.iti__sc{height:10px;background-position:-4383px 0}.iti__flag.iti__sd{height:10px;background-position:-4405px 0}.iti__flag.iti__se{height:13px;background-position:-4427px 0}.iti__flag.iti__sg{height:14px;background-position:-4449px 0}.iti__flag.iti__sh{height:10px;background-position:-4471px 0}.iti__flag.iti__si{height:10px;background-position:-4493px 0}.iti__flag.iti__sj{height:15px;background-position:-4515px 0}.iti__flag.iti__sk{height:14px;background-position:-4537px 0}.iti__flag.iti__sl{height:14px;background-position:-4559px 0}.iti__flag.iti__sm{height:15px;background-position:-4581px 0}.iti__flag.iti__sn{height:14px;background-position:-4603px 0}.iti__flag.iti__so{height:14px;background-position:-4625px 0}.iti__flag.iti__sr{height:14px;background-position:-4647px 0}.iti__flag.iti__ss{height:10px;background-position:-4669px 0}.iti__flag.iti__st{height:10px;background-position:-4691px 0}.iti__flag.iti__sv{height:12px;background-position:-4713px 0}.iti__flag.iti__sx{height:14px;background-position:-4735px 0}.iti__flag.iti__sy{height:14px;background-position:-4757px 0}.iti__flag.iti__sz{height:14px;background-position:-4779px 0}.iti__flag.iti__ta{height:10px;background-position:-4801px 0}.iti__flag.iti__tc{height:10px;background-position:-4823px 0}.iti__flag.iti__td{height:14px;background-position:-4845px 0}.iti__flag.iti__tf{height:14px;background-position:-4867px 0}.iti__flag.iti__tg{height:13px;background-position:-4889px 0}.iti__flag.iti__th{height:14px;background-position:-4911px 0}.iti__flag.iti__tj{height:10px;background-position:-4933px 0}.iti__flag.iti__tk{height:10px;background-position:-4955px 0}.iti__flag.iti__tl{height:10px;background-position:-4977px 0}.iti__flag.iti__tm{height:14px;background-position:-4999px 0}.iti__flag.iti__tn{height:14px;background-position:-5021px 0}.iti__flag.iti__to{height:10px;background-position:-5043px 0}.iti__flag.iti__tr{height:14px;background-position:-5065px 0}.iti__flag.iti__tt{height:12px;background-position:-5087px 0}.iti__flag.iti__tv{height:10px;background-position:-5109px 0}.iti__flag.iti__tw{height:14px;background-position:-5131px 0}.iti__flag.iti__tz{height:14px;background-position:-5153px 0}.iti__flag.iti__ua{height:14px;background-position:-5175px 0}.iti__flag.iti__ug{height:14px;background-position:-5197px 0}.iti__flag.iti__um{height:11px;background-position:-5219px 0}.iti__flag.iti__un{height:14px;background-position:-5241px 0}.iti__flag.iti__us{height:11px;background-position:-5263px 0}.iti__flag.iti__uy{height:14px;background-position:-5285px 0}.iti__flag.iti__uz{height:10px;background-position:-5307px 0}.iti__flag.iti__va{width:15px;height:15px;background-position:-5329px 0}.iti__flag.iti__vc{height:14px;background-position:-5346px 0}.iti__flag.iti__ve{height:14px;background-position:-5368px 0}.iti__flag.iti__vg{height:10px;background-position:-5390px 0}.iti__flag.iti__vi{height:14px;background-position:-5412px 0}.iti__flag.iti__vn{height:14px;background-position:-5434px 0}.iti__flag.iti__vu{height:12px;background-position:-5456px 0}.iti__flag.iti__wf{height:14px;background-position:-5478px 0}.iti__flag.iti__ws{height:10px;background-position:-5500px 0}.iti__flag.iti__xk{height:15px;background-position:-5522px 0}.iti__flag.iti__ye{height:14px;background-position:-5544px 0}.iti__flag.iti__yt{height:14px;background-position:-5566px 0}.iti__flag.iti__za{height:14px;background-position:-5588px 0}.iti__flag.iti__zm{height:14px;background-position:-5610px 0}.iti__flag.iti__zw{height:10px;background-position:-5632px 0}@media (-webkit-min-device-pixel-ratio:2),(min-resolution:192dpi){.iti__flag{background-size:5652px 15px;background-image:url("https://cdn.jsdelivr.net/gh/jockwe53/form@ab43687bce04f9b5783eb57952e261bef0b7a408/flags@2x.png")}}.register-form{padding:30px 20px;max-width:500px;font-size:18px;font-weight:400;margin:10px auto;border:1px solid rgba(255,255,255,.15);border-radius:10px;box-shadow:0 0 10px 0 rgba(0,0,0,.75)}.form-input-main{margin-bottom:10px}.form-input-main input,.form-input-main select{font-family:Inter,sans-serif;height:44px;width:100%;padding-left:10px;background:0 0;border-radius:5px;color:#000;font-weight:400;font-size:18px;border:1px solid #fff;box-shadow:0 0 3px 0 rgba(0,0,0,.75);margin:5px 0;outline:0}.form-input-main select{margin:0;width:100%}.form-input-main input::placeholder,.form-input-main select::placeholder{color:rgba(0,0,0,.87)}button[name=submitBtn]{width:100%;background:#4caf50;border-radius:71px;font-family:"IBM Plex Sans";font-style:normal;font-size:19px;line-height:100%;color:#fff;border:none;margin:20px auto;text-align:center;display:flex;justify-content:center;align-items:center;box-shadow:0 0 10px 0 rgba(0,0,0,.75);font-weight:700;padding:15px}.form-footer-text,.form-header-text{color:#fff;font-size:14px;text-align:center}.form-header-text{margin-bottom:20px}.form-footer-text{margin-top:20px}.form-input-main label[for=nationality]{width:100%;display:flex;flex-direction:column;align-items:flex-start;gap:10px;color:#fff}.form-input-main label[for=policy2],.form-input-main label[for=policy]{display:flex;align-items:flex-start;gap:5px;font-size:14px;color:#fff}.form-input-main label[for=age2],.form-input-main label[for=age]{font-size:14px;display:flex;gap:10px;flex-direction:column-reverse;align-items:flex-start;color:#fff}.form-input-main input[name=policy2],.form-input-main input[name=policy]{width:20px;height:20px;padding:0;margin:0}.iti--allow-dropdown input,.iti--allow-dropdown input[type=tel],.iti--allow-dropdown input[type=text],.iti--separate-dial-code input,.iti--separate-dial-code input[type=tel],.iti--separate-dial-code input[type=text]{width:100%;padding-left:105px!important}.iti{width:100%!important}.form-input option,.iti__country{color:#000!important}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}input[type=number]{-moz-appearance:textfield}@media screen and (max-width:768px){button[name=submitBtn]{width:100%}}.valid{background-color:rgba(0,255,0,.6)!important;color:#fff}.invalid{background-color:rgba(255,0,0,.6)!important;color:#fff}.iti__arrow,.iti__selected-dial-code{color:#000!important;border-top-color:#000!important}.info-box{display:flex;flex-direction:column;font-size:20px;margin:20px 0}.info-box input{margin-right:15px}.info-box span{display:inline-block;margin-bottom:15px}',
    Hr = document.querySelectorAll(".form"),
    He,
    Kr = async () => {
        try {
            let t = await fetch("https://ipapi.co/json"),
                { country_code: e } = await t.json();
            return e;
        } catch (t) {
            console.error(t);
        }
    };
function zr(t) {
    let e = t.querySelector(".phone"),
        i = t.querySelector(".phone-error"),
        r = t.querySelector('input[name="firstName"]'),
        d = t.querySelector('input[name="lastName"]'),
        l = t.querySelector('input[name="email"]'),
        $ = t.querySelector(".first-name-error"),
        f = t.querySelector(".last-name-error"),
        h = t.querySelector(".email-error"),
        _ = t.querySelector(".input-block-first-name"),
        v = t.querySelector(".input-block-last-name"),
        I = t.querySelector(".input-block-email"),
        w = t.querySelector(".input-block-phone"),
        S = {
            email: { focus: !0, blur: !1 },
            phone: { focus: !0, blur: !1 },
            firstName: { focus: !0, blur: !1 },
            lastName: { focus: !0, blur: !1 },
        },
        F = (c) => {
            let { focus: b, blur: k } = S[c];
            return b && k;
        };
    function x(c, b, k, T, R) {
        let X = F(k);
        b && X
            ? ((c.innerText = b),
                (c.style.display = "block"),
                T.classList.add("invalid"),
                R.classList.add("error"),
                T.classList.remove("valid"))
            : b
                ? ((c.innerText = b), (c.style.display = "none"))
                : (R.classList.remove("error"),
                    (c.innerText = ""),
                    (c.style = "display: none"));
    }
    let s = (0, je.default)(e, {
        utilsScript:
            "https://cdn.jsdelivr.net/npm/intl-tel-input@19.2.15/build/js/utils.js",
        initialCountry: He,
        separateDialCode: true,
        hiddenInput: function (c) {
            return "phone_full";
        },
    }),
        n = (c, b) => {
            var T;
            let k = ct(c, b);
            return (T = k == null ? void 0 : k.isValid()) != null ? T : !1;
        };
    function o(c) {
        switch (c) {
            case 1:
                return "invalid country code";
            case 2:
                return "phone number too short";
            case 3:
                return "phone number too long";
            case 4:
                return "local phone not accepted";
            case 5:
                return "invalid phone length";
            default:
                return "phone number is invalid";
        }
    }
    function a(c, b, k, T, R) {
        let X = c.target.value,
            { isValid: gt, errorMessage: Y } = b(X);
        if (!gt) {
            x(R, Y != null ? Y : "invalid value", k, c.target, T);
            return;
        }
        F(k) &&
            (c.target.classList.add("valid"), c.target.classList.remove("invalid")),
            x(R, null, k, c.target, T);
    }
    let u = (c) => {
        let b = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        var k = /\d/;
        return c.length < 2
            ? {
                isValid: !1,
                errorMessage: "invalid first name",
            }
            : b.test(c)
                ? {
                    isValid: !1,
                    errorMessage: "invalid last name",
                }
                : k.test(c)
                    ? {
                        isValid: !1,
                        errorMessage: "invalid first name",
                    }
                    : c != null && c.length
                        ? { isValid: !0, errorMessage: null }
                        : { isValid: !1, errorMessage: "this field required" };
    },
        p = (c) => {
            let b = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
            var k = /\d/;
            return c.length < 2
                ? {
                    isValid: !1,
                    errorMessage: "invalid last name",
                }
                : b.test(c)
                    ? {
                        isValid: !1,
                        errorMessage: "invalid last name",
                    }
                    : k.test(c)
                        ? {
                            isValid: !1,
                            errorMessage: "invalid last name",
                        }
                        : c != null && c.length
                            ? { isValid: !0, errorMessage: null }
                            : { isValid: !1, errorMessage: "this field required" };
        },
        g = (c) => {
            if (!(c != null && c.length))
                return { isValid: !1, errorMessage: "this field required" };
            let b = mt(c);
            return { isValid: b, errorMessage: b ? null : "invalid email" };
        },
        m = () => {
            let c = s.getNumber();
            if (!(c != null && c.length))
                return { isValid: !1, errorMessage: "this field required" };
            let b = s.getValidationError();
            if (b) return { isValid: !1, errorMessage: o(b) };
            let k = s.getSelectedCountryData().iso2.toUpperCase();
            return n(c, k)
                ? { isValid: !0, errorMessage: null }
                : { isValid: !1, errorMessage: "invalid phone number" };
        },
        C = (c) => a(c, u, "firstName", _, $),
        A = (c) => a(c, p, "lastName", v, f),
        M = (c) => a(c, g, "email", I, h),
        L = (c) => a(c, m, "phone", w, i);
    function U(c, b) {
        (S[c] = { focus: !0, blur: !0 }), b();
    }
    function ht(c) {
        return U("firstName", () => C(c));
    }
    function Ke(c) {
        return U("lastName", () => A(c));
    }
    function ze(c) {
        return U("email", () => M(c));
    }
    function We(c) {
        return U("phone", () => L(c));
    }
    let qe = (...c) => c.every((b) => b === !0);
    function Xe(c) {
        if (isFormSubmited) {
            return;
        }

        let b = r.value,
            k = d.value,
            T = l.value,
            { isValid: R } = u(b),
            { isValid: X } = p(k),
            { isValid: gt } = g(T),
            { isValid: Y } = m(),
            Jt = qe(R, X, gt, Y);

        if (!Y || !gt || !X || !R) {
            c.preventDefault();
            c.stopPropagation();
            return;
        }

        isFormSubmited = true;

        const loaderContainer = document.createElement('div');

        loaderContainer.style = `width: 100vw; height: 100vh; position: fixed; top: 0; left: 0; display: flex; justify-content: center; align-items: center; z-index: 9999; backdrop-filter: brightness(40%);`

        const svgNamespace = "http://www.w3.org/2000/svg";


        const svg = document.createElementNS(svgNamespace, "svg");
        svg.setAttribute("xmlns", svgNamespace);
        svg.setAttribute("viewBox", "0 0 200 200");
        svg.setAttribute('width', "100");

        const createCircle = (cx, delay) => {
            const circle = document.createElementNS(svgNamespace, "circle");
            circle.setAttribute("fill", "#FFF");
            circle.setAttribute("stroke", "#FFF");
            circle.setAttribute("stroke-width", "15");
            circle.setAttribute("r", "15");
            circle.setAttribute("cx", cx);
            circle.setAttribute("cy", "65");

            const animate = document.createElementNS(svgNamespace, "animate");
            animate.setAttribute("attributeName", "cy");
            animate.setAttribute("calcMode", "spline");
            animate.setAttribute("dur", "2s");
            animate.setAttribute("values", "65;135;65;");
            animate.setAttribute("keySplines", ".5 0 .5 1;.5 0 .5 1");
            animate.setAttribute("repeatCount", "indefinite");
            animate.setAttribute("begin", delay);

            circle.appendChild(animate);
            return circle;
        };

        svg.appendChild(createCircle("40", "-.4s"));
        svg.appendChild(createCircle("100", "-.2s"));
        svg.appendChild(createCircle("160", "0s"));

        svg.width = '100';

        loaderContainer.appendChild(svg);

        document.body.appendChild(loaderContainer);
        document.body.style = 'overflow: hidden;'
        function blockScroll(event) {
            event.preventDefault();
            event.stopPropagation();
        }

        window.addEventListener('scroll', blockScroll, { passive: false });
        window.addEventListener('wheel', blockScroll, { passive: false });
        window.addEventListener('touchmove', blockScroll, { passive: false });

        (e.value = s.getNumber().replace("+", "")),
            Jt || (c.preventDefault(), c.stopPropagation());
    }
    function Ye() {
        l.addEventListener("input", M),
            l.addEventListener("blur", ze),
            e.addEventListener("blur", We),
            e.addEventListener("input", L),
            r.addEventListener("input", C),
            r.addEventListener("blur", ht),
            d.addEventListener("input", A),
            d.addEventListener("blur", Ke);
        let c = document.createElement("style");
        (c.innerText = jr),
            document.querySelector("head").appendChild(c),
            t.addEventListener("submit", Xe);
    }
    Ye();
}
(async function () {
    He = await Kr();
    for (let e of Hr) zr(e);
})();
