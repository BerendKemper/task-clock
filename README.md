# TaskClock
Configure your desired TaskClock.
<br>
<pre><code>npm i task-clock</code></pre>

```javascript
const TaskClock = require("task-clock");
```
<br>
<h2>Class TaskClock</h2>
<h3>new TaskClock([options])</h3>
<ul>
	<details>
		<summary>
			<code>options</code> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object">&lt;Object&gt;</a>
		</summary>
		<ul>
			<details>
				<summary>
					<code>start</code> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date">&lt;Date&gt;</a> Default: <code>new Date()</code>
				</summary>
				The <code>start</code> option must be an instance of a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date">Date</a>. If <code>start</code> is a date in the past <code>taskClock</code> calculates when <code>start</code> plus a number of <code>intervalMs</code> surpasses the time it is now and that calculated time is set to be the time of <code>nextTick</code>. If <code>start</code> is a date in the future <code>taskClock</code> waits untill the time it is now surpasses <code>start</code> and start ticking after that. Default for <code>start</code> is the time the instance of <code>taskClock</code> has been created.
			</details>
			<details>
				<summary>
					<code>autoStart</code> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type">&lt;boolean&gt;</a> Default: <code>true</code>
				</summary>
				If <code>false</code> the <code>taskClock</code> is not started straight away but can manually by started by the method <code>taskClock.start</code>. When extending a class from <code>TaskClock</code> this option allows developers to initialize their own class properly before the <code>task</code> was invoked.
			</details>
			<details>
				<summary>
					<code>interval</code> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object">&lt;Object&gt;</a>
				</summary>
				<ul>
					<details>
						<summary>
							<code>d</code> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type">&lt;number&gt;</a> Default: <code>0</code>
						</summary>
						Abbreviation for days.
					</details>
					<details>
						<summary>
							<code>h</code> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type">&lt;number&gt;</a> Default: <code>0</code>
						</summary>
						Abbreviation for hours.
					</details>
					<details>
						<summary>
							<code>m</code> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type">&lt;number&gt;</a> Default: <code>0</code>
						</summary>
						Abbreviation for minutes.
					</details>
					<details>
						<summary>
							<code>s</code> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type">&lt;number&gt;</a> Default: <code>0</code>
						</summary>
						Abbreviation for seconds.
					</details>
					<details>
						<summary>
							<code>ms</code> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type">&lt;number&gt;</a> Default: <code>0</code>
						</summary>
						Abbreviation for milliseconds.
					</details>
				</ul>
				The <code>intervalMs</code> is calculated as the sum-product of each defined parameters and their corresponding milliseconds. The parameters don't require to be integers but can also be decimal numbers. if <code>h</code> is 2.5 hours it's product would result in 9 million millisecons.
			</details>
			<details>
				<summary>
					<code>ticks</code> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type">&lt;integer&gt;</a> Default: <code>Infinity</code>
				</summary>
				The number of ticks that invoke <code>task</code> untill <code>lastTick</code> is invoked and <code>taskClock</code> stops ticking. Default is <code>Infinity</code> and that is never reached because numbers higher than <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER">MAX_SAFE_INTEGER</a> fail to <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment">increment</a>.
			</details>
			<details>
				<summary>
					<code>task</code> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function">&lt;Function&gt;</a>
				</summary>
				<ul>
					<details>
						<summary>
							<code>now</code> &lt;DateModel&gt;</a> Default: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date">&lt;Date&gt;</a>
						</summary>
						returnes an instance of a <code>DateModel</code> as the first parameter.
					</details>
					<details>
						<summary>
							<code>tick</code> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type">&lt;number&gt;</a>
						</summary>
						returnes the last <code>tick</code> as the second parameter.
					</details>
				</ul>
				If the <code>task</code> option is a function the created instance of <code>TaskClock</code> will have it's <code>task</code> propery overwriten by the function.
			</details>
			<details>
				<summary>
					<code>lastTick</code> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function">&lt;Function&gt;</a>
				</summary>
				<ul>
					<details>
						<summary>
							<code>now</code> &lt;DateModel&gt;</a> Default: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date">&lt;Date&gt;</a>
						</summary>
						returnes an instance of a <code>DateModel</code> as the first parameter.
					</details>
					<details>
						<summary>
							<code>tick</code> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type">&lt;number&gt;</a>
						</summary>
						returnes the last <code>tick</code> as the second parameter.
					</details>
				</ul>
				If the <code>lastTick</code> option is a function the created instance of <code>TaskClock</code> will have it's <code>lastTick</code> propery overwriten by the function.
			</details>
		</ul>
		Every option is optional and have defaults.
	</details>
