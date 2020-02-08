(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@tensorflow/tfjs"));
	else if(typeof define === 'function' && define.amd)
		define(["tf"], factory);
	else if(typeof exports === 'object')
		exports["music_rnn"] = factory(require("@tensorflow/tfjs"));
	else
		root["music_rnn"] = factory(root["tf"]);
})(self, function(__WEBPACK_EXTERNAL_MODULE__0__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 66);
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
/* 3 */,
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
/* 17 */,
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
/* 48 */,
/* 49 */,
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
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external {"commonjs":"@tensorflow/tfjs","commonjs2":"@tensorflow/tfjs","amd":"tf","root":"tf"}
var tfjs_amd_tf_root_tf_ = __webpack_require__(0);

// EXTERNAL MODULE: ./core/aux_inputs.ts
var aux_inputs = __webpack_require__(35);

// EXTERNAL MODULE: ./core/chords.ts + 9 modules
var chords = __webpack_require__(16);

// EXTERNAL MODULE: ./core/data.ts
var core_data = __webpack_require__(10);

// EXTERNAL MODULE: ./core/logging.ts
var logging = __webpack_require__(5);

// EXTERNAL MODULE: ./core/sequences.ts
var sequences = __webpack_require__(6);

// CONCATENATED MODULE: ./music_rnn/attention.ts

const ATTENTION_PREFIX = 'attention_cell_wrapper/';
class attention_AttentionWrapper {
    constructor(cells, attnLength, attnSize) {
        this.cells = cells;
        this.attnLength = attnLength;
        this.attnSize = attnSize;
    }
    static isWrapped(vars) {
        return `rnn/${ATTENTION_PREFIX}kernel` in vars;
    }
    initialize(vars) {
        const prefix = `rnn/${ATTENTION_PREFIX}`;
        this.attnInputMatrix = vars[`${prefix}kernel`];
        this.attnInputBias = vars[`${prefix}bias`];
        this.attnW = vars[`${prefix}attention/attn_w`];
        this.attnV = vars[`${prefix}attention/attn_v`];
        this.attnMatrix = vars[`${prefix}attention/kernel`];
        this.attnBias = vars[`${prefix}attention/bias`];
        this.attnOutputMatrix =
            vars[`${prefix}attention_output_projection/kernel`];
        this.attnOutputBias =
            vars[`${prefix}attention_output_projection/bias`];
    }
    initState() {
        const attention = tfjs_amd_tf_root_tf_["zeros"]([this.attnSize]);
        const attentionState = tfjs_amd_tf_root_tf_["zeros"]([1, this.attnSize * this.attnLength]);
        return { attention, attentionState };
    }
    call(input, c, h, state) {
        const nextAttnInput = tfjs_amd_tf_root_tf_["concat"]([input, state.attention.as2D(1, -1)], 1);
        const nextRnnInput = tfjs_amd_tf_root_tf_["add"](tfjs_amd_tf_root_tf_["matMul"](nextAttnInput, this.attnInputMatrix), this.attnInputBias.as2D(1, -1));
        [c, h] = tfjs_amd_tf_root_tf_["multiRNNCell"](this.cells, nextRnnInput, c, h);
        const attnHidden = tfjs_amd_tf_root_tf_["reshape"](state.attentionState, [-1, this.attnLength, 1, this.attnSize]);
        const attnHiddenFeatures = tfjs_amd_tf_root_tf_["conv2d"](attnHidden, this.attnW, [1, 1], 'same');
        const attnQueryParts = [];
        for (let q = 0; q < c.length; q++) {
            attnQueryParts.push(c[q]);
            attnQueryParts.push(h[q]);
        }
        const attnQuery = tfjs_amd_tf_root_tf_["concat"](attnQueryParts, 1);
        const attnY = tfjs_amd_tf_root_tf_["matMul"](attnQuery, this.attnMatrix).reshape([
            -1, 1, 1, this.attnSize
        ]);
        const attnS = tfjs_amd_tf_root_tf_["sum"](tfjs_amd_tf_root_tf_["mul"](this.attnV, tfjs_amd_tf_root_tf_["tanh"](tfjs_amd_tf_root_tf_["add"](attnHiddenFeatures, attnY))), [2, 3]);
        const attnA = tfjs_amd_tf_root_tf_["softmax"](attnS);
        const attnD = tfjs_amd_tf_root_tf_["sum"](tfjs_amd_tf_root_tf_["mul"](tfjs_amd_tf_root_tf_["reshape"](attnA, [-1, this.attnLength, 1, 1]), attnHidden), [1, 2]);
        const newAttns = attnD.reshape([-1, this.attnSize]);
        const attnStates = state.attentionState.reshape([-1, this.attnLength, this.attnSize]);
        const newAttnStates = tfjs_amd_tf_root_tf_["slice"](attnStates, [0, 1, 0], [attnStates.shape[0], attnStates.shape[1] - 1, attnStates.shape[2]]);
        const output = tfjs_amd_tf_root_tf_["add"](tfjs_amd_tf_root_tf_["matMul"](tfjs_amd_tf_root_tf_["concat"]([h[2], newAttns], 1), this.attnOutputMatrix), this.attnOutputBias);
        const attention = newAttns.flatten();
        const attentionState = tfjs_amd_tf_root_tf_["concat"]([newAttnStates, output.as3D(output.shape[0], 1, output.shape[1])], 1)
            .reshape([-1, this.attnLength * this.attnSize]);
        return { output, c, h, attentionState: { attention, attentionState } };
    }
}

// CONCATENATED MODULE: ./music_rnn/model.ts







const CELL_FORMAT = 'multi_rnn_cell/cell_%d/basic_lstm_cell/';
class model_MusicRNN {
    constructor(checkpointURL, spec) {
        this.checkpointURL = checkpointURL;
        this.spec = spec;
        this.initialized = false;
        this.rawVars = {};
        this.biasShapes = [];
        this.lstmCells = [];
    }
    isInitialized() {
        return this.initialized;
    }
    instantiateFromSpec() {
        this.dataConverter = core_data["converterFromSpec"](this.spec.dataConverter);
        this.attentionLength = this.spec.attentionLength;
        this.chordEncoder = this.spec.chordEncoder ?
            chords["chordEncoderFromType"](this.spec.chordEncoder) :
            undefined;
        this.auxInputs = this.spec.auxInputs ?
            this.spec.auxInputs.map(s => aux_inputs["auxiliaryInputFromSpec"](s)) :
            undefined;
    }
    async initialize() {
        this.dispose();
        const startTime = performance.now();
        if (!this.spec) {
            await fetch(`${this.checkpointURL}/config.json`)
                .then((response) => response.json())
                .then((spec) => {
                if (spec.type !== 'MusicRNN') {
                    throw new Error(`Attempted to instantiate MusicRNN model with incorrect type:
                  ${spec.type}`);
                }
                this.spec = spec;
            });
        }
        this.instantiateFromSpec();
        const vars = await fetch(`${this.checkpointURL}/weights_manifest.json`)
            .then((response) => response.json())
            .then((manifest) => tfjs_amd_tf_root_tf_["io"].loadWeights(manifest, this.checkpointURL));
        const hasAttention = attention_AttentionWrapper.isWrapped(vars);
        const rnnPrefix = hasAttention ? `rnn/${ATTENTION_PREFIX}` : 'rnn/';
        this.forgetBias = tfjs_amd_tf_root_tf_["scalar"](1.0);
        this.lstmCells.length = 0;
        this.biasShapes.length = 0;
        let l = 0;
        while (true) {
            const cellPrefix = rnnPrefix + CELL_FORMAT.replace('%d', l.toString());
            if (!(`${cellPrefix}kernel` in vars)) {
                break;
            }
            this.lstmCells.push((data, c, h) => tfjs_amd_tf_root_tf_["basicLSTMCell"](this.forgetBias, vars[`${cellPrefix}kernel`], vars[`${cellPrefix}bias`], data, c, h));
            this.biasShapes.push(vars[`${cellPrefix}bias`].shape[0]);
            ++l;
        }
        this.lstmFcW = vars['fully_connected/weights'];
        this.lstmFcB = vars['fully_connected/biases'];
        if (hasAttention) {
            this.attentionWrapper = new attention_AttentionWrapper(this.lstmCells, this.attentionLength, this.biasShapes[0] / 4);
            this.attentionWrapper.initialize(vars);
        }
        this.rawVars = vars;
        this.initialized = true;
        logging["logWithDuration"]('Initialized model', startTime, 'MusicRNN');
    }
    dispose() {
        Object.keys(this.rawVars).forEach(name => this.rawVars[name].dispose());
        this.rawVars = {};
        if (this.forgetBias) {
            this.forgetBias.dispose();
            this.forgetBias = undefined;
        }
        this.initialized = false;
    }
    async continueSequence(sequence, steps, temperature, chordProgression) {
        const result = await this.continueSequenceImpl(sequence, steps, temperature, chordProgression, false);
        return result.sequence;
    }
    async continueSequenceAndReturnProbabilities(sequence, steps, temperature, chordProgression) {
        return this.continueSequenceImpl(sequence, steps, temperature, chordProgression, true);
    }
    async continueSequenceImpl(sequence, steps, temperature, chordProgression, returnProbs) {
        sequences["assertIsRelativeQuantizedSequence"](sequence);
        if (this.chordEncoder && !chordProgression) {
            throw new Error('Chord progression expected but not provided.');
        }
        if (!this.chordEncoder && chordProgression) {
            throw new Error('Unexpected chord progression provided.');
        }
        if (!this.initialized) {
            await this.initialize();
        }
        const startTime = performance.now();
        const oh = tfjs_amd_tf_root_tf_["tidy"](() => {
            const inputs = this.dataConverter.toTensor(sequence);
            const length = inputs.shape[0];
            const outputSize = inputs.shape[1];
            const controls = this.chordEncoder ?
                this.chordEncoder.encodeProgression(chordProgression, length + steps) :
                undefined;
            const auxInputs = this.auxInputs ?
                tfjs_amd_tf_root_tf_["concat"](this.auxInputs.map(auxInput => auxInput.getTensors(length + steps)), 1) :
                undefined;
            const rnnResult = this.sampleRnn(inputs, steps, temperature, controls, auxInputs, returnProbs);
            const samples = rnnResult.samples;
            return {
                samples: tfjs_amd_tf_root_tf_["stack"](samples).as2D(samples.length, outputSize),
                probs: rnnResult.probs
            };
        });
        const samplesAndProbs = await oh;
        const result = this.dataConverter.toNoteSequence(samplesAndProbs.samples, sequence.quantizationInfo.stepsPerQuarter);
        const probs = [];
        if (returnProbs) {
            for (let i = 0; i < samplesAndProbs.probs.length; i++) {
                probs.push(await samplesAndProbs.probs[i].data());
                samplesAndProbs.probs[i].dispose();
            }
        }
        oh.samples.dispose();
        result.then(() => logging["logWithDuration"]('Continuation completed', startTime, 'MusicRNN', 20));
        return { sequence: result, probs };
    }
    sampleRnn(inputs, steps, temperature, controls, auxInputs, returnProbs) {
        const length = inputs.shape[0];
        const outputSize = inputs.shape[1];
        let c = [];
        let h = [];
        for (let i = 0; i < this.biasShapes.length; i++) {
            c.push(tfjs_amd_tf_root_tf_["zeros"]([1, this.biasShapes[i] / 4]));
            h.push(tfjs_amd_tf_root_tf_["zeros"]([1, this.biasShapes[i] / 4]));
        }
        let attentionState = this.attentionWrapper ? this.attentionWrapper.initState() : null;
        let lastOutput;
        inputs = inputs.toFloat();
        const samples = [];
        const probs = [];
        const splitInputs = tfjs_amd_tf_root_tf_["split"](inputs.toFloat(), length);
        const splitControls = controls ? tfjs_amd_tf_root_tf_["split"](controls, controls.shape[0]) : undefined;
        const splitAuxInputs = auxInputs ? tfjs_amd_tf_root_tf_["split"](auxInputs, auxInputs.shape[0]) : undefined;
        for (let i = 0; i < length + steps; i++) {
            let nextInput;
            if (i < length) {
                nextInput = splitInputs[i];
            }
            else {
                let logits = lastOutput.matMul(this.lstmFcW).add(this.lstmFcB).as1D();
                let sampledOutput;
                if (temperature) {
                    logits = logits.div(tfjs_amd_tf_root_tf_["scalar"](temperature));
                    sampledOutput = tfjs_amd_tf_root_tf_["multinomial"](logits, 1).as1D();
                }
                else {
                    sampledOutput = logits.argMax().as1D();
                }
                if (returnProbs) {
                    probs.push(tfjs_amd_tf_root_tf_["softmax"](logits));
                }
                nextInput =
                    tfjs_amd_tf_root_tf_["oneHot"](sampledOutput, outputSize).toFloat();
                samples.push(nextInput.as1D());
            }
            if (i === length + steps - 1) {
                break;
            }
            const tensors = [];
            if (splitControls) {
                tensors.push(splitControls[i + 1]);
            }
            tensors.push(nextInput);
            if (splitAuxInputs) {
                tensors.push(splitAuxInputs[i]);
            }
            nextInput = tfjs_amd_tf_root_tf_["concat"](tensors, 1);
            if (this.attentionWrapper) {
                const wrapperOutput = this.attentionWrapper.call(nextInput, c, h, attentionState);
                c = wrapperOutput.c;
                h = wrapperOutput.h;
                attentionState = wrapperOutput.attentionState;
                lastOutput = wrapperOutput.output;
            }
            else {
                [c, h] = tfjs_amd_tf_root_tf_["multiRNNCell"](this.lstmCells, nextInput, c, h);
                lastOutput = h[h.length - 1];
            }
        }
        return { samples, probs };
    }
}

// CONCATENATED MODULE: ./music_rnn/index.ts


// CONCATENATED MODULE: ./music_rnn.ts
/* concated harmony reexport MusicRNN */__webpack_require__.d(__webpack_exports__, "MusicRNN", function() { return model_MusicRNN; });



/***/ })
/******/ ]);
});
