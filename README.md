# TaskClock
<div>Configure your desired TaskClock.</div>
<div>`npm i task-clock`</div>

```javascript
const { TaskClock } = require("task-clock");
```
<div>
    <h2>Class TaskClock</h2>
</div>

<div>
    <h3>new TaskClock([options])</h3>
    <ul>
        <details>
            <summary>
                `options` <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object">&lt;Object&gt;</a>
            </summary>
            <ul>
                <details>
                    <summary>
                        `start` <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date">&lt;Date&gt;</a> Default: `new Date()`
                    </summary>
                    <div>
                        The option start must be an instance of a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date">Date</a>. If start set to a date in the past the taskClock invokes the task immediately.
                    </div>
                </details>
                <details>
                    <summary>
                        `autoStart` <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type">&lt;boolean&gt;</a> Default: `true`
                    </summary>
                    <div>
                        If the option autoStart is set to `false` the taskClock does not start untill the method start is invoked.
                    </div>
                </details>
                <details>
                    <summary>
                        `interval` <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object">&lt;Object&gt;</a>
                    </summary>
                    <ul>
                        <details>
                            <summary>
                                `d` <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type">&lt;number&gt;</a> Default: `0`
                            </summary>
                            <div>
                                Abbreviation for days.
                            </div>
                        </details>
                        <details>
                            <summary>
                                `h` <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type">&lt;number&gt;</a> Default: `0`
                            </summary>
                            <div>
                                Abbreviation for hours.
                            </div>
                        </details>
                        <details>
                            <summary>
                                `m` <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type">&lt;number&gt;</a> Default: `0`
                            </summary>
                            <div>
                                Abbreviation for minutes.
                            </div>
                        </details>
                        <details>
                            <summary>
                                `s` <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type">&lt;number&gt;</a> Default: `0`
                            </summary>
                            <div>
                                Abbreviation for seconds.
                            </div>
                        </details>
                        <details>
                            <summary>
                                `ms` <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type">&lt;number&gt;</a> Default: `0`
                            </summary>
                            <div>
                                Abbreviation for milliseconds.
                            </div>
                        </details>
                    </ul>
                    <div>
                        The intervalMs is calculated as the sum of each defined parameters in milliseconds. The parameters don't require to be integers but can also be decimal numbers. A parameter h set to `2.5` hours is equal to 9 million milliseconds.
                    </div>
                </details>
                <details>
                    <summary>
                        `ticks` <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type">&lt;integer&gt;</a> Default: `Infinity`
                    </summary>
                    <div>
                        The number of ticks untill lastTick and taskClock stops ticking. Default is `Infinity` and that is never reached. The largest possible date in JavaScript is in the year `275760` when milliseconds reach `8640000000000000` and this is smaller than <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER">Number.MAX_SAFE_INTEGER</a> `9007199254740991`.
                    </div>
                </details>
                <details>
                    <summary>
                        `task` <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function">&lt;Function&gt;</a>
                    </summary>
                    <ul>
                        <details>
                            <summary>
                                `now` &lt;DateModel&gt;</a> Default: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date">&lt;Date&gt;</a>
                            </summary>
                            <div>
                                An instance of a DateModel.
                            </div>
                        </details>
                        <details>
                            <summary>
                                `tick` <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type">&lt;number&gt;</a>
                            </summary>
                            <div>
                                The current tick.
                            </div>
                        </details>
                    </ul>
                    <div>
                        In case the task option was given in the constructor it becomes an instance function. Instance functions override class methods.
                    </div>
                </details>
                <details>
                    <summary>
                        `lastTick` <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function">&lt;Function&gt;</a>
                    </summary>
                    <ul>
                        <details>
                            <summary>
                                `now` <a href="#taskclockdatemodel">&lt;DateModel&gt;</a> Default: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date">&lt;Date&gt;</a>
                            </summary>
                            <div>
                                An instance of a DateModel.
                            </div>
                        </details>
                        <details>
                            <summary>
                                `tick` <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type">&lt;number&gt;</a>
                            </summary>
                            <div>
                                The current tick.
                            </div>
                        </details>
                    </ul>
                    <div>
                        In case the lastTick option was given in the constructor it becomes an instance function. Instance functions override class methods.
                    </div>
                </details>
            </ul>
        </details>
    </ul>
