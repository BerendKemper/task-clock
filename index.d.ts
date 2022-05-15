export = class TaskClock {
    /**Configure a taskClock to schedule functions.
     * ```javascript
     * new TaskClock(options?: {
     *     start?: Date, // Default now
     *     autoStart?: boolean, // Default true
     *     interval?: { d?: number, h?: number, m?: number, s?: number, ms?: number }, // Default 1000 ms
     *     ticks?: number, // Default Infinity
     *     task?: (now: Date, tick: number) => void,
     *     lastTick?: (now: Date, tick: number) => void
     * })
     * ```
     * - If the option `start` is set to a date in the past the taskClock invokes the `task` immediately.
     * - If the option `autoStart` is set to `false` the taskClock does not start untill the method `start` is invoked.
     *
     * Example:
     * ```javascript
     * new TaskClock({ start: new Date(new Date().setHours(0, 0, 0, 0)), interval: { h: 2 } });
     * //2022-05-07T23:21:57.397Z running task 1
     * //2022-05-08T00:00:00.001Z running task 2
     * //2022-05-08T02:00:00.000Z running task 3
     * ```
     **/
    constructor(options: TaskClockOptions);
    /**
     * In case `autoStart` was set to `false` invoke this method manually.
     */
    start(): void;
    /**
     * This is the default `task` method. A class extended from TaskClock can be created with a `task` method. In case the `task` option was given in the constructor it becomes an instance function. In case the `task` property is overriden from a taskClock instance it becomes the `task`.
     */
    task(now: Date, tick: number): void;
    /**
     * This is the default `lastTick` method. A class extended from TaskClock can be created with a `lastTick` method. In case the `lastTick` option was given in the constructor it becomes an instance function. In case the `lastTick` property is overriden from a taskClock instance it becomes the `lastTick`.
     */
    lastTick(now: Date, tick: number): void;
    /**
     * Schedule the next tick to be the `lastTick` and then stops the taskClock.
     */
    finish(): void;
    /**
     * Immediately stops the taskClock and invokes the `lastTick`.
     */
    stop(): void;
    /**
     * The amount of ticks untill `lastTick`.
     */
    ticks: number;
    /**
     * The current tick.
     */
    tick: number;
    /**
     * The interval in milliseconds.
     */
    intervalMs: number;
    /**
     * Timestamp in milliseconds of the next tick.
     */
    nextTick: number;
    /**
     * Indication there are no more active timeouts.
     */
    done: boolean;
    /**
     * Overrides the `now` parameter that is passed over to the `task` and `lastTick` functions. `DateModel` can only be set by a value that is extended from `Date`.
     */
    DateModel: typeof Date
}
interface TaskClockOptions {
    start?: Date;
    autoStart?: boolean;
    interval?: Interval;
    ticks?: number;
    task?: onTick;
    lastTick?: onTick;
}
interface Interval {
    d?: number;
    h?: number;
    m?: number;
    s?: number;
    ms?: number;
}
type onTick = (now: Date, tick: number) => void;