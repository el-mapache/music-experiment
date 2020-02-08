(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@tensorflow/tfjs"), require("tone"));
	else if(typeof define === 'function' && define.amd)
		define(["tf", "Tone"], factory);
	else if(typeof exports === 'object')
		exports["core"] = factory(require("@tensorflow/tfjs"), require("tone"));
	else
		root["core"] = factory(root["tf"], root["Tone"]);
})(self, function(__WEBPACK_EXTERNAL_MODULE__0__, __WEBPACK_EXTERNAL_MODULE__3__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 62);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_QUARTERS_PER_MINUTE", function() { return DEFAULT_QUARTERS_PER_MINUTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_STEPS_PER_BAR", function() { return DEFAULT_STEPS_PER_BAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_STEPS_PER_QUARTER", function() { return DEFAULT_STEPS_PER_QUARTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_STEPS_PER_SECOND", function() { return DEFAULT_STEPS_PER_SECOND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_VELOCITY", function() { return DEFAULT_VELOCITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_PROGRAM", function() { return DEFAULT_PROGRAM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_TICKS_PER_QUARTER", function() { return DEFAULT_TICKS_PER_QUARTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_CHANNEL", function() { return DEFAULT_CHANNEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DRUM_CHANNEL", function() { return DRUM_CHANNEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MIN_MIDI_VELOCITY", function() { return MIN_MIDI_VELOCITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_MIDI_VELOCITY", function() { return MAX_MIDI_VELOCITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MIDI_VELOCITIES", function() { return MIDI_VELOCITIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NO_CHORD", function() { return NO_CHORD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUM_PITCH_CLASSES", function() { return NUM_PITCH_CLASSES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MIN_MIDI_PITCH", function() { return MIN_MIDI_PITCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_MIDI_PITCH", function() { return MAX_MIDI_PITCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MIDI_PITCHES", function() { return MIDI_PITCHES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MIN_PIANO_PITCH", function() { return MIN_PIANO_PITCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_PIANO_PITCH", function() { return MAX_PIANO_PITCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MIN_DRUM_PITCH", function() { return MIN_DRUM_PITCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_DRUM_PITCH", function() { return MAX_DRUM_PITCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MIN_MIDI_PROGRAM", function() { return MIN_MIDI_PROGRAM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_MIDI_PROGRAM", function() { return MAX_MIDI_PROGRAM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LO_CLICK_PITCH", function() { return LO_CLICK_PITCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HI_CLICK_PITCH", function() { return HI_CLICK_PITCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LO_CLICK_CLASS", function() { return LO_CLICK_CLASS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HI_CLICK_CLASS", function() { return HI_CLICK_CLASS; });
null;
const DEFAULT_QUARTERS_PER_MINUTE = 120.0;
const DEFAULT_STEPS_PER_BAR = 16;
const DEFAULT_STEPS_PER_QUARTER = 4;
const DEFAULT_STEPS_PER_SECOND = 100;
const DEFAULT_VELOCITY = 80;
const DEFAULT_PROGRAM = 0;
const DEFAULT_TICKS_PER_QUARTER = 220;
const DEFAULT_CHANNEL = 0;
const DRUM_CHANNEL = 9;
const MIN_MIDI_VELOCITY = 0;
const MAX_MIDI_VELOCITY = 127;
const MIDI_VELOCITIES = MAX_MIDI_VELOCITY - MIN_MIDI_VELOCITY + 1;
const NO_CHORD = 'N.C.';
const NUM_PITCH_CLASSES = 12;
const MIN_MIDI_PITCH = 0;
const MAX_MIDI_PITCH = 127;
const MIDI_PITCHES = MAX_MIDI_PITCH - MIN_MIDI_PITCH + 1;
const MIN_PIANO_PITCH = 21;
const MAX_PIANO_PITCH = 108;
const MIN_DRUM_PITCH = 35;
const MAX_DRUM_PITCH = 81;
const MIN_MIDI_PROGRAM = 0;
const MAX_MIDI_PROGRAM = 127;
const LO_CLICK_PITCH = 89;
const HI_CLICK_PITCH = 90;
const LO_CLICK_CLASS = 9;
const HI_CLICK_CLASS = 10;


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoteSequence; });
/* harmony import */ var _proto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var _proto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_proto__WEBPACK_IMPORTED_MODULE_0__);

var NoteSequence = _proto__WEBPACK_IMPORTED_MODULE_0__["tensorflow"].magenta.NoteSequence;



/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__3__;

/***/ }),
/* 4 */,
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Level", function() { return Level; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "verbosity", function() { return verbosity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "log", function() { return log; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logWithDuration", function() { return logWithDuration; });
var Level;
(function (Level) {
    Level[Level["NONE"] = 0] = "NONE";
    Level[Level["WARN"] = 5] = "WARN";
    Level[Level["INFO"] = 10] = "INFO";
    Level[Level["DEBUG"] = 20] = "DEBUG";
})(Level || (Level = {}));
let verbosity = 10;
function log(msg, prefix = 'Magenta.js', level = 10) {
    if (level === 0) {
        throw Error('Logging level cannot be NONE.');
    }
    if (verbosity >= level) {
        const logMethod = (level === 5) ? console.warn : console.log;
        logMethod(`%c ${prefix} `, 'background:magenta; color:white', msg);
    }
}
function logWithDuration(msg, startTime, prefix = 'Magenta.js', level = 10) {
    const durationSeconds = (performance.now() - startTime) / 1000;
    log(`${msg} in ${durationSeconds.toPrecision(3)}s`, prefix, level);
}


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultipleTimeSignatureException", function() { return MultipleTimeSignatureException; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BadTimeSignatureException", function() { return BadTimeSignatureException; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NegativeTimeException", function() { return NegativeTimeException; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultipleTempoException", function() { return MultipleTempoException; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuantizationStatusException", function() { return QuantizationStatusException; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return clone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stepsPerQuarterToStepsPerSecond", function() { return stepsPerQuarterToStepsPerSecond; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quantizeToStep", function() { return quantizeToStep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quantizeNoteSequence", function() { return quantizeNoteSequence; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isQuantizedSequence", function() { return isQuantizedSequence; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertIsQuantizedSequence", function() { return assertIsQuantizedSequence; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRelativeQuantizedSequence", function() { return isRelativeQuantizedSequence; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertIsRelativeQuantizedSequence", function() { return assertIsRelativeQuantizedSequence; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAbsoluteQuantizedSequence", function() { return isAbsoluteQuantizedSequence; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertIsAbsoluteQuantizedSequence", function() { return assertIsAbsoluteQuantizedSequence; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unquantizeSequence", function() { return unquantizeSequence; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeInstruments", function() { return mergeInstruments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replaceInstruments", function() { return replaceInstruments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeConsecutiveNotes", function() { return mergeConsecutiveNotes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "concatenate", function() { return concatenate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trim", function() { return trim; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "split", function() { return split; });
/* harmony import */ var _protobuf_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);


const QUANTIZE_CUTOFF = 0.5;
class MultipleTimeSignatureException extends Error {
    constructor(message) {
        super(message);
        Object.setPrototypeOf(this, new.target.prototype);
    }
}
class BadTimeSignatureException extends Error {
    constructor(message) {
        super(message);
        Object.setPrototypeOf(this, new.target.prototype);
    }
}
class NegativeTimeException extends Error {
    constructor(message) {
        super(message);
        Object.setPrototypeOf(this, new.target.prototype);
    }
}
class MultipleTempoException extends Error {
    constructor(message) {
        super(message);
        Object.setPrototypeOf(this, new.target.prototype);
    }
}
class QuantizationStatusException extends Error {
    constructor(message) {
        super(message);
        Object.setPrototypeOf(this, new.target.prototype);
    }
}
function isPowerOf2(n) {
    return n && (n & (n - 1)) === 0;
}
function clone(ns) {
    return _protobuf_index__WEBPACK_IMPORTED_MODULE_0__[/* NoteSequence */ "a"].decode(_protobuf_index__WEBPACK_IMPORTED_MODULE_0__[/* NoteSequence */ "a"].encode(ns).finish());
}
function stepsPerQuarterToStepsPerSecond(stepsPerQuarter, qpm) {
    return stepsPerQuarter * qpm / 60.0;
}
function quantizeToStep(unquantizedSeconds, stepsPerSecond, quantizeCutoff = QUANTIZE_CUTOFF) {
    const unquantizedSteps = unquantizedSeconds * stepsPerSecond;
    return Math.floor(unquantizedSteps + (1 - quantizeCutoff));
}
function getQuantizedTimeEvents(ns) {
    return ns.controlChanges.concat(ns.textAnnotations);
}
function quantizeNotesAndEvents(ns, stepsPerSecond) {
    for (const note of ns.notes) {
        note.quantizedStartStep = quantizeToStep(note.startTime, stepsPerSecond);
        note.quantizedEndStep = quantizeToStep(note.endTime, stepsPerSecond);
        if (note.quantizedEndStep === note.quantizedStartStep) {
            note.quantizedEndStep += 1;
        }
        if (note.quantizedStartStep < 0 || note.quantizedEndStep < 0) {
            throw new NegativeTimeException(`Got negative note time: start_step = ` +
                `${note.quantizedStartStep}, end_step = ` +
                `${note.quantizedEndStep}`);
        }
        if (note.quantizedEndStep > ns.totalQuantizedSteps) {
            ns.totalQuantizedSteps = note.quantizedEndStep;
        }
    }
    getQuantizedTimeEvents(ns).forEach(event => {
        event.quantizedStep = quantizeToStep(event.time, stepsPerSecond);
        if (event.quantizedStep < 0) {
            throw new NegativeTimeException(`Got negative event time: step = ${event.quantizedStep}`);
        }
    });
}
function assertSingleTempo(ns) {
    if (!ns.tempos || ns.tempos.length === 0) {
        return;
    }
    ns.tempos.sort((a, b) => a.time - b.time);
    if (ns.tempos[0].time !== 0 &&
        ns.tempos[0].qpm !== _constants__WEBPACK_IMPORTED_MODULE_1__["DEFAULT_QUARTERS_PER_MINUTE"]) {
        throw new MultipleTempoException('NoteSequence has an implicit tempo change from initial ' +
            `${_constants__WEBPACK_IMPORTED_MODULE_1__["DEFAULT_QUARTERS_PER_MINUTE"]} qpm to ` +
            `${ns.tempos[0].qpm} qpm at ${ns.tempos[0].time} seconds.`);
    }
    for (let i = 1; i < ns.tempos.length; i++) {
        if (ns.tempos[i].qpm !== ns.tempos[0].qpm) {
            throw new MultipleTempoException('NoteSequence has at least one tempo change from ' +
                `${ns.tempos[0].qpm} qpm to ${ns.tempos[i].qpm}` +
                `qpm at ${ns.tempos[i].time} seconds.`);
        }
    }
}
function quantizeNoteSequence(ns, stepsPerQuarter) {
    const qns = clone(ns);
    qns.quantizationInfo =
        _protobuf_index__WEBPACK_IMPORTED_MODULE_0__[/* NoteSequence */ "a"].QuantizationInfo.create({ stepsPerQuarter });
    if (qns.timeSignatures.length > 0) {
        qns.timeSignatures.sort((a, b) => a.time - b.time);
        if (qns.timeSignatures[0].time !== 0 &&
            !(qns.timeSignatures[0].numerator === 4 &&
                qns.timeSignatures[0].denominator === 4)) {
            throw new MultipleTimeSignatureException('NoteSequence has an implicit change from initial 4/4 time ' +
                `signature to ${qns.timeSignatures[0].numerator}/` +
                `${qns.timeSignatures[0].denominator} at ` +
                `${qns.timeSignatures[0].time} seconds.`);
        }
        for (let i = 1; i < qns.timeSignatures.length; i++) {
            const timeSignature = qns.timeSignatures[i];
            if (timeSignature.numerator !== qns.timeSignatures[0].numerator ||
                timeSignature.denominator !== qns.timeSignatures[0].denominator) {
                throw new MultipleTimeSignatureException('NoteSequence has at least one time signature change from ' +
                    `${qns.timeSignatures[0].numerator}/` +
                    `${qns.timeSignatures[0].denominator} to ` +
                    `${timeSignature.numerator}/${timeSignature.denominator} ` +
                    `at ${timeSignature.time} seconds`);
            }
        }
        qns.timeSignatures[0].time = 0;
        qns.timeSignatures = [qns.timeSignatures[0]];
    }
    else {
        const timeSignature = _protobuf_index__WEBPACK_IMPORTED_MODULE_0__[/* NoteSequence */ "a"].TimeSignature.create({ numerator: 4, denominator: 4, time: 0 });
        qns.timeSignatures.push(timeSignature);
    }
    const firstTS = qns.timeSignatures[0];
    if (!isPowerOf2(firstTS.denominator)) {
        throw new BadTimeSignatureException('Denominator is not a power of 2. Time signature: ' +
            `${firstTS.numerator}/${firstTS.denominator}`);
    }
    if (firstTS.numerator === 0) {
        throw new BadTimeSignatureException('Numerator is 0. Time signature: ' +
            `${firstTS.numerator}/${firstTS.denominator}`);
    }
    if (qns.tempos.length > 0) {
        assertSingleTempo(qns);
        qns.tempos[0].time = 0;
        qns.tempos = [qns.tempos[0]];
    }
    else {
        const tempo = _protobuf_index__WEBPACK_IMPORTED_MODULE_0__[/* NoteSequence */ "a"].Tempo.create({ qpm: _constants__WEBPACK_IMPORTED_MODULE_1__["DEFAULT_QUARTERS_PER_MINUTE"], time: 0 });
        qns.tempos.push(tempo);
    }
    const stepsPerSecond = stepsPerQuarterToStepsPerSecond(stepsPerQuarter, qns.tempos[0].qpm);
    qns.totalQuantizedSteps = quantizeToStep(ns.totalTime, stepsPerSecond);
    quantizeNotesAndEvents(qns, stepsPerSecond);
    return qns;
}
function isQuantizedSequence(ns) {
    return ns.quantizationInfo &&
        (ns.quantizationInfo.stepsPerQuarter > 0 ||
            ns.quantizationInfo.stepsPerSecond > 0);
}
function assertIsQuantizedSequence(ns) {
    if (!isQuantizedSequence(ns)) {
        throw new QuantizationStatusException(`NoteSequence ${ns.id} is not quantized (missing quantizationInfo)`);
    }
}
function isRelativeQuantizedSequence(ns) {
    return ns.quantizationInfo && ns.quantizationInfo.stepsPerQuarter > 0;
}
function assertIsRelativeQuantizedSequence(ns) {
    if (!isRelativeQuantizedSequence(ns)) {
        throw new QuantizationStatusException(`NoteSequence ${ns.id} is not quantized or is quantized based on absolute timing`);
    }
}
function isAbsoluteQuantizedSequence(ns) {
    return ns.quantizationInfo && ns.quantizationInfo.stepsPerSecond > 0;
}
function assertIsAbsoluteQuantizedSequence(ns) {
    if (!isAbsoluteQuantizedSequence(ns)) {
        throw new QuantizationStatusException(`NoteSequence ${ns.id} is not quantized or is quantized based on relative timing`);
    }
}
function unquantizeSequence(qns, qpm) {
    assertIsRelativeQuantizedSequence(qns);
    assertSingleTempo(qns);
    const ns = clone(qns);
    if (qpm) {
        if (ns.tempos && ns.tempos.length > 0) {
            ns.tempos[0].qpm = qpm;
        }
        else {
            ns.tempos.push(_protobuf_index__WEBPACK_IMPORTED_MODULE_0__[/* NoteSequence */ "a"].Tempo.create({ time: 0, qpm }));
        }
    }
    else {
        qpm = (qns.tempos && qns.tempos.length > 0) ?
            ns.tempos[0].qpm :
            _constants__WEBPACK_IMPORTED_MODULE_1__["DEFAULT_QUARTERS_PER_MINUTE"];
    }
    const stepToSeconds = (step) => step / ns.quantizationInfo.stepsPerQuarter * (60 / qpm);
    ns.totalTime = stepToSeconds(ns.totalQuantizedSteps);
    ns.notes.forEach(n => {
        n.startTime = stepToSeconds(n.quantizedStartStep);
        n.endTime = stepToSeconds(n.quantizedEndStep);
        ns.totalTime = Math.max(ns.totalTime, n.endTime);
        delete n.quantizedStartStep;
        delete n.quantizedEndStep;
    });
    getQuantizedTimeEvents(ns).forEach(event => {
        event.time = stepToSeconds(event.time);
    });
    delete ns.totalQuantizedSteps;
    delete ns.quantizationInfo;
    return ns;
}
function mergeInstruments(ns) {
    const result = clone(ns);
    const events = result.notes.concat(result.pitchBends).concat(result.controlChanges);
    const programs = Array.from(new Set(events.filter(e => !e.isDrum).map(e => e.program)));
    events.forEach(e => {
        if (e.isDrum) {
            e.program = 0;
            e.instrument = programs.length;
        }
        else {
            e.instrument = programs.indexOf(e.program);
        }
    });
    return result;
}
function replaceInstruments(originalSequence, replaceSequence) {
    const instrumentsInOriginal = new Set(originalSequence.notes.map(n => n.instrument));
    const instrumentsInReplace = new Set(replaceSequence.notes.map(n => n.instrument));
    const newNotes = [];
    originalSequence.notes.forEach(n => {
        if (!instrumentsInReplace.has(n.instrument)) {
            newNotes.push(_protobuf_index__WEBPACK_IMPORTED_MODULE_0__[/* NoteSequence */ "a"].Note.create(n));
        }
    });
    replaceSequence.notes.forEach(n => {
        if (instrumentsInOriginal.has(n.instrument)) {
            newNotes.push(_protobuf_index__WEBPACK_IMPORTED_MODULE_0__[/* NoteSequence */ "a"].Note.create(n));
        }
    });
    const output = clone(originalSequence);
    output.notes = newNotes.sort((a, b) => {
        const voiceCompare = a.instrument - b.instrument;
        if (voiceCompare) {
            return voiceCompare;
        }
        return a.quantizedStartStep - b.quantizedStartStep;
    });
    return output;
}
function mergeConsecutiveNotes(sequence) {
    assertIsQuantizedSequence(sequence);
    const output = clone(sequence);
    output.notes = [];
    const newNotes = sequence.notes.sort((a, b) => {
        const voiceCompare = a.instrument - b.instrument;
        if (voiceCompare) {
            return voiceCompare;
        }
        return a.quantizedStartStep - b.quantizedStartStep;
    });
    const note = new _protobuf_index__WEBPACK_IMPORTED_MODULE_0__[/* NoteSequence */ "a"].Note();
    note.pitch = newNotes[0].pitch;
    note.instrument = newNotes[0].instrument;
    note.quantizedStartStep = newNotes[0].quantizedStartStep;
    note.quantizedEndStep = newNotes[0].quantizedEndStep;
    output.notes.push(note);
    let o = 0;
    for (let i = 1; i < newNotes.length; i++) {
        const thisNote = newNotes[i];
        const previousNote = output.notes[o];
        if (previousNote.instrument === thisNote.instrument &&
            previousNote.pitch === thisNote.pitch &&
            thisNote.quantizedStartStep === previousNote.quantizedEndStep &&
            thisNote.quantizedStartStep % 16 !== 0) {
            output.notes[o].quantizedEndStep +=
                thisNote.quantizedEndStep - thisNote.quantizedStartStep;
        }
        else {
            const note = new _protobuf_index__WEBPACK_IMPORTED_MODULE_0__[/* NoteSequence */ "a"].Note();
            note.pitch = newNotes[i].pitch;
            note.instrument = newNotes[i].instrument;
            note.quantizedStartStep = newNotes[i].quantizedStartStep;
            note.quantizedEndStep = newNotes[i].quantizedEndStep;
            output.notes.push(note);
            o++;
        }
    }
    return output;
}
function concatenate(concatenateSequences, sequenceDurations) {
    if (sequenceDurations &&
        sequenceDurations.length !== concatenateSequences.length) {
        throw new Error(`Number of sequences to concatenate and their individual
 durations does not match.`);
    }
    if (isQuantizedSequence(concatenateSequences[0])) {
        for (let i = 0; i < concatenateSequences.length; ++i) {
            assertIsQuantizedSequence(concatenateSequences[i]);
            if (concatenateSequences[i].quantizationInfo.stepsPerQuarter !==
                concatenateSequences[0].quantizationInfo.stepsPerQuarter) {
                throw new Error('Not all sequences have the same quantizationInfo');
            }
        }
        return concatenateHelper(concatenateSequences, 'totalQuantizedSteps', 'quantizedStartStep', 'quantizedEndStep', sequenceDurations);
    }
    else {
        return concatenateHelper(concatenateSequences, 'totalTime', 'startTime', 'endTime', sequenceDurations);
    }
}
function trim(ns, start, end, truncateEndNotes) {
    return isQuantizedSequence(ns) ?
        trimHelper(ns, start, end, 'totalQuantizedSteps', 'quantizedStartStep', 'quantizedEndStep', truncateEndNotes) :
        trimHelper(ns, start, end, 'totalTime', 'startTime', 'endTime', truncateEndNotes);
}
function concatenateHelper(seqs, totalKey, startKey, endKey, sequenceDurations) {
    let concatSeq;
    let totalDuration = 0;
    for (let i = 0; i < seqs.length; ++i) {
        const seqDuration = sequenceDurations ? sequenceDurations[i] : seqs[i][totalKey];
        if (seqDuration === 0) {
            throw Error(`Sequence ${seqs[i].id} has no ${totalKey}, and no individual duration was provided.`);
        }
        if (i === 0) {
            concatSeq = clone(seqs[0]);
        }
        else {
            Array.prototype.push.apply(concatSeq.notes, seqs[i].notes.map(n => {
                const newN = _protobuf_index__WEBPACK_IMPORTED_MODULE_0__[/* NoteSequence */ "a"].Note.create(n);
                newN[startKey] += totalDuration;
                newN[endKey] += totalDuration;
                return newN;
            }));
        }
        totalDuration += seqDuration;
    }
    concatSeq[totalKey] = totalDuration;
    return concatSeq;
}
function trimHelper(ns, start, end, totalKey, startKey, endKey, truncateEndNotes) {
    const result = clone(ns);
    result[totalKey] = end;
    result.notes = result.notes.filter(n => n[startKey] >= start && n[startKey] <= end &&
        (truncateEndNotes || n[endKey] <= end));
    for (let i = 0; i < result.notes.length; i++) {
        result.notes[i][startKey] -= start;
        result.notes[i][endKey] -= start;
        if (truncateEndNotes) {
            result.notes[i][endKey] = Math.min(result.notes[i][endKey], end);
        }
    }
    result[totalKey] = Math.min(ns[totalKey] - start, end);
    return result;
}
function split(seq, chunkSize) {
    assertIsQuantizedSequence(seq);
    const ns = clone(seq);
    const notesBystartStep = ns.notes.sort((a, b) => a.quantizedStartStep - b.quantizedStartStep);
    const chunks = [];
    let startStep = 0;
    let currentNotes = [];
    for (let i = 0; i < notesBystartStep.length; i++) {
        const note = notesBystartStep[i];
        const originalStartStep = note.quantizedStartStep;
        const originalEndStep = note.quantizedEndStep;
        note.quantizedStartStep -= startStep;
        note.quantizedEndStep -= startStep;
        if (note.quantizedStartStep < 0) {
            continue;
        }
        if (note.quantizedEndStep <= chunkSize) {
            currentNotes.push(note);
        }
        else {
            if (note.quantizedStartStep < chunkSize) {
                const newNote = _protobuf_index__WEBPACK_IMPORTED_MODULE_0__[/* NoteSequence */ "a"].Note.create(note);
                newNote.quantizedEndStep = chunkSize;
                newNote.startTime = newNote.endTime = undefined;
                currentNotes.push(newNote);
                note.quantizedStartStep = startStep + chunkSize;
                note.quantizedEndStep = originalEndStep;
            }
            else {
                note.quantizedStartStep = originalStartStep;
                note.quantizedEndStep = originalEndStep;
            }
            if (note.quantizedEndStep > chunkSize ||
                note.quantizedStartStep > chunkSize) {
                i = i - 1;
            }
            if (currentNotes.length !== 0) {
                const newSequence = clone(ns);
                newSequence.notes = currentNotes;
                newSequence.totalQuantizedSteps = chunkSize;
                chunks.push(newSequence);
            }
            currentNotes = [];
            startStep += chunkSize;
        }
    }
    if (currentNotes.length !== 0) {
        const newSequence = clone(ns);
        newSequence.notes = currentNotes;
        newSequence.totalQuantizedSteps = chunkSize;
        chunks.push(newSequence);
    }
    return chunks;
}


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
var util = exports;

// used to return a Promise where callback is omitted
util.asPromise = __webpack_require__(21);

// converts to / from base64 encoded strings
util.base64 = __webpack_require__(22);

// base class of rpc.Service
util.EventEmitter = __webpack_require__(23);

// float handling accross browsers
util.float = __webpack_require__(24);

// requires modules optionally and hides the call from bundlers
util.inquire = __webpack_require__(25);

// converts to / from utf8 encoded strings
util.utf8 = __webpack_require__(26);

// provides a node-like buffer pool in the browser
util.pool = __webpack_require__(27);

// utility to work with the low and high bits of a 64 bit value
util.LongBits = __webpack_require__(28);

// global object reference
util.global = typeof window !== "undefined" && window
           || typeof global !== "undefined" && global
           || typeof self   !== "undefined" && self
           || this; // eslint-disable-line no-invalid-this

/**
 * An immuable empty array.
 * @memberof util
 * @type {Array.<*>}
 * @const
 */
util.emptyArray = Object.freeze ? Object.freeze([]) : /* istanbul ignore next */ []; // used on prototypes

/**
 * An immutable empty object.
 * @type {Object}
 * @const
 */
util.emptyObject = Object.freeze ? Object.freeze({}) : /* istanbul ignore next */ {}; // used on prototypes

/**
 * Whether running within node or not.
 * @memberof util
 * @type {boolean}
 * @const
 */
util.isNode = Boolean(util.global.process && util.global.process.versions && util.global.process.versions.node);

/**
 * Tests if the specified value is an integer.
 * @function
 * @param {*} value Value to test
 * @returns {boolean} `true` if the value is an integer
 */
util.isInteger = Number.isInteger || /* istanbul ignore next */ function isInteger(value) {
    return typeof value === "number" && isFinite(value) && Math.floor(value) === value;
};

/**
 * Tests if the specified value is a string.
 * @param {*} value Value to test
 * @returns {boolean} `true` if the value is a string
 */
util.isString = function isString(value) {
    return typeof value === "string" || value instanceof String;
};

/**
 * Tests if the specified value is a non-null object.
 * @param {*} value Value to test
 * @returns {boolean} `true` if the value is a non-null object
 */
util.isObject = function isObject(value) {
    return value && typeof value === "object";
};

/**
 * Checks if a property on a message is considered to be present.
 * This is an alias of {@link util.isSet}.
 * @function
 * @param {Object} obj Plain object or message instance
 * @param {string} prop Property name
 * @returns {boolean} `true` if considered to be present, otherwise `false`
 */
util.isset =

/**
 * Checks if a property on a message is considered to be present.
 * @param {Object} obj Plain object or message instance
 * @param {string} prop Property name
 * @returns {boolean} `true` if considered to be present, otherwise `false`
 */
util.isSet = function isSet(obj, prop) {
    var value = obj[prop];
    if (value != null && obj.hasOwnProperty(prop)) // eslint-disable-line eqeqeq, no-prototype-builtins
        return typeof value !== "object" || (Array.isArray(value) ? value.length : Object.keys(value).length) > 0;
    return false;
};

/**
 * Any compatible Buffer instance.
 * This is a minimal stand-alone definition of a Buffer instance. The actual type is that exported by node's typings.
 * @interface Buffer
 * @extends Uint8Array
 */

/**
 * Node's Buffer class if available.
 * @type {Constructor<Buffer>}
 */
util.Buffer = (function() {
    try {
        var Buffer = util.inquire("buffer").Buffer;
        // refuse to use non-node buffers if not explicitly assigned (perf reasons):
        return Buffer.prototype.utf8Write ? Buffer : /* istanbul ignore next */ null;
    } catch (e) {
        /* istanbul ignore next */
        return null;
    }
})();

// Internal alias of or polyfull for Buffer.from.
util._Buffer_from = null;

// Internal alias of or polyfill for Buffer.allocUnsafe.
util._Buffer_allocUnsafe = null;

/**
 * Creates a new buffer of whatever type supported by the environment.
 * @param {number|number[]} [sizeOrArray=0] Buffer size or number array
 * @returns {Uint8Array|Buffer} Buffer
 */
util.newBuffer = function newBuffer(sizeOrArray) {
    /* istanbul ignore next */
    return typeof sizeOrArray === "number"
        ? util.Buffer
            ? util._Buffer_allocUnsafe(sizeOrArray)
            : new util.Array(sizeOrArray)
        : util.Buffer
            ? util._Buffer_from(sizeOrArray)
            : typeof Uint8Array === "undefined"
                ? sizeOrArray
                : new Uint8Array(sizeOrArray);
};

/**
 * Array implementation used in the browser. `Uint8Array` if supported, otherwise `Array`.
 * @type {Constructor<Uint8Array>}
 */
util.Array = typeof Uint8Array !== "undefined" ? Uint8Array /* istanbul ignore next */ : Array;

/**
 * Any compatible Long instance.
 * This is a minimal stand-alone definition of a Long instance. The actual type is that exported by long.js.
 * @interface Long
 * @property {number} low Low bits
 * @property {number} high High bits
 * @property {boolean} unsigned Whether unsigned or not
 */

/**
 * Long.js's Long class if available.
 * @type {Constructor<Long>}
 */
util.Long = /* istanbul ignore next */ util.global.dcodeIO && /* istanbul ignore next */ util.global.dcodeIO.Long
         || /* istanbul ignore next */ util.global.Long
         || util.inquire("long");

/**
 * Regular expression used to verify 2 bit (`bool`) map keys.
 * @type {RegExp}
 * @const
 */
util.key2Re = /^true|false|0|1$/;

/**
 * Regular expression used to verify 32 bit (`int32` etc.) map keys.
 * @type {RegExp}
 * @const
 */
util.key32Re = /^-?(?:0|[1-9][0-9]*)$/;

/**
 * Regular expression used to verify 64 bit (`int64` etc.) map keys.
 * @type {RegExp}
 * @const
 */
util.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/;

/**
 * Converts a number or long to an 8 characters long hash string.
 * @param {Long|number} value Value to convert
 * @returns {string} Hash
 */
util.longToHash = function longToHash(value) {
    return value
        ? util.LongBits.from(value).toHash()
        : util.LongBits.zeroHash;
};

/**
 * Converts an 8 characters long hash string to a long or number.
 * @param {string} hash Hash
 * @param {boolean} [unsigned=false] Whether unsigned or not
 * @returns {Long|number} Original value
 */
util.longFromHash = function longFromHash(hash, unsigned) {
    var bits = util.LongBits.fromHash(hash);
    if (util.Long)
        return util.Long.fromBits(bits.lo, bits.hi, unsigned);
    return bits.toNumber(Boolean(unsigned));
};

/**
 * Merges the properties of the source object into the destination object.
 * @memberof util
 * @param {Object.<string,*>} dst Destination object
 * @param {Object.<string,*>} src Source object
 * @param {boolean} [ifNotSet=false] Merges only if the key is not already set
 * @returns {Object.<string,*>} Destination object
 */
function merge(dst, src, ifNotSet) { // used by converters
    for (var keys = Object.keys(src), i = 0; i < keys.length; ++i)
        if (dst[keys[i]] === undefined || !ifNotSet)
            dst[keys[i]] = src[keys[i]];
    return dst;
}

util.merge = merge;

/**
 * Converts the first character of a string to lower case.
 * @param {string} str String to convert
 * @returns {string} Converted string
 */
util.lcFirst = function lcFirst(str) {
    return str.charAt(0).toLowerCase() + str.substring(1);
};

/**
 * Creates a custom error constructor.
 * @memberof util
 * @param {string} name Error name
 * @returns {Constructor<Error>} Custom error constructor
 */
function newError(name) {

    function CustomError(message, properties) {

        if (!(this instanceof CustomError))
            return new CustomError(message, properties);

        // Error.call(this, message);
        // ^ just returns a new error instance because the ctor can be called as a function

        Object.defineProperty(this, "message", { get: function() { return message; } });

        /* istanbul ignore next */
        if (Error.captureStackTrace) // node
            Error.captureStackTrace(this, CustomError);
        else
            Object.defineProperty(this, "stack", { value: (new Error()).stack || "" });

        if (properties)
            merge(this, properties);
    }

    (CustomError.prototype = Object.create(Error.prototype)).constructor = CustomError;

    Object.defineProperty(CustomError.prototype, "name", { get: function() { return name; } });

    CustomError.prototype.toString = function toString() {
        return this.name + ": " + this.message;
    };

    return CustomError;
}

util.newError = newError;

/**
 * Constructs a new protocol error.
 * @classdesc Error subclass indicating a protocol specifc error.
 * @memberof util
 * @extends Error
 * @template T extends Message<T>
 * @constructor
 * @param {string} message Error message
 * @param {Object.<string,*>} [properties] Additional properties
 * @example
 * try {
 *     MyMessage.decode(someBuffer); // throws if required fields are missing
 * } catch (e) {
 *     if (e instanceof ProtocolError && e.instance)
 *         console.log("decoded so far: " + JSON.stringify(e.instance));
 * }
 */
util.ProtocolError = newError("ProtocolError");

/**
 * So far decoded message instance.
 * @name util.ProtocolError#instance
 * @type {Message<T>}
 */

/**
 * A OneOf getter as returned by {@link util.oneOfGetter}.
 * @typedef OneOfGetter
 * @type {function}
 * @returns {string|undefined} Set field name, if any
 */

/**
 * Builds a getter for a oneof's present field name.
 * @param {string[]} fieldNames Field names
 * @returns {OneOfGetter} Unbound getter
 */
util.oneOfGetter = function getOneOf(fieldNames) {
    var fieldMap = {};
    for (var i = 0; i < fieldNames.length; ++i)
        fieldMap[fieldNames[i]] = 1;

    /**
     * @returns {string|undefined} Set field name, if any
     * @this Object
     * @ignore
     */
    return function() { // eslint-disable-line consistent-return
        for (var keys = Object.keys(this), i = keys.length - 1; i > -1; --i)
            if (fieldMap[keys[i]] === 1 && this[keys[i]] !== undefined && this[keys[i]] !== null)
                return keys[i];
    };
};

/**
 * A OneOf setter as returned by {@link util.oneOfSetter}.
 * @typedef OneOfSetter
 * @type {function}
 * @param {string|undefined} value Field name
 * @returns {undefined}
 */

/**
 * Builds a setter for a oneof's present field name.
 * @param {string[]} fieldNames Field names
 * @returns {OneOfSetter} Unbound setter
 */
util.oneOfSetter = function setOneOf(fieldNames) {

    /**
     * @param {string} name Field name
     * @returns {undefined}
     * @this Object
     * @ignore
     */
    return function(name) {
        for (var i = 0; i < fieldNames.length; ++i)
            if (fieldNames[i] !== name)
                delete this[fieldNames[i]];
    };
};

/**
 * Default conversion options used for {@link Message#toJSON} implementations.
 *
 * These options are close to proto3's JSON mapping with the exception that internal types like Any are handled just like messages. More precisely:
 *
 * - Longs become strings
 * - Enums become string keys
 * - Bytes become base64 encoded strings
 * - (Sub-)Messages become plain objects
 * - Maps become plain objects with all string keys
 * - Repeated fields become arrays
 * - NaN and Infinity for float and double fields become strings
 *
 * @type {IConversionOptions}
 * @see https://developers.google.com/protocol-buffers/docs/proto3?hl=en#json
 */
util.toJSONOptions = {
    longs: String,
    enums: String,
    bytes: String,
    json: true
};

// Sets up buffer utility according to the environment (called in index-minimal)
util._configure = function() {
    var Buffer = util.Buffer;
    /* istanbul ignore if */
    if (!Buffer) {
        util._Buffer_from = util._Buffer_allocUnsafe = null;
        return;
    }
    // because node 4.x buffers are incompatible & immutable
    // see: https://github.com/dcodeIO/protobuf.js/pull/665
    util._Buffer_from = Buffer.from !== Uint8Array.from && Buffer.from ||
        /* istanbul ignore next */
        function Buffer_from(value, encoding) {
            return new Buffer(value, encoding);
        };
    util._Buffer_allocUnsafe = Buffer.allocUnsafe ||
        /* istanbul ignore next */
        function Buffer_allocUnsafe(size) {
            return new Buffer(size);
        };
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(8)))

/***/ }),
/* 8 */
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
/* 9 */,
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_DRUM_PITCH_CLASSES", function() { return DEFAULT_DRUM_PITCH_CLASSES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "converterFromSpec", function() { return converterFromSpec; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataConverter", function() { return DataConverter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrumsConverter", function() { return DrumsConverter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrumRollConverter", function() { return DrumRollConverter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrumsOneHotConverter", function() { return DrumsOneHotConverter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MelodyConverter", function() { return MelodyConverter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrioConverter", function() { return TrioConverter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultitrackConverter", function() { return MultitrackConverter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GrooveConverter", function() { return GrooveConverter; });
/* harmony import */ var _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _protobuf_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var _performance__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11);
/* harmony import */ var _sequences__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);





const DEFAULT_DRUM_PITCH_CLASSES = [
    [36, 35],
    [38, 27, 28, 31, 32, 33, 34, 37, 39, 40, 56, 65, 66, 75, 85],
    [42, 44, 54, 68, 69, 70, 71, 73, 78, 80],
    [46, 67, 72, 74, 79, 81],
    [45, 29, 41, 61, 64, 84],
    [48, 47, 60, 63, 77, 86, 87],
    [50, 30, 43, 62, 76, 83],
    [49, 55, 57, 58],
    [51, 52, 53, 59, 82]
];
function converterFromSpec(spec) {
    switch (spec.type) {
        case 'MelodyConverter':
            return new MelodyConverter(spec.args);
        case 'DrumsConverter':
            return new DrumsConverter(spec.args);
        case 'DrumRollConverter':
            return new DrumRollConverter(spec.args);
        case 'TrioConverter':
            return new TrioConverter(spec.args);
        case 'DrumsOneHotConverter':
            return new DrumsOneHotConverter(spec.args);
        case 'MultitrackConverter':
            return new MultitrackConverter(spec.args);
        case 'GrooveConverter':
            return new GrooveConverter(spec.args);
        default:
            throw new Error(`Unknown DataConverter type: ${spec}`);
    }
}
class DataConverter {
    constructor(args) {
        this.NUM_SPLITS = 0;
        this.SEGMENTED_BY_TRACK = false;
        this.numSteps = args.numSteps;
        this.numSegments = args.numSegments;
    }
    tensorSteps(tensor) {
        return _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__["scalar"](tensor.shape[0], 'int32');
    }
}
class DrumsConverter extends DataConverter {
    constructor(args) {
        super(args);
        this.pitchClasses = args.pitchClasses || DEFAULT_DRUM_PITCH_CLASSES;
        this.pitchToClass = new Map();
        for (let c = 0; c < this.pitchClasses.length; ++c) {
            this.pitchClasses[c].forEach((p) => {
                this.pitchToClass.set(p, c);
            });
        }
        this.depth = this.pitchClasses.length;
    }
    toTensor(noteSequence) {
        _sequences__WEBPACK_IMPORTED_MODULE_4__["assertIsQuantizedSequence"](noteSequence);
        const numSteps = this.numSteps || noteSequence.totalQuantizedSteps;
        const drumRoll = _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__["buffer"]([numSteps, this.pitchClasses.length + 1], 'int32');
        for (let i = 0; i < numSteps; ++i) {
            drumRoll.set(1, i, -1);
        }
        noteSequence.notes.forEach((note) => {
            drumRoll.set(1, note.quantizedStartStep, this.pitchToClass.get(note.pitch));
            drumRoll.set(0, note.quantizedStartStep, -1);
        });
        return drumRoll.toTensor();
    }
    async toNoteSequence(oh, stepsPerQuarter, qpm) {
        const noteSequence = createQuantizedNoteSequence(stepsPerQuarter, qpm);
        const labelsTensor = oh.argMax(1);
        const labels = await labelsTensor.data();
        labelsTensor.dispose();
        for (let s = 0; s < labels.length; ++s) {
            for (let p = 0; p < this.pitchClasses.length; p++) {
                if (labels[s] >> p & 1) {
                    noteSequence.notes.push(_protobuf_index__WEBPACK_IMPORTED_MODULE_1__[/* NoteSequence */ "a"].Note.create({
                        pitch: this.pitchClasses[p][0],
                        quantizedStartStep: s,
                        quantizedEndStep: s + 1,
                        isDrum: true
                    }));
                }
            }
        }
        noteSequence.totalQuantizedSteps = labels.length;
        return noteSequence;
    }
}
class DrumRollConverter extends DrumsConverter {
    async toNoteSequence(roll, stepsPerQuarter, qpm) {
        const noteSequence = createQuantizedNoteSequence(stepsPerQuarter, qpm);
        const flatRoll = await roll.data();
        for (let s = 0; s < roll.shape[0]; ++s) {
            const pitches = flatRoll.slice(s * this.depth, (s + 1) * this.depth);
            for (let p = 0; p < pitches.length; ++p) {
                if (pitches[p]) {
                    noteSequence.notes.push(_protobuf_index__WEBPACK_IMPORTED_MODULE_1__[/* NoteSequence */ "a"].Note.create({
                        pitch: this.pitchClasses[p][0],
                        quantizedStartStep: s,
                        quantizedEndStep: s + 1,
                        isDrum: true
                    }));
                }
            }
        }
        noteSequence.totalQuantizedSteps = roll.shape[0];
        return noteSequence;
    }
}
class DrumsOneHotConverter extends DrumsConverter {
    constructor(args) {
        super(args);
        this.depth = Math.pow(2, this.pitchClasses.length);
    }
    toTensor(noteSequence) {
        _sequences__WEBPACK_IMPORTED_MODULE_4__["assertIsRelativeQuantizedSequence"](noteSequence);
        const numSteps = this.numSteps || noteSequence.totalQuantizedSteps;
        const labels = Array(numSteps).fill(0);
        for (const { pitch, quantizedStartStep } of noteSequence.notes) {
            labels[quantizedStartStep] += Math.pow(2, this.pitchToClass.get(pitch));
        }
        return _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__["tidy"](() => _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__["oneHot"](_tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__["tensor1d"](labels, 'int32'), this.depth));
    }
}
class MelodyConverter extends DataConverter {
    constructor(args) {
        super(args);
        this.NOTE_OFF = 1;
        this.FIRST_PITCH = 2;
        this.minPitch = args.minPitch;
        this.maxPitch = args.maxPitch;
        this.ignorePolyphony =
            (args.ignorePolyphony === undefined) ? true : args.ignorePolyphony;
        this.depth = args.maxPitch - args.minPitch + 1 + this.FIRST_PITCH;
    }
    toTensor(noteSequence) {
        _sequences__WEBPACK_IMPORTED_MODULE_4__["assertIsQuantizedSequence"](noteSequence);
        const numSteps = this.numSteps || noteSequence.totalQuantizedSteps;
        const sortedNotes = noteSequence.notes.sort((n1, n2) => {
            if (n1.quantizedStartStep === n2.quantizedStartStep) {
                return n2.pitch - n1.pitch;
            }
            return n1.quantizedStartStep - n2.quantizedStartStep;
        });
        const mel = _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__["buffer"]([numSteps], 'int32');
        let lastStart = -1;
        sortedNotes.forEach(n => {
            if (n.quantizedStartStep === lastStart) {
                if (!this.ignorePolyphony) {
                    throw new Error('`NoteSequence` is not monophonic.');
                }
                else {
                    return;
                }
            }
            if (n.pitch < this.minPitch || n.pitch > this.maxPitch) {
                throw Error('`NoteSequence` has a pitch outside of the valid range: ' +
                    `${n.pitch}`);
            }
            mel.set(n.pitch - this.minPitch + this.FIRST_PITCH, n.quantizedStartStep);
            mel.set(this.NOTE_OFF, n.quantizedEndStep);
            lastStart = n.quantizedStartStep;
        });
        return _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__["tidy"](() => _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__["oneHot"](mel.toTensor(), this.depth));
    }
    async toNoteSequence(oh, stepsPerQuarter, qpm) {
        const noteSequence = createQuantizedNoteSequence(stepsPerQuarter, qpm);
        const labelsTensor = oh.argMax(1);
        const labels = await labelsTensor.data();
        labelsTensor.dispose();
        let currNote = null;
        for (let s = 0; s < labels.length; ++s) {
            const label = labels[s];
            switch (label) {
                case 0:
                    break;
                case 1:
                    if (currNote) {
                        currNote.quantizedEndStep = s;
                        noteSequence.notes.push(currNote);
                        currNote = null;
                    }
                    break;
                default:
                    if (currNote) {
                        currNote.quantizedEndStep = s;
                        noteSequence.notes.push(currNote);
                    }
                    currNote = _protobuf_index__WEBPACK_IMPORTED_MODULE_1__[/* NoteSequence */ "a"].Note.create({
                        pitch: label - this.FIRST_PITCH + this.minPitch,
                        quantizedStartStep: s
                    });
            }
        }
        if (currNote) {
            currNote.quantizedEndStep = labels.length;
            noteSequence.notes.push(currNote);
        }
        noteSequence.totalQuantizedSteps = labels.length;
        return noteSequence;
    }
}
class TrioConverter extends DataConverter {
    constructor(args) {
        super(args);
        this.NUM_SPLITS = 3;
        this.MEL_PROG_RANGE = [0, 31];
        this.BASS_PROG_RANGE = [32, 39];
        args.melArgs.numSteps = args.numSteps;
        args.bassArgs.numSteps = args.numSteps;
        args.drumsArgs.numSteps = args.numSteps;
        this.melConverter = new MelodyConverter(args.melArgs);
        this.bassConverter = new MelodyConverter(args.bassArgs);
        this.drumsConverter = new DrumsOneHotConverter(args.drumsArgs);
        this.depth =
            (this.melConverter.depth + this.bassConverter.depth +
                this.drumsConverter.depth);
    }
    toTensor(noteSequence) {
        _sequences__WEBPACK_IMPORTED_MODULE_4__["assertIsQuantizedSequence"](noteSequence);
        const melSeq = _sequences__WEBPACK_IMPORTED_MODULE_4__["clone"](noteSequence);
        const bassSeq = _sequences__WEBPACK_IMPORTED_MODULE_4__["clone"](noteSequence);
        const drumsSeq = _sequences__WEBPACK_IMPORTED_MODULE_4__["clone"](noteSequence);
        melSeq.notes = noteSequence.notes.filter(n => (!n.isDrum && n.program >= this.MEL_PROG_RANGE[0] &&
            n.program <= this.MEL_PROG_RANGE[1]));
        bassSeq.notes = noteSequence.notes.filter(n => (!n.isDrum && n.program >= this.BASS_PROG_RANGE[0] &&
            n.program <= this.BASS_PROG_RANGE[1]));
        drumsSeq.notes = noteSequence.notes.filter(n => n.isDrum);
        return _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__["tidy"](() => _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__["concat"]([
            this.melConverter.toTensor(melSeq),
            this.bassConverter.toTensor(bassSeq),
            this.drumsConverter.toTensor(drumsSeq)
        ], -1));
    }
    async toNoteSequence(th, stepsPerQuarter, qpm) {
        const ohs = _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__["split"](th, [
            this.melConverter.depth, this.bassConverter.depth,
            this.drumsConverter.depth
        ], -1);
        const ns = await this.melConverter.toNoteSequence(ohs[0], stepsPerQuarter, qpm);
        ns.notes.forEach(n => {
            n.instrument = 0;
            n.program = 0;
        });
        const bassNs = await this.bassConverter.toNoteSequence(ohs[1], stepsPerQuarter, qpm);
        ns.notes.push(...bassNs.notes.map(n => {
            n.instrument = 1;
            n.program = this.BASS_PROG_RANGE[0];
            return n;
        }));
        const drumsNs = await this.drumsConverter.toNoteSequence(ohs[2], stepsPerQuarter, qpm);
        ns.notes.push(...drumsNs.notes.map(n => {
            n.instrument = 2;
            return n;
        }));
        ohs.forEach(oh => oh.dispose());
        return ns;
    }
}
class MultitrackConverter extends DataConverter {
    constructor(args) {
        super(args);
        this.SEGMENTED_BY_TRACK = true;
        this.stepsPerQuarter = args.stepsPerQuarter;
        this.totalSteps = args.totalSteps;
        this.numVelocityBins = args.numVelocityBins;
        this.minPitch = args.minPitch ? args.minPitch : _constants__WEBPACK_IMPORTED_MODULE_2__["MIN_MIDI_PITCH"];
        this.maxPitch = args.maxPitch ? args.maxPitch : _constants__WEBPACK_IMPORTED_MODULE_2__["MAX_MIDI_PITCH"];
        this.numPitches = this.maxPitch - this.minPitch + 1;
        this.performanceEventDepth =
            2 * this.numPitches + this.totalSteps + this.numVelocityBins;
        this.numPrograms =
            _constants__WEBPACK_IMPORTED_MODULE_2__["MAX_MIDI_PROGRAM"] - _constants__WEBPACK_IMPORTED_MODULE_2__["MIN_MIDI_PROGRAM"] + 2;
        this.endToken = this.performanceEventDepth + this.numPrograms;
        this.depth = this.endToken + 1;
        this.endTensor = _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__["tidy"](() => _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__["oneHot"](_tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__["tensor1d"]([this.endToken], 'int32'), this.depth)
            .as1D());
    }
    trackToTensor(track) {
        const maxEventsPerTrack = this.numSteps / this.numSegments;
        let tokens = undefined;
        if (track) {
            while (track.events.length > maxEventsPerTrack - 2) {
                track.events.pop();
            }
            tokens = _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__["buffer"]([track.events.length + 2], 'int32');
            tokens.set(this.performanceEventDepth +
                (track.isDrum ? this.numPrograms - 1 : track.program), 0);
            track.events.forEach((event, index) => {
                switch (event.type) {
                    case 'note-on':
                        tokens.set(event.pitch - this.minPitch, index + 1);
                        break;
                    case 'note-off':
                        tokens.set(this.numPitches + event.pitch - this.minPitch, index + 1);
                        break;
                    case 'time-shift':
                        tokens.set(2 * this.numPitches + event.steps - 1, index + 1);
                        break;
                    case 'velocity-change':
                        tokens.set(2 * this.numPitches + this.totalSteps + event.velocityBin - 1, index + 1);
                        break;
                    default:
                        throw new Error(`Unrecognized performance event: ${event}`);
                }
            });
            tokens.set(this.endToken, track.events.length + 1);
        }
        else {
            tokens = _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__["buffer"]([1], 'int32', new Int32Array([this.endToken]));
        }
        return _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__["tidy"](() => {
            const oh = _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__["oneHot"](tokens.toTensor(), this.depth);
            return oh.pad([[0, maxEventsPerTrack - oh.shape[0]], [0, 0]]);
        });
    }
    toTensor(noteSequence) {
        _sequences__WEBPACK_IMPORTED_MODULE_4__["assertIsRelativeQuantizedSequence"](noteSequence);
        if (noteSequence.quantizationInfo.stepsPerQuarter !==
            this.stepsPerQuarter) {
            throw new Error(`Steps per quarter note mismatch: ${noteSequence.quantizationInfo.stepsPerQuarter} != ${this.stepsPerQuarter}`);
        }
        const seq = _sequences__WEBPACK_IMPORTED_MODULE_4__["clone"](noteSequence);
        seq.notes = noteSequence.notes.filter(note => note.pitch >= this.minPitch && note.pitch <= this.maxPitch);
        const instruments = new Set(seq.notes.map(note => note.instrument));
        const tracks = Array.from(instruments)
            .map(instrument => _performance__WEBPACK_IMPORTED_MODULE_3__["Performance"].fromNoteSequence(seq, this.totalSteps, this.numVelocityBins, instrument));
        const sortedTracks = tracks.sort((a, b) => b.isDrum ? -1 : (a.isDrum ? 1 : a.program - b.program));
        while (sortedTracks.length > this.numSegments) {
            sortedTracks.pop();
        }
        sortedTracks.forEach((track) => track.setNumSteps(this.totalSteps));
        while (sortedTracks.length < this.numSegments) {
            sortedTracks.push(undefined);
        }
        return _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__["tidy"](() => _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__["concat"](sortedTracks.map((track) => this.trackToTensor(track)), 0));
    }
    tokensToTrack(tokens) {
        const idx = tokens.indexOf(this.endToken);
        const endIndex = idx >= 0 ? idx : tokens.length;
        const trackTokens = tokens.slice(0, endIndex);
        const eventTokens = trackTokens.filter((token) => token < this.performanceEventDepth);
        const programTokens = trackTokens.filter((token) => token >= this.performanceEventDepth);
        const [program, isDrum] = programTokens.length ?
            (programTokens[0] - this.performanceEventDepth < this.numPrograms - 1 ?
                [programTokens[0] - this.performanceEventDepth, false] :
                [0, true]) :
            [0, false];
        const events = Array.from(eventTokens).map((token) => {
            if (token < this.numPitches) {
                return { type: 'note-on', pitch: this.minPitch + token };
            }
            else if (token < 2 * this.numPitches) {
                return {
                    type: 'note-off',
                    pitch: this.minPitch + token - this.numPitches
                };
            }
            else if (token < 2 * this.numPitches + this.totalSteps) {
                return {
                    type: 'time-shift',
                    steps: token - 2 * this.numPitches + 1
                };
            }
            else if (token <
                2 * this.numPitches + this.totalSteps + this.numVelocityBins) {
                return {
                    type: 'velocity-change',
                    velocityBin: token - 2 * this.numPitches - this.totalSteps + 1
                };
            }
            else {
                throw new Error(`Invalid performance event token: ${token}`);
            }
        });
        return new _performance__WEBPACK_IMPORTED_MODULE_3__["Performance"](events, this.totalSteps, this.numVelocityBins, program, isDrum);
    }
    async toNoteSequence(oh, stepsPerQuarter = this.stepsPerQuarter, qpm) {
        const noteSequence = createQuantizedNoteSequence(stepsPerQuarter, qpm);
        noteSequence.totalQuantizedSteps = this.totalSteps;
        const tensors = _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__["tidy"](() => _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__["split"](oh.argMax(1), this.numSegments));
        const tracks = await Promise.all(tensors.map(async (tensor) => {
            const tokens = await tensor.data();
            const track = this.tokensToTrack(tokens);
            tensor.dispose();
            return track;
        }));
        tracks.forEach((track, instrument) => {
            track.setNumSteps(this.totalSteps);
            noteSequence.notes.push(...track.toNoteSequence(instrument).notes);
        });
        return noteSequence;
    }
}
class GrooveConverter extends DataConverter {
    constructor(args) {
        super(args);
        this.TAPIFY_CHANNEL = 3;
        this.stepsPerQuarter =
            args.stepsPerQuarter || _constants__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_STEPS_PER_QUARTER"];
        this.pitchClasses = args.pitchClasses || DEFAULT_DRUM_PITCH_CLASSES;
        this.pitchToClass = new Map();
        for (let c = 0; c < this.pitchClasses.length; ++c) {
            this.pitchClasses[c].forEach((p) => {
                this.pitchToClass.set(p, c);
            });
        }
        this.humanize = args.humanize || false;
        this.tapify = args.tapify || false;
        this.splitInstruments = args.splitInstruments || false;
        this.depth = 3;
    }
    toTensor(ns) {
        const qns = _sequences__WEBPACK_IMPORTED_MODULE_4__["isRelativeQuantizedSequence"](ns) ?
            ns :
            _sequences__WEBPACK_IMPORTED_MODULE_4__["quantizeNoteSequence"](ns, this.stepsPerQuarter);
        const numSteps = this.numSteps;
        const qpm = (qns.tempos && qns.tempos.length) ?
            qns.tempos[0].qpm :
            _constants__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_QUARTERS_PER_MINUTE"];
        const stepLength = (60. / qpm) / this.stepsPerQuarter;
        const stepNotes = [];
        for (let i = 0; i < numSteps; ++i) {
            stepNotes.push(new Map());
        }
        qns.notes.forEach(n => {
            if (!(this.tapify || this.pitchToClass.has(n.pitch))) {
                return;
            }
            const s = n.quantizedStartStep;
            if (s >= stepNotes.length) {
                throw Error(`Model does not support sequences with more than ${numSteps} steps (${numSteps * stepLength} seconds at qpm ${qpm}).`);
            }
            const d = this.tapify ? this.TAPIFY_CHANNEL : this.pitchToClass.get(n.pitch);
            if (!stepNotes[s].has(d) || stepNotes[s].get(d).velocity < n.velocity) {
                stepNotes[s].set(d, n);
            }
        });
        const numDrums = this.pitchClasses.length;
        const hitVectors = _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__["buffer"]([numSteps, numDrums]);
        const velocityVectors = _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__["buffer"]([numSteps, numDrums]);
        const offsetVectors = _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__["buffer"]([numSteps, numDrums]);
        function getOffset(n) {
            if (n.startTime === undefined) {
                return 0;
            }
            const tOnset = n.startTime;
            const qOnset = n.quantizedStartStep * stepLength;
            return 2 * (qOnset - tOnset) / stepLength;
        }
        for (let s = 0; s < numSteps; ++s) {
            for (let d = 0; d < numDrums; ++d) {
                const note = stepNotes[s].get(d);
                hitVectors.set(note ? 1 : 0, s, d);
                if (!this.humanize && !this.tapify) {
                    velocityVectors.set(note ? note.velocity / _constants__WEBPACK_IMPORTED_MODULE_2__["MAX_MIDI_VELOCITY"] : 0, s, d);
                }
                if (!this.humanize) {
                    offsetVectors.set(note ? getOffset(note) : 0, s, d);
                }
            }
        }
        return _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__["tidy"](() => {
            const hits = hitVectors.toTensor();
            const velocities = velocityVectors.toTensor();
            const offsets = offsetVectors.toTensor();
            const outLength = this.splitInstruments ? numSteps * numDrums : numSteps;
            return _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__["concat"]([
                hits.as2D(outLength, -1), velocities.as2D(outLength, -1),
                offsets.as2D(outLength, -1)
            ], 1);
        });
    }
    async toNoteSequence(t, stepsPerQuarter, qpm = _constants__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_QUARTERS_PER_MINUTE"]) {
        if (stepsPerQuarter && stepsPerQuarter !== this.stepsPerQuarter) {
            throw Error('`stepsPerQuarter` is set by the model.');
        }
        stepsPerQuarter = this.stepsPerQuarter;
        const numSteps = this.splitInstruments ?
            t.shape[0] / this.pitchClasses.length :
            t.shape[0];
        const stepLength = (60. / qpm) / this.stepsPerQuarter;
        const ns = _protobuf_index__WEBPACK_IMPORTED_MODULE_1__[/* NoteSequence */ "a"].create({ totalTime: numSteps * stepLength, tempos: [{ qpm }] });
        const results = await t.data();
        function clip(v, min, max) {
            return Math.min(Math.max(v, min), max);
        }
        const numDrums = this.pitchClasses.length;
        for (let s = 0; s < numSteps; ++s) {
            const stepResults = results.slice(s * numDrums * this.depth, (s + 1) * numDrums * this.depth);
            for (let d = 0; d < numDrums; ++d) {
                const hitOutput = stepResults[this.splitInstruments ? d * this.depth : d];
                const velI = this.splitInstruments ? (d * this.depth + 1) : (numDrums + d);
                const velOutput = stepResults[velI];
                const offsetI = this.splitInstruments ? (d * this.depth + 2) : (2 * numDrums + d);
                const offsetOutput = stepResults[offsetI];
                if (hitOutput > 0.5) {
                    const velocity = clip(Math.round(velOutput * _constants__WEBPACK_IMPORTED_MODULE_2__["MAX_MIDI_VELOCITY"]), _constants__WEBPACK_IMPORTED_MODULE_2__["MIN_MIDI_VELOCITY"], _constants__WEBPACK_IMPORTED_MODULE_2__["MAX_MIDI_VELOCITY"]);
                    const offset = clip(offsetOutput / 2, -0.5, 0.5);
                    ns.notes.push(_protobuf_index__WEBPACK_IMPORTED_MODULE_1__[/* NoteSequence */ "a"].Note.create({
                        pitch: this.pitchClasses[d][0],
                        startTime: (s - offset) * stepLength,
                        endTime: (s - offset + 1) * stepLength,
                        velocity,
                        isDrum: true
                    }));
                }
            }
        }
        return ns;
    }
}
function createQuantizedNoteSequence(stepsPerQuarter = _constants__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_STEPS_PER_QUARTER"], qpm = _constants__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_QUARTERS_PER_MINUTE"]) {
    return _protobuf_index__WEBPACK_IMPORTED_MODULE_1__[/* NoteSequence */ "a"].create({ quantizationInfo: { stepsPerQuarter }, tempos: [{ qpm }] });
}


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Performance", function() { return Performance; });
/* harmony import */ var _protobuf_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _sequences__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _logging__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);




class Performance {
    constructor(events, maxShiftSteps, numVelocityBins, program, isDrum) {
        this.events = events;
        this.maxShiftSteps = maxShiftSteps;
        this.numVelocityBins = numVelocityBins;
        this.program = program;
        this.isDrum = isDrum;
    }
    static fromNoteSequence(noteSequence, maxShiftSteps, numVelocityBins, instrument) {
        _sequences__WEBPACK_IMPORTED_MODULE_2__["assertIsQuantizedSequence"](noteSequence);
        const notes = noteSequence.notes.filter((note, _) => instrument !== undefined ? note.instrument === instrument : true);
        const sortedNotes = notes.sort((a, b) => a.startTime === b.startTime ? a.pitch - b.pitch :
            a.startTime - b.startTime);
        const onsets = sortedNotes.map((note, i) => ({ step: note.quantizedStartStep, index: i, isOffset: 0 }));
        const offsets = sortedNotes.map((note, i) => ({ step: note.quantizedEndStep, index: i, isOffset: 1 }));
        const noteEvents = onsets.concat(offsets).sort((a, b) => a.step === b.step ?
            (a.index === b.index ? a.isOffset - b.isOffset :
                a.index - b.index) :
            a.step - b.step);
        const velocityBinSize = numVelocityBins ?
            Math.ceil((_constants__WEBPACK_IMPORTED_MODULE_1__["MIDI_VELOCITIES"] - 1) / numVelocityBins) :
            undefined;
        const events = [];
        let currentStep = 0;
        let currentVelocityBin = numVelocityBins;
        for (const e of noteEvents) {
            if (e.step > currentStep) {
                while (e.step > currentStep + maxShiftSteps) {
                    events.push({ type: 'time-shift', steps: maxShiftSteps });
                    currentStep += maxShiftSteps;
                }
                events.push({ type: 'time-shift', steps: e.step - currentStep });
                currentStep = e.step;
            }
            if (e.isOffset) {
                events.push({ type: 'note-off', pitch: sortedNotes[e.index].pitch });
            }
            else {
                if (velocityBinSize) {
                    const velocityBin = Math.floor((sortedNotes[e.index].velocity -
                        _constants__WEBPACK_IMPORTED_MODULE_1__["MIN_MIDI_VELOCITY"] - 1) /
                        velocityBinSize) +
                        1;
                    if (velocityBin !== currentVelocityBin) {
                        events.push({ type: 'velocity-change', velocityBin });
                        currentVelocityBin = velocityBin;
                    }
                }
                events.push({ type: 'note-on', pitch: sortedNotes[e.index].pitch });
            }
        }
        const isDrum = notes.some(note => note.isDrum) ?
            (notes.some(note => !note.isDrum) ? undefined : true) :
            false;
        const programs = Array.from(new Set(notes.map(note => note.program)));
        const program = (!isDrum && programs.length === 1) ? programs[0] : undefined;
        const performance = new Performance(events, maxShiftSteps, numVelocityBins, program, isDrum);
        performance.setNumSteps(noteSequence.totalQuantizedSteps);
        return performance;
    }
    getNumSteps() {
        return this.events.filter((event) => event.type === 'time-shift')
            .map((event) => event.steps)
            .reduce((a, b) => a + b, 0);
    }
    setNumSteps(numSteps) {
        let currentNumSteps = this.getNumSteps();
        if (currentNumSteps < numSteps) {
            if (this.events.length) {
                const event = this.events[this.events.length - 1];
                if (event.type === 'time-shift') {
                    const steps = Math.min(numSteps - currentNumSteps, this.maxShiftSteps - event.steps);
                    event.steps += steps;
                    currentNumSteps += steps;
                }
            }
            while (currentNumSteps < numSteps) {
                if (currentNumSteps + this.maxShiftSteps > numSteps) {
                    this.events.push({ type: 'time-shift', steps: numSteps - currentNumSteps });
                    currentNumSteps = numSteps;
                }
                else {
                    this.events.push({ type: 'time-shift', steps: this.maxShiftSteps });
                    currentNumSteps += this.maxShiftSteps;
                }
            }
        }
        else if (currentNumSteps > numSteps) {
            while (this.events.length && currentNumSteps > numSteps) {
                const event = this.events[this.events.length - 1];
                if (event.type === 'time-shift') {
                    if (currentNumSteps - event.steps < numSteps) {
                        event.steps -= currentNumSteps - numSteps;
                        currentNumSteps = numSteps;
                    }
                    else {
                        this.events.pop();
                        currentNumSteps -= event.steps;
                    }
                }
                else {
                    this.events.pop();
                }
            }
        }
    }
    toNoteSequence(instrument) {
        const velocityBinSize = this.numVelocityBins ?
            Math.ceil((_constants__WEBPACK_IMPORTED_MODULE_1__["MIDI_VELOCITIES"] - 1) / this.numVelocityBins) :
            undefined;
        const noteSequence = _protobuf_index__WEBPACK_IMPORTED_MODULE_0__[/* NoteSequence */ "a"].create();
        let currentStep = 0;
        let currentVelocity = undefined;
        const pitchStartStepsAndVelocities = new Map();
        for (let i = _constants__WEBPACK_IMPORTED_MODULE_1__["MIN_MIDI_PITCH"]; i <= _constants__WEBPACK_IMPORTED_MODULE_1__["MAX_MIDI_PITCH"]; ++i) {
            pitchStartStepsAndVelocities.set(i, []);
        }
        for (const event of this.events) {
            switch (event.type) {
                case 'note-on':
                    pitchStartStepsAndVelocities.get(event.pitch).push([
                        currentStep, currentVelocity
                    ]);
                    break;
                case 'note-off':
                    const startStepsAndVelocities = pitchStartStepsAndVelocities.get(event.pitch);
                    if (startStepsAndVelocities.length) {
                        const [startStep, velocity] = startStepsAndVelocities.shift();
                        if (currentStep > startStep) {
                            noteSequence.notes.push(_protobuf_index__WEBPACK_IMPORTED_MODULE_0__[/* NoteSequence */ "a"].Note.create({
                                pitch: event.pitch,
                                velocity,
                                instrument,
                                quantizedStartStep: startStep,
                                quantizedEndStep: currentStep,
                                program: this.program,
                                isDrum: this.isDrum,
                            }));
                        }
                        else {
                            _logging__WEBPACK_IMPORTED_MODULE_3__["log"]('Ignoring zero-length note: ' +
                                `(pitch = ${event.pitch}, step = ${currentStep})`, 'Performance');
                        }
                    }
                    else {
                        _logging__WEBPACK_IMPORTED_MODULE_3__["log"]('Ignoring note-off with no previous note-on:' +
                            `(pitch = ${event.pitch}, step = ${currentStep})`, 'Performance');
                    }
                    break;
                case 'time-shift':
                    currentStep += event.steps;
                    break;
                case 'velocity-change':
                    if (velocityBinSize) {
                        currentVelocity = _constants__WEBPACK_IMPORTED_MODULE_1__["MIN_MIDI_VELOCITY"] +
                            (event.velocityBin - 1) * velocityBinSize + 1;
                    }
                    else {
                        throw new Error(`Unexpected velocity change event: ${event}`);
                    }
                    break;
                default:
                    throw new Error(`Unrecognized performance event: ${event}`);
            }
        }
        pitchStartStepsAndVelocities.forEach((startStepsAndVelocities, pitch) => {
            for (const [startStep, velocity] of startStepsAndVelocities) {
                if (currentStep > startStep) {
                    noteSequence.notes.push(_protobuf_index__WEBPACK_IMPORTED_MODULE_0__[/* NoteSequence */ "a"].Note.create({
                        pitch,
                        velocity,
                        instrument,
                        quantizedStartStep: startStep,
                        quantizedEndStep: currentStep,
                        program: this.program,
                        isDrum: this.isDrum
                    }));
                }
                else {
                    _logging__WEBPACK_IMPORTED_MODULE_3__["log"]('Ignoring zero-length note: ' +
                        `(pitch = ${pitch}, step = ${currentStep})`, 'Performance');
                }
            }
        });
        noteSequence.totalQuantizedSteps = currentStep;
        return noteSequence;
    }
}


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = Writer;

var util      = __webpack_require__(7);

var BufferWriter; // cyclic

var LongBits  = util.LongBits,
    base64    = util.base64,
    utf8      = util.utf8;

/**
 * Constructs a new writer operation instance.
 * @classdesc Scheduled writer operation.
 * @constructor
 * @param {function(*, Uint8Array, number)} fn Function to call
 * @param {number} len Value byte length
 * @param {*} val Value to write
 * @ignore
 */
function Op(fn, len, val) {

    /**
     * Function to call.
     * @type {function(Uint8Array, number, *)}
     */
    this.fn = fn;

    /**
     * Value byte length.
     * @type {number}
     */
    this.len = len;

    /**
     * Next operation.
     * @type {Writer.Op|undefined}
     */
    this.next = undefined;

    /**
     * Value to write.
     * @type {*}
     */
    this.val = val; // type varies
}

/* istanbul ignore next */
function noop() {} // eslint-disable-line no-empty-function

/**
 * Constructs a new writer state instance.
 * @classdesc Copied writer state.
 * @memberof Writer
 * @constructor
 * @param {Writer} writer Writer to copy state from
 * @ignore
 */
function State(writer) {

    /**
     * Current head.
     * @type {Writer.Op}
     */
    this.head = writer.head;

    /**
     * Current tail.
     * @type {Writer.Op}
     */
    this.tail = writer.tail;

    /**
     * Current buffer length.
     * @type {number}
     */
    this.len = writer.len;

    /**
     * Next state.
     * @type {State|null}
     */
    this.next = writer.states;
}

/**
 * Constructs a new writer instance.
 * @classdesc Wire format writer using `Uint8Array` if available, otherwise `Array`.
 * @constructor
 */
function Writer() {

    /**
     * Current length.
     * @type {number}
     */
    this.len = 0;

    /**
     * Operations head.
     * @type {Object}
     */
    this.head = new Op(noop, 0, 0);

    /**
     * Operations tail
     * @type {Object}
     */
    this.tail = this.head;

    /**
     * Linked forked states.
     * @type {Object|null}
     */
    this.states = null;

    // When a value is written, the writer calculates its byte length and puts it into a linked
    // list of operations to perform when finish() is called. This both allows us to allocate
    // buffers of the exact required size and reduces the amount of work we have to do compared
    // to first calculating over objects and then encoding over objects. In our case, the encoding
    // part is just a linked list walk calling operations with already prepared values.
}

/**
 * Creates a new writer.
 * @function
 * @returns {BufferWriter|Writer} A {@link BufferWriter} when Buffers are supported, otherwise a {@link Writer}
 */
Writer.create = util.Buffer
    ? function create_buffer_setup() {
        return (Writer.create = function create_buffer() {
            return new BufferWriter();
        })();
    }
    /* istanbul ignore next */
    : function create_array() {
        return new Writer();
    };

/**
 * Allocates a buffer of the specified size.
 * @param {number} size Buffer size
 * @returns {Uint8Array} Buffer
 */
Writer.alloc = function alloc(size) {
    return new util.Array(size);
};

// Use Uint8Array buffer pool in the browser, just like node does with buffers
/* istanbul ignore else */
if (util.Array !== Array)
    Writer.alloc = util.pool(Writer.alloc, util.Array.prototype.subarray);

/**
 * Pushes a new operation to the queue.
 * @param {function(Uint8Array, number, *)} fn Function to call
 * @param {number} len Value byte length
 * @param {number} val Value to write
 * @returns {Writer} `this`
 * @private
 */
Writer.prototype._push = function push(fn, len, val) {
    this.tail = this.tail.next = new Op(fn, len, val);
    this.len += len;
    return this;
};

function writeByte(val, buf, pos) {
    buf[pos] = val & 255;
}

function writeVarint32(val, buf, pos) {
    while (val > 127) {
        buf[pos++] = val & 127 | 128;
        val >>>= 7;
    }
    buf[pos] = val;
}

/**
 * Constructs a new varint writer operation instance.
 * @classdesc Scheduled varint writer operation.
 * @extends Op
 * @constructor
 * @param {number} len Value byte length
 * @param {number} val Value to write
 * @ignore
 */
function VarintOp(len, val) {
    this.len = len;
    this.next = undefined;
    this.val = val;
}

VarintOp.prototype = Object.create(Op.prototype);
VarintOp.prototype.fn = writeVarint32;

/**
 * Writes an unsigned 32 bit value as a varint.
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */
Writer.prototype.uint32 = function write_uint32(value) {
    // here, the call to this.push has been inlined and a varint specific Op subclass is used.
    // uint32 is by far the most frequently used operation and benefits significantly from this.
    this.len += (this.tail = this.tail.next = new VarintOp(
        (value = value >>> 0)
                < 128       ? 1
        : value < 16384     ? 2
        : value < 2097152   ? 3
        : value < 268435456 ? 4
        :                     5,
    value)).len;
    return this;
};

/**
 * Writes a signed 32 bit value as a varint.
 * @function
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */
Writer.prototype.int32 = function write_int32(value) {
    return value < 0
        ? this._push(writeVarint64, 10, LongBits.fromNumber(value)) // 10 bytes per spec
        : this.uint32(value);
};

/**
 * Writes a 32 bit value as a varint, zig-zag encoded.
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */
Writer.prototype.sint32 = function write_sint32(value) {
    return this.uint32((value << 1 ^ value >> 31) >>> 0);
};

function writeVarint64(val, buf, pos) {
    while (val.hi) {
        buf[pos++] = val.lo & 127 | 128;
        val.lo = (val.lo >>> 7 | val.hi << 25) >>> 0;
        val.hi >>>= 7;
    }
    while (val.lo > 127) {
        buf[pos++] = val.lo & 127 | 128;
        val.lo = val.lo >>> 7;
    }
    buf[pos++] = val.lo;
}

/**
 * Writes an unsigned 64 bit value as a varint.
 * @param {Long|number|string} value Value to write
 * @returns {Writer} `this`
 * @throws {TypeError} If `value` is a string and no long library is present.
 */
Writer.prototype.uint64 = function write_uint64(value) {
    var bits = LongBits.from(value);
    return this._push(writeVarint64, bits.length(), bits);
};

/**
 * Writes a signed 64 bit value as a varint.
 * @function
 * @param {Long|number|string} value Value to write
 * @returns {Writer} `this`
 * @throws {TypeError} If `value` is a string and no long library is present.
 */
Writer.prototype.int64 = Writer.prototype.uint64;

/**
 * Writes a signed 64 bit value as a varint, zig-zag encoded.
 * @param {Long|number|string} value Value to write
 * @returns {Writer} `this`
 * @throws {TypeError} If `value` is a string and no long library is present.
 */
Writer.prototype.sint64 = function write_sint64(value) {
    var bits = LongBits.from(value).zzEncode();
    return this._push(writeVarint64, bits.length(), bits);
};

/**
 * Writes a boolish value as a varint.
 * @param {boolean} value Value to write
 * @returns {Writer} `this`
 */
Writer.prototype.bool = function write_bool(value) {
    return this._push(writeByte, 1, value ? 1 : 0);
};

function writeFixed32(val, buf, pos) {
    buf[pos    ] =  val         & 255;
    buf[pos + 1] =  val >>> 8   & 255;
    buf[pos + 2] =  val >>> 16  & 255;
    buf[pos + 3] =  val >>> 24;
}

/**
 * Writes an unsigned 32 bit value as fixed 32 bits.
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */
Writer.prototype.fixed32 = function write_fixed32(value) {
    return this._push(writeFixed32, 4, value >>> 0);
};

/**
 * Writes a signed 32 bit value as fixed 32 bits.
 * @function
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */
Writer.prototype.sfixed32 = Writer.prototype.fixed32;

/**
 * Writes an unsigned 64 bit value as fixed 64 bits.
 * @param {Long|number|string} value Value to write
 * @returns {Writer} `this`
 * @throws {TypeError} If `value` is a string and no long library is present.
 */
Writer.prototype.fixed64 = function write_fixed64(value) {
    var bits = LongBits.from(value);
    return this._push(writeFixed32, 4, bits.lo)._push(writeFixed32, 4, bits.hi);
};

/**
 * Writes a signed 64 bit value as fixed 64 bits.
 * @function
 * @param {Long|number|string} value Value to write
 * @returns {Writer} `this`
 * @throws {TypeError} If `value` is a string and no long library is present.
 */
Writer.prototype.sfixed64 = Writer.prototype.fixed64;

/**
 * Writes a float (32 bit).
 * @function
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */
Writer.prototype.float = function write_float(value) {
    return this._push(util.float.writeFloatLE, 4, value);
};

/**
 * Writes a double (64 bit float).
 * @function
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */
Writer.prototype.double = function write_double(value) {
    return this._push(util.float.writeDoubleLE, 8, value);
};

var writeBytes = util.Array.prototype.set
    ? function writeBytes_set(val, buf, pos) {
        buf.set(val, pos); // also works for plain array values
    }
    /* istanbul ignore next */
    : function writeBytes_for(val, buf, pos) {
        for (var i = 0; i < val.length; ++i)
            buf[pos + i] = val[i];
    };

/**
 * Writes a sequence of bytes.
 * @param {Uint8Array|string} value Buffer or base64 encoded string to write
 * @returns {Writer} `this`
 */
Writer.prototype.bytes = function write_bytes(value) {
    var len = value.length >>> 0;
    if (!len)
        return this._push(writeByte, 1, 0);
    if (util.isString(value)) {
        var buf = Writer.alloc(len = base64.length(value));
        base64.decode(value, buf, 0);
        value = buf;
    }
    return this.uint32(len)._push(writeBytes, len, value);
};

/**
 * Writes a string.
 * @param {string} value Value to write
 * @returns {Writer} `this`
 */
Writer.prototype.string = function write_string(value) {
    var len = utf8.length(value);
    return len
        ? this.uint32(len)._push(utf8.write, len, value)
        : this._push(writeByte, 1, 0);
};

/**
 * Forks this writer's state by pushing it to a stack.
 * Calling {@link Writer#reset|reset} or {@link Writer#ldelim|ldelim} resets the writer to the previous state.
 * @returns {Writer} `this`
 */
Writer.prototype.fork = function fork() {
    this.states = new State(this);
    this.head = this.tail = new Op(noop, 0, 0);
    this.len = 0;
    return this;
};

/**
 * Resets this instance to the last state.
 * @returns {Writer} `this`
 */
Writer.prototype.reset = function reset() {
    if (this.states) {
        this.head   = this.states.head;
        this.tail   = this.states.tail;
        this.len    = this.states.len;
        this.states = this.states.next;
    } else {
        this.head = this.tail = new Op(noop, 0, 0);
        this.len  = 0;
    }
    return this;
};

/**
 * Resets to the last state and appends the fork state's current write length as a varint followed by its operations.
 * @returns {Writer} `this`
 */
Writer.prototype.ldelim = function ldelim() {
    var head = this.head,
        tail = this.tail,
        len  = this.len;
    this.reset().uint32(len);
    if (len) {
        this.tail.next = head.next; // skip noop
        this.tail = tail;
        this.len += len;
    }
    return this;
};

/**
 * Finishes the write operation.
 * @returns {Uint8Array} Finished buffer
 */
Writer.prototype.finish = function finish() {
    var head = this.head.next, // skip noop
        buf  = this.constructor.alloc(this.len),
        pos  = 0;
    while (head) {
        head.fn(head.val, buf, pos);
        pos += head.len;
        head = head.next;
    }
    // this.head = this.tail = null;
    return buf;
};

Writer._configure = function(BufferWriter_) {
    BufferWriter = BufferWriter_;
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = Reader;

var util      = __webpack_require__(7);

var BufferReader; // cyclic

var LongBits  = util.LongBits,
    utf8      = util.utf8;

/* istanbul ignore next */
function indexOutOfRange(reader, writeLength) {
    return RangeError("index out of range: " + reader.pos + " + " + (writeLength || 1) + " > " + reader.len);
}

/**
 * Constructs a new reader instance using the specified buffer.
 * @classdesc Wire format reader using `Uint8Array` if available, otherwise `Array`.
 * @constructor
 * @param {Uint8Array} buffer Buffer to read from
 */
function Reader(buffer) {

    /**
     * Read buffer.
     * @type {Uint8Array}
     */
    this.buf = buffer;

    /**
     * Read buffer position.
     * @type {number}
     */
    this.pos = 0;

    /**
     * Read buffer length.
     * @type {number}
     */
    this.len = buffer.length;
}

var create_array = typeof Uint8Array !== "undefined"
    ? function create_typed_array(buffer) {
        if (buffer instanceof Uint8Array || Array.isArray(buffer))
            return new Reader(buffer);
        throw Error("illegal buffer");
    }
    /* istanbul ignore next */
    : function create_array(buffer) {
        if (Array.isArray(buffer))
            return new Reader(buffer);
        throw Error("illegal buffer");
    };

/**
 * Creates a new reader using the specified buffer.
 * @function
 * @param {Uint8Array|Buffer} buffer Buffer to read from
 * @returns {Reader|BufferReader} A {@link BufferReader} if `buffer` is a Buffer, otherwise a {@link Reader}
 * @throws {Error} If `buffer` is not a valid buffer
 */
Reader.create = util.Buffer
    ? function create_buffer_setup(buffer) {
        return (Reader.create = function create_buffer(buffer) {
            return util.Buffer.isBuffer(buffer)
                ? new BufferReader(buffer)
                /* istanbul ignore next */
                : create_array(buffer);
        })(buffer);
    }
    /* istanbul ignore next */
    : create_array;

Reader.prototype._slice = util.Array.prototype.subarray || /* istanbul ignore next */ util.Array.prototype.slice;

/**
 * Reads a varint as an unsigned 32 bit value.
 * @function
 * @returns {number} Value read
 */
Reader.prototype.uint32 = (function read_uint32_setup() {
    var value = 4294967295; // optimizer type-hint, tends to deopt otherwise (?!)
    return function read_uint32() {
        value = (         this.buf[this.pos] & 127       ) >>> 0; if (this.buf[this.pos++] < 128) return value;
        value = (value | (this.buf[this.pos] & 127) <<  7) >>> 0; if (this.buf[this.pos++] < 128) return value;
        value = (value | (this.buf[this.pos] & 127) << 14) >>> 0; if (this.buf[this.pos++] < 128) return value;
        value = (value | (this.buf[this.pos] & 127) << 21) >>> 0; if (this.buf[this.pos++] < 128) return value;
        value = (value | (this.buf[this.pos] &  15) << 28) >>> 0; if (this.buf[this.pos++] < 128) return value;

        /* istanbul ignore if */
        if ((this.pos += 5) > this.len) {
            this.pos = this.len;
            throw indexOutOfRange(this, 10);
        }
        return value;
    };
})();

/**
 * Reads a varint as a signed 32 bit value.
 * @returns {number} Value read
 */
Reader.prototype.int32 = function read_int32() {
    return this.uint32() | 0;
};

/**
 * Reads a zig-zag encoded varint as a signed 32 bit value.
 * @returns {number} Value read
 */
Reader.prototype.sint32 = function read_sint32() {
    var value = this.uint32();
    return value >>> 1 ^ -(value & 1) | 0;
};

/* eslint-disable no-invalid-this */

function readLongVarint() {
    // tends to deopt with local vars for octet etc.
    var bits = new LongBits(0, 0);
    var i = 0;
    if (this.len - this.pos > 4) { // fast route (lo)
        for (; i < 4; ++i) {
            // 1st..4th
            bits.lo = (bits.lo | (this.buf[this.pos] & 127) << i * 7) >>> 0;
            if (this.buf[this.pos++] < 128)
                return bits;
        }
        // 5th
        bits.lo = (bits.lo | (this.buf[this.pos] & 127) << 28) >>> 0;
        bits.hi = (bits.hi | (this.buf[this.pos] & 127) >>  4) >>> 0;
        if (this.buf[this.pos++] < 128)
            return bits;
        i = 0;
    } else {
        for (; i < 3; ++i) {
            /* istanbul ignore if */
            if (this.pos >= this.len)
                throw indexOutOfRange(this);
            // 1st..3th
            bits.lo = (bits.lo | (this.buf[this.pos] & 127) << i * 7) >>> 0;
            if (this.buf[this.pos++] < 128)
                return bits;
        }
        // 4th
        bits.lo = (bits.lo | (this.buf[this.pos++] & 127) << i * 7) >>> 0;
        return bits;
    }
    if (this.len - this.pos > 4) { // fast route (hi)
        for (; i < 5; ++i) {
            // 6th..10th
            bits.hi = (bits.hi | (this.buf[this.pos] & 127) << i * 7 + 3) >>> 0;
            if (this.buf[this.pos++] < 128)
                return bits;
        }
    } else {
        for (; i < 5; ++i) {
            /* istanbul ignore if */
            if (this.pos >= this.len)
                throw indexOutOfRange(this);
            // 6th..10th
            bits.hi = (bits.hi | (this.buf[this.pos] & 127) << i * 7 + 3) >>> 0;
            if (this.buf[this.pos++] < 128)
                return bits;
        }
    }
    /* istanbul ignore next */
    throw Error("invalid varint encoding");
}

/* eslint-enable no-invalid-this */

/**
 * Reads a varint as a signed 64 bit value.
 * @name Reader#int64
 * @function
 * @returns {Long} Value read
 */

/**
 * Reads a varint as an unsigned 64 bit value.
 * @name Reader#uint64
 * @function
 * @returns {Long} Value read
 */

/**
 * Reads a zig-zag encoded varint as a signed 64 bit value.
 * @name Reader#sint64
 * @function
 * @returns {Long} Value read
 */

/**
 * Reads a varint as a boolean.
 * @returns {boolean} Value read
 */
Reader.prototype.bool = function read_bool() {
    return this.uint32() !== 0;
};

function readFixed32_end(buf, end) { // note that this uses `end`, not `pos`
    return (buf[end - 4]
          | buf[end - 3] << 8
          | buf[end - 2] << 16
          | buf[end - 1] << 24) >>> 0;
}

/**
 * Reads fixed 32 bits as an unsigned 32 bit integer.
 * @returns {number} Value read
 */
Reader.prototype.fixed32 = function read_fixed32() {

    /* istanbul ignore if */
    if (this.pos + 4 > this.len)
        throw indexOutOfRange(this, 4);

    return readFixed32_end(this.buf, this.pos += 4);
};

/**
 * Reads fixed 32 bits as a signed 32 bit integer.
 * @returns {number} Value read
 */
Reader.prototype.sfixed32 = function read_sfixed32() {

    /* istanbul ignore if */
    if (this.pos + 4 > this.len)
        throw indexOutOfRange(this, 4);

    return readFixed32_end(this.buf, this.pos += 4) | 0;
};

/* eslint-disable no-invalid-this */

function readFixed64(/* this: Reader */) {

    /* istanbul ignore if */
    if (this.pos + 8 > this.len)
        throw indexOutOfRange(this, 8);

    return new LongBits(readFixed32_end(this.buf, this.pos += 4), readFixed32_end(this.buf, this.pos += 4));
}

/* eslint-enable no-invalid-this */

/**
 * Reads fixed 64 bits.
 * @name Reader#fixed64
 * @function
 * @returns {Long} Value read
 */

/**
 * Reads zig-zag encoded fixed 64 bits.
 * @name Reader#sfixed64
 * @function
 * @returns {Long} Value read
 */

/**
 * Reads a float (32 bit) as a number.
 * @function
 * @returns {number} Value read
 */
Reader.prototype.float = function read_float() {

    /* istanbul ignore if */
    if (this.pos + 4 > this.len)
        throw indexOutOfRange(this, 4);

    var value = util.float.readFloatLE(this.buf, this.pos);
    this.pos += 4;
    return value;
};

/**
 * Reads a double (64 bit float) as a number.
 * @function
 * @returns {number} Value read
 */
Reader.prototype.double = function read_double() {

    /* istanbul ignore if */
    if (this.pos + 8 > this.len)
        throw indexOutOfRange(this, 4);

    var value = util.float.readDoubleLE(this.buf, this.pos);
    this.pos += 8;
    return value;
};

/**
 * Reads a sequence of bytes preceeded by its length as a varint.
 * @returns {Uint8Array} Value read
 */
Reader.prototype.bytes = function read_bytes() {
    var length = this.uint32(),
        start  = this.pos,
        end    = this.pos + length;

    /* istanbul ignore if */
    if (end > this.len)
        throw indexOutOfRange(this, length);

    this.pos += length;
    if (Array.isArray(this.buf)) // plain array
        return this.buf.slice(start, end);
    return start === end // fix for IE 10/Win8 and others' subarray returning array of size 1
        ? new this.buf.constructor(0)
        : this._slice.call(this.buf, start, end);
};

/**
 * Reads a string preceeded by its byte length as a varint.
 * @returns {string} Value read
 */
Reader.prototype.string = function read_string() {
    var bytes = this.bytes();
    return utf8.read(bytes, 0, bytes.length);
};

/**
 * Skips the specified number of bytes if specified, otherwise skips a varint.
 * @param {number} [length] Length if known, otherwise a varint is assumed
 * @returns {Reader} `this`
 */
Reader.prototype.skip = function skip(length) {
    if (typeof length === "number") {
        /* istanbul ignore if */
        if (this.pos + length > this.len)
            throw indexOutOfRange(this, length);
        this.pos += length;
    } else {
        do {
            /* istanbul ignore if */
            if (this.pos >= this.len)
                throw indexOutOfRange(this);
        } while (this.buf[this.pos++] & 128);
    }
    return this;
};

/**
 * Skips the next element of the specified wire type.
 * @param {number} wireType Wire type received
 * @returns {Reader} `this`
 */
Reader.prototype.skipType = function(wireType) {
    switch (wireType) {
        case 0:
            this.skip();
            break;
        case 1:
            this.skip(8);
            break;
        case 2:
            this.skip(this.uint32());
            break;
        case 3:
            while ((wireType = this.uint32() & 7) !== 4) {
                this.skipType(wireType);
            }
            break;
        case 5:
            this.skip(4);
            break;

        /* istanbul ignore next */
        default:
            throw Error("invalid wire type " + wireType + " at offset " + this.pos);
    }
    return this;
};

Reader._configure = function(BufferReader_) {
    BufferReader = BufferReader_;

    var fn = util.Long ? "toLong" : /* istanbul ignore next */ "toNumber";
    util.merge(Reader.prototype, {

        int64: function read_int64() {
            return readLongVarint.call(this)[fn](false);
        },

        uint64: function read_uint64() {
            return readLongVarint.call(this)[fn](true);
        },

        sint64: function read_sint64() {
            return readLongVarint.call(this).zzDecode()[fn](false);
        },

        fixed64: function read_fixed64() {
            return readFixed64.call(this)[fn](true);
        },

        sfixed64: function read_sfixed64() {
            return readFixed64.call(this)[fn](false);
        }

    });
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/


var $protobuf = __webpack_require__(19);

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.tensorflow = (function() {

    /**
     * Namespace tensorflow.
     * @exports tensorflow
     * @namespace
     */
    var tensorflow = {};

    tensorflow.magenta = (function() {

        /**
         * Namespace magenta.
         * @memberof tensorflow
         * @namespace
         */
        var magenta = {};

        magenta.NoteSequence = (function() {

            /**
             * Properties of a NoteSequence.
             * @memberof tensorflow.magenta
             * @interface INoteSequence
             * @property {string|null} [id] NoteSequence id
             * @property {string|null} [filename] NoteSequence filename
             * @property {number|null} [referenceNumber] NoteSequence referenceNumber
             * @property {string|null} [collectionName] NoteSequence collectionName
             * @property {number|null} [ticksPerQuarter] NoteSequence ticksPerQuarter
             * @property {Array.<tensorflow.magenta.NoteSequence.ITimeSignature>|null} [timeSignatures] NoteSequence timeSignatures
             * @property {Array.<tensorflow.magenta.NoteSequence.IKeySignature>|null} [keySignatures] NoteSequence keySignatures
             * @property {Array.<tensorflow.magenta.NoteSequence.ITempo>|null} [tempos] NoteSequence tempos
             * @property {Array.<tensorflow.magenta.NoteSequence.INote>|null} [notes] NoteSequence notes
             * @property {number|null} [totalTime] NoteSequence totalTime
             * @property {number|null} [totalQuantizedSteps] NoteSequence totalQuantizedSteps
             * @property {Array.<tensorflow.magenta.NoteSequence.IPitchBend>|null} [pitchBends] NoteSequence pitchBends
             * @property {Array.<tensorflow.magenta.NoteSequence.IControlChange>|null} [controlChanges] NoteSequence controlChanges
             * @property {Array.<tensorflow.magenta.NoteSequence.IPartInfo>|null} [partInfos] NoteSequence partInfos
             * @property {tensorflow.magenta.NoteSequence.ISourceInfo|null} [sourceInfo] NoteSequence sourceInfo
             * @property {Array.<tensorflow.magenta.NoteSequence.ITextAnnotation>|null} [textAnnotations] NoteSequence textAnnotations
             * @property {Array.<tensorflow.magenta.NoteSequence.ISectionAnnotation>|null} [sectionAnnotations] NoteSequence sectionAnnotations
             * @property {Array.<tensorflow.magenta.NoteSequence.ISectionGroup>|null} [sectionGroups] NoteSequence sectionGroups
             * @property {tensorflow.magenta.NoteSequence.IQuantizationInfo|null} [quantizationInfo] NoteSequence quantizationInfo
             * @property {tensorflow.magenta.NoteSequence.ISubsequenceInfo|null} [subsequenceInfo] NoteSequence subsequenceInfo
             * @property {tensorflow.magenta.ISequenceMetadata|null} [sequenceMetadata] NoteSequence sequenceMetadata
             */

            /**
             * Constructs a new NoteSequence.
             * @memberof tensorflow.magenta
             * @classdesc Represents a NoteSequence.
             * @implements INoteSequence
             * @constructor
             * @param {tensorflow.magenta.INoteSequence=} [properties] Properties to set
             */
            function NoteSequence(properties) {
                this.timeSignatures = [];
                this.keySignatures = [];
                this.tempos = [];
                this.notes = [];
                this.pitchBends = [];
                this.controlChanges = [];
                this.partInfos = [];
                this.textAnnotations = [];
                this.sectionAnnotations = [];
                this.sectionGroups = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * NoteSequence id.
             * @member {string} id
             * @memberof tensorflow.magenta.NoteSequence
             * @instance
             */
            NoteSequence.prototype.id = "";

            /**
             * NoteSequence filename.
             * @member {string} filename
             * @memberof tensorflow.magenta.NoteSequence
             * @instance
             */
            NoteSequence.prototype.filename = "";

            /**
             * NoteSequence referenceNumber.
             * @member {number} referenceNumber
             * @memberof tensorflow.magenta.NoteSequence
             * @instance
             */
            NoteSequence.prototype.referenceNumber = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * NoteSequence collectionName.
             * @member {string} collectionName
             * @memberof tensorflow.magenta.NoteSequence
             * @instance
             */
            NoteSequence.prototype.collectionName = "";

            /**
             * NoteSequence ticksPerQuarter.
             * @member {number} ticksPerQuarter
             * @memberof tensorflow.magenta.NoteSequence
             * @instance
             */
            NoteSequence.prototype.ticksPerQuarter = 0;

            /**
             * NoteSequence timeSignatures.
             * @member {Array.<tensorflow.magenta.NoteSequence.ITimeSignature>} timeSignatures
             * @memberof tensorflow.magenta.NoteSequence
             * @instance
             */
            NoteSequence.prototype.timeSignatures = $util.emptyArray;

            /**
             * NoteSequence keySignatures.
             * @member {Array.<tensorflow.magenta.NoteSequence.IKeySignature>} keySignatures
             * @memberof tensorflow.magenta.NoteSequence
             * @instance
             */
            NoteSequence.prototype.keySignatures = $util.emptyArray;

            /**
             * NoteSequence tempos.
             * @member {Array.<tensorflow.magenta.NoteSequence.ITempo>} tempos
             * @memberof tensorflow.magenta.NoteSequence
             * @instance
             */
            NoteSequence.prototype.tempos = $util.emptyArray;

            /**
             * NoteSequence notes.
             * @member {Array.<tensorflow.magenta.NoteSequence.INote>} notes
             * @memberof tensorflow.magenta.NoteSequence
             * @instance
             */
            NoteSequence.prototype.notes = $util.emptyArray;

            /**
             * NoteSequence totalTime.
             * @member {number} totalTime
             * @memberof tensorflow.magenta.NoteSequence
             * @instance
             */
            NoteSequence.prototype.totalTime = 0;

            /**
             * NoteSequence totalQuantizedSteps.
             * @member {number} totalQuantizedSteps
             * @memberof tensorflow.magenta.NoteSequence
             * @instance
             */
            NoteSequence.prototype.totalQuantizedSteps = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * NoteSequence pitchBends.
             * @member {Array.<tensorflow.magenta.NoteSequence.IPitchBend>} pitchBends
             * @memberof tensorflow.magenta.NoteSequence
             * @instance
             */
            NoteSequence.prototype.pitchBends = $util.emptyArray;

            /**
             * NoteSequence controlChanges.
             * @member {Array.<tensorflow.magenta.NoteSequence.IControlChange>} controlChanges
             * @memberof tensorflow.magenta.NoteSequence
             * @instance
             */
            NoteSequence.prototype.controlChanges = $util.emptyArray;

            /**
             * NoteSequence partInfos.
             * @member {Array.<tensorflow.magenta.NoteSequence.IPartInfo>} partInfos
             * @memberof tensorflow.magenta.NoteSequence
             * @instance
             */
            NoteSequence.prototype.partInfos = $util.emptyArray;

            /**
             * NoteSequence sourceInfo.
             * @member {tensorflow.magenta.NoteSequence.ISourceInfo|null|undefined} sourceInfo
             * @memberof tensorflow.magenta.NoteSequence
             * @instance
             */
            NoteSequence.prototype.sourceInfo = null;

            /**
             * NoteSequence textAnnotations.
             * @member {Array.<tensorflow.magenta.NoteSequence.ITextAnnotation>} textAnnotations
             * @memberof tensorflow.magenta.NoteSequence
             * @instance
             */
            NoteSequence.prototype.textAnnotations = $util.emptyArray;

            /**
             * NoteSequence sectionAnnotations.
             * @member {Array.<tensorflow.magenta.NoteSequence.ISectionAnnotation>} sectionAnnotations
             * @memberof tensorflow.magenta.NoteSequence
             * @instance
             */
            NoteSequence.prototype.sectionAnnotations = $util.emptyArray;

            /**
             * NoteSequence sectionGroups.
             * @member {Array.<tensorflow.magenta.NoteSequence.ISectionGroup>} sectionGroups
             * @memberof tensorflow.magenta.NoteSequence
             * @instance
             */
            NoteSequence.prototype.sectionGroups = $util.emptyArray;

            /**
             * NoteSequence quantizationInfo.
             * @member {tensorflow.magenta.NoteSequence.IQuantizationInfo|null|undefined} quantizationInfo
             * @memberof tensorflow.magenta.NoteSequence
             * @instance
             */
            NoteSequence.prototype.quantizationInfo = null;

            /**
             * NoteSequence subsequenceInfo.
             * @member {tensorflow.magenta.NoteSequence.ISubsequenceInfo|null|undefined} subsequenceInfo
             * @memberof tensorflow.magenta.NoteSequence
             * @instance
             */
            NoteSequence.prototype.subsequenceInfo = null;

            /**
             * NoteSequence sequenceMetadata.
             * @member {tensorflow.magenta.ISequenceMetadata|null|undefined} sequenceMetadata
             * @memberof tensorflow.magenta.NoteSequence
             * @instance
             */
            NoteSequence.prototype.sequenceMetadata = null;

            /**
             * Creates a new NoteSequence instance using the specified properties.
             * @function create
             * @memberof tensorflow.magenta.NoteSequence
             * @static
             * @param {tensorflow.magenta.INoteSequence=} [properties] Properties to set
             * @returns {tensorflow.magenta.NoteSequence} NoteSequence instance
             */
            NoteSequence.create = function create(properties) {
                return new NoteSequence(properties);
            };

            /**
             * Encodes the specified NoteSequence message. Does not implicitly {@link tensorflow.magenta.NoteSequence.verify|verify} messages.
             * @function encode
             * @memberof tensorflow.magenta.NoteSequence
             * @static
             * @param {tensorflow.magenta.INoteSequence} message NoteSequence message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            NoteSequence.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && message.hasOwnProperty("id"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                if (message.filename != null && message.hasOwnProperty("filename"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.filename);
                if (message.collectionName != null && message.hasOwnProperty("collectionName"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.collectionName);
                if (message.ticksPerQuarter != null && message.hasOwnProperty("ticksPerQuarter"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.ticksPerQuarter);
                if (message.timeSignatures != null && message.timeSignatures.length)
                    for (var i = 0; i < message.timeSignatures.length; ++i)
                        $root.tensorflow.magenta.NoteSequence.TimeSignature.encode(message.timeSignatures[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                if (message.keySignatures != null && message.keySignatures.length)
                    for (var i = 0; i < message.keySignatures.length; ++i)
                        $root.tensorflow.magenta.NoteSequence.KeySignature.encode(message.keySignatures[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                if (message.tempos != null && message.tempos.length)
                    for (var i = 0; i < message.tempos.length; ++i)
                        $root.tensorflow.magenta.NoteSequence.Tempo.encode(message.tempos[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                if (message.notes != null && message.notes.length)
                    for (var i = 0; i < message.notes.length; ++i)
                        $root.tensorflow.magenta.NoteSequence.Note.encode(message.notes[i], writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                if (message.totalTime != null && message.hasOwnProperty("totalTime"))
                    writer.uint32(/* id 9, wireType 1 =*/73).double(message.totalTime);
                if (message.pitchBends != null && message.pitchBends.length)
                    for (var i = 0; i < message.pitchBends.length; ++i)
                        $root.tensorflow.magenta.NoteSequence.PitchBend.encode(message.pitchBends[i], writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
                if (message.controlChanges != null && message.controlChanges.length)
                    for (var i = 0; i < message.controlChanges.length; ++i)
                        $root.tensorflow.magenta.NoteSequence.ControlChange.encode(message.controlChanges[i], writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
                if (message.partInfos != null && message.partInfos.length)
                    for (var i = 0; i < message.partInfos.length; ++i)
                        $root.tensorflow.magenta.NoteSequence.PartInfo.encode(message.partInfos[i], writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
                if (message.sourceInfo != null && message.hasOwnProperty("sourceInfo"))
                    $root.tensorflow.magenta.NoteSequence.SourceInfo.encode(message.sourceInfo, writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
                if (message.textAnnotations != null && message.textAnnotations.length)
                    for (var i = 0; i < message.textAnnotations.length; ++i)
                        $root.tensorflow.magenta.NoteSequence.TextAnnotation.encode(message.textAnnotations[i], writer.uint32(/* id 14, wireType 2 =*/114).fork()).ldelim();
                if (message.quantizationInfo != null && message.hasOwnProperty("quantizationInfo"))
                    $root.tensorflow.magenta.NoteSequence.QuantizationInfo.encode(message.quantizationInfo, writer.uint32(/* id 15, wireType 2 =*/122).fork()).ldelim();
                if (message.totalQuantizedSteps != null && message.hasOwnProperty("totalQuantizedSteps"))
                    writer.uint32(/* id 16, wireType 0 =*/128).int64(message.totalQuantizedSteps);
                if (message.subsequenceInfo != null && message.hasOwnProperty("subsequenceInfo"))
                    $root.tensorflow.magenta.NoteSequence.SubsequenceInfo.encode(message.subsequenceInfo, writer.uint32(/* id 17, wireType 2 =*/138).fork()).ldelim();
                if (message.referenceNumber != null && message.hasOwnProperty("referenceNumber"))
                    writer.uint32(/* id 18, wireType 0 =*/144).int64(message.referenceNumber);
                if (message.sequenceMetadata != null && message.hasOwnProperty("sequenceMetadata"))
                    $root.tensorflow.magenta.SequenceMetadata.encode(message.sequenceMetadata, writer.uint32(/* id 19, wireType 2 =*/154).fork()).ldelim();
                if (message.sectionAnnotations != null && message.sectionAnnotations.length)
                    for (var i = 0; i < message.sectionAnnotations.length; ++i)
                        $root.tensorflow.magenta.NoteSequence.SectionAnnotation.encode(message.sectionAnnotations[i], writer.uint32(/* id 20, wireType 2 =*/162).fork()).ldelim();
                if (message.sectionGroups != null && message.sectionGroups.length)
                    for (var i = 0; i < message.sectionGroups.length; ++i)
                        $root.tensorflow.magenta.NoteSequence.SectionGroup.encode(message.sectionGroups[i], writer.uint32(/* id 21, wireType 2 =*/170).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified NoteSequence message, length delimited. Does not implicitly {@link tensorflow.magenta.NoteSequence.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tensorflow.magenta.NoteSequence
             * @static
             * @param {tensorflow.magenta.INoteSequence} message NoteSequence message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            NoteSequence.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a NoteSequence message from the specified reader or buffer.
             * @function decode
             * @memberof tensorflow.magenta.NoteSequence
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tensorflow.magenta.NoteSequence} NoteSequence
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            NoteSequence.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tensorflow.magenta.NoteSequence();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.string();
                        break;
                    case 2:
                        message.filename = reader.string();
                        break;
                    case 18:
                        message.referenceNumber = $util.Long?reader.int64().toNumber():reader.int64();
                        break;
                    case 3:
                        message.collectionName = reader.string();
                        break;
                    case 4:
                        message.ticksPerQuarter = reader.int32();
                        break;
                    case 5:
                        if (!(message.timeSignatures && message.timeSignatures.length))
                            message.timeSignatures = [];
                        message.timeSignatures.push($root.tensorflow.magenta.NoteSequence.TimeSignature.decode(reader, reader.uint32()));
                        break;
                    case 6:
                        if (!(message.keySignatures && message.keySignatures.length))
                            message.keySignatures = [];
                        message.keySignatures.push($root.tensorflow.magenta.NoteSequence.KeySignature.decode(reader, reader.uint32()));
                        break;
                    case 7:
                        if (!(message.tempos && message.tempos.length))
                            message.tempos = [];
                        message.tempos.push($root.tensorflow.magenta.NoteSequence.Tempo.decode(reader, reader.uint32()));
                        break;
                    case 8:
                        if (!(message.notes && message.notes.length))
                            message.notes = [];
                        message.notes.push($root.tensorflow.magenta.NoteSequence.Note.decode(reader, reader.uint32()));
                        break;
                    case 9:
                        message.totalTime = reader.double();
                        break;
                    case 16:
                        message.totalQuantizedSteps = $util.Long?reader.int64().toNumber():reader.int64();
                        break;
                    case 10:
                        if (!(message.pitchBends && message.pitchBends.length))
                            message.pitchBends = [];
                        message.pitchBends.push($root.tensorflow.magenta.NoteSequence.PitchBend.decode(reader, reader.uint32()));
                        break;
                    case 11:
                        if (!(message.controlChanges && message.controlChanges.length))
                            message.controlChanges = [];
                        message.controlChanges.push($root.tensorflow.magenta.NoteSequence.ControlChange.decode(reader, reader.uint32()));
                        break;
                    case 12:
                        if (!(message.partInfos && message.partInfos.length))
                            message.partInfos = [];
                        message.partInfos.push($root.tensorflow.magenta.NoteSequence.PartInfo.decode(reader, reader.uint32()));
                        break;
                    case 13:
                        message.sourceInfo = $root.tensorflow.magenta.NoteSequence.SourceInfo.decode(reader, reader.uint32());
                        break;
                    case 14:
                        if (!(message.textAnnotations && message.textAnnotations.length))
                            message.textAnnotations = [];
                        message.textAnnotations.push($root.tensorflow.magenta.NoteSequence.TextAnnotation.decode(reader, reader.uint32()));
                        break;
                    case 20:
                        if (!(message.sectionAnnotations && message.sectionAnnotations.length))
                            message.sectionAnnotations = [];
                        message.sectionAnnotations.push($root.tensorflow.magenta.NoteSequence.SectionAnnotation.decode(reader, reader.uint32()));
                        break;
                    case 21:
                        if (!(message.sectionGroups && message.sectionGroups.length))
                            message.sectionGroups = [];
                        message.sectionGroups.push($root.tensorflow.magenta.NoteSequence.SectionGroup.decode(reader, reader.uint32()));
                        break;
                    case 15:
                        message.quantizationInfo = $root.tensorflow.magenta.NoteSequence.QuantizationInfo.decode(reader, reader.uint32());
                        break;
                    case 17:
                        message.subsequenceInfo = $root.tensorflow.magenta.NoteSequence.SubsequenceInfo.decode(reader, reader.uint32());
                        break;
                    case 19:
                        message.sequenceMetadata = $root.tensorflow.magenta.SequenceMetadata.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a NoteSequence message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tensorflow.magenta.NoteSequence
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tensorflow.magenta.NoteSequence} NoteSequence
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            NoteSequence.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a NoteSequence message.
             * @function verify
             * @memberof tensorflow.magenta.NoteSequence
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            NoteSequence.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isString(message.id))
                        return "id: string expected";
                if (message.filename != null && message.hasOwnProperty("filename"))
                    if (!$util.isString(message.filename))
                        return "filename: string expected";
                if (message.referenceNumber != null && message.hasOwnProperty("referenceNumber"))
                    if (!$util.isInteger(message.referenceNumber) && !(message.referenceNumber && $util.isInteger(message.referenceNumber.low) && $util.isInteger(message.referenceNumber.high)))
                        return "referenceNumber: integer|Long expected";
                if (message.collectionName != null && message.hasOwnProperty("collectionName"))
                    if (!$util.isString(message.collectionName))
                        return "collectionName: string expected";
                if (message.ticksPerQuarter != null && message.hasOwnProperty("ticksPerQuarter"))
                    if (!$util.isInteger(message.ticksPerQuarter))
                        return "ticksPerQuarter: integer expected";
                if (message.timeSignatures != null && message.hasOwnProperty("timeSignatures")) {
                    if (!Array.isArray(message.timeSignatures))
                        return "timeSignatures: array expected";
                    for (var i = 0; i < message.timeSignatures.length; ++i) {
                        var error = $root.tensorflow.magenta.NoteSequence.TimeSignature.verify(message.timeSignatures[i]);
                        if (error)
                            return "timeSignatures." + error;
                    }
                }
                if (message.keySignatures != null && message.hasOwnProperty("keySignatures")) {
                    if (!Array.isArray(message.keySignatures))
                        return "keySignatures: array expected";
                    for (var i = 0; i < message.keySignatures.length; ++i) {
                        var error = $root.tensorflow.magenta.NoteSequence.KeySignature.verify(message.keySignatures[i]);
                        if (error)
                            return "keySignatures." + error;
                    }
                }
                if (message.tempos != null && message.hasOwnProperty("tempos")) {
                    if (!Array.isArray(message.tempos))
                        return "tempos: array expected";
                    for (var i = 0; i < message.tempos.length; ++i) {
                        var error = $root.tensorflow.magenta.NoteSequence.Tempo.verify(message.tempos[i]);
                        if (error)
                            return "tempos." + error;
                    }
                }
                if (message.notes != null && message.hasOwnProperty("notes")) {
                    if (!Array.isArray(message.notes))
                        return "notes: array expected";
                    for (var i = 0; i < message.notes.length; ++i) {
                        var error = $root.tensorflow.magenta.NoteSequence.Note.verify(message.notes[i]);
                        if (error)
                            return "notes." + error;
                    }
                }
                if (message.totalTime != null && message.hasOwnProperty("totalTime"))
                    if (typeof message.totalTime !== "number")
                        return "totalTime: number expected";
                if (message.totalQuantizedSteps != null && message.hasOwnProperty("totalQuantizedSteps"))
                    if (!$util.isInteger(message.totalQuantizedSteps) && !(message.totalQuantizedSteps && $util.isInteger(message.totalQuantizedSteps.low) && $util.isInteger(message.totalQuantizedSteps.high)))
                        return "totalQuantizedSteps: integer|Long expected";
                if (message.pitchBends != null && message.hasOwnProperty("pitchBends")) {
                    if (!Array.isArray(message.pitchBends))
                        return "pitchBends: array expected";
                    for (var i = 0; i < message.pitchBends.length; ++i) {
                        var error = $root.tensorflow.magenta.NoteSequence.PitchBend.verify(message.pitchBends[i]);
                        if (error)
                            return "pitchBends." + error;
                    }
                }
                if (message.controlChanges != null && message.hasOwnProperty("controlChanges")) {
                    if (!Array.isArray(message.controlChanges))
                        return "controlChanges: array expected";
                    for (var i = 0; i < message.controlChanges.length; ++i) {
                        var error = $root.tensorflow.magenta.NoteSequence.ControlChange.verify(message.controlChanges[i]);
                        if (error)
                            return "controlChanges." + error;
                    }
                }
                if (message.partInfos != null && message.hasOwnProperty("partInfos")) {
                    if (!Array.isArray(message.partInfos))
                        return "partInfos: array expected";
                    for (var i = 0; i < message.partInfos.length; ++i) {
                        var error = $root.tensorflow.magenta.NoteSequence.PartInfo.verify(message.partInfos[i]);
                        if (error)
                            return "partInfos." + error;
                    }
                }
                if (message.sourceInfo != null && message.hasOwnProperty("sourceInfo")) {
                    var error = $root.tensorflow.magenta.NoteSequence.SourceInfo.verify(message.sourceInfo);
                    if (error)
                        return "sourceInfo." + error;
                }
                if (message.textAnnotations != null && message.hasOwnProperty("textAnnotations")) {
                    if (!Array.isArray(message.textAnnotations))
                        return "textAnnotations: array expected";
                    for (var i = 0; i < message.textAnnotations.length; ++i) {
                        var error = $root.tensorflow.magenta.NoteSequence.TextAnnotation.verify(message.textAnnotations[i]);
                        if (error)
                            return "textAnnotations." + error;
                    }
                }
                if (message.sectionAnnotations != null && message.hasOwnProperty("sectionAnnotations")) {
                    if (!Array.isArray(message.sectionAnnotations))
                        return "sectionAnnotations: array expected";
                    for (var i = 0; i < message.sectionAnnotations.length; ++i) {
                        var error = $root.tensorflow.magenta.NoteSequence.SectionAnnotation.verify(message.sectionAnnotations[i]);
                        if (error)
                            return "sectionAnnotations." + error;
                    }
                }
                if (message.sectionGroups != null && message.hasOwnProperty("sectionGroups")) {
                    if (!Array.isArray(message.sectionGroups))
                        return "sectionGroups: array expected";
                    for (var i = 0; i < message.sectionGroups.length; ++i) {
                        var error = $root.tensorflow.magenta.NoteSequence.SectionGroup.verify(message.sectionGroups[i]);
                        if (error)
                            return "sectionGroups." + error;
                    }
                }
                if (message.quantizationInfo != null && message.hasOwnProperty("quantizationInfo")) {
                    var error = $root.tensorflow.magenta.NoteSequence.QuantizationInfo.verify(message.quantizationInfo);
                    if (error)
                        return "quantizationInfo." + error;
                }
                if (message.subsequenceInfo != null && message.hasOwnProperty("subsequenceInfo")) {
                    var error = $root.tensorflow.magenta.NoteSequence.SubsequenceInfo.verify(message.subsequenceInfo);
                    if (error)
                        return "subsequenceInfo." + error;
                }
                if (message.sequenceMetadata != null && message.hasOwnProperty("sequenceMetadata")) {
                    var error = $root.tensorflow.magenta.SequenceMetadata.verify(message.sequenceMetadata);
                    if (error)
                        return "sequenceMetadata." + error;
                }
                return null;
            };

            /**
             * Creates a NoteSequence message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tensorflow.magenta.NoteSequence
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tensorflow.magenta.NoteSequence} NoteSequence
             */
            NoteSequence.fromObject = function fromObject(object) {
                if (object instanceof $root.tensorflow.magenta.NoteSequence)
                    return object;
                var message = new $root.tensorflow.magenta.NoteSequence();
                if (object.id != null)
                    message.id = String(object.id);
                if (object.filename != null)
                    message.filename = String(object.filename);
                if (object.referenceNumber != null)
                    if ($util.Long)
                        (message.referenceNumber = $util.Long.fromValue(object.referenceNumber)).unsigned = false;
                    else if (typeof object.referenceNumber === "string")
                        message.referenceNumber = parseInt(object.referenceNumber, 10);
                    else if (typeof object.referenceNumber === "number")
                        message.referenceNumber = object.referenceNumber;
                    else if (typeof object.referenceNumber === "object")
                        message.referenceNumber = new $util.LongBits(object.referenceNumber.low >>> 0, object.referenceNumber.high >>> 0).toNumber();
                if (object.collectionName != null)
                    message.collectionName = String(object.collectionName);
                if (object.ticksPerQuarter != null)
                    message.ticksPerQuarter = object.ticksPerQuarter | 0;
                if (object.timeSignatures) {
                    if (!Array.isArray(object.timeSignatures))
                        throw TypeError(".tensorflow.magenta.NoteSequence.timeSignatures: array expected");
                    message.timeSignatures = [];
                    for (var i = 0; i < object.timeSignatures.length; ++i) {
                        if (typeof object.timeSignatures[i] !== "object")
                            throw TypeError(".tensorflow.magenta.NoteSequence.timeSignatures: object expected");
                        message.timeSignatures[i] = $root.tensorflow.magenta.NoteSequence.TimeSignature.fromObject(object.timeSignatures[i]);
                    }
                }
                if (object.keySignatures) {
                    if (!Array.isArray(object.keySignatures))
                        throw TypeError(".tensorflow.magenta.NoteSequence.keySignatures: array expected");
                    message.keySignatures = [];
                    for (var i = 0; i < object.keySignatures.length; ++i) {
                        if (typeof object.keySignatures[i] !== "object")
                            throw TypeError(".tensorflow.magenta.NoteSequence.keySignatures: object expected");
                        message.keySignatures[i] = $root.tensorflow.magenta.NoteSequence.KeySignature.fromObject(object.keySignatures[i]);
                    }
                }
                if (object.tempos) {
                    if (!Array.isArray(object.tempos))
                        throw TypeError(".tensorflow.magenta.NoteSequence.tempos: array expected");
                    message.tempos = [];
                    for (var i = 0; i < object.tempos.length; ++i) {
                        if (typeof object.tempos[i] !== "object")
                            throw TypeError(".tensorflow.magenta.NoteSequence.tempos: object expected");
                        message.tempos[i] = $root.tensorflow.magenta.NoteSequence.Tempo.fromObject(object.tempos[i]);
                    }
                }
                if (object.notes) {
                    if (!Array.isArray(object.notes))
                        throw TypeError(".tensorflow.magenta.NoteSequence.notes: array expected");
                    message.notes = [];
                    for (var i = 0; i < object.notes.length; ++i) {
                        if (typeof object.notes[i] !== "object")
                            throw TypeError(".tensorflow.magenta.NoteSequence.notes: object expected");
                        message.notes[i] = $root.tensorflow.magenta.NoteSequence.Note.fromObject(object.notes[i]);
                    }
                }
                if (object.totalTime != null)
                    message.totalTime = Number(object.totalTime);
                if (object.totalQuantizedSteps != null)
                    if ($util.Long)
                        (message.totalQuantizedSteps = $util.Long.fromValue(object.totalQuantizedSteps)).unsigned = false;
                    else if (typeof object.totalQuantizedSteps === "string")
                        message.totalQuantizedSteps = parseInt(object.totalQuantizedSteps, 10);
                    else if (typeof object.totalQuantizedSteps === "number")
                        message.totalQuantizedSteps = object.totalQuantizedSteps;
                    else if (typeof object.totalQuantizedSteps === "object")
                        message.totalQuantizedSteps = new $util.LongBits(object.totalQuantizedSteps.low >>> 0, object.totalQuantizedSteps.high >>> 0).toNumber();
                if (object.pitchBends) {
                    if (!Array.isArray(object.pitchBends))
                        throw TypeError(".tensorflow.magenta.NoteSequence.pitchBends: array expected");
                    message.pitchBends = [];
                    for (var i = 0; i < object.pitchBends.length; ++i) {
                        if (typeof object.pitchBends[i] !== "object")
                            throw TypeError(".tensorflow.magenta.NoteSequence.pitchBends: object expected");
                        message.pitchBends[i] = $root.tensorflow.magenta.NoteSequence.PitchBend.fromObject(object.pitchBends[i]);
                    }
                }
                if (object.controlChanges) {
                    if (!Array.isArray(object.controlChanges))
                        throw TypeError(".tensorflow.magenta.NoteSequence.controlChanges: array expected");
                    message.controlChanges = [];
                    for (var i = 0; i < object.controlChanges.length; ++i) {
                        if (typeof object.controlChanges[i] !== "object")
                            throw TypeError(".tensorflow.magenta.NoteSequence.controlChanges: object expected");
                        message.controlChanges[i] = $root.tensorflow.magenta.NoteSequence.ControlChange.fromObject(object.controlChanges[i]);
                    }
                }
                if (object.partInfos) {
                    if (!Array.isArray(object.partInfos))
                        throw TypeError(".tensorflow.magenta.NoteSequence.partInfos: array expected");
                    message.partInfos = [];
                    for (var i = 0; i < object.partInfos.length; ++i) {
                        if (typeof object.partInfos[i] !== "object")
                            throw TypeError(".tensorflow.magenta.NoteSequence.partInfos: object expected");
                        message.partInfos[i] = $root.tensorflow.magenta.NoteSequence.PartInfo.fromObject(object.partInfos[i]);
                    }
                }
                if (object.sourceInfo != null) {
                    if (typeof object.sourceInfo !== "object")
                        throw TypeError(".tensorflow.magenta.NoteSequence.sourceInfo: object expected");
                    message.sourceInfo = $root.tensorflow.magenta.NoteSequence.SourceInfo.fromObject(object.sourceInfo);
                }
                if (object.textAnnotations) {
                    if (!Array.isArray(object.textAnnotations))
                        throw TypeError(".tensorflow.magenta.NoteSequence.textAnnotations: array expected");
                    message.textAnnotations = [];
                    for (var i = 0; i < object.textAnnotations.length; ++i) {
                        if (typeof object.textAnnotations[i] !== "object")
                            throw TypeError(".tensorflow.magenta.NoteSequence.textAnnotations: object expected");
                        message.textAnnotations[i] = $root.tensorflow.magenta.NoteSequence.TextAnnotation.fromObject(object.textAnnotations[i]);
                    }
                }
                if (object.sectionAnnotations) {
                    if (!Array.isArray(object.sectionAnnotations))
                        throw TypeError(".tensorflow.magenta.NoteSequence.sectionAnnotations: array expected");
                    message.sectionAnnotations = [];
                    for (var i = 0; i < object.sectionAnnotations.length; ++i) {
                        if (typeof object.sectionAnnotations[i] !== "object")
                            throw TypeError(".tensorflow.magenta.NoteSequence.sectionAnnotations: object expected");
                        message.sectionAnnotations[i] = $root.tensorflow.magenta.NoteSequence.SectionAnnotation.fromObject(object.sectionAnnotations[i]);
                    }
                }
                if (object.sectionGroups) {
                    if (!Array.isArray(object.sectionGroups))
                        throw TypeError(".tensorflow.magenta.NoteSequence.sectionGroups: array expected");
                    message.sectionGroups = [];
                    for (var i = 0; i < object.sectionGroups.length; ++i) {
                        if (typeof object.sectionGroups[i] !== "object")
                            throw TypeError(".tensorflow.magenta.NoteSequence.sectionGroups: object expected");
                        message.sectionGroups[i] = $root.tensorflow.magenta.NoteSequence.SectionGroup.fromObject(object.sectionGroups[i]);
                    }
                }
                if (object.quantizationInfo != null) {
                    if (typeof object.quantizationInfo !== "object")
                        throw TypeError(".tensorflow.magenta.NoteSequence.quantizationInfo: object expected");
                    message.quantizationInfo = $root.tensorflow.magenta.NoteSequence.QuantizationInfo.fromObject(object.quantizationInfo);
                }
                if (object.subsequenceInfo != null) {
                    if (typeof object.subsequenceInfo !== "object")
                        throw TypeError(".tensorflow.magenta.NoteSequence.subsequenceInfo: object expected");
                    message.subsequenceInfo = $root.tensorflow.magenta.NoteSequence.SubsequenceInfo.fromObject(object.subsequenceInfo);
                }
                if (object.sequenceMetadata != null) {
                    if (typeof object.sequenceMetadata !== "object")
                        throw TypeError(".tensorflow.magenta.NoteSequence.sequenceMetadata: object expected");
                    message.sequenceMetadata = $root.tensorflow.magenta.SequenceMetadata.fromObject(object.sequenceMetadata);
                }
                return message;
            };

            /**
             * Creates a plain object from a NoteSequence message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tensorflow.magenta.NoteSequence
             * @static
             * @param {tensorflow.magenta.NoteSequence} message NoteSequence
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            NoteSequence.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults) {
                    object.timeSignatures = [];
                    object.keySignatures = [];
                    object.tempos = [];
                    object.notes = [];
                    object.pitchBends = [];
                    object.controlChanges = [];
                    object.partInfos = [];
                    object.textAnnotations = [];
                    object.sectionAnnotations = [];
                    object.sectionGroups = [];
                }
                if (options.defaults) {
                    object.id = "";
                    object.filename = "";
                    object.collectionName = "";
                    object.ticksPerQuarter = 0;
                    object.totalTime = 0;
                    object.sourceInfo = null;
                    object.quantizationInfo = null;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.totalQuantizedSteps = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.totalQuantizedSteps = options.longs === String ? "0" : 0;
                    object.subsequenceInfo = null;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.referenceNumber = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.referenceNumber = options.longs === String ? "0" : 0;
                    object.sequenceMetadata = null;
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.filename != null && message.hasOwnProperty("filename"))
                    object.filename = message.filename;
                if (message.collectionName != null && message.hasOwnProperty("collectionName"))
                    object.collectionName = message.collectionName;
                if (message.ticksPerQuarter != null && message.hasOwnProperty("ticksPerQuarter"))
                    object.ticksPerQuarter = message.ticksPerQuarter;
                if (message.timeSignatures && message.timeSignatures.length) {
                    object.timeSignatures = [];
                    for (var j = 0; j < message.timeSignatures.length; ++j)
                        object.timeSignatures[j] = $root.tensorflow.magenta.NoteSequence.TimeSignature.toObject(message.timeSignatures[j], options);
                }
                if (message.keySignatures && message.keySignatures.length) {
                    object.keySignatures = [];
                    for (var j = 0; j < message.keySignatures.length; ++j)
                        object.keySignatures[j] = $root.tensorflow.magenta.NoteSequence.KeySignature.toObject(message.keySignatures[j], options);
                }
                if (message.tempos && message.tempos.length) {
                    object.tempos = [];
                    for (var j = 0; j < message.tempos.length; ++j)
                        object.tempos[j] = $root.tensorflow.magenta.NoteSequence.Tempo.toObject(message.tempos[j], options);
                }
                if (message.notes && message.notes.length) {
                    object.notes = [];
                    for (var j = 0; j < message.notes.length; ++j)
                        object.notes[j] = $root.tensorflow.magenta.NoteSequence.Note.toObject(message.notes[j], options);
                }
                if (message.totalTime != null && message.hasOwnProperty("totalTime"))
                    object.totalTime = options.json && !isFinite(message.totalTime) ? String(message.totalTime) : message.totalTime;
                if (message.pitchBends && message.pitchBends.length) {
                    object.pitchBends = [];
                    for (var j = 0; j < message.pitchBends.length; ++j)
                        object.pitchBends[j] = $root.tensorflow.magenta.NoteSequence.PitchBend.toObject(message.pitchBends[j], options);
                }
                if (message.controlChanges && message.controlChanges.length) {
                    object.controlChanges = [];
                    for (var j = 0; j < message.controlChanges.length; ++j)
                        object.controlChanges[j] = $root.tensorflow.magenta.NoteSequence.ControlChange.toObject(message.controlChanges[j], options);
                }
                if (message.partInfos && message.partInfos.length) {
                    object.partInfos = [];
                    for (var j = 0; j < message.partInfos.length; ++j)
                        object.partInfos[j] = $root.tensorflow.magenta.NoteSequence.PartInfo.toObject(message.partInfos[j], options);
                }
                if (message.sourceInfo != null && message.hasOwnProperty("sourceInfo"))
                    object.sourceInfo = $root.tensorflow.magenta.NoteSequence.SourceInfo.toObject(message.sourceInfo, options);
                if (message.textAnnotations && message.textAnnotations.length) {
                    object.textAnnotations = [];
                    for (var j = 0; j < message.textAnnotations.length; ++j)
                        object.textAnnotations[j] = $root.tensorflow.magenta.NoteSequence.TextAnnotation.toObject(message.textAnnotations[j], options);
                }
                if (message.quantizationInfo != null && message.hasOwnProperty("quantizationInfo"))
                    object.quantizationInfo = $root.tensorflow.magenta.NoteSequence.QuantizationInfo.toObject(message.quantizationInfo, options);
                if (message.totalQuantizedSteps != null && message.hasOwnProperty("totalQuantizedSteps"))
                    if (typeof message.totalQuantizedSteps === "number")
                        object.totalQuantizedSteps = options.longs === String ? String(message.totalQuantizedSteps) : message.totalQuantizedSteps;
                    else
                        object.totalQuantizedSteps = options.longs === String ? $util.Long.prototype.toString.call(message.totalQuantizedSteps) : options.longs === Number ? new $util.LongBits(message.totalQuantizedSteps.low >>> 0, message.totalQuantizedSteps.high >>> 0).toNumber() : message.totalQuantizedSteps;
                if (message.subsequenceInfo != null && message.hasOwnProperty("subsequenceInfo"))
                    object.subsequenceInfo = $root.tensorflow.magenta.NoteSequence.SubsequenceInfo.toObject(message.subsequenceInfo, options);
                if (message.referenceNumber != null && message.hasOwnProperty("referenceNumber"))
                    if (typeof message.referenceNumber === "number")
                        object.referenceNumber = options.longs === String ? String(message.referenceNumber) : message.referenceNumber;
                    else
                        object.referenceNumber = options.longs === String ? $util.Long.prototype.toString.call(message.referenceNumber) : options.longs === Number ? new $util.LongBits(message.referenceNumber.low >>> 0, message.referenceNumber.high >>> 0).toNumber() : message.referenceNumber;
                if (message.sequenceMetadata != null && message.hasOwnProperty("sequenceMetadata"))
                    object.sequenceMetadata = $root.tensorflow.magenta.SequenceMetadata.toObject(message.sequenceMetadata, options);
                if (message.sectionAnnotations && message.sectionAnnotations.length) {
                    object.sectionAnnotations = [];
                    for (var j = 0; j < message.sectionAnnotations.length; ++j)
                        object.sectionAnnotations[j] = $root.tensorflow.magenta.NoteSequence.SectionAnnotation.toObject(message.sectionAnnotations[j], options);
                }
                if (message.sectionGroups && message.sectionGroups.length) {
                    object.sectionGroups = [];
                    for (var j = 0; j < message.sectionGroups.length; ++j)
                        object.sectionGroups[j] = $root.tensorflow.magenta.NoteSequence.SectionGroup.toObject(message.sectionGroups[j], options);
                }
                return object;
            };

            /**
             * Converts this NoteSequence to JSON.
             * @function toJSON
             * @memberof tensorflow.magenta.NoteSequence
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            NoteSequence.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            NoteSequence.Note = (function() {

                /**
                 * Properties of a Note.
                 * @memberof tensorflow.magenta.NoteSequence
                 * @interface INote
                 * @property {number|null} [pitch] Note pitch
                 * @property {tensorflow.magenta.NoteSequence.PitchName|null} [pitchName] Note pitchName
                 * @property {number|null} [velocity] Note velocity
                 * @property {number|null} [startTime] Note startTime
                 * @property {number|null} [quantizedStartStep] Note quantizedStartStep
                 * @property {number|null} [endTime] Note endTime
                 * @property {number|null} [quantizedEndStep] Note quantizedEndStep
                 * @property {number|null} [numerator] Note numerator
                 * @property {number|null} [denominator] Note denominator
                 * @property {number|null} [instrument] Note instrument
                 * @property {number|null} [program] Note program
                 * @property {boolean|null} [isDrum] Note isDrum
                 * @property {number|null} [part] Note part
                 * @property {number|null} [voice] Note voice
                 */

                /**
                 * Constructs a new Note.
                 * @memberof tensorflow.magenta.NoteSequence
                 * @classdesc Represents a Note.
                 * @implements INote
                 * @constructor
                 * @param {tensorflow.magenta.NoteSequence.INote=} [properties] Properties to set
                 */
                function Note(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Note pitch.
                 * @member {number} pitch
                 * @memberof tensorflow.magenta.NoteSequence.Note
                 * @instance
                 */
                Note.prototype.pitch = 0;

                /**
                 * Note pitchName.
                 * @member {tensorflow.magenta.NoteSequence.PitchName} pitchName
                 * @memberof tensorflow.magenta.NoteSequence.Note
                 * @instance
                 */
                Note.prototype.pitchName = 0;

                /**
                 * Note velocity.
                 * @member {number} velocity
                 * @memberof tensorflow.magenta.NoteSequence.Note
                 * @instance
                 */
                Note.prototype.velocity = 0;

                /**
                 * Note startTime.
                 * @member {number} startTime
                 * @memberof tensorflow.magenta.NoteSequence.Note
                 * @instance
                 */
                Note.prototype.startTime = 0;

                /**
                 * Note quantizedStartStep.
                 * @member {number} quantizedStartStep
                 * @memberof tensorflow.magenta.NoteSequence.Note
                 * @instance
                 */
                Note.prototype.quantizedStartStep = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * Note endTime.
                 * @member {number} endTime
                 * @memberof tensorflow.magenta.NoteSequence.Note
                 * @instance
                 */
                Note.prototype.endTime = 0;

                /**
                 * Note quantizedEndStep.
                 * @member {number} quantizedEndStep
                 * @memberof tensorflow.magenta.NoteSequence.Note
                 * @instance
                 */
                Note.prototype.quantizedEndStep = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * Note numerator.
                 * @member {number} numerator
                 * @memberof tensorflow.magenta.NoteSequence.Note
                 * @instance
                 */
                Note.prototype.numerator = 0;

                /**
                 * Note denominator.
                 * @member {number} denominator
                 * @memberof tensorflow.magenta.NoteSequence.Note
                 * @instance
                 */
                Note.prototype.denominator = 0;

                /**
                 * Note instrument.
                 * @member {number} instrument
                 * @memberof tensorflow.magenta.NoteSequence.Note
                 * @instance
                 */
                Note.prototype.instrument = 0;

                /**
                 * Note program.
                 * @member {number} program
                 * @memberof tensorflow.magenta.NoteSequence.Note
                 * @instance
                 */
                Note.prototype.program = 0;

                /**
                 * Note isDrum.
                 * @member {boolean} isDrum
                 * @memberof tensorflow.magenta.NoteSequence.Note
                 * @instance
                 */
                Note.prototype.isDrum = false;

                /**
                 * Note part.
                 * @member {number} part
                 * @memberof tensorflow.magenta.NoteSequence.Note
                 * @instance
                 */
                Note.prototype.part = 0;

                /**
                 * Note voice.
                 * @member {number} voice
                 * @memberof tensorflow.magenta.NoteSequence.Note
                 * @instance
                 */
                Note.prototype.voice = 0;

                /**
                 * Creates a new Note instance using the specified properties.
                 * @function create
                 * @memberof tensorflow.magenta.NoteSequence.Note
                 * @static
                 * @param {tensorflow.magenta.NoteSequence.INote=} [properties] Properties to set
                 * @returns {tensorflow.magenta.NoteSequence.Note} Note instance
                 */
                Note.create = function create(properties) {
                    return new Note(properties);
                };

                /**
                 * Encodes the specified Note message. Does not implicitly {@link tensorflow.magenta.NoteSequence.Note.verify|verify} messages.
                 * @function encode
                 * @memberof tensorflow.magenta.NoteSequence.Note
                 * @static
                 * @param {tensorflow.magenta.NoteSequence.INote} message Note message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Note.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.pitch != null && message.hasOwnProperty("pitch"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.pitch);
                    if (message.velocity != null && message.hasOwnProperty("velocity"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.velocity);
                    if (message.startTime != null && message.hasOwnProperty("startTime"))
                        writer.uint32(/* id 3, wireType 1 =*/25).double(message.startTime);
                    if (message.endTime != null && message.hasOwnProperty("endTime"))
                        writer.uint32(/* id 4, wireType 1 =*/33).double(message.endTime);
                    if (message.numerator != null && message.hasOwnProperty("numerator"))
                        writer.uint32(/* id 5, wireType 0 =*/40).int32(message.numerator);
                    if (message.denominator != null && message.hasOwnProperty("denominator"))
                        writer.uint32(/* id 6, wireType 0 =*/48).int32(message.denominator);
                    if (message.instrument != null && message.hasOwnProperty("instrument"))
                        writer.uint32(/* id 7, wireType 0 =*/56).int32(message.instrument);
                    if (message.program != null && message.hasOwnProperty("program"))
                        writer.uint32(/* id 8, wireType 0 =*/64).int32(message.program);
                    if (message.isDrum != null && message.hasOwnProperty("isDrum"))
                        writer.uint32(/* id 9, wireType 0 =*/72).bool(message.isDrum);
                    if (message.part != null && message.hasOwnProperty("part"))
                        writer.uint32(/* id 10, wireType 0 =*/80).int32(message.part);
                    if (message.pitchName != null && message.hasOwnProperty("pitchName"))
                        writer.uint32(/* id 11, wireType 0 =*/88).int32(message.pitchName);
                    if (message.voice != null && message.hasOwnProperty("voice"))
                        writer.uint32(/* id 12, wireType 0 =*/96).int32(message.voice);
                    if (message.quantizedStartStep != null && message.hasOwnProperty("quantizedStartStep"))
                        writer.uint32(/* id 13, wireType 0 =*/104).int64(message.quantizedStartStep);
                    if (message.quantizedEndStep != null && message.hasOwnProperty("quantizedEndStep"))
                        writer.uint32(/* id 14, wireType 0 =*/112).int64(message.quantizedEndStep);
                    return writer;
                };

                /**
                 * Encodes the specified Note message, length delimited. Does not implicitly {@link tensorflow.magenta.NoteSequence.Note.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof tensorflow.magenta.NoteSequence.Note
                 * @static
                 * @param {tensorflow.magenta.NoteSequence.INote} message Note message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Note.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Note message from the specified reader or buffer.
                 * @function decode
                 * @memberof tensorflow.magenta.NoteSequence.Note
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {tensorflow.magenta.NoteSequence.Note} Note
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Note.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tensorflow.magenta.NoteSequence.Note();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.pitch = reader.int32();
                            break;
                        case 11:
                            message.pitchName = reader.int32();
                            break;
                        case 2:
                            message.velocity = reader.int32();
                            break;
                        case 3:
                            message.startTime = reader.double();
                            break;
                        case 13:
                            message.quantizedStartStep = $util.Long?reader.int64().toNumber():reader.int64();
                            break;
                        case 4:
                            message.endTime = reader.double();
                            break;
                        case 14:
                            message.quantizedEndStep = $util.Long?reader.int64().toNumber():reader.int64();
                            break;
                        case 5:
                            message.numerator = reader.int32();
                            break;
                        case 6:
                            message.denominator = reader.int32();
                            break;
                        case 7:
                            message.instrument = reader.int32();
                            break;
                        case 8:
                            message.program = reader.int32();
                            break;
                        case 9:
                            message.isDrum = reader.bool();
                            break;
                        case 10:
                            message.part = reader.int32();
                            break;
                        case 12:
                            message.voice = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Note message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof tensorflow.magenta.NoteSequence.Note
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {tensorflow.magenta.NoteSequence.Note} Note
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Note.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Note message.
                 * @function verify
                 * @memberof tensorflow.magenta.NoteSequence.Note
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Note.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.pitch != null && message.hasOwnProperty("pitch"))
                        if (!$util.isInteger(message.pitch))
                            return "pitch: integer expected";
                    if (message.pitchName != null && message.hasOwnProperty("pitchName"))
                        switch (message.pitchName) {
                        default:
                            return "pitchName: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                        case 6:
                        case 7:
                        case 8:
                        case 9:
                        case 10:
                        case 11:
                        case 12:
                        case 13:
                        case 14:
                        case 15:
                        case 16:
                        case 17:
                        case 18:
                        case 19:
                        case 20:
                        case 21:
                        case 22:
                        case 23:
                        case 24:
                        case 25:
                        case 26:
                        case 27:
                        case 28:
                        case 29:
                        case 30:
                        case 31:
                        case 32:
                        case 33:
                        case 34:
                        case 35:
                            break;
                        }
                    if (message.velocity != null && message.hasOwnProperty("velocity"))
                        if (!$util.isInteger(message.velocity))
                            return "velocity: integer expected";
                    if (message.startTime != null && message.hasOwnProperty("startTime"))
                        if (typeof message.startTime !== "number")
                            return "startTime: number expected";
                    if (message.quantizedStartStep != null && message.hasOwnProperty("quantizedStartStep"))
                        if (!$util.isInteger(message.quantizedStartStep) && !(message.quantizedStartStep && $util.isInteger(message.quantizedStartStep.low) && $util.isInteger(message.quantizedStartStep.high)))
                            return "quantizedStartStep: integer|Long expected";
                    if (message.endTime != null && message.hasOwnProperty("endTime"))
                        if (typeof message.endTime !== "number")
                            return "endTime: number expected";
                    if (message.quantizedEndStep != null && message.hasOwnProperty("quantizedEndStep"))
                        if (!$util.isInteger(message.quantizedEndStep) && !(message.quantizedEndStep && $util.isInteger(message.quantizedEndStep.low) && $util.isInteger(message.quantizedEndStep.high)))
                            return "quantizedEndStep: integer|Long expected";
                    if (message.numerator != null && message.hasOwnProperty("numerator"))
                        if (!$util.isInteger(message.numerator))
                            return "numerator: integer expected";
                    if (message.denominator != null && message.hasOwnProperty("denominator"))
                        if (!$util.isInteger(message.denominator))
                            return "denominator: integer expected";
                    if (message.instrument != null && message.hasOwnProperty("instrument"))
                        if (!$util.isInteger(message.instrument))
                            return "instrument: integer expected";
                    if (message.program != null && message.hasOwnProperty("program"))
                        if (!$util.isInteger(message.program))
                            return "program: integer expected";
                    if (message.isDrum != null && message.hasOwnProperty("isDrum"))
                        if (typeof message.isDrum !== "boolean")
                            return "isDrum: boolean expected";
                    if (message.part != null && message.hasOwnProperty("part"))
                        if (!$util.isInteger(message.part))
                            return "part: integer expected";
                    if (message.voice != null && message.hasOwnProperty("voice"))
                        if (!$util.isInteger(message.voice))
                            return "voice: integer expected";
                    return null;
                };

                /**
                 * Creates a Note message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof tensorflow.magenta.NoteSequence.Note
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {tensorflow.magenta.NoteSequence.Note} Note
                 */
                Note.fromObject = function fromObject(object) {
                    if (object instanceof $root.tensorflow.magenta.NoteSequence.Note)
                        return object;
                    var message = new $root.tensorflow.magenta.NoteSequence.Note();
                    if (object.pitch != null)
                        message.pitch = object.pitch | 0;
                    switch (object.pitchName) {
                    case "UNKNOWN_PITCH_NAME":
                    case 0:
                        message.pitchName = 0;
                        break;
                    case "F_FLAT_FLAT":
                    case 1:
                        message.pitchName = 1;
                        break;
                    case "C_FLAT_FLAT":
                    case 2:
                        message.pitchName = 2;
                        break;
                    case "G_FLAT_FLAT":
                    case 3:
                        message.pitchName = 3;
                        break;
                    case "D_FLAT_FLAT":
                    case 4:
                        message.pitchName = 4;
                        break;
                    case "A_FLAT_FLAT":
                    case 5:
                        message.pitchName = 5;
                        break;
                    case "E_FLAT_FLAT":
                    case 6:
                        message.pitchName = 6;
                        break;
                    case "B_FLAT_FLAT":
                    case 7:
                        message.pitchName = 7;
                        break;
                    case "F_FLAT":
                    case 8:
                        message.pitchName = 8;
                        break;
                    case "C_FLAT":
                    case 9:
                        message.pitchName = 9;
                        break;
                    case "G_FLAT":
                    case 10:
                        message.pitchName = 10;
                        break;
                    case "D_FLAT":
                    case 11:
                        message.pitchName = 11;
                        break;
                    case "A_FLAT":
                    case 12:
                        message.pitchName = 12;
                        break;
                    case "E_FLAT":
                    case 13:
                        message.pitchName = 13;
                        break;
                    case "B_FLAT":
                    case 14:
                        message.pitchName = 14;
                        break;
                    case "F":
                    case 15:
                        message.pitchName = 15;
                        break;
                    case "C":
                    case 16:
                        message.pitchName = 16;
                        break;
                    case "G":
                    case 17:
                        message.pitchName = 17;
                        break;
                    case "D":
                    case 18:
                        message.pitchName = 18;
                        break;
                    case "A":
                    case 19:
                        message.pitchName = 19;
                        break;
                    case "E":
                    case 20:
                        message.pitchName = 20;
                        break;
                    case "B":
                    case 21:
                        message.pitchName = 21;
                        break;
                    case "F_SHARP":
                    case 22:
                        message.pitchName = 22;
                        break;
                    case "C_SHARP":
                    case 23:
                        message.pitchName = 23;
                        break;
                    case "G_SHARP":
                    case 24:
                        message.pitchName = 24;
                        break;
                    case "D_SHARP":
                    case 25:
                        message.pitchName = 25;
                        break;
                    case "A_SHARP":
                    case 26:
                        message.pitchName = 26;
                        break;
                    case "E_SHARP":
                    case 27:
                        message.pitchName = 27;
                        break;
                    case "B_SHARP":
                    case 28:
                        message.pitchName = 28;
                        break;
                    case "F_SHARP_SHARP":
                    case 29:
                        message.pitchName = 29;
                        break;
                    case "C_SHARP_SHARP":
                    case 30:
                        message.pitchName = 30;
                        break;
                    case "G_SHARP_SHARP":
                    case 31:
                        message.pitchName = 31;
                        break;
                    case "D_SHARP_SHARP":
                    case 32:
                        message.pitchName = 32;
                        break;
                    case "A_SHARP_SHARP":
                    case 33:
                        message.pitchName = 33;
                        break;
                    case "E_SHARP_SHARP":
                    case 34:
                        message.pitchName = 34;
                        break;
                    case "B_SHARP_SHARP":
                    case 35:
                        message.pitchName = 35;
                        break;
                    }
                    if (object.velocity != null)
                        message.velocity = object.velocity | 0;
                    if (object.startTime != null)
                        message.startTime = Number(object.startTime);
                    if (object.quantizedStartStep != null)
                        if ($util.Long)
                            (message.quantizedStartStep = $util.Long.fromValue(object.quantizedStartStep)).unsigned = false;
                        else if (typeof object.quantizedStartStep === "string")
                            message.quantizedStartStep = parseInt(object.quantizedStartStep, 10);
                        else if (typeof object.quantizedStartStep === "number")
                            message.quantizedStartStep = object.quantizedStartStep;
                        else if (typeof object.quantizedStartStep === "object")
                            message.quantizedStartStep = new $util.LongBits(object.quantizedStartStep.low >>> 0, object.quantizedStartStep.high >>> 0).toNumber();
                    if (object.endTime != null)
                        message.endTime = Number(object.endTime);
                    if (object.quantizedEndStep != null)
                        if ($util.Long)
                            (message.quantizedEndStep = $util.Long.fromValue(object.quantizedEndStep)).unsigned = false;
                        else if (typeof object.quantizedEndStep === "string")
                            message.quantizedEndStep = parseInt(object.quantizedEndStep, 10);
                        else if (typeof object.quantizedEndStep === "number")
                            message.quantizedEndStep = object.quantizedEndStep;
                        else if (typeof object.quantizedEndStep === "object")
                            message.quantizedEndStep = new $util.LongBits(object.quantizedEndStep.low >>> 0, object.quantizedEndStep.high >>> 0).toNumber();
                    if (object.numerator != null)
                        message.numerator = object.numerator | 0;
                    if (object.denominator != null)
                        message.denominator = object.denominator | 0;
                    if (object.instrument != null)
                        message.instrument = object.instrument | 0;
                    if (object.program != null)
                        message.program = object.program | 0;
                    if (object.isDrum != null)
                        message.isDrum = Boolean(object.isDrum);
                    if (object.part != null)
                        message.part = object.part | 0;
                    if (object.voice != null)
                        message.voice = object.voice | 0;
                    return message;
                };

                /**
                 * Creates a plain object from a Note message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof tensorflow.magenta.NoteSequence.Note
                 * @static
                 * @param {tensorflow.magenta.NoteSequence.Note} message Note
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Note.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.pitch = 0;
                        object.velocity = 0;
                        object.startTime = 0;
                        object.endTime = 0;
                        object.numerator = 0;
                        object.denominator = 0;
                        object.instrument = 0;
                        object.program = 0;
                        object.isDrum = false;
                        object.part = 0;
                        object.pitchName = options.enums === String ? "UNKNOWN_PITCH_NAME" : 0;
                        object.voice = 0;
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.quantizedStartStep = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.quantizedStartStep = options.longs === String ? "0" : 0;
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.quantizedEndStep = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.quantizedEndStep = options.longs === String ? "0" : 0;
                    }
                    if (message.pitch != null && message.hasOwnProperty("pitch"))
                        object.pitch = message.pitch;
                    if (message.velocity != null && message.hasOwnProperty("velocity"))
                        object.velocity = message.velocity;
                    if (message.startTime != null && message.hasOwnProperty("startTime"))
                        object.startTime = options.json && !isFinite(message.startTime) ? String(message.startTime) : message.startTime;
                    if (message.endTime != null && message.hasOwnProperty("endTime"))
                        object.endTime = options.json && !isFinite(message.endTime) ? String(message.endTime) : message.endTime;
                    if (message.numerator != null && message.hasOwnProperty("numerator"))
                        object.numerator = message.numerator;
                    if (message.denominator != null && message.hasOwnProperty("denominator"))
                        object.denominator = message.denominator;
                    if (message.instrument != null && message.hasOwnProperty("instrument"))
                        object.instrument = message.instrument;
                    if (message.program != null && message.hasOwnProperty("program"))
                        object.program = message.program;
                    if (message.isDrum != null && message.hasOwnProperty("isDrum"))
                        object.isDrum = message.isDrum;
                    if (message.part != null && message.hasOwnProperty("part"))
                        object.part = message.part;
                    if (message.pitchName != null && message.hasOwnProperty("pitchName"))
                        object.pitchName = options.enums === String ? $root.tensorflow.magenta.NoteSequence.PitchName[message.pitchName] : message.pitchName;
                    if (message.voice != null && message.hasOwnProperty("voice"))
                        object.voice = message.voice;
                    if (message.quantizedStartStep != null && message.hasOwnProperty("quantizedStartStep"))
                        if (typeof message.quantizedStartStep === "number")
                            object.quantizedStartStep = options.longs === String ? String(message.quantizedStartStep) : message.quantizedStartStep;
                        else
                            object.quantizedStartStep = options.longs === String ? $util.Long.prototype.toString.call(message.quantizedStartStep) : options.longs === Number ? new $util.LongBits(message.quantizedStartStep.low >>> 0, message.quantizedStartStep.high >>> 0).toNumber() : message.quantizedStartStep;
                    if (message.quantizedEndStep != null && message.hasOwnProperty("quantizedEndStep"))
                        if (typeof message.quantizedEndStep === "number")
                            object.quantizedEndStep = options.longs === String ? String(message.quantizedEndStep) : message.quantizedEndStep;
                        else
                            object.quantizedEndStep = options.longs === String ? $util.Long.prototype.toString.call(message.quantizedEndStep) : options.longs === Number ? new $util.LongBits(message.quantizedEndStep.low >>> 0, message.quantizedEndStep.high >>> 0).toNumber() : message.quantizedEndStep;
                    return object;
                };

                /**
                 * Converts this Note to JSON.
                 * @function toJSON
                 * @memberof tensorflow.magenta.NoteSequence.Note
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Note.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Note;
            })();

            /**
             * PitchName enum.
             * @name tensorflow.magenta.NoteSequence.PitchName
             * @enum {string}
             * @property {number} UNKNOWN_PITCH_NAME=0 UNKNOWN_PITCH_NAME value
             * @property {number} F_FLAT_FLAT=1 F_FLAT_FLAT value
             * @property {number} C_FLAT_FLAT=2 C_FLAT_FLAT value
             * @property {number} G_FLAT_FLAT=3 G_FLAT_FLAT value
             * @property {number} D_FLAT_FLAT=4 D_FLAT_FLAT value
             * @property {number} A_FLAT_FLAT=5 A_FLAT_FLAT value
             * @property {number} E_FLAT_FLAT=6 E_FLAT_FLAT value
             * @property {number} B_FLAT_FLAT=7 B_FLAT_FLAT value
             * @property {number} F_FLAT=8 F_FLAT value
             * @property {number} C_FLAT=9 C_FLAT value
             * @property {number} G_FLAT=10 G_FLAT value
             * @property {number} D_FLAT=11 D_FLAT value
             * @property {number} A_FLAT=12 A_FLAT value
             * @property {number} E_FLAT=13 E_FLAT value
             * @property {number} B_FLAT=14 B_FLAT value
             * @property {number} F=15 F value
             * @property {number} C=16 C value
             * @property {number} G=17 G value
             * @property {number} D=18 D value
             * @property {number} A=19 A value
             * @property {number} E=20 E value
             * @property {number} B=21 B value
             * @property {number} F_SHARP=22 F_SHARP value
             * @property {number} C_SHARP=23 C_SHARP value
             * @property {number} G_SHARP=24 G_SHARP value
             * @property {number} D_SHARP=25 D_SHARP value
             * @property {number} A_SHARP=26 A_SHARP value
             * @property {number} E_SHARP=27 E_SHARP value
             * @property {number} B_SHARP=28 B_SHARP value
             * @property {number} F_SHARP_SHARP=29 F_SHARP_SHARP value
             * @property {number} C_SHARP_SHARP=30 C_SHARP_SHARP value
             * @property {number} G_SHARP_SHARP=31 G_SHARP_SHARP value
             * @property {number} D_SHARP_SHARP=32 D_SHARP_SHARP value
             * @property {number} A_SHARP_SHARP=33 A_SHARP_SHARP value
             * @property {number} E_SHARP_SHARP=34 E_SHARP_SHARP value
             * @property {number} B_SHARP_SHARP=35 B_SHARP_SHARP value
             */
            NoteSequence.PitchName = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "UNKNOWN_PITCH_NAME"] = 0;
                values[valuesById[1] = "F_FLAT_FLAT"] = 1;
                values[valuesById[2] = "C_FLAT_FLAT"] = 2;
                values[valuesById[3] = "G_FLAT_FLAT"] = 3;
                values[valuesById[4] = "D_FLAT_FLAT"] = 4;
                values[valuesById[5] = "A_FLAT_FLAT"] = 5;
                values[valuesById[6] = "E_FLAT_FLAT"] = 6;
                values[valuesById[7] = "B_FLAT_FLAT"] = 7;
                values[valuesById[8] = "F_FLAT"] = 8;
                values[valuesById[9] = "C_FLAT"] = 9;
                values[valuesById[10] = "G_FLAT"] = 10;
                values[valuesById[11] = "D_FLAT"] = 11;
                values[valuesById[12] = "A_FLAT"] = 12;
                values[valuesById[13] = "E_FLAT"] = 13;
                values[valuesById[14] = "B_FLAT"] = 14;
                values[valuesById[15] = "F"] = 15;
                values[valuesById[16] = "C"] = 16;
                values[valuesById[17] = "G"] = 17;
                values[valuesById[18] = "D"] = 18;
                values[valuesById[19] = "A"] = 19;
                values[valuesById[20] = "E"] = 20;
                values[valuesById[21] = "B"] = 21;
                values[valuesById[22] = "F_SHARP"] = 22;
                values[valuesById[23] = "C_SHARP"] = 23;
                values[valuesById[24] = "G_SHARP"] = 24;
                values[valuesById[25] = "D_SHARP"] = 25;
                values[valuesById[26] = "A_SHARP"] = 26;
                values[valuesById[27] = "E_SHARP"] = 27;
                values[valuesById[28] = "B_SHARP"] = 28;
                values[valuesById[29] = "F_SHARP_SHARP"] = 29;
                values[valuesById[30] = "C_SHARP_SHARP"] = 30;
                values[valuesById[31] = "G_SHARP_SHARP"] = 31;
                values[valuesById[32] = "D_SHARP_SHARP"] = 32;
                values[valuesById[33] = "A_SHARP_SHARP"] = 33;
                values[valuesById[34] = "E_SHARP_SHARP"] = 34;
                values[valuesById[35] = "B_SHARP_SHARP"] = 35;
                return values;
            })();

            NoteSequence.TimeSignature = (function() {

                /**
                 * Properties of a TimeSignature.
                 * @memberof tensorflow.magenta.NoteSequence
                 * @interface ITimeSignature
                 * @property {number|null} [time] TimeSignature time
                 * @property {number|null} [numerator] TimeSignature numerator
                 * @property {number|null} [denominator] TimeSignature denominator
                 */

                /**
                 * Constructs a new TimeSignature.
                 * @memberof tensorflow.magenta.NoteSequence
                 * @classdesc Represents a TimeSignature.
                 * @implements ITimeSignature
                 * @constructor
                 * @param {tensorflow.magenta.NoteSequence.ITimeSignature=} [properties] Properties to set
                 */
                function TimeSignature(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * TimeSignature time.
                 * @member {number} time
                 * @memberof tensorflow.magenta.NoteSequence.TimeSignature
                 * @instance
                 */
                TimeSignature.prototype.time = 0;

                /**
                 * TimeSignature numerator.
                 * @member {number} numerator
                 * @memberof tensorflow.magenta.NoteSequence.TimeSignature
                 * @instance
                 */
                TimeSignature.prototype.numerator = 0;

                /**
                 * TimeSignature denominator.
                 * @member {number} denominator
                 * @memberof tensorflow.magenta.NoteSequence.TimeSignature
                 * @instance
                 */
                TimeSignature.prototype.denominator = 0;

                /**
                 * Creates a new TimeSignature instance using the specified properties.
                 * @function create
                 * @memberof tensorflow.magenta.NoteSequence.TimeSignature
                 * @static
                 * @param {tensorflow.magenta.NoteSequence.ITimeSignature=} [properties] Properties to set
                 * @returns {tensorflow.magenta.NoteSequence.TimeSignature} TimeSignature instance
                 */
                TimeSignature.create = function create(properties) {
                    return new TimeSignature(properties);
                };

                /**
                 * Encodes the specified TimeSignature message. Does not implicitly {@link tensorflow.magenta.NoteSequence.TimeSignature.verify|verify} messages.
                 * @function encode
                 * @memberof tensorflow.magenta.NoteSequence.TimeSignature
                 * @static
                 * @param {tensorflow.magenta.NoteSequence.ITimeSignature} message TimeSignature message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                TimeSignature.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.time != null && message.hasOwnProperty("time"))
                        writer.uint32(/* id 1, wireType 1 =*/9).double(message.time);
                    if (message.numerator != null && message.hasOwnProperty("numerator"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.numerator);
                    if (message.denominator != null && message.hasOwnProperty("denominator"))
                        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.denominator);
                    return writer;
                };

                /**
                 * Encodes the specified TimeSignature message, length delimited. Does not implicitly {@link tensorflow.magenta.NoteSequence.TimeSignature.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof tensorflow.magenta.NoteSequence.TimeSignature
                 * @static
                 * @param {tensorflow.magenta.NoteSequence.ITimeSignature} message TimeSignature message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                TimeSignature.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a TimeSignature message from the specified reader or buffer.
                 * @function decode
                 * @memberof tensorflow.magenta.NoteSequence.TimeSignature
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {tensorflow.magenta.NoteSequence.TimeSignature} TimeSignature
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                TimeSignature.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tensorflow.magenta.NoteSequence.TimeSignature();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.time = reader.double();
                            break;
                        case 2:
                            message.numerator = reader.int32();
                            break;
                        case 3:
                            message.denominator = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a TimeSignature message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof tensorflow.magenta.NoteSequence.TimeSignature
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {tensorflow.magenta.NoteSequence.TimeSignature} TimeSignature
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                TimeSignature.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a TimeSignature message.
                 * @function verify
                 * @memberof tensorflow.magenta.NoteSequence.TimeSignature
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                TimeSignature.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.time != null && message.hasOwnProperty("time"))
                        if (typeof message.time !== "number")
                            return "time: number expected";
                    if (message.numerator != null && message.hasOwnProperty("numerator"))
                        if (!$util.isInteger(message.numerator))
                            return "numerator: integer expected";
                    if (message.denominator != null && message.hasOwnProperty("denominator"))
                        if (!$util.isInteger(message.denominator))
                            return "denominator: integer expected";
                    return null;
                };

                /**
                 * Creates a TimeSignature message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof tensorflow.magenta.NoteSequence.TimeSignature
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {tensorflow.magenta.NoteSequence.TimeSignature} TimeSignature
                 */
                TimeSignature.fromObject = function fromObject(object) {
                    if (object instanceof $root.tensorflow.magenta.NoteSequence.TimeSignature)
                        return object;
                    var message = new $root.tensorflow.magenta.NoteSequence.TimeSignature();
                    if (object.time != null)
                        message.time = Number(object.time);
                    if (object.numerator != null)
                        message.numerator = object.numerator | 0;
                    if (object.denominator != null)
                        message.denominator = object.denominator | 0;
                    return message;
                };

                /**
                 * Creates a plain object from a TimeSignature message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof tensorflow.magenta.NoteSequence.TimeSignature
                 * @static
                 * @param {tensorflow.magenta.NoteSequence.TimeSignature} message TimeSignature
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                TimeSignature.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.time = 0;
                        object.numerator = 0;
                        object.denominator = 0;
                    }
                    if (message.time != null && message.hasOwnProperty("time"))
                        object.time = options.json && !isFinite(message.time) ? String(message.time) : message.time;
                    if (message.numerator != null && message.hasOwnProperty("numerator"))
                        object.numerator = message.numerator;
                    if (message.denominator != null && message.hasOwnProperty("denominator"))
                        object.denominator = message.denominator;
                    return object;
                };

                /**
                 * Converts this TimeSignature to JSON.
                 * @function toJSON
                 * @memberof tensorflow.magenta.NoteSequence.TimeSignature
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                TimeSignature.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return TimeSignature;
            })();

            NoteSequence.KeySignature = (function() {

                /**
                 * Properties of a KeySignature.
                 * @memberof tensorflow.magenta.NoteSequence
                 * @interface IKeySignature
                 * @property {number|null} [time] KeySignature time
                 * @property {tensorflow.magenta.NoteSequence.KeySignature.Key|null} [key] KeySignature key
                 * @property {tensorflow.magenta.NoteSequence.KeySignature.Mode|null} [mode] KeySignature mode
                 */

                /**
                 * Constructs a new KeySignature.
                 * @memberof tensorflow.magenta.NoteSequence
                 * @classdesc Represents a KeySignature.
                 * @implements IKeySignature
                 * @constructor
                 * @param {tensorflow.magenta.NoteSequence.IKeySignature=} [properties] Properties to set
                 */
                function KeySignature(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * KeySignature time.
                 * @member {number} time
                 * @memberof tensorflow.magenta.NoteSequence.KeySignature
                 * @instance
                 */
                KeySignature.prototype.time = 0;

                /**
                 * KeySignature key.
                 * @member {tensorflow.magenta.NoteSequence.KeySignature.Key} key
                 * @memberof tensorflow.magenta.NoteSequence.KeySignature
                 * @instance
                 */
                KeySignature.prototype.key = 0;

                /**
                 * KeySignature mode.
                 * @member {tensorflow.magenta.NoteSequence.KeySignature.Mode} mode
                 * @memberof tensorflow.magenta.NoteSequence.KeySignature
                 * @instance
                 */
                KeySignature.prototype.mode = 0;

                /**
                 * Creates a new KeySignature instance using the specified properties.
                 * @function create
                 * @memberof tensorflow.magenta.NoteSequence.KeySignature
                 * @static
                 * @param {tensorflow.magenta.NoteSequence.IKeySignature=} [properties] Properties to set
                 * @returns {tensorflow.magenta.NoteSequence.KeySignature} KeySignature instance
                 */
                KeySignature.create = function create(properties) {
                    return new KeySignature(properties);
                };

                /**
                 * Encodes the specified KeySignature message. Does not implicitly {@link tensorflow.magenta.NoteSequence.KeySignature.verify|verify} messages.
                 * @function encode
                 * @memberof tensorflow.magenta.NoteSequence.KeySignature
                 * @static
                 * @param {tensorflow.magenta.NoteSequence.IKeySignature} message KeySignature message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                KeySignature.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.time != null && message.hasOwnProperty("time"))
                        writer.uint32(/* id 1, wireType 1 =*/9).double(message.time);
                    if (message.key != null && message.hasOwnProperty("key"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.key);
                    if (message.mode != null && message.hasOwnProperty("mode"))
                        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.mode);
                    return writer;
                };

                /**
                 * Encodes the specified KeySignature message, length delimited. Does not implicitly {@link tensorflow.magenta.NoteSequence.KeySignature.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof tensorflow.magenta.NoteSequence.KeySignature
                 * @static
                 * @param {tensorflow.magenta.NoteSequence.IKeySignature} message KeySignature message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                KeySignature.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a KeySignature message from the specified reader or buffer.
                 * @function decode
                 * @memberof tensorflow.magenta.NoteSequence.KeySignature
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {tensorflow.magenta.NoteSequence.KeySignature} KeySignature
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                KeySignature.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tensorflow.magenta.NoteSequence.KeySignature();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.time = reader.double();
                            break;
                        case 2:
                            message.key = reader.int32();
                            break;
                        case 3:
                            message.mode = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a KeySignature message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof tensorflow.magenta.NoteSequence.KeySignature
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {tensorflow.magenta.NoteSequence.KeySignature} KeySignature
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                KeySignature.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a KeySignature message.
                 * @function verify
                 * @memberof tensorflow.magenta.NoteSequence.KeySignature
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                KeySignature.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.time != null && message.hasOwnProperty("time"))
                        if (typeof message.time !== "number")
                            return "time: number expected";
                    if (message.key != null && message.hasOwnProperty("key"))
                        switch (message.key) {
                        default:
                            return "key: enum value expected";
                        case 0:
                        case 1:
                        case 1:
                        case 2:
                        case 3:
                        case 3:
                        case 4:
                        case 5:
                        case 6:
                        case 6:
                        case 7:
                        case 8:
                        case 8:
                        case 9:
                        case 10:
                        case 10:
                        case 11:
                            break;
                        }
                    if (message.mode != null && message.hasOwnProperty("mode"))
                        switch (message.mode) {
                        default:
                            return "mode: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                        case 6:
                        case 7:
                            break;
                        }
                    return null;
                };

                /**
                 * Creates a KeySignature message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof tensorflow.magenta.NoteSequence.KeySignature
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {tensorflow.magenta.NoteSequence.KeySignature} KeySignature
                 */
                KeySignature.fromObject = function fromObject(object) {
                    if (object instanceof $root.tensorflow.magenta.NoteSequence.KeySignature)
                        return object;
                    var message = new $root.tensorflow.magenta.NoteSequence.KeySignature();
                    if (object.time != null)
                        message.time = Number(object.time);
                    switch (object.key) {
                    case "C":
                    case 0:
                        message.key = 0;
                        break;
                    case "C_SHARP":
                    case 1:
                        message.key = 1;
                        break;
                    case "D_FLAT":
                    case 1:
                        message.key = 1;
                        break;
                    case "D":
                    case 2:
                        message.key = 2;
                        break;
                    case "D_SHARP":
                    case 3:
                        message.key = 3;
                        break;
                    case "E_FLAT":
                    case 3:
                        message.key = 3;
                        break;
                    case "E":
                    case 4:
                        message.key = 4;
                        break;
                    case "F":
                    case 5:
                        message.key = 5;
                        break;
                    case "F_SHARP":
                    case 6:
                        message.key = 6;
                        break;
                    case "G_FLAT":
                    case 6:
                        message.key = 6;
                        break;
                    case "G":
                    case 7:
                        message.key = 7;
                        break;
                    case "G_SHARP":
                    case 8:
                        message.key = 8;
                        break;
                    case "A_FLAT":
                    case 8:
                        message.key = 8;
                        break;
                    case "A":
                    case 9:
                        message.key = 9;
                        break;
                    case "A_SHARP":
                    case 10:
                        message.key = 10;
                        break;
                    case "B_FLAT":
                    case 10:
                        message.key = 10;
                        break;
                    case "B":
                    case 11:
                        message.key = 11;
                        break;
                    }
                    switch (object.mode) {
                    case "MAJOR":
                    case 0:
                        message.mode = 0;
                        break;
                    case "MINOR":
                    case 1:
                        message.mode = 1;
                        break;
                    case "NOT_SPECIFIED":
                    case 2:
                        message.mode = 2;
                        break;
                    case "MIXOLYDIAN":
                    case 3:
                        message.mode = 3;
                        break;
                    case "DORIAN":
                    case 4:
                        message.mode = 4;
                        break;
                    case "PHRYGIAN":
                    case 5:
                        message.mode = 5;
                        break;
                    case "LYDIAN":
                    case 6:
                        message.mode = 6;
                        break;
                    case "LOCRIAN":
                    case 7:
                        message.mode = 7;
                        break;
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a KeySignature message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof tensorflow.magenta.NoteSequence.KeySignature
                 * @static
                 * @param {tensorflow.magenta.NoteSequence.KeySignature} message KeySignature
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                KeySignature.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.time = 0;
                        object.key = options.enums === String ? "C" : 0;
                        object.mode = options.enums === String ? "MAJOR" : 0;
                    }
                    if (message.time != null && message.hasOwnProperty("time"))
                        object.time = options.json && !isFinite(message.time) ? String(message.time) : message.time;
                    if (message.key != null && message.hasOwnProperty("key"))
                        object.key = options.enums === String ? $root.tensorflow.magenta.NoteSequence.KeySignature.Key[message.key] : message.key;
                    if (message.mode != null && message.hasOwnProperty("mode"))
                        object.mode = options.enums === String ? $root.tensorflow.magenta.NoteSequence.KeySignature.Mode[message.mode] : message.mode;
                    return object;
                };

                /**
                 * Converts this KeySignature to JSON.
                 * @function toJSON
                 * @memberof tensorflow.magenta.NoteSequence.KeySignature
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                KeySignature.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Key enum.
                 * @name tensorflow.magenta.NoteSequence.KeySignature.Key
                 * @enum {string}
                 * @property {number} C=0 C value
                 * @property {number} C_SHARP=1 C_SHARP value
                 * @property {number} D_FLAT=1 D_FLAT value
                 * @property {number} D=2 D value
                 * @property {number} D_SHARP=3 D_SHARP value
                 * @property {number} E_FLAT=3 E_FLAT value
                 * @property {number} E=4 E value
                 * @property {number} F=5 F value
                 * @property {number} F_SHARP=6 F_SHARP value
                 * @property {number} G_FLAT=6 G_FLAT value
                 * @property {number} G=7 G value
                 * @property {number} G_SHARP=8 G_SHARP value
                 * @property {number} A_FLAT=8 A_FLAT value
                 * @property {number} A=9 A value
                 * @property {number} A_SHARP=10 A_SHARP value
                 * @property {number} B_FLAT=10 B_FLAT value
                 * @property {number} B=11 B value
                 */
                KeySignature.Key = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "C"] = 0;
                    values[valuesById[1] = "C_SHARP"] = 1;
                    values["D_FLAT"] = 1;
                    values[valuesById[2] = "D"] = 2;
                    values[valuesById[3] = "D_SHARP"] = 3;
                    values["E_FLAT"] = 3;
                    values[valuesById[4] = "E"] = 4;
                    values[valuesById[5] = "F"] = 5;
                    values[valuesById[6] = "F_SHARP"] = 6;
                    values["G_FLAT"] = 6;
                    values[valuesById[7] = "G"] = 7;
                    values[valuesById[8] = "G_SHARP"] = 8;
                    values["A_FLAT"] = 8;
                    values[valuesById[9] = "A"] = 9;
                    values[valuesById[10] = "A_SHARP"] = 10;
                    values["B_FLAT"] = 10;
                    values[valuesById[11] = "B"] = 11;
                    return values;
                })();

                /**
                 * Mode enum.
                 * @name tensorflow.magenta.NoteSequence.KeySignature.Mode
                 * @enum {string}
                 * @property {number} MAJOR=0 MAJOR value
                 * @property {number} MINOR=1 MINOR value
                 * @property {number} NOT_SPECIFIED=2 NOT_SPECIFIED value
                 * @property {number} MIXOLYDIAN=3 MIXOLYDIAN value
                 * @property {number} DORIAN=4 DORIAN value
                 * @property {number} PHRYGIAN=5 PHRYGIAN value
                 * @property {number} LYDIAN=6 LYDIAN value
                 * @property {number} LOCRIAN=7 LOCRIAN value
                 */
                KeySignature.Mode = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "MAJOR"] = 0;
                    values[valuesById[1] = "MINOR"] = 1;
                    values[valuesById[2] = "NOT_SPECIFIED"] = 2;
                    values[valuesById[3] = "MIXOLYDIAN"] = 3;
                    values[valuesById[4] = "DORIAN"] = 4;
                    values[valuesById[5] = "PHRYGIAN"] = 5;
                    values[valuesById[6] = "LYDIAN"] = 6;
                    values[valuesById[7] = "LOCRIAN"] = 7;
                    return values;
                })();

                return KeySignature;
            })();

            NoteSequence.Tempo = (function() {

                /**
                 * Properties of a Tempo.
                 * @memberof tensorflow.magenta.NoteSequence
                 * @interface ITempo
                 * @property {number|null} [time] Tempo time
                 * @property {number|null} [qpm] Tempo qpm
                 */

                /**
                 * Constructs a new Tempo.
                 * @memberof tensorflow.magenta.NoteSequence
                 * @classdesc Represents a Tempo.
                 * @implements ITempo
                 * @constructor
                 * @param {tensorflow.magenta.NoteSequence.ITempo=} [properties] Properties to set
                 */
                function Tempo(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Tempo time.
                 * @member {number} time
                 * @memberof tensorflow.magenta.NoteSequence.Tempo
                 * @instance
                 */
                Tempo.prototype.time = 0;

                /**
                 * Tempo qpm.
                 * @member {number} qpm
                 * @memberof tensorflow.magenta.NoteSequence.Tempo
                 * @instance
                 */
                Tempo.prototype.qpm = 0;

                /**
                 * Creates a new Tempo instance using the specified properties.
                 * @function create
                 * @memberof tensorflow.magenta.NoteSequence.Tempo
                 * @static
                 * @param {tensorflow.magenta.NoteSequence.ITempo=} [properties] Properties to set
                 * @returns {tensorflow.magenta.NoteSequence.Tempo} Tempo instance
                 */
                Tempo.create = function create(properties) {
                    return new Tempo(properties);
                };

                /**
                 * Encodes the specified Tempo message. Does not implicitly {@link tensorflow.magenta.NoteSequence.Tempo.verify|verify} messages.
                 * @function encode
                 * @memberof tensorflow.magenta.NoteSequence.Tempo
                 * @static
                 * @param {tensorflow.magenta.NoteSequence.ITempo} message Tempo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Tempo.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.time != null && message.hasOwnProperty("time"))
                        writer.uint32(/* id 1, wireType 1 =*/9).double(message.time);
                    if (message.qpm != null && message.hasOwnProperty("qpm"))
                        writer.uint32(/* id 2, wireType 1 =*/17).double(message.qpm);
                    return writer;
                };

                /**
                 * Encodes the specified Tempo message, length delimited. Does not implicitly {@link tensorflow.magenta.NoteSequence.Tempo.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof tensorflow.magenta.NoteSequence.Tempo
                 * @static
                 * @param {tensorflow.magenta.NoteSequence.ITempo} message Tempo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Tempo.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Tempo message from the specified reader or buffer.
                 * @function decode
                 * @memberof tensorflow.magenta.NoteSequence.Tempo
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {tensorflow.magenta.NoteSequence.Tempo} Tempo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Tempo.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tensorflow.magenta.NoteSequence.Tempo();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.time = reader.double();
                            break;
                        case 2:
                            message.qpm = reader.double();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Tempo message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof tensorflow.magenta.NoteSequence.Tempo
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {tensorflow.magenta.NoteSequence.Tempo} Tempo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Tempo.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Tempo message.
                 * @function verify
                 * @memberof tensorflow.magenta.NoteSequence.Tempo
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Tempo.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.time != null && message.hasOwnProperty("time"))
                        if (typeof message.time !== "number")
                            return "time: number expected";
                    if (message.qpm != null && message.hasOwnProperty("qpm"))
                        if (typeof message.qpm !== "number")
                            return "qpm: number expected";
                    return null;
                };

                /**
                 * Creates a Tempo message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof tensorflow.magenta.NoteSequence.Tempo
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {tensorflow.magenta.NoteSequence.Tempo} Tempo
                 */
                Tempo.fromObject = function fromObject(object) {
                    if (object instanceof $root.tensorflow.magenta.NoteSequence.Tempo)
                        return object;
                    var message = new $root.tensorflow.magenta.NoteSequence.Tempo();
                    if (object.time != null)
                        message.time = Number(object.time);
                    if (object.qpm != null)
                        message.qpm = Number(object.qpm);
                    return message;
                };

                /**
                 * Creates a plain object from a Tempo message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof tensorflow.magenta.NoteSequence.Tempo
                 * @static
                 * @param {tensorflow.magenta.NoteSequence.Tempo} message Tempo
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Tempo.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.time = 0;
                        object.qpm = 0;
                    }
                    if (message.time != null && message.hasOwnProperty("time"))
                        object.time = options.json && !isFinite(message.time) ? String(message.time) : message.time;
                    if (message.qpm != null && message.hasOwnProperty("qpm"))
                        object.qpm = options.json && !isFinite(message.qpm) ? String(message.qpm) : message.qpm;
                    return object;
                };

                /**
                 * Converts this Tempo to JSON.
                 * @function toJSON
                 * @memberof tensorflow.magenta.NoteSequence.Tempo
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Tempo.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Tempo;
            })();

            NoteSequence.PitchBend = (function() {

                /**
                 * Properties of a PitchBend.
                 * @memberof tensorflow.magenta.NoteSequence
                 * @interface IPitchBend
                 * @property {number|null} [time] PitchBend time
                 * @property {number|null} [bend] PitchBend bend
                 * @property {number|null} [instrument] PitchBend instrument
                 * @property {number|null} [program] PitchBend program
                 * @property {boolean|null} [isDrum] PitchBend isDrum
                 */

                /**
                 * Constructs a new PitchBend.
                 * @memberof tensorflow.magenta.NoteSequence
                 * @classdesc Represents a PitchBend.
                 * @implements IPitchBend
                 * @constructor
                 * @param {tensorflow.magenta.NoteSequence.IPitchBend=} [properties] Properties to set
                 */
                function PitchBend(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * PitchBend time.
                 * @member {number} time
                 * @memberof tensorflow.magenta.NoteSequence.PitchBend
                 * @instance
                 */
                PitchBend.prototype.time = 0;

                /**
                 * PitchBend bend.
                 * @member {number} bend
                 * @memberof tensorflow.magenta.NoteSequence.PitchBend
                 * @instance
                 */
                PitchBend.prototype.bend = 0;

                /**
                 * PitchBend instrument.
                 * @member {number} instrument
                 * @memberof tensorflow.magenta.NoteSequence.PitchBend
                 * @instance
                 */
                PitchBend.prototype.instrument = 0;

                /**
                 * PitchBend program.
                 * @member {number} program
                 * @memberof tensorflow.magenta.NoteSequence.PitchBend
                 * @instance
                 */
                PitchBend.prototype.program = 0;

                /**
                 * PitchBend isDrum.
                 * @member {boolean} isDrum
                 * @memberof tensorflow.magenta.NoteSequence.PitchBend
                 * @instance
                 */
                PitchBend.prototype.isDrum = false;

                /**
                 * Creates a new PitchBend instance using the specified properties.
                 * @function create
                 * @memberof tensorflow.magenta.NoteSequence.PitchBend
                 * @static
                 * @param {tensorflow.magenta.NoteSequence.IPitchBend=} [properties] Properties to set
                 * @returns {tensorflow.magenta.NoteSequence.PitchBend} PitchBend instance
                 */
                PitchBend.create = function create(properties) {
                    return new PitchBend(properties);
                };

                /**
                 * Encodes the specified PitchBend message. Does not implicitly {@link tensorflow.magenta.NoteSequence.PitchBend.verify|verify} messages.
                 * @function encode
                 * @memberof tensorflow.magenta.NoteSequence.PitchBend
                 * @static
                 * @param {tensorflow.magenta.NoteSequence.IPitchBend} message PitchBend message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                PitchBend.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.time != null && message.hasOwnProperty("time"))
                        writer.uint32(/* id 1, wireType 1 =*/9).double(message.time);
                    if (message.bend != null && message.hasOwnProperty("bend"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.bend);
                    if (message.instrument != null && message.hasOwnProperty("instrument"))
                        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.instrument);
                    if (message.program != null && message.hasOwnProperty("program"))
                        writer.uint32(/* id 4, wireType 0 =*/32).int32(message.program);
                    if (message.isDrum != null && message.hasOwnProperty("isDrum"))
                        writer.uint32(/* id 5, wireType 0 =*/40).bool(message.isDrum);
                    return writer;
                };

                /**
                 * Encodes the specified PitchBend message, length delimited. Does not implicitly {@link tensorflow.magenta.NoteSequence.PitchBend.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof tensorflow.magenta.NoteSequence.PitchBend
                 * @static
                 * @param {tensorflow.magenta.NoteSequence.IPitchBend} message PitchBend message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                PitchBend.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a PitchBend message from the specified reader or buffer.
                 * @function decode
                 * @memberof tensorflow.magenta.NoteSequence.PitchBend
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {tensorflow.magenta.NoteSequence.PitchBend} PitchBend
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                PitchBend.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tensorflow.magenta.NoteSequence.PitchBend();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.time = reader.double();
                            break;
                        case 2:
                            message.bend = reader.int32();
                            break;
                        case 3:
                            message.instrument = reader.int32();
                            break;
                        case 4:
                            message.program = reader.int32();
                            break;
                        case 5:
                            message.isDrum = reader.bool();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a PitchBend message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof tensorflow.magenta.NoteSequence.PitchBend
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {tensorflow.magenta.NoteSequence.PitchBend} PitchBend
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                PitchBend.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a PitchBend message.
                 * @function verify
                 * @memberof tensorflow.magenta.NoteSequence.PitchBend
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                PitchBend.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.time != null && message.hasOwnProperty("time"))
                        if (typeof message.time !== "number")
                            return "time: number expected";
                    if (message.bend != null && message.hasOwnProperty("bend"))
                        if (!$util.isInteger(message.bend))
                            return "bend: integer expected";
                    if (message.instrument != null && message.hasOwnProperty("instrument"))
                        if (!$util.isInteger(message.instrument))
                            return "instrument: integer expected";
                    if (message.program != null && message.hasOwnProperty("program"))
                        if (!$util.isInteger(message.program))
                            return "program: integer expected";
                    if (message.isDrum != null && message.hasOwnProperty("isDrum"))
                        if (typeof message.isDrum !== "boolean")
                            return "isDrum: boolean expected";
                    return null;
                };

                /**
                 * Creates a PitchBend message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof tensorflow.magenta.NoteSequence.PitchBend
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {tensorflow.magenta.NoteSequence.PitchBend} PitchBend
                 */
                PitchBend.fromObject = function fromObject(object) {
                    if (object instanceof $root.tensorflow.magenta.NoteSequence.PitchBend)
                        return object;
                    var message = new $root.tensorflow.magenta.NoteSequence.PitchBend();
                    if (object.time != null)
                        message.time = Number(object.time);
                    if (object.bend != null)
                        message.bend = object.bend | 0;
                    if (object.instrument != null)
                        message.instrument = object.instrument | 0;
                    if (object.program != null)
                        message.program = object.program | 0;
                    if (object.isDrum != null)
                        message.isDrum = Boolean(object.isDrum);
                    return message;
                };

                /**
                 * Creates a plain object from a PitchBend message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof tensorflow.magenta.NoteSequence.PitchBend
                 * @static
                 * @param {tensorflow.magenta.NoteSequence.PitchBend} message PitchBend
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                PitchBend.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.time = 0;
                        object.bend = 0;
                        object.instrument = 0;
                        object.program = 0;
                        object.isDrum = false;
                    }
                    if (message.time != null && message.hasOwnProperty("time"))
                        object.time = options.json && !isFinite(message.time) ? String(message.time) : message.time;
                    if (message.bend != null && message.hasOwnProperty("bend"))
                        object.bend = message.bend;
                    if (message.instrument != null && message.hasOwnProperty("instrument"))
                        object.instrument = message.instrument;
                    if (message.program != null && message.hasOwnProperty("program"))
                        object.program = message.program;
                    if (message.isDrum != null && message.hasOwnProperty("isDrum"))
                        object.isDrum = message.isDrum;
                    return object;
                };

                /**
                 * Converts this PitchBend to JSON.
                 * @function toJSON
                 * @memberof tensorflow.magenta.NoteSequence.PitchBend
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                PitchBend.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return PitchBend;
            })();

            NoteSequence.ControlChange = (function() {

                /**
                 * Properties of a ControlChange.
                 * @memberof tensorflow.magenta.NoteSequence
                 * @interface IControlChange
                 * @property {number|null} [time] ControlChange time
                 * @property {number|null} [quantizedStep] ControlChange quantizedStep
                 * @property {number|null} [controlNumber] ControlChange controlNumber
                 * @property {number|null} [controlValue] ControlChange controlValue
                 * @property {number|null} [instrument] ControlChange instrument
                 * @property {number|null} [program] ControlChange program
                 * @property {boolean|null} [isDrum] ControlChange isDrum
                 */

                /**
                 * Constructs a new ControlChange.
                 * @memberof tensorflow.magenta.NoteSequence
                 * @classdesc Represents a ControlChange.
                 * @implements IControlChange
                 * @constructor
                 * @param {tensorflow.magenta.NoteSequence.IControlChange=} [properties] Properties to set
                 */
                function ControlChange(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * ControlChange time.
                 * @member {number} time
                 * @memberof tensorflow.magenta.NoteSequence.ControlChange
                 * @instance
                 */
                ControlChange.prototype.time = 0;

                /**
                 * ControlChange quantizedStep.
                 * @member {number} quantizedStep
                 * @memberof tensorflow.magenta.NoteSequence.ControlChange
                 * @instance
                 */
                ControlChange.prototype.quantizedStep = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * ControlChange controlNumber.
                 * @member {number} controlNumber
                 * @memberof tensorflow.magenta.NoteSequence.ControlChange
                 * @instance
                 */
                ControlChange.prototype.controlNumber = 0;

                /**
                 * ControlChange controlValue.
                 * @member {number} controlValue
                 * @memberof tensorflow.magenta.NoteSequence.ControlChange
                 * @instance
                 */
                ControlChange.prototype.controlValue = 0;

                /**
                 * ControlChange instrument.
                 * @member {number} instrument
                 * @memberof tensorflow.magenta.NoteSequence.ControlChange
                 * @instance
                 */
                ControlChange.prototype.instrument = 0;

                /**
                 * ControlChange program.
                 * @member {number} program
                 * @memberof tensorflow.magenta.NoteSequence.ControlChange
                 * @instance
                 */
                ControlChange.prototype.program = 0;

                /**
                 * ControlChange isDrum.
                 * @member {boolean} isDrum
                 * @memberof tensorflow.magenta.NoteSequence.ControlChange
                 * @instance
                 */
                ControlChange.prototype.isDrum = false;

                /**
                 * Creates a new ControlChange instance using the specified properties.
                 * @function create
                 * @memberof tensorflow.magenta.NoteSequence.ControlChange
                 * @static
                 * @param {tensorflow.magenta.NoteSequence.IControlChange=} [properties] Properties to set
                 * @returns {tensorflow.magenta.NoteSequence.ControlChange} ControlChange instance
                 */
                ControlChange.create = function create(properties) {
                    return new ControlChange(properties);
                };

                /**
                 * Encodes the specified ControlChange message. Does not implicitly {@link tensorflow.magenta.NoteSequence.ControlChange.verify|verify} messages.
                 * @function encode
                 * @memberof tensorflow.magenta.NoteSequence.ControlChange
                 * @static
                 * @param {tensorflow.magenta.NoteSequence.IControlChange} message ControlChange message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ControlChange.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.time != null && message.hasOwnProperty("time"))
                        writer.uint32(/* id 1, wireType 1 =*/9).double(message.time);
                    if (message.controlNumber != null && message.hasOwnProperty("controlNumber"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.controlNumber);
                    if (message.controlValue != null && message.hasOwnProperty("controlValue"))
                        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.controlValue);
                    if (message.instrument != null && message.hasOwnProperty("instrument"))
                        writer.uint32(/* id 4, wireType 0 =*/32).int32(message.instrument);
                    if (message.program != null && message.hasOwnProperty("program"))
                        writer.uint32(/* id 5, wireType 0 =*/40).int32(message.program);
                    if (message.isDrum != null && message.hasOwnProperty("isDrum"))
                        writer.uint32(/* id 6, wireType 0 =*/48).bool(message.isDrum);
                    if (message.quantizedStep != null && message.hasOwnProperty("quantizedStep"))
                        writer.uint32(/* id 7, wireType 0 =*/56).int64(message.quantizedStep);
                    return writer;
                };

                /**
                 * Encodes the specified ControlChange message, length delimited. Does not implicitly {@link tensorflow.magenta.NoteSequence.ControlChange.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof tensorflow.magenta.NoteSequence.ControlChange
                 * @static
                 * @param {tensorflow.magenta.NoteSequence.IControlChange} message ControlChange message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ControlChange.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a ControlChange message from the specified reader or buffer.
                 * @function decode
                 * @memberof tensorflow.magenta.NoteSequence.ControlChange
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {tensorflow.magenta.NoteSequence.ControlChange} ControlChange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ControlChange.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tensorflow.magenta.NoteSequence.ControlChange();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.time = reader.double();
                            break;
                        case 7:
                            message.quantizedStep = $util.Long?reader.int64().toNumber():reader.int64();
                            break;
                        case 2:
                            message.controlNumber = reader.int32();
                            break;
                        case 3:
                            message.controlValue = reader.int32();
                            break;
                        case 4:
                            message.instrument = reader.int32();
                            break;
                        case 5:
                            message.program = reader.int32();
                            break;
                        case 6:
                            message.isDrum = reader.bool();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a ControlChange message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof tensorflow.magenta.NoteSequence.ControlChange
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {tensorflow.magenta.NoteSequence.ControlChange} ControlChange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ControlChange.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a ControlChange message.
                 * @function verify
                 * @memberof tensorflow.magenta.NoteSequence.ControlChange
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ControlChange.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.time != null && message.hasOwnProperty("time"))
                        if (typeof message.time !== "number")
                            return "time: number expected";
                    if (message.quantizedStep != null && message.hasOwnProperty("quantizedStep"))
                        if (!$util.isInteger(message.quantizedStep) && !(message.quantizedStep && $util.isInteger(message.quantizedStep.low) && $util.isInteger(message.quantizedStep.high)))
                            return "quantizedStep: integer|Long expected";
                    if (message.controlNumber != null && message.hasOwnProperty("controlNumber"))
                        if (!$util.isInteger(message.controlNumber))
                            return "controlNumber: integer expected";
                    if (message.controlValue != null && message.hasOwnProperty("controlValue"))
                        if (!$util.isInteger(message.controlValue))
                            return "controlValue: integer expected";
                    if (message.instrument != null && message.hasOwnProperty("instrument"))
                        if (!$util.isInteger(message.instrument))
                            return "instrument: integer expected";
                    if (message.program != null && message.hasOwnProperty("program"))
                        if (!$util.isInteger(message.program))
                            return "program: integer expected";
                    if (message.isDrum != null && message.hasOwnProperty("isDrum"))
                        if (typeof message.isDrum !== "boolean")
                            return "isDrum: boolean expected";
                    return null;
                };

                /**
                 * Creates a ControlChange message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof tensorflow.magenta.NoteSequence.ControlChange
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {tensorflow.magenta.NoteSequence.ControlChange} ControlChange
                 */
                ControlChange.fromObject = function fromObject(object) {
                    if (object instanceof $root.tensorflow.magenta.NoteSequence.ControlChange)
                        return object;
                    var message = new $root.tensorflow.magenta.NoteSequence.ControlChange();
                    if (object.time != null)
                        message.time = Number(object.time);
                    if (object.quantizedStep != null)
                        if ($util.Long)
                            (message.quantizedStep = $util.Long.fromValue(object.quantizedStep)).unsigned = false;
                        else if (typeof object.quantizedStep === "string")
                            message.quantizedStep = parseInt(object.quantizedStep, 10);
                        else if (typeof object.quantizedStep === "number")
                            message.quantizedStep = object.quantizedStep;
                        else if (typeof object.quantizedStep === "object")
                            message.quantizedStep = new $util.LongBits(object.quantizedStep.low >>> 0, object.quantizedStep.high >>> 0).toNumber();
                    if (object.controlNumber != null)
                        message.controlNumber = object.controlNumber | 0;
                    if (object.controlValue != null)
                        message.controlValue = object.controlValue | 0;
                    if (object.instrument != null)
                        message.instrument = object.instrument | 0;
                    if (object.program != null)
                        message.program = object.program | 0;
                    if (object.isDrum != null)
                        message.isDrum = Boolean(object.isDrum);
                    return message;
                };

                /**
                 * Creates a plain object from a ControlChange message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof tensorflow.magenta.NoteSequence.ControlChange
                 * @static
                 * @param {tensorflow.magenta.NoteSequence.ControlChange} message ControlChange
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ControlChange.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.time = 0;
                        object.controlNumber = 0;
                        object.controlValue = 0;
                        object.instrument = 0;
                        object.program = 0;
                        object.isDrum = false;
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.quantizedStep = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.quantizedStep = options.longs === String ? "0" : 0;
                    }
                    if (message.time != null && message.hasOwnProperty("time"))
                        object.time = options.json && !isFinite(message.time) ? String(message.time) : message.time;
                    if (message.controlNumber != null && message.hasOwnProperty("controlNumber"))
                        object.controlNumber = message.controlNumber;
                    if (message.controlValue != null && message.hasOwnProperty("controlValue"))
                        object.controlValue = message.controlValue;
                    if (message.instrument != null && message.hasOwnProperty("instrument"))
                        object.instrument = message.instrument;
                    if (message.program != null && message.hasOwnProperty("program"))
                        object.program = message.program;
                    if (message.isDrum != null && message.hasOwnProperty("isDrum"))
                        object.isDrum = message.isDrum;
                    if (message.quantizedStep != null && message.hasOwnProperty("quantizedStep"))
                        if (typeof message.quantizedStep === "number")
                            object.quantizedStep = options.longs === String ? String(message.quantizedStep) : message.quantizedStep;
                        else
                            object.quantizedStep = options.longs === String ? $util.Long.prototype.toString.call(message.quantizedStep) : options.longs === Number ? new $util.LongBits(message.quantizedStep.low >>> 0, message.quantizedStep.high >>> 0).toNumber() : message.quantizedStep;
                    return object;
                };

                /**
                 * Converts this ControlChange to JSON.
                 * @function toJSON
                 * @memberof tensorflow.magenta.NoteSequence.ControlChange
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ControlChange.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return ControlChange;
            })();

            NoteSequence.PartInfo = (function() {

                /**
                 * Properties of a PartInfo.
                 * @memberof tensorflow.magenta.NoteSequence
                 * @interface IPartInfo
                 * @property {number|null} [part] PartInfo part
                 * @property {string|null} [name] PartInfo name
                 */

                /**
                 * Constructs a new PartInfo.
                 * @memberof tensorflow.magenta.NoteSequence
                 * @classdesc Represents a PartInfo.
                 * @implements IPartInfo
                 * @constructor
                 * @param {tensorflow.magenta.NoteSequence.IPartInfo=} [properties] Properties to set
                 */
                function PartInfo(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * PartInfo part.
                 * @member {number} part
                 * @memberof tensorflow.magenta.NoteSequence.PartInfo
                 * @instance
                 */
                PartInfo.prototype.part = 0;

                /**
                 * PartInfo name.
                 * @member {string} name
                 * @memberof tensorflow.magenta.NoteSequence.PartInfo
                 * @instance
                 */
                PartInfo.prototype.name = "";

                /**
                 * Creates a new PartInfo instance using the specified properties.
                 * @function create
                 * @memberof tensorflow.magenta.NoteSequence.PartInfo
                 * @static
                 * @param {tensorflow.magenta.NoteSequence.IPartInfo=} [properties] Properties to set
                 * @returns {tensorflow.magenta.NoteSequence.PartInfo} PartInfo instance
                 */
                PartInfo.create = function create(properties) {
                    return new PartInfo(properties);
                };

                /**
                 * Encodes the specified PartInfo message. Does not implicitly {@link tensorflow.magenta.NoteSequence.PartInfo.verify|verify} messages.
                 * @function encode
                 * @memberof tensorflow.magenta.NoteSequence.PartInfo
                 * @static
                 * @param {tensorflow.magenta.NoteSequence.IPartInfo} message PartInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                PartInfo.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.part != null && message.hasOwnProperty("part"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.part);
                    if (message.name != null && message.hasOwnProperty("name"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
                    return writer;
                };

                /**
                 * Encodes the specified PartInfo message, length delimited. Does not implicitly {@link tensorflow.magenta.NoteSequence.PartInfo.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof tensorflow.magenta.NoteSequence.PartInfo
                 * @static
                 * @param {tensorflow.magenta.NoteSequence.IPartInfo} message PartInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                PartInfo.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a PartInfo message from the specified reader or buffer.
                 * @function decode
                 * @memberof tensorflow.magenta.NoteSequence.PartInfo
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {tensorflow.magenta.NoteSequence.PartInfo} PartInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                PartInfo.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tensorflow.magenta.NoteSequence.PartInfo();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.part = reader.int32();
                            break;
                        case 2:
                            message.name = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a PartInfo message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof tensorflow.magenta.NoteSequence.PartInfo
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {tensorflow.magenta.NoteSequence.PartInfo} PartInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                PartInfo.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a PartInfo message.
                 * @function verify
                 * @memberof tensorflow.magenta.NoteSequence.PartInfo
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                PartInfo.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.part != null && message.hasOwnProperty("part"))
                        if (!$util.isInteger(message.part))
                            return "part: integer expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    return null;
                };

                /**
                 * Creates a PartInfo message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof tensorflow.magenta.NoteSequence.PartInfo
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {tensorflow.magenta.NoteSequence.PartInfo} PartInfo
                 */
                PartInfo.fromObject = function fromObject(object) {
                    if (object instanceof $root.tensorflow.magenta.NoteSequence.PartInfo)
                        return object;
                    var message = new $root.tensorflow.magenta.NoteSequence.PartInfo();
                    if (object.part != null)
                        message.part = object.part | 0;
                    if (object.name != null)
                        message.name = String(object.name);
                    return message;
                };

                /**
                 * Creates a plain object from a PartInfo message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof tensorflow.magenta.NoteSequence.PartInfo
                 * @static
                 * @param {tensorflow.magenta.NoteSequence.PartInfo} message PartInfo
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                PartInfo.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.part = 0;
                        object.name = "";
                    }
                    if (message.part != null && message.hasOwnProperty("part"))
                        object.part = message.part;
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    return object;
                };

                /**
                 * Converts this PartInfo to JSON.
                 * @function toJSON
                 * @memberof tensorflow.magenta.NoteSequence.PartInfo
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                PartInfo.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return PartInfo;
            })();

            NoteSequence.SourceInfo = (function() {

                /**
                 * Properties of a SourceInfo.
                 * @memberof tensorflow.magenta.NoteSequence
                 * @interface ISourceInfo
                 * @property {tensorflow.magenta.NoteSequence.SourceInfo.SourceType|null} [sourceType] SourceInfo sourceType
                 * @property {tensorflow.magenta.NoteSequence.SourceInfo.EncodingType|null} [encodingType] SourceInfo encodingType
                 * @property {tensorflow.magenta.NoteSequence.SourceInfo.Parser|null} [parser] SourceInfo parser
                 */

                /**
                 * Constructs a new SourceInfo.
                 * @memberof tensorflow.magenta.NoteSequence
                 * @classdesc Represents a SourceInfo.
                 * @implements ISourceInfo
                 * @constructor
                 * @param {tensorflow.magenta.NoteSequence.ISourceInfo=} [properties] Properties to set
                 */
                function SourceInfo(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * SourceInfo sourceType.
                 * @member {tensorflow.magenta.NoteSequence.SourceInfo.SourceType} sourceType
                 * @memberof tensorflow.magenta.NoteSequence.SourceInfo
                 * @instance
                 */
                SourceInfo.prototype.sourceType = 0;

                /**
                 * SourceInfo encodingType.
                 * @member {tensorflow.magenta.NoteSequence.SourceInfo.EncodingType} encodingType
                 * @memberof tensorflow.magenta.NoteSequence.SourceInfo
                 * @instance
                 */
                SourceInfo.prototype.encodingType = 0;

                /**
                 * SourceInfo parser.
                 * @member {tensorflow.magenta.NoteSequence.SourceInfo.Parser} parser
                 * @memberof tensorflow.magenta.NoteSequence.SourceInfo
                 * @instance
                 */
                SourceInfo.prototype.parser = 0;

                /**
                 * Creates a new SourceInfo instance using the specified properties.
                 * @function create
                 * @memberof tensorflow.magenta.NoteSequence.SourceInfo
                 * @static
                 * @param {tensorflow.magenta.NoteSequence.ISourceInfo=} [properties] Properties to set
                 * @returns {tensorflow.magenta.NoteSequence.SourceInfo} SourceInfo instance
                 */
                SourceInfo.create = function create(properties) {
                    return new SourceInfo(properties);
                };

                /**
                 * Encodes the specified SourceInfo message. Does not implicitly {@link tensorflow.magenta.NoteSequence.SourceInfo.verify|verify} messages.
                 * @function encode
                 * @memberof tensorflow.magenta.NoteSequence.SourceInfo
                 * @static
                 * @param {tensorflow.magenta.NoteSequence.ISourceInfo} message SourceInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SourceInfo.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.sourceType != null && message.hasOwnProperty("sourceType"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.sourceType);
                    if (message.encodingType != null && message.hasOwnProperty("encodingType"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.encodingType);
                    if (message.parser != null && message.hasOwnProperty("parser"))
                        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.parser);
                    return writer;
                };

                /**
                 * Encodes the specified SourceInfo message, length delimited. Does not implicitly {@link tensorflow.magenta.NoteSequence.SourceInfo.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof tensorflow.magenta.NoteSequence.SourceInfo
                 * @static
                 * @param {tensorflow.magenta.NoteSequence.ISourceInfo} message SourceInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SourceInfo.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a SourceInfo message from the specified reader or buffer.
                 * @function decode
                 * @memberof tensorflow.magenta.NoteSequence.SourceInfo
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {tensorflow.magenta.NoteSequence.SourceInfo} SourceInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SourceInfo.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tensorflow.magenta.NoteSequence.SourceInfo();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.sourceType = reader.int32();
                            break;
                        case 2:
                            message.encodingType = reader.int32();
                            break;
                        case 3:
                            message.parser = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a SourceInfo message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof tensorflow.magenta.NoteSequence.SourceInfo
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {tensorflow.magenta.NoteSequence.SourceInfo} SourceInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SourceInfo.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a SourceInfo message.
                 * @function verify
                 * @memberof tensorflow.magenta.NoteSequence.SourceInfo
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                SourceInfo.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.sourceType != null && message.hasOwnProperty("sourceType"))
                        switch (message.sourceType) {
                        default:
                            return "sourceType: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                            break;
                        }
                    if (message.encodingType != null && message.hasOwnProperty("encodingType"))
                        switch (message.encodingType) {
                        default:
                            return "encodingType: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                            break;
                        }
                    if (message.parser != null && message.hasOwnProperty("parser"))
                        switch (message.parser) {
                        default:
                            return "parser: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                        case 6:
                            break;
                        }
                    return null;
                };

                /**
                 * Creates a SourceInfo message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof tensorflow.magenta.NoteSequence.SourceInfo
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {tensorflow.magenta.NoteSequence.SourceInfo} SourceInfo
                 */
                SourceInfo.fromObject = function fromObject(object) {
                    if (object instanceof $root.tensorflow.magenta.NoteSequence.SourceInfo)
                        return object;
                    var message = new $root.tensorflow.magenta.NoteSequence.SourceInfo();
                    switch (object.sourceType) {
                    case "UNKNOWN_SOURCE_TYPE":
                    case 0:
                        message.sourceType = 0;
                        break;
                    case "SCORE_BASED":
                    case 1:
                        message.sourceType = 1;
                        break;
                    case "PERFORMANCE_BASED":
                    case 2:
                        message.sourceType = 2;
                        break;
                    }
                    switch (object.encodingType) {
                    case "UNKNOWN_ENCODING_TYPE":
                    case 0:
                        message.encodingType = 0;
                        break;
                    case "MUSIC_XML":
                    case 1:
                        message.encodingType = 1;
                        break;
                    case "ABC":
                    case 2:
                        message.encodingType = 2;
                        break;
                    case "MIDI":
                    case 3:
                        message.encodingType = 3;
                        break;
                    case "MUSICNET":
                    case 4:
                        message.encodingType = 4;
                        break;
                    }
                    switch (object.parser) {
                    case "UNKNOWN_PARSER":
                    case 0:
                        message.parser = 0;
                        break;
                    case "MUSIC21":
                    case 1:
                        message.parser = 1;
                        break;
                    case "PRETTY_MIDI":
                    case 2:
                        message.parser = 2;
                        break;
                    case "MAGENTA_MUSIC_XML":
                    case 3:
                        message.parser = 3;
                        break;
                    case "MAGENTA_MUSICNET":
                    case 4:
                        message.parser = 4;
                        break;
                    case "MAGENTA_ABC":
                    case 5:
                        message.parser = 5;
                        break;
                    case "TONEJS_MIDI_CONVERT":
                    case 6:
                        message.parser = 6;
                        break;
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a SourceInfo message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof tensorflow.magenta.NoteSequence.SourceInfo
                 * @static
                 * @param {tensorflow.magenta.NoteSequence.SourceInfo} message SourceInfo
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                SourceInfo.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.sourceType = options.enums === String ? "UNKNOWN_SOURCE_TYPE" : 0;
                        object.encodingType = options.enums === String ? "UNKNOWN_ENCODING_TYPE" : 0;
                        object.parser = options.enums === String ? "UNKNOWN_PARSER" : 0;
                    }
                    if (message.sourceType != null && message.hasOwnProperty("sourceType"))
                        object.sourceType = options.enums === String ? $root.tensorflow.magenta.NoteSequence.SourceInfo.SourceType[message.sourceType] : message.sourceType;
                    if (message.encodingType != null && message.hasOwnProperty("encodingType"))
                        object.encodingType = options.enums === String ? $root.tensorflow.magenta.NoteSequence.SourceInfo.EncodingType[message.encodingType] : message.encodingType;
                    if (message.parser != null && message.hasOwnProperty("parser"))
                        object.parser = options.enums === String ? $root.tensorflow.magenta.NoteSequence.SourceInfo.Parser[message.parser] : message.parser;
                    return object;
                };

                /**
                 * Converts this SourceInfo to JSON.
                 * @function toJSON
                 * @memberof tensorflow.magenta.NoteSequence.SourceInfo
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                SourceInfo.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * SourceType enum.
                 * @name tensorflow.magenta.NoteSequence.SourceInfo.SourceType
                 * @enum {string}
                 * @property {number} UNKNOWN_SOURCE_TYPE=0 UNKNOWN_SOURCE_TYPE value
                 * @property {number} SCORE_BASED=1 SCORE_BASED value
                 * @property {number} PERFORMANCE_BASED=2 PERFORMANCE_BASED value
                 */
                SourceInfo.SourceType = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "UNKNOWN_SOURCE_TYPE"] = 0;
                    values[valuesById[1] = "SCORE_BASED"] = 1;
                    values[valuesById[2] = "PERFORMANCE_BASED"] = 2;
                    return values;
                })();

                /**
                 * EncodingType enum.
                 * @name tensorflow.magenta.NoteSequence.SourceInfo.EncodingType
                 * @enum {string}
                 * @property {number} UNKNOWN_ENCODING_TYPE=0 UNKNOWN_ENCODING_TYPE value
                 * @property {number} MUSIC_XML=1 MUSIC_XML value
                 * @property {number} ABC=2 ABC value
                 * @property {number} MIDI=3 MIDI value
                 * @property {number} MUSICNET=4 MUSICNET value
                 */
                SourceInfo.EncodingType = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "UNKNOWN_ENCODING_TYPE"] = 0;
                    values[valuesById[1] = "MUSIC_XML"] = 1;
                    values[valuesById[2] = "ABC"] = 2;
                    values[valuesById[3] = "MIDI"] = 3;
                    values[valuesById[4] = "MUSICNET"] = 4;
                    return values;
                })();

                /**
                 * Parser enum.
                 * @name tensorflow.magenta.NoteSequence.SourceInfo.Parser
                 * @enum {string}
                 * @property {number} UNKNOWN_PARSER=0 UNKNOWN_PARSER value
                 * @property {number} MUSIC21=1 MUSIC21 value
                 * @property {number} PRETTY_MIDI=2 PRETTY_MIDI value
                 * @property {number} MAGENTA_MUSIC_XML=3 MAGENTA_MUSIC_XML value
                 * @property {number} MAGENTA_MUSICNET=4 MAGENTA_MUSICNET value
                 * @property {number} MAGENTA_ABC=5 MAGENTA_ABC value
                 * @property {number} TONEJS_MIDI_CONVERT=6 TONEJS_MIDI_CONVERT value
                 */
                SourceInfo.Parser = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "UNKNOWN_PARSER"] = 0;
                    values[valuesById[1] = "MUSIC21"] = 1;
                    values[valuesById[2] = "PRETTY_MIDI"] = 2;
                    values[valuesById[3] = "MAGENTA_MUSIC_XML"] = 3;
                    values[valuesById[4] = "MAGENTA_MUSICNET"] = 4;
                    values[valuesById[5] = "MAGENTA_ABC"] = 5;
                    values[valuesById[6] = "TONEJS_MIDI_CONVERT"] = 6;
                    return values;
                })();

                return SourceInfo;
            })();

            NoteSequence.TextAnnotation = (function() {

                /**
                 * Properties of a TextAnnotation.
                 * @memberof tensorflow.magenta.NoteSequence
                 * @interface ITextAnnotation
                 * @property {number|null} [time] TextAnnotation time
                 * @property {number|null} [quantizedStep] TextAnnotation quantizedStep
                 * @property {string|null} [text] TextAnnotation text
                 * @property {tensorflow.magenta.NoteSequence.TextAnnotation.TextAnnotationType|null} [annotationType] TextAnnotation annotationType
                 */

                /**
                 * Constructs a new TextAnnotation.
                 * @memberof tensorflow.magenta.NoteSequence
                 * @classdesc Represents a TextAnnotation.
                 * @implements ITextAnnotation
                 * @constructor
                 * @param {tensorflow.magenta.NoteSequence.ITextAnnotation=} [properties] Properties to set
                 */
                function TextAnnotation(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * TextAnnotation time.
                 * @member {number} time
                 * @memberof tensorflow.magenta.NoteSequence.TextAnnotation
                 * @instance
                 */
                TextAnnotation.prototype.time = 0;

                /**
                 * TextAnnotation quantizedStep.
                 * @member {number} quantizedStep
                 * @memberof tensorflow.magenta.NoteSequence.TextAnnotation
                 * @instance
                 */
                TextAnnotation.prototype.quantizedStep = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * TextAnnotation text.
                 * @member {string} text
                 * @memberof tensorflow.magenta.NoteSequence.TextAnnotation
                 * @instance
                 */
                TextAnnotation.prototype.text = "";

                /**
                 * TextAnnotation annotationType.
                 * @member {tensorflow.magenta.NoteSequence.TextAnnotation.TextAnnotationType} annotationType
                 * @memberof tensorflow.magenta.NoteSequence.TextAnnotation
                 * @instance
                 */
                TextAnnotation.prototype.annotationType = 0;

                /**
                 * Creates a new TextAnnotation instance using the specified properties.
                 * @function create
                 * @memberof tensorflow.magenta.NoteSequence.TextAnnotation
                 * @static
                 * @param {tensorflow.magenta.NoteSequence.ITextAnnotation=} [properties] Properties to set
                 * @returns {tensorflow.magenta.NoteSequence.TextAnnotation} TextAnnotation instance
                 */
                TextAnnotation.create = function create(properties) {
                    return new TextAnnotation(properties);
                };

                /**
                 * Encodes the specified TextAnnotation message. Does not implicitly {@link tensorflow.magenta.NoteSequence.TextAnnotation.verify|verify} messages.
                 * @function encode
                 * @memberof tensorflow.magenta.NoteSequence.TextAnnotation
                 * @static
                 * @param {tensorflow.magenta.NoteSequence.ITextAnnotation} message TextAnnotation message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                TextAnnotation.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.time != null && message.hasOwnProperty("time"))
                        writer.uint32(/* id 1, wireType 1 =*/9).double(message.time);
                    if (message.text != null && message.hasOwnProperty("text"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.text);
                    if (message.annotationType != null && message.hasOwnProperty("annotationType"))
                        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.annotationType);
                    if (message.quantizedStep != null && message.hasOwnProperty("quantizedStep"))
                        writer.uint32(/* id 4, wireType 0 =*/32).int64(message.quantizedStep);
                    return writer;
                };

                /**
                 * Encodes the specified TextAnnotation message, length delimited. Does not implicitly {@link tensorflow.magenta.NoteSequence.TextAnnotation.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof tensorflow.magenta.NoteSequence.TextAnnotation
                 * @static
                 * @param {tensorflow.magenta.NoteSequence.ITextAnnotation} message TextAnnotation message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                TextAnnotation.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a TextAnnotation message from the specified reader or buffer.
                 * @function decode
                 * @memberof tensorflow.magenta.NoteSequence.TextAnnotation
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {tensorflow.magenta.NoteSequence.TextAnnotation} TextAnnotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                TextAnnotation.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tensorflow.magenta.NoteSequence.TextAnnotation();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.time = reader.double();
                            break;
                        case 4:
                            message.quantizedStep = $util.Long?reader.int64().toNumber():reader.int64();
                            break;
                        case 2:
                            message.text = reader.string();
                            break;
                        case 3:
                            message.annotationType = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a TextAnnotation message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof tensorflow.magenta.NoteSequence.TextAnnotation
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {tensorflow.magenta.NoteSequence.TextAnnotation} TextAnnotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                TextAnnotation.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a TextAnnotation message.
                 * @function verify
                 * @memberof tensorflow.magenta.NoteSequence.TextAnnotation
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                TextAnnotation.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.time != null && message.hasOwnProperty("time"))
                        if (typeof message.time !== "number")
                            return "time: number expected";
                    if (message.quantizedStep != null && message.hasOwnProperty("quantizedStep"))
                        if (!$util.isInteger(message.quantizedStep) && !(message.quantizedStep && $util.isInteger(message.quantizedStep.low) && $util.isInteger(message.quantizedStep.high)))
                            return "quantizedStep: integer|Long expected";
                    if (message.text != null && message.hasOwnProperty("text"))
                        if (!$util.isString(message.text))
                            return "text: string expected";
                    if (message.annotationType != null && message.hasOwnProperty("annotationType"))
                        switch (message.annotationType) {
                        default:
                            return "annotationType: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                            break;
                        }
                    return null;
                };

                /**
                 * Creates a TextAnnotation message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof tensorflow.magenta.NoteSequence.TextAnnotation
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {tensorflow.magenta.NoteSequence.TextAnnotation} TextAnnotation
                 */
                TextAnnotation.fromObject = function fromObject(object) {
                    if (object instanceof $root.tensorflow.magenta.NoteSequence.TextAnnotation)
                        return object;
                    var message = new $root.tensorflow.magenta.NoteSequence.TextAnnotation();
                    if (object.time != null)
                        message.time = Number(object.time);
                    if (object.quantizedStep != null)
                        if ($util.Long)
                            (message.quantizedStep = $util.Long.fromValue(object.quantizedStep)).unsigned = false;
                        else if (typeof object.quantizedStep === "string")
                            message.quantizedStep = parseInt(object.quantizedStep, 10);
                        else if (typeof object.quantizedStep === "number")
                            message.quantizedStep = object.quantizedStep;
                        else if (typeof object.quantizedStep === "object")
                            message.quantizedStep = new $util.LongBits(object.quantizedStep.low >>> 0, object.quantizedStep.high >>> 0).toNumber();
                    if (object.text != null)
                        message.text = String(object.text);
                    switch (object.annotationType) {
                    case "UNKNOWN":
                    case 0:
                        message.annotationType = 0;
                        break;
                    case "CHORD_SYMBOL":
                    case 1:
                        message.annotationType = 1;
                        break;
                    case "BEAT":
                    case 2:
                        message.annotationType = 2;
                        break;
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a TextAnnotation message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof tensorflow.magenta.NoteSequence.TextAnnotation
                 * @static
                 * @param {tensorflow.magenta.NoteSequence.TextAnnotation} message TextAnnotation
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                TextAnnotation.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.time = 0;
                        object.text = "";
                        object.annotationType = options.enums === String ? "UNKNOWN" : 0;
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.quantizedStep = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.quantizedStep = options.longs === String ? "0" : 0;
                    }
                    if (message.time != null && message.hasOwnProperty("time"))
                        object.time = options.json && !isFinite(message.time) ? String(message.time) : message.time;
                    if (message.text != null && message.hasOwnProperty("text"))
                        object.text = message.text;
                    if (message.annotationType != null && message.hasOwnProperty("annotationType"))
                        object.annotationType = options.enums === String ? $root.tensorflow.magenta.NoteSequence.TextAnnotation.TextAnnotationType[message.annotationType] : message.annotationType;
                    if (message.quantizedStep != null && message.hasOwnProperty("quantizedStep"))
                        if (typeof message.quantizedStep === "number")
                            object.quantizedStep = options.longs === String ? String(message.quantizedStep) : message.quantizedStep;
                        else
                            object.quantizedStep = options.longs === String ? $util.Long.prototype.toString.call(message.quantizedStep) : options.longs === Number ? new $util.LongBits(message.quantizedStep.low >>> 0, message.quantizedStep.high >>> 0).toNumber() : message.quantizedStep;
                    return object;
                };

                /**
                 * Converts this TextAnnotation to JSON.
                 * @function toJSON
                 * @memberof tensorflow.magenta.NoteSequence.TextAnnotation
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                TextAnnotation.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * TextAnnotationType enum.
                 * @name tensorflow.magenta.NoteSequence.TextAnnotation.TextAnnotationType
                 * @enum {string}
                 * @property {number} UNKNOWN=0 UNKNOWN value
                 * @property {number} CHORD_SYMBOL=1 CHORD_SYMBOL value
                 * @property {number} BEAT=2 BEAT value
                 */
                TextAnnotation.TextAnnotationType = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "UNKNOWN"] = 0;
                    values[valuesById[1] = "CHORD_SYMBOL"] = 1;
                    values[valuesById[2] = "BEAT"] = 2;
                    return values;
                })();

                return TextAnnotation;
            })();

            NoteSequence.QuantizationInfo = (function() {

                /**
                 * Properties of a QuantizationInfo.
                 * @memberof tensorflow.magenta.NoteSequence
                 * @interface IQuantizationInfo
                 * @property {number|null} [stepsPerQuarter] QuantizationInfo stepsPerQuarter
                 * @property {number|null} [stepsPerSecond] QuantizationInfo stepsPerSecond
                 */

                /**
                 * Constructs a new QuantizationInfo.
                 * @memberof tensorflow.magenta.NoteSequence
                 * @classdesc Represents a QuantizationInfo.
                 * @implements IQuantizationInfo
                 * @constructor
                 * @param {tensorflow.magenta.NoteSequence.IQuantizationInfo=} [properties] Properties to set
                 */
                function QuantizationInfo(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * QuantizationInfo stepsPerQuarter.
                 * @member {number} stepsPerQuarter
                 * @memberof tensorflow.magenta.NoteSequence.QuantizationInfo
                 * @instance
                 */
                QuantizationInfo.prototype.stepsPerQuarter = 0;

                /**
                 * QuantizationInfo stepsPerSecond.
                 * @member {number} stepsPerSecond
                 * @memberof tensorflow.magenta.NoteSequence.QuantizationInfo
                 * @instance
                 */
                QuantizationInfo.prototype.stepsPerSecond = 0;

                // OneOf field names bound to virtual getters and setters
                var $oneOfFields;

                /**
                 * QuantizationInfo resolution.
                 * @member {"stepsPerQuarter"|"stepsPerSecond"|undefined} resolution
                 * @memberof tensorflow.magenta.NoteSequence.QuantizationInfo
                 * @instance
                 */
                Object.defineProperty(QuantizationInfo.prototype, "resolution", {
                    get: $util.oneOfGetter($oneOfFields = ["stepsPerQuarter", "stepsPerSecond"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                /**
                 * Creates a new QuantizationInfo instance using the specified properties.
                 * @function create
                 * @memberof tensorflow.magenta.NoteSequence.QuantizationInfo
                 * @static
                 * @param {tensorflow.magenta.NoteSequence.IQuantizationInfo=} [properties] Properties to set
                 * @returns {tensorflow.magenta.NoteSequence.QuantizationInfo} QuantizationInfo instance
                 */
                QuantizationInfo.create = function create(properties) {
                    return new QuantizationInfo(properties);
                };

                /**
                 * Encodes the specified QuantizationInfo message. Does not implicitly {@link tensorflow.magenta.NoteSequence.QuantizationInfo.verify|verify} messages.
                 * @function encode
                 * @memberof tensorflow.magenta.NoteSequence.QuantizationInfo
                 * @static
                 * @param {tensorflow.magenta.NoteSequence.IQuantizationInfo} message QuantizationInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                QuantizationInfo.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.stepsPerQuarter != null && message.hasOwnProperty("stepsPerQuarter"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.stepsPerQuarter);
                    if (message.stepsPerSecond != null && message.hasOwnProperty("stepsPerSecond"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.stepsPerSecond);
                    return writer;
                };

                /**
                 * Encodes the specified QuantizationInfo message, length delimited. Does not implicitly {@link tensorflow.magenta.NoteSequence.QuantizationInfo.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof tensorflow.magenta.NoteSequence.QuantizationInfo
                 * @static
                 * @param {tensorflow.magenta.NoteSequence.IQuantizationInfo} message QuantizationInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                QuantizationInfo.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a QuantizationInfo message from the specified reader or buffer.
                 * @function decode
                 * @memberof tensorflow.magenta.NoteSequence.QuantizationInfo
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {tensorflow.magenta.NoteSequence.QuantizationInfo} QuantizationInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                QuantizationInfo.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tensorflow.magenta.NoteSequence.QuantizationInfo();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.stepsPerQuarter = reader.int32();
                            break;
                        case 2:
                            message.stepsPerSecond = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a QuantizationInfo message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof tensorflow.magenta.NoteSequence.QuantizationInfo
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {tensorflow.magenta.NoteSequence.QuantizationInfo} QuantizationInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                QuantizationInfo.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a QuantizationInfo message.
                 * @function verify
                 * @memberof tensorflow.magenta.NoteSequence.QuantizationInfo
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                QuantizationInfo.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    var properties = {};
                    if (message.stepsPerQuarter != null && message.hasOwnProperty("stepsPerQuarter")) {
                        properties.resolution = 1;
                        if (!$util.isInteger(message.stepsPerQuarter))
                            return "stepsPerQuarter: integer expected";
                    }
                    if (message.stepsPerSecond != null && message.hasOwnProperty("stepsPerSecond")) {
                        if (properties.resolution === 1)
                            return "resolution: multiple values";
                        properties.resolution = 1;
                        if (!$util.isInteger(message.stepsPerSecond))
                            return "stepsPerSecond: integer expected";
                    }
                    return null;
                };

                /**
                 * Creates a QuantizationInfo message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof tensorflow.magenta.NoteSequence.QuantizationInfo
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {tensorflow.magenta.NoteSequence.QuantizationInfo} QuantizationInfo
                 */
                QuantizationInfo.fromObject = function fromObject(object) {
                    if (object instanceof $root.tensorflow.magenta.NoteSequence.QuantizationInfo)
                        return object;
                    var message = new $root.tensorflow.magenta.NoteSequence.QuantizationInfo();
                    if (object.stepsPerQuarter != null)
                        message.stepsPerQuarter = object.stepsPerQuarter | 0;
                    if (object.stepsPerSecond != null)
                        message.stepsPerSecond = object.stepsPerSecond | 0;
                    return message;
                };

                /**
                 * Creates a plain object from a QuantizationInfo message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof tensorflow.magenta.NoteSequence.QuantizationInfo
                 * @static
                 * @param {tensorflow.magenta.NoteSequence.QuantizationInfo} message QuantizationInfo
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                QuantizationInfo.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (message.stepsPerQuarter != null && message.hasOwnProperty("stepsPerQuarter")) {
                        object.stepsPerQuarter = message.stepsPerQuarter;
                        if (options.oneofs)
                            object.resolution = "stepsPerQuarter";
                    }
                    if (message.stepsPerSecond != null && message.hasOwnProperty("stepsPerSecond")) {
                        object.stepsPerSecond = message.stepsPerSecond;
                        if (options.oneofs)
                            object.resolution = "stepsPerSecond";
                    }
                    return object;
                };

                /**
                 * Converts this QuantizationInfo to JSON.
                 * @function toJSON
                 * @memberof tensorflow.magenta.NoteSequence.QuantizationInfo
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                QuantizationInfo.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return QuantizationInfo;
            })();

            NoteSequence.SubsequenceInfo = (function() {

                /**
                 * Properties of a SubsequenceInfo.
                 * @memberof tensorflow.magenta.NoteSequence
                 * @interface ISubsequenceInfo
                 * @property {number|null} [startTimeOffset] SubsequenceInfo startTimeOffset
                 * @property {number|null} [endTimeOffset] SubsequenceInfo endTimeOffset
                 */

                /**
                 * Constructs a new SubsequenceInfo.
                 * @memberof tensorflow.magenta.NoteSequence
                 * @classdesc Represents a SubsequenceInfo.
                 * @implements ISubsequenceInfo
                 * @constructor
                 * @param {tensorflow.magenta.NoteSequence.ISubsequenceInfo=} [properties] Properties to set
                 */
                function SubsequenceInfo(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * SubsequenceInfo startTimeOffset.
                 * @member {number} startTimeOffset
                 * @memberof tensorflow.magenta.NoteSequence.SubsequenceInfo
                 * @instance
                 */
                SubsequenceInfo.prototype.startTimeOffset = 0;

                /**
                 * SubsequenceInfo endTimeOffset.
                 * @member {number} endTimeOffset
                 * @memberof tensorflow.magenta.NoteSequence.SubsequenceInfo
                 * @instance
                 */
                SubsequenceInfo.prototype.endTimeOffset = 0;

                /**
                 * Creates a new SubsequenceInfo instance using the specified properties.
                 * @function create
                 * @memberof tensorflow.magenta.NoteSequence.SubsequenceInfo
                 * @static
                 * @param {tensorflow.magenta.NoteSequence.ISubsequenceInfo=} [properties] Properties to set
                 * @returns {tensorflow.magenta.NoteSequence.SubsequenceInfo} SubsequenceInfo instance
                 */
                SubsequenceInfo.create = function create(properties) {
                    return new SubsequenceInfo(properties);
                };

                /**
                 * Encodes the specified SubsequenceInfo message. Does not implicitly {@link tensorflow.magenta.NoteSequence.SubsequenceInfo.verify|verify} messages.
                 * @function encode
                 * @memberof tensorflow.magenta.NoteSequence.SubsequenceInfo
                 * @static
                 * @param {tensorflow.magenta.NoteSequence.ISubsequenceInfo} message SubsequenceInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SubsequenceInfo.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.startTimeOffset != null && message.hasOwnProperty("startTimeOffset"))
                        writer.uint32(/* id 1, wireType 1 =*/9).double(message.startTimeOffset);
                    if (message.endTimeOffset != null && message.hasOwnProperty("endTimeOffset"))
                        writer.uint32(/* id 2, wireType 1 =*/17).double(message.endTimeOffset);
                    return writer;
                };

                /**
                 * Encodes the specified SubsequenceInfo message, length delimited. Does not implicitly {@link tensorflow.magenta.NoteSequence.SubsequenceInfo.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof tensorflow.magenta.NoteSequence.SubsequenceInfo
                 * @static
                 * @param {tensorflow.magenta.NoteSequence.ISubsequenceInfo} message SubsequenceInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SubsequenceInfo.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a SubsequenceInfo message from the specified reader or buffer.
                 * @function decode
                 * @memberof tensorflow.magenta.NoteSequence.SubsequenceInfo
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {tensorflow.magenta.NoteSequence.SubsequenceInfo} SubsequenceInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SubsequenceInfo.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tensorflow.magenta.NoteSequence.SubsequenceInfo();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.startTimeOffset = reader.double();
                            break;
                        case 2:
                            message.endTimeOffset = reader.double();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a SubsequenceInfo message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof tensorflow.magenta.NoteSequence.SubsequenceInfo
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {tensorflow.magenta.NoteSequence.SubsequenceInfo} SubsequenceInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SubsequenceInfo.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a SubsequenceInfo message.
                 * @function verify
                 * @memberof tensorflow.magenta.NoteSequence.SubsequenceInfo
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                SubsequenceInfo.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.startTimeOffset != null && message.hasOwnProperty("startTimeOffset"))
                        if (typeof message.startTimeOffset !== "number")
                            return "startTimeOffset: number expected";
                    if (message.endTimeOffset != null && message.hasOwnProperty("endTimeOffset"))
                        if (typeof message.endTimeOffset !== "number")
                            return "endTimeOffset: number expected";
                    return null;
                };

                /**
                 * Creates a SubsequenceInfo message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof tensorflow.magenta.NoteSequence.SubsequenceInfo
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {tensorflow.magenta.NoteSequence.SubsequenceInfo} SubsequenceInfo
                 */
                SubsequenceInfo.fromObject = function fromObject(object) {
                    if (object instanceof $root.tensorflow.magenta.NoteSequence.SubsequenceInfo)
                        return object;
                    var message = new $root.tensorflow.magenta.NoteSequence.SubsequenceInfo();
                    if (object.startTimeOffset != null)
                        message.startTimeOffset = Number(object.startTimeOffset);
                    if (object.endTimeOffset != null)
                        message.endTimeOffset = Number(object.endTimeOffset);
                    return message;
                };

                /**
                 * Creates a plain object from a SubsequenceInfo message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof tensorflow.magenta.NoteSequence.SubsequenceInfo
                 * @static
                 * @param {tensorflow.magenta.NoteSequence.SubsequenceInfo} message SubsequenceInfo
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                SubsequenceInfo.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.startTimeOffset = 0;
                        object.endTimeOffset = 0;
                    }
                    if (message.startTimeOffset != null && message.hasOwnProperty("startTimeOffset"))
                        object.startTimeOffset = options.json && !isFinite(message.startTimeOffset) ? String(message.startTimeOffset) : message.startTimeOffset;
                    if (message.endTimeOffset != null && message.hasOwnProperty("endTimeOffset"))
                        object.endTimeOffset = options.json && !isFinite(message.endTimeOffset) ? String(message.endTimeOffset) : message.endTimeOffset;
                    return object;
                };

                /**
                 * Converts this SubsequenceInfo to JSON.
                 * @function toJSON
                 * @memberof tensorflow.magenta.NoteSequence.SubsequenceInfo
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                SubsequenceInfo.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return SubsequenceInfo;
            })();

            NoteSequence.SectionAnnotation = (function() {

                /**
                 * Properties of a SectionAnnotation.
                 * @memberof tensorflow.magenta.NoteSequence
                 * @interface ISectionAnnotation
                 * @property {number|null} [time] SectionAnnotation time
                 * @property {number|null} [sectionId] SectionAnnotation sectionId
                 */

                /**
                 * Constructs a new SectionAnnotation.
                 * @memberof tensorflow.magenta.NoteSequence
                 * @classdesc Represents a SectionAnnotation.
                 * @implements ISectionAnnotation
                 * @constructor
                 * @param {tensorflow.magenta.NoteSequence.ISectionAnnotation=} [properties] Properties to set
                 */
                function SectionAnnotation(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * SectionAnnotation time.
                 * @member {number} time
                 * @memberof tensorflow.magenta.NoteSequence.SectionAnnotation
                 * @instance
                 */
                SectionAnnotation.prototype.time = 0;

                /**
                 * SectionAnnotation sectionId.
                 * @member {number} sectionId
                 * @memberof tensorflow.magenta.NoteSequence.SectionAnnotation
                 * @instance
                 */
                SectionAnnotation.prototype.sectionId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * Creates a new SectionAnnotation instance using the specified properties.
                 * @function create
                 * @memberof tensorflow.magenta.NoteSequence.SectionAnnotation
                 * @static
                 * @param {tensorflow.magenta.NoteSequence.ISectionAnnotation=} [properties] Properties to set
                 * @returns {tensorflow.magenta.NoteSequence.SectionAnnotation} SectionAnnotation instance
                 */
                SectionAnnotation.create = function create(properties) {
                    return new SectionAnnotation(properties);
                };

                /**
                 * Encodes the specified SectionAnnotation message. Does not implicitly {@link tensorflow.magenta.NoteSequence.SectionAnnotation.verify|verify} messages.
                 * @function encode
                 * @memberof tensorflow.magenta.NoteSequence.SectionAnnotation
                 * @static
                 * @param {tensorflow.magenta.NoteSequence.ISectionAnnotation} message SectionAnnotation message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SectionAnnotation.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.time != null && message.hasOwnProperty("time"))
                        writer.uint32(/* id 1, wireType 1 =*/9).double(message.time);
                    if (message.sectionId != null && message.hasOwnProperty("sectionId"))
                        writer.uint32(/* id 4, wireType 0 =*/32).int64(message.sectionId);
                    return writer;
                };

                /**
                 * Encodes the specified SectionAnnotation message, length delimited. Does not implicitly {@link tensorflow.magenta.NoteSequence.SectionAnnotation.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof tensorflow.magenta.NoteSequence.SectionAnnotation
                 * @static
                 * @param {tensorflow.magenta.NoteSequence.ISectionAnnotation} message SectionAnnotation message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SectionAnnotation.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a SectionAnnotation message from the specified reader or buffer.
                 * @function decode
                 * @memberof tensorflow.magenta.NoteSequence.SectionAnnotation
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {tensorflow.magenta.NoteSequence.SectionAnnotation} SectionAnnotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SectionAnnotation.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tensorflow.magenta.NoteSequence.SectionAnnotation();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.time = reader.double();
                            break;
                        case 4:
                            message.sectionId = $util.Long?reader.int64().toNumber():reader.int64();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a SectionAnnotation message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof tensorflow.magenta.NoteSequence.SectionAnnotation
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {tensorflow.magenta.NoteSequence.SectionAnnotation} SectionAnnotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SectionAnnotation.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a SectionAnnotation message.
                 * @function verify
                 * @memberof tensorflow.magenta.NoteSequence.SectionAnnotation
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                SectionAnnotation.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.time != null && message.hasOwnProperty("time"))
                        if (typeof message.time !== "number")
                            return "time: number expected";
                    if (message.sectionId != null && message.hasOwnProperty("sectionId"))
                        if (!$util.isInteger(message.sectionId) && !(message.sectionId && $util.isInteger(message.sectionId.low) && $util.isInteger(message.sectionId.high)))
                            return "sectionId: integer|Long expected";
                    return null;
                };

                /**
                 * Creates a SectionAnnotation message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof tensorflow.magenta.NoteSequence.SectionAnnotation
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {tensorflow.magenta.NoteSequence.SectionAnnotation} SectionAnnotation
                 */
                SectionAnnotation.fromObject = function fromObject(object) {
                    if (object instanceof $root.tensorflow.magenta.NoteSequence.SectionAnnotation)
                        return object;
                    var message = new $root.tensorflow.magenta.NoteSequence.SectionAnnotation();
                    if (object.time != null)
                        message.time = Number(object.time);
                    if (object.sectionId != null)
                        if ($util.Long)
                            (message.sectionId = $util.Long.fromValue(object.sectionId)).unsigned = false;
                        else if (typeof object.sectionId === "string")
                            message.sectionId = parseInt(object.sectionId, 10);
                        else if (typeof object.sectionId === "number")
                            message.sectionId = object.sectionId;
                        else if (typeof object.sectionId === "object")
                            message.sectionId = new $util.LongBits(object.sectionId.low >>> 0, object.sectionId.high >>> 0).toNumber();
                    return message;
                };

                /**
                 * Creates a plain object from a SectionAnnotation message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof tensorflow.magenta.NoteSequence.SectionAnnotation
                 * @static
                 * @param {tensorflow.magenta.NoteSequence.SectionAnnotation} message SectionAnnotation
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                SectionAnnotation.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.time = 0;
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.sectionId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.sectionId = options.longs === String ? "0" : 0;
                    }
                    if (message.time != null && message.hasOwnProperty("time"))
                        object.time = options.json && !isFinite(message.time) ? String(message.time) : message.time;
                    if (message.sectionId != null && message.hasOwnProperty("sectionId"))
                        if (typeof message.sectionId === "number")
                            object.sectionId = options.longs === String ? String(message.sectionId) : message.sectionId;
                        else
                            object.sectionId = options.longs === String ? $util.Long.prototype.toString.call(message.sectionId) : options.longs === Number ? new $util.LongBits(message.sectionId.low >>> 0, message.sectionId.high >>> 0).toNumber() : message.sectionId;
                    return object;
                };

                /**
                 * Converts this SectionAnnotation to JSON.
                 * @function toJSON
                 * @memberof tensorflow.magenta.NoteSequence.SectionAnnotation
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                SectionAnnotation.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return SectionAnnotation;
            })();

            NoteSequence.Section = (function() {

                /**
                 * Properties of a Section.
                 * @memberof tensorflow.magenta.NoteSequence
                 * @interface ISection
                 * @property {number|null} [sectionId] Section sectionId
                 * @property {tensorflow.magenta.NoteSequence.ISectionGroup|null} [sectionGroup] Section sectionGroup
                 */

                /**
                 * Constructs a new Section.
                 * @memberof tensorflow.magenta.NoteSequence
                 * @classdesc Represents a Section.
                 * @implements ISection
                 * @constructor
                 * @param {tensorflow.magenta.NoteSequence.ISection=} [properties] Properties to set
                 */
                function Section(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Section sectionId.
                 * @member {number} sectionId
                 * @memberof tensorflow.magenta.NoteSequence.Section
                 * @instance
                 */
                Section.prototype.sectionId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * Section sectionGroup.
                 * @member {tensorflow.magenta.NoteSequence.ISectionGroup|null|undefined} sectionGroup
                 * @memberof tensorflow.magenta.NoteSequence.Section
                 * @instance
                 */
                Section.prototype.sectionGroup = null;

                // OneOf field names bound to virtual getters and setters
                var $oneOfFields;

                /**
                 * Section sectionType.
                 * @member {"sectionId"|"sectionGroup"|undefined} sectionType
                 * @memberof tensorflow.magenta.NoteSequence.Section
                 * @instance
                 */
                Object.defineProperty(Section.prototype, "sectionType", {
                    get: $util.oneOfGetter($oneOfFields = ["sectionId", "sectionGroup"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                /**
                 * Creates a new Section instance using the specified properties.
                 * @function create
                 * @memberof tensorflow.magenta.NoteSequence.Section
                 * @static
                 * @param {tensorflow.magenta.NoteSequence.ISection=} [properties] Properties to set
                 * @returns {tensorflow.magenta.NoteSequence.Section} Section instance
                 */
                Section.create = function create(properties) {
                    return new Section(properties);
                };

                /**
                 * Encodes the specified Section message. Does not implicitly {@link tensorflow.magenta.NoteSequence.Section.verify|verify} messages.
                 * @function encode
                 * @memberof tensorflow.magenta.NoteSequence.Section
                 * @static
                 * @param {tensorflow.magenta.NoteSequence.ISection} message Section message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Section.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.sectionId != null && message.hasOwnProperty("sectionId"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int64(message.sectionId);
                    if (message.sectionGroup != null && message.hasOwnProperty("sectionGroup"))
                        $root.tensorflow.magenta.NoteSequence.SectionGroup.encode(message.sectionGroup, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified Section message, length delimited. Does not implicitly {@link tensorflow.magenta.NoteSequence.Section.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof tensorflow.magenta.NoteSequence.Section
                 * @static
                 * @param {tensorflow.magenta.NoteSequence.ISection} message Section message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Section.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Section message from the specified reader or buffer.
                 * @function decode
                 * @memberof tensorflow.magenta.NoteSequence.Section
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {tensorflow.magenta.NoteSequence.Section} Section
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Section.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tensorflow.magenta.NoteSequence.Section();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.sectionId = $util.Long?reader.int64().toNumber():reader.int64();
                            break;
                        case 2:
                            message.sectionGroup = $root.tensorflow.magenta.NoteSequence.SectionGroup.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Section message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof tensorflow.magenta.NoteSequence.Section
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {tensorflow.magenta.NoteSequence.Section} Section
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Section.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Section message.
                 * @function verify
                 * @memberof tensorflow.magenta.NoteSequence.Section
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Section.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    var properties = {};
                    if (message.sectionId != null && message.hasOwnProperty("sectionId")) {
                        properties.sectionType = 1;
                        if (!$util.isInteger(message.sectionId) && !(message.sectionId && $util.isInteger(message.sectionId.low) && $util.isInteger(message.sectionId.high)))
                            return "sectionId: integer|Long expected";
                    }
                    if (message.sectionGroup != null && message.hasOwnProperty("sectionGroup")) {
                        if (properties.sectionType === 1)
                            return "sectionType: multiple values";
                        properties.sectionType = 1;
                        {
                            var error = $root.tensorflow.magenta.NoteSequence.SectionGroup.verify(message.sectionGroup);
                            if (error)
                                return "sectionGroup." + error;
                        }
                    }
                    return null;
                };

                /**
                 * Creates a Section message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof tensorflow.magenta.NoteSequence.Section
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {tensorflow.magenta.NoteSequence.Section} Section
                 */
                Section.fromObject = function fromObject(object) {
                    if (object instanceof $root.tensorflow.magenta.NoteSequence.Section)
                        return object;
                    var message = new $root.tensorflow.magenta.NoteSequence.Section();
                    if (object.sectionId != null)
                        if ($util.Long)
                            (message.sectionId = $util.Long.fromValue(object.sectionId)).unsigned = false;
                        else if (typeof object.sectionId === "string")
                            message.sectionId = parseInt(object.sectionId, 10);
                        else if (typeof object.sectionId === "number")
                            message.sectionId = object.sectionId;
                        else if (typeof object.sectionId === "object")
                            message.sectionId = new $util.LongBits(object.sectionId.low >>> 0, object.sectionId.high >>> 0).toNumber();
                    if (object.sectionGroup != null) {
                        if (typeof object.sectionGroup !== "object")
                            throw TypeError(".tensorflow.magenta.NoteSequence.Section.sectionGroup: object expected");
                        message.sectionGroup = $root.tensorflow.magenta.NoteSequence.SectionGroup.fromObject(object.sectionGroup);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a Section message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof tensorflow.magenta.NoteSequence.Section
                 * @static
                 * @param {tensorflow.magenta.NoteSequence.Section} message Section
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Section.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (message.sectionId != null && message.hasOwnProperty("sectionId")) {
                        if (typeof message.sectionId === "number")
                            object.sectionId = options.longs === String ? String(message.sectionId) : message.sectionId;
                        else
                            object.sectionId = options.longs === String ? $util.Long.prototype.toString.call(message.sectionId) : options.longs === Number ? new $util.LongBits(message.sectionId.low >>> 0, message.sectionId.high >>> 0).toNumber() : message.sectionId;
                        if (options.oneofs)
                            object.sectionType = "sectionId";
                    }
                    if (message.sectionGroup != null && message.hasOwnProperty("sectionGroup")) {
                        object.sectionGroup = $root.tensorflow.magenta.NoteSequence.SectionGroup.toObject(message.sectionGroup, options);
                        if (options.oneofs)
                            object.sectionType = "sectionGroup";
                    }
                    return object;
                };

                /**
                 * Converts this Section to JSON.
                 * @function toJSON
                 * @memberof tensorflow.magenta.NoteSequence.Section
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Section.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Section;
            })();

            NoteSequence.SectionGroup = (function() {

                /**
                 * Properties of a SectionGroup.
                 * @memberof tensorflow.magenta.NoteSequence
                 * @interface ISectionGroup
                 * @property {Array.<tensorflow.magenta.NoteSequence.ISection>|null} [sections] SectionGroup sections
                 * @property {number|null} [numTimes] SectionGroup numTimes
                 */

                /**
                 * Constructs a new SectionGroup.
                 * @memberof tensorflow.magenta.NoteSequence
                 * @classdesc Represents a SectionGroup.
                 * @implements ISectionGroup
                 * @constructor
                 * @param {tensorflow.magenta.NoteSequence.ISectionGroup=} [properties] Properties to set
                 */
                function SectionGroup(properties) {
                    this.sections = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * SectionGroup sections.
                 * @member {Array.<tensorflow.magenta.NoteSequence.ISection>} sections
                 * @memberof tensorflow.magenta.NoteSequence.SectionGroup
                 * @instance
                 */
                SectionGroup.prototype.sections = $util.emptyArray;

                /**
                 * SectionGroup numTimes.
                 * @member {number} numTimes
                 * @memberof tensorflow.magenta.NoteSequence.SectionGroup
                 * @instance
                 */
                SectionGroup.prototype.numTimes = 0;

                /**
                 * Creates a new SectionGroup instance using the specified properties.
                 * @function create
                 * @memberof tensorflow.magenta.NoteSequence.SectionGroup
                 * @static
                 * @param {tensorflow.magenta.NoteSequence.ISectionGroup=} [properties] Properties to set
                 * @returns {tensorflow.magenta.NoteSequence.SectionGroup} SectionGroup instance
                 */
                SectionGroup.create = function create(properties) {
                    return new SectionGroup(properties);
                };

                /**
                 * Encodes the specified SectionGroup message. Does not implicitly {@link tensorflow.magenta.NoteSequence.SectionGroup.verify|verify} messages.
                 * @function encode
                 * @memberof tensorflow.magenta.NoteSequence.SectionGroup
                 * @static
                 * @param {tensorflow.magenta.NoteSequence.ISectionGroup} message SectionGroup message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SectionGroup.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.sections != null && message.sections.length)
                        for (var i = 0; i < message.sections.length; ++i)
                            $root.tensorflow.magenta.NoteSequence.Section.encode(message.sections[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.numTimes != null && message.hasOwnProperty("numTimes"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.numTimes);
                    return writer;
                };

                /**
                 * Encodes the specified SectionGroup message, length delimited. Does not implicitly {@link tensorflow.magenta.NoteSequence.SectionGroup.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof tensorflow.magenta.NoteSequence.SectionGroup
                 * @static
                 * @param {tensorflow.magenta.NoteSequence.ISectionGroup} message SectionGroup message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SectionGroup.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a SectionGroup message from the specified reader or buffer.
                 * @function decode
                 * @memberof tensorflow.magenta.NoteSequence.SectionGroup
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {tensorflow.magenta.NoteSequence.SectionGroup} SectionGroup
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SectionGroup.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tensorflow.magenta.NoteSequence.SectionGroup();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.sections && message.sections.length))
                                message.sections = [];
                            message.sections.push($root.tensorflow.magenta.NoteSequence.Section.decode(reader, reader.uint32()));
                            break;
                        case 2:
                            message.numTimes = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a SectionGroup message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof tensorflow.magenta.NoteSequence.SectionGroup
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {tensorflow.magenta.NoteSequence.SectionGroup} SectionGroup
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SectionGroup.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a SectionGroup message.
                 * @function verify
                 * @memberof tensorflow.magenta.NoteSequence.SectionGroup
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                SectionGroup.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.sections != null && message.hasOwnProperty("sections")) {
                        if (!Array.isArray(message.sections))
                            return "sections: array expected";
                        for (var i = 0; i < message.sections.length; ++i) {
                            var error = $root.tensorflow.magenta.NoteSequence.Section.verify(message.sections[i]);
                            if (error)
                                return "sections." + error;
                        }
                    }
                    if (message.numTimes != null && message.hasOwnProperty("numTimes"))
                        if (!$util.isInteger(message.numTimes))
                            return "numTimes: integer expected";
                    return null;
                };

                /**
                 * Creates a SectionGroup message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof tensorflow.magenta.NoteSequence.SectionGroup
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {tensorflow.magenta.NoteSequence.SectionGroup} SectionGroup
                 */
                SectionGroup.fromObject = function fromObject(object) {
                    if (object instanceof $root.tensorflow.magenta.NoteSequence.SectionGroup)
                        return object;
                    var message = new $root.tensorflow.magenta.NoteSequence.SectionGroup();
                    if (object.sections) {
                        if (!Array.isArray(object.sections))
                            throw TypeError(".tensorflow.magenta.NoteSequence.SectionGroup.sections: array expected");
                        message.sections = [];
                        for (var i = 0; i < object.sections.length; ++i) {
                            if (typeof object.sections[i] !== "object")
                                throw TypeError(".tensorflow.magenta.NoteSequence.SectionGroup.sections: object expected");
                            message.sections[i] = $root.tensorflow.magenta.NoteSequence.Section.fromObject(object.sections[i]);
                        }
                    }
                    if (object.numTimes != null)
                        message.numTimes = object.numTimes | 0;
                    return message;
                };

                /**
                 * Creates a plain object from a SectionGroup message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof tensorflow.magenta.NoteSequence.SectionGroup
                 * @static
                 * @param {tensorflow.magenta.NoteSequence.SectionGroup} message SectionGroup
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                SectionGroup.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.sections = [];
                    if (options.defaults)
                        object.numTimes = 0;
                    if (message.sections && message.sections.length) {
                        object.sections = [];
                        for (var j = 0; j < message.sections.length; ++j)
                            object.sections[j] = $root.tensorflow.magenta.NoteSequence.Section.toObject(message.sections[j], options);
                    }
                    if (message.numTimes != null && message.hasOwnProperty("numTimes"))
                        object.numTimes = message.numTimes;
                    return object;
                };

                /**
                 * Converts this SectionGroup to JSON.
                 * @function toJSON
                 * @memberof tensorflow.magenta.NoteSequence.SectionGroup
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                SectionGroup.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return SectionGroup;
            })();

            return NoteSequence;
        })();

        magenta.SequenceMetadata = (function() {

            /**
             * Properties of a SequenceMetadata.
             * @memberof tensorflow.magenta
             * @interface ISequenceMetadata
             * @property {string|null} [title] SequenceMetadata title
             * @property {string|null} [artist] SequenceMetadata artist
             * @property {Array.<string>|null} [genre] SequenceMetadata genre
             * @property {Array.<string>|null} [composers] SequenceMetadata composers
             */

            /**
             * Constructs a new SequenceMetadata.
             * @memberof tensorflow.magenta
             * @classdesc Represents a SequenceMetadata.
             * @implements ISequenceMetadata
             * @constructor
             * @param {tensorflow.magenta.ISequenceMetadata=} [properties] Properties to set
             */
            function SequenceMetadata(properties) {
                this.genre = [];
                this.composers = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SequenceMetadata title.
             * @member {string} title
             * @memberof tensorflow.magenta.SequenceMetadata
             * @instance
             */
            SequenceMetadata.prototype.title = "";

            /**
             * SequenceMetadata artist.
             * @member {string} artist
             * @memberof tensorflow.magenta.SequenceMetadata
             * @instance
             */
            SequenceMetadata.prototype.artist = "";

            /**
             * SequenceMetadata genre.
             * @member {Array.<string>} genre
             * @memberof tensorflow.magenta.SequenceMetadata
             * @instance
             */
            SequenceMetadata.prototype.genre = $util.emptyArray;

            /**
             * SequenceMetadata composers.
             * @member {Array.<string>} composers
             * @memberof tensorflow.magenta.SequenceMetadata
             * @instance
             */
            SequenceMetadata.prototype.composers = $util.emptyArray;

            /**
             * Creates a new SequenceMetadata instance using the specified properties.
             * @function create
             * @memberof tensorflow.magenta.SequenceMetadata
             * @static
             * @param {tensorflow.magenta.ISequenceMetadata=} [properties] Properties to set
             * @returns {tensorflow.magenta.SequenceMetadata} SequenceMetadata instance
             */
            SequenceMetadata.create = function create(properties) {
                return new SequenceMetadata(properties);
            };

            /**
             * Encodes the specified SequenceMetadata message. Does not implicitly {@link tensorflow.magenta.SequenceMetadata.verify|verify} messages.
             * @function encode
             * @memberof tensorflow.magenta.SequenceMetadata
             * @static
             * @param {tensorflow.magenta.ISequenceMetadata} message SequenceMetadata message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SequenceMetadata.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.title != null && message.hasOwnProperty("title"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.title);
                if (message.artist != null && message.hasOwnProperty("artist"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.artist);
                if (message.genre != null && message.genre.length)
                    for (var i = 0; i < message.genre.length; ++i)
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.genre[i]);
                if (message.composers != null && message.composers.length)
                    for (var i = 0; i < message.composers.length; ++i)
                        writer.uint32(/* id 4, wireType 2 =*/34).string(message.composers[i]);
                return writer;
            };

            /**
             * Encodes the specified SequenceMetadata message, length delimited. Does not implicitly {@link tensorflow.magenta.SequenceMetadata.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tensorflow.magenta.SequenceMetadata
             * @static
             * @param {tensorflow.magenta.ISequenceMetadata} message SequenceMetadata message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SequenceMetadata.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SequenceMetadata message from the specified reader or buffer.
             * @function decode
             * @memberof tensorflow.magenta.SequenceMetadata
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tensorflow.magenta.SequenceMetadata} SequenceMetadata
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SequenceMetadata.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tensorflow.magenta.SequenceMetadata();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.title = reader.string();
                        break;
                    case 2:
                        message.artist = reader.string();
                        break;
                    case 3:
                        if (!(message.genre && message.genre.length))
                            message.genre = [];
                        message.genre.push(reader.string());
                        break;
                    case 4:
                        if (!(message.composers && message.composers.length))
                            message.composers = [];
                        message.composers.push(reader.string());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a SequenceMetadata message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tensorflow.magenta.SequenceMetadata
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tensorflow.magenta.SequenceMetadata} SequenceMetadata
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SequenceMetadata.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SequenceMetadata message.
             * @function verify
             * @memberof tensorflow.magenta.SequenceMetadata
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SequenceMetadata.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.title != null && message.hasOwnProperty("title"))
                    if (!$util.isString(message.title))
                        return "title: string expected";
                if (message.artist != null && message.hasOwnProperty("artist"))
                    if (!$util.isString(message.artist))
                        return "artist: string expected";
                if (message.genre != null && message.hasOwnProperty("genre")) {
                    if (!Array.isArray(message.genre))
                        return "genre: array expected";
                    for (var i = 0; i < message.genre.length; ++i)
                        if (!$util.isString(message.genre[i]))
                            return "genre: string[] expected";
                }
                if (message.composers != null && message.hasOwnProperty("composers")) {
                    if (!Array.isArray(message.composers))
                        return "composers: array expected";
                    for (var i = 0; i < message.composers.length; ++i)
                        if (!$util.isString(message.composers[i]))
                            return "composers: string[] expected";
                }
                return null;
            };

            /**
             * Creates a SequenceMetadata message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tensorflow.magenta.SequenceMetadata
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tensorflow.magenta.SequenceMetadata} SequenceMetadata
             */
            SequenceMetadata.fromObject = function fromObject(object) {
                if (object instanceof $root.tensorflow.magenta.SequenceMetadata)
                    return object;
                var message = new $root.tensorflow.magenta.SequenceMetadata();
                if (object.title != null)
                    message.title = String(object.title);
                if (object.artist != null)
                    message.artist = String(object.artist);
                if (object.genre) {
                    if (!Array.isArray(object.genre))
                        throw TypeError(".tensorflow.magenta.SequenceMetadata.genre: array expected");
                    message.genre = [];
                    for (var i = 0; i < object.genre.length; ++i)
                        message.genre[i] = String(object.genre[i]);
                }
                if (object.composers) {
                    if (!Array.isArray(object.composers))
                        throw TypeError(".tensorflow.magenta.SequenceMetadata.composers: array expected");
                    message.composers = [];
                    for (var i = 0; i < object.composers.length; ++i)
                        message.composers[i] = String(object.composers[i]);
                }
                return message;
            };

            /**
             * Creates a plain object from a SequenceMetadata message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tensorflow.magenta.SequenceMetadata
             * @static
             * @param {tensorflow.magenta.SequenceMetadata} message SequenceMetadata
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SequenceMetadata.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults) {
                    object.genre = [];
                    object.composers = [];
                }
                if (options.defaults) {
                    object.title = "";
                    object.artist = "";
                }
                if (message.title != null && message.hasOwnProperty("title"))
                    object.title = message.title;
                if (message.artist != null && message.hasOwnProperty("artist"))
                    object.artist = message.artist;
                if (message.genre && message.genre.length) {
                    object.genre = [];
                    for (var j = 0; j < message.genre.length; ++j)
                        object.genre[j] = message.genre[j];
                }
                if (message.composers && message.composers.length) {
                    object.composers = [];
                    for (var j = 0; j < message.composers.length; ++j)
                        object.composers[j] = message.composers[j];
                }
                return object;
            };

            /**
             * Converts this SequenceMetadata to JSON.
             * @function toJSON
             * @memberof tensorflow.magenta.SequenceMetadata
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SequenceMetadata.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return SequenceMetadata;
        })();

        magenta.VelocityRange = (function() {

            /**
             * Properties of a VelocityRange.
             * @memberof tensorflow.magenta
             * @interface IVelocityRange
             * @property {number|null} [min] VelocityRange min
             * @property {number|null} [max] VelocityRange max
             */

            /**
             * Constructs a new VelocityRange.
             * @memberof tensorflow.magenta
             * @classdesc Represents a VelocityRange.
             * @implements IVelocityRange
             * @constructor
             * @param {tensorflow.magenta.IVelocityRange=} [properties] Properties to set
             */
            function VelocityRange(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * VelocityRange min.
             * @member {number} min
             * @memberof tensorflow.magenta.VelocityRange
             * @instance
             */
            VelocityRange.prototype.min = 0;

            /**
             * VelocityRange max.
             * @member {number} max
             * @memberof tensorflow.magenta.VelocityRange
             * @instance
             */
            VelocityRange.prototype.max = 0;

            /**
             * Creates a new VelocityRange instance using the specified properties.
             * @function create
             * @memberof tensorflow.magenta.VelocityRange
             * @static
             * @param {tensorflow.magenta.IVelocityRange=} [properties] Properties to set
             * @returns {tensorflow.magenta.VelocityRange} VelocityRange instance
             */
            VelocityRange.create = function create(properties) {
                return new VelocityRange(properties);
            };

            /**
             * Encodes the specified VelocityRange message. Does not implicitly {@link tensorflow.magenta.VelocityRange.verify|verify} messages.
             * @function encode
             * @memberof tensorflow.magenta.VelocityRange
             * @static
             * @param {tensorflow.magenta.IVelocityRange} message VelocityRange message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            VelocityRange.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.min != null && message.hasOwnProperty("min"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.min);
                if (message.max != null && message.hasOwnProperty("max"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.max);
                return writer;
            };

            /**
             * Encodes the specified VelocityRange message, length delimited. Does not implicitly {@link tensorflow.magenta.VelocityRange.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tensorflow.magenta.VelocityRange
             * @static
             * @param {tensorflow.magenta.IVelocityRange} message VelocityRange message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            VelocityRange.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a VelocityRange message from the specified reader or buffer.
             * @function decode
             * @memberof tensorflow.magenta.VelocityRange
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tensorflow.magenta.VelocityRange} VelocityRange
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            VelocityRange.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tensorflow.magenta.VelocityRange();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.min = reader.int32();
                        break;
                    case 2:
                        message.max = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a VelocityRange message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tensorflow.magenta.VelocityRange
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tensorflow.magenta.VelocityRange} VelocityRange
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            VelocityRange.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a VelocityRange message.
             * @function verify
             * @memberof tensorflow.magenta.VelocityRange
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            VelocityRange.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.min != null && message.hasOwnProperty("min"))
                    if (!$util.isInteger(message.min))
                        return "min: integer expected";
                if (message.max != null && message.hasOwnProperty("max"))
                    if (!$util.isInteger(message.max))
                        return "max: integer expected";
                return null;
            };

            /**
             * Creates a VelocityRange message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tensorflow.magenta.VelocityRange
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tensorflow.magenta.VelocityRange} VelocityRange
             */
            VelocityRange.fromObject = function fromObject(object) {
                if (object instanceof $root.tensorflow.magenta.VelocityRange)
                    return object;
                var message = new $root.tensorflow.magenta.VelocityRange();
                if (object.min != null)
                    message.min = object.min | 0;
                if (object.max != null)
                    message.max = object.max | 0;
                return message;
            };

            /**
             * Creates a plain object from a VelocityRange message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tensorflow.magenta.VelocityRange
             * @static
             * @param {tensorflow.magenta.VelocityRange} message VelocityRange
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            VelocityRange.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.min = 0;
                    object.max = 0;
                }
                if (message.min != null && message.hasOwnProperty("min"))
                    object.min = message.min;
                if (message.max != null && message.hasOwnProperty("max"))
                    object.max = message.max;
                return object;
            };

            /**
             * Converts this VelocityRange to JSON.
             * @function toJSON
             * @memberof tensorflow.magenta.VelocityRange
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            VelocityRange.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return VelocityRange;
        })();

        return magenta;
    })();

    return tensorflow;
})();

module.exports = $root;


/***/ }),
/* 15 */,
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var es6_namespaceObject = {};
__webpack_require__.r(es6_namespaceObject);
__webpack_require__.d(es6_namespaceObject, "names", function() { return names; });
__webpack_require__.d(es6_namespaceObject, "tokenize", function() { return tokenize; });
__webpack_require__.d(es6_namespaceObject, "props", function() { return props; });
__webpack_require__.d(es6_namespaceObject, "name", function() { return es6_name; });
__webpack_require__.d(es6_namespaceObject, "pc", function() { return pc; });
__webpack_require__.d(es6_namespaceObject, "midi", function() { return midi; });
__webpack_require__.d(es6_namespaceObject, "midiToFreq", function() { return midiToFreq; });
__webpack_require__.d(es6_namespaceObject, "freq", function() { return freq; });
__webpack_require__.d(es6_namespaceObject, "freqToMidi", function() { return freqToMidi; });
__webpack_require__.d(es6_namespaceObject, "chroma", function() { return es6_chroma; });
__webpack_require__.d(es6_namespaceObject, "oct", function() { return oct; });
__webpack_require__.d(es6_namespaceObject, "stepToLetter", function() { return stepToLetter; });
__webpack_require__.d(es6_namespaceObject, "altToAcc", function() { return altToAcc; });
__webpack_require__.d(es6_namespaceObject, "from", function() { return es6_from; });
__webpack_require__.d(es6_namespaceObject, "build", function() { return build; });
__webpack_require__.d(es6_namespaceObject, "fromMidi", function() { return fromMidi; });
__webpack_require__.d(es6_namespaceObject, "simplify", function() { return simplify; });
__webpack_require__.d(es6_namespaceObject, "enharmonic", function() { return enharmonic; });
var tonal_chord_build_es6_namespaceObject = {};
__webpack_require__.r(tonal_chord_build_es6_namespaceObject);
__webpack_require__.d(tonal_chord_build_es6_namespaceObject, "names", function() { return tonal_chord_build_es6_names; });
__webpack_require__.d(tonal_chord_build_es6_namespaceObject, "props", function() { return tonal_chord_build_es6_props; });
__webpack_require__.d(tonal_chord_build_es6_namespaceObject, "intervals", function() { return tonal_chord_build_es6_intervals; });
__webpack_require__.d(tonal_chord_build_es6_namespaceObject, "notes", function() { return build_es6_notes; });
__webpack_require__.d(tonal_chord_build_es6_namespaceObject, "exists", function() { return es6_exists; });
__webpack_require__.d(tonal_chord_build_es6_namespaceObject, "supersets", function() { return es6_supersets; });
__webpack_require__.d(tonal_chord_build_es6_namespaceObject, "subsets", function() { return es6_subsets; });
__webpack_require__.d(tonal_chord_build_es6_namespaceObject, "tokenize", function() { return tonal_chord_build_es6_tokenize; });

// EXTERNAL MODULE: external {"commonjs":"@tensorflow/tfjs","commonjs2":"@tensorflow/tfjs","amd":"tf","root":"tf"}
var tfjs_amd_tf_root_tf_ = __webpack_require__(0);

// CONCATENATED MODULE: ../node_modules/tonal-note/build/es6.js
var NAMES = "C C# Db D D# Eb E F F# Gb G G# Ab A A# Bb B".split(" ");
var names = function (accTypes) {
    return typeof accTypes !== "string"
        ? NAMES.slice()
        : NAMES.filter(function (n) {
            var acc = n[1] || " ";
            return accTypes.indexOf(acc) !== -1;
        });
};
var SHARPS = names(" #");
var FLATS = names(" b");
var REGEX = /^([a-gA-G]?)(#{1,}|b{1,}|x{1,}|)(-?\d*)\s*(.*)$/;
function tokenize(str) {
    if (typeof str !== "string")
        str = "";
    var m = REGEX.exec(str);
    return [m[1].toUpperCase(), m[2].replace(/x/g, "##"), m[3], m[4]];
}
var NO_NOTE = Object.freeze({
    pc: null,
    name: null,
    step: null,
    alt: null,
    oct: null,
    octStr: null,
    chroma: null,
    midi: null,
    freq: null
});
var SEMI = [0, 2, 4, 5, 7, 9, 11];
var properties = function (str) {
    var tokens = tokenize(str);
    if (tokens[0] === "" || tokens[3] !== "")
        return NO_NOTE;
    var letter = tokens[0], acc = tokens[1], octStr = tokens[2];
    var p = {
        letter: letter,
        acc: acc,
        octStr: octStr,
        pc: letter + acc,
        name: letter + acc + octStr,
        step: (letter.charCodeAt(0) + 3) % 7,
        alt: acc[0] === "b" ? -acc.length : acc.length,
        oct: octStr.length ? +octStr : null,
        chroma: 0,
        midi: null,
        freq: null
    };
    p.chroma = (SEMI[p.step] + p.alt + 120) % 12;
    p.midi = p.oct !== null ? SEMI[p.step] + p.alt + 12 * (p.oct + 1) : null;
    p.freq = midiToFreq(p.midi);
    return Object.freeze(p);
};
var memo = function (fn, cache) {
    if (cache === void 0) { cache = {}; }
    return function (str) { return cache[str] || (cache[str] = fn(str)); };
};
var props = memo(properties);
var es6_name = function (str) { return props(str).name; };
var pc = function (str) { return props(str).pc; };
var isMidiRange = function (m) { return m >= 0 && m <= 127; };
var midi = function (note) {
    if (typeof note !== "number" && typeof note !== "string") {
        return null;
    }
    var midi = props(note).midi;
    var value = midi || midi === 0 ? midi : +note;
    return isMidiRange(value) ? value : null;
};
var midiToFreq = function (midi, tuning) {
    if (tuning === void 0) { tuning = 440; }
    return typeof midi === "number" ? Math.pow(2, (midi - 69) / 12) * tuning : null;
};
var freq = function (note) { return props(note).freq || midiToFreq(note); };
var L2 = Math.log(2);
var L440 = Math.log(440);
var freqToMidi = function (freq) {
    var v = (12 * (Math.log(freq) - L440)) / L2 + 69;
    return Math.round(v * 100) / 100;
};
var es6_chroma = function (str) { return props(str).chroma; };
var oct = function (str) { return props(str).oct; };
var LETTERS = "CDEFGAB";
var stepToLetter = function (step) { return LETTERS[step]; };
var fillStr = function (s, n) { return Array(n + 1).join(s); };
var numToStr = function (num, op) {
    return typeof num !== "number" ? "" : op(num);
};
var altToAcc = function (alt) {
    return numToStr(alt, function (alt) { return (alt < 0 ? fillStr("b", -alt) : fillStr("#", alt)); });
};
var es6_from = function (fromProps, baseNote) {
    if (fromProps === void 0) { fromProps = {}; }
    if (baseNote === void 0) { baseNote = null; }
    var _a = baseNote
        ? Object.assign({}, props(baseNote), fromProps)
        : fromProps, step = _a.step, alt = _a.alt, oct = _a.oct;
    if (typeof step !== "number")
        return null;
    var letter = stepToLetter(step);
    if (!letter)
        return null;
    var pc = letter + altToAcc(alt);
    return oct || oct === 0 ? pc + oct : pc;
};
var build = es6_from;
function fromMidi(num, sharps) {
    if (sharps === void 0) { sharps = false; }
    num = Math.round(num);
    var pcs = sharps === true ? SHARPS : FLATS;
    var pc = pcs[num % 12];
    var o = Math.floor(num / 12) - 1;
    return pc + o;
}
var simplify = function (note, sameAcc) {
    if (sameAcc === void 0) { sameAcc = true; }
    var _a = props(note), alt = _a.alt, chroma = _a.chroma, midi = _a.midi;
    if (chroma === null)
        return null;
    var alteration = alt;
    var useSharps = sameAcc === false ? alteration < 0 : alteration > 0;
    return midi === null
        ? pc(fromMidi(chroma, useSharps))
        : fromMidi(midi, useSharps);
};
var enharmonic = function (note) { return simplify(note, false); };



// CONCATENATED MODULE: ../node_modules/tonal-array/build/es6.js
/**
 * [![npm version](https://img.shields.io/npm/v/tonal-array.svg?style=flat-square)](https://www.npmjs.com/package/tonal-array)
 *
 * Tonal array utilities. Create ranges, sort notes, ...
 *
 * @example
 * import * as Array;
 * Array.sort(["f", "a", "c"]) // => ["C", "F", "A"]
 *
 * @example
 * const Array = require("tonal-array")
 * Array.range(1, 4) // => [1, 2, 3, 4]
 *
 * @module Array
 */


// ascending range
function ascR(b, n) {
  for (var a = []; n--; a[n] = n + b){ ; }
  return a;
}
// descending range
function descR(b, n) {
  for (var a = []; n--; a[n] = b - n){ ; }
  return a;
}

/**
 * Create a numeric range
 *
 * @param {Number} from
 * @param {Number} to
 * @return {Array}
 *
 * @example
 * Array.range(-2, 2) // => [-2, -1, 0, 1, 2]
 * Array.range(2, -2) // => [2, 1, 0, -1, -2]
 */
function range(a, b) {
  return a === null || b === null
    ? []
    : a < b
      ? ascR(a, b - a + 1)
      : descR(a, a - b + 1);
}
/**
 *
 * Rotates a list a number of times. It"s completly agnostic about the
 * contents of the list.
 *
 * @param {Integer} times - the number of rotations
 * @param {Array} array
 * @return {Array} the rotated array
 * @example
 * Array.rotate(1, [1, 2, 3]) // => [2, 3, 1]
 */
function rotate(times, arr) {
  var len = arr.length;
  var n = ((times % len) + len) % len;
  return arr.slice(n, len).concat(arr.slice(0, n));
}

/**
 * Return a copy of the array with the null values removed
 * @function
 * @param {Array} array
 * @return {Array}
 *
 * @example
 * Array.compact(["a", "b", null, "c"]) // => ["a", "b", "c"]
 */
var compact = function (arr) { return arr.filter(function (n) { return n === 0 || n; }); };

// a function that get note heights (with negative number for pitch classes)
var height = function (name) {
  var m = props(name).midi;
  return m !== null ? m : props(name + "-100").midi;
};

/**
 * Sort an array of notes in ascending order
 *
 * @param {String|Array} notes
 * @return {Array} sorted array of notes
 */
function sort(src) {
  return compact(src.map(es6_name)).sort(function (a, b) { return height(a) > height(b); });
}

/**
 * Get sorted notes with duplicates removed
 *
 * @function
 * @param {Array} notes
 */
function unique(arr) {
  return sort(arr).filter(function (n, i, a) { return i === 0 || n !== a[i - 1]; });
}

/**
 * Randomizes the order of the specified array in-place, using the Fisher–Yates shuffle.
 *
 * @private
 * @function
 * @param {Array|String} arr - the array
 * @return {Array} the shuffled array
 *
 * @example
 * Array.shuffle(["C", "D", "E", "F"])
 */
var shuffle = function (arr, rnd) {
  if ( rnd === void 0 ) rnd = Math.random;

  var i, t;
  var m = arr.length;
  while (m) {
    i = (rnd() * m--) | 0;
    t = arr[m];
    arr[m] = arr[i];
    arr[i] = t;
  }
  return arr;
};

/**
 * Get all permutations of an array
 * http://stackoverflow.com/questions/9960908/permutations-in-javascript
 *
 * @param {Array} array - the array
 * @return {Array<Array>} an array with all the permutations
 */
var permutations = function (arr) {
  if (arr.length === 0) { return [[]]; }
  return permutations(arr.slice(1)).reduce(function(acc, perm) {
    return acc.concat(
      arr.map(function(e, pos) {
        var newPerm = perm.slice();
        newPerm.splice(pos, 0, arr[0]);
        return newPerm;
      })
    );
  }, []);
};

// CONCATENATED MODULE: ../node_modules/tonal-interval/build/es6.js
var IVL_TNL = "([-+]?\\d+)(d{1,4}|m|M|P|A{1,4})";
var IVL_STR = "(AA|A|P|M|m|d|dd)([-+]?\\d+)";
var es6_REGEX = new RegExp("^" + IVL_TNL + "|" + IVL_STR + "$");
var SIZES = [0, 2, 4, 5, 7, 9, 11];
var TYPES = "PMMPPMM";
var CLASSES = [0, 1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1];
var es6_NAMES = "1P 2m 2M 3m 3M 4P 5P 6m 6M 7m 7M 8P".split(" ");
var es6_names = function (types) {
    return typeof types !== "string"
        ? es6_NAMES.slice()
        : es6_NAMES.filter(function (n) { return types.indexOf(n[1]) !== -1; });
};
var es6_tokenize = function (str) {
    var m = es6_REGEX.exec("" + str);
    if (m === null)
        return null;
    return (m[1] ? [m[1], m[2]] : [m[4], m[3]]);
};
var NO_IVL = Object.freeze({
    name: null,
    num: null,
    q: null,
    step: null,
    alt: null,
    dir: null,
    type: null,
    simple: null,
    semitones: null,
    chroma: null,
    oct: null
});
var es6_fillStr = function (s, n) { return Array(Math.abs(n) + 1).join(s); };
var qToAlt = function (type, q) {
    if (q === "M" && type === "M")
        return 0;
    if (q === "P" && type === "P")
        return 0;
    if (q === "m" && type === "M")
        return -1;
    if (/^A+$/.test(q))
        return q.length;
    if (/^d+$/.test(q))
        return type === "P" ? -q.length : -q.length - 1;
    return null;
};
var altToQ = function (type, alt) {
    if (alt === 0)
        return type === "M" ? "M" : "P";
    else if (alt === -1 && type === "M")
        return "m";
    else if (alt > 0)
        return es6_fillStr("A", alt);
    else if (alt < 0)
        return es6_fillStr("d", type === "P" ? alt : alt + 1);
    else
        return null;
};
var numToStep = function (num) { return (Math.abs(num) - 1) % 7; };
var es6_properties = function (str) {
    var t = es6_tokenize(str);
    if (t === null)
        return NO_IVL;
    var p = {
        num: 0,
        q: "d",
        name: "",
        type: "M",
        step: 0,
        dir: -1,
        simple: 1,
        alt: 0,
        oct: 0,
        semitones: 0,
        chroma: 0,
        ic: 0
    };
    p.num = +t[0];
    p.q = t[1];
    p.step = numToStep(p.num);
    p.type = TYPES[p.step];
    if (p.type === "M" && p.q === "P")
        return NO_IVL;
    p.name = "" + p.num + p.q;
    p.dir = p.num < 0 ? -1 : 1;
    p.simple = (p.num === 8 || p.num === -8
        ? p.num
        : p.dir * (p.step + 1));
    p.alt = qToAlt(p.type, p.q);
    p.oct = Math.floor((Math.abs(p.num) - 1) / 7);
    p.semitones = p.dir * (SIZES[p.step] + p.alt + 12 * p.oct);
    p.chroma = ((((p.dir * (SIZES[p.step] + p.alt)) % 12) + 12) %
        12);
    return Object.freeze(p);
};
var cache = {};
function es6_props(str) {
    if (typeof str !== "string")
        return NO_IVL;
    return cache[str] || (cache[str] = es6_properties(str));
}
var num = function (str) { return es6_props(str).num; };
var build_es6_name = function (str) { return es6_props(str).name; };
var semitones = function (str) { return es6_props(str).semitones; };
var build_es6_chroma = function (str) { return es6_props(str).chroma; };
var ic = function (ivl) {
    if (typeof ivl === "string")
        ivl = es6_props(ivl).chroma;
    return typeof ivl === "number" ? CLASSES[ivl % 12] : null;
};
var es6_build = function (_a) {
    var _b = _a === void 0 ? {} : _a, num = _b.num, step = _b.step, alt = _b.alt, _c = _b.oct, oct = _c === void 0 ? 1 : _c, dir = _b.dir;
    if (step !== undefined)
        num = step + 1 + 7 * oct;
    if (num === undefined)
        return null;
    if (typeof alt !== "number")
        return null;
    var d = typeof dir !== "number" ? "" : dir < 0 ? "-" : "";
    var type = TYPES[numToStep(num)];
    return (d + num + altToQ(type, alt));
};
var es6_simplify = function (str) {
    var p = es6_props(str);
    if (p === NO_IVL)
        return null;
    var intervalProps = p;
    return intervalProps.simple + intervalProps.q;
};
var invert = function (str) {
    var p = es6_props(str);
    if (p === NO_IVL)
        return null;
    var intervalProps = p;
    var step = (7 - intervalProps.step) % 7;
    var alt = intervalProps.type === "P" ? -intervalProps.alt : -(intervalProps.alt + 1);
    return es6_build({ step: step, alt: alt, oct: intervalProps.oct, dir: intervalProps.dir });
};
var IN = [1, 2, 2, 3, 3, 4, 5, 5, 6, 6, 7, 7];
var IQ = "P m M m M P d P m M m M".split(" ");
var fromSemitones = function (num) {
    var d = num < 0 ? -1 : 1;
    var n = Math.abs(num);
    var c = n % 12;
    var o = Math.floor(n / 12);
    return d * (IN[c] + 7 * o) + IQ[c];
};



// CONCATENATED MODULE: ../node_modules/tonal-distance/build/es6.js
/**
 * [![npm version](https://img.shields.io/npm/v/tonal-distance.svg)](https://www.npmjs.com/package/tonal-distance)
 * [![tonal](https://img.shields.io/badge/tonal-distance-yellow.svg)](https://github.com/danigb/tonal/tree/master/packages/tonal/distance)
 *
 * Transpose notes by intervals and find distances between notes
 *
 * @example
 * // es6
 * import * as Distance from "tonal-distance"
 * Distance.interval("C3", "C4") // => "1P"
 *
 * @example
 * // es6 import selected functions
 * import { interval, semitones, transpose } from "tonal-distance"
 *
 * semitones("C" ,"D") // => 2
 * interval("C4", "G4") // => "5P"
 * transpose("C4", "P5") // => "G4"
 *
 * @example
 * // included in tonal facade
 * const Tonal = require("tonal");
 * Tonal.Distance.transpose("C4", "P5")
 * Tonal.Distance.transposeBy("P5", "C4")
 *
 * @module Distance
 */



// Map from letter step to number of fifths starting from "C":
// { C: 0, D: 2, E: 4, F: -1, G: 1, A: 3, B: 5 }
var FIFTHS = [0, 2, 4, -1, 1, 3, 5];

// Given a number of fifths, return the octaves they span
var fOcts = function (f) { return Math.floor((f * 7) / 12); };

// Get the number of octaves it span each step
var FIFTH_OCTS = FIFTHS.map(fOcts);

var encode = function (ref) {
  var step = ref.step;
  var alt = ref.alt;
  var oct = ref.oct;
  var dir = ref.dir; if ( dir === void 0 ) dir = 1;

  var f = FIFTHS[step] + 7 * alt;
  if (oct === null) { return [dir * f]; }
  var o = oct - FIFTH_OCTS[step] - 4 * alt;
  return [dir * f, dir * o];
};

// We need to get the steps from fifths
// Fifths for CDEFGAB are [ 0, 2, 4, -1, 1, 3, 5 ]
// We add 1 to fifths to avoid negative numbers, so:
// for ["F", "C", "G", "D", "A", "E", "B"] we have:
var STEPS = [3, 0, 4, 1, 5, 2, 6];

// Return the number of fifths as if it were unaltered
function unaltered(f) {
  var i = (f + 1) % 7;
  return i < 0 ? 7 + i : i;
}

var decode = function (f, o, dir) {
  var step = STEPS[unaltered(f)];
  var alt = Math.floor((f + 1) / 7);
  if (o === undefined) { return { step: step, alt: alt, dir: dir }; }
  var oct = o + 4 * alt + FIFTH_OCTS[step];
  return { step: step, alt: alt, oct: oct, dir: dir };
};

var es6_memo = function (fn, cache) {
  if ( cache === void 0 ) cache = {};

  return function (str) { return cache[str] || (cache[str] = fn(str)); };
};

var encoder = function (props) { return es6_memo(function (str) {
    var p = props(str);
    return p.name === null ? null : encode(p);
  }); };

var encodeNote = encoder(props);
var encodeIvl = encoder(es6_props);

/**
 * Transpose a note by an interval. The note can be a pitch class.
 *
 * This function can be partially applied.
 *
 * @param {string} note
 * @param {string} interval
 * @return {string} the transposed note
 * @example
 * import { tranpose } from "tonal-distance"
 * transpose("d3", "3M") // => "F#3"
 * // it works with pitch classes
 * transpose("D", "3M") // => "F#"
 * // can be partially applied
 * ["C", "D", "E", "F", "G"].map(transpose("M3)) // => ["E", "F#", "G#", "A", "B"]
 */
function transpose(note, interval) {
  if (arguments.length === 1) { return function (i) { return transpose(note, i); }; }
  var n = encodeNote(note);
  var i = encodeIvl(interval);
  if (n === null || i === null) { return null; }
  var tr = n.length === 1 ? [n[0] + i[0]] : [n[0] + i[0], n[1] + i[1]];
  return build(decode(tr[0], tr[1]));
}

/**
 * Transpose a pitch class by a number of perfect fifths.
 *
 * It can be partially applied.
 *
 * @function
 * @param {string} pitchClass - the pitch class
 * @param {Integer} fifhts - the number of fifths
 * @return {string} the transposed pitch class
 *
 * @example
 * import { trFifths } from "tonal-transpose"
 * [0, 1, 2, 3, 4].map(trFifths("C")) // => ["C", "G", "D", "A", "E"]
 * // or using tonal
 * Distance.trFifths("G4", 1) // => "D"
 */

function trFifths(note, fifths) {
  if (arguments.length === 1) { return function (f) { return trFifths(note, f); }; }
  var n = encodeNote(note);
  if (n === null) { return null; }
  return build(decode(n[0] + fifths));
}

/**
 * Get the distance in fifths between pitch classes
 *
 * Can be partially applied.
 *
 * @param {string} to - note or pitch class
 * @param {string} from - note or pitch class
 */
function es6_fifths(from, to) {
  if (arguments.length === 1) { return function (to) { return es6_fifths(from, to); }; }
  var f = encodeNote(from);
  var t = encodeNote(to);
  if (t === null || f === null) { return null; }
  return t[0] - f[0];
}

/**
 * The same as transpose with the arguments inverted.
 *
 * Can be partially applied.
 *
 * @param {string} note
 * @param {string} interval
 * @return {string} the transposed note
 * @example
 * import { tranposeBy } from "tonal-distance"
 * transposeBy("3m", "5P") // => "7m"
 */
function transposeBy(interval, note) {
  if (arguments.length === 1) { return function (n) { return transpose(n, interval); }; }
  return transpose(note, interval);
}

var isDescending = function (e) { return e[0] * 7 + e[1] * 12 < 0; };
var decodeIvl = function (i) { return isDescending(i) ? decode(-i[0], -i[1], -1) : decode(i[0], i[1], 1); };

function addIntervals(ivl1, ivl2, dir) {
  var i1 = encodeIvl(ivl1);
  var i2 = encodeIvl(ivl2);
  if (i1 === null || i2 === null) { return null; }
  var i = [i1[0] + dir * i2[0], i1[1] + dir * i2[1]];
  return es6_build(decodeIvl(i));
}

/**
 * Add two intervals
 *
 * Can be partially applied.
 *
 * @param {string} interval1
 * @param {string} interval2
 * @return {string} the resulting interval
 * @example
 * import { add } from "tonal-distance"
 * add("3m", "5P") // => "7m"
 */
function es6_add(ivl1, ivl2) {
  if (arguments.length === 1) { return function (i2) { return es6_add(ivl1, i2); }; }
  return addIntervals(ivl1, ivl2, 1);
}

/**
 * Subtract two intervals
 *
 * Can be partially applied
 *
 * @param {string} minuend
 * @param {string} subtrahend
 * @return {string} interval diference
 */
function subtract(ivl1, ivl2) {
  if (arguments.length === 1) { return function (i2) { return es6_add(ivl1, i2); }; }
  return addIntervals(ivl1, ivl2, -1);
}

/**
 * Find the interval between two pitches. It works with pitch classes
 * (both must be pitch classes and the interval is always ascending)
 *
 * Can be partially applied
 *
 * @param {string} from - distance from
 * @param {string} to - distance to
 * @return {string} the interval distance
 *
 * @example
 * import { interval } from "tonal-distance"
 * interval("C2", "C3") // => "P8"
 * interval("G", "B") // => "M3"
 *
 * @example
 * import * as Distance from "tonal-distance"
 * Distance.interval("M2", "P5") // => "P4"
 */
function es6_interval(from, to) {
  if (arguments.length === 1) { return function (t) { return es6_interval(from, t); }; }
  var f = encodeNote(from);
  var t = encodeNote(to);
  if (f === null || t === null || f.length !== t.length) { return null; }
  var d =
    f.length === 1
      ? [t[0] - f[0], -Math.floor(((t[0] - f[0]) * 7) / 12)]
      : [t[0] - f[0], t[1] - f[1]];
  return es6_build(decodeIvl(d));
}

/**
 * Get the distance between two notes in semitones
 *
 * @param {String|Pitch} from - first note
 * @param {String|Pitch} to - last note
 * @return {Integer} the distance in semitones or null if not valid notes
 * @example
 * import { semitones } from "tonal-distance"
 * semitones("C3", "A2") // => -3
 * // or use tonal
 * Tonal.Distance.semitones("C3", "G3") // => 7
 */
function es6_semitones(from, to) {
  if (arguments.length === 1) { return function (t) { return es6_semitones(from, t); }; }
  var f = props(from);
  var t = props(to);
  return f.midi !== null && t.midi !== null
    ? t.midi - f.midi
    : f.chroma !== null && t.chroma !== null
      ? (t.chroma - f.chroma + 12) % 12
      : null;
}

// EXTERNAL MODULE: ../node_modules/tonal-dictionary/build/data/scales.json
var scales = __webpack_require__(36);

// EXTERNAL MODULE: ../node_modules/tonal-dictionary/build/data/chords.json
var data_chords = __webpack_require__(37);

// CONCATENATED MODULE: ../node_modules/tonal-pcset/build/es6.js
/**
 * [![npm version](https://img.shields.io/npm/v/tonal-pcset.svg?style=flat-square)](https://www.npmjs.com/package/tonal-pcset)
 * [![tonal](https://img.shields.io/badge/tonal-pcset-yellow.svg?style=flat-square)](https://www.npmjs.com/browse/keyword/tonal)
 *
 * `tonal-pcset` is a collection of functions to work with pitch class sets, oriented
 * to make comparations (isEqual, isSubset, isSuperset)
 *
 * This is part of [tonal](https://www.npmjs.com/package/tonal) music theory library.
 *
 * You can install via npm: `npm i --save tonal-pcset`
 *
 * ```js
 * // es6
 * import PcSet from "tonal-pcset"
 * var PcSet = require("tonal-pcset")
 *
 * PcSet.isEqual("c2 d5 e6", "c6 e3 d1") // => true
 * ```
 *
 * ## API documentation
 *
 * @module PcSet
 */




var es6_chr = function (str) { return es6_chroma(str) || build_es6_chroma(str) || 0; };
var pcsetNum = function (set) { return parseInt(tonal_pcset_build_es6_chroma(set), 2); };
var clen = function (chroma) { return chroma.replace(/0/g, "").length; };

/**
 * Get chroma of a pitch class set. A chroma identifies each set uniquely.
 * It"s a 12-digit binary each presenting one semitone of the octave.
 *
 * Note that this function accepts a chroma as parameter and return it
 * without modification.
 *
 * @param {Array|String} set - the pitch class set
 * @return {string} a binary representation of the pitch class set
 * @example
 * PcSet.chroma(["C", "D", "E"]) // => "1010100000000"
 */
function tonal_pcset_build_es6_chroma(set) {
  if (isChroma(set)) { return set; }
  if (!Array.isArray(set)) { return ""; }
  var b = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  set.map(es6_chr).forEach(function (i) {
    b[i] = 1;
  });
  return b.join("");
}

var es6_all = null;
/**
 * Get a list of all possible chromas (all possible scales)
 * More information: http://allthescales.org/
 * @return {Array} an array of possible chromas from '10000000000' to '11111111111'
 *
 */
function chromas(n) {
  es6_all = es6_all || range(2048, 4095).map(function (n) { return n.toString(2); });
  return typeof n === "number"
    ? es6_all.filter(function (chroma) { return clen(chroma) === n; })
    : es6_all.slice();
}

/**
 * Given a a list of notes or a pcset chroma, produce the rotations
 * of the chroma discarding the ones that starts with "0"
 *
 * This is used, for example, to get all the modes of a scale.
 *
 * @param {Array|String} set - the list of notes or pitchChr of the set
 * @param {Boolean} normalize - (Optional, true by default) remove all
 * the rotations that starts with "0"
 * @return {Array<String>} an array with all the modes of the chroma
 *
 * @example
 * PcSet.modes(["C", "D", "E"]).map(PcSet.intervals)
 */
function modes(set, normalize) {
  normalize = normalize !== false;
  var binary = tonal_pcset_build_es6_chroma(set).split("");
  return compact(
    binary.map(function(_, i) {
      var r = rotate(i, binary);
      return normalize && r[0] === "0" ? null : r.join("");
    })
  );
}

var build_es6_REGEX = /^[01]{12}$/;
/**
 * Test if the given string is a pitch class set chroma.
 * @param {string} chroma - the pitch class set chroma
 * @return {Boolean} true if its a valid pcset chroma
 * @example
 * PcSet.isChroma("101010101010") // => true
 * PcSet.isChroma("101001") // => false
 */
function isChroma(set) {
  return build_es6_REGEX.test(set);
}

var IVLS = "1P 2m 2M 3m 3M 4P 5d 5P 6m 6M 7m 7M".split(" ");
/**
 * Given a pcset (notes or chroma) return it"s intervals
 * @param {String|Array} pcset - the pitch class set (notes or chroma)
 * @return {Array} intervals or empty array if not valid pcset
 * @example
 * PcSet.intervals("1010100000000") => ["1P", "2M", "3M"]
 */
function es6_intervals(set) {
  if (!isChroma(set)) { return []; }
  return compact(
    set.split("").map(function(d, i) {
      return d === "1" ? IVLS[i] : null;
    })
  );
}

/**
 * Test if two pitch class sets are identical
 *
 * @param {Array|String} set1 - one of the pitch class sets
 * @param {Array|String} set2 - the other pitch class set
 * @return {Boolean} true if they are equal
 * @example
 * PcSet.isEqual(["c2", "d3"], ["c5", "d2"]) // => true
 */
function isEqual(s1, s2) {
  if (arguments.length === 1) { return function (s) { return isEqual(s1, s); }; }
  return tonal_pcset_build_es6_chroma(s1) === tonal_pcset_build_es6_chroma(s2);
}

/**
 * Create a function that test if a collection of notes is a
 * subset of a given set
 *
 * The function can be partially applied
 *
 * @param {Array|String} set - an array of notes or a chroma set string to test against
 * @param {Array|String} notes - an array of notes or a chroma set
 * @return {boolean} true if notes is a subset of set, false otherwise
 * @example
 * const inCMajor = PcSet.isSubsetOf(["C", "E", "G"])
 * inCMajor(["e6", "c4"]) // => true
 * inCMajor(["e6", "c4", "d3"]) // => false
 */
function isSubsetOf(set, notes) {
  if (arguments.length > 1) { return isSubsetOf(set)(notes); }
  set = pcsetNum(set);
  return function(notes) {
    notes = pcsetNum(notes);
    return notes !== set && (notes & set) === notes;
  };
}

/**
 * Create a function that test if a collectio of notes is a
 * superset of a given set (it contains all notes and at least one more)
 *
 * @param {Array|String} set - an array of notes or a chroma set string to test against
 * @param {Array|String} notes - an array of notes or a chroma set
 * @return {boolean} true if notes is a superset of set, false otherwise
 * @example
 * const extendsCMajor = PcSet.isSupersetOf(["C", "E", "G"])
 * extendsCMajor(["e6", "a", "c4", "g2"]) // => true
 * extendsCMajor(["c6", "e4", "g3"]) // => false
 */
function isSupersetOf(set, notes) {
  if (arguments.length > 1) { return isSupersetOf(set)(notes); }
  set = pcsetNum(set);
  return function(notes) {
    notes = pcsetNum(notes);
    return notes !== set && (notes | set) === notes;
  };
}

/**
 * Test if a given pitch class set includes a note
 * @param {Array|String} set - the base set to test against
 * @param {String|Pitch} note - the note to test
 * @return {Boolean} true if the note is included in the pcset
 * @example
 * PcSet.includes(["C", "D", "E"], "C4") // => true
 * PcSet.includes(["C", "D", "E"], "C#4") // => false
 */
function includes(set, note) {
  if (arguments.length > 1) { return includes(set)(note); }
  set = tonal_pcset_build_es6_chroma(set);
  return function(note) {
    return set[es6_chr(note)] === "1";
  };
}

/**
 * Filter a list with a pitch class set
 *
 * @param {Array|String} set - the pitch class set notes
 * @param {Array|String} notes - the note list to be filtered
 * @return {Array} the filtered notes
 *
 * @example
 * PcSet.filter(["C", "D", "E"], ["c2", "c#2", "d2", "c3", "c#3", "d3"]) // => [ "c2", "d2", "c3", "d3" ])
 * PcSet.filter(["C2"], ["c2", "c#2", "d2", "c3", "c#3", "d3"]) // => [ "c2", "c3" ])
 */
function filter(set, notes) {
  if (arguments.length === 1) { return function (n) { return filter(set, n); }; }
  return notes.filter(includes(set));
}

// CONCATENATED MODULE: ../node_modules/tonal-dictionary/build/es6.js
/**
 * [![npm version](https://img.shields.io/npm/v/tonal-dictionary.svg)](https://www.npmjs.com/package/tonal-dictionary)
 *
 * `tonal-dictionary` contains a dictionary of musical scales and chords
 *
 * This is part of [tonal](https://www.npmjs.com/package/tonal) music theory library.
 *
 * @example
 * // es6
 * import * as Dictionary from "tonal-dictionary"
 * // es5
 * const Dictionary = require("tonal-dictionary")
 *
 * @example
 * Dictionary.chord("Maj7") // => ["1P", "3M", "5P", "7M"]
 *
 * @module Dictionary
 */




var dictionary = function (raw) {
  var keys = Object.keys(raw).sort();
  var data = [];
  var index = [];

  var add = function (name, ivls, chroma) {
    data[name] = ivls;
    index[chroma] = index[chroma] || [];
    index[chroma].push(name);
  };

  keys.forEach(function (key) {
    var ivls = raw[key][0].split(" ");
    var alias = raw[key][1];
    var chr = tonal_pcset_build_es6_chroma(ivls);

    add(key, ivls, chr);
    if (alias) { alias.forEach(function (a) { return add(a, ivls, chr); }); }
  });
  var allKeys = Object.keys(data).sort();

  var dict = function (name) { return data[name]; };
  dict.names = function (p) {
    if (typeof p === "string") { return (index[p] || []).slice(); }
    else { return (p === true ? allKeys : keys).slice(); }
  };
  return dict;
};

var combine = function (a, b) {
  var dict = function (name) { return a(name) || b(name); };
  dict.names = function (p) { return a.names(p).concat(b.names(p)); };
  return dict;
};

/**
 * A dictionary of scales: a function that given a scale name (without tonic)
 * returns an array of intervals
 *
 * @function
 * @param {string} name
 * @return {Array} intervals
 * @example
 * import { scale } from "tonal-dictionary"
 * scale("major") // => ["1P", "2M", ...]
 * scale.names(); // => ["major", ...]
 */
var es6_scale = dictionary(scales);

/**
 * A dictionary of chords: a function that given a chord type
 * returns an array of intervals
 *
 * @function
 * @param {string} type
 * @return {Array} intervals
 * @example
 * import { chord } from "tonal-dictionary"
 * chord("Maj7") // => ["1P", "3M", ...]
 * chord.names(); // => ["Maj3", ...]
 */
var es6_chord = dictionary(data_chords);
var es6_pcset = combine(es6_scale, es6_chord);

// CONCATENATED MODULE: ../node_modules/tonal-scale/build/es6.js
/**
 * [![npm version](https://img.shields.io/npm/v/tonal-scale.svg?style=flat-square)](https://www.npmjs.com/package/tonal-scale)
 *
 * A scale is a collection of pitches in ascending or descending order.
 *
 * This module provides functions to get and manipulate scales.
 *
 * @example
 * // es6
 * import * as Scale from "tonal-scale"
 * // es5
 * const Scale = require("tonal-scale");
 *
 * @example
 * Scale.notes("Ab bebop") // => [ "Ab", "Bb", "C", "Db", "Eb", "F", "Gb", "G" ]
 * Scale.names() => ["major", "minor", ...]
 * @module Scale
 */






var NO_SCALE = Object.freeze({
  name: null,
  intervals: [],
  names: [],
  chroma: null,
  setnum: null
});

var build_es6_properties = function (name) {
  var intervals = es6_scale(name);
  if (!intervals) { return NO_SCALE; }
  var s = { intervals: intervals, name: name };
  s.chroma = tonal_pcset_build_es6_chroma(intervals);
  s.setnum = parseInt(s.chroma, 2);
  s.names = es6_scale.names(s.chroma);
  return Object.freeze(s);
};

var memoize = function (fn, cache) { return function (str) { return cache[str] || (cache[str] = fn(str)); }; };

/**
 * Get scale properties. It returns an object with:
 * - name: the scale name
 * - names: a list with all possible names (includes the current)
 * - intervals: an array with the scale intervals
 * - chroma:  scale croma (see pcset)
 * - setnum: scale chroma number
 *
 * @function
 * @param {string} name - the scale name (without tonic)
 * @return {Object}
 */
var build_es6_props = memoize(build_es6_properties, {});

/**
 * Return the available scale names
 *
 * @function
 * @param {boolean} [aliases=false] - true to include aliases
 * @return {Array} the scale names
 *
 * @example
 * Scale.names() // => ["maj7", ...]
 */
var build_es6_names = es6_scale.names;

/**
 * Given a scale name, return its intervals. The name can be the type and
 * optionally the tonic (which is ignored)
 *
 * It retruns an empty array when no scale found
 *
 * @function
 * @param {string} name - the scale name (tonic and type, tonic is optional)
 * @return {Array<string>} the scale intervals if is a known scale or an empty
 * array if no scale found
 * @example
 * Scale.intervals("major") // => [ "1P", "2M", "3M", "4P", "5P", "6M", "7M" ]
 */
var build_es6_intervals = function (name) {
  var p = build_es6_tokenize(name);
  return build_es6_props(p[1]).intervals;
};

/**
 * Get the notes (pitch classes) of a scale.
 *
 * Note that it always returns an array, and the values are only pitch classes.
 *
 * @function
 * @param {string} tonic
 * @param {string} nameOrTonic - the scale name or tonic (if 2nd param)
 * @param {string} [name] - the scale name without tonic
 * @return {Array} a pitch classes array
 *
 * @example
 * Scale.notes("C", "major") // => [ "C", "D", "E", "F", "G", "A", "B" ]
 * Scale.notes("C major") // => [ "C", "D", "E", "F", "G", "A", "B" ]
 * Scale.notes("C4", "major") // => [ "C", "D", "E", "F", "G", "A", "B" ]
 * Scale.notes("A4", "no-scale") // => []
 * Scale.notes("blah", "major") // => []
 */
function es6_notes(nameOrTonic, name) {
  var p = build_es6_tokenize(nameOrTonic);
  name = name || p[1];
  return build_es6_intervals(name).map(transpose(p[0]));
}

/**
 * Check if the given name is a known scale from the scales dictionary
 *
 * @function
 * @param {string} name - the scale name
 * @return {Boolean}
 */
function exists(name) {
  var p = build_es6_tokenize(name);
  return es6_scale(p[1]) !== undefined;
}

/**
 * Given a string with a scale name and (optionally) a tonic, split
 * that components.
 *
 * It retuns an array with the form [ name, tonic ] where tonic can be a
 * note name or null and name can be any arbitrary string
 * (this function doesn"t check if that scale name exists)
 *
 * @function
 * @param {string} name - the scale name
 * @return {Array} an array [tonic, name]
 * @example
 * Scale.tokenize("C mixolydean") // => ["C", "mixolydean"]
 * Scale.tokenize("anything is valid") // => ["", "anything is valid"]
 * Scale.tokenize() // => ["", ""]
 */
function build_es6_tokenize(str) {
  if (typeof str !== "string") { return ["", ""]; }
  var i = str.indexOf(" ");
  var tonic = es6_name(str.substring(0, i)) || es6_name(str) || "";
  var name = tonic !== "" ? str.substring(tonic.length + 1) : str;
  return [tonic, name.length ? name : ""];
}

/**
 * Find mode names of a scale
 *
 * @function
 * @param {string} name - scale name
 * @example
 * Scale.modeNames("C pentatonic") // => [
 *   ["C", "major pentatonic"],
 *   ["D", "egyptian"],
 *   ["E", "malkos raga"],
 *   ["G", "ritusen"],
 *   ["A", "minor pentatonic"]
 * ]
 */
var modeNames = function (name) {
  var ivls = build_es6_intervals(name);
  var tonics = es6_notes(name);

  return modes(ivls)
    .map(function (chroma, i) {
      var name = es6_scale.names(chroma)[0];
      if (name) { return [tonics[i] || ivls[i], name]; }
    })
    .filter(function (x) { return x; });
};

/**
 * Get all chords that fits a given scale
 *
 * @function
 * @param {string} name - the scale name
 * @return {Array<string>} - the chord names
 *
 * @example
 * Scale.chords("pentatonic") // => ["5", "64", "M", "M6", "Madd9", "Msus2"]
 */
var es6_chords = function (name) {
  var inScale = isSubsetOf(build_es6_intervals(name));
  return es6_chord.names().filter(function (name) { return inScale(es6_chord(name)); });
};

/**
 * Given an array of notes, return the scale: a pitch class set starting from
 * the first note of the array
 *
 * @function
 * @param {Array} notes
 * @return {Array}
 * @example
 * Scale.toScale(['C4', 'c3', 'C5', 'C4', 'c4']) // => ["C"]
 * Scale.toScale(['D4', 'c#5', 'A5', 'F#6']) // => ["D", "F#", "A", "C#"]
 */
var toScale = function (notes) {
  var pcset = compact(notes.map(pc));
  if (!pcset.length) { return pcset; }
  var tonic = pcset[0];
  var scale = unique(pcset);
  return rotate(scale.indexOf(tonic), scale);
};

/**
 * Get all scales names that are a superset of the given one
 * (has the same notes and at least one more)
 *
 * @function
 * @param {string} name
 * @return {Array} a list of scale names
 * @example
 * Scale.supersets("major") // => ["bebop", "bebop dominant", "bebop major", "chromatic", "ichikosucho"]
 */
var supersets = function (name) {
  if (!build_es6_intervals(name).length) { return []; }
  var isSuperset = isSupersetOf(build_es6_intervals(name));
  return es6_scale.names().filter(function (name) { return isSuperset(es6_scale(name)); });
};

/**
 * Find all scales names that are a subset of the given one
 * (has less notes but all from the given scale)
 *
 * @function
 * @param {string} name
 * @return {Array} a list of scale names
 *
 * @example
 * Scale.subsets("major") // => ["ionian pentatonic", "major pentatonic", "ritusen"]
 */
var subsets = function (name) {
  var isSubset = isSubsetOf(build_es6_intervals(name));
  return es6_scale.names().filter(function (name) { return isSubset(es6_scale(name)); });
};

// CONCATENATED MODULE: ../node_modules/tonal-chord/build/es6.js
/**
 * [![npm version](https://img.shields.io/npm/v/tonal-chord.svg)](https://www.npmjs.com/package/tonal-chord)
 * [![tonal](https://img.shields.io/badge/tonal-chord-yellow.svg)](https://www.npmjs.com/browse/keyword/tonal)
 *
 * `tonal-chord` is a collection of functions to manipulate musical chords
 *
 * This is part of [tonal](https://www.npmjs.com/package/tonal) music theory library.
 *
 * @example
 * // es6
 * import * as Chord from "tonal-chord"
 * // es5
 * const Chord = require("tonal-chord")
 *
 * @example
 * Chord.notes("CMaj7") // => ["C", "E", "G", "B"]
 *
 * @module Chord
 */





/**
 * Return the available chord names
 *
 * @function
 * @param {boolean} aliases - true to include aliases
 * @return {Array} the chord names
 *
 * @example
 * Chord.names() // => ["maj7", ...]
 */
var tonal_chord_build_es6_names = es6_chord.names;

var NO_CHORD = Object.freeze({
  name: null,
  names: [],
  intervals: [],
  chroma: null,
  setnum: null
});

var tonal_chord_build_es6_properties = function (name) {
  var intervals = es6_chord(name);
  if (!intervals) { return NO_CHORD; }
  var s = { intervals: intervals, name: name };
  s.chroma = tonal_pcset_build_es6_chroma(intervals);
  s.setnum = parseInt(s.chroma, 2);
  s.names = es6_chord.names(s.chroma);
  return s;
};

var build_es6_memo = function (fn, cache) {
  if ( cache === void 0 ) cache = {};

  return function (str) { return cache[str] || (cache[str] = fn(str)); };
};

/**
 * Get chord properties. It returns an object with:
 *
 * - name: the chord name
 * - names: a list with all possible names (includes the current)
 * - intervals: an array with the chord intervals
 * - chroma:  chord croma (see pcset)
 * - setnum: chord chroma number
 *
 * @function
 * @param {string} name - the chord name (without tonic)
 * @return {Object} an object with the properties or a object with all properties
 * set to null if not valid chord name
 */
var tonal_chord_build_es6_props = build_es6_memo(tonal_chord_build_es6_properties);

/**
 * Get chord intervals. It always returns an array
 *
 * @function
 * @param {string} name - the chord name (optionally a tonic and type)
 * @return {Array<String>} a list of intervals or null if the type is not known
 */
var tonal_chord_build_es6_intervals = function (name) { return tonal_chord_build_es6_props(tonal_chord_build_es6_tokenize(name)[1]).intervals; };

/**
 * Get the chord notes of a chord. This function accepts either a chord name
 * (for example: "Cmaj7") or a list of notes.
 *
 * It always returns an array, even if the chord is not found.
 *
 * @function
 * @param {string} nameOrTonic - name of the chord or the tonic (if the second parameter is present)
 * @param {string} [name] - (Optional) name if the first parameter is the tonic
 * @return {Array} an array of notes or an empty array
 *
 * @example
 * Chord.notes("Cmaj7") // => ["C", "E", "G", "B"]
 * Chord.notes("C", "maj7") // => ["C", "E", "G", "B"]
 */
function build_es6_notes(nameOrTonic, name) {
  if (name) { return tonal_chord_build_es6_props(name).intervals.map(transpose(nameOrTonic)); }
  var ref = tonal_chord_build_es6_tokenize(nameOrTonic);
  var tonic = ref[0];
  var type = ref[1];
  return tonal_chord_build_es6_props(type).intervals.map(transpose(tonic));
}

/**
 * Check if a given name correspond to a chord in the dictionary
 *
 * @function
 * @param {string} name
 * @return {Boolean}
 * @example
 * Chord.exists("CMaj7") // => true
 * Chord.exists("Maj7") // => true
 * Chord.exists("Ablah") // => false
 */
var es6_exists = function (name) { return es6_chord(tonal_chord_build_es6_tokenize(name)[1]) !== undefined; };

/**
 * Get all chords names that are a superset of the given one
 * (has the same notes and at least one more)
 *
 * @function
 * @param {string} name
 * @return {Array} a list of chord names
 */
var es6_supersets = function (name) {
  if (!tonal_chord_build_es6_intervals(name).length) { return []; }
  var isSuperset = isSupersetOf(tonal_chord_build_es6_intervals(name));
  return es6_chord.names().filter(function (name) { return isSuperset(es6_chord(name)); });
};

/**
 * Find all chords names that are a subset of the given one
 * (has less notes but all from the given chord)
 *
 * @function
 * @param {string} name
 * @return {Array} a list of chord names
 */
var es6_subsets = function (name) {
  var isSubset = isSubsetOf(tonal_chord_build_es6_intervals(name));
  return es6_chord.names().filter(function (name) { return isSubset(es6_chord(name)); });
};

// 6, 64, 7, 9, 11 and 13 are consider part of the chord
// (see https://github.com/danigb/tonal/issues/55)
var NUM_TYPES = /^(6|64|7|9|11|13)$/;
/**
 * Tokenize a chord name. It returns an array with the tonic and chord type
 * If not tonic is found, all the name is considered the chord name.
 *
 * This function does NOT check if the chord type exists or not. It only tries
 * to split the tonic and chord type.
 *
 * @function
 * @param {string} name - the chord name
 * @return {Array} an array with [tonic, type]
 * @example
 * Chord.tokenize("Cmaj7") // => [ "C", "maj7" ]
 * Chord.tokenize("C7") // => [ "C", "7" ]
 * Chord.tokenize("mMaj7") // => [ "", "mMaj7" ]
 * Chord.tokenize("Cnonsense") // => [ "C", "nonsense" ]
 */
function tonal_chord_build_es6_tokenize(name) {
  var p = tokenize(name);
  if (p[0] === "") { return ["", name]; }
  // aug is augmented (see https://github.com/danigb/tonal/issues/55)
  if (p[0] === "A" && p[3] === "ug") { return ["", "aug"]; }

  if (NUM_TYPES.test(p[2])) {
    return [p[0] + p[1], p[2] + p[3]];
  } else {
    return [p[0] + p[1] + p[2], p[3]];
  }
}

// CONCATENATED MODULE: ../node_modules/tonal/index.js
/**
 * [![npm version](https://img.shields.io/npm/v/tonal-key.svg?style=flat-square)](https://www.npmjs.com/package/tonal-key)
 *
 * The `Tonal` module is a facade to the rest of the modules. They are namespaced,
 * so for example to use `pc` function from `tonal-note` you have to write:
 * `Tonal.Note.pc`
 *
 * It exports the following modules:
 * - Note
 * - Interval
 * - Distance
 * - Scale
 * - Chord
 * - PcSet
 *
 * Additionally this facade exports some functions without namespace (see "Methods" below)
 *
 * @example
 * // es6 modules
 * import * as Tonal from "tonal"
 * Tonal.Note.name("cx") // => "C##"
 *
 * @example
 * import { Note } from "tonal"
 * Note.name("bb") // => "Bb"
 *
 * @example
 * // es5 node modules
 * var Tonal = require("tonal");
 * Tonal.Distance.transpose(Tonal.Note.pc("C#2"), "M3") // => "E#"
 * Tonal.Chord.notes("Dmaj7") // => ["D", "F#", "A", "C#"]
 *
 * @module Tonal
 */











/**
 * Transpose a note by an interval
 * @function
 * @param {string} note
 * @param {string} interval
 * @return {string} the transported note
 * @see Distance.transpose
 */
const tonal_transpose = transpose;

/**
 * Get the interval from two notes
 * @function
 * @param {string} from
 * @param {string} to
 * @return {string} the interval in reverse shorthand notation
 * @see Distance.interval
 */
const tonal_interval = es6_interval;

/**
 * Get note properties
 * @function
 * @param {string} note - the note name
 * @return {Object}
 * @see Note.props
 * @example
 * Tonal.note("A4").chroma // => 9
 */
const tonal_note = props;

/**
 * Get midi note number
 * @function
 * @param {string} note
 * @return {Number}
 * @see Note.midi
 * @example
 * Tonal.midi("A4") // => 49
 */
const tonal_midi = midi;

/**
 * Get note frequency using equal tempered tuning at 440
 * @function
 * @param {string} note
 * @return {Number}
 * @see Note.freq
 * @example
 * Tonal.freq("A4") // => 440
 */
const tonal_freq = freq;

/**
 * Get intervals from a chord type
 * @function
 * @param {string} type - the chord type (no tonic)
 * @return {Array} an array of intervals or undefined if the chord type is not known
 * @see Dictionary.chord
 * @example
 * Tonal.chord("m7b5") // => ["1P", "3m", "5d", "7m"]
 */
const tonal_chord = es6_chord;

/**
 * Get intervals from scale name
 * @function
 * @param {string} name - the scale name (without tonic)
 * @return {Array} an array of intervals or undefiend if the scale is not kown
 * @example
 * Tonal.scale("major") // => ["1P", "2M", "3M"...]
 */
const tonal_scale = es6_scale;

// EXTERNAL MODULE: ./core/constants.ts
var constants = __webpack_require__(1);

// CONCATENATED MODULE: ./core/chords.ts
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChordQuality", function() { return ChordQuality; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChordSymbolException", function() { return ChordSymbolException; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChordEncodingException", function() { return ChordEncodingException; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChordSymbols", function() { return chords_ChordSymbols; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChordEncoder", function() { return chords_ChordEncoder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chordEncoderFromType", function() { return chordEncoderFromType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MajorMinorChordEncoder", function() { return chords_MajorMinorChordEncoder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TriadChordEncoder", function() { return chords_TriadChordEncoder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PitchChordEncoder", function() { return chords_PitchChordEncoder; });



const CHORD_QUALITY_INTERVALS = [
    ['1P', '3M', '5P'],
    ['1P', '3m', '5P'],
    ['1P', '3M', '5A'],
    ['1P', '3m', '5d'],
];
var ChordQuality;
(function (ChordQuality) {
    ChordQuality[ChordQuality["Major"] = 0] = "Major";
    ChordQuality[ChordQuality["Minor"] = 1] = "Minor";
    ChordQuality[ChordQuality["Augmented"] = 2] = "Augmented";
    ChordQuality[ChordQuality["Diminished"] = 3] = "Diminished";
    ChordQuality[ChordQuality["Other"] = 4] = "Other";
})(ChordQuality || (ChordQuality = {}));
class ChordSymbolException extends Error {
    constructor(message) {
        super(message);
        Object.setPrototypeOf(this, new.target.prototype);
    }
}
class ChordEncodingException extends Error {
    constructor(message) {
        super(message);
        Object.setPrototypeOf(this, new.target.prototype);
    }
}
class chords_ChordSymbols {
    static pitches(chord) {
        const root = tonal_chord_build_es6_namespaceObject.tokenize(chord)[0];
        if (!root || !tonal_chord_build_es6_namespaceObject.exists(chord)) {
            throw new ChordSymbolException(`Unrecognized chord symbol: ${chord}`);
        }
        const notes = tonal_chord_build_es6_namespaceObject.notes(chord);
        return notes.map(es6_namespaceObject.chroma);
    }
    static root(chord) {
        const root = tonal_chord_build_es6_namespaceObject.tokenize(chord)[0];
        if (!root) {
            throw new ChordSymbolException(`Chord symbol has unknown root: ${chord}`);
        }
        return es6_namespaceObject.chroma(root);
    }
    static quality(chord) {
        if (!tonal_chord_build_es6_namespaceObject.exists(chord)) {
            throw new ChordSymbolException(`Unrecognized chord symbol: ${chord}`);
        }
        const intervals = tonal_chord_build_es6_namespaceObject.intervals(chord);
        const qualities = CHORD_QUALITY_INTERVALS.map(cqis => cqis.every(cqi => intervals.includes(cqi)));
        const i = qualities.indexOf(true);
        const j = qualities.lastIndexOf(true);
        if (i >= 0 && i === j) {
            return i;
        }
        else {
            return ChordQuality.Other;
        }
    }
}
class chords_ChordEncoder {
    encodeProgression(chords, numSteps) {
        const encodedChords = chords.map(chord => this.encode(chord));
        const indices = Array.from(Array(numSteps).keys())
            .map(step => Math.floor(step * encodedChords.length / numSteps));
        return tfjs_amd_tf_root_tf_["stack"](indices.map(i => encodedChords[i]));
    }
}
function chordEncoderFromType(type) {
    switch (type) {
        case 'MajorMinorChordEncoder':
            return new chords_MajorMinorChordEncoder();
        case 'TriadChordEncoder':
            return new chords_TriadChordEncoder();
        case 'PitchChordEncoder':
            return new chords_PitchChordEncoder();
        default:
            throw new Error(`Unknown chord encoder type: ${type}`);
    }
}
class chords_MajorMinorChordEncoder extends chords_ChordEncoder {
    constructor() {
        super(...arguments);
        this.depth = 1 + 2 * constants["NUM_PITCH_CLASSES"];
    }
    index(chord) {
        if (chord === constants["NO_CHORD"]) {
            return 0;
        }
        const root = chords_ChordSymbols.root(chord);
        const quality = chords_ChordSymbols.quality(chord);
        const index = 1 + quality * constants["NUM_PITCH_CLASSES"] + root;
        if (index >= this.depth) {
            throw new ChordEncodingException(`Chord is neither major nor minor: ${chord}`);
        }
        return index;
    }
    encode(chord) {
        return tfjs_amd_tf_root_tf_["tidy"](() => tfjs_amd_tf_root_tf_["oneHot"](tfjs_amd_tf_root_tf_["tensor1d"]([this.index(chord)], 'int32'), this.depth)
            .as1D());
    }
}
class chords_TriadChordEncoder extends chords_ChordEncoder {
    constructor() {
        super(...arguments);
        this.depth = 1 + 4 * constants["NUM_PITCH_CLASSES"];
    }
    index(chord) {
        if (chord === constants["NO_CHORD"]) {
            return 0;
        }
        const root = chords_ChordSymbols.root(chord);
        const quality = chords_ChordSymbols.quality(chord);
        const index = 1 + quality * constants["NUM_PITCH_CLASSES"] + root;
        if (index >= this.depth) {
            throw new ChordEncodingException(`Chord is not a standard triad: ${chord}`);
        }
        return index;
    }
    encode(chord) {
        return tfjs_amd_tf_root_tf_["tidy"](() => tfjs_amd_tf_root_tf_["oneHot"](tfjs_amd_tf_root_tf_["tensor1d"]([this.index(chord)], 'int32'), this.depth)
            .as1D());
    }
}
class chords_PitchChordEncoder extends chords_ChordEncoder {
    constructor() {
        super(...arguments);
        this.depth = 1 + 3 * constants["NUM_PITCH_CLASSES"];
    }
    encode(chord) {
        return tfjs_amd_tf_root_tf_["tidy"](() => {
            if (chord === constants["NO_CHORD"]) {
                return tfjs_amd_tf_root_tf_["oneHot"](tfjs_amd_tf_root_tf_["tensor1d"]([0], 'int32'), this.depth).as1D();
            }
            const root = chords_ChordSymbols.root(chord);
            const rootEncoding = tfjs_amd_tf_root_tf_["oneHot"](tfjs_amd_tf_root_tf_["tensor1d"]([root], 'int32'), constants["NUM_PITCH_CLASSES"])
                .as1D();
            const pitchBuffer = tfjs_amd_tf_root_tf_["buffer"]([constants["NUM_PITCH_CLASSES"]]);
            chords_ChordSymbols.pitches(chord).forEach(pitch => pitchBuffer.set(1.0, pitch));
            const pitchEncoding = pitchBuffer.toTensor().as1D();
            const bassEncoding = rootEncoding;
            return tfjs_amd_tf_root_tf_["concat1d"]([tfjs_amd_tf_root_tf_["tensor1d"]([0.0]), rootEncoding, pitchEncoding, bassEncoding]);
        });
    }
}


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var Midi = {};

(function(exported) {

	var DEFAULT_VOLUME   = exported.DEFAULT_VOLUME   = 90;
	var DEFAULT_DURATION = exported.DEFAULT_DURATION = 128;
	var DEFAULT_CHANNEL  = exported.DEFAULT_CHANNEL  = 0;

	/* ******************************************************************
	 * Utility functions
	 ****************************************************************** */

	var Util = {

		midi_letter_pitches: { a:21, b:23, c:12, d:14, e:16, f:17, g:19 },

		/**
		 * Convert a symbolic note name (e.g. "c4") to a numeric MIDI pitch (e.g.
		 * 60, middle C).
		 *
		 * @param {string} n - The symbolic note name to parse.
		 * @returns {number} The MIDI pitch that corresponds to the symbolic note
		 * name.
		 */
		midiPitchFromNote: function(n) {
			var matches = /([a-g])(#+|b+)?([0-9]+)$/i.exec(n);
			var note = matches[1].toLowerCase(), accidental = matches[2] || '', octave = parseInt(matches[3], 10);
			return (12 * octave) + Util.midi_letter_pitches[note] + (accidental.substr(0,1)=='#'?1:-1) * accidental.length;
		},

		/**
		 * Ensure that the given argument is converted to a MIDI pitch. Note that
		 * it may already be one (including a purely numeric string).
		 *
		 * @param {string|number} p - The pitch to convert.
		 * @returns {number} The resulting numeric MIDI pitch.
		 */
		ensureMidiPitch: function(p) {
			if (typeof p == 'number' || !/[^0-9]/.test(p)) {
				// numeric pitch
				return parseInt(p, 10);
			} else {
				// assume it's a note name
				return Util.midiPitchFromNote(p);
			}
		},

		midi_pitches_letter: { '12':'c', '13':'c#', '14':'d', '15':'d#', '16':'e', '17':'f', '18':'f#', '19':'g', '20':'g#', '21':'a', '22':'a#', '23':'b' },
		midi_flattened_notes: { 'a#':'bb', 'c#':'db', 'd#':'eb', 'f#':'gb', 'g#':'ab' },

		/**
		 * Convert a numeric MIDI pitch value (e.g. 60) to a symbolic note name
		 * (e.g. "c4").
		 *
		 * @param {number} n - The numeric MIDI pitch value to convert.
		 * @param {boolean} [returnFlattened=false] - Whether to prefer flattened
		 * notes to sharpened ones. Optional, default false.
		 * @returns {string} The resulting symbolic note name.
		 */
		noteFromMidiPitch: function(n, returnFlattened) {
			var octave = 0, noteNum = n, noteName, returnFlattened = returnFlattened || false;
			if (n > 23) {
				// noteNum is on octave 1 or more
				octave = Math.floor(n/12) - 1;
				// subtract number of octaves from noteNum
				noteNum = n - octave * 12;
			}

			// get note name (c#, d, f# etc)
			noteName = Util.midi_pitches_letter[noteNum];
			// Use flattened notes if requested (e.g. f# should be output as gb)
			if (returnFlattened && noteName.indexOf('#') > 0) {
				noteName = Util.midi_flattened_notes[noteName];
			}
			return noteName + octave;
		},

		/**
		 * Convert beats per minute (BPM) to microseconds per quarter note (MPQN).
		 *
		 * @param {number} bpm - A number in beats per minute.
		 * @returns {number} The number of microseconds per quarter note.
		 */
		mpqnFromBpm: function(bpm) {
			var mpqn = Math.floor(60000000 / bpm);
			var ret=[];
			do {
				ret.unshift(mpqn & 0xFF);
				mpqn >>= 8;
			} while (mpqn);
			while (ret.length < 3) {
				ret.push(0);
			}
			return ret;
		},

		/**
		 * Convert microseconds per quarter note (MPQN) to beats per minute (BPM).
		 *
		 * @param {number} mpqn - The number of microseconds per quarter note.
		 * @returns {number} A number in beats per minute.
		 */
		bpmFromMpqn: function(mpqn) {
			var m = mpqn;
			if (typeof mpqn[0] != 'undefined') {
				m = 0;
				for (var i=0, l=mpqn.length-1; l >= 0; ++i, --l) {
					m |= mpqn[i] << l;
				}
			}
			return Math.floor(60000000 / mpqn);
		},

		/**
		 * Converts an array of bytes to a string of hexadecimal characters. Prepares
		 * it to be converted into a base64 string.
		 *
		 * @param {Array} byteArray - Array of bytes to be converted.
		 * @returns {string} Hexadecimal string, e.g. "097B8A".
		 */
		codes2Str: function(byteArray) {
			return String.fromCharCode.apply(null, byteArray);
		},

		/**
		 * Converts a string of hexadecimal values to an array of bytes. It can also
		 * add remaining "0" nibbles in order to have enough bytes in the array as the
		 * `finalBytes` parameter.
		 *
		 * @param {string} str - string of hexadecimal values e.g. "097B8A"
		 * @param {number} [finalBytes] - Optional. The desired number of bytes
		 * (not nibbles) that the returned array should contain.
		 * @returns {Array} An array of nibbles.
		 */
		str2Bytes: function (str, finalBytes) {
			if (finalBytes) {
				while ((str.length / 2) < finalBytes) { str = "0" + str; }
			}

			var bytes = [];
			for (var i=str.length-1; i>=0; i = i-2) {
				var chars = i === 0 ? str[i] : str[i-1] + str[i];
				bytes.unshift(parseInt(chars, 16));
			}

			return bytes;
		},

		/**
		 * Translates number of ticks to MIDI timestamp format, returning an array
		 * of bytes with the time values. MIDI has a very particular way to express
		 * time; take a good look at the spec before ever touching this function.
		 *
		 * @param {number} ticks - Number of ticks to be translated.
		 * @returns {number} Array of bytes that form the MIDI time value.
		 */
		translateTickTime: function(ticks) {
			var buffer = ticks & 0x7F;

			while (ticks = ticks >> 7) {
				buffer <<= 8;
				buffer |= ((ticks & 0x7F) | 0x80);
			}

			var bList = [];
			while (true) {
				bList.push(buffer & 0xff);

				if (buffer & 0x80) { buffer >>= 8; }
				else { break; }
			}
			return bList;
		},

	};

	/* ******************************************************************
	 * Event class
	 ****************************************************************** */

	/**
	 * Construct a MIDI event.
	 *
	 * Parameters include:
	 *  - time [optional number] - Ticks since previous event.
	 *  - type [required number] - Type of event.
	 *  - channel [required number] - Channel for the event.
	 *  - param1 [required number] - First event parameter.
	 *  - param2 [optional number] - Second event parameter.
	 */
	var MidiEvent = function(params) {
		if (!this) return new MidiEvent(params);
		if (params &&
				(params.type    !== null || params.type    !== undefined) &&
				(params.channel !== null || params.channel !== undefined) &&
				(params.param1  !== null || params.param1  !== undefined)) {
			this.setTime(params.time);
			this.setType(params.type);
			this.setChannel(params.channel);
			this.setParam1(params.param1);
			this.setParam2(params.param2);
		}
	};

	// event codes
	MidiEvent.NOTE_OFF           = 0x80;
	MidiEvent.NOTE_ON            = 0x90;
	MidiEvent.AFTER_TOUCH        = 0xA0;
	MidiEvent.CONTROLLER         = 0xB0;
	MidiEvent.PROGRAM_CHANGE     = 0xC0;
	MidiEvent.CHANNEL_AFTERTOUCH = 0xD0;
	MidiEvent.PITCH_BEND         = 0xE0;


	/**
	 * Set the time for the event in ticks since the previous event.
	 *
	 * @param {number} ticks - The number of ticks since the previous event. May
	 * be zero.
	 */
	MidiEvent.prototype.setTime = function(ticks) {
		this.time = Util.translateTickTime(ticks || 0);
	};

	/**
	 * Set the type of the event. Must be one of the event codes on MidiEvent.
	 *
	 * @param {number} type - Event type.
	 */
	MidiEvent.prototype.setType = function(type) {
		if (type < MidiEvent.NOTE_OFF || type > MidiEvent.PITCH_BEND) {
			throw new Error("Trying to set an unknown event: " + type);
		}

		this.type = type;
	};

	/**
	 * Set the channel for the event. Must be between 0 and 15, inclusive.
	 *
	 * @param {number} channel - The event channel.
	 */
	MidiEvent.prototype.setChannel = function(channel) {
		if (channel < 0 || channel > 15) {
			throw new Error("Channel is out of bounds.");
		}

		this.channel = channel;
	};

	/**
	 * Set the first parameter for the event. Must be between 0 and 255,
	 * inclusive.
	 *
	 * @param {number} p - The first event parameter value.
	 */
	MidiEvent.prototype.setParam1 = function(p) {
		this.param1 = p;
	};

	/**
	 * Set the second parameter for the event. Must be between 0 and 255,
	 * inclusive.
	 *
	 * @param {number} p - The second event parameter value.
	 */
	MidiEvent.prototype.setParam2 = function(p) {
		this.param2 = p;
	};

	/**
	 * Serialize the event to an array of bytes.
	 *
	 * @returns {Array} The array of serialized bytes.
	 */
	MidiEvent.prototype.toBytes = function() {
		var byteArray = [];

		var typeChannelByte = this.type | (this.channel & 0xF);

		byteArray.push.apply(byteArray, this.time);
		byteArray.push(typeChannelByte);
		byteArray.push(this.param1);

		// Some events don't have a second parameter
		if (this.param2 !== undefined && this.param2 !== null) {
			byteArray.push(this.param2);
		}
		return byteArray;
	};

	/* ******************************************************************
	 * MetaEvent class
	 ****************************************************************** */

	/**
	 * Construct a meta event.
	 *
	 * Parameters include:
	 *  - time [optional number] - Ticks since previous event.
	 *  - type [required number] - Type of event.
	 *  - data [optional array|string] - Event data.
	 */
	var MetaEvent = function(params) {
		if (!this) return new MetaEvent(params);
		var p = params || {};
		this.setTime(params.time);
		this.setType(params.type);
		this.setData(params.data);
	};

	MetaEvent.SEQUENCE   = 0x00;
	MetaEvent.TEXT       = 0x01;
	MetaEvent.COPYRIGHT  = 0x02;
	MetaEvent.TRACK_NAME = 0x03;
	MetaEvent.INSTRUMENT = 0x04;
	MetaEvent.LYRIC      = 0x05;
	MetaEvent.MARKER     = 0x06;
	MetaEvent.CUE_POINT  = 0x07;
	MetaEvent.CHANNEL_PREFIX = 0x20;
	MetaEvent.END_OF_TRACK   = 0x2f;
	MetaEvent.TEMPO      = 0x51;
	MetaEvent.SMPTE      = 0x54;
	MetaEvent.TIME_SIG   = 0x58;
	MetaEvent.KEY_SIG    = 0x59;
	MetaEvent.SEQ_EVENT  = 0x7f;

	/**
	 * Set the time for the event in ticks since the previous event.
	 *
	 * @param {number} ticks - The number of ticks since the previous event. May
	 * be zero.
	 */
	MetaEvent.prototype.setTime = function(ticks) {
		this.time = Util.translateTickTime(ticks || 0);
	};

	/**
	 * Set the type of the event. Must be one of the event codes on MetaEvent.
	 *
	 * @param {number} t - Event type.
	 */
	MetaEvent.prototype.setType = function(t) {
		this.type = t;
	};

	/**
	 * Set the data associated with the event. May be a string or array of byte
	 * values.
	 *
	 * @param {string|Array} d - Event data.
	 */
	MetaEvent.prototype.setData = function(d) {
		this.data = d;
	};

	/**
	 * Serialize the event to an array of bytes.
	 *
	 * @returns {Array} The array of serialized bytes.
	 */
	MetaEvent.prototype.toBytes = function() {
		if (!this.type) {
			throw new Error("Type for meta-event not specified.");
		}

		var byteArray = [];
		byteArray.push.apply(byteArray, this.time);
		byteArray.push(0xFF, this.type);

		// If data is an array, we assume that it contains several bytes. We
		// apend them to byteArray.
		if (Array.isArray(this.data)) {
			byteArray.push(this.data.length);
			byteArray.push.apply(byteArray, this.data);
		} else if (typeof this.data == 'number') {
			byteArray.push(1, this.data);
		} else if (this.data !== null && this.data !== undefined) {
			// assume string; may be a bad assumption
			byteArray.push(this.data.length);
			var dataBytes = this.data.split('').map(function(x){ return x.charCodeAt(0) });
			byteArray.push.apply(byteArray, dataBytes);
		} else {
			byteArray.push(0);
		}

		return byteArray;
	};

	/* ******************************************************************
	 * Track class
	 ****************************************************************** */

	/**
	 * Construct a MIDI track.
	 *
	 * Parameters include:
	 *  - events [optional array] - Array of events for the track.
	 */
	var Track = function(config) {
		if (!this) return new Track(config);
		var c = config || {};
		this.events = c.events || [];
	};

	Track.START_BYTES = [0x4d, 0x54, 0x72, 0x6b];
	Track.END_BYTES   = [0x00, 0xFF, 0x2F, 0x00];

	/**
	 * Add an event to the track.
	 *
	 * @param {MidiEvent|MetaEvent} event - The event to add.
	 * @returns {Track} The current track.
	 */
	Track.prototype.addEvent = function(event) {
		this.events.push(event);
		return this;
	};

	/**
	 * Add a note-on event to the track.
	 *
	 * @param {number} channel - The channel to add the event to.
	 * @param {number|string} pitch - The pitch of the note, either numeric or
	 * symbolic.
	 * @param {number} [time=0] - The number of ticks since the previous event,
	 * defaults to 0.
	 * @param {number} [velocity=90] - The volume for the note, defaults to
	 * DEFAULT_VOLUME.
	 * @returns {Track} The current track.
	 */
	Track.prototype.addNoteOn = Track.prototype.noteOn = function(channel, pitch, time, velocity) {
		this.events.push(new MidiEvent({
			type: MidiEvent.NOTE_ON,
			channel: channel,
			param1: Util.ensureMidiPitch(pitch),
			param2: velocity || DEFAULT_VOLUME,
			time: time || 0,
		}));
		return this;
	};

	/**
	 * Add a note-off event to the track.
	 *
	 * @param {number} channel - The channel to add the event to.
	 * @param {number|string} pitch - The pitch of the note, either numeric or
	 * symbolic.
	 * @param {number} [time=0] - The number of ticks since the previous event,
	 * defaults to 0.
	 * @param {number} [velocity=90] - The velocity the note was released,
	 * defaults to DEFAULT_VOLUME.
	 * @returns {Track} The current track.
	 */
	Track.prototype.addNoteOff = Track.prototype.noteOff = function(channel, pitch, time, velocity) {
		this.events.push(new MidiEvent({
			type: MidiEvent.NOTE_OFF,
			channel: channel,
			param1: Util.ensureMidiPitch(pitch),
			param2: velocity || DEFAULT_VOLUME,
			time: time || 0,
		}));
		return this;
	};

	/**
	 * Add a note-on and -off event to the track.
	 *
	 * @param {number} channel - The channel to add the event to.
	 * @param {number|string} pitch - The pitch of the note, either numeric or
	 * symbolic.
	 * @param {number} dur - The duration of the note, in ticks.
	 * @param {number} [time=0] - The number of ticks since the previous event,
	 * defaults to 0.
	 * @param {number} [velocity=90] - The velocity the note was released,
	 * defaults to DEFAULT_VOLUME.
	 * @returns {Track} The current track.
	 */
	Track.prototype.addNote = Track.prototype.note = function(channel, pitch, dur, time, velocity) {
		this.noteOn(channel, pitch, time, velocity);
		if (dur) {
			this.noteOff(channel, pitch, dur, velocity);
		}
		return this;
	};

	/**
	 * Add a note-on and -off event to the track for each pitch in an array of pitches.
	 *
	 * @param {number} channel - The channel to add the event to.
	 * @param {array} chord - An array of pitches, either numeric or
	 * symbolic.
	 * @param {number} dur - The duration of the chord, in ticks.
	 * @param {number} [velocity=90] - The velocity of the chord,
	 * defaults to DEFAULT_VOLUME.
	 * @returns {Track} The current track.
	 */
	Track.prototype.addChord = Track.prototype.chord = function(channel, chord, dur, velocity) {
		if (!Array.isArray(chord) && !chord.length) {
			throw new Error('Chord must be an array of pitches');
		}
		chord.forEach(function(note) {
			this.noteOn(channel, note, 0, velocity);
		}, this);
		chord.forEach(function(note, index) {
			if (index === 0) {
				this.noteOff(channel, note, dur);
			} else {
				this.noteOff(channel, note);
			}
		}, this);
		return this;
	};

	/**
	 * Set instrument for the track.
	 *
	 * @param {number} channel - The channel to set the instrument on.
	 * @param {number} instrument - The instrument to set it to.
	 * @param {number} [time=0] - The number of ticks since the previous event,
	 * defaults to 0.
	 * @returns {Track} The current track.
	 */
	Track.prototype.setInstrument = Track.prototype.instrument = function(channel, instrument, time) {
		this.events.push(new MidiEvent({
			type: MidiEvent.PROGRAM_CHANGE,
			channel: channel,
			param1: instrument,
			time: time || 0,
		}));
		return this;
	};

	/**
	 * Set the tempo for the track.
	 *
	 * @param {number} bpm - The new number of beats per minute.
	 * @param {number} [time=0] - The number of ticks since the previous event,
	 * defaults to 0.
	 * @returns {Track} The current track.
	 */
	Track.prototype.setTempo = Track.prototype.tempo = function(bpm, time) {
		this.events.push(new MetaEvent({
			type: MetaEvent.TEMPO,
			data: Util.mpqnFromBpm(bpm),
			time: time || 0,
		}));
		return this;
	};

	/**
	 * Serialize the track to an array of bytes.
	 *
	 * @returns {Array} The array of serialized bytes.
	 */
	Track.prototype.toBytes = function() {
		var trackLength = 0;
		var eventBytes = [];
		var startBytes = Track.START_BYTES;
		var endBytes   = Track.END_BYTES;

		var addEventBytes = function(event) {
			var bytes = event.toBytes();
			trackLength += bytes.length;
			eventBytes.push.apply(eventBytes, bytes);
		};

		this.events.forEach(addEventBytes);

		// Add the end-of-track bytes to the sum of bytes for the track, since
		// they are counted (unlike the start-of-track ones).
		trackLength += endBytes.length;

		// Makes sure that track length will fill up 4 bytes with 0s in case
		// the length is less than that (the usual case).
		var lengthBytes = Util.str2Bytes(trackLength.toString(16), 4);

		return startBytes.concat(lengthBytes, eventBytes, endBytes);
	};

	/* ******************************************************************
	 * File class
	 ****************************************************************** */

	/**
	 * Construct a file object.
	 *
	 * Parameters include:
	 *  - ticks [optional number] - Number of ticks per beat, defaults to 128.
	 *    Must be 1-32767.
	 *  - tracks [optional array] - Track data.
	 */
	var File = function(config){
		if (!this) return new File(config);

		var c = config || {};
		if (c.ticks) {
			if (typeof c.ticks !== 'number') {
				throw new Error('Ticks per beat must be a number!');
				return;
			}
			if (c.ticks <= 0 || c.ticks >= (1 << 15) || c.ticks % 1 !== 0) {
				throw new Error('Ticks per beat must be an integer between 1 and 32767!');
				return;
			}
		}

		this.ticks = c.ticks || 128;
		this.tracks = c.tracks || [];
	};

	File.HDR_CHUNKID     = "MThd";             // File magic cookie
	File.HDR_CHUNK_SIZE  = "\x00\x00\x00\x06"; // Header length for SMF
	File.HDR_TYPE0       = "\x00\x00";         // Midi Type 0 id
	File.HDR_TYPE1       = "\x00\x01";         // Midi Type 1 id

	/**
	 * Add a track to the file.
	 *
	 * @param {Track} track - The track to add.
	 */
	File.prototype.addTrack = function(track) {
		if (track) {
			this.tracks.push(track);
			return this;
		} else {
			track = new Track();
			this.tracks.push(track);
			return track;
		}
	};

	/**
	 * Serialize the MIDI file to an array of bytes.
	 *
	 * @returns {Array} The array of serialized bytes.
	 */
	File.prototype.toBytes = function() {
		var trackCount = this.tracks.length.toString(16);

		// prepare the file header
		var bytes = File.HDR_CHUNKID + File.HDR_CHUNK_SIZE;

		// set Midi type based on number of tracks
		if (parseInt(trackCount, 16) > 1) {
			bytes += File.HDR_TYPE1;
		} else {
			bytes += File.HDR_TYPE0;
		}

		// add the number of tracks (2 bytes)
		bytes += Util.codes2Str(Util.str2Bytes(trackCount, 2));
		// add the number of ticks per beat (currently hardcoded)
		bytes += String.fromCharCode((this.ticks/256),  this.ticks%256);;

		// iterate over the tracks, converting to bytes too
		this.tracks.forEach(function(track) {
			bytes += Util.codes2Str(track.toBytes());
		});

		return bytes;
	};

	/* ******************************************************************
	 * Exports
	 ****************************************************************** */

	exported.Util = Util;
	exported.File = File;
	exported.Track = Track;
	exported.Event = MidiEvent;
	exported.MetaEvent = MetaEvent;

})( Midi );

if ( true && module !== null) {
	module.exports = Midi;
} else if ( true && exports !== null) {
	exports = Midi;
} else {
	this.Midi = Midi;
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(74)(module)))

/***/ }),
/* 18 */,
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// minimal library entry point.


module.exports = __webpack_require__(20);


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var protobuf = exports;

/**
 * Build type, one of `"full"`, `"light"` or `"minimal"`.
 * @name build
 * @type {string}
 * @const
 */
protobuf.build = "minimal";

// Serialization
protobuf.Writer       = __webpack_require__(12);
protobuf.BufferWriter = __webpack_require__(29);
protobuf.Reader       = __webpack_require__(13);
protobuf.BufferReader = __webpack_require__(30);

// Utility
protobuf.util         = __webpack_require__(7);
protobuf.rpc          = __webpack_require__(31);
protobuf.roots        = __webpack_require__(33);
protobuf.configure    = configure;

/* istanbul ignore next */
/**
 * Reconfigures the library according to the environment.
 * @returns {undefined}
 */
function configure() {
    protobuf.Reader._configure(protobuf.BufferReader);
    protobuf.util._configure();
}

// Set up buffer utility according to the environment
protobuf.Writer._configure(protobuf.BufferWriter);
configure();


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = asPromise;

/**
 * Callback as used by {@link util.asPromise}.
 * @typedef asPromiseCallback
 * @type {function}
 * @param {Error|null} error Error, if any
 * @param {...*} params Additional arguments
 * @returns {undefined}
 */

/**
 * Returns a promise from a node-style callback function.
 * @memberof util
 * @param {asPromiseCallback} fn Function to call
 * @param {*} ctx Function context
 * @param {...*} params Function arguments
 * @returns {Promise<*>} Promisified function
 */
function asPromise(fn, ctx/*, varargs */) {
    var params  = new Array(arguments.length - 1),
        offset  = 0,
        index   = 2,
        pending = true;
    while (index < arguments.length)
        params[offset++] = arguments[index++];
    return new Promise(function executor(resolve, reject) {
        params[offset] = function callback(err/*, varargs */) {
            if (pending) {
                pending = false;
                if (err)
                    reject(err);
                else {
                    var params = new Array(arguments.length - 1),
                        offset = 0;
                    while (offset < params.length)
                        params[offset++] = arguments[offset];
                    resolve.apply(null, params);
                }
            }
        };
        try {
            fn.apply(ctx || null, params);
        } catch (err) {
            if (pending) {
                pending = false;
                reject(err);
            }
        }
    });
}


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A minimal base64 implementation for number arrays.
 * @memberof util
 * @namespace
 */
var base64 = exports;

/**
 * Calculates the byte length of a base64 encoded string.
 * @param {string} string Base64 encoded string
 * @returns {number} Byte length
 */
base64.length = function length(string) {
    var p = string.length;
    if (!p)
        return 0;
    var n = 0;
    while (--p % 4 > 1 && string.charAt(p) === "=")
        ++n;
    return Math.ceil(string.length * 3) / 4 - n;
};

// Base64 encoding table
var b64 = new Array(64);

// Base64 decoding table
var s64 = new Array(123);

// 65..90, 97..122, 48..57, 43, 47
for (var i = 0; i < 64;)
    s64[b64[i] = i < 26 ? i + 65 : i < 52 ? i + 71 : i < 62 ? i - 4 : i - 59 | 43] = i++;

/**
 * Encodes a buffer to a base64 encoded string.
 * @param {Uint8Array} buffer Source buffer
 * @param {number} start Source start
 * @param {number} end Source end
 * @returns {string} Base64 encoded string
 */
base64.encode = function encode(buffer, start, end) {
    var parts = null,
        chunk = [];
    var i = 0, // output index
        j = 0, // goto index
        t;     // temporary
    while (start < end) {
        var b = buffer[start++];
        switch (j) {
            case 0:
                chunk[i++] = b64[b >> 2];
                t = (b & 3) << 4;
                j = 1;
                break;
            case 1:
                chunk[i++] = b64[t | b >> 4];
                t = (b & 15) << 2;
                j = 2;
                break;
            case 2:
                chunk[i++] = b64[t | b >> 6];
                chunk[i++] = b64[b & 63];
                j = 0;
                break;
        }
        if (i > 8191) {
            (parts || (parts = [])).push(String.fromCharCode.apply(String, chunk));
            i = 0;
        }
    }
    if (j) {
        chunk[i++] = b64[t];
        chunk[i++] = 61;
        if (j === 1)
            chunk[i++] = 61;
    }
    if (parts) {
        if (i)
            parts.push(String.fromCharCode.apply(String, chunk.slice(0, i)));
        return parts.join("");
    }
    return String.fromCharCode.apply(String, chunk.slice(0, i));
};

var invalidEncoding = "invalid encoding";

/**
 * Decodes a base64 encoded string to a buffer.
 * @param {string} string Source string
 * @param {Uint8Array} buffer Destination buffer
 * @param {number} offset Destination offset
 * @returns {number} Number of bytes written
 * @throws {Error} If encoding is invalid
 */
base64.decode = function decode(string, buffer, offset) {
    var start = offset;
    var j = 0, // goto index
        t;     // temporary
    for (var i = 0; i < string.length;) {
        var c = string.charCodeAt(i++);
        if (c === 61 && j > 1)
            break;
        if ((c = s64[c]) === undefined)
            throw Error(invalidEncoding);
        switch (j) {
            case 0:
                t = c;
                j = 1;
                break;
            case 1:
                buffer[offset++] = t << 2 | (c & 48) >> 4;
                t = c;
                j = 2;
                break;
            case 2:
                buffer[offset++] = (t & 15) << 4 | (c & 60) >> 2;
                t = c;
                j = 3;
                break;
            case 3:
                buffer[offset++] = (t & 3) << 6 | c;
                j = 0;
                break;
        }
    }
    if (j === 1)
        throw Error(invalidEncoding);
    return offset - start;
};

/**
 * Tests if the specified string appears to be base64 encoded.
 * @param {string} string String to test
 * @returns {boolean} `true` if probably base64 encoded, otherwise false
 */
base64.test = function test(string) {
    return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(string);
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = EventEmitter;

/**
 * Constructs a new event emitter instance.
 * @classdesc A minimal event emitter.
 * @memberof util
 * @constructor
 */
function EventEmitter() {

    /**
     * Registered listeners.
     * @type {Object.<string,*>}
     * @private
     */
    this._listeners = {};
}

/**
 * Registers an event listener.
 * @param {string} evt Event name
 * @param {function} fn Listener
 * @param {*} [ctx] Listener context
 * @returns {util.EventEmitter} `this`
 */
EventEmitter.prototype.on = function on(evt, fn, ctx) {
    (this._listeners[evt] || (this._listeners[evt] = [])).push({
        fn  : fn,
        ctx : ctx || this
    });
    return this;
};

/**
 * Removes an event listener or any matching listeners if arguments are omitted.
 * @param {string} [evt] Event name. Removes all listeners if omitted.
 * @param {function} [fn] Listener to remove. Removes all listeners of `evt` if omitted.
 * @returns {util.EventEmitter} `this`
 */
EventEmitter.prototype.off = function off(evt, fn) {
    if (evt === undefined)
        this._listeners = {};
    else {
        if (fn === undefined)
            this._listeners[evt] = [];
        else {
            var listeners = this._listeners[evt];
            for (var i = 0; i < listeners.length;)
                if (listeners[i].fn === fn)
                    listeners.splice(i, 1);
                else
                    ++i;
        }
    }
    return this;
};

/**
 * Emits an event by calling its listeners with the specified arguments.
 * @param {string} evt Event name
 * @param {...*} args Arguments
 * @returns {util.EventEmitter} `this`
 */
EventEmitter.prototype.emit = function emit(evt) {
    var listeners = this._listeners[evt];
    if (listeners) {
        var args = [],
            i = 1;
        for (; i < arguments.length;)
            args.push(arguments[i++]);
        for (i = 0; i < listeners.length;)
            listeners[i].fn.apply(listeners[i++].ctx, args);
    }
    return this;
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = factory(factory);

/**
 * Reads / writes floats / doubles from / to buffers.
 * @name util.float
 * @namespace
 */

/**
 * Writes a 32 bit float to a buffer using little endian byte order.
 * @name util.float.writeFloatLE
 * @function
 * @param {number} val Value to write
 * @param {Uint8Array} buf Target buffer
 * @param {number} pos Target buffer offset
 * @returns {undefined}
 */

/**
 * Writes a 32 bit float to a buffer using big endian byte order.
 * @name util.float.writeFloatBE
 * @function
 * @param {number} val Value to write
 * @param {Uint8Array} buf Target buffer
 * @param {number} pos Target buffer offset
 * @returns {undefined}
 */

/**
 * Reads a 32 bit float from a buffer using little endian byte order.
 * @name util.float.readFloatLE
 * @function
 * @param {Uint8Array} buf Source buffer
 * @param {number} pos Source buffer offset
 * @returns {number} Value read
 */

/**
 * Reads a 32 bit float from a buffer using big endian byte order.
 * @name util.float.readFloatBE
 * @function
 * @param {Uint8Array} buf Source buffer
 * @param {number} pos Source buffer offset
 * @returns {number} Value read
 */

/**
 * Writes a 64 bit double to a buffer using little endian byte order.
 * @name util.float.writeDoubleLE
 * @function
 * @param {number} val Value to write
 * @param {Uint8Array} buf Target buffer
 * @param {number} pos Target buffer offset
 * @returns {undefined}
 */

/**
 * Writes a 64 bit double to a buffer using big endian byte order.
 * @name util.float.writeDoubleBE
 * @function
 * @param {number} val Value to write
 * @param {Uint8Array} buf Target buffer
 * @param {number} pos Target buffer offset
 * @returns {undefined}
 */

/**
 * Reads a 64 bit double from a buffer using little endian byte order.
 * @name util.float.readDoubleLE
 * @function
 * @param {Uint8Array} buf Source buffer
 * @param {number} pos Source buffer offset
 * @returns {number} Value read
 */

/**
 * Reads a 64 bit double from a buffer using big endian byte order.
 * @name util.float.readDoubleBE
 * @function
 * @param {Uint8Array} buf Source buffer
 * @param {number} pos Source buffer offset
 * @returns {number} Value read
 */

// Factory function for the purpose of node-based testing in modified global environments
function factory(exports) {

    // float: typed array
    if (typeof Float32Array !== "undefined") (function() {

        var f32 = new Float32Array([ -0 ]),
            f8b = new Uint8Array(f32.buffer),
            le  = f8b[3] === 128;

        function writeFloat_f32_cpy(val, buf, pos) {
            f32[0] = val;
            buf[pos    ] = f8b[0];
            buf[pos + 1] = f8b[1];
            buf[pos + 2] = f8b[2];
            buf[pos + 3] = f8b[3];
        }

        function writeFloat_f32_rev(val, buf, pos) {
            f32[0] = val;
            buf[pos    ] = f8b[3];
            buf[pos + 1] = f8b[2];
            buf[pos + 2] = f8b[1];
            buf[pos + 3] = f8b[0];
        }

        /* istanbul ignore next */
        exports.writeFloatLE = le ? writeFloat_f32_cpy : writeFloat_f32_rev;
        /* istanbul ignore next */
        exports.writeFloatBE = le ? writeFloat_f32_rev : writeFloat_f32_cpy;

        function readFloat_f32_cpy(buf, pos) {
            f8b[0] = buf[pos    ];
            f8b[1] = buf[pos + 1];
            f8b[2] = buf[pos + 2];
            f8b[3] = buf[pos + 3];
            return f32[0];
        }

        function readFloat_f32_rev(buf, pos) {
            f8b[3] = buf[pos    ];
            f8b[2] = buf[pos + 1];
            f8b[1] = buf[pos + 2];
            f8b[0] = buf[pos + 3];
            return f32[0];
        }

        /* istanbul ignore next */
        exports.readFloatLE = le ? readFloat_f32_cpy : readFloat_f32_rev;
        /* istanbul ignore next */
        exports.readFloatBE = le ? readFloat_f32_rev : readFloat_f32_cpy;

    // float: ieee754
    })(); else (function() {

        function writeFloat_ieee754(writeUint, val, buf, pos) {
            var sign = val < 0 ? 1 : 0;
            if (sign)
                val = -val;
            if (val === 0)
                writeUint(1 / val > 0 ? /* positive */ 0 : /* negative 0 */ 2147483648, buf, pos);
            else if (isNaN(val))
                writeUint(2143289344, buf, pos);
            else if (val > 3.4028234663852886e+38) // +-Infinity
                writeUint((sign << 31 | 2139095040) >>> 0, buf, pos);
            else if (val < 1.1754943508222875e-38) // denormal
                writeUint((sign << 31 | Math.round(val / 1.401298464324817e-45)) >>> 0, buf, pos);
            else {
                var exponent = Math.floor(Math.log(val) / Math.LN2),
                    mantissa = Math.round(val * Math.pow(2, -exponent) * 8388608) & 8388607;
                writeUint((sign << 31 | exponent + 127 << 23 | mantissa) >>> 0, buf, pos);
            }
        }

        exports.writeFloatLE = writeFloat_ieee754.bind(null, writeUintLE);
        exports.writeFloatBE = writeFloat_ieee754.bind(null, writeUintBE);

        function readFloat_ieee754(readUint, buf, pos) {
            var uint = readUint(buf, pos),
                sign = (uint >> 31) * 2 + 1,
                exponent = uint >>> 23 & 255,
                mantissa = uint & 8388607;
            return exponent === 255
                ? mantissa
                ? NaN
                : sign * Infinity
                : exponent === 0 // denormal
                ? sign * 1.401298464324817e-45 * mantissa
                : sign * Math.pow(2, exponent - 150) * (mantissa + 8388608);
        }

        exports.readFloatLE = readFloat_ieee754.bind(null, readUintLE);
        exports.readFloatBE = readFloat_ieee754.bind(null, readUintBE);

    })();

    // double: typed array
    if (typeof Float64Array !== "undefined") (function() {

        var f64 = new Float64Array([-0]),
            f8b = new Uint8Array(f64.buffer),
            le  = f8b[7] === 128;

        function writeDouble_f64_cpy(val, buf, pos) {
            f64[0] = val;
            buf[pos    ] = f8b[0];
            buf[pos + 1] = f8b[1];
            buf[pos + 2] = f8b[2];
            buf[pos + 3] = f8b[3];
            buf[pos + 4] = f8b[4];
            buf[pos + 5] = f8b[5];
            buf[pos + 6] = f8b[6];
            buf[pos + 7] = f8b[7];
        }

        function writeDouble_f64_rev(val, buf, pos) {
            f64[0] = val;
            buf[pos    ] = f8b[7];
            buf[pos + 1] = f8b[6];
            buf[pos + 2] = f8b[5];
            buf[pos + 3] = f8b[4];
            buf[pos + 4] = f8b[3];
            buf[pos + 5] = f8b[2];
            buf[pos + 6] = f8b[1];
            buf[pos + 7] = f8b[0];
        }

        /* istanbul ignore next */
        exports.writeDoubleLE = le ? writeDouble_f64_cpy : writeDouble_f64_rev;
        /* istanbul ignore next */
        exports.writeDoubleBE = le ? writeDouble_f64_rev : writeDouble_f64_cpy;

        function readDouble_f64_cpy(buf, pos) {
            f8b[0] = buf[pos    ];
            f8b[1] = buf[pos + 1];
            f8b[2] = buf[pos + 2];
            f8b[3] = buf[pos + 3];
            f8b[4] = buf[pos + 4];
            f8b[5] = buf[pos + 5];
            f8b[6] = buf[pos + 6];
            f8b[7] = buf[pos + 7];
            return f64[0];
        }

        function readDouble_f64_rev(buf, pos) {
            f8b[7] = buf[pos    ];
            f8b[6] = buf[pos + 1];
            f8b[5] = buf[pos + 2];
            f8b[4] = buf[pos + 3];
            f8b[3] = buf[pos + 4];
            f8b[2] = buf[pos + 5];
            f8b[1] = buf[pos + 6];
            f8b[0] = buf[pos + 7];
            return f64[0];
        }

        /* istanbul ignore next */
        exports.readDoubleLE = le ? readDouble_f64_cpy : readDouble_f64_rev;
        /* istanbul ignore next */
        exports.readDoubleBE = le ? readDouble_f64_rev : readDouble_f64_cpy;

    // double: ieee754
    })(); else (function() {

        function writeDouble_ieee754(writeUint, off0, off1, val, buf, pos) {
            var sign = val < 0 ? 1 : 0;
            if (sign)
                val = -val;
            if (val === 0) {
                writeUint(0, buf, pos + off0);
                writeUint(1 / val > 0 ? /* positive */ 0 : /* negative 0 */ 2147483648, buf, pos + off1);
            } else if (isNaN(val)) {
                writeUint(0, buf, pos + off0);
                writeUint(2146959360, buf, pos + off1);
            } else if (val > 1.7976931348623157e+308) { // +-Infinity
                writeUint(0, buf, pos + off0);
                writeUint((sign << 31 | 2146435072) >>> 0, buf, pos + off1);
            } else {
                var mantissa;
                if (val < 2.2250738585072014e-308) { // denormal
                    mantissa = val / 5e-324;
                    writeUint(mantissa >>> 0, buf, pos + off0);
                    writeUint((sign << 31 | mantissa / 4294967296) >>> 0, buf, pos + off1);
                } else {
                    var exponent = Math.floor(Math.log(val) / Math.LN2);
                    if (exponent === 1024)
                        exponent = 1023;
                    mantissa = val * Math.pow(2, -exponent);
                    writeUint(mantissa * 4503599627370496 >>> 0, buf, pos + off0);
                    writeUint((sign << 31 | exponent + 1023 << 20 | mantissa * 1048576 & 1048575) >>> 0, buf, pos + off1);
                }
            }
        }

        exports.writeDoubleLE = writeDouble_ieee754.bind(null, writeUintLE, 0, 4);
        exports.writeDoubleBE = writeDouble_ieee754.bind(null, writeUintBE, 4, 0);

        function readDouble_ieee754(readUint, off0, off1, buf, pos) {
            var lo = readUint(buf, pos + off0),
                hi = readUint(buf, pos + off1);
            var sign = (hi >> 31) * 2 + 1,
                exponent = hi >>> 20 & 2047,
                mantissa = 4294967296 * (hi & 1048575) + lo;
            return exponent === 2047
                ? mantissa
                ? NaN
                : sign * Infinity
                : exponent === 0 // denormal
                ? sign * 5e-324 * mantissa
                : sign * Math.pow(2, exponent - 1075) * (mantissa + 4503599627370496);
        }

        exports.readDoubleLE = readDouble_ieee754.bind(null, readUintLE, 0, 4);
        exports.readDoubleBE = readDouble_ieee754.bind(null, readUintBE, 4, 0);

    })();

    return exports;
}

// uint helpers

function writeUintLE(val, buf, pos) {
    buf[pos    ] =  val        & 255;
    buf[pos + 1] =  val >>> 8  & 255;
    buf[pos + 2] =  val >>> 16 & 255;
    buf[pos + 3] =  val >>> 24;
}

function writeUintBE(val, buf, pos) {
    buf[pos    ] =  val >>> 24;
    buf[pos + 1] =  val >>> 16 & 255;
    buf[pos + 2] =  val >>> 8  & 255;
    buf[pos + 3] =  val        & 255;
}

function readUintLE(buf, pos) {
    return (buf[pos    ]
          | buf[pos + 1] << 8
          | buf[pos + 2] << 16
          | buf[pos + 3] << 24) >>> 0;
}

function readUintBE(buf, pos) {
    return (buf[pos    ] << 24
          | buf[pos + 1] << 16
          | buf[pos + 2] << 8
          | buf[pos + 3]) >>> 0;
}


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = inquire;

/**
 * Requires a module only if available.
 * @memberof util
 * @param {string} moduleName Module to require
 * @returns {?Object} Required module if available and not empty, otherwise `null`
 */
function inquire(moduleName) {
    try {
        var mod = eval("quire".replace(/^/,"re"))(moduleName); // eslint-disable-line no-eval
        if (mod && (mod.length || Object.keys(mod).length))
            return mod;
    } catch (e) {} // eslint-disable-line no-empty
    return null;
}


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A minimal UTF8 implementation for number arrays.
 * @memberof util
 * @namespace
 */
var utf8 = exports;

/**
 * Calculates the UTF8 byte length of a string.
 * @param {string} string String
 * @returns {number} Byte length
 */
utf8.length = function utf8_length(string) {
    var len = 0,
        c = 0;
    for (var i = 0; i < string.length; ++i) {
        c = string.charCodeAt(i);
        if (c < 128)
            len += 1;
        else if (c < 2048)
            len += 2;
        else if ((c & 0xFC00) === 0xD800 && (string.charCodeAt(i + 1) & 0xFC00) === 0xDC00) {
            ++i;
            len += 4;
        } else
            len += 3;
    }
    return len;
};

/**
 * Reads UTF8 bytes as a string.
 * @param {Uint8Array} buffer Source buffer
 * @param {number} start Source start
 * @param {number} end Source end
 * @returns {string} String read
 */
utf8.read = function utf8_read(buffer, start, end) {
    var len = end - start;
    if (len < 1)
        return "";
    var parts = null,
        chunk = [],
        i = 0, // char offset
        t;     // temporary
    while (start < end) {
        t = buffer[start++];
        if (t < 128)
            chunk[i++] = t;
        else if (t > 191 && t < 224)
            chunk[i++] = (t & 31) << 6 | buffer[start++] & 63;
        else if (t > 239 && t < 365) {
            t = ((t & 7) << 18 | (buffer[start++] & 63) << 12 | (buffer[start++] & 63) << 6 | buffer[start++] & 63) - 0x10000;
            chunk[i++] = 0xD800 + (t >> 10);
            chunk[i++] = 0xDC00 + (t & 1023);
        } else
            chunk[i++] = (t & 15) << 12 | (buffer[start++] & 63) << 6 | buffer[start++] & 63;
        if (i > 8191) {
            (parts || (parts = [])).push(String.fromCharCode.apply(String, chunk));
            i = 0;
        }
    }
    if (parts) {
        if (i)
            parts.push(String.fromCharCode.apply(String, chunk.slice(0, i)));
        return parts.join("");
    }
    return String.fromCharCode.apply(String, chunk.slice(0, i));
};

/**
 * Writes a string as UTF8 bytes.
 * @param {string} string Source string
 * @param {Uint8Array} buffer Destination buffer
 * @param {number} offset Destination offset
 * @returns {number} Bytes written
 */
utf8.write = function utf8_write(string, buffer, offset) {
    var start = offset,
        c1, // character 1
        c2; // character 2
    for (var i = 0; i < string.length; ++i) {
        c1 = string.charCodeAt(i);
        if (c1 < 128) {
            buffer[offset++] = c1;
        } else if (c1 < 2048) {
            buffer[offset++] = c1 >> 6       | 192;
            buffer[offset++] = c1       & 63 | 128;
        } else if ((c1 & 0xFC00) === 0xD800 && ((c2 = string.charCodeAt(i + 1)) & 0xFC00) === 0xDC00) {
            c1 = 0x10000 + ((c1 & 0x03FF) << 10) + (c2 & 0x03FF);
            ++i;
            buffer[offset++] = c1 >> 18      | 240;
            buffer[offset++] = c1 >> 12 & 63 | 128;
            buffer[offset++] = c1 >> 6  & 63 | 128;
            buffer[offset++] = c1       & 63 | 128;
        } else {
            buffer[offset++] = c1 >> 12      | 224;
            buffer[offset++] = c1 >> 6  & 63 | 128;
            buffer[offset++] = c1       & 63 | 128;
        }
    }
    return offset - start;
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = pool;

/**
 * An allocator as used by {@link util.pool}.
 * @typedef PoolAllocator
 * @type {function}
 * @param {number} size Buffer size
 * @returns {Uint8Array} Buffer
 */

/**
 * A slicer as used by {@link util.pool}.
 * @typedef PoolSlicer
 * @type {function}
 * @param {number} start Start offset
 * @param {number} end End offset
 * @returns {Uint8Array} Buffer slice
 * @this {Uint8Array}
 */

/**
 * A general purpose buffer pool.
 * @memberof util
 * @function
 * @param {PoolAllocator} alloc Allocator
 * @param {PoolSlicer} slice Slicer
 * @param {number} [size=8192] Slab size
 * @returns {PoolAllocator} Pooled allocator
 */
function pool(alloc, slice, size) {
    var SIZE   = size || 8192;
    var MAX    = SIZE >>> 1;
    var slab   = null;
    var offset = SIZE;
    return function pool_alloc(size) {
        if (size < 1 || size > MAX)
            return alloc(size);
        if (offset + size > SIZE) {
            slab = alloc(SIZE);
            offset = 0;
        }
        var buf = slice.call(slab, offset, offset += size);
        if (offset & 7) // align to 32 bit
            offset = (offset | 7) + 1;
        return buf;
    };
}


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = LongBits;

var util = __webpack_require__(7);

/**
 * Constructs new long bits.
 * @classdesc Helper class for working with the low and high bits of a 64 bit value.
 * @memberof util
 * @constructor
 * @param {number} lo Low 32 bits, unsigned
 * @param {number} hi High 32 bits, unsigned
 */
function LongBits(lo, hi) {

    // note that the casts below are theoretically unnecessary as of today, but older statically
    // generated converter code might still call the ctor with signed 32bits. kept for compat.

    /**
     * Low bits.
     * @type {number}
     */
    this.lo = lo >>> 0;

    /**
     * High bits.
     * @type {number}
     */
    this.hi = hi >>> 0;
}

/**
 * Zero bits.
 * @memberof util.LongBits
 * @type {util.LongBits}
 */
var zero = LongBits.zero = new LongBits(0, 0);

zero.toNumber = function() { return 0; };
zero.zzEncode = zero.zzDecode = function() { return this; };
zero.length = function() { return 1; };

/**
 * Zero hash.
 * @memberof util.LongBits
 * @type {string}
 */
var zeroHash = LongBits.zeroHash = "\0\0\0\0\0\0\0\0";

/**
 * Constructs new long bits from the specified number.
 * @param {number} value Value
 * @returns {util.LongBits} Instance
 */
LongBits.fromNumber = function fromNumber(value) {
    if (value === 0)
        return zero;
    var sign = value < 0;
    if (sign)
        value = -value;
    var lo = value >>> 0,
        hi = (value - lo) / 4294967296 >>> 0;
    if (sign) {
        hi = ~hi >>> 0;
        lo = ~lo >>> 0;
        if (++lo > 4294967295) {
            lo = 0;
            if (++hi > 4294967295)
                hi = 0;
        }
    }
    return new LongBits(lo, hi);
};

/**
 * Constructs new long bits from a number, long or string.
 * @param {Long|number|string} value Value
 * @returns {util.LongBits} Instance
 */
LongBits.from = function from(value) {
    if (typeof value === "number")
        return LongBits.fromNumber(value);
    if (util.isString(value)) {
        /* istanbul ignore else */
        if (util.Long)
            value = util.Long.fromString(value);
        else
            return LongBits.fromNumber(parseInt(value, 10));
    }
    return value.low || value.high ? new LongBits(value.low >>> 0, value.high >>> 0) : zero;
};

/**
 * Converts this long bits to a possibly unsafe JavaScript number.
 * @param {boolean} [unsigned=false] Whether unsigned or not
 * @returns {number} Possibly unsafe number
 */
LongBits.prototype.toNumber = function toNumber(unsigned) {
    if (!unsigned && this.hi >>> 31) {
        var lo = ~this.lo + 1 >>> 0,
            hi = ~this.hi     >>> 0;
        if (!lo)
            hi = hi + 1 >>> 0;
        return -(lo + hi * 4294967296);
    }
    return this.lo + this.hi * 4294967296;
};

/**
 * Converts this long bits to a long.
 * @param {boolean} [unsigned=false] Whether unsigned or not
 * @returns {Long} Long
 */
LongBits.prototype.toLong = function toLong(unsigned) {
    return util.Long
        ? new util.Long(this.lo | 0, this.hi | 0, Boolean(unsigned))
        /* istanbul ignore next */
        : { low: this.lo | 0, high: this.hi | 0, unsigned: Boolean(unsigned) };
};

var charCodeAt = String.prototype.charCodeAt;

/**
 * Constructs new long bits from the specified 8 characters long hash.
 * @param {string} hash Hash
 * @returns {util.LongBits} Bits
 */
LongBits.fromHash = function fromHash(hash) {
    if (hash === zeroHash)
        return zero;
    return new LongBits(
        ( charCodeAt.call(hash, 0)
        | charCodeAt.call(hash, 1) << 8
        | charCodeAt.call(hash, 2) << 16
        | charCodeAt.call(hash, 3) << 24) >>> 0
    ,
        ( charCodeAt.call(hash, 4)
        | charCodeAt.call(hash, 5) << 8
        | charCodeAt.call(hash, 6) << 16
        | charCodeAt.call(hash, 7) << 24) >>> 0
    );
};

/**
 * Converts this long bits to a 8 characters long hash.
 * @returns {string} Hash
 */
LongBits.prototype.toHash = function toHash() {
    return String.fromCharCode(
        this.lo        & 255,
        this.lo >>> 8  & 255,
        this.lo >>> 16 & 255,
        this.lo >>> 24      ,
        this.hi        & 255,
        this.hi >>> 8  & 255,
        this.hi >>> 16 & 255,
        this.hi >>> 24
    );
};

/**
 * Zig-zag encodes this long bits.
 * @returns {util.LongBits} `this`
 */
LongBits.prototype.zzEncode = function zzEncode() {
    var mask =   this.hi >> 31;
    this.hi  = ((this.hi << 1 | this.lo >>> 31) ^ mask) >>> 0;
    this.lo  = ( this.lo << 1                   ^ mask) >>> 0;
    return this;
};

/**
 * Zig-zag decodes this long bits.
 * @returns {util.LongBits} `this`
 */
LongBits.prototype.zzDecode = function zzDecode() {
    var mask = -(this.lo & 1);
    this.lo  = ((this.lo >>> 1 | this.hi << 31) ^ mask) >>> 0;
    this.hi  = ( this.hi >>> 1                  ^ mask) >>> 0;
    return this;
};

/**
 * Calculates the length of this longbits when encoded as a varint.
 * @returns {number} Length
 */
LongBits.prototype.length = function length() {
    var part0 =  this.lo,
        part1 = (this.lo >>> 28 | this.hi << 4) >>> 0,
        part2 =  this.hi >>> 24;
    return part2 === 0
         ? part1 === 0
           ? part0 < 16384
             ? part0 < 128 ? 1 : 2
             : part0 < 2097152 ? 3 : 4
           : part1 < 16384
             ? part1 < 128 ? 5 : 6
             : part1 < 2097152 ? 7 : 8
         : part2 < 128 ? 9 : 10;
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = BufferWriter;

// extends Writer
var Writer = __webpack_require__(12);
(BufferWriter.prototype = Object.create(Writer.prototype)).constructor = BufferWriter;

var util = __webpack_require__(7);

var Buffer = util.Buffer;

/**
 * Constructs a new buffer writer instance.
 * @classdesc Wire format writer using node buffers.
 * @extends Writer
 * @constructor
 */
function BufferWriter() {
    Writer.call(this);
}

/**
 * Allocates a buffer of the specified size.
 * @param {number} size Buffer size
 * @returns {Buffer} Buffer
 */
BufferWriter.alloc = function alloc_buffer(size) {
    return (BufferWriter.alloc = util._Buffer_allocUnsafe)(size);
};

var writeBytesBuffer = Buffer && Buffer.prototype instanceof Uint8Array && Buffer.prototype.set.name === "set"
    ? function writeBytesBuffer_set(val, buf, pos) {
        buf.set(val, pos); // faster than copy (requires node >= 4 where Buffers extend Uint8Array and set is properly inherited)
                           // also works for plain array values
    }
    /* istanbul ignore next */
    : function writeBytesBuffer_copy(val, buf, pos) {
        if (val.copy) // Buffer values
            val.copy(buf, pos, 0, val.length);
        else for (var i = 0; i < val.length;) // plain array values
            buf[pos++] = val[i++];
    };

/**
 * @override
 */
BufferWriter.prototype.bytes = function write_bytes_buffer(value) {
    if (util.isString(value))
        value = util._Buffer_from(value, "base64");
    var len = value.length >>> 0;
    this.uint32(len);
    if (len)
        this._push(writeBytesBuffer, len, value);
    return this;
};

function writeStringBuffer(val, buf, pos) {
    if (val.length < 40) // plain js is faster for short strings (probably due to redundant assertions)
        util.utf8.write(val, buf, pos);
    else
        buf.utf8Write(val, pos);
}

/**
 * @override
 */
BufferWriter.prototype.string = function write_string_buffer(value) {
    var len = Buffer.byteLength(value);
    this.uint32(len);
    if (len)
        this._push(writeStringBuffer, len, value);
    return this;
};


/**
 * Finishes the write operation.
 * @name BufferWriter#finish
 * @function
 * @returns {Buffer} Finished buffer
 */


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = BufferReader;

// extends Reader
var Reader = __webpack_require__(13);
(BufferReader.prototype = Object.create(Reader.prototype)).constructor = BufferReader;

var util = __webpack_require__(7);

/**
 * Constructs a new buffer reader instance.
 * @classdesc Wire format reader using node buffers.
 * @extends Reader
 * @constructor
 * @param {Buffer} buffer Buffer to read from
 */
function BufferReader(buffer) {
    Reader.call(this, buffer);

    /**
     * Read buffer.
     * @name BufferReader#buf
     * @type {Buffer}
     */
}

/* istanbul ignore else */
if (util.Buffer)
    BufferReader.prototype._slice = util.Buffer.prototype.slice;

/**
 * @override
 */
BufferReader.prototype.string = function read_string_buffer() {
    var len = this.uint32(); // modifies pos
    return this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + len, this.len));
};

/**
 * Reads a sequence of bytes preceeded by its length as a varint.
 * @name BufferReader#bytes
 * @function
 * @returns {Buffer} Value read
 */


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Streaming RPC helpers.
 * @namespace
 */
var rpc = exports;

/**
 * RPC implementation passed to {@link Service#create} performing a service request on network level, i.e. by utilizing http requests or websockets.
 * @typedef RPCImpl
 * @type {function}
 * @param {Method|rpc.ServiceMethod<Message<{}>,Message<{}>>} method Reflected or static method being called
 * @param {Uint8Array} requestData Request data
 * @param {RPCImplCallback} callback Callback function
 * @returns {undefined}
 * @example
 * function rpcImpl(method, requestData, callback) {
 *     if (protobuf.util.lcFirst(method.name) !== "myMethod") // compatible with static code
 *         throw Error("no such method");
 *     asynchronouslyObtainAResponse(requestData, function(err, responseData) {
 *         callback(err, responseData);
 *     });
 * }
 */

/**
 * Node-style callback as used by {@link RPCImpl}.
 * @typedef RPCImplCallback
 * @type {function}
 * @param {Error|null} error Error, if any, otherwise `null`
 * @param {Uint8Array|null} [response] Response data or `null` to signal end of stream, if there hasn't been an error
 * @returns {undefined}
 */

rpc.Service = __webpack_require__(32);


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = Service;

var util = __webpack_require__(7);

// Extends EventEmitter
(Service.prototype = Object.create(util.EventEmitter.prototype)).constructor = Service;

/**
 * A service method callback as used by {@link rpc.ServiceMethod|ServiceMethod}.
 *
 * Differs from {@link RPCImplCallback} in that it is an actual callback of a service method which may not return `response = null`.
 * @typedef rpc.ServiceMethodCallback
 * @template TRes extends Message<TRes>
 * @type {function}
 * @param {Error|null} error Error, if any
 * @param {TRes} [response] Response message
 * @returns {undefined}
 */

/**
 * A service method part of a {@link rpc.Service} as created by {@link Service.create}.
 * @typedef rpc.ServiceMethod
 * @template TReq extends Message<TReq>
 * @template TRes extends Message<TRes>
 * @type {function}
 * @param {TReq|Properties<TReq>} request Request message or plain object
 * @param {rpc.ServiceMethodCallback<TRes>} [callback] Node-style callback called with the error, if any, and the response message
 * @returns {Promise<Message<TRes>>} Promise if `callback` has been omitted, otherwise `undefined`
 */

/**
 * Constructs a new RPC service instance.
 * @classdesc An RPC service as returned by {@link Service#create}.
 * @exports rpc.Service
 * @extends util.EventEmitter
 * @constructor
 * @param {RPCImpl} rpcImpl RPC implementation
 * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
 * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
 */
function Service(rpcImpl, requestDelimited, responseDelimited) {

    if (typeof rpcImpl !== "function")
        throw TypeError("rpcImpl must be a function");

    util.EventEmitter.call(this);

    /**
     * RPC implementation. Becomes `null` once the service is ended.
     * @type {RPCImpl|null}
     */
    this.rpcImpl = rpcImpl;

    /**
     * Whether requests are length-delimited.
     * @type {boolean}
     */
    this.requestDelimited = Boolean(requestDelimited);

    /**
     * Whether responses are length-delimited.
     * @type {boolean}
     */
    this.responseDelimited = Boolean(responseDelimited);
}

/**
 * Calls a service method through {@link rpc.Service#rpcImpl|rpcImpl}.
 * @param {Method|rpc.ServiceMethod<TReq,TRes>} method Reflected or static method
 * @param {Constructor<TReq>} requestCtor Request constructor
 * @param {Constructor<TRes>} responseCtor Response constructor
 * @param {TReq|Properties<TReq>} request Request message or plain object
 * @param {rpc.ServiceMethodCallback<TRes>} callback Service callback
 * @returns {undefined}
 * @template TReq extends Message<TReq>
 * @template TRes extends Message<TRes>
 */
Service.prototype.rpcCall = function rpcCall(method, requestCtor, responseCtor, request, callback) {

    if (!request)
        throw TypeError("request must be specified");

    var self = this;
    if (!callback)
        return util.asPromise(rpcCall, self, method, requestCtor, responseCtor, request);

    if (!self.rpcImpl) {
        setTimeout(function() { callback(Error("already ended")); }, 0);
        return undefined;
    }

    try {
        return self.rpcImpl(
            method,
            requestCtor[self.requestDelimited ? "encodeDelimited" : "encode"](request).finish(),
            function rpcCallback(err, response) {

                if (err) {
                    self.emit("error", err, method);
                    return callback(err);
                }

                if (response === null) {
                    self.end(/* endedByRPC */ true);
                    return undefined;
                }

                if (!(response instanceof responseCtor)) {
                    try {
                        response = responseCtor[self.responseDelimited ? "decodeDelimited" : "decode"](response);
                    } catch (err) {
                        self.emit("error", err, method);
                        return callback(err);
                    }
                }

                self.emit("data", response, method);
                return callback(null, response);
            }
        );
    } catch (err) {
        self.emit("error", err, method);
        setTimeout(function() { callback(err); }, 0);
        return undefined;
    }
};

/**
 * Ends this service and emits the `end` event.
 * @param {boolean} [endedByRPC=false] Whether the service has been ended by the RPC implementation.
 * @returns {rpc.Service} `this`
 */
Service.prototype.end = function end(endedByRPC) {
    if (this.rpcImpl) {
        if (!endedByRPC) // signal end to rpcImpl
            this.rpcImpl(null, null, null);
        this.rpcImpl = null;
        this.emit("end").off();
    }
    return this;
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = {};

/**
 * Named roots.
 * This is where pbjs stores generated structures (the option `-r, --root` specifies a name).
 * Can also be used manually to make roots available accross modules.
 * @name roots
 * @type {Object.<string,Root>}
 * @example
 * // pbjs -r myroot -o compiled.js ...
 *
 * // in another module:
 * require("./compiled.js");
 *
 * // in any subsequent module:
 * var root = protobuf.roots["myroot"];
 */


/***/ }),
/* 34 */,
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "auxiliaryInputFromSpec", function() { return auxiliaryInputFromSpec; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuxiliaryInput", function() { return AuxiliaryInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BinaryCounter", function() { return BinaryCounter; });
/* harmony import */ var _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__);

function auxiliaryInputFromSpec(spec) {
    switch (spec.type) {
        case 'BinaryCounter':
            return new BinaryCounter(spec.args);
        default:
            throw new Error(`Unknown auxiliary input: ${spec}`);
    }
}
class AuxiliaryInput {
    constructor(depth) {
        this.depth = depth;
    }
}
class BinaryCounter extends AuxiliaryInput {
    constructor(args) {
        super(args.numBits);
    }
    getTensors(numSteps) {
        const buffer = _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__["buffer"]([numSteps, this.depth]);
        for (let step = 0; step < numSteps; ++step) {
            for (let i = 0; i < this.depth; ++i) {
                buffer.set(Math.floor((step + 1) / Math.pow(2, i)) % 2 ? 1.0 : -1.0, step, i);
            }
        }
        return buffer.toTensor().as2D(numSteps, this.depth);
    }
}


/***/ }),
/* 36 */
/***/ (function(module) {

module.exports = JSON.parse("{\"chromatic\":[\"1P 2m 2M 3m 3M 4P 4A 5P 6m 6M 7m 7M\"],\"lydian\":[\"1P 2M 3M 4A 5P 6M 7M\"],\"major\":[\"1P 2M 3M 4P 5P 6M 7M\",[\"ionian\"]],\"mixolydian\":[\"1P 2M 3M 4P 5P 6M 7m\",[\"dominant\"]],\"dorian\":[\"1P 2M 3m 4P 5P 6M 7m\"],\"aeolian\":[\"1P 2M 3m 4P 5P 6m 7m\",[\"minor\"]],\"phrygian\":[\"1P 2m 3m 4P 5P 6m 7m\"],\"locrian\":[\"1P 2m 3m 4P 5d 6m 7m\"],\"melodic minor\":[\"1P 2M 3m 4P 5P 6M 7M\"],\"melodic minor second mode\":[\"1P 2m 3m 4P 5P 6M 7m\"],\"lydian augmented\":[\"1P 2M 3M 4A 5A 6M 7M\"],\"lydian dominant\":[\"1P 2M 3M 4A 5P 6M 7m\",[\"lydian b7\"]],\"melodic minor fifth mode\":[\"1P 2M 3M 4P 5P 6m 7m\",[\"hindu\",\"mixolydian b6M\"]],\"locrian #2\":[\"1P 2M 3m 4P 5d 6m 7m\",[\"half-diminished\"]],\"altered\":[\"1P 2m 3m 3M 5d 6m 7m\",[\"super locrian\",\"diminished whole tone\",\"pomeroy\"]],\"harmonic minor\":[\"1P 2M 3m 4P 5P 6m 7M\"],\"phrygian dominant\":[\"1P 2m 3M 4P 5P 6m 7m\",[\"spanish\",\"phrygian major\"]],\"half-whole diminished\":[\"1P 2m 3m 3M 4A 5P 6M 7m\",[\"dominant diminished\"]],\"diminished\":[\"1P 2M 3m 4P 5d 6m 6M 7M\",[\"whole-half diminished\"]],\"major pentatonic\":[\"1P 2M 3M 5P 6M\",[\"pentatonic\"]],\"lydian pentatonic\":[\"1P 3M 4A 5P 7M\",[\"chinese\"]],\"mixolydian pentatonic\":[\"1P 3M 4P 5P 7m\",[\"indian\"]],\"locrian pentatonic\":[\"1P 3m 4P 5d 7m\",[\"minor seven flat five pentatonic\"]],\"minor pentatonic\":[\"1P 3m 4P 5P 7m\"],\"minor six pentatonic\":[\"1P 3m 4P 5P 6M\"],\"minor hexatonic\":[\"1P 2M 3m 4P 5P 7M\"],\"flat three pentatonic\":[\"1P 2M 3m 5P 6M\",[\"kumoi\"]],\"flat six pentatonic\":[\"1P 2M 3M 5P 6m\"],\"major flat two pentatonic\":[\"1P 2m 3M 5P 6M\"],\"whole tone pentatonic\":[\"1P 3M 5d 6m 7m\"],\"ionian pentatonic\":[\"1P 3M 4P 5P 7M\"],\"lydian #5P pentatonic\":[\"1P 3M 4A 5A 7M\"],\"lydian dominant pentatonic\":[\"1P 3M 4A 5P 7m\"],\"minor #7M pentatonic\":[\"1P 3m 4P 5P 7M\"],\"super locrian pentatonic\":[\"1P 3m 4d 5d 7m\"],\"in-sen\":[\"1P 2m 4P 5P 7m\"],\"iwato\":[\"1P 2m 4P 5d 7m\"],\"hirajoshi\":[\"1P 2M 3m 5P 6m\"],\"kumoijoshi\":[\"1P 2m 4P 5P 6m\"],\"pelog\":[\"1P 2m 3m 5P 6m\"],\"vietnamese 1\":[\"1P 3m 4P 5P 6m\"],\"vietnamese 2\":[\"1P 3m 4P 5P 7m\"],\"prometheus\":[\"1P 2M 3M 4A 6M 7m\"],\"prometheus neopolitan\":[\"1P 2m 3M 4A 6M 7m\"],\"ritusen\":[\"1P 2M 4P 5P 6M\"],\"scriabin\":[\"1P 2m 3M 5P 6M\"],\"piongio\":[\"1P 2M 4P 5P 6M 7m\"],\"major blues\":[\"1P 2M 3m 3M 5P 6M\"],\"minor blues\":[\"1P 3m 4P 5d 5P 7m\",[\"blues\"]],\"composite blues\":[\"1P 2M 3m 3M 4P 5d 5P 6M 7m\"],\"augmented\":[\"1P 2A 3M 5P 5A 7M\"],\"augmented heptatonic\":[\"1P 2A 3M 4P 5P 5A 7M\"],\"dorian #4\":[\"1P 2M 3m 4A 5P 6M 7m\"],\"lydian diminished\":[\"1P 2M 3m 4A 5P 6M 7M\"],\"whole tone\":[\"1P 2M 3M 4A 5A 7m\"],\"leading whole tone\":[\"1P 2M 3M 4A 5A 7m 7M\"],\"lydian minor\":[\"1P 2M 3M 4A 5P 6m 7m\"],\"locrian major\":[\"1P 2M 3M 4P 5d 6m 7m\",[\"arabian\"]],\"neopolitan\":[\"1P 2m 3m 4P 5P 6m 7M\"],\"neopolitan minor\":[\"1P 2m 3m 4P 5P 6m 7M\"],\"neopolitan major\":[\"1P 2m 3m 4P 5P 6M 7M\",[\"dorian b2\"]],\"neopolitan major pentatonic\":[\"1P 3M 4P 5d 7m\"],\"romanian minor\":[\"1P 2M 3m 5d 5P 6M 7m\"],\"double harmonic lydian\":[\"1P 2m 3M 4A 5P 6m 7M\"],\"harmonic major\":[\"1P 2M 3M 4P 5P 6m 7M\"],\"double harmonic major\":[\"1P 2m 3M 4P 5P 6m 7M\",[\"gypsy\"]],\"egyptian\":[\"1P 2M 4P 5P 7m\"],\"hungarian minor\":[\"1P 2M 3m 4A 5P 6m 7M\"],\"hungarian major\":[\"1P 2A 3M 4A 5P 6M 7m\"],\"oriental\":[\"1P 2m 3M 4P 5d 6M 7m\"],\"spanish heptatonic\":[\"1P 2m 3m 3M 4P 5P 6m 7m\"],\"flamenco\":[\"1P 2m 3m 3M 4A 5P 7m\"],\"balinese\":[\"1P 2m 3m 4P 5P 6m 7M\"],\"todi raga\":[\"1P 2m 3m 4A 5P 6m 7M\"],\"malkos raga\":[\"1P 3m 4P 6m 7m\"],\"kafi raga\":[\"1P 3m 3M 4P 5P 6M 7m 7M\"],\"purvi raga\":[\"1P 2m 3M 4P 4A 5P 6m 7M\"],\"persian\":[\"1P 2m 3M 4P 5d 6m 7M\"],\"bebop\":[\"1P 2M 3M 4P 5P 6M 7m 7M\"],\"bebop dominant\":[\"1P 2M 3M 4P 5P 6M 7m 7M\"],\"bebop minor\":[\"1P 2M 3m 3M 4P 5P 6M 7m\"],\"bebop major\":[\"1P 2M 3M 4P 5P 5A 6M 7M\"],\"bebop locrian\":[\"1P 2m 3m 4P 5d 5P 6m 7m\"],\"minor bebop\":[\"1P 2M 3m 4P 5P 6m 7m 7M\"],\"mystery #1\":[\"1P 2m 3M 5d 6m 7m\"],\"enigmatic\":[\"1P 2m 3M 5d 6m 7m 7M\"],\"minor six diminished\":[\"1P 2M 3m 4P 5P 6m 6M 7M\"],\"ionian augmented\":[\"1P 2M 3M 4P 5A 6M 7M\"],\"lydian #9\":[\"1P 2m 3M 4A 5P 6M 7M\"],\"ichikosucho\":[\"1P 2M 3M 4P 5d 5P 6M 7M\"],\"six tone symmetric\":[\"1P 2m 3M 4P 5A 6M\"]}");

/***/ }),
/* 37 */
/***/ (function(module) {

module.exports = JSON.parse("{\"4\":[\"1P 4P 7m 10m\",[\"quartal\"]],\"5\":[\"1P 5P\"],\"7\":[\"1P 3M 5P 7m\",[\"Dominant\",\"Dom\"]],\"9\":[\"1P 3M 5P 7m 9M\",[\"79\"]],\"11\":[\"1P 5P 7m 9M 11P\"],\"13\":[\"1P 3M 5P 7m 9M 13M\",[\"13_\"]],\"64\":[\"5P 8P 10M\"],\"M\":[\"1P 3M 5P\",[\"Major\",\"\"]],\"M#5\":[\"1P 3M 5A\",[\"augmented\",\"maj#5\",\"Maj#5\",\"+\",\"aug\"]],\"M#5add9\":[\"1P 3M 5A 9M\",[\"+add9\"]],\"M13\":[\"1P 3M 5P 7M 9M 13M\",[\"maj13\",\"Maj13\"]],\"M13#11\":[\"1P 3M 5P 7M 9M 11A 13M\",[\"maj13#11\",\"Maj13#11\",\"M13+4\",\"M13#4\"]],\"M6\":[\"1P 3M 5P 13M\",[\"6\"]],\"M6#11\":[\"1P 3M 5P 6M 11A\",[\"M6b5\",\"6#11\",\"6b5\"]],\"M69\":[\"1P 3M 5P 6M 9M\",[\"69\"]],\"M69#11\":[\"1P 3M 5P 6M 9M 11A\"],\"M7#11\":[\"1P 3M 5P 7M 11A\",[\"maj7#11\",\"Maj7#11\",\"M7+4\",\"M7#4\"]],\"M7#5\":[\"1P 3M 5A 7M\",[\"maj7#5\",\"Maj7#5\",\"maj9#5\",\"M7+\"]],\"M7#5sus4\":[\"1P 4P 5A 7M\"],\"M7#9#11\":[\"1P 3M 5P 7M 9A 11A\"],\"M7add13\":[\"1P 3M 5P 6M 7M 9M\"],\"M7b5\":[\"1P 3M 5d 7M\"],\"M7b6\":[\"1P 3M 6m 7M\"],\"M7b9\":[\"1P 3M 5P 7M 9m\"],\"M7sus4\":[\"1P 4P 5P 7M\"],\"M9\":[\"1P 3M 5P 7M 9M\",[\"maj9\",\"Maj9\"]],\"M9#11\":[\"1P 3M 5P 7M 9M 11A\",[\"maj9#11\",\"Maj9#11\",\"M9+4\",\"M9#4\"]],\"M9#5\":[\"1P 3M 5A 7M 9M\",[\"Maj9#5\"]],\"M9#5sus4\":[\"1P 4P 5A 7M 9M\"],\"M9b5\":[\"1P 3M 5d 7M 9M\"],\"M9sus4\":[\"1P 4P 5P 7M 9M\"],\"Madd9\":[\"1P 3M 5P 9M\",[\"2\",\"add9\",\"add2\"]],\"Maj7\":[\"1P 3M 5P 7M\",[\"maj7\",\"M7\"]],\"Mb5\":[\"1P 3M 5d\"],\"Mb6\":[\"1P 3M 13m\"],\"Msus2\":[\"1P 2M 5P\",[\"add9no3\",\"sus2\"]],\"Msus4\":[\"1P 4P 5P\",[\"sus\",\"sus4\"]],\"Maddb9\":[\"1P 3M 5P 9m\"],\"11b9\":[\"1P 5P 7m 9m 11P\"],\"13#11\":[\"1P 3M 5P 7m 9M 11A 13M\",[\"13+4\",\"13#4\"]],\"13#9\":[\"1P 3M 5P 7m 9A 13M\",[\"13#9_\"]],\"13#9#11\":[\"1P 3M 5P 7m 9A 11A 13M\"],\"13b5\":[\"1P 3M 5d 6M 7m 9M\"],\"13b9\":[\"1P 3M 5P 7m 9m 13M\"],\"13b9#11\":[\"1P 3M 5P 7m 9m 11A 13M\"],\"13no5\":[\"1P 3M 7m 9M 13M\"],\"13sus4\":[\"1P 4P 5P 7m 9M 13M\",[\"13sus\"]],\"69#11\":[\"1P 3M 5P 6M 9M 11A\"],\"7#11\":[\"1P 3M 5P 7m 11A\",[\"7+4\",\"7#4\",\"7#11_\",\"7#4_\"]],\"7#11b13\":[\"1P 3M 5P 7m 11A 13m\",[\"7b5b13\"]],\"7#5\":[\"1P 3M 5A 7m\",[\"+7\",\"7aug\",\"aug7\"]],\"7#5#9\":[\"1P 3M 5A 7m 9A\",[\"7alt\",\"7#5#9_\",\"7#9b13_\"]],\"7#5b9\":[\"1P 3M 5A 7m 9m\"],\"7#5b9#11\":[\"1P 3M 5A 7m 9m 11A\"],\"7#5sus4\":[\"1P 4P 5A 7m\"],\"7#9\":[\"1P 3M 5P 7m 9A\",[\"7#9_\"]],\"7#9#11\":[\"1P 3M 5P 7m 9A 11A\",[\"7b5#9\"]],\"7#9#11b13\":[\"1P 3M 5P 7m 9A 11A 13m\"],\"7#9b13\":[\"1P 3M 5P 7m 9A 13m\"],\"7add6\":[\"1P 3M 5P 7m 13M\",[\"67\",\"7add13\"]],\"7b13\":[\"1P 3M 7m 13m\"],\"7b5\":[\"1P 3M 5d 7m\"],\"7b6\":[\"1P 3M 5P 6m 7m\"],\"7b9\":[\"1P 3M 5P 7m 9m\"],\"7b9#11\":[\"1P 3M 5P 7m 9m 11A\",[\"7b5b9\"]],\"7b9#9\":[\"1P 3M 5P 7m 9m 9A\"],\"7b9b13\":[\"1P 3M 5P 7m 9m 13m\"],\"7b9b13#11\":[\"1P 3M 5P 7m 9m 11A 13m\",[\"7b9#11b13\",\"7b5b9b13\"]],\"7no5\":[\"1P 3M 7m\"],\"7sus4\":[\"1P 4P 5P 7m\",[\"7sus\"]],\"7sus4b9\":[\"1P 4P 5P 7m 9m\",[\"susb9\",\"7susb9\",\"7b9sus\",\"7b9sus4\",\"phryg\"]],\"7sus4b9b13\":[\"1P 4P 5P 7m 9m 13m\",[\"7b9b13sus4\"]],\"9#11\":[\"1P 3M 5P 7m 9M 11A\",[\"9+4\",\"9#4\",\"9#11_\",\"9#4_\"]],\"9#11b13\":[\"1P 3M 5P 7m 9M 11A 13m\",[\"9b5b13\"]],\"9#5\":[\"1P 3M 5A 7m 9M\",[\"9+\"]],\"9#5#11\":[\"1P 3M 5A 7m 9M 11A\"],\"9b13\":[\"1P 3M 7m 9M 13m\"],\"9b5\":[\"1P 3M 5d 7m 9M\"],\"9no5\":[\"1P 3M 7m 9M\"],\"9sus4\":[\"1P 4P 5P 7m 9M\",[\"9sus\"]],\"m\":[\"1P 3m 5P\"],\"m#5\":[\"1P 3m 5A\",[\"m+\",\"mb6\"]],\"m11\":[\"1P 3m 5P 7m 9M 11P\",[\"_11\"]],\"m11A 5\":[\"1P 3m 6m 7m 9M 11P\"],\"m11b5\":[\"1P 3m 7m 12d 2M 4P\",[\"h11\",\"_11b5\"]],\"m13\":[\"1P 3m 5P 7m 9M 11P 13M\",[\"_13\"]],\"m6\":[\"1P 3m 4P 5P 13M\",[\"_6\"]],\"m69\":[\"1P 3m 5P 6M 9M\",[\"_69\"]],\"m7\":[\"1P 3m 5P 7m\",[\"minor7\",\"_\",\"_7\"]],\"m7#5\":[\"1P 3m 6m 7m\"],\"m7add11\":[\"1P 3m 5P 7m 11P\",[\"m7add4\"]],\"m7b5\":[\"1P 3m 5d 7m\",[\"half-diminished\",\"h7\",\"_7b5\"]],\"m9\":[\"1P 3m 5P 7m 9M\",[\"_9\"]],\"m9#5\":[\"1P 3m 6m 7m 9M\"],\"m9b5\":[\"1P 3m 7m 12d 2M\",[\"h9\",\"-9b5\"]],\"mMaj7\":[\"1P 3m 5P 7M\",[\"mM7\",\"_M7\"]],\"mMaj7b6\":[\"1P 3m 5P 6m 7M\",[\"mM7b6\"]],\"mM9\":[\"1P 3m 5P 7M 9M\",[\"mMaj9\",\"-M9\"]],\"mM9b6\":[\"1P 3m 5P 6m 7M 9M\",[\"mMaj9b6\"]],\"mb6M7\":[\"1P 3m 6m 7M\"],\"mb6b9\":[\"1P 3m 6m 9m\"],\"o\":[\"1P 3m 5d\",[\"mb5\",\"dim\"]],\"o7\":[\"1P 3m 5d 13M\",[\"diminished\",\"m6b5\",\"dim7\"]],\"o7M7\":[\"1P 3m 5d 6M 7M\"],\"oM7\":[\"1P 3m 5d 7M\"],\"sus24\":[\"1P 2M 4P 5P\",[\"sus4add9\"]],\"+add#9\":[\"1P 3M 5A 9A\"],\"madd4\":[\"1P 3m 4P 5P\"],\"madd9\":[\"1P 3m 5P 9M\"]}");

/***/ }),
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */
/***/ (function(module, exports) {

// https://github.com/gasman/jasmid
//
//

module.exports = function(file){
	return MidiFile(file)
};

function MidiFile(data) {
	function readChunk(stream) {
		var id = stream.read(4);
		var length = stream.readInt32();
		return {
			'id': id,
			'length': length,
			'data': stream.read(length)
		};
	}
	
	var lastEventTypeByte;
	
	function readEvent(stream) {
		var event = {};
		event.deltaTime = stream.readVarInt();
		var eventTypeByte = stream.readInt8();
		if ((eventTypeByte & 0xf0) == 0xf0) {
			/* system / meta event */
			if (eventTypeByte == 0xff) {
				/* meta event */
				event.type = 'meta';
				var subtypeByte = stream.readInt8();
				var length = stream.readVarInt();
				switch(subtypeByte) {
					case 0x00:
						event.subtype = 'sequenceNumber';
						if (length != 2) throw "Expected length for sequenceNumber event is 2, got " + length;
						event.number = stream.readInt16();
						return event;
					case 0x01:
						event.subtype = 'text';
						event.text = stream.read(length);
						return event;
					case 0x02:
						event.subtype = 'copyrightNotice';
						event.text = stream.read(length);
						return event;
					case 0x03:
						event.subtype = 'trackName';
						event.text = stream.read(length);
						return event;
					case 0x04:
						event.subtype = 'instrumentName';
						event.text = stream.read(length);
						return event;
					case 0x05:
						event.subtype = 'lyrics';
						event.text = stream.read(length);
						return event;
					case 0x06:
						event.subtype = 'marker';
						event.text = stream.read(length);
						return event;
					case 0x07:
						event.subtype = 'cuePoint';
						event.text = stream.read(length);
						return event;
					case 0x20:
						event.subtype = 'midiChannelPrefix';
						if (length != 1) throw "Expected length for midiChannelPrefix event is 1, got " + length;
						event.channel = stream.readInt8();
						return event;
					case 0x2f:
						event.subtype = 'endOfTrack';
						if (length != 0) throw "Expected length for endOfTrack event is 0, got " + length;
						return event;
					case 0x51:
						event.subtype = 'setTempo';
						if (length != 3) throw "Expected length for setTempo event is 3, got " + length;
						event.microsecondsPerBeat = (
							(stream.readInt8() << 16)
							+ (stream.readInt8() << 8)
							+ stream.readInt8()
						)
						return event;
					case 0x54:
						event.subtype = 'smpteOffset';
						if (length != 5) throw "Expected length for smpteOffset event is 5, got " + length;
						var hourByte = stream.readInt8();
						event.frameRate = {
							0x00: 24, 0x20: 25, 0x40: 29, 0x60: 30
						}[hourByte & 0x60];
						event.hour = hourByte & 0x1f;
						event.min = stream.readInt8();
						event.sec = stream.readInt8();
						event.frame = stream.readInt8();
						event.subframe = stream.readInt8();
						return event;
					case 0x58:
						event.subtype = 'timeSignature';
						if (length != 4) throw "Expected length for timeSignature event is 4, got " + length;
						event.numerator = stream.readInt8();
						event.denominator = Math.pow(2, stream.readInt8());
						event.metronome = stream.readInt8();
						event.thirtyseconds = stream.readInt8();
						return event;
					case 0x59:
						event.subtype = 'keySignature';
						if (length != 2) throw "Expected length for keySignature event is 2, got " + length;
						event.key = stream.readInt8(true);
						event.scale = stream.readInt8();
						return event;
					case 0x7f:
						event.subtype = 'sequencerSpecific';
						event.data = stream.read(length);
						return event;
					default:
						// console.log("Unrecognised meta event subtype: " + subtypeByte);
						event.subtype = 'unknown'
						event.data = stream.read(length);
						return event;
				}
				event.data = stream.read(length);
				return event;
			} else if (eventTypeByte == 0xf0) {
				event.type = 'sysEx';
				var length = stream.readVarInt();
				event.data = stream.read(length);
				return event;
			} else if (eventTypeByte == 0xf7) {
				event.type = 'dividedSysEx';
				var length = stream.readVarInt();
				event.data = stream.read(length);
				return event;
			} else {
				throw "Unrecognised MIDI event type byte: " + eventTypeByte;
			}
		} else {
			/* channel event */
			var param1;
			if ((eventTypeByte & 0x80) == 0) {
				/* running status - reuse lastEventTypeByte as the event type.
					eventTypeByte is actually the first parameter
				*/
				param1 = eventTypeByte;
				eventTypeByte = lastEventTypeByte;
			} else {
				param1 = stream.readInt8();
				lastEventTypeByte = eventTypeByte;
			}
			var eventType = eventTypeByte >> 4;
			event.channel = eventTypeByte & 0x0f;
			event.type = 'channel';
			switch (eventType) {
				case 0x08:
					event.subtype = 'noteOff';
					event.noteNumber = param1;
					event.velocity = stream.readInt8();
					return event;
				case 0x09:
					event.noteNumber = param1;
					event.velocity = stream.readInt8();
					if (event.velocity == 0) {
						event.subtype = 'noteOff';
					} else {
						event.subtype = 'noteOn';
					}
					return event;
				case 0x0a:
					event.subtype = 'noteAftertouch';
					event.noteNumber = param1;
					event.amount = stream.readInt8();
					return event;
				case 0x0b:
					event.subtype = 'controller';
					event.controllerType = param1;
					event.value = stream.readInt8();
					return event;
				case 0x0c:
					event.subtype = 'programChange';
					event.programNumber = param1;
					return event;
				case 0x0d:
					event.subtype = 'channelAftertouch';
					event.amount = param1;
					return event;
				case 0x0e:
					event.subtype = 'pitchBend';
					event.value = param1 + (stream.readInt8() << 7);
					return event;
				default:
					throw "Unrecognised MIDI event type: " + eventType
					/* 
					console.log("Unrecognised MIDI event type: " + eventType);
					stream.readInt8();
					event.subtype = 'unknown';
					return event;
					*/
			}
		}
	}
	
	stream = Stream(data);
	var headerChunk = readChunk(stream);
	if (headerChunk.id != 'MThd' || headerChunk.length != 6) {
		throw "Bad .mid file - header not found";
	}
	var headerStream = Stream(headerChunk.data);
	var formatType = headerStream.readInt16();
	var trackCount = headerStream.readInt16();
	var timeDivision = headerStream.readInt16();
	
	if (timeDivision & 0x8000) {
		throw "Expressing time division in SMTPE frames is not supported yet"
	} else {
		ticksPerBeat = timeDivision;
	}
	
	var header = {
		'formatType': formatType,
		'trackCount': trackCount,
		'ticksPerBeat': ticksPerBeat
	}
	var tracks = [];
	for (var i = 0; i < header.trackCount; i++) {
		tracks[i] = [];
		var trackChunk = readChunk(stream);
		if (trackChunk.id != 'MTrk') {
			throw "Unexpected chunk - expected MTrk, got "+ trackChunk.id;
		}
		var trackStream = Stream(trackChunk.data);
		while (!trackStream.eof()) {
			var event = readEvent(trackStream);
			tracks[i].push(event);
			//console.log(event);
		}
	}
	
	return {
		'header': header,
		'tracks': tracks
	}
};

/* Wrapper for accessing strings through sequential reads */
function Stream(str) {
	var position = 0;
	
	function read(length) {
		var result = str.substr(position, length);
		position += length;
		return result;
	}
	
	/* read a big-endian 32-bit integer */
	function readInt32() {
		var result = (
			(str.charCodeAt(position) << 24)
			+ (str.charCodeAt(position + 1) << 16)
			+ (str.charCodeAt(position + 2) << 8)
			+ str.charCodeAt(position + 3));
		position += 4;
		return result;
	}

	/* read a big-endian 16-bit integer */
	function readInt16() {
		var result = (
			(str.charCodeAt(position) << 8)
			+ str.charCodeAt(position + 1));
		position += 2;
		return result;
	}
	
	/* read an 8-bit integer */
	function readInt8(signed) {
		var result = str.charCodeAt(position);
		if (signed && result > 127) result -= 256;
		position += 1;
		return result;
	}
	
	function eof() {
		return position >= str.length;
	}
	
	/* read a MIDI-style variable-length integer
		(big-endian value in groups of 7 bits,
		with top bit set to signify that another byte follows)
	*/
	function readVarInt() {
		var result = 0;
		while (true) {
			var b = readInt8();
			if (b & 0x80) {
				result += (b & 0x7f);
				result <<= 7;
			} else {
				/* b is the last byte */
				return result + b;
			}
		}
	}
	
	return {
		'eof': eof,
		'read': read,
		'readInt32': readInt32,
		'readInt16': readInt16,
		'readInt8': readInt8,
		'readVarInt': readVarInt
	}
}

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}(self,(function(){return function(t){var e={};function i(s){if(e[s])return e[s].exports;var n=e[s]={i:s,l:!1,exports:{}};return t[s].call(n.exports,n,n.exports,i),n.l=!0,n.exports}return i.m=t,i.c=e,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(s,n,function(e){return t[e]}.bind(null,n));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=4)}([function(t,e,i){"use strict";i.r(e),i.d(e,"SVGNS",(function(){return s})),i.d(e,"drawSVGPath",(function(){return n})),i.d(e,"drawSVGText",(function(){return r})),i.d(e,"createSVGGroupChild",(function(){return a})),i.d(e,"setFade",(function(){return h}));const s="http://www.w3.org/2000/svg";function n(t,e,i,n,r,a,h=1){const l=document.createElementNS(s,"path");return l.setAttributeNS(null,"d",e),l.setAttributeNS(null,"transform",`translate(${i}, ${n}) scale(${r}, ${a})`),l.setAttributeNS(null,"opacity",`${h}`),t.appendChild(l),l}function r(t,e,i,n,r,a=!1,h=1,l=1){const c=document.createElementNS(s,"text");c.setAttributeNS(null,"font-family","Times"),c.setAttributeNS(null,"font-size",r),a&&c.setAttributeNS(null,"font-weight","bold"),c.setAttributeNS(null,"transform",`translate(${i}, ${n}) scale(${h}, ${l})`);const o=document.createTextNode(e);return c.appendChild(o),t.appendChild(c),c}function a(t,e){const i=document.createElementNS(s,"g");return i.setAttribute("data-id",e),t.appendChild(i),i}function h(t,e=!1,i=1,n=0){let r=t.querySelector("animate");if(!r){(r=document.createElementNS(s,"animate")).setAttributeNS(null,"attributeName","opacity"),r.setAttributeNS(null,"dur","4s"),r.setAttributeNS(null,"fill","freeze"),r.setAttributeNS(null,"keyTimes","0; 0.25; 0.5; 0.75; 1");const t=(i+3*n)/4;r.setAttributeNS(null,"values",`${i}; ${t}; ${n}; ${t}; ${i}`)}return e?r.setAttributeNS(null,"repeatCount","indefinite"):r.setAttributeNS(null,"repeatCount","1"),t.appendChild(r),t}},function(t,e,i){"use strict";i.r(e),i.d(e,"PATH_SCALE",(function(){return s})),i.d(e,"staffLinePath",(function(){return r})),i.d(e,"extraLinePath",(function(){return a})),i.d(e,"barPath",(function(){return h})),i.d(e,"stemPath",(function(){return l})),i.d(e,"singleFlagPath",(function(){return c})),i.d(e,"multiFlagPath",(function(){return o})),i.d(e,"tiePath",(function(){return u})),i.d(e,"dotPath",(function(){return d})),i.d(e,"NOTE_PATHS",(function(){return f})),i.d(e,"REST_PATHS",(function(){return g})),i.d(e,"CLEF_PATHS",(function(){return S})),i.d(e,"ACCIDENTAL_PATHS",(function(){return p}));const s=100,n="M 0,10 C 0,-15 35,-50 80,-50 110,-50 125,-35 125,-10 \n125,15 90,50 45,50 15,50 0,35 0,10 Z",r="m 0,0 h 100",a="m -25,0 h 175",h="m 0,-200 v 400",l="m 0,0 v 100 h 15 v -100 z",c="M0,0 h 12 c 7,100 175,156 62,314 79,-177 -49,\n-193 -61,-200 l -13,-5 z",o="m 0,0 h 10 c 6,72 173,64 84,227 44,-120 -44,\n-123 -94,-167 z",u="M 0,25 C 10,46 30,67 50,67 69,67 90,47 100,25 94,\n65 73,89 50,89 26,89 5,63 0,25 Z",d="M 5 -20 a 20 20 0 1 0 0.00001 0 z",f={4:{path:"m 0,0 c 0,-37 49,-51 79,-51 31,0 83,13 83,51 0,39 \n-55,51 -84,51 C 49,51 0,37 0,0 Z m 111,31 c 13,-19 0,-58 -22,-68 -33,-15 \n-53,10 -39,49 9,27 48,39 61,19 z",width:150,stemVSteps:0,stemAnchor:0,flags:0},2:{path:"m 0,10 c 0,-25 35,-60 80,-60 15,0 45,4 45,40 C 125,16 \n89,50 45,50 17,50 0,36 0,10 Z m 71,7 c 17,-11 45,-34 38,-45 -7,-10 -39,1 \n-57,12 -19,11 -42,31 -36,42 6,10 37,2 55,-9 z",width:125,stemVSteps:7,stemAnchor:-10,flags:0},1:{path:n,width:125,stemVSteps:7,stemAnchor:-10,flags:0},.5:{path:n,width:125,stemVSteps:7,stemAnchor:-10,flags:1},.25:{path:n,width:125,stemVSteps:9,stemAnchor:-10,flags:2},.125:{path:n,width:125,stemVSteps:11,stemAnchor:-10,flags:3},.0625:{path:n,width:125,stemVSteps:13,stemAnchor:-10,flags:4}},g={4:"m 0,-50 h 125 v -50 H 0 Z",2:"M 0,0 H 125 V -50 H 0 Z",1:"m 0,-25 c 39,-39 37,-75 8,-120 l 6,-5 61,103 C \n40,-13 31,4 73,71 l -5,5 C 14,52 16,125 67,144 l -4,6 C -37,102 -1,22 59,60 Z",.5:"m 52,-47 c 26,-2 42,-21 48,-42 l 12,4 L 64,83 52,79 \n88,-49 c 0,0 -17,22 -57,22 -16,0 -31,-13 -31,-27 0,-18 10,-31 27,-31 17,0 \n33,15 25,38 z",.25:"m 129,-191 c -6,21 -22,40 -48,42 8,-23 -8,-38 \n-25,-38 -17,0 -27,13 -27,31 0,14 15,27 31,27 40,0 57,-22 57,-22 l -20,69 \nc -7,18 -22,33 -45,35 8,-23 -8,-38 -25,-38 -17,0 -27,13 -27,31 0,14 15,27 \n31,27 40,0 57,-22 57,-22 l -36,128 12,4 77,-270 z",.125:"m 129,-191 c -6,21 -22,40 -48,42 8,-23 -8,-38 \n-25,-38 -17,0 -27,13 -27,31 0,14 15,27 31,27 40,0 57,-22 57,-22 l -20,69 \nc -7,18 -22,33 -45,35 8,-23 -8,-38 -25,-38 -17,0 -27,13 -27,31 0,14 15,27 \n31,27 40,0 57,-22 57,-22 L 68,20 C 61,37 46,51 24,52 32,29 16,14 -1,14 c \n-17,0 -27,13 -27,31 0,14 15,27 31,27 38,0 55,-20 57,-22 l -36,128 12,4 \n105,-369 z",.0625:"m 158,-292 c -6,21 -22,40 -48,42 8,-23 -8,-38 \n-25,-38 -17,0 -27,13 -27,31 0,14 15,27 31,27 40,0 57,-22 57,-22 l -17,61 \nv 0 c -6,21 -22,40 -48,42 8,-23 -8,-38 -25,-38 -17,0 -27,13 -27,31 0,14 \n15,27 31,27 40,0 57,-22 57,-22 l -20,69 c -7,18 -22,33 -45,35 8,-23 -8,-38 \n-25,-38 -17,0 -27,13 -27,31 0,14 15,27 31,27 40,0 57,-22 57,-22 L 68,20 C \n61,37 46,51 24,52 32,29 16,14 -1,14 c -17,0 -27,13 -27,31 0,14 15,27 31,27 \n38,0 55,-20 57,-22 l -36,128 12,4 134,-469 z"},S={50:{path:"m 101,-199 c -49,0 -100,28 -100,83 0,39 58,57 82,26 15,-20 \n-4,-47 -32,-47 -23,1 -25,0 -25,-8 0,-22 40,-46 71,-41 91,16 67,208 -105,302 \n75,-27 198,-94 211,-201 6,-66 -42,-114 -102,-114 z m 143,33 c -13,0 -23,11 \n-23,24 0,14 10,24 23,24 13,0 23,-11 23,-24 0,-13 -10,-24 -23,-24 z m 2,83 c \n-13,0 -23,11 -23,24 0,14 10,24 23,24 13,0 23,-11 23,-24 0,-13 -10,-24 -23,-24 \nz",upper:-4,lower:3},71:{path:"M 139,48 C 102,57 76,120 131,151 41,128 64,24 129,2 L \n117,-57 C -32,47 26,217 166,182 Z m 12,-1 27,131 C 242,153 216,46 151,47 \nZ m -35,-177 c 34,-23 82,-117 50,-140 -23,-17 -71,33 -50,140 z m -10,10 c \n-23,-77 -20,-200 48,-213 19,-4 89,171 -26,266 l 13,66 c 120,-6 137,155 \n39,191 l 12,58 c 30,131 -137,145 -138,47 0,-29 37,-59 63,-37 21,18 25,71 \n-25,70 32,42 103,0 91,-65 L 167,193 C 56,232 -112,63 106,-120 Z",upper:-7,lower:8}},p=[null,"m -49,-121 v 52 l -29,9 v -48 h -8 v 51 l -20,6 v 29 l \n20,-6 v 70 l -20,6 v 30 l 20,-6 v 51 h 8 V 69 l 30,-8 v 50 h 8 V 58 l 20,-6 \nV 23 l -20,6 v -71 l 20,-6 v -29 l -20,6 v -50 z m 1,82 v 71 l -29,9 v -71 z","M -106,-166 V 67 c 52,-42 85,-56 85,-94 0,-47 -46,-51 \n-73,-22 v -117 z m 31,120 c 20,0 42,46 -20,91 V -7 c 0,-28 10,-39 20,-39 z","m -81,-58 v -48 H -92 V 73 l 60,-13 v 50 h 11 V -72 Z m \n50,24 v 58 l -50,11 v -58 z"]},function(t,e,i){"use strict";i.r(e),i.d(e,"MIN_RESOLUTION",(function(){return s})),i.d(e,"STEM_WIDTH",(function(){return n})),i.d(e,"LINE_STROKE",(function(){return r})),i.d(e,"COMPACT_SPACING",(function(){return a}));const s=.0625,n=15,r=1,a=150},function(t,e,i){"use strict";i.r(e),i.d(e,"MAX_QUARTER_DIVISION",(function(){return l})),i.d(e,"ScrollType",(function(){return c})),i.d(e,"StaffSVGRender",(function(){return o}));var s=i(2),n=i(0),r=i(1);const a=[{steps:[0,0,-1,-1,-2,-3,-3,-4,-4,-5,-5,-6],accidental:[0,1,0,1,0,0,1,0,1,0,1,0]},{steps:[0,-1,-1,-2,-2,-3,-4,-4,-5,-5,-6,-6],accidental:[0,0,3,0,3,0,0,3,0,3,0,3]},{steps:[0,0,-1,-1,-2,-3,-3,-4,-4,-5,-5,-6],accidental:[3,0,0,1,0,3,0,0,1,0,1,0]},{steps:[0,-1,-1,-2,-2,-3,-4,-4,-5,-5,-6,-6],accidental:[0,2,0,0,3,0,2,0,0,3,0,3]},{steps:[0,0,-1,-1,-2,-3,-3,-4,-4,-5,-5,-6],accidental:[3,0,3,0,0,3,0,3,0,0,1,0]},{steps:[0,-1,-1,-2,-2,-3,-4,-4,-5,-5,-6,-6],accidental:[0,2,0,2,0,0,2,0,2,0,0,3]},{steps:[0,-1,-1,-2,-2,-3,-4,-4,-5,-5,-6,-7],accidental:[3,0,3,0,3,0,0,3,0,3,0,0]},{steps:[0,0,-1,-1,-2,-3,-3,-4,-4,-5,-5,-6],accidental:[0,1,0,1,0,3,0,0,1,0,1,0]},{steps:[0,-1,-1,-2,-2,-3,-4,-4,-5,-5,-6,-6],accidental:[0,0,3,0,3,0,2,0,0,3,0,3]},{steps:[0,0,-1,-1,-2,-3,-3,-4,-4,-5,-5,-6],accidental:[3,0,0,1,0,3,0,3,0,0,1,0]},{steps:[0,-1,-1,-2,-2,-3,-4,-4,-5,-5,-6,-6],accidental:[0,2,0,0,3,0,2,0,2,0,0,3]},{steps:[0,0,-1,-1,-2,-3,-3,-4,-4,-5,-5,-6],accidental:[3,0,3,0,0,3,0,3,0,3,0,0]}],h=[{accidental:1,pitches:[]},{accidental:2,pitches:[70,75,68,73,66]},{accidental:1,pitches:[78,73]},{accidental:2,pitches:[70,75,68]},{accidental:1,pitches:[78,73,80,75]},{accidental:2,pitches:[70]},{accidental:2,pitches:[70,75,68,73,66,71]},{accidental:1,pitches:[78]},{accidental:2,pitches:[70,75,68,73]},{accidental:1,pitches:[78,73,80]},{accidental:2,pitches:[70,75]},{accidental:1,pitches:[78,73,80,75,70]}],l=16;var c;!function(t){t[t.PAGE=0]="PAGE",t[t.NOTE=1]="NOTE",t[t.BAR=2]="BAR"}(c||(c={}));class o{constructor(t,e,i){this.handleScrollEvent=t=>{this.lastKnownScrollLeft=this.parentElement.scrollLeft,this.ticking||window.requestAnimationFrame(()=>{this.changeAndDrawSignaturesIfNeeded(this.lastKnownScrollLeft),this.ticking=!1}),this.ticking=!0},this.scoreInfo=t;this.config={noteHeight:e.noteHeight||6,noteSpacing:e.noteSpacing||1,pixelsPerTimeStep:e.pixelsPerTimeStep||30,noteRGB:e.noteRGB||"8, 41, 64",activeNoteRGB:e.activeNoteRGB||"240, 84, 119"},this.div=i,this.timeSignatureNumerator=4,this.timeSignatureDenominator=4,this.key=e.defaultKey||0,this.scrollType=e.scrollType||c.PAGE,this.scale=this.config.noteHeight/r.PATH_SCALE,(void 0===e.pixelsPerTimeStep||e.pixelsPerTimeStep<=0)&&(this.config.pixelsPerTimeStep=0,this.config.noteSpacing=s.COMPACT_SPACING*this.scale),this.clear(),this.redraw()}clear(){for(;this.div.lastChild;)this.div.removeChild(this.div.lastChild);this.div.style.overflow="visible",this.div.style.position="relative",this.overlaySVG=document.createElementNS(n.SVGNS,"svg"),this.overlaySVG.style.position="absolute",this.div.appendChild(this.overlaySVG),this.overlayG=Object(n.createSVGGroupChild)(this.overlaySVG,"overlay"),this.signaturesBlinking=!1,this.signaturesQuarters=0,this.parentElement=document.createElement("div"),this.parentElement.style.overflow="auto",this.div.appendChild(this.parentElement),this.ticking=!1,this.lastKnownScrollLeft=0,this.parentElement.addEventListener("scroll",this.handleScrollEvent),this.staffSVG=document.createElementNS(n.SVGNS,"svg"),this.parentElement.appendChild(this.staffSVG),this.staffG=Object(n.createSVGGroupChild)(this.staffSVG,"staff"),this.linesG=Object(n.createSVGGroupChild)(this.staffSVG,"lines"),this.setStroke(this.linesG),this.staffG.appendChild(this.linesG),this.musicG=Object(n.createSVGGroupChild)(this.staffSVG,"music"),this.setFill(this.musicG),this.setStroke(this.musicG,0),this.staffG.appendChild(this.musicG),this.signaturesG=Object(n.createSVGGroupChild)(this.staffSVG,"signatures"),this.staffG.appendChild(this.signaturesG);let t=0,e=0;this.scoreInfo.notes.forEach(i=>{t+=i.pitch,++e});const i=t/e;this.clef=i<60?50:71,this.signaturesList=[{x:0,q:0}],this.signatureCurrent=0,this.signatureNext=0,this.changeKeySignatureIfNeeded(0),this.changeTimeSignatureIfNeeded(0),this.vStepSize=this.config.noteHeight/2,this.hStepSize=this.config.pixelsPerTimeStep,this.staffOffset=0,this.height=0,this.width=0,this.musicBlockMap=new Map,this.playingNotes=[],this.lastBar=0,this.barAccidentals={},this.lastQ=-1}isPaintingActiveNote(t,e){const i=t.start===e.start,s=t.start<=e.start&&t.start+t.length>=e.start+e.length;return i||s}redraw(t,e){let i=-1;const s=0===this.config.pixelsPerTimeStep;if(t){const r=[];this.playingNotes.forEach(e=>{this.isPaintingActiveNote(e,t)?r.push(e):this.highlightElement(this.getGroup(e),!1)}),this.playingNotes=r;const a=this.getGroup(t);if(a){this.playingNotes.push(t),this.highlightElement(a,!0),i=a.getBoundingClientRect().left-this.staffSVG.getBoundingClientRect().left;const r=t.start,h=a.getAttribute("data-is-bar-beginning");(this.scrollType!==c.BAR||h)&&this.scrollIntoViewIfNeeded(e,i),!s&&this.signaturesBlinking&&r>=this.signaturesQuarters&&(this.signaturesBlinking=!1,Object(n.setFade)(this.overlayG,this.signaturesBlinking))}}else{this.setDetails();const t=-1===this.lastQ;let e=0,i=0;t?(i=this.drawSignatures(this.overlayG,e,!0,!0,!0),s&&(this.width=0,i+=this.config.noteSpacing),i+=this.drawRests(this.initialRest,e+i)):e=this.width,this.musicBlockMap.forEach((t,n)=>{s||(e=this.quartersToTime(n)*this.hStepSize),n>this.lastQ?(i+=this.drawMusicBlock(t,e+i),this.lastQ=n):n===this.lastQ&&(i+=this.drawRests(t,e+i))});const n=this.staffSVG.getBoundingClientRect(),r=this.musicG.getBoundingClientRect();if(this.updateVerticalBoundaries(r.top-n.top,r.bottom-n.top),s)this.width+=i;else{const t=this.musicBlockMap.get(this.lastQ),e=this.quartersToTime(this.lastQ+t.notes[0].length);this.width=e*this.config.pixelsPerTimeStep}this.staffSVG.setAttributeNS(null,"width",`${this.width}`),this.redrawStaff(this.linesG,0,this.width)}return i}drawMusicBlock(t,e){const i=t.notes[0].start;let a=this.drawBarIfNeeded(i,e);a+=this.drawSignaturesIfNeeded(i,e+a);let h=0;for(let e=4;e>=s.MIN_RESOLUTION&&!h;e/=2)e<=t.notes[0].length&&(h=e);if(0===h){const e=0===t.notes[0].length?"[infinite]":`${4/t.notes[0].length}`;console.warn(" StaffRender ","background:orange; color:white","StaffRender does not handle notes shorther than "+`1/${4/s.MIN_RESOLUTION}th, and this score tries to draw a `+`1/${e}th. Shortest possible note will be drawn instead.`),h=s.MIN_RESOLUTION}const l=r.NOTE_PATHS[h];let c;if(l.stemAnchor&&(c=Object(n.createSVGGroupChild)(this.musicG,"stem")),t.notes.forEach(i=>{const s=i.vSteps*this.vStepSize,c=2*(i.vSteps>0?Math.floor(i.vSteps/2):Math.ceil(i.vSteps/2)),o=i.vSteps>0?-2:2;for(let t=c;Math.abs(t)>4;t+=o)Object(n.drawSVGPath)(this.linesG,r.extraLinePath,e+a,t*this.vStepSize,this.scale,1);if(i.g=i.tiedFrom?i.tiedFrom.g:Object(n.createSVGGroupChild)(this.musicG,`${i.start}-${i.pitch}`),t.isBarBeginning&&i.g.setAttribute("data-is-bar-beginning","true"),i.tiedFrom){const t=e+a-i.tiedFrom.xHeadRight;Object(n.drawSVGPath)(i.g,r.tiePath,i.tiedFrom.xHeadRight,s,t/r.PATH_SCALE,this.scale*(i.vSteps<0?-1:1),i.opacity)}Object(n.drawSVGPath)(i.g,l.path,e+a,s,this.scale,this.scale,i.opacity),i.xHeadRight=e+a+l.width*this.scale,1.5*h<=i.length&&Object(n.drawSVGPath)(i.g,r.dotPath,e+a+l.width*this.scale+this.vStepSize/2,s-this.vStepSize/2,this.scale,this.scale,i.opacity),0!==i.accidental&&Object(n.drawSVGPath)(i.g,r.ACCIDENTAL_PATHS[i.accidental],e+a,s,this.scale,this.scale,i.opacity)}),l.stemAnchor){let i,h,o=e+a;const u=l.stemAnchor*this.scale,d=t.minVStep+t.maxVStep<0,f=l.flags>2?2*(l.flags-2):0;if(d?(i=t.maxVStep*this.vStepSize-u,h=(t.minVStep+7+f)*this.vStepSize):(o+=(l.width-s.STEM_WIDTH)*this.scale,i=t.minVStep*this.vStepSize+u,h=(t.maxVStep-7-f)*this.vStepSize),Object(n.drawSVGPath)(c,r.stemPath,o,i,this.scale,(h-i)/r.PATH_SCALE),1===l.flags)Object(n.drawSVGPath)(c,r.singleFlagPath,o,h,this.scale,this.scale*(d?-1:1),1);else if(l.flags>1)for(let t=0;t<l.flags;++t)Object(n.drawSVGPath)(c,r.multiFlagPath,o,h,this.scale,this.scale*(d?-1:1),1),h+=(d?-2:2)*this.vStepSize}return 0===this.config.pixelsPerTimeStep&&(a+=l.width*this.scale,c&&(a+=c.getBoundingClientRect().width),a+=this.config.noteSpacing),a+=this.drawRests(t,e+a)}drawBarIfNeeded(t,e){let i=0;const s=this.lastBar+this.getBarLength();return 0!==t&&t>=s&&(this.config.pixelsPerTimeStep>0?e-=this.config.noteSpacing:i=this.config.noteSpacing,Object(n.drawSVGPath)(this.linesG,r.barPath,e,0,1,this.scale),this.lastBar=s),i}drawRests(t,e){let i=0,a=t.restToNextLength;if(a){this.config.pixelsPerTimeStep>0&&(e+=this.quartersToTime(t.notes[0].length)*this.hStepSize);let h=t.notes[0].start+t.notes[0].length,l=0;const c=this.lastBar+this.getBarLength()-h;let o;for(a>c&&(l=a-c,a=c),o=4;o>this.getBarLength()&&o>=s.MIN_RESOLUTION;o/=2);let u=o;for(;(a||l)&&u>=s.MIN_RESOLUTION;){if(u<=a){i+=this.drawBarIfNeeded(h,e+i),i+=this.drawSignaturesIfNeeded(h,e+i);const t=Object(n.drawSVGPath)(this.musicG,r.REST_PATHS[u],e+i,0,this.scale,this.scale);this.config.pixelsPerTimeStep>0?e+=this.quartersToTime(u)*this.hStepSize:(i+=t.getBoundingClientRect().width,i+=this.config.noteSpacing),h+=u,a-=u}if(l&&a<=0){const t=this.getBarLength();for(l>t?(a=t,l-=t):(a=l,l=0),o=4;o>this.getBarLength()&&o>=s.MIN_RESOLUTION;o/=2);u=o}a<u&&(u/=2)}}return i}redrawStaff(t,e,i){let s=t.querySelector('g[data-id="staff-five-lines"]');if(s)s.setAttributeNS(null,"transform",`scale(${i/r.PATH_SCALE}, 1)`);else{s=Object(n.createSVGGroupChild)(t,"staff-five-lines");const a=0;for(let t=-4;t<=4;t+=2)Object(n.drawSVGPath)(s,r.staffLinePath,e,a+t*this.vStepSize,i/r.PATH_SCALE,1)}return s}clearSignatureOverlay(){for(;this.overlayG.lastChild;)this.overlayG.removeChild(this.overlayG.lastChild)}drawSignaturesIfNeeded(t,e){let i=0;const r=this.changeKeySignatureIfNeeded(t),a=this.changeTimeSignatureIfNeeded(t);if(r||a){const h=s.COMPACT_SPACING*this.scale*(this.config.pixelsPerTimeStep>0?3:2);this.signaturesList.push({x:e-h,q:t}),null===this.signatureNext&&(this.signatureNext=e);const l=t>0?Object(n.createSVGGroupChild)(this.signaturesG,"signatures"):this.overlayG;i+=this.drawSignatures(l,e+i,!1,r,a)}return 0===this.config.pixelsPerTimeStep?i:0}drawSignatures(t,e,i,a,l){const c=s.COMPACT_SPACING*this.scale;let o,u=c;const d=t===this.overlayG||this.config.pixelsPerTimeStep>0;if(d){(o=document.createElementNS(n.SVGNS,"rect")).setAttributeNS(null,"x",`${e}`),o.setAttributeNS(null,"y","0"),o.setAttributeNS(null,"width","1"),o.setAttributeNS(null,"height","1"),o.setAttribute("data-id","background"),t.appendChild(o);const i=document.defaultView.getComputedStyle(this.div.parentElement);o.setAttributeNS(null,"fill",i.getPropertyValue("background-color"))}if(i){const i=Object(n.drawSVGPath)(t,r.CLEF_PATHS[this.clef].path,e+u,0,this.scale,this.scale);this.setFill(i),u+=3*c}if(a){const i=h[this.key].accidental,s=71===this.clef?0:14;h[this.key].pitches.forEach(a=>{const h=this.getPitchDetails(a).vSteps,l=Object(n.drawSVGPath)(t,r.ACCIDENTAL_PATHS[i],e+u,(s+h)*this.vStepSize,this.scale,this.scale);this.setFill(l),u+=l.getBoundingClientRect().width})}if(l){const i=Object(n.createSVGGroupChild)(t,"time-key"),s=`${2.85*this.config.noteHeight}px`;Object(n.drawSVGText)(i,`${this.timeSignatureNumerator}`,e+u,-.5,s,!0),Object(n.drawSVGText)(i,`${this.timeSignatureDenominator}`,e+u,4*this.vStepSize-.5,s,!0),this.setFill(i),u+=i.getBoundingClientRect().width+c}const f=this.redrawStaff(t,e,u);this.setStroke(f);const g=this.div.getBoundingClientRect(),S=t.getBoundingClientRect();if(this.updateVerticalBoundaries(S.top-g.top,S.bottom-g.top),d&&(o.setAttributeNS(null,"y",`${-this.staffOffset}`),o.setAttributeNS(null,"height",`${this.height}`),o.setAttributeNS(null,"width",`${u}`)),t===this.overlayG){this.overlaySVG.setAttributeNS(null,"width",`${u+5}`);for(let e=0;e<5;++e){const i=Object(n.drawSVGPath)(t,r.stemPath,u+e,e*e-this.staffOffset,1/s.STEM_WIDTH,(this.height-2*e*e)/r.PATH_SCALE,(e-5)*(e-5)*2/r.PATH_SCALE);this.setFill(i)}}if(this.config.pixelsPerTimeStep>0){const i=0===this.signaturesQuarters;return i&&(this.signaturesQuarters=this.timeToQuarters(u/this.hStepSize)),(i||e>0)&&(this.signaturesBlinking=!0,Object(n.setFade)(t,this.signaturesBlinking)),0}return u}changeKeySignatureIfNeeded(t){if(this.scoreInfo.keySignatures){let e=this.key;for(let i=0;i<this.scoreInfo.keySignatures.length&&this.scoreInfo.keySignatures[i].start<=t;++i)e=this.scoreInfo.keySignatures[i].key;if(e!==this.key)return this.key=e,!0}return!1}changeTimeSignatureIfNeeded(t){if(this.scoreInfo.timeSignatures){let e=this.timeSignatureNumerator,i=this.timeSignatureDenominator;for(let s=0;s<this.scoreInfo.timeSignatures.length&&this.scoreInfo.timeSignatures[s].start<=t;++s)e=this.scoreInfo.timeSignatures[s].numerator,i=this.scoreInfo.timeSignatures[s].denominator;if(e!==this.timeSignatureNumerator||i!==this.timeSignatureDenominator)return this.timeSignatureNumerator=e,this.timeSignatureDenominator=i,!0}return!1}changeAndDrawSignaturesIfNeeded(t){let e;if(t<this.signatureCurrent||null!==this.signatureNext&&this.signatureNext<=t){e=this.signaturesList[0].q,this.signatureNext=null;for(let i=0;i<this.signaturesList.length;++i){if(t<this.signaturesList[i].x){this.signatureNext=this.signaturesList[i].x;break}this.signatureCurrent=this.signaturesList[i].x,e=this.signaturesList[i].q}}if(void 0!==e){const t=this.key,i=this.timeSignatureNumerator,s=this.timeSignatureDenominator;this.changeKeySignatureIfNeeded(e),this.changeTimeSignatureIfNeeded(e),this.clearSignatureOverlay(),this.drawSignatures(this.overlayG,0,!0,!0,!0),this.key=t,this.timeSignatureNumerator=i,this.timeSignatureDenominator=s}this.config.pixelsPerTimeStep>0&&0===t&&(this.signatureNext=0,this.signaturesBlinking=!0,Object(n.setFade)(this.overlayG,this.signaturesBlinking))}getBarLength(){return 4*this.timeSignatureNumerator/this.timeSignatureDenominator}scrollIntoViewIfNeeded(t,e){if(t)if(this.scrollType===c.PAGE){const t=this.parentElement.getBoundingClientRect().width;e>this.parentElement.scrollLeft+t&&(this.parentElement.scrollLeft=e-20)}else{const t=this.parentElement.getBoundingClientRect().width;this.parentElement.scrollLeft=e-.5*t}}updateVerticalBoundaries(t,e){let i=0;if(t<0){this.staffOffset-=t;const e=`translate(0, ${this.staffOffset})`;this.overlayG.setAttributeNS(null,"transform",e),this.staffG.setAttributeNS(null,"transform",e),i=this.height-t}if((i=Math.max(i,e-t))>this.height){this.height=i,this.overlaySVG.setAttributeNS(null,"height",`${this.height}`),this.staffSVG.setAttributeNS(null,"height",`${this.height}`);const t=this.div.querySelectorAll('rect[data-id="background"]');for(let e=0;e<t.length;++e){const i=t[e];i.setAttributeNS(null,"y",`${-this.staffOffset}`),i.setAttributeNS(null,"height",`${this.height}`)}}}setFill(t,e=!1){t.setAttributeNS(null,"fill",this.getColor(e))}setStroke(t,e=s.LINE_STROKE,i=!1){t.setAttributeNS(null,"stroke",this.getColor(i)),t.setAttributeNS(null,"stroke-width",`${e}`)}getColor(t){return`rgb(${t?this.config.activeNoteRGB:this.config.noteRGB})`}getOpacity(t){return t?t/127*.8+.2:1}getGroup(t){const e=t.start,i=t.pitch;return this.staffSVG.querySelector(`g[data-id="${e}-${i}"]`)}highlightElement(t,e){t.setAttribute("fill",this.getColor(e)),t.setAttribute("stroke",this.getColor(e))}getBarBeginnings(){const t=new Set;let e=0;this.scoreInfo.notes.forEach(t=>{t.start+t.length>e&&(e=t.start+t.length)});const i=this.scoreInfo.timeSignatures?this.scoreInfo.timeSignatures.slice(0):[{start:0,numerator:4,denominator:4}];i.sort((t,e)=>t.start-e.start);let s=0;for(let n=0;n<i.length;++n){const r=n===i.length-1?e:i[n].start,a=4*i[n].numerator/i[n].denominator;for(;s<r;s+=a)t.add(s)}return t}quartersToTime(t){return t/this.scoreInfo.tempos[0].qpm*60}timeToQuarters(t){return t*this.scoreInfo.tempos[0].qpm/60}setDetails(){let t=new Map;const e=this.getBarBeginnings(),i=new Set(e);this.scoreInfo.notes.slice().sort((t,e)=>t.start-e.start).forEach(e=>{const s=this.getQNote(e);i.add(s.start),i.add(s.start+s.length),t.has(s.start)?t.get(s.start).push(s):t.set(s.start,[s])}),Array.from(i).sort((t,e)=>t-e).forEach(e=>{const i=[];t.forEach(t=>{t.forEach(t=>{const s=this.splitQNote(t,e);s&&i.push(s)})}),i.forEach(e=>{t.has(e.start)?t.get(e.start).push(e):t.set(e.start,[e])})}),t=new Map(Array.from(t).sort((t,e)=>t[0]-e[0]));const s=this.key;let n=null,r=0;const a=e[Symbol.iterator]();let h=a.next();t.forEach((t,e)=>{const i={maxVStep:Number.MAX_SAFE_INTEGER,minVStep:Number.MIN_SAFE_INTEGER,restToNextLength:0,isBarBeginning:!1,notes:[]};this.changeKeySignatureIfNeeded(e);const s=h.value+this.getBarLength();!h.done&&e>=s&&(h=a.next(),this.barAccidentals={},i.isBarBeginning=!0),t.forEach(t=>{this.analyzePitch(t,e),i.minVStep=Math.max(t.vSteps,i.minVStep),i.maxVStep=Math.min(t.vSteps,i.maxVStep),i.notes.push(t)}),n&&(n.restToNextLength=e-r),this.musicBlockMap.set(e,i),n=i,r=e+i.notes[0].length}),this.initialRest={maxVStep:0,minVStep:0,restToNextLength:this.musicBlockMap.values().next().value.notes[0].start,isBarBeginning:!0,notes:[{start:0,length:0,vSteps:0,accidental:0,opacity:0,pitch:0,xHeadRight:0}]},this.key=s}getQNote(t){return{start:t.start,length:t.length,vSteps:0,accidental:0,opacity:this.getOpacity(t.intensity),pitch:t.pitch,xHeadRight:0}}splitQNote(t,e){const i=t.start+t.length-e;return e>t.start&&i>0?(t.length-=i,{start:e,length:i,vSteps:t.vSteps,accidental:t.accidental,opacity:t.opacity,pitch:t.pitch,xHeadRight:0,tiedFrom:t}):null}analyzePitch(t,e){const i=this.getPitchDetails(t.pitch);i.vSteps in this.barAccidentals?i.accidental===this.barAccidentals[i.vSteps]?i.accidental=0:(3===this.barAccidentals[i.vSteps]?i.accidental=i.keyAccidental:0===i.accidental&&(i.accidental=3),this.barAccidentals[i.vSteps]=i.accidental):(t.tiedFrom&&(i.accidental=0),this.barAccidentals[i.vSteps]=i.accidental),t.vSteps=i.vSteps,t.accidental=i.accidental}getPitchDetails(t){const e=t-60,i=Math.floor(e/12),s=e-12*i,n=a[this.key].steps[s],r=71===this.clef?6:-6,l=1===h[this.key].accidental?69+(s+3)%12:64+(s+8)%12;return{vSteps:r-7*i+n,accidental:a[this.key].accidental[s],keyAccidental:h[this.key].pitches.indexOf(l)>-1?h[this.key].accidental:0}}}},function(t,e,i){"use strict";i.r(e);var s=i(3);i.d(e,"MAX_QUARTER_DIVISION",(function(){return s.MAX_QUARTER_DIVISION})),i.d(e,"ScrollType",(function(){return s.ScrollType})),i.d(e,"StaffSVGRender",(function(){return s.StaffSVGRender}))}])}));

/***/ }),
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./core/aux_inputs.ts
var aux_inputs = __webpack_require__(35);

// EXTERNAL MODULE: ./core/chords.ts + 9 modules
var chords = __webpack_require__(16);

// EXTERNAL MODULE: ./core/constants.ts
var constants = __webpack_require__(1);

// EXTERNAL MODULE: ./core/data.ts
var data = __webpack_require__(10);

// EXTERNAL MODULE: ./core/logging.ts
var logging = __webpack_require__(5);

// EXTERNAL MODULE: ./core/performance.ts
var core_performance = __webpack_require__(11);

// EXTERNAL MODULE: ./core/sequences.ts
var sequences = __webpack_require__(6);

// EXTERNAL MODULE: external {"commonjs":"tone","commonjs2":"tone","amd":"Tone","root":"Tone"}
var external_commonjs_tone_commonjs2_tone_amd_Tone_root_Tone_ = __webpack_require__(3);

// CONCATENATED MODULE: ./core/metronome.ts

const QUARTERS_PER_BAR = 4;
class MetronomeCallbackObject {
}
class metronome_Metronome {
    constructor(callbackObject, clicksPerQuarter = 1) {
        this.clicksPerQuarter = 1;
        this.muted = false;
        this.loClick = new external_commonjs_tone_commonjs2_tone_amd_Tone_root_Tone_["MembraneSynth"]({
            pitchDecay: 0.008,
            envelope: { attack: 0.001, decay: 0.3, sustain: 0 }
        })
            .toMaster();
        this.hiClick = new external_commonjs_tone_commonjs2_tone_amd_Tone_root_Tone_["MembraneSynth"]({
            pitchDecay: 0.008,
            envelope: { attack: 0.001, decay: 0.3, sustain: 0 }
        })
            .toMaster();
        this.loClickNote = 'c5';
        this.hiClickNote = 'g5';
        this.ticking = false;
        this.startedAt = null;
        this.step = -1;
        this.reset();
        this.callbackObject = callbackObject;
        this.clicksPerQuarter = clicksPerQuarter;
    }
    isTicking() {
        return this.ticking;
    }
    getStartedAt() {
        return this.startedAt;
    }
    getOffsetTime() {
        return external_commonjs_tone_commonjs2_tone_amd_Tone_root_Tone_["immediate"]() - this.startedAt;
    }
    start(bpm = 120) {
        this.reset();
        this.ticking = true;
        if (!this.callbackObject.click) {
            this.callbackObject.click = () => { };
        }
        if (!this.callbackObject.quarter) {
            this.callbackObject.quarter = () => { };
        }
        if (!this.callbackObject.bar) {
            this.callbackObject.bar = () => { };
        }
        let bar = 0;
        const clicksInBar = QUARTERS_PER_BAR * this.clicksPerQuarter;
        external_commonjs_tone_commonjs2_tone_amd_Tone_root_Tone_["Transport"].scheduleRepeat((time) => {
            if (!this.startedAt) {
                this.startedAt = time;
            }
            const offsetTime = time - this.startedAt;
            this.step++;
            const clickInBar = this.step % clicksInBar;
            const clickInQuarter = Math.floor(clickInBar / this.clicksPerQuarter);
            const quarter = clickInBar % this.clicksPerQuarter;
            this.callbackObject.click(offsetTime, clickInBar);
            if (quarter === 0) {
                this.callbackObject.quarter(offsetTime, clickInQuarter);
            }
            if (!this.muted) {
                if (clickInBar === 0) {
                    this.hiClick.triggerAttack(this.hiClickNote, time, 0.1);
                }
                else {
                    this.loClick.triggerAttack(this.loClickNote, time, 0.1);
                }
            }
            if (clickInBar === 0) {
                this.callbackObject.bar(offsetTime, bar);
                bar++;
            }
        }, `${clicksInBar}n`);
        external_commonjs_tone_commonjs2_tone_amd_Tone_root_Tone_["Transport"].bpm.value = bpm;
        external_commonjs_tone_commonjs2_tone_amd_Tone_root_Tone_["Transport"].start();
    }
    stop() {
        this.ticking = false;
        external_commonjs_tone_commonjs2_tone_amd_Tone_root_Tone_["Transport"].cancel();
        external_commonjs_tone_commonjs2_tone_amd_Tone_root_Tone_["Transport"].stop();
    }
    reset() {
        this.muted = false;
        this.ticking = false;
        this.step = -1;
        this.startedAt = null;
    }
}

// EXTERNAL MODULE: ../node_modules/midi-file-parser/index.js
var midi_file_parser = __webpack_require__(48);

// EXTERNAL MODULE: ../node_modules/jsmidgen/lib/jsmidgen.js
var jsmidgen = __webpack_require__(17);

// CONCATENATED MODULE: ../node_modules/midiconvert/src/Util.js
function cleanName(str){
	//ableton adds some weird stuff to the track
	return str.replace(/\u0000/g, '')
}

function ticksToSeconds(ticks, header){
	return (60 / header.bpm) * (ticks / header.PPQ);
}

function isNumber(val){
	return typeof val === 'number'
}

function isString(val){
	return typeof val === 'string'
}

const isPitch = (function(){
	const regexp = /^([a-g]{1}(?:b|#|x|bb)?)(-?[0-9]+)/i
	return (val) => {
		return isString(val) && regexp.test(val)
	}
}())


function midiToPitch(midi){
	const scaleIndexToNote = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
	const octave = Math.floor(midi / 12) - 1;
	const note = midi % 12;
	return scaleIndexToNote[note] + octave;
}

const pitchToMidi = (function(){
	const regexp = /^([a-g]{1}(?:b|#|x|bb)?)(-?[0-9]+)/i
	const noteToScaleIndex = {
		"cbb" : -2, "cb" : -1, "c" : 0,  "c#" : 1,  "cx" : 2,
		"dbb" : 0,  "db" : 1,  "d" : 2,  "d#" : 3,  "dx" : 4,
		"ebb" : 2,  "eb" : 3,  "e" : 4,  "e#" : 5,  "ex" : 6,
		"fbb" : 3,  "fb" : 4,  "f" : 5,  "f#" : 6,  "fx" : 7,
		"gbb" : 5,  "gb" : 6,  "g" : 7,  "g#" : 8,  "gx" : 9,
		"abb" : 7,  "ab" : 8,  "a" : 9,  "a#" : 10, "ax" : 11,
		"bbb" : 9,  "bb" : 10, "b" : 11, "b#" : 12, "bx" : 13,
	}
	return (note) => {
		const split = regexp.exec(note)
		const pitch = split[1]
		const octave = split[2]
		const index = noteToScaleIndex[pitch.toLowerCase()]
		return index + (parseInt(octave) + 1) * 12
	}
}())

// CONCATENATED MODULE: ../node_modules/midiconvert/src/BinaryInsert.js
/**
 * Return the index of the element at or before the given time
 */
function findElement(array, time) {
	let beginning = 0
	const len = array.length
	let end = len
	if (len > 0 && array[len - 1].time <= time){
		return len - 1
	}
	while (beginning < end){
		// calculate the midpoint for roughly equal partition
		let midPoint = Math.floor(beginning + (end - beginning) / 2)
		const event = array[midPoint]
		const nextEvent = array[midPoint + 1]
		if (event.time === time){
			//choose the last one that has the same time
			for (let i = midPoint; i < array.length; i++){
				let testEvent = array[i]
				if (testEvent.time === time){
					midPoint = i
				}
			}
			return midPoint
		} else if (event.time < time && nextEvent.time > time){
			return midPoint
		} else if (event.time > time){
			//search lower
			end = midPoint
		} else if (event.time < time){
			//search upper
			beginning = midPoint + 1
		}
	}
	return -1
}

/**
 * Does a binary search to insert the note
 * in the correct spot in the array
 * @param  {Array} array
 * @param  {Object} event
 * @param  {Number=} offset
 */
function BinaryInsert(array, event){
	if (array.length){
		const index = findElement(array, event.time)
		array.splice(index + 1, 0, event)
	} else {
		array.push(event)
	}
}



// CONCATENATED MODULE: ../node_modules/midiconvert/src/Control.js
const channelNames = {
	"1"  : "modulationWheel",
	"2"  : "breath",
	"4"  : "footController",
	"5"  : "portamentoTime",
	"7"  : "volume",
	"8"  : "balance",
	"10" : "pan",
	"64" : "sustain",
	"65" : "portamentoTime",
	"66" : "sostenuto",
	"67" : "softPedal",
	"68" : "legatoFootswitch",
	"84" : "portamentoContro"
}

class Control{
	constructor(number, time, value){

		this.number = number

		this.time = time

		this.value = value
	}

	/**
	 * The common name of the control change event
	 * @type {String}
	 * @readOnly
	 */
	get name(){
		if (channelNames.hasOwnProperty(this.number)){
			return channelNames[this.number]
		}
	}
}



// CONCATENATED MODULE: ../node_modules/midiconvert/src/Merge.js

function hasMoreValues(arrays, positions){
	for (let i = 0; i < arrays.length; i++){
		let arr = arrays[i]
		let pos = positions[i]
		if (arr.length > pos){
			return true
		}
	}
	return false
}

function getLowestAtPosition(arrays, positions, encoders){
	let lowestIndex = 0
	let lowestValue = Infinity
	for (let i = 0; i < arrays.length; i++){
		let arr = arrays[i]
		let pos = positions[i]
		if (arr[pos] && (arr[pos].time < lowestValue)){
			lowestIndex = i
			lowestValue = arr[pos].time
		}
	}
	encoders[lowestIndex](arrays[lowestIndex][positions[lowestIndex]])
	// increment array
	positions[lowestIndex] += 1
}

/**
 * Combine multiple arrays keeping the timing in order
 * The arguments should alternate between the array and the encoder callback
 * @param {...Array|Function} args
 */
function Merge(...args){
	const arrays = args.filter((v, i) => (i % 2) === 0)
	const positions = new Uint32Array(arrays.length)
	const encoders = args.filter((v, i) => (i % 2) === 1)
	const output = []
	while(hasMoreValues(arrays, positions)){
		getLowestAtPosition(arrays, positions, encoders)
	}
}


// CONCATENATED MODULE: ../node_modules/midiconvert/src/Note.js


class Note_Note{
	/**
	 * Convert JSON to Note object
	 * @param {object} json
	 * @static
	 * @returns {Note}
	 */
	static fromJSON(json) {
		var note = new Note_Note(json.midi, json.time, json.duration, json.velocity)
		return note
	}
	
	constructor(midi, time, duration=0, velocity=1){

		/**
		 * The MIDI note number
		 * @type {Number}
		 */
		if (isNumber(midi)){
			this.midi = midi
		} else if (isPitch(midi)){
			this.name = midi
		} else {
			throw new Error('the midi value must either be in Pitch Notation (e.g. C#4) or a midi value')
		}

		/**
		 * The note on time in seconds
		 * @type {Number}
		 */
		this.time = time

		/**
		 * The duration in seconds
		 * @type {Number}
		 */
		this.duration = duration

		/**
		 * The velocity 0-1
		 * @type {Number}
		 */
		this.velocity = velocity
	}

	/**
	 * If the note is the same as the given note
	 * @param {String|Number} note
	 * @return {Boolean}
	 */
	match(note){
		if (isNumber(note)){
			return this.midi === note
		} else if (isPitch(note)){
			return this.name.toLowerCase() === note.toLowerCase()
		}
	}

	/**
	 * The note in Scientific Pitch Notation
	 * @type {String}
	 */
	get name(){
		return midiToPitch(this.midi)
	}
	set name(name){
		this.midi = pitchToMidi(name)
	}

	/**
	 * Alias for time
	 * @type {Number}
	 */
	get noteOn(){
		return this.time
	}
	set noteOn(t){
		this.time = t
	}

	/**
	 * The note off time
	 * @type {Number}
	 */
	get noteOff(){
		return this.time + this.duration
	}
	set noteOff(time){
		this.duration = time - this.time
	}

	/**
	 * Convert the note to JSON
	 * @returns {Object}
	 */
	toJSON(){
		return {
			name : this.name,
			midi : this.midi,
			time : this.time,
			velocity : this.velocity,
			duration : this.duration
		}
	}
}



// CONCATENATED MODULE: ../node_modules/midiconvert/src/instrumentMaps.js
const instrumentByPatchID = [
	"acoustic grand piano",
	"bright acoustic piano",
	"electric grand piano",
	"honky-tonk piano",
	"electric piano 1",
	"electric piano 2",
	"harpsichord",
	"clavi",
	"celesta",
	"glockenspiel",
	"music box",
	"vibraphone",
	"marimba",
	"xylophone",
	"tubular bells",
	"dulcimer",
	"drawbar organ",
	"percussive organ",
	"rock organ",
	"church organ",
	"reed organ",
	"accordion",
	"harmonica",
	"tango accordion",
	"acoustic guitar (nylon)",
	"acoustic guitar (steel)",
	"electric guitar (jazz)",
	"electric guitar (clean)",
	"electric guitar (muted)",
	"overdriven guitar",
	"distortion guitar",
	"guitar harmonics",
	"acoustic bass",
	"electric bass (finger)",
	"electric bass (pick)",
	"fretless bass",
	"slap bass 1",
	"slap bass 2",
	"synth bass 1",
	"synth bass 2",
	"violin",
	"viola",
	"cello",
	"contrabass",
	"tremolo strings",
	"pizzicato strings",
	"orchestral harp",
	"timpani",
	"string ensemble 1",
	"string ensemble 2",
	"synthstrings 1",
	"synthstrings 2",
	"choir aahs",
	"voice oohs",
	"synth voice",
	"orchestra hit",
	"trumpet",
	"trombone",
	"tuba",
	"muted trumpet",
	"french horn",
	"brass section",
	"synthbrass 1",
	"synthbrass 2",
	"soprano sax",
	"alto sax",
	"tenor sax",
	"baritone sax",
	"oboe",
	"english horn",
	"bassoon",
	"clarinet",
	"piccolo",
	"flute",
	"recorder",
	"pan flute",
	"blown bottle",
	"shakuhachi",
	"whistle",
	"ocarina",
	"lead 1 (square)",
	"lead 2 (sawtooth)",
	"lead 3 (calliope)",
	"lead 4 (chiff)",
	"lead 5 (charang)",
	"lead 6 (voice)",
	"lead 7 (fifths)",
	"lead 8 (bass + lead)",
	"pad 1 (new age)",
	"pad 2 (warm)",
	"pad 3 (polysynth)",
	"pad 4 (choir)",
	"pad 5 (bowed)",
	"pad 6 (metallic)",
	"pad 7 (halo)",
	"pad 8 (sweep)",
	"fx 1 (rain)",
	"fx 2 (soundtrack)",
	"fx 3 (crystal)",
	"fx 4 (atmosphere)",
	"fx 5 (brightness)",
	"fx 6 (goblins)",
	"fx 7 (echoes)",
	"fx 8 (sci-fi)",
	"sitar",
	"banjo",
	"shamisen",
	"koto",
	"kalimba",
	"bag pipe",
	"fiddle",
	"shanai",
	"tinkle bell",
	"agogo",
	"steel drums",
	"woodblock",
	"taiko drum",
	"melodic tom",
	"synth drum",
	"reverse cymbal",
	"guitar fret noise",
	"breath noise",
	"seashore",
	"bird tweet",
	"telephone ring",
	"helicopter",
	"applause",
	"gunshot",
]

const instrumentFamilyByID = [
	"piano",
	"chromatic percussion",
	"organ",
	"guitar",
	"bass",
	"strings",
	"ensemble",
	"brass",
	"reed",
	"pipe",
	"synth lead",
	"synth pad",
	"synth effects",
	"ethnic",
	"percussive",
	"sound effects",
]

const drumKitByPatchID = {
	 0: "standard kit",
	 8: "room kit",
	16: "power kit",
	24: "electronic kit",
	25: "tr-808 kit",
	32: "jazz kit",
	40: "brush kit",
	48: "orchestra kit",
	56: "sound fx kit",
}

// CONCATENATED MODULE: ../node_modules/midiconvert/src/Track.js






class Track_Track {
/**
	 * Convert JSON to Track object
	 * @param {object} json
	 * @static
	 * @returns {Track}
	 */
	static fromJSON(json){
		var track = new Track_Track(json.name, json.instrumentNumber, json.channelNumber )

		track.id = json.id
		
		if (json.notes) {
			json.notes.forEach((note) => {
				var newNote = Note_Note.fromJSON(note)
				track.notes.push(newNote)
			})
		}

		if (json.controlChanges) {
			track.controlChanges = json.controlChanges
		}

		return track
	}
	
	constructor(name, instrumentNumber=-1, channel=-1){

		/**
		 * The name of the track
		 * @type {String}
		 */
		this.name = name

		/**
		 * The MIDI channel of the track
		 * @type {number}
		 */
		this.channelNumber = channel

		/**
		 * The note events
		 * @type {Array}
		 */
		this.notes = []

		/**
		 * The control changes
		 * @type {Object}
		 */
		this.controlChanges = {}

		/**
		 * The MIDI patch ID of the instrument. -1 if none is set.
		 * @type {Number}
		 */
		this.instrumentNumber = instrumentNumber
	}

	note(midi, time, duration=0, velocity=1){
		const note = new Note_Note(midi, time, duration, velocity)
		BinaryInsert(this.notes, note)
		return this
	}

	/**
	 * Add a note on event
	 * @param  {Number|String} midi     The midi note as either a midi number or
	 *                                  Pitch Notation like ('C#4')
	 * @param  {Number} time     The time in seconds
	 * @param  {Number} velocity The velocity value 0-1
	 * @return {Track} this
	 */
	noteOn(midi, time, velocity=1){
		const note = new Note_Note(midi, time, 0, velocity)
		BinaryInsert(this.notes, note)
		return this
	}

	/**
	 * Add a note off event. Go through and find an unresolved
	 * noteOn event with the same pitch.
	 * @param  {String|Number} midi The midi number or note name.
	 * @param  {Number} time The time of the event in seconds
	 * @return {Track} this
	 */
	noteOff(midi, time){
		for (let i = 0; i < this.notes.length; i++){
			let note = this.notes[i]
			if (note.match(midi) && note.duration === 0){
				note.noteOff = time
				break;
			}
		}
		return this
	}

	/**
	 * Add a CC event
	 * @param  {Number} num The CC number
	 * @param  {Number} time The time of the event in seconds
	 * @param  {Number} value The value of the CC
	 * @return {Track} this
	 */
	cc(num, time, value){
		if (!this.controlChanges.hasOwnProperty(num)){
			this.controlChanges[num] = []
		}
		const cc = new Control(num, time, value)
		BinaryInsert(this.controlChanges[num], cc)
		return this
	}

	/**
	 * Sets instrumentNumber.
	 * For a list of possible values, see the [General MIDI Instrument Patch Map](https://www.midi.org/specifications/item/gm-level-1-sound-set)
	 * @param  {Number} id The Patch ID for this instrument, as specified in the General MIDI Instrument Patch Map
	 */
	patch(id){
		this.instrumentNumber = id
		return this
	}

	/**
	 * Sets channelNumber.
	 * @param  {Number} id The MIDI channel number, between 0 and 0xF.  0x9 and 0xA are percussion
	 */
	channel(id){
		this.channelNumber = id
		return this
	}

	/**
	 * An array of all the note on events
	 * @type {Array<Object>}
	 * @readOnly
	 */
	get noteOns(){
		const noteOns = []
		this.notes.forEach((note) => {
			noteOns.push({
				time : note.noteOn,
				midi : note.midi,
				name : note.name,
				velocity : note.velocity
			})
		})
		return noteOns
	}

	/**
	 * An array of all the noteOff events
	 * @type {Array<Object>}
	 * @readOnly
	 */
	get noteOffs(){
		const noteOffs = []
		this.notes.forEach((note) => {
			noteOffs.push({
				time : note.noteOff,
				midi : note.midi,
				name : note.name
			})
		})
		return noteOffs
	}

	/**
	 * The length in seconds of the track
	 * @type {Number}
	 */
	get length() {
		return this.notes.length
	}

	/**
	 * The time of the first event in seconds
	 * @type {Number}
	 */
	get startTime() {
		if (this.notes.length){
			let firstNote = this.notes[0]
			return firstNote.noteOn
		} else {
			return 0
		}
	}

	/**
	 * The time of the last event in seconds
	 * @type {Number}
	 */
	get duration() {
		if (this.notes.length){
			let lastNote = this.notes[this.notes.length - 1]
			return lastNote.noteOff
		} else {
			return 0
		}
	}

	/**
	 * The name of the midi instrument
	 * @type {String}
	 */
	get instrument() {
		if (this.isPercussion){
			return drumKitByPatchID[this.instrumentNumber]
		} else {
			return instrumentByPatchID[this.instrumentNumber]
		}
	}
	set instrument(inst) {
		const index = instrumentByPatchID.indexOf(inst)
		if (index !== -1){
			this.instrumentNumber = index
		}
	}


	/**
	 * Whether or not this is a percussion track
	 * @type {Boolean}
	 */
	get isPercussion() {
		return [0x9, 0xA].includes(this.channelNumber)
	}

	/**
	 * The family that the instrument belongs to
	 * @type {String}
	 * @readOnly
	 */
	get instrumentFamily() {
		if (this.isPercussion){
			return 'drums'
		} else {
			return instrumentFamilyByID[Math.floor(this.instrumentNumber / 8)]
		}
	}

	/**
	 * Scale the timing of all the events in the track
	 * @param {Number} amount The amount to scale all the values
	 */
	scale(amount){
		this.notes.forEach((note) => {
			note.time *= amount
			note.duration *= amount
		})
		return this
	}

	/**
	 * Slice returns a new track with only events that occured between startTime and endTime.
	 * Modifies this track.
	 * @param {Number} startTime
	 * @param {Number} endTime
	 * @returns {Track}
	 */
	slice(startTime=0, endTime=this.duration){
		// get the index before the startTime
		const noteStartIndex = Math.max(this.notes.findIndex((note) => note.time >= startTime), 0)
		const noteEndIndex = this.notes.findIndex((note) => note.noteOff >= endTime) + 1
		const track = new Track_Track(this.name)
		track.notes = this.notes.slice(noteStartIndex, noteEndIndex)
		//shift the start time
		track.notes.forEach((note) => note.time = note.time - startTime)
		return track
	}

	/**
	 * Write the output to the stream
	 */
	encode(trackEncoder, header){

		const ticksPerSecond = header.PPQ / (60 / header.bpm)
		let lastEventTime = 0

		// unset, `channelNumber` defaults to -1, but that's not a valid MIDI channel
		const channelNumber = Math.max(0, this.channelNumber)

		function getDeltaTime(time){
			const ticks = Math.floor(ticksPerSecond * time)
			const delta = Math.max(ticks - lastEventTime, 0)
			lastEventTime = ticks
			return delta
		}

		if (this.instrumentNumber !== -1) {
			trackEncoder.instrument(channelNumber, this.instrumentNumber)
		}

		Merge(this.noteOns.sort((a, b) => a.time - b.time), (noteOn) => {
			trackEncoder.addNoteOn(channelNumber, noteOn.name, getDeltaTime(noteOn.time), Math.floor(noteOn.velocity * 127))
		}, this.noteOffs.sort((a, b) => a.time - b.time), (noteOff) => {
			trackEncoder.addNoteOff(channelNumber, noteOff.name, getDeltaTime(noteOff.time))
		})
	}

	/**
	 *  Convert all of the fields to JSON
	 *  @return  {Object}
	 */
	toJSON(){

		const ret = {
			startTime: this.startTime,
			duration: this.duration,
			length: this.length,
			notes: [],
			controlChanges: {},
		}

		if (typeof this.id !== 'undefined')
			ret.id = this.id

		ret.name = this.name

		if (this.instrumentNumber !== -1){
			ret.instrumentNumber = this.instrumentNumber
			ret.instrument = this.instrument
			ret.instrumentFamily = this.instrumentFamily
		}

		if (this.channelNumber !== -1){
			ret.channelNumber = this.channelNumber
			ret.isPercussion = this.isPercussion
		}

		if (this.notes.length)
			ret.notes = this.notes.map((n) => n.toJSON())

		if (Object.keys(this.controlChanges).length)
			ret.controlChanges = this.controlChanges

		return ret
	}
}



// CONCATENATED MODULE: ../node_modules/midiconvert/src/Header.js
/**
 *  Parse tempo and time signature from the midiJson
 *  @param  {Object}  midiJson
 *  @return  {Object}
 */
function parseHeader(midiJson){
	var ret = {
		PPQ : midiJson.header.ticksPerBeat
	}
	for (var i = 0; i < midiJson.tracks.length; i++){
		var track = midiJson.tracks[i]
		for (var j = 0; j < track.length; j++){
			var datum = track[j]
			if (datum.type === "meta"){
				if (datum.subtype === "timeSignature"){
					ret.timeSignature = [datum.numerator, datum.denominator]
				} else if (datum.subtype === "setTempo"){
					if (!ret.bpm){
						ret.bpm = 60000000 / datum.microsecondsPerBeat
					}
				}
			}
		}
	}
	ret.bpm = ret.bpm || 120
	return ret
}



// CONCATENATED MODULE: ../node_modules/midiconvert/src/Midi.js






/**
 * @class The Midi object. Contains tracks and the header info.
 */
class Midi_Midi {
	/**
	 * Convert JSON to Midi object
	 * @param {object} json
	 * @static
	 * @returns {Midi}
	 */
	static fromJSON(json){
		var midi = new Midi_Midi()

		midi.header = json.header
		json.tracks.forEach((track) => {
			var newTrack = Track_Track.fromJSON(track)
			midi.tracks.push(newTrack)
		})

		return midi
	}
	
	constructor(){

		this.header = {
			//defaults
			bpm : 120,
			timeSignature : [4, 4],
			PPQ : 480
		}

		this.tracks = []
	}

	/**
	 * Load the given url and parse the midi at that url
	 * @param  {String}   url
	 * @param {*} data Anything that should be sent in the XHR
	 * @param {String} method Either GET or POST
	 * @return {Promise}
	 */
	load(url, data=null, method='GET'){
		return new Promise((success, fail) => {
			var request = new XMLHttpRequest()
			request.open(method, url)
			request.responseType = 'arraybuffer'
			// decode asynchronously
			request.addEventListener('load', () => {
				if (request.readyState === 4 && request.status === 200){
					success(this.decode(request.response))
				} else {
					fail(request.status)
				}
			})
			request.addEventListener('error', fail)
			request.send(data)
		}).catch(function(error) {
				console.log(error);
			});
	}

	/**
	 * Decode the bytes
	 * @param  {String|ArrayBuffer} bytes The midi file encoded as a string or ArrayBuffer
	 * @return {Midi}       this
	 */
	decode(bytes){

		if (bytes instanceof ArrayBuffer){
			var byteArray = new Uint8Array(bytes)
			bytes = String.fromCharCode.apply(null, byteArray)
		}

		const midiData = midi_file_parser(bytes)

		this.header = parseHeader(midiData)

		//replace the previous tracks
		this.tracks = []

		midiData.tracks.forEach((trackData, i) => {

			const track = new Track_Track()
			track.id = i
			this.tracks.push(track)

			let absoluteTime = 0
			trackData.forEach((event) => {
				absoluteTime += ticksToSeconds(event.deltaTime, this.header)
				if (event.type === 'meta' && event.subtype === 'trackName'){
					track.name = cleanName(event.text)
				} else if (event.subtype === 'noteOn'){
					track.noteOn(event.noteNumber, absoluteTime, event.velocity / 127)

					if (track.channelNumber === -1) {
						track.channelNumber = event.channel
					}
				} else if (event.subtype === 'noteOff'){
					track.noteOff(event.noteNumber, absoluteTime)
				} else if (event.subtype === 'controller' && event.controllerType){
					track.cc(event.controllerType, absoluteTime, event.value / 127)
				} else if (event.type === 'meta' && event.subtype === 'instrumentName'){
					track.instrument = event.text
				} else if (event.type === 'channel' && event.subtype === 'programChange'){
					track.patch(event.programNumber)
					track.channelNumber = event.channel
				}
			})

			//if the track is empty, then it is the file name
			if (!this.header.name && !track.length && track.name) {
				this.header.name = track.name;
			}
		})

		return this
	}

	/**
	 * Encode the Midi object as a Buffer String
	 * @returns {String}
	 */
	encode(){
		const output = new jsmidgen["File"]({
			ticks : this.header.PPQ
		})

		const firstEmptyTrack = this.tracks.filter(track => !track.length)[0];

		if (this.header.name && !(firstEmptyTrack && firstEmptyTrack.name === this.header.name)) {
			const track = output.addTrack()
			track.addEvent(
				new jsmidgen["MetaEvent"]({
					time: 0,
					type: jsmidgen["MetaEvent"].TRACK_NAME,
					data: this.header.name
				})
			)
		}

		this.tracks.forEach((track) => {
			const trackEncoder = output.addTrack()
			trackEncoder.setTempo(this.bpm)

			if (track.name) {
				trackEncoder.addEvent(
					new jsmidgen["MetaEvent"]({
						time: 0,
						type: jsmidgen["MetaEvent"].TRACK_NAME,
						data: track.name
					})
				)
			}

			track.encode(trackEncoder, this.header)
		})
		return output.toBytes()
	}

	/**
	 * Convert the output encoding into an Array
	 * @return {Array}
	 */
	toArray(){
		const encodedStr = this.encode()
		const buffer = new Array(encodedStr.length)
		for (let i = 0; i < encodedStr.length; i++){
			buffer[i] = encodedStr.charCodeAt(i)
		}
		return buffer
	}

	/**
	 *  Convert all of the fields to JSON
	 *  @return  {Object}
	 */
	toJSON(){
		const ret = {
			header: this.header,
			startTime: this.startTime,
			duration: this.duration,
			tracks: (this.tracks || []).map(
				track => track.toJSON()
			)
		}

		if (!ret.header.name)
			ret.header.name = ''

		return ret
	}

	/**
	 * Add a new track.
	 * @param {String=} name Optionally include the name of the track
	 * @returns {Track}
	 */
	track(name){
		const track = new Track_Track(name)
		this.tracks.push(track)
		return track
	}

	/**
	 * Get a track either by it's name or track index
	 * @param  {Number|String} trackName
	 * @return {Track}
	 */
	get(trackName){
		if (isNumber(trackName)){
			return this.tracks[trackName]
		} else {
			return this.tracks.find((t) => t.name === trackName)
		}
	}

	/**
	 * Slice the midi file between the startTime and endTime. Returns a copy of the
	 * midi
	 * @param {Number} startTime
	 * @param {Number} endTime
	 * @returns {Midi} this
	 */
	slice(startTime=0, endTime=this.duration){
		const midi = new Midi_Midi()
		midi.header = this.header
		midi.tracks = this.tracks.map((t) => t.slice(startTime, endTime))
		return midi
	}

	/**
	 * the time of the first event
	 * @type {Number}
	 */
	get startTime(){
		const startTimes = this.tracks.map((t) => t.startTime)

		if (!startTimes.length)
			return 0

		return Math.min.apply(Math, startTimes) || 0
	}

	/**
	 * The bpm of the midi file in beats per minute
	 * @type {Number}
	 */
	get bpm(){
		return this.header.bpm
	}
	set bpm(bpm){
		const prevTempo = this.header.bpm
		this.header.bpm = bpm
		//adjust the timing of all the notes
		const ratio = prevTempo / bpm
		this.tracks.forEach((track) => track.scale(ratio))

	}

	/**
	 * The timeSignature of the midi file
	 * @type {Array}
	 */
	get timeSignature(){
		return this.header.timeSignature
	}
	set timeSignature(timeSig){
		this.header.timeSignature = timeSig
	}

	/**
	 * The duration is the end time of the longest track
	 * @type {Number}
	 */
	get duration(){
		const durations = this.tracks.map((t) => t.duration)

		if (!durations.length)
			return 0

		return Math.max.apply(Math, durations) || 0
	}
}



// CONCATENATED MODULE: ../node_modules/midiconvert/src/MidiConvert.js



/**
 *  Parse all the data from the Midi file into this format:
 *  {
 *  	// the transport and timing data
 *  	header : {
 *  		bpm : Number,                     // tempo, e.g. 120
 *  		timeSignature : [Number, Number], // time signature, e.g. [4, 4],
 *  		PPQ : Number                  // PPQ of the midi file
 *  	}
 *  	// an array for each of the midi tracks
 *  	tracks : [
 *  		{
 *  			name : String, // the track name if one was given
 *  			notes : [
 *  				{
 *  					time : Number, // time in seconds
 *  					name : String, // note name, e.g. 'C4'
 *  					midi : Number, // midi number, e.g. 60
 *  					velocity : Number,  // normalized velocity
 *  					duration : Number   // duration between noteOn and noteOff
 *  				}
 *  			],
 *  			controlChanges : { //all of the control changes
 *  				64 : [ //array for each cc value
 *  					{
 *  						number : Number, //the cc number
 *  						time : Number, //the time of the event in seconds
 *  						name : String, // if the cc value has a common name (e.g. 'sustain')
 *  						value : Number, //the normalized value
 *  					}
 *  				]
 *  			}
 *  		}
 *  	]
 *  }
 *  @param  {Binary String}  fileBlob  The output from fs.readFile or FileReader
 *  @returns {Object} All of the options parsed from the midi file.
 */
function parse(fileBlob){
	return new Midi_Midi().decode(fileBlob)
}

/**
 *  Load and parse a midi file. See `parse` for what the results look like.
 *  @param  {String}    url
 *  @param {Function=} callback
 *  @returns {Promise} A promise which is invoked with the returned Midi object
 */
function load(url, callback){
	const promise = new Midi_Midi().load(url)
	if (callback){
		promise.then(callback)
	}
	return promise
}

/**
 * Create an empty midi file
 * @return {Midi}
 */
function create(){
	return new Midi_Midi()
}

/**
 * Create midi object from json
 * @param {object} json
 * @returns {Midi} Deserialized midi object
 */
function fromJSON(json){
	return Midi_Midi.fromJSON(json)
}

// EXTERNAL MODULE: ./protobuf/index.ts
var protobuf = __webpack_require__(2);

// CONCATENATED MODULE: ./core/midi_io.ts




class MidiConversionError extends Error {
    constructor(message) {
        super(message);
        Object.setPrototypeOf(this, new.target.prototype);
    }
}
function midiToSequenceProto(midi) {
    const parsedMidi = parse(midi);
    const ns = protobuf["a" /* NoteSequence */].create();
    ns.ticksPerQuarter = parsedMidi.header.PPQ;
    ns.sourceInfo = protobuf["a" /* NoteSequence */].SourceInfo.create({
        parser: protobuf["a" /* NoteSequence */].SourceInfo.Parser.TONEJS_MIDI_CONVERT,
        encodingType: protobuf["a" /* NoteSequence */].SourceInfo.EncodingType.MIDI
    });
    if (parsedMidi.header.timeSignature) {
        ns.timeSignatures.push(protobuf["a" /* NoteSequence */].TimeSignature.create({
            time: 0,
            numerator: parsedMidi.header.timeSignature[0],
            denominator: parsedMidi.header.timeSignature[1],
        }));
    }
    else {
        ns.timeSignatures.push(protobuf["a" /* NoteSequence */].TimeSignature.create({
            time: 0,
            numerator: 4,
            denominator: 4,
        }));
    }
    ns.tempos.push(protobuf["a" /* NoteSequence */].Tempo.create({ time: 0, qpm: parsedMidi.header.bpm }));
    let instrumentNumber = -1;
    for (const track of parsedMidi.tracks) {
        if (track.notes.length > 0) {
            instrumentNumber += 1;
        }
        for (const note of track.notes) {
            const startTime = note.time;
            const duration = note.duration;
            const endTime = startTime + duration;
            ns.notes.push(protobuf["a" /* NoteSequence */].Note.create({
                instrument: instrumentNumber,
                program: track.instrumentNumber,
                startTime,
                endTime,
                pitch: note.midi,
                velocity: Math.floor(note.velocity * constants["MIDI_VELOCITIES"]),
                isDrum: track.isPercussion
            }));
            if (endTime > ns.totalTime) {
                ns.totalTime = endTime;
            }
        }
    }
    return ns;
}
function sequenceProtoToMidi(ns) {
    if (sequences["isQuantizedSequence"](ns)) {
        ns = sequences["unquantizeSequence"](ns);
    }
    const isZeroOrUndefined = (t) => (t === 0 || t === undefined);
    if (!ns.tempos || ns.tempos.length === 0) {
        ns.tempos = [{ time: 0, qpm: constants["DEFAULT_QUARTERS_PER_MINUTE"] }];
    }
    if (!ns.timeSignatures || ns.timeSignatures.length === 0) {
        ns.timeSignatures = [{ time: 0, numerator: 4, denominator: 4 }];
    }
    if (ns.tempos.length !== 1 || !isZeroOrUndefined(ns.tempos[0].time)) {
        throw new MidiConversionError('NoteSequence must have exactly 1 tempo at time 0');
    }
    if (ns.timeSignatures.length !== 1 ||
        !isZeroOrUndefined(ns.timeSignatures[0].time)) {
        throw new MidiConversionError('NoteSequence must have exactly 1 time signature at time 0');
    }
    const json = {
        header: {
            bpm: ns.tempos[0].qpm,
            PPQ: ns.ticksPerQuarter ? ns.ticksPerQuarter :
                constants["DEFAULT_TICKS_PER_QUARTER"],
            timeSignature: [ns.timeSignatures[0].numerator, ns.timeSignatures[0].denominator]
        },
        tracks: []
    };
    const tracks = new Map();
    for (const note of ns.notes) {
        const instrument = note.instrument ? note.instrument : 0;
        if (!tracks.has(instrument)) {
            tracks.set(instrument, []);
        }
        tracks.get(instrument).push(note);
    }
    const instruments = Array.from(tracks.keys()).sort((a, b) => a - b);
    for (let i = 0; i < instruments.length; i++) {
        if (i !== instruments[i]) {
            throw new MidiConversionError('Instrument list must be continuous and start at 0');
        }
        const notes = tracks.get(i);
        const track = {
            id: i,
            notes: [],
            isPercussion: (notes[0].isDrum === undefined) ? false : notes[0].isDrum,
            channelNumber: notes[0].isDrum ? constants["DRUM_CHANNEL"] :
                constants["DEFAULT_CHANNEL"],
            instrumentNumber: (notes[0].program === undefined) ?
                constants["DEFAULT_PROGRAM"] :
                notes[0].program
        };
        track.notes = notes.map(note => {
            const velocity = (note.velocity === undefined) ?
                constants["DEFAULT_VELOCITY"] :
                note.velocity;
            return {
                midi: note.pitch,
                time: note.startTime,
                duration: note.endTime - note.startTime,
                velocity: (velocity + 1) / constants["MIDI_VELOCITIES"]
            };
        });
        json['tracks'].push(track);
    }
    return new Uint8Array(fromJSON(json).toArray());
}
function urlToBlob(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then((response) => {
            return response.blob();
        })
            .then((blob) => {
            resolve(blob);
        })
            .catch((error) => reject(error));
    });
}
function blobToNoteSequence(blob) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const ns = midiToSequenceProto(reader.result);
                resolve(ns);
            }
            catch (error) {
                reject(error);
            }
        };
        reader.onerror = (e) => reject(e);
        reader.readAsBinaryString(blob);
    });
}
function urlToNoteSequence(url) {
    return urlToBlob(url).then(blobToNoteSequence);
}

// CONCATENATED MODULE: ./core/soundfont.ts



class soundfont_Instrument {
    constructor(baseURL) {
        this.FADE_SECONDS = 0.1;
        this.baseURL = baseURL;
        this.buffers = new external_commonjs_tone_commonjs2_tone_amd_Tone_root_Tone_["Buffers"]([]);
        this.sourceMap = new Map();
        this.initialized = false;
    }
    async initialize() {
        await fetch(`${this.baseURL}/instrument.json`)
            .then((response) => response.json())
            .then((spec) => {
            this.name = spec.name;
            this.minPitch = spec.minPitch;
            this.maxPitch = spec.maxPitch;
            this.durationSeconds = spec.durationSeconds;
            this.releaseSeconds = spec.releaseSeconds;
            this.percussive = spec.percussive;
            this.velocities = spec.velocities;
            this.initialized = true;
        });
    }
    sampleInfoToName(sampleInfo) {
        if (this.velocities) {
            return `p${sampleInfo.pitch}_v${sampleInfo.velocity}`;
        }
        else {
            return `p${sampleInfo.pitch}`;
        }
    }
    sampleNameToURL(name) {
        return `${this.baseURL}/${name}.mp3`;
    }
    nearestVelocity(velocity) {
        if (!this.velocities) {
            return velocity;
        }
        if (!velocity) {
            velocity = constants["DEFAULT_VELOCITY"];
        }
        let bestVelocity = undefined;
        let bestDistance = constants["MIDI_VELOCITIES"];
        this.velocities.forEach((v) => {
            const d = Math.abs(v - velocity);
            if (d < bestDistance) {
                bestVelocity = v;
                bestDistance = d;
            }
        });
        return bestVelocity;
    }
    async loadSamples(samples) {
        if (!this.initialized) {
            await this.initialize();
        }
        const nearestSampleNames = samples
            .filter((info) => {
            if (info.pitch < this.minPitch || info.pitch > this.maxPitch) {
                logging["log"](`Pitch ${info.pitch} is outside the valid range for ${this.name}, ignoring.`, 'SoundFont');
                return false;
            }
            else {
                return true;
            }
        })
            .map((info) => this.sampleInfoToName({
            pitch: info.pitch,
            velocity: this.nearestVelocity(info.velocity)
        }));
        const uniqueSampleNames = Array.from(new Set(nearestSampleNames))
            .filter((name) => !this.buffers.has(name));
        const sampleNamesAndURLs = uniqueSampleNames.map((name) => ({ name, url: this.sampleNameToURL(name) }));
        if (sampleNamesAndURLs.length > 0) {
            sampleNamesAndURLs.forEach((nameAndURL) => this.buffers.add(nameAndURL.name, nameAndURL.url));
            await new Promise(resolve => external_commonjs_tone_commonjs2_tone_amd_Tone_root_Tone_["Buffer"].on('load', resolve));
            logging["log"](`Loaded samples for ${this.name}.`, 'SoundFont');
        }
    }
    playNote(pitch, velocity, startTime, duration, output) {
        const buffer = this.getBuffer(pitch, velocity);
        if (duration > this.durationSeconds) {
            logging["log"](`Requested note duration longer than sample duration: ${duration} > ${this.durationSeconds}`, 'SoundFont');
        }
        const source = new external_commonjs_tone_commonjs2_tone_amd_Tone_root_Tone_["BufferSource"]({
            buffer,
            fadeOut: this.FADE_SECONDS,
        })
            .connect(output);
        source.start(startTime, 0, undefined, 1, 0);
        if (!this.percussive && duration < this.durationSeconds) {
            const releaseSource = new external_commonjs_tone_commonjs2_tone_amd_Tone_root_Tone_["BufferSource"](buffer).connect(output);
            source.stop(startTime + duration + this.FADE_SECONDS);
            releaseSource.start(startTime + duration, this.durationSeconds, undefined, 1, this.FADE_SECONDS);
        }
    }
    playNoteDown(pitch, velocity, output) {
        const buffer = this.getBuffer(pitch, velocity);
        const source = new external_commonjs_tone_commonjs2_tone_amd_Tone_root_Tone_["BufferSource"](buffer).connect(output);
        source.start(0, 0, undefined, 1, 0);
        if (this.sourceMap.has(pitch)) {
            this.sourceMap.get(pitch).stop(external_commonjs_tone_commonjs2_tone_amd_Tone_root_Tone_["now"]() + this.FADE_SECONDS, this.FADE_SECONDS);
        }
        this.sourceMap.set(pitch, source);
    }
    playNoteUp(pitch, velocity, output) {
        if (!this.sourceMap.has(pitch)) {
            return;
        }
        const buffer = this.getBuffer(pitch, velocity);
        const releaseSource = new external_commonjs_tone_commonjs2_tone_amd_Tone_root_Tone_["BufferSource"](buffer).connect(output);
        releaseSource.start(0, this.durationSeconds, undefined, 1, this.FADE_SECONDS);
        this.sourceMap.get(pitch).stop(external_commonjs_tone_commonjs2_tone_amd_Tone_root_Tone_["now"]() + this.FADE_SECONDS, this.FADE_SECONDS);
        this.sourceMap.delete(pitch);
    }
    getBuffer(pitch, velocity) {
        if (!this.initialized) {
            throw new Error('Instrument is not initialized.');
        }
        if (pitch < this.minPitch || pitch > this.maxPitch) {
            logging["log"](`Pitch ${pitch} is outside the valid range for ${this.name} (${this.minPitch}-${this.maxPitch})`, 'SoundFont');
            return;
        }
        const name = this.sampleInfoToName({ pitch, velocity: this.nearestVelocity(velocity) });
        if (!this.buffers.has(name)) {
            throw new Error(`Buffer not found for ${this.name}: ${name}`);
        }
        const buffer = this.buffers.get(name);
        if (!buffer.loaded) {
            throw new Error(`Buffer not loaded for ${this.name}: ${name}`);
        }
        return buffer;
    }
}
class soundfont_SoundFont {
    constructor(baseURL) {
        this.baseURL = baseURL;
        this.instruments = new Map();
        this.initialized = false;
    }
    async initialize() {
        await fetch(`${this.baseURL}/soundfont.json`)
            .then((response) => response.json())
            .then((spec) => {
            this.name = spec.name;
            for (const program in spec.instruments) {
                const url = `${this.baseURL}/${spec.instruments[program]}`;
                this.instruments.set(program === 'drums' ? 'drums' : +program, new soundfont_Instrument(url));
            }
            this.initialized = true;
        });
    }
    async loadSamples(samples) {
        if (!this.initialized) {
            await this.initialize();
        }
        const instrumentSamples = new Map();
        samples.forEach((info) => {
            info.isDrum = info.isDrum || false;
            info.program = info.program || 0;
            const instrument = info.isDrum ? 'drums' : info.program;
            const sampleInfo = { pitch: info.pitch, velocity: info.velocity };
            if (!instrumentSamples.has(instrument)) {
                if (!this.instruments.has(instrument)) {
                    logging["log"](`No instrument in ${this.name} for: program=${info.program}, isDrum=${info.isDrum}`, 'SoundFont');
                }
                else {
                    instrumentSamples.set(instrument, [sampleInfo]);
                }
            }
            else {
                instrumentSamples.get(instrument).push(sampleInfo);
            }
        });
        await Promise.all(Array.from(instrumentSamples.keys())
            .map((info) => this.instruments.get(info).loadSamples(instrumentSamples.get(info))));
    }
    playNote(pitch, velocity, startTime, duration, program = 0, isDrum = false, output) {
        const instrument = isDrum ? 'drums' : program;
        if (!this.initialized) {
            throw new Error('SoundFont is not initialized.');
        }
        if (!this.instruments.has(instrument)) {
            logging["log"](`No instrument in ${this.name} for: program=${program}, isDrum=${isDrum}`, 'SoundFont');
            return;
        }
        this.instruments.get(instrument)
            .playNote(pitch, velocity, startTime, duration, output);
    }
    playNoteDown(pitch, velocity, program = 0, isDrum = false, output) {
        const instrument = isDrum ? 'drums' : program;
        if (!this.initialized) {
            throw new Error('SoundFont is not initialized.');
        }
        if (!this.instruments.has(instrument)) {
            logging["log"](`No instrument in ${this.name} for: program=${program}, isDrum=${isDrum}`, 'SoundFont');
            return;
        }
        this.instruments.get(instrument).playNoteDown(pitch, velocity, output);
    }
    playNoteUp(pitch, velocity, program = 0, isDrum = false, output) {
        const instrument = isDrum ? 'drums' : program;
        if (!this.initialized) {
            throw new Error('SoundFont is not initialized.');
        }
        if (!this.instruments.has(instrument)) {
            logging["log"](`No instrument in ${this.name} for: program=${program}, isDrum=${isDrum}`, 'SoundFont');
            return;
        }
        this.instruments.get(instrument).playNoteUp(pitch, velocity, output);
    }
}

// CONCATENATED MODULE: ./core/player.ts






function compareQuantizedNotes(a, b) {
    if (a.quantizedStartStep < b.quantizedStartStep) {
        return -1;
    }
    if (a.quantizedStartStep > b.quantizedStartStep) {
        return 1;
    }
    if (a.pitch < b.pitch) {
        return -1;
    }
    return 1;
}
class BasePlayerCallback {
}
class player_BasePlayer {
    constructor(playClick = false, callbackObject) {
        this.playClick = playClick;
        this.callbackObject = callbackObject;
        this.desiredQPM = undefined;
    }
    setTempo(qpm) {
        this.desiredQPM = qpm;
        if (external_commonjs_tone_commonjs2_tone_amd_Tone_root_Tone_["Transport"].state === 'started') {
            external_commonjs_tone_commonjs2_tone_amd_Tone_root_Tone_["Transport"].bpm.value = qpm;
        }
    }
    makeClickSequence(seq) {
        const clickSeq = sequences.clone(seq);
        const sixteenthEnds = clickSeq.notes.map(n => n.quantizedEndStep);
        const lastSixteenth = Math.max(...sixteenthEnds);
        for (let i = 0; i < lastSixteenth; i += 4) {
            const click = {
                pitch: i % 16 === 0 ? constants["LO_CLICK_PITCH"] :
                    constants["HI_CLICK_PITCH"],
                quantizedStartStep: i,
                isDrum: true,
                quantizedEndStep: i + 1
            };
            clickSeq.notes.push(click);
        }
        clickSeq.notes.sort(compareQuantizedNotes);
        return clickSeq;
    }
    resumeContext() {
        external_commonjs_tone_commonjs2_tone_amd_Tone_root_Tone_["context"].resume();
    }
    start(seq, qpm) {
        this.resumeContext();
        const isQuantized = sequences.isQuantizedSequence(seq);
        if (this.playClick && isQuantized) {
            seq = this.makeClickSequence(seq);
        }
        if (qpm) {
            external_commonjs_tone_commonjs2_tone_amd_Tone_root_Tone_["Transport"].bpm.value = qpm;
        }
        else if (seq.tempos && seq.tempos.length > 0 && seq.tempos[0].qpm > 0) {
            external_commonjs_tone_commonjs2_tone_amd_Tone_root_Tone_["Transport"].bpm.value = seq.tempos[0].qpm;
        }
        else {
            external_commonjs_tone_commonjs2_tone_amd_Tone_root_Tone_["Transport"].bpm.value = constants["DEFAULT_QUARTERS_PER_MINUTE"];
        }
        if (isQuantized) {
            seq = sequences.unquantizeSequence(seq, qpm);
        }
        else if (qpm) {
            throw new Error('Cannot specify a `qpm` for a non-quantized sequence.');
        }
        this.currentPart = new external_commonjs_tone_commonjs2_tone_amd_Tone_root_Tone_["Part"]((t, n) => {
            if (this.playClick ||
                (n.pitch !== constants["LO_CLICK_PITCH"] &&
                    n.pitch !== constants["HI_CLICK_PITCH"])) {
                this.playNote(t, n);
            }
            if (this.callbackObject) {
                external_commonjs_tone_commonjs2_tone_amd_Tone_root_Tone_["Draw"].schedule(() => {
                    this.callbackObject.run(n, t);
                }, t);
            }
        }, seq.notes.map(n => [n.startTime, n]));
        if (this.desiredQPM) {
            external_commonjs_tone_commonjs2_tone_amd_Tone_root_Tone_["Transport"].bpm.value = this.desiredQPM;
        }
        this.currentPart.start();
        if (external_commonjs_tone_commonjs2_tone_amd_Tone_root_Tone_["Transport"].state !== 'started') {
            external_commonjs_tone_commonjs2_tone_amd_Tone_root_Tone_["Transport"].start();
        }
        return new Promise(resolve => {
            this.scheduledStop = external_commonjs_tone_commonjs2_tone_amd_Tone_root_Tone_["Transport"].schedule(() => {
                this.stop();
                resolve();
                if (this.callbackObject) {
                    this.callbackObject.stop();
                }
            }, `+${seq.totalTime}`);
        });
    }
    stop() {
        if (this.currentPart) {
            this.currentPart.stop();
            external_commonjs_tone_commonjs2_tone_amd_Tone_root_Tone_["Transport"].stop();
            this.currentPart = null;
        }
        external_commonjs_tone_commonjs2_tone_amd_Tone_root_Tone_["Transport"].clear(this.scheduledStop);
        this.scheduledStop = undefined;
        this.desiredQPM = undefined;
    }
    pause() {
        external_commonjs_tone_commonjs2_tone_amd_Tone_root_Tone_["Transport"].pause();
    }
    resume() {
        external_commonjs_tone_commonjs2_tone_amd_Tone_root_Tone_["Transport"].start();
    }
    isPlaying() {
        return !!this.currentPart;
    }
    getPlayState() {
        return external_commonjs_tone_commonjs2_tone_amd_Tone_root_Tone_["Transport"].state;
    }
}
class player_DrumKit {
    constructor() {
        this.DRUM_PITCH_TO_CLASS = new Map();
        this.kick = new external_commonjs_tone_commonjs2_tone_amd_Tone_root_Tone_["MembraneSynth"]().toMaster();
        this.tomLow = new external_commonjs_tone_commonjs2_tone_amd_Tone_root_Tone_["MembraneSynth"]({
            pitchDecay: 0.008,
            envelope: { attack: 0.01, decay: 0.5, sustain: 0 }
        })
            .toMaster();
        this.tomMid = new external_commonjs_tone_commonjs2_tone_amd_Tone_root_Tone_["MembraneSynth"]({
            pitchDecay: 0.008,
            envelope: { attack: 0.01, decay: 0.5, sustain: 0 }
        })
            .toMaster();
        this.tomHigh = new external_commonjs_tone_commonjs2_tone_amd_Tone_root_Tone_["MembraneSynth"]({
            pitchDecay: 0.008,
            envelope: { attack: 0.01, decay: 0.5, sustain: 0 }
        })
            .toMaster();
        this.closedHihat = new external_commonjs_tone_commonjs2_tone_amd_Tone_root_Tone_["MetalSynth"]({
            frequency: 400,
            envelope: { attack: 0.001, decay: 0.1, release: 0.8 },
            harmonicity: 5.1,
            modulationIndex: 32,
            resonance: 4000,
            octaves: 1
        })
            .toMaster();
        this.openHihat = new external_commonjs_tone_commonjs2_tone_amd_Tone_root_Tone_["MetalSynth"]({
            frequency: 400,
            envelope: { attack: 0.001, decay: 0.5, release: 0.8, sustain: 1 },
            harmonicity: 5.1,
            modulationIndex: 32,
            resonance: 4000,
            octaves: 1
        })
            .toMaster();
        this.ride = new external_commonjs_tone_commonjs2_tone_amd_Tone_root_Tone_["MetalSynth"]().toMaster();
        this.crash = new external_commonjs_tone_commonjs2_tone_amd_Tone_root_Tone_["MetalSynth"]({
            frequency: 300,
            envelope: { attack: 0.001, decay: 1, release: 3 },
            harmonicity: 5.1,
            modulationIndex: 64,
            resonance: 4000,
            octaves: 1.5
        })
            .toMaster();
        this.snare = new external_commonjs_tone_commonjs2_tone_amd_Tone_root_Tone_["NoiseSynth"]({
            noise: { type: 'white' },
            envelope: { attack: 0.005, decay: 0.05, sustain: 0.1, release: 0.4 }
        })
            .toMaster();
        this.loClick = new external_commonjs_tone_commonjs2_tone_amd_Tone_root_Tone_["MembraneSynth"]({
            pitchDecay: 0.008,
            envelope: { attack: 0.001, decay: 0.3, sustain: 0 }
        })
            .toMaster();
        this.hiClick = new external_commonjs_tone_commonjs2_tone_amd_Tone_root_Tone_["MembraneSynth"]({
            pitchDecay: 0.008,
            envelope: { attack: 0.001, decay: 0.3, sustain: 0 }
        })
            .toMaster();
        this.pitchPlayers = [
            (time, velocity = 1) => this.kick.triggerAttackRelease('C2', '8n', time, velocity),
            (time, velocity = 1) => this.snare.triggerAttackRelease('16n', time, velocity),
            (time, velocity = 1) => this.closedHihat.triggerAttack(time, 0.3, velocity),
            (time, velocity = 1) => this.openHihat.triggerAttack(time, 0.3, velocity),
            (time, velocity = 0.5) => this.tomLow.triggerAttack('G3', time, velocity),
            (time, velocity = 0.5) => this.tomMid.triggerAttack('C4', time, velocity),
            (time, velocity = 0.5) => this.tomHigh.triggerAttack('F4', time, velocity),
            (time, velocity = 1) => this.crash.triggerAttack(time, 1.0, velocity),
            (time, velocity = 1) => this.ride.triggerAttack(time, 0.5, velocity),
            (time, velocity = 0.5) => this.loClick.triggerAttack('G5', time, velocity),
            (time, velocity = 0.5) => this.hiClick.triggerAttack('C6', time, velocity)
        ];
        for (let c = 0; c < data["DEFAULT_DRUM_PITCH_CLASSES"].length; ++c) {
            data["DEFAULT_DRUM_PITCH_CLASSES"][c].forEach((p) => {
                this.DRUM_PITCH_TO_CLASS.set(p, c);
            });
        }
        this.DRUM_PITCH_TO_CLASS.set(constants["LO_CLICK_PITCH"], constants["LO_CLICK_CLASS"]);
        this.DRUM_PITCH_TO_CLASS.set(constants["HI_CLICK_PITCH"], constants["HI_CLICK_CLASS"]);
    }
    static getInstance() {
        if (!player_DrumKit.instance) {
            player_DrumKit.instance = new player_DrumKit();
        }
        return player_DrumKit.instance;
    }
    playNote(pitch, time, velocity) {
        this.pitchPlayers[this.DRUM_PITCH_TO_CLASS.get(pitch)](time, velocity);
    }
}
class player_Player extends player_BasePlayer {
    constructor() {
        super(...arguments);
        this.drumKit = player_DrumKit.getInstance();
        this.bassSynth = new external_commonjs_tone_commonjs2_tone_amd_Tone_root_Tone_["Synth"]({ volume: 5, oscillator: { type: 'triangle' } }).toMaster();
        this.polySynth = new external_commonjs_tone_commonjs2_tone_amd_Tone_root_Tone_["PolySynth"](10).toMaster();
    }
    playNote(time, note) {
        const velocity = note.hasOwnProperty('velocity') ?
            note.velocity / constants["MAX_MIDI_VELOCITY"] :
            undefined;
        if (note.isDrum) {
            this.drumKit.playNote(note.pitch, time, velocity);
        }
        else {
            const freq = new external_commonjs_tone_commonjs2_tone_amd_Tone_root_Tone_["Frequency"](note.pitch, 'midi');
            const dur = note.endTime - note.startTime;
            this.getSynth(note.instrument, note.program)
                .triggerAttackRelease(freq, dur, time, velocity);
        }
    }
    getSynth(instrument, program) {
        if (program !== undefined && program >= 32 && program <= 39) {
            return this.bassSynth;
        }
        else {
            return this.polySynth;
        }
    }
}
player_Player.tone = external_commonjs_tone_commonjs2_tone_amd_Tone_root_Tone_;
class player_SoundFontPlayer extends player_BasePlayer {
    constructor(soundFontURL, output = external_commonjs_tone_commonjs2_tone_amd_Tone_root_Tone_["Master"], programOutputs, drumOutputs, callbackObject) {
        super(false, callbackObject);
        this.soundFont = new soundfont_SoundFont(soundFontURL);
        this.output = output;
        this.programOutputs = programOutputs;
        this.drumOutputs = drumOutputs;
    }
    async loadSamples(seq) {
        await this.soundFont.loadSamples(seq.notes.map((note) => ({
            pitch: note.pitch,
            velocity: note.velocity,
            program: note.program || 0,
            isDrum: note.isDrum || false
        })));
    }
    async loadAllSamples(program = 0, isDrum = false) {
        const ns = protobuf["a" /* NoteSequence */].create();
        const min = isDrum ? constants["MIN_DRUM_PITCH"] : constants["MIN_PIANO_PITCH"];
        const max = isDrum ? constants["MAX_DRUM_PITCH"] : constants["MAX_PIANO_PITCH"];
        for (let i = min; i <= max; i++) {
            for (let j = constants["MIN_MIDI_VELOCITY"]; j < constants["MAX_MIDI_VELOCITY"]; j++) {
                ns.notes.push({ pitch: i, velocity: j, program, isDrum });
            }
        }
        return this.loadSamples(ns);
    }
    resumeContext() {
        external_commonjs_tone_commonjs2_tone_amd_Tone_root_Tone_["context"].resume();
    }
    start(seq, qpm) {
        this.resumeContext();
        return this.loadSamples(seq).then(() => super.start(seq, qpm));
    }
    playNote(time, note) {
        this.soundFont.playNote(note.pitch, note.velocity, time, note.endTime - note.startTime, note.program, note.isDrum, this.getAudioNodeOutput(note));
    }
    playNoteDown(note) {
        this.soundFont.playNoteDown(note.pitch, note.velocity, note.program, note.isDrum, this.getAudioNodeOutput(note));
    }
    playNoteUp(note) {
        this.soundFont.playNoteUp(note.pitch, note.velocity, note.program, note.isDrum, this.getAudioNodeOutput(note));
    }
    getAudioNodeOutput(note) {
        let output = this.output;
        if (this.programOutputs && !note.isDrum) {
            if (this.programOutputs.has(note.program)) {
                output = this.programOutputs.get(note.program);
            }
        }
        else if (this.drumOutputs && note.isDrum) {
            if (this.drumOutputs.has(note.pitch)) {
                output = this.drumOutputs.get(note.pitch);
            }
        }
        return output;
    }
}
class PlayerWithClick extends player_Player {
    constructor(callbackObject) {
        super(true, callbackObject);
    }
}
class MIDIPlayer extends player_BasePlayer {
    constructor(callbackObject) {
        super(false, callbackObject);
        this.outputs = [];
        this.outputChannel = 0;
        this.availableOutputs = [];
        this.NOTE_ON = 0x90;
        this.NOTE_OFF = 0x80;
    }
    async requestMIDIAccess() {
        if (navigator.requestMIDIAccess) {
            return new Promise((resolve, reject) => {
                navigator.requestMIDIAccess().then((midi) => {
                    midi.addEventListener('statechange', (event) => this.initOutputs(midi));
                    resolve(this.initOutputs(midi));
                }, (err) => console.log('Something went wrong', reject(err)));
            });
        }
        else {
            return null;
        }
    }
    initOutputs(midi) {
        const outputs = midi.outputs.values();
        for (let output = outputs.next(); output && !output.done; output = outputs.next()) {
            this.availableOutputs.push(output.value);
        }
        return this.availableOutputs;
    }
    playNote(time, note) {
        const velocity = note.velocity || 100;
        const length = (note.endTime - note.startTime) * 1000;
        const msgOn = [this.NOTE_ON + this.outputChannel, note.pitch, velocity];
        const msgOff = [this.NOTE_OFF + this.outputChannel, note.pitch, velocity];
        const outputs = this.outputs ? this.outputs : this.availableOutputs;
        for (let i = 0; i < outputs.length; i++) {
            this.sendMessageToOutput(outputs[i], msgOn);
            this.sendMessageToOutput(outputs[i], msgOff, window.performance.now() + length);
        }
    }
    sendMessageToOutput(output, message, time) {
        if (output) {
            output.send(message, time);
        }
    }
    playNoteDown(note) {
        const msgOn = [this.NOTE_ON, note.pitch, note.velocity];
        const outputs = this.outputs ? this.outputs : this.availableOutputs;
        for (let i = 0; i < outputs.length; i++) {
            this.sendMessageToOutput(outputs[i], msgOn);
        }
    }
    playNoteUp(note) {
        const msgOff = [this.NOTE_OFF, note.pitch, note.velocity];
        const outputs = this.outputs ? this.outputs : this.availableOutputs;
        for (let i = 0; i < outputs.length; i++) {
            this.sendMessageToOutput(outputs[i], msgOff, note.endTime - note.startTime);
        }
    }
}

// CONCATENATED MODULE: ./core/recorder.ts




class BaseRecorderCallback {
}
class recorder_Recorder {
    constructor(config = {}, callbackObject) {
        this.notes = [];
        this.midiInputs = [];
        this.loClick = new external_commonjs_tone_commonjs2_tone_amd_Tone_root_Tone_["MembraneSynth"]({
            pitchDecay: 0.008,
            envelope: { attack: 0.001, decay: 0.3, sustain: 0 }
        })
            .toMaster();
        this.hiClick = new external_commonjs_tone_commonjs2_tone_amd_Tone_root_Tone_["MembraneSynth"]({
            pitchDecay: 0.008,
            envelope: { attack: 0.001, decay: 0.3, sustain: 0 }
        })
            .toMaster();
        this.config = {
            playClick: config.playClick,
            qpm: config.qpm || constants["DEFAULT_QUARTERS_PER_MINUTE"],
            playCountIn: config.playCountIn,
            startRecordingAtFirstNote: config.startRecordingAtFirstNote || false
        };
        this.callbackObject = callbackObject;
        this.recording = false;
        this.onNotes = new Map();
    }
    async initialize() {
        await navigator
            .requestMIDIAccess()
            .then((midi) => this.midiReady(midi), (err) => console.log('Something went wrong', err));
    }
    midiReady(midi) {
        logging["log"]('Initialized Recorder', 'Recorder');
        const inputs = midi.inputs.values();
        for (let input = inputs.next(); input && !input.done; input = inputs.next()) {
            this.midiInputs.push(input.value);
        }
    }
    isRecording() {
        return this.recording;
    }
    setTempo(qpm) {
        this.config.qpm = qpm;
        if (external_commonjs_tone_commonjs2_tone_amd_Tone_root_Tone_["Transport"].state === 'started') {
            external_commonjs_tone_commonjs2_tone_amd_Tone_root_Tone_["Transport"].bpm.value = qpm;
        }
    }
    enablePlayClick(playClick) {
        this.config.playClick = playClick;
    }
    enablePlayCountIn(countIn) {
        this.config.playCountIn = countIn;
    }
    initClickLoop() {
        let clickStep = 0;
        this.clickLoop = new external_commonjs_tone_commonjs2_tone_amd_Tone_root_Tone_["Loop"]((time) => {
            if (clickStep % 4 === 0) {
                this.loClick.triggerAttack('G5', time);
            }
            else {
                this.hiClick.triggerAttack('C6', time);
            }
            clickStep++;
            if (this.config.playCountIn && clickStep === 4) {
                external_commonjs_tone_commonjs2_tone_amd_Tone_root_Tone_["Transport"].stop();
                this.clickLoop.stop();
            }
        }, '4n');
    }
    getMIDIInputs() {
        return this.midiInputs;
    }
    start(midiInputs) {
        const list = midiInputs ? midiInputs : this.midiInputs;
        for (const input of list) {
            input.onmidimessage = (event) => {
                this.midiMessageReceived(event);
            };
        }
        if (this.config.playClick || this.config.playCountIn) {
            this.initClickLoop();
            external_commonjs_tone_commonjs2_tone_amd_Tone_root_Tone_["Transport"].bpm.value = this.config.qpm;
            external_commonjs_tone_commonjs2_tone_amd_Tone_root_Tone_["Transport"].start();
            this.clickLoop.start();
        }
        else {
            this.clickLoop = null;
        }
        this.recording = true;
        this.firstNoteTimestamp = undefined;
        this.notes = [];
        this.onNotes = new Map();
        if (!this.startRecordingAtFirstNote) {
            const timeStamp = Date.now();
            this.firstNoteTimestamp = timeStamp;
        }
    }
    stop() {
        this.recording = false;
        const timeStamp = Date.now();
        this.onNotes.forEach((pitch, note) => {
            this.noteOff(note, timeStamp);
        });
        for (const input of this.midiInputs) {
            input.onmidimessage = null;
        }
        if (this.clickLoop) {
            external_commonjs_tone_commonjs2_tone_amd_Tone_root_Tone_["Transport"].stop();
            this.clickLoop.stop();
        }
        if (this.notes.length === 0) {
            return null;
        }
        return this.getNoteSequence();
    }
    getNoteSequence() {
        if (this.notes.length === 0) {
            return null;
        }
        return protobuf["a" /* NoteSequence */].create({
            notes: this.notes,
            totalTime: this.notes[this.notes.length - 1].endTime,
        });
    }
    reset() {
        const noteSequence = this.stop();
        this.firstNoteTimestamp = undefined;
        this.notes = [];
        this.onNotes = new Map();
        return noteSequence;
    }
    midiMessageReceived(event) {
        if (!this.recording) {
            return;
        }
        let timeStampOffset;
        if (event.timeStamp !== undefined && event.timeStamp !== 0) {
            timeStampOffset = event.timeStamp;
        }
        else {
            timeStampOffset = performance.now();
        }
        const timeStamp = timeStampOffset + performance.timing.navigationStart;
        if (this.firstNoteTimestamp === undefined) {
            this.firstNoteTimestamp = timeStamp;
        }
        const NOTE_ON = 9;
        const NOTE_OFF = 8;
        const cmd = event.data[0] >> 4;
        const pitch = event.data[1];
        const velocity = (event.data.length > 2) ? event.data[2] : 1;
        const device = event.srcElement;
        if (cmd === NOTE_OFF || (cmd === NOTE_ON && velocity === 0)) {
            if (this.callbackObject && this.callbackObject.noteOff) {
                this.callbackObject.noteOff(pitch, velocity, device);
            }
            this.noteOff(pitch, timeStamp);
            if (this.callbackObject && this.callbackObject.run) {
                this.callbackObject.run(this.getNoteSequence());
            }
        }
        else if (cmd === NOTE_ON) {
            if (this.callbackObject && this.callbackObject.noteOn) {
                this.callbackObject.noteOn(pitch, velocity, device);
            }
            this.noteOn(pitch, velocity, timeStamp);
        }
    }
    noteOn(pitch, velocity, timeStamp) {
        const MILLIS_PER_SECOND = 1000;
        const note = new protobuf["a" /* NoteSequence */].Note();
        note.pitch = pitch;
        note.startTime = (timeStamp - this.firstNoteTimestamp) / MILLIS_PER_SECOND;
        note.velocity = velocity;
        this.onNotes.set(pitch, note);
    }
    noteOff(pitch, timeStamp) {
        const MILLIS_PER_SECOND = 1000;
        const note = this.onNotes.get(pitch);
        if (note) {
            note.endTime = (timeStamp - this.firstNoteTimestamp) / MILLIS_PER_SECOND;
            this.notes.push(note);
        }
        this.onNotes.delete(pitch);
    }
}

// EXTERNAL MODULE: ../node_modules/staffrender/es6/index.js
var es6 = __webpack_require__(49);

// CONCATENATED MODULE: ./core/visualizer.ts



class visualizer_BaseVisualizer {
    constructor(sequence, config = {}) {
        this.noteSequence = sequence;
        this.sequenceIsQuantized = sequences.isQuantizedSequence(this.noteSequence);
        const defaultPixelsPerTimeStep = 30;
        this.config = {
            noteHeight: config.noteHeight || 6,
            noteSpacing: config.noteSpacing || 1,
            pixelsPerTimeStep: config.pixelsPerTimeStep || defaultPixelsPerTimeStep,
            noteRGB: config.noteRGB || '8, 41, 64',
            activeNoteRGB: config.activeNoteRGB || '240, 84, 119',
            minPitch: config.minPitch,
            maxPitch: config.maxPitch,
        };
        if (this.sequenceIsQuantized) {
            const spq = sequence.quantizationInfo.stepsPerQuarter;
            this.config.pixelsPerTimeStep =
                spq ? this.config.pixelsPerTimeStep / spq : 7;
        }
        const size = this.getSize();
        this.width = size.width;
        this.height = size.height;
    }
    getSize() {
        if (this.config.minPitch === undefined ||
            this.config.maxPitch === undefined) {
            this.config.minPitch = constants["MAX_MIDI_PITCH"];
            this.config.maxPitch = constants["MIN_MIDI_PITCH"];
            for (const note of this.noteSequence.notes) {
                this.config.minPitch = Math.min(note.pitch, this.config.minPitch);
                this.config.maxPitch = Math.max(note.pitch, this.config.maxPitch);
            }
            this.config.minPitch -= 2;
            this.config.maxPitch += 2;
        }
        const height = (this.config.maxPitch - this.config.minPitch) * this.config.noteHeight;
        const endTime = this.sequenceIsQuantized ?
            this.noteSequence.totalQuantizedSteps :
            this.noteSequence.totalTime;
        if (!endTime) {
            throw new Error('The sequence you are using with the ' +
                'mm.PianoRollSVGVisualizer does not have a ' +
                (this.sequenceIsQuantized ? 'totalQuantizedSteps' : 'totalTime') +
                ' field set, so the visualizer can\'t be horizontally ' +
                'sized correctly.');
        }
        const width = (endTime * this.config.pixelsPerTimeStep);
        return { width, height };
    }
    getNotePosition(note, noteIndex) {
        const x = (this.getNoteStartTime(note) * this.config.pixelsPerTimeStep);
        const w = this.config.pixelsPerTimeStep *
            (this.getNoteEndTime(note) - this.getNoteStartTime(note)) -
            this.config.noteSpacing;
        const y = this.height -
            ((note.pitch - this.config.minPitch) * this.config.noteHeight);
        return { x, y, w, h: this.config.noteHeight };
    }
    scrollIntoViewIfNeeded(scrollIntoView, activeNotePosition) {
        if (scrollIntoView && this.parentElement) {
            const containerWidth = this.parentElement.getBoundingClientRect().width;
            if (activeNotePosition >
                (this.parentElement.scrollLeft + containerWidth)) {
                this.parentElement.scrollLeft = activeNotePosition - 20;
            }
        }
    }
    getNoteStartTime(note) {
        return this.sequenceIsQuantized ?
            note.quantizedStartStep :
            Math.round(note.startTime * 100000000) / 100000000;
    }
    getNoteEndTime(note) {
        return this.sequenceIsQuantized ?
            note.quantizedEndStep :
            Math.round(note.endTime * 100000000) / 100000000;
    }
    isPaintingActiveNote(note, playedNote) {
        const isPlayedNote = this.getNoteStartTime(note) === this.getNoteStartTime(playedNote);
        const heldDownDuringPlayedNote = this.getNoteStartTime(note) <= this.getNoteStartTime(playedNote) &&
            this.getNoteEndTime(note) >= this.getNoteEndTime(playedNote);
        return isPlayedNote || heldDownDuringPlayedNote;
    }
}
class PianoRollCanvasVisualizer extends visualizer_BaseVisualizer {
    constructor(sequence, canvas, config = {}) {
        super(sequence, config);
        this.ctx = canvas.getContext('2d');
        this.parentElement = canvas.parentElement;
        const dpr = window.devicePixelRatio || 1;
        if (this.ctx) {
            this.ctx.canvas.width = dpr * this.width;
            this.ctx.canvas.height = dpr * this.height;
            canvas.style.width = `${this.width}px`;
            canvas.style.height = `${this.height}px`;
            this.ctx.scale(dpr, dpr);
        }
        this.redraw();
    }
    redraw(activeNote, scrollIntoView) {
        this.clear();
        let activeNotePosition;
        for (let i = 0; i < this.noteSequence.notes.length; i++) {
            const note = this.noteSequence.notes[i];
            const size = this.getNotePosition(note, i);
            const opacityBaseline = 0.2;
            const opacity = note.velocity ? note.velocity / 100 + opacityBaseline : 1;
            const isActive = activeNote && this.isPaintingActiveNote(note, activeNote);
            const fill = `rgba(${isActive ? this.config.activeNoteRGB : this.config.noteRGB},
  ${opacity})`;
            this.redrawNote(size.x, size.y, size.w, size.h, fill);
            if (isActive && note === activeNote) {
                activeNotePosition = size.x;
            }
        }
        this.scrollIntoViewIfNeeded(scrollIntoView, activeNotePosition);
        return activeNotePosition;
    }
    clear() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    }
    redrawNote(x, y, w, h, fill) {
        this.ctx.fillStyle = fill;
        this.ctx.fillRect(Math.round(x), Math.round(y), Math.round(w), Math.round(h));
    }
}
class visualizer_Visualizer extends PianoRollCanvasVisualizer {
    constructor(sequence, canvas, config = {}) {
        super(sequence, canvas, config);
        logging.log('mm.Visualizer is deprecated, and will be removed in a future \
         version. Please use mm.PianoRollCanvasVisualizer instead', 'mm.Visualizer', 5);
    }
}
class PianoRollSVGVisualizer extends visualizer_BaseVisualizer {
    constructor(sequence, svg, config = {}) {
        super(sequence, config);
        if (!(svg instanceof SVGSVGElement)) {
            throw new Error('mm.PianoRollSVGVisualizer requires an <svg> ' +
                'element to display the visualization');
        }
        this.svg = svg;
        this.parentElement = svg.parentElement;
        this.drawn = false;
        this.svg.style.width = `${this.width}px`;
        this.svg.style.height = `${this.height}px`;
        this.clear();
        this.draw();
    }
    redraw(activeNote, scrollIntoView) {
        if (!this.drawn) {
            this.draw();
        }
        if (!activeNote) {
            return null;
        }
        const els = this.svg.querySelectorAll('rect.active');
        for (let i = 0; i < els.length; ++i) {
            const el = els[i];
            const fill = this.getNoteFillColor(this.noteSequence.notes[parseInt(el.getAttribute('data-index'), 10)], false);
            el.setAttribute('fill', fill);
            el.removeAttribute('class');
        }
        let activeNotePosition;
        for (let i = 0; i < this.noteSequence.notes.length; i++) {
            const note = this.noteSequence.notes[i];
            const isActive = activeNote && this.isPaintingActiveNote(note, activeNote);
            if (!isActive) {
                continue;
            }
            const el = this.svg.querySelector(`rect[data-index="${i}"]`);
            const fill = this.getNoteFillColor(note, true);
            el.setAttribute('fill', fill);
            el.setAttribute('class', 'active');
            if (note === activeNote) {
                activeNotePosition = parseFloat(el.getAttribute('x'));
            }
        }
        this.scrollIntoViewIfNeeded(scrollIntoView, activeNotePosition);
        return activeNotePosition;
    }
    draw() {
        for (let i = 0; i < this.noteSequence.notes.length; i++) {
            const note = this.noteSequence.notes[i];
            const size = this.getNotePosition(note, i);
            const fill = this.getNoteFillColor(note, false);
            const dataAttributes = [
                ['index', i],
                ['instrument', note.instrument],
                ['program', note.program],
                ['isDrum', note.isDrum === true],
                ['pitch', note.pitch],
            ];
            this.drawNote(size.x, size.y, size.w, size.h, fill, dataAttributes);
        }
        this.drawn = true;
    }
    getNoteFillColor(note, isActive) {
        const opacityBaseline = 0.2;
        const opacity = note.velocity ? note.velocity / 100 + opacityBaseline : 1;
        const fill = `rgba(${isActive ? this.config.activeNoteRGB : this.config.noteRGB},
  ${opacity})`;
        return fill;
    }
    drawNote(x, y, w, h, fill, dataAttributes) {
        if (!this.svg) {
            return;
        }
        const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        rect.setAttribute('fill', fill);
        rect.setAttribute('x', `${Math.round(x)}`);
        rect.setAttribute('y', `${Math.round(y)}`);
        rect.setAttribute('width', `${Math.round(w)}`);
        rect.setAttribute('height', `${Math.round(h)}`);
        dataAttributes.forEach(([key, value]) => {
            if (value !== undefined) {
                rect.dataset[key] = `${value}`;
            }
        });
        this.svg.appendChild(rect);
    }
    clear() {
        this.svg.innerHTML = '';
        this.drawn = false;
    }
}
var ScrollType;
(function (ScrollType) {
    ScrollType[ScrollType["PAGE"] = 0] = "PAGE";
    ScrollType[ScrollType["NOTE"] = 1] = "NOTE";
    ScrollType[ScrollType["BAR"] = 2] = "BAR";
})(ScrollType || (ScrollType = {}));
class visualizer_StaffSVGVisualizer extends visualizer_BaseVisualizer {
    constructor(sequence, div, config = {}) {
        super(sequence, config);
        if (config.pixelsPerTimeStep === undefined ||
            config.pixelsPerTimeStep <= 0) {
            this.config.pixelsPerTimeStep = 0;
        }
        this.instruments = config.instruments || [];
        this.render = new es6["StaffSVGRender"](this.getScoreInfo(sequence), {
            noteHeight: this.config.noteHeight,
            noteSpacing: this.config.noteSpacing,
            pixelsPerTimeStep: this.config.pixelsPerTimeStep,
            noteRGB: this.config.noteRGB,
            activeNoteRGB: this.config.activeNoteRGB,
            defaultKey: config.defaultKey || 0,
            scrollType: config.scrollType || ScrollType.PAGE,
        }, div);
        this.drawnNotes = sequence.notes.length;
        this.clear();
        this.redraw();
    }
    clear() {
        this.render.clear();
    }
    redraw(activeNote, scrollIntoView) {
        if (this.drawnNotes !== this.noteSequence.notes.length) {
            this.render.scoreInfo = this.getScoreInfo(this.noteSequence);
        }
        const activeNoteInfo = activeNote ? this.getNoteInfo(activeNote) : undefined;
        return this.render.redraw(activeNoteInfo, scrollIntoView);
    }
    isNoteInInstruments(note) {
        if (note.instrument === undefined || this.instruments.length === 0) {
            return true;
        }
        else {
            return this.instruments.indexOf(note.instrument) >= 0;
        }
    }
    timeToQuarters(time) {
        const q = time * this.noteSequence.tempos[0].qpm / 60;
        return Math.round(q * 16) / 16;
    }
    quantizedStepsToQuarters(steps) {
        const q = steps / this.noteSequence.quantizationInfo.stepsPerQuarter;
        return Math.round(q * 16) / 16;
    }
    getNoteInfo(note) {
        const startQ = this.sequenceIsQuantized ?
            this.quantizedStepsToQuarters(note.quantizedStartStep) :
            this.timeToQuarters(note.startTime);
        const endQ = this.sequenceIsQuantized ?
            this.quantizedStepsToQuarters(note.quantizedEndStep) :
            this.timeToQuarters(note.endTime);
        return {
            start: startQ,
            length: endQ - startQ,
            pitch: note.pitch,
            intensity: note.velocity
        };
    }
    getScoreInfo(sequence) {
        const notesInfo = [];
        sequence.notes.forEach((note) => {
            if (this.isNoteInInstruments(note)) {
                notesInfo.push(this.getNoteInfo(note));
            }
        });
        return {
            notes: notesInfo,
            tempos: sequence.tempos ?
                sequence.tempos.map((t) => {
                    return { start: this.timeToQuarters(t.time), qpm: t.qpm };
                }) :
                [],
            keySignatures: sequence.keySignatures ?
                sequence.keySignatures.map((ks) => {
                    return { start: this.timeToQuarters(ks.time), key: ks.key };
                }) :
                [],
            timeSignatures: sequence.timeSignatures ?
                sequence.timeSignatures.map((ts) => {
                    return {
                        start: this.timeToQuarters(ts.time),
                        numerator: ts.numerator,
                        denominator: ts.denominator
                    };
                }) :
                []
        };
    }
}

// CONCATENATED MODULE: ./core/index.ts














// CONCATENATED MODULE: ./core.ts
/* concated harmony reexport aux_inputs */__webpack_require__.d(__webpack_exports__, "aux_inputs", function() { return aux_inputs; });
/* concated harmony reexport chords */__webpack_require__.d(__webpack_exports__, "chords", function() { return chords; });
/* concated harmony reexport constants */__webpack_require__.d(__webpack_exports__, "constants", function() { return constants; });
/* concated harmony reexport data */__webpack_require__.d(__webpack_exports__, "data", function() { return data; });
/* concated harmony reexport logging */__webpack_require__.d(__webpack_exports__, "logging", function() { return logging; });
/* concated harmony reexport performance */__webpack_require__.d(__webpack_exports__, "performance", function() { return core_performance; });
/* concated harmony reexport sequences */__webpack_require__.d(__webpack_exports__, "sequences", function() { return sequences; });
/* concated harmony reexport MetronomeCallbackObject */__webpack_require__.d(__webpack_exports__, "MetronomeCallbackObject", function() { return MetronomeCallbackObject; });
/* concated harmony reexport Metronome */__webpack_require__.d(__webpack_exports__, "Metronome", function() { return metronome_Metronome; });
/* concated harmony reexport MidiConversionError */__webpack_require__.d(__webpack_exports__, "MidiConversionError", function() { return MidiConversionError; });
/* concated harmony reexport midiToSequenceProto */__webpack_require__.d(__webpack_exports__, "midiToSequenceProto", function() { return midiToSequenceProto; });
/* concated harmony reexport sequenceProtoToMidi */__webpack_require__.d(__webpack_exports__, "sequenceProtoToMidi", function() { return sequenceProtoToMidi; });
/* concated harmony reexport urlToBlob */__webpack_require__.d(__webpack_exports__, "urlToBlob", function() { return urlToBlob; });
/* concated harmony reexport blobToNoteSequence */__webpack_require__.d(__webpack_exports__, "blobToNoteSequence", function() { return blobToNoteSequence; });
/* concated harmony reexport urlToNoteSequence */__webpack_require__.d(__webpack_exports__, "urlToNoteSequence", function() { return urlToNoteSequence; });
/* concated harmony reexport BasePlayerCallback */__webpack_require__.d(__webpack_exports__, "BasePlayerCallback", function() { return BasePlayerCallback; });
/* concated harmony reexport BasePlayer */__webpack_require__.d(__webpack_exports__, "BasePlayer", function() { return player_BasePlayer; });
/* concated harmony reexport Player */__webpack_require__.d(__webpack_exports__, "Player", function() { return player_Player; });
/* concated harmony reexport SoundFontPlayer */__webpack_require__.d(__webpack_exports__, "SoundFontPlayer", function() { return player_SoundFontPlayer; });
/* concated harmony reexport PlayerWithClick */__webpack_require__.d(__webpack_exports__, "PlayerWithClick", function() { return PlayerWithClick; });
/* concated harmony reexport MIDIPlayer */__webpack_require__.d(__webpack_exports__, "MIDIPlayer", function() { return MIDIPlayer; });
/* concated harmony reexport BaseRecorderCallback */__webpack_require__.d(__webpack_exports__, "BaseRecorderCallback", function() { return BaseRecorderCallback; });
/* concated harmony reexport Recorder */__webpack_require__.d(__webpack_exports__, "Recorder", function() { return recorder_Recorder; });
/* concated harmony reexport BaseVisualizer */__webpack_require__.d(__webpack_exports__, "BaseVisualizer", function() { return visualizer_BaseVisualizer; });
/* concated harmony reexport PianoRollCanvasVisualizer */__webpack_require__.d(__webpack_exports__, "PianoRollCanvasVisualizer", function() { return PianoRollCanvasVisualizer; });
/* concated harmony reexport Visualizer */__webpack_require__.d(__webpack_exports__, "Visualizer", function() { return visualizer_Visualizer; });
/* concated harmony reexport PianoRollSVGVisualizer */__webpack_require__.d(__webpack_exports__, "PianoRollSVGVisualizer", function() { return PianoRollSVGVisualizer; });
/* concated harmony reexport ScrollType */__webpack_require__.d(__webpack_exports__, "ScrollType", function() { return ScrollType; });
/* concated harmony reexport StaffSVGVisualizer */__webpack_require__.d(__webpack_exports__, "StaffSVGVisualizer", function() { return visualizer_StaffSVGVisualizer; });



/***/ }),
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */
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


/***/ })
/******/ ]);
});