</div>

<div>
    <h3>taskClock.task(now, tick)</h3>
    <ul>
        <details>
            <summary>
                `now` <a href="#taskclockdatemodel">&lt;DateModel&gt;</a> Default: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date">&lt;Date&gt;</a>
            </summary>
            <div>
                An instance of a DateModel.
            </div>
        </details>
        <details>
            <summary>
                `tick` <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type">&lt;number&gt;</a>
            </summary>
            <div>
                The current tick.
            </div>
        </details>
    </ul>
    <div>
        TaskClock has a default task method and it should be overriden. A class extended from TaskClock can be created with a task method. In case the task option was given in the constructor it becomes an instance function. In case the task property is overriden from a taskClock instance it becomes the task.
    </div>
</div>

<div>
    <h3>taskClock.lastTick(now, tick)</h3>
    <ul>
        <details>
            <summary>
                `now` <a href="#taskclockdatemodel">&lt;DateModel&gt;</a> Default: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date">&lt;Date&gt;</a>
            </summary>
            <div>
                An instance of a DateModel.
            </div>
        </details>
        <details>
            <summary>
                `tick` <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type">&lt;number&gt;</a>
            </summary>
            <div>
                The current tick.
            </div>
        </details>
    </ul>
    <div>
        TaskClock has a default lastTick method and it should be overriden. A class extended from TaskClock can be created with a lastTick method. In case the lastTick option was given in the constructor it becomes an instance function. In case the lastTick property is overriden from a taskClock instance it becomes the lastTick.
    </div>
</div>

<div>
    <h3>taskClock.start()</h3>
    <div>
        In case the option autoStart was set to `false` in the constructor invoke this method manually.
    </div>
</div>

<div>
    <h3>taskClock.finish()</h3>
    <div>
        Schedule the next tick to be the lastTick and then stops the taskClock.
    </div>
</div>

<div>
    <h3>taskClock.stop()</h3>
    <div>
        Immediately stops the taskClock and invokes the lastTick.
    </div>
</div>

<div>
    <h3>taskClock.ticks</h3>
    <div>
        Readable property of the amount of ticks untill lastTick.
    </div>
</div>

<div>
    <h3>taskClock.tick</h3>
    <div>
        Readable property of the current tick.
    </div>
</div>

<div>
    <h3>taskClock.intervalMs</h3>
    <div>
        Readable property of the interval in milliseconds.
    </div>
</div>

<div>
    <h3>taskClock.nextTick</h3>
    <div>
        Readable property of the timestamp in milliseconds of the next tick.
    </div>
</div>

<div>
    <h3>taskClock.done</h3>
    <div>
        Readable property that indicates there are no more active timeouts.
    </div>
</div>

<div>
    <h3>taskClock.DateModel</h3>
    <div>
        Overrides the now parameter that is passed over to the task and lastTick functions. DateModel can only be set by a value that is extended from <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date">Date</a>.
    </div>
</div>

<h2>Examples</h2>

