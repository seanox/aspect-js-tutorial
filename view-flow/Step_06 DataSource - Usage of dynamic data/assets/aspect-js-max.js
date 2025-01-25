/**
 * LIZENZBEDINGUNGEN - Seanox Software Solutions ist ein Open-Source-Projekt,
 * im Folgenden Seanox Software Solutions oder kurz Seanox genannt.
 * Diese Software unterliegt der Version 2 der Apache License.
 *
 * Seanox aspect-js, fullstack for single page applications
 * Copyright (C) 2025 Seanox Software Solutions
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 *
 *
 *     DESCRIPTION
 *     ----
 * General extension of the JavaScript API.
 */
"use strict";

/**
 * Compliant takes over the task that the existing JavaScript API can be
 * manipulated in a controlled way. Controlled means that errors occur when
 * trying to overwrite existing objects and functions. Originally, the mechanism
 * was removed after loading the page, but the feature has proven to be
 * convenient for other modules and therefore remains.
 *
 * In the code, the method is used in an unconventional form.
 *
 *     compliant("Composite");
 *     compliant(null, window.Composite = {...});
 *     compliant("Object.prototype.ordinal");
 *     compliant(null, Object.prototype.ordinal = function() {...}
 *
 * This is only for the IDE so that syntax completion has a chance there. This
 * syntax will be simplified and corrected in the build process for the
 * releases.
 *
 * @param {string|null} context Context of the object or function to manipulate.
 *     If null, only the payload is returned.
 * @param {*} payload Payload to assign to the context.
 * @returns {*} Assigned payload.
 * @throws {Error} If the compliant function or context is already exists.
 */
function _slicedToArray(r, e) {
	return (
		_arrayWithHoles(r) ||
		_iterableToArrayLimit(r, e) ||
		_unsupportedIterableToArray(r, e) ||
		_nonIterableRest()
	);
}
function _nonIterableRest() {
	throw new TypeError(
		"Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
	);
}
function _iterableToArrayLimit(r, l) {
	var t =
		null == r
			? null
			: ("undefined" != typeof Symbol && r[Symbol.iterator]) || r["@@iterator"];
	if (null != t) {
		var e,
			n,
			i,
			u,
			a = [],
			f = !0,
			o = !1;
		try {
			if (((i = (t = t.call(r)).next), 0 === l)) {
				if (Object(t) !== t) return;
				f = !1;
			} else
				for (
					;
					!(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l);
					f = !0
				);
		} catch (r) {
			(o = !0), (n = r);
		} finally {
			try {
				if (!f && null != t["return"] && ((u = t["return"]()), Object(u) !== u))
					return;
			} finally {
				if (o) throw n;
			}
		}
		return a;
	}
}
function _arrayWithHoles(r) {
	if (Array.isArray(r)) return r;
}
function _createForOfIteratorHelper(r, e) {
	var t =
		("undefined" != typeof Symbol && r[Symbol.iterator]) || r["@@iterator"];
	if (!t) {
		if (
			Array.isArray(r) ||
			(t = _unsupportedIterableToArray(r)) ||
			(e && r && "number" == typeof r.length)
		) {
			t && (r = t);
			var _n = 0,
				F = function F() {};
			return {
				s: F,
				n: function n() {
					return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] };
				},
				e: function e(r) {
					throw r;
				},
				f: F,
			};
		}
		throw new TypeError(
			"Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
		);
	}
	var o,
		a = !0,
		u = !1;
	return {
		s: function s() {
			t = t.call(r);
		},
		n: function n() {
			var r = t.next();
			return (a = r.done), r;
		},
		e: function e(r) {
			(u = !0), (o = r);
		},
		f: function f() {
			try {
				a || null == t["return"] || t["return"]();
			} finally {
				if (u) throw o;
			}
		},
	};
}
function _typeof(o) {
	"@babel/helpers - typeof";
	return (
		(_typeof =
			"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
				? function (o) {
						return typeof o;
					}
				: function (o) {
						return o &&
							"function" == typeof Symbol &&
							o.constructor === Symbol &&
							o !== Symbol.prototype
							? "symbol"
							: typeof o;
					}),
		_typeof(o)
	);
}
function _toConsumableArray(r) {
	return (
		_arrayWithoutHoles(r) ||
		_iterableToArray(r) ||
		_unsupportedIterableToArray(r) ||
		_nonIterableSpread()
	);
}
function _nonIterableSpread() {
	throw new TypeError(
		"Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
	);
}
function _unsupportedIterableToArray(r, a) {
	if (r) {
		if ("string" == typeof r) return _arrayLikeToArray(r, a);
		var t = {}.toString.call(r).slice(8, -1);
		return (
			"Object" === t && r.constructor && (t = r.constructor.name),
			"Map" === t || "Set" === t
				? Array.from(r)
				: "Arguments" === t ||
					  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
					? _arrayLikeToArray(r, a)
					: void 0
		);
	}
}
function _iterableToArray(r) {
	if (
		("undefined" != typeof Symbol && null != r[Symbol.iterator]) ||
		null != r["@@iterator"]
	)
		return Array.from(r);
}
function _arrayWithoutHoles(r) {
	if (Array.isArray(r)) return _arrayLikeToArray(r);
}
function _arrayLikeToArray(r, a) {
	(null == a || a > r.length) && (a = r.length);
	for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
	return n;
}
if (window.compliant !== undefined)
	throw new Error("JavaScript incompatibility detected for: compliant");
window.compliant = function (context, payload) {
	if (context === null || context === undefined) return payload;
	if (new Function("return typeof ".concat(context))() !== "undefined")
		throw new Error("JavaScript incompatibility detected for: " + context);
	if (context.match(/^[a-zA-Z_$][a-zA-Z0-9_$]*$/))
		context = 'window["'.concat(context, '"]');
	return eval("".concat(context, " = payload"));
};

/**
 * Comparable to packages in other programming languages, namespaces can be used
 * for hierarchical structuring of components, resources and business logic.
 * Although packages are not a feature of JavaScript, they can be mapped at the
 * object level by concatenating objects into an object tree. Here, each level
 * of the object tree forms a namespace, which can also be considered a domain.
 *
 * As is typical for the identifiers of objects, namespaces also use letters,
 * numbers and underscores separated by a dot. As a special feature, arrays are
 * also supported. If a layer in the namespace uses an integer, this layer is
 * used as an array.
 */
(function () {
	compliant("Namespace", {
		/** Pattern for the namespace separator */
		get PATTERN_NAMESPACE_SEPARATOR() {
			return /\./;
		},
		/** Pattern for a valid namespace level at the beginning */
		get PATTERN_NAMESPACE_LEVEL_START() {
			return /^[_a-z\$][\w\$]*$/i;
		},
		/** Pattern for a valid namespace level */
		get PATTERN_NAMESPACE_LEVEL() {
			return /^[\w\$]+$/;
		},
		/**
		 * Creates a namespace to the passed object, strings and numbers, if the
		 * namespace contains arrays and the numbers can be used as index.
		 * Levels of the namespace levels are separated by a dot. Levels can as
		 * fragments also contain dots. Without arguments the global namespace
		 * window is returned.
		 *
		 * The method has the following various signatures:
		 *     Namespace.use();
		 *     Namespace.use(string);
		 *     Namespace.use(string, ...string|number);
		 *     Namespace.use(object);
		 *     Namespace.use(object, ...string|number);
		 *
		 * @param {...(string|number|object)} levels Levels of the namespace
		 * @returns {object} The created or already existing object (level)
		 * @throws {Error} In case of invalid data types or syntax
		 */
		use: function use() {
			for (
				var _len = arguments.length, levels = new Array(_len), _key = 0;
				_key < _len;
				_key++
			) {
				levels[_key] = arguments[_key];
			}
			if (levels.length <= 0) return window;
			_filter.apply(void 0, _toConsumableArray(levels));
			var offset = levels.length;
			var namespace = null;
			if (levels.length > 0 && _typeof(levels[0]) === "object")
				namespace = levels.shift();
			offset -= levels.length;
			levels = levels.join(".");
			levels
				.split(Namespace.PATTERN_NAMESPACE_SEPARATOR)
				.forEach(function (level, index, array) {
					var pattern =
						index === 0 && namespace === null
							? Namespace.PATTERN_NAMESPACE_LEVEL_START
							: Namespace.PATTERN_NAMESPACE_LEVEL;
					if (!level.match(pattern))
						throw new Error(
							"Invalid namespace at level "
								.concat(index + 1)
								.concat(level && level.trim() ? ": " + level.trim() : ""),
						);

					// Composites use IDs which causes corresponding DOM objects
					// (Element) in the global namespace if there are no
					// corresponding data objects (models). Because namespaces are
					// based on data objects, if an element appears, we assume that
					// a data object does not exist and the recursive search is
					// aborted as unsuccessful.

					if (index === 0 && namespace === null) {
						namespace = _populate(namespace, level);
						if (namespace !== undefined && !(namespace instanceof Element))
							return;
						namespace = window;
					}
					var item = _populate(namespace, level);
					var type = _typeof(item);
					if (type !== "undefined" && type !== "object")
						throw new TypeError(
							"Invalid namespace type at level "
								.concat(index + 1 + offset, ": ")
								.concat(type),
						);
					if (item === undefined || item === null || item instanceof Element)
						if (index < array.length - 1 && array[index + 1].match(/^\d+$/))
							namespace[level] = [];
						else namespace[level] = {};
					namespace = _populate(namespace, level);
				});
			return namespace;
		},
		/**
		 * Creates a namespace with an initial value to the passed object,
		 * strings and numbers, if the namespace contains arrays and the numbers
		 * can be used as index. Levels of the namespace levels are separated by
		 * a dot. Levels can as fragments also contain dots. Without arguments,
		 * the global namespace window is used.
		 *
		 * The method has the following various signatures:
		 *     Namespace.create(string, value);
		 *     Namespace.create(string, ...string|number, value);
		 *     Namespace.create(object, value);
		 *     Namespace.create(object, ...string|number, value);
		 *
		 * @param {...(string|number|object)} levels Levels of the namespace
		 * @param {*} value Value to initialize/set
		 * @returns {object} The created or already existing object (level)
		 * @throws {Error} In case of invalid data types or syntax
		 */
		create: function create() {
			var _Namespace;
			for (
				var _len2 = arguments.length, levels = new Array(_len2), _key2 = 0;
				_key2 < _len2;
				_key2++
			) {
				levels[_key2] = arguments[_key2];
			}
			if (levels.length < 2)
				throw new Error(
					"Invalid namespace for creation: Namespace and/or value is missing",
				);
			var value = levels.pop();
			levels = _filter.apply(void 0, _toConsumableArray(levels));
			var level = levels.pop();
			var namespace = (_Namespace = Namespace).use.apply(
				_Namespace,
				_toConsumableArray(levels),
			);
			if (namespace === null) return null;
			namespace[level] = value;
			return _populate(namespace, level);
		},
		/**
		 * Resolves a namespace and returns the determined object(-level).
		 * If the namespace does not exist, undefined is returned.
		 *
		 * The method has the following various signatures:
		 *     Namespace.lookup();
		 *     Namespace.lookup(string);
		 *     Namespace.lookup(string, ...string|number);
		 *     Namespace.lookup(object);
		 *     Namespace.lookup(object, ...string|number);
		 *
		 * @param {...(string|number|object)} levels Levels of the namespace
		 * @returns {object|undefined} The determined object(-level)
		 * @throws {Error} In case of invalid data types or syntax
		 */
		lookup: function lookup() {
			for (
				var _len3 = arguments.length, levels = new Array(_len3), _key3 = 0;
				_key3 < _len3;
				_key3++
			) {
				levels[_key3] = arguments[_key3];
			}
			if (levels.length <= 0) return window;
			_filter.apply(void 0, _toConsumableArray(levels));
			var offset = levels.length;
			var namespace = null;
			if (levels.length > 0 && _typeof(levels[0]) === "object")
				namespace = levels.shift();
			offset -= levels.length;
			levels = levels.join(".");
			levels = levels.split(Namespace.PATTERN_NAMESPACE_SEPARATOR);
			for (var index = 0; index < levels.length; index++) {
				var level = levels[index];
				var pattern =
					index + offset === 0
						? Namespace.PATTERN_NAMESPACE_LEVEL_START
						: Namespace.PATTERN_NAMESPACE_LEVEL;
				if (!level.match(pattern))
					throw new Error(
						"Invalid namespace at level "
							.concat(index + 1 + offset)
							.concat(level && level.trim() ? ": " + level.trim() : ""),
					);

				// Composites use IDs which causes corresponding DOM objects
				// (Element) in the global namespace if there are no
				// corresponding data objects (models). Because namespaces are
				// based on data objects, if an element appears, we assume that
				// a data object does not exist and the recursive search is
				// aborted as unsuccessful.

				if (index === 0 && namespace === null) {
					namespace = _populate(namespace, level);
					if (namespace !== undefined) continue;
					namespace = window;
				}
				namespace = _populate(namespace, level);
				if (namespace === undefined || namespace === null) return namespace;
				if (namespace instanceof Element) return undefined;
			}
			return namespace;
		},
		/**
		 * Checks whether a namespace exists based on the passed object, strings
		 * and numbers, if the namespace contains arrays and the numbers can be
		 * used as index. Levels of the namespace chain are separated by a dot.
		 * Levels can also be fragments that contain dots. Without arguments the
		 * global namespace window is used.
		 *
		 * The method has the following various signatures:
		 *     Namespace.exists();
		 *     Namespace.exists(string);
		 *     Namespace.exists(string, ...string|number);
		 *     Namespace.exists(object);
		 *     Namespace.exists(object, ...string|number);
		 *
		 * @param {...(string|number|object)} levels Levels of the namespace
		 * @returns {boolean} True if the namespace exists
		 */
		exists: function exists() {
			var _Namespace2;
			if (arguments.length < 1) return false;
			return Object.usable(
				(_Namespace2 = Namespace).lookup.apply(_Namespace2, arguments),
			);
		},
	});
	var _filter = function _filter() {
		var chain = [];
		for (
			var _len4 = arguments.length, levels = new Array(_len4), _key4 = 0;
			_key4 < _len4;
			_key4++
		) {
			levels[_key4] = arguments[_key4];
		}
		levels.forEach(function (level, index) {
			if (
				index === 0 &&
				_typeof(level) !== "object" &&
				typeof level !== "string"
			)
				throw new TypeError(
					"Invalid namespace at level "
						.concat(index + 1, ": ")
						.concat(_typeof(level)),
				);
			if (index === 0 && level === null)
				throw new TypeError(
					"Invalid namespace at level ".concat(index + 1, ": null"),
				);
			if (index > 0 && typeof level !== "string" && typeof level !== "number")
				throw new TypeError(
					"Invalid namespace at level "
						.concat(index + 1, ": ")
						.concat(_typeof(level)),
				);
			level =
				typeof level === "string"
					? level.split(Namespace.PATTERN_NAMESPACE_SEPARATOR)
					: [level];
			chain.push.apply(chain, _toConsumableArray(level));
		});
		return chain;
	};
	var _populate = function _populate(namespace, level) {
		if (namespace && namespace !== window) return namespace[level];
		try {
			return eval(
				"typeof "
					.concat(level, ' !== "undefined" ? ')
					.concat(level, " : undefined"),
			);
		} catch (error) {
			if (error instanceof ReferenceError && namespace === window)
				return window[level];
			throw error;
		}
	};
})();

/**
 * Enhancement of the JavaScript API
 * Modifies the method to support node and nodes as NodeList and Array. If the
 * option exclusive is used, existing children will be removed first.
 * @param {(Node|NodeList|Array)} node Node(s) to be modified
 * @param {boolean} [exclusive=false] True, removes existing children
 */
(function () {
	var _appendChild = Element.prototype.appendChild;
	Element.prototype.appendChild = function (node, exclusive) {
		if (exclusive) this.innerHTML = "";
		if (node instanceof Node) return _appendChild.call(this, node);
		if (
			Array.isArray(node) ||
			node instanceof NodeList ||
			(Symbol && Symbol.iterator && node && _typeof(node[Symbol.iterator]))
		) {
			node = Array.from(node);
			for (var loop = 0; loop < node.length; loop++)
				_appendChild.call(this, node[loop]);
			return node;
		}
		return _appendChild.call(this, node);
	};
})();

/**
 * Enhancement of the JavaScript API
 * Adds a static function to create an alphanumeric unique (U)UID with fixed size.
 * The quality of the ID is dependent of the length.
 * @param {number} [size=16] Optional size of the unique ID
 * @returns {string} The generated alphanumeric unique ID
 */
compliant("Math.unique", function (size) {
	size = size || 16;
	if (size < 0) size = 16;
	var unique = "";
	for (var loop = 0; loop < size; loop++) {
		var random = Math.floor(Math.random() * Math.floor(26));
		if (Math.floor(Math.random() * Math.floor(26)) % 2 === 0)
			unique += String(random % 10);
		else unique += String.fromCharCode(65 + random);
	}
	return unique;
});

/**
 * Enhancement of the JavaScript API
 * Adds a static function to create a time based alphanumeric serial that is
 * chronologically sortable as text and contains the time and a counter if
 * serial are created at the same time.
 *  @returns {string} The generated time-based alphanumeric serial
 */
(function () {
	compliant("Math.serial", function () {
		return _serial.toString();
	});
	var _offset = -946684800000;
	var _serial = {
		timing: new Date().getTime() + _offset,
		number: 0,
		toString: function toString() {
			var timing = new Date().getTime() + _offset;
			this.number = this.timing === timing ? this.number + 1 : 0;
			this.timing = timing;
			var serial = this.timing.toString(36);
			var number = this.number.toString(36);
			return (
				serial.length.toString(36) +
				serial +
				number.length.toString(36) +
				number
			).toUpperCase();
		},
	};
})();

/**
 * Enhancement of the JavaScript API
 * Creates a literal pattern for the specified text. Metacharacters or escape
 * sequences in the text thus lose their meaning.
 * @param {string} text Text to be literalized
 * @returns {string|null} Literal pattern for the specified text, or null if the
 *     text is not usable
 */
compliant("RegExp.quote", function (text) {
	if (!Object.usable(text)) return null;
	return String(text).replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
});

/**
 * Enhancement of the JavaScript API
 * Adds a capitalize function to the String objects.
 * @returns {string} String with the first character capitalized
 */
compliant("String.prototype.capitalize", function () {
	if (this.length <= 0) return this;
	return this.charAt(0).toUpperCase() + this.slice(1);
});

/**
 * Enhancement of the JavaScript API
 * Adds an uncapitalize function to the String objects.
 * @returns {string} The string with the first character uncapitalized
 */
compliant("String.prototype.uncapitalize", function () {
	if (this.length <= 0) return this;
	return this.charAt(0).toLowerCase() + this.slice(1);
});

/**
 * Enhancement of the JavaScript API
 * Adds a function for encoding the string objects in hexadecimal code.
 * @returns {string} The hexadecimal encoded string
 */
compliant("String.prototype.encodeHex", function () {
	var result = "";
	for (var loop = 0; loop < this.length; loop++) {
		var digit = Number(this.charCodeAt(loop)).toString(16).toUpperCase();
		while (digit.length < 2) digit = "0" + digit;
		result += digit;
	}
	return "0x" + result;
});

/**
 * Enhancement of the JavaScript API
 * Adds a function for decoding hexadecimal code to the string objects.
 * @returns {string} The decoded string
 */
compliant("String.prototype.decodeHex", function () {
	var text = this;
	if (text.match(/^0x/)) text = text.substring(2);
	var result = "";
	for (var loop = 0; loop < text.length; loop += 2)
		result += String.fromCharCode(parseInt(text.substring(loop, 2), 16));
	return result;
});

/**
 * Enhancement of the JavaScript API
 * Adds a method for encoding Base64.
 * @returns {string} The Base64 encoded string.
 * @throws {Error} In case of a malformed character sequence.
 */
compliant("String.prototype.encodeBase64", function () {
	try {
		return btoa(
			encodeURIComponent(this).replace(
				/%([0-9A-F]{2})/g,
				function (match, code) {
					return String.fromCharCode("0x" + code);
				},
			),
		);
	} catch (error) {
		throw new Error("Malformed character sequence");
	}
});

/**
 * Enhancement of the JavaScript API
 * Adds a method for decoding Base64.
 * @returns {string} The decoded string.
 * @throws {Error} In case of a malformed character sequence
 */
compliant("String.prototype.decodeBase64", function () {
	try {
		return decodeURIComponent(
			atob(this)
				.split("")
				.map(function (code) {
					return "%" + ("00" + code.charCodeAt(0).toString(16)).slice(-2);
				})
				.join(""),
		);
	} catch (error) {
		throw new Error("Malformed character sequence");
	}
});

/**
 * Enhancement of the JavaScript API
 * Adds an HTML encode function to the String objects.
 * @returns {string} The HTML encoded string
 */
compliant("String.prototype.encodeHtml", function () {
	var element = document.createElement("div");
	element.textContent = this;
	return element.innerHTML;
});

/**
 * Enhancement of the JavaScript API
 * Adds a method for calculating a hash value.
 * @returns {string} The calculated hash value
 */
compliant("String.prototype.hashCode", function () {
	var hash = 0;
	var hops = 0;
	for (var loop = 0; loop < this.length; loop++) {
		var temp = 31 * hash + this.charCodeAt(loop);
		if (!Number.isSafeInteger(temp)) {
			hops++;
			hash = Number.MAX_SAFE_INTEGER - hash + this.charCodeAt(loop);
		} else hash = temp;
	}
	hash = Math.abs(hash).toString(36);
	hash = hash.length.toString(36) + hash;
	hash = (hash + hops.toString(36)).toUpperCase();
	return hash;
});

/**
 * Enhancement of the JavaScript API
 * Adds a decoding of slash sequences (control characters).
 * @returns {string} The decoded string with processed control characters
 */
