/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@octokit/rest/index.js":
/*!*********************************************!*\
  !*** ./node_modules/@octokit/rest/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = GitHubApi

const defaultsDeep = __webpack_require__(/*! lodash/defaultsDeep */ "./node_modules/lodash/defaultsDeep.js")
const Hook = __webpack_require__(/*! before-after-hook */ "./node_modules/before-after-hook/index.js")

const parseClientOptions = __webpack_require__(/*! ./lib/parse-client-options */ "./node_modules/@octokit/rest/lib/parse-client-options.js")
const request = __webpack_require__(/*! ./lib/request */ "./node_modules/@octokit/rest/lib/request/index.js")
const ENDPOINT_DEFAULTS = __webpack_require__(/*! ./lib/endpoint */ "./node_modules/@octokit/rest/lib/endpoint/index.js").DEFAULTS

const PLUGINS = [
  __webpack_require__(/*! ./lib/plugins/authentication */ "./node_modules/@octokit/rest/lib/plugins/authentication/index.js"),
  __webpack_require__(/*! ./lib/plugins/endpoint-methods */ "./node_modules/@octokit/rest/lib/plugins/endpoint-methods/index.js"),
  __webpack_require__(/*! ./lib/plugins/pagination */ "./node_modules/@octokit/rest/lib/plugins/pagination/index.js")
]

function GitHubApi (options) {
  const defaults = defaultsDeep(parseClientOptions(options), ENDPOINT_DEFAULTS)

  const hook = new Hook()
  const api = {
    // NOTE: github.hook, github.plugin and github.request are experimental APIs
    //       at this point and can change at any time
    hook,
    plugin: (pluginFunction) => pluginFunction(api),
    request: (options) => api.hook('request', defaultsDeep(options, defaults), request)
  }

  PLUGINS.forEach(api.plugin)

  return api
}


/***/ }),

/***/ "./node_modules/@octokit/rest/lib/defaults.js":
/*!****************************************************!*\
  !*** ./node_modules/@octokit/rest/lib/defaults.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  agent: undefined, // https://nodejs.org/api/https.html#https_class_https_agent
  headers: {
    accept: 'application/vnd.github.v3+json'
  },
  timeout: 0,
  baseUrl: 'https://api.github.com'
}


/***/ }),

/***/ "./node_modules/@octokit/rest/lib/deprecate.js":
/*!*****************************************************!*\
  !*** ./node_modules/@octokit/rest/lib/deprecate.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = deprecate

const loggedMessages = {}

function deprecate (message) {
  if (loggedMessages[message]) {
    return
  }

  console.warn(`DEPRECATED (@octokit/rest): ${message}`)
  loggedMessages[message] = 1
}


/***/ }),

/***/ "./node_modules/@octokit/rest/lib/endpoint/add-query-parameters.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@octokit/rest/lib/endpoint/add-query-parameters.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = addQueryParameters

function addQueryParameters (url, parameters) {
  const separator = /\?/.test(url) ? '&' : '?'
  const names = Object.keys(parameters)

  if (names.length === 0) {
    return url
  }

  return url + separator + names
    .map(name => {
      if (name === 'q') {
        return 'q=' + parameters.q.split('+')
          .map(encodeURIComponent)
          .join('+')
      }

      return `${name}=${encodeURIComponent(parameters[name])}`
    })
    .join('&')
}


/***/ }),

/***/ "./node_modules/@octokit/rest/lib/endpoint/defaults.js":
/*!*************************************************************!*\
  !*** ./node_modules/@octokit/rest/lib/endpoint/defaults.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  method: 'get',
  baseUrl: 'https://api.github.com',
  headers: {
    accept: 'application/vnd.github.v3+json'
  },
  request: {}
}


/***/ }),

/***/ "./node_modules/@octokit/rest/lib/endpoint/extract-url-variable-names.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@octokit/rest/lib/endpoint/extract-url-variable-names.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = extractUrlVariableName

const flatten = __webpack_require__(/*! lodash/flatten */ "./node_modules/lodash/flatten.js")

const urlVariableRegex = /\{[^}]+\}/g
function extractUrlVariableName (url) {
  const matches = url.match(urlVariableRegex)

  if (!matches) {
    return []
  }

  return flatten(matches.map(removeNonChars))
}

function removeNonChars (variableName) {
  return variableName.replace(/^\W+|\W+$/g, '').split(/,/)
}


/***/ }),

/***/ "./node_modules/@octokit/rest/lib/endpoint/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@octokit/rest/lib/endpoint/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = restEndpoint

const defaultsDeep = __webpack_require__(/*! lodash/defaultsDeep */ "./node_modules/lodash/defaultsDeep.js")
const intersection = __webpack_require__(/*! lodash/intersection */ "./node_modules/lodash/intersection.js")
const mapKeys = __webpack_require__(/*! lodash/mapKeys */ "./node_modules/lodash/mapKeys.js")
const omit = __webpack_require__(/*! lodash/omit */ "./node_modules/lodash/omit.js")
const urlTemplate = __webpack_require__(/*! url-template */ "./node_modules/url-template/lib/url-template.js")
const getUserAgent = __webpack_require__(/*! universal-user-agent */ "./node_modules/universal-user-agent/browser.js")

const addQueryParameters = __webpack_require__(/*! ./add-query-parameters */ "./node_modules/@octokit/rest/lib/endpoint/add-query-parameters.js")
const deprecate = __webpack_require__(/*! ../deprecate */ "./node_modules/@octokit/rest/lib/deprecate.js")
const extractUrlVariableNames = __webpack_require__(/*! ./extract-url-variable-names */ "./node_modules/@octokit/rest/lib/endpoint/extract-url-variable-names.js")
const pkg = __webpack_require__(/*! ../../package.json */ "./node_modules/@octokit/rest/package.json")

const DEFAULTS = module.exports.DEFAULTS = __webpack_require__(/*! ./defaults */ "./node_modules/@octokit/rest/lib/endpoint/defaults.js")
const NON_PARAMETERS = [
  'request',
  'baseUrl'
]

function restEndpoint (options) {
  // lowercase header names (#760)
  options.headers = mapKeys(options.headers, (value, key) => key.toLowerCase())

  let userAgent = `octokit.js/${pkg.version} ${getUserAgent()}`
  if (options.headers['user-agent']) {
    userAgent = `${options.headers['user-agent']} ${userAgent}`
  }
  options.headers['user-agent'] = userAgent

  options = defaultsDeep({}, options, DEFAULTS)

  let method = options.method.toLowerCase()
  let baseUrl = options.baseUrl
  let url = options.url
  let body = options.body
  let headers = options.headers
  let remainingOptions = omit(options, ['method', 'baseUrl', 'url', 'headers'])

  // replace :varname with {varname} to make it RFC 6570 compatible
  url = url.replace(/:([a-z]\w+)/g, '{+$1}')

  // extract variable names from URL to calculate remaining variables later
  const urlVariableNames = extractUrlVariableNames(url)

  url = urlTemplate.parse(url).expand(remainingOptions)

  if (!/^http/.test(url)) {
    url = (baseUrl) + url
  }

  const requestOptions = remainingOptions.request
  remainingOptions = omit(remainingOptions, intersection(Object.keys(options), urlVariableNames).concat(NON_PARAMETERS))

  if (method === 'get' || method === 'head') {
    url = addQueryParameters(url, remainingOptions)
  } else {
    if ('input' in remainingOptions) {
      deprecate('"input" option has been renamed to "data"')
      remainingOptions.data = remainingOptions.input
      delete remainingOptions.input
    }

    if ('data' in remainingOptions) {
      body = remainingOptions.data
    } else {
      body = Object.keys(remainingOptions).length ? remainingOptions : undefined
    }
  }

  return Object.assign(requestOptions, {
    method,
    url,
    headers,
    body
  })
}


/***/ }),

/***/ "./node_modules/@octokit/rest/lib/parse-client-options.js":
/*!****************************************************************!*\
  !*** ./node_modules/@octokit/rest/lib/parse-client-options.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {module.exports = parseOptions

const defaults = __webpack_require__(/*! lodash/defaults */ "./node_modules/lodash/defaults.js")
const pick = __webpack_require__(/*! lodash/pick */ "./node_modules/lodash/pick.js")

const deprecate = __webpack_require__(/*! ./deprecate */ "./node_modules/@octokit/rest/lib/deprecate.js")
const getRequestAgent = __webpack_require__(/*! ./get-request-agent */ 1)
const DEFAULTS = __webpack_require__(/*! ./defaults */ "./node_modules/@octokit/rest/lib/defaults.js")
const OPTION_NAMES = [
  'timeout',
  'baseUrl',
  'agent',
  'headers'
]

function parseOptions (userOptions) {
  if (!userOptions) {
    userOptions = {}
  }

  if ('followRedirects' in userOptions) {
    deprecate('followRedirects option is no longer supported. All redirects are followed correctly')
  }

  if ('protocol' in userOptions) {
    deprecate('protocol option is no longer supported')
  }

  if ('host' in userOptions) {
    deprecate('host option is no longer supported')
  }

  if ('port' in userOptions) {
    deprecate('port option is no longer supported')
  }

  if ('pathPrefix' in userOptions) {
    deprecate('pathPrefix option is no longer supported')
  }

  if ('Promise' in userOptions) {
    deprecate('Promise option is no longer supported. The native Promise API is used')
  }

  const options = defaults(pick(userOptions, OPTION_NAMES), DEFAULTS)

  const clientDefaults = {
    baseUrl: options.baseUrl,
    headers: options.headers,
    request: {
      timeout: options.timeout
    }
  }
  if (userOptions.protocol) {
    clientDefaults.baseUrl = `${userOptions.protocol}://${userOptions.host}`

    /* istanbul ignore else */
    if (userOptions.port) {
      clientDefaults.baseUrl += `:${userOptions.port}`
    }

    // Check if a prefix is passed in the options and strip any leading or trailing slashes from it.
    /* istanbul ignore else */
    if (userOptions.pathPrefix) {
      clientDefaults.baseUrl += '/' + userOptions.pathPrefix.replace(/(^[/]+|[/]+$)/g, '')
    }
  }
  /* istanbul ignore else */

  if (!process.browser) {
    clientDefaults.request.agent = getRequestAgent(clientDefaults.baseUrl, userOptions)
  }

  return clientDefaults
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/@octokit/rest/lib/plugins/authentication/authenticate.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@octokit/rest/lib/plugins/authentication/authenticate.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = authenticate

function authenticate (state, options) {
  if (!options) {
    state.auth = false
    return
  }

  switch (options.type) {
    case 'basic':
      if (!options.username || !options.password) {
        throw new Error('Basic authentication requires both a username and password to be set')
      }
      break

    case 'oauth':
      if (!options.token && !(options.key && options.secret)) {
        throw new Error('OAuth2 authentication requires a token or key & secret to be set')
      }
      break

    case 'token':
    case 'integration':
    case 'app':
      if (!options.token) {
        throw new Error('Token authentication requires a token to be set')
      }
      break

    default:
      throw new Error("Invalid authentication type, must be 'basic', 'integration', or 'oauth'")
  }

  state.auth = options
}


/***/ }),

/***/ "./node_modules/@octokit/rest/lib/plugins/authentication/before-request.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@octokit/rest/lib/plugins/authentication/before-request.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = authenticationBeforeRequest

const btoa = __webpack_require__(/*! btoa-lite */ "./node_modules/btoa-lite/btoa-browser.js")
const uniq = __webpack_require__(/*! lodash/uniq */ "./node_modules/lodash/uniq.js")

const deprecate = __webpack_require__(/*! ../../deprecate */ "./node_modules/@octokit/rest/lib/deprecate.js")

function authenticationBeforeRequest (state, options) {
  if (!state.auth.type) {
    return
  }

  if (state.auth.type === 'basic') {
    const hash = btoa(`${state.auth.username}:${state.auth.password}`)
    options.headers['authorization'] = `Basic ${hash}`
    return
  }

  if (state.auth.type === 'token') {
    options.headers['authorization'] = `token ${state.auth.token}`
    return
  }

  // deprecate state.auth.type === 'integration', rename to 'app'
  if (state.auth.type === 'integration') {
    deprecate('authentication type "integration" is deprecated. Use "app" instead.')
    state.auth.type = 'app'
  }

  if (state.auth.type === 'app') {
    options.headers['authorization'] = `Bearer ${state.auth.token}`
    const acceptHeaders = options.headers['accept'].split(',')
      .concat('application/vnd.github.machine-man-preview+json')
    options.headers['accept'] = uniq(acceptHeaders).filter(Boolean).join(',')
    return
  }

  options.url += options.url.indexOf('?') === -1 ? '?' : '&'

  if (state.auth.token) {
    options.url += `access_token=${encodeURIComponent(state.auth.token)}`
    return
  }

  const key = encodeURIComponent(state.auth.key)
  const secret = encodeURIComponent(state.auth.secret)
  options.url += `client_id=${key}&client_secret=${secret}`
}


/***/ }),

/***/ "./node_modules/@octokit/rest/lib/plugins/authentication/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/@octokit/rest/lib/plugins/authentication/index.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = authenticationPlugin

const authenticate = __webpack_require__(/*! ./authenticate */ "./node_modules/@octokit/rest/lib/plugins/authentication/authenticate.js")
const beforeRequest = __webpack_require__(/*! ./before-request */ "./node_modules/@octokit/rest/lib/plugins/authentication/before-request.js")

function authenticationPlugin (octokit) {
  const state = {
    auth: false
  }
  octokit.authenticate = authenticate.bind(null, state)
  octokit.hook.before('request', beforeRequest.bind(null, state))
}


/***/ }),

/***/ "./node_modules/@octokit/rest/lib/plugins/endpoint-methods/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@octokit/rest/lib/plugins/endpoint-methods/index.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = apiPlugin

const get = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js")
const pick = __webpack_require__(/*! lodash/pick */ "./node_modules/lodash/pick.js")

const method = __webpack_require__(/*! ./method */ "./node_modules/@octokit/rest/lib/plugins/endpoint-methods/method.js")

const ENDPOINT_DEFAULTS = __webpack_require__(/*! ../../routes.json */ "./node_modules/@octokit/rest/lib/routes.json")

function apiPlugin (octokit) {
  Object.keys(ENDPOINT_DEFAULTS).forEach(namespaceName => {
    octokit[namespaceName] = {}

    Object.keys(ENDPOINT_DEFAULTS[namespaceName]).forEach(apiName => {
      let apiOptions = ENDPOINT_DEFAULTS[namespaceName][apiName]
      let deprecated

      if (apiOptions.alias) {
        deprecated = apiOptions.deprecated
        apiOptions = get(ENDPOINT_DEFAULTS, apiOptions.alias)
      }

      const endpointDefaults = pick(apiOptions, ['method', 'url', 'headers', 'request'])
      if (deprecated) {
        endpointDefaults.deprecated = deprecated
      }

      octokit[namespaceName][apiName] = method.bind(null, octokit, endpointDefaults, apiOptions.params)
    })
  })
}


/***/ }),

/***/ "./node_modules/@octokit/rest/lib/plugins/endpoint-methods/method.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@octokit/rest/lib/plugins/endpoint-methods/method.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = apiMethod

const clone = __webpack_require__(/*! lodash/clone */ "./node_modules/lodash/clone.js")
const defaultsDeep = __webpack_require__(/*! lodash/defaultsDeep */ "./node_modules/lodash/defaultsDeep.js")
const mapKeys = __webpack_require__(/*! lodash/mapKeys */ "./node_modules/lodash/mapKeys.js")

const deprecate = __webpack_require__(/*! ../../deprecate */ "./node_modules/@octokit/rest/lib/deprecate.js")
const validate = __webpack_require__(/*! ./validate */ "./node_modules/@octokit/rest/lib/plugins/endpoint-methods/validate.js")

function apiMethod (octokit, endpointDefaults, endpointParams, options, callback) {
  // Do not alter passed options (#786)
  options = clone(options) || {}

  // lowercase header names (#760)
  options.headers = mapKeys(options.headers, (value, key) => key.toLowerCase())

  if (endpointDefaults.deprecated) {
    deprecate(endpointDefaults.deprecated)
    delete endpointDefaults.deprecated
  }

  const endpointOptions = defaultsDeep(options, endpointDefaults)

  const promise = Promise.resolve(endpointOptions)
    .then(validate.bind(null, endpointParams))
    .then(octokit.request)

  if (callback) {
    deprecate('callbacks will be removed in v16. Use async/await or Promises instead.')
    promise.then(callback.bind(null, null), callback)
    return
  }

  return promise
}


/***/ }),

/***/ "./node_modules/@octokit/rest/lib/plugins/endpoint-methods/validate.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@octokit/rest/lib/plugins/endpoint-methods/validate.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = validate

const set = __webpack_require__(/*! lodash/set */ "./node_modules/lodash/set.js")
const get = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js")
const HttpError = __webpack_require__(/*! ../../request/http-error */ "./node_modules/@octokit/rest/lib/request/http-error.js")
const deprecate = __webpack_require__(/*! ../../deprecate */ "./node_modules/@octokit/rest/lib/deprecate.js")

function validate (endpointParams, options) {
  // Alias are handled before validation, as validation rules
  // ar set the aliased parameter. The `mapTo` property is the other way
  // around, the final parameter name is the mapTo value, but validation
  // rules are on parameter with the mapTo property
  Object.keys(options).forEach(optionName => {
    if (!endpointParams[optionName] || !endpointParams[optionName].alias) {
      return
    }

    set(options, endpointParams[optionName].alias, options[optionName])
    delete options[optionName]

    // right now all parameters with an alias property also have a deprecated
    // property, but that might change in future, so we wrap it in the if block,
    // but ignore if for coverage
    /* istanbul ignore else */
    if (endpointParams[optionName].deprecated) {
      deprecate(`"${optionName}" parameter has been renamed to "${endpointParams[optionName].alias}"`)
    }
  })

  Object.keys(endpointParams).forEach(parameterName => {
    const parameter = get(endpointParams, parameterName)
    const expectedType = parameter.type
    let parentParameterName
    let parentValue
    let parentParamIsPresent = true
    let parentParameterIsArray = false

    if (/\./.test(parameterName)) {
      parentParameterName = parameterName.replace(/\.[^.]+$/, '')
      parentParameterIsArray = parentParameterName.slice(-2) === '[]'
      if (parentParameterIsArray) {
        parentParameterName = parentParameterName.slice(0, -2)
      }
      parentValue = get(options, parentParameterName)
      parentParamIsPresent = parentParameterName === 'headers' || (typeof parentValue === 'object' && parentValue !== null)
    }

    let values = parentParameterIsArray
      ? (get(options, parentParameterName) || []).map(value => value[parameterName.split(/\./).pop()])
      : [get(options, parameterName)]

    values.forEach((value, i) => {
      const valueIsPresent = typeof value !== 'undefined'
      const valueIsNull = value === null
      const currentParameterName = parentParameterIsArray
        ? parameterName.replace(/\[\]/, `[${i}]`)
        : parameterName

      if (!parameter.required && !valueIsPresent) {
        return
      }

      // if the parent parameter is of type object but allows null
      // then the child parameters can be ignored
      if (!parentParamIsPresent) {
        return
      }

      if (parameter.allowNull && valueIsNull) {
        return
      }

      if (!parameter.allowNull && valueIsNull) {
        throw new HttpError(`'${currentParameterName}' cannot be null`, 400)
      }

      if (parameter.required && !valueIsPresent) {
        throw new HttpError(`Empty value for parameter '${currentParameterName}': ${JSON.stringify(value)}`, 400)
      }

      // parse to integer before checking for enum
      // so that string "1" will match enum with number 1
      if (expectedType === 'integer') {
        const unparsedValue = value
        value = parseInt(value, 10)
        if (isNaN(value)) {
          throw new HttpError(`Invalid value for parameter '${currentParameterName}': ${JSON.stringify(unparsedValue)} is NaN`, 400)
        }
      }

      if (parameter.enum && parameter.enum.indexOf(value) === -1) {
        throw new HttpError(`Invalid value for parameter '${currentParameterName}': ${JSON.stringify(value)}`, 400)
      }

      if (parameter.validation) {
        const regex = new RegExp(parameter.validation)
        if (!regex.test(value)) {
          throw new HttpError(`Invalid value for parameter '${currentParameterName}': ${JSON.stringify(value)}`, 400)
        }
      }

      if (expectedType === 'object' && typeof value === 'string') {
        try {
          value = JSON.parse(value)
        } catch (exception) {
          throw new HttpError(`JSON parse error of value for parameter '${currentParameterName}': ${JSON.stringify(value)}`, 400)
        }
      }

      set(options, parameter.mapTo || currentParameterName, value)
    })
  })

  return options
}


/***/ }),

/***/ "./node_modules/@octokit/rest/lib/plugins/pagination/get-first-page.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@octokit/rest/lib/plugins/pagination/get-first-page.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = getFirstPage

const getPage = __webpack_require__(/*! ./get-page */ "./node_modules/@octokit/rest/lib/plugins/pagination/get-page.js")

function getFirstPage (octokit, link, headers, callback) {
  return getPage(octokit, link, 'first', headers, callback)
}


/***/ }),

/***/ "./node_modules/@octokit/rest/lib/plugins/pagination/get-last-page.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@octokit/rest/lib/plugins/pagination/get-last-page.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = getLastPage

const getPage = __webpack_require__(/*! ./get-page */ "./node_modules/@octokit/rest/lib/plugins/pagination/get-page.js")

function getLastPage (octokit, link, headers, callback) {
  return getPage(octokit, link, 'last', headers, callback)
}


/***/ }),

/***/ "./node_modules/@octokit/rest/lib/plugins/pagination/get-next-page.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@octokit/rest/lib/plugins/pagination/get-next-page.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = getNextPage

const getPage = __webpack_require__(/*! ./get-page */ "./node_modules/@octokit/rest/lib/plugins/pagination/get-page.js")

function getNextPage (octokit, link, headers, callback) {
  return getPage(octokit, link, 'next', headers, callback)
}


/***/ }),

/***/ "./node_modules/@octokit/rest/lib/plugins/pagination/get-page-links.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@octokit/rest/lib/plugins/pagination/get-page-links.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = getPageLinks

function getPageLinks (link) {
  link = link.link || link.headers.link || ''

  const links = {}

  // link format:
  // '<https://api.github.com/users/aseemk/followers?page=2>; rel="next", <https://api.github.com/users/aseemk/followers?page=2>; rel="last"'
  link.replace(/<([^>]*)>;\s*rel="([\w]*)"/g, (m, uri, type) => {
    links[type] = uri
  })

  return links
}


/***/ }),

/***/ "./node_modules/@octokit/rest/lib/plugins/pagination/get-page.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@octokit/rest/lib/plugins/pagination/get-page.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = getPage

const HttpError = __webpack_require__(/*! ../../request/http-error */ "./node_modules/@octokit/rest/lib/request/http-error.js")
const getPageLinks = __webpack_require__(/*! ./get-page-links */ "./node_modules/@octokit/rest/lib/plugins/pagination/get-page-links.js")
const deprecate = __webpack_require__(/*! ../../deprecate */ "./node_modules/@octokit/rest/lib/deprecate.js")

function getPage (octokit, link, which, headers, callback) {
  if (typeof headers === 'function') {
    callback = headers
    headers = null
  }

  if (callback) {
    deprecate('callbacks will be removed in v16. Use async/await or Promises instead.')
  }

  const url = getPageLinks(link)[which]

  if (!url) {
    const urlError = new HttpError(`No ${which} page found`, 404)
    if (callback) {
      return callback(urlError)
    }
    return Promise.reject(urlError)
  }

  const requestOptions = {
    url,
    headers: applyAcceptHeader(link, headers)
  }

  const promise = octokit.request(requestOptions)

  if (callback) {
    promise.then(callback.bind(null, null), callback)
    return
  }

  return promise
}

function applyAcceptHeader (res, headers) {
  const previous = res.headers && res.headers['x-github-media-type']

  if (!previous || (headers && headers.accept)) {
    return headers
  }
  headers = headers || {}
  headers.accept = 'application/vnd.' + previous
    .replace('; param=', '.')
    .replace('; format=', '+')

  return headers
}


/***/ }),

/***/ "./node_modules/@octokit/rest/lib/plugins/pagination/get-previous-page.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@octokit/rest/lib/plugins/pagination/get-previous-page.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = getPreviousPage

const getPage = __webpack_require__(/*! ./get-page */ "./node_modules/@octokit/rest/lib/plugins/pagination/get-page.js")

function getPreviousPage (octokit, link, headers, callback) {
  return getPage(octokit, link, 'prev', headers, callback)
}


/***/ }),

/***/ "./node_modules/@octokit/rest/lib/plugins/pagination/has-first-page.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@octokit/rest/lib/plugins/pagination/has-first-page.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = hasFirstPage

const getPageLinks = __webpack_require__(/*! ./get-page-links */ "./node_modules/@octokit/rest/lib/plugins/pagination/get-page-links.js")

function hasFirstPage (link) {
  return getPageLinks(link).first
}


/***/ }),

/***/ "./node_modules/@octokit/rest/lib/plugins/pagination/has-last-page.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@octokit/rest/lib/plugins/pagination/has-last-page.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = hasLastPage

const getPageLinks = __webpack_require__(/*! ./get-page-links */ "./node_modules/@octokit/rest/lib/plugins/pagination/get-page-links.js")

function hasLastPage (link) {
  return getPageLinks(link).last
}


/***/ }),

/***/ "./node_modules/@octokit/rest/lib/plugins/pagination/has-next-page.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@octokit/rest/lib/plugins/pagination/has-next-page.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = hasNextPage

const getPageLinks = __webpack_require__(/*! ./get-page-links */ "./node_modules/@octokit/rest/lib/plugins/pagination/get-page-links.js")

function hasNextPage (link) {
  return getPageLinks(link).next
}


/***/ }),

/***/ "./node_modules/@octokit/rest/lib/plugins/pagination/has-previous-page.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@octokit/rest/lib/plugins/pagination/has-previous-page.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = hasPreviousPage

const getPageLinks = __webpack_require__(/*! ./get-page-links */ "./node_modules/@octokit/rest/lib/plugins/pagination/get-page-links.js")

function hasPreviousPage (link) {
  return getPageLinks(link).prev
}


/***/ }),

/***/ "./node_modules/@octokit/rest/lib/plugins/pagination/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/@octokit/rest/lib/plugins/pagination/index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = paginationPlugin

function paginationPlugin (octokit) {
  octokit.getFirstPage = __webpack_require__(/*! ./get-first-page */ "./node_modules/@octokit/rest/lib/plugins/pagination/get-first-page.js").bind(null, octokit)
  octokit.getLastPage = __webpack_require__(/*! ./get-last-page */ "./node_modules/@octokit/rest/lib/plugins/pagination/get-last-page.js").bind(null, octokit)
  octokit.getNextPage = __webpack_require__(/*! ./get-next-page */ "./node_modules/@octokit/rest/lib/plugins/pagination/get-next-page.js").bind(null, octokit)
  octokit.getPreviousPage = __webpack_require__(/*! ./get-previous-page */ "./node_modules/@octokit/rest/lib/plugins/pagination/get-previous-page.js").bind(null, octokit)
  octokit.hasFirstPage = __webpack_require__(/*! ./has-first-page */ "./node_modules/@octokit/rest/lib/plugins/pagination/has-first-page.js")
  octokit.hasLastPage = __webpack_require__(/*! ./has-last-page */ "./node_modules/@octokit/rest/lib/plugins/pagination/has-last-page.js")
  octokit.hasNextPage = __webpack_require__(/*! ./has-next-page */ "./node_modules/@octokit/rest/lib/plugins/pagination/has-next-page.js")
  octokit.hasPreviousPage = __webpack_require__(/*! ./has-previous-page */ "./node_modules/@octokit/rest/lib/plugins/pagination/has-previous-page.js")
}


/***/ }),

/***/ "./node_modules/@octokit/rest/lib/request/get-buffer-response-browser.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@octokit/rest/lib/request/get-buffer-response-browser.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = getBufferResponse

function getBufferResponse (response) {
  return response.arrayBuffer()
}


/***/ }),

/***/ "./node_modules/@octokit/rest/lib/request/http-error.js":
/*!**************************************************************!*\
  !*** ./node_modules/@octokit/rest/lib/request/http-error.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const deprecate = __webpack_require__(/*! ../deprecate */ "./node_modules/@octokit/rest/lib/deprecate.js")

const STATUS_CODES = {
  304: 'Not Modified', // See PR #673 (https://github.com/octokit/rest.js/pull/673)
  400: 'Bad Request',
  404: 'Not Found',
  500: 'Internal Server Error',
  504: 'Gateway Timeout'
}

module.exports = class HttpError extends Error {
  constructor (message, code, headers) {
    super(message)
    // Maintains proper stack trace for where our error was thrown (only available on V8)
    /* istanbul ignore else */
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor)
    }
    this.name = 'HttpError'
    this.code = code
    this.status = STATUS_CODES[code]
    this.headers = headers
  }

  toString () {
    return this.message
  }

  toJSON () {
    deprecate('error.toJSON() – use `error.code`, `error.status`, `error.message` instead')
    return {
      code: this.code,
      status: this.status,
      message: this.message
    }
  }
}


/***/ }),

/***/ "./node_modules/@octokit/rest/lib/request/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/@octokit/rest/lib/request/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = restRequest

const restEndpoint = __webpack_require__(/*! ../endpoint */ "./node_modules/@octokit/rest/lib/endpoint/index.js")
const request = __webpack_require__(/*! ./request */ "./node_modules/@octokit/rest/lib/request/request.js")

function restRequest (endpointOptions) {
  const requestOptions = restEndpoint(endpointOptions)
  return request(requestOptions)
}


/***/ }),

/***/ "./node_modules/@octokit/rest/lib/request/request.js":
/*!***********************************************************!*\
  !*** ./node_modules/@octokit/rest/lib/request/request.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = request

const fetch = __webpack_require__(/*! node-fetch */ "./node_modules/node-fetch/browser.js").default
const debug = __webpack_require__(/*! debug */ "./node_modules/@octokit/rest/node_modules/debug/src/browser.js")('octokit:rest')
const defaults = __webpack_require__(/*! lodash/defaults */ "./node_modules/lodash/defaults.js")
const isPlainObject = __webpack_require__(/*! lodash/isPlainObject */ "./node_modules/lodash/isPlainObject.js")
const pick = __webpack_require__(/*! lodash/pick */ "./node_modules/lodash/pick.js")

const deprecate = __webpack_require__(/*! ../deprecate */ "./node_modules/@octokit/rest/lib/deprecate.js")
const getBuffer = __webpack_require__(/*! ./get-buffer-response */ "./node_modules/@octokit/rest/lib/request/get-buffer-response-browser.js")
const HttpError = __webpack_require__(/*! ./http-error */ "./node_modules/@octokit/rest/lib/request/http-error.js")

function request (requestOptions) {
  debug('REQUEST:', requestOptions)

  // calculate content length unless body is a stream, in which case the
  // content length is already set per option
  if (requestOptions.body) {
    defaults(requestOptions.headers, {
      'content-type': 'application/json; charset=utf-8'
    })
  }

  // https://fetch.spec.whatwg.org/#methods
  requestOptions.method = requestOptions.method.toUpperCase()

  // GitHub expects "content-length: 0" header for PUT/PATCH requests without body
  // fetch does not allow to set `content-length` header, but we can set body to an empty string
  if (['PATCH', 'PUT'].indexOf(requestOptions.method) >= 0 && !requestOptions.body) {
    requestOptions.body = ''
  }

  if (isPlainObject(requestOptions.body) || Array.isArray(requestOptions.body)) {
    requestOptions.body = JSON.stringify(requestOptions.body)
  }

  let headers = {}
  let status

  return fetch(requestOptions.url, pick(requestOptions, 'method', 'body', 'headers', 'timeout', 'agent'))

    .then(response => {
      status = response.status
      for (const keyAndValue of response.headers.entries()) {
        headers[keyAndValue[0]] = keyAndValue[1]
      }

      if (status === 204 || status === 205) {
        return
      }

      // GitHub API returns 200 for HEAD requsets
      if (requestOptions.method === 'HEAD') {
        if (status < 400) {
          return
        }

        throw new HttpError(response.statusText, status, headers)
      }

      if (status === 304) {
        requestOptions.url = response.headers.location
        throw new HttpError('Not modified', status, headers)
      }

      if (status >= 400) {
        return response.text()

          .then(message => {
            throw new HttpError(message, status, headers)
          })
      }

      const contentType = response.headers.get('content-type')
      if (/application\/json/.test(contentType)) {
        return response.json()
      }

      if (!contentType || /^text\/|charset=utf-8$/.test(contentType)) {
        return response.text()
      }

      return getBuffer(response)
    })

    .then(data => {
      return {
        data,
        status,
        headers,
        get meta () {
          deprecate('response.meta – use response.headers instead (#896)')
          return headers
        }
      }
    })

    .catch(error => {
      if (error instanceof HttpError) {
        throw error
      }

      throw new HttpError(error.message, 500, headers)
    })
}


/***/ }),

/***/ "./node_modules/@octokit/rest/lib/routes.json":
/*!****************************************************!*\
  !*** ./node_modules/@octokit/rest/lib/routes.json ***!
  \****************************************************/
/*! exports provided: activity, apps, authorization, checks, codesOfConduct, emojis, enterprise, gists, gitdata, gitignore, integrations, issues, licenses, markdown, meta, migrations, misc, orgs, projects, pullRequests, rateLimit, reactions, repos, search, teams, users, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"activity\":{\"checkNotificationThreadSubscription\":{\"alias\":\"activity.getThreadSubscription\",\"deprecated\":\"`activity.checkNotificationThreadSubscription()` is deprecated, use `activity.getThreadSubscription()`\"},\"checkStarringRepo\":{\"method\":\"GET\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/user/starred/:owner/:repo\"},\"deleteNotificationThreadSubscription\":{\"alias\":\"activity.deleteThreadSubscription\",\"deprecated\":\"`activity.deleteNotificationThreadSubscription()` is deprecated, use `activity.deleteThreadSubscription()`\"},\"deleteRepoSubscription\":{\"method\":\"DELETE\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/subscription\"},\"deleteThreadSubscription\":{\"method\":\"DELETE\",\"params\":{\"id\":{\"alias\":\"thread_id\",\"deprecated\":true},\"thread_id\":{\"required\":true,\"type\":\"integer\"}},\"url\":\"/notifications/threads/:thread_id/subscription\"},\"getEvents\":{\"alias\":\"activity.listPublicEvents\",\"deprecated\":\"`activity.getEvents()` is deprecated, use `activity.listPublicEvents()`\"},\"getEventsForOrg\":{\"alias\":\"activity.listPublicEventsForOrg\",\"deprecated\":\"`activity.getEventsForOrg()` is deprecated, use `activity.listPublicEventsForOrg()`\"},\"getEventsForRepo\":{\"alias\":\"activity.listRepoEvents\",\"deprecated\":\"`activity.getEventsForRepo()` is deprecated, use `activity.listRepoEvents()`\"},\"getEventsForRepoIssues\":{\"alias\":\"issues.listEventsForRepo\",\"deprecated\":\"`activity.getEventsForRepoIssues()` is deprecated, use `issues.listEventsForRepo`\",\"params\":{}},\"getEventsForRepoNetwork\":{\"alias\":\"activity.listPublicEventsForRepoNetwork\",\"deprecated\":\"`activity.getEventsForRepoNetwork()` is deprecated, use `activity.listPublicEventsForRepoNetwork()`\"},\"getEventsForUser\":{\"alias\":\"activity.listEventsForUser\",\"deprecated\":\"`activity.getEventsForUser()` is deprecated, use `activity.listEventsForUser()`\"},\"getEventsForUserOrg\":{\"alias\":\"activity.listEventsForOrg\",\"deprecated\":\"`activity.getEventsForUserOrg()` is deprecated, use `activity.listEventsForOrg()`\"},\"getEventsForUserPublic\":{\"alias\":\"activity.listPublicEventsForUser\",\"deprecated\":\"`activity.getEventsForUserPublic()` is deprecated, use `activity.listPublicEventsForUser()`\"},\"getEventsReceived\":{\"alias\":\"activity.listReceivedEventsForUser\",\"deprecated\":\"`activity.getEventsReceived()` is deprecated, use `activity.listReceivedEventsForUser()`\"},\"getEventsReceivedPublic\":{\"alias\":\"activity.listReceivedPublicEventsForUser\",\"deprecated\":\"`activity.getEventsReceivedPublic()` is deprecated, use `activity.listReceivedPublicEventsForUser()`\"},\"getFeeds\":{\"alias\":\"activity.listFeeds\",\"deprecated\":\"`activity.getFeeds()` is deprecated, use `activity.listFeeds()`\"},\"getNotificationThread\":{\"alias\":\"activity.getThread\",\"deprecated\":\"`activity.getNotificationThread()` is deprecated, use `activity.getThread()`\"},\"getNotifications\":{\"alias\":\"activity.listNotifications\",\"deprecated\":\"`activity.getNotifications()` is deprecated, use `activity.listNotifications()`\"},\"getNotificationsForUser\":{\"alias\":\"activity.listNotificationsForRepo\",\"deprecated\":\"`activity.getNotificationsForUser()` is deprecated, use `activity.listNotificationsForRepo()`\"},\"getRepoSubscription\":{\"method\":\"GET\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/subscription\"},\"getStargazersForRepo\":{\"alias\":\"activity.listStargazersForRepo\",\"deprecated\":\"`activity.getStargazersForRepo()` is deprecated, use `activity.listStargazersForRepo()`\"},\"getStarredRepos\":{\"alias\":\"activity.listReposStarredByAuthenticatedUser\",\"deprecated\":\"`activity.getStarredRepos()` is deprecated, use `activity.listReposStarredByAuthenticatedUser()`\"},\"getStarredReposForUser\":{\"alias\":\"activity.listReposStarredByUser\",\"deprecated\":\"`activity.getStarredReposForUser()` is deprecated, use `activity.listReposStarredByUser()`\"},\"getThread\":{\"method\":\"GET\",\"params\":{\"id\":{\"alias\":\"thread_id\",\"deprecated\":true},\"thread_id\":{\"required\":true,\"type\":\"integer\"}},\"url\":\"/notifications/threads/:thread_id\"},\"getThreadSubscription\":{\"method\":\"GET\",\"params\":{\"id\":{\"alias\":\"thread_id\",\"deprecated\":true},\"thread_id\":{\"required\":true,\"type\":\"integer\"}},\"url\":\"/notifications/threads/:thread_id/subscription\"},\"getWatchedRepos\":{\"alias\":\"activity.listWatchedReposForAuthenticatedUser\",\"deprecated\":\"`activity.getWatchedRepos()` is deprecated, use `activity.listWatchedReposForAuthenticatedUser()`\"},\"getWatchedReposForUser\":{\"alias\":\"activity.listReposWatchedByUser\",\"deprecated\":\"`activity.getWatchedReposForUser()` is deprecated, use `activity.listReposWatchedByUser()`\"},\"getWatchersForRepo\":{\"alias\":\"activity.listWatchersForRepo\",\"deprecated\":\"`activity.getWatchersForRepo()` is deprecated, use `activity.listWatchersForRepo()`\"},\"listEventsForOrg\":{\"method\":\"GET\",\"params\":{\"org\":{\"required\":true,\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"username\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/users/:username/events/orgs/:org\"},\"listEventsForUser\":{\"method\":\"GET\",\"params\":{\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"username\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/users/:username/events\"},\"listFeeds\":{\"method\":\"GET\",\"params\":{},\"url\":\"/feeds\"},\"listNotifications\":{\"method\":\"GET\",\"params\":{\"all\":{\"type\":\"boolean\"},\"before\":{\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"participating\":{\"type\":\"boolean\"},\"per_page\":{\"type\":\"integer\"},\"since\":{\"type\":\"string\"}},\"url\":\"/notifications\"},\"listNotificationsForRepo\":{\"method\":\"GET\",\"params\":{\"all\":{\"type\":\"boolean\"},\"before\":{\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"participating\":{\"type\":\"boolean\"},\"per_page\":{\"type\":\"integer\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"since\":{\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/notifications\"},\"listPublicEvents\":{\"method\":\"GET\",\"params\":{\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"}},\"url\":\"/events\"},\"listPublicEventsForOrg\":{\"method\":\"GET\",\"params\":{\"org\":{\"required\":true,\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"}},\"url\":\"/orgs/:org/events\"},\"listPublicEventsForRepoNetwork\":{\"method\":\"GET\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/networks/:owner/:repo/events\"},\"listPublicEventsForUser\":{\"method\":\"GET\",\"params\":{\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"username\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/users/:username/events/public\"},\"listReceivedEventsForUser\":{\"method\":\"GET\",\"params\":{\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"username\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/users/:username/received_events\"},\"listReceivedPublicEventsForUser\":{\"method\":\"GET\",\"params\":{\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"username\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/users/:username/received_events/public\"},\"listRepoEvents\":{\"method\":\"GET\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/events\"},\"listReposStarredByAuthenticatedUser\":{\"method\":\"GET\",\"params\":{\"direction\":{\"enum\":[\"asc\",\"desc\"],\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"sort\":{\"enum\":[\"created\",\"updated\"],\"type\":\"string\"}},\"url\":\"/user/starred\"},\"listReposStarredByUser\":{\"method\":\"GET\",\"params\":{\"direction\":{\"enum\":[\"asc\",\"desc\"],\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"sort\":{\"enum\":[\"created\",\"updated\"],\"type\":\"string\"},\"username\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/users/:username/starred\"},\"listReposWatchedByUser\":{\"method\":\"GET\",\"params\":{\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"username\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/users/:username/subscriptions\"},\"listStargazersForRepo\":{\"method\":\"GET\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/stargazers\"},\"listWatchedReposForAuthenticatedUser\":{\"method\":\"GET\",\"params\":{\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"}},\"url\":\"/user/subscriptions\"},\"listWatchersForRepo\":{\"method\":\"GET\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/subscribers\"},\"markAsRead\":{\"method\":\"PUT\",\"params\":{\"last_read_at\":{\"type\":\"string\"}},\"url\":\"/notifications\"},\"markNotificationThreadAsRead\":{\"alias\":\"activity.markThreadAsRead\",\"deprecated\":\"`activity.markNotificationThreadAsRead()` is deprecated, use `activity.markThreadAsRead()`\"},\"markNotificationsAsRead\":{\"alias\":\"activity.markAsRead\",\"deprecated\":\"`activity.markNotificationsAsRead()` is deprecated, use `activity.markAsRead()`\"},\"markNotificationsAsReadForRepo\":{\"method\":\"PUT\",\"params\":{\"last_read_at\":{\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/notifications\"},\"markThreadAsRead\":{\"method\":\"PATCH\",\"params\":{\"id\":{\"alias\":\"thread_id\",\"deprecated\":true},\"thread_id\":{\"required\":true,\"type\":\"integer\"}},\"url\":\"/notifications/threads/:thread_id\"},\"setNotificationThreadSubscription\":{\"alias\":\"activity.setThreadSubscription\",\"deprecated\":\"`activity.setNotificationThreadSubscription()` is deprecated, use `activity.setThreadSubscription()`\"},\"setRepoSubscription\":{\"method\":\"PUT\",\"params\":{\"ignored\":{\"type\":\"boolean\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"subscribed\":{\"type\":\"boolean\"}},\"url\":\"/repos/:owner/:repo/subscription\"},\"setThreadSubscription\":{\"method\":\"PUT\",\"params\":{\"id\":{\"alias\":\"thread_id\",\"deprecated\":true},\"ignored\":{\"type\":\"boolean\"},\"thread_id\":{\"required\":true,\"type\":\"integer\"}},\"url\":\"/notifications/threads/:thread_id/subscription\"},\"starRepo\":{\"method\":\"PUT\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/user/starred/:owner/:repo\"},\"unstarRepo\":{\"method\":\"DELETE\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/user/starred/:owner/:repo\"},\"unwatchRepo\":{\"alias\":\"activity.deleteRepoSubscription\",\"deprecated\":\"`activity.unwatchRepo()` is deprecated, use `activity.deleteRepoSubscription()`\"}},\"apps\":{\"addRepoToInstallation\":{\"headers\":{\"accept\":\"application/vnd.github.machine-man-preview+json\"},\"method\":\"PUT\",\"params\":{\"installation_id\":{\"required\":true,\"type\":\"integer\"},\"repository_id\":{\"required\":true,\"type\":\"integer\"}},\"url\":\"/user/installations/:installation_id/repositories/:repository_id\"},\"checkAccountIsAssociatedWithAny\":{\"method\":\"GET\",\"params\":{\"account_id\":{\"required\":true,\"type\":\"integer\"},\"id\":{\"alias\":\"account_id\",\"deprecated\":true},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"}},\"url\":\"/marketplace_listing/accounts/:account_id\"},\"checkAccountIsAssociatedWithAnyStubbed\":{\"method\":\"GET\",\"params\":{\"account_id\":{\"required\":true,\"type\":\"integer\"},\"id\":{\"alias\":\"account_id\",\"deprecated\":true},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"}},\"url\":\"/marketplace_listing/stubbed/accounts/:account_id\"},\"checkMarketplaceListingAccount\":{\"alias\":\"apps.checkAccountIsAssociatedWithAny\",\"deprecated\":\"`apps.checkMarketplaceListingAccount()` is deprecated, use `apps.checkAccountIsAssociatedWithAny()`\"},\"checkMarketplaceListingStubbedAccount\":{\"alias\":\"apps.checkAccountIsAssociatedWithAnyStubbed\",\"deprecated\":\"`apps.checkMarketplaceListingStubbedAccount()` is deprecated, use `apps.checkAccountIsAssociatedWithAnyStubbed()`\"},\"createFromManifest\":{\"headers\":{\"accept\":\"application/vnd.github.fury-preview+json,application/vnd.github.machine-man-preview+json\"},\"method\":\"POST\",\"params\":{\"code\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/app-manifests/:code/conversions\"},\"createInstallationToken\":{\"headers\":{\"accept\":\"application/vnd.github.machine-man-preview+json\"},\"method\":\"POST\",\"params\":{\"installation_id\":{\"required\":true,\"type\":\"integer\"}},\"url\":\"/app/installations/:installation_id/access_tokens\"},\"findOrgInstallation\":{\"headers\":{\"accept\":\"application/vnd.github.machine-man-preview+json\"},\"method\":\"GET\",\"params\":{\"org\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/orgs/:org/installation\"},\"findRepoInstallation\":{\"headers\":{\"accept\":\"application/vnd.github.machine-man-preview+json\"},\"method\":\"GET\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/installation\"},\"findUserInstallation\":{\"headers\":{\"accept\":\"application/vnd.github.machine-man-preview+json\"},\"method\":\"GET\",\"params\":{\"username\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/users/:username/installation\"},\"get\":{\"alias\":\"apps.getAuthenticated\",\"deprecated\":\"`apps.get()` is deprecated, use `apps.getAuthenticated()`\"},\"getAuthenticated\":{\"method\":\"GET\",\"params\":{},\"url\":\"/app\"},\"getBySlug\":{\"headers\":{\"accept\":\"application/vnd.github.machine-man-preview+json\"},\"method\":\"GET\",\"params\":{\"app_slug\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/apps/:app_slug\"},\"getForSlug\":{\"alias\":\"apps.getBySlug\",\"deprecated\":\"`apps.getForSlug()` is deprecated, use `apps.getBySlug()`\"},\"getInstallation\":{\"headers\":{\"accept\":\"application/vnd.github.machine-man-preview+json\"},\"method\":\"GET\",\"params\":{\"installation_id\":{\"required\":true,\"type\":\"integer\"}},\"url\":\"/app/installations/:installation_id\"},\"getInstallationRepositories\":{\"alias\":\"apps.listRepos\",\"deprecated\":\"`apps.getInstallationRepositories()` is deprecated, use `apps.listRepos()`\"},\"getInstallations\":{\"alias\":\"apps.listInstallations\",\"deprecated\":\"`apps.getInstallations()` is deprecated, use `apps.listInstallations()`\"},\"getMarketplaceListingPlanAccounts\":{\"alias\":\"apps.listAccountsUserOrOrgOnPlan\",\"deprecated\":\"`apps.getMarketplaceListingPlanAccounts()` is deprecated, use `apps.listAccountsUserOrOrgOnPlan()`\"},\"getMarketplaceListingPlans\":{\"alias\":\"apps.listPlans\",\"deprecated\":\"`apps.getMarketplaceListingPlans()` is deprecated, use `apps.listPlans()`\"},\"getMarketplaceListingStubbedPlanAccounts\":{\"alias\":\"apps.listAccountsUserOrOrgOnPlanStubbed\",\"deprecated\":\"`apps.getMarketplaceListingStubbedPlanAccounts()` is deprecated, use `apps.listAccountsUserOrOrgOnPlanStubbed()`\"},\"getMarketplaceListingStubbedPlans\":{\"alias\":\"apps.listPlansStubbed\",\"deprecated\":\"`apps.getMarketplaceListingStubbedPlans()` is deprecated, use `apps.listPlansStubbed()`\"},\"listAccountsUserOrOrgOnPlan\":{\"method\":\"GET\",\"params\":{\"direction\":{\"enum\":[\"asc\",\"desc\"],\"type\":\"string\"},\"id\":{\"alias\":\"plan_id\",\"deprecated\":true},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"plan_id\":{\"required\":true,\"type\":\"integer\"},\"sort\":{\"enum\":[\"created\",\"updated\"],\"type\":\"string\"}},\"url\":\"/marketplace_listing/plans/:plan_id/accounts\"},\"listAccountsUserOrOrgOnPlanStubbed\":{\"method\":\"GET\",\"params\":{\"direction\":{\"enum\":[\"asc\",\"desc\"],\"type\":\"string\"},\"id\":{\"alias\":\"plan_id\",\"deprecated\":true},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"plan_id\":{\"required\":true,\"type\":\"integer\"},\"sort\":{\"enum\":[\"created\",\"updated\"],\"type\":\"string\"}},\"url\":\"/marketplace_listing/stubbed/plans/:plan_id/accounts\"},\"listInstallationReposForAuthenticatedUser\":{\"method\":\"GET\",\"params\":{\"installation_id\":{\"required\":true,\"type\":\"integer\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"}},\"url\":\"/user/installations/:installation_id/repositories\"},\"listInstallations\":{\"headers\":{\"accept\":\"application/vnd.github.machine-man-preview+json\"},\"method\":\"GET\",\"params\":{\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"}},\"url\":\"/app/installations\"},\"listInstallationsForAuthenticatedUser\":{\"headers\":{\"accept\":\"application/vnd.github.machine-man-preview+json\"},\"method\":\"GET\",\"params\":{\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"}},\"url\":\"/user/installations\"},\"listMarketplacePurchasesForAuthenticatedUser\":{\"method\":\"GET\",\"params\":{\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"}},\"url\":\"/user/marketplace_purchases\"},\"listMarketplacePurchasesForAuthenticatedUserStubbed\":{\"method\":\"GET\",\"params\":{\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"}},\"url\":\"/user/marketplace_purchases/stubbed\"},\"listPlans\":{\"method\":\"GET\",\"params\":{\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"}},\"url\":\"/marketplace_listing/plans\"},\"listPlansStubbed\":{\"method\":\"GET\",\"params\":{\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"}},\"url\":\"/marketplace_listing/stubbed/plans\"},\"listRepos\":{\"headers\":{\"accept\":\"application/vnd.github.machine-man-preview+json\"},\"method\":\"GET\",\"params\":{\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"}},\"url\":\"/installation/repositories\"},\"removeRepoFromInstallation\":{\"headers\":{\"accept\":\"application/vnd.github.machine-man-preview+json\"},\"method\":\"DELETE\",\"params\":{\"installation_id\":{\"required\":true,\"type\":\"integer\"},\"repository_id\":{\"required\":true,\"type\":\"integer\"}},\"url\":\"/user/installations/:installation_id/repositories/:repository_id\"}},\"authorization\":{\"check\":{\"alias\":\"authorization.checkAuthorization\",\"deprecated\":\"`authorization.check()` is deprecated, use `authorization.checkAuthorization()`\"},\"checkAuthorization\":{\"method\":\"GET\",\"params\":{\"access_token\":{\"required\":true,\"type\":\"string\"},\"client_id\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/applications/:client_id/tokens/:access_token\"},\"create\":{\"alias\":\"authorization.createAuthorization\",\"deprecated\":\"`authorization.create()` is deprecated, use `authorization.createAuthorization()`\"},\"createAuthorization\":{\"method\":\"POST\",\"params\":{\"client_id\":{\"type\":\"string\"},\"client_secret\":{\"type\":\"string\"},\"fingerprint\":{\"type\":\"string\"},\"note\":{\"required\":true,\"type\":\"string\"},\"note_url\":{\"type\":\"string\"},\"scopes\":{\"type\":\"string[]\"}},\"url\":\"/authorizations\"},\"delete\":{\"alias\":\"authorization.deleteAuthorization\",\"deprecated\":\"`authorization.delete()` is deprecated, use `authorization.deleteAuthorization()`\"},\"deleteAuthorization\":{\"method\":\"DELETE\",\"params\":{\"authorization_id\":{\"required\":true,\"type\":\"integer\"},\"id\":{\"alias\":\"authorization_id\",\"deprecated\":true}},\"url\":\"/authorizations/:authorization_id\"},\"deleteGrant\":{\"method\":\"DELETE\",\"params\":{\"grant_id\":{\"required\":true,\"type\":\"integer\"},\"id\":{\"alias\":\"grant_id\",\"deprecated\":true}},\"url\":\"/applications/grants/:grant_id\"},\"get\":{\"alias\":\"authorization.getAuthorization\",\"deprecated\":\"`authorization.get()` is deprecated, use `authorization.getAuthorization()`\"},\"getAll\":{\"alias\":\"authorization.listAuthorizations\",\"deprecated\":\"`authorization.getAll()` is deprecated, use `authorization.listAuthorizations()`\"},\"getAuthorization\":{\"method\":\"GET\",\"params\":{\"authorization_id\":{\"required\":true,\"type\":\"integer\"},\"id\":{\"alias\":\"authorization_id\",\"deprecated\":true}},\"url\":\"/authorizations/:authorization_id\"},\"getGrant\":{\"method\":\"GET\",\"params\":{\"grant_id\":{\"required\":true,\"type\":\"integer\"},\"id\":{\"alias\":\"grant_id\",\"deprecated\":true}},\"url\":\"/applications/grants/:grant_id\"},\"getGrants\":{\"alias\":\"authorization.listGrants\",\"deprecated\":\"`authorization.getGrants()` is deprecated, use `authorization.listGrants()`\"},\"getOrCreateAuthorizationForApp\":{\"method\":\"PUT\",\"params\":{\"client_id\":{\"required\":true,\"type\":\"string\"},\"client_secret\":{\"required\":true,\"type\":\"string\"},\"fingerprint\":{\"type\":\"string\"},\"note\":{\"type\":\"string\"},\"note_url\":{\"type\":\"string\"},\"scopes\":{\"type\":\"string[]\"}},\"url\":\"/authorizations/clients/:client_id\"},\"getOrCreateAuthorizationForAppAndFingerprint\":{\"alias\":\"authorization.getOrCreateAuthorizationForAppFingerprint\",\"deprecated\":\"`authorization.getOrCreateAuthorizationForAppAndFingerprint()` is deprecated, use `authorization.getOrCreateAuthorizationForAppFingerprint()`\"},\"getOrCreateAuthorizationForAppFingerprint\":{\"method\":\"PUT\",\"params\":{\"client_id\":{\"required\":true,\"type\":\"string\"},\"client_secret\":{\"required\":true,\"type\":\"string\"},\"fingerprint\":{\"required\":true,\"type\":\"string\"},\"note\":{\"type\":\"string\"},\"note_url\":{\"type\":\"string\"},\"scopes\":{\"type\":\"string[]\"}},\"url\":\"/authorizations/clients/:client_id/:fingerprint\"},\"listAuthorizations\":{\"method\":\"GET\",\"params\":{\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"}},\"url\":\"/authorizations\"},\"listGrants\":{\"method\":\"GET\",\"params\":{\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"}},\"url\":\"/applications/grants\"},\"reset\":{\"alias\":\"authorization.resetAuthorization\",\"deprecated\":\"`authorization.reset()` is deprecated, use `authorization.resetAuthorization()`\"},\"resetAuthorization\":{\"method\":\"POST\",\"params\":{\"access_token\":{\"required\":true,\"type\":\"string\"},\"client_id\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/applications/:client_id/tokens/:access_token\"},\"revoke\":{\"alias\":\"authorization.revokeAuthorizationForApplication\",\"deprecated\":\"`authorization.revoke()` is deprecated, use `authorization.revokeAuthorizationForApplication()`\"},\"revokeAuthorizationForApplication\":{\"method\":\"DELETE\",\"params\":{\"access_token\":{\"required\":true,\"type\":\"string\"},\"client_id\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/applications/:client_id/tokens/:access_token\"},\"revokeGrant\":{\"alias\":\"authorization.revokeGrantForApplication\",\"deprecated\":\"`authorization.revokeGrant()` is deprecated, use `authorization.revokeGrantForApplication()`\"},\"revokeGrantForApplication\":{\"method\":\"DELETE\",\"params\":{\"access_token\":{\"required\":true,\"type\":\"string\"},\"client_id\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/applications/:client_id/grants/:access_token\"},\"update\":{\"alias\":\"authorization.updateAuthorization\",\"deprecated\":\"`authorization.update()` is deprecated, use `authorization.updateAuthorization()`\"},\"updateAuthorization\":{\"method\":\"PATCH\",\"params\":{\"add_scopes\":{\"type\":\"string[]\"},\"authorization_id\":{\"required\":true,\"type\":\"integer\"},\"fingerprint\":{\"type\":\"string\"},\"id\":{\"alias\":\"authorization_id\",\"deprecated\":true},\"note\":{\"type\":\"string\"},\"note_url\":{\"type\":\"string\"},\"remove_scopes\":{\"type\":\"string[]\"},\"scopes\":{\"type\":\"string[]\"}},\"url\":\"/authorizations/:authorization_id\"}},\"checks\":{\"create\":{\"headers\":{\"accept\":\"application/vnd.github.antiope-preview+json,application/vnd.github.machine-man-preview+json\"},\"method\":\"POST\",\"params\":{\"actions\":{\"type\":\"object[]\"},\"actions[].description\":{\"required\":true,\"type\":\"string\"},\"actions[].identifier\":{\"required\":true,\"type\":\"string\"},\"actions[].label\":{\"required\":true,\"type\":\"string\"},\"completed_at\":{\"type\":\"string\"},\"conclusion\":{\"enum\":[\"success\",\"failure\",\"neutral\",\"cancelled\",\"timed_out\",\"action_required\"],\"type\":\"string\"},\"details_url\":{\"type\":\"string\"},\"external_id\":{\"type\":\"string\"},\"head_sha\":{\"required\":true,\"type\":\"string\"},\"name\":{\"required\":true,\"type\":\"string\"},\"output\":{\"type\":\"object\"},\"output.annotations\":{\"type\":\"object[]\"},\"output.annotations[].annotation_level\":{\"enum\":[\"notice\",\"warning\",\"failure\"],\"required\":true,\"type\":\"string\"},\"output.annotations[].end_column\":{\"type\":\"integer\"},\"output.annotations[].end_line\":{\"required\":true,\"type\":\"integer\"},\"output.annotations[].filename\":{\"alias\":\"output.annotations[].path\",\"deprecated\":true},\"output.annotations[].message\":{\"required\":true,\"type\":\"string\"},\"output.annotations[].path\":{\"required\":true,\"type\":\"string\"},\"output.annotations[].raw_details\":{\"type\":\"string\"},\"output.annotations[].start_column\":{\"type\":\"integer\"},\"output.annotations[].start_line\":{\"required\":true,\"type\":\"integer\"},\"output.annotations[].title\":{\"type\":\"string\"},\"output.annotations[].warning_level\":{\"alias\":\"output.annotations[].annotation_level\",\"deprecated\":true},\"output.images\":{\"type\":\"object[]\"},\"output.images[].alt\":{\"required\":true,\"type\":\"string\"},\"output.images[].caption\":{\"type\":\"string\"},\"output.images[].image_url\":{\"required\":true,\"type\":\"string\"},\"output.summary\":{\"required\":true,\"type\":\"string\"},\"output.text\":{\"type\":\"string\"},\"output.title\":{\"required\":true,\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"started_at\":{\"type\":\"string\"},\"status\":{\"enum\":[\"queued\",\"in_progress\",\"completed\"],\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/check-runs\"},\"createSuite\":{\"headers\":{\"accept\":\"application/vnd.github.antiope-preview+json\"},\"method\":\"POST\",\"params\":{\"head_sha\":{\"required\":true,\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/check-suites\"},\"get\":{\"headers\":{\"accept\":\"application/vnd.github.antiope-preview+json,application/vnd.github.machine-man-preview+json\"},\"method\":\"GET\",\"params\":{\"check_run_id\":{\"required\":true,\"type\":\"integer\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/check-runs/:check_run_id\"},\"getSuite\":{\"headers\":{\"accept\":\"application/vnd.github.antiope-preview+json,application/vnd.github.machine-man-preview+json\"},\"method\":\"GET\",\"params\":{\"check_suite_id\":{\"required\":true,\"type\":\"integer\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/check-suites/:check_suite_id\"},\"listAnnotations\":{\"headers\":{\"accept\":\"application/vnd.github.antiope-preview+json,application/vnd.github.machine-man-preview+json\"},\"method\":\"GET\",\"params\":{\"check_run_id\":{\"required\":true,\"type\":\"integer\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/check-runs/:check_run_id/annotations\"},\"listForRef\":{\"headers\":{\"accept\":\"application/vnd.github.antiope-preview+json,application/vnd.github.machine-man-preview+json\"},\"method\":\"GET\",\"params\":{\"check_name\":{\"type\":\"string\"},\"filter\":{\"enum\":[\"latest\",\"all\"],\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"ref\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"status\":{\"enum\":[\"queued\",\"in_progress\",\"completed\"],\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/commits/:ref/check-runs\"},\"listForSuite\":{\"headers\":{\"accept\":\"application/vnd.github.antiope-preview+json,application/vnd.github.machine-man-preview+json\"},\"method\":\"GET\",\"params\":{\"check_name\":{\"type\":\"string\"},\"check_suite_id\":{\"required\":true,\"type\":\"integer\"},\"filter\":{\"enum\":[\"latest\",\"all\"],\"type\":\"string\"},\"id\":{\"alias\":\"check_suite_id\",\"deprecated\":true},\"owner\":{\"required\":true,\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"status\":{\"enum\":[\"queued\",\"in_progress\",\"completed\"],\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/check-suites/:check_suite_id/check-runs\"},\"listSuitesForRef\":{\"headers\":{\"accept\":\"application/vnd.github.antiope-preview+json,application/vnd.github.machine-man-preview+json\"},\"method\":\"GET\",\"params\":{\"app_id\":{\"type\":\"integer\"},\"check_name\":{\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"ref\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/commits/:ref/check-suites\"},\"requestSuites\":{\"deprecated\":\"use `rerequestSuite` instead\",\"headers\":{\"accept\":\"application/vnd.github.antiope-preview+json\"},\"method\":\"POST\",\"params\":{\"head_sha\":{\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/check-suite-requests\"},\"rerequestSuite\":{\"headers\":{\"accept\":\"application/vnd.github.antiope-preview+json\"},\"method\":\"POST\",\"params\":{\"check_suite_id\":{\"required\":true,\"type\":\"integer\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/check-suites/:check_suite_id/rerequest\"},\"setSuitesPreferences\":{\"headers\":{\"accept\":\"application/vnd.github.antiope-preview+json,application/vnd.github.machine-man-preview+json\"},\"method\":\"PATCH\",\"params\":{\"auto_trigger_checks\":{\"type\":\"object[]\"},\"auto_trigger_checks[].app_id\":{\"required\":true,\"type\":\"integer\"},\"auto_trigger_checks[].setting\":{\"required\":true,\"type\":\"boolean\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/check-suites/preferences\"},\"update\":{\"headers\":{\"accept\":\"application/vnd.github.antiope-preview+json,application/vnd.github.machine-man-preview+json\"},\"method\":\"PATCH\",\"params\":{\"actions\":{\"type\":\"object[]\"},\"actions[].description\":{\"required\":true,\"type\":\"string\"},\"actions[].identifier\":{\"required\":true,\"type\":\"string\"},\"actions[].label\":{\"required\":true,\"type\":\"string\"},\"check_run_id\":{\"required\":true,\"type\":\"integer\"},\"completed_at\":{\"type\":\"string\"},\"conclusion\":{\"enum\":[\"success\",\"failure\",\"neutral\",\"cancelled\",\"timed_out\",\"action_required\"],\"type\":\"string\"},\"details_url\":{\"type\":\"string\"},\"external_id\":{\"type\":\"string\"},\"name\":{\"type\":\"string\"},\"output\":{\"type\":\"object\"},\"output.annotations\":{\"type\":\"object[]\"},\"output.annotations[].annotation_level\":{\"enum\":[\"notice\",\"warning\",\"failure\"],\"required\":true,\"type\":\"string\"},\"output.annotations[].end_column\":{\"type\":\"integer\"},\"output.annotations[].end_line\":{\"required\":true,\"type\":\"integer\"},\"output.annotations[].filename\":{\"alias\":\"output.annotations[].path\",\"deprecated\":true},\"output.annotations[].message\":{\"required\":true,\"type\":\"string\"},\"output.annotations[].path\":{\"required\":true,\"type\":\"string\"},\"output.annotations[].raw_details\":{\"type\":\"string\"},\"output.annotations[].start_column\":{\"type\":\"integer\"},\"output.annotations[].start_line\":{\"required\":true,\"type\":\"integer\"},\"output.annotations[].title\":{\"type\":\"string\"},\"output.annotations[].warning_level\":{\"alias\":\"output.annotations[].annotation_level\",\"deprecated\":true},\"output.images\":{\"type\":\"object[]\"},\"output.images[].alt\":{\"required\":true,\"type\":\"string\"},\"output.images[].caption\":{\"type\":\"string\"},\"output.images[].image_url\":{\"required\":true,\"type\":\"string\"},\"output.summary\":{\"required\":true,\"type\":\"string\"},\"output.text\":{\"type\":\"string\"},\"output.title\":{\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"started_at\":{\"type\":\"string\"},\"status\":{\"enum\":[\"queued\",\"in_progress\",\"completed\"],\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/check-runs/:check_run_id\"}},\"codesOfConduct\":{\"getConductCode\":{\"headers\":{\"accept\":\"application/vnd.github.scarlet-witch-preview+json\"},\"method\":\"GET\",\"params\":{\"key\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/codes_of_conduct/:key\"},\"getForRepo\":{\"headers\":{\"accept\":\"application/vnd.github.scarlet-witch-preview+json\"},\"method\":\"GET\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/community/code_of_conduct\"},\"listConductCodes\":{\"headers\":{\"accept\":\"application/vnd.github.scarlet-witch-preview+json\"},\"method\":\"GET\",\"params\":{},\"url\":\"/codes_of_conduct\"}},\"emojis\":{\"get\":{\"method\":\"GET\",\"params\":{},\"url\":\"/emojis\"}},\"enterprise\":{\"createOrg\":{\"method\":\"POST\",\"params\":{\"admin\":{\"required\":true,\"type\":\"string\"},\"login\":{\"required\":true,\"type\":\"string\"},\"profile_name\":{\"type\":\"string\"}},\"url\":\"/admin/organizations\"},\"createPreReceiveEnvironment\":{\"method\":\"POST\",\"params\":{\"image_url\":{\"required\":true,\"type\":\"string\"},\"name\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/admin/pre-receive-environments\"},\"createPreReceiveHook\":{\"method\":\"POST\",\"params\":{\"allow_downstream_configuration\":{\"type\":\"boolean\"},\"enforcement\":{\"type\":\"string\"},\"environment\":{\"required\":true,\"type\":\"object\"},\"name\":{\"required\":true,\"type\":\"string\"},\"script\":{\"required\":true,\"type\":\"string\"},\"script_repository\":{\"required\":true,\"type\":\"object\"}},\"url\":\"/admin/pre-receive-hooks\"},\"deletePreReceiveEnvironment\":{\"method\":\"DELETE\",\"params\":{\"id\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/admin/pre-receive-environments/:id\"},\"deletePreReceiveHook\":{\"method\":\"DELETE\",\"params\":{\"id\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/admin/pre_receive_hooks/:id\"},\"editPreReceiveEnvironment\":{\"method\":\"PATCH\",\"params\":{\"id\":{\"required\":true,\"type\":\"string\"},\"image_url\":{\"required\":true,\"type\":\"string\"},\"name\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/admin/pre-receive-environments/:id\"},\"editPreReceiveHook\":{\"method\":\"PATCH\",\"params\":{\"hook\":{\"mapTo\":\"data\",\"required\":true,\"type\":\"object\"},\"id\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/admin/pre_receive_hooks/:id\"},\"getLicense\":{\"method\":\"GET\",\"params\":{},\"url\":\"/enterprise/settings/license\"},\"getPreReceiveEnvironment\":{\"method\":\"GET\",\"params\":{\"id\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/admin/pre-receive-environments/:id\"},\"getPreReceiveEnvironmentDownloadStatus\":{\"method\":\"GET\",\"params\":{\"id\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/admin/pre-receive-environments/:id/downloads/latest\"},\"getPreReceiveEnvironments\":{\"method\":\"GET\",\"params\":{},\"url\":\"/admin/pre-receive-environments\"},\"getPreReceiveHook\":{\"method\":\"GET\",\"params\":{\"id\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/admin/pre-receive-hooks/:id\"},\"getPreReceiveHooks\":{\"method\":\"GET\",\"params\":{},\"url\":\"/admin/pre-receive-hooks\"},\"queueIndexingJob\":{\"method\":\"POST\",\"params\":{\"target\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/staff/indexing_jobs\"},\"stats\":{\"method\":\"GET\",\"params\":{\"type\":{\"enum\":[\"issues\",\"hooks\",\"milestones\",\"orgs\",\"comments\",\"pages\",\"users\",\"gists\",\"pulls\",\"repos\",\"all\"],\"required\":true,\"type\":\"string\"}},\"url\":\"/enterprise/stats/:type\"},\"syncLdapForTeam\":{\"method\":\"POST\",\"params\":{\"team_id\":{\"required\":true,\"type\":\"integer\"}},\"url\":\"/admin/ldap/teams/:team_id/sync\"},\"syncLdapForUser\":{\"method\":\"POST\",\"params\":{\"username\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/admin/ldap/users/:username/sync\"},\"triggerPreReceiveEnvironmentDownload\":{\"method\":\"POST\",\"params\":{\"id\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/admin/pre-receive-environments/:id/downloads\"},\"updateLdapForTeam\":{\"method\":\"PATCH\",\"params\":{\"ldap_dn\":{\"required\":true,\"type\":\"string\"},\"team_id\":{\"required\":true,\"type\":\"integer\"}},\"url\":\"/admin/ldap/teams/:team_id/mapping\"},\"updateLdapForUser\":{\"method\":\"PATCH\",\"params\":{\"ldap_dn\":{\"required\":true,\"type\":\"string\"},\"username\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/admin/ldap/users/:username/mapping\"}},\"gists\":{\"checkIsStarred\":{\"method\":\"GET\",\"params\":{\"gist_id\":{\"required\":true,\"type\":\"string\"},\"id\":{\"alias\":\"gist_id\",\"deprecated\":true}},\"url\":\"/gists/:gist_id/star\"},\"checkStar\":{\"alias\":\"gists.checkIsStarred\",\"deprecated\":\"`gists.checkStar()` is deprecated, use `gists.checkIsStarred()`\"},\"create\":{\"method\":\"POST\",\"params\":{\"description\":{\"type\":\"string\"},\"files\":{\"required\":true,\"type\":\"object\"},\"files.content\":{\"type\":\"string\"},\"public\":{\"type\":\"boolean\"}},\"url\":\"/gists\"},\"createComment\":{\"method\":\"POST\",\"params\":{\"body\":{\"required\":true,\"type\":\"string\"},\"gist_id\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/gists/:gist_id/comments\"},\"delete\":{\"method\":\"DELETE\",\"params\":{\"gist_id\":{\"required\":true,\"type\":\"string\"},\"id\":{\"alias\":\"gist_id\",\"deprecated\":true}},\"url\":\"/gists/:gist_id\"},\"deleteComment\":{\"method\":\"DELETE\",\"params\":{\"comment_id\":{\"required\":true,\"type\":\"integer\"},\"gist_id\":{\"required\":true,\"type\":\"string\"},\"id\":{\"alias\":\"comment_id\",\"deprecated\":true}},\"url\":\"/gists/:gist_id/comments/:comment_id\"},\"edit\":{\"alias\":\"gists.update\",\"deprecated\":\"`gists.edit()` is deprecated, use `gists.update()`\"},\"editComment\":{\"alias\":\"gists.updateComment\",\"deprecated\":\"`gists.editComment()` is deprecated, use `gists.updateComment()`\"},\"fork\":{\"method\":\"POST\",\"params\":{\"gist_id\":{\"required\":true,\"type\":\"string\"},\"id\":{\"alias\":\"gist_id\",\"deprecated\":true}},\"url\":\"/gists/:gist_id/forks\"},\"get\":{\"method\":\"GET\",\"params\":{\"gist_id\":{\"required\":true,\"type\":\"string\"},\"id\":{\"alias\":\"gist_id\",\"deprecated\":true}},\"url\":\"/gists/:gist_id\"},\"getAll\":{\"alias\":\"gists.list\",\"deprecated\":\"`gists.getAll()` is deprecated, use `gists.list()`\"},\"getComment\":{\"method\":\"GET\",\"params\":{\"comment_id\":{\"required\":true,\"type\":\"integer\"},\"gist_id\":{\"required\":true,\"type\":\"string\"},\"id\":{\"alias\":\"comment_id\",\"deprecated\":true}},\"url\":\"/gists/:gist_id/comments/:comment_id\"},\"getComments\":{\"alias\":\"gists.listComments\",\"deprecated\":\"`gists.getComments()` is deprecated, use `gists.listComments()`\"},\"getCommits\":{\"alias\":\"gists.listCommits\",\"deprecated\":\"`gists.getCommits()` is deprecated, use `gists.listCommits()`\"},\"getForUser\":{\"alias\":\"gists.listPublicForUser\",\"deprecated\":\"`gists.getForUser()` is deprecated, use `gists.listPublicForUser()`\"},\"getForks\":{\"alias\":\"gists.listForks\",\"deprecated\":\"`gists.getForks()` is deprecated, use `gists.listForks()`\"},\"getPublic\":{\"alias\":\"gists.listPublic\",\"deprecated\":\"`gists.getPublic()` is deprecated, use `gists.listPublic()`\"},\"getRevision\":{\"method\":\"GET\",\"params\":{\"gist_id\":{\"required\":true,\"type\":\"string\"},\"id\":{\"alias\":\"gist_id\",\"deprecated\":true},\"sha\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/gists/:gist_id/:sha\"},\"getStarred\":{\"alias\":\"gists.listStarred\",\"deprecated\":\"`gists.getStarred()` is deprecated, use `gists.listStarred()`\"},\"list\":{\"method\":\"GET\",\"params\":{\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"since\":{\"type\":\"string\"}},\"url\":\"/gists\"},\"listComments\":{\"method\":\"GET\",\"params\":{\"gist_id\":{\"required\":true,\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"}},\"url\":\"/gists/:gist_id/comments\"},\"listCommits\":{\"method\":\"GET\",\"params\":{\"gist_id\":{\"required\":true,\"type\":\"string\"},\"id\":{\"alias\":\"gist_id\",\"deprecated\":true},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"}},\"url\":\"/gists/:gist_id/commits\"},\"listForks\":{\"method\":\"GET\",\"params\":{\"gist_id\":{\"required\":true,\"type\":\"string\"},\"id\":{\"alias\":\"gist_id\",\"deprecated\":true},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"}},\"url\":\"/gists/:gist_id/forks\"},\"listPublic\":{\"method\":\"GET\",\"params\":{\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"since\":{\"type\":\"string\"}},\"url\":\"/gists/public\"},\"listPublicForUser\":{\"method\":\"GET\",\"params\":{\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"since\":{\"type\":\"string\"},\"username\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/users/:username/gists\"},\"listStarred\":{\"method\":\"GET\",\"params\":{\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"since\":{\"type\":\"string\"}},\"url\":\"/gists/starred\"},\"star\":{\"method\":\"PUT\",\"params\":{\"gist_id\":{\"required\":true,\"type\":\"string\"},\"id\":{\"alias\":\"gist_id\",\"deprecated\":true}},\"url\":\"/gists/:gist_id/star\"},\"unstar\":{\"method\":\"DELETE\",\"params\":{\"gist_id\":{\"required\":true,\"type\":\"string\"},\"id\":{\"alias\":\"gist_id\",\"deprecated\":true}},\"url\":\"/gists/:gist_id/star\"},\"update\":{\"method\":\"PATCH\",\"params\":{\"description\":{\"type\":\"string\"},\"files\":{\"type\":\"object\"},\"files.content\":{\"type\":\"string\"},\"files.filename\":{\"type\":\"string\"},\"gist_id\":{\"required\":true,\"type\":\"string\"},\"id\":{\"alias\":\"gist_id\",\"deprecated\":true}},\"url\":\"/gists/:gist_id\"},\"updateComment\":{\"method\":\"PATCH\",\"params\":{\"body\":{\"required\":true,\"type\":\"string\"},\"comment_id\":{\"required\":true,\"type\":\"integer\"},\"gist_id\":{\"required\":true,\"type\":\"string\"},\"id\":{\"alias\":\"comment_id\",\"deprecated\":true}},\"url\":\"/gists/:gist_id/comments/:comment_id\"}},\"gitdata\":{\"createBlob\":{\"method\":\"POST\",\"params\":{\"content\":{\"required\":true,\"type\":\"string\"},\"encoding\":{\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/git/blobs\"},\"createCommit\":{\"method\":\"POST\",\"params\":{\"author\":{\"type\":\"object\"},\"committer\":{\"type\":\"object\"},\"message\":{\"required\":true,\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"parents\":{\"required\":true,\"type\":\"string[]\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"tree\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/git/commits\"},\"createRef\":{\"method\":\"POST\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"ref\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"sha\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/git/refs\"},\"createReference\":{\"alias\":\"gitdata.createRef\",\"deprecated\":\"`gitdata.createReference()` is deprecated, use `gitdata.createRef()`\"},\"createTag\":{\"method\":\"POST\",\"params\":{\"message\":{\"required\":true,\"type\":\"string\"},\"object\":{\"required\":true,\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"tag\":{\"required\":true,\"type\":\"string\"},\"tagger\":{\"type\":\"object\"},\"tagger.date\":{\"type\":\"string\"},\"tagger.email\":{\"type\":\"string\"},\"tagger.name\":{\"type\":\"string\"},\"type\":{\"enum\":[\"commit\",\"tree\",\"blob\"],\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/git/tags\"},\"createTree\":{\"method\":\"POST\",\"params\":{\"base_tree\":{\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"tree\":{\"required\":true,\"type\":\"object[]\"},\"tree[].content\":{\"type\":\"string\"},\"tree[].mode\":{\"enum\":[\"100644\",\"100755\",\"040000\",\"160000\",\"120000\"],\"type\":\"string\"},\"tree[].path\":{\"type\":\"string\"},\"tree[].sha\":{\"type\":\"string\"},\"tree[].type\":{\"enum\":[\"blob\",\"tree\",\"commit\"],\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/git/trees\"},\"deleteRef\":{\"method\":\"DELETE\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"ref\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/git/refs/:ref\"},\"deleteReference\":{\"alias\":\"gitdata.deleteRef\",\"deprecated\":\"`gitdata.deleteReference()` is deprecated, use `gitdata.deleteRef()`\"},\"getBlob\":{\"method\":\"GET\",\"params\":{\"file_sha\":{\"required\":true,\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"sha\":{\"alias\":\"file_sha\",\"deprecated\":true}},\"url\":\"/repos/:owner/:repo/git/blobs/:file_sha\"},\"getCommit\":{\"method\":\"GET\",\"params\":{\"commit_sha\":{\"required\":true,\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"sha\":{\"alias\":\"commit_sha\",\"deprecated\":true}},\"url\":\"/repos/:owner/:repo/git/commits/:commit_sha\"},\"getCommitSignatureVerification\":{\"alias\":\"gitdata.getCommit\",\"deprecated\":\"`gitdata.getCommitSignatureVerification()` is deprecated, use `gitdata.getCommit()`\",\"params\":{}},\"getRef\":{\"method\":\"GET\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"ref\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/git/refs/:ref\"},\"getReference\":{\"alias\":\"gitdata.getRef\",\"deprecated\":\"`gitdata.getReference()` is deprecated, use `gitdata.getRef()`\"},\"getReferences\":{\"alias\":\"gitdata.listRefs\",\"deprecated\":\"`gitdata.getReferences()` is deprecated, use `gitdata.listRefs()`\"},\"getTag\":{\"method\":\"GET\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"sha\":{\"alias\":\"tag_sha\",\"deprecated\":true},\"tag_sha\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/git/tags/:tag_sha\"},\"getTagSignatureVerification\":{\"alias\":\"gitdata.getTag\",\"deprecated\":\"`gitdata.getTagSignatureVerification()` is deprecated, use `gitdata.getTag()`\",\"params\":{}},\"getTags\":{\"method\":\"GET\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/git/refs/tags\"},\"getTree\":{\"method\":\"GET\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"recursive\":{\"enum\":[1],\"type\":\"integer\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"sha\":{\"alias\":\"tree_sha\",\"deprecated\":true},\"tree_sha\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/git/trees/:tree_sha\"},\"listRefs\":{\"method\":\"GET\",\"params\":{\"namespace\":{\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/git/refs/:namespace\"},\"updateRef\":{\"method\":\"PATCH\",\"params\":{\"force\":{\"type\":\"boolean\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"ref\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"sha\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/git/refs/:ref\"},\"updateReference\":{\"alias\":\"gitdata.updateRef\",\"deprecated\":\"`gitdata.updateReference()` is deprecated, use `gitdata.updateRef()`\"}},\"gitignore\":{\"getTemplate\":{\"method\":\"GET\",\"params\":{\"name\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/gitignore/templates/:name\"},\"listTemplates\":{\"method\":\"GET\",\"params\":{},\"url\":\"/gitignore/templates\"}},\"integrations\":{\"addRepoToInstallation\":{\"alias\":\"apps.addRepoToInstallation\",\"deprecated\":\"`integrations.addRepoToInstallation()` is deprecated, use `apps.addRepoToInstallation()`\",\"params\":{}},\"createInstallationToken\":{\"alias\":\"apps.createInstallationToken\",\"deprecated\":\"`integrations.createInstallationToken()` is deprecated, use `apps.createInstallationToken()`\",\"params\":{}},\"getInstallationRepositories\":{\"alias\":\"apps.listRepos\",\"deprecated\":\"`integrations.getInstallationRepositories()` is deprecated, use `apps.listRepos()`\",\"params\":{}},\"getInstallations\":{\"alias\":\"apps.listInstallations\",\"deprecated\":\"`integrations.getInstallations()` is deprecated, use `apps.listInstallations()`\",\"params\":{}},\"removeRepoFromInstallation\":{\"alias\":\"apps.removeRepoFromInstallation\",\"deprecated\":\"`integrations.removeRepoFromInstallation()` is deprecated, use `apps.removeRepoFromInstallation()`\",\"params\":{}}},\"issues\":{\"addAssignees\":{\"method\":\"POST\",\"params\":{\"assignees\":{\"type\":\"string[]\"},\"number\":{\"required\":true,\"type\":\"integer\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/issues/:number/assignees\"},\"addAssigneesToIssue\":{\"alias\":\"issues.addAssignees\",\"deprecated\":\"`issues.addAssigneesToIssue()` is deprecated, use `issues.addAssignees()`\"},\"addLabels\":{\"method\":\"POST\",\"params\":{\"labels\":{\"required\":true,\"type\":\"string[]\",\"mapTo\":\"data\"},\"number\":{\"required\":true,\"type\":\"integer\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/issues/:number/labels\"},\"checkAssignee\":{\"method\":\"GET\",\"params\":{\"assignee\":{\"required\":true,\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/assignees/:assignee\"},\"create\":{\"headers\":{\"accept\":\"application/vnd.github.squirrel-girl-preview+json\"},\"method\":\"POST\",\"params\":{\"assignee\":{\"type\":\"string\"},\"assignees\":{\"type\":\"string[]\"},\"body\":{\"type\":\"string\"},\"labels\":{\"type\":\"string[]\"},\"milestone\":{\"type\":\"integer\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"title\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/issues\"},\"createComment\":{\"headers\":{\"accept\":\"application/vnd.github.squirrel-girl-preview+json\"},\"method\":\"POST\",\"params\":{\"body\":{\"required\":true,\"type\":\"string\"},\"number\":{\"required\":true,\"type\":\"integer\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/issues/:number/comments\"},\"createLabel\":{\"method\":\"POST\",\"params\":{\"color\":{\"required\":true,\"type\":\"string\"},\"description\":{\"type\":\"string\"},\"name\":{\"required\":true,\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/labels\"},\"createMilestone\":{\"method\":\"POST\",\"params\":{\"description\":{\"type\":\"string\"},\"due_on\":{\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"state\":{\"enum\":[\"open\",\"closed\"],\"type\":\"string\"},\"title\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/milestones\"},\"deleteComment\":{\"headers\":{\"accept\":\"application/vnd.github.squirrel-girl-preview+json\"},\"method\":\"DELETE\",\"params\":{\"comment_id\":{\"required\":true,\"type\":\"integer\"},\"id\":{\"alias\":\"comment_id\",\"deprecated\":true},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/issues/comments/:comment_id\"},\"deleteLabel\":{\"method\":\"DELETE\",\"params\":{\"name\":{\"required\":true,\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/labels/:name\"},\"deleteMilestone\":{\"method\":\"DELETE\",\"params\":{\"number\":{\"required\":true,\"type\":\"integer\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/milestones/:number\"},\"edit\":{\"alias\":\"issues.update\",\"deprecated\":\"`issues.edit()` is deprecated, use `issues.update()`\"},\"editComment\":{\"alias\":\"issues.updateComment\",\"deprecated\":\"`issues.editComment()` is deprecated, use `issues.updateComment()`\"},\"get\":{\"headers\":{\"accept\":\"application/vnd.github.squirrel-girl-preview+json\"},\"method\":\"GET\",\"params\":{\"number\":{\"required\":true,\"type\":\"integer\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/issues/:number\"},\"getAll\":{\"alias\":\"issues.list\",\"deprecated\":\"`issues.getAll()` is deprecated, use `issues.list()`\"},\"getAssignees\":{\"alias\":\"issues.listAssignees\",\"deprecated\":\"`issues.getAssignees()` is deprecated, use `issues.listAssignees()`\"},\"getComment\":{\"headers\":{\"accept\":\"application/vnd.github.squirrel-girl-preview+json\"},\"method\":\"GET\",\"params\":{\"comment_id\":{\"required\":true,\"type\":\"integer\"},\"id\":{\"alias\":\"comment_id\",\"deprecated\":true},\"owner\":{\"required\":true,\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/issues/comments/:comment_id\"},\"getComments\":{\"alias\":\"issues.listComments\",\"deprecated\":\"`issues.getComments()` is deprecated, use `issues.listComments()`\"},\"getCommentsForRepo\":{\"alias\":\"issues.listCommentsForRepo\",\"deprecated\":\"`issues.getCommentsForRepo()` is deprecated, use `issues.listCommentsForRepo()`\"},\"getEvent\":{\"method\":\"GET\",\"params\":{\"event_id\":{\"required\":true,\"type\":\"integer\"},\"id\":{\"alias\":\"event_id\",\"deprecated\":true},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/issues/events/:event_id\"},\"getEvents\":{\"alias\":\"issues.listEvents\",\"deprecated\":\"`issues.getEvents()` is deprecated, use `issues.listEvents()`\"},\"getEventsForRepo\":{\"alias\":\"issues.listEventsForRepo\",\"deprecated\":\"`issues.getEventsForRepo()` is deprecated, use `issues.listEventsForRepo()`\"},\"getEventsTimeline\":{\"alias\":\"issues.listEventsForTimeline\",\"deprecated\":\"`issues.getEventsTimeline()` is deprecated, use `issues.listEventsForTimeline()`\"},\"getForOrg\":{\"alias\":\"issues.listForOrg\",\"deprecated\":\"`issues.getForOrg()` is deprecated, use `issues.listForOrg()`\"},\"getForRepo\":{\"alias\":\"issues.listForRepo\",\"deprecated\":\"`issues.getForRepo()` is deprecated, use `issues.listForRepo()`\"},\"getForUser\":{\"alias\":\"issues.listForAuthenticatedUser\",\"deprecated\":\"`issues.getForUser()` is deprecated, use `issues.listForAuthenticatedUser()`\"},\"getIssueLabels\":{\"alias\":\"issues.listLabelsOnIssue\",\"deprecated\":\"`issues.getIssueLabels()` is deprecated, use `issues.listLabelsOnIssue()`\"},\"getLabel\":{\"method\":\"GET\",\"params\":{\"name\":{\"required\":true,\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/labels/:name\"},\"getLabels\":{\"alias\":\"issues.listLabelsForRepo\",\"deprecated\":\"`issues.getLabels()` is deprecated, use `issues.listLabelsForRepo()`\"},\"getMilestone\":{\"method\":\"GET\",\"params\":{\"number\":{\"required\":true,\"type\":\"integer\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/milestones/:number\"},\"getMilestoneLabels\":{\"alias\":\"issues.listLabelsForMilestone\",\"deprecated\":\"`issues.getMilestoneLabels()` is deprecated, use `issues.listLabelsForMilestone()`\"},\"getMilestones\":{\"alias\":\"issues.listMilestonesForRepo\",\"deprecated\":\"`issues.getMilestones()` is deprecated, use `issues.listMilestonesForRepo()`\"},\"list\":{\"headers\":{\"accept\":\"application/vnd.github.squirrel-girl-preview+json\"},\"method\":\"GET\",\"params\":{\"direction\":{\"enum\":[\"asc\",\"desc\"],\"type\":\"string\"},\"filter\":{\"enum\":[\"assigned\",\"created\",\"mentioned\",\"subscribed\",\"all\"],\"type\":\"string\"},\"labels\":{\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"since\":{\"type\":\"string\"},\"sort\":{\"enum\":[\"created\",\"updated\",\"comments\"],\"type\":\"string\"},\"state\":{\"enum\":[\"open\",\"closed\",\"all\"],\"type\":\"string\"}},\"url\":\"/issues\"},\"listAssignees\":{\"method\":\"GET\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/assignees\"},\"listComments\":{\"headers\":{\"accept\":\"application/vnd.github.squirrel-girl-preview+json\"},\"method\":\"GET\",\"params\":{\"number\":{\"required\":true,\"type\":\"integer\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"since\":{\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/issues/:number/comments\"},\"listCommentsForRepo\":{\"headers\":{\"accept\":\"application/vnd.github.squirrel-girl-preview+json\"},\"method\":\"GET\",\"params\":{\"direction\":{\"enum\":[\"asc\",\"desc\"],\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"since\":{\"type\":\"string\"},\"sort\":{\"enum\":[\"created\",\"updated\"],\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/issues/comments\"},\"listEvents\":{\"method\":\"GET\",\"params\":{\"issue_number\":{\"alias\":\"number\",\"deprecated\":true},\"number\":{\"required\":true,\"type\":\"integer\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/issues/:number/events\"},\"listEventsForRepo\":{\"method\":\"GET\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/issues/events\"},\"listEventsForTimeline\":{\"headers\":{\"accept\":\"application/vnd.github.mockingbird-preview+json\"},\"method\":\"GET\",\"params\":{\"issue_number\":{\"alias\":\"number\",\"deprecated\":true},\"number\":{\"required\":true,\"type\":\"integer\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/issues/:number/timeline\"},\"listForAuthenticatedUser\":{\"headers\":{\"accept\":\"application/vnd.github.squirrel-girl-preview+json\"},\"method\":\"GET\",\"params\":{\"direction\":{\"enum\":[\"asc\",\"desc\"],\"type\":\"string\"},\"filter\":{\"enum\":[\"assigned\",\"created\",\"mentioned\",\"subscribed\",\"all\"],\"type\":\"string\"},\"labels\":{\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"since\":{\"type\":\"string\"},\"sort\":{\"enum\":[\"created\",\"updated\",\"comments\"],\"type\":\"string\"},\"state\":{\"enum\":[\"open\",\"closed\",\"all\"],\"type\":\"string\"}},\"url\":\"/user/issues\"},\"listForOrg\":{\"headers\":{\"accept\":\"application/vnd.github.squirrel-girl-preview+json\"},\"method\":\"GET\",\"params\":{\"direction\":{\"enum\":[\"asc\",\"desc\"],\"type\":\"string\"},\"filter\":{\"enum\":[\"assigned\",\"created\",\"mentioned\",\"subscribed\",\"all\"],\"type\":\"string\"},\"labels\":{\"type\":\"string\"},\"org\":{\"required\":true,\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"since\":{\"type\":\"string\"},\"sort\":{\"enum\":[\"created\",\"updated\",\"comments\"],\"type\":\"string\"},\"state\":{\"enum\":[\"open\",\"closed\",\"all\"],\"type\":\"string\"}},\"url\":\"/orgs/:org/issues\"},\"listForRepo\":{\"headers\":{\"accept\":\"application/vnd.github.squirrel-girl-preview+json\"},\"method\":\"GET\",\"params\":{\"assignee\":{\"type\":\"string\"},\"creator\":{\"type\":\"string\"},\"direction\":{\"enum\":[\"asc\",\"desc\"],\"type\":\"string\"},\"labels\":{\"type\":\"string\"},\"mentioned\":{\"type\":\"string\"},\"milestone\":{\"type\":\"string\",\"validation\":\"^([0-9]+|none|\\\\*)$\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"since\":{\"type\":\"string\"},\"sort\":{\"enum\":[\"created\",\"updated\",\"comments\"],\"type\":\"string\"},\"state\":{\"enum\":[\"open\",\"closed\",\"all\"],\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/issues\"},\"listLabelsForMilestone\":{\"method\":\"GET\",\"params\":{\"number\":{\"required\":true,\"type\":\"integer\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/milestones/:number/labels\"},\"listLabelsForRepo\":{\"method\":\"GET\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/labels\"},\"listLabelsOnIssue\":{\"method\":\"GET\",\"params\":{\"number\":{\"required\":true,\"type\":\"integer\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/issues/:number/labels\"},\"listMilestonesForRepo\":{\"method\":\"GET\",\"params\":{\"direction\":{\"enum\":[\"asc\",\"desc\"],\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"sort\":{\"enum\":[\"due_on\",\"completeness\"],\"type\":\"string\"},\"state\":{\"enum\":[\"open\",\"closed\",\"all\"],\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/milestones\"},\"lock\":{\"method\":\"PUT\",\"params\":{\"lock_reason\":{\"enum\":[\"off-topic\",\"too heated\",\"resolved\",\"spam\"],\"type\":\"string\"},\"number\":{\"required\":true,\"type\":\"integer\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/issues/:number/lock\"},\"removeAllLabels\":{\"alias\":\"issues.removeLabels\",\"deprecated\":\"`issues.removeAllLabels()` is deprecated, use `issues.removeLabels()`\"},\"removeAssignees\":{\"method\":\"DELETE\",\"params\":{\"assignees\":{\"type\":\"string[]\"},\"number\":{\"required\":true,\"type\":\"integer\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/issues/:number/assignees\"},\"removeAssigneesFromIssue\":{\"alias\":\"issues.removeAssignees\",\"deprecated\":\"`issues.removeAssigneesFromIssue()` is deprecated, use `issues.removeAssignees()`\"},\"removeLabel\":{\"method\":\"DELETE\",\"params\":{\"name\":{\"required\":true,\"type\":\"string\"},\"number\":{\"required\":true,\"type\":\"integer\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/issues/:number/labels/:name\"},\"removeLabels\":{\"method\":\"DELETE\",\"params\":{\"number\":{\"required\":true,\"type\":\"integer\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/issues/:number/labels\"},\"replaceAllLabels\":{\"alias\":\"issues.replaceLabels\",\"deprecated\":\"`issues.replaceAllLabels()` is deprecated, use `issues.replaceLabels()`\"},\"replaceLabels\":{\"method\":\"PUT\",\"params\":{\"labels\":{\"type\":\"string[]\"},\"number\":{\"required\":true,\"type\":\"integer\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/issues/:number/labels\"},\"unlock\":{\"method\":\"DELETE\",\"params\":{\"number\":{\"required\":true,\"type\":\"integer\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/issues/:number/lock\"},\"update\":{\"headers\":{\"accept\":\"application/vnd.github.squirrel-girl-preview+json\"},\"method\":\"PATCH\",\"params\":{\"assignee\":{\"type\":\"string\"},\"assignees\":{\"type\":\"string[]\"},\"body\":{\"type\":\"string\"},\"labels\":{\"type\":\"string[]\"},\"milestone\":{\"allowNull\":true,\"type\":\"integer\"},\"number\":{\"required\":true,\"type\":\"integer\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"state\":{\"enum\":[\"open\",\"closed\"],\"type\":\"string\"},\"title\":{\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/issues/:number\"},\"updateComment\":{\"headers\":{\"accept\":\"application/vnd.github.squirrel-girl-preview+json\"},\"method\":\"PATCH\",\"params\":{\"body\":{\"required\":true,\"type\":\"string\"},\"comment_id\":{\"required\":true,\"type\":\"integer\"},\"id\":{\"alias\":\"comment_id\",\"deprecated\":true},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/issues/comments/:comment_id\"},\"updateLabel\":{\"method\":\"PATCH\",\"params\":{\"color\":{\"type\":\"string\"},\"current_name\":{\"required\":true,\"type\":\"string\"},\"description\":{\"type\":\"string\"},\"name\":{\"type\":\"string\"},\"oldname\":{\"alias\":\"current_name\",\"deprecated\":true},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/labels/:current_name\"},\"updateMilestone\":{\"method\":\"PATCH\",\"params\":{\"description\":{\"type\":\"string\"},\"due_on\":{\"type\":\"string\"},\"number\":{\"required\":true,\"type\":\"integer\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"state\":{\"enum\":[\"open\",\"closed\"],\"type\":\"string\"},\"title\":{\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/milestones/:number\"}},\"licenses\":{\"get\":{\"method\":\"GET\",\"params\":{\"license\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/licenses/:license\"},\"getForRepo\":{\"method\":\"GET\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/license\"},\"list\":{\"method\":\"GET\",\"params\":{},\"url\":\"/licenses\"}},\"markdown\":{\"render\":{\"method\":\"POST\",\"params\":{\"context\":{\"type\":\"string\"},\"mode\":{\"enum\":[\"markdown\",\"gfm\"],\"type\":\"string\"},\"text\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/markdown\"},\"renderRaw\":{\"headers\":{\"content-type\":\"text/plain; charset=utf-8\"},\"method\":\"POST\",\"params\":{\"data\":{\"mapTo\":\"data\",\"required\":true,\"type\":\"string\"}},\"url\":\"/markdown/raw\"}},\"meta\":{\"get\":{\"method\":\"GET\",\"params\":{},\"url\":\"/meta\"}},\"migrations\":{\"cancelImport\":{\"headers\":{\"accept\":\"application/vnd.github.barred-rock-preview+json\"},\"method\":\"DELETE\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/import\"},\"deleteArchiveForAuthenticatedUser\":{\"headers\":{\"accept\":\"application/vnd.github.wyandotte-preview+json\"},\"method\":\"DELETE\",\"params\":{\"migration_id\":{\"required\":true,\"type\":\"integer\"}},\"url\":\"/user/migrations/:migration_id/archive\"},\"deleteArchiveForOrg\":{\"headers\":{\"accept\":\"application/vnd.github.wyandotte-preview+json\"},\"method\":\"DELETE\",\"params\":{\"id\":{\"alias\":\"migration_id\",\"deprecated\":true},\"migration_id\":{\"required\":true,\"type\":\"integer\"},\"org\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/orgs/:org/migrations/:migration_id/archive\"},\"deleteMigrationArchive\":{\"alias\":\"migrations.deleteArchiveForOrg\",\"deprecated\":\"`migrations.deleteMigrationArchive()` is deprecated, use `migrations.deleteArchiveForOrg()`\"},\"getArchiveForAuthenticatedUser\":{\"headers\":{\"accept\":\"application/vnd.github.wyandotte-preview+json\"},\"method\":\"GET\",\"params\":{\"migration_id\":{\"required\":true,\"type\":\"integer\"}},\"url\":\"/user/migrations/:migration_id/archive\"},\"getArchiveForOrg\":{\"headers\":{\"accept\":\"application/vnd.github.wyandotte-preview+json\"},\"method\":\"GET\",\"params\":{\"id\":{\"alias\":\"migration_id\",\"deprecated\":true},\"migration_id\":{\"required\":true,\"type\":\"integer\"},\"org\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/orgs/:org/migrations/:migration_id/archive\"},\"getCommitAuthors\":{\"headers\":{\"accept\":\"application/vnd.github.barred-rock-preview+json\"},\"method\":\"GET\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"since\":{\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/import/authors\"},\"getImportCommitAuthors\":{\"alias\":\"migrations.getCommitAuthors\",\"deprecated\":\"`migrations.getImportCommitAuthors()` is deprecated, use `migrations.getCommitAuthors()`\"},\"getImportProgress\":{\"headers\":{\"accept\":\"application/vnd.github.barred-rock-preview+json\"},\"method\":\"GET\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/import\"},\"getLargeFiles\":{\"headers\":{\"accept\":\"application/vnd.github.barred-rock-preview+json\"},\"method\":\"GET\",\"params\":{\"name\":{\"alias\":\"repo\",\"deprecated\":true},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/import/large_files\"},\"getLargeImportFiles\":{\"alias\":\"migrations.getLargeFiles\",\"deprecated\":\"`migrations.getLargeImportFiles()` is deprecated, use `migrations.getLargeFiles()`\"},\"getMigrationArchiveLink\":{\"alias\":\"migrations.getArchiveForOrg\",\"deprecated\":\"`migrations.getMigrationArchiveLink()` is deprecated, use `migrations.getArchiveForOrg()`\"},\"getMigrationStatus\":{\"alias\":\"migrations.getStatusForOrg\",\"deprecated\":\"`migrations.getMigrationStatus()` is deprecated, use `migrations.getStatusForOrg()`\"},\"getMigrations\":{\"alias\":\"migrations.listForOrg\",\"deprecated\":\"`migrations.getMigrations()` is deprecated, use `migrations.listForOrg()`\"},\"getStatusForAuthenticatedUser\":{\"headers\":{\"accept\":\"application/vnd.github.wyandotte-preview+json\"},\"method\":\"GET\",\"params\":{\"migration_id\":{\"required\":true,\"type\":\"integer\"}},\"url\":\"/user/migrations/:migration_id\"},\"getStatusForOrg\":{\"headers\":{\"accept\":\"application/vnd.github.wyandotte-preview+json\"},\"method\":\"GET\",\"params\":{\"id\":{\"alias\":\"migration_id\",\"deprecated\":true},\"migration_id\":{\"required\":true,\"type\":\"integer\"},\"org\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/orgs/:org/migrations/:migration_id\"},\"listForAuthenticatedUser\":{\"headers\":{\"accept\":\"application/vnd.github.wyandotte-preview+json\"},\"method\":\"GET\",\"params\":{\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"}},\"url\":\"/user/migrations\"},\"listForOrg\":{\"headers\":{\"accept\":\"application/vnd.github.wyandotte-preview+json\"},\"method\":\"GET\",\"params\":{\"org\":{\"required\":true,\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"}},\"url\":\"/orgs/:org/migrations\"},\"mapCommitAuthor\":{\"headers\":{\"accept\":\"application/vnd.github.barred-rock-preview+json\"},\"method\":\"PATCH\",\"params\":{\"author_id\":{\"required\":true,\"type\":\"integer\"},\"email\":{\"type\":\"string\"},\"name\":{\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/import/authors/:author_id\"},\"mapImportCommitAuthor\":{\"alias\":\"migrations.mapCommitAuthor\",\"deprecated\":\"`migrations.mapImportCommitAuthor()` is deprecated, use `migrations.mapCommitAuthor()`\"},\"setImportLfsPreference\":{\"alias\":\"migrations.setLfsPreference\",\"deprecated\":\"`migrations.setImportLfsPreference()` is deprecated, use `migrations.setLfsPreference()`\"},\"setLfsPreference\":{\"headers\":{\"accept\":\"application/vnd.github.barred-rock-preview+json\"},\"method\":\"PATCH\",\"params\":{\"name\":{\"alias\":\"repo\",\"deprecated\":true},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"use_lfs\":{\"enum\":[\"opt_in\",\"opt_out\"],\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/import/lfs\"},\"startForAuthenticatedUser\":{\"headers\":{\"accept\":\"application/vnd.github.wyandotte-preview+json\"},\"method\":\"POST\",\"params\":{\"exclude_attachments\":{\"type\":\"boolean\"},\"lock_repositories\":{\"type\":\"boolean\"},\"repositories\":{\"required\":true,\"type\":\"string[]\"}},\"url\":\"/user/migrations\"},\"startForOrg\":{\"headers\":{\"accept\":\"application/vnd.github.wyandotte-preview+json\"},\"method\":\"POST\",\"params\":{\"exclude_attachments\":{\"type\":\"boolean\"},\"lock_repositories\":{\"type\":\"boolean\"},\"org\":{\"required\":true,\"type\":\"string\"},\"repositories\":{\"required\":true,\"type\":\"string[]\"}},\"url\":\"/orgs/:org/migrations\"},\"startImport\":{\"headers\":{\"accept\":\"application/vnd.github.barred-rock-preview+json\"},\"method\":\"PUT\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"tfvc_project\":{\"type\":\"string\"},\"vcs\":{\"enum\":[\"subversion\",\"git\",\"mercurial\",\"tfvc\"],\"type\":\"string\"},\"vcs_password\":{\"type\":\"string\"},\"vcs_url\":{\"required\":true,\"type\":\"string\"},\"vcs_username\":{\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/import\"},\"startMigration\":{\"alias\":\"migrations.startForOrg\",\"deprecated\":\"`migrations.startMigration()` is deprecated, use `migrations.startForOrg()`\"},\"unlockRepoForAuthenticatedUser\":{\"headers\":{\"accept\":\"application/vnd.github.wyandotte-preview+json\"},\"method\":\"DELETE\",\"params\":{\"migration_id\":{\"required\":true,\"type\":\"integer\"},\"repo_name\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/user/migrations/:migration_id/repos/:repo_name/lock\"},\"unlockRepoForOrg\":{\"headers\":{\"accept\":\"application/vnd.github.wyandotte-preview+json\"},\"method\":\"DELETE\",\"params\":{\"id\":{\"alias\":\"migration_id\",\"deprecated\":true},\"migration_id\":{\"required\":true,\"type\":\"integer\"},\"org\":{\"required\":true,\"type\":\"string\"},\"repo_name\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/orgs/:org/migrations/:migration_id/repos/:repo_name/lock\"},\"unlockRepoLockedForMigration\":{\"alias\":\"migrations.unlockRepoForOrg\",\"deprecated\":\"`migrations.unlockRepoLockedForMigration()` is deprecated, use `migrations.unlockRepoForOrg()`\"},\"updateImport\":{\"headers\":{\"accept\":\"application/vnd.github.barred-rock-preview+json\"},\"method\":\"PATCH\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"vcs_password\":{\"type\":\"string\"},\"vcs_username\":{\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/import\"}},\"misc\":{\"getCodeOfConduct\":{\"alias\":\"codesOfConduct.getConductCode\",\"deprecated\":\"`misc.getCodeOfConduct()` is deprecated, use `codesOfConduct.getConductCode()`\"},\"getCodesOfConduct\":{\"alias\":\"codesOfConduct.listConductCodes\",\"deprecated\":\"`misc.getCodesOfConduct()` is deprecated, use `codesOfConduct.listConductCodes()`\"},\"getEmojis\":{\"alias\":\"emojis.get\",\"deprecated\":\"`misc.getEmojis()` is deprecated, use `emojis.get()`\",\"params\":{}},\"getGitignoreTemplate\":{\"alias\":\"gitignore.getTemplate\",\"deprecated\":\"`misc.getGitignoreTemplate()` is deprecated, use `gitignore.getTemplate()`\"},\"getGitignoreTemplates\":{\"alias\":\"gitignore.listTemplates\",\"deprecated\":\"`misc.getGitignoreTemplates()` is deprecated, use `gitignore.listTemplates()`\"},\"getLicense\":{\"alias\":\"licenses.get\",\"deprecated\":\"`misc.getLicense()` is deprecated, use `licenses.get()`\"},\"getLicenses\":{\"alias\":\"licenses.list\",\"deprecated\":\"`misc.getLicenses()` is deprecated, use `licenses.list()`\"},\"getMeta\":{\"alias\":\"meta.get\",\"deprecated\":\"`misc.getMeta()` is deprecated, use `meta.get()`\",\"params\":{}},\"getRateLimit\":{\"alias\":\"rateLimit.get\",\"deprecated\":\"`misc.getRateLimit()` is deprecated, use `rateLimit.get()`\"},\"getRepoCodeOfConduct\":{\"alias\":\"codesOfConduct.getForRepo\",\"deprecated\":\"`misc.getRepoCodeOfConduct()` is deprecated, use `codesOfConduct.getForRepo()`\"},\"getRepoLicense\":{\"alias\":\"licenses.getForRepo\",\"deprecated\":\"`misc.getRepoLicense()` is deprecated, use `licenses.getForRepo()`\"},\"renderMarkdown\":{\"alias\":\"markdown.render\",\"deprecated\":\"`misc.renderMarkdown()` is deprecated, use `markdown.render()`\"},\"renderMarkdownRaw\":{\"alias\":\"markdown.renderRaw\",\"deprecated\":\"`misc.renderMarkdownRaw()` is deprecated, use `markdown.renderRaw()`\"}},\"orgs\":{\"addOrUpdateMembership\":{\"method\":\"PUT\",\"params\":{\"org\":{\"required\":true,\"type\":\"string\"},\"role\":{\"enum\":[\"admin\",\"member\"],\"type\":\"string\"},\"username\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/orgs/:org/memberships/:username\"},\"addOrgMembership\":{\"alias\":\"orgs.addOrUpdateMembership\",\"deprecated\":\"`orgs.addOrgMembership()` is deprecated, use `orgs.addOrUpdateMembership()`\"},\"addTeamMembership\":{\"alias\":\"teams.addOrUpdateMembership\",\"deprecated\":\"`orgs.addTeamMembership()` is deprecated, use `teams.addOrUpdateMembership()`\"},\"addTeamRepo\":{\"alias\":\"teams.addOrUpdateRepo\",\"deprecated\":\"`orgs.addTeamRepo()` is deprecated, use `teams.addOrUpdateRepo()`\"},\"blockUser\":{\"headers\":{\"accept\":\"application/vnd.github.giant-sentry-fist-preview+json\"},\"method\":\"PUT\",\"params\":{\"org\":{\"required\":true,\"type\":\"string\"},\"username\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/orgs/:org/blocks/:username\"},\"checkBlockedUser\":{\"headers\":{\"accept\":\"application/vnd.github.giant-sentry-fist-preview+json\"},\"method\":\"GET\",\"params\":{\"org\":{\"required\":true,\"type\":\"string\"},\"username\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/orgs/:org/blocks/:username\"},\"checkMembership\":{\"method\":\"GET\",\"params\":{\"org\":{\"required\":true,\"type\":\"string\"},\"username\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/orgs/:org/members/:username\"},\"checkPublicMembership\":{\"method\":\"GET\",\"params\":{\"org\":{\"required\":true,\"type\":\"string\"},\"username\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/orgs/:org/public_members/:username\"},\"checkTeamRepo\":{\"alias\":\"teams.checkManagesRepo\",\"deprecated\":\"`orgs.checkTeamRepo()` is deprecated, use `teams.checkManagesRepo()`\"},\"concealMembership\":{\"method\":\"DELETE\",\"params\":{\"org\":{\"required\":true,\"type\":\"string\"},\"username\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/orgs/:org/public_members/:username\"},\"convertMemberToOutsideCollaborator\":{\"method\":\"PUT\",\"params\":{\"org\":{\"required\":true,\"type\":\"string\"},\"username\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/orgs/:org/outside_collaborators/:username\"},\"createHook\":{\"method\":\"POST\",\"params\":{\"active\":{\"type\":\"boolean\"},\"config\":{\"required\":true,\"type\":\"object\"},\"config.content_type\":{\"type\":\"string\"},\"config.insecure_ssl\":{\"type\":\"string\"},\"config.secret\":{\"type\":\"string\"},\"config.url\":{\"required\":true,\"type\":\"string\"},\"events\":{\"type\":\"string[]\"},\"name\":{\"required\":true,\"type\":\"string\"},\"org\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/orgs/:org/hooks\"},\"createInvitation\":{\"headers\":{\"accept\":\"application/vnd.github.dazzler-preview+json\"},\"method\":\"POST\",\"params\":{\"email\":{\"type\":\"string\"},\"invitee_id\":{\"type\":\"integer\"},\"org\":{\"required\":true,\"type\":\"string\"},\"role\":{\"enum\":[\"admin\",\"direct_member\",\"billing_manager\"],\"type\":\"string\"},\"team_ids\":{\"type\":\"integer[]\"}},\"url\":\"/orgs/:org/invitations\"},\"createTeam\":{\"alias\":\"teams.create\",\"deprecated\":\"`orgs.createTeam()` is deprecated, use `teams.create()`\"},\"deleteHook\":{\"method\":\"DELETE\",\"params\":{\"hook_id\":{\"required\":true,\"type\":\"integer\"},\"id\":{\"alias\":\"hook_id\",\"deprecated\":true},\"org\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/orgs/:org/hooks/:hook_id\"},\"deleteTeam\":{\"alias\":\"teams.delete\",\"deprecated\":\"`orgs.deleteTeam()` is deprecated, use `teams.delete()`\"},\"deleteTeamRepo\":{\"alias\":\"teams.removeRepo\",\"deprecated\":\"`orgs.deleteTeamRepo()` is deprecated, use `teams.removeRepo()`\"},\"editHook\":{\"alias\":\"orgs.updateHook\",\"deprecated\":\"`orgs.editHook()` is deprecated, use `orgs.updateHook()`\"},\"editTeam\":{\"alias\":\"teams.update\",\"deprecated\":\"`orgs.editTeam()` is deprecated, use `teams.update()`\"},\"get\":{\"method\":\"GET\",\"params\":{\"org\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/orgs/:org\"},\"getAll\":{\"alias\":\"orgs.list\",\"deprecated\":\"`orgs.getAll()` is deprecated, use `orgs.list()`\"},\"getBlockedUsers\":{\"alias\":\"orgs.listBlockedUsers\",\"deprecated\":\"`orgs.getBlockedUsers()` is deprecated, use `orgs.listBlockedUsers()`\"},\"getChildTeams\":{\"alias\":\"teams.listChild\",\"deprecated\":\"`orgs.getChildTeams()` is deprecated, use `teams.listChild()`\"},\"getForUser\":{\"alias\":\"orgs.listForUser\",\"deprecated\":\"`orgs.getForUser()` is deprecated, use `orgs.listForUser()`\"},\"getHook\":{\"method\":\"GET\",\"params\":{\"hook_id\":{\"required\":true,\"type\":\"integer\"},\"id\":{\"alias\":\"hook_id\",\"deprecated\":true},\"org\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/orgs/:org/hooks/:hook_id\"},\"getHooks\":{\"alias\":\"orgs.listHooks\",\"deprecated\":\"`orgs.getHooks()` is deprecated, use `orgs.listHooks()`\"},\"getInvitationTeams\":{\"alias\":\"orgs.listInvitationTeams\",\"deprecated\":\"`orgs.getInvitationTeams()` is deprecated, use `orgs.listInvitationTeams()`\"},\"getMembers\":{\"alias\":\"orgs.listMembers\",\"deprecated\":\"`orgs.getMembers()` is deprecated, use `orgs.listMembers()`\"},\"getMembership\":{\"method\":\"GET\",\"params\":{\"org\":{\"required\":true,\"type\":\"string\"},\"username\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/orgs/:org/memberships/:username\"},\"getMembershipForAuthenticatedUser\":{\"method\":\"GET\",\"params\":{\"org\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/user/memberships/orgs/:org\"},\"getOrgMembership\":{\"alias\":\"orgs.getMembership\",\"deprecated\":\"`orgs.getOrgMembership()` is deprecated, use `orgs.getMembership()`\"},\"getOutsideCollaborators\":{\"alias\":\"orgs.listOutsideCollaborators\",\"deprecated\":\"`orgs.getOutsideCollaborators()` is deprecated, use `orgs.listOutsideCollaborators()`\"},\"getPendingOrgInvites\":{\"alias\":\"orgs.listPendingInvitations\",\"deprecated\":\"`orgs.getPendingOrgInvites()` is deprecated, use `orgs.listPendingInvitations()`\"},\"getPendingTeamInvites\":{\"alias\":\"teams.listPendingInvitations\",\"deprecated\":\"`orgs.getPendingTeamInvites()` is deprecated, use `teams.listPendingInvitations()`\"},\"getPublicMembers\":{\"alias\":\"orgs.listPublicMembers\",\"deprecated\":\"`orgs.getPublicMembers()` is deprecated, use `orgs.listPublicMembers()`\"},\"getTeam\":{\"alias\":\"teams.get\",\"deprecated\":\"`orgs.getTeam()` is deprecated, use `teams.get()`\"},\"getTeamMembers\":{\"alias\":\"teams.listMembers\",\"deprecated\":\"`orgs.getTeamMembers()` is deprecated, use `teams.listMembers()`\"},\"getTeamMembership\":{\"alias\":\"teams.getMembership\",\"deprecated\":\"`orgs.getTeamMembership()` is deprecated, use `teams.getMembership()`\"},\"getTeamRepos\":{\"alias\":\"teams.listRepos\",\"deprecated\":\"`orgs.getTeamRepos()` is deprecated, use `teams.listRepos()`\"},\"getTeams\":{\"alias\":\"teams.list\",\"deprecated\":\"`orgs.getTeams()` is deprecated, use `teams.list()`\"},\"list\":{\"method\":\"GET\",\"params\":{\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"since\":{\"type\":\"string\"}},\"url\":\"/organizations\"},\"listBlockedUsers\":{\"headers\":{\"accept\":\"application/vnd.github.giant-sentry-fist-preview+json\"},\"method\":\"GET\",\"params\":{\"org\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/orgs/:org/blocks\"},\"listForAuthenticatedUser\":{\"method\":\"GET\",\"params\":{\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"}},\"url\":\"/user/orgs\"},\"listForUser\":{\"method\":\"GET\",\"params\":{\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"username\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/users/:username/orgs\"},\"listHooks\":{\"method\":\"GET\",\"params\":{\"org\":{\"required\":true,\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"}},\"url\":\"/orgs/:org/hooks\"},\"listInvitationTeams\":{\"method\":\"GET\",\"params\":{\"invitation_id\":{\"required\":true,\"type\":\"integer\"},\"org\":{\"required\":true,\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"}},\"url\":\"/orgs/:org/invitations/:invitation_id/teams\"},\"listMembers\":{\"method\":\"GET\",\"params\":{\"filter\":{\"enum\":[\"2fa_disabled\",\"all\"],\"type\":\"string\"},\"org\":{\"required\":true,\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"role\":{\"enum\":[\"all\",\"admin\",\"member\"],\"type\":\"string\"}},\"url\":\"/orgs/:org/members\"},\"listMemberships\":{\"method\":\"GET\",\"params\":{\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"state\":{\"enum\":[\"active\",\"pending\"],\"type\":\"string\"}},\"url\":\"/user/memberships/orgs\"},\"listOutsideCollaborators\":{\"method\":\"GET\",\"params\":{\"filter\":{\"enum\":[\"2fa_disabled\",\"all\"],\"type\":\"string\"},\"org\":{\"required\":true,\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"}},\"url\":\"/orgs/:org/outside_collaborators\"},\"listPendingInvitations\":{\"method\":\"GET\",\"params\":{\"org\":{\"required\":true,\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"}},\"url\":\"/orgs/:org/invitations\"},\"listPublicMembers\":{\"method\":\"GET\",\"params\":{\"org\":{\"required\":true,\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"}},\"url\":\"/orgs/:org/public_members\"},\"pingHook\":{\"method\":\"POST\",\"params\":{\"hook_id\":{\"required\":true,\"type\":\"integer\"},\"id\":{\"alias\":\"hook_id\",\"deprecated\":true},\"org\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/orgs/:org/hooks/:hook_id/pings\"},\"publicizeMembership\":{\"method\":\"PUT\",\"params\":{\"org\":{\"required\":true,\"type\":\"string\"},\"username\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/orgs/:org/public_members/:username\"},\"removeMember\":{\"method\":\"DELETE\",\"params\":{\"org\":{\"required\":true,\"type\":\"string\"},\"username\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/orgs/:org/members/:username\"},\"removeMembership\":{\"method\":\"DELETE\",\"params\":{\"org\":{\"required\":true,\"type\":\"string\"},\"username\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/orgs/:org/memberships/:username\"},\"removeOrgMembership\":{\"alias\":\"orgs.removeMembership\",\"deprecated\":\"`orgs.removeOrgMembership()` is deprecated, use `orgs.removeMembership()`\"},\"removeOutsideCollaborator\":{\"method\":\"DELETE\",\"params\":{\"org\":{\"required\":true,\"type\":\"string\"},\"username\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/orgs/:org/outside_collaborators/:username\"},\"removeTeamMembership\":{\"alias\":\"teams.removeMembership\",\"deprecated\":\"`orgs.removeTeamMembership()` is deprecated, use `teams.removeMembership()`\"},\"unblockUser\":{\"headers\":{\"accept\":\"application/vnd.github.giant-sentry-fist-preview+json\"},\"method\":\"DELETE\",\"params\":{\"org\":{\"required\":true,\"type\":\"string\"},\"username\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/orgs/:org/blocks/:username\"},\"update\":{\"method\":\"PATCH\",\"params\":{\"billing_email\":{\"type\":\"string\"},\"company\":{\"type\":\"string\"},\"default_repository_permission\":{\"enum\":[\"read\",\"write\",\"admin\",\"none\"],\"type\":\"string\"},\"description\":{\"type\":\"string\"},\"email\":{\"type\":\"string\"},\"has_organization_projects\":{\"type\":\"boolean\"},\"has_repository_projects\":{\"type\":\"boolean\"},\"location\":{\"type\":\"string\"},\"members_can_create_repositories\":{\"type\":\"boolean\"},\"name\":{\"type\":\"string\"},\"org\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/orgs/:org\"},\"updateHook\":{\"method\":\"PATCH\",\"params\":{\"active\":{\"type\":\"boolean\"},\"config\":{\"type\":\"object\"},\"config.content_type\":{\"type\":\"string\"},\"config.insecure_ssl\":{\"type\":\"string\"},\"config.secret\":{\"type\":\"string\"},\"config.url\":{\"required\":true,\"type\":\"string\"},\"events\":{\"type\":\"string[]\"},\"hook_id\":{\"required\":true,\"type\":\"integer\"},\"id\":{\"alias\":\"hook_id\",\"deprecated\":true},\"org\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/orgs/:org/hooks/:hook_id\"},\"updateMembership\":{\"method\":\"PATCH\",\"params\":{\"org\":{\"required\":true,\"type\":\"string\"},\"state\":{\"enum\":[\"active\"],\"required\":true,\"type\":\"string\"}},\"url\":\"/user/memberships/orgs/:org\"}},\"projects\":{\"addCollaborator\":{\"headers\":{\"accept\":\"application/vnd.github.inertia-preview+json\"},\"method\":\"PUT\",\"params\":{\"id\":{\"alias\":\"project_id\",\"deprecated\":true},\"permission\":{\"enum\":[\"read\",\"write\",\"admin\"],\"type\":\"string\"},\"project_id\":{\"required\":true,\"type\":\"integer\"},\"username\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/projects/:project_id/collaborators/:username\"},\"createCard\":{\"headers\":{\"accept\":\"application/vnd.github.inertia-preview+json\"},\"method\":\"POST\",\"params\":{\"column_id\":{\"required\":true,\"type\":\"integer\"},\"content_id\":{\"type\":\"integer\"},\"content_type\":{\"type\":\"string\"},\"note\":{\"type\":\"string\"}},\"url\":\"/projects/columns/:column_id/cards\"},\"createColumn\":{\"headers\":{\"accept\":\"application/vnd.github.inertia-preview+json\"},\"method\":\"POST\",\"params\":{\"id\":{\"alias\":\"project_id\",\"deprecated\":true},\"name\":{\"required\":true,\"type\":\"string\"},\"project_id\":{\"required\":true,\"type\":\"integer\"}},\"url\":\"/projects/:project_id/columns\"},\"createForOrg\":{\"headers\":{\"accept\":\"application/vnd.github.inertia-preview+json\"},\"method\":\"POST\",\"params\":{\"body\":{\"type\":\"string\"},\"name\":{\"required\":true,\"type\":\"string\"},\"org\":{\"required\":true,\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"}},\"url\":\"/orgs/:org/projects\"},\"createForRepo\":{\"headers\":{\"accept\":\"application/vnd.github.inertia-preview+json\"},\"method\":\"POST\",\"params\":{\"body\":{\"type\":\"string\"},\"name\":{\"required\":true,\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/projects\"},\"createOrgProject\":{\"alias\":\"projects.createForOrg\",\"deprecated\":\"`projects.createOrgProject()` is deprecated, use `projects.createForOrg()`\"},\"createProjectCard\":{\"alias\":\"projects.createCard\",\"deprecated\":\"`projects.createProjectCard()` is deprecated, use `projects.createCard()`\"},\"createProjectColumn\":{\"alias\":\"projects.createColumn\",\"deprecated\":\"`projects.createProjectColumn()` is deprecated, use `projects.createColumn()`\"},\"createRepoProject\":{\"alias\":\"projects.createForRepo\",\"deprecated\":\"`projects.createRepoProject()` is deprecated, use `projects.createForRepo()`\"},\"delete\":{\"headers\":{\"accept\":\"application/vnd.github.inertia-preview+json\"},\"method\":\"DELETE\",\"params\":{\"id\":{\"alias\":\"project_id\",\"deprecated\":true},\"project_id\":{\"required\":true,\"type\":\"integer\"}},\"url\":\"/projects/:project_id\"},\"deleteCard\":{\"headers\":{\"accept\":\"application/vnd.github.inertia-preview+json\"},\"method\":\"DELETE\",\"params\":{\"card_id\":{\"required\":true,\"type\":\"integer\"},\"id\":{\"alias\":\"card_id\",\"deprecated\":true}},\"url\":\"/projects/columns/cards/:card_id\"},\"deleteColumn\":{\"headers\":{\"accept\":\"application/vnd.github.inertia-preview+json\"},\"method\":\"DELETE\",\"params\":{\"column_id\":{\"required\":true,\"type\":\"integer\"},\"id\":{\"alias\":\"column_id\",\"deprecated\":true}},\"url\":\"/projects/columns/:column_id\"},\"deleteProject\":{\"alias\":\"projects.delete\",\"deprecated\":\"`projects.deleteProject()` is deprecated, use `projects.delete()`\"},\"deleteProjectCard\":{\"alias\":\"projects.deleteCard\",\"deprecated\":\"`projects.deleteProjectCard()` is deprecated, use `projects.deleteCard()`\"},\"deleteProjectColumn\":{\"alias\":\"projects.deleteColumn\",\"deprecated\":\"`projects.deleteProjectColumn()` is deprecated, use `projects.deleteColumn()`\"},\"get\":{\"headers\":{\"accept\":\"application/vnd.github.inertia-preview+json\"},\"method\":\"GET\",\"params\":{\"id\":{\"alias\":\"project_id\",\"deprecated\":true},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"project_id\":{\"required\":true,\"type\":\"integer\"}},\"url\":\"/projects/:project_id\"},\"getCard\":{\"headers\":{\"accept\":\"application/vnd.github.inertia-preview+json\"},\"method\":\"GET\",\"params\":{\"card_id\":{\"required\":true,\"type\":\"integer\"},\"id\":{\"alias\":\"card_id\",\"deprecated\":true}},\"url\":\"/projects/columns/cards/:card_id\"},\"getCollaborators\":{\"alias\":\"projects.listCollaborators\",\"deprecated\":\"`projects.getCollaborators()` is deprecated, use `projects.listCollaborators()`\"},\"getColumn\":{\"headers\":{\"accept\":\"application/vnd.github.inertia-preview+json\"},\"method\":\"GET\",\"params\":{\"column_id\":{\"required\":true,\"type\":\"integer\"},\"id\":{\"alias\":\"column_id\",\"deprecated\":true}},\"url\":\"/projects/columns/:column_id\"},\"getOrgProjects\":{\"alias\":\"projects.listForOrg\",\"deprecated\":\"`projects.getOrgProjects()` is deprecated, use `projects.listForOrg()`\"},\"getProject\":{\"alias\":\"projects.get\",\"deprecated\":\"`projects.getProject()` is deprecated, use `projects.get()`\"},\"getProjectCard\":{\"alias\":\"projects.getCard\",\"deprecated\":\"`projects.getProjectCard()` is deprecated, use `projects.getCard()`\"},\"getProjectCards\":{\"alias\":\"projects.listCards\",\"deprecated\":\"`projects.getProjectCards()` is deprecated, use `projects.listCards()`\"},\"getProjectColumn\":{\"alias\":\"projects.getColumn\",\"deprecated\":\"`projects.getProjectColumn()` is deprecated, use `projects.getColumn()`\"},\"getProjectColumns\":{\"alias\":\"projects.listColumns\",\"deprecated\":\"`projects.getProjectColumns()` is deprecated, use `projects.listColumns()`\"},\"getRepoProjects\":{\"alias\":\"projects.listForRepo\",\"deprecated\":\"`projects.getRepoProjects()` is deprecated, use `projects.listForRepo()`\"},\"getUserPermissionLevel\":{\"alias\":\"projects.reviewUserPermissionLevel\",\"deprecated\":\"`projects.getUserPermissionLevel()` is deprecated, use `projects.reviewUserPermissionLevel()`\"},\"listCards\":{\"headers\":{\"accept\":\"application/vnd.github.inertia-preview+json\"},\"method\":\"GET\",\"params\":{\"archived_state\":{\"enum\":[\"all\",\"archived\",\"not_archived\"],\"type\":\"string\"},\"column_id\":{\"required\":true,\"type\":\"integer\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"}},\"url\":\"/projects/columns/:column_id/cards\"},\"listCollaborators\":{\"headers\":{\"accept\":\"application/vnd.github.inertia-preview+json\"},\"method\":\"GET\",\"params\":{\"affiliation\":{\"enum\":[\"outside\",\"direct\",\"all\"],\"type\":\"string\"},\"id\":{\"alias\":\"project_id\",\"deprecated\":true},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"project_id\":{\"required\":true,\"type\":\"integer\"}},\"url\":\"/projects/:project_id/collaborators\"},\"listColumns\":{\"headers\":{\"accept\":\"application/vnd.github.inertia-preview+json\"},\"method\":\"GET\",\"params\":{\"id\":{\"alias\":\"project_id\",\"deprecated\":true},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"project_id\":{\"required\":true,\"type\":\"integer\"}},\"url\":\"/projects/:project_id/columns\"},\"listForOrg\":{\"headers\":{\"accept\":\"application/vnd.github.inertia-preview+json\"},\"method\":\"GET\",\"params\":{\"org\":{\"required\":true,\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"state\":{\"enum\":[\"open\",\"closed\",\"all\"],\"type\":\"string\"}},\"url\":\"/orgs/:org/projects\"},\"listForRepo\":{\"headers\":{\"accept\":\"application/vnd.github.inertia-preview+json\"},\"method\":\"GET\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"state\":{\"enum\":[\"open\",\"closed\",\"all\"],\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/projects\"},\"moveCard\":{\"headers\":{\"accept\":\"application/vnd.github.inertia-preview+json\"},\"method\":\"POST\",\"params\":{\"card_id\":{\"required\":true,\"type\":\"integer\"},\"column_id\":{\"type\":\"integer\"},\"id\":{\"alias\":\"card_id\",\"deprecated\":true},\"position\":{\"required\":true,\"type\":\"string\",\"validation\":\"^(top|bottom|after:\\\\d+)$\"}},\"url\":\"/projects/columns/cards/:card_id/moves\"},\"moveColumn\":{\"headers\":{\"accept\":\"application/vnd.github.inertia-preview+json\"},\"method\":\"POST\",\"params\":{\"column_id\":{\"required\":true,\"type\":\"integer\"},\"id\":{\"alias\":\"column_id\",\"deprecated\":true},\"position\":{\"required\":true,\"type\":\"string\",\"validation\":\"^(first|last|after:\\\\d+)$\"}},\"url\":\"/projects/columns/:column_id/moves\"},\"moveProjectCard\":{\"alias\":\"projects.moveCard\",\"deprecated\":\"`projects.moveProjectCard()` is deprecated, use `projects.moveCard()`\"},\"moveProjectColumn\":{\"alias\":\"projects.moveColumn\",\"deprecated\":\"`projects.moveProjectColumn()` is deprecated, use `projects.moveColumn()`\"},\"removeCollaborator\":{\"headers\":{\"accept\":\"application/vnd.github.inertia-preview+json\"},\"method\":\"DELETE\",\"params\":{\"id\":{\"alias\":\"project_id\",\"deprecated\":true},\"project_id\":{\"required\":true,\"type\":\"integer\"},\"username\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/projects/:project_id/collaborators/:username\"},\"reviewUserPermissionLevel\":{\"headers\":{\"accept\":\"application/vnd.github.inertia-preview+json\"},\"method\":\"GET\",\"params\":{\"id\":{\"alias\":\"project_id\",\"deprecated\":true},\"project_id\":{\"required\":true,\"type\":\"integer\"},\"username\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/projects/:project_id/collaborators/:username/permission\"},\"update\":{\"headers\":{\"accept\":\"application/vnd.github.inertia-preview+json\"},\"method\":\"PATCH\",\"params\":{\"body\":{\"type\":\"string\"},\"id\":{\"alias\":\"project_id\",\"deprecated\":true},\"name\":{\"type\":\"string\"},\"organization_permission\":{\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"project_id\":{\"required\":true,\"type\":\"integer\"},\"public\":{\"type\":\"boolean\"},\"state\":{\"enum\":[\"open\",\"closed\"],\"type\":\"string\"}},\"url\":\"/projects/:project_id\"},\"updateCard\":{\"headers\":{\"accept\":\"application/vnd.github.inertia-preview+json\"},\"method\":\"PATCH\",\"params\":{\"archived\":{\"type\":\"boolean\"},\"card_id\":{\"required\":true,\"type\":\"integer\"},\"id\":{\"alias\":\"card_id\",\"deprecated\":true},\"note\":{\"type\":\"string\"}},\"url\":\"/projects/columns/cards/:card_id\"},\"updateColumn\":{\"headers\":{\"accept\":\"application/vnd.github.inertia-preview+json\"},\"method\":\"PATCH\",\"params\":{\"column_id\":{\"required\":true,\"type\":\"integer\"},\"id\":{\"alias\":\"column_id\",\"deprecated\":true},\"name\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/projects/columns/:column_id\"},\"updateProject\":{\"alias\":\"projects.update\",\"deprecated\":\"`projects.updateProject()` is deprecated, use `projects.update()`\"},\"updateProjectCard\":{\"alias\":\"projects.updateCard\",\"deprecated\":\"`projects.updateProjectCard()` is deprecated, use `projects.updateCard()`\"},\"updateProjectColumn\":{\"alias\":\"projects.updateColumn\",\"deprecated\":\"`projects.updateProjectColumn()` is deprecated, use `projects.updateColumn()`\"}},\"pullRequests\":{\"checkIfMerged\":{\"headers\":{\"accept\":\"application/vnd.github.polaris-preview\"},\"method\":\"GET\",\"params\":{\"number\":{\"required\":true,\"type\":\"integer\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/pulls/:number/merge\"},\"checkMerged\":{\"alias\":\"pullRequests.checkIfMerged\",\"deprecated\":\"`pullRequests.checkMerged()` is deprecated, use `pullRequests.checkIfMerged()`\"},\"create\":{\"method\":\"POST\",\"params\":{\"base\":{\"required\":true,\"type\":\"string\"},\"body\":{\"type\":\"string\"},\"head\":{\"required\":true,\"type\":\"string\"},\"maintainer_can_modify\":{\"type\":\"boolean\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"title\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/pulls\"},\"createComment\":{\"headers\":{\"accept\":\"application/vnd.github.squirrel-girl-preview+json\"},\"method\":\"POST\",\"params\":{\"body\":{\"required\":true,\"type\":\"string\"},\"commit_id\":{\"required\":true,\"type\":\"string\"},\"number\":{\"required\":true,\"type\":\"integer\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"path\":{\"required\":true,\"type\":\"string\"},\"position\":{\"required\":true,\"type\":\"integer\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/pulls/:number/comments\"},\"createCommentReply\":{\"headers\":{\"accept\":\"application/vnd.github.squirrel-girl-preview+json\"},\"method\":\"POST\",\"params\":{\"body\":{\"required\":true,\"type\":\"string\"},\"in_reply_to\":{\"required\":true,\"type\":\"integer\"},\"number\":{\"required\":true,\"type\":\"integer\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/pulls/:number/comments\"},\"createFromIssue\":{\"method\":\"POST\",\"params\":{\"base\":{\"required\":true,\"type\":\"string\"},\"head\":{\"required\":true,\"type\":\"string\"},\"issue\":{\"required\":true,\"type\":\"integer\"},\"maintainer_can_modify\":{\"type\":\"boolean\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/pulls\"},\"createReview\":{\"method\":\"POST\",\"params\":{\"body\":{\"type\":\"string\"},\"comments\":{\"type\":\"object[]\"},\"comments[].body\":{\"required\":true,\"type\":\"string\"},\"comments[].path\":{\"required\":true,\"type\":\"string\"},\"comments[].position\":{\"required\":true,\"type\":\"integer\"},\"commit_id\":{\"type\":\"string\"},\"event\":{\"enum\":[\"APPROVE\",\"REQUEST_CHANGES\",\"COMMENT\"],\"type\":\"string\"},\"number\":{\"required\":true,\"type\":\"integer\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/pulls/:number/reviews\"},\"createReviewRequest\":{\"method\":\"POST\",\"params\":{\"number\":{\"required\":true,\"type\":\"integer\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"reviewers\":{\"type\":\"string[]\"},\"team_reviewers\":{\"type\":\"string[]\"}},\"url\":\"/repos/:owner/:repo/pulls/:number/requested_reviewers\"},\"deleteComment\":{\"headers\":{\"accept\":\"application/vnd.github.squirrel-girl-preview+json\"},\"method\":\"DELETE\",\"params\":{\"comment_id\":{\"required\":true,\"type\":\"integer\"},\"id\":{\"alias\":\"comment_id\",\"deprecated\":true},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/pulls/comments/:comment_id\"},\"deletePendingReview\":{\"method\":\"DELETE\",\"params\":{\"id\":{\"alias\":\"review_id\",\"deprecated\":true},\"number\":{\"required\":true,\"type\":\"integer\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"review_id\":{\"required\":true,\"type\":\"integer\"}},\"url\":\"/repos/:owner/:repo/pulls/:number/reviews/:review_id\"},\"deleteReviewRequest\":{\"method\":\"DELETE\",\"params\":{\"number\":{\"required\":true,\"type\":\"integer\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"reviewers\":{\"type\":\"string[]\"},\"team_reviewers\":{\"type\":\"string[]\"}},\"url\":\"/repos/:owner/:repo/pulls/:number/requested_reviewers\"},\"dismissReview\":{\"method\":\"PUT\",\"params\":{\"id\":{\"alias\":\"review_id\",\"deprecated\":true},\"message\":{\"required\":true,\"type\":\"string\"},\"number\":{\"required\":true,\"type\":\"integer\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"review_id\":{\"required\":true,\"type\":\"integer\"}},\"url\":\"/repos/:owner/:repo/pulls/:number/reviews/:review_id/dismissals\"},\"editComment\":{\"alias\":\"pullRequests.updateComment\",\"deprecated\":\"`pullRequests.editComment()` is deprecated, use `pullRequests.updateComment()`\"},\"get\":{\"method\":\"GET\",\"params\":{\"number\":{\"required\":true,\"type\":\"integer\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/pulls/:number\"},\"getAll\":{\"alias\":\"pullRequests.list\",\"deprecated\":\"`pullRequests.getAll()` is deprecated, use `pullRequests.list()`\"},\"getComment\":{\"headers\":{\"accept\":\"application/vnd.github.squirrel-girl-preview+json\"},\"method\":\"GET\",\"params\":{\"comment_id\":{\"required\":true,\"type\":\"integer\"},\"id\":{\"alias\":\"comment_id\",\"deprecated\":true},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/pulls/comments/:comment_id\"},\"getComments\":{\"alias\":\"pullRequests.listComments\",\"deprecated\":\"`pullRequests.getComments()` is deprecated, use `pullRequests.listComments()`\"},\"getCommentsForRepo\":{\"alias\":\"pullRequests.listCommentsForRepo\",\"deprecated\":\"`pullRequests.getCommentsForRepo()` is deprecated, use `pullRequests.listCommentsForRepo()`\"},\"getCommentsForReview\":{\"method\":\"GET\",\"params\":{\"id\":{\"alias\":\"review_id\",\"deprecated\":true},\"number\":{\"required\":true,\"type\":\"integer\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"review_id\":{\"required\":true,\"type\":\"integer\"}},\"url\":\"/repos/:owner/:repo/pulls/:number/reviews/:review_id/comments\"},\"getCommits\":{\"alias\":\"pullRequests.listCommits\",\"deprecated\":\"`pullRequests.getCommits()` is deprecated, use `pullRequests.listCommits()`\"},\"getFiles\":{\"alias\":\"pullRequests.listFiles\",\"deprecated\":\"`pullRequests.getFiles()` is deprecated, use `pullRequests.listFiles()`\"},\"getReview\":{\"method\":\"GET\",\"params\":{\"id\":{\"alias\":\"review_id\",\"deprecated\":true},\"number\":{\"required\":true,\"type\":\"integer\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"review_id\":{\"required\":true,\"type\":\"integer\"}},\"url\":\"/repos/:owner/:repo/pulls/:number/reviews/:review_id\"},\"getReviewComments\":{\"alias\":\"pullRequests.getCommentsForReview\",\"deprecated\":\"`pullRequests.getReviewComments()` is deprecated, use `pullRequests.getCommentsForReview()`\"},\"getReviewRequests\":{\"alias\":\"pullRequests.listReviewRequests\",\"deprecated\":\"`pullRequests.getReviewRequests()` is deprecated, use `pullRequests.listReviewRequests()`\"},\"getReviews\":{\"alias\":\"pullRequests.listReviews\",\"deprecated\":\"`pullRequests.getReviews()` is deprecated, use `pullRequests.listReviews()`\"},\"list\":{\"method\":\"GET\",\"params\":{\"base\":{\"type\":\"string\"},\"direction\":{\"enum\":[\"asc\",\"desc\"],\"type\":\"string\"},\"head\":{\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"sort\":{\"enum\":[\"created\",\"updated\",\"popularity\",\"long-running\"],\"type\":\"string\"},\"state\":{\"enum\":[\"open\",\"closed\",\"all\"],\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/pulls\"},\"listComments\":{\"headers\":{\"accept\":\"application/vnd.github.squirrel-girl-preview+json\"},\"method\":\"GET\",\"params\":{\"direction\":{\"enum\":[\"asc\",\"desc\"],\"type\":\"string\"},\"number\":{\"required\":true,\"type\":\"integer\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"since\":{\"type\":\"string\"},\"sort\":{\"enum\":[\"created\",\"updated\"],\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/pulls/:number/comments\"},\"listCommentsForRepo\":{\"headers\":{\"accept\":\"application/vnd.github.squirrel-girl-preview+json\"},\"method\":\"GET\",\"params\":{\"direction\":{\"enum\":[\"asc\",\"desc\"],\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"since\":{\"type\":\"string\"},\"sort\":{\"enum\":[\"created\",\"updated\"],\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/pulls/comments\"},\"listCommits\":{\"method\":\"GET\",\"params\":{\"number\":{\"required\":true,\"type\":\"integer\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/pulls/:number/commits\"},\"listFiles\":{\"method\":\"GET\",\"params\":{\"number\":{\"required\":true,\"type\":\"integer\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/pulls/:number/files\"},\"listReviewRequests\":{\"method\":\"GET\",\"params\":{\"number\":{\"required\":true,\"type\":\"integer\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/pulls/:number/requested_reviewers\"},\"listReviews\":{\"method\":\"GET\",\"params\":{\"number\":{\"required\":true,\"type\":\"integer\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/pulls/:number/reviews\"},\"merge\":{\"headers\":{\"accept\":\"application/vnd.github.polaris-preview\"},\"method\":\"PUT\",\"params\":{\"commit_message\":{\"type\":\"string\"},\"commit_title\":{\"type\":\"string\"},\"merge_method\":{\"enum\":[\"merge\",\"squash\",\"rebase\"],\"type\":\"string\"},\"number\":{\"required\":true,\"type\":\"integer\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"sha\":{\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/pulls/:number/merge\"},\"submitReview\":{\"method\":\"POST\",\"params\":{\"body\":{\"type\":\"string\"},\"event\":{\"enum\":[\"APPROVE\",\"REQUEST_CHANGES\",\"COMMENT\"],\"required\":true,\"type\":\"string\"},\"id\":{\"alias\":\"review_id\",\"deprecated\":true},\"number\":{\"required\":true,\"type\":\"integer\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"review_id\":{\"required\":true,\"type\":\"integer\"}},\"url\":\"/repos/:owner/:repo/pulls/:number/reviews/:review_id/events\"},\"update\":{\"method\":\"PATCH\",\"params\":{\"base\":{\"type\":\"string\"},\"body\":{\"type\":\"string\"},\"maintainer_can_modify\":{\"type\":\"boolean\"},\"number\":{\"required\":true,\"type\":\"integer\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"state\":{\"enum\":[\"open\",\"closed\"],\"type\":\"string\"},\"title\":{\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/pulls/:number\"},\"updateComment\":{\"headers\":{\"accept\":\"application/vnd.github.squirrel-girl-preview+json\"},\"method\":\"PATCH\",\"params\":{\"body\":{\"required\":true,\"type\":\"string\"},\"comment_id\":{\"required\":true,\"type\":\"integer\"},\"id\":{\"alias\":\"comment_id\",\"deprecated\":true},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/pulls/comments/:comment_id\"}},\"rateLimit\":{\"get\":{\"method\":\"GET\",\"params\":{},\"url\":\"/rate_limit\"}},\"reactions\":{\"createForCommitComment\":{\"headers\":{\"accept\":\"application/vnd.github.squirrel-girl-preview+json\"},\"method\":\"POST\",\"params\":{\"comment_id\":{\"required\":true,\"type\":\"integer\"},\"content\":{\"enum\":[\"+1\",\"-1\",\"laugh\",\"confused\",\"heart\",\"hooray\"],\"required\":true,\"type\":\"string\"},\"id\":{\"alias\":\"comment_id\",\"deprecated\":true},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/comments/:comment_id/reactions\"},\"createForIssue\":{\"headers\":{\"accept\":\"application/vnd.github.squirrel-girl-preview+json\"},\"method\":\"POST\",\"params\":{\"content\":{\"enum\":[\"+1\",\"-1\",\"laugh\",\"confused\",\"heart\",\"hooray\"],\"required\":true,\"type\":\"string\"},\"number\":{\"required\":true,\"type\":\"integer\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/issues/:number/reactions\"},\"createForIssueComment\":{\"headers\":{\"accept\":\"application/vnd.github.squirrel-girl-preview+json\"},\"method\":\"POST\",\"params\":{\"comment_id\":{\"required\":true,\"type\":\"integer\"},\"content\":{\"enum\":[\"+1\",\"-1\",\"laugh\",\"confused\",\"heart\",\"hooray\"],\"required\":true,\"type\":\"string\"},\"id\":{\"alias\":\"comment_id\",\"deprecated\":true},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/issues/comments/:comment_id/reactions\"},\"createForPullRequestReviewComment\":{\"headers\":{\"accept\":\"application/vnd.github.squirrel-girl-preview+json\"},\"method\":\"POST\",\"params\":{\"comment_id\":{\"required\":true,\"type\":\"integer\"},\"content\":{\"enum\":[\"+1\",\"-1\",\"laugh\",\"confused\",\"heart\",\"hooray\"],\"required\":true,\"type\":\"string\"},\"id\":{\"alias\":\"comment_id\",\"deprecated\":true},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/pulls/comments/:comment_id/reactions\"},\"createForTeamDiscussion\":{\"headers\":{\"accept\":\"application/vnd.github.echo-preview+json,application/vnd.github.squirrel-girl-preview+json\"},\"method\":\"POST\",\"params\":{\"content\":{\"enum\":[\"+1\",\"-1\",\"laugh\",\"confused\",\"heart\",\"hooray\"],\"required\":true,\"type\":\"string\"},\"discussion_number\":{\"required\":true,\"type\":\"integer\"},\"team_id\":{\"required\":true,\"type\":\"integer\"}},\"url\":\"/teams/:team_id/discussions/:discussion_number/reactions\"},\"createForTeamDiscussionComment\":{\"headers\":{\"accept\":\"application/vnd.github.echo-preview+json,application/vnd.github.squirrel-girl-preview+json\"},\"method\":\"POST\",\"params\":{\"comment_number\":{\"required\":true,\"type\":\"integer\"},\"content\":{\"enum\":[\"+1\",\"-1\",\"laugh\",\"confused\",\"heart\",\"hooray\"],\"required\":true,\"type\":\"string\"},\"discussion_number\":{\"required\":true,\"type\":\"integer\"},\"team_id\":{\"required\":true,\"type\":\"integer\"}},\"url\":\"/teams/:team_id/discussions/:discussion_number/comments/:comment_number/reactions\"},\"delete\":{\"headers\":{\"accept\":\"application/vnd.github.squirrel-girl-preview+json\"},\"method\":\"DELETE\",\"params\":{\"id\":{\"alias\":\"reaction_id\",\"deprecated\":true},\"reaction_id\":{\"required\":true,\"type\":\"integer\"}},\"url\":\"/reactions/:reaction_id\"},\"getForCommitComment\":{\"alias\":\"reactions.listForCommitComment\",\"deprecated\":\"`reactions.getForCommitComment()` is deprecated, use `reactions.listForCommitComment()`\"},\"getForIssue\":{\"alias\":\"reactions.listForIssue\",\"deprecated\":\"`reactions.getForIssue()` is deprecated, use `reactions.listForIssue()`\"},\"getForIssueComment\":{\"alias\":\"reactions.listForIssueComment\",\"deprecated\":\"`reactions.getForIssueComment()` is deprecated, use `reactions.listForIssueComment()`\"},\"getForPullRequestReviewComment\":{\"alias\":\"reactions.listForPullRequestReviewComment\",\"deprecated\":\"`reactions.getForPullRequestReviewComment()` is deprecated, use `reactions.listForPullRequestReviewComment()`\"},\"getForTeamDiscussion\":{\"alias\":\"reactions.listForTeamDiscussion\",\"deprecated\":\"`reactions.getForTeamDiscussion()` is deprecated, use `reactions.listForTeamDiscussion()`\"},\"getForTeamDiscussionComment\":{\"alias\":\"reactions.listForTeamDiscussionComment\",\"deprecated\":\"`reactions.getForTeamDiscussionComment()` is deprecated, use `reactions.listForTeamDiscussionComment()`\"},\"listForCommitComment\":{\"headers\":{\"accept\":\"application/vnd.github.squirrel-girl-preview+json\"},\"method\":\"GET\",\"params\":{\"comment_id\":{\"required\":true,\"type\":\"integer\"},\"content\":{\"enum\":[\"+1\",\"-1\",\"laugh\",\"confused\",\"heart\",\"hooray\"],\"type\":\"string\"},\"id\":{\"alias\":\"comment_id\",\"deprecated\":true},\"owner\":{\"required\":true,\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/comments/:comment_id/reactions\"},\"listForIssue\":{\"headers\":{\"accept\":\"application/vnd.github.squirrel-girl-preview+json\"},\"method\":\"GET\",\"params\":{\"content\":{\"enum\":[\"+1\",\"-1\",\"laugh\",\"confused\",\"heart\",\"hooray\"],\"type\":\"string\"},\"number\":{\"required\":true,\"type\":\"integer\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/issues/:number/reactions\"},\"listForIssueComment\":{\"headers\":{\"accept\":\"application/vnd.github.squirrel-girl-preview+json\"},\"method\":\"GET\",\"params\":{\"comment_id\":{\"required\":true,\"type\":\"integer\"},\"content\":{\"enum\":[\"+1\",\"-1\",\"laugh\",\"confused\",\"heart\",\"hooray\"],\"type\":\"string\"},\"id\":{\"alias\":\"comment_id\",\"deprecated\":true},\"owner\":{\"required\":true,\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/issues/comments/:comment_id/reactions\"},\"listForPullRequestReviewComment\":{\"headers\":{\"accept\":\"application/vnd.github.squirrel-girl-preview+json\"},\"method\":\"GET\",\"params\":{\"comment_id\":{\"required\":true,\"type\":\"integer\"},\"content\":{\"enum\":[\"+1\",\"-1\",\"laugh\",\"confused\",\"heart\",\"hooray\"],\"type\":\"string\"},\"id\":{\"alias\":\"comment_id\",\"deprecated\":true},\"owner\":{\"required\":true,\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/pulls/comments/:comment_id/reactions\"},\"listForTeamDiscussion\":{\"headers\":{\"accept\":\"application/vnd.github.echo-preview+json,application/vnd.github.squirrel-girl-preview+json\"},\"method\":\"GET\",\"params\":{\"content\":{\"enum\":[\"+1\",\"-1\",\"laugh\",\"confused\",\"heart\",\"hooray\"],\"type\":\"string\"},\"discussion_number\":{\"required\":true,\"type\":\"integer\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"team_id\":{\"required\":true,\"type\":\"integer\"}},\"url\":\"/teams/:team_id/discussions/:discussion_number/reactions\"},\"listForTeamDiscussionComment\":{\"headers\":{\"accept\":\"application/vnd.github.echo-preview+json,application/vnd.github.squirrel-girl-preview+json\"},\"method\":\"GET\",\"params\":{\"comment_number\":{\"required\":true,\"type\":\"integer\"},\"content\":{\"enum\":[\"+1\",\"-1\",\"laugh\",\"confused\",\"heart\",\"hooray\"],\"type\":\"string\"},\"discussion_number\":{\"required\":true,\"type\":\"integer\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"team_id\":{\"required\":true,\"type\":\"integer\"}},\"url\":\"/teams/:team_id/discussions/:discussion_number/comments/:comment_number/reactions\"}},\"repos\":{\"acceptInvitation\":{\"method\":\"PATCH\",\"params\":{\"invitation_id\":{\"required\":true,\"type\":\"integer\"}},\"url\":\"/user/repository_invitations/:invitation_id\"},\"addCollaborator\":{\"method\":\"PUT\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"permission\":{\"enum\":[\"pull\",\"push\",\"admin\"],\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"username\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/collaborators/:username\"},\"addDeployKey\":{\"method\":\"POST\",\"params\":{\"key\":{\"required\":true,\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"read_only\":{\"type\":\"boolean\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"title\":{\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/keys\"},\"addProtectedBranchAdminEnforcement\":{\"method\":\"POST\",\"params\":{\"branch\":{\"required\":true,\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/branches/:branch/protection/enforce_admins\"},\"addProtectedBranchRequiredSignatures\":{\"headers\":{\"accept\":\"application/vnd.github.zzzax-preview+json\"},\"method\":\"POST\",\"params\":{\"branch\":{\"required\":true,\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/branches/:branch/protection/required_signatures\"},\"addProtectedBranchRequiredStatusChecksContexts\":{\"method\":\"POST\",\"params\":{\"branch\":{\"required\":true,\"type\":\"string\"},\"contexts\":{\"mapTo\":\"data\",\"required\":true,\"type\":\"string[]\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts\"},\"addProtectedBranchTeamRestrictions\":{\"method\":\"POST\",\"params\":{\"branch\":{\"required\":true,\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"teams\":{\"mapTo\":\"data\",\"required\":true,\"type\":\"string[]\"}},\"url\":\"/repos/:owner/:repo/branches/:branch/protection/restrictions/teams\"},\"addProtectedBranchUserRestrictions\":{\"method\":\"POST\",\"params\":{\"branch\":{\"required\":true,\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"users\":{\"mapTo\":\"data\",\"required\":true,\"type\":\"string[]\"}},\"url\":\"/repos/:owner/:repo/branches/:branch/protection/restrictions/users\"},\"checkCollaborator\":{\"method\":\"GET\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"username\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/collaborators/:username\"},\"compareCommits\":{\"method\":\"GET\",\"params\":{\"base\":{\"required\":true,\"type\":\"string\"},\"head\":{\"required\":true,\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/compare/:base...:head\"},\"create\":{\"alias\":\"repos.createForAuthenticatedUser\",\"deprecated\":\"`repos.create()` is deprecated, use `repos.createForAuthenticatedUser()`\"},\"createCommitComment\":{\"method\":\"POST\",\"params\":{\"body\":{\"required\":true,\"type\":\"string\"},\"line\":{\"type\":\"integer\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"path\":{\"type\":\"string\"},\"position\":{\"type\":\"integer\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"sha\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/commits/:sha/comments\"},\"createDeployment\":{\"headers\":{\"accept\":\"application/vnd.github.ant-man-preview+json\"},\"method\":\"POST\",\"params\":{\"auto_merge\":{\"type\":\"boolean\"},\"description\":{\"type\":\"string\"},\"environment\":{\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"payload\":{\"type\":\"string\"},\"production_environment\":{\"type\":\"boolean\"},\"ref\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"required_contexts\":{\"type\":\"string[]\"},\"task\":{\"type\":\"string\"},\"transient_environment\":{\"type\":\"boolean\"}},\"url\":\"/repos/:owner/:repo/deployments\"},\"createDeploymentStatus\":{\"headers\":{\"accept\":\"application/vnd.github.ant-man-preview+json\"},\"method\":\"POST\",\"params\":{\"auto_inactive\":{\"type\":\"boolean\"},\"deployment_id\":{\"required\":true,\"type\":\"integer\"},\"description\":{\"type\":\"string\"},\"environment\":{\"enum\":[\"production\",\"staging\",\"qa\"],\"type\":\"string\"},\"environment_url\":{\"type\":\"string\"},\"id\":{\"alias\":\"deployment_id\",\"deprecated\":true},\"log_url\":{\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"state\":{\"enum\":[\"error\",\"failure\",\"inactive\",\"in_progress\",\"queued\",\"pending\",\"success\"],\"required\":true,\"type\":\"string\"},\"target_url\":{\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/deployments/:deployment_id/statuses\"},\"createFile\":{\"method\":\"PUT\",\"params\":{\"author\":{\"type\":\"object\"},\"author.email\":{\"required\":true,\"type\":\"string\"},\"author.name\":{\"required\":true,\"type\":\"string\"},\"branch\":{\"type\":\"string\"},\"committer\":{\"type\":\"object\"},\"committer.email\":{\"required\":true,\"type\":\"string\"},\"committer.name\":{\"required\":true,\"type\":\"string\"},\"content\":{\"required\":true,\"type\":\"string\"},\"message\":{\"required\":true,\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"path\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/contents/:path\"},\"createForAuthenticatedUser\":{\"method\":\"POST\",\"params\":{\"allow_merge_commit\":{\"type\":\"boolean\"},\"allow_rebase_merge\":{\"type\":\"boolean\"},\"allow_squash_merge\":{\"type\":\"boolean\"},\"auto_init\":{\"type\":\"boolean\"},\"description\":{\"type\":\"string\"},\"gitignore_template\":{\"type\":\"string\"},\"has_issues\":{\"type\":\"boolean\"},\"has_projects\":{\"type\":\"boolean\"},\"has_wiki\":{\"type\":\"boolean\"},\"homepage\":{\"type\":\"string\"},\"license_template\":{\"type\":\"string\"},\"name\":{\"required\":true,\"type\":\"string\"},\"private\":{\"type\":\"boolean\"},\"team_id\":{\"type\":\"integer\"}},\"url\":\"/user/repos\"},\"createForOrg\":{\"alias\":\"repos.createInOrg\",\"deprecated\":\"`repos.createForOrg()` is deprecated, use `repos.createInOrg()`\"},\"createFork\":{\"method\":\"POST\",\"params\":{\"organization\":{\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/forks\"},\"createHook\":{\"method\":\"POST\",\"params\":{\"active\":{\"type\":\"boolean\"},\"config\":{\"required\":true,\"type\":\"object\"},\"config.content_type\":{\"type\":\"string\"},\"config.insecure_ssl\":{\"type\":\"string\"},\"config.secret\":{\"type\":\"string\"},\"config.url\":{\"required\":true,\"type\":\"string\"},\"events\":{\"type\":\"string[]\"},\"name\":{\"required\":true,\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/hooks\"},\"createInOrg\":{\"method\":\"POST\",\"params\":{\"allow_merge_commit\":{\"type\":\"boolean\"},\"allow_rebase_merge\":{\"type\":\"boolean\"},\"allow_squash_merge\":{\"type\":\"boolean\"},\"auto_init\":{\"type\":\"boolean\"},\"description\":{\"type\":\"string\"},\"gitignore_template\":{\"type\":\"string\"},\"has_issues\":{\"type\":\"boolean\"},\"has_projects\":{\"type\":\"boolean\"},\"has_wiki\":{\"type\":\"boolean\"},\"homepage\":{\"type\":\"string\"},\"license_template\":{\"type\":\"string\"},\"name\":{\"required\":true,\"type\":\"string\"},\"org\":{\"required\":true,\"type\":\"string\"},\"private\":{\"type\":\"boolean\"},\"team_id\":{\"type\":\"integer\"}},\"url\":\"/orgs/:org/repos\"},\"createRelease\":{\"method\":\"POST\",\"params\":{\"body\":{\"type\":\"string\"},\"draft\":{\"type\":\"boolean\"},\"name\":{\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"prerelease\":{\"type\":\"boolean\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"tag_name\":{\"required\":true,\"type\":\"string\"},\"target_commitish\":{\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/releases\"},\"createStatus\":{\"method\":\"POST\",\"params\":{\"context\":{\"type\":\"string\"},\"description\":{\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"sha\":{\"required\":true,\"type\":\"string\"},\"state\":{\"enum\":[\"error\",\"failure\",\"pending\",\"success\"],\"required\":true,\"type\":\"string\"},\"target_url\":{\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/statuses/:sha\"},\"declineInvitation\":{\"method\":\"DELETE\",\"params\":{\"invitation_id\":{\"required\":true,\"type\":\"integer\"}},\"url\":\"/user/repository_invitations/:invitation_id\"},\"delete\":{\"method\":\"DELETE\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo\"},\"deleteAsset\":{\"alias\":\"repos.deleteReleaseAsset\",\"deprecated\":\"`repos.deleteAsset()` is deprecated, use `repos.deleteReleaseAsset()`\"},\"deleteCommitComment\":{\"method\":\"DELETE\",\"params\":{\"comment_id\":{\"required\":true,\"type\":\"integer\"},\"id\":{\"alias\":\"comment_id\",\"deprecated\":true},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/comments/:comment_id\"},\"deleteDeployKey\":{\"alias\":\"repos.removeDeployKey\",\"deprecated\":\"`repos.deleteDeployKey()` is deprecated, use `repos.removeDeployKey()`\"},\"deleteDownload\":{\"method\":\"DELETE\",\"params\":{\"download_id\":{\"required\":true,\"type\":\"integer\"},\"id\":{\"alias\":\"download_id\",\"deprecated\":true},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/downloads/:download_id\"},\"deleteFile\":{\"method\":\"DELETE\",\"params\":{\"author\":{\"type\":\"object\"},\"branch\":{\"type\":\"string\"},\"committer\":{\"type\":\"object\"},\"message\":{\"required\":true,\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"path\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"sha\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/contents/:path\"},\"deleteHook\":{\"method\":\"DELETE\",\"params\":{\"hook_id\":{\"required\":true,\"type\":\"integer\"},\"id\":{\"alias\":\"hook_id\",\"deprecated\":true},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/hooks/:hook_id\"},\"deleteInvitation\":{\"method\":\"DELETE\",\"params\":{\"invitation_id\":{\"required\":true,\"type\":\"integer\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/invitations/:invitation_id\"},\"deleteInvite\":{\"alias\":\"repos.deleteInvitation\",\"deprecated\":\"`repos.deleteInvite()` is deprecated, use `repos.deleteInvitation()`\"},\"deleteRelease\":{\"method\":\"DELETE\",\"params\":{\"id\":{\"alias\":\"release_id\",\"deprecated\":true},\"owner\":{\"required\":true,\"type\":\"string\"},\"release_id\":{\"required\":true,\"type\":\"integer\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/releases/:release_id\"},\"deleteReleaseAsset\":{\"method\":\"DELETE\",\"params\":{\"asset_id\":{\"required\":true,\"type\":\"integer\"},\"id\":{\"alias\":\"asset_id\",\"deprecated\":true},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/releases/assets/:asset_id\"},\"edit\":{\"alias\":\"repos.update\",\"deprecated\":\"`repos.edit()` is deprecated, use `repos.update()`\"},\"editAsset\":{\"alias\":\"repos.updateReleaseAsset\",\"deprecated\":\"`repos.editAsset()` is deprecated, use `repos.updateReleaseAsset()`\"},\"editHook\":{\"alias\":\"repos.updateHook\",\"deprecated\":\"`repos.editHook()` is deprecated, use `repos.updateHook()`\"},\"editRelease\":{\"alias\":\"repos.updateRelease\",\"deprecated\":\"`repos.editRelease()` is deprecated, use `repos.updateRelease()`\"},\"fork\":{\"alias\":\"repos.createFork\",\"deprecated\":\"`repos.fork()` is deprecated, use `repos.createFork()`\"},\"get\":{\"method\":\"GET\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo\"},\"getAll\":{\"alias\":\"repos.list\",\"deprecated\":\"`repos.getAll()` is deprecated, use `repos.list()`\"},\"getAllCommitComments\":{\"alias\":\"repos.listCommitComments\",\"deprecated\":\"`repos.getAllCommitComments()` is deprecated, use `repos.listCommitComments()`\"},\"getArchiveLink\":{\"method\":\"GET\",\"params\":{\"archive_format\":{\"required\":true,\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"ref\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/:archive_format/:ref\"},\"getAsset\":{\"alias\":\"repos.getReleaseAsset\",\"deprecated\":\"`repos.getAsset()` is deprecated, use `repos.getReleaseAsset()`\"},\"getAssets\":{\"alias\":\"repos.listAssetsForRelease\",\"deprecated\":\"`repos.getAssets()` is deprecated, use `repos.listAssetsForRelease()`\"},\"getBranch\":{\"method\":\"GET\",\"params\":{\"branch\":{\"required\":true,\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/branches/:branch\"},\"getBranchProtection\":{\"method\":\"GET\",\"params\":{\"branch\":{\"required\":true,\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/branches/:branch/protection\"},\"getBranches\":{\"alias\":\"repos.listBranches\",\"deprecated\":\"`repos.getBranches()` is deprecated, use `repos.listBranches()`\"},\"getById\":{\"method\":\"GET\",\"params\":{\"id\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repositories/:id\"},\"getClones\":{\"method\":\"GET\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"per\":{\"enum\":[\"day\",\"week\"],\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/traffic/clones\"},\"getCodeFrequencyStats\":{\"method\":\"GET\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/stats/code_frequency\"},\"getCollaboratorPermissionLevel\":{\"method\":\"GET\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"username\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/collaborators/:username/permission\"},\"getCollaborators\":{\"alias\":\"repos.listCollaborators\",\"deprecated\":\"`repos.getCollaborators()` is deprecated, use `repos.listCollaborators()`\"},\"getCombinedStatusForRef\":{\"method\":\"GET\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"ref\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/commits/:ref/status\"},\"getCommit\":{\"method\":\"GET\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"sha\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/commits/:sha\"},\"getCommitActivityStats\":{\"method\":\"GET\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/stats/commit_activity\"},\"getCommitComment\":{\"method\":\"GET\",\"params\":{\"comment_id\":{\"required\":true,\"type\":\"integer\"},\"id\":{\"alias\":\"comment_id\",\"deprecated\":true},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/comments/:comment_id\"},\"getCommitComments\":{\"alias\":\"repos.listCommentsForCommit\",\"deprecated\":\"`repos.getCommitComments()` is deprecated, use `repos.listCommentsForCommit()`\"},\"getCommitRefSha\":{\"method\":\"GET\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"ref\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/commits/:ref\"},\"getCommits\":{\"alias\":\"repos.listCommits\",\"deprecated\":\"`repos.getCommits()` is deprecated, use `repos.listCommits()`\"},\"getCommunityProfileMetrics\":{\"alias\":\"repos.retrieveCommunityProfileMetrics\",\"deprecated\":\"`repos.getCommunityProfileMetrics()` is deprecated, use `repos.retrieveCommunityProfileMetrics()`\"},\"getContent\":{\"alias\":\"repos.getContents\",\"deprecated\":\"`repos.getContent()` is deprecated, use `repos.getContents()`\"},\"getContents\":{\"method\":\"GET\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"path\":{\"required\":true,\"type\":\"string\"},\"ref\":{\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/contents/:path\"},\"getContributors\":{\"alias\":\"repos.listContributors\",\"deprecated\":\"`repos.getContributors()` is deprecated, use `repos.listContributors()`\"},\"getContributorsStats\":{\"method\":\"GET\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/stats/contributors\"},\"getDeployKey\":{\"method\":\"GET\",\"params\":{\"id\":{\"alias\":\"key_id\",\"deprecated\":true},\"key_id\":{\"required\":true,\"type\":\"integer\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/keys/:key_id\"},\"getDeployKeys\":{\"alias\":\"repos.listDeployKeys\",\"deprecated\":\"`repos.getDeployKeys()` is deprecated, use `repos.listDeployKeys()`\"},\"getDeployment\":{\"method\":\"GET\",\"params\":{\"deployment_id\":{\"required\":true,\"type\":\"integer\"},\"id\":{\"alias\":\"deployment_id\",\"deprecated\":true},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/deployments/:deployment_id\"},\"getDeploymentStatus\":{\"method\":\"GET\",\"params\":{\"deployment_id\":{\"required\":true,\"type\":\"integer\"},\"id\":{\"alias\":\"deployment_id\",\"deprecated\":true},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"status_id\":{\"required\":true,\"type\":\"integer\"}},\"url\":\"/repos/:owner/:repo/deployments/:deployment_id/statuses/:status_id\"},\"getDeploymentStatuses\":{\"alias\":\"repos.listDeploymentStatuses\",\"deprecated\":\"`repos.getDeploymentStatuses()` is deprecated, use `repos.listDeploymentStatuses()`\"},\"getDeployments\":{\"alias\":\"repos.listDeployments\",\"deprecated\":\"`repos.getDeployments()` is deprecated, use `repos.listDeployments()`\"},\"getDownload\":{\"method\":\"GET\",\"params\":{\"download_id\":{\"required\":true,\"type\":\"integer\"},\"id\":{\"alias\":\"download_id\",\"deprecated\":true},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/downloads/:download_id\"},\"getDownloads\":{\"alias\":\"repos.listDownloads\",\"deprecated\":\"`repos.getDownloads()` is deprecated, use `repos.listDownloads()`\"},\"getForOrg\":{\"alias\":\"repos.listForOrg\",\"deprecated\":\"`repos.getForOrg()` is deprecated, use `repos.listForOrg()`\"},\"getForUser\":{\"alias\":\"repos.listForUser\",\"deprecated\":\"`repos.getForUser()` is deprecated, use `repos.listForUser()`\"},\"getForks\":{\"alias\":\"repos.listForks\",\"deprecated\":\"`repos.getForks()` is deprecated, use `repos.listForks()`\"},\"getHook\":{\"method\":\"GET\",\"params\":{\"hook_id\":{\"required\":true,\"type\":\"integer\"},\"id\":{\"alias\":\"hook_id\",\"deprecated\":true},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/hooks/:hook_id\"},\"getHooks\":{\"alias\":\"repos.listHooks\",\"deprecated\":\"`repos.getHooks()` is deprecated, use `repos.listHooks()`\"},\"getInvites\":{\"alias\":\"repos.listInvitations\",\"deprecated\":\"`repos.getInvites()` is deprecated, use `repos.listInvitations()`\"},\"getLanguages\":{\"alias\":\"repos.listLanguages\",\"deprecated\":\"`repos.getLanguages()` is deprecated, use `repos.listLanguages()`\"},\"getLatestPagesBuild\":{\"headers\":{\"accept\":\"application/vnd.github.mister-fantastic-preview+json\"},\"method\":\"GET\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/pages/builds/latest\"},\"getLatestRelease\":{\"method\":\"GET\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/releases/latest\"},\"getPages\":{\"headers\":{\"accept\":\"application/vnd.github.mister-fantastic-preview+json\"},\"method\":\"GET\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/pages\"},\"getPagesBuild\":{\"headers\":{\"accept\":\"application/vnd.github.mister-fantastic-preview+json\"},\"method\":\"GET\",\"params\":{\"build_id\":{\"required\":true,\"type\":\"integer\"},\"id\":{\"alias\":\"build_id\",\"deprecated\":true},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/pages/builds/:build_id\"},\"getPagesBuilds\":{\"alias\":\"repos.listPagesBuilds\",\"deprecated\":\"`repos.getPagesBuilds()` is deprecated, use `repos.listPagesBuilds()`\"},\"getParticipationStats\":{\"method\":\"GET\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/stats/participation\"},\"getPaths\":{\"alias\":\"repos.getTopPaths\",\"deprecated\":\"`repos.getPaths()` is deprecated, use `repos.getTopPaths()`\"},\"getProtectedBranchAdminEnforcement\":{\"method\":\"GET\",\"params\":{\"branch\":{\"required\":true,\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/branches/:branch/protection/enforce_admins\"},\"getProtectedBranchPullRequestReviewEnforcement\":{\"method\":\"GET\",\"params\":{\"branch\":{\"required\":true,\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/branches/:branch/protection/required_pull_request_reviews\"},\"getProtectedBranchRequiredSignatures\":{\"headers\":{\"accept\":\"application/vnd.github.zzzax-preview+json\"},\"method\":\"GET\",\"params\":{\"branch\":{\"required\":true,\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/branches/:branch/protection/required_signatures\"},\"getProtectedBranchRequiredStatusChecks\":{\"method\":\"GET\",\"params\":{\"branch\":{\"required\":true,\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/branches/:branch/protection/required_status_checks\"},\"getProtectedBranchRequiredStatusChecksContexts\":{\"alias\":\"repos.listProtectedBranchRequiredStatusChecksContexts\",\"deprecated\":\"`repos.getProtectedBranchRequiredStatusChecksContexts()` is deprecated, use `repos.listProtectedBranchRequiredStatusChecksContexts()`\"},\"getProtectedBranchRestrictions\":{\"method\":\"GET\",\"params\":{\"branch\":{\"required\":true,\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/branches/:branch/protection/restrictions\"},\"getProtectedBranchTeamRestrictions\":{\"alias\":\"repos.listProtectedBranchTeamRestrictions\",\"deprecated\":\"`repos.getProtectedBranchTeamRestrictions()` is deprecated, use `repos.listProtectedBranchTeamRestrictions()`\"},\"getProtectedBranchUserRestrictions\":{\"alias\":\"repos.listProtectedBranchUserRestrictions\",\"deprecated\":\"`repos.getProtectedBranchUserRestrictions()` is deprecated, use `repos.listProtectedBranchUserRestrictions()`\"},\"getPublic\":{\"alias\":\"repos.listPublic\",\"deprecated\":\"`repos.getPublic()` is deprecated, use `repos.listPublic()`\"},\"getPunchCardStats\":{\"method\":\"GET\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/stats/punch_card\"},\"getReadme\":{\"method\":\"GET\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"ref\":{\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/readme\"},\"getReferrers\":{\"alias\":\"repos.getTopReferrers\",\"deprecated\":\"`repos.getReferrers()` is deprecated, use `repos.getTopReferrers()`\"},\"getRelease\":{\"method\":\"GET\",\"params\":{\"id\":{\"alias\":\"release_id\",\"deprecated\":true},\"owner\":{\"required\":true,\"type\":\"string\"},\"release_id\":{\"required\":true,\"type\":\"integer\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/releases/:release_id\"},\"getReleaseAsset\":{\"method\":\"GET\",\"params\":{\"asset_id\":{\"required\":true,\"type\":\"integer\"},\"id\":{\"alias\":\"asset_id\",\"deprecated\":true},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/releases/assets/:asset_id\"},\"getReleaseByTag\":{\"method\":\"GET\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"tag\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/releases/tags/:tag\"},\"getReleases\":{\"alias\":\"repos.listReleases\",\"deprecated\":\"`repos.getReleases()` is deprecated, use `repos.listReleases()`\"},\"getShaOfCommitRef\":{\"alias\":\"repos.getCommitRefSha\",\"deprecated\":\"`repos.getShaOfCommitRef()` is deprecated, use `repos.getCommitRefSha()`\"},\"getStatsCodeFrequency\":{\"alias\":\"repos.getCodeFrequencyStats\",\"deprecated\":\"`repos.getStatsCodeFrequency()` is deprecated, use `repos.getCodeFrequencyStats()`\"},\"getStatsCommitActivity\":{\"alias\":\"repos.getCommitActivityStats\",\"deprecated\":\"`repos.getStatsCommitActivity()` is deprecated, use `repos.getCommitActivityStats()`\"},\"getStatsContributors\":{\"alias\":\"repos.getContributorsStats\",\"deprecated\":\"`repos.getStatsContributors()` is deprecated, use `repos.getContributorsStats()`\"},\"getStatsParticipation\":{\"alias\":\"repos.getParticipationStats\",\"deprecated\":\"`repos.getStatsParticipation()` is deprecated, use `repos.getParticipationStats()`\"},\"getStatsPunchCard\":{\"alias\":\"repos.getPunchCardStats\",\"deprecated\":\"`repos.getStatsPunchCard()` is deprecated, use `repos.getPunchCardStats()`\"},\"getStatuses\":{\"alias\":\"repos.listStatusesForRef\",\"deprecated\":\"`repos.getStatuses()` is deprecated, use `repos.listStatusesForRef()`\"},\"getTags\":{\"alias\":\"repos.listTags\",\"deprecated\":\"`repos.getTags()` is deprecated, use `repos.listTags()`\"},\"getTeams\":{\"alias\":\"repos.listTeams\",\"deprecated\":\"`repos.getTeams()` is deprecated, use `repos.listTeams()`\"},\"getTopPaths\":{\"method\":\"GET\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/traffic/popular/paths\"},\"getTopReferrers\":{\"method\":\"GET\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/traffic/popular/referrers\"},\"getTopics\":{\"alias\":\"repos.listTopics\",\"deprecated\":\"`repos.getTopics()` is deprecated, use `repos.listTopics()`\"},\"getViews\":{\"method\":\"GET\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"per\":{\"enum\":[\"day\",\"week\"],\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/traffic/views\"},\"list\":{\"method\":\"GET\",\"params\":{\"affiliation\":{\"enum\":[\"owner\",\"collaborator\",\"organization_member\"],\"type\":\"string\"},\"direction\":{\"enum\":[\"asc\",\"desc\"],\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"sort\":{\"enum\":[\"created\",\"updated\",\"pushed\",\"full_name\"],\"type\":\"string\"},\"type\":{\"enum\":[\"all\",\"owner\",\"public\",\"private\",\"member\"],\"type\":\"string\"},\"visibility\":{\"enum\":[\"all\",\"public\",\"private\"],\"type\":\"string\"}},\"url\":\"/user/repos\"},\"listAssetsForRelease\":{\"method\":\"GET\",\"params\":{\"id\":{\"alias\":\"release_id\",\"deprecated\":true},\"owner\":{\"required\":true,\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"release_id\":{\"required\":true,\"type\":\"integer\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/releases/:release_id/assets\"},\"listBranches\":{\"method\":\"GET\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"protected\":{\"type\":\"boolean\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/branches\"},\"listCollaborators\":{\"method\":\"GET\",\"params\":{\"affiliation\":{\"enum\":[\"outside\",\"direct\",\"all\"],\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/collaborators\"},\"listCommentsForCommit\":{\"method\":\"GET\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"ref\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/commits/:ref/comments\"},\"listCommitComments\":{\"method\":\"GET\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/comments\"},\"listCommits\":{\"method\":\"GET\",\"params\":{\"author\":{\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"path\":{\"type\":\"string\"},\"per_page\":{\"type\":\"integer\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"sha\":{\"type\":\"string\"},\"since\":{\"type\":\"string\"},\"until\":{\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/commits\"},\"listContributors\":{\"method\":\"GET\",\"params\":{\"anon\":{\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/contributors\"},\"listDeployKeys\":{\"method\":\"GET\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/keys\"},\"listDeploymentStatuses\":{\"headers\":{\"accept\":\"application/vnd.github.ant-man-preview+json\"},\"method\":\"GET\",\"params\":{\"deployment_id\":{\"required\":true,\"type\":\"integer\"},\"id\":{\"alias\":\"deployment_id\",\"deprecated\":true},\"owner\":{\"required\":true,\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/deployments/:deployment_id/statuses\"},\"listDeployments\":{\"headers\":{\"accept\":\"application/vnd.github.ant-man-preview+json\"},\"method\":\"GET\",\"params\":{\"environment\":{\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"ref\":{\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"sha\":{\"type\":\"string\"},\"task\":{\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/deployments\"},\"listDownloads\":{\"method\":\"GET\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/downloads\"},\"listForOrg\":{\"method\":\"GET\",\"params\":{\"org\":{\"required\":true,\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"type\":{\"enum\":[\"all\",\"public\",\"private\",\"forks\",\"sources\",\"member\"],\"type\":\"string\"}},\"url\":\"/orgs/:org/repos\"},\"listForUser\":{\"method\":\"GET\",\"params\":{\"direction\":{\"enum\":[\"asc\",\"desc\"],\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"sort\":{\"enum\":[\"created\",\"updated\",\"pushed\",\"full_name\"],\"type\":\"string\"},\"type\":{\"enum\":[\"all\",\"owner\",\"member\"],\"type\":\"string\"},\"username\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/users/:username/repos\"},\"listForks\":{\"method\":\"GET\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"sort\":{\"enum\":[\"newest\",\"oldest\",\"stargazers\"],\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/forks\"},\"listHooks\":{\"method\":\"GET\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/hooks\"},\"listInvitations\":{\"method\":\"GET\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/invitations\"},\"listInvitationsForAuthenticatedUser\":{\"method\":\"GET\",\"params\":{\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"}},\"url\":\"/user/repository_invitations\"},\"listLanguages\":{\"method\":\"GET\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/languages\"},\"listPagesBuilds\":{\"headers\":{\"accept\":\"application/vnd.github.mister-fantastic-preview+json\"},\"method\":\"GET\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/pages/builds\"},\"listProtectedBranchRequiredStatusChecksContexts\":{\"method\":\"GET\",\"params\":{\"branch\":{\"required\":true,\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts\"},\"listProtectedBranchTeamRestrictions\":{\"method\":\"GET\",\"params\":{\"branch\":{\"required\":true,\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/branches/:branch/protection/restrictions/teams\"},\"listProtectedBranchUserRestrictions\":{\"method\":\"GET\",\"params\":{\"branch\":{\"required\":true,\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/branches/:branch/protection/restrictions/users\"},\"listPublic\":{\"method\":\"GET\",\"params\":{\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"since\":{\"type\":\"string\"}},\"url\":\"/repositories\"},\"listReleases\":{\"method\":\"GET\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/releases\"},\"listStatusesForRef\":{\"method\":\"GET\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"ref\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/commits/:ref/statuses\"},\"listTags\":{\"method\":\"GET\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/tags\"},\"listTeams\":{\"method\":\"GET\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/teams\"},\"listTopics\":{\"headers\":{\"accept\":\"application/vnd.github.mercy-preview+json\"},\"method\":\"GET\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/topics\"},\"merge\":{\"method\":\"POST\",\"params\":{\"base\":{\"required\":true,\"type\":\"string\"},\"commit_message\":{\"type\":\"string\"},\"head\":{\"required\":true,\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/merges\"},\"pingHook\":{\"method\":\"POST\",\"params\":{\"hook_id\":{\"required\":true,\"type\":\"integer\"},\"id\":{\"alias\":\"hook_id\",\"deprecated\":true},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/hooks/:hook_id/pings\"},\"removeBranchProtection\":{\"method\":\"DELETE\",\"params\":{\"branch\":{\"required\":true,\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/branches/:branch/protection\"},\"removeCollaborator\":{\"method\":\"DELETE\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"username\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/collaborators/:username\"},\"removeDeployKey\":{\"method\":\"DELETE\",\"params\":{\"id\":{\"alias\":\"key_id\",\"deprecated\":true},\"key_id\":{\"required\":true,\"type\":\"integer\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/keys/:key_id\"},\"removeProtectedBranchAdminEnforcement\":{\"method\":\"DELETE\",\"params\":{\"branch\":{\"required\":true,\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/branches/:branch/protection/enforce_admins\"},\"removeProtectedBranchPullRequestReviewEnforcement\":{\"method\":\"DELETE\",\"params\":{\"branch\":{\"required\":true,\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/branches/:branch/protection/required_pull_request_reviews\"},\"removeProtectedBranchRequiredSignatures\":{\"headers\":{\"accept\":\"application/vnd.github.zzzax-preview+json\"},\"method\":\"DELETE\",\"params\":{\"branch\":{\"required\":true,\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/branches/:branch/protection/required_signatures\"},\"removeProtectedBranchRequiredStatusChecks\":{\"method\":\"DELETE\",\"params\":{\"branch\":{\"required\":true,\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/branches/:branch/protection/required_status_checks\"},\"removeProtectedBranchRequiredStatusChecksContexts\":{\"method\":\"DELETE\",\"params\":{\"branch\":{\"required\":true,\"type\":\"string\"},\"contexts\":{\"mapTo\":\"data\",\"required\":true,\"type\":\"string[]\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts\"},\"removeProtectedBranchRestrictions\":{\"method\":\"DELETE\",\"params\":{\"branch\":{\"required\":true,\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/branches/:branch/protection/restrictions\"},\"removeProtectedBranchTeamRestrictions\":{\"method\":\"DELETE\",\"params\":{\"branch\":{\"required\":true,\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"teams\":{\"mapTo\":\"data\",\"required\":true,\"type\":\"string[]\"}},\"url\":\"/repos/:owner/:repo/branches/:branch/protection/restrictions/teams\"},\"removeProtectedBranchUserRestrictions\":{\"method\":\"DELETE\",\"params\":{\"branch\":{\"required\":true,\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"users\":{\"mapTo\":\"data\",\"required\":true,\"type\":\"string[]\"}},\"url\":\"/repos/:owner/:repo/branches/:branch/protection/restrictions/users\"},\"replaceProtectedBranchRequiredStatusChecksContexts\":{\"method\":\"PUT\",\"params\":{\"branch\":{\"required\":true,\"type\":\"string\"},\"contexts\":{\"mapTo\":\"data\",\"required\":true,\"type\":\"string[]\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts\"},\"replaceProtectedBranchTeamRestrictions\":{\"method\":\"PUT\",\"params\":{\"branch\":{\"required\":true,\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"teams\":{\"mapTo\":\"data\",\"required\":true,\"type\":\"string[]\"}},\"url\":\"/repos/:owner/:repo/branches/:branch/protection/restrictions/teams\"},\"replaceProtectedBranchUserRestrictions\":{\"method\":\"PUT\",\"params\":{\"branch\":{\"required\":true,\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"users\":{\"mapTo\":\"data\",\"required\":true,\"type\":\"string[]\"}},\"url\":\"/repos/:owner/:repo/branches/:branch/protection/restrictions/users\"},\"replaceTopics\":{\"headers\":{\"accept\":\"application/vnd.github.mercy-preview+json\"},\"method\":\"PUT\",\"params\":{\"names\":{\"required\":true,\"type\":\"string[]\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/topics\"},\"requestPageBuild\":{\"headers\":{\"accept\":\"application/vnd.github.mister-fantastic-preview+json\"},\"method\":\"POST\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/pages/builds\"},\"retrieveCommunityProfileMetrics\":{\"headers\":{\"accept\":\"application/vnd.github.black-panther-preview+json\"},\"method\":\"GET\",\"params\":{\"name\":{\"alias\":\"repo\",\"deprecated\":true},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/community/profile\"},\"reviewUserPermissionLevel\":{\"alias\":\"repos.getCollaboratorPermissionLevel\",\"deprecated\":\"`repos.reviewUserPermissionLevel()` is deprecated, use `repos.getCollaboratorPermissionLevel()`\"},\"testHook\":{\"alias\":\"repos.testPushHook\",\"deprecated\":\"`repos.testHook()` is deprecated, use `repos.testPushHook()`\"},\"testPushHook\":{\"method\":\"POST\",\"params\":{\"hook_id\":{\"required\":true,\"type\":\"integer\"},\"id\":{\"alias\":\"hook_id\",\"deprecated\":true},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/hooks/:hook_id/tests\"},\"transfer\":{\"headers\":{\"accept\":\"application/vnd.github.nightshade-preview+json\"},\"method\":\"POST\",\"params\":{\"new_owner\":{\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"team_id\":{\"alias\":\"team_ids\",\"deprecated\":true},\"team_ids\":{\"type\":\"integer[]\"}},\"url\":\"/repos/:owner/:repo/transfer\"},\"update\":{\"method\":\"PATCH\",\"params\":{\"allow_merge_commit\":{\"type\":\"boolean\"},\"allow_rebase_merge\":{\"type\":\"boolean\"},\"allow_squash_merge\":{\"type\":\"boolean\"},\"archived\":{\"type\":\"boolean\"},\"default_branch\":{\"type\":\"string\"},\"description\":{\"type\":\"string\"},\"has_issues\":{\"type\":\"boolean\"},\"has_projects\":{\"type\":\"boolean\"},\"has_wiki\":{\"type\":\"boolean\"},\"homepage\":{\"type\":\"string\"},\"name\":{\"required\":true,\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"private\":{\"type\":\"boolean\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo\"},\"updateBranchProtection\":{\"method\":\"PUT\",\"params\":{\"branch\":{\"required\":true,\"type\":\"string\"},\"enforce_admins\":{\"allowNull\":true,\"required\":true,\"type\":\"boolean\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"required_pull_request_reviews\":{\"allowNull\":true,\"required\":true,\"type\":\"object\"},\"required_pull_request_reviews.dismiss_stale_reviews\":{\"type\":\"boolean\"},\"required_pull_request_reviews.dismissal_restrictions\":{\"type\":\"object\"},\"required_pull_request_reviews.dismissal_restrictions.teams\":{\"type\":\"string[]\"},\"required_pull_request_reviews.dismissal_restrictions.users\":{\"type\":\"string[]\"},\"required_pull_request_reviews.require_code_owner_reviews\":{\"type\":\"boolean\"},\"required_pull_request_reviews.required_approving_review_count\":{\"type\":\"integer\"},\"required_status_checks\":{\"allowNull\":true,\"required\":true,\"type\":\"object\"},\"required_status_checks.contexts\":{\"required\":true,\"type\":\"string[]\"},\"required_status_checks.strict\":{\"required\":true,\"type\":\"boolean\"},\"restrictions\":{\"allowNull\":true,\"required\":true,\"type\":\"object\"},\"restrictions.teams\":{\"type\":\"string[]\"},\"restrictions.users\":{\"type\":\"string[]\"}},\"url\":\"/repos/:owner/:repo/branches/:branch/protection\"},\"updateCommitComment\":{\"method\":\"PATCH\",\"params\":{\"body\":{\"required\":true,\"type\":\"string\"},\"comment_id\":{\"required\":true,\"type\":\"integer\"},\"id\":{\"alias\":\"comment_id\",\"deprecated\":true},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/comments/:comment_id\"},\"updateFile\":{\"method\":\"PUT\",\"params\":{\"author\":{\"type\":\"object\"},\"author.email\":{\"required\":true,\"type\":\"string\"},\"author.name\":{\"required\":true,\"type\":\"string\"},\"branch\":{\"type\":\"string\"},\"committer\":{\"type\":\"object\"},\"committer.email\":{\"required\":true,\"type\":\"string\"},\"committer.name\":{\"required\":true,\"type\":\"string\"},\"content\":{\"required\":true,\"type\":\"string\"},\"message\":{\"required\":true,\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"path\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"sha\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/contents/:path\"},\"updateHook\":{\"method\":\"PATCH\",\"params\":{\"active\":{\"type\":\"boolean\"},\"add_events\":{\"type\":\"string[]\"},\"config\":{\"type\":\"object\"},\"config.content_type\":{\"type\":\"string\"},\"config.insecure_ssl\":{\"type\":\"string\"},\"config.secret\":{\"type\":\"string\"},\"config.url\":{\"required\":true,\"type\":\"string\"},\"events\":{\"type\":\"string[]\"},\"hook_id\":{\"required\":true,\"type\":\"integer\"},\"id\":{\"alias\":\"hook_id\",\"deprecated\":true},\"owner\":{\"required\":true,\"type\":\"string\"},\"remove_events\":{\"type\":\"string[]\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/hooks/:hook_id\"},\"updateInformationAboutPagesSite\":{\"headers\":{\"accept\":\"application/vnd.github.mister-fantastic-preview+json\"},\"method\":\"PUT\",\"params\":{\"cname\":{\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"source\":{\"enum\":[\"\\\"gh-pages\\\"\",\"\\\"master\\\"\",\"\\\"master /docs\\\"\"],\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/pages\"},\"updateInvitation\":{\"method\":\"PATCH\",\"params\":{\"invitation_id\":{\"required\":true,\"type\":\"integer\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"permissions\":{\"enum\":[\"read\",\"write\",\"admin\"],\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/invitations/:invitation_id\"},\"updateInvite\":{\"alias\":\"repos.updateInvitation\",\"deprecated\":\"`repos.updateInvite()` is deprecated, use `repos.updateInvitation()`\"},\"updateProtectedBranchPullRequestReviewEnforcement\":{\"method\":\"PATCH\",\"params\":{\"branch\":{\"required\":true,\"type\":\"string\"},\"dismiss_stale_reviews\":{\"type\":\"boolean\"},\"dismissal_restrictions\":{\"type\":\"object\"},\"dismissal_restrictions.teams\":{\"type\":\"string[]\"},\"dismissal_restrictions.users\":{\"type\":\"string[]\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"require_code_owner_reviews\":{\"type\":\"boolean\"},\"required_approving_review_count\":{\"type\":\"integer\"}},\"url\":\"/repos/:owner/:repo/branches/:branch/protection/required_pull_request_reviews\"},\"updateProtectedBranchRequiredStatusChecks\":{\"method\":\"PATCH\",\"params\":{\"branch\":{\"required\":true,\"type\":\"string\"},\"contexts\":{\"type\":\"string[]\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"strict\":{\"type\":\"boolean\"}},\"url\":\"/repos/:owner/:repo/branches/:branch/protection/required_status_checks\"},\"updateRelease\":{\"method\":\"PATCH\",\"params\":{\"body\":{\"type\":\"string\"},\"draft\":{\"type\":\"boolean\"},\"id\":{\"alias\":\"release_id\",\"deprecated\":true},\"name\":{\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"prerelease\":{\"type\":\"boolean\"},\"release_id\":{\"required\":true,\"type\":\"integer\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"tag_name\":{\"type\":\"string\"},\"target_commitish\":{\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/releases/:release_id\"},\"updateReleaseAsset\":{\"method\":\"PATCH\",\"params\":{\"asset_id\":{\"required\":true,\"type\":\"integer\"},\"id\":{\"alias\":\"asset_id\",\"deprecated\":true},\"label\":{\"type\":\"string\"},\"name\":{\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/releases/assets/:asset_id\"},\"uploadAsset\":{\"alias\":\"repos.uploadReleaseAsset\",\"deprecated\":\"`repos.uploadAsset()` is deprecated, use `repos.uploadReleaseAsset()`\"},\"uploadReleaseAsset\":{\"method\":\"POST\",\"params\":{\"contentLength\":{\"alias\":\"headers.content-length\",\"deprecated\":true},\"contentType\":{\"alias\":\"headers.content-type\",\"deprecated\":true},\"file\":{\"mapTo\":\"data\",\"required\":true,\"type\":\"string | object\"},\"headers.content-length\":{\"required\":true,\"type\":\"integer\"},\"headers.content-type\":{\"required\":true,\"type\":\"string\"},\"label\":{\"type\":\"string\"},\"name\":{\"required\":true,\"type\":\"string\"},\"url\":{\"required\":true,\"type\":\"string\"}},\"url\":\":url\"}},\"search\":{\"code\":{\"method\":\"GET\",\"params\":{\"order\":{\"enum\":[\"asc\",\"desc\"],\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"q\":{\"required\":true,\"type\":\"string\"},\"sort\":{\"enum\":[\"indexed\"],\"type\":\"string\"}},\"url\":\"/search/code\"},\"commits\":{\"headers\":{\"accept\":\"application/vnd.github.cloak-preview+json\"},\"method\":\"GET\",\"params\":{\"order\":{\"enum\":[\"asc\",\"desc\"],\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"q\":{\"required\":true,\"type\":\"string\"},\"sort\":{\"enum\":[\"author-date\",\"committer-date\"],\"type\":\"string\"}},\"url\":\"/search/commits\"},\"issues\":{\"method\":\"GET\",\"params\":{\"order\":{\"enum\":[\"asc\",\"desc\"],\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"q\":{\"required\":true,\"type\":\"string\"},\"sort\":{\"enum\":[\"comments\",\"created\",\"updated\"],\"type\":\"string\"}},\"url\":\"/search/issues\"},\"labels\":{\"headers\":{\"accept\":\"application/vnd.github.symmetra-preview+json\"},\"method\":\"GET\",\"params\":{\"order\":{\"enum\":[\"asc\",\"desc\"],\"type\":\"string\"},\"q\":{\"required\":true,\"type\":\"string\"},\"repository_id\":{\"required\":true,\"type\":\"integer\"},\"sort\":{\"enum\":[\"created\",\"updated\"],\"type\":\"string\"}},\"url\":\"/search/labels\"},\"repos\":{\"headers\":{\"accept\":\"application/vnd.github.mercy-preview+json\"},\"method\":\"GET\",\"params\":{\"order\":{\"enum\":[\"asc\",\"desc\"],\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"q\":{\"required\":true,\"type\":\"string\"},\"sort\":{\"enum\":[\"stars\",\"forks\",\"updated\"],\"type\":\"string\"}},\"url\":\"/search/repositories\"},\"topics\":{\"headers\":{\"accept\":\"application/vnd.github.mercy-preview+json\"},\"method\":\"GET\",\"params\":{\"q\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/search/topics\"},\"users\":{\"method\":\"GET\",\"params\":{\"order\":{\"enum\":[\"asc\",\"desc\"],\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"q\":{\"required\":true,\"type\":\"string\"},\"sort\":{\"enum\":[\"followers\",\"repositories\",\"joined\"],\"type\":\"string\"}},\"url\":\"/search/users\"}},\"teams\":{\"addMember\":{\"method\":\"PUT\",\"params\":{\"team_id\":{\"required\":true,\"type\":\"integer\"},\"username\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/teams/:team_id/members/:username\"},\"addOrUpdateMembership\":{\"headers\":{\"accept\":\"application/vnd.github.hellcat-preview+json\"},\"method\":\"PUT\",\"params\":{\"id\":{\"alias\":\"team_id\",\"deprecated\":true},\"role\":{\"enum\":[\"member\",\"maintainer\"],\"type\":\"string\"},\"team_id\":{\"required\":true,\"type\":\"integer\"},\"username\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/teams/:team_id/memberships/:username\"},\"addOrUpdateProject\":{\"headers\":{\"accept\":\"application/vnd.github.inertia-preview+json\"},\"method\":\"PUT\",\"params\":{\"permission\":{\"enum\":[\"read\",\"write\",\"admin\"],\"type\":\"string\"},\"project_id\":{\"required\":true,\"type\":\"integer\"},\"team_id\":{\"required\":true,\"type\":\"integer\"}},\"url\":\"/teams/:team_id/projects/:project_id\"},\"addOrUpdateRepo\":{\"headers\":{\"accept\":\"application/vnd.github.hellcat-preview+json\"},\"method\":\"PUT\",\"params\":{\"id\":{\"alias\":\"team_id\",\"deprecated\":true},\"org\":{\"alias\":\"owner\",\"deprecated\":true},\"owner\":{\"required\":true,\"type\":\"string\"},\"permission\":{\"enum\":[\"pull\",\"push\",\"admin\"],\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"team_id\":{\"required\":true,\"type\":\"integer\"}},\"url\":\"/teams/:team_id/repos/:owner/:repo\"},\"checkManagesRepo\":{\"headers\":{\"accept\":\"application/vnd.github.hellcat-preview+json\"},\"method\":\"GET\",\"params\":{\"id\":{\"alias\":\"team_id\",\"deprecated\":true},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"team_id\":{\"required\":true,\"type\":\"integer\"}},\"url\":\"/teams/:team_id/repos/:owner/:repo\"},\"create\":{\"headers\":{\"accept\":\"application/vnd.github.hellcat-preview+json\"},\"method\":\"POST\",\"params\":{\"description\":{\"type\":\"string\"},\"maintainers\":{\"type\":\"string[]\"},\"name\":{\"required\":true,\"type\":\"string\"},\"org\":{\"required\":true,\"type\":\"string\"},\"parent_team_id\":{\"type\":\"integer\"},\"permission\":{\"enum\":[\"pull\",\"push\",\"admin\"],\"type\":\"string\"},\"privacy\":{\"enum\":[\"secret\",\"closed\"],\"type\":\"string\"},\"repo_names\":{\"type\":\"string[]\"}},\"url\":\"/orgs/:org/teams\"},\"createDiscussion\":{\"headers\":{\"accept\":\"application/vnd.github.echo-preview+json\"},\"method\":\"POST\",\"params\":{\"body\":{\"required\":true,\"type\":\"string\"},\"private\":{\"type\":\"boolean\"},\"team_id\":{\"required\":true,\"type\":\"integer\"},\"title\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/teams/:team_id/discussions\"},\"createDiscussionComment\":{\"headers\":{\"accept\":\"application/vnd.github.echo-preview+json\"},\"method\":\"POST\",\"params\":{\"body\":{\"required\":true,\"type\":\"string\"},\"discussion_number\":{\"required\":true,\"type\":\"integer\"},\"team_id\":{\"required\":true,\"type\":\"integer\"}},\"url\":\"/teams/:team_id/discussions/:discussion_number/comments\"},\"delete\":{\"headers\":{\"accept\":\"application/vnd.github.hellcat-preview+json\"},\"method\":\"DELETE\",\"params\":{\"id\":{\"alias\":\"team_id\",\"deprecated\":true},\"team_id\":{\"required\":true,\"type\":\"integer\"}},\"url\":\"/teams/:team_id\"},\"deleteDiscussion\":{\"headers\":{\"accept\":\"application/vnd.github.echo-preview+json\"},\"method\":\"DELETE\",\"params\":{\"discussion_number\":{\"required\":true,\"type\":\"integer\"},\"team_id\":{\"required\":true,\"type\":\"integer\"}},\"url\":\"/teams/:team_id/discussions/:discussion_number\"},\"deleteDiscussionComment\":{\"headers\":{\"accept\":\"application/vnd.github.echo-preview+json\"},\"method\":\"DELETE\",\"params\":{\"comment_number\":{\"required\":true,\"type\":\"integer\"},\"discussion_number\":{\"required\":true,\"type\":\"integer\"},\"team_id\":{\"required\":true,\"type\":\"integer\"}},\"url\":\"/teams/:team_id/discussions/:discussion_number/comments/:comment_number\"},\"get\":{\"headers\":{\"accept\":\"application/vnd.github.hellcat-preview+json\"},\"method\":\"GET\",\"params\":{\"id\":{\"alias\":\"team_id\",\"deprecated\":true},\"team_id\":{\"required\":true,\"type\":\"integer\"}},\"url\":\"/teams/:team_id\"},\"getDiscussion\":{\"headers\":{\"accept\":\"application/vnd.github.echo-preview+json\"},\"method\":\"GET\",\"params\":{\"discussion_number\":{\"required\":true,\"type\":\"integer\"},\"team_id\":{\"required\":true,\"type\":\"integer\"}},\"url\":\"/teams/:team_id/discussions/:discussion_number\"},\"getDiscussionComment\":{\"headers\":{\"accept\":\"application/vnd.github.echo-preview+json\"},\"method\":\"GET\",\"params\":{\"comment_number\":{\"required\":true,\"type\":\"integer\"},\"discussion_number\":{\"required\":true,\"type\":\"integer\"},\"team_id\":{\"required\":true,\"type\":\"integer\"}},\"url\":\"/teams/:team_id/discussions/:discussion_number/comments/:comment_number\"},\"getMember\":{\"method\":\"GET\",\"params\":{\"team_id\":{\"required\":true,\"type\":\"integer\"},\"username\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/teams/:team_id/members/:username\"},\"getMembership\":{\"headers\":{\"accept\":\"application/vnd.github.hellcat-preview+json\"},\"method\":\"GET\",\"params\":{\"id\":{\"alias\":\"team_id\",\"deprecated\":true},\"team_id\":{\"required\":true,\"type\":\"integer\"},\"username\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/teams/:team_id/memberships/:username\"},\"list\":{\"headers\":{\"accept\":\"application/vnd.github.hellcat-preview+json\"},\"method\":\"GET\",\"params\":{\"org\":{\"required\":true,\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"}},\"url\":\"/orgs/:org/teams\"},\"listChild\":{\"headers\":{\"accept\":\"application/vnd.github.hellcat-preview+json\"},\"method\":\"GET\",\"params\":{\"id\":{\"alias\":\"team_id\",\"deprecated\":true},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"team_id\":{\"required\":true,\"type\":\"integer\"}},\"url\":\"/teams/:team_id/teams\"},\"listDiscussionComments\":{\"headers\":{\"accept\":\"application/vnd.github.echo-preview+json\"},\"method\":\"GET\",\"params\":{\"direction\":{\"enum\":[\"asc\",\"desc\"],\"type\":\"string\"},\"discussion_number\":{\"required\":true,\"type\":\"integer\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"team_id\":{\"required\":true,\"type\":\"integer\"}},\"url\":\"/teams/:team_id/discussions/:discussion_number/comments\"},\"listDiscussions\":{\"headers\":{\"accept\":\"application/vnd.github.echo-preview+json\"},\"method\":\"GET\",\"params\":{\"direction\":{\"enum\":[\"asc\",\"desc\"],\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"team_id\":{\"required\":true,\"type\":\"integer\"}},\"url\":\"/teams/:team_id/discussions\"},\"listForAuthenticatedUser\":{\"headers\":{\"accept\":\"application/vnd.github.hellcat-preview+json\"},\"method\":\"GET\",\"params\":{\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"}},\"url\":\"/user/teams\"},\"listMembers\":{\"headers\":{\"accept\":\"application/vnd.github.hellcat-preview+json\"},\"method\":\"GET\",\"params\":{\"id\":{\"alias\":\"team_id\",\"deprecated\":true},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"role\":{\"enum\":[\"member\",\"maintainer\",\"all\"],\"type\":\"string\"},\"team_id\":{\"required\":true,\"type\":\"integer\"}},\"url\":\"/teams/:team_id/members\"},\"listPendingInvitations\":{\"method\":\"GET\",\"params\":{\"id\":{\"alias\":\"team_id\",\"deprecated\":true},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"team_id\":{\"required\":true,\"type\":\"integer\"}},\"url\":\"/teams/:team_id/invitations\"},\"listProjects\":{\"headers\":{\"accept\":\"application/vnd.github.inertia-preview+json\"},\"method\":\"GET\",\"params\":{\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"team_id\":{\"required\":true,\"type\":\"integer\"}},\"url\":\"/teams/:team_id/projects\"},\"listRepos\":{\"headers\":{\"accept\":\"application/vnd.github.hellcat-preview+json\"},\"method\":\"GET\",\"params\":{\"id\":{\"alias\":\"team_id\",\"deprecated\":true},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"team_id\":{\"required\":true,\"type\":\"integer\"}},\"url\":\"/teams/:team_id/repos\"},\"removeMember\":{\"method\":\"DELETE\",\"params\":{\"team_id\":{\"required\":true,\"type\":\"integer\"},\"username\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/teams/:team_id/members/:username\"},\"removeMembership\":{\"headers\":{\"accept\":\"application/vnd.github.hellcat-preview+json\"},\"method\":\"DELETE\",\"params\":{\"id\":{\"alias\":\"team_id\",\"deprecated\":true},\"team_id\":{\"required\":true,\"type\":\"integer\"},\"username\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/teams/:team_id/memberships/:username\"},\"removeProject\":{\"method\":\"DELETE\",\"params\":{\"project_id\":{\"required\":true,\"type\":\"integer\"},\"team_id\":{\"required\":true,\"type\":\"integer\"}},\"url\":\"/teams/:team_id/projects/:project_id\"},\"removeRepo\":{\"headers\":{\"accept\":\"application/vnd.github.hellcat-preview+json\"},\"method\":\"DELETE\",\"params\":{\"id\":{\"alias\":\"team_id\",\"deprecated\":true},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"team_id\":{\"required\":true,\"type\":\"integer\"}},\"url\":\"/teams/:team_id/repos/:owner/:repo\"},\"reviewProject\":{\"headers\":{\"accept\":\"application/vnd.github.inertia-preview+json\"},\"method\":\"GET\",\"params\":{\"project_id\":{\"required\":true,\"type\":\"integer\"},\"team_id\":{\"required\":true,\"type\":\"integer\"}},\"url\":\"/teams/:team_id/projects/:project_id\"},\"update\":{\"headers\":{\"accept\":\"application/vnd.github.hellcat-preview+json\"},\"method\":\"PATCH\",\"params\":{\"description\":{\"type\":\"string\"},\"id\":{\"alias\":\"team_id\",\"deprecated\":true},\"name\":{\"required\":true,\"type\":\"string\"},\"parent_team_id\":{\"type\":\"integer\"},\"permission\":{\"enum\":[\"pull\",\"push\",\"admin\"],\"type\":\"string\"},\"privacy\":{\"type\":\"string\"},\"team_id\":{\"required\":true,\"type\":\"integer\"}},\"url\":\"/teams/:team_id\"},\"updateDiscussion\":{\"headers\":{\"accept\":\"application/vnd.github.echo-preview+json\"},\"method\":\"PATCH\",\"params\":{\"body\":{\"type\":\"string\"},\"discussion_number\":{\"required\":true,\"type\":\"integer\"},\"team_id\":{\"required\":true,\"type\":\"integer\"},\"title\":{\"type\":\"string\"}},\"url\":\"/teams/:team_id/discussions/:discussion_number\"},\"updateDiscussionComment\":{\"headers\":{\"accept\":\"application/vnd.github.echo-preview+json\"},\"method\":\"PATCH\",\"params\":{\"body\":{\"required\":true,\"type\":\"string\"},\"comment_number\":{\"required\":true,\"type\":\"integer\"},\"discussion_number\":{\"required\":true,\"type\":\"integer\"},\"team_id\":{\"required\":true,\"type\":\"integer\"}},\"url\":\"/teams/:team_id/discussions/:discussion_number/comments/:comment_number\"}},\"users\":{\"acceptRepoInvite\":{\"alias\":\"repos.acceptInvitation\",\"deprecated\":\"`users.acceptRepoInvite()` is deprecated, use `repos.acceptInvitation()`\"},\"addEmails\":{\"method\":\"POST\",\"params\":{\"emails\":{\"required\":true,\"type\":\"string[]\"}},\"url\":\"/user/emails\"},\"addRepoToInstallation\":{\"alias\":\"apps.addRepoToInstallation\",\"deprecated\":\"`integrations.addRepoToInstallation()` is deprecated, use `apps.addRepoToInstallation()`\",\"params\":{}},\"block\":{\"headers\":{\"accept\":\"application/vnd.github.giant-sentry-fist-preview+json\"},\"method\":\"PUT\",\"params\":{\"username\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/user/blocks/:username\"},\"blockUser\":{\"alias\":\"users.block\",\"deprecated\":\"`users.blockUser()` is deprecated, use `users.block()`\"},\"checkBlocked\":{\"headers\":{\"accept\":\"application/vnd.github.giant-sentry-fist-preview+json\"},\"method\":\"GET\",\"params\":{\"username\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/user/blocks/:username\"},\"checkBlockedUser\":{\"alias\":\"users.checkBlocked\",\"deprecated\":\"`users.checkBlockedUser()` is deprecated, use `users.checkBlocked()`\"},\"checkFollowing\":{\"method\":\"GET\",\"params\":{\"username\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/user/following/:username\"},\"checkFollowingForUser\":{\"method\":\"GET\",\"params\":{\"target_user\":{\"required\":true,\"type\":\"string\"},\"username\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/users/:username/following/:target_user\"},\"checkIfOneFollowersOther\":{\"alias\":\"users.checkFollowingForUser\",\"deprecated\":\"`users.checkIfOneFollowersOther()` is deprecated, use `users.checkFollowingForUser()`\"},\"createGpgKey\":{\"method\":\"POST\",\"params\":{\"armored_public_key\":{\"type\":\"string\"}},\"url\":\"/user/gpg_keys\"},\"createKey\":{\"alias\":\"users.createPublicKey\",\"deprecated\":\"`users.createKey()` is deprecated, use `users.createPublicKey()`\"},\"createPublicKey\":{\"method\":\"POST\",\"params\":{\"key\":{\"type\":\"string\"},\"title\":{\"type\":\"string\"}},\"url\":\"/user/keys\"},\"declineRepoInvite\":{\"alias\":\"repos.declineInvitation\",\"deprecated\":\"`users.declineRepoInvite()` is deprecated, use `repos.declineInvitation()`\"},\"deleteEmails\":{\"method\":\"DELETE\",\"params\":{\"emails\":{\"required\":true,\"type\":\"string[]\"}},\"url\":\"/user/emails\"},\"deleteGpgKey\":{\"method\":\"DELETE\",\"params\":{\"gpg_key_id\":{\"required\":true,\"type\":\"integer\"},\"id\":{\"alias\":\"gpg_key_id\",\"deprecated\":true}},\"url\":\"/user/gpg_keys/:gpg_key_id\"},\"deleteKey\":{\"alias\":\"users.deletePublicKey\",\"deprecated\":\"`users.deleteKey()` is deprecated, use `users.deletePublicKey()`\"},\"deletePublicKey\":{\"method\":\"DELETE\",\"params\":{\"id\":{\"alias\":\"key_id\",\"deprecated\":true},\"key_id\":{\"required\":true,\"type\":\"integer\"}},\"url\":\"/user/keys/:key_id\"},\"demote\":{\"method\":\"DELETE\",\"params\":{\"username\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/users/:username/site_admin\"},\"editOrgMembership\":{\"alias\":\"orgs.updateMembership\",\"deprecated\":\"`users.editOrgMembership()` is deprecated, use `orgs.updateMembership()`\"},\"follow\":{\"method\":\"PUT\",\"params\":{\"username\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/user/following/:username\"},\"followUser\":{\"alias\":\"users.follow\",\"deprecated\":\"`users.followUser()` is deprecated, use `users.follow()`\"},\"get\":{\"alias\":\"users.getAuthenticated\",\"deprecated\":\"`users.get()` is deprecated, use `users.getAuthenticated()`\"},\"getAll\":{\"alias\":\"users.list\",\"deprecated\":\"`users.getAll()` is deprecated, use `users.list()`\"},\"getAuthenticated\":{\"method\":\"GET\",\"params\":{},\"url\":\"/user\"},\"getBlockedUsers\":{\"alias\":\"users.listBlocked\",\"deprecated\":\"`users.getBlockedUsers()` is deprecated, use `users.listBlocked()`\"},\"getById\":{\"method\":\"GET\",\"params\":{\"id\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/user/:id\"},\"getByUsername\":{\"method\":\"GET\",\"params\":{\"username\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/users/:username\"},\"getContextForUser\":{\"headers\":{\"accept\":\"application/vnd.github.hagar-preview+json\"},\"method\":\"GET\",\"params\":{\"subject_id\":{\"type\":\"string\"},\"subject_type\":{\"enum\":[\"organization\",\"repository\",\"issue\",\"pull_request\"],\"type\":\"string\"},\"username\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/users/:username/hovercard\"},\"getEmails\":{\"alias\":\"users.listEmails\",\"deprecated\":\"`users.getEmails()` is deprecated, use `users.listEmails()`\"},\"getFollowers\":{\"alias\":\"users.listFollowersForAuthenticatedUser\",\"deprecated\":\"`users.getFollowers()` is deprecated, use `users.listFollowersForAuthenticatedUser()`\"},\"getFollowersForUser\":{\"alias\":\"users.listFollowersForUser\",\"deprecated\":\"`users.getFollowersForUser()` is deprecated, use `users.listFollowersForUser()`\"},\"getFollowing\":{\"alias\":\"users.listFollowingForAuthenticatedUser\",\"deprecated\":\"`users.getFollowing()` is deprecated, use `users.listFollowingForAuthenticatedUser()`\"},\"getFollowingForUser\":{\"alias\":\"users.listFollowingForUser\",\"deprecated\":\"`users.getFollowingForUser()` is deprecated, use `users.listFollowingForUser()`\"},\"getForUser\":{\"alias\":\"users.getByUsername\",\"deprecated\":\"`users.getForUser()` is deprecated, use `users.getByUsername()`\"},\"getGpgKey\":{\"method\":\"GET\",\"params\":{\"gpg_key_id\":{\"required\":true,\"type\":\"integer\"},\"id\":{\"alias\":\"gpg_key_id\",\"deprecated\":true}},\"url\":\"/user/gpg_keys/:gpg_key_id\"},\"getGpgKeys\":{\"alias\":\"users.listGpgKeys\",\"deprecated\":\"`users.getGpgKeys()` is deprecated, use `users.listGpgKeys()`\"},\"getGpgKeysForUser\":{\"alias\":\"users.listGpgKeysForUser\",\"deprecated\":\"`users.getGpgKeysForUser()` is deprecated, use `users.listGpgKeysForUser()`\"},\"getInstallationRepos\":{\"alias\":\"apps.listInstallationReposForAuthenticatedUser\",\"deprecated\":\"`users.getInstallationRepos()` is deprecated, use `apps.listInstallationReposForAuthenticatedUser()`\"},\"getInstallations\":{\"alias\":\"apps.listInstallationsForAuthenticatedUser\",\"deprecated\":\"`users.getInstallations()` is deprecated, use `apps.listInstallationsForAuthenticatedUser()`\"},\"getKey\":{\"alias\":\"users.getPublicKey\",\"deprecated\":\"`users.getKey()` is deprecated, use `users.getPublicKey()`\"},\"getKeys\":{\"alias\":\"users.listPublicKeys\",\"deprecated\":\"`users.getKeys()` is deprecated, use `users.listPublicKeys()`\"},\"getKeysForUser\":{\"alias\":\"users.listPublicKeysForUser\",\"deprecated\":\"`users.getKeysForUser()` is deprecated, use `users.listPublicKeysForUser()`\"},\"getMarketplacePurchases\":{\"alias\":\"apps.listMarketplacePurchasesForAuthenticatedUser\",\"deprecated\":\"`users.getMarketplacePurchases()` is deprecated, use `apps.listMarketplacePurchasesForAuthenticatedUser()`\"},\"getMarketplaceStubbedPurchases\":{\"alias\":\"apps.listMarketplacePurchasesForAuthenticatedUserStubbed\",\"deprecated\":\"`users.getMarketplaceStubbedPurchases()` is deprecated, use `apps.listMarketplacePurchasesForAuthenticatedUserStubbed()`\"},\"getOrgMembership\":{\"alias\":\"orgs.getMembershipForAuthenticatedUser\",\"deprecated\":\"`users.getOrgMembership()` is deprecated, use `orgs.getMembershipForAuthenticatedUser()`\"},\"getOrgMemberships\":{\"alias\":\"orgs.listMemberships\",\"deprecated\":\"`users.getOrgMemberships()` is deprecated, use `orgs.listMemberships()`\"},\"getOrgs\":{\"alias\":\"orgs.listForAuthenticatedUser\",\"deprecated\":\"`users.getOrgs()` is deprecated, use `orgs.listForAuthenticatedUser()`\"},\"getPublicEmails\":{\"alias\":\"users.listPublicEmails\",\"deprecated\":\"`users.getPublicEmails()` is deprecated, use `users.listPublicEmails()`\"},\"getPublicKey\":{\"method\":\"GET\",\"params\":{\"id\":{\"alias\":\"key_id\",\"deprecated\":true},\"key_id\":{\"required\":true,\"type\":\"integer\"}},\"url\":\"/user/keys/:key_id\"},\"getRepoInvites\":{\"alias\":\"repos.listInvitationsForAuthenticatedUser\",\"deprecated\":\"`users.getRepoInvites()` is deprecated, use `repos.listInvitationsForAuthenticatedUser()`\"},\"getTeams\":{\"alias\":\"teams.listForAuthenticatedUser\",\"deprecated\":\"`users.getTeams()` is deprecated, use `teams.listForAuthenticatedUser()`\"},\"list\":{\"method\":\"GET\",\"params\":{\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"since\":{\"type\":\"string\"}},\"url\":\"/users\"},\"listBlocked\":{\"headers\":{\"accept\":\"application/vnd.github.giant-sentry-fist-preview+json\"},\"method\":\"GET\",\"params\":{},\"url\":\"/user/blocks\"},\"listEmails\":{\"method\":\"GET\",\"params\":{\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"}},\"url\":\"/user/emails\"},\"listFollowersForAuthenticatedUser\":{\"method\":\"GET\",\"params\":{\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"}},\"url\":\"/user/followers\"},\"listFollowersForUser\":{\"method\":\"GET\",\"params\":{\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"username\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/users/:username/followers\"},\"listFollowingForAuthenticatedUser\":{\"method\":\"GET\",\"params\":{\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"}},\"url\":\"/user/following\"},\"listFollowingForUser\":{\"method\":\"GET\",\"params\":{\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"username\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/users/:username/following\"},\"listGpgKeys\":{\"method\":\"GET\",\"params\":{\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"}},\"url\":\"/user/gpg_keys\"},\"listGpgKeysForUser\":{\"method\":\"GET\",\"params\":{\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"username\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/users/:username/gpg_keys\"},\"listPublicEmails\":{\"method\":\"GET\",\"params\":{\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"}},\"url\":\"/user/public_emails\"},\"listPublicKeys\":{\"method\":\"GET\",\"params\":{\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"}},\"url\":\"/user/keys\"},\"listPublicKeysForUser\":{\"method\":\"GET\",\"params\":{\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"username\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/users/:username/keys\"},\"promote\":{\"method\":\"PUT\",\"params\":{\"username\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/users/:username/site_admin\"},\"removeRepoFromInstallation\":{\"alias\":\"apps.removeRepoFromInstallation\",\"deprecated\":\"`integrations.removeRepoFromInstallation()` is deprecated, use `apps.removeRepoFromInstallation()`\",\"params\":{}},\"suspend\":{\"method\":\"PUT\",\"params\":{\"username\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/users/:username/suspended\"},\"togglePrimaryEmailVisibility\":{\"method\":\"PATCH\",\"params\":{\"email\":{\"required\":true,\"type\":\"string\"},\"visibility\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/user/email/visibility\"},\"unblock\":{\"headers\":{\"accept\":\"application/vnd.github.giant-sentry-fist-preview+json\"},\"method\":\"DELETE\",\"params\":{\"username\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/user/blocks/:username\"},\"unblockUser\":{\"alias\":\"users.unblock\",\"deprecated\":\"`users.unblockUser()` is deprecated, use `users.unblock()`\"},\"unfollow\":{\"method\":\"DELETE\",\"params\":{\"username\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/user/following/:username\"},\"unfollowUser\":{\"alias\":\"users.unfollow\",\"deprecated\":\"`users.unfollowUser()` is deprecated, use `users.unfollow()`\"},\"unsuspend\":{\"method\":\"DELETE\",\"params\":{\"username\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/users/:username/suspended\"},\"update\":{\"alias\":\"users.updateAuthenticated\",\"deprecated\":\"`users.update()` is deprecated, use `users.updateAuthenticated()`\"},\"updateAuthenticated\":{\"method\":\"PATCH\",\"params\":{\"bio\":{\"type\":\"string\"},\"blog\":{\"type\":\"string\"},\"company\":{\"type\":\"string\"},\"email\":{\"type\":\"string\"},\"hireable\":{\"type\":\"boolean\"},\"location\":{\"type\":\"string\"},\"name\":{\"type\":\"string\"}},\"url\":\"/user\"}}}");

/***/ }),

/***/ "./node_modules/@octokit/rest/node_modules/debug/src/browser.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@octokit/rest/node_modules/debug/src/browser.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* eslint-env browser */

/**
 * This is the web browser implementation of `debug()`.
 */
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = localstorage();
/**
 * Colors.
 */

exports.colors = ['#0000CC', '#0000FF', '#0033CC', '#0033FF', '#0066CC', '#0066FF', '#0099CC', '#0099FF', '#00CC00', '#00CC33', '#00CC66', '#00CC99', '#00CCCC', '#00CCFF', '#3300CC', '#3300FF', '#3333CC', '#3333FF', '#3366CC', '#3366FF', '#3399CC', '#3399FF', '#33CC00', '#33CC33', '#33CC66', '#33CC99', '#33CCCC', '#33CCFF', '#6600CC', '#6600FF', '#6633CC', '#6633FF', '#66CC00', '#66CC33', '#9900CC', '#9900FF', '#9933CC', '#9933FF', '#99CC00', '#99CC33', '#CC0000', '#CC0033', '#CC0066', '#CC0099', '#CC00CC', '#CC00FF', '#CC3300', '#CC3333', '#CC3366', '#CC3399', '#CC33CC', '#CC33FF', '#CC6600', '#CC6633', '#CC9900', '#CC9933', '#CCCC00', '#CCCC33', '#FF0000', '#FF0033', '#FF0066', '#FF0099', '#FF00CC', '#FF00FF', '#FF3300', '#FF3333', '#FF3366', '#FF3399', '#FF33CC', '#FF33FF', '#FF6600', '#FF6633', '#FF9900', '#FF9933', '#FFCC00', '#FFCC33'];
/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */
// eslint-disable-next-line complexity

function useColors() {
  // NB: In an Electron preload script, document will be defined but not fully
  // initialized. Since we know we're in Chrome, we'll just detect this case
  // explicitly
  if (typeof window !== 'undefined' && window.process && (window.process.type === 'renderer' || window.process.__nwjs)) {
    return true;
  } // Internet Explorer and Edge do not support colors.


  if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
    return false;
  } // Is webkit? http://stackoverflow.com/a/16459606/376773
  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632


  return typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
  typeof window !== 'undefined' && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
  // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
  typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
  typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
}
/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */


function formatArgs(args) {
  args[0] = (this.useColors ? '%c' : '') + this.namespace + (this.useColors ? ' %c' : ' ') + args[0] + (this.useColors ? '%c ' : ' ') + '+' + module.exports.humanize(this.diff);

  if (!this.useColors) {
    return;
  }

  var c = 'color: ' + this.color;
  args.splice(1, 0, c, 'color: inherit'); // The final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into

  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-zA-Z%]/g, function (match) {
    if (match === '%%') {
      return;
    }

    index++;

    if (match === '%c') {
      // We only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  });
  args.splice(lastC, 0, c);
}
/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */


function log() {
  var _console;

  // This hackery is required for IE8/9, where
  // the `console.log` function doesn't have 'apply'
  return (typeof console === "undefined" ? "undefined" : _typeof(console)) === 'object' && console.log && (_console = console).log.apply(_console, arguments);
}
/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */


function save(namespaces) {
  try {
    if (namespaces) {
      exports.storage.setItem('debug', namespaces);
    } else {
      exports.storage.removeItem('debug');
    }
  } catch (error) {// Swallow
    // XXX (@Qix-) should we be logging these?
  }
}
/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */


function load() {
  var r;

  try {
    r = exports.storage.getItem('debug');
  } catch (error) {} // Swallow
  // XXX (@Qix-) should we be logging these?
  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG


  if (!r && typeof process !== 'undefined' && 'env' in process) {
    r = process.env.DEBUG;
  }

  return r;
}
/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */


function localstorage() {
  try {
    // TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
    // The Browser also has localStorage in the global context.
    return localStorage;
  } catch (error) {// Swallow
    // XXX (@Qix-) should we be logging these?
  }
}

module.exports = __webpack_require__(/*! ./common */ "./node_modules/@octokit/rest/node_modules/debug/src/common.js")(exports);
var formatters = module.exports.formatters;
/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

formatters.j = function (v) {
  try {
    return JSON.stringify(v);
  } catch (error) {
    return '[UnexpectedJSONParseError]: ' + error.message;
  }
};


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/@octokit/rest/node_modules/debug/src/common.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@octokit/rest/node_modules/debug/src/common.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 */
function setup(env) {
  createDebug.debug = createDebug;
  createDebug.default = createDebug;
  createDebug.coerce = coerce;
  createDebug.disable = disable;
  createDebug.enable = enable;
  createDebug.enabled = enabled;
  createDebug.humanize = __webpack_require__(/*! ms */ "./node_modules/@octokit/rest/node_modules/ms/index.js");
  Object.keys(env).forEach(function (key) {
    createDebug[key] = env[key];
  });
  /**
  * Active `debug` instances.
  */

  createDebug.instances = [];
  /**
  * The currently active debug mode names, and names to skip.
  */

  createDebug.names = [];
  createDebug.skips = [];
  /**
  * Map of special "%n" handling functions, for the debug "format" argument.
  *
  * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
  */

  createDebug.formatters = {};
  /**
  * Selects a color for a debug namespace
  * @param {String} namespace The namespace string for the for the debug instance to be colored
  * @return {Number|String} An ANSI color code for the given namespace
  * @api private
  */

  function selectColor(namespace) {
    var hash = 0;

    for (var i = 0; i < namespace.length; i++) {
      hash = (hash << 5) - hash + namespace.charCodeAt(i);
      hash |= 0; // Convert to 32bit integer
    }

    return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
  }

  createDebug.selectColor = selectColor;
  /**
  * Create a debugger with the given `namespace`.
  *
  * @param {String} namespace
  * @return {Function}
  * @api public
  */

  function createDebug(namespace) {
    var prevTime;

    function debug() {
      // Disabled?
      if (!debug.enabled) {
        return;
      }

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var self = debug; // Set `diff` timestamp

      var curr = Number(new Date());
      var ms = curr - (prevTime || curr);
      self.diff = ms;
      self.prev = prevTime;
      self.curr = curr;
      prevTime = curr;
      args[0] = createDebug.coerce(args[0]);

      if (typeof args[0] !== 'string') {
        // Anything else let's inspect with %O
        args.unshift('%O');
      } // Apply any `formatters` transformations


      var index = 0;
      args[0] = args[0].replace(/%([a-zA-Z%])/g, function (match, format) {
        // If we encounter an escaped % then don't increase the array index
        if (match === '%%') {
          return match;
        }

        index++;
        var formatter = createDebug.formatters[format];

        if (typeof formatter === 'function') {
          var val = args[index];
          match = formatter.call(self, val); // Now we need to remove `args[index]` since it's inlined in the `format`

          args.splice(index, 1);
          index--;
        }

        return match;
      }); // Apply env-specific formatting (colors, etc.)

      createDebug.formatArgs.call(self, args);
      var logFn = self.log || createDebug.log;
      logFn.apply(self, args);
    }

    debug.namespace = namespace;
    debug.enabled = createDebug.enabled(namespace);
    debug.useColors = createDebug.useColors();
    debug.color = selectColor(namespace);
    debug.destroy = destroy;
    debug.extend = extend; // Debug.formatArgs = formatArgs;
    // debug.rawLog = rawLog;
    // env-specific initialization logic for debug instances

    if (typeof createDebug.init === 'function') {
      createDebug.init(debug);
    }

    createDebug.instances.push(debug);
    return debug;
  }

  function destroy() {
    var index = createDebug.instances.indexOf(this);

    if (index !== -1) {
      createDebug.instances.splice(index, 1);
      return true;
    }

    return false;
  }

  function extend(namespace, delimiter) {
    return createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);
  }
  /**
  * Enables a debug mode by namespaces. This can include modes
  * separated by a colon and wildcards.
  *
  * @param {String} namespaces
  * @api public
  */


  function enable(namespaces) {
    createDebug.save(namespaces);
    createDebug.names = [];
    createDebug.skips = [];
    var i;
    var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
    var len = split.length;

    for (i = 0; i < len; i++) {
      if (!split[i]) {
        // ignore empty strings
        continue;
      }

      namespaces = split[i].replace(/\*/g, '.*?');

      if (namespaces[0] === '-') {
        createDebug.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
      } else {
        createDebug.names.push(new RegExp('^' + namespaces + '$'));
      }
    }

    for (i = 0; i < createDebug.instances.length; i++) {
      var instance = createDebug.instances[i];
      instance.enabled = createDebug.enabled(instance.namespace);
    }
  }
  /**
  * Disable debug output.
  *
  * @api public
  */


  function disable() {
    createDebug.enable('');
  }
  /**
  * Returns true if the given mode name is enabled, false otherwise.
  *
  * @param {String} name
  * @return {Boolean}
  * @api public
  */


  function enabled(name) {
    if (name[name.length - 1] === '*') {
      return true;
    }

    var i;
    var len;

    for (i = 0, len = createDebug.skips.length; i < len; i++) {
      if (createDebug.skips[i].test(name)) {
        return false;
      }
    }

    for (i = 0, len = createDebug.names.length; i < len; i++) {
      if (createDebug.names[i].test(name)) {
        return true;
      }
    }

    return false;
  }
  /**
  * Coerce `val`.
  *
  * @param {Mixed} val
  * @return {Mixed}
  * @api private
  */


  function coerce(val) {
    if (val instanceof Error) {
      return val.stack || val.message;
    }

    return val;
  }

  createDebug.enable(createDebug.load());
  return createDebug;
}

module.exports = setup;



/***/ }),

/***/ "./node_modules/@octokit/rest/node_modules/ms/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/@octokit/rest/node_modules/ms/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isFinite(val)) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'weeks':
    case 'week':
    case 'w':
      return n * w;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (msAbs >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (msAbs >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (msAbs >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return plural(ms, msAbs, d, 'day');
  }
  if (msAbs >= h) {
    return plural(ms, msAbs, h, 'hour');
  }
  if (msAbs >= m) {
    return plural(ms, msAbs, m, 'minute');
  }
  if (msAbs >= s) {
    return plural(ms, msAbs, s, 'second');
  }
  return ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, msAbs, n, name) {
  var isPlural = msAbs >= n * 1.5;
  return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
}


/***/ }),

/***/ "./node_modules/@octokit/rest/package.json":
/*!*************************************************!*\
  !*** ./node_modules/@octokit/rest/package.json ***!
  \*************************************************/
/*! exports provided: name, version, publishConfig, description, keywords, author, contributors, repository, engines, dependencies, devDependencies, browser, types, scripts, license, files, apidoc, nyc, release, standard, bundlesize, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"@octokit/rest\",\"version\":\"15.18.3\",\"publishConfig\":{\"access\":\"public\"},\"description\":\"GitHub REST API client for Node.js\",\"keywords\":[\"octokit\",\"github\",\"rest\",\"api-client\"],\"author\":\"Gregor Martynus (https://github.com/gr2m)\",\"contributors\":[{\"name\":\"Mike de Boer\",\"email\":\"info@mikedeboer.nl\"},{\"name\":\"Fabian Jakobs\",\"email\":\"fabian@c9.io\"},{\"name\":\"Joe Gallo\",\"email\":\"joe@brassafrax.com\"},{\"name\":\"Gregor Martynus\",\"url\":\"https://github.com/gr2m\"}],\"repository\":\"https://github.com/octokit/rest.js\",\"engines\":{\"node\":\">=4\"},\"dependencies\":{\"before-after-hook\":\"^1.1.0\",\"btoa-lite\":\"^1.0.0\",\"debug\":\"^3.1.0\",\"http-proxy-agent\":\"^2.1.0\",\"https-proxy-agent\":\"^2.2.0\",\"lodash\":\"^4.17.4\",\"node-fetch\":\"^2.1.1\",\"universal-user-agent\":\"^2.0.0\",\"url-template\":\"^2.0.8\"},\"devDependencies\":{\"@gimenete/type-writer\":\"^0.1.3\",\"@gr2m/node-fetch\":\"^2.0.0\",\"@octokit/fixtures-server\":\"^3.0.0\",\"@octokit/routes\":\"15.0.1\",\"@types/node\":\"^10.1.2\",\"apidoc\":\"^0.17.6\",\"bundlesize\":\"^0.17.0\",\"chai\":\"^4.1.2\",\"compression-webpack-plugin\":\"^2.0.0\",\"coveralls\":\"^3.0.0\",\"cypress\":\"^3.0.0\",\"dotenv\":\"^6.0.0\",\"gh-pages-with-token\":\"^1.0.0\",\"glob\":\"^7.1.2\",\"mkdirp\":\"^0.5.1\",\"mocha\":\"^5.0.0\",\"mustache\":\"^3.0.0\",\"nock\":\"^10.0.0\",\"npm-run-all\":\"^4.1.2\",\"nyc\":\"^12.0.1\",\"prettier\":\"^1.14.2\",\"proxy\":\"^0.2.4\",\"proxyquire\":\"^2.0.0\",\"semantic-release\":\"^16.0.0-beta.22\",\"sinon\":\"^6.0.0\",\"sinon-chai\":\"^3.0.0\",\"sort-keys\":\"^2.0.0\",\"standard\":\"^12.0.0\",\"standard-markdown\":\"^5.0.1\",\"string-to-arraybuffer\":\"^1.0.0\",\"typescript\":\"^2.9.2\",\"webpack\":\"^4.0.0\",\"webpack-bundle-analyzer\":\"^3.0.0\",\"webpack-cli\":\"^3.0.0\"},\"browser\":{\"./lib/get-request-agent.js\":false,\"./lib/request/get-buffer-response.js\":\"./lib/request/get-buffer-response-browser.js\"},\"types\":\"index.d.ts\",\"scripts\":{\"coverage\":\"nyc report --reporter=html && open coverage/index.html\",\"coverage:upload\":\"nyc report --reporter=text-lcov | coveralls\",\"pretest\":\"standard && standard-markdown *.md\",\"test\":\"nyc mocha test/mocha-node-setup.js \\\"test/**/*-test.js\\\"\",\"test:browser\":\"cypress run --browser chrome\",\"test:examples\":\"node test/examples.js\",\"build\":\"npm-run-all build:*\",\"prebuild:docs\":\"mkdirp doc/\",\"build:docs\":\"node scripts/generate-api-docs\",\"postbuild:docs\":\"apidoc -i doc/ -o doc/\",\"build:flow\":\"node scripts/generate-flow-types\",\"build:ts\":\"node scripts/generate-typescript-types\",\"prebuild:browser\":\"mkdirp dist/\",\"build:browser\":\"npm-run-all build:browser:*\",\"build:browser:development\":\"webpack --mode development --entry . --output-library=Octokit --output=./dist/octokit-rest.js --profile --json > dist/bundle-stats.json\",\"build:browser:production\":\"webpack --mode production --entry . --plugin=compression-webpack-plugin --output-library=Octokit --output-path=./dist --output-filename=octokit-rest.min.js --devtool source-map\",\"generate-bundle-report\":\"webpack-bundle-analyzer dist/bundle-stats.json --mode=static --no-open --report dist/bundle-report.html\",\"generate-routes\":\"node scripts/generate-routes\",\"prevalidate:ts\":\"npm run -s build:ts\",\"validate:ts\":\"tsc --target es6 index.d.ts\",\"postvalidate:ts\":\"tsc --noEmit --target es6 test/typescript-validate.ts\",\"deploy-docs\":\"gh-pages-with-token -d doc\",\"semantic-release\":\"semantic-release\",\"start-fixtures-server\":\"octokit-fixtures-server\"},\"license\":\"MIT\",\"files\":[\"index.js\",\"index.d.ts\",\"index.js.flow\",\"lib\"],\"apidoc\":{\"template\":{\"withCompare\":false}},\"nyc\":{\"ignore\":[\"examples\",\"test\"]},\"release\":{\"publish\":[\"@semantic-release/npm\",{\"path\":\"@semantic-release/github\",\"assets\":[\"dist/*\",\"!dist/*.map.gz\"]}]},\"standard\":{\"globals\":[\"describe\",\"before\",\"beforeEach\",\"afterEach\",\"after\",\"it\",\"expect\",\"cy\"]},\"bundlesize\":[{\"path\":\"./dist/octokit-rest.min.js.gz\",\"maxSize\":\"33 kB\"}]}");

/***/ }),

/***/ "./node_modules/before-after-hook/index.js":
/*!*************************************************!*\
  !*** ./node_modules/before-after-hook/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var register = __webpack_require__(/*! ./lib/register */ "./node_modules/before-after-hook/lib/register.js")
var addHook = __webpack_require__(/*! ./lib/add */ "./node_modules/before-after-hook/lib/add.js")
var removeHook = __webpack_require__(/*! ./lib/remove */ "./node_modules/before-after-hook/lib/remove.js")

// bind with array of arguments: https://stackoverflow.com/a/21792913
var bind = Function.bind
var bindable = bind.bind(bind)

function bindApi (hook, state, name) {
  var removeHookRef = bindable(removeHook, null).apply(null, name ? [state, null, name] : [state, null])
  hook.api = { remove: removeHookRef }
  hook.remove = removeHookRef

  ;['before', 'error', 'after', 'wrap'].forEach(function (kind) {
    var args = name ? [state, kind, name] : [state, kind]
    hook[kind] = hook.api[kind] = bindable(addHook, null).apply(null, args)
    hook.remove[kind] = hook.api.remove[kind] = bindable(removeHook, null).apply(null, args)
  })
}

function HookSingular () {
  var singularHookName = 'h'
  var singularHookState = {
    registry: {}
  }
  var singularHook = register.bind(null, singularHookState, singularHookName)
  bindApi(singularHook, singularHookState, singularHookName)
  return singularHook
}

function HookCollection () {
  var state = {
    registry: {}
  }

  var hook = register.bind(null, state)
  bindApi(hook, state)

  return hook
}

var collectionHookDeprecationMessageDisplayed = false
function Hook () {
  if (!collectionHookDeprecationMessageDisplayed) {
    console.warn('[before-after-hook]: "Hook()" repurposing warning, use "Hook.Collection()". Read more: https://git.io/upgrade-before-after-hook-to-1.4')
    collectionHookDeprecationMessageDisplayed = true
  }
  return HookCollection()
}

Hook.Singular = HookSingular.bind()
Hook.Collection = HookCollection.bind()

module.exports = Hook
// expose constructors as a named property for TypeScript
module.exports.Hook = Hook
module.exports.Singular = Hook.Singular
module.exports.Collection = Hook.Collection


/***/ }),

/***/ "./node_modules/before-after-hook/lib/add.js":
/*!***************************************************!*\
  !*** ./node_modules/before-after-hook/lib/add.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = addHook

function addHook (state, kind, name, hook) {
  var orig = hook
  if (!state.registry[name]) {
    state.registry[name] = []
  }

  if (kind === 'before') {
    hook = function (method, options) {
      return Promise.resolve()
        .then(orig.bind(null, options))
        .then(method.bind(null, options))
    }
  }

  if (kind === 'after') {
    hook = function (method, options) {
      var result
      return Promise.resolve()
        .then(method.bind(null, options))
        .then(function (result_) {
          result = result_
          return orig(result, options)
        })
        .then(function () {
          return result
        })
    }
  }

  if (kind === 'error') {
    hook = function (method, options) {
      return Promise.resolve()
        .then(method.bind(null, options))
        .catch(function (error) {
          return orig(error, options)
        })
    }
  }

  state.registry[name].push({
    hook: hook,
    orig: orig
  })
}


/***/ }),

/***/ "./node_modules/before-after-hook/lib/register.js":
/*!********************************************************!*\
  !*** ./node_modules/before-after-hook/lib/register.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = register

function register (state, name, options, method) {
  if (arguments.length === 3) {
    method = options
    options = {}
  }

  if (typeof method !== 'function') {
    throw new Error('method for before hook must be a function')
  }

  if (typeof options !== 'object') {
    throw new Error('options for before hook must be an object')
  }

  if (Array.isArray(name)) {
    return name.reverse().reduce(function (callback, name) {
      return register.bind(null, state, name, options, callback)
    }, method)()
  }

  return Promise.resolve()
    .then(function () {
      if (!state.registry[name]) {
        return method(options)
      }

      return (state.registry[name]).reduce(function (method, registered) {
        return registered.hook.bind(null, method, options)
      }, method)()
    })
}


/***/ }),

/***/ "./node_modules/before-after-hook/lib/remove.js":
/*!******************************************************!*\
  !*** ./node_modules/before-after-hook/lib/remove.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = removeHook

function removeHook (state, kind, name, method) {
  if (kind) {
    console.warn(
      'hook.remove.%s(name, method) is deprecated, use hook.remove(name, method)',
      kind
    )
  }
  if (!state.registry[name]) {
    return
  }

  var index = state.registry[name]
    .map(function (registered) { return registered.orig })
    .indexOf(method)

  if (index === -1) {
    return
  }

  state.registry[name].splice(index, 1)
}


/***/ }),

/***/ "./node_modules/btoa-lite/btoa-browser.js":
/*!************************************************!*\
  !*** ./node_modules/btoa-lite/btoa-browser.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function _btoa(str) {
  return btoa(str)
}


/***/ }),

/***/ "./node_modules/lodash/_DataView.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_DataView.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;


/***/ }),

/***/ "./node_modules/lodash/_Hash.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_Hash.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__(/*! ./_hashClear */ "./node_modules/lodash/_hashClear.js"),
    hashDelete = __webpack_require__(/*! ./_hashDelete */ "./node_modules/lodash/_hashDelete.js"),
    hashGet = __webpack_require__(/*! ./_hashGet */ "./node_modules/lodash/_hashGet.js"),
    hashHas = __webpack_require__(/*! ./_hashHas */ "./node_modules/lodash/_hashHas.js"),
    hashSet = __webpack_require__(/*! ./_hashSet */ "./node_modules/lodash/_hashSet.js");

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),

/***/ "./node_modules/lodash/_ListCache.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_ListCache.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__(/*! ./_listCacheClear */ "./node_modules/lodash/_listCacheClear.js"),
    listCacheDelete = __webpack_require__(/*! ./_listCacheDelete */ "./node_modules/lodash/_listCacheDelete.js"),
    listCacheGet = __webpack_require__(/*! ./_listCacheGet */ "./node_modules/lodash/_listCacheGet.js"),
    listCacheHas = __webpack_require__(/*! ./_listCacheHas */ "./node_modules/lodash/_listCacheHas.js"),
    listCacheSet = __webpack_require__(/*! ./_listCacheSet */ "./node_modules/lodash/_listCacheSet.js");

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),

/***/ "./node_modules/lodash/_Map.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/_Map.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),

/***/ "./node_modules/lodash/_MapCache.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_MapCache.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(/*! ./_mapCacheClear */ "./node_modules/lodash/_mapCacheClear.js"),
    mapCacheDelete = __webpack_require__(/*! ./_mapCacheDelete */ "./node_modules/lodash/_mapCacheDelete.js"),
    mapCacheGet = __webpack_require__(/*! ./_mapCacheGet */ "./node_modules/lodash/_mapCacheGet.js"),
    mapCacheHas = __webpack_require__(/*! ./_mapCacheHas */ "./node_modules/lodash/_mapCacheHas.js"),
    mapCacheSet = __webpack_require__(/*! ./_mapCacheSet */ "./node_modules/lodash/_mapCacheSet.js");

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),

/***/ "./node_modules/lodash/_Promise.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_Promise.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;


/***/ }),

/***/ "./node_modules/lodash/_Set.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/_Set.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ }),

/***/ "./node_modules/lodash/_SetCache.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_SetCache.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(/*! ./_MapCache */ "./node_modules/lodash/_MapCache.js"),
    setCacheAdd = __webpack_require__(/*! ./_setCacheAdd */ "./node_modules/lodash/_setCacheAdd.js"),
    setCacheHas = __webpack_require__(/*! ./_setCacheHas */ "./node_modules/lodash/_setCacheHas.js");

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

module.exports = SetCache;


/***/ }),

/***/ "./node_modules/lodash/_Stack.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_Stack.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    stackClear = __webpack_require__(/*! ./_stackClear */ "./node_modules/lodash/_stackClear.js"),
    stackDelete = __webpack_require__(/*! ./_stackDelete */ "./node_modules/lodash/_stackDelete.js"),
    stackGet = __webpack_require__(/*! ./_stackGet */ "./node_modules/lodash/_stackGet.js"),
    stackHas = __webpack_require__(/*! ./_stackHas */ "./node_modules/lodash/_stackHas.js"),
    stackSet = __webpack_require__(/*! ./_stackSet */ "./node_modules/lodash/_stackSet.js");

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;


/***/ }),

/***/ "./node_modules/lodash/_Symbol.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ "./node_modules/lodash/_Uint8Array.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_Uint8Array.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;


/***/ }),

/***/ "./node_modules/lodash/_WeakMap.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_WeakMap.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;


/***/ }),

/***/ "./node_modules/lodash/_apply.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_apply.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

module.exports = apply;


/***/ }),

/***/ "./node_modules/lodash/_arrayEach.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_arrayEach.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

module.exports = arrayEach;


/***/ }),

/***/ "./node_modules/lodash/_arrayFilter.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_arrayFilter.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = arrayFilter;


/***/ }),

/***/ "./node_modules/lodash/_arrayIncludes.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_arrayIncludes.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIndexOf = __webpack_require__(/*! ./_baseIndexOf */ "./node_modules/lodash/_baseIndexOf.js");

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length && baseIndexOf(array, value, 0) > -1;
}

module.exports = arrayIncludes;


/***/ }),

/***/ "./node_modules/lodash/_arrayIncludesWith.js":
/*!***************************************************!*\
  !*** ./node_modules/lodash/_arrayIncludesWith.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This function is like `arrayIncludes` except that it accepts a comparator.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludesWith(array, value, comparator) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }
  return false;
}

module.exports = arrayIncludesWith;


/***/ }),

/***/ "./node_modules/lodash/_arrayLikeKeys.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_arrayLikeKeys.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__(/*! ./_baseTimes */ "./node_modules/lodash/_baseTimes.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/lodash/_isIndex.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "./node_modules/lodash/isTypedArray.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),

/***/ "./node_modules/lodash/_arrayMap.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_arrayMap.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),

/***/ "./node_modules/lodash/_arrayPush.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_arrayPush.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;


/***/ }),

/***/ "./node_modules/lodash/_arraySome.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_arraySome.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

module.exports = arraySome;


/***/ }),

/***/ "./node_modules/lodash/_assignMergeValue.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_assignMergeValue.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "./node_modules/lodash/_baseAssignValue.js"),
    eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js");

/**
 * This function is like `assignValue` except that it doesn't assign
 * `undefined` values.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignMergeValue(object, key, value) {
  if ((value !== undefined && !eq(object[key], value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignMergeValue;


/***/ }),

/***/ "./node_modules/lodash/_assignValue.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_assignValue.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "./node_modules/lodash/_baseAssignValue.js"),
    eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;


/***/ }),

/***/ "./node_modules/lodash/_assocIndexOf.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_assocIndexOf.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js");

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),

/***/ "./node_modules/lodash/_baseAssign.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseAssign.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(/*! ./_copyObject */ "./node_modules/lodash/_copyObject.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}

module.exports = baseAssign;


/***/ }),

/***/ "./node_modules/lodash/_baseAssignIn.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseAssignIn.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(/*! ./_copyObject */ "./node_modules/lodash/_copyObject.js"),
    keysIn = __webpack_require__(/*! ./keysIn */ "./node_modules/lodash/keysIn.js");

/**
 * The base implementation of `_.assignIn` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssignIn(object, source) {
  return object && copyObject(source, keysIn(source), object);
}

module.exports = baseAssignIn;


/***/ }),

/***/ "./node_modules/lodash/_baseAssignValue.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseAssignValue.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ./_defineProperty */ "./node_modules/lodash/_defineProperty.js");

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;


/***/ }),

/***/ "./node_modules/lodash/_baseClone.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseClone.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(/*! ./_Stack */ "./node_modules/lodash/_Stack.js"),
    arrayEach = __webpack_require__(/*! ./_arrayEach */ "./node_modules/lodash/_arrayEach.js"),
    assignValue = __webpack_require__(/*! ./_assignValue */ "./node_modules/lodash/_assignValue.js"),
    baseAssign = __webpack_require__(/*! ./_baseAssign */ "./node_modules/lodash/_baseAssign.js"),
    baseAssignIn = __webpack_require__(/*! ./_baseAssignIn */ "./node_modules/lodash/_baseAssignIn.js"),
    cloneBuffer = __webpack_require__(/*! ./_cloneBuffer */ "./node_modules/lodash/_cloneBuffer.js"),
    copyArray = __webpack_require__(/*! ./_copyArray */ "./node_modules/lodash/_copyArray.js"),
    copySymbols = __webpack_require__(/*! ./_copySymbols */ "./node_modules/lodash/_copySymbols.js"),
    copySymbolsIn = __webpack_require__(/*! ./_copySymbolsIn */ "./node_modules/lodash/_copySymbolsIn.js"),
    getAllKeys = __webpack_require__(/*! ./_getAllKeys */ "./node_modules/lodash/_getAllKeys.js"),
    getAllKeysIn = __webpack_require__(/*! ./_getAllKeysIn */ "./node_modules/lodash/_getAllKeysIn.js"),
    getTag = __webpack_require__(/*! ./_getTag */ "./node_modules/lodash/_getTag.js"),
    initCloneArray = __webpack_require__(/*! ./_initCloneArray */ "./node_modules/lodash/_initCloneArray.js"),
    initCloneByTag = __webpack_require__(/*! ./_initCloneByTag */ "./node_modules/lodash/_initCloneByTag.js"),
    initCloneObject = __webpack_require__(/*! ./_initCloneObject */ "./node_modules/lodash/_initCloneObject.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isMap = __webpack_require__(/*! ./isMap */ "./node_modules/lodash/isMap.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    isSet = __webpack_require__(/*! ./isSet */ "./node_modules/lodash/isSet.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] =
cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
cloneableTags[boolTag] = cloneableTags[dateTag] =
cloneableTags[float32Tag] = cloneableTags[float64Tag] =
cloneableTags[int8Tag] = cloneableTags[int16Tag] =
cloneableTags[int32Tag] = cloneableTags[mapTag] =
cloneableTags[numberTag] = cloneableTags[objectTag] =
cloneableTags[regexpTag] = cloneableTags[setTag] =
cloneableTags[stringTag] = cloneableTags[symbolTag] =
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] =
cloneableTags[weakMapTag] = false;

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, bitmask, customizer, key, object, stack) {
  var result,
      isDeep = bitmask & CLONE_DEEP_FLAG,
      isFlat = bitmask & CLONE_FLAT_FLAG,
      isFull = bitmask & CLONE_SYMBOLS_FLAG;

  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
      result = (isFlat || isFunc) ? {} : initCloneObject(value);
      if (!isDeep) {
        return isFlat
          ? copySymbolsIn(value, baseAssignIn(result, value))
          : copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  if (isSet(value)) {
    value.forEach(function(subValue) {
      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
    });
  } else if (isMap(value)) {
    value.forEach(function(subValue, key) {
      result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
    });
  }

  var keysFunc = isFull
    ? (isFlat ? getAllKeysIn : getAllKeys)
    : (isFlat ? keysIn : keys);

  var props = isArr ? undefined : keysFunc(value);
  arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
  });
  return result;
}

module.exports = baseClone;


/***/ }),

/***/ "./node_modules/lodash/_baseCreate.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseCreate.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

module.exports = baseCreate;


/***/ }),

/***/ "./node_modules/lodash/_baseFindIndex.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_baseFindIndex.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

module.exports = baseFindIndex;


/***/ }),

/***/ "./node_modules/lodash/_baseFlatten.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseFlatten.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(/*! ./_arrayPush */ "./node_modules/lodash/_arrayPush.js"),
    isFlattenable = __webpack_require__(/*! ./_isFlattenable */ "./node_modules/lodash/_isFlattenable.js");

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

module.exports = baseFlatten;


/***/ }),

/***/ "./node_modules/lodash/_baseFor.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseFor.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var createBaseFor = __webpack_require__(/*! ./_createBaseFor */ "./node_modules/lodash/_createBaseFor.js");

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

module.exports = baseFor;


/***/ }),

/***/ "./node_modules/lodash/_baseForOwn.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseForOwn.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseFor = __webpack_require__(/*! ./_baseFor */ "./node_modules/lodash/_baseFor.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}

module.exports = baseForOwn;


/***/ }),

/***/ "./node_modules/lodash/_baseGet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseGet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(/*! ./_castPath */ "./node_modules/lodash/_castPath.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

module.exports = baseGet;


/***/ }),

/***/ "./node_modules/lodash/_baseGetAllKeys.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_baseGetAllKeys.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(/*! ./_arrayPush */ "./node_modules/lodash/_arrayPush.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js");

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

module.exports = baseGetAllKeys;


/***/ }),

/***/ "./node_modules/lodash/_baseGetTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    getRawTag = __webpack_require__(/*! ./_getRawTag */ "./node_modules/lodash/_getRawTag.js"),
    objectToString = __webpack_require__(/*! ./_objectToString */ "./node_modules/lodash/_objectToString.js");

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ "./node_modules/lodash/_baseHasIn.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseHasIn.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

module.exports = baseHasIn;


/***/ }),

/***/ "./node_modules/lodash/_baseIndexOf.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseIndexOf.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseFindIndex = __webpack_require__(/*! ./_baseFindIndex */ "./node_modules/lodash/_baseFindIndex.js"),
    baseIsNaN = __webpack_require__(/*! ./_baseIsNaN */ "./node_modules/lodash/_baseIsNaN.js"),
    strictIndexOf = __webpack_require__(/*! ./_strictIndexOf */ "./node_modules/lodash/_strictIndexOf.js");

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  return value === value
    ? strictIndexOf(array, value, fromIndex)
    : baseFindIndex(array, baseIsNaN, fromIndex);
}

module.exports = baseIndexOf;


/***/ }),

/***/ "./node_modules/lodash/_baseIntersection.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_baseIntersection.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(/*! ./_SetCache */ "./node_modules/lodash/_SetCache.js"),
    arrayIncludes = __webpack_require__(/*! ./_arrayIncludes */ "./node_modules/lodash/_arrayIncludes.js"),
    arrayIncludesWith = __webpack_require__(/*! ./_arrayIncludesWith */ "./node_modules/lodash/_arrayIncludesWith.js"),
    arrayMap = __webpack_require__(/*! ./_arrayMap */ "./node_modules/lodash/_arrayMap.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "./node_modules/lodash/_baseUnary.js"),
    cacheHas = __webpack_require__(/*! ./_cacheHas */ "./node_modules/lodash/_cacheHas.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMin = Math.min;

/**
 * The base implementation of methods like `_.intersection`, without support
 * for iteratee shorthands, that accepts an array of arrays to inspect.
 *
 * @private
 * @param {Array} arrays The arrays to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new array of shared values.
 */
function baseIntersection(arrays, iteratee, comparator) {
  var includes = comparator ? arrayIncludesWith : arrayIncludes,
      length = arrays[0].length,
      othLength = arrays.length,
      othIndex = othLength,
      caches = Array(othLength),
      maxLength = Infinity,
      result = [];

  while (othIndex--) {
    var array = arrays[othIndex];
    if (othIndex && iteratee) {
      array = arrayMap(array, baseUnary(iteratee));
    }
    maxLength = nativeMin(array.length, maxLength);
    caches[othIndex] = !comparator && (iteratee || (length >= 120 && array.length >= 120))
      ? new SetCache(othIndex && array)
      : undefined;
  }
  array = arrays[0];

  var index = -1,
      seen = caches[0];

  outer:
  while (++index < length && result.length < maxLength) {
    var value = array[index],
        computed = iteratee ? iteratee(value) : value;

    value = (comparator || value !== 0) ? value : 0;
    if (!(seen
          ? cacheHas(seen, computed)
          : includes(result, computed, comparator)
        )) {
      othIndex = othLength;
      while (--othIndex) {
        var cache = caches[othIndex];
        if (!(cache
              ? cacheHas(cache, computed)
              : includes(arrays[othIndex], computed, comparator))
            ) {
          continue outer;
        }
      }
      if (seen) {
        seen.push(computed);
      }
      result.push(value);
    }
  }
  return result;
}

module.exports = baseIntersection;


/***/ }),

/***/ "./node_modules/lodash/_baseIsArguments.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseIsArguments.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),

/***/ "./node_modules/lodash/_baseIsEqual.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseIsEqual.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqualDeep = __webpack_require__(/*! ./_baseIsEqualDeep */ "./node_modules/lodash/_baseIsEqualDeep.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

module.exports = baseIsEqual;


/***/ }),

/***/ "./node_modules/lodash/_baseIsEqualDeep.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseIsEqualDeep.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(/*! ./_Stack */ "./node_modules/lodash/_Stack.js"),
    equalArrays = __webpack_require__(/*! ./_equalArrays */ "./node_modules/lodash/_equalArrays.js"),
    equalByTag = __webpack_require__(/*! ./_equalByTag */ "./node_modules/lodash/_equalByTag.js"),
    equalObjects = __webpack_require__(/*! ./_equalObjects */ "./node_modules/lodash/_equalObjects.js"),
    getTag = __webpack_require__(/*! ./_getTag */ "./node_modules/lodash/_getTag.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "./node_modules/lodash/isTypedArray.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

module.exports = baseIsEqualDeep;


/***/ }),

/***/ "./node_modules/lodash/_baseIsMap.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseIsMap.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getTag = __webpack_require__(/*! ./_getTag */ "./node_modules/lodash/_getTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var mapTag = '[object Map]';

/**
 * The base implementation of `_.isMap` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 */
function baseIsMap(value) {
  return isObjectLike(value) && getTag(value) == mapTag;
}

module.exports = baseIsMap;


/***/ }),

/***/ "./node_modules/lodash/_baseIsMatch.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseIsMatch.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(/*! ./_Stack */ "./node_modules/lodash/_Stack.js"),
    baseIsEqual = __webpack_require__(/*! ./_baseIsEqual */ "./node_modules/lodash/_baseIsEqual.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

module.exports = baseIsMatch;


/***/ }),

/***/ "./node_modules/lodash/_baseIsNaN.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseIsNaN.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

module.exports = baseIsNaN;


/***/ }),

/***/ "./node_modules/lodash/_baseIsNative.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseIsNative.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
    isMasked = __webpack_require__(/*! ./_isMasked */ "./node_modules/lodash/_isMasked.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    toSource = __webpack_require__(/*! ./_toSource */ "./node_modules/lodash/_toSource.js");

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),

/***/ "./node_modules/lodash/_baseIsSet.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseIsSet.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getTag = __webpack_require__(/*! ./_getTag */ "./node_modules/lodash/_getTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var setTag = '[object Set]';

/**
 * The base implementation of `_.isSet` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 */
function baseIsSet(value) {
  return isObjectLike(value) && getTag(value) == setTag;
}

module.exports = baseIsSet;


/***/ }),

/***/ "./node_modules/lodash/_baseIsTypedArray.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_baseIsTypedArray.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),

/***/ "./node_modules/lodash/_baseIteratee.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseIteratee.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseMatches = __webpack_require__(/*! ./_baseMatches */ "./node_modules/lodash/_baseMatches.js"),
    baseMatchesProperty = __webpack_require__(/*! ./_baseMatchesProperty */ "./node_modules/lodash/_baseMatchesProperty.js"),
    identity = __webpack_require__(/*! ./identity */ "./node_modules/lodash/identity.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    property = __webpack_require__(/*! ./property */ "./node_modules/lodash/property.js");

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == 'object') {
    return isArray(value)
      ? baseMatchesProperty(value[0], value[1])
      : baseMatches(value);
  }
  return property(value);
}

module.exports = baseIteratee;


/***/ }),

/***/ "./node_modules/lodash/_baseKeys.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseKeys.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/lodash/_isPrototype.js"),
    nativeKeys = __webpack_require__(/*! ./_nativeKeys */ "./node_modules/lodash/_nativeKeys.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),

/***/ "./node_modules/lodash/_baseKeysIn.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseKeysIn.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/lodash/_isPrototype.js"),
    nativeKeysIn = __webpack_require__(/*! ./_nativeKeysIn */ "./node_modules/lodash/_nativeKeysIn.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeysIn;


/***/ }),

/***/ "./node_modules/lodash/_baseMatches.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseMatches.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsMatch = __webpack_require__(/*! ./_baseIsMatch */ "./node_modules/lodash/_baseIsMatch.js"),
    getMatchData = __webpack_require__(/*! ./_getMatchData */ "./node_modules/lodash/_getMatchData.js"),
    matchesStrictComparable = __webpack_require__(/*! ./_matchesStrictComparable */ "./node_modules/lodash/_matchesStrictComparable.js");

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}

module.exports = baseMatches;


/***/ }),

/***/ "./node_modules/lodash/_baseMatchesProperty.js":
/*!*****************************************************!*\
  !*** ./node_modules/lodash/_baseMatchesProperty.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqual = __webpack_require__(/*! ./_baseIsEqual */ "./node_modules/lodash/_baseIsEqual.js"),
    get = __webpack_require__(/*! ./get */ "./node_modules/lodash/get.js"),
    hasIn = __webpack_require__(/*! ./hasIn */ "./node_modules/lodash/hasIn.js"),
    isKey = __webpack_require__(/*! ./_isKey */ "./node_modules/lodash/_isKey.js"),
    isStrictComparable = __webpack_require__(/*! ./_isStrictComparable */ "./node_modules/lodash/_isStrictComparable.js"),
    matchesStrictComparable = __webpack_require__(/*! ./_matchesStrictComparable */ "./node_modules/lodash/_matchesStrictComparable.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn(object, path)
      : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}

module.exports = baseMatchesProperty;


/***/ }),

/***/ "./node_modules/lodash/_baseMerge.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseMerge.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(/*! ./_Stack */ "./node_modules/lodash/_Stack.js"),
    assignMergeValue = __webpack_require__(/*! ./_assignMergeValue */ "./node_modules/lodash/_assignMergeValue.js"),
    baseFor = __webpack_require__(/*! ./_baseFor */ "./node_modules/lodash/_baseFor.js"),
    baseMergeDeep = __webpack_require__(/*! ./_baseMergeDeep */ "./node_modules/lodash/_baseMergeDeep.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    keysIn = __webpack_require__(/*! ./keysIn */ "./node_modules/lodash/keysIn.js"),
    safeGet = __webpack_require__(/*! ./_safeGet */ "./node_modules/lodash/_safeGet.js");

/**
 * The base implementation of `_.merge` without support for multiple sources.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} [customizer] The function to customize merged values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMerge(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }
  baseFor(source, function(srcValue, key) {
    stack || (stack = new Stack);
    if (isObject(srcValue)) {
      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
    }
    else {
      var newValue = customizer
        ? customizer(safeGet(object, key), srcValue, (key + ''), object, source, stack)
        : undefined;

      if (newValue === undefined) {
        newValue = srcValue;
      }
      assignMergeValue(object, key, newValue);
    }
  }, keysIn);
}

module.exports = baseMerge;


/***/ }),

/***/ "./node_modules/lodash/_baseMergeDeep.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_baseMergeDeep.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assignMergeValue = __webpack_require__(/*! ./_assignMergeValue */ "./node_modules/lodash/_assignMergeValue.js"),
    cloneBuffer = __webpack_require__(/*! ./_cloneBuffer */ "./node_modules/lodash/_cloneBuffer.js"),
    cloneTypedArray = __webpack_require__(/*! ./_cloneTypedArray */ "./node_modules/lodash/_cloneTypedArray.js"),
    copyArray = __webpack_require__(/*! ./_copyArray */ "./node_modules/lodash/_copyArray.js"),
    initCloneObject = __webpack_require__(/*! ./_initCloneObject */ "./node_modules/lodash/_initCloneObject.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isArrayLikeObject = __webpack_require__(/*! ./isArrayLikeObject */ "./node_modules/lodash/isArrayLikeObject.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    isPlainObject = __webpack_require__(/*! ./isPlainObject */ "./node_modules/lodash/isPlainObject.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "./node_modules/lodash/isTypedArray.js"),
    safeGet = __webpack_require__(/*! ./_safeGet */ "./node_modules/lodash/_safeGet.js"),
    toPlainObject = __webpack_require__(/*! ./toPlainObject */ "./node_modules/lodash/toPlainObject.js");

/**
 * A specialized version of `baseMerge` for arrays and objects which performs
 * deep merges and tracks traversed objects enabling objects with circular
 * references to be merged.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {string} key The key of the value to merge.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} mergeFunc The function to merge values.
 * @param {Function} [customizer] The function to customize assigned values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = safeGet(object, key),
      srcValue = safeGet(source, key),
      stacked = stack.get(srcValue);

  if (stacked) {
    assignMergeValue(object, key, stacked);
    return;
  }
  var newValue = customizer
    ? customizer(objValue, srcValue, (key + ''), object, source, stack)
    : undefined;

  var isCommon = newValue === undefined;

  if (isCommon) {
    var isArr = isArray(srcValue),
        isBuff = !isArr && isBuffer(srcValue),
        isTyped = !isArr && !isBuff && isTypedArray(srcValue);

    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if (isArray(objValue)) {
        newValue = objValue;
      }
      else if (isArrayLikeObject(objValue)) {
        newValue = copyArray(objValue);
      }
      else if (isBuff) {
        isCommon = false;
        newValue = cloneBuffer(srcValue, true);
      }
      else if (isTyped) {
        isCommon = false;
        newValue = cloneTypedArray(srcValue, true);
      }
      else {
        newValue = [];
      }
    }
    else if (isPlainObject(srcValue) || isArguments(srcValue)) {
      newValue = objValue;
      if (isArguments(objValue)) {
        newValue = toPlainObject(objValue);
      }
      else if (!isObject(objValue) || isFunction(objValue)) {
        newValue = initCloneObject(srcValue);
      }
    }
    else {
      isCommon = false;
    }
  }
  if (isCommon) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack['delete'](srcValue);
  }
  assignMergeValue(object, key, newValue);
}

module.exports = baseMergeDeep;


/***/ }),

/***/ "./node_modules/lodash/_basePick.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_basePick.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var basePickBy = __webpack_require__(/*! ./_basePickBy */ "./node_modules/lodash/_basePickBy.js"),
    hasIn = __webpack_require__(/*! ./hasIn */ "./node_modules/lodash/hasIn.js");

/**
 * The base implementation of `_.pick` without support for individual
 * property identifiers.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} paths The property paths to pick.
 * @returns {Object} Returns the new object.
 */
function basePick(object, paths) {
  return basePickBy(object, paths, function(value, path) {
    return hasIn(object, path);
  });
}

module.exports = basePick;


/***/ }),

/***/ "./node_modules/lodash/_basePickBy.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_basePickBy.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(/*! ./_baseGet */ "./node_modules/lodash/_baseGet.js"),
    baseSet = __webpack_require__(/*! ./_baseSet */ "./node_modules/lodash/_baseSet.js"),
    castPath = __webpack_require__(/*! ./_castPath */ "./node_modules/lodash/_castPath.js");

/**
 * The base implementation of  `_.pickBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} paths The property paths to pick.
 * @param {Function} predicate The function invoked per property.
 * @returns {Object} Returns the new object.
 */
function basePickBy(object, paths, predicate) {
  var index = -1,
      length = paths.length,
      result = {};

  while (++index < length) {
    var path = paths[index],
        value = baseGet(object, path);

    if (predicate(value, path)) {
      baseSet(result, castPath(path, object), value);
    }
  }
  return result;
}

module.exports = basePickBy;


/***/ }),

/***/ "./node_modules/lodash/_baseProperty.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseProperty.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

module.exports = baseProperty;


/***/ }),

/***/ "./node_modules/lodash/_basePropertyDeep.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_basePropertyDeep.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(/*! ./_baseGet */ "./node_modules/lodash/_baseGet.js");

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function(object) {
    return baseGet(object, path);
  };
}

module.exports = basePropertyDeep;


/***/ }),

/***/ "./node_modules/lodash/_baseRest.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseRest.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__(/*! ./identity */ "./node_modules/lodash/identity.js"),
    overRest = __webpack_require__(/*! ./_overRest */ "./node_modules/lodash/_overRest.js"),
    setToString = __webpack_require__(/*! ./_setToString */ "./node_modules/lodash/_setToString.js");

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

module.exports = baseRest;


/***/ }),

/***/ "./node_modules/lodash/_baseSet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseSet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__(/*! ./_assignValue */ "./node_modules/lodash/_assignValue.js"),
    castPath = __webpack_require__(/*! ./_castPath */ "./node_modules/lodash/_castPath.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/lodash/_isIndex.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");

/**
 * The base implementation of `_.set`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @param {Function} [customizer] The function to customize path creation.
 * @returns {Object} Returns `object`.
 */
function baseSet(object, path, value, customizer) {
  if (!isObject(object)) {
    return object;
  }
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      lastIndex = length - 1,
      nested = object;

  while (nested != null && ++index < length) {
    var key = toKey(path[index]),
        newValue = value;

    if (index != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : undefined;
      if (newValue === undefined) {
        newValue = isObject(objValue)
          ? objValue
          : (isIndex(path[index + 1]) ? [] : {});
      }
    }
    assignValue(nested, key, newValue);
    nested = nested[key];
  }
  return object;
}

module.exports = baseSet;


/***/ }),

/***/ "./node_modules/lodash/_baseSetToString.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseSetToString.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var constant = __webpack_require__(/*! ./constant */ "./node_modules/lodash/constant.js"),
    defineProperty = __webpack_require__(/*! ./_defineProperty */ "./node_modules/lodash/_defineProperty.js"),
    identity = __webpack_require__(/*! ./identity */ "./node_modules/lodash/identity.js");

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

module.exports = baseSetToString;


/***/ }),

/***/ "./node_modules/lodash/_baseSlice.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseSlice.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice(array, start, end) {
  var index = -1,
      length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : ((end - start) >>> 0);
  start >>>= 0;

  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}

module.exports = baseSlice;


/***/ }),

/***/ "./node_modules/lodash/_baseTimes.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseTimes.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),

/***/ "./node_modules/lodash/_baseToString.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseToString.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    arrayMap = __webpack_require__(/*! ./_arrayMap */ "./node_modules/lodash/_arrayMap.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ }),

/***/ "./node_modules/lodash/_baseUnary.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseUnary.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),

/***/ "./node_modules/lodash/_baseUniq.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseUniq.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(/*! ./_SetCache */ "./node_modules/lodash/_SetCache.js"),
    arrayIncludes = __webpack_require__(/*! ./_arrayIncludes */ "./node_modules/lodash/_arrayIncludes.js"),
    arrayIncludesWith = __webpack_require__(/*! ./_arrayIncludesWith */ "./node_modules/lodash/_arrayIncludesWith.js"),
    cacheHas = __webpack_require__(/*! ./_cacheHas */ "./node_modules/lodash/_cacheHas.js"),
    createSet = __webpack_require__(/*! ./_createSet */ "./node_modules/lodash/_createSet.js"),
    setToArray = __webpack_require__(/*! ./_setToArray */ "./node_modules/lodash/_setToArray.js");

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * The base implementation of `_.uniqBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 */
function baseUniq(array, iteratee, comparator) {
  var index = -1,
      includes = arrayIncludes,
      length = array.length,
      isCommon = true,
      result = [],
      seen = result;

  if (comparator) {
    isCommon = false;
    includes = arrayIncludesWith;
  }
  else if (length >= LARGE_ARRAY_SIZE) {
    var set = iteratee ? null : createSet(array);
    if (set) {
      return setToArray(set);
    }
    isCommon = false;
    includes = cacheHas;
    seen = new SetCache;
  }
  else {
    seen = iteratee ? [] : result;
  }
  outer:
  while (++index < length) {
    var value = array[index],
        computed = iteratee ? iteratee(value) : value;

    value = (comparator || value !== 0) ? value : 0;
    if (isCommon && computed === computed) {
      var seenIndex = seen.length;
      while (seenIndex--) {
        if (seen[seenIndex] === computed) {
          continue outer;
        }
      }
      if (iteratee) {
        seen.push(computed);
      }
      result.push(value);
    }
    else if (!includes(seen, computed, comparator)) {
      if (seen !== result) {
        seen.push(computed);
      }
      result.push(value);
    }
  }
  return result;
}

module.exports = baseUniq;


/***/ }),

/***/ "./node_modules/lodash/_baseUnset.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseUnset.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(/*! ./_castPath */ "./node_modules/lodash/_castPath.js"),
    last = __webpack_require__(/*! ./last */ "./node_modules/lodash/last.js"),
    parent = __webpack_require__(/*! ./_parent */ "./node_modules/lodash/_parent.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");

/**
 * The base implementation of `_.unset`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The property path to unset.
 * @returns {boolean} Returns `true` if the property is deleted, else `false`.
 */
function baseUnset(object, path) {
  path = castPath(path, object);
  object = parent(object, path);
  return object == null || delete object[toKey(last(path))];
}

module.exports = baseUnset;


/***/ }),

/***/ "./node_modules/lodash/_cacheHas.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_cacheHas.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

module.exports = cacheHas;


/***/ }),

/***/ "./node_modules/lodash/_castArrayLikeObject.js":
/*!*****************************************************!*\
  !*** ./node_modules/lodash/_castArrayLikeObject.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isArrayLikeObject = __webpack_require__(/*! ./isArrayLikeObject */ "./node_modules/lodash/isArrayLikeObject.js");

/**
 * Casts `value` to an empty array if it's not an array like object.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Array|Object} Returns the cast array-like object.
 */
function castArrayLikeObject(value) {
  return isArrayLikeObject(value) ? value : [];
}

module.exports = castArrayLikeObject;


/***/ }),

/***/ "./node_modules/lodash/_castPath.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_castPath.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isKey = __webpack_require__(/*! ./_isKey */ "./node_modules/lodash/_isKey.js"),
    stringToPath = __webpack_require__(/*! ./_stringToPath */ "./node_modules/lodash/_stringToPath.js"),
    toString = __webpack_require__(/*! ./toString */ "./node_modules/lodash/toString.js");

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;


/***/ }),

/***/ "./node_modules/lodash/_cloneArrayBuffer.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_cloneArrayBuffer.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Uint8Array = __webpack_require__(/*! ./_Uint8Array */ "./node_modules/lodash/_Uint8Array.js");

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

module.exports = cloneArrayBuffer;


/***/ }),

/***/ "./node_modules/lodash/_cloneBuffer.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_cloneBuffer.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

module.exports = cloneBuffer;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash/_cloneDataView.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_cloneDataView.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(/*! ./_cloneArrayBuffer */ "./node_modules/lodash/_cloneArrayBuffer.js");

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

module.exports = cloneDataView;


/***/ }),

/***/ "./node_modules/lodash/_cloneRegExp.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_cloneRegExp.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

module.exports = cloneRegExp;


/***/ }),

/***/ "./node_modules/lodash/_cloneSymbol.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_cloneSymbol.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js");

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

module.exports = cloneSymbol;


/***/ }),

/***/ "./node_modules/lodash/_cloneTypedArray.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_cloneTypedArray.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(/*! ./_cloneArrayBuffer */ "./node_modules/lodash/_cloneArrayBuffer.js");

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

module.exports = cloneTypedArray;


/***/ }),

/***/ "./node_modules/lodash/_copyArray.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_copyArray.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

module.exports = copyArray;


/***/ }),

/***/ "./node_modules/lodash/_copyObject.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_copyObject.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__(/*! ./_assignValue */ "./node_modules/lodash/_assignValue.js"),
    baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "./node_modules/lodash/_baseAssignValue.js");

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

module.exports = copyObject;


/***/ }),

/***/ "./node_modules/lodash/_copySymbols.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_copySymbols.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(/*! ./_copyObject */ "./node_modules/lodash/_copyObject.js"),
    getSymbols = __webpack_require__(/*! ./_getSymbols */ "./node_modules/lodash/_getSymbols.js");

/**
 * Copies own symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}

module.exports = copySymbols;


/***/ }),

/***/ "./node_modules/lodash/_copySymbolsIn.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_copySymbolsIn.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(/*! ./_copyObject */ "./node_modules/lodash/_copyObject.js"),
    getSymbolsIn = __webpack_require__(/*! ./_getSymbolsIn */ "./node_modules/lodash/_getSymbolsIn.js");

/**
 * Copies own and inherited symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbolsIn(source, object) {
  return copyObject(source, getSymbolsIn(source), object);
}

module.exports = copySymbolsIn;


/***/ }),

/***/ "./node_modules/lodash/_coreJsData.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_coreJsData.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),

/***/ "./node_modules/lodash/_createAssigner.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_createAssigner.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseRest = __webpack_require__(/*! ./_baseRest */ "./node_modules/lodash/_baseRest.js"),
    isIterateeCall = __webpack_require__(/*! ./_isIterateeCall */ "./node_modules/lodash/_isIterateeCall.js");

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

module.exports = createAssigner;


/***/ }),

/***/ "./node_modules/lodash/_createBaseFor.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_createBaseFor.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

module.exports = createBaseFor;


/***/ }),

/***/ "./node_modules/lodash/_createSet.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_createSet.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Set = __webpack_require__(/*! ./_Set */ "./node_modules/lodash/_Set.js"),
    noop = __webpack_require__(/*! ./noop */ "./node_modules/lodash/noop.js"),
    setToArray = __webpack_require__(/*! ./_setToArray */ "./node_modules/lodash/_setToArray.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Creates a set object of `values`.
 *
 * @private
 * @param {Array} values The values to add to the set.
 * @returns {Object} Returns the new set.
 */
var createSet = !(Set && (1 / setToArray(new Set([,-0]))[1]) == INFINITY) ? noop : function(values) {
  return new Set(values);
};

module.exports = createSet;


/***/ }),

/***/ "./node_modules/lodash/_customDefaultsMerge.js":
/*!*****************************************************!*\
  !*** ./node_modules/lodash/_customDefaultsMerge.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseMerge = __webpack_require__(/*! ./_baseMerge */ "./node_modules/lodash/_baseMerge.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/**
 * Used by `_.defaultsDeep` to customize its `_.merge` use to merge source
 * objects into destination objects that are passed thru.
 *
 * @private
 * @param {*} objValue The destination value.
 * @param {*} srcValue The source value.
 * @param {string} key The key of the property to merge.
 * @param {Object} object The parent object of `objValue`.
 * @param {Object} source The parent object of `srcValue`.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 * @returns {*} Returns the value to assign.
 */
function customDefaultsMerge(objValue, srcValue, key, object, source, stack) {
  if (isObject(objValue) && isObject(srcValue)) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    stack.set(srcValue, objValue);
    baseMerge(objValue, srcValue, undefined, customDefaultsMerge, stack);
    stack['delete'](srcValue);
  }
  return objValue;
}

module.exports = customDefaultsMerge;


/***/ }),

/***/ "./node_modules/lodash/_customOmitClone.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_customOmitClone.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isPlainObject = __webpack_require__(/*! ./isPlainObject */ "./node_modules/lodash/isPlainObject.js");

/**
 * Used by `_.omit` to customize its `_.cloneDeep` use to only clone plain
 * objects.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {string} key The key of the property to inspect.
 * @returns {*} Returns the uncloned value or `undefined` to defer cloning to `_.cloneDeep`.
 */
function customOmitClone(value) {
  return isPlainObject(value) ? undefined : value;
}

module.exports = customOmitClone;


/***/ }),

/***/ "./node_modules/lodash/_defineProperty.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_defineProperty.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js");

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ }),

/***/ "./node_modules/lodash/_equalArrays.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_equalArrays.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(/*! ./_SetCache */ "./node_modules/lodash/_SetCache.js"),
    arraySome = __webpack_require__(/*! ./_arraySome */ "./node_modules/lodash/_arraySome.js"),
    cacheHas = __webpack_require__(/*! ./_cacheHas */ "./node_modules/lodash/_cacheHas.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

module.exports = equalArrays;


/***/ }),

/***/ "./node_modules/lodash/_equalByTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_equalByTag.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    Uint8Array = __webpack_require__(/*! ./_Uint8Array */ "./node_modules/lodash/_Uint8Array.js"),
    eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js"),
    equalArrays = __webpack_require__(/*! ./_equalArrays */ "./node_modules/lodash/_equalArrays.js"),
    mapToArray = __webpack_require__(/*! ./_mapToArray */ "./node_modules/lodash/_mapToArray.js"),
    setToArray = __webpack_require__(/*! ./_setToArray */ "./node_modules/lodash/_setToArray.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

module.exports = equalByTag;


/***/ }),

/***/ "./node_modules/lodash/_equalObjects.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_equalObjects.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getAllKeys = __webpack_require__(/*! ./_getAllKeys */ "./node_modules/lodash/_getAllKeys.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

module.exports = equalObjects;


/***/ }),

/***/ "./node_modules/lodash/_flatRest.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_flatRest.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var flatten = __webpack_require__(/*! ./flatten */ "./node_modules/lodash/flatten.js"),
    overRest = __webpack_require__(/*! ./_overRest */ "./node_modules/lodash/_overRest.js"),
    setToString = __webpack_require__(/*! ./_setToString */ "./node_modules/lodash/_setToString.js");

/**
 * A specialized version of `baseRest` which flattens the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @returns {Function} Returns the new function.
 */
function flatRest(func) {
  return setToString(overRest(func, undefined, flatten), func + '');
}

module.exports = flatRest;


/***/ }),

/***/ "./node_modules/lodash/_freeGlobal.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/lodash/_getAllKeys.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getAllKeys.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(/*! ./_baseGetAllKeys */ "./node_modules/lodash/_baseGetAllKeys.js"),
    getSymbols = __webpack_require__(/*! ./_getSymbols */ "./node_modules/lodash/_getSymbols.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

module.exports = getAllKeys;


/***/ }),

/***/ "./node_modules/lodash/_getAllKeysIn.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_getAllKeysIn.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(/*! ./_baseGetAllKeys */ "./node_modules/lodash/_baseGetAllKeys.js"),
    getSymbolsIn = __webpack_require__(/*! ./_getSymbolsIn */ "./node_modules/lodash/_getSymbolsIn.js"),
    keysIn = __webpack_require__(/*! ./keysIn */ "./node_modules/lodash/keysIn.js");

/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeysIn(object) {
  return baseGetAllKeys(object, keysIn, getSymbolsIn);
}

module.exports = getAllKeysIn;


/***/ }),

/***/ "./node_modules/lodash/_getMapData.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getMapData.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__(/*! ./_isKeyable */ "./node_modules/lodash/_isKeyable.js");

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),

/***/ "./node_modules/lodash/_getMatchData.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_getMatchData.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isStrictComparable = __webpack_require__(/*! ./_isStrictComparable */ "./node_modules/lodash/_isStrictComparable.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = keys(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, isStrictComparable(value)];
  }
  return result;
}

module.exports = getMatchData;


/***/ }),

/***/ "./node_modules/lodash/_getNative.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getNative.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(/*! ./_baseIsNative */ "./node_modules/lodash/_baseIsNative.js"),
    getValue = __webpack_require__(/*! ./_getValue */ "./node_modules/lodash/_getValue.js");

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),

/***/ "./node_modules/lodash/_getPrototype.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_getPrototype.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(/*! ./_overArg */ "./node_modules/lodash/_overArg.js");

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;


/***/ }),

/***/ "./node_modules/lodash/_getRawTag.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ "./node_modules/lodash/_getSymbols.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getSymbols.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayFilter = __webpack_require__(/*! ./_arrayFilter */ "./node_modules/lodash/_arrayFilter.js"),
    stubArray = __webpack_require__(/*! ./stubArray */ "./node_modules/lodash/stubArray.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

module.exports = getSymbols;


/***/ }),

/***/ "./node_modules/lodash/_getSymbolsIn.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_getSymbolsIn.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(/*! ./_arrayPush */ "./node_modules/lodash/_arrayPush.js"),
    getPrototype = __webpack_require__(/*! ./_getPrototype */ "./node_modules/lodash/_getPrototype.js"),
    getSymbols = __webpack_require__(/*! ./_getSymbols */ "./node_modules/lodash/_getSymbols.js"),
    stubArray = __webpack_require__(/*! ./stubArray */ "./node_modules/lodash/stubArray.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
  var result = [];
  while (object) {
    arrayPush(result, getSymbols(object));
    object = getPrototype(object);
  }
  return result;
};

module.exports = getSymbolsIn;


/***/ }),

/***/ "./node_modules/lodash/_getTag.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_getTag.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DataView = __webpack_require__(/*! ./_DataView */ "./node_modules/lodash/_DataView.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js"),
    Promise = __webpack_require__(/*! ./_Promise */ "./node_modules/lodash/_Promise.js"),
    Set = __webpack_require__(/*! ./_Set */ "./node_modules/lodash/_Set.js"),
    WeakMap = __webpack_require__(/*! ./_WeakMap */ "./node_modules/lodash/_WeakMap.js"),
    baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    toSource = __webpack_require__(/*! ./_toSource */ "./node_modules/lodash/_toSource.js");

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

module.exports = getTag;


/***/ }),

/***/ "./node_modules/lodash/_getValue.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_getValue.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),

/***/ "./node_modules/lodash/_hasPath.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hasPath.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(/*! ./_castPath */ "./node_modules/lodash/_castPath.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/lodash/_isIndex.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex(key, length) &&
    (isArray(object) || isArguments(object));
}

module.exports = hasPath;


/***/ }),

/***/ "./node_modules/lodash/_hashClear.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_hashClear.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),

/***/ "./node_modules/lodash/_hashDelete.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_hashDelete.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),

/***/ "./node_modules/lodash/_hashGet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashGet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),

/***/ "./node_modules/lodash/_hashHas.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashHas.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),

/***/ "./node_modules/lodash/_hashSet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashSet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),

/***/ "./node_modules/lodash/_initCloneArray.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_initCloneArray.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = new array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

module.exports = initCloneArray;


/***/ }),

/***/ "./node_modules/lodash/_initCloneByTag.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_initCloneByTag.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(/*! ./_cloneArrayBuffer */ "./node_modules/lodash/_cloneArrayBuffer.js"),
    cloneDataView = __webpack_require__(/*! ./_cloneDataView */ "./node_modules/lodash/_cloneDataView.js"),
    cloneRegExp = __webpack_require__(/*! ./_cloneRegExp */ "./node_modules/lodash/_cloneRegExp.js"),
    cloneSymbol = __webpack_require__(/*! ./_cloneSymbol */ "./node_modules/lodash/_cloneSymbol.js"),
    cloneTypedArray = __webpack_require__(/*! ./_cloneTypedArray */ "./node_modules/lodash/_cloneTypedArray.js");

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag:
      return cloneArrayBuffer(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case dataViewTag:
      return cloneDataView(object, isDeep);

    case float32Tag: case float64Tag:
    case int8Tag: case int16Tag: case int32Tag:
    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
      return cloneTypedArray(object, isDeep);

    case mapTag:
      return new Ctor;

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      return cloneRegExp(object);

    case setTag:
      return new Ctor;

    case symbolTag:
      return cloneSymbol(object);
  }
}

module.exports = initCloneByTag;


/***/ }),

/***/ "./node_modules/lodash/_initCloneObject.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_initCloneObject.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseCreate = __webpack_require__(/*! ./_baseCreate */ "./node_modules/lodash/_baseCreate.js"),
    getPrototype = __webpack_require__(/*! ./_getPrototype */ "./node_modules/lodash/_getPrototype.js"),
    isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/lodash/_isPrototype.js");

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

module.exports = initCloneObject;


/***/ }),

/***/ "./node_modules/lodash/_isFlattenable.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_isFlattenable.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js");

/** Built-in value references. */
var spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return isArray(value) || isArguments(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

module.exports = isFlattenable;


/***/ }),

/***/ "./node_modules/lodash/_isIndex.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_isIndex.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),

/***/ "./node_modules/lodash/_isIterateeCall.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_isIterateeCall.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/lodash/_isIndex.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

module.exports = isIterateeCall;


/***/ }),

/***/ "./node_modules/lodash/_isKey.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_isKey.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

module.exports = isKey;


/***/ }),

/***/ "./node_modules/lodash/_isKeyable.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_isKeyable.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),

/***/ "./node_modules/lodash/_isMasked.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_isMasked.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(/*! ./_coreJsData */ "./node_modules/lodash/_coreJsData.js");

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),

/***/ "./node_modules/lodash/_isPrototype.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_isPrototype.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),

/***/ "./node_modules/lodash/_isStrictComparable.js":
/*!****************************************************!*\
  !*** ./node_modules/lodash/_isStrictComparable.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !isObject(value);
}

module.exports = isStrictComparable;


/***/ }),

/***/ "./node_modules/lodash/_listCacheClear.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_listCacheClear.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),

/***/ "./node_modules/lodash/_listCacheDelete.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_listCacheDelete.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),

/***/ "./node_modules/lodash/_listCacheGet.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheGet.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),

/***/ "./node_modules/lodash/_listCacheHas.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheHas.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),

/***/ "./node_modules/lodash/_listCacheSet.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheSet.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheClear.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_mapCacheClear.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__(/*! ./_Hash */ "./node_modules/lodash/_Hash.js"),
    ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js");

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheDelete.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_mapCacheDelete.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheGet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheGet.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheHas.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheHas.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheSet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheSet.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),

/***/ "./node_modules/lodash/_mapToArray.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_mapToArray.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

module.exports = mapToArray;


/***/ }),

/***/ "./node_modules/lodash/_matchesStrictComparable.js":
/*!*********************************************************!*\
  !*** ./node_modules/lodash/_matchesStrictComparable.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

module.exports = matchesStrictComparable;


/***/ }),

/***/ "./node_modules/lodash/_memoizeCapped.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_memoizeCapped.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var memoize = __webpack_require__(/*! ./memoize */ "./node_modules/lodash/memoize.js");

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

module.exports = memoizeCapped;


/***/ }),

/***/ "./node_modules/lodash/_nativeCreate.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_nativeCreate.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js");

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),

/***/ "./node_modules/lodash/_nativeKeys.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_nativeKeys.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(/*! ./_overArg */ "./node_modules/lodash/_overArg.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),

/***/ "./node_modules/lodash/_nativeKeysIn.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_nativeKeysIn.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

module.exports = nativeKeysIn;


/***/ }),

/***/ "./node_modules/lodash/_nodeUtil.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_nodeUtil.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash/_objectToString.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ "./node_modules/lodash/_overArg.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_overArg.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),

/***/ "./node_modules/lodash/_overRest.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_overRest.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__(/*! ./_apply */ "./node_modules/lodash/_apply.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

module.exports = overRest;


/***/ }),

/***/ "./node_modules/lodash/_parent.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_parent.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(/*! ./_baseGet */ "./node_modules/lodash/_baseGet.js"),
    baseSlice = __webpack_require__(/*! ./_baseSlice */ "./node_modules/lodash/_baseSlice.js");

/**
 * Gets the parent value at `path` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} path The path to get the parent value of.
 * @returns {*} Returns the parent value.
 */
function parent(object, path) {
  return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
}

module.exports = parent;


/***/ }),

/***/ "./node_modules/lodash/_root.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ "./node_modules/lodash/_safeGet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_safeGet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Gets the value at `key`, unless `key` is "__proto__" or "constructor".
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function safeGet(object, key) {
  if (key === 'constructor' && typeof object[key] === 'function') {
    return;
  }

  if (key == '__proto__') {
    return;
  }

  return object[key];
}

module.exports = safeGet;


/***/ }),

/***/ "./node_modules/lodash/_setCacheAdd.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_setCacheAdd.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

module.exports = setCacheAdd;


/***/ }),

/***/ "./node_modules/lodash/_setCacheHas.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_setCacheHas.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

module.exports = setCacheHas;


/***/ }),

/***/ "./node_modules/lodash/_setToArray.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_setToArray.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

module.exports = setToArray;


/***/ }),

/***/ "./node_modules/lodash/_setToString.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_setToString.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseSetToString = __webpack_require__(/*! ./_baseSetToString */ "./node_modules/lodash/_baseSetToString.js"),
    shortOut = __webpack_require__(/*! ./_shortOut */ "./node_modules/lodash/_shortOut.js");

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

module.exports = setToString;


/***/ }),

/***/ "./node_modules/lodash/_shortOut.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_shortOut.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

module.exports = shortOut;


/***/ }),

/***/ "./node_modules/lodash/_stackClear.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_stackClear.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js");

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

module.exports = stackClear;


/***/ }),

/***/ "./node_modules/lodash/_stackDelete.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_stackDelete.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;


/***/ }),

/***/ "./node_modules/lodash/_stackGet.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackGet.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;


/***/ }),

/***/ "./node_modules/lodash/_stackHas.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackHas.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;


/***/ }),

/***/ "./node_modules/lodash/_stackSet.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackSet.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js"),
    MapCache = __webpack_require__(/*! ./_MapCache */ "./node_modules/lodash/_MapCache.js");

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;


/***/ }),

/***/ "./node_modules/lodash/_strictIndexOf.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_strictIndexOf.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

module.exports = strictIndexOf;


/***/ }),

/***/ "./node_modules/lodash/_stringToPath.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_stringToPath.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var memoizeCapped = __webpack_require__(/*! ./_memoizeCapped */ "./node_modules/lodash/_memoizeCapped.js");

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

module.exports = stringToPath;


/***/ }),

/***/ "./node_modules/lodash/_toKey.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_toKey.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = toKey;


/***/ }),

/***/ "./node_modules/lodash/_toSource.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_toSource.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),

/***/ "./node_modules/lodash/clone.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/clone.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseClone = __webpack_require__(/*! ./_baseClone */ "./node_modules/lodash/_baseClone.js");

/** Used to compose bitmasks for cloning. */
var CLONE_SYMBOLS_FLAG = 4;

/**
 * Creates a shallow clone of `value`.
 *
 * **Note:** This method is loosely based on the
 * [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
 * and supports cloning arrays, array buffers, booleans, date objects, maps,
 * numbers, `Object` objects, regexes, sets, strings, symbols, and typed
 * arrays. The own enumerable properties of `arguments` objects are cloned
 * as plain objects. An empty object is returned for uncloneable values such
 * as error objects, functions, DOM nodes, and WeakMaps.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to clone.
 * @returns {*} Returns the cloned value.
 * @see _.cloneDeep
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var shallow = _.clone(objects);
 * console.log(shallow[0] === objects[0]);
 * // => true
 */
function clone(value) {
  return baseClone(value, CLONE_SYMBOLS_FLAG);
}

module.exports = clone;


/***/ }),

/***/ "./node_modules/lodash/constant.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/constant.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

module.exports = constant;


/***/ }),

/***/ "./node_modules/lodash/defaults.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/defaults.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseRest = __webpack_require__(/*! ./_baseRest */ "./node_modules/lodash/_baseRest.js"),
    eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js"),
    isIterateeCall = __webpack_require__(/*! ./_isIterateeCall */ "./node_modules/lodash/_isIterateeCall.js"),
    keysIn = __webpack_require__(/*! ./keysIn */ "./node_modules/lodash/keysIn.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns own and inherited enumerable string keyed properties of source
 * objects to the destination object for all destination properties that
 * resolve to `undefined`. Source objects are applied from left to right.
 * Once a property is set, additional values of the same property are ignored.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.defaultsDeep
 * @example
 *
 * _.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
 * // => { 'a': 1, 'b': 2 }
 */
var defaults = baseRest(function(object, sources) {
  object = Object(object);

  var index = -1;
  var length = sources.length;
  var guard = length > 2 ? sources[2] : undefined;

  if (guard && isIterateeCall(sources[0], sources[1], guard)) {
    length = 1;
  }

  while (++index < length) {
    var source = sources[index];
    var props = keysIn(source);
    var propsIndex = -1;
    var propsLength = props.length;

    while (++propsIndex < propsLength) {
      var key = props[propsIndex];
      var value = object[key];

      if (value === undefined ||
          (eq(value, objectProto[key]) && !hasOwnProperty.call(object, key))) {
        object[key] = source[key];
      }
    }
  }

  return object;
});

module.exports = defaults;


/***/ }),

/***/ "./node_modules/lodash/defaultsDeep.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/defaultsDeep.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__(/*! ./_apply */ "./node_modules/lodash/_apply.js"),
    baseRest = __webpack_require__(/*! ./_baseRest */ "./node_modules/lodash/_baseRest.js"),
    customDefaultsMerge = __webpack_require__(/*! ./_customDefaultsMerge */ "./node_modules/lodash/_customDefaultsMerge.js"),
    mergeWith = __webpack_require__(/*! ./mergeWith */ "./node_modules/lodash/mergeWith.js");

/**
 * This method is like `_.defaults` except that it recursively assigns
 * default properties.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 3.10.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.defaults
 * @example
 *
 * _.defaultsDeep({ 'a': { 'b': 2 } }, { 'a': { 'b': 1, 'c': 3 } });
 * // => { 'a': { 'b': 2, 'c': 3 } }
 */
var defaultsDeep = baseRest(function(args) {
  args.push(undefined, customDefaultsMerge);
  return apply(mergeWith, undefined, args);
});

module.exports = defaultsDeep;


/***/ }),

/***/ "./node_modules/lodash/eq.js":
/*!***********************************!*\
  !*** ./node_modules/lodash/eq.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),

/***/ "./node_modules/lodash/flatten.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/flatten.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseFlatten = __webpack_require__(/*! ./_baseFlatten */ "./node_modules/lodash/_baseFlatten.js");

/**
 * Flattens `array` a single level deep.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * _.flatten([1, [2, [3, [4]], 5]]);
 * // => [1, 2, [3, [4]], 5]
 */
function flatten(array) {
  var length = array == null ? 0 : array.length;
  return length ? baseFlatten(array, 1) : [];
}

module.exports = flatten;


/***/ }),

/***/ "./node_modules/lodash/get.js":
/*!************************************!*\
  !*** ./node_modules/lodash/get.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(/*! ./_baseGet */ "./node_modules/lodash/_baseGet.js");

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;


/***/ }),

/***/ "./node_modules/lodash/hasIn.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/hasIn.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseHasIn = __webpack_require__(/*! ./_baseHasIn */ "./node_modules/lodash/_baseHasIn.js"),
    hasPath = __webpack_require__(/*! ./_hasPath */ "./node_modules/lodash/_hasPath.js");

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}

module.exports = hasIn;


/***/ }),

/***/ "./node_modules/lodash/identity.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/identity.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),

/***/ "./node_modules/lodash/intersection.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/intersection.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayMap = __webpack_require__(/*! ./_arrayMap */ "./node_modules/lodash/_arrayMap.js"),
    baseIntersection = __webpack_require__(/*! ./_baseIntersection */ "./node_modules/lodash/_baseIntersection.js"),
    baseRest = __webpack_require__(/*! ./_baseRest */ "./node_modules/lodash/_baseRest.js"),
    castArrayLikeObject = __webpack_require__(/*! ./_castArrayLikeObject */ "./node_modules/lodash/_castArrayLikeObject.js");

/**
 * Creates an array of unique values that are included in all given arrays
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons. The order and references of result values are
 * determined by the first array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {...Array} [arrays] The arrays to inspect.
 * @returns {Array} Returns the new array of intersecting values.
 * @example
 *
 * _.intersection([2, 1], [2, 3]);
 * // => [2]
 */
var intersection = baseRest(function(arrays) {
  var mapped = arrayMap(arrays, castArrayLikeObject);
  return (mapped.length && mapped[0] === arrays[0])
    ? baseIntersection(mapped)
    : [];
});

module.exports = intersection;


/***/ }),

/***/ "./node_modules/lodash/isArguments.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArguments.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(/*! ./_baseIsArguments */ "./node_modules/lodash/_baseIsArguments.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),

/***/ "./node_modules/lodash/isArray.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/isArray.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),

/***/ "./node_modules/lodash/isArrayLike.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArrayLike.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js");

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),

/***/ "./node_modules/lodash/isArrayLikeObject.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/isArrayLikeObject.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

module.exports = isArrayLikeObject;


/***/ }),

/***/ "./node_modules/lodash/isBuffer.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isBuffer.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js"),
    stubFalse = __webpack_require__(/*! ./stubFalse */ "./node_modules/lodash/stubFalse.js");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash/isFunction.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/isFunction.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),

/***/ "./node_modules/lodash/isLength.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isLength.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),

/***/ "./node_modules/lodash/isMap.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/isMap.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsMap = __webpack_require__(/*! ./_baseIsMap */ "./node_modules/lodash/_baseIsMap.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "./node_modules/lodash/_baseUnary.js"),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ "./node_modules/lodash/_nodeUtil.js");

/* Node.js helper references. */
var nodeIsMap = nodeUtil && nodeUtil.isMap;

/**
 * Checks if `value` is classified as a `Map` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 * @example
 *
 * _.isMap(new Map);
 * // => true
 *
 * _.isMap(new WeakMap);
 * // => false
 */
var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;

module.exports = isMap;


/***/ }),

/***/ "./node_modules/lodash/isObject.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isObject.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ "./node_modules/lodash/isObjectLike.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isObjectLike.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ "./node_modules/lodash/isPlainObject.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/isPlainObject.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    getPrototype = __webpack_require__(/*! ./_getPrototype */ "./node_modules/lodash/_getPrototype.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

module.exports = isPlainObject;


/***/ }),

/***/ "./node_modules/lodash/isSet.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/isSet.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsSet = __webpack_require__(/*! ./_baseIsSet */ "./node_modules/lodash/_baseIsSet.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "./node_modules/lodash/_baseUnary.js"),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ "./node_modules/lodash/_nodeUtil.js");

/* Node.js helper references. */
var nodeIsSet = nodeUtil && nodeUtil.isSet;

/**
 * Checks if `value` is classified as a `Set` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 * @example
 *
 * _.isSet(new Set);
 * // => true
 *
 * _.isSet(new WeakSet);
 * // => false
 */
var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;

module.exports = isSet;


/***/ }),

/***/ "./node_modules/lodash/isSymbol.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isSymbol.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),

/***/ "./node_modules/lodash/isTypedArray.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isTypedArray.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(/*! ./_baseIsTypedArray */ "./node_modules/lodash/_baseIsTypedArray.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "./node_modules/lodash/_baseUnary.js"),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ "./node_modules/lodash/_nodeUtil.js");

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),

/***/ "./node_modules/lodash/keys.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/keys.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(/*! ./_arrayLikeKeys */ "./node_modules/lodash/_arrayLikeKeys.js"),
    baseKeys = __webpack_require__(/*! ./_baseKeys */ "./node_modules/lodash/_baseKeys.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js");

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ }),

/***/ "./node_modules/lodash/keysIn.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/keysIn.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(/*! ./_arrayLikeKeys */ "./node_modules/lodash/_arrayLikeKeys.js"),
    baseKeysIn = __webpack_require__(/*! ./_baseKeysIn */ "./node_modules/lodash/_baseKeysIn.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js");

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

module.exports = keysIn;


/***/ }),

/***/ "./node_modules/lodash/last.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/last.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Gets the last element of `array`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to query.
 * @returns {*} Returns the last element of `array`.
 * @example
 *
 * _.last([1, 2, 3]);
 * // => 3
 */
function last(array) {
  var length = array == null ? 0 : array.length;
  return length ? array[length - 1] : undefined;
}

module.exports = last;


/***/ }),

/***/ "./node_modules/lodash/mapKeys.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/mapKeys.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "./node_modules/lodash/_baseAssignValue.js"),
    baseForOwn = __webpack_require__(/*! ./_baseForOwn */ "./node_modules/lodash/_baseForOwn.js"),
    baseIteratee = __webpack_require__(/*! ./_baseIteratee */ "./node_modules/lodash/_baseIteratee.js");

/**
 * The opposite of `_.mapValues`; this method creates an object with the
 * same values as `object` and keys generated by running each own enumerable
 * string keyed property of `object` thru `iteratee`. The iteratee is invoked
 * with three arguments: (value, key, object).
 *
 * @static
 * @memberOf _
 * @since 3.8.0
 * @category Object
 * @param {Object} object The object to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Object} Returns the new mapped object.
 * @see _.mapValues
 * @example
 *
 * _.mapKeys({ 'a': 1, 'b': 2 }, function(value, key) {
 *   return key + value;
 * });
 * // => { 'a1': 1, 'b2': 2 }
 */
function mapKeys(object, iteratee) {
  var result = {};
  iteratee = baseIteratee(iteratee, 3);

  baseForOwn(object, function(value, key, object) {
    baseAssignValue(result, iteratee(value, key, object), value);
  });
  return result;
}

module.exports = mapKeys;


/***/ }),

/***/ "./node_modules/lodash/memoize.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/memoize.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(/*! ./_MapCache */ "./node_modules/lodash/_MapCache.js");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

module.exports = memoize;


/***/ }),

/***/ "./node_modules/lodash/mergeWith.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/mergeWith.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseMerge = __webpack_require__(/*! ./_baseMerge */ "./node_modules/lodash/_baseMerge.js"),
    createAssigner = __webpack_require__(/*! ./_createAssigner */ "./node_modules/lodash/_createAssigner.js");

/**
 * This method is like `_.merge` except that it accepts `customizer` which
 * is invoked to produce the merged values of the destination and source
 * properties. If `customizer` returns `undefined`, merging is handled by the
 * method instead. The `customizer` is invoked with six arguments:
 * (objValue, srcValue, key, object, source, stack).
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} sources The source objects.
 * @param {Function} customizer The function to customize assigned values.
 * @returns {Object} Returns `object`.
 * @example
 *
 * function customizer(objValue, srcValue) {
 *   if (_.isArray(objValue)) {
 *     return objValue.concat(srcValue);
 *   }
 * }
 *
 * var object = { 'a': [1], 'b': [2] };
 * var other = { 'a': [3], 'b': [4] };
 *
 * _.mergeWith(object, other, customizer);
 * // => { 'a': [1, 3], 'b': [2, 4] }
 */
var mergeWith = createAssigner(function(object, source, srcIndex, customizer) {
  baseMerge(object, source, srcIndex, customizer);
});

module.exports = mergeWith;


/***/ }),

/***/ "./node_modules/lodash/noop.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/noop.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */
function noop() {
  // No operation performed.
}

module.exports = noop;


/***/ }),

/***/ "./node_modules/lodash/omit.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/omit.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayMap = __webpack_require__(/*! ./_arrayMap */ "./node_modules/lodash/_arrayMap.js"),
    baseClone = __webpack_require__(/*! ./_baseClone */ "./node_modules/lodash/_baseClone.js"),
    baseUnset = __webpack_require__(/*! ./_baseUnset */ "./node_modules/lodash/_baseUnset.js"),
    castPath = __webpack_require__(/*! ./_castPath */ "./node_modules/lodash/_castPath.js"),
    copyObject = __webpack_require__(/*! ./_copyObject */ "./node_modules/lodash/_copyObject.js"),
    customOmitClone = __webpack_require__(/*! ./_customOmitClone */ "./node_modules/lodash/_customOmitClone.js"),
    flatRest = __webpack_require__(/*! ./_flatRest */ "./node_modules/lodash/_flatRest.js"),
    getAllKeysIn = __webpack_require__(/*! ./_getAllKeysIn */ "./node_modules/lodash/_getAllKeysIn.js");

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;

/**
 * The opposite of `_.pick`; this method creates an object composed of the
 * own and inherited enumerable property paths of `object` that are not omitted.
 *
 * **Note:** This method is considerably slower than `_.pick`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The source object.
 * @param {...(string|string[])} [paths] The property paths to omit.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.omit(object, ['a', 'c']);
 * // => { 'b': '2' }
 */
var omit = flatRest(function(object, paths) {
  var result = {};
  if (object == null) {
    return result;
  }
  var isDeep = false;
  paths = arrayMap(paths, function(path) {
    path = castPath(path, object);
    isDeep || (isDeep = path.length > 1);
    return path;
  });
  copyObject(object, getAllKeysIn(object), result);
  if (isDeep) {
    result = baseClone(result, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
  }
  var length = paths.length;
  while (length--) {
    baseUnset(result, paths[length]);
  }
  return result;
});

module.exports = omit;


/***/ }),

/***/ "./node_modules/lodash/pick.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/pick.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var basePick = __webpack_require__(/*! ./_basePick */ "./node_modules/lodash/_basePick.js"),
    flatRest = __webpack_require__(/*! ./_flatRest */ "./node_modules/lodash/_flatRest.js");

/**
 * Creates an object composed of the picked `object` properties.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The source object.
 * @param {...(string|string[])} [paths] The property paths to pick.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.pick(object, ['a', 'c']);
 * // => { 'a': 1, 'c': 3 }
 */
var pick = flatRest(function(object, paths) {
  return object == null ? {} : basePick(object, paths);
});

module.exports = pick;


/***/ }),

/***/ "./node_modules/lodash/property.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/property.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseProperty = __webpack_require__(/*! ./_baseProperty */ "./node_modules/lodash/_baseProperty.js"),
    basePropertyDeep = __webpack_require__(/*! ./_basePropertyDeep */ "./node_modules/lodash/_basePropertyDeep.js"),
    isKey = __webpack_require__(/*! ./_isKey */ "./node_modules/lodash/_isKey.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}

module.exports = property;


/***/ }),

/***/ "./node_modules/lodash/set.js":
/*!************************************!*\
  !*** ./node_modules/lodash/set.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseSet = __webpack_require__(/*! ./_baseSet */ "./node_modules/lodash/_baseSet.js");

/**
 * Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
 * it's created. Arrays are created for missing index properties while objects
 * are created for all other missing properties. Use `_.setWith` to customize
 * `path` creation.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.set(object, 'a[0].b.c', 4);
 * console.log(object.a[0].b.c);
 * // => 4
 *
 * _.set(object, ['x', '0', 'y', 'z'], 5);
 * console.log(object.x[0].y.z);
 * // => 5
 */
function set(object, path, value) {
  return object == null ? object : baseSet(object, path, value);
}

module.exports = set;


/***/ }),

/***/ "./node_modules/lodash/stubArray.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/stubArray.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;


/***/ }),

/***/ "./node_modules/lodash/stubFalse.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/stubFalse.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),

/***/ "./node_modules/lodash/toPlainObject.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/toPlainObject.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(/*! ./_copyObject */ "./node_modules/lodash/_copyObject.js"),
    keysIn = __webpack_require__(/*! ./keysIn */ "./node_modules/lodash/keysIn.js");

/**
 * Converts `value` to a plain object flattening inherited enumerable string
 * keyed properties of `value` to own properties of the plain object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Object} Returns the converted plain object.
 * @example
 *
 * function Foo() {
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.assign({ 'a': 1 }, new Foo);
 * // => { 'a': 1, 'b': 2 }
 *
 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
 * // => { 'a': 1, 'b': 2, 'c': 3 }
 */
function toPlainObject(value) {
  return copyObject(value, keysIn(value));
}

module.exports = toPlainObject;


/***/ }),

/***/ "./node_modules/lodash/toString.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toString.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseToString = __webpack_require__(/*! ./_baseToString */ "./node_modules/lodash/_baseToString.js");

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ }),

/***/ "./node_modules/lodash/uniq.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/uniq.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseUniq = __webpack_require__(/*! ./_baseUniq */ "./node_modules/lodash/_baseUniq.js");

/**
 * Creates a duplicate-free version of an array, using
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons, in which only the first occurrence of each element
 * is kept. The order of result values is determined by the order they occur
 * in the array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @returns {Array} Returns the new duplicate free array.
 * @example
 *
 * _.uniq([2, 1, 2]);
 * // => [2, 1]
 */
function uniq(array) {
  return (array && array.length) ? baseUniq(array) : [];
}

module.exports = uniq;


/***/ }),

/***/ "./node_modules/node-fetch/browser.js":
/*!********************************************!*\
  !*** ./node_modules/node-fetch/browser.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// ref: https://github.com/tc39/proposal-global
var getGlobal = function () {
	// the only reliable means to get the global object is
	// `Function('return this')()`
	// However, this causes CSP violations in Chrome apps.
	if (typeof self !== 'undefined') { return self; }
	if (typeof window !== 'undefined') { return window; }
	if (typeof global !== 'undefined') { return global; }
	throw new Error('unable to locate global object');
}

var global = getGlobal();

module.exports = exports = global.fetch;

// Needed for TypeScript and Webpack.
exports.default = global.fetch.bind(global);

exports.Headers = global.Headers;
exports.Request = global.Request;
exports.Response = global.Response;

/***/ }),

/***/ "./node_modules/preact/compat/dist/compat.module.js":
/*!**********************************************************!*\
  !*** ./node_modules/preact/compat/dist/compat.module.js ***!
  \**********************************************************/
/*! exports provided: useState, useReducer, useEffect, useLayoutEffect, useRef, useImperativeHandle, useMemo, useCallback, useContext, useDebugValue, useErrorBoundary, createElement, createContext, createRef, Fragment, Component, default, version, Children, render, hydrate, unmountComponentAtNode, createPortal, createFactory, cloneElement, isValidElement, findDOMNode, PureComponent, memo, forwardRef, unstable_batchedUpdates, Suspense, SuspenseList, lazy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return B; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Children", function() { return F; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return V; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hydrate", function() { return Z; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unmountComponentAtNode", function() { return Q; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPortal", function() { return W; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFactory", function() { return G; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneElement", function() { return K; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidElement", function() { return J; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findDOMNode", function() { return X; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PureComponent", function() { return C; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "memo", function() { return _; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forwardRef", function() { return S; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unstable_batchedUpdates", function() { return Y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Suspense", function() { return M; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuspenseList", function() { return j; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lazy", function() { return O; });
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact/hooks */ "./node_modules/preact/hooks/dist/hooks.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useState", function() { return preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useReducer", function() { return preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useReducer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useEffect", function() { return preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useEffect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useLayoutEffect", function() { return preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useRef", function() { return preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useImperativeHandle", function() { return preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useImperativeHandle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useMemo", function() { return preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useMemo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useCallback", function() { return preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useCallback"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useContext", function() { return preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDebugValue", function() { return preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useDebugValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useErrorBoundary", function() { return preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useErrorBoundary"]; });

/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return preact__WEBPACK_IMPORTED_MODULE_1__["createElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createContext", function() { return preact__WEBPACK_IMPORTED_MODULE_1__["createContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createRef", function() { return preact__WEBPACK_IMPORTED_MODULE_1__["createRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Fragment", function() { return preact__WEBPACK_IMPORTED_MODULE_1__["Fragment"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return preact__WEBPACK_IMPORTED_MODULE_1__["Component"]; });

function E(n,t){for(var e in t)n[e]=t[e];return n}function w(n,t){for(var e in n)if("__source"!==e&&!(e in t))return!0;for(var r in t)if("__source"!==r&&n[r]!==t[r])return!0;return!1}var C=function(n){var t,e;function r(t){var e;return(e=n.call(this,t)||this).isPureReactComponent=!0,e}return e=n,(t=r).prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e,r.prototype.shouldComponentUpdate=function(n,t){return w(this.props,n)||w(this.state,t)},r}(preact__WEBPACK_IMPORTED_MODULE_1__["Component"]);function _(n,t){function e(n){var e=this.props.ref,r=e==n.ref;return!r&&e&&(e.call?e(null):e.current=null),t?!t(this.props,n)||!r:w(this.props,n)}function r(t){return this.shouldComponentUpdate=e,Object(preact__WEBPACK_IMPORTED_MODULE_1__["createElement"])(n,E({},t))}return r.prototype.isReactComponent=!0,r.displayName="Memo("+(n.displayName||n.name)+")",r.t=!0,r}var A=preact__WEBPACK_IMPORTED_MODULE_1__["options"].vnode;function S(n){function t(t){var e=E({},t);return delete e.ref,n(e,t.ref)}return t.prototype.isReactComponent=!0,t.t=!0,t.displayName="ForwardRef("+(n.displayName||n.name)+")",t}preact__WEBPACK_IMPORTED_MODULE_1__["options"].vnode=function(n){n.type&&n.type.t&&n.ref&&(n.props.ref=n.ref,n.ref=null),A&&A(n)};var k=function(n,t){return n?Object(preact__WEBPACK_IMPORTED_MODULE_1__["toChildArray"])(n).reduce(function(n,e){return n.concat(t(e))},[]):null},F={map:k,forEach:k,count:function(n){return n?Object(preact__WEBPACK_IMPORTED_MODULE_1__["toChildArray"])(n).length:0},only:function(n){if(1!==(n=Object(preact__WEBPACK_IMPORTED_MODULE_1__["toChildArray"])(n)).length)throw new Error("Children.only() expects only one child.");return n[0]},toArray:preact__WEBPACK_IMPORTED_MODULE_1__["toChildArray"]},N=preact__WEBPACK_IMPORTED_MODULE_1__["options"].__e;function R(n){return n&&((n=E({},n)).__c=null,n.__k=n.__k&&n.__k.map(R)),n}function M(n){this.__u=0,this.o=null,this.__b=null}function U(n){var t=n.__.__c;return t&&t.u&&t.u(n)}function O(n){var t,e,r;function o(o){if(t||(t=n()).then(function(n){e=n.default||n},function(n){r=n}),r)throw r;if(!e)throw t;return Object(preact__WEBPACK_IMPORTED_MODULE_1__["createElement"])(e,o)}return o.displayName="Lazy",o.t=!0,o}function j(){this.i=null,this.l=null}preact__WEBPACK_IMPORTED_MODULE_1__["options"].__e=function(n,t,e){if(n.then)for(var r,o=t;o=o.__;)if((r=o.__c)&&r.__c)return r.__c(n,t.__c);N(n,t,e)},(M.prototype=new preact__WEBPACK_IMPORTED_MODULE_1__["Component"]).__c=function(n,t){var e=this;null==e.o&&(e.o=[]),e.o.push(t);var r=U(e.__v),o=!1,u=function(){o||(o=!0,r?r(i):i())};t.__c=t.componentWillUnmount,t.componentWillUnmount=function(){u(),t.__c&&t.__c()};var i=function(){var n;if(!--e.__u)for(e.__v.__k[0]=e.state.u,e.setState({u:e.__b=null});n=e.o.pop();)n.forceUpdate()};e.__u++||e.setState({u:e.__b=e.__v.__k[0]}),n.then(u,u)},M.prototype.render=function(n,t){return this.__b&&(this.__v.__k[0]=R(this.__b),this.__b=null),[Object(preact__WEBPACK_IMPORTED_MODULE_1__["createElement"])(preact__WEBPACK_IMPORTED_MODULE_1__["Component"],null,t.u?null:n.children),t.u&&n.fallback]};var z=function(n,t,e){if(++e[1]===e[0]&&n.l.delete(t),n.props.revealOrder&&("t"!==n.props.revealOrder[0]||!n.l.size))for(e=n.i;e;){for(;e.length>3;)e.pop()();if(e[1]<e[0])break;n.i=e=e[2]}};(j.prototype=new preact__WEBPACK_IMPORTED_MODULE_1__["Component"]).u=function(n){var t=this,e=U(t.__v),r=t.l.get(n);return r[0]++,function(o){var u=function(){t.props.revealOrder?(r.push(o),z(t,n,r)):o()};e?e(u):u()}},j.prototype.render=function(n){this.i=null,this.l=new Map;var t=Object(preact__WEBPACK_IMPORTED_MODULE_1__["toChildArray"])(n.children);n.revealOrder&&"b"===n.revealOrder[0]&&t.reverse();for(var e=t.length;e--;)this.l.set(t[e],this.i=[1,0,this.i]);return n.children},j.prototype.componentDidUpdate=j.prototype.componentDidMount=function(){var n=this;n.l.forEach(function(t,e){z(n,e,t)})};var L=function(){function n(){}var t=n.prototype;return t.getChildContext=function(){return this.props.context},t.render=function(n){return n.children},n}();function P(n){var t=this,e=n.container,r=Object(preact__WEBPACK_IMPORTED_MODULE_1__["createElement"])(L,{context:t.context},n.vnode);return t.s&&t.s!==e&&(t.h.parentNode&&t.s.removeChild(t.h),Object(preact__WEBPACK_IMPORTED_MODULE_1__["_unmount"])(t.v),t.p=!1),n.vnode?t.p?(e.__k=t.__k,Object(preact__WEBPACK_IMPORTED_MODULE_1__["render"])(r,e),t.__k=e.__k):(t.h=document.createTextNode(""),Object(preact__WEBPACK_IMPORTED_MODULE_1__["hydrate"])("",e),e.appendChild(t.h),t.p=!0,t.s=e,Object(preact__WEBPACK_IMPORTED_MODULE_1__["render"])(r,e,t.h),t.__k=this.h.__k):t.p&&(t.h.parentNode&&t.s.removeChild(t.h),Object(preact__WEBPACK_IMPORTED_MODULE_1__["_unmount"])(t.v)),t.v=r,t.componentWillUnmount=function(){t.h.parentNode&&t.s.removeChild(t.h),Object(preact__WEBPACK_IMPORTED_MODULE_1__["_unmount"])(t.v)},null}function W(n,t){return Object(preact__WEBPACK_IMPORTED_MODULE_1__["createElement"])(P,{vnode:n,container:t})}var D=/^(?:accent|alignment|arabic|baseline|cap|color|fill|flood|font|glyph|horiz|marker|overline|paint|stop|strikethrough|stroke|text|underline|unicode|units|v|vector|vert|word|writing|x)[A-Z]/;preact__WEBPACK_IMPORTED_MODULE_1__["Component"].prototype.isReactComponent={};var T="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;function V(n,t,e){if(null==t.__k)for(;t.firstChild;)t.removeChild(t.firstChild);return Z(n,t,e)}function Z(n,t,e){return Object(preact__WEBPACK_IMPORTED_MODULE_1__["render"])(n,t),"function"==typeof e&&e(),n?n.__c:null}var H=preact__WEBPACK_IMPORTED_MODULE_1__["options"].event;function I(n,t){n["UNSAFE_"+t]&&!n[t]&&Object.defineProperty(n,t,{configurable:!1,get:function(){return this["UNSAFE_"+t]},set:function(n){this["UNSAFE_"+t]=n}})}preact__WEBPACK_IMPORTED_MODULE_1__["options"].event=function(n){return H&&(n=H(n)),n.persist=function(){},n.nativeEvent=n};var $={configurable:!0,get:function(){return this.class}},q=preact__WEBPACK_IMPORTED_MODULE_1__["options"].vnode;preact__WEBPACK_IMPORTED_MODULE_1__["options"].vnode=function(n){n.$$typeof=T;var t=n.type,e=n.props;if(e.class!=e.className&&($.enumerable="className"in e,null!=e.className&&(e.class=e.className),Object.defineProperty(e,"className",$)),"function"!=typeof t){var r,o,u;for(u in e.defaultValue&&(e.value||0===e.value||(e.value=e.defaultValue),delete e.defaultValue),Array.isArray(e.value)&&e.multiple&&"select"===t&&(Object(preact__WEBPACK_IMPORTED_MODULE_1__["toChildArray"])(e.children).forEach(function(n){-1!=e.value.indexOf(n.props.value)&&(n.props.selected=!0)}),delete e.value),e)if(r=D.test(u))break;if(r)for(u in o=n.props={},e)o[D.test(u)?u.replace(/([A-Z0-9])/,"-$1").toLowerCase():u]=e[u]}!function(t){var e=n.type,r=n.props;if(r&&"string"==typeof e){var o={};for(var u in r)/^on(Ani|Tra|Tou)/.test(u)&&(r[u.toLowerCase()]=r[u],delete r[u]),o[u.toLowerCase()]=u;if(o.ondoubleclick&&(r.ondblclick=r[o.ondoubleclick],delete r[o.ondoubleclick]),o.onbeforeinput&&(r.onbeforeinput=r[o.onbeforeinput],delete r[o.onbeforeinput]),o.onchange&&("textarea"===e||"input"===e.toLowerCase()&&!/^fil|che|ra/i.test(r.type))){var i=o.oninput||"oninput";r[i]||(r[i]=r[o.onchange],delete r[o.onchange])}}}(),"function"==typeof t&&!t.m&&t.prototype&&(I(t.prototype,"componentWillMount"),I(t.prototype,"componentWillReceiveProps"),I(t.prototype,"componentWillUpdate"),t.m=!0),q&&q(n)};var B="16.8.0";function G(n){return preact__WEBPACK_IMPORTED_MODULE_1__["createElement"].bind(null,n)}function J(n){return!!n&&n.$$typeof===T}function K(n){return J(n)?preact__WEBPACK_IMPORTED_MODULE_1__["cloneElement"].apply(null,arguments):n}function Q(n){return!!n.__k&&(Object(preact__WEBPACK_IMPORTED_MODULE_1__["render"])(null,n),!0)}function X(n){return n&&(n.base||1===n.nodeType&&n)||null}var Y=function(n,t){return n(t)};/* harmony default export */ __webpack_exports__["default"] = ({useState:preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useState"],useReducer:preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useReducer"],useEffect:preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useEffect"],useLayoutEffect:preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"],useRef:preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useRef"],useImperativeHandle:preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useImperativeHandle"],useMemo:preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useMemo"],useCallback:preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useCallback"],useContext:preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useContext"],useDebugValue:preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useDebugValue"],version:"16.8.0",Children:F,render:V,hydrate:V,unmountComponentAtNode:Q,createPortal:W,createElement:preact__WEBPACK_IMPORTED_MODULE_1__["createElement"],createContext:preact__WEBPACK_IMPORTED_MODULE_1__["createContext"],createFactory:G,cloneElement:K,createRef:preact__WEBPACK_IMPORTED_MODULE_1__["createRef"],Fragment:preact__WEBPACK_IMPORTED_MODULE_1__["Fragment"],isValidElement:J,findDOMNode:X,Component:preact__WEBPACK_IMPORTED_MODULE_1__["Component"],PureComponent:C,memo:_,forwardRef:S,unstable_batchedUpdates:Y,Suspense:M,SuspenseList:j,lazy:O});
//# sourceMappingURL=compat.module.js.map


/***/ }),

/***/ "./node_modules/preact/dist/preact.module.js":
/*!***************************************************!*\
  !*** ./node_modules/preact/dist/preact.module.js ***!
  \***************************************************/
/*! exports provided: render, hydrate, createElement, h, Fragment, createRef, isValidElement, Component, cloneElement, createContext, toChildArray, _unmount, options */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return E; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hydrate", function() { return H; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return v; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return v; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fragment", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRef", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidElement", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneElement", function() { return I; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createContext", function() { return L; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toChildArray", function() { return b; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_unmount", function() { return A; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "options", function() { return n; });
var n,l,u,i,t,o,r,f={},e=[],c=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;function s(n,l){for(var u in l)n[u]=l[u];return n}function a(n){var l=n.parentNode;l&&l.removeChild(n)}function v(n,l,u){var i,t=arguments,o={};for(i in l)"key"!==i&&"ref"!==i&&(o[i]=l[i]);if(arguments.length>3)for(u=[u],i=3;i<arguments.length;i++)u.push(t[i]);if(null!=u&&(o.children=u),"function"==typeof n&&null!=n.defaultProps)for(i in n.defaultProps)void 0===o[i]&&(o[i]=n.defaultProps[i]);return h(n,o,l&&l.key,l&&l.ref)}function h(l,u,i,t){var o={type:l,props:u,key:i,ref:t,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0};return n.vnode&&n.vnode(o),o}function p(){return{}}function d(n){return n.children}function y(n,l){this.props=n,this.context=l}function m(n,l){if(null==l)return n.__?m(n.__,n.__.__k.indexOf(n)+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return"function"==typeof n.type?m(n):null}function w(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return w(n)}}function g(l){(!l.__d&&(l.__d=!0)&&1===u.push(l)||t!==n.debounceRendering)&&((t=n.debounceRendering)||i)(k)}function k(){var n,l,i,t,o,r,f;for(u.sort(function(n,l){return l.__v.__b-n.__v.__b});n=u.pop();)n.__d&&(i=void 0,t=void 0,r=(o=(l=n).__v).__e,(f=l.__P)&&(i=[],t=z(f,o,s({},o),l.__n,void 0!==f.ownerSVGElement,null,i,null==r?m(o):r),T(i,o),t!=r&&w(o)))}function _(n,l,u,i,t,o,r,c,s){var v,h,p,d,y,w,g,k=u&&u.__k||e,_=k.length;if(c==f&&(c=null!=o?o[0]:_?m(u,0):null),v=0,l.__k=b(l.__k,function(u){if(null!=u){if(u.__=l,u.__b=l.__b+1,null===(p=k[v])||p&&u.key==p.key&&u.type===p.type)k[v]=void 0;else for(h=0;h<_;h++){if((p=k[h])&&u.key==p.key&&u.type===p.type){k[h]=void 0;break}p=null}if(d=z(n,u,p=p||f,i,t,o,r,c,s),(h=u.ref)&&p.ref!=h&&(g||(g=[]),p.ref&&g.push(p.ref,null,u),g.push(h,u.__c||d,u)),null!=d){var e;if(null==w&&(w=d),void 0!==u.__d)e=u.__d,u.__d=void 0;else if(o==p||d!=c||null==d.parentNode){n:if(null==c||c.parentNode!==n)n.appendChild(d),e=null;else{for(y=c,h=0;(y=y.nextSibling)&&h<_;h+=2)if(y==d)break n;n.insertBefore(d,c),e=c}"option"==l.type&&(n.value="")}c=void 0!==e?e:d.nextSibling,"function"==typeof l.type&&(l.__d=c)}}return v++,u}),l.__e=w,null!=o&&"function"!=typeof l.type)for(v=o.length;v--;)null!=o[v]&&a(o[v]);for(v=_;v--;)null!=k[v]&&A(k[v],k[v]);if(g)for(v=0;v<g.length;v++)j(g[v],g[++v],g[++v])}function b(n,l,u){if(null==u&&(u=[]),null==n||"boolean"==typeof n)l&&u.push(l(null));else if(Array.isArray(n))for(var i=0;i<n.length;i++)b(n[i],l,u);else u.push(l?l("string"==typeof n||"number"==typeof n?h(null,n,null,null):null!=n.__e||null!=n.__c?h(n.type,n.props,n.key,null):n):n);return u}function x(n,l,u,i,t){var o;for(o in u)o in l||C(n,o,null,u[o],i);for(o in l)t&&"function"!=typeof l[o]||"value"===o||"checked"===o||u[o]===l[o]||C(n,o,l[o],u[o],i)}function P(n,l,u){"-"===l[0]?n.setProperty(l,u):n[l]="number"==typeof u&&!1===c.test(l)?u+"px":null==u?"":u}function C(n,l,u,i,t){var o,r,f,e,c;if(t?"className"===l&&(l="class"):"class"===l&&(l="className"),"key"===l||"children"===l);else if("style"===l)if(o=n.style,"string"==typeof u)o.cssText=u;else{if("string"==typeof i&&(o.cssText="",i=null),i)for(r in i)u&&r in u||P(o,r,"");if(u)for(f in u)i&&u[f]===i[f]||P(o,f,u[f])}else"o"===l[0]&&"n"===l[1]?(e=l!==(l=l.replace(/Capture$/,"")),c=l.toLowerCase(),l=(c in n?c:l).slice(2),u?(i||n.addEventListener(l,N,e),(n.l||(n.l={}))[l]=u):n.removeEventListener(l,N,e)):"list"!==l&&"tagName"!==l&&"form"!==l&&"type"!==l&&"size"!==l&&!t&&l in n?n[l]=null==u?"":u:"function"!=typeof u&&"dangerouslySetInnerHTML"!==l&&(l!==(l=l.replace(/^xlink:?/,""))?null==u||!1===u?n.removeAttributeNS("http://www.w3.org/1999/xlink",l.toLowerCase()):n.setAttributeNS("http://www.w3.org/1999/xlink",l.toLowerCase(),u):null==u||!1===u?n.removeAttribute(l):n.setAttribute(l,u))}function N(l){this.l[l.type](n.event?n.event(l):l)}function z(l,u,i,t,o,r,f,e,c){var a,v,h,p,m,w,g,k,b,x,P=u.type;if(void 0!==u.constructor)return null;(a=n.__b)&&a(u);try{n:if("function"==typeof P){if(k=u.props,b=(a=P.contextType)&&t[a.__c],x=a?b?b.props.value:a.__:t,i.__c?g=(v=u.__c=i.__c).__=v.__E:("prototype"in P&&P.prototype.render?u.__c=v=new P(k,x):(u.__c=v=new y(k,x),v.constructor=P,v.render=D),b&&b.sub(v),v.props=k,v.state||(v.state={}),v.context=x,v.__n=t,h=v.__d=!0,v.__h=[]),null==v.__s&&(v.__s=v.state),null!=P.getDerivedStateFromProps&&(v.__s==v.state&&(v.__s=s({},v.__s)),s(v.__s,P.getDerivedStateFromProps(k,v.__s))),p=v.props,m=v.state,h)null==P.getDerivedStateFromProps&&null!=v.componentWillMount&&v.componentWillMount(),null!=v.componentDidMount&&v.__h.push(v.componentDidMount);else{if(null==P.getDerivedStateFromProps&&k!==p&&null!=v.componentWillReceiveProps&&v.componentWillReceiveProps(k,x),!v.__e&&null!=v.shouldComponentUpdate&&!1===v.shouldComponentUpdate(k,v.__s,x)){for(v.props=k,v.state=v.__s,v.__d=!1,v.__v=u,u.__e=i.__e,u.__k=i.__k,v.__h.length&&f.push(v),a=0;a<u.__k.length;a++)u.__k[a]&&(u.__k[a].__=u);break n}null!=v.componentWillUpdate&&v.componentWillUpdate(k,v.__s,x),null!=v.componentDidUpdate&&v.__h.push(function(){v.componentDidUpdate(p,m,w)})}v.context=x,v.props=k,v.state=v.__s,(a=n.__r)&&a(u),v.__d=!1,v.__v=u,v.__P=l,a=v.render(v.props,v.state,v.context),u.__k=null!=a&&a.type==d&&null==a.key?a.props.children:a,null!=v.getChildContext&&(t=s(s({},t),v.getChildContext())),h||null==v.getSnapshotBeforeUpdate||(w=v.getSnapshotBeforeUpdate(p,m)),_(l,u,i,t,o,r,f,e,c),v.base=u.__e,v.__h.length&&f.push(v),g&&(v.__E=v.__=null),v.__e=!1}else u.__e=$(i.__e,u,i,t,o,r,f,c);(a=n.diffed)&&a(u)}catch(l){n.__e(l,u,i)}return u.__e}function T(l,u){n.__c&&n.__c(u,l),l.some(function(u){try{l=u.__h,u.__h=[],l.some(function(n){n.call(u)})}catch(l){n.__e(l,u.__v)}})}function $(n,l,u,i,t,o,r,c){var s,a,v,h,p,d=u.props,y=l.props;if(t="svg"===l.type||t,null==n&&null!=o)for(s=0;s<o.length;s++)if(null!=(a=o[s])&&(null===l.type?3===a.nodeType:a.localName===l.type)){n=a,o[s]=null;break}if(null==n){if(null===l.type)return document.createTextNode(y);n=t?document.createElementNS("http://www.w3.org/2000/svg",l.type):document.createElement(l.type,y.is&&{is:y.is}),o=null}if(null===l.type)null!=o&&(o[o.indexOf(n)]=null),d!==y&&n.data!=y&&(n.data=y);else if(l!==u){if(null!=o&&(o[o.indexOf(n)]=null,o=e.slice.call(n.childNodes)),v=(d=u.props||f).dangerouslySetInnerHTML,h=y.dangerouslySetInnerHTML,!c){if(d===f)for(d={},p=0;p<n.attributes.length;p++)d[n.attributes[p].name]=n.attributes[p].value;(h||v)&&(h&&v&&h.__html==v.__html||(n.innerHTML=h&&h.__html||""))}x(n,y,d,t,c),l.__k=l.props.children,h||_(n,l,u,i,"foreignObject"!==l.type&&t,o,r,f,c),c||("value"in y&&void 0!==y.value&&y.value!==n.value&&(n.value=null==y.value?"":y.value),"checked"in y&&void 0!==y.checked&&y.checked!==n.checked&&(n.checked=y.checked))}return n}function j(l,u,i){try{"function"==typeof l?l(u):l.current=u}catch(l){n.__e(l,i)}}function A(l,u,i){var t,o,r;if(n.unmount&&n.unmount(l),(t=l.ref)&&(t.current&&t.current!==l.__e||j(t,null,u)),i||"function"==typeof l.type||(i=null!=(o=l.__e)),l.__e=l.__d=void 0,null!=(t=l.__c)){if(t.componentWillUnmount)try{t.componentWillUnmount()}catch(l){n.__e(l,u)}t.base=t.__P=null}if(t=l.__k)for(r=0;r<t.length;r++)t[r]&&A(t[r],u,i);null!=o&&a(o)}function D(n,l,u){return this.constructor(n,u)}function E(l,u,i){var t,r,c;n.__&&n.__(l,u),r=(t=i===o)?null:i&&i.__k||u.__k,l=v(d,null,[l]),c=[],z(u,(t?u:i||u).__k=l,r||f,f,void 0!==u.ownerSVGElement,i&&!t?[i]:r?null:e.slice.call(u.childNodes),c,i||f,t),T(c,l)}function H(n,l){E(n,l,o)}function I(n,l){return l=s(s({},n.props),l),arguments.length>2&&(l.children=e.slice.call(arguments,2)),h(n.type,l,l.key||n.key,l.ref||n.ref)}function L(n){var l={},u={__c:"__cC"+r++,__:n,Consumer:function(n,l){return n.children(l)},Provider:function(n){var i,t=this;return this.getChildContext||(i=[],this.getChildContext=function(){return l[u.__c]=t,l},this.shouldComponentUpdate=function(l){n.value!==l.value&&i.some(function(n){n.context=l.value,g(n)})},this.sub=function(n){i.push(n);var l=n.componentWillUnmount;n.componentWillUnmount=function(){i.splice(i.indexOf(n),1),l&&l.call(n)}}),n.children}};return u.Consumer.contextType=u,u}n={__e:function(n,l){for(var u,i;l=l.__;)if((u=l.__c)&&!u.__)try{if(u.constructor&&null!=u.constructor.getDerivedStateFromError&&(i=!0,u.setState(u.constructor.getDerivedStateFromError(n))),null!=u.componentDidCatch&&(i=!0,u.componentDidCatch(n)),i)return g(u.__E=u)}catch(l){n=l}throw n}},l=function(n){return null!=n&&void 0===n.constructor},y.prototype.setState=function(n,l){var u;u=this.__s!==this.state?this.__s:this.__s=s({},this.state),"function"==typeof n&&(n=n(u,this.props)),n&&s(u,n),null!=n&&this.__v&&(l&&this.__h.push(l),g(this))},y.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),g(this))},y.prototype.render=d,u=[],i="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,o=f,r=0;
//# sourceMappingURL=preact.module.js.map


/***/ }),

/***/ "./node_modules/preact/hooks/dist/hooks.module.js":
/*!********************************************************!*\
  !*** ./node_modules/preact/hooks/dist/hooks.module.js ***!
  \********************************************************/
/*! exports provided: useState, useReducer, useEffect, useLayoutEffect, useRef, useImperativeHandle, useMemo, useCallback, useContext, useDebugValue, useErrorBoundary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useState", function() { return v; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useReducer", function() { return m; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useEffect", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLayoutEffect", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRef", function() { return y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useImperativeHandle", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMemo", function() { return s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCallback", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useContext", function() { return T; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDebugValue", function() { return w; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useErrorBoundary", function() { return A; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
var t,r,u,i=[],o=preact__WEBPACK_IMPORTED_MODULE_0__["options"].__r,f=preact__WEBPACK_IMPORTED_MODULE_0__["options"].diffed,c=preact__WEBPACK_IMPORTED_MODULE_0__["options"].__c,e=preact__WEBPACK_IMPORTED_MODULE_0__["options"].unmount;function a(t){preact__WEBPACK_IMPORTED_MODULE_0__["options"].__h&&preact__WEBPACK_IMPORTED_MODULE_0__["options"].__h(r);var u=r.__H||(r.__H={__:[],__h:[]});return t>=u.__.length&&u.__.push({}),u.__[t]}function v(n){return m(x,n)}function m(n,u,i){var o=a(t++);return o.__c||(o.__c=r,o.__=[i?i(u):x(void 0,u),function(t){var r=n(o.__[0],t);o.__[0]!==r&&(o.__[0]=r,o.__c.setState({}))}]),o.__}function p(n,u){var i=a(t++);q(i.__H,u)&&(i.__=n,i.__H=u,r.__H.__h.push(i))}function l(n,u){var i=a(t++);q(i.__H,u)&&(i.__=n,i.__H=u,r.__h.push(i))}function y(n){return s(function(){return{current:n}},[])}function d(n,t,r){l(function(){"function"==typeof n?n(t()):n&&(n.current=t())},null==r?r:r.concat(n))}function s(n,r){var u=a(t++);return q(u.__H,r)?(u.__H=r,u.__h=n,u.__=n()):u.__}function h(n,t){return s(function(){return n},t)}function T(n){var u=r.context[n.__c];if(!u)return n.__;var i=a(t++);return null==i.__&&(i.__=!0,u.sub(r)),u.props.value}function w(t,r){preact__WEBPACK_IMPORTED_MODULE_0__["options"].useDebugValue&&preact__WEBPACK_IMPORTED_MODULE_0__["options"].useDebugValue(r?r(t):t)}function A(n){var u=a(t++),i=v();return u.__=n,r.componentDidCatch||(r.componentDidCatch=function(n){u.__&&u.__(n),i[1](n)}),[i[0],function(){i[1](void 0)}]}function F(){i.some(function(t){if(t.__P)try{t.__H.__h.forEach(_),t.__H.__h.forEach(g),t.__H.__h=[]}catch(r){return preact__WEBPACK_IMPORTED_MODULE_0__["options"].__e(r,t.__v),!0}}),i=[]}function _(n){n.t&&n.t()}function g(n){var t=n.__();"function"==typeof t&&(n.t=t)}function q(n,t){return!n||t.some(function(t,r){return t!==n[r]})}function x(n,t){return"function"==typeof t?t(n):t}preact__WEBPACK_IMPORTED_MODULE_0__["options"].__r=function(n){o&&o(n),t=0,(r=n.__c).__H&&(r.__H.__h.forEach(_),r.__H.__h.forEach(g),r.__H.__h=[])},preact__WEBPACK_IMPORTED_MODULE_0__["options"].diffed=function(t){f&&f(t);var r=t.__c;if(r){var o=r.__H;o&&o.__h.length&&(1!==i.push(r)&&u===preact__WEBPACK_IMPORTED_MODULE_0__["options"].requestAnimationFrame||((u=preact__WEBPACK_IMPORTED_MODULE_0__["options"].requestAnimationFrame)||function(n){var t,r=function(){clearTimeout(u),cancelAnimationFrame(t),setTimeout(n)},u=setTimeout(r,100);"undefined"!=typeof window&&(t=requestAnimationFrame(r))})(F))}},preact__WEBPACK_IMPORTED_MODULE_0__["options"].__c=function(t,r){r.some(function(t){try{t.__h.forEach(_),t.__h=t.__h.filter(function(n){return!n.__||g(n)})}catch(u){r.some(function(n){n.__h&&(n.__h=[])}),r=[],preact__WEBPACK_IMPORTED_MODULE_0__["options"].__e(u,t.__v)}}),c&&c(t,r)},preact__WEBPACK_IMPORTED_MODULE_0__["options"].unmount=function(t){e&&e(t);var r=t.__c;if(r){var u=r.__H;if(u)try{u.__.forEach(function(n){return n.t&&n.t()})}catch(t){preact__WEBPACK_IMPORTED_MODULE_0__["options"].__e(t,r.__v)}}};
//# sourceMappingURL=hooks.module.js.map


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/universal-user-agent/browser.js":
/*!******************************************************!*\
  !*** ./node_modules/universal-user-agent/browser.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = getUserAgentBrowser

function getUserAgentBrowser () {
  /* global navigator */
  return navigator.userAgent
}


/***/ }),

/***/ "./node_modules/url-template/lib/url-template.js":
/*!*******************************************************!*\
  !*** ./node_modules/url-template/lib/url-template.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function (root, factory) {
    if (true) {
        module.exports = factory();
    } else {}
}(this, function () {
  /**
   * @constructor
   */
  function UrlTemplate() {
  }

  /**
   * @private
   * @param {string} str
   * @return {string}
   */
  UrlTemplate.prototype.encodeReserved = function (str) {
    return str.split(/(%[0-9A-Fa-f]{2})/g).map(function (part) {
      if (!/%[0-9A-Fa-f]/.test(part)) {
        part = encodeURI(part).replace(/%5B/g, '[').replace(/%5D/g, ']');
      }
      return part;
    }).join('');
  };

  /**
   * @private
   * @param {string} str
   * @return {string}
   */
  UrlTemplate.prototype.encodeUnreserved = function (str) {
    return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
      return '%' + c.charCodeAt(0).toString(16).toUpperCase();
    });
  }

  /**
   * @private
   * @param {string} operator
   * @param {string} value
   * @param {string} key
   * @return {string}
   */
  UrlTemplate.prototype.encodeValue = function (operator, value, key) {
    value = (operator === '+' || operator === '#') ? this.encodeReserved(value) : this.encodeUnreserved(value);

    if (key) {
      return this.encodeUnreserved(key) + '=' + value;
    } else {
      return value;
    }
  };

  /**
   * @private
   * @param {*} value
   * @return {boolean}
   */
  UrlTemplate.prototype.isDefined = function (value) {
    return value !== undefined && value !== null;
  };

  /**
   * @private
   * @param {string}
   * @return {boolean}
   */
  UrlTemplate.prototype.isKeyOperator = function (operator) {
    return operator === ';' || operator === '&' || operator === '?';
  };

  /**
   * @private
   * @param {Object} context
   * @param {string} operator
   * @param {string} key
   * @param {string} modifier
   */
  UrlTemplate.prototype.getValues = function (context, operator, key, modifier) {
    var value = context[key],
        result = [];

    if (this.isDefined(value) && value !== '') {
      if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
        value = value.toString();

        if (modifier && modifier !== '*') {
          value = value.substring(0, parseInt(modifier, 10));
        }

        result.push(this.encodeValue(operator, value, this.isKeyOperator(operator) ? key : null));
      } else {
        if (modifier === '*') {
          if (Array.isArray(value)) {
            value.filter(this.isDefined).forEach(function (value) {
              result.push(this.encodeValue(operator, value, this.isKeyOperator(operator) ? key : null));
            }, this);
          } else {
            Object.keys(value).forEach(function (k) {
              if (this.isDefined(value[k])) {
                result.push(this.encodeValue(operator, value[k], k));
              }
            }, this);
          }
        } else {
          var tmp = [];

          if (Array.isArray(value)) {
            value.filter(this.isDefined).forEach(function (value) {
              tmp.push(this.encodeValue(operator, value));
            }, this);
          } else {
            Object.keys(value).forEach(function (k) {
              if (this.isDefined(value[k])) {
                tmp.push(this.encodeUnreserved(k));
                tmp.push(this.encodeValue(operator, value[k].toString()));
              }
            }, this);
          }

          if (this.isKeyOperator(operator)) {
            result.push(this.encodeUnreserved(key) + '=' + tmp.join(','));
          } else if (tmp.length !== 0) {
            result.push(tmp.join(','));
          }
        }
      }
    } else {
      if (operator === ';') {
        if (this.isDefined(value)) {
          result.push(this.encodeUnreserved(key));
        }
      } else if (value === '' && (operator === '&' || operator === '?')) {
        result.push(this.encodeUnreserved(key) + '=');
      } else if (value === '') {
        result.push('');
      }
    }
    return result;
  };

  /**
   * @param {string} template
   * @return {function(Object):string}
   */
  UrlTemplate.prototype.parse = function (template) {
    var that = this;
    var operators = ['+', '#', '.', '/', ';', '?', '&'];

    return {
      expand: function (context) {
        return template.replace(/\{([^\{\}]+)\}|([^\{\}]+)/g, function (_, expression, literal) {
          if (expression) {
            var operator = null,
                values = [];

            if (operators.indexOf(expression.charAt(0)) !== -1) {
              operator = expression.charAt(0);
              expression = expression.substr(1);
            }

            expression.split(/,/g).forEach(function (variable) {
              var tmp = /([^:\*]*)(?::(\d+)|(\*))?/.exec(variable);
              values.push.apply(values, that.getValues(context, operator, tmp[1], tmp[2] || tmp[3]));
            });

            if (operator && operator !== '+') {
              var separator = ',';

              if (operator === '?') {
                separator = '&';
              } else if (operator !== '#') {
                separator = operator;
              }
              return (values.length !== 0 ? operator : '') + values.join(separator);
            } else {
              return values.join(',');
            }
          } else {
            return that.encodeReserved(literal);
          }
        });
      }
    };
  };

  return new UrlTemplate();
}));


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./src/data/repos.js":
/*!***************************!*\
  !*** ./src/data/repos.js ***!
  \***************************/
/*! exports provided: bootstrap, tock, static18f */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bootstrap", function() { return bootstrap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tock", function() { return tock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "static18f", function() { return static18f; });
var bootstrap = '[{"days":[0,1,1,0,1,4,1],"count":8},{"days":[1,0,2,3,0,0,0],"count":6},{"days":[0,3,2,6,3,18,36],"count":68},{"days":[22,20,20,6,5,0,1],"count":74},{"days":[2,2,6,2,10,0,7],"count":29},{"days":[1,2,10,12,9,6,18],"count":58},{"days":[7,0,0,2,2,0,0],"count":11},{"days":[14,2,1,6,13,24,24],"count":84},{"days":[3,6,7,2,1,1,1],"count":21},{"days":[2,0,1,1,3,3,4],"count":14},{"days":[15,2,3,0,1,0,1],"count":22},{"days":[0,0,0,1,4,2,0],"count":7},{"days":[0,5,2,0,1,5,0],"count":13},{"days":[3,10,2,2,13,28,6],"count":64},{"days":[15,10,13,3,11,6,2],"count":60},{"days":[9,7,8,1,2,6,3],"count":36},{"days":[1,5,4,2,4,2,2],"count":20},{"days":[1,8,15,3,8,4,4],"count":43},{"days":[0,3,6,3,1,3,0],"count":16},{"days":[10,1,0,1,3,0,1],"count":16},{"days":[2,2,20,12,9,2,7],"count":54},{"days":[19,28,15,24,3,1,4],"count":94},{"days":[3,5,5,2,2,3,1],"count":21},{"days":[2,5,7,15,35,10,2],"count":76},{"days":[31,7,2,5,2,3,3],"count":53},{"days":[10,10,12,4,0,8,0],"count":44},{"days":[1,13,6,3,4,1,2],"count":30},{"days":[0,2,1,5,4,2,0],"count":14},{"days":[2,3,0,0,1,10,4],"count":20},{"days":[0,3,2,2,1,1,3],"count":12},{"days":[0,0,2,0,1,1,0],"count":4},{"days":[0,1,2,1,1,0,5],"count":10},{"days":[0,2,0,0,0,13,11],"count":26},{"days":[4,1,14,12,4,5,14],"count":54},{"days":[9,5,8,5,0,2,1],"count":30},{"days":[0,1,1,1,7,1,6],"count":17},{"days":[8,6,6,6,6,2,8],"count":42},{"days":[5,4,2,0,0,0,0],"count":11},{"days":[1,0,3,3,1,2,2],"count":12},{"days":[1,1,0,1,0,0,3],"count":6},{"days":[5,4,2,1,0,2,0],"count":14},{"days":[1,5,1,1,1,0,3],"count":12},{"days":[3,0,0,0,0,2,2],"count":7},{"days":[3,1,1,2,2,1,0],"count":10},{"days":[0,8,10,7,1,3,1],"count":30},{"days":[0,0,7,2,0,0,0],"count":9},{"days":[0,0,4,0,2,2,15],"count":23},{"days":[6,2,0,0,2,0,1],"count":11},{"days":[0,3,4,4,3,1,1],"count":16},{"days":[0,5,3,0,1,0,0],"count":9},{"days":[1,1,3,0,2,1,0],"count":8},{"days":[1,1,0,0,0,0,0],"count":2}]';
var tock = '[{"days":[0,0,0,0,0,0,0], "count": 0 },{"days":[0,0,0,0,0,0,0], "count": 0},{"days":[0,0,0,0,0,0,0], "count": 0},{"days":[0,0,0,0,0,0,0], "count": 0},{"days":[0,0,0,0,0,0,0], "count": 0},{"days":[0,0,0,0,0,0,0], "count": 0},{"days":[0,0,0,0,0,0,0], "count": 0},{"days":[0,0,2,3,1,1,0], "count": 7},{"days":[0,0,0,0,2,1,0], "count": 3},{"days":[0,7,4,3,5,4,0], "count": 23},{"days":[0,0,0,5,0,1,0], "count": 6},{"days":[0,1,0,0,0,0,0], "count": 1},{"days":[0,0,0,3,0,2,0], "count": 5},{"days":[0,0,0,0,0,2,0], "count": 2},{"days":[0,0,0,0,0,1,0], "count": 1},{"days":[0,0,2,3,0,0,0], "count": 5},{"days":[0,0,2,0,0,0,0], "count": 2},{"days":[0,0,0,0,0,4,0], "count": 4},{"days":[0,0,0,3,0,0,0], "count": 3},{"days":[0,0,1,0,0,0,0], "count": 1},{"days":[0,0,1,0,1,0,0], "count": 2},{"days":[0,0,5,2,2,0,0], "count": 9},{"days":[0,0,0,0,0,0,0], "count": 0},{"days":[0,0,0,0,0,0,0], "count": 0},{"days":[0,0,0,0,0,0,0], "count": 0},{"days":[0,0,0,0,0,0,0], "count": 0},{"days":[0,0,0,0,0,0,0], "count": 0},{"days":[0,0,0,0,0,1,0], "count": 1},{"days":[0,0,1,3,0,0,0], "count": 4},{"days":[0,0,1,0,0,0,0], "count": 1},{"days":[0,0,0,0,0,0,0], "count": 0},{"days":[0,0,0,0,0,0,0], "count": 0},{"days":[0,0,0,0,1,11,0], "count": 12},{"days":[0,0,3,0,2,5,0], "count": 10},{"days":[0,0,0,0,0,0,0], "count": 0},{"days":[0,0,0,1,1,1,0], "count": 3},{"days":[0,0,0,1,2,0,0], "count": 3},{"days":[0,6,3,7,6,20,0], "count": 39},{"days":[0,2,1,3,4,0,0], "count": 10 },{"days":[0,2,1,4,4,0,0], "count": 11},{"days":[0,0,1,5,3,0,0], "count": 9},{"days":[0,0,6,9,6,4,0], "count": 25},{"days":[0,0,1,1,18,6,0], "count": 26},{"days":[0,12,10,7,14,3,0], "count": 36},{"days":[0,0,0,2,1,3,0], "count": 6},{"days":[1,10,6,5,13,8,0], "count": 43},{"days":[0,3,3,11,12,0,0], "count": 29},{"days":[0,7,6,3,0,2,0], "count": 18},{"days":[0,6,2,0,0,0,0], "count": 8},{"days":[0,20,0,0,0,0,0], "count": 20},{"days":[0,0,0,2,0,0,0], "count": 2},{"days":[0,0,0,0,0,0,0], "count": 0}]';
var static18f = '[{"days":[0,1,0,8,14,2,0]},{"days":[0,3,6,0,1,0,0]},{"days":[0,2,0,0,5,0,0]},{"days":[0,0,5,3,2,0,0]},{"days":[0,1,0,1,0,0,0]},{"days":[0,0,0,0,0,0,0]},{"days":[0,2,0,0,5,3,0]},{"days":[0,6,0,0,0,1,0]},{"days":[0,1,0,0,1,1,0]},{"days":[0,4,2,6,5,0,0]},{"days":[0,0,0,0,0,0,0]},{"days":[0,0,1,3,1,8,0]},{"days":[0,5,0,0,0,1,0]},{"days":[0,3,2,1,0,1,0]},{"days":[0,1,0,0,0,3,0]},{"days":[0,5,3,3,1,0,0]},{"days":[0,7,1,2,0,4,0]},{"days":[0,0,5,5,5,8,0]},{"days":[0,4,2,1,0,1,0]},{"days":[0,5,5,8,0,0,0]},{"days":[0,2,2,4,1,0,0]},{"days":[1,2,4,5,1,0,0]},{"days":[0,1,3,4,0,0,0]},{"days":[0,2,0,0,0,1,0]},{"days":[0,2,2,0,1,2,0]},{"days":[0,1,1,0,2,0,0]},{"days":[0,0,0,12,1,0,0]},{"days":[0,1,0,1,5,2,0]},{"days":[0,3,0,0,0,0,0]},{"days":[0,0,2,1,2,2,0]},{"days":[0,0,2,2,0,0,0]},{"days":[0,17,1,3,2,0,0]},{"days":[0,1,0,0,0,0,0]},{"days":[0,0,0,2,0,1,0]},{"days":[0,0,1,2,1,1,0]},{"days":[0,3,0,4,1,0,0]},{"days":[0,0,4,2,0,0,0]},{"days":[0,4,1,1,2,2,0]},{"days":[0,0,3,3,6,0,0]},{"days":[0,0,5,0,0,0,0]},{"days":[0,0,4,0,0,0,0]},{"days":[0,0,3,6,2,0,0]},{"days":[0,0,3,8,0,0,0]},{"days":[0,0,2,2,3,0,0]},{"days":[0,4,4,2,2,0,0]},{"days":[0,2,0,0,3,0,0]},{"days":[0,4,5,0,0,1,0]},{"days":[0,0,0,1,2,0,0]},{"days":[0,1,0,0,0,0,0]},{"days":[0,0,3,0,0,0,0]},{"days":[0,2,0,0,0,0,0]},{"days":[0,0,0,0,0,0,0]}]';


/***/ }),

/***/ "./src/factories/envelope-factory.js":
/*!*******************************************!*\
  !*** ./src/factories/envelope-factory.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var types_filter_envelope__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! types/filter-envelope */ "./src/types/filter-envelope.js");
/* harmony import */ var models_envelope__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! models/envelope */ "./src/models/envelope.js");



var selectEnvelopeType = function selectEnvelopeType() {
  return Math.random() <= 0.5 ? types_filter_envelope__WEBPACK_IMPORTED_MODULE_0__["default"].basic : types_filter_envelope__WEBPACK_IMPORTED_MODULE_0__["default"].pluck;
};
/**
 * Factory used to generate an envelope settings object to be applied to a
 * sound source. If an invalid preset is requested, or the factory is
 * called with no arguments, a random preset will be returned.
 * 
 * @param {string} type the name of the envelope preset to create
 * @returns An instance of FilterEnvelope, which controls a sound source's
 * attack, decay, sustain, release, and hold values 
 */


var envelope = function envelope(type) {
  var filterType = !type || !types_filter_envelope__WEBPACK_IMPORTED_MODULE_0__["default"][type] ? selectEnvelopeType() : type;
  return new models_envelope__WEBPACK_IMPORTED_MODULE_1__["default"](filterType);
};

/* harmony default export */ __webpack_exports__["default"] = (envelope);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ui_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ui/index */ "./src/ui/index.js");


/***/ }),

/***/ "./src/models/analyser.js":
/*!********************************!*\
  !*** ./src/models/analyser.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var services_audio_context_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! services/audio-context-provider */ "./src/services/audio-context-provider.js");


var analyser = function analyser(context) {
  return function (_ref) {
    var fftSize = _ref.fftSize;
    var analyserNode = context.createAnalyser();
    analyserNode.fftSize = fftSize;
    return analyserNode;
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(services_audio_context_provider__WEBPACK_IMPORTED_MODULE_0__["default"])(analyser));

/***/ }),

/***/ "./src/models/audio-graph.js":
/*!***********************************!*\
  !*** ./src/models/audio-graph.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var services_audio_channel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! services/audio-channel */ "./src/services/audio-channel.js");
/* harmony import */ var models_analyser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! models/analyser */ "./src/models/analyser.js");
/* harmony import */ var services_oscillator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! services/oscillator */ "./src/services/oscillator.js");




var AudioGraph = function AudioGraph(sequence) {
  var channel = Object(services_audio_channel__WEBPACK_IMPORTED_MODULE_0__["default"])();
  var analyserNode = Object(models_analyser__WEBPACK_IMPORTED_MODULE_1__["default"])({
    fftSize: 128
  });
  sequence.toneClusters.forEach(function (toneCluster) {
    toneCluster.oscillators = toneCluster.notes.map(function (note) {
      var osc = Object(services_oscillator__WEBPACK_IMPORTED_MODULE_2__["default"])(note);
      osc.connectTo(osc.context.destinationStream);
      channel.addNode(osc);
      return {
        osc: osc,
        noteName: note.noteName,
        frequency: note.frequency,
        peak: note.peak,
        timing: note.timing,
        duration: note.duration,
        endTime: note.endTime
      };
    });
  });
  channel.channel.connect(analyserNode);
  analyserNode.connect(analyserNode.context.destination);
  return {
    channel: channel,
    analyser: analyserNode,
    sequence: sequence,
    context: analyserNode.context
  };
}; // class Graph {
//   constructor(fftSize) {
//     this.output = audioChannel();
//     this.analyser = analyser({ fftSize });
//     this.output.channel.connect(this.analyser);
//     this.analyser.connect(this.analyser.context.destination);
//   }
//   build(sequence) {
//     sequence.toneClusters.forEach((toneCluster) => {
//       toneCluster.oscillators = toneCluster.notes.map(note => {
//           const osc = oscillator(note);
//           osc.connectTo(osc.context.destinationStream);
//           this.output.addNode(osc);
//           return {
//             osc,
//             noteName: note.noteName,
//             frequency: note.frequency,
//             peak: note.peak,
//             timing: note.timing,
//             duration: note.duration,
//             endTime: note.endTime
//           };
//         });
//     });
//     return sequence;
//   }
// }
// export { Graph };


/* harmony default export */ __webpack_exports__["default"] = (AudioGraph);

/***/ }),

/***/ "./src/models/envelope.js":
/*!********************************!*\
  !*** ./src/models/envelope.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FilterEnvelope = function FilterEnvelope(settings) {
  _classCallCheck(this, FilterEnvelope);

  if (!settings) {
    throw new Error('FilterEnvelope: No settings provided.');
  } // attack - time from silent to peak volume


  this.a = settings.a; // decay - time from attack level to sustain level

  this.d = settings.d; // sustain - length of time the peak level of the note is held following the attack ramp

  this.s = settings.s; // release - length of time from sustain level to silence once sound is done playing 

  this.r = settings.r; // hold - attenuated peak volume held for the (attack + sustain + release) time
  // hold is an actual level, the other values are expressions of time

  this.h = settings.h;
};

/* harmony default export */ __webpack_exports__["default"] = (FilterEnvelope);

/***/ }),

/***/ "./src/models/meter.js":
/*!*****************************!*\
  !*** ./src/models/meter.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var services_timing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! services/timing */ "./src/services/timing.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


/**
 * @class Meter
 * 
 * @description Basics of computing beats for a given time signature
 * meter = new Meter([6,8]) =>
 * 
 * There are three quarter notes in a single measure of 6/8
 * 
 * @example
 * meter.quarterNotesPerMeasure
 * >> 3
 * 
 * However, 6/8 is a compound duple meter, meaning there are only 2 beats
 * Beats are always expressed as a function of the numerator
 * @example
 * 
 * numerator = 6
 * 
 * meter.beatsPerBar >> 2
 * 
 * To represent 3 quarter notes, we need a dotted quarter, since a quarter note (1)
 * and a dot (.5) make 1.5, and 1.5 * 2 = 3
 * 
 * @example
 * meter.beatLength >> 1.5
 * 
 * Each measure should be subdivided into beats. and each of those beats
 * should be further subdivided into the notes needed to add up to
 * that number of beats
 * 
*/

var Meter =
/*#__PURE__*/
function () {
  /**
   * @constructor
   * @param {Object} props
   * @params {Array} props.timeSignature 
   */
  function Meter(_ref) {
    var _ref$timeSignature = _ref.timeSignature,
        timeSignature = _ref$timeSignature === void 0 ? [4, 4] : _ref$timeSignature,
        _ref$tempo = _ref.tempo,
        tempo = _ref$tempo === void 0 ? 120 : _ref$tempo;

    _classCallCheck(this, Meter);

    this.tempo = tempo;
    /**
     * @type {Number} 
    */

    this.numerator = timeSignature[0];
    /**
     * This determines what division of a whole note constitutes a single beat
     * @example
     * In 6/8 time, the 8 (one eigth note) is considered a single beat.
     * This is computable via the formula (beats / wholeNoteValue)
     * 
     * @type
     * {Number}
     */

    this.denominator = timeSignature[1];
    /**
     * @type Number
     */

    this.quarterNotesPerMeasure = 4 * (this.numerator / this.denominator);
    this.beatsPerBar = this.getBeatsPerBar();
    this.beatLength = this.quarterNotesPerMeasure / this.beatsPerBar;
    this.noteTiming = Object(services_timing__WEBPACK_IMPORTED_MODULE_0__["getNoteTimings"])(this.tempo, this.beatLength);
  }

  _createClass(Meter, [{
    key: "getBeatsPerBar",
    value: function getBeatsPerBar() {
      switch (this.numerator) {
        case 6:
          return 2;

        case 2:
        case 3:
        case 4:
          return this.numerator;
      }
    }
  }, {
    key: "getTimeForNote",
    value: function getTimeForNote(type) {
      return this.noteTiming[type];
    }
  }]);

  return Meter;
}();

/* harmony default export */ __webpack_exports__["default"] = (Meter);

/***/ }),

/***/ "./src/models/tone.js":
/*!****************************!*\
  !*** ./src/models/tone.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var services_frequency__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! services/frequency */ "./src/services/frequency.js");
/* harmony import */ var factories_envelope_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! factories/envelope-factory */ "./src/factories/envelope-factory.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var WEB_AUDIO_ZERO = .0001;
var msInSecond = 1000;
var types = ['sine', 'square', 'triangle', 'sawtooth'];

var getRandomWaveType = function getRandomWaveType() {
  return types[Math.floor(Math.random() * 4)];
};

var Tone =
/*#__PURE__*/
function () {
  function Tone(_ref) {
    var noteName = _ref.noteName,
        timing = _ref.timing,
        peak = _ref.peak,
        noteType = _ref.noteType,
        _ref$envelope = _ref.envelope,
        envelope = _ref$envelope === void 0 ? Object(factories_envelope_factory__WEBPACK_IMPORTED_MODULE_1__["default"])() : _ref$envelope,
        _ref$toneType = _ref.toneType,
        toneType = _ref$toneType === void 0 ? 'triangle' : _ref$toneType;

    _classCallCheck(this, Tone);

    this.noteType = noteType;
    this.noteName = noteName;
    this.frequency = Object(services_frequency__WEBPACK_IMPORTED_MODULE_0__["default"])(noteName);
    this.envelope = this.resolveEnvelopeValues(envelope);
    this.duration = this.envelope.decay + this.envelope.sustain;
    this.peak = noteName ? peak : WEB_AUDIO_ZERO, this.toneType = toneType;
    this.timing = timing;
    this.startTime = null;
    this.endTime = null;
    this.attenuateVolume();
  }

  _createClass(Tone, [{
    key: "resolveEnvelopeValues",
    value: function resolveEnvelopeValues(envelope) {
      return {
        attack: envelope.a / msInSecond,
        decay: envelope.d / msInSecond,
        sustain: envelope.s / msInSecond,
        release: envelope.r / msInSecond,
        hold: envelope.h / 100
      };
    }
  }, {
    key: "attenuateVolume",
    value: function attenuateVolume() {
      if (this.frequency > 800) {
        this.peak -= this.peak / 10;
      }
    }
  }, {
    key: "addTimingInfo",
    value: function addTimingInfo(offsetStartTime) {
      var noteEnd = offsetStartTime + this.duration + this.timing;
      this.startTime = offsetStartTime;
      this.endTime = noteEnd;
    }
  }]);

  return Tone;
}();

/* harmony default export */ __webpack_exports__["default"] = (Tone);

/***/ }),

/***/ "./src/services/audio-channel.js":
/*!***************************************!*\
  !*** ./src/services/audio-channel.js ***!
  \***************************************/
/*! exports provided: audioChannel, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "audioChannel", function() { return audioChannel; });
/* harmony import */ var services_audio_context_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! services/audio-context-provider */ "./src/services/audio-context-provider.js");

var defaultChannelGain = .8;
/**
 * 
 * Abstraction that groups audio nodes together. Nodes passed to the channel connect
 * to the channel's internal gain node, which then connects to the audio context's
 * destination
 * 
 * TODO: this shows need for abstraction of audio node, since both oscillator
 * and this channel node need gain functionality. or at least a gain decorator.
 * think like a linked list, where any given node is also a list?
 * 
 */

var audioChannel = function audioChannel(context) {
  return function () {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$gain = _ref.gain,
        gain = _ref$gain === void 0 ? defaultChannelGain : _ref$gain;

    var channelGain = context.createGain();
    channelGain.gain.value = gain;
    channelGain.connect(context.destination);
    return {
      addNode: function addNode(audioNode) {
        audioNode.connectTo(channelGain);
      },
      addNodes: function addNodes(audioNodes) {
        audioNodes.forEach(function (audioNode) {
          audioNode.connectTo(channelGain);
        });
      },
      channel: channelGain
    };
  };
};


/* harmony default export */ __webpack_exports__["default"] = (Object(services_audio_context_provider__WEBPACK_IMPORTED_MODULE_0__["default"])(audioChannel));

/***/ }),

/***/ "./src/services/audio-context-provider.js":
/*!************************************************!*\
  !*** ./src/services/audio-context-provider.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// TODO: Unsure if this `context` var is technically a singleton when imported
// into multiple files, or if it matters.
var context = new AudioContext();
context.destinationStream = context.createMediaStreamDestination(); // Inject singleton audio context into a factory function.
// TODO: factory fn should return object or another fn?

var AudioContextProvider = function AudioContextProvider(provided) {
  return provided(context);
};

/* harmony default export */ __webpack_exports__["default"] = (AudioContextProvider);

/***/ }),

/***/ "./src/services/build-note-sequence.js":
/*!*********************************************!*\
  !*** ./src/services/build-note-sequence.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var services_note_sequence__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! services/note-sequence */ "./src/services/note-sequence.js");


var normalizeRepoStats = function normalizeRepoStats(data) {
  /**
   * stats are returned as an array of objects.
   * The first key is the one we care about, `days`.
   * It is an array of 7 entries, with each entry corresponding
   * to the number of commits made to the repo on a day of the week.
   * Index 0 is sunday, 1 in monday, etc.
   */
  var normalized = data.map(function (datum) {
    return {
      days: datum.days,
      count: datum.total || datum.count
    };
  });
  return normalized;
};

var buildSequence = function buildSequence(data) {
  var normalized = normalizeRepoStats(data);
  return Object(services_note_sequence__WEBPACK_IMPORTED_MODULE_0__["default"])({
    commitStats: normalized,
    bpm: 168,
    timeSignature: [6, 8]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (buildSequence);

/***/ }),

/***/ "./src/services/chord.js":
/*!*******************************!*\
  !*** ./src/services/chord.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var types_scales__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! types/scales */ "./src/types/scales.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


/**
 * Returns a note in the supplied scale and the note's octave
 * as a string
 * 
 * @param {Array} scale list of note names as a string
 * @param {Number} octaveMin minimum potential octave of the note
 * @param {Number} octaveMax Maximum potential octave of the note
 * @param {Number} notePosition Which note to pull from the scale
 */

var getNoteAndOctave = function getNoteAndOctave(scale, octaveMin, octaveMax, notePosition) {
  var octaveRange = Math.random() * (octaveMax - octaveMin) + octaveMin;
  var octave = Math.floor(octaveRange);
  return "".concat(scale[notePosition]).concat(octave);
};
/**
 * Represents an abstract container for a group of sounds.
 * It's purpose is to provide general information about the sounds are
 * arrayed at a particular point it time:
 * - their overall volume
 * - the scale from which the sounds are derived, and the resultant note names
 * - the speed of the slowest note. This is particularly important,
 * as it determines how long this cluster of tones will sound.
 * 
 * This class DOES NOT contain any information about the quality of the notes
 * it contains, beyond the raw note name. Actual note frequency and timing information
 * lives in the Note class
 */


var Chord =
/*#__PURE__*/
function () {
  /**
   * @param {Object} props The properties this class accepts
   * @param {Number} props.volume The overall volume of the group of notes this object describes
   * @param {Array} props.scale The musical scale this group of tones pulls from, represented as a 7-element list
   * @returns Chord
   */
  function Chord(_ref) {
    var volume = _ref.volume,
        _ref$scale = _ref.scale,
        scale = _ref$scale === void 0 ? types_scales__WEBPACK_IMPORTED_MODULE_0__["default"].PHRYGIAN : _ref$scale;

    _classCallCheck(this, Chord);

    // Speed helps determine the length of the note. 0 -> slowest, 100 -> fastest
    this.speed = 0; // maybe i can randomly assign these volumes so
    // like, a single note can randomly have either a higher volume
    // or not, basically an accent?

    this.volume = volume; // Array of strings representing the note name in western English standard musical notation
    // @example E4

    this.notes = [];
    this.scale = scale;
    this.time = null;
  }

  _createClass(Chord, [{
    key: "addNotes",
    // TODO: this assumes collection of data in 7 day format,
    // which I dont love
    value: function addNotes(data) {
      var _this = this;

      this.notes = data.reduce(function (notes, count, index) {
        if (count) {
          notes.push(getNoteAndOctave(_this.scale, 7, 3, index));
        }

        _this.speed = Math.max(count, _this.speed);
        return notes;
      }, [0]);
    }
  }, {
    key: "totalTime",
    get: function get() {
      return this.time;
    },
    set: function set(value) {
      this.time = value;
    }
  }]);

  return Chord;
}();

/* harmony default export */ __webpack_exports__["default"] = (Chord);

/***/ }),

/***/ "./src/services/frequency.js":
/*!***********************************!*\
  !*** ./src/services/frequency.js ***!
  \***********************************/
/*! exports provided: toMIDI, fromMIDI, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toMIDI", function() { return toMIDI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromMIDI", function() { return fromMIDI; });
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// A above middle C resides in the 4th octave
var BASE_OCTAVE = 4; // value (in Hz) of A above middle C

var A_ABOVE_MIDDLE_C = 440; // The above note value expressed as a MIDI number

var MIDI_A4 = 69; // represents 1/12th of an octave, the distance between all notes
// in an equal temperment system

var EVEN_TEMPERED_RATIO = Math.pow(2, 1 / 12);
var NOTES_PER_OCTAVE = 12;
var SILENCE = .01;
var NOTES = {
  C: 'C',
  D: 'D',
  E: 'E',
  F: 'F',
  G: 'G',
  A: 'A',
  B: 'B'
}; // All half steps assume a distance from A4, that is, the A
// above middle C. Half steps are given as a negative number.
// This map shouldn't be used directly! Its purpose is to help
// compute the relative number of half steps towards or away
// from A4.
// We move negatively away from A because it ensures we
// account for half steps when jumping around octaves

var NOTE_HALF_STEPS = {
  'C': -9,
  'D': -7,
  'E': -5,
  'F': -4,
  'G': -2,
  'A': 0,
  'B': 2
};
var NOTE_ACCIDENTALS = {
  'b': -1,
  '#': 1,
  undefined: 0
}; // Notes have to be capitalized to allow for a proper flat (b)

var NOTE_REG_EXP = /([CDEFGAB]){1}(b|#)?([0-9]){1}/;
/**
 * 
 * @param {Number} octave 
 * @return Number octave number distance from BASE_OCTAVE
 * 
 * @example For example:
 * octave of 4 -> distance of 0 : octave is the same as A4
 * octave of 6 -> distance of 2 : octave is 2 octaves higher than A4
 * octave of 2 -> distance of -2 : octave is 2 octaves lower than A4
 */

var computeOctaveDistance = function computeOctaveDistance(octave) {
  // If the current octave is equal to the base octave, we don't
  // have to do anything!
  var distance = 0;

  if (octave < BASE_OCTAVE) {
    // When the supplied octave is less than base_octave, we 
    // return a negative number so the number of half steps
    // between the octave in which this note falls and A4
    // can be correctly derived
    distance = -(BASE_OCTAVE - octave);
  } else if (octave > BASE_OCTAVE) {
    distance = octave - BASE_OCTAVE;
  }

  return distance * NOTES_PER_OCTAVE;
};
/**
 * Given a note and a pitch modifier, returns the correct name of the note
 * Accounts for the single semitone between B and C, and E and F.
 * @param {String} note
 * @param {String} modifier sharp (#) or flat (b)
 *
 */


var resolveEnharmonics = function resolveEnharmonics(note, modifier) {
  var normalized = NOTES[note]; // special rules to handle E-F and B-C

  if (note === NOTES.B && modifier === '#') {
    normalized = NOTES.C;
  } else if (note === NOTES.C && modifier === 'b') {
    normalized = NOTES.B;
  } else if (note === NOTES.E && modifier === '#') {
    normalized = NOTES.F;
  } else if (note === NOTES.F && modifier === 'b') {
    normalized = NOTES.E;
  }

  return normalized;
};
/**
 * Compute the number of half steps away from A4
 * @param {String} noteString The name of the string expressed in standard musical notation e.g. E4
 * @returns Number The distance of this note from A4 expressed as a number of half steps
 */


var getStepsFromA4 = function getStepsFromA4(noteString) {
  var matches = NOTE_REG_EXP.exec(noteString);

  if (!matches) {
    throw new Error('Note string must be in the format {[C-B]}{b|#}{0-9}');
  }

  var _matches = _slicedToArray(matches, 4),
      _ = _matches[0],
      note = _matches[1],
      pitchModifier = _matches[2],
      octave = _matches[3];

  var octaveDistance = computeOctaveDistance(octave);
  var normalizedNote = resolveEnharmonics(note, pitchModifier);
  return NOTE_HALF_STEPS[normalizedNote] + NOTE_ACCIDENTALS[pitchModifier] + octaveDistance;
};
/**
 * 
 * Get the actual frequency of a note. If no note string is supplied, silence is assumed
 * @param {String} noteString representation of a note in the format 'Note + #|b + octave'
 * @return frequency float rounded to 2 significant digits
 * 
 */


var frequency = function frequency(noteString) {
  if (!noteString) {
    return SILENCE;
  } // get number of half steps the supplied note is A4


  var stepsFromA = getStepsFromA4(noteString);
  var rawFrequency = A_ABOVE_MIDDLE_C * Math.pow(EVEN_TEMPERED_RATIO, stepsFromA); // truncate float to 2 digits after the decimal and round them.
  // e.g. G7 -> 3135.9634878539955 -> 3135.96

  return parseFloat(rawFrequency.toFixed(3));
};
/**
 * Convert a frequency to MIDI
 * @param {Number} frequency A float representing a note's frequency in an even-tempered scale
 * @returns {Number} A number between 0-127 (inclusive) representing the frequency's MIDI number
 */


var toMIDI = function toMIDI(frequency) {
  if (frequency === SILENCE) {
    return 0;
  }

  return 12 * Math.log2(frequency / A_ABOVE_MIDDLE_C) + MIDI_A4 | 0;
};
/**
 * Convert from MIDI note to a frequency
 * @param {Number} midiNumber Corresponds to a frequency on an even-tempered scale
 * @return {Number} The note's frequency
 */


var fromMIDI = function fromMIDI(midiNumber) {
  return Math.pow(2, (midiNumber - MIDI_A4) / 12) * A_ABOVE_MIDDLE_C;
};


/* harmony default export */ __webpack_exports__["default"] = (frequency);

/***/ }),

/***/ "./src/services/github-client.js":
/*!***************************************!*\
  !*** ./src/services/github-client.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _octokit_rest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @octokit/rest */ "./node_modules/@octokit/rest/index.js");
/* harmony import */ var _octokit_rest__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_octokit_rest__WEBPACK_IMPORTED_MODULE_0__);

var defaultResultsPerPage = 100;
var githubClient = _octokit_rest__WEBPACK_IMPORTED_MODULE_0___default()({
  requestMedia: 'application/vnd.github.v3+json'
});
var MAX_RETRIES = 10;
var RETRY_TIMEOUT_MS = 4000;
/**
 * Get a list of repos for the specified user
 * TODO: add a way to page results
 * @param {String} username Account name whose repos you are requesting
 * @param {Number} perPage The number of repositories to return in a page of results
 * @return {} 
 */

var reposForUser = function reposForUser(username) {
  var perPage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultResultsPerPage;
  return githubClient.repos.getForUser({
    username: username,
    per_page: perPage
  })["catch"](function (error) {
    return console.warn(error);
  });
};

var repoForUser = function repoForUser(_ref) {
  var owner = _ref.owner,
      repo = _ref.repo;
  return githubClient.repos.get({
    owner: owner,
    repo: repo
  })["catch"](function (error) {
    return console.warn(error);
  });
};

var repoCommitStats = function repoCommitStats(_ref2) {
  var owner = _ref2.owner,
      repo = _ref2.repo;
  return githubClient.repos.getCommitActivityStats({
    owner: owner,
    repo: repo
  })["catch"](function (error) {
    console.warn("Error getting stats for ".concat(repo), error.message);
    throw new Error("Error getting stats for ".concat(repo));
  });
};
/**
 *
 * @param {String} user
 * @param {String} repo
 * @returns {Object} The object representing a year's worth of commits.
 *
 */


var getRepoCommitStats = function getRepoCommitStats(user, repo) {
  return repoCommitStats({
    owner: user,
    repo: repo
  });
};

/* harmony default export */ __webpack_exports__["default"] = ({
  repoForUser: repoForUser,
  reposForUser: reposForUser,
  getRepoCommitStats: getRepoCommitStats
});

/***/ }),

/***/ "./src/services/note-sequence.js":
/*!***************************************!*\
  !*** ./src/services/note-sequence.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var models_tone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! models/tone */ "./src/models/tone.js");
/* harmony import */ var models_meter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! models/meter */ "./src/models/meter.js");
/* harmony import */ var services_chord__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! services/chord */ "./src/services/chord.js");
/* harmony import */ var types_note_values__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! types/note-values */ "./src/types/note-values.js");




var MAX_VOLUME = 40;

var defaultNoteDuration = function defaultNoteDuration(timeSignature) {
  var baselineDuration = timeSignature[1];

  switch (baselineDuration) {
    case 2:
      return types_note_values__WEBPACK_IMPORTED_MODULE_3__["default"].HALF;

    case 4:
      return types_note_values__WEBPACK_IMPORTED_MODULE_3__["default"].QUARTER;

    case 8:
      return types_note_values__WEBPACK_IMPORTED_MODULE_3__["default"].EIGHTH;

    default:
      return types_note_values__WEBPACK_IMPORTED_MODULE_3__["default"].QUARTER;
  }
}; // this need to be based on the time signature too, otherwise
// we end up with 6/8 time signature and a bunch of whole notes
// TODO FIX THIS CAUSE THIS IS THE MISSING PIECE ATM


var getNoteValue = function getNoteValue(speed) {
  var timeSignature = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [4, 4];
  var value = defaultNoteDuration(timeSignature);

  if (speed < 2) {
    value = types_note_values__WEBPACK_IMPORTED_MODULE_3__["default"].WHOLE;
  } else if (speed > 2 && speed < 10) {
    value = types_note_values__WEBPACK_IMPORTED_MODULE_3__["default"].HALF;
  } else if (speed > 10 && speed < 40) {
    value = types_note_values__WEBPACK_IMPORTED_MODULE_3__["default"].QUARTER;
  } else if (speed > 40) {
    value = types_note_values__WEBPACK_IMPORTED_MODULE_3__["default"].EIGHTH;
  }

  return value;
}; // Chord is sort of a misnomer here. It can be a single note, a group
// of notes, or a silence. The chord refers more to a discrete
// unit of musical activity


var makeChords = function makeChords(data) {
  return data.reduce(function (chords, datum) {
    var days = datum.days,
        count = datum.count;
    var chord = new services_chord__WEBPACK_IMPORTED_MODULE_2__["default"]({
      volume: Math.min(count, MAX_VOLUME) / 100
    });
    chord.addNotes(days);
    chords.push(chord);
    return chords;
  }, []);
}; // why am i mapping everything so many times


var buildNoteSequence = function buildNoteSequence(_ref) {
  var commitStats = _ref.commitStats,
      timeSignature = _ref.timeSignature,
      bpm = _ref.bpm;
  var startTime = 0;
  var finalTime = 0;
  var meter = new models_meter__WEBPACK_IMPORTED_MODULE_1__["default"]({
    timeSignature: timeSignature,
    tempo: bpm
  });
  var chords = makeChords(commitStats);
  var toneClusters = chords.reduce(function (clusters, cluster) {
    var volume = cluster.volume,
        speed = cluster.speed;
    var clusterLen = cluster.notes.length;
    var fractionalVolume = volume / (clusterLen * 2);
    var noteType = getNoteValue(speed, meter.timeSignature);
    var noteTiming = meter.getTimeForNote(noteType);
    /**
     * Reset chord time at each iteration so that the overall
     * length of the piece is not counted per tone, but per tone cluster
     * For example, if a cluster has 7 tones, we want each of those
     * tones to account for a single unit of time when calculating the
     * total length of the song.
    */

    var clusterTime = 0;
    cluster.notes = cluster.notes.map(function (note) {
      var tone = new models_tone__WEBPACK_IMPORTED_MODULE_0__["default"]({
        noteName: note,
        timing: noteTiming,
        peak: fractionalVolume,
        noteType: noteType
      }); // All tones in a chord occupy the same start point in time

      tone.addTimingInfo(clusterTime);

      if (!clusterTime || tone.endTime < clusterTime) {
        clusterTime = tone.endTime;
      }

      return tone;
    });
    startTime += clusterTime;
    finalTime += startTime;
    cluster.totalTime = finalTime;
    clusters.push(cluster);
    return clusters;
  }, []);
  return {
    toneClusters: toneClusters,
    totalTime: finalTime / toneClusters.length
  };
};

/* harmony default export */ __webpack_exports__["default"] = (buildNoteSequence);

/***/ }),

/***/ "./src/services/oscillator.js":
/*!************************************!*\
  !*** ./src/services/oscillator.js ***!
  \************************************/
/*! exports provided: oscillator, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "oscillator", function() { return oscillator; });
/* harmony import */ var _audio_context_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./audio-context-provider */ "./src/services/audio-context-provider.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // 15ms ramp down time to provide smooth fade out

var rampDownDelayTime = 0.0015; // zero is generally recognized as a non-finite value so we provide
// a tiny value instead

var webAudioZero = .0001;
/**
 * Handles building an oscillator for a single sound event. Once a context is injected,
 * the oscillator acts as a factory function, constructing a new oscillator and
 * returning an object with methods used to control it.
 * Each oscillator has an accompanying gain node to control loudness.
 * 
 * Oscillators are connected to their gain nodes when constructed,
 * and any effects added to it will be added AFTER the gain stage!
 * 
 * @param {WebAudioContext} context inject context into oscillator, exposing it to
 * web audio functionality
 * @returns Oscillator factory function
 *    @param {Object} oscState describe the oscillator { frequency: number, type: string, peak: float }
 *    @param {Envelope} adsr values for the oscillator
 */

var oscillator = function oscillator(context) {
  return function (oscSettings) {
    var osc = context.createOscillator();
    var gain = context.createGain();
    osc.type = oscSettings.toneType;
    osc.frequency.value = oscSettings.frequency;
    osc.connect(gain);
    return {
      get duration() {
        return oscSettings.duration;
      },

      get envelope() {
        return oscSettings.envelope;
      },

      get context() {
        return context;
      },

      connectTo: function connectTo(node) {
        gain.connect(node);
      },
      disconnectFrom: function disconnectFrom(node) {
        gain.disconnect(node);
      },

      /**
       * Returns a new object representing metadata
       * about this oscillator object
       */
      toJSON: function toJSON() {
        return _objectSpread({}, oscSettings);
      },
      start: function start(time) {
        var peak = oscSettings.peak;
        var envelope = this.envelope; // schedule a move to zero out the oscillator's gain

        gain.gain.setValueAtTime(webAudioZero, time); // schedule the node's time to max volume

        gain.gain.linearRampToValueAtTime(peak, time + envelope.attack); // schedule time node should play at volume

        gain.gain.linearRampToValueAtTime(envelope.hold * peak, envelope.attack + envelope.sustain + envelope.decay + time);
        osc.start(time);
      },
      stop: function stop(time) {
        var envelope = this.envelope;
        var stopTime = envelope.attack + envelope.sustain + envelope.decay + envelope.release + time; // Schedule a fade-out

        gain.gain.exponentialRampToValueAtTime(webAudioZero, time, rampDownDelayTime);
        osc.stop(stopTime);
      }
    };
  };
};


/* harmony default export */ __webpack_exports__["default"] = (Object(_audio_context_provider__WEBPACK_IMPORTED_MODULE_0__["default"])(oscillator));

/***/ }),

/***/ "./src/services/playback.js":
/*!**********************************!*\
  !*** ./src/services/playback.js ***!
  \**********************************/
/*! exports provided: commitSequencerSubscriber, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "commitSequencerSubscriber", function() { return commitSequencerSubscriber; });
/* harmony import */ var services_scheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! services/scheduler */ "./src/services/scheduler.js");
/* harmony import */ var services_recorder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! services/recorder */ "./src/services/recorder.js");
/* harmony import */ var models_audio_graph__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! models/audio-graph */ "./src/models/audio-graph.js");



var commitSequencer = Object(services_scheduler__WEBPACK_IMPORTED_MODULE_0__["default"])();
var lastData;
var myRecorder = Object(services_recorder__WEBPACK_IMPORTED_MODULE_1__["default"])();
var playback = {
  buildAudioGraph: function buildAudioGraph(initialSequence) {
    return new Promise(function (resolve) {
      var graph = Object(models_audio_graph__WEBPACK_IMPORTED_MODULE_2__["default"])(initialSequence);
      resolve(graph);
    });
  },
  play: function play(graph) {
    //myRecorder.start();
    var notesToSequence = graph.sequence.toneClusters.slice();
    return commitSequencer.play(notesToSequence).then(function () {
      return graph; //myRecorder.stop();
    });
  }
};
var commitSequencerSubscriber = commitSequencer.subscribe;

/* harmony default export */ __webpack_exports__["default"] = (playback);

/***/ }),

/***/ "./src/services/recorder.js":
/*!**********************************!*\
  !*** ./src/services/recorder.js ***!
  \**********************************/
/*! exports provided: recorder, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recorder", function() { return recorder; });
/* harmony import */ var _audio_context_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./audio-context-provider */ "./src/services/audio-context-provider.js");

var SUPPORTED_MIME_TYPES = {
  WEBM: 'audio/webm'
};
var RECORDER_STATES = {
  INACTIVE: 'inactive',
  RECORDING: 'recording'
};

function isStopped(state) {
  return state === RECORDER_STATES.INACTIVE || state !== RECORDER_STATES.RECORDING;
}

var recorder = function recorder(context) {
  return function () {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      stream: context.destinationStream
    },
        stream = _ref.stream;

    var mediaRecorder = new MediaRecorder(stream.stream, {
      mimeType: SUPPORTED_MIME_TYPES.WEBM
    });
    var chunks = [];

    mediaRecorder.ondataavailable = function (event) {
      chunks.push(event.data);
    };

    mediaRecorder.onstop = function () {
      // 'oh cool, I can output in webm' — no one, ever
      var blob = new Blob(chunks, {
        type: SUPPORTED_MIME_TYPES.WEBM
      });
      var downloadLink = document.createElement('a');
      downloadLink.href = URL.createObjectURL(blob);
      downloadLink.download = "gh-music-".concat(+new Date(), ".webm");
      document.body.appendChild(downloadLink);
      downloadLink.click();
    };

    return {
      start: function start() {
        if (isStopped(mediaRecorder.state)) {
          mediaRecorder.start();
        }
      },
      stop: function stop() {
        if (!isStopped(mediaRecorder.state)) {
          mediaRecorder.stop();
        }
      }
    };
  };
};


/* harmony default export */ __webpack_exports__["default"] = (Object(_audio_context_provider__WEBPACK_IMPORTED_MODULE_0__["default"])(recorder));

/***/ }),

/***/ "./src/services/scheduler.js":
/*!***********************************!*\
  !*** ./src/services/scheduler.js ***!
  \***********************************/
/*! exports provided: scheduler, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scheduler", function() { return scheduler; });
/* harmony import */ var _audio_context_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./audio-context-provider */ "./src/services/audio-context-provider.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var msPerSecond = 1000;

var serial = function serial(data, handler, onDone) {
  function next() {
    var nextData = data.shift();

    if (!nextData) {
      return onDone();
    }

    return handler(nextData, next);
  }

  ;
  next();
};

var humanize = function humanize(time) {
  var humanized = .01 / 2 + Math.random() * .01;
  return [time - humanized, humanized];
};

var subscribers = {
  'timer': [],
  'sound': []
};

var getWebAudioTime = function getWebAudioTime(now, totalPlayTime) {
  return now - totalPlayTime;
};

var notifyTimerSubs = function notifyTimerSubs(now, total) {
  return {
    tick: getWebAudioTime(now, total)
  };
};

var playingTime = 0;

var scheduler = function scheduler(context) {
  return function () {
    return {
      now: function now() {
        return context.currentTime;
      },
      subscribe: function subscribe(name, handler) {
        if (!name) {
          throw new TypeError('.subscribe requires a key to reference.');
        }

        if (typeof handler !== 'function') {
          throw new TypeError('.subscribe requires a function as its second argument.');
        }

        if (name in subscribers) {
          subscribers[name] = subscribers[name].concat([handler]);
        }
      },
      play: function play(sequence) {
        var _this = this;

        if (context.state === 'suspended' || context.state !== 'running') {
          context.resume();
        }

        var toNotify = subscribers.timer;
        return new Promise(function (resolve) {
          var playTimeCounter = setInterval(function () {
            toNotify.forEach(function (fn) {
              return fn(notifyTimerSubs(_this.now(), playingTime));
            });
          }, msPerSecond);
          serial(sequence, _this.run.bind(_this), function () {
            toNotify.forEach(function (fn) {
              return fn(notifyTimerSubs(_this.now(), playingTime));
            });
            clearInterval(playTimeCounter);
            playingTime = _this.now();
            context.suspend();
            resolve();
          });
          toNotify.forEach(function (fn) {
            return fn(notifyTimerSubs(_this.now(), playingTime));
          });
        });
      },

      /**
       * should be able to fix timing problems by getting delta of
       * currenttime and last sound event or whatever, if it is 1 second
       * notify subscribers.
       * it still wont be truly accurate but I cant get that till i rewrite
       * the scheduler to not use setTimeout
       */

      /**
       * Schedules when to play notes
       * @param {Chord} An instance of the chord class
       * @param {Number} bpm
       *
       * Given one or several AudioNode objects, play them all at the current time,
       * for the length of time indicated by the object
       */
      run: function run(chord, nextNoteFn) {
        var tonesToPlay = chord.oscillators;
        var now = this.now();
        var toNotify = subscribers.sound;
        var timeTilNextNote = 0;
        tonesToPlay.forEach(function (tone) {
          toNotify.forEach(function (s) {
            return s({
              chord: tone
            });
          });
          var timing = tone.timing,
              duration = tone.duration;

          var _humanize = humanize(now + duration),
              _humanize2 = _slicedToArray(_humanize, 2),
              humanized = _humanize2[0],
              offset = _humanize2[1]; // We want to figure out what the shortest note in this chord is,
          // so we know when to schedule the next note.
          // Neccessary as a note can sustain for longer
          // than the duration of time till the next note.
          // For example: In notated sheet music, a half-note `A` in the
          // bass with 3 16th notes in the treble are played as 4 16th notes,
          // but the A continues to sound as the next 3 notes are played.


          if (!timeTilNextNote || timing < timeTilNextNote) {
            timeTilNextNote = timing + offset;
          } // start should ramp gain up to current time, then play


          tone.osc.start(now); // stop should ramp gain down to stop time, then stop

          tone.osc.stop(humanized + timing);
        });
        setTimeout(nextNoteFn, timeTilNextNote * msPerSecond);
      }
    };
  };
};


/* harmony default export */ __webpack_exports__["default"] = (Object(_audio_context_provider__WEBPACK_IMPORTED_MODULE_0__["default"])(scheduler));

/***/ }),

/***/ "./src/services/timing.js":
/*!********************************!*\
  !*** ./src/services/timing.js ***!
  \********************************/
/*! exports provided: getNoteTimings, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNoteTimings", function() { return getNoteTimings; });
/* harmony import */ var types_note_values__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! types/note-values */ "./src/types/note-values.js");
/* harmony import */ var types_note_beat_values__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! types/note-beat-values */ "./src/types/note-beat-values.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var secondsPerMinute = 60;
/**
 * 
 * @param {Number} bpm Beats per minute
 * @param {Number} rawBeatLength Length of a single beat in 4 / 4 time
 *  @example
 * @param {Number} beatLength The actual length of a beat for a given time signature
 * @returns {Number} Float representing the real amount of time,
 *                   in seconds, a tone will sound for a given BPM
 */

var computeNoteLength = function computeNoteLength(bpm, rawBeatLength, beatLength) {
  return 1 / bpm * secondsPerMinute * (rawBeatLength / beatLength);
};
/**
 * TIME SIGNATURE IS IMPORTANT!
 * Given this formula
 * 
 * (1 / 108) * 60  * (1/1.5)
 * 
 * 1 = 1 minute
 * 108 = our imaginary time signature
 * 1 = the base beat length of a quarter note
 * 1.5 = the actual number of quarter notes a single beat occupies
 * in 6/8 time
 * 
 * we need to know what the ratio the length of a quarter note and the length of
 * a beat is in a given time signature. in The example above, we assume 6/8 time. Since the
 * length of a beat is 1.5 quarter notes (3 8th notes), but the standard length of a quarter note is 1,
 * we need to divide the base note beat length by the actual note beat length of the time signature
 * @param {Number} bpm The beats per minute i.e. the tempo of the piece
 * @param {Meter} meter 
 */


var getNoteTimings = function getNoteTimings(bpm) {
  var beatLength = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1.5;
  return Object.entries(types_note_values__WEBPACK_IMPORTED_MODULE_0__["default"]).reduce(function (memo, _ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];

    memo[types_note_values__WEBPACK_IMPORTED_MODULE_0__["default"][key]] = computeNoteLength(bpm, types_note_beat_values__WEBPACK_IMPORTED_MODULE_1__["default"][value], beatLength);
    return memo;
  }, {});
};


/* harmony default export */ __webpack_exports__["default"] = (getNoteTimings);

/***/ }),

/***/ "./src/types/filter-envelope.js":
/*!**************************************!*\
  !*** ./src/types/filter-envelope.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var basic = {
  a: 5,
  d: 100,
  s: 100,
  r: 600,
  h: 10
};
var pad = {
  a: 800,
  d: 1500,
  s: 1,
  r: 1000,
  h: 30
};
var pluck = {
  a: 2,
  d: 500,
  s: 200,
  r: 2,
  h: 10
};
var stab = {
  a: 0,
  d: 20,
  s: 0,
  r: 0,
  h: 0
};
var gliss = {
  a: 300,
  d: 1000,
  s: 0,
  r: 600,
  h: 10
};
/* harmony default export */ __webpack_exports__["default"] = ({
  basic: basic,
  pad: pad,
  pluck: pluck,
  stab: stab,
  gliss: gliss
});

/***/ }),

/***/ "./src/types/note-beat-values.js":
/*!***************************************!*\
  !*** ./src/types/note-beat-values.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _note_values__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./note-values */ "./src/types/note-values.js");
var _NOTE_VALUES$WHOLE$NO;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ __webpack_exports__["default"] = (_NOTE_VALUES$WHOLE$NO = {}, _defineProperty(_NOTE_VALUES$WHOLE$NO, _note_values__WEBPACK_IMPORTED_MODULE_0__["default"].WHOLE, 4), _defineProperty(_NOTE_VALUES$WHOLE$NO, _note_values__WEBPACK_IMPORTED_MODULE_0__["default"].HALF, 2), _defineProperty(_NOTE_VALUES$WHOLE$NO, _note_values__WEBPACK_IMPORTED_MODULE_0__["default"].QUARTER, 1), _defineProperty(_NOTE_VALUES$WHOLE$NO, _note_values__WEBPACK_IMPORTED_MODULE_0__["default"].EIGHTH, 0.5), _defineProperty(_NOTE_VALUES$WHOLE$NO, _note_values__WEBPACK_IMPORTED_MODULE_0__["default"].SIXTEENTH, 0.25), _NOTE_VALUES$WHOLE$NO);

/***/ }),

/***/ "./src/types/note-values.js":
/*!**********************************!*\
  !*** ./src/types/note-values.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  WHOLE: 'whole',
  HALF: 'half',
  QUARTER: 'quarter',
  EIGHTH: 'eighth',
  SIXTEENTH: 'sixteenth'
});

/***/ }),

/***/ "./src/types/scales.js":
/*!*****************************!*\
  !*** ./src/types/scales.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var SCALES = {
  PHRYGIAN: ['E', 'F', 'G', 'A', 'B', 'C', 'D']
};
/* harmony default export */ __webpack_exports__["default"] = (SCALES);

/***/ }),

/***/ "./src/ui/actions.js":
/*!***************************!*\
  !*** ./src/ui/actions.js ***!
  \***************************/
/*! exports provided: ACTION_TYPES, actions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACTION_TYPES", function() { return ACTION_TYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony import */ var services_github_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! services/github-client */ "./src/services/github-client.js");
/* harmony import */ var services_playback__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! services/playback */ "./src/services/playback.js");


var ACTION_TYPES = {
  COMMIT_DATA: {
    FETCHING: 'commitData.fetching',
    SUCCESS: 'commitData.success',
    ERROR: 'commitData.error'
  },
  PLAYER: {
    PLAY: 'player.play',
    DONE: 'player.done',
    UPDATE_TIME: 'player.updateTime',
    VIZ: 'player.viz'
  },
  SET_REPO: 'setRepo',
  SET_REPO_NAME: 'setRepoName',
  SET_REPO_OWNER: 'setRepoOwner'
};
var actions = {
  COMMIT_DATA: {
    fetch: function fetch(dispatch) {
      return function (owner, name) {
        dispatch({
          type: ACTION_TYPES.COMMIT_DATA.FETCHING
        });
        services_github_client__WEBPACK_IMPORTED_MODULE_0__["default"].getRepoCommitStats(owner, name).then(function (stats) {
          dispatch({
            type: ACTION_TYPES.SET_REPO_NAME,
            name: name
          });
          dispatch({
            type: ACTION_TYPES.SET_REPO_OWNER,
            owner: owner
          });
          dispatch({
            type: ACTION_TYPES.COMMIT_DATA.SUCCESS,
            data: stats.data
          });
        })["catch"](function () {
          dispatch({
            type: ACTION_TYPES.COMMIT_DATA.ERROR,
            error: "No commit data found for repo \"".concat(name, "\"!")
          });
        });
      };
    },
    load: function load(dispatch) {
      return function (data) {
        dispatch({
          type: ACTION_TYPES.COMMIT_DATA.SUCCESS,
          data: data
        });
      };
    }
  },
  PLAYER: {
    play: function play(dispatch) {
      return function (data) {
        dispatch({
          type: ACTION_TYPES.PLAYER.PLAY
        });
        services_playback__WEBPACK_IMPORTED_MODULE_1__["default"].buildAudioGraph(data).then(function (graph) {
          dispatch({
            type: ACTION_TYPES.PLAYER.VIZ,
            graph: graph
          });
          return graph;
        }).then(function (graph) {
          return services_playback__WEBPACK_IMPORTED_MODULE_1__["default"].play(graph);
        }).then(function (graph) {
          dispatch({
            type: ACTION_TYPES.PLAYER.DONE,
            totalTime: graph.context.currentTime
          });
        });
      };
    },
    updateTime: function updateTime(time) {
      return {
        type: ACTION_TYPES.PLAYER.UPDATE_TIME,
        currentTime: time.tick
      };
    }
  },
  setRepo: function setRepo(name, owner) {
    return {
      type: ACTION_TYPES.SET_REPO,
      name: name,
      owner: owner
    };
  },
  setRepoName: function setRepoName(name) {
    return {
      type: ACTION_TYPES.SET_REPO_NAME,
      name: name
    };
  },
  setRepoOwner: function setRepoOwner(owner) {
    return {
      type: ACTION_TYPES.SET_REPO_OWNER,
      owner: owner
    };
  }
};


/***/ }),

/***/ "./src/ui/components/current-track.js":
/*!********************************************!*\
  !*** ./src/ui/components/current-track.js ***!
  \********************************************/
/*! exports provided: CurrentTrack, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentTrack", function() { return CurrentTrack; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var preact_compat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact/compat */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var ui_types_player_status__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ui/types/player-status */ "./src/ui/types/player-status.js");
var _DISPLAY_MESSAGES;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var messageHandler = function messageHandler(message) {
  return function (owner, name) {
    return "".concat(message, ": ").concat(owner, " - ").concat(name);
  };
};

var DISPLAY_MESSAGES = (_DISPLAY_MESSAGES = {}, _defineProperty(_DISPLAY_MESSAGES, ui_types_player_status__WEBPACK_IMPORTED_MODULE_2__["default"].PLAYING, messageHandler('Currently playing')), _defineProperty(_DISPLAY_MESSAGES, ui_types_player_status__WEBPACK_IMPORTED_MODULE_2__["default"].STOPPED, messageHandler('You listened to')), _defineProperty(_DISPLAY_MESSAGES, ui_types_player_status__WEBPACK_IMPORTED_MODULE_2__["default"].PAUSED, messageHandler('Paused')), _defineProperty(_DISPLAY_MESSAGES, ui_types_player_status__WEBPACK_IMPORTED_MODULE_2__["default"].IDLE, function () {
  return 'No repo loaded.';
}), _defineProperty(_DISPLAY_MESSAGES, ui_types_player_status__WEBPACK_IMPORTED_MODULE_2__["default"].READY, messageHandler('Ready to play')), _DISPLAY_MESSAGES);

var CurrentTrack = function CurrentTrack(_ref) {
  var _ref$activeRepo = _ref.activeRepo,
      activeRepo = _ref$activeRepo === void 0 ? {} : _ref$activeRepo,
      status = _ref.status;
  var messageFn = DISPLAY_MESSAGES[status];
  return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("h2", {
    "class": "text-lg"
  }, messageFn(activeRepo.owner, activeRepo.name));
};

var MemoCurrentTrack = Object(preact_compat__WEBPACK_IMPORTED_MODULE_1__["memo"])(CurrentTrack, function (prev, next) {
  return prev.status === next.status && next.active;
});

/* harmony default export */ __webpack_exports__["default"] = (MemoCurrentTrack);

/***/ }),

/***/ "./src/ui/components/error-message.js":
/*!********************************************!*\
  !*** ./src/ui/components/error-message.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact/hooks */ "./node_modules/preact/hooks/dist/hooks.module.js");
/* harmony import */ var ui_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ui/store */ "./src/ui/store.js");




var ErrorMessage = function ErrorMessage(_ref) {
  var forState = _ref.forState;

  var _useContext = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_1__["useContext"])(ui_store__WEBPACK_IMPORTED_MODULE_2__["store"]),
      state = _useContext.state;

  var error = state[forState].error;
  return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("p", {
    "class": "text-md italic mt-1 h-4",
    style: {
      color: "#c14949"
    }
  }, error);
};

/* harmony default export */ __webpack_exports__["default"] = (ErrorMessage);

/***/ }),

/***/ "./src/ui/components/playback.js":
/*!***************************************!*\
  !*** ./src/ui/components/playback.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ui_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ui/actions */ "./src/ui/actions.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! preact/hooks */ "./node_modules/preact/hooks/dist/hooks.module.js");
/* harmony import */ var ui_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ui/store */ "./src/ui/store.js");
/* harmony import */ var ui_components_current_track__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ui/components/current-track */ "./src/ui/components/current-track.js");
/* harmony import */ var ui_components_timing_info__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ui/components/timing-info */ "./src/ui/components/timing-info.js");
/* harmony import */ var ui_viz_bars__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ui/viz/bars */ "./src/ui/viz/bars.js");
/* harmony import */ var ui_use_previous__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ui/use-previous */ "./src/ui/use-previous.js");








var vizSettings = {
  height: 100,
  width: 400
};
var data = '';

var PlayControls = function PlayControls() {
  var _useContext = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_2__["useContext"])(ui_store__WEBPACK_IMPORTED_MODULE_3__["store"]),
      dispatch = _useContext.dispatch,
      state = _useContext.state;

  var data = state.commitData.data,
      player = state.player,
      activeRepo = state.activeRepo;
  var unchecked = !data ? 'unchecked' : '';
  var active = player.status === 'playing' ? 'active' : '';
  var lastPlayerStatus = Object(ui_use_previous__WEBPACK_IMPORTED_MODULE_7__["default"])({
    status: player.status,
    activeRepo: activeRepo
  });
  Object(preact_hooks__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (lastPlayerStatus.status === 'stopped' && lastPlayerStatus.activeRepo.name !== activeRepo.name) {
      dispatch(ui_actions__WEBPACK_IMPORTED_MODULE_0__["actions"].PLAYER.updateTime({
        tick: 0
      }));
    }
  }, [lastPlayerStatus]);
  var handlePlayScore = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    if (data && !active) {
      ui_actions__WEBPACK_IMPORTED_MODULE_0__["actions"].PLAYER.play(dispatch)(data);
    }
  }, [data, active]);
  return Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("section", {
    "class": "mt-8".concat(!data ? ' hidden' : '')
  }, Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("div", null, Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])(ui_components_current_track__WEBPACK_IMPORTED_MODULE_4__["default"], {
    activeRepo: activeRepo,
    status: player.status,
    active: active
  }), Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])(ui_components_timing_info__WEBPACK_IMPORTED_MODULE_5__["default"], {
    trackTotalTime: data && data.totalTime,
    currentTime: player.currentTime
  }), Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("div", {
    "class": "mt-2 flex items-center",
    onClick: handlePlayScore,
    style: {
      minHeight: vizSettings.height
    }
  }, Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("button", {
    "class": "fill-button h-16 w-16 ".concat(unchecked, " ").concat(active)
  }, Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("svg", {
    viewBox: "0 0 26 26"
  }, Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("polygon", {
    "class": "play-btn__svg",
    points: "9.33 6.69 9.33 19.39 19.3 13.04 9.33 6.69"
  }))), Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])(ui_viz_bars__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: "ml-8",
    width: vizSettings.width,
    height: vizSettings.height
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (PlayControls);

/***/ }),

/***/ "./src/ui/components/preloaded-repo-form.js":
/*!**************************************************!*\
  !*** ./src/ui/components/preloaded-repo-form.js ***!
  \**************************************************/
/*! exports provided: PreloadedRepoForm, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreloadedRepoForm", function() { return PreloadedRepoForm; });
/* harmony import */ var ui_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ui/actions */ "./src/ui/actions.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var ui_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ui/store */ "./src/ui/store.js");
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! preact/hooks */ "./node_modules/preact/hooks/dist/hooks.module.js");
/* harmony import */ var ui_with_checkable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ui/with-checkable */ "./src/ui/with-checkable.js");





var preloadedRepos = [{
  name: 'tock',
  owner: '18f'
}, {
  name: 'bootstrap',
  owner: 'twitter'
}];

var RadioButton = function RadioButton(_ref) {
  var id = _ref.id,
      label = _ref.label,
      name = _ref.name,
      checked = _ref.checked,
      value = _ref.value,
      onClick = _ref.onClick;

  var handleClick = function handleClick(event) {
    event.preventDefault();
    onClick(ui_actions__WEBPACK_IMPORTED_MODULE_0__["actions"].setRepo(id, value));
  };

  return Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("div", {
    "class": "radio-button py-2 ".concat(checked),
    onClick: handleClick
  }, Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("label", {
    "for": id,
    "class": "font-bold text-lg py-3 px-4"
  }, label), Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("input", {
    id: id,
    type: "radio",
    "class": "hidden toggle",
    value: value,
    name: name
  }));
};

var PreloadedRepoForm = function PreloadedRepoForm(_ref2) {
  var setChecked = _ref2.setChecked;

  var _useContext = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_3__["useContext"])(ui_store__WEBPACK_IMPORTED_MODULE_2__["store"]),
      dispatch = _useContext.dispatch,
      state = _useContext.state;

  var activeRepo = state.activeRepo;
  return Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("div", null, Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("p", {
    "class": "block font-bold text-lg text-black mb-1",
    role: "label"
  }, "Preloaded repos"), Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("div", {
    "class": "button-group"
  }, preloadedRepos.map(function (repo) {
    return Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])(RadioButton, {
      key: "".concat(repo.name, "-").concat(repo.owner),
      id: repo.name,
      value: repo.owner,
      label: "".concat(repo.name, " \u2014 ").concat(repo.owner),
      name: "preloaded",
      checked: setChecked(activeRepo.name, repo.name),
      onClick: dispatch
    });
  })));
};


/* harmony default export */ __webpack_exports__["default"] = (Object(ui_with_checkable__WEBPACK_IMPORTED_MODULE_4__["default"])(PreloadedRepoForm));

/***/ }),

/***/ "./src/ui/components/radio-group.js":
/*!******************************************!*\
  !*** ./src/ui/components/radio-group.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var ui_with_checkable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ui/with-checkable */ "./src/ui/with-checkable.js");
/* harmony import */ var ui_contexts_form_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ui/contexts/form-ui */ "./src/ui/contexts/form-ui/index.js");
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





var RadioToggle = function RadioToggle(_ref) {
  var label = _ref.label,
      helpText = _ref.helpText,
      className = _ref.className,
      setChecked = _ref.setChecked,
      rest = _objectWithoutProperties(_ref, ["label", "helpText", "className", "setChecked"]);

  var activeFormUpdate = Object(ui_contexts_form_ui__WEBPACK_IMPORTED_MODULE_2__["useFormUIUpdate"])();
  var activeFormState = Object(ui_contexts_form_ui__WEBPACK_IMPORTED_MODULE_2__["useFormUIState"])();
  var name = rest.name,
      id = rest.id;
  var checked = setChecked(activeFormState.name, id);

  var updateHandler = function updateHandler() {
    activeFormUpdate(id);
  };

  return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
    "class": "radio-group-input mr-4 border-indigo-400 w-1/2 ".concat(className).concat(checked),
    onClick: updateHandler
  }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("input", {
    id: id,
    type: "radio",
    name: name,
    "class": "hidden radio"
  }), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("label", {
    "for": id,
    "class": "flex items-top cursor-pointer text-lg"
  }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
    "class": "radio-control"
  }), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
    "class": "label"
  }, label, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
    "class": "help-text text-lg"
  }, helpText))));
};

var RadioButton = Object(ui_with_checkable__WEBPACK_IMPORTED_MODULE_1__["default"])(RadioToggle);

var RadioGroup = function RadioGroup(_ref2) {
  var name = _ref2.name,
      label = _ref2.label,
      helpText = _ref2.helpText;
  return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
    "class": "radio-group w-2/3 mb-8 mt-8",
    role: "radiogroup"
  }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
    role: "label",
    "class": "w-full block mb-1"
  }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("h2", {
    "class": "block font-bold text-lg text-black"
  }, label), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("em", {
    "class": "font-medium font-serif text-gray-700"
  }, helpText)), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(RadioButton, {
    label: "Listen to a preloaded repo",
    helpText: "Select a repo",
    name: name,
    id: "preloaded-repo"
  }), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(RadioButton, {
    label: "Let me enter a repo",
    helpText: "Search GitHub",
    className: "flex-1",
    name: name,
    id: "search-repo"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (RadioGroup);

/***/ }),

/***/ "./src/ui/components/repo-form-switcher.js":
/*!*************************************************!*\
  !*** ./src/ui/components/repo-form-switcher.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var ui_components_preloaded_repo_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ui/components/preloaded-repo-form */ "./src/ui/components/preloaded-repo-form.js");
/* harmony import */ var ui_components_search_repo_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ui/components/search-repo-form */ "./src/ui/components/search-repo-form.js");
/* harmony import */ var ui_contexts_form_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ui/contexts/form-ui */ "./src/ui/contexts/form-ui/index.js");




var FORM_TYPES = {
  'preloaded-repo': ui_components_preloaded_repo_form__WEBPACK_IMPORTED_MODULE_1__["default"],
  'search-repo': ui_components_search_repo_form__WEBPACK_IMPORTED_MODULE_2__["default"],
  "default": function _default() {
    return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null);
  }
};

var RepoFormSwitcher = function RepoFormSwitcher() {
  var _useFormUIState = Object(ui_contexts_form_ui__WEBPACK_IMPORTED_MODULE_3__["useFormUIState"])(),
      name = _useFormUIState.name;

  var FormComponent = FORM_TYPES[name] || FORM_TYPES["default"];
  return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(FormComponent, null);
};

/* harmony default export */ __webpack_exports__["default"] = (RepoFormSwitcher);

/***/ }),

/***/ "./src/ui/components/search-repo-form.js":
/*!***********************************************!*\
  !*** ./src/ui/components/search-repo-form.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ui_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ui/actions */ "./src/ui/actions.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var ui_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ui/store */ "./src/ui/store.js");
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! preact/hooks */ "./node_modules/preact/hooks/dist/hooks.module.js");
/* harmony import */ var ui_types_commit_status__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ui/types/commit-status */ "./src/ui/types/commit-status.js");
/* harmony import */ var ui_types_player_status__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ui/types/player-status */ "./src/ui/types/player-status.js");
/* harmony import */ var ui_components_error_message__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ui/components/error-message */ "./src/ui/components/error-message.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var initialState = {
  owner: '',
  name: ''
};

var preventSubmit = function preventSubmit(event) {
  return event.preventDefault();
};

var hasError = function hasError(status) {
  return status === ui_types_commit_status__WEBPACK_IMPORTED_MODULE_4__["default"].ERROR;
};

var isFetching = function isFetching(status) {
  return status === ui_types_commit_status__WEBPACK_IMPORTED_MODULE_4__["default"].FETCHING;
};

var isPlaying = function isPlaying(status) {
  return status === ui_types_player_status__WEBPACK_IMPORTED_MODULE_5__["default"].PLAYING;
};

var SearchRepoForm = function SearchRepoForm() {
  var _useState = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_3__["useState"])(initialState),
      _useState2 = _slicedToArray(_useState, 2),
      repoInfo = _useState2[0],
      setRepoInfo = _useState2[1];

  var _useContext = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_3__["useContext"])(ui_store__WEBPACK_IMPORTED_MODULE_2__["store"]),
      dispatch = _useContext.dispatch,
      _useContext$state = _useContext.state,
      commitData = _useContext$state.commitData,
      player = _useContext$state.player;

  var hasActiveRepo = repoInfo.name && repoInfo.owner;
  var disabled = !hasActiveRepo || isFetching(commitData.status) || isPlaying(player.status) ? 'disabled' : '';
  var error = hasError(commitData.status) ? 'error' : '';

  var updateActiveRepoName = function updateActiveRepoName(event) {
    return setRepoInfo(function (info) {
      return _objectSpread({}, info, {
        name: event.target.value
      });
    });
  };

  var updateActiveRepoOwner = function updateActiveRepoOwner(event) {
    return setRepoInfo(function (info) {
      return _objectSpread({}, info, {
        owner: event.target.value
      });
    });
  };

  var handleSubmit = function handleSubmit() {
    ui_actions__WEBPACK_IMPORTED_MODULE_0__["actions"].COMMIT_DATA.fetch(dispatch)(repoInfo.owner, repoInfo.name);
  };

  return Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("form", {
    id: "search-repo",
    "class": "w-full",
    onClick: preventSubmit
  }, Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("div", {
    "class": "flex items-center -mx-2"
  }, Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("div", {
    "class": "m-2 my-0 input-group ".concat(error)
  }, Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("label", {
    "for": "repo",
    "class": "block font-normal text-lg text-black mb-1 ".concat(error)
  }, "Repo name"), Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("input", {
    id: "repo",
    type: "text",
    name: "repo",
    placeholder: "enter repo name",
    "class": "input ".concat(error),
    value: repoInfo.name,
    onInput: updateActiveRepoName,
    autofocus: true
  })), Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("div", {
    "class": "m-2 my-0 input-group ".concat(error)
  }, Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("label", {
    "for": "owner",
    "class": "block font-normal text-lg text-black mb-1 ".concat(error)
  }, "Repo owner"), Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("input", {
    id: "owner",
    type: "text",
    name: "owner",
    placeholder: "enter repo owner",
    "class": "input ".concat(error),
    value: repoInfo.owner,
    onInput: updateActiveRepoOwner
  })), Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("button", {
    type: "submit",
    "class": "btn-primary ".concat(disabled, " self-end -my-1"),
    disabled: disabled,
    onClick: handleSubmit
  }, "Get commit data")), Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])(ui_components_error_message__WEBPACK_IMPORTED_MODULE_6__["default"], {
    forState: "commitData"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (SearchRepoForm);

/***/ }),

/***/ "./src/ui/components/timing-info.js":
/*!******************************************!*\
  !*** ./src/ui/components/timing-info.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");


var getSeconds = function getSeconds(time) {
  return time % 60 | 0;
};

var getMinutes = function getMinutes(time) {
  return time / 60 | 0;
};

var formatTime = function formatTime(time) {
  return time < 10 ? "0".concat(time) : time;
};

var TimingInfo = function TimingInfo(_ref) {
  var currentTime = _ref.currentTime;
  ;
  var currentMinutes = getMinutes(currentTime);
  var currentSeconds = getSeconds(currentTime);
  var formatCurrentMinutes = formatTime(currentMinutes);
  var formatCurrentSeconds = formatTime(currentSeconds);
  return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("p", null, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
    "class": "px-1 w-12 text-left inline-block"
  }, formatCurrentMinutes, ":", formatCurrentSeconds));
};

/* harmony default export */ __webpack_exports__["default"] = (TimingInfo);

/***/ }),

/***/ "./src/ui/contexts/form-ui/index.js":
/*!******************************************!*\
  !*** ./src/ui/contexts/form-ui/index.js ***!
  \******************************************/
/*! exports provided: useFormUIState, useFormUIUpdate, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useFormUIState", function() { return useFormUIState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useFormUIUpdate", function() { return useFormUIUpdate; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact/hooks */ "./node_modules/preact/hooks/dist/hooks.module.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var initialState = {
  name: ''
};
var FormUIContext = Object(preact__WEBPACK_IMPORTED_MODULE_0__["createContext"])();

var useFormUIState = function useFormUIState() {
  var context = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_1__["useContext"])(FormUIContext);

  if (typeof context === 'undefined') {
    throw new Error('Must be called from within a FormUIContext');
  }

  return context.state;
};

var useFormUIUpdate = function useFormUIUpdate() {
  var context = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_1__["useContext"])(FormUIContext);

  if (typeof context === 'undefined') {
    throw new Error('Must be called from within a FormUIContext');
  }

  return context.update;
};

var FormUIProvider = function FormUIProvider(_ref) {
  var children = _ref.children;

  var _useState = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_1__["useState"])(initialState),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var update = function update(name) {
    return setState({
      name: name
    });
  };

  return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(FormUIContext.Provider, {
    value: {
      state: state,
      update: update
    }
  }, children);
};


/* harmony default export */ __webpack_exports__["default"] = (FormUIProvider);

/***/ }),

/***/ "./src/ui/index.js":
/*!*************************!*\
  !*** ./src/ui/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var ui_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ui/store */ "./src/ui/store.js");
/* harmony import */ var ui_components_radio_group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ui/components/radio-group */ "./src/ui/components/radio-group.js");
/* harmony import */ var ui_components_repo_form_switcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ui/components/repo-form-switcher */ "./src/ui/components/repo-form-switcher.js");
/* harmony import */ var ui_components_playback__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ui/components/playback */ "./src/ui/components/playback.js");
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! preact/hooks */ "./node_modules/preact/hooks/dist/hooks.module.js");
/* harmony import */ var services_playback__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! services/playback */ "./src/services/playback.js");
/* harmony import */ var ui_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ui/actions */ "./src/ui/actions.js");
/* harmony import */ var ui_contexts_form_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ui/contexts/form-ui */ "./src/ui/contexts/form-ui/index.js");











var App = function App() {
  var _useContext = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_5__["useContext"])(ui_store__WEBPACK_IMPORTED_MODULE_1__["store"]),
      dispatch = _useContext.dispatch;

  Object(preact_hooks__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    Object(services_playback__WEBPACK_IMPORTED_MODULE_6__["commitSequencerSubscriber"])('timer', function (nextState) {
      dispatch(ui_actions__WEBPACK_IMPORTED_MODULE_7__["actions"].PLAYER.updateTime(nextState));
    });
  }, []);
  return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
    "class": "w-3/4"
  }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(ui_contexts_form_ui__WEBPACK_IMPORTED_MODULE_8__["default"], null, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(ui_components_radio_group__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: "Choose one",
    name: "toggle-repo-form-type"
  }), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(ui_components_repo_form_switcher__WEBPACK_IMPORTED_MODULE_3__["default"], null)), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(ui_components_playback__WEBPACK_IMPORTED_MODULE_4__["default"], null));
};

Object(preact__WEBPACK_IMPORTED_MODULE_0__["render"])(Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(ui_store__WEBPACK_IMPORTED_MODULE_1__["default"], null, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(App, null)), document.getElementById('app'));

/***/ }),

/***/ "./src/ui/store.js":
/*!*************************!*\
  !*** ./src/ui/store.js ***!
  \*************************/
/*! exports provided: store, playerStatusSelector, PLAYER_STATUS, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "store", function() { return store; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playerStatusSelector", function() { return playerStatusSelector; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var data_repos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! data/repos */ "./src/data/repos.js");
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! preact/hooks */ "./node_modules/preact/hooks/dist/hooks.module.js");
/* harmony import */ var ui_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ui/actions */ "./src/ui/actions.js");
/* harmony import */ var ui_types_player_status__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ui/types/player-status */ "./src/ui/types/player-status.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PLAYER_STATUS", function() { return ui_types_player_status__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var ui_types_commit_status__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ui/types/commit-status */ "./src/ui/types/commit-status.js");
/* harmony import */ var services_build_note_sequence__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! services/build-note-sequence */ "./src/services/build-note-sequence.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








var preloadedRepoData = {
  'tock': JSON.parse(data_repos__WEBPACK_IMPORTED_MODULE_1__["tock"]),
  'bootstrap': JSON.parse(data_repos__WEBPACK_IMPORTED_MODULE_1__["bootstrap"])
};
var initialState = {
  player: {
    status: ui_types_player_status__WEBPACK_IMPORTED_MODULE_4__["default"].IDLE,
    totalTime: 0,
    timeRemaining: '',
    currentTime: 0,
    graph: null
  },
  recorder: {
    isActive: false
  },
  score: {
    tempo: 120,
    timeSignature: [3, 4]
  },
  activeRepo: {
    name: '',
    owner: ''
  },
  commitData: {
    status: ui_types_commit_status__WEBPACK_IMPORTED_MODULE_5__["default"].IDLE,
    data: null,
    error: ''
  }
};

var updatePlayerStatus = function updatePlayerStatus(status) {
  if (status === ui_types_player_status__WEBPACK_IMPORTED_MODULE_4__["default"].PLAYING || status === ui_types_player_status__WEBPACK_IMPORTED_MODULE_4__["default"].PAUSED) {
    return false;
  }

  return true;
}; // TODO: Starting to seem like i need to break these out...


function appReducer(state, action) {
  var type = action.type,
      rest = _objectWithoutProperties(action, ["type"]);

  switch (type) {
    case ui_actions__WEBPACK_IMPORTED_MODULE_3__["ACTION_TYPES"].SET_REPO:
      {
        var status = state.player.status;
        var preloadedData = preloadedRepoData[rest.name];
        var nextPlayerStatus = updatePlayerStatus(status) ? ui_types_player_status__WEBPACK_IMPORTED_MODULE_4__["default"].READY : status;
        return _objectSpread({}, state, {
          activeRepo: {
            name: rest.name,
            owner: rest.owner
          },
          // ideally these stores would listen to this event
          player: _objectSpread({}, state.player, {
            status: nextPlayerStatus
          }),
          commitData: _objectSpread({}, state.commitData, {
            data: Object(services_build_note_sequence__WEBPACK_IMPORTED_MODULE_6__["default"])(preloadedData)
          })
        });
      }

    case ui_actions__WEBPACK_IMPORTED_MODULE_3__["ACTION_TYPES"].SET_REPO_NAME:
      {
        return _objectSpread({}, state, {
          activeRepo: _objectSpread({}, state.activeRepo, {
            name: rest.name
          }),
          commitData: _objectSpread({}, state.commitData, {
            status: ui_types_commit_status__WEBPACK_IMPORTED_MODULE_5__["default"].IDLE,
            error: ''
          })
        });
      }

    case ui_actions__WEBPACK_IMPORTED_MODULE_3__["ACTION_TYPES"].SET_REPO_OWNER:
      {
        return _objectSpread({}, state, {
          activeRepo: _objectSpread({}, state.activeRepo, {
            owner: rest.owner
          }),
          commitData: _objectSpread({}, state.commitData, {
            status: ui_types_commit_status__WEBPACK_IMPORTED_MODULE_5__["default"].IDLE,
            error: ''
          })
        });
      }

    case ui_actions__WEBPACK_IMPORTED_MODULE_3__["ACTION_TYPES"].COMMIT_DATA.FETCHING:
      {
        return _objectSpread({}, state, {
          commitData: _objectSpread({}, state.commitData, {
            status: ui_types_commit_status__WEBPACK_IMPORTED_MODULE_5__["default"].FETCHING
          })
        });
      }

    case ui_actions__WEBPACK_IMPORTED_MODULE_3__["ACTION_TYPES"].COMMIT_DATA.ERROR:
      {
        return _objectSpread({}, state, {
          commitData: _objectSpread({}, state.commitData, {
            status: ui_types_commit_status__WEBPACK_IMPORTED_MODULE_5__["default"].ERROR,
            error: rest.error
          })
        });
      }

    case ui_actions__WEBPACK_IMPORTED_MODULE_3__["ACTION_TYPES"].COMMIT_DATA.SUCCESS:
      {
        return _objectSpread({}, state, {
          commitData: {
            status: ui_types_commit_status__WEBPACK_IMPORTED_MODULE_5__["default"].SUCCESS,
            error: '',
            data: Object(services_build_note_sequence__WEBPACK_IMPORTED_MODULE_6__["default"])(rest.data)
          },
          player: _objectSpread({}, state.player, {
            status: ui_types_player_status__WEBPACK_IMPORTED_MODULE_4__["default"].READY
          })
        });
      }

    case ui_actions__WEBPACK_IMPORTED_MODULE_3__["ACTION_TYPES"].PLAYER.PLAY:
      {
        return _objectSpread({}, state, {
          player: _objectSpread({}, state.player, {
            status: ui_types_player_status__WEBPACK_IMPORTED_MODULE_4__["default"].PLAYING,
            currentTime: 0
          })
        });
      }

    case ui_actions__WEBPACK_IMPORTED_MODULE_3__["ACTION_TYPES"].PLAYER.DONE:
      {
        return _objectSpread({}, state, {
          player: _objectSpread({}, state.player, {
            status: ui_types_player_status__WEBPACK_IMPORTED_MODULE_4__["default"].STOPPED,
            totalTime: rest.totalTime,
            graph: null
          })
        });
      }

    case ui_actions__WEBPACK_IMPORTED_MODULE_3__["ACTION_TYPES"].PLAYER.UPDATE_TIME:
      {
        return _objectSpread({}, state, {
          player: _objectSpread({}, state.player, {
            currentTime: rest.currentTime
          })
        });
      }

    case ui_actions__WEBPACK_IMPORTED_MODULE_3__["ACTION_TYPES"].PLAYER.VIZ:
      {
        return _objectSpread({}, state, {
          player: _objectSpread({}, state.player, {
            graph: rest.graph
          })
        });
      }

    default:
      return state;
  }
}

var store = Object(preact__WEBPACK_IMPORTED_MODULE_0__["createContext"])(initialState);
var Provider = store.Provider;

var StateProvider = function StateProvider(_ref) {
  var children = _ref.children;

  var _useReducer = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_2__["useReducer"])(appReducer, initialState),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1];

  return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(Provider, {
    value: {
      state: state,
      dispatch: dispatch
    }
  }, children);
};

var playerStatusSelector = function playerStatusSelector(state) {
  var player = state.player;
  return {
    isPlaying: function isPlaying() {
      return player.status === ui_types_player_status__WEBPACK_IMPORTED_MODULE_4__["default"].PLAYING;
    },
    isStopped: function isStopped() {
      return player.status === ui_types_player_status__WEBPACK_IMPORTED_MODULE_4__["default"].STOPPED;
    },
    isIdle: function isIdle() {
      return player.status === ui_types_player_status__WEBPACK_IMPORTED_MODULE_4__["default"].IDLE;
    },
    isPaused: function isPaused() {
      return player.status === ui_types_player_status__WEBPACK_IMPORTED_MODULE_4__["default"].PAUSED;
    }
  };
};


/* harmony default export */ __webpack_exports__["default"] = (StateProvider);

/***/ }),

/***/ "./src/ui/types/commit-status.js":
/*!***************************************!*\
  !*** ./src/ui/types/commit-status.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var COMMIT_DATA_STATUS = {
  ERROR: 'error',
  SUCCESS: 'success',
  IDLE: 'idle',
  FETCHING: 'fetching'
};
/* harmony default export */ __webpack_exports__["default"] = (COMMIT_DATA_STATUS);

/***/ }),

/***/ "./src/ui/types/player-status.js":
/*!***************************************!*\
  !*** ./src/ui/types/player-status.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var PLAYER_STATUS = {
  PLAYING: 'playing',
  PAUSED: 'paused',
  STOPPED: 'stopped',
  READY: 'ready',
  IDLE: 'idle'
};
/* harmony default export */ __webpack_exports__["default"] = (PLAYER_STATUS);

/***/ }),

/***/ "./src/ui/use-previous.js":
/*!********************************!*\
  !*** ./src/ui/use-previous.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact/hooks */ "./node_modules/preact/hooks/dist/hooks.module.js");
 // Allows for a componentDid/Should update type hook
// in which we compute somoe side effect based on
// changes in previous and current props

var usePrevious = function usePrevious(value) {
  var ref = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useRef"])(value);
  Object(preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    ref.current = value;
  });
  return ref.current;
};

/* harmony default export */ __webpack_exports__["default"] = (usePrevious);

/***/ }),

/***/ "./src/ui/viz/bars.js":
/*!****************************!*\
  !*** ./src/ui/viz/bars.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var ui_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ui/store */ "./src/ui/store.js");
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! preact/hooks */ "./node_modules/preact/hooks/dist/hooks.module.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var getPixelRatio = function getPixelRatio(context) {
  var backingStore = context.backingStorePixelRatio || context.webkitBackingStorePixelRatio || context.mozBackingStorePixelRatio || context.msBackingStorePixelRatio || context.oBackingStorePixelRatio || context.backingStorePixelRatio || 1;
  return (window.devicePixelRatio || 1) / backingStore;
}; // not optimal but it works!


var BarViz = function BarViz(props) {
  var _useContext = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_2__["useContext"])(ui_store__WEBPACK_IMPORTED_MODULE_1__["store"]),
      _useContext$state$pla = _useContext.state.player,
      graph = _useContext$state$pla.graph,
      status = _useContext$state$pla.status;

  var canvasRef = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  var playing = status === 'playing';

  var _useState = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      isActive = _useState2[0],
      setActive = _useState2[1];

  var hide = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    if (isActive && !playing) {
      setActive(false);
    }
  }, [isActive, playing, setActive]); // By storing this as a ref, we can always ensure a
  // pointer to the freshest version of this function

  var safeHide = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_2__["useRef"])(); // // Every time the component re-renders,
  // // store a pointer to the current 'hide' function
  // // in our ref.

  Object(preact_hooks__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    safeHide.current = hide;
  }, [hide]);
  Object(preact_hooks__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (playing) {
      setActive(true);
    }
  }, [playing, setActive]);
  /**
   * For this effect, we only have to pass in a reference to the canvas.
   * Since we cached the hide function as safeHide, it doesn't need to be
   * supplied as a dependency, as it is guaranteed to never be a stale
   * reference.
   * 
   * We want to pass the `current` prop explicitly, as the canvasRef
   * object will usually not be equal to itself
   */

  Object(preact_hooks__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (!canvasRef.current) {
      return;
    } // Wrap the event handler in a custom handler, to make
    // sure we always call the freshest version.


    var handler = function handler(event) {
      return safeHide.current(event);
    };

    canvasRef.current.addEventListener('animationend', handler);
    return function () {
      canvasRef.current && canvasRef.current.removeEventListener('animationend', handler);
    };
  }, [canvasRef.current]);
  Object(preact_hooks__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (!graph) {
      return;
    }

    var animationRequest;
    var canvas = canvasRef.current;
    var context = canvas.getContext('2d');
    var ratio = getPixelRatio(context); // We need to store values to the original unscaled size of the 
    // canvas. Since this function runs again every time the component
    // mounts we dont want to continually add the scaled values to it

    var width = canvas.width;
    var height = canvas.height;
    canvas.width = canvas.width * ratio;
    canvas.height = canvas.height * ratio;
    context.scale(ratio, ratio);
    canvas.style.width = "".concat(width, "px");
    canvas.style.height = "".concat(height, "px");
    var x = 0;
    var dataArray;
    var barWidth;
    var barHeight;
    var bufferLength;

    var render = function render() {
      var h = canvas.height / ratio;
      var w = canvas.width / ratio;
      context.clearRect(0, 0, w, h);
      x = 0;
      graph.analyser.getByteFrequencyData(dataArray);
      context.fillStyle = "#CBD5E0";
      context.fillRect(0, 0, w, h);
      /**
       * Start at 1 because according to the nyquist theorum, N * samplerate/frequency,
       * where N is 0, the frequency here will also be zero. This means that the
       * bar will always be at max height due to the calculations below used
       * to draw. Also, nobody will miss 1 frequency : D
       */

      for (var i = 1; i < bufferLength; i++) {
        var frequencyData = dataArray[i];
        barHeight = frequencyData; // The louder the sound, the more indigo it turns, the quieter,
        // the yellower

        var r = Math.max(244 - frequencyData, 76);
        var g = Math.max(226 - frequencyData, 81);
        var b = Math.max(9 - frequencyData, 191);
        var finalHeight = barHeight ? barHeight * (i / 20) / ratio : 0;
        context.fillStyle = "rgba(".concat(r, ",").concat(g, ",").concat(b, ", .8)"); // Since this is amplitude displayed linearly, the first elem is always the attack
        // of the sound (I think), therefore the loudest, so clamp it manually

        if (!i) {
          finalHeight = barHeight - 150;
        }

        context.fillRect(x, h - finalHeight, barWidth, finalHeight);
        x += barWidth + 1;
      }

      animationRequest = requestAnimationFrame(render);
    };

    bufferLength = graph.analyser.frequencyBinCount;
    barWidth = canvas.width / ratio / bufferLength * 2.5;
    dataArray = new Uint8Array(bufferLength);
    render();
    return function () {
      // Restore the canvas to its defaults
      canvas.width = width;
      canvas.height = height;
      context.clearRect(0, 0, canvas.width, canvas.height);
      cancelAnimationFrame(animationRequest);
    };
  }, [canvasRef.current]);
  return isActive && Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("canvas", {
    "class": "viz ".concat(props.className, " overflow-hidden"),
    style: {
      animation: "".concat(playing ? "fade-in" : "fade-out", " .75s")
    },
    ref: canvasRef,
    height: props.height,
    width: props.width
  });
};

/* harmony default export */ __webpack_exports__["default"] = (BarViz);

/***/ }),

/***/ "./src/ui/with-checkable.js":
/*!**********************************!*\
  !*** ./src/ui/with-checkable.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var setChecked = function setChecked(condition, predicate) {
  if (!condition) {
    return '';
  }

  return condition === predicate ? ' checked' : ' unchecked';
};

var withCheckable = function withCheckable(ConcreteRadio) {
  return function (props) {
    return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(ConcreteRadio, _extends({}, props, {
      setChecked: setChecked
    }));
  };
};

/* harmony default export */ __webpack_exports__["default"] = (withCheckable);

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/taco/Documents/code/music-experiment/src/index.js */"./src/index.js");


/***/ }),

/***/ 1:
/*!*************************************!*\
  !*** ./get-request-agent (ignored) ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

/******/ });
//# sourceMappingURL=build.js.map