```javascript
const LocaleTimezoneDate = require("locale-timezone-date");
const { TaskClock } = require("task-clock");
// ...
//*
new TaskClock({
	start: new Date(new Date().setSeconds(0, 0)), interval: { s: 3 }, ticks: 3,
	task: (now, tick) => console.log(now.toISOString(), "task", tick)
});
// 2021-04-08T23:31:06.720Z task 1
// 2021-04-08T23:31:09.014Z task 2
// 2021-04-08T23:31:12.003Z task 3
// 2021-04-08T23:31:15.010Z done
// ...
//*/


//*
class MyClockA extends TaskClock {
	task(now, tick) {
		const nowMs = now.getTime();
		const delay = nowMs - this.prevTick;
		if (tick > 1)
			console.log(now.toLocaleISOString(), `delay: ${delay} ms`);
		else
			console.log(now.toLocaleISOString());
		this.prevTick = this.nextTick;
	};
	lastTick(now, tick) {
		console.log(now.toLocaleISOString(), "last tick", tick);
	};
	get DateModel() {
		return LocaleTimezoneDate;
	};
};
new MyClockA({ start: new LocaleTimezoneDate().startOfDate({ ms: false }), interval: { ms: 200 }, ticks: 10 });
// 2021-04-09T01:34:37.736+0200
// 2021-04-09T01:34:37.802+0200 delay: 2 ms
// 2021-04-09T01:34:38.005+0200 delay: 5 ms
// 2021-04-09T01:34:38.206+0200 delay: 6 ms
// 2021-04-09T01:34:38.408+0200 delay: 8 ms
// 2021-04-09T01:34:38.611+0200 delay: 11 ms
// 2021-04-09T01:34:38.815+0200 delay: 15 ms
// 2021-04-09T01:34:39.001+0200 delay: 1 ms
// 2021-04-09T01:34:39.205+0200 delay: 5 ms
// 2021-04-09T01:34:39.407+0200 delay: 7 ms
// 2021-04-09T01:34:39.611+0200 last tick 11
// ...
//*/


//*
class MyClockB extends TaskClock {
	#finish;
	constructor(finish, lastTick) {
		super({
			start: new Date(new Date().setHours(0, 0, 0, 0)),
			interval: { ms: 200 },
			ticks: 10,
			lastTick, // if condition did not meet reject on lastTick
			autoStart: false // maybe i need to initialize a property
		});
		this.#finish = finish;
		this.start();
	};
	task(now, tick) {
		const nowMs = now.getTime();
		const delay = nowMs - this.prevTick;
		if (tick > 1)
			console.log(now.toLocaleISOString(), `delay: ${delay} ms`, tick);
		else
			console.log(now.toLocaleISOString());
		if (delay <= 2)
			return this.stop();
		this.prevTick = this.nextTick;
	};
	stop() {
		this.lastTick = this.#finish
		super.stop();
	};
	get DateModel() {
		return LocaleTimezoneDate;
	};
	static promisify(resolve, reject) {
		return new MyClockB(resolve, reject);
	};
};
new Promise(MyClockB.promisify)
	.then(() => console.log("finished promise"))
	.catch(now => console.log("Rejected: ", now.toLocaleISOString()));
/*
2022-05-15T14:38:32.816+0200 1
2022-05-15T14:38:33.011+0200 2 delay: 11 ms
2022-05-15T14:38:33.214+0200 3 delay: 14 ms
2022-05-15T14:38:33.404+0200 4 delay: 4 ms
2022-05-15T14:38:33.606+0200 5 delay: 6 ms
2022-05-15T14:38:33.810+0200 6 delay: 10 ms
2022-05-15T14:38:34.015+0200 7 delay: 15 ms
2022-05-15T14:38:34.203+0200 8 delay: 3 ms
2022-05-15T14:38:34.406+0200 9 delay: 6 ms
2022-05-15T14:38:34.610+0200 10 delay: 10 ms
Rejected:  2022-05-15T14:38:34.812+0200
-----
2022-05-15T14:39:51.967+0200 1
2022-05-15T14:39:52.009+0200 2 delay: 9 ms
2022-05-15T14:39:52.212+0200 3 delay: 12 ms
2022-05-15T14:39:52.400+0200 4 delay: 0 ms
finished promise
*/

//*
const timer = new TaskClock();
// 2021-03-07T15:21:15.274Z running task 1
// 2021-03-07T15:21:16.281Z running task 2
// 2021-03-07T15:21:17.283Z running task 3
// etc...
// ...
//{somewhere in the future} running task 1057304576
timer.finish();
//{somewhere in the future} done
//*/
```