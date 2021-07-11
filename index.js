"use strict";
const sMs = 1000;
const mMs = sMs * 60;
const hMs = mMs * 60;
const dMs = hMs * 24;
let DateModel = Date;
/**@callback tick @param {Date} now @param {number} tick*/
class TaskClock {
    #taskTime;
    #intervalMs;
    #ticks = Infinity;
    #tick = 0;
    #done = false;
    #clock;
    #nextTick() {
        const nowMs = Date.now();
        let taskTime = this.#taskTime.getTime();
        let fire = false;
        if (nowMs >= taskTime) {
            if (this.#done === true) {
                this.task(new this.DateModel(), ++this.#tick);
                return this.#clock = undefined;
            }
            taskTime += this.#intervalMs;
            fire = true;
            if (nowMs > taskTime)
                taskTime += this.#intervalMs * Math.ceil((nowMs - taskTime) / this.#intervalMs);
        }
        this.#clock = setTimeout(() => this.#nextTick(), (taskTime - Date.now()) * 0.95);
        if (fire) {
            this.#taskTime.setTime(taskTime);
            this.task(new this.DateModel(), ++this.#tick);
            if (this.#tick === this.#ticks) {
                this.task = this.lastTick;
                this.#done = true;
            }
        }
    };
    /**Developers can configure their desired TaskClock. the methods task and lastTick can be overwritten as options during construction or extend antoher class from TaskClock and give it the prototype methods task and lastTick. Configure the option ticks to finish TaskClock ater given ticks that triggers lastTick.
     * @param {String} name
     * @param {{start:Date autoStart:boolean interval:{h:number m:number s:number ms:number} ticks:number task:tick lastTick:tick}} options**/
    constructor(options = {}) {
        if (typeof options.task === "function")
            this.task = options.task;
        if (typeof options.lastTick === "function")
            this.lastTick = options.lastTick;
        this.#taskTime = options.start instanceof Date ? options.start : new Date(Date.now() - 1);
        const { interval: { d = 0, h = 0, m = 0, s = 0, ms = 0 } = {} } = options;
        this.#intervalMs = d * dMs + h * hMs + m * mMs + s * sMs + ms || sMs;
        // 2147483647 CANNOT BE LONGER THAN 32 bit int
        this.#ticks = options.ticks < Number.MAX_SAFE_INTEGER ? options.ticks : Infinity;
        if (options.autoStart !== false)
            this.#nextTick();
    };
    start() {
        if (!this.#clock) {
            this.#tick = 0;
            this.#done = false;
            this.#nextTick();
        }
    };
    /**@param {Date} now @param {number} tick*/
    task(now, tick) {
        console.log(now.toISOString(), "running task", tick);
    };
    /**@param {Date} now @param {number} tick*/
    lastTick(now) {
        console.log(now.toISOString(), "done");
    };
    finish() {
        this.task = this.lastTick;
        this.#done = true;
    };
    stop() {
        clearTimeout(this.#clock);
        this.#done = true;
        this.#clock = undefined;
        this.lastTick(new this.DateModel(), this.#tick);
    };
    get ticks() {
        return this.#ticks;
    };
    get tick() {
        return this.#tick;
    };
    get intervalMs() {
        return this.#intervalMs;
    };
    get nextTick() {
        return this.#taskTime.getTime();
    };
    get done() {
        return this.#done;
    };
    get DateModel() {
        return DateModel;
    };
    set DateModel(OwnDate) {
        DateModel = OwnDate;
    };
};
module.exports = TaskClock;