</ul>
<h3>taskClock.task(now, tick)</h3>
<ul>
	<details>
		<summary>
			<code>now</code> &lt;DateModel&gt;</a> Default: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date">&lt;Date&gt;</a>
		</summary>
		returnes an instance of a <code>DateModel</code> as the first parameter.
	</details>
	<details>
		<summary>
			<code>tick</code> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type">&lt;number&gt;</a>
		</summary>
		returnes the n-th <code>tick</code> as the second parameter, starting from 1, 2, 3 etc.
	</details>
</ul>
Developers should configure a <code>task</code> method if anything usefull sould be done with it. The <code>task</code> can be configured during construction or as a prototype method when extending a class of <code>TaskClock</code> and it may even be overwritten as instance property while actively ticking. 
<h3>taskClock.lastTick(now, tick)</h3>
<ul>
	<details>
		<summary>
			<code>now</code> &lt;DateModel&gt;</a> Default: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date">&lt;Date&gt;</a>
		</summary>
		returnes an instance of a <code>DateModel</code> as the first parameter.
	</details>
	<details>
		<summary>
			<code>tick</code> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type">&lt;number&gt;</a>
		</summary>
		returnes the last <code>tick</code> as the second parameter.
	</details>
</ul>
Developers may configure the <code>lastTick</code> method that will be invoked when <code>taskClock</code> finishes. The <code>lastTick</code> can be configured during construction or as a prototype method when extending a class of <code>TaskClock</code> and it may even be overwritten as instance property while actively ticking.
<h3>taskClock.start()</h3>
When constructing a <code>taskClock</code> and <code>options.autoStart</code> was set to <code>false</code>, developers can now invoke the method <code>start</code>. This helps to finish the construction of their own class (that is extended from TaskClock) before the <code>task</code> was invoked by a tick.
<h3>taskClock.finish()</h3>
Developers may invoke the <code>finish</code> method manually. This method sets the <code>done</code> property to <code>true</code> and <code>task</code> property to <code>lastTick</code> so that when <code>taskClock</code> reaches <code>nextTick</code> then <code>lastTick</code> is invoked instead of <code>task</code>. This method works different than the <code>stop</code> method.
<h3>taskClock.stop()</h3>
Developers may invoke the <code>stop</code> method manually. This method immediately stops <code>taskClock</code> from ticking further and it invokes <code>lastTick</code> straight away.
<h3>taskClock.ticks</h3>
Readable property number of the number <code>ticks</code> until <code>taskClock</code> finishes. 
<h3>taskClock.tick</h3>
Readable property of the current <code>tick</code>.
<h3>taskClock.intervalMs</h3>
Readable property of the calculated sum-product from the interval option.
<h3>taskClock.nextTick</h3>
Readable property of nextTick's time in milliseconds that will have elapsed since the Unix epoch.  
<h3>taskClock.done</h3>
Readable property thast indicates whether taskClock is finishing or has stopped.
<h3>taskClock.DateModel</h3>
Readable property for internal purposes. Developers may configure a getter to return a self implemented Date model and this model must be extended from JavaScript's native <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date">Date</a> class because internal <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date">Date</a> metods will be invoked. Below are examples with DateModel getter to be set to <a href="https://www.npmjs.com/package/locale-timezone-date">LocaleTimezoneDate</a>.
<h2>Examples</h2>

```javascript
const LocaleTimezoneDate = require("locale-timezone-date");
const TaskClock = require("task-clock");
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
		if (delay <= -2)
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
//
// 2021-04-09T02:04:03.203+0200
// 2021-04-09T02:04:03.405+0200 delay: 5 ms
// 2021-04-09T02:04:03.608+0200 delay: 8 ms
// 2021-04-09T02:04:03.811+0200 delay: 11 ms
// 2021-04-09T02:04:04.013+0200 delay: 13 ms
// 2021-04-09T02:04:04.201+0200 delay: 1 ms
// finished promise
// ...
//*/

//*
const timer = new TaskClock();
// 2021-03-07T15:21:15.274Z running task 1
// 2021-03-07T15:21:16.281Z running task 2
// 2021-03-07T15:21:17.283Z running task 3
// etc...
// ...
//(somewhere in the future running) task 1057304576
timer.finish();
//(somewhere in the future) done
//*/
```