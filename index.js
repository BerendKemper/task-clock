"use strict";
const sMs = 1000;
const mMs = sMs * 60;
const hMs = mMs * 60;
const dMs = hMs * 24;
function PrivateTaskClock(options, parent) {
	if (options.ticks > Number.MAX_SAFE_INTEGER)
		throw Error("Ticks should not go beyond safe integer");
	this.parent = parent;
	this.taskTime = options.start || new Date(Date.now() - 1);
	const { interval: { d = 0, h = 0, m = 0, s = 0, ms = 0 } = {} } = options;
	this.intervalMs = d * dMs + h * hMs + m * mMs + s * sMs + ms || sMs;
	this.ticks = options.ticks || Infinity;
	this.tick = 0;
	this.done = false;
};
PrivateTaskClock.prototype = {
	fireTask() {
		this.parent.task(new this.parent.DateModel(), ++this.tick);
		if (this.tick === this.ticks)
			this.parent.finish();
	},
	nextTick() {
		const nowMs = Date.now();
		let taskTime = this.taskTime.getTime();
		let fire = false;
		if (nowMs >= taskTime) {
			if (this.done === true)
				return this.fireTask();
			taskTime += this.intervalMs;
			fire = true;
			if (nowMs > taskTime)
				taskTime += this.intervalMs * Math.ceil((nowMs - taskTime) / this.intervalMs);
		}
		this.clock = setTimeout(() => this.nextTick(), (taskTime - Date.now()) * 0.95);
		if (fire) {
			this.taskTime.setTime(taskTime);
			this.fireTask();
		}
	}
};
class TaskClock {
	#private;
	/**
	 * Developers can configure their desired TaskClock. the methods task and lastTick
	 * can be overwritten as options during construction or extend antoher class from 
	 * TaskClock and give it the prototype methods task and lastTick. Configure the
	 * option ticks to finish TaskClock ater given ticks that triggers lastTick. 
	 * @param {String} name
	 * @param {Object} options
	 * @param {Date} options.start
	 * @param {Object} options.interval
	 * @param {Number} options.interval.h
	 * @param {Number} options.interval.m
	 * @param {Number} options.interval.s
	 * @param {Number} options.interval.ms
	 * @param {Number} options.ticks
	 * @param {Function} options.task
	 * @param {Function} options.lastTick
	 **/
	constructor(options = {}) {
		if (typeof options.task === "function")
			this.lastTick = options.task;
		if (typeof options.lastTick === "function")
			this.lastTick = options.lastTick;
		this.#private = new PrivateTaskClock(options, this);
		this.#private.nextTick();
	};
	task(now, tick) {
		console.log(now.toISOString(), "running task", tick);
	};
	lastTick(now) {
		console.log(now.toISOString(), "done");
	};
	finish() {
		this.task = this.lastTick;
		this.#private.done = true;
	};
	stop() {
		clearTimeout(this.#private.clock);
		this.#private.done = true;
		this.lastTick(new this.DateModel(), this.tick);
	};
	get ticks() {
		return this.#private.ticks;
	};
	get tick() {
		return this.#private.tick;
	};
	get intervalMs() {
		return this.#private.intervalMs;
	};
	get nextTick() {
		return this.#private.taskTime.getTime();
	};
	get done() {
		return this.#private.done;
	}
	get DateModel() {
		return Date;
	};
};
module.exports = TaskClock;