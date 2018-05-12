// sequence has to be made up of a sequence of sequences?
// should every measure be a sequence?

class Sequence {
  constructor({ timeSignature }) {
    this.timeSignature = timeSignature;
    this.measures = [];
  }
}

class SequenceCollection {
  constructor({ sequences }) {
    this.sequuences = sequences;
  }
}

export {
  Sequence,
  SequenceCollection,
};
