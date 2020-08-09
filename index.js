"use strict";
const sMs = 1000;
const mMs = sMs * 60;
const hMs = mMs * 60;
module.exports = class TaskClock {
    /**
     * 
     * @param {String} name
     * @param {Object} options
     * @param {Date} options.start
     * @param {Object} options.interval
     * @param {Number} options.interval.h
     * @param {Number} options.interval.m
     * @param {Number} options.interval.s
     * @param {Number} options.interval.ms
     * @param {Number} options.ticks
     * @param {Function} options.lastTick
     * @param {Function} options.logger
     * @param {Function} task
     */
    constructor(options = {}, task) {
        if (typeof options === "function")
            task = options;
        const { start = new Date(Date.now() - 1), interval = {}, ticks = Infinity, lastTick = () => console.log("done"), logger = tick => console.log(new Date().toISOString(), "tick", tick) } = options;
        const { h = 0, m = 0, s = 0, ms = 0 } = interval;
        const intervalMs = h * hMs + m * mMs + s * sMs + ms || sMs;
        let _ticks = 0;
        let done = false
        Object.defineProperty(this, 'done', {
            get() { return done; },
            set(value) {
                if (value === true) {
                    task = lastTick;
                    done = true;
                }
            }, enumerable: true
        });
        const nextTick = () => {
            const taskTime = start.getTime();
            const diffTime = Date.now() - taskTime;
            if (diffTime >= 0) {
                const tick = _ticks++;
                logger(tick);
                task(tick);
                if (ticks !== 0) {
                    if (done === true)
                        return;
                    if (_ticks === ticks) {
                        task = lastTick;
                        done = true;
                    }
                }
                let nextTime = taskTime + intervalMs;
                const now = Date.now();
                while (nextTime < now)
                    nextTime += intervalMs;
                start.setTime(nextTime);
            }
            setTimeout(nextTick, (start.getTime() - Date.now()) * 0.99);
        };
        nextTick();
    }
};