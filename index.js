"use strict";
const sMs = 1000;
const mMs = sMs * 60;
const hMs = mMs * 60;
const dMs = hMs * 24;
let DateModel = Date;
module.exports.TaskClock = class TaskClock {
    #taskTime = null;
    #intervalMs = null;
    #ticks = Infinity;
    #tick = 0;
    #end = false;
    #clock = null;
    #nextTick() {
        const nowMs = Date.now();
        let taskTime = this.#taskTime.getTime();
        let fire = false;
        if (nowMs >= taskTime) {
            if (this.#end === true) {
                this.lastTick(new this.DateModel(), ++this.#tick);
                return this.#clock = null;
            }
            taskTime += this.#intervalMs;
            fire = true;
            if (nowMs > taskTime)
                taskTime += this.#intervalMs * Math.ceil((nowMs - taskTime) / this.#intervalMs);
        }
        this.#clock = setTimeout(() => this.#nextTick(), (taskTime - Date.now()) * 0.95);
        if (fire) {
            this.#taskTime.setTime(taskTime);
            this.#end = ++this.#tick === this.#ticks;
            this.task(new this.DateModel(), this.#tick);
        }
    }
    constructor(options = {}) {
        if (typeof options.task === "function")
            this.task = options.task;
        if (typeof options.lastTick === "function")
            this.lastTick = options.lastTick;
        this.#taskTime = options.start instanceof Date ? options.start : new Date(Date.now() - 1);
        const { interval: { d = 0, h = 0, m = 0, s = 0, ms = 0 } = {} } = options;
        this.#intervalMs = d * dMs + h * hMs + m * mMs + s * sMs + ms || sMs;
        this.#ticks = options.ticks < Number.MAX_SAFE_INTEGER ? options.ticks : Infinity;
        if (options.autoStart !== false)
            this.#nextTick();
    }
    start() {
        if (!this.#clock) {
            this.#tick = 0;
            this.#end = false;
            this.#nextTick();
        }
    }
    task(now, tick) {
        console.log(now.toISOString(), "running task", tick);
    }
    lastTick(now) {
        console.log(now.toISOString(), "done");
    }
    finish() {
        this.task = this.lastTick;
        this.#end = true;
    }
    stop() {
        clearTimeout(this.#clock);
        this.#end = true;
        this.#clock = null;
        this.lastTick(new this.DateModel(), this.#tick);
    }
    get ticks() {
        return this.#ticks;
    }
    get tick() {
        return this.#tick;
    }
    get intervalMs() {
        return this.#intervalMs;
    }
    get nextTick() {
        return this.#taskTime.getTime();
    }
    get done() {
        return this.#clock === null;
    }
    get DateModel() {
        return DateModel;
    }
    set DateModel(OwnDate) {
        DateModel = OwnDate;
    }
};
// Number.MAX_SAFE_INTEGER === 9007199254740991
// let maxDate =      new Date(8640000000000000); // Sat Sep 13 275760 02:00:00 GMT+0200 (Central European Summer Time)
// Number.MIN_SAFE_INTEGER === -9007199254740991
// let minDate =      new Date(-8640000000000000); // Tue Apr 20 -271821 00:19:32 GMT+0019 (Central European Summer Time)