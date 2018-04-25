// TODO: Unsure if this `context` var is technically a singleton when imported
// into multiple files, or if it matters.
const context = new AudioContext();
context.destinationStream = context.createMediaStreamDestination();

// Inject singleton audio context into a factory function.
// TODO: factory fn should return object or another fn?
const AudioContextProvider = provided => provided(context);

export default AudioContextProvider;
