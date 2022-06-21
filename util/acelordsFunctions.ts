var numeral = require("numeral");
var pluralize = require("pluralize");
import dayjs from "dayjs";
var relativeTime = require("dayjs/plugin/relativeTime");
dayjs.extend(relativeTime);

const MyFunctions = {
  /**
   * check if the response status code is an unauthenticated response
   * @param {number} status response status code
   * @returns boolean is response is unauthenticated
   */
  isUnauthenticatedResponse: (status: number): boolean => {
    return status == 401;
  },

  numberFormat: (value: number | null): string => {
    if (!value || isNaN(value)) return "";
    return numeral(value).format("0,0.00"); // becomes 1,000.00 | displaying other groupings/separators is possible, look at the docs http://numeraljs.com/
  },

  numberFormatInt: (value: number | null): string => {
    if (!value || isNaN(value)) return "";
    return numeral(value).format("0,0"); // becomes 1,000 | displaying other groupings/separators is possible, look at the docs http://numeraljs.com/
  },

  ucwords: (value: string | null): string => {
    if (!value) return "";
    value = value.toString();
    return `${value.substr(0, 1).toUpperCase()}${value.slice(1)}`;
  },

  isEmpty: (value: string | null): boolean => {
    if (!value) return true;
    return value.length < 1;
  },

  wordCount: (s: string | null): number => {
    if (!s) return 0;
    s = s.replace(/<\/?[^>]+(>|$)/g, " "); // strip tags
    s = s.replace(/[.]{2,}/gi, " "); // 2 or more fullstops to 1
    s = s.replace(/[ ]{2,}/gi, " "); // 2 or more space to 1
    s = s.replace(/(^\s*)|(\s*$)/gi, ""); // exclude  start and end white-space
    s = s.replace(/\n /, " "); // exclude newline with a start spacing
    return s.split(" ").filter(function (str) {
      return str != "";
    }).length;
  },

  numberAbbreviate: (value) => {
    const number = value;
    const SI_POSTFIXES = ["", "k", "M", "G", "T", "P", "E"];

    // what tier? (determines SI prefix)
    var tier = (Math.log10(Math.abs(number)) / 3) | 0;

    // if zero, we don't need a prefix
    if (tier == 0) return number;

    // get postfix and determine scale
    var postfix = SI_POSTFIXES[tier];
    var scale = Math.pow(10, tier * 3);

    // scale the number
    var scaled = number / scale;

    // format number and add postfix as suffix
    var formatted = scaled.toFixed(1) + "";

    // remove '.0' case
    if (/\.0$/.test(formatted)) {
      formatted = formatted.substr(0, formatted.length - 2);
    }

    return formatted + postfix;
  },

  capitalize: (value: string | null): string => {
    if (!value) return "";
    return value.replace(/(?:^|\s)\S/g, function (a) {
      return a.toUpperCase();
    });
  },

  strtoupper: (value: string | null): string => {
    if (!value) return "";
    return value.toString().toUpperCase();
  },

  strtolower: (value: string | null): string => {
    if (!value) return "";
    return value.toString().toLowerCase();
  },

  acronym: (value: string | null): string => {
    if (!value) return "";
    var matches = value.match(/\b(\w)/g); // ['J','S','O','N']
    return matches.join(""); // JSON
  },

  initials: (value: string | null): string => {
    if (!value) return "";
    var matches = value.match(/\b(\w)/g); // ['J','S','O','N']
    return matches.join(""); // JSON
  },

  plural: (value: string | null): string => {
    if (!value) return "";
    return pluralize.plural(value);
  },

  singular: (value: string | null): string => {
    if (!value) return "";
    return pluralize.singular(value);
  },

  pluralize: (value: string | null, counter: number): string => {
    if (!value) return "";

    if (counter < 2) {
      return pluralize.singular(value);
    }

    return pluralize.plural(value);
  },

  glimpse: (value: string | null): string => {
    if (!value) return "";
    return value.substring(0, 20);
  },

  twoDigits: (value: number | null): string => {
    if (!value) return "";

    if (value < 0) {
      return "00";
    }

    if (value.toString().length <= 1) {
      return `0${value}`;
    }

    return value.toString();
  },

  stripHtml: (value: string | null): string => {
    if (!value) return "";
    // return value.replace(/<\/?[^>]+>/ig, " ");
    return value.replace(/<\/?[^>]+(>|$)/g, "");
  },

  /**
   * yourString => Your String
   */
  camelCaseToSentenceCase: (value: string | null): string => {
    if (!value) return "";
    value = value.replace(/([A-Z])/g, " $1");
    return value.charAt(0).toUpperCase() + value.slice(1); // capitalize the first letter - as an example.
  },

  /**
   * convert snake case to sentence case, capitalizing all words
   * eg 'your_string' => 'Your string'
   */
  snakeCaseToSentenceCase: (value: string | null): string => {
    if (!value) return "";
    value = value.replace(/(_)/g, " ");
    value = value.replace(/([A-Z])/g, " $1");
    return value.charAt(0).toUpperCase() + value.slice(1); // capitalize the first letter - as an example.
  },

  /**
   * convert snake case to sentence case, capitalizing all words
   * eg 'your_string' => 'Your String'
   */
  snakeCaseToSentenceCaseCapitalizeWords: (value: string | null): string => {
    if (!value) return "";
    value = value.replace(/(_)/g, " ");
    return value.replace(/\b\w/g, function (l) {
      return l.toUpperCase();
    });
  },

  /**
   * convert snake case to sentence case, capitalizing all words
   * eg 'yourString' => 'Your String'
   */
  camelCaseToSentenceCaseCapitalizeWords: (value: string | null): string => {
    if (!value) return "";
    value = value.replace(/([A-Z])/g, " $1");
    return value.replace(/\b\w/g, function (l) {
      return l.toUpperCase();
    });
  },

  /**
   * convert kebab case to sentence case, capitalizing all words
   * eg 'your-string' => 'Your String'
   */
  kebabCaseToSentenceCaseCapitalizeWords: (value: string | null): string => {
    if (!value) return "";
    value = value.replace(/-([a-z])/g, function (g) {
      return g[1].toUpperCase();
    });
    value = value.replace(/([A-Z])/g, " $1");
    return value.replace(/\b\w/g, function (l) {
      return l.toUpperCase();
    });
  },

  /**
   * 'your-string' => 'YourString'
   */
  kebabCaseToPascalCase: (value: string | null): string => {
    if (!value) return "";
    value = value.replace(/-([a-z])/g, function (g) {
      return g[1].toUpperCase();
    });
    value = value.replace(/([A-Z])/g, "$1");
    return value.replace(/\b\w/g, function (l) {
      return l.toUpperCase();
    });
  },

  kebabCase: (value: string | null): string => {
    if (!value) return "";

    return value
      .replace(/([a-z])([A-Z])/g, "$1-$2") // get all lowercase letters that are near to uppercase ones
      .replace(/[\s_]+/g, "-") // replace all spaces and low dash
      .toLowerCase();
  },

  /**
   * slugify a url
   * <input type="text" v-model="name"/>
   * <input type="text" value="{{ $acelords.slugify(data.name) }}" />
   * <pre>{{ $acelords.slugify(data) }}</pre>
   *
   * or call the filter inside a method too!
   * typedName(value){
   *     if(value) {
   *         this.department.slug = this.$acelords.slugify(value);
   *      }
   *  } */
  slugify: (value: string | null): string => {
    if (!value) return "";

    value = value.replace(/^\s+|\s+$/g, ""); // trim
    value = value.toLowerCase();

    // remove accents, swap ñ for n, etc
    var from = "ãàáäâẽèéëêìíïîõòóöôùúüûñç·/_,:;";
    var to = "aaaaaeeeeeiiiiooooouuuunc------";
    for (var i = 0, l = from.length; i < l; i++) {
      value = value.replace(new RegExp(from.charAt(i), "g"), to.charAt(i));
    }

    value = value
      .replace(/[^a-z0-9 -]/g, "") // remove invalid chars
      .replace(/\s+/g, "-") // collapse whitespace and replace by -
      .replace(/-+/g, "-"); // collapse dashes

    return value;
  },

  /**
   * @param length
   * @returns {string}
   * console.log(random()); // JgKGQEUx
   * console.log(random(12)); // ttwbeshkYzaX
   * console.log(random(20)); // zZN7uH9pPjhJf30QNus5
   */
  randomString: (length: number = 8): string => {
    // Declare all characters
    let chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    // Pick characers randomly
    let str = "";
    for (let i = 0; i < length; i++) {
      str += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    return str;
  },

  /**
   * @param length
   * @returns {string}
   * console.log(random()); // bb325d9f
   * console.log(random(6)); // e51d83
   * console.log(random(10)); // e84c416cc7
   * console.log(random(14)); // ee16dfc68e361
   */
  randomString2: (length: number = 8): string => {
    return Math.random().toString(16).substr(2, length);
  },

  /**
   * @param length
   * @returns {int}
   * 60502138
   */
  randomNumber: (length: number = 8): number => {
    return parseInt(Math.random().toString().substr(2, 8));
  },

  /**
   * Returns a random number between min (inclusive) and max (exclusive)
   */
  getRandomArbitrary: (min: number, max: number): number => {
    return Math.random() * (max - min) + min;
  },

  /**
   * Returns a random integer between min (inclusive) and max (inclusive).
   * The value is no lower than min (or the next integer greater than min
   * if min isn't an integer) and no greater than max (or the next integer
   * lower than max if max isn't an integer).
   * Using Math.round() will give you a non-uniform distribution!
   */
  getRandomInt: (min: number, max: number): number => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },

  /**
   * format errors received from laravel backend
   * @param {*} errors
   * @returns array
   */
  formatErrors: (errors: Array<string>): Array<string> => {
    let err = [];

    for (let error in errors) {
      err.push(errors[error][0]);
    }
    return err;
  },

  // date => 2 days ago
  fromNow: (date: string | null): string => {
    if (!date) return "";
    return dayjs(date).fromNow(); // { addSuffix: true }
  },

  // date => 22nd Jun 2021, 2:00 pm
  // https://day.js.org/docs/en/display/format
  dateFormat: (
    date: string | null,
    dateFormat = "MMM D, YYYY h:mm A"
  ): string => {
    if (!date) return "";
    return dayjs(date).format(dateFormat);
  },

  replaceItemAtIndex: (arr: Array<any>, index: number, newValue: any) => {
    return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
  },

  removeItemAtIndex: (arr: Array<any>, index: number) => {
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
  },
};

// apply multiple filters
const filters = (val, filters) => {
  if (Array.isArray(filters)) {
    filters.forEach((f) => {
      val = MyFunctions[f](val);
    });

    return val;
  }

  return MyFunctions[filters](val);
};

const acelordsFunctions = {
  ...MyFunctions,
  filters,
};

export default acelordsFunctions;