compliant("String.prototype.unescape", function () {
	var text = this.replace(/\r/g, "\\r")
		.replace(/\n/g, "\\n")
		.replace(/^(["'])/, "\$1")
		.replace(/([^\\])((?:\\{2})*)(?=["'])/g, "$1$2\\");
	return eval('"'.concat(text, '"'));
});

/**
 * Enhancement of the JavaScript API
 * Adds a property to get the UID for the window instance.
 * @returns {string} The unique identifier (UID) for the window instance
 */
compliant("window.serial");
Object.defineProperty(window, "serial", {
	value: Math.serial(),
});

/**
 * Enhancement of the JavaScript API
 * Adds a property to get the context path. The context path is a part of the
 * request URI and can be compared with the current working directory.
 * @returns {string} The context path of the request URI.
 */
compliant("window.location.contextPath");
Object.defineProperty(window.location, "contextPath", {
	value: (function (location) {
		return location.substring(0, location.lastIndexOf("/")) + "/";
	})(window.location.pathname || "/"),
});

/**
 * Enhancement of the JavaScript API
 * Adds a method to combine paths to a new one. The result will always start
 * with a slash but ends without it.
 * @param {...string} paths Paths to be combined
 * @returns {string} The combined path.
 */
compliant("window.location.combine", function () {
	for (
		var _len5 = arguments.length, paths = new Array(_len5), _key5 = 0;
		_key5 < _len5;
		_key5++
	) {
		paths[_key5] = arguments[_key5];
	}
	return (
		"/" +
		paths
			.join("/")
			.replace(/[\/\\]+/g, "/")
			.replace(/(^\/+)|(\/+$)/g, "")
	);
});

/**
 * DataSource is a NoSQL approach to data storage based on XML data in
 * combination with multilingual data separation, optional aggregation and
 * transformation.
 * A combination of the approaches of a read only DBS and a CMS.
 *
 * Files are defined by locator.
 * A locator is a URL (xml://... or xslt://...) that is used absolute and
 * relative to the DataSource directory, but does not contain a locale
 * (language specification) in the path. The locale is determined automatically
 * for the language setting of the browser, or if this is not supported, the
 * standard from the locales.xml in the DataSource directory is used.
 *
 * DataSource is based on static data.
 * Therefore, the implementation uses a cache to minimize network access.
 *
 * The data is queried with XPath, the result can be concatenated and
 * aggregated and the result can be transformed with XSLT.
 */
("use strict");
(function () {
	/** Path of the DataSource for: data (sub-directory of work path) */
	var DATA = window.location.combine(window.location.contextPath, "/data");

	/**
	 * Pattern for a DataSource locator, based on the URL syntax but only
	 * the parts schema and path are used. A path segment begins with a word
	 * character _ a-z 0-9, optionally more word characters and additionally
	 * - can follow, but can not end with the - character. Paths are
	 * separated by the / character.
	 */
	var PATTERN_LOCATOR = /^(?:([a-z]+):\/+)(\/((\w+)|(\w+(\-+\w+)+)))+$/;

	/** Pattern to detect JavaScript elements */
	var PATTERN_JAVASCRIPT = /^\s*text\s*\/\s*javascript\s*$/i;

	/** Pattern to detect a word (_ 0-9 a-z A-Z -) */
	var PATTERN_WORD = /(^\w+$)|(^((\w+\-+(?=\w))+)\w*$)/;

	/** Constant for attribute type */
	var ATTRIBUTE_TYPE = "type";
	compliant("DataSource", {
		/** The currently used language. */
		get locale() {
			return DataSource.locales ? DataSource.locales.selection : null;
		},
		/**
		 * Changes the localization of the DataSource.
		 * Only locales from locales.xml can be used, other values cause an
		 * error.
		 * @param {string} locale Locale to be set
		 * @throws {TypeError} In case of invalid locale type
		 * @throws {Error} In case of missing DataSource data or locales
		 * @throws {Error} In case of invalid locales
		 */
		localize: function localize(locale) {
			if (!DataSource.data || !DataSource.locales)
				throw new Error("Locale not available");
			if (typeof locale !== "string")
				throw new TypeError("Invalid locale: " + _typeof(locale));
			locale = (locale || "").trim().toLowerCase();
			if (!locale || !DataSource.locales.includes(locale))
				throw new Error("Locale not available");
			DataSource.locales.selection = locale;
		},
		/**
     * Transforms an XMLDocument based on a passed stylesheet.
     * The data and the stylesheet can be passed as Locator, XMLDocument an
     * in mix. The result as a DocumentFragment. Optionally, a meta-object
     * or a map with parameters for the XSLTProcessor can be passed.
     * @param {string|XMLDocument} xml Locator or XMLDocument to be
     *     transformed
     * @param {string|XMLDocument} style Locator or XMLDocument stylesheet
     * @param {Object} [meta] Optional parameters for the XSLTProcessor
     * @returns {DocumentFragment} The transformation result as a
     *     DocumentFragment
     @throws {TypeError} In case of invalid xml document and/or stylesheet
     */
		transform: function transform(xml, style, meta) {
			if (typeof xml === "string" && xml.match(PATTERN_LOCATOR))
				xml = DataSource.fetch(xml);
			if (typeof style === "string" && style.match(PATTERN_LOCATOR))
				style = DataSource.fetch(style);
			if (!(xml instanceof XMLDocument))
				throw new TypeError("Invalid xml document");
			if (!(style instanceof XMLDocument))
				throw new TypeError("Invalid xml stylesheet");
			var processor = new XSLTProcessor();
			processor.importStylesheet(style);
			if (meta && _typeof(meta) === "object") {
				var set =
					typeof meta[Symbol.iterator] !== "function"
						? Object.entries(meta)
						: meta;
				var _iterator = _createForOfIteratorHelper(set),
					_step;
				try {
					for (_iterator.s(); !(_step = _iterator.n()).done; ) {
						var _step$value = _slicedToArray(_step.value, 2),
							key = _step$value[0],
							value = _step$value[1];
						if (typeof meta[key] !== "function")
							processor.setParameter(null, key, value);
					}
				} catch (err) {
					_iterator.e(err);
				} finally {
					_iterator.f();
				}
			}

			// Attribute escape converts text to HTML. Without, HTML tag symbols
			// < and > are masked and output as text.
			var escape = xml.evaluate(
				"string(/*/@escape)",
				xml,
				null,
				XPathResult.ANY_TYPE,
				null,
			).stringValue;
			escape = !!escape.match(/^yes|on|true|1$/i);

			// Workaround for some browsers, e.g. MS Edge, if they have problems
			// with !DOCTYPE + !ENTITY. Therefore the document is copied so that
			// the DOCTYPE declaration is omitted.
			var result = processor.transformToDocument(xml.clone());
			var nodes = result.querySelectorAll(escape ? "*" : "*[escape]");
			nodes.forEach(function (node) {
				if (
					escape ||
					(node.getAttribute("escape") || "on").match(/^yes|on|true|1$/i)
				) {
					var content = node.innerHTML;
					if (content.indexOf("<") < 0 && content.indexOf(">") < 0)
						node.innerHTML = node.textContent;
				}
				node.removeAttribute("escape");
			});

			// JavaScript are automatically changed to composite/javascript
			// during the import. Therefore, imported scripts are not executed
			// directly, but only by the renderer. This is important in
			// combination with ATTRIBUTE_CONDITION.
			nodes = result.querySelectorAll("script[type],script:not([type])");
			nodes.forEach(function (node) {
				if (
					!node.hasAttribute(ATTRIBUTE_TYPE) ||
					(node.getAttribute(ATTRIBUTE_TYPE) || "").match(PATTERN_JAVASCRIPT)
				)
					node.setAttribute("type", "composite/javascript");
			});
			nodes = result.childNodes;
			if (result.body) nodes = result.body.childNodes;
			else if (
				result.firstChild &&
				result.firstChild.nodeName.match(/^transformiix\b/i)
			)
				nodes = result.firstChild.childNodes;
			var fragment = document.createDocumentFragment();
			nodes = Array.from(nodes);
			for (var loop = 0; loop < nodes.length; loop++)
				fragment.appendChild(nodes[loop]);
			return fragment;
		},
		/**
		 * Fetch the data to a locator as XMLDocument. Optionally the data can
		 * be transformed via XSLT, for which a meta-object or map with
		 * parameters for the XSLTProcessor can be passed. When using the
		 * transformation, the return type changes to a DocumentFragment.
		 * @param {string} locator Locator to fetch data for.
		 * @param {string|boolean} transform Locator of the transformation
		 *     style. If boolean true, the style is derived from the locator
		 *     using the file extension xslt.
		 * @param {Object} [meta] Optional parameters for the XSLTProcessor.
		 * @returns {XMLDocument|DocumentFragment} The fetched data as an
		 *     XMLDocument or a DocumentFragment if transformation is used
		 * @throws {Error} In case of invalid arguments
		 */
		fetch: function fetch(locator, transform, meta) {
			if (typeof locator !== "string" || !locator.match(PATTERN_LOCATOR))
				throw new Error("Invalid locator: " + String(locator));
			var type = locator.match(PATTERN_LOCATOR)[1];
			var path = locator.match(PATTERN_LOCATOR)[2];
			if (arguments.length === 1) {
				var _data = DATA + "/" + DataSource.locale + "/" + path + "." + type;
				_data = _data.replace(/\/+/g, "/");
				var hash = _data.hashCode();
				if (_cache.hasOwnProperty(hash)) return _cache[hash];
				var _request = new XMLHttpRequest();
				_request.overrideMimeType("application/xslt+xml");
				_request.open("GET", _data, false);
				_request.send();
				if (_request.status !== 200)
					throw new Error(
						"HTTP status "
							.concat(_request.status, " for ")
							.concat(_request.responseURL),
					);
				_data = _request.responseXML;
				_cache[hash] = _data;
				return _data.clone();
			}
			if (!type.match(/^xml$/) && transform)
				throw new Error("Transformation is not supported for this locator");
			var data = DataSource.fetch(locator);
			if (!transform) return data.clone();
			var style = locator.replace(/(^((\w+\-+(?=\w))+)\w*)|(^\w+)/, "xslt");
			if (typeof transform !== "boolean") {
				style = transform;
				if (typeof style !== "string" || !style.match(PATTERN_LOCATOR))
					throw new Error("Invalid style: " + String(style));
			}
			return DataSource.transform(data, DataSource.fetch(style), meta);
		},
		/**
		 * Collects and concatenates multiple XML files in a new XMLDocument.
		 *
		 * The method has the following various signatures:
		 *     DataSource.collect(locator, ...);
		 *     DataSource.collect(collector, [locators]);
		 *
		 * @param {string} collector Name of the collector element in the
		 *     XMLDocument
		 * @param {Array|string} locators Array or VarArg with locators
		 * @returns {XMLDocument|null} The created XMLDocument, otherwise null
		 * @throws {TypeError} In case of invalid arguments, collector,
		 *     collection entry
		 */
		collect: function collect() {
			for (
				var _len6 = arguments.length, variants = new Array(_len6), _key6 = 0;
				_key6 < _len6;
				_key6++
			) {
				variants[_key6] = arguments[_key6];
			}
			if (variants.length <= 0) return null;
			var collection = [];
			var collector = "collection";
			if (
				variants.length === 2 &&
				typeof variants[0] === "string" &&
				Array.isArray(variants[1])
			) {
				if (!variants[0].match(PATTERN_WORD))
					throw new TypeError("Invalid collector");
				collector = variants[0];
				collection = Array.from(variants[1]);
			} else if (variants.length === 1 && Array.isArray(variants[0])) {
				collection = collection.concat(variants[0]);
			} else collection = Array.from(variants);
			var hash = collector.hashCode() + ":" + collection.join().hashCode();
			collection.forEach(function (entry) {
				return (hash += ":" + String(entry).hashCode());
			});
			if (_cache.hasOwnProperty(hash)) return _cache[hash].clone();
			var root = document.implementation.createDocument(null, collector, null);
			collection.forEach(function (entry) {
				if (typeof entry !== "string")
					throw new TypeError("Invalid collection entry");
				root.documentElement.appendChild(
					DataSource.fetch(entry).documentElement.cloneNode(true),
				);
			});
			_cache[hash] = root;
			return root.clone();
		},
	});

	/**
	 * Enhancement of the JavaScript API
	 * Adds a method for cloning a XMLDocument.
	 * @returns {XMLDocument} The cloned XMLDocument
	 */
	compliant("XMLDocument.prototype.clone", function () {
		var clone = this.implementation.createDocument(null, null);
		clone.appendChild(clone.importNode(this.documentElement, true));
		return clone;
	});

	// XML/XSLT data cache
	var _cache = {};
	Object.defineProperty(DataSource, "cache", {
		value: {},
	});

	// DataSource.locales
	// List of available locales (as standard marked are at the beginning)
	Object.defineProperty(DataSource, "locales", {
		value: [],
		enumerable: true,
	});
	var locales = [];
	[navigator.language]
		.concat(navigator.languages || [])
		.forEach(function (language) {
			language = language.toLowerCase().trim();
			locales.push(language);
			language = language.replace(/-.*$/, "");
			if (!locales.includes(language)) locales.push(language);
		});
	if (locales.length <= 0) throw new Error("Locale not available");
	var request = new XMLHttpRequest();
	request.overrideMimeType("text/plain");
	request.open("GET", DATA + "/locales.xml", false);
	request.send();

	// DataSource.data
	// Cache of locales.xml, can also be used by other components
	Object.defineProperty(DataSource, "data", {
		value:
			request.status === 200
				? new DOMParser().parseFromString(request.responseText, "text/xml")
				: null,
	});
	if (!DataSource.data && request.status !== 404)
		throw new Error("Locale not available");
	if (!DataSource.data) return;
	var xml = DataSource.data;
	var nodes = xml.evaluate(
		"/locales/*[@default]",
		xml,
		null,
		XPathResult.UNORDERED_NODE_ITERATOR_TYPE,
		null,
	);
	for (var node = nodes.iterateNext(); node; node = nodes.iterateNext()) {
		var name = node.nodeName.toLowerCase();
		if (!DataSource.locales.includes(name)) DataSource.locales.push(name);
	}
	nodes = xml.evaluate(
		"/locales/*",
		xml,
		null,
		XPathResult.UNORDERED_NODE_ITERATOR_TYPE,
		null,
	);
	for (var _node = nodes.iterateNext(); _node; _node = nodes.iterateNext()) {
		var _name = _node.nodeName.toLowerCase();
		if (!DataSource.locales.includes(_name)) DataSource.locales.push(_name);
	}
	if (DataSource.locales.length <= 0) throw new Error("Locale not available");
	locales.push(DataSource.locales[0]);
	locales = locales.filter(function (locale) {
		return DataSource.locales.includes(locale);
	});
	DataSource.locales.selection = locales.length
		? locales[0]
		: DataSource.locales[0];
})();

/**
 * Expression language and composite JavaScript are two important components.
 * Both are based on JavaScript enriched with macros. In addition, Composite
 * JavaScript can be loaded at runtime and can itself load other Composite
 * JavaScript scripts. Because in the end everything is based on a simple eval
 * command, it was important to isolate the execution of the scripts so that
 * internal methods and constants cannot be accessed unintentionally.
 */
("use strict");
(function () {
	compliant("Scripting", {
		/**
		 * As a special feature, Composite JavaScript supports macros.
		 *
		 * Macros are based on a keyword starting with a hash symbol followed by
		 * arguments separated by spaces. Macros end with the next line break, a
		 * semicolon or with the end of the file.
		 *
		 *
		 *     #import
		 *     ----
		 * Expects a space-separated list of composite modules whose path must
		 * be relative to the URL.
		 *
		 *     #import io/api/connector and/much more
		 *
		 * Composite modules consist of the optional resources CSS, JS and HTML.
		 * The #import macro can only load CSS and JS. The behavior is the same
		 * as when loading composites in the markup. The server status 404 does
		 * not cause an error, because all resources of a composite are
		 * optional, also JavaScript. Server states other than 200 and 404 cause
		 * an error. CSS resources are added to the HEAD and lead to an error if
		 * no HEAD element exists in the DOM. Markup (HTML) is not loaded
		 * because no target can be set for the output. The macro can be used
		 * multiple in the Composite JavaScript.
		 *
		 *
		 *     #export
		 *     ----
		 * Expects a space-separated list of exports. Export are variables or
		 * constants in a module that are made usable for the global scope.
		 *
		 *     #export connector and much more
		 *
		 * Primarily, an export argument is the name of the variable or constant
		 * in the module. Optionally, the name can be extended by an @ symbol to
		 * include the destination in the global scope.
		 *
		 *     #export connector@io.example
		 *
		 * The macro #module is intended for debugging. It writes the following
		 * text as debug output to the console. The browser displays this output
		 * with source, which can then be used as an entry point for debugging.
		 *
		 *
		 *     #module
		 *     ----
		 * Expected a space-separated list of words to be output in the debug
		 * level of the browser console. The output is a string expression and
		 * supports the corresponding syntax.
		 *
		 *     #module console debug output
		 *
		 *
		 *     #use
		 *     ----
		 * Expected to see a space-separated list of namespaces to create if
		 * they don't already exist.
		 *
		 *     #use namespaces to be created
		 *
		 *
		 *     (?...)
		 *     ----
		 * Tolerant expressions are also a macro, although with different
		 * syntax. The logic enclosed in the parenthesis with question marks is
		 * executed fault-tolerantly. In case of an error the logic corresponds
		 * to the value false without causing an error itself, except for syntax
		 * errors.
		 *
		 * @param {string} script
		 * @returns {*} the return value from the script
		 */
		eval: function _eval(script) {
			if (typeof script !== "string") throw new TypeError("Invalid data type");

			// Performance is important here.
			// The implementation parses and replaces macros in one pass.

			// It was important to exclude literals and comments.
			// - ignore: /*...*/
			// - ignore: //...([\r\n]|$)
			// - ignore: '...'
			// - ignore: "..."
			// - ignore: `...`
			// - detect: (^|\W)#(import|export|module)\s+...(\W|$)
			// - detect: \(\s*\?...\)

			var pattern;
			var brackets;
			for (var cursor = 0; cursor < script.length; cursor++) {
				var digit = script.charAt(cursor);
				if (cursor >= script.length && !pattern) continue;

				// The macro for the tolerant logic is a bit more complicated,
				// because round brackets have to be counted here. Therefore the
				// parsing runs parallel to the other macros. In addition, the
				// syntax is undefined by optional whitepsaces between ( and ?).

				if (brackets < 0) {
					if (digit === "?") {
						brackets = 1;
						var macro = "_tolerate(()=>";
						script =
							script.substring(0, cursor) +
							macro +
							script.substring(cursor + 1);
						cursor += macro.length;
						continue;
					}
					if (!digit.match(/\s/)) brackets = 0;
				}
				if (digit === "\\") {
					cursor++;
					continue;
				}
				if (pattern) {
					if (
						pattern === script.substring(cursor, cursor + pattern.length) ||
						(pattern === "\n" && digit === "\r")
					)
						pattern = null;
					continue;
				}
				switch (digit) {
					case "/":
						digit = script.charAt(cursor + 1);
						if (digit === "/") pattern = "\n";
						if (digit === "*") pattern = "*/";
						continue;
					case "(":
						if (brackets > 0) brackets++;
						else brackets = -1;
						continue;
					case ")":
						if (brackets <= 0) continue;
						if (--brackets > 0) continue;
						var _macro = ")";
						script =
							script.substring(0, cursor) + _macro + script.substring(cursor);
						cursor += _macro.length;
						continue;
					case "\'":
					case '"':
					case "\`":
						pattern = digit;
						continue;
					case "#":
						var string = script.substring(cursor - 1, cursor + 10);
						var match = string.match(/(^|\W)(#(?:import|export|module|use))\s/);
						if (match) {
							var _macro2 = match[2];
							var _loop = function _loop() {
									string = script.charAt(offset);
									if (!string.match(/[;\r\n]/) && offset < script.length)
										return 0; // continue
									var parameters = script
										.substring(cursor + _macro2.length, offset)
										.trim();
									switch (_macro2) {
										case "#import":
											if (
												!parameters.match(/^(\w+(\/\w+)*)(\s+(\w+(\/\w+)*))*$/)
											)
												throw new Error(
													("Invalid macro: #import " + parameters).trim(),
												);
											var imports = parameters
												.split(/\s+/)
												.map(function (entry) {
													return '"' + entry + '"';
												});
											_macro2 = "_import(...[" + imports.join(",") + "])";
											break;
										case "#export":
											var exports = [];
											var _pattern =
												/^([_a-z]\w*)(?:@((?:[_a-z]\w*)(?:\.[_a-z]\w*)*))?$/i;
											parameters.split(/\s+/).forEach(function (entry) {
												var match = entry.match(_pattern);
												if (!match)
													throw new Error(
														("Invalid macro: #export " + parameters).trim(),
													);
												parameters = [match[1], '"' + match[1] + '"'];
												if (match[2]) parameters.push('"' + match[2] + '"');
												exports.push("[" + parameters.join(",") + "]");
											});
											_macro2 = "_export(...[" + exports.join(",") + "])";
											break;
										case "#module":
											_macro2 = parameters
												.replace(/\\/g, "\\\\")
												.replace(/`/g, "\\`")
												.trim();
											if (_macro2)
												_macro2 = "console.debug(`Module: " + _macro2 + "`)";
											break;
										case "#use":
											if (
												!parameters.match(
													/^([_a-z]\w*)(\.[_a-z]\w*)*(\s+([_a-z]\w*)(\.[_a-z]\w*)*)*$/i,
												)
											)
												throw new Error(
													("Invalid macro: #use " + parameters).trim(),
												);
											var uses = parameters.split(/\s+/).map(function (entry) {
												return '"' + entry + '"';
											});
											_macro2 = "_use(...[" + uses.join(",") + "])";
											break;
									}
									script =
										script.substring(0, cursor - 1) +
										(match[1] || "") +
										_macro2 +
										script.substring(offset);
									cursor += _macro2.length;
									return 1; // break
								},
								_ret;
							for (
								var offset = cursor + _macro2.length;
								offset <= script.length;
								offset++
							) {
								_ret = _loop();
								if (_ret === 0) continue;
								if (_ret === 1) break;
							}
						}
						continue;
					default:
						continue;
				}
			}
			return this.run(script);
		},
		/**
		 * Executes a script isolated in this context, so that no unwanted
		 * access to internals is possible.
		 * @param {string} script
		 * @returns {*} return value of the script, if available
		 */
		run: function run(script) {
			if (typeof script !== "string") throw new TypeError("Invalid data type");
			if (script.trim()) return eval(script);
		},
	});
	var _import = function _import() {
		for (
			var _len7 = arguments.length, imports = new Array(_len7), _key7 = 0;
			_key7 < _len7;
			_key7++
		) {
			imports[_key7] = arguments[_key7];
		}
		// Because it is an internal method, an additional validation of the
		// exports as data structure was omitted.
		imports.forEach(function (include) {
			return Composite.load(Composite.MODULES + "/" + include + ".js", true);
		});
	};
	var _export = function _export() {
		for (
			var _len8 = arguments.length, exports = new Array(_len8), _key8 = 0;
			_key8 < _len8;
			_key8++
		) {
			exports[_key8] = arguments[_key8];
		}
		// Because it is an internal method, an additional validation of the
		// exports as data structure was omitted.
		exports.forEach(function (parameters) {
			var context = window;
			(parameters[2] ? parameters[2].split(/\./) : []).forEach(
				function (parameter) {
					if (typeof context[parameter] === "undefined")
						context[parameter] = {};
					context = context[parameter];
				},
			);
			var lookup = context[parameters[1]];
			if (
				typeof lookup !== "undefined" &&
				!(lookup instanceof Element) &&
				!(lookup instanceof HTMLCollection)
			)
				throw new Error(
					"Context for export is already in use: " +
						parameters[1] +
						(parameters[2] ? "@" + parameters[2] : ""),
				);
			context[parameters[1]] = parameters[0];
		});
	};
	var _use = function _use() {
		for (
			var _len9 = arguments.length, uses = new Array(_len9), _key9 = 0;
			_key9 < _len9;
			_key9++
		) {
			uses[_key9] = arguments[_key9];
		}
		uses.forEach(function (use) {
			return Namespace.use(use);
		});
	};
	var _tolerate = function _tolerate(invocation) {
		try {
			return invocation.call(window);
		} catch (error) {
			return false;
		}
	};
})();

/**
 * Expressions or the Expression Language (EL) is a simple access to the
 * client-side JavaScript and thus to the models and components. In the
 * expressions the complete JavaScript API is supported, which is enhanced with
 * additional keywords, so that also the numerous arithmetic and logical
 * operators can be used.
 *
 * The expression language can be used from the HTML element BODY on in the
 * complete markup as free text, as well as in all attributes. Exceptions are
 * the HTML elements STYLE and SCRIPT whose content is not supported by the
 * expression language.
 */
("use strict");
(function () {
	compliant("Expression", {
		/**
		 * Interprets the passed expression. In case of an error, the error is
		 * returned and no error is thrown. A serial can be specified
		 * optionally. The serial is an alias for caching compiled expressions.
		 * Without, the expressions are always compiled. The function uses
		 * variable parameters and has the following signatures:
		 *
		 *     function(expression)
		 *     function(serial, expression)
		 *
		 * @param {string} [serial] Optional serial for caching expressions
		 * @param {string} expression Expression to be interpreted.
		 * @returns {*} The return value of the interpreted expression, or an
		 *     error if an error has occurred
		 * @throws {Error} In case of invalid data types or syntax.
		 */
		eval: function _eval() {
			var expression;
			if (arguments.length > 1)
				expression = String(arguments.length <= 1 ? undefined : arguments[1]);
			else if (arguments.length > 0)
				expression = String(arguments.length <= 0 ? undefined : arguments[0]);
			var serial;
			if (
				arguments.length > 1 &&
				(arguments.length <= 0 ? undefined : arguments[0])
			)
				serial = String(arguments.length <= 0 ? undefined : arguments[0]);
			var script = serial ? _cache.get(serial) : null;
			if (!script) script = _parse2(TYPE_MIXED, expression);
			if (serial) _cache.set(serial, script);
			try {
				return Scripting.run(script);
			} catch (error) {
				console.error(error.message + "\n\t" + script);
				return new Error(error.message + " in " + script);
			}
		},
	});

	/** Cache (expression/script) */
	var _cache = new Map();
	var TYPE_MIXED = 0;
	var TYPE_LITERAL = 1;
	var TYPE_TEXT = 2;
	var TYPE_SCRIPT = 3;
	var KEYWORDS = [
		"and",
		"&&",
		"or",
		"||",
		"not",
		"!",
		"eq",
		"==",
		"eeq",
		"===",
		"ne",
		"!=",
		"nee",
		"!==",
		"lt",
		"<",
		"gt",
		">",
		"le",
		"<=",
		"ge",
		">=",
		"empty",
		"!",
		"div",
		"/",
		"mod",
		"%",
	];
	var PATTERN_KEYWORDS = new RegExp(
		"(^|[^\\w\\.])(" +
			KEYWORDS.filter(function (keyword, index) {
				return index % 2 === 0;
			}).join("|") +
			")(?=[^\\w\\.]|$)",
		"ig",
	);
	var _fill = function _fill(expression, patches) {
		return expression.replace(/[\t\r](\d+)\n/g, function (match, id) {
			return patches[id];
		});
	};

	/**
	 * Analyzes and finds the components of an expression and creates a
	 * JavaScript from them. Created scripts are cached a reused as needed.
	 * @param {string} expression Expression to analyze
	 * @param {number} [depth=0] Depth of the analysis
	 * @param {Array} [patches=[]] Patches to apply
	 * @returns {string} The created JavaScript
	 * @throws {Error} In case of an error in the expression structure
	 */
	var _parse2 = function _parse(type, expression) {
		var patches =
			arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
		switch (type) {
			case TYPE_MIXED:
				// replace all line breaks and merge them with a space, so the
				// characters CR\r and LF\n can be used as internal markers
				expression = expression.replace(/[\r\n]/g, " ").trim();
				var structure = expression;

				// find all places that contain scripts
				structure = structure.replace(
					/\{\{(.*?)\}\}/g,
					function (match, script) {
						return _parse2(TYPE_SCRIPT, script, patches);
					},
				);

				// find all places outside the detected script replacements at
				// the beginning ^...\r and between \n...\r and at the end \n...$
				structure = structure.replace(
					/((?:[^\n]+$)|(?:[^\n]+(?=\r)))/g,
					function (match, text) {
						return _parse2(TYPE_TEXT, text, patches);
					},
				);

				// if everything is replaced, the expression must have the
				// following structure, deviations are syntax errors
				if (!structure.match(/^(\r(\d+)\n)*$/))
					throw Error("Error in the expression structure\n\t" + expression);
				var mixed =
					!expression.startsWith("{{") ||
					!expression.endsWith("}}") ||
					expression.substring(2).includes("{{") ||
					expression.substring(0, expression.length - 2).includes("}}");

				// placeholders must be filled, since they were created
				// recursively, they do not have to be filled recursively
				structure = structure.replace(
					/(?:\r(\d+)\n)/g,
					function (match, placeholder) {
						return mixed
							? "\r(" + patches[placeholder] + ")\n"
							: "\r" + patches[placeholder] + "\n";
					},
				);

				// masked quotation marks will be restored.
				structure = structure.replace(/\r\\u0022\n/g, '\\"');
				structure = structure.replace(/\r\\u0027\n/g, "\\'");
				structure = structure.replace(/\r\\u0060\n/g, "\\`");

				// splices still need to be made scriptable
				structure = structure.replace(/(\n\r)+/g, " + ");
				structure = structure.replace(/(^\r)|(\n$)/g, "");

				// CR/LF of markers must be removed so that the end of line is not
				// interpreted as separation of commands or logic: a\nb == a;b
				structure = structure.replace(/[\r\n]+/g, " ");
				return structure;
			case TYPE_TEXT:
				expression = '"' + expression + '"';
			case TYPE_LITERAL:
				patches.push(expression);
				return "\r" + (patches.length - 1) + "\n";
			case TYPE_SCRIPT:
				expression = expression.trim();
				if (!expression) return "";

				// Mask escaped quotes (single and double) so that they are not
				// mistakenly found by the parser as delimiting string/phrase.
				// rule: search for an odd number of slashes followed by quotes
				expression = expression.replace(
					/(^|[^\\])((?:\\{2})*)(\\\")/g,
					"$1$2\r\\u0022\n",
				);
				expression = expression.replace(
					/(^|[^\\])((?:\\{2})*)(\\\')/g,
					"$1$2\r\\u0027\n",
				);
				expression = expression.replace(
					/(^|[^\\])((?:\\{2})*)(\\\`)/g,
					"$1$2\r\\u0060\n",
				);

				// Replace all literals "..." / '...' / `...` with placeholders.
				// This simplifies analysis because text can contain anything
				// and the parser would have to constantly distinguish between
				// logic and text. If the literals are replaced by numeric
				// placeholders, only logic remains. Important is a flexible
				// processing, because the order of ', " and ` is not defined.
				expression = expression.replace(
					/((['\"\`])[^]*?\2)/g,
					function (match, literal) {
						return _parse2(TYPE_LITERAL, literal, patches);
					},
				);

				// without literals, tabs have no relevance and can be replaced
				// by spaces, and we have and additional internal marker
				expression = expression.replace(/\t+/g, " ");

				// mapping of keywords to operators
				// IMPORTANT: KEYWORDS ARE CASE-INSENSITIVE
				//     and  &&        empty  !         div  /
				//     eq   ==        eeq    ===       ge   >=
				//     gt   >         le     <=        lt   <
				//     mod  %         ne     !=        nee  !==
				//     not  !         or     ||
				expression = expression.replace(
					PATTERN_KEYWORDS,
					function (match, group1, group2) {
						return (
							group1 + KEYWORDS[KEYWORDS.indexOf(group2.toLowerCase()) + 1]
						);
					},
				);

				// Keywords must be replaced by placeholders so that they are
				// not interpreted as variables. Keywords are case-insensitive.
				expression = expression.replace(
					/(^|[^\w\.])(true|false|null|undefined|new|instanceof|typeof)(?=[^\w\.]|$)/gi,
					function (match) {
						var group1 =
							arguments.length > 1 && arguments[1] !== undefined
								? arguments[1]
								: "";
						var group2 =
							arguments.length > 2 && arguments[2] !== undefined
								? arguments[2]
								: "";
						return group1 + group2.toLowerCase();
					},
				);

				// element expressions are translated into JavaScript
				//
				//     #element -> document.getElementById(element)
				//     #[element] -> document.getElementById(element)
				//     #[element//expression//] -> document.getElementById(element + expression)
				//
				// The version with square brackets is for more complex element
				// IDs that do not follow the JavaScript syntax for variables.
				//
				// The order is important because the complex element ID, if the
				// target uses unique identifiers, may contain a # that should
				// not be misinterpreted.
				expression = expression.replace(
					/#\[([^\[\]]*)\]/g,
					function (match, element) {
						element = element.replace(/\/{2}([^]*?)\/{2}/g, '"+($1)+"');
						patches.push(
							_fill('document.getElementById("' + element + '")', patches),
						);
						return "\r" + (patches.length - 1) + "\n";
					},
				);
				expression = expression.replace(
					/#([_a-z]\w*)/gi,
					function (match, element) {
						patches.push(
							_fill('document.getElementById("' + element + '")', patches),
						);
						return "\r" + (patches.length - 1) + "\n";
					},
				);

				// (?...) tolerates the enclosed code. If an error occurs there,
				// the expression will be false, but will not cause the error
				// itself. This is convenient if you want check/use references
				// or variables that do not yet exist or errors of methods are
				// to be suppressed.

				// To avoid complicated parsing of round brackets, bracket
				// expressions that have no other round bracket expressions are
				// iteratively replaced by placeholders \t...\n. At the end
				// there should be no more brackets.

				if (expression.match(/\(\s*\?/)) {
					for (var counts = -1; counts < patches.length; ) {
						counts = patches.length;
						expression = expression.replace(
							/(\([^\(\)]*\))/g,
							function (match) {
								match = match.replace(
									/^\( *\?+ *([^]*?) *\)$/,
									function (match, logic) {
										return "_tolerate(()=>(" + logic + "))";
									},
								);
								patches.push(_fill(match, patches));
								return "\t" + (patches.length - 1) + "\n";
							},
						);
					}
				}

				// small optimization by merging spaces
				expression = expression.replace(/ {2,}/g, " ");
				patches.push(_fill(expression, patches));
				return "\r" + (patches.length - 1) + "\n";
			default:
				throw new Error("Unexpected script type");
		}
	};
})();

/**
 * With aspect-js the declarative approach of HTML is taken up and extended.
 * In addition to the expression language, the HTML elements are provided with
 * additional attributes for functions and view model binding. The corresponding
 * renderer is included in the composite implementation and actively monitors
 * the DOM via the MutationObserver and thus reacts recursively to changes in
 * the DOM.
 *
 * This is the static component for rendering and the view model binding.
 * Processing runs in the background and starts automatically when the page is
 * loaded.
 *
 *
 *     TERMS
 *     ----
 *
 *         namespace
 *         ----
 * Comparable to packages in other programming languages, namespaces can be used
 * for hierarchical structuring of components, resources and business logic.
 * Although packages are not a feature of JavaScript, they can be mapped at the
 * object level by concatenating objects into an object tree. Here, each level
 * of the object tree forms a namespace, which can also be considered a domain.
 *
 * As is typical for the identifiers of objects, namespaces also use letters,
 * numbers and underscores separated by a dot. As a special feature, arrays are
 * also supported. If a layer in the namespace uses an integer, this layer is
 * used as an array.
 *
 *         model
 *         ----
 * Models are representable/projectable static JavaScript objects that can
 * provide and receive data, states and interactions for views, comparable to
 * managed beans and DTOs (Data Transfer Objects). As singleton/facade/delegate,
 * they can use other components and abstractions, contain business logic
 * themselves, and be a link between the user interface (view) and middleware
 * (backend).
 *
 * The required view model binding is part of the Model View Controller and the
 * Composite API.
 *
 *         property
 *         ----
 * Is a property in a static model (model component / component). It
 * corresponds to an HTML element with the same ID in the same namespace. The
 * ID of the property can be relative or use an absolute namespace. If the ID
 * is relative, the namespace is defined by the parent composite element.
 *
 *         qualifier
 *         ----
 * In some cases, the identifier (ID) may not be unique. For example, in cases
 * where properties are arrays or an iteration is used. In these cases the
 * identifier can be extended by an additional unique qualifier separated by a
 * colon. Qualifiers behave like properties during view model binding and extend
 * the namespace.
 *
 *         unique
 *         ----
 * In some cases it is necessary that different things in the view refer to a
 * target in the corresponding model. However, if these things must still be
 * unique in the view, a unique identifier can be used in addition to the
 * qualifier, separated by a hash. This identifier then has no influence on the
 * composite logic and is used exclusively for the view.
 *
 *         composite
 *         ----
 * Composite describes a construct of markup (view), JavaScript object (model),
 * CSS and possibly other resources. It describes a component/module without
 * direct relation to the representation.
 *
 *         composite-id
 *         ----
 * It is a character sequence consisting of letters, numbers and underscores
 * and optionally supports the minus sign if it is not used at the beginning or
 * end. A composite ID is at least one character long and is composed by
 * combining the attributes ID and COMPOSITE.
 *
 *
 *     PRINCIPLES
 *     ----
 *
 * The world is static. So also aspect-js and all components. This avoids the
 * management and establishment of instances.
 *
 * Attributes ID and COMPOSITE are elementary and immutable.
 * They are read the first time an element occurs and stored in the object
 * cache. Therefore, these attributes cannot be changed later because they are
 * then used from the object cache.
 *
 * Attributes of elements are elementary and immutable even if they contain an
 * expression.
 *
 * Clean Code Rendering - The aspect-js relevant attributes are stored in
 * meta-objects to each element and are removed in the markup. The following
 * attributes are essential: COMPOSITE, ID -- they are cached and remain at the
 * markup, these cannot be changed. the MutationObserver will restore them.
 */
("use strict");
(function () {
	compliant("Composite", {
		// Against the trend, the constants of the composite are public so that
		// they can be used by extensions.

		/** Path of the Composite for: modules (sub-directory of work path) */
		get MODULES() {
			return window.location.combine(window.location.contextPath, "/modules");
		},
		/** Constant for attribute composite */
		get ATTRIBUTE_COMPOSITE() {
			return "composite";
		},
		/** Constant for attribute condition */
		get ATTRIBUTE_CONDITION() {
			return "condition";
		},
		/** Constant for attribute events */
		get ATTRIBUTE_EVENTS() {
			return "events";
		},
		/** Constant for attribute id */
		get ATTRIBUTE_ID() {
			return "id";
		},
		/** Constant for attribute import */
		get ATTRIBUTE_IMPORT() {
			return "import";
		},
		/** Constant for attribute interval */
		get ATTRIBUTE_INTERVAL() {
			return "interval";
		},
		/** Constant for attribute iterate */
		get ATTRIBUTE_ITERATE() {
			return "iterate";
		},
		/** Constant for attribute message */
		get ATTRIBUTE_MESSAGE() {
			return "message";
		},
		/** Constant for attribute name */
		get ATTRIBUTE_NAME() {
			return "name";
		},
		/** Constant for attribute output */
		get ATTRIBUTE_OUTPUT() {
			return "output";
		},
		/** Constant for attribute render */
		get ATTRIBUTE_RENDER() {
			return "render";
		},
		/** Constant for attribute release */
		get ATTRIBUTE_RELEASE() {
			return "release";
		},
		/** Constant for attribute text */
		get ATTRIBUTE_TEXT() {
			return "text";
		},
		/** Constant for attribute type */
		get ATTRIBUTE_TYPE() {
			return "type";
		},
		/** Constant for attribute validate */
		get ATTRIBUTE_VALIDATE() {
			return "validate";
		},
		/** Constant for attribute value */
		get ATTRIBUTE_VALUE() {
			return "value";
		},
		/**
		 * Pattern for all accepted attributes.
		 * Accepted attributes are all attributes, even without an expression
		 * that is cached in the meta-object. Other attributes are only cached
		 * if they contain an expression.
		 */
		get PATTERN_ATTRIBUTE_ACCEPT() {
			return /^(composite|condition|events|id|import|interval|iterate|message|output|release|render|validate)$/i;
		},
		/**
		 * Pattern for all static attributes.
		 * Static attributes are not removed from the element during rendering,
		 * but are also set in the meta-object like non-static attributes. These
		 * attributes are also intended for direct use in JavaScript and CSS.
		 */
		get PATTERN_ATTRIBUTE_STATIC() {
			return /^(composite|id)$/i;
		},
		/**
		 * Pattern to detect if a string contains an expression.
		 * Escaping characters via slash is supported.
		 */
		get PATTERN_EXPRESSION_CONTAINS() {
			return /\{\{(.|\r|\n)*?\}\}/g;
		},
		/**
		 * Patterns for condition expressions.
		 * Conditions are explicitly a single expression and not a variable
		 * expression.
		 */
		get PATTERN_EXPRESSION_CONDITION() {
			return /^\s*\{\{\s*(([^}]|(}(?!})))*?)\s*\}\}\s*$/i;
		},
		/**
		 * Patterns for expressions with variable.
		 * Variables are at the beginning of the expression and are separated
		 * from the expression by a colon. The variable name must conform to the
		 * usual JavaScript conditions and starts with _ or a letter, other word
		 * characters (_ 0-9 a-z A-Z) may follow.
		 * - group 1: variable
		 * - group 2: expression
		 */
		get PATTERN_EXPRESSION_VARIABLE() {
			return /^\s*\{\{\s*((?:(?:_*[a-z])|(?:_\w*))\w*)\s*:\s*(([^}]|(}(?!})))*?)\s*\}\}\s*$/i;
		},
		/** Pattern for all to ignore (script-)elements */
		get PATTERN_ELEMENT_IGNORE() {
			return /script|style/i;
		},
		/** Pattern for all script elements */
		get PATTERN_SCRIPT() {
			return /script/i;
		},
		/**
		 * Pattern for all composite-script elements.
		 * These elements are not automatically executed by the browser but must
		 * be triggered by rendering. Therefore, these scripts can be combined
		 * and controlled with ATTRIBUTE_CONDITION.
		 */
		get PATTERN_COMPOSITE_SCRIPT() {
			return /^composite\/javascript$/i;
		},
		/**
		 * Pattern for a composite id (based on a word e.g. name@namespace:...)
		 * - group 1: name
		 * - group 2: namespace (optional)
		 */
		get PATTERN_COMPOSITE_ID() {
			return /^([_a-z]\w*)(?:@([_a-z]\w*(?::[_a-z]\w*)*))?$/i;
		},
		/**
		 * Pattern for an element id (e.g. name:qualifier...@model:...)
		 * - group 1: name
		 * - group 2: qualifier(s) (optional)
		 * - group 3: unique identifier (optional)
		 * - group 4: (namespace+)model (optional)
		 */
		get PATTERN_ELEMENT_ID() {
			return /^([_a-z]\w*)(?::(\w+(?::\w+)*))?(?:#(\w+))?(?:@([_a-z]\w*(?::[_a-z]\w*)*))?$/i;
		},
		/** Pattern for a scope (custom tag, based on a word) */
		get PATTERN_CUSTOMIZE_SCOPE() {
			return /[_a-z]([\w-]*\w)?$/i;
		},
		/** Pattern for a datasource url */
		get PATTERN_DATASOURCE_URL() {
			return /^\s*xml:\s*(\/\S+)\s*(?:\s*(?:xslt|xsl):\s*(\/\S+))*$/i;
		},
		/** Pattern for all accepted events */
		get PATTERN_EVENT() {
			return /^([A-Z][a-z]+)+$/;
		},
		/** Constants of events during rendering */
		get EVENT_RENDER_START() {
			return "RenderStart";
		},
		get EVENT_RENDER_NEXT() {
			return "RenderNext";
		},
		get EVENT_RENDER_END() {
			return "RenderEnd";
		},
		/** Constants of events during mounting */
		get EVENT_MOUNT_START() {
			return "MountStart";
		},
		get EVENT_MOUNT_NEXT() {
			return "MountNext";
		},
		get EVENT_MOUNT_END() {
			return "MountEnd";
		},
		/** Constants of events when using modules */
		get EVENT_MODULE_LOAD() {
			return "ModuleLoad";
		},
		get EVENT_MODULE_DOCK() {
			return "ModuleDock";
		},
		get EVENT_MODULE_READY() {
			return "ModuleReady";
		},
		get EVENT_MODULE_UNDOCK() {
			return "ModuleUndock";
		},
		/** Constants of events when using HTTP */
		get EVENT_HTTP_START() {
			return "HttpStart";
		},
		get EVENT_HTTP_PROGRESS() {
			return "HttpProgress";
		},
		get EVENT_HTTP_RECEIVE() {
			return "HttpReceive";
		},
		get EVENT_HTTP_LOAD() {
			return "HttpLoad";
		},
		get EVENT_HTTP_ABORT() {
			return "HttpAbort";
		},
		get EVENT_HTTP_TIMEOUT() {
			return "HttpTimeout";
		},
		get EVENT_HTTP_ERROR() {
			return "HttpError";
		},
		get EVENT_HTTP_END() {
			return "HttpEnd";
		},
		/** Constants of events when errors occur */
		get EVENT_ERROR() {
			return "Error";
		},
		/**
		 * List of possible DOM events
		 * see also https://www.w3schools.com/jsref/dom_obj_event.asp
		 */
		get EVENTS() {
			return (
				"abort after|print animation|end animation|iteration animation|start" +
				" before|print before|unload blur" +
				" can|play can|play|through change click context|menu copy cut" +
				" dbl|click drag drag|end drag|enter drag|leave drag|over drag|start drop duration|change" +
				" ended error" +
				" focus focus|in focus|out" +
				" hash|change" +
				" input invalid" +
				" key|down key|press key|up" +
				" load loaded|data loaded|meta|data load|start" +
				" message mouse|down mouse|enter mouse|leave mouse|move mouse|over mouse|out mouse|up mouse|wheel" +
				" offline online open" +
				" page|hide page|show paste pause play playing popstate progress" +
				" rate|change resize reset" +
				" scroll search seeked seeking select show stalled storage submit suspend" +
				" time|update toggle touch|cancel touch|end touch|move touch|start transition|end" +
				" unload" +
				" volume|change" +
				" waiting wheel"
			);
		},
		/** Patterns with the supported events */
		get PATTERN_EVENT_FUNCTIONS() {
			return (function () {
				var pattern = Composite.EVENTS.replace(
					/(?:\||\b)(\w)/g,
					function (match, letter) {
						return letter.toUpperCase();
					},
				);
				return new RegExp("^on(" + pattern.replace(/\s+/g, "|") + ")");
			})();
		},
		/** Patterns with the supported events as plain array */
		get PATTERN_EVENT_NAMES() {
			return (function () {
				return Composite.EVENTS.replace(
					/(?:\||\b)(\w)/g,
					function (match, letter) {
						return letter.toUpperCase();
					},
				).split(/\s+/);
			})();
		},
		/** Patterns with the supported events as plain array (lower case) */
		get PATTERN_EVENT_FILTER() {
			return (function () {
				return Composite.EVENTS.replace(
					/(?:\||\b)(\w)/g,
					function (match, letter) {
						return letter.toUpperCase();
					},
				)
					.toLowerCase()
					.split(/\s+/);
			})();
		},
		/**
		 * Lock mechanism for methods: render, mound and scan. The lock controls
		 * that the methods are not used concurrently and/or asynchronously.
		 * Each method opens its own transaction (lock). During a transaction,
		 * the method call requires a lock. If this lock does not exist or
		 * differs from the current transaction, the method call is parked in a
		 * queue until the current lock is released. The methods themselves can
		 * call themselves recursively and do so with the lock they know. In
		 * addition to the lock mechanism, the methods also control the START,
		 * NEXT, and END events.
		 * @param {Object} context Context (render, mound or scan)
		 * @param {string|Element} selector Selector to identify elements
		 * @returns {Object} The created lock as a meta-object
		 * @throws {Error} In case of an invalid context
		 */
		lock: function lock(context, selector) {
			context.queue = context.queue || [];
			if (context.lock === undefined || context.lock === false) {
				context.lock = {
					ticks: 1,
					selector: selector,
					queue: [],
					share: function share() {
						this.ticks++;
						return this;
					},
					release: function release() {
						this.ticks--;
						if (this.ticks > 0) return;
						if (context === Composite.render) {
							// To ensure that on conditions when the lock is
							// created for the marker, the children are also
							// mounted, the selector must be switched to the
							// element, because the marker is a text node
							// without children.

							var _selector2 = this.selector;
							if (
								_selector2 instanceof Node &&
								_selector2.nodeType === Node.TEXT_NODE
							) {
								var serial = _selector2.ordinal();
								var object = _render_meta[serial] || {};
								if (
									object.condition &&
									object.condition.element &&
									object.condition.marker === this.selector
								)
									_selector2 = object.condition.element;
							}

							// If the selector is a string, several elements
							// must be assumed, which may or may not have a
							// relation to the DOM. Therefore, they are all
							// considered and mounted separately.

							var nodes = [];
							if (typeof _selector2 === "string") {
								var scope = document.querySelectorAll(_selector2);
								Array.from(scope).forEach(function (node) {
									if (!nodes.includes(node)) nodes.push(node);
									var scope = node.querySelectorAll("*");
									Array.from(scope).forEach(function (node) {
										if (!nodes.includes(node)) nodes.push(node);
									});
								});
							} else if (_selector2 instanceof Element) {
								nodes = _selector2.querySelectorAll("*");
								nodes = [_selector2].concat(Array.from(nodes));
							}

							// Mount all elements in a composite, including
							// the composite element itself
							nodes.forEach(function (node) {
								return Composite.mount(node);
							});
							Composite.fire(Composite.EVENT_RENDER_END, this.selector);
						} else if (context === Composite.mount) {
							Composite.fire(Composite.EVENT_MOUNT_END, this.selector);
						} else throw new Error("Invalid context: " + context);
						var selector = context.queue.shift();
						if (selector) Composite.asynchron(context, selector);
						context.lock = false;
					},
				};
				if (context === Composite.render)
					Composite.fire(Composite.EVENT_RENDER_START, selector);
				else if (context === Composite.mount)
					Composite.fire(Composite.EVENT_MOUNT_START, selector);
				else throw new Error("Invalid context: " + context);
			} else {
				if (context === Composite.render)
					Composite.fire(Composite.EVENT_RENDER_NEXT, selector);
				else if (context === Composite.mount)
					Composite.fire(Composite.EVENT_MOUNT_NEXT, selector);
				else throw new Error("Invalid context: " + context);
			}
			return context.lock;
		},
		/**
		 * Registers a callback function for composite events.
		 * @param {string} event Event type (see Composite.EVENT_***)
		 * @param {function} callback Callback function to be registered
		 * @throws {TypeError} In case of invalid event type
		 * @throws {TypeError} In case of invalid callback type
		 * @throws {Error} In the following cases:
		 *     - Event is not valid or is not supported
		 *     - Callback is not implemented correctly or does not exist
		 */
		listen: function listen(event, callback) {
			if (typeof event !== "string")
				throw new TypeError("Invalid event: " + _typeof(event));
			if (
				typeof callback !== "function" &&
				callback !== null &&
				callback !== undefined
			)
				throw new TypeError("Invalid callback: " + _typeof(callback));
			if (!event.match(Composite.PATTERN_EVENT))
				throw new Error(
					"Invalid event".concat(event.trim() ? ": " + event : ""),
				);
			event = event.toLowerCase();
			if (!_listeners.has(event) || !Array.isArray(_listeners.get(event)))
				_listeners.set(event, []);
			_listeners.get(event).push(callback);
		},
		/**
		 * Triggers an event.
		 * All callback functions for this event are called.
		 * @param {string} event Event type (see Composite.EVENT_***)
		 * @param {...*} variants Up to five additional optional arguments
		 *     passed to the callback function
		 */
		fire: function fire(event) {
			for (
				var _len10 = arguments.length,
					variants = new Array(_len10 > 1 ? _len10 - 1 : 0),
					_key10 = 1;
				_key10 < _len10;
				_key10++
			) {
				variants[_key10 - 1] = arguments[_key10];
			}
			event = (event || "").trim();
			if (_listeners.size <= 0 || !event) return;
			var listeners = _listeners.get(event.toLowerCase());
			if (!Array.isArray(listeners)) return;
			variants = [event].concat(_toConsumableArray(variants));
			listeners.forEach(function (callback) {
				return callback.apply(void 0, _toConsumableArray(variants));
			});
		},
		/**
		 * Asynchronous or in reality non-blocking call of a function. Because
		 * the asynchronous execution is not possible without Web Worker.
		 * @param {function} task Function to be executed
		 * @param {...*} variants Up to five additional optional arguments
		 *     passed to the callback function
		 */
		asynchron: function asynchron(task) {
			var _window;
			for (
				var _len11 = arguments.length,
					variants = new Array(_len11 > 1 ? _len11 - 1 : 0),
					_key11 = 1;
				_key11 < _len11;
				_key11++
			) {
				variants[_key11 - 1] = arguments[_key11];
			}
			(_window = window).setTimeout.apply(
				_window,
				[
					function (invoke) {
						for (
							var _len12 = arguments.length,
								variants = new Array(_len12 > 1 ? _len12 - 1 : 0),
								_key12 = 1;
							_key12 < _len12;
							_key12++
						) {
							variants[_key12 - 1] = arguments[_key12];
						}
						invoke.apply(void 0, variants);
					},
					0,
					task,
				].concat(variants),
			);
		},
		/**
		 * Determines the corresponding meta-object for the passed selector.
		 * @param   {Element|string} selector, as DOM element or a string
		 * @returns {object|null} the determined meta-object or null
		 * @throws  {Error} If the selector is not unique (several nodes found).
		 */
		lookup: function lookup(selector) {
			if (selector == null) return null;
			if (typeof selector === "string") {
				var nodes = document.querySelectorAll(selector.trim());
				if (nodes.length <= 0) return null;
				if (nodes.length > 1) throw new Error("Selector is not unique");
				return Composite.lookup(nodes[0]);
			}
			if (!(selector instanceof Element)) return null;
			var lookup = _mount_lookup(selector);
			if (lookup !== null) delete lookup.target;
			return lookup;
		},
		/**
		 * Validates the as selector passed element(s), if the element(s) are
		 * marked with ATTRIBUTE_VALIDATE, a two-step validation is performed.
		 * In the first step, the HTML5 validation is checked if it exists. If
		 * this validation is valid or does not exist, the model based
		 * validation is executed if it exists. For this purpose, the static
		 * method validate is expected in the model. The current element and the
		 * current value (if available) are passed as arguments.
		 *
		 * The validation can have four states:
		 *
		 *     true, not true, text, undefined/void
		 *
		 *         true
		 *         ----
		 * The validation was successful. No error is displayed and the default
		 * action of the browser is used. If possible the value is synchronized
		 * with the model.
		 *
		 *         not true and not undefined/void
		 *         ----
		 * The validation failed; an error is displayed. An existing return
		 * value indicates that the default action of the browser should not be
		 * executed and so it is blocked. In this case, a possible value is not
		 * synchronized with the model.
		 *
		 *         text
		 *         ----
		 * Text corresponds to: Invalid + error message. If the error message is
		 * empty, the message from ATTRIBUTE_MESSAGE is used alternatively.
		 *
		 *         undefined/void
		 *         ----
		 * The validation failed; an error is displayed. No return value
		 * indicates that the default action of the browser should nevertheless
		 * be executed. This behavior is important e.g. for the validation of
		 * input fields, so that the input reaches the user interface. In this
		 * case, a possible value is not synchronized with the model.
		 *
		 * @param {Element|string} selector DOM element or a string
		 * @param {boolean} [lock=true] Unlocking of the model validation
		 * @returns {boolean|undefined} Validation result
		 *     true, false, undefined/void
		 * @throws {Error} In case of a non-unique selector
		 */
		validate: function validate(selector, lock) {
			if (arguments.length < 2 || lock !== false) lock = true;
			if (typeof selector === "string") {
				selector = selector.trim();
				if (!selector) return;
				var validate = Array.from(document.querySelectorAll(selector));
				validate.forEach(function (node, index) {
					validate[index] = Composite.validate(node, lock);
					if (validate[index] === undefined) validate[index] = 0;
					else validate[index] = validate[index] === true ? 1 : 2;
				});
				validate = validate.join("");
				if (validate.match(/^1+$/)) return true;
				if (validate.match(/2/)) return false;
				return;
			}
			if (!(selector instanceof Element)) return;
			var serial = selector.ordinal();
			var object = _render_meta[serial];
			var valid = true;

			// Resets the customer-specific error.
			// This is necessary for the checkValidity method to work.
			if (typeof selector.setCustomValidity === "function")
				selector.setCustomValidity("");

			// Explicit validation via HTML5. If the validation fails, model
			// validation and synchronization is not and rendering always
			// performed. In this case the event and thus the default action of
			// the browser is cancelled.
			if (typeof selector.checkValidity === "function")
				valid = selector.checkValidity();

			// There can be a corresponding model.
			var meta = _mount_lookup(selector);
			if (meta instanceof Object) {
				// Validation is a function at the model level. If a composite
				// consists of several model levels, the validation may have to
				// be organized accordingly if necessary. Interactive composite
				// elements are a property object. Therefore, they are primarily
				// a property and the validation is located in the surrounding
				// model and not in the property object itself.

				var value;
				if (selector instanceof Element) {
					if (
						selector.tagName.match(/^input$/i) &&
						selector.type.match(/^radio|checkbox/i)
					)
						value = selector.checked;
					else if (
						selector.tagName.match(/^select/i) &&
						"selectedIndex" in selector
					)
						value = selector.options[selector.selectedIndex].value;
					else if (Composite.ATTRIBUTE_VALUE in selector)
						value = selector[Composite.ATTRIBUTE_VALUE];
				}

				// Implicit validation via the model, if a corresponding
				// validate method is implemented. The validation through the
				// model only works if the corresponding composite is
				// active/present in the DOM!
				if (
					object.attributes.hasOwnProperty(Composite.ATTRIBUTE_VALIDATE) &&
					valid === true &&
					lock !== true &&
					typeof meta.model[Composite.ATTRIBUTE_VALIDATE] === "function"
				) {
					var _validate = meta.model[Composite.ATTRIBUTE_VALIDATE];
					if (value !== undefined)
						valid = _validate.call(meta.model, selector, value);
					else valid = _validate.call(meta.model, selector);
				}
			}

			// ATTRIBUTE_VALIDATE can be supplemented with ATTRIBUTE_MESSAGE.
			// However, ATTRIBUTE_MESSAGE has no effect without
			// ATTRIBUTE_VALIDATE. The value of ATTRIBUTE_MESSAGE is used as an
			// error message if the validation was not successful. For this
			// purpose, the browser function of HTML5 form validation is used,
			// which shows  the message as a browser validation tooltip/message.
			//
			// The browser validation tooltip/message can be redirected to an
			// attribute of the validated element if the message begins with the
			// prefix '@<attribute>:', which includes the return value of
			// expressions. Redirection to static and protected attributes is
			// ignored and the message is suppressed for these destinations.
			// This redirection can be helpful if a custom error concept needs
			// to be implemented.

			if (typeof selector.setCustomValidity === "function") {
				if (
					valid === true &&
					Object.usable(object.message) &&
					Object.usable(object.message.attribute)
				)
					selector.removeAttribute(object.message.attribute);
				if (valid !== true) {
					var message;
					if (typeof valid === "string" && valid.trim()) message = valid.trim();
					if (typeof message !== "string") {
						if (object.attributes.hasOwnProperty(Composite.ATTRIBUTE_MESSAGE))
							message = String(
								object.attributes[Composite.ATTRIBUTE_MESSAGE] || "",
							);
						if ((message || "").match(Composite.PATTERN_EXPRESSION_CONTAINS))
							message = String(
								Expression.eval(
									serial + ":" + Composite.ATTRIBUTE_MESSAGE,
									message,
								),
							);
					}
					if (Object.usable(message)) {
						var PATTERN_MESSAGE_REDIRECT =
							/^@([_a-z](?:[\w-]*\w)?):\s*(.*?)\s*$/i;
						var redirect = message.match(PATTERN_MESSAGE_REDIRECT);
						if (redirect) {
							var attribute = redirect[1];
							if (
								!(object.statics || {}).hasOwnProperty(
									attribute.toLowerCase(),
								) &&
								!Composite.PATTERN_ATTRIBUTE_STATIC.test(attribute)
							) {
								object.message = {
									attribute: attribute,
								};
								selector.setAttribute(attribute, redirect[2]);
							}
							selector.setCustomValidity(redirect[2]);
						} else {
							selector.setCustomValidity(message);
							if (typeof selector.reportValidity === "function")
								selector.reportValidity();
						}
					}
				}
			}
			if (valid === undefined) return;
			return valid;
		},
		/**
		 * Mounts the as selector passed element(s) with all its children where
		 * a view model binding is possible. Mount is possible for all elements
		 * with ATTRIBUTE_ID, not only for composite objects and their children.
		 *
		 * View-model binding is about linking of HTML elements in markup (view)
		 * with corresponding JavaScript objects (models).
		 *
		 * Models are representable/projectable static JavaScript objects that
		 * can provide and receive data, states and interactions for views,
		 * comparable to managed beans and DTOs. As singleton/facade/delegate,
		 * they can use other components and abstractions, contain business
		 * logic themselves, and be a link between the user interface (view) and
		 * middleware (backend).
		 *
		 * The required view model binding is part of the Model View Controller
		 * and the Composite API.
		 *
		 * The view as presentation and user interface for interactions and the
		 * model are primarily decoupled. For the MVVM approach as an extension
		 * of the MVC, the controller establishes the bidirectional connection
		 * between view and model, which means that no manual implementation and
		 * declaration of events, interaction or synchronization is required.
		 *
		 *     Principles
		 *     ----
		 * Components are a static JavaScript objects (models). Namespaces are
		 * supported, but they must be syntactically valid. Objects in objects
		 * is possible through the namespaces (as static inner class).
		 *
		 *     Binding
		 *     ----
		 * The object constraint only includes what has been implemented in the
		 * model (snapshot). An automatic extension of the models at runtime by
		 * the renderer is not detected/supported, but can be implemented in the
		 * application logic - this is a conscious decision!
		 *     Case study:
		 * In the markup there is a composite with a property x. There is a
		 * corresponding JavaScript object (model) for the composite but without
		 * the property x. The renderer will mount the composite with the
		 * JavaScript model, the property x will not be found in the model and
		 * will be ignored. At runtime, the model is modified later and the
		 * property x is added. The renderer will not detect the change in the
		 * model and the property x will not be mounted during re-rendering.
		 * Only when the composite is completely removed from the DOM (e.g. by a
		 * condition) and then newly added to the DOM, the property x is also
		 * mounted, because the renderer then uses the current snapshot of the
		 * model and the property x also exists in the model.
		 *
		 *     Validation
		 *     ----
		 * Details are described to Composite.validate(selector, lock)
		 *
		 *     Synchronization
		 *     ----
		 * View model binding and synchronization assume that a corresponding
		 * static JavaScript object/model exists in the same namespace for the
		 * composite. During synchronization, the element must also exist as a
		 * property in the model. Accepted are properties with a primitive data
		 * type and objects with a property value. The synchronization expects a
		 * positive validation, otherwise it will not be executed.
		 *
		 *     Invocation
		 *     ---
		 * For events, actions can be implemented in the model. Actions are
		 * static methods in the model whose name begins with 'on' and is
		 * followed by the name (camel case) of the event. As an argument, the
		 * occurring event is passed. The action methods can have a return
		 * value, but do not have to. If their return value is false, the event
		 * and thus the default action of the browser is cancelled. The
		 * invocation expects a positive validation, otherwise it will not be
		 * executed.
		 *
		 *     Events
		 *     ----
		 * Composite.EVENT_MOUNT_START
		 * Composite.EVENT_MOUNT_NEXT
		 * Composite.EVENT_MOUNT_END
		 *
		 *     Queue and Lock:
		 *     ----
		 * The method used a simple queue and transaction management so that the
		 * concurrent execution of rendering works sequentially in the order of
		 * the method call.
		 *
		 * @param {Element|string} selector DOM element or a string
		 * @param {boolean} lock Unlocking of the model validation
		 * @throws {Error} In the following cases:
		 *     - namespace is not valid or is not supported
		 *     - namespace cannot be created if it already exists as a method
		 */
		mount: function mount(selector, lock) {
			Composite.mount.queue = Composite.mount.queue || [];

			// The lock locks concurrent mount requests.
			// Concurrent mounting causes unexpected effects.
			if (Composite.mount.lock && Composite.mount.lock !== lock) {
				if (!Composite.mount.queue.includes(selector))
					Composite.mount.queue.push(selector);
				return;
			}
			lock = Composite.lock(Composite.mount, selector);
			try {
				if (typeof selector === "string") {
					selector = selector.trim();
					if (!selector) return;
					var nodes = document.querySelectorAll(selector);
					nodes.forEach(function (node) {
						return Composite.mount(node, lock.share());
					});
					return;
				}

				// Exclusive for elements
				// and without multiple object binding
				// and script and style elements are not supported
				if (
					!(selector instanceof Element) ||
					Composite.mount.queue.includes(selector) ||
					selector.nodeName.match(Composite.PATTERN_ELEMENT_IGNORE)
				)
					return;

				// An element/selector should only be mounted once.
				Composite.mount.stack = Composite.mount.stack || [];
				if (Composite.mount.stack.includes(selector)) return;
				var serial = selector.ordinal();
				var object = _render_meta[serial];

				// Objects that were not rendered should not be mounted. This
				// can happen if new DOM elements are created during rendering
				// that are rendered later.
				if (!(object instanceof Object)) return;
				var identifier = object.attributes[Composite.ATTRIBUTE_ID];

				// The explicit events are declared by ATTRIBUTE_EVENTS. The
				// model can, but does not have to, implement the corresponding
				// method. Explicit events are mainly used to synchronize view
				// and model and to trigger targets of ATTRIBUTE_RENDER.
				var events = object.attributes.hasOwnProperty(
					Composite.ATTRIBUTE_EVENTS,
				)
					? object.attributes[Composite.ATTRIBUTE_EVENTS]
					: "";
				events = String(events || "");
				events = events.toLowerCase().split(/\s+/);
				events = events.filter(function (event, index, array) {
					return (
						Composite.PATTERN_EVENT_FILTER.includes(event) &&
						array.indexOf(event) === index
					);
				});

				// There must be a corresponding model.
				var meta = _mount_lookup(selector);
				if (meta instanceof Object && identifier) {
					// The implicit assignment is based on the on-event-methods
					// implemented in the model. These are determined and added
					// to the list of events if the events have not yet been
					// explicitly declared. But this is only useful for elements
					// with an ID. Since mounting is performed recursively on
					// the child nodes, it should be prevented that child nodes
					// are assigned the events of the parents.

					// Events are possible for composites and their interactive
					// elements. For this purpose, composites define the scope
					// with their model. Interactive composite elements are an
					// object in the model that contains the interaction methods
					// corresponding to the events. Therefore, the scope of
					// interactive composite elements shifts from the model to
					// the according object. In all cases, a name-based
					// alignment in the model and thus ATTRIBUTE_ID is required
					// Anonymous interaction elements do not have this alignment
					// and no scope can be determined.

					var model = meta.model;
					if (meta.target !== undefined)
						if (_typeof(meta.target) === "object") model = meta.target;
						else model = null;
					for (var entry in model)
						if (
							typeof model[entry] === "function" &&
							entry.match(Composite.PATTERN_EVENT_FUNCTIONS)
						) {
							entry = entry.substring(2).toLowerCase();
							if (!events.includes(entry)) events.push(entry);
						}
					var prototype = model ? Object.getPrototypeOf(model) : null;
					while (prototype) {
						Object.getOwnPropertyNames(prototype).forEach(function (entry) {
							if (
								typeof model[entry] === "function" &&
								entry.match(Composite.PATTERN_EVENT_FUNCTIONS)
							) {
								entry = entry.substring(2).toLowerCase();
								if (!events.includes(entry)) events.push(entry);
							}
						});
						prototype = Object.getPrototypeOf(prototype);
					}
				}

				// The determined events are registered.
				Composite.mount.stack.push(selector);
				events.forEach(function (event) {
					selector.addEventListener(event.toLowerCase(), function (event) {
						var target = event.currentTarget;
						var serial = target.ordinal();
						var object = _render_meta[serial];
						var action = event.type.toLowerCase();
						if (!Composite.PATTERN_EVENT_FILTER.includes(action)) return;
						action = Composite.PATTERN_EVENT_FILTER.indexOf(action);
						action = Composite.PATTERN_EVENT_NAMES[action];
						var result;

						// Step 1: Validation

						var valid = Composite.validate(target, false);

						// There must be a corresponding model.
						var meta = _mount_lookup(target);
						if (meta instanceof Object) {
							var value;
							if (target instanceof Element) {
								if (
									target.tagName.match(/^input$/i) &&
									target.type.match(/^radio|checkbox/i)
								)
									value = target.checked;
								else if (
									target.tagName.match(/^select/i) &&
									"selectedIndex" in target
								)
									value = target.options[target.selectedIndex].value;
								else if (Composite.ATTRIBUTE_VALUE in target)
									value = target[Composite.ATTRIBUTE_VALUE];
							}

							// Validation works strictly by default. This means
							// that the value must explicitly be true and only
							// then is the input data synchronized with the
							// model via the HTML elements. This protects
							// against invalid data in the models which may then
							// be reflected in the view. If ATTRIBUTE_VALIDATE
							// is declared as optional, this behaviour can be
							// specifically deactivated and the input data is
							// then always synchronized with the model. The
							// effects of validation are then only optional.
							if (
								String(
									object.attributes[Composite.ATTRIBUTE_VALIDATE],
								).toLowerCase() === "optional" ||
								valid === true
							) {
								// Step 2: Synchronisation

								// Synchronization expects a data field. It can
								// be a simple data type or an object with the
								// property value. Other targets are ignored.
								// The synchronization expects a successful
								// validation, otherwise it will not be executed.
								var accept = function accept(property) {
									var type = _typeof(property);
									if (property === undefined) return false;
									if (type === "object" && property === null) return true;
									return (
										type === "boolean" || type === "number" || type === "string"
									);
								};

								// A composite is planned as a container for
								// sub-elements. Theoretically, an input element
								// can also be a composite and thus both model
								// and input element / data field. In this case,
								// a composite can assign a value to itself.
								if (accept(meta.target)) {
									meta.target = value;
								} else if (_typeof(meta.target) === "object") {
									if (accept(meta.target[Composite.ATTRIBUTE_VALUE]))
										meta.target[Composite.ATTRIBUTE_VALUE] = value;
								} else if (meta.target === undefined) {
									if (accept(meta.model[Composite.ATTRIBUTE_VALUE]))
										meta.model[Composite.ATTRIBUTE_VALUE] = value;
								}

								// Step 3: Invocation

								// Events are possible for composites and their
								// interactive elements. For this purpose,
								// composites define the scope with their model.
								// Interactive composite elements are an object
								// in the model that contains the interaction
								// methods corresponding to the events.
								// Therefore, the scope of interactive composite
								// elements shifts from the model to the
								// according object. In all cases, a name-based
								// alignment in the model and thus ATTRIBUTE_ID
								// is required. Anonymous interaction elements
								// do not have this alignment and no scope can
								// be determined.

								var _model = meta.model;
								if (meta.target !== undefined)
									if (meta.target && _typeof(meta.target) === "object")
										_model = meta.target;
									else _model = null;

								// For the event, a corresponding method is
								// searched in the model that can be called. If
								// their return value is false, the event and
								// thus the default action of the browser is
								// cancelled. The invocation expects a positive
								// validation, otherwise it will not be executed.
								if (_model && typeof _model["on" + action] === "function")
									result = _model["on" + action].call(_model, event);
							}
						}

						// Step 4: Rendering

						// Rendering is performed in all cases. When an event
						// occurs, all elements that correspond to the query
						// selector rendering are updated.
						var events = object.attributes.hasOwnProperty(
							Composite.ATTRIBUTE_EVENTS,
						)
							? object.attributes[Composite.ATTRIBUTE_EVENTS]
							: "";
						events = String(events || "");
						events = events.toLowerCase().split(/\s+/);
						if (events.includes(action.toLowerCase())) {
							var render = object.attributes.hasOwnProperty(
								Composite.ATTRIBUTE_RENDER,
							)
								? object.attributes[Composite.ATTRIBUTE_RENDER]
								: "";
							render = String(render || "");
							if ((render || "").match(Composite.PATTERN_EXPRESSION_CONTAINS))
								render = Expression.eval(
									serial + ":" + Composite.ATTRIBUTE_RENDER,
									render,
								);
							Composite.render(render);
						}
						if (meta instanceof Object) {
							if (
								(result !== undefined && !result) ||
								(valid !== undefined && valid !== true)
							)
								event.preventDefault();
							if (result !== undefined) return result;
						}
					});
				});

				// The current value in the model must be set in the HTML
				// element if the element has a corresponding value property.
				//     model -> view
				// This is only useful for elements with an ID. Because mounting
				// is performed recursively on the child nodes, it should be
				// prevented that child nodes are assigned.
				if (meta && meta.target && identifier) {
					var value = meta.target;
					if (meta.target instanceof Object)
						value =
							Composite.ATTRIBUTE_VALUE in meta.target
								? meta.target.value
								: undefined;
					if (value !== undefined) {
						if (
							selector.tagName.match(/^input$/i) &&
							selector.type.match(/^radio|checkbox/i)
						)
							selector.checked = value;
						else if (Composite.ATTRIBUTE_VALUE in selector)
							selector[Composite.ATTRIBUTE_VALUE] = value;
					}
				}
			} finally {
				lock.release();
			}
		},
		/**
		 * There are several ways to customize the renderer.
		 *
		 *     Custom Tag (Macro)
		 *     ----
		 * Macros are completely user-specific. The return value determines
		 * whether the standard functions are used or not. Only the return value
		 * false (not void, not empty) terminates the rendering for the macro
		 * without using the standard functions of the rendering.
		 *
		 *     Composite.customize(tag:string, function(element) {...});
		 *
		 *     Custom Selector
		 *     ----
		 * Selectors work similar to macros. Unlike macros, selectors use a CSS
		 * selector to detect elements. This selector must match the current
		 * element from the point of view of the parent. Selectors are more
		 * flexible and multifunctional. Therefore, different selectors and thus
		 * different functions can match one element. In this case, all
		 * implemented callback methods are performed. The return value
		 * determines whether the loop is aborted or not. Only the return value
		 * false (not void, not empty) terminates the loop over other selectors
		 * and the rendering for the selector without using the standard
		 * functions of the rendering.
		 *
		 *     Composite.customize(selector:string, function(element) {...});
		 *
		 * Macros and selectors are based on a text key. If this key is used
		 * more than once, existing macros and selectors will be overwritten.
		 *
		 *     Custom Interceptor
		 *     ---
		 * Interceptors are a very special way to customize. Unlike the other
		 * ways, here the rendering is not shifted into own implementations.
		 * With an interceptor, an element is manipulated before rendering and
		 * only if the renderer processes the element initially. This makes it
		 * possible to make individual changes to the attributes or the markup
		 * before the renderer processes them. This does not affect the
		 * implementation of the rendering.
		 *
		 *     Composite.customize(function(element) {...});
		 *
		 *     Configuration
		 *     ---
		 * The customize method also supports the configuration of the
		 * composite. For this purpose, the parameter and the value are passed.
		 *
		 *     Composite.customize(parameter:string, value);
		 *
		 * Parameters start with @ in difference to Interceptor/Selector/Tag.
		 *
		 *     @ATTRIBUTES-STATICS
		 * Static attributes are a component of the hardening of the markup.
		 * These attributes are observed by the renderer and manipulation is
		 * made more difficult by restoring the original value. As value one or
		 * more attributes separated by spaces are expected. The method can be
		 * called several times. This has a cumulative effect and the attributes
		 * are collected. It is not possible to remove attributes.
		 *
		 *     Composite.customize("@ATTRIBUTES-STATICS", "...");
		 *
		 * @param {...*} variants Variants for customization
		 * @throws {Error} In following cases:
		 *     - Namespace is not valid or is not supported
		 *     - Callback function is not implemented correctly
		 */
		customize: function customize() {
			var scope;
			if (arguments.length > 0)
				scope = arguments.length <= 0 ? undefined : arguments[0];

			// STATIC is used for hardening attributes in markup. Hardening
			// makes the manipulation of attributes more difficult. At runtime,
			// additional attributes can be declared as static. However, this
			// function is not cheap, since the values of the attributes used at
			// that time must be determined for all elements to be restored, for
			// which purpose the complete DOM is analyzed (full DOM scan). The
			// composite-specific static attributes (PATTERN_ATTRIBUTE_ACCEPT)
			// are excluded from this function because they are already actively
			// monitored by the MutationObserver.
			if (
				typeof scope === "string" &&
				arguments.length > 1 &&
				typeof (arguments.length <= 1 ? undefined : arguments[1]) ===
					"string" &&
				scope.match(/^@ATTRIBUTES-STATICS$/i)
			) {
				var changes = [];
				var statics = ((arguments.length <= 1 ? undefined : arguments[1]) || "")
					.trim()
					.split(/\s+/);
				statics.forEach(function (entry) {
					entry = entry.toLowerCase();
					if (
						!_statics.has(entry) &&
						!entry.match(Composite.PATTERN_ATTRIBUTE_ACCEPT)
					) {
						_statics.add(entry);
						changes.push(entry);
					}
				});
				var _scanning = function scanning(element) {
					if (!(element instanceof Element)) return;
					var serial = element.ordinal();
					var object = _render_meta[serial];
					if (!object) return;
					changes.forEach(function (attribute) {
						object.statics = object.statics || {};
						if (
							object.statics.hasOwnProperty[attribute] &&
							object.statics[attribute] !== undefined
						)
							return;
						if (element.hasAttribute(attribute))
							object.statics[attribute] = element.getAttribute(attribute);
						else object.statics[attribute] = null;
					});
					Array.from(element.childNodes).forEach(function (node) {
						return _scanning(node);
					});
				};
				_scanning(document.body);
				return;
			}

			// If only one argument of type function is passed, the method is
			// registered as an interceptor.
			if (typeof scope === "function" && arguments.length === 1) {
				_interceptors.add(scope);
				return;
			}

			// Custom tags, here also called macro, are based on a
			// case-insensitive tag name (key) and a render function (value). In
			// this function, the tag name and the render functions are
			// registered and a RegExp will be created so that the custom tags
			// can be found faster.
			if (typeof scope !== "string")
				throw new TypeError("Invalid scope: " + _typeof(scope));
			var callback =
				arguments.length > 1
					? arguments.length <= 1
						? undefined
						: arguments[1]
					: null;
			if (
				typeof callback !== "function" &&
				callback !== null &&
				callback !== undefined
			)
				throw new TypeError("Invalid callback: " + _typeof(callback));
			scope = scope.trim();
			if (scope.length <= 0) throw new Error("Invalid scope");
			if (scope.match(Composite.PATTERN_CUSTOMIZE_SCOPE)) {
				if (callback === null) _macros["delete"](scope.toLowerCase());
				else _macros.set(scope.toLowerCase(), callback);
			} else {
				var hash = scope.toLowerCase().hashCode();
				if (callback === null) _selectors["delete"](hash);
				else
					_selectors.set(hash, {
						selector: scope,
						callback: callback,
					});
			}
		},
		/**
		 * Rendering involves updating and, if necessary, reconstructing an HTML
		 * element and all its children. The declarative commands for rendering
		 * (attributes) and the expression language are executed.
		 *
		 *     Queue and Lock:
		 *     ----
		 * The method used a simple queue and transaction management so that the
		 * concurrent execution of rendering works sequentially in the order of
		 * the method call.
		 *
		 *     Element meta-object
		 *     ----
		 * With the processed HTML elements and text nodes, simplified
		 * meta-objects are created. The serial, the reference on the HTML
		 * element and the initial attributes (which are required for rendering)
		 * are stored there.
		 *
		 *     Serial
		 *     ----
		 * Serial is a special extension of the JavaScript API of the object and
		 * creates a unique ID for each object. This ID can be used to compare,
		 * map and reference a wide variety of objects. Composite and rendering
		 * use serial, since this cannot be changed via the markup.
		 *
		 * The following attributes and elements are supported:
		 *
		 * - Attributes:
		 *     COMPOSITE    INTERVAL    RENDER
		 *     CONDITION    ITERATE     VALIDATE
		 *     EVENTS       MESSAGE
		 *     ID           OUTPUT
		 *     IMPORT       RELEASE
		 *
		 * - Expression Language
		 * - Scripting
		 * - Customizing
		 *   Tag, Selector, Interceptor
		 *
		 * Details are described in the documentation:
		 * https://github.com/seanox/aspect-js/blob/master/manual/en/markup.md#contents-overview
		 *
		 * @param {Element|string} selector DOM element or a string
		 * @param {boolean} lock Unlocking of the model validation
		 * @throws {Error} In case of errors occurring
		 */
		render: function render(selector, lock) {
			Composite.render.queue = Composite.render.queue || [];
			if (!selector && Composite.render.queue.length <= 0) return;

			// The lock locks concurrent render requests. Concurrent rendering
			// causes unexpected states due to manipulations at the DOM. HTML
			// elements that are currently being processed can be omitted or
			// replaced from the DOM. Access to parent and child elements may
			// then no longer be possible.
			if (Composite.render.lock && Composite.render.lock !== lock) {
				if (!Composite.render.queue.includes(selector))
					Composite.render.queue.push(selector);
				Composite.asynchron(Composite.render);
				return;
			}
			if (!selector) selector = Composite.render.queue[0];

			// even before rendering, possible expressions in the initial ID
			// should be resolved
			if (selector instanceof Element && !_render_meta[selector.ordinal()]) {
				var id = selector.getAttribute(Composite.ATTRIBUTE_ID) || "";
				if (id.match(Composite.PATTERN_EXPRESSION_CONTAINS)) {
					id = Expression.eval(
						selector.ordinal() + ":" + Composite.ATTRIBUTE_ID,
						id,
					);
					selector.setAttribute(Composite.ATTRIBUTE_ID, id);
				}
			}
			lock = Composite.lock(Composite.render, selector);
			var origin = selector;
			try {
				if (typeof selector === "string") {
					selector = selector.trim();
					if (!selector) return;
					var nodes = document.querySelectorAll(selector);
					nodes.forEach(function (node) {
						return Composite.render(node, lock.share());
					});
					return;
				}
				if (!(selector instanceof Node)) return;

				// If a custom tag exists, the action is executed. Custom tag
				// are completely user-specific. The return value determines
				// whether the standard functions are used or not. Only the
				// return value false (not void, not empty) terminates the
				// rendering for the macro without using the standard functions.
				var macro = _macros.get(selector.nodeName.toLowerCase());
				if (macro && macro(selector) === false) return;

				// If a custom selector exists, the action is executed.
				// Selectors work similar to macros. Unlike macros, selectors
				// use a CSS selector to detect elements. This selector must
				// match the current element from the point of view of the
				// parent. Selectors are more flexible and multifunctional.
				// Therefore, different selectors and thus different functions
				// can match one element. In this case, all implemented callback
				// methods are performed. The return value determines whether
				// the loop is aborted or not. Only the return value false (not
				// void, not empty) terminates the loop and the rendering for
				// the selector without using the standard functions.
				if (selector.parentNode) {
					var _iterator2 = _createForOfIteratorHelper(_selectors),
						_step2;
					try {
						for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
							var _step2$value = _slicedToArray(_step2.value, 2),
								key = _step2$value[0],
								_macro3 = _step2$value[1];
							var _nodes = selector.parentNode.querySelectorAll(
								_macro3.selector,
							);
							if (Array.from(_nodes).includes(selector)) {
								if (_macro3.callback(selector) === false) return;
							}
						}
					} catch (err) {
						_iterator2.e(err);
					} finally {
						_iterator2.f();
					}
				}

				// Registers each analysed node/element and minimizes multiple
				// analysis. For registration, the serial of the node/element is
				// used. The node prototype has been enhanced with creation and
				// a get-function. During the analysis, the attributes of an
				// element (not node) containing an expression or all allowed
				// attributes are cached in the memory (_render_meta).

				var serial = selector.ordinal();
				var object = _render_meta[serial];
				if (!object) {
					// Elements included in ignored elements of type: script +
					// style are ignored.
					var _checkElementChainForIgnored =
						function checkElementChainForIgnored(element, regex) {
							return element && element.parentNode
								? regex.test(element.parentNode.nodeName) ||
										_checkElementChainForIgnored(element.parentNode, regex)
								: false;
						};
					if (
						_checkElementChainForIgnored(
							selector,
							Composite.PATTERN_ELEMENT_IGNORE,
						)
					)
						return;

					// Interceptors are a very special way to customize. Unlike
					// the other ways, here the rendering is not shifted into
					// own implementations. With an interceptor, an element is
					// manipulated before rendering and only if the renderer
					// processes the element initially. This makes it possible
					// to make individual changes to the attributes or the
					// markup before the renderer processes them. This does not
					// affect the implementation of the rendering.
					// Example of the method call with an interceptor:
					//     Composite.customize(function(element) {...});
					_interceptors.forEach(function (interceptor) {
						return interceptor.call(null, selector);
					});
					object = {
						serial: serial,
						element: selector,
						attributes: {},
					};
					_render_meta[serial] = object;
					if (selector instanceof Element && selector.attributes) {
						Array.from(selector.attributes).forEach(function (attribute) {
							attribute = {
								name: attribute.name.toLowerCase(),
								value: (attribute.value || "").trim(),
							};
							if (
								attribute.value.match(Composite.PATTERN_EXPRESSION_CONTAINS) ||
								attribute.name.match(Composite.PATTERN_ATTRIBUTE_ACCEPT) ||
								_statics.has(attribute.name)
							) {
								// Remove all internal attributes but not the
								// statics. Static attributes are still used in
								// the markup or for the rendering.
								if (
									attribute.name.match(Composite.PATTERN_ATTRIBUTE_ACCEPT) &&
									!attribute.name.match(Composite.PATTERN_ATTRIBUTE_STATIC) &&
									!_statics.has(attribute.name) &&
									attribute.name !== Composite.ATTRIBUTE_RELEASE
								)
									selector.removeAttribute(attribute.name);
								object.attributes[attribute.name] = attribute.value;

								// Special case: ATTRIBUTE_ID/ATTRIBUTE_EVENTS
								// Both attributes are used initially for the
								// object and event binding. Expressions are
								// supported for the attributes, but these are
								// only initially resolved during the first
								// rendering.

								// Special case: static attributes
								// These attributes are used initially markup
								// harding. Expressions are supported for the
								// attributes, but these are only initially
								// resolved during the first rendering.

								if (
									attribute.value.match(
										Composite.PATTERN_EXPRESSION_CONTAINS,
									) &&
									(attribute.name.match(Composite.PATTERN_ATTRIBUTE_STATIC) ||
										attribute.name === Composite.ATTRIBUTE_ID ||
										attribute.name === Composite.ATTRIBUTE_EVENTS ||
										_statics.has(attribute.name))
								)
									attribute.value = Expression.eval(
										selector.ordinal() + ":" + attribute.name,
										attribute.value,
									);

								// The initial value of the static attribute is
								// registered for the restore. This is a part of
								// the markup hardening of the MutationObserver.
								if (
									attribute.name.match(Composite.PATTERN_ATTRIBUTE_STATIC) ||
									attribute.name === Composite.ATTRIBUTE_ID ||
									attribute.name === Composite.ATTRIBUTE_EVENTS
								)
									object.attributes[attribute.name] = attribute.value;

								// The initial value of the static attribute is
								// registered for the restore. This is a part of
								// the markup hardening of the MutationObserver.
								object.statics = object.statics || {};
								if (_statics.has(attribute.name))
									object.statics[attribute.name] = attribute.value;

								// The result of the expression must be written
								// back to the static attributes.
								if (
									attribute.name.match(Composite.PATTERN_ATTRIBUTE_STATIC) ||
									attribute.name === Composite.ATTRIBUTE_ID ||
									attribute.name === Composite.ATTRIBUTE_EVENTS ||
									_statics.has(attribute.name)
								)
									selector.setAttribute(attribute.name, attribute.value);
							}
						});

						// ATTRIBUTE_CONDITION: If an HTML element uses this
						// attribute, a text node is created for the element as
						// a marker with a corresponding meta-object for the
						// details of the element, condition and the outer HTML
						// as a template. Then the HTML element in the DOM is
						// replaced by the marker as text node. The original
						// selector is switched to the text node and rendering
						// continues.

						if (
							object.attributes.hasOwnProperty(Composite.ATTRIBUTE_CONDITION)
						) {
							var expression = (
								object.attributes[Composite.ATTRIBUTE_CONDITION] || ""
							).trim();
							if (!expression.match(Composite.PATTERN_EXPRESSION_CONDITION))
								throw new Error(
									"Invalid condition".concat(
										expression ? ": " + expression : "",
									),
								);

							// The marker and its meta-object are created. This
							// prevents the MutationObserver from rendering the
							// marker, because it is then already known.
							var marker = document.createTextNode("");
							var template = selector.cloneNode(true);
							var attributes = object.attributes;
							object = {
								serial: marker.ordinal(),
								element: marker,
								attributes: attributes,
								condition: {
									expression: expression,
									template: template,
									marker: marker,
									element: null,
									attributes: attributes,
									complete: false,
									share: null,
								},
							};
							_render_meta[object.serial] = object;

							// The meta-object for the HTML element is removed,
							// because only the new marker is relevant.
							delete _render_meta[serial];

							// The marker is initially created and in the DOM.
							selector.parentNode.replaceChild(marker, selector);

							// The rendering of the marker continues
							// recursively, so that objects do not have to be
							// switched/rewritten and the rendering can be
							// finished here.
							Composite.render(marker, lock.share());
							return;
						}

						// Load modules/components/composite resources.
						if (object.attributes.hasOwnProperty(Composite.ATTRIBUTE_COMPOSITE))
							Composite.include(selector);
					}
				}

				// ATTRIBUTE_CONDITION: At this point, the renderer encounters a
				// condition. This can be the marker or the element. Which one
				// exactly is unimportant. In both cases, we decide here what to
				// do and what happens.

				// If the current lock corresponds to the share from the
				// condition object, the rendering for marker and output has
				// already been done and nothing more needs to be done.
				if (
					object.hasOwnProperty("condition") &&
					object.condition.share === lock.ordinal()
				)
					return;

				// If share absolute does not match the lock, the condition must
				// be validated initially.
				if (
					object.hasOwnProperty("condition") &&
					Math.abs(object.condition.share || 0) !== lock.ordinal()
				) {
					object.condition.share = -lock.ordinal();

					// The final rendering is recursive and uses a negated
					// (negative) lock as indicator that the condition has
					// already been validated.

					var condition = object.condition;

					// The condition must be explicitly true, otherwise the
					// output is removed from the DOM and the rendering ends.
					// The cleanup will be done by the MutationObserver.
					var _expression = Expression.eval(
						serial + ":" + Composite.ATTRIBUTE_CONDITION,
						condition.expression,
					);
					selector.nodeValue = _expression instanceof Error ? _expression : "";
					if (_expression !== true) {
						// Because a condition can consist of two elements
						// (marker and conditional element), it can happen that
						// when rendering a NodeList, the marker is hit first,
						// which then deletes the element, and the NodeList
						// still contains the element that has already been
						// deleted. Then this place is also called, but then the
						// node/element has no parent.
						if (condition.element && condition.element.parentNode)
							condition.element.parentNode.removeChild(condition.element);
						condition.element = null;
						condition.share = lock.ordinal();
						return;
					}

					// If the output already exists, the content must be
					// rendered recursively, so that objects do not have to be
					// switched and the rendering can be finished here.
					if (condition.element) {
						Composite.render(condition.element, lock.share());
						return;
					}
					condition.element = condition.template.cloneNode(true);
					var element = condition.element;
					var _attributes = Object.assign({}, condition.attributes);
					_render_meta[element.ordinal()] = {
						serial: element.ordinal(),
						element: element,
						attributes: _attributes,
						condition: condition,
					};

					// Load modules/components/composite resources.
					// That no resources are loaded more than once is taken care
					// of by the include method ot Composite.
					if (_attributes.hasOwnProperty(Composite.ATTRIBUTE_COMPOSITE))
						Composite.include(element);
					selector.parentNode.insertBefore(element, selector);

					// The rendering of the marker continues recursively, so
					// that objects do not have to be switched/rewritten and the
					// rendering can be finished here.

					Composite.render(condition.element, lock.share());
					return;
				}

				// If share matches the negated lock, then the content must be
				// rendered normally, but only once. Therefore, share is
				// finalized by the positive lock.
				if (
					object.hasOwnProperty("condition") &&
					object.condition.share !== -lock.ordinal()
				)
					object.condition.share = lock.ordinal();

				// A text node contain static and dynamic contents as well as
				// parameters. Dynamic contents and parameters are formulated
				// as expressions, but only the dynamic contents are output.
				// Parameters are interpreted, but do not generate any output.
				// During initial processing, a text node is analyzed and, if
				// necessary, split into static content, dynamic content and
				// parameters. To do this, the original text node is replaced by
				// new separate text nodes:
				//     e.g. "text {{expr}} + {{var:expr}}"
				//              ->  ["text ", {{expr}}, " + ", {{var:expr}}]
				//
				// When the text nodes are split, meta-objects are created for
				// them. The meta-objects are compatible with the meta-objects
				// of the rendering methods but use the additional attributes:
				//     Composite.ATTRIBUTE_TEXT, Composite.ATTRIBUTE_NAME and
				//     Composite.ATTRIBUTE_VALUE
				// Only static content uses Composite.ATTRIBUTE_TEXT, dynamic
				// content and parameters use Composite.ATTRIBUTE_VALUE, and
				// only the parameters use Composite.ATTRIBUTE_NAME. For dynamic
				// content the meta-objects also have their own rendering method
				// for generating output. Static content is ignored later during
				// rendering because it is unchangeable.
				if (selector.nodeType === Node.TEXT_NODE) {
					// TEXT_NODE is also used by markers. Markers have no
					// content and no render method and are ignored.
					if (
						typeof object.render === "undefined" &&
						selector.textContent === ""
					)
						return;

					// Text nodes are only analyzed once. Pure text is
					// completely ignored, only text nodes with an expression as
					// value are updated.
					if (object.attributes.hasOwnProperty(Composite.ATTRIBUTE_TEXT))
						return;

					// New/unknown text nodes must be analyzed and prepared. If
					// the meta-object for text nodes Composite.ATTRIBUTE_TEXT
					// and Composite.ATTRIBUTE_VALUE are not contained, it must
					// be new.
					if (object.attributes.hasOwnProperty(Composite.ATTRIBUTE_VALUE)) {
						object.render();
						return;
					}

					// Step 1:
					// If the text node does not contain an expression, the
					// content is static. Static text nodes are marked with the
					// attribute Composite.ATTRIBUTE_TEXT.

					var content = selector.textContent;
					if (content.match(Composite.PATTERN_EXPRESSION_CONTAINS)) {
						// Step 2:
						// All expressions are determined. A meta-object is
						// created for all expressions. In the text content from
						// the text node, the expressions are replaced by a
						// placeholder in the format of the expression with a
						// serial. Empty expressions are removed/ignored.

						// All created meta-objects with an expression have a
						// special render method for updating the text content
						// of the text node.

						// Step 3:
						// The format of the expression distinguishes whether it
						// is a parameter or an output expression. Parameter
						// expressions start with the name of the parameter and
						// are interpreted later, but do not generate any output.

						content = content.replace(
							Composite.PATTERN_EXPRESSION_CONTAINS,
							function (match) {
								if (!match.substring(2, match.length - 2).trim()) return "";
								var node = document.createTextNode("");
								var serial = node.ordinal();
								var object = {
									serial: serial,
									element: node,
									attributes: {},
									value: null,
									render: function render() {
										var word = "";
										if (
											this.attributes.hasOwnProperty(Composite.ATTRIBUTE_NAME)
										) {
											var name = String(
												this.attributes[Composite.ATTRIBUTE_NAME] || "",
											).trim();
											var value = String(
												this.attributes[Composite.ATTRIBUTE_VALUE] || "",
											).trim();
											window[name] = Expression.eval(
												this.serial + ":" + Composite.ATTRIBUTE_VALUE,
												value,
											);
										} else {
											word = String(
												this.attributes[Composite.ATTRIBUTE_VALUE] || "",
											);
											word = Expression.eval(
												this.serial + ":" + Composite.ATTRIBUTE_VALUE,
												word,
											);
										}
										this.value = word;
										this.element.textContent = word !== undefined ? word : "";
									},
								};
								var param = match.match(Composite.PATTERN_EXPRESSION_VARIABLE);
								if (param) {
									object.attributes[Composite.ATTRIBUTE_NAME] = param[1];
									object.attributes[Composite.ATTRIBUTE_VALUE] =
										"{{" + param[2] + "}}";
								} else object.attributes[Composite.ATTRIBUTE_VALUE] = match;
								_render_meta[serial] = object;
								return "{{" + serial + "}}";
							},
						);

						// Step 4:
						// The prepared text with expression placeholders is
						// analyzed. All placeholders are determined and the
						// text is split at the placeholders. The result is an
						// array of words. Each word is a new text nodes with
						// static text or dynamic content.

						if (content.match(Composite.PATTERN_EXPRESSION_CONTAINS)) {
							var words = content.split(/(\{\{\d+\}\})/);
							words.forEach(function (word, index, array) {
								if (word.match(/^\{\{\d+\}\}$/)) {
									var _serial2 = parseInt(
										word.substring(2, word.length - 2).trim(),
									);
									var _object = _render_meta[_serial2];
									Composite.fire(Composite.EVENT_RENDER_NEXT, _object.element);
									_object.render();
									array[index] = _object.element;
								} else {
									var node = document.createTextNode(word);
									var _serial3 = node.ordinal();
									var _object2 = {
										serial: _serial3,
										element: node,
										attributes: {},
									};
									Composite.fire(Composite.EVENT_RENDER_NEXT, _object2.element);
									_object2.element.textContent = word;
									_object2.attributes[Composite.ATTRIBUTE_TEXT] = word;
									_render_meta[_serial3] = _object2;
									array[index] = _object2.element;
								}
							});

							// Step 5:
							// The newly created text nodes are inserted before
							// the current text node. The current text node can
							// then be deleted, since its content is displayed
							// using the newly created text nodes.

							// For internal and temporary calls, no parent can
							// exist.
							if (selector.parentNode === null) return;

							// The new text nodes are inserted before the
							// current element one.
							words.forEach(function (node) {
								return selector.parentNode.insertBefore(node, selector);
							});

							// The current element will be removed.
							selector.parentNode.removeChild(selector);
							return;
						}

						// If the text content contains empty expressions, these
						// are corrected and the content is used as static.
						selector.nodeValue = content;
					}
					object.attributes[Composite.ATTRIBUTE_TEXT] = content;
					return;
				}
				if (!(selector instanceof Element)) return;

				// Only composites are mounted based on their model. This
				// excludes markers of conditions as text nodes.
				if (object.attributes.hasOwnProperty(Composite.ATTRIBUTE_COMPOSITE)) {
					var locate = _mount_locate2(selector);
					var model = (locate.namespace || []).concat(locate.model).join(".");
					if (!_models.has(model)) {
						_models.add(model);
						model = Object.lookup(model);
						if (model && typeof model.dock === "function") {
							var meta = _mount_lookup(selector);
							Composite.fire(Composite.EVENT_MODULE_DOCK, meta);
							model.dock.call(model);
							Composite.fire(Composite.EVENT_MODULE_READY, meta);
						}
					}
				}

				// The attributes ATTRIBUTE_EVENTS, ATTRIBUTE_VALIDATE and
				// ATTRIBUTE_RENDER are processed in Composite.mount(selector)
				// the view model binding and are only mentioned here for
				// completeness.

				// The attribute ATTRIBUTE_RELEASE has no functional
				// implementation. This is exclusively inverse indicator that an
				// element was rendered. The renderer removes this attribute
				// when an element is rendered. This effect can be used for CSS
				// to display elements only in rendered state.

				// ATTRIBUTE_IMPORT: This declaration loads the content and
				// replaces the inner HTML of an element with the content.
				// The following data types are supported:
				// 1. Node and NodeList as the result of an expression.
				// 2. URL (relative or absolute) loads markup/content from a
				//    remote data source via the HTTP method GET
				// 2. DataSource-URL loads and transforms DataSource data.
				// 3. Everything else is output directly as string/text.
				// The import is exclusive, similar to ATTRIBUTE_OUTPUT, thus
				// overwriting any existing content. The recursive (re)rendering
				// is initiated via the MutationObserver. If the content can be
				// loaded successfully, ATTRIBUTE_IMPORT is removed.
				if (object.attributes.hasOwnProperty(Composite.ATTRIBUTE_IMPORT)) {
					selector.innerHTML = "";
					var value = object.attributes[Composite.ATTRIBUTE_IMPORT];
					if ((value || "").match(Composite.PATTERN_EXPRESSION_CONTAINS))
						value = Expression.eval(
							serial + ":" + Composite.ATTRIBUTE_IMPORT,
							String(value),
						);
					if (!value) {
						delete object.attributes[Composite.ATTRIBUTE_IMPORT];
					} else if (value instanceof Element || value instanceof NodeList) {
						selector.appendChild(value, true);
						delete object.attributes[Composite.ATTRIBUTE_IMPORT];
					} else if (String(value).match(Composite.PATTERN_DATASOURCE_URL)) {
						var data = String(value).match(Composite.PATTERN_DATASOURCE_URL);
						data[2] = DataSource.fetch("xslt://" + (data[2] || data[1]));
						data[1] = DataSource.fetch("xml://" + data[1]);
						data = DataSource.transform(data[1], data[2]);
						selector.appendChild(data, true);
						var _serial4 = selector.ordinal();
						var _object3 = _render_meta[_serial4];
						delete _object3.attributes[Composite.ATTRIBUTE_IMPORT];
					} else if (_render_cache[value] !== undefined) {
						selector.innerHTML = _render_cache[value];
						var _serial5 = selector.ordinal();
						var _object4 = _render_meta[_serial5];
						delete _object4.attributes[Composite.ATTRIBUTE_IMPORT];
					} else {
						Composite.asynchron(
							function (selector, lock, url) {
								try {
									var request = new XMLHttpRequest();
									request.overrideMimeType("text/plain");
									request.open("GET", url, false);
									request.send();
									if (request.status !== 200)
										throw new Error(
											"HTTP status "
												.concat(request.status, " for ")
												.concat(request.responseURL),
										);
									var _content = request.responseText.trim();
									_render_cache[request.responseURL] = _content;
									selector.innerHTML = _content;
									var _serial6 = selector.ordinal();
									var _object5 = _render_meta[_serial6];
									delete _object5.attributes[Composite.ATTRIBUTE_IMPORT];
								} catch (error) {
									Composite.fire(Composite.EVENT_HTTP_ERROR, error);
									throw error;
								} finally {
									lock.release();
								}
							},
							selector,
							lock.share(),
							value,
						);
					}
				}

				// ATTRIBUTE_OUTPUT: This declaration sets the value or result
				// of an expression as the content of an element.
				// The following data types are supported:
				// 1. Node and NodeList as the result of an expression.
				// 2. DataSource-URL loads and transforms DataSource data.
				// 3. Everything else is output directly as string/text.
				// The output is exclusive, thus overwriting any existing
				// content. The recursive (re)rendering is initiated via the
				// MutationObserver.
				if (object.attributes.hasOwnProperty(Composite.ATTRIBUTE_OUTPUT)) {
					selector.innerHTML = "";
					var _value = object.attributes[Composite.ATTRIBUTE_OUTPUT];
					if ((_value || "").match(Composite.PATTERN_EXPRESSION_CONTAINS))
						_value = Expression.eval(
							serial + ":" + Composite.ATTRIBUTE_OUTPUT,
							String(_value),
						);
					if (String(_value).match(Composite.PATTERN_DATASOURCE_URL)) {
						var _data2 = String(_value).match(Composite.PATTERN_DATASOURCE_URL);
						_data2[2] = DataSource.fetch("xslt://" + (_data2[2] || _data2[1]));
						_data2[1] = DataSource.fetch("xml://" + _data2[1]);
						_data2 = DataSource.transform(_data2[1], _data2[2]);
						selector.appendChild(_data2, true);
					} else if (_value instanceof Node)
						selector.appendChild(_value.cloneNode(true), true);
					else if (_value instanceof NodeList)
						Array.from(_value).forEach(function (node, index) {
							return selector.appendChild(node.cloneNode(true), index === 0);
						});
					else selector.innerHTML = String(_value);
				}

				// ATTRIBUTE_INTERVAL: Interval based rendering. If an HTML
				// element is declared with an interval, this element is
				// periodically updated according to the interval. But for this
				// purpose, it is not reset to the initial state. The interval
				// ends automatically when the element is removed from the DOM
				// as is the case when combined with CONDITION.
				var interval = String(
					object.attributes[Composite.ATTRIBUTE_INTERVAL] || "",
				).trim();
				if (interval && !object.interval) {
					var context = serial + ":" + Composite.ATTRIBUTE_INTERVAL;
					interval = String(Expression.eval(context, interval));
					if (!interval.match(/^\d*$/))
						throw new Error("Invalid interval: " + interval);
					interval = Number.parseInt(interval);
					object.interval = window.setInterval(function () {
						if (!document.body.contains(selector)) {
							window.clearInterval(object.interval);
							delete object.interval;
						} else Composite.render(selector);
					}, interval);
				}

				// ATTRIBUTE_ITERATE: Iterative rendering based on enumeration,
				// lists and arrays. If an HTML element is declared iteratively,
				// its initial inner HTML is used as a template. During
				// iteration, the inner HTML is initially emptied, the template
				// is rendered individually with each iteration cycle and the
				// result is added to the inner HTML.
				// There are some particularities to consider:
				// 1. The internal recursive rendering must be done
				//    sequentially.
				// 2. A global variable is required for the iteration. If this
				//    variable already exists, the existing variable is saved
				//    and restored at the end of the iteration.
				// 3. The variable with the partial meta-object is added at th
				//    beginning of each iteration block as a value expression,
				//    so that no problems with the temporary variable occur
				//    later during partial rendering. This way the block keeps th
				//    meta information it is built on.
				// 4. Variable with meta information about the iteration is used
				//    within the iteration:
				//    e.g iterate={{tempA:Model.list}}
				//            -> tempA = {item, index, data}
				if (object.attributes.hasOwnProperty(Composite.ATTRIBUTE_ITERATE)) {
					if (!object.iterate) {
						var _iterate = String(
							object.attributes[Composite.ATTRIBUTE_ITERATE] || "",
						).trim();
						var match = _iterate.match(Composite.PATTERN_EXPRESSION_VARIABLE);
						if (!match)
							throw new Error(
								"Invalid iterate".concat(_iterate ? ": " + _iterate : ""),
							);
						object.iterate = {
							name: match[1].trim(),
							expression: "{{" + match[2].trim() + "}}",
							items: [],
						};
						object.template = selector.cloneNode(true);
						selector.innerHTML = "";
					}

					// A temporary global variable is required for the
					// iteration. If this variable already exists, the existing
					// is cached and restored at the end of the iteration.

					var _context = serial + ":" + Composite.ATTRIBUTE_ITERATE;
					var iterate = Expression.eval(_context, object.iterate.expression);
					if (iterate instanceof Error) throw iterate;
					if (iterate) {
						delete object.iterate.variable;
						if (eval("typeof " + object.iterate.name + ' !== "undefined"'))
							object.iterate.variable = eval(object.iterate.name);
						if (iterate instanceof XPathResult) {
							var _meta = {
								entry: null,
								array: [],
								iterate: iterate,
							};
							while ((_meta.entry = _meta.iterate.iterateNext()))
								_meta.array.push(_meta.entry);
							iterate = _meta.array;
						} else iterate = Array.from(iterate);
						object.iterate.update =
							object.iterate.items.length !== iterate.length;
						if (object.iterate.update) {
							selector.innerHTML = "";
							object.iterate.items = Array.from(iterate);
							iterate.forEach(function (item, index, array) {
								var meta = {};
								Object.defineProperty(meta, "item", {
									enumerable: true,
									value: item,
								});
								Object.defineProperty(meta, "index", {
									enumerable: true,
									value: index,
								});
								Object.defineProperty(meta, "data", {
									enumerable: true,
									value: array,
								});
								object.iterate.items[index] = meta;
								var data =
									'{{___("' +
									object.iterate.name +
									'", ' +
									serial +
									", " +
									index +
									")}}";
								var node = document.createTextNode(data);
								selector.appendChild(node);
								Composite.render(node, lock.share());
								// For whatever reason, if forEach is used on
								// the NodeList, each time it is appended to the
								// DOM the elements are removed from the
								// NodeList piece by piece.
								Array.from(object.template.cloneNode(true).childNodes).forEach(
									function (node) {
										selector.appendChild(node);
										Composite.render(node, lock.share());
									},
								);
							});
							// The expression to reset the temporary variable is
							// created and inserted at the end of the iteration,
							// which resets the variable to the previous value.
							// This resets the variable to the previous value
							// and thus simulates the effect of own scopes.
							var _data3 =
								'{{___("' + object.iterate.name + '", ' + serial + ")}}";
							var node = document.createTextNode(_data3);
							selector.appendChild(node);
							Composite.render(node, lock.share());
						}
					}
					// The content is finally rendered, the enclosing container
					// element itself, or more precisely the attributes, still
					// needs to be updated.
				}

				// EXPRESSION: The expression in the attributes is interpreted.
				// The expression is stored in a meta-object and loaded from
				// there, the attributes of the element can be overwritten in a
				// render cycle and are available (conserved) for further cycles.
				// A special case is the text element. The result is output here
				// as textContent. Elements of type: script + style are ignored.
				if (!selector.nodeName.match(Composite.PATTERN_ELEMENT_IGNORE)) {
					var _attributes2 = [];
					for (var _key13 in object.attributes)
						if (object.attributes.hasOwnProperty(_key13))
							_attributes2.push(_key13);
					if (
						Composite.ATTRIBUTE_VALUE in selector &&
						object.attributes.hasOwnProperty(Composite.ATTRIBUTE_VALUE) &&
						!_attributes2.includes(Composite.ATTRIBUTE_VALUE)
					)
						_attributes2.push(Composite.ATTRIBUTE_VALUE);
					_attributes2.forEach(function (attribute) {
						// Ignore all internal attributes
						if (
							attribute.match(Composite.PATTERN_ATTRIBUTE_ACCEPT) &&
							!attribute.match(Composite.PATTERN_ATTRIBUTE_STATIC)
						)
							return;
						var value = String(object.attributes[attribute] || "");
						if (!value.match(Composite.PATTERN_EXPRESSION_CONTAINS)) return;
						var context = serial + ":" + attribute;
						value = Expression.eval(context, value);
						// If the type value is undefined, the attribute is
						// removed. Since the attribute contains an expression,
						// the removal is only temporary and is checked again at
						// the next render cycle and possibly inserted again if
						// the expression returns a return value.
						if (value !== undefined) {
							value = String(value).encodeHtml();
							value = value.replace(/"/g, "&quot;");
							// Special case attribute value, here primarily the
							// value of the property must be set, the value of
							// the attribute is optional. Changing the value
							// does not trigger an event, so no unwanted
							// recursions occur.
							if (
								attribute.toLowerCase() === Composite.ATTRIBUTE_VALUE &&
								Composite.ATTRIBUTE_VALUE in selector
							)
								selector.value = value;
							// @-ATTRIBUTE: These are attribute templates for
							// the renderer, which inserts attributes of the
							// same name to them without @. This feature can be
							// applied to all non-composite relevant attributes
							// and avoids that attributes are misinterpreted by
							// the browser before rendering, e.g. if the value
							// uses the expression language. Attributes created
							// from templates behave like other attributes,
							// which includes updating by the renderer.
							if (attribute.startsWith("@")) {
								selector.removeAttribute(attribute);
								attribute = attribute.replace(/^@+/, "");
							}
							selector.setAttribute(attribute, value);
						} else selector.removeAttribute(attribute);
					});
				}

				// Embedded scripting brings some special effects. The default
				// scripting is automatically executed by the browser and
				// independent of rendering. Therefore, the scripting for
				// rendering has been adapted and a new script type have been
				// introduced: composite/javascript. This script type use the
				// normal JavaScript. Unlike type text/javascript, the browser
				// does not recognize them and does not execute the JavaScript
				// code automatically. Only the render recognizes the JavaScript
				// code and executes it in each render cycle when the cycle
				// includes the script element. So the execution of the script
				// element can be combined with ATTRIBUTE_CONDITION.
				if (selector.nodeName.match(Composite.PATTERN_SCRIPT)) {
					var type = (
						selector.getAttribute(Composite.ATTRIBUTE_TYPE) || ""
					).trim();
					if (type.match(Composite.PATTERN_COMPOSITE_SCRIPT)) {
						try {
							Scripting.eval(selector.textContent);
						} catch (error) {
							throw new Error("Composite JavaScript", error);
						}
					}
				}

				// Follow other element children recursively.
				// The following are ignored:
				// - Elements of type: script + style and custom tags
				// - Elements with functions that modify the inner markup
				// - Elements that are iteration
				// These elements manipulate the inner markup.
				// This is intercepted by the MutationObserver.
				if (
					selector.childNodes &&
					!selector.nodeName.match(Composite.PATTERN_ELEMENT_IGNORE) &&
					!(
						object.attributes.hasOwnProperty(Composite.ATTRIBUTE_ITERATE) &&
						object.iterate.update
					)
				) {
					Array.from(selector.childNodes).forEach(function (node) {
						// The rendering is recursive, if necessary the node is
						// then no longer available. For example, if a condition
						// is replaced by the marker.
						if (!selector.contains(node)) return;
						Composite.render(node, lock.share());
					});
				}
				if (selector.hasAttribute(Composite.ATTRIBUTE_RELEASE))
					selector.removeAttribute(Composite.ATTRIBUTE_RELEASE);
			} catch (error) {
				console.error(error);
				Composite.fire(Composite.EVENT_ERROR, error);
				if (origin instanceof Element)
					origin.innerText =
						"Error: " +
						(error.message.match(/(\{\{|\}\})/)
							? "Invalid expression"
							: error.message);
			} finally {
				// The queue is used to prevent elements from being registered for
				// update multiple times during a render cycle when a lock exists.
				// When the selector is rendered, any queued jobs are removed.
				Composite.render.queue = Composite.render.queue.filter(
					function (entry) {
						return entry !== origin;
					},
				);
				lock.release();
			}
		},
		/**
		 * Loads a resource (JS, CSS, HTML are supported).
		 * @param {string} resource Path to the resource
		 * @param {boolean} strict Flag to enforce strict loading
		 * @returns {string|undefined} The content when loading an HTML resource
		 * @throws {Error} In the following cases
		 *     - Unsupported resource type
		 *     - HTTP status other than 200 or 404 (with strict)
		 */
		load: function load(resource, strict) {
			resource = (resource || "").trim();
			if (!resource.match(/\.(js|css|html)(\?.*)?$/i))
				throw new Error(
					"Resource not supported" + (resource ? ": " + resource : ""),
				);
			var normalize = function normalize(path) {
				var anchor = document.createElement("a");
				anchor.href = path;
				return anchor.pathname.replace(/\/{2,}/g, "/");
			};

			// JS and CSS are loaded only once
			resource = normalize(resource);
			if (!resource.startsWith(Composite.MODULES + "/"))
				throw new Error("Resource not supported: " + resource);
			if (resource in _render_cache && resource.match(/\.(js|css)(\?.*)?$/i))
				return;

			// Resource has already been requested, but with no useful
			// response and unsuccessful requests will not be repeated
			if (resource in _render_cache && _render_cache[resource] === undefined)
				return;
			if (!(resource in _render_cache)) {
				_render_cache[resource] = undefined;
				var request = new XMLHttpRequest();
				request.overrideMimeType("text/plain");
				request.open("GET", resource, false);
				request.send();
				// Only server states 200 and 404 (not in combination with the
				// option strict) are supported, others will cause an error and
				// the requests are not repeated later.
				if (request.status === 404 && !strict) return;
				if (request.status !== 200)
					throw new Error(
						"HTTP status "
							.concat(request.status, " for ")
							.concat(request.responseURL),
					);
				_render_cache[resource] = request.responseText.trim();
			}

			// CSS is inserted into the HEAD element as a style element.
			// Without a head element, the inserting causes an error.

			// JavaScript is not inserted as an element, it is executed
			// directly. For this purpose eval is used. Since the method may
			// form its own scope for variables, it is important to use the
			// macro #export to be able to use variables and/or constants in
			// the global scope.

			// HTML/Markup is preloaded into the render cache if available.
			// If markup exists for the composite, ATTRIBUTE_IMPORT with the
			// URL is added to the item. Inserting then takes over the
			// import implementation, which then also accesses the render
			// cache.

			var content = _render_cache[resource];
			if (resource.match(/\.js(\?.*)?$/i)) {
				try {
					Scripting.eval(content);
				} catch (error) {
					console.error(resource, error.name + ": " + error.message);
					throw error;
				}
			} else if (resource.match(/\.css(\?.*)?$/i)) {
				var head = document.querySelector("html head");
				if (!head) throw new Error("No head element found");
				var style = document.createElement("style");
				style.setAttribute("type", "text/css");
				style.textContent = content;
				head.appendChild(style);
			} else if (resource.match(/\.html(\?.*)?$/i)) return content;
		},
		/**
		 * Loads modules/components/composite resources. The assumption is, for
		 * components/composites, the resources are outsourced. JS and HTML are
		 * supported. Resources are stored in the module directory (./modules by
		 * default is relative to the page URL). The resources (response) are
		 * stored in the render cache, but only to detect and prevent repeated
		 * loading. The resources will only be requested once. If they do not
		 * exist (status 404), it is not tried again. Otherwise, an error is
		 * thrown if the request is not answered with status 200.
		 *
		 * The method also supports string arrays for resources with path. Then
		 * each path element is an array entry.
		 *
		 * Following rules apply to loading resources:
		 * - Composite ID / namespace / path must have a valid syntax
		 * - HTML is loaded only for elements when the elements have no content
		 * - CSS is only loaded when HTML is also loaded
		 * - JavaScript is loaded only if no corresponding JavaScript model
		 *   exists
		 *
		 * @param {Element|string} composite DOM element or a string
		 * @throws {TypeError} In case of invalid composite
		 * @throws {Error} In case of unknown composites and a composites
		 *     without ID
		 */
		include: function include() {
			for (
				var _len13 = arguments.length,
					composite = new Array(_len13),
					_key14 = 0;
				_key14 < _len13;
				_key14++
			) {
				composite[_key14] = arguments[_key14];
			}
			if (
				composite.length <= 0 ||
				(composite.length === 1 &&
					!(composite[0] instanceof Element) &&
					typeof composite[0] !== "string")
			)
				throw new TypeError("Invalid composite for include");
			if (composite.length === 1 && composite[0] instanceof Element)
				composite = composite[0];
			var resource = composite;
			var object = null;
			if (composite instanceof Element) {
				if (!composite.hasAttribute(Composite.ATTRIBUTE_ID))
					throw new Error("Unknown composite without id");
				object = _render_meta[composite.ordinal()];
				if (!object) throw new Error("Unknown composite");
				var meta = _mount_locate2(composite);
				if (!meta.namespace) meta.namespace = [];
				meta.namespace.push(meta.model);
				resource = meta.namespace;
			}
			var context = Composite.MODULES + "/" + resource.join("/");

			// Based on namespace and resource a corresponding JavaScript object
			// is searched for. Therefore, here with invalid namespace/composite
			// IDs an error occurs, which must be noticed however already
			// before, it is to be ensured that only modules are loaded to valid
			// composites (namespace + composite ID). Later, it is also decided
			// whether JavaScript must be loaded. This is only necessary if
			// lookup cannot determine a JavaScript model (undefined or
			// element).

			// Theoretically an error can occur during the lookup if namespace
			// or composite ID are invalid, but this should already run on error
			// before, so it is not done here -- otherwise this is a bug!

			var lookup = Object.lookup(resource.join("."));
			resource = resource.join("/");

			// Was the module already loaded?
			// Initially EVENT_MODULE_LOAD is triggered.
			if (_render_cache[context + ".composite"] === undefined)
				Composite.fire(Composite.EVENT_MODULE_LOAD, composite, resource);
			_render_cache[context + ".composite"] = null;

			// The sequence of loading is strictly defined: JS, CSS, HTML

			// JavaScript is only loaded if no corresponding object exists for
			// the Composite ID or the object is an element object
			if (
				lookup === undefined ||
				lookup instanceof Element ||
				lookup instanceof HTMLCollection ||
				resource === "common"
			)
				this.load(context + ".js");

			// CSS and HTML are loaded once and only if they are resources to an
			// element and the element is empty, excludes CSS for common.
			if (resource === "common") this.load(context + ".css");

			// CSS and HTML/markup is only loaded if it is a known composite
			// object and the element does not contain a markup (inner HTML).
			// For inserting HTML/markup ATTRIBUTE_IMPORT and ATTRIBUTE_OUTPUT
			// must not be set. It is assumed that an empty component/elements
			// outsourced markup exists.
			if (composite instanceof Element && !composite.innerHTML.trim())
				this.load(context + ".css");

			// Is only required if the composite has no content and will not be
			// filled with the attributes ATTRIBUTE_IMPORT and ATTRIBUTE_OUTPUT.
			if (
				composite instanceof Element &&
				!composite.innerHTML.trim() &&
				!object.attributes.hasOwnProperty(Composite.ATTRIBUTE_IMPORT) &&
				!object.attributes.hasOwnProperty(Composite.ATTRIBUTE_OUTPUT)
			) {
				var content = this.load(context + ".html");
				if (content === undefined) return;
				_recursion_detection(composite);
				if (composite instanceof Element) composite.innerHTML = content;
			}
		},
	});

	/**
	 * Set of attributes to be hardened.
	 * The hardening of attributes is part of the safety concept and should make
	 * it more difficult to manipulate the markup at runtime. Hardening observes
	 * attributes and undoes changes. Initially, the list is empty because the
	 * policies and rules are too individual.
	 *
	 * The following attributes are recommended:
	 *     action        autocomplete      autofocus
	 *     form          formaction        formenctype
	 *     formmethod    formnovalidate    formtarget
	 *     height        list              max
	 *     min           multiple          name
	 *     pattern       placeholder       required
	 *     size          step              target
	 *     type          width
	 *
	 * The following attributes are automatically hardened:
	 *     COMPOSITE     ID                STATIC*
	 *
	 * Composite internal/relevant attributes are also protected, these are
	 * removed in markup and managed in memory:
	 *     COMPOSITE     CONDITION         EVENTS
	 *     ID            IMPORT            INTERVAL
	 *     ITERATE       OUTPUT            RELEASE
	 *     RENDER        VALIDATE
	 */
	var _statics = new Set();

	/** Map for custom tags (key:tag, value:function) */
	var _macros = new Map();

	/** Map for custom selectors (key:hash, value:{selector, function}) */
	var _selectors = new Map();

	/** Set with interceptor and their registered listeners */
	var _interceptors = new Set();

	/** Map with events and their registered listeners */
	var _listeners = new Map();

	/**
	 * Set with docked models.
	 * The set is used for the logic to call the dock and undock methods,
	 * because the static models themselves have no status and the decision
	 * about the current existence in the DOM is not stable.
	 * All docked models are included in the set.
	 */
	var _models = new Set();

	/**
	 * Internal method for controlling temporary variables for expression
	 * rendering, such as for ATTRIBUTE_ITERATE. The goal is for the method to
	 * simulate a separate scope for temporary variables. For this purpose,
	 * global variables are created as expressions and removed again at the end
	 * of the scope or reset to a possible previously existing value.
	 * @param {string|null} compliant Compliance parameter
	 * @param {function} ___ Function to simulate scope for temporary variables
	 */
	compliant("___", function (variable, serial, index) {
		var object = _render_meta[serial];
		if (object && object.iterate) {
			if (variable.match(/^[a-zA-Z_$][a-zA-Z0-9_$]*$/))
				variable = 'window["'.concat(variable, '"]');
			if (index === undefined) {
				if ("variable" in object.iterate)
					eval(variable + " = object.iterate.variable");
				else eval("delete " + variable);
			} else eval(variable + " = object.iterate.items[" + index + "]");
		}
	});
	var _recursion_detection = function _recursion_detection(element) {
		var id = (element instanceof Element ? element.id || "" : "").trim();
		var pattern = id.toLowerCase();
		while (pattern && element instanceof Element) {
			element = element.parentNode;
			if (
				element instanceof Element &&
				element.hasAttribute(Composite.ATTRIBUTE_COMPOSITE) &&
				element.hasAttribute(Composite.ATTRIBUTE_ID) &&
				(element.id || "").toLowerCase().trim() === pattern
			)
				throw new Error("Recursion detected for composite: " + id);
		}
	};

	/**
	 * Determines the metadata for an element based on its position in the DOM
	 * with the corresponding model, the referenced route and target. The
	 * metadata is only determined as text information.
	 *
	 * Composite:
	 *     {namespace, model}
	 *
	 * Composite Element:
	 *     {namespace, model, route, target}
	 *     {namespace, model, route, unique, target}
	 *
	 * namespace: namespace of the composite/model
	 *            chain as array without the model or undefined if no chain
	 * model:     corresponds to the enclosing composite
	 * route:     fully qualified route to the target,
	 *            starting with the module, ends with the target
	 * unique:    unique identifier
	 *            not part of the route and without effect on the logic
	 * target:    final target in the chain
	 *
	 * A validation at object or JavaScript model level does not take place
	 * here. The fill levels of the meta-object can be different, depending on
	 * the collected data and the resulting derivation. Thus, it is possible to
	 * make the theoretical assumptions here by deriving them from the DOM.
	 * Especially the namespace of the model is based on these theoretical
	 * assumptions.
	 *
	 * If no meta information can be determined, e.g. because no IDs were found
	 * or no enclosing composite was used, null is returned.
	 *
	 * @param {Element} element DOM element to determine metadata for
	 * @returns {object|null} Determined meta-object for the passed element,
	 *     otherwise null
	 * @throws {Error} In case of an invalid IDs for composites and elements
	 */
	var _mount_locate2 = function _mount_locate(element) {
		var _meta$route2;
		if (!(element instanceof Element)) return null;

		// A composite stops the determination. Composites are static
		// components, comparable to managed beans or named beans, and therefore
		// normally have no superordinate object levels. But the Composite-ID
		// can contain a namespace, which is then taken into consideration.

		var serial = (element.getAttribute(Composite.ATTRIBUTE_ID) || "").trim();
		if (element.hasAttribute(Composite.ATTRIBUTE_COMPOSITE)) {
			var composite = serial.match(Composite.PATTERN_COMPOSITE_ID);
			if (!composite)
				throw new Error(
					"Invalid composite id".concat(serial ? ": " + serial : ""),
				);
			if (!composite[2])
				return {
					model: composite[1],
				};
			return {
				namespace: composite[2].split(/:+/),
				model: composite[1],
			};
		}
		var locate = _mount_locate2(element.parentNode);
		if (!element.hasAttribute(Composite.ATTRIBUTE_ID)) return locate;
		if (!serial.match(Composite.PATTERN_ELEMENT_ID))
			throw new Error("Invalid element id".concat(serial ? ": " + serial : ""));
		var meta = {
			namespace: [],
			model: null,
			route: [],
			target: null,
		};
		if (locate) {
			var _meta$route;
			if (locate.namespace) locate.namespace.push(locate.model);
			else locate.namespace = [locate.model];
			meta.namespace = locate.namespace;
			if (locate.route)
				(_meta$route = meta.route).push.apply(
					_meta$route,
					_toConsumableArray(locate.route),
				);
			else meta.route.push(locate.model);
		}
		serial = serial.match(Composite.PATTERN_ELEMENT_ID);
		if (serial[4]) {
			meta.namespace = serial[4].split(/:/);
			meta.route = [meta.namespace[meta.namespace.length - 1]];
		}
		meta.route.push(serial[1]);
		if (serial[2])
			(_meta$route2 = meta.route).push.apply(
				_meta$route2,
				_toConsumableArray(serial[2].split(/:/)),
			);
		if (serial[3]) meta.unique = serial[3];
		meta.target = meta.route[meta.route.length - 1];
		meta.model = meta.namespace.pop();
		if (meta.namespace.length <= 0) delete meta.namespace;

		// a model is always required
		return meta.model ? meta : null;
	};

	/**
	 * Determines the meta-object for an element based on its position in the
	 * DOM, so the surrounding composite and model, the referenced route and
	 * target in the model.
	 *
	 * Composite:
	 *     {meta:{namespace, model}, namespace, model}
	 *
	 * Composite Element:
	 *     {meta:{namespace, model, route, target}, namespace, model, route, target}
	 *
	 * The method always requires a corresponding JavaScript object (model) and
	 * an element with a valid element ID in a valid enclosing composite,
	 * otherwise the method will return null.
	 *
	 * @param {Element} element DOM element to determine metadata for
	 * @returns {object|null} Determined meta-object for the passed element,
	 *     otherwise null
	 * @throws {Error} In case of an invalid IDs for composites and elements
	 */
	var _mount_lookup = function _mount_lookup(element) {
		var _Namespace3;
		var meta = _mount_locate2(element);
		if (!meta) return null;
		var namespace = (_Namespace3 = Namespace).lookup.apply(
			_Namespace3,
			_toConsumableArray(meta.namespace || []),
		);
		var model = Object.lookup(namespace || window, meta.model);
		if (!model) return null;
		if (meta.target === undefined)
			return {
				meta: meta,
				namespace: namespace,
				model: model,
			};
		var lookup = {
			meta: meta,
			namespace: namespace,
			model: model,
			get target() {
				return Object.lookup.apply(
					Object,
					[this.namespace].concat(_toConsumableArray(this.meta.route || [])),
				);
			},
			set target(value) {
				var chain = [this.meta.model];
				if (this.meta.route) chain = this.meta.route;
				var target = chain.pop();
				Object.lookup.apply(
					Object,
					[this.namespace].concat(_toConsumableArray(chain)),
				)[target] = value;
			},
		};
		if (!lookup.model || lookup.target === undefined) return null;
		return lookup;
	};

	/** Associative array of reusable content for rendering */
	var _render_cache = {};

	/**
	 * Associative array for element-related meta-objects, those which are
	 * created during rendering: (key:serial, value:meta)
	 */
	var _render_meta = [];
	Object.defineProperty(Composite.render, "meta", {
		value: _render_meta,
	});
	var _serial = 0;

	/**
	 * Enhancement of the JavaScript API
	 * Adds a function for getting the serial ID to the objects.
	 */
	compliant("Object.prototype.serial");
	compliant("Object.prototype.ordinal", function () {
		if (this.serial === undefined)
			Object.defineProperty(this, "serial", {
				value: ++_serial,
			});
		return this.serial;
	});

	/**
	 * Enhancement of the JavaScript API
	 * Adds a static function to create and use a namespace for an object.
	 * Without arguments, the method returns the global namespace window.
	 *
	 * The method has the following various signatures:
	 *     Object.use();
	 *     Object.use(string);
	 *     Object.use(string, ...string|number);
	 *     Object.use(object);
	 *     Object.use(object, ...string|number);
	 *
	 * @param {...(string|number|object)} levels Levels of the namespace
	 * @returns {object} The created or already existing object(-level)
	 * @throws {Error} In case of invalid data types or syntax
	 */
	compliant("Object.use", function () {
		for (
			var _len14 = arguments.length, levels = new Array(_len14), _key15 = 0;
			_key15 < _len14;
			_key15++
		) {
			levels[_key15] = arguments[_key15];
		}
		return Namespace.use.apply(null, levels);
	});

	/**
	 * Enhancement of the JavaScript API
	 * Adds a static function to determine an object via the namespace.
	 * Without arguments, the method returns the global namespace window.
	 *
	 * The method has the following various signatures:
	 *     Object.lookup();
	 *     Object.lookup(string);
	 *     Object.lookup(string, ...string|number);
	 *     Object.lookup(object);
	 *     Object.lookup(object, ...string|number);
	 *
	 * @param {...(string|number|object)} levels Levels of the namespace
	 * @returns {object} The determined object(-level)
	 * @throws {Error} In case of invalid data types or syntax
	 */
	compliant("Object.lookup", function () {
		for (
			var _len15 = arguments.length, levels = new Array(_len15), _key16 = 0;
			_key16 < _len15;
			_key16++
		) {
			levels[_key16] = arguments[_key16];
		}
		return Namespace.lookup.apply(null, levels);
	});

	/**
	 * Enhancement of the JavaScript API
	 * Adds a static function to check whether an object exists in a namespace.
	 * In difference to the namespace function of the same name, qualifiers are
	 * also supported in the namespace. The effect is the same. Qualifiers are
	 * optional namespace elements at the end that use the colon as a separator.
	 *
	 * The method has the following various signatures:
	 *     Object.exists();
	 *     Object.exists(string);
	 *     Object.exists(string, ...string|number);
	 *     Object.exists(object);
	 *     Object.exists(object, ...string|number);
	 *
	 * @param {...(string|number|object)} levels Levels of the namespace
	 * @returns {boolean} True if the namespace exists
	 * @throws {Error} In case of invalid data types or syntax
	 */
	compliant("Object.exists", function () {
		for (
			var _len16 = arguments.length, levels = new Array(_len16), _key17 = 0;
			_key17 < _len16;
			_key17++
		) {
			levels[_key17] = arguments[_key17];
		}
		return Namespace.exists.apply(null, levels);
	});

	/**
	 * Enhancement of the JavaScript API
	 * Adds a static function to checks that an object is not undefined / null.
	 * @param {*} object Object to be checked
	 * @returns {boolean} True if the object is neither undefined nor null
	 */
	compliant("Object.usable", function (object) {
		return object !== undefined && object !== null;
	});

	/**
	 * Enhancement of the JavaScript API
	 * Implements an own open method for event management.
	 * The original method is reused in the background.
	 */
	var _request_open = XMLHttpRequest.prototype.open;
	XMLHttpRequest.prototype.open = function () {
		var callback = function callback() {
			var _Composite;
			var event =
				arguments.length > 0 && arguments[0] !== undefined
					? arguments[0]
					: null;
			if (!event) return;
			if (event.type === "loadstart")
				event = [Composite.EVENT_HTTP_START, event];
			else if (event.type === "progress")
				event = [Composite.EVENT_HTTP_PROGRESS, event];
			else if (event.type === "readystatechange")
				event = [Composite.EVENT_HTTP_RECEIVE, event];
			else if (event.type === "load")
				event = [Composite.EVENT_HTTP_LOAD, event];
			else if (event.type === "abort")
				event = [Composite.EVENT_HTTP_ABORT, event];
			else if (event.type === "error")
				event = [Composite.EVENT_HTTP_ERROR, event];
			else if (event.type === "timeout")
				event = [Composite.EVENT_HTTP_TIMEOUT, event];
			else if (event.type === "loadend")
				event = [Composite.EVENT_HTTP_END, event];
			else return;
			(_Composite = Composite).fire.apply(
				_Composite,
				_toConsumableArray(event),
			);
		};
		if (this.status === XMLHttpRequest.UNSENT) {
			this.addEventListener("loadstart", callback);
			this.addEventListener("progress", callback);
			this.addEventListener("readystatechange", callback);
			this.addEventListener("load", callback);
			this.addEventListener("abort", callback);
			this.addEventListener("error", callback);
			this.addEventListener("timeout", callback);
			this.addEventListener("loadend", callback);
		}
		for (
			var _len17 = arguments.length, variants = new Array(_len17), _key18 = 0;
			_key18 < _len17;
			_key18++
		) {
			variants[_key18] = arguments[_key18];
		}
		_request_open.call.apply(_request_open, [this].concat(variants));
	};

	// Listener when an error occurs and triggers a matching composite-event.
	window.addEventListener("error", function (event) {
		return Composite.fire(Composite.EVENT_ERROR, event);
	});

	// MutationObserver detects changes at the DOM and triggers (re)rendering
	// and (re)scanning and prevents manipulation of ATTRIBUTE_COMPOSITE.
	// - Text-Nodes: The TextContent of text nodes with an expression is
	//   protected by the MutationObserver and cannot be manipulated.
	// - The attributes of the renderer (Composite.PATTERN_ATTRIBUTE_ACCEPT)
	//   are protected by the MutationObserver and cannot be manipulated.
	window.addEventListener("load", function () {
		// The inverse indicator release shows when an element has been rendered
		// because the renderer removes this attribute. This effect is used for
		// CSS to show elements only in rendered state. A corresponding CSS rule
		// is automatically added to the HEAD when the page is loaded.
		if (document.querySelector("html")) {
			if (!document.querySelector("html head"))
				document
					.querySelector("html")
					.appendChild(document.createElement("head"));
			var style = document.createElement("style");
			style.setAttribute("type", "text/css");
			style.innerHTML = "*[release] {display:none!important;}";
			document.querySelector("html head").appendChild(style);
		}

		// Initially the common-module is loaded.
		// The common-module is similar to an autostart, it is used to
		// initialize the single page application. It consists of common.js and
		// common.css. The configuration of the Routing and essential styles
		// can/should be stored here.
		Composite.include("common");
		var _cleanup2 = function _cleanup(node) {
			// Clean up all the child elements first.
			if (node.childNodes)
				Array.from(node.childNodes).forEach(function (node) {
					return _cleanup2(node);
				});

			// Composites and models must be undocked when they are removed from
			// the DOM independent of whether a condition exists. For composites
			// with condition, it must be noted that the composite is initially
			// replaced by a marker. During replacement, the initial composite
			// is removed, which can cause an unwanted undocking. The logic is
			// based on the assumption that each composite has a meta-object.
			// When replacing a composite, the corresponding meta-object is also
			// deleted, so that the MutationObserver detects the composite to be
			// removed in the DOM, but undocking is not performed without the
			// matching meta-object.

			var serial = node.ordinal();
			var object = _render_meta[serial];
			if (
				object &&
				object.attributes.hasOwnProperty(Composite.ATTRIBUTE_COMPOSITE)
			) {
				var meta = _mount_lookup(node);
				if (meta && meta.meta && meta.meta.model && meta.model) {
					var model = (meta.meta.namespace || [])
						.concat(meta.meta.model)
						.join(".");
					if (_models.has(model)) {
						_models["delete"](model);
						if (typeof meta.model.undock === "function") {
							meta.model.undock.call(meta.model);
							Composite.fire(Composite.EVENT_MODULE_UNDOCK, meta);
						}
					}
				}
			}

			// meta-object assigned to the element must be deleted, because it
			// is an indicator for existence and presence of composites/models
			delete _render_meta[node.ordinal()];
		};
		new MutationObserver(function (records) {
			records.forEach(function (record) {
				// HTML uses attributes whose pure presences have effects:
				//     autofocus, disabled, hidden, multiple, readonly, required
				// With the expression language the setting and removing of
				// these attributes is not possible. This task is taken over by
				// the MutationObserver. It reacts to the values true and false
				// for the present attributes and removes the attribute from the
				// HTML element in case of false.

				if (record.type === "attributes") {
					var attribute = record.attributeName;
					if (
						attribute.match(
							/^(autofocus|disabled|hidden|multiple|readonly|required)$/i,
						)
					) {
						var value = String(record.target.getAttribute(attribute));
						if (value === "false") record.target.removeAttribute(attribute);
						if (value === "true")
							record.target.setAttribute(attribute, attribute);
					}
				}

				// Without Meta-Store, the renderer hasn't run yet. The reaction
				// by the MutationObserver only makes sense when the renderer
				// has run initially.
				if (!_render_meta.length) return;
				var serial = record.target.ordinal();
				var object = _render_meta[serial];

				// Text changes are only monitored at text nodes with expression.
				// Manipulations are corrected/restored.
				if (
					record.type === "characterData" &&
					record.target.nodeType === Node.TEXT_NODE
				) {
					if (object && object.hasOwnProperty(Composite.ATTRIBUTE_VALUE)) {
						var _value2 =
							object.value === undefined ? "" : String(object.value);
						if (_value2 !== record.target.textContent)
							record.target.textContent = _value2;
					}
					return;
				}

				// Changes at the renderer-specific and static attributes are
				// monitored. Manipulations are corrected/restored.
				if (object && record.type === "attributes") {
					var _attribute = (record.attributeName || "").toLowerCase().trim();
					if (
						_attribute.match(Composite.PATTERN_ATTRIBUTE_ACCEPT) &&
						!_attribute.match(Composite.PATTERN_ATTRIBUTE_STATIC)
					) {
						// Composite internal non-static attributes are managed
						// by the renderer and are removed.
						if (record.target.hasAttribute(_attribute))
							record.target.removeAttribute(_attribute);
					} else if (_attribute.match(Composite.PATTERN_ATTRIBUTE_STATIC)) {
						if (!object.attributes.hasOwnProperty(_attribute)) {
							// If the renderer has not registered an initial
							// value, the assumption is that the attribute was
							// subsequently added and is therefore removed.
							if (record.target.hasAttribute(_attribute))
								record.target.removeAttribute(_attribute);
						} else {
							// If the attribute was removed or the value was
							// changed, the initial value is restored that was
							// previously determined by the renderer.
							if (
								!record.target.hasAttribute(_attribute) ||
								object.attributes[_attribute] !==
									record.target.getAttribute(_attribute)
							)
								record.target.setAttribute(
									_attribute,
									object.attributes[_attribute],
								);
						}
					} else if (_statics.has(_attribute)) {
						object.statics = object.statics || {};
						if (!object.statics.hasOwnProperty(_attribute)) {
							// If the renderer has not registered an initial
							// value, the assumption is that the attribute was
							// subsequently added and is therefore removed.
							if (record.target.hasAttribute(_attribute))
								record.target.removeAttribute(_attribute);
						} else {
							// If the attribute was removed or the value was
							// changed, the initial value is restored that was
							// previously determined by the renderer.
							if (
								!record.target.hasAttribute(_attribute) ||
								object.statics[_attribute] !==
									record.target.getAttribute(_attribute)
							)
								record.target.setAttribute(
									_attribute,
									object.statics[_attribute],
								);
						}
					}
				}

				// Theoretically, the target object may be unknown by the
				// renderer, but normally the mutation observer reacts to the
				// parent element when inserting new elements. Therefore, this
				// case was not implemented.

				// All new inserted elements are rendered if they are unknown for
				// the renderer. It is important that the new nodes are also
				// contained in the body. This is not always the case, e.g. when
				// recursive rendering replaces elements. So an include can load
				// data with a condition. Nodes are created per include, which
				// are then replaced by a marker in the case of a condition. The
				// MutationObserver does not run parallel, so it is called after
				// the rendering with obsolete nodes.
				(record.addedNodes || []).forEach(function (node) {
					if (
						(node instanceof Element ||
							(node instanceof Node && node.nodeType === Node.TEXT_NODE)) &&
						!_render_meta[node.ordinal()] &&
						document.body.contains(node)
					)
						Composite.render(node);
				});

				// All removed elements are cleaned and if necessary the undock
				// method is called if a view model binding exists.
				(record.removedNodes || []).forEach(function (node) {
					return _cleanup2(node);
				});
			});
		}).observe(document.body, {
			childList: true,
			subtree: true,
			attributes: true,
			attributeOldValue: true,
			characterData: true,
		});
		Composite.render(document.body);
	});
})();

/**
 * (Resource)Messages is a static DataSource extension for internationalization
 * and localization. The implementation is based on a set of key-value or
 * label-value data which is stored in the locales.xml of the DataSource.
 *
 *     + data
 *       + de
 *       + en
 *       - locales.xml
 *     + modules
 *     + resources
 *     - index.html
 *
 * The elements for the supported languages are organized in locales in this
 * file. Locales is a set of supported country codes. In each country code, the
 * key values are recorded as label entries.
 *
 *     <?xml version="1.0"?>
 *     <locales>
 *       <de>
 *         <label key="contact.title" value="Kontakt"/>
 *         <label key="contact.development.title">Entwicklung</label>
 *         ...
 *       </de>
 *       <en default="true">
 *         <label key="contact.title" value="Contact"/>
 *         <label key="contact.development.title">Development</label>
 *         ...
 *       </en>
 *     </locales>
 *
 * The language is selected automatically on the basis of the language setting
 * of the browser. If the language set there is not supported, the language
 * declared as 'default' is used.
 *
 * If the locales contain a key more than once, the first one is used. Messages
 * principally cannot be overwritten. What should be noted in the following
 * description also for the modules.
 *
 * After loading the application, Messages are available as an associative
 * array and can be used directly in JavaScript and Markup via Expression
 * Language.
 *
 *     Messages["mail.title"];
 *
 *     <h1 output="{{Messages['contact.title']}}"/>
 *
 * In addition, the object message is also provided. Unlike Messages, message is
 * an object tree analogous to the keys from Messages. The dot in the keys is
 * the indicator of the levels in the tree.
 *
 *     messages.mail.title;
 *
 *     <h1 output="{{messages.mail.title}}"/>
 *
 * Both objects are only available if there are also labels.
 *
 * Extension for modules: These can also provide locales/messages in the module
 * directory, which are loaded in addition to the locales/messages from the data
 * directory -- even at runtime. Again, existing keys cannot be overwritten.
 */
("use strict");
(function () {
	compliant("messages", {});
	compliant("Messages", {});
	var _datasource = [DataSource.data];
	var _localize = DataSource.localize;
	var _load = function _load(data) {
		var map = new Map();
		var xpath = "/locales/" + DataSource.locale + "/label";
		var result = data.evaluate(
			xpath,
			data,
			null,
			XPathResult.ORDERED_NODE_ITERATOR_TYPE,
			null,
		);
		for (var node = result.iterateNext(); node; node = result.iterateNext()) {
			var key = (node.getAttribute("key") || "").trim();
			if (!map.has(key)) {
				var value = (
					(node.getAttribute("value") || "").trim() ||
					(node.textContent || "").trim()
				).unescape();
				map.set(key, value);
			}
		}
		new Map(_toConsumableArray(map.entries()).sort()).forEach(
			function (value, key) {
				var match = key.match(/^(?:((?:\w+\.)*\w+)\.)*(\w+)$/);
				if (match) {
					// In order for the object tree to branch from each level, each
					// level must be an object. Therefore, an anonymous object is
					// used for the level, which returns the actual text via
					// Object.prototype.toString().
					var namespace = "messages" + (match[1] ? "." + match[1] : "");
					if (!Namespace.exists(namespace, match[2]))
						Object.defineProperty(Namespace.use(namespace), match[2], {
							value: {
								toString: function toString() {
									return value;
								},
							},
						});
					if (!Namespace.exists("Messages", key))
						Object.defineProperty(Namespace.use("Messages"), key, {
							value: value,
						});
				}
			},
		);
	};
	DataSource.localize = function (locale) {
		_localize(locale);
		delete window.messages;
		delete window.Messages;
		window.Messages = {
			customize: function customize(label) {
				var text = Messages[label] || "";
				for (
					var index = 0;
					index < (arguments.length <= 1 ? 0 : arguments.length - 1);
					index++
				)
					text = text.replace(
						new RegExp("\\{" + index + "\\}", "g"),
						index + 1 < 1 || arguments.length <= index + 1
							? undefined
							: arguments[index + 1],
					);
				return text.replace(/\{\d+\}/g, "");
			},
		};
		_datasource.forEach(function (data) {
			return _load(data);
		});
	};

	// Messages are based on DataSources. To initialize, DataSource.localize()
	// must be overwritten and loading of the key-value pairs is embedded.
	if (
		DataSource.data &&
		DataSource.locale &&
		DataSource.locales &&
		DataSource.locales.includes(DataSource.locale)
	)
		DataSource.localize(DataSource.locale);
	Composite.listen(
		Composite.EVENT_MODULE_LOAD,
		function (event, context, module) {
			var request = new XMLHttpRequest();
			request.open("GET", Composite.MODULES + "/" + module + ".xml", false);
			request.send();
			if (request.status !== 200) return;
			var data = new DOMParser().parseFromString(
				request.responseText,
				"application/xml",
			);
			_datasource.push(data);
			_load(data);
		},
	);
})();

/**
 * A reactivity system or here called reactivity rendering is a mechanism which
 * automatically keeps in sync a data source (model) with a data representation
 * (view) layer. Every time the model changes, the view is partially
 * re-rendered to reflect the changes.
 *
 * The mechanism is based on notifications that arise from setting and getting
 * from the model as a data source. Which is supported by the proxy object in
 * JavaScript and its events can then be used to determine which elements/nodes
 * in the DOM consume what data from the model and need to be updated when
 * changes are made.
 *
 * Reactivity rendering is implemented as an optional module and uses the
 * available API.
 *
 * Reactive works permanently recursively on all objects, in all levels of a
 * model and also on the objects that are added later as values, even if these
 * objects do not explicitly use the Reactive.
 *
 * Object and model are decoupled by Reactive. The implementation uses free
 * (unbound) proxies for this purpose. These proxies reference an object but are
 * not bound to an object level in the object tree and they synchronize the data
 * bidirectionally. Managed these proxies are managed with a weak map where the
 * object is the key and the garbage collection can dispose of this objects with
 * associated proxies when not in use.
 */
("use strict");
(function () {
	compliant("Reactive", function (object) {
		if (object == null || _typeof(object) !== "object")
			throw new TypeError("Invalid object type");
		return _reactive2(object);
	});
	var _selector = null;
	Composite.listen(Composite.EVENT_RENDER_START, function (event, selector) {
		return (_selector = selector);
	});
	Composite.listen(Composite.EVENT_RENDER_NEXT, function (event, selector) {
		return (_selector = selector);
	});
	Composite.listen(Composite.EVENT_RENDER_END, function (event, selector) {
		return (_selector = null);
	});
	var _selector_cache = null;
	Composite.listen(Composite.EVENT_MODULE_DOCK, function (event, selector) {
		_selector_cache = _selector;
		_selector = null;
	});
	Composite.listen(Composite.EVENT_MODULE_READY, function (event, selector) {
		_selector = _selector_cache;
		_selector_cache = null;
	});

	/**
	 * Enhancement of the JavaScript API
	 * Adds a function to create a reactive object to an object instance. If it
	 * is already a reactive object, the reference of the instance is returned.
	 */
	compliant("Object.prototype.reactive", function () {
		return _reactive2(this);
	});

	/**
	 * Proxy is implemented exotically, cannot be inherited and has no
	 * prototype. Therefore, this unconventional way with a secret simulated
	 * property that is used as an indicator for existing reactive objects
	 * instances. The value is not programmatically constant, instead it is
	 * defined with the start of the application.
	 * https://stackoverflow.com/questions/37714787/can-i-extend-proxy-with-an-es2015-class
	 */
	var _secret = Math.serial();

	/**
	 * Weak map with the assignment of objects to proxies. The object is the key
	 * and the proxy is the value. A feature of WeakMap is that when the key is
	 * purged from the garbage collection, the value and thus the proxy is also
	 * purged. Thus, this should be an efficient way to manage unbound proxies.
	 */
	var _register = new WeakMap();
	var _reactive2 = function _reactive(object) {
		if (_typeof(object) !== "object" || object === null) return object;

		// Proxy remains proxy
		if (object[_secret] !== undefined) return object;

		// For all objects, a proxy must be created. Also for proxies, even if
		// proxy in proxy is prevented. Not internally, so it works recursively.
		// Endless loops are prevented with the register.

		if (_register.has(object)) return _register.get(object);
		var proxy = new Proxy(object, {
			notifications: new Map(),
			cache: new Map(),
			get: function get(target, key) {
				try {
					// Proxy is implemented exotically, cannot be inherited and
					// has no prototype. Therefore, this unconventional way with
					// a secret simulated property that is used as an indicator
					// for existing reactive object instances and also contains
					// a reference to the original object.
					if (key === _secret) return target;
					var value;

					// During analysis, getters must be invoked via the proxy to
					// identify the final targets behind the getter.
					if (_selector) {
						var descriptor = Object.getOwnPropertyDescriptor(target, key);
						if (descriptor && typeof descriptor.get === "function")
							value = descriptor.get.call(proxy);
						else value = target[key];
					} else value = target[key];

					// Proxies are only used for objects, other data types are
					// returned directly.
					if (
						_typeof(value) !== "object" ||
						value === null ||
						value instanceof Node ||
						value instanceof NodeList ||
						value instanceof HTMLCollection
					)
						return value;

					// Proxy remains proxy
					if (value[_secret] !== undefined) return value;

					// A proxy always returns proxies for objects. To decouple
					// object, proxy and view and to avoid reference to object
					// tree/level, loose proxies are used. The mapping is based
					// only on objects not on object level via the register.
					if (_register.has(value)) return _register.get(value);
					return _reactive2(value);

					// To be economical with resources, proxies are not created
					// for objects immediately, but only when they are requested
					// via getter. Therefore, the properties for an object are
					// not analyzed recursively.
				} finally {
					// The registration is delayed so that the getting of values
					// does not block unnecessarily.
					Composite.asynchron(
						function (selector, target, key, notifications) {
							// Registration is performed only during rendering and
							// if the key exists in the object.
							if (selector === null || !target.hasOwnProperty(key)) return;

							// Special for elements with attribute iterate. For
							// these, the highest parent element with the attribute
							// iterate is searched for and registered as the
							// recipient. Why -- Iterate provides temporary
							// variables which can be used in the enclosed markup.
							// If these places are registered as recipients, these
							// temporary variables cannot be accessed later in the
							// expressions, which causes errors because the
							// temporary variables no longer exist. Since element
							// with the attribute iterate can be nested and the
							// expression can be based on a parent one, the topmost
							// one is searched for.

							for (
								var node = selector;
								node.parentNode;
								node = node.parentNode
							) {
								var meta = (Composite.render.meta || [])[node.ordinal()] || {};
								if (
									meta.attributes &&
									meta.attributes.hasOwnProperty(Composite.ATTRIBUTE_ITERATE)
								)
									selector = node;
							}
							var recipients = notifications.get(key) || new Map();

							// If the selector as the current rendered element is
							// already registered as a recipient, then the
							// registration can be canceled.
							if (recipients.has(selector.ordinal())) return;
							var _iterator3 = _createForOfIteratorHelper(recipients.values()),
								_step3;
							try {
								for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
									var recipient = _step3.value;
									// If the selector as the current rendered element
									// is already contained in a recipient as the
									// parent, the selector as a recipient can be
									// ignored, because the rendering is initiated by
									// the parent and includes the selector as a child.
									if (
										recipient.contains !== undefined &&
										recipient.contains(selector)
									)
										return;

									// If the selector as current rendered element
									// contains a recipient as parent, the recipient can
									// be removed, because the selector element will
									// initiate rendering as parent in the future and
									// the existing recipient will be rendered as child
									// automatically.
									if (
										selector.contains !== undefined &&
										selector.contains(recipient)
									)
										recipients["delete"](recipient.ordinal());
								}
							} catch (err) {
								_iterator3.e(err);
							} finally {
								_iterator3.f();
							}
							recipients.set(selector.ordinal(), selector);
							notifications.set(key, recipients);
						},
						_selector,
						target,
						key,
						this.notifications,
					);
				}
			},
			set: function set(target, key, value) {
				var _this = this;
				// Proxy is implemented exotically, cannot be inherited and has
				// no prototype. Therefore, this unconventional way with a
				// secret simulated property that is used as an indicator for
				// existing reactive object instances and also contains a
				// reference to the original object and that can't be changed.
				if (key === _secret) return true;

				// To decouple object, proxy and view, the original objects are
				// always used as value and never the proxies.
				if (
					_typeof(value) === "object" &&
					value !== null &&
					value[_secret] !== undefined
				)
					value = value[_secret];

				// To be economical with resources, proxies are not created for
				// objects immediately, but only when they are explicitly
				// requested via getter.

				try {
					target[key] = value;
				} finally {
					// Unwanted recursions due to repeated value assignments:
					// a = a / a = c = b = a must be avoided so that no infinite
					// render cycle is initiated.
					if (this.cache.get(key) === value) return true;
					this.cache.set(key, value);

					// The registration is delayed so that the setting of values
					// does not block unnecessarily.
					Composite.asynchron(
						function (selector, target, key, notifications) {
							// Update only if the key exists in the object.
							// Recursions during rendering are prevented via the
							// queue and the lock in during rendering.
							if (!target.hasOwnProperty(key)) return;
							var recipients = _this.notifications.get(key) || new Map();
							var _iterator4 = _createForOfIteratorHelper(recipients.values()),
								_step4;
							try {
								for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
									var recipient = _step4.value;
									// If the recipient is no longer included in the DOM
									// and so it can be removed this case.
									if (!document.body.contains(recipient))
										recipients["delete"](recipient.ordinal());
									else Composite.render(recipient);
								}
							} catch (err) {
								_iterator4.e(err);
							} finally {
								_iterator4.f();
							}
						},
						_selector,
						target,
						key,
						this.notifications,
					);
					return true;
				}
			},
		});

		// On the one hand, the register manages the unbound proxies, on the
		// other hand, it protects against endless recursions.
		_register.set(object, proxy);
		return proxy;
	};
})();

/**
 * The presentation of the page can be organized in Seanox aspect-js in views,
 * which are addressed via paths (routes). For this purpose, the routing
 * supports a hierarchical directory structure based on the IDs of the nested
 * composites in the markup. The routing then controls the visibility and
 * permission for accessing the views via paths - the so-called view flow. For
 * the view flow and the permission, the routing actively uses the DOM to insert
 * and remove the views depending on the situation.
 *
 *
 *     TERMS
 *     ----
 *
 *         Page
 *         ----
 * In a single page application, the page is the elementary framework and
 * runtime environment of the entire application.
 *
 *         View
 *         ----
 * A view is the primary projection of models/components/content. This
 * projection can contain additional substructures in the form of views and
 * sub-views. Views can be static, always shown, or controlled by path and
 * permissions. Paths address the complete chain of nested views and shows the
 * parent views in addition to the target view.
 *
 *         View Flow
 *         ----
 * View flow describes the access control and the sequence of views. The routing
 * provides interfaces, events, permission concepts and interceptors with which
 * the view flow can be controlled and influenced.
 *
 *         Paths
 *         ----
 * Paths are used for navigation, routing and controlling the view flow. The
 * target can be a view or a function if using interceptors. For SPAs
 * (single-page applications), the anchor part of the URL is used for navigation
 * and routes.
 *
 * Similar to a file system, absolute and relative paths are also supported
 * here. Paths consist of case-sensitive words that only use 7-bit ASCII
 * characters above the space character. Characters outside this range are URL
 * encoded. The words are separated by the hash character (#).
 *
 * Repeated use of the separator (#) allows jumps back in the path to be mapped.
 * The number of repetitions indicates the number of returns in the direction of
 * the root.
 */
("use strict");
(function () {
	// Status of the activation of routing
	// The status cannot be changed again after (de)activation and is only set
	// initially when the page is loaded.
	var _routing_active = undefined;

	// Map with all supported interceptors
	var _interceptors = new Array();

	// Array with the path history (optimized)
	var _history = new Array();
	var Browser = {
		/**
		 * Returns the current working path. This assumes that the URL contains
		 * at least one hash, otherwise the method returns null.
		 * @returns {string|null} the current path, otherwise null
		 */
		get location() {
			if (window.location.hash !== "") return window.location.hash;
			return _locate(window.location.href);
		},
	};
	var _locate = function _locate(location) {
		var match = location.match(/#.*$/);
		return match ? match[0] : null;
	};
	compliant("Routing", {
		/** Constant for attribute route */
		get ATTRIBUTE_ROUTE() {
			return "route";
		},
		/**
		 * Returns the current working path normalized. This assumes that the
		 * URL contains at least one hash, otherwise the method returns null.
		 * @returns {string|null} the current path, otherwise null
		 */
		get location() {
			var location = Browser.location;
			if (location != null && /^(#{2,}|[^#])/.test(location)) {
				var parent = "#";
				if (_history.length > 0) parent = _history[_history.length - 1];
				return Path.normalize(parent, location);
			}
			return Path.normalize(location);
		},
		/**
		 * Returns the current navigation history and automatically recognizes
		 * when there are jumps back to previous destinations. In such cases,
		 * all subsequent entries are removed to ensure that the history remains
		 * consistent and up to date.
		 * @returns {string[]} navigation history as array
		 */
		get history() {
			return _history;
		},
		/**
		 * Routes to the given path. In difference to the forward method, route
		 * is not executed directly, instead the change is triggered
		 * asynchronous by the location hash.
		 * @param {string} path
		 */
		route: function route(path) {
			if (path === undefined || (typeof path !== "string" && path !== null))
				throw new TypeError("Invalid data type");
			path = Path.normalize(path);
			if (path === null || path === Browser.location) return;
			Composite.asynchron(function (path) {
				window.location.href = path;
			}, path);
		},
		/**
		 * Forwards to the given path. In difference to the route method, the
		 * forwarding is executed directly, instead the navigate method triggers
		 * asynchronous forwarding by changing the location hash.
		 * @param {string} path
		 */
		forward: function forward(path) {
			if (path === undefined || (typeof path !== "string" && path !== null))
				throw new TypeError("Invalid data type");
			path = Path.normalize(path);
			if (path === null || path === Browser.location) return;
			var event = new Event("hashchange", {
				bubbles: false,
				cancelable: true,
			});
			event.oldURL = Browser.location;
			event.newURL = path;
			window.dispatchEvent(event);
		},
		/**
		 * Checks the approval to keep or remove the composite through the
		 * routing in the DOM. For approval, the model corresponding to a
		 * composite can implement the approve method, which can use different
		 * return values: undefined, true and false.
		 *
		 * With the return values true and false, the permit method in the model
		 * makes the decision. Otherwise and even if the model does not
		 * implement a permit method, the decision is left to the routing, which
		 * checks the coverage of the path from the composite. Covered means
		 * that the specified path must be contained from the root of the
		 * current working path.
		 *
		 * @param {string} path path of the composite
		 * @param {string} composite composite ID of the element in the markup
		 * @returns {boolean} true if the composite element is approved,
		 *     otherwise false
		 */
		approve: function approve(path, composite) {
			if (typeof path !== "string") throw new TypeError("Invalid data type");
			if (typeof composite !== "string")
				throw new TypeError("Invalid data type");
			path = Path.normalize(path);
			if (path === null || path === "#") return false;
			composite = composite.match(Composite.PATTERN_COMPOSITE_ID);
			if (!composite) return false;
			var model = (composite[1] || "").trim();
			var namespace = (composite[2] || "").replace(/:/g, ".");
			var scope = namespace.length > 0 ? namespace + "." + model : model;
			var object =
				(function (context, namespace) {
					return namespace.split(".").reduce(function (scope, target) {
						return scope && scope[target];
					}, context);
				})(window, scope) ||
				(Object.exists(scope) ? Object.use(scope) : undefined);
			if (
				object == null ||
				_typeof(object) !== "object" ||
				typeof object.permit !== "function"
			)
				return path !== undefined && Path.covers(path);
			var approval = object.permit();
			if (approval === undefined)
				return path !== undefined && Path.covers(path);
			return approval === true;
		},
		/**
		 * Add an interceptor. An interceptor consists of a path and an actor.
		 * The path can be either a string or a regular expression (RegExp),
		 * and the actor must be a function. Interceptors are useful for
		 * reacting to paths and possibly influencing the routing in relation to
		 * the paths.
		 * @param {string|RegExp} path path or route that needs customization.
		 *     It can be a string or a regular expression.
		 * @param {function} actor function that acts as an interceptor for the
		 *     specified path when the specified path is addressed.
		 * @throws {TypeError} If the `path` is neither a string nor a RegExp
		 */
		customize: function customize(path, actor) {
			if (typeof path !== "string" && !(path instanceof RegExp))
				throw new TypeError("Invalid data type");
			if (actor == null || typeof actor !== "function")
				throw new TypeError("Invalid object type");
			_interceptors.push({
				path: path,
				actor: actor,
			});
		},
		/**
		 * Determines the closest matching location in relation to the closest
		 * composite to the current location. If Routing is inactive, the method
		 * will be returned undefined.
		 * @param {(boolean|Object)} [meta=false] optional true or a metadata
		 *     object to be filled; in both cases, a meta-object with locate
		 *     and, if available, an array with data is also returned
		 * @returns {string|undefined|Object} the resolved location if Routing
		 *     is active; otherwise, returns undefined
		 */
		locate: function locate() {
			var meta =
				arguments.length > 0 && arguments[0] !== undefined
					? arguments[0]
					: false;
			if (!_routing_active) return undefined;
			var location = Routing.location;
			var locate = _lookup(_lookup(location));
			if ((meta == null || _typeof(meta) !== "object") && meta !== true)
				return locate;
			if (_typeof(meta) !== "object") meta = {};
			meta.locate = locate;
			meta.data = location
				.substring(locate.length)
				.replace(/^#+/, "")
				.split(/#+/);
			return meta;
		},
	});

	/**
	 * The method accepts a path as a string and determines the corresponding
	 * element that is best covered by this path (Path-to-Element). The path can
	 * be longer than the actual target, similar to the concepts PATH_TRANSLATED
	 * and PATH_INFO in CGI.
	 *
	 * Alternatively, the method can accept a specific element and determine the
	 * corresponding path in the markup (Element-to-Path).
	 *
	 * @param {string|Element} lookup
	 * @returns {undefined|string|Element} the path as string or undefined for
	 *     Element-To-Path or the element for Path-to-Element
	 */
	var _lookup = function _lookup(lookup) {
		if (lookup instanceof Element) {
			var _path = "";
			for (var element = lookup; element; element = element.parentElement) {
				if (
					!element.hasAttribute(Composite.ATTRIBUTE_COMPOSITE) ||
					!element.hasAttribute(Composite.ATTRIBUTE_ID) ||
					!element.hasAttribute(Routing.ATTRIBUTE_ROUTE)
				)
					continue;
				var composite = element.getAttribute(Composite.ATTRIBUTE_ID);
				var match = composite.match(Composite.PATTERN_COMPOSITE_ID);
				if (!match)
					throw new Error(
						"Invalid composite id".concat(composite ? ": " + composite : ""),
					);
				_path = "#" + match[1] + _path;
			}
			return _path || "#";
		}
		var marker = "["
			.concat(Composite.ATTRIBUTE_COMPOSITE, "][")
			.concat(Routing.ATTRIBUTE_ROUTE, "]");
		var path = lookup
			.split("#")
			.slice(1)
			.map(function (entry) {
				return '[id="'
					.concat(entry, '"]')
					.concat(marker, ',[id^="')
					.concat(entry, '@"]')
					.concat(marker);
			});
		while (path.length > 0) {
			var _element = document.querySelector(path.join(">"));
			if (_element instanceof Element) return _element;
			path.pop();
		}
		return document.body;
	};
	var _render = function _render(element) {
		var focus =
			arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
		Composite.render(element);
		if (focus) {
			Composite.asynchron(function (element) {
				if (typeof element.focus === "function") element.focus();
			}, element);
		}
	};

	/**
	 * Establishes a listener that detects changes to the URL hash. The method
	 * corrects invalid and unauthorized paths by forwarding them to next valid
	 * path and organizes partial rendering.
	 */
	window.addEventListener("hashchange", function (event) {
		if (!_routing_active) return;

		// Interceptors
		// - order of execution corresponds to the order of registration
		// - all interceptors are always checked and executed if they match
		// - no entry in history
		// - can change the new hash/path, but please use replace
		// - following interceptors use the possibly changed hash/path
		// - on the first explicit false, terminates the logic in hashchange
		var oldHash = _locate(event.oldURL);
		var newHash = _locate(event.newURL);
		for (
			var _i = 0, _interceptors2 = _interceptors;
			_i < _interceptors2.length;
			_i++
		) {
			var interceptor = _interceptors2[_i];
			if (typeof interceptor.path === "string") {
				if (!Path.PATTERN_PATH.test(interceptor.path)) continue;
				if (interceptor.path.endsWith("#")) {
					if (!newHash.startsWith(interceptor.path)) continue;
				} else {
					if (
						newHash !== interceptor.path &&
						!newHash.startsWith(interceptor.path + "#")
					)
						continue;
				}
			} else if (interceptor.path instanceof RegExp) {
				if (!interceptor.path.test(newHash)) continue;
			} else continue;
			if (
				typeof interceptor.actor === "function" &&
				interceptor.actor(oldHash, newHash) === false
			)
				return;
		}
		var location = Routing.location || "#";
		if (location !== Browser.location) {
			window.location.replace(location);
			return;
		}

		// Maintaining the history.
		// For recursions, the history is discarded after the first occurrence.
		var index = _history.indexOf(location);
		if (index >= 0) _history.length = index;
		_history.push(location);

		// Decision matrix
		// - invalid path(s) / undefined, then do nothing
		// - no path match / null, then render body and focus
		// - Composite old and new are the same, then render and focus new
		// - Composite old and new are not equal and one is body, then render
		//   body and focus new
		// - Composite old includes new, then render old and focus new
		// - Composite new includes old, then render new and focus new
		// - Composite old and new unequal, then render old, then render new and
		//   focus new

		var locationOld = Path.normalize(_locate(event.oldURL));
		var locationNew = Path.normalize(_locate(event.newURL));
		var locationMatch = Path.matches(locationOld, locationNew);
		if (locationMatch === undefined) return;
		if (locationMatch === null) {
			_render(document.body, true);
			return;
		}
		var locationOldElement = _lookup(locationOld);
		var locationNewElement = _lookup(locationNew);
		if (locationOldElement === locationNewElement) {
			_render(locationNewElement, true);
			return;
		}
		if (
			locationOldElement === document.body ||
			locationNewElement === document.body
		) {
			_render(document.body);
			Composite.asynchron(function (element) {
				if (typeof element.focus === "function") element.focus();
			}, locationNewElement);
			return;
		}
		if (locationOldElement.contains(locationNewElement)) {
			_render(locationOldElement);
			Composite.asynchron(function (element) {
				if (typeof element.focus === "function") element.focus();
			}, locationNewElement);
			return;
		}
		if (locationNewElement.contains(locationOldElement)) {
			_render(locationNewElement, true);
			return;
		}
		_render(locationOldElement);
		_render(locationNewElement, true);
	});

	/**
	 * Rendering filter for all composite elements. The filter causes that for
	 * each composite element determined by the renderer, an additional
	 * condition is added to the Routing. This condition is used to show and
	 * hide the composite elements in the DOM. What happens by physically adding
	 * and removing. The elements are identified by the composite ID.
	 */
	Composite.customize(function (element) {
		if (
			element instanceof Element &&
			element.hasAttribute("route") &&
			element.getAttribute("route") !== ""
		)
			console.warn("Ignore value for attribute route");
		if (_routing_active === undefined) {
			// Activates routing during the initial rendering via the boolean
			// attribute route. It must not have a value, otherwise it is
			// ignored and routing is not activated. The decision was
			// deliberate, so that interpretations such as route="off" do not
			// cause false expectations and misunderstandings.
			_routing_active = document.body.hasAttribute("route");
			if (
				document.body.hasAttribute("route") &&
				document.body.getAttribute("route") !== ""
			)
				console.warn("Ignore value for attribute route");
			if (!_routing_active) return;

			// Without path, is forwarded to the root. The fact that the
			// interface can be called without a path if it wants to use the
			// routing must be taken into account in the declaration of the
			// markup and in the implementation. This logic is not included
			// here! With path, the event must be triggered initially so that
			// any custom interceptors are addressed with the initial path.
			if (Browser.location) {
				var event = new Event("hashchange", {
					bubbles: false,
					cancelable: true,
				});
				event.oldURL = "";
				event.newURL = Browser.location;
				window.dispatchEvent(event);
			} else Routing.route("#");
		}
		if (
			!_routing_active ||
			!(element instanceof Element) ||
			!element.hasAttribute(Composite.ATTRIBUTE_COMPOSITE) ||
			!element.hasAttribute(Routing.ATTRIBUTE_ROUTE)
		)
			return;
		var composite = (element.getAttribute(Composite.ATTRIBUTE_ID) || "").trim();
		var path = _lookup(element);
		var script = null;
		if (element.hasAttribute(Composite.ATTRIBUTE_CONDITION)) {
			script = element.getAttribute(Composite.ATTRIBUTE_CONDITION).trim();
			if (script.match(Composite.PATTERN_EXPRESSION_CONTAINS))
				script = script.replace(
					Composite.PATTERN_EXPRESSION_CONTAINS,
					function (match) {
						match = match.substring(2, match.length - 2).trim();
						return '{{Routing.approve("'
							.concat(path, '", ')
							.concat(composite, '") and (')
							.concat(match, ")}}");
					},
				);
		}
		if (!script)
			script = '{{Routing.approve("'
				.concat(path, '", "')
				.concat(composite, '")}}');
		element.setAttribute(Composite.ATTRIBUTE_CONDITION, script);
	});

	/**
	 * Static component for the use of paths (routes). Paths are used for
	 * navigation, routing and controlling the view flow. The target can be a
	 * view or a function if using interceptors.
	 */
	compliant("Path", {
		// Pattern for a valid path in the 7-bit ASCII range
		get PATTERN_PATH() {
			return /^#[\x21-\x7E]*$/;
		},
		// Pattern for a string in the 7-bit ASCII range
		get PATTERN_ASCII() {
			return /^[\x21-\x7E]*$/;
		},
		/**
		 * Compares two paths and returns the common part. This method compares
		 * path and compare. If the paths match, the method returns the common
		 * part of the paths. If there is no match, null is returned. When
		 * trying with paths without content (null and empty string), the method
		 * will not return a value.
		 * @param {string} path
		 * @param {string} compare
		 * @returns {undefined|null|string}
		 */
		matches: function matches(path, compare) {
			if (
				path === undefined ||
				(typeof path !== "string" && path !== null) ||
				compare === undefined ||
				(typeof compare !== "string" && compare !== null)
			)
				throw new TypeError("Invalid data type");
			if (
				path == null ||
				path.length <= 0 ||
				compare == null ||
				compare.length <= 0
			)
				return;
			path = path.split(/(?=#)/);
			compare = compare.split(/(?=#)/);
			var length = Math.min(path.length, compare.length);
			for (var index = 0; index < length; index++) {
				if (path[index] !== compare[index]) {
					path.length = index;
					break;
				}
			}
			return path.join("") || null;
		},
		/**
		 * Checks whether the specified path is covered by the current working
		 * path. Covered means that the specified path must be contained from
		 * the root of the current working path. This assumes that the URL
		 * contains at least one hash, otherwise the method returns false.
		 * @param {string} path to be checked
		 * @returns {boolean} true if the path is covered by the current path
		 */
		covers: function covers(path) {
			if (path === undefined || (typeof path !== "string" && path !== null))
				throw new TypeError("Invalid data type");
			path = Path.normalize(path);
			if (!Routing.location || path == null || path.trim() === "") return false;
			if (path === "#") return true;
			return (Routing.location + "#").startsWith(path + "#");
		},
		/**
		 * Normalizes a path. Paths consist of words that only use 7-bit ASCII
		 * characters above the space character. The words are separated by the
		 * hash character (#). There are absolute and relative paths:
		 *
		 * - Absolute Paths start with the root, represented by a leading
		 *   hash sign (#).
		 *
		 * - Relative Paths are based on the current path and begin with either
		 *   a word or a return. Return jumps also use the hash sign, whereby
		 *   the number of repetitions indicates the number of return jumps. If
		 *   the URL does not contain at least one hash and therefore has no
		 *   working path, the root path is used as the working path.
		 *
		 * The return value is always a balanced canonical path, starting with
		 * the root.
		 *
		 * Examples (root #x#y#z):
		 *
		 *    #a#b#c#d#e##f   #a#b#c#d#f
		 *    #a#b#c#d#e###f  #a#b#c#f
		 *    ###f            #x#f
		 *    ####f           #f
		 *    empty           #x#y#z
		 *    #               #x#y#z
		 *    a#b#c           #x#y#z#a#b#c
		 *
		 * Invalid roots and paths cause an error.
		 *
		 * The method has the following various signatures:
		 *     function(root, path)
		 *     function(root, path, ...)
		 *     function(path)
		 *
		 * @param {string} [root] optional, otherwise current location is used
		 * @param {string} path to normalize
		 * @returns {string} the normalize path
		 * @throws {Error} An error occurs in the following cases:
		 *     - Invalid root and/or path
		 */
		normalize: function normalize() {
			for (
				var _len18 = arguments.length, variants = new Array(_len18), _key19 = 0;
				_key19 < _len18;
				_key19++
			) {
				variants[_key19] = arguments[_key19];
			}
			if (variants == null || variants.length <= 0) return null;
			if (variants.length === 1 && variants[0] == null) return null;
			variants.every(function (item) {
				if (item == null || typeof item === "string") return true;
				throw new TypeError("Invalid data type");
			});
			variants = variants.filter(function (item, index) {
				return (
					item != null && item.trim() !== "" && !(index > 0 && item === "#")
				);
			});
			variants.forEach(function (item) {
				if (!Path.PATTERN_ASCII.test(item))
					throw new Error("Invalid path element: ".concat(item));
			});
			variants = (function (paths) {
				return paths.map(function (item, index) {
					item = item == null ? "" : item.trim();
					item = item.replace(/([^#])#$/, "$1");
					if (index > 0 && item.startsWith("#")) return item.substring(1);
					return item;
				});
			})(variants);
			var location = Browser.location;
			if (location == null || location.trim() === "") location = "#";
			if (variants.length > 0 && variants[0] == null) variants[0] = location;
			if (variants.length > 0 && !variants[0].startsWith("#"))
				variants.unshift(location);
			if (variants.length <= 0) variants.unshift(location);
			var path = variants.join("#");
			if (path.startsWith("##")) path = location + path;
			if (!path.match(Path.PATTERN_PATH))
				throw new Error(
					"Invalid path".concat(String(path).trim() ? ": " + path : ""),
				);
			var pattern = /#[^#]+#{2}/;
			while (path.match(pattern)) path = path.replace(pattern, "#");
			path = "#" + path.replace(/(^#+)|(#+)$/g, "");
			return path;
		},
	});
})();
