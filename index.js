"use strict";
const sMs = 1000;
const mMs = sMs * 60;
const hMs = mMs * 60;
const dMs = hMs * 24;
function InternalTaskClock(options, task) {
	this.task = typeof options === "function" ? options : task || ((now, tick) => console.log(now.toISOString(), "running task", tick));
	this.lastTick = options.lastTick || (now => console.log(now.toISOString(), "done"));
	this.start = options.start || new Date(Date.now() - 1);
	const { interval: { d = 0, h = 0, m = 0, s = 0, ms = 0 } = {} } = options;
	this.intervalMs = d * dMs + h * hMs + m * mMs + s * sMs + ms || sMs;
	this.ticks = options.ticks || Infinity;
	this.tick = 0;
	this.done = false;
	this.clock = null;
	this.nextTick();
};
InternalTaskClock.prototype.nextTick = function nextTick() {
	const taskTime = this.start.getTime();
	let now = new Date();
	if (now.getTime() - taskTime >= 0) {
		process.nextTick(this.task, now, ++this.tick);
		if (this.done === true)
			return;
		if (this.tick >= this.ticks)
			this.finish();
		let nextTime = taskTime + this.intervalMs;
		now = Date.now();
		while (nextTime < now)
			nextTime += this.intervalMs;
		this.start.setTime(nextTime);
	}
	this.clock = setTimeout(() => this.nextTick(), (this.start.getTime() - Date.now()) * 0.99);
};
InternalTaskClock.prototype.finish = function finish() {
	this.task = this.lastTick;
	this.done = true;
};
InternalTaskClock.prototype.stop = function stop() {
	clearTimeout(this.clock, this.lastTick(new Date(), this.tick));
};
class TaskClock {
	/**@param {String} name
	 * @param {Object} options
	 * @param {Date} options.start
	 * @param {Object} options.interval
	 * @param {Number} options.interval.h
	 * @param {Number} options.interval.m
	 * @param {Number} options.interval.s
	 * @param {Number} options.interval.ms
	 * @param {Number} options.ticks
	 * @param {Function} options.lastTick
	 * @param {Function} task*/
	constructor(options = {}, task) {
		const internalTaskClock = new InternalTaskClock(options, task);
		this.finish = function finish() {
			internalTaskClock.finish();
		}
		this.stop = function stop() {
			internalTaskClock.stop();
		}
	};
};
module.exports = TaskClock;