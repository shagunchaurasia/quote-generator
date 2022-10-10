"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
//Get Quotes from api
// https://type.fit/api/quotes
var apiQuotes;
var quoteContainer = document.getElementById("quote-container");
var quoteText = document.getElementById("quote");
var authorText = document.getElementById("author");
var twitterButton = document.getElementById("twitter");
var newQuoteButton = document.getElementById("new-quote");
var loader = document.getElementById("loader");
function newQuote() {
    loading();
    var randomNumber = Math.floor(Math.random() * apiQuotes.length);
    var quote = apiQuotes[randomNumber];
    //Check quote length to determine styling
    if (quote.text.length > 50) {
        quoteText === null || quoteText === void 0 ? void 0 : quoteText.classList.add("long-quote");
    }
    else {
        quoteText === null || quoteText === void 0 ? void 0 : quoteText.classList.remove("long-quote");
    }
    if (quoteText != null) {
        quoteText.textContent = quote.text;
    }
    if (authorText != null) {
        authorText.textContent = quote.author || "Anonymous";
    }
    complete();
}
function getQuotes() {
    return __awaiter(this, void 0, void 0, function () {
        var apiUrl, response, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    loading();
                    apiUrl = "https://type.fit/api/quotes";
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, fetch(apiUrl)];
                case 2:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 3:
                    apiQuotes = _a.sent();
                    newQuote();
                    return [3 /*break*/, 5];
                case 4:
                    error_1 = _a.sent();
                    alert(error_1);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
//Post to twitter
function tweetQuote() {
    var twitterUrl = "https://twitter.com/intent/tweet?text=".concat(quoteText === null || quoteText === void 0 ? void 0 : quoteText.textContent, " - ").concat(authorText === null || authorText === void 0 ? void 0 : authorText.textContent);
    window.open(twitterUrl, "_blank");
}
function loading() {
    if (loader != null && quoteContainer != null) {
        loader.hidden = false;
        quoteContainer.hidden = true;
    }
}
function complete() {
    if (loader != null && quoteContainer != null) {
        quoteContainer.hidden = false;
        loader.hidden = true;
    }
}
//Onload functionality
getQuotes();
newQuoteButton === null || newQuoteButton === void 0 ? void 0 : newQuoteButton.addEventListener("click", newQuote);
twitterButton === null || twitterButton === void 0 ? void 0 : twitterButton.addEventListener("click", tweetQuote);
loading();
//# sourceMappingURL=index.js.map