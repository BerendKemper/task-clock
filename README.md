# TaskClock
Configure your desired TaskClock.
<br>
<pre><code class="language-javascript">npm i task-clock

const TaskClock = require("task-clock");</code></pre>
<br>
<h3>Table of Contents</h3>
<ul>
    <li><a href="https://github.com/BerendKemper/task-clock#class-taskclock">Class: TaskClock</a></li>
    <ul>
        <li><a href="https://github.com/BerendKemper/task-clock#taskclockfinish">taskClock.finish()</a></li>
        <li><a href="https://github.com/BerendKemper/task-clock#taskclockstop">taskClock.stop()</a></li>
        <li><a href="https://github.com/BerendKemper/task-clock#new-taskclockoptionstask">new TaskClock([options][,task])</a></li>
    </ul>
    <li><a href="https://github.com/BerendKemper/task-clock#examples">Examples</a></li>
</ul>
<br>
<h2>Class TaskClock</h2>
<h3>TaskClock.task(now, tick)</h3>
<ul>
	<details>
		<summary>
			<code>now</code> &lt;DateModel&gt;</a> Default: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date">&lt;Date&gt;</a>
		</summary>
		returnes a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date">Date</a> object as the first parameter.
	</details>
	<details>
		<summary>
			<li><code>tick</code> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type">&lt;Number&gt;</a>
		</summary>
		returnes the n-th <code>tick</code> as the second parameter, starting from 1, 2, 3 etc.
	</details>
</ul>
Developers should configure a <code>task</code> method if anything usefull must be done. The <code>task</code> can be configured during construction or as a prototype method when extending a class of <code>TaskClock</code> and it may even be overwritten as instance property while actively ticking. 


<h3>TaskClock.lastTick(now, tick)</h3>
<ul>
	<details>
		<summary>
			<code>now</code> &lt;DateModel&gt;</a> Default: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date">&lt;Date&gt;</a>
		</summary>
		returnes a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date">Date</a> object as the first parameter.
	</details>
	<details>
		<summary>
			<li><code>tick</code> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type">&lt;Number&gt;</a>
		</summary>
		returnes the n-th <code>tick</code> as the second parameter, starting from 1, 2, 3 etc.
	</details>
</ul>
<h3>TaskClock.finish()</h3>
<ul>
	<details>
		<summary>
			<code>now</code> &lt;DateModel&gt;</a> Default: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date">&lt;Date&gt;</a>
		</summary>
		returnes a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date">Date</a> object as the first parameter.
	</details>
	<details>
		<summary>
			<li><code>tick</code> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type">&lt;Number&gt;</a>
		</summary>
		returnes the n-th <code>tick</code> as the second parameter, starting from 1, 2, 3 etc.
	</details>
</ul>
<h3>TaskClock.stop(now, tick)</h3>

On the next <code>tick</code> the function <code>lastTick(now, ++tick)</code> is executed and then the taskClock stops ticking.
<h3>taskClock.stop()</h3>
Immediately the function <code>lastTick(new Date(), tick)</code> is executed, a <code>clearTimeout()</code> stops the taskClock. 
<h3>new TaskClock([options][,task])</h3>
<ul>
    <li><code>options</code> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object">&lt;Object&gt;</a></li>
    <ul>
        <li><code>start</code> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date">&lt;Date></a> Default: <code>new Date()</code></li>
        <li><code>interval</code> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object">&lt;Object&gt;</a></li>
        <ul>
            <li><code>d</code> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type">&lt;integer&gt;</a> | <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type">&lt;number&gt;</a> Default: <code>0</code></li>
            <li><code>h</code> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type">&lt;integer&gt;</a> | <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type">&lt;number&gt;</a> Default: <code>0</code></li>
            <li><code>m</code> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type">&lt;integer&gt;</a> | <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type">&lt;number&gt;</a> Default: <code>0</code></li>
            <li><code>s</code> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type">&lt;integer&gt;</a> | <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type">&lt;number&gt;</a> Default: <code>0</code></li>
            <li><code>ms</code> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type">&lt;integer&gt;</a> | <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type">&lt;number&gt;</a> Default: <code>0</code></li>
        </ul>
        <li><code>ticks</code> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type">&lt;integer&gt;</a> Default: <code>Infinity</code></li>
        <li><code>lastTick</code> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function">&lt;Function&gt;</a> Default: <code>now => console.log(now.toISOString(), "done")</code></li>
        <ul>
            <li><code>now</code> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date">&lt;Date></a></li>
            <li><code>tick</code> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type">&lt;integer&gt;</a></li>
        </ul>
    </ul>
    <li><code>task</code> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function">&lt;Function&gt;</a> Default: <code>(now, tick) => console.log(now.toISOString(), "running task", tick)</code></li>
    <ul>
        <li><code>now</code> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date">&lt;Date></a></li>
        <li><code>tick</code> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type">&lt;integer&gt;</a></li>
    </ul>
</ul>
The <code>start</code> option allows the developer to decide at what Date the taskClock should start, if <code>start</code> is a Date in the past taskClock will fire the <code>task</code> immediately and if <code>start</code> is a Date in the future taskClock will fire the <code>task</code> just-in-time (actually a few milliseconds too late and never too early). The <code>interval</code> option determines periodically when the next tick will occur, the <code>interval</code> time i calculated like a sum-product of all sub-options e.g. { h: 2, m: 60 } is equal to 3 hours. The <code>ticks</code> options allows the developer to configure the number of ticks until the timer stops e.g. 3ticks 30seconds interval password resetter. The password resetter example also needs a <code>lastTick</code> function to remove the possibility to enter a password. The <code>lastTick</code> option is a function that will be fired either on the nextTick when taskClock.finish() has been called or immediately when  taskClock.stop() has been called.
<h2>Examples</h2>

```javascript
const TaskClock = require("task-clock");
// ...
new TaskClock({ start: new Date(new Date().setSeconds(0, 0)),
    interval: { s: 3 }, ticks: 3 },
    (now, tick) => console.log(now.toISOString(), "task", tick));
// 2020-08-09T12:37:36.220Z task 1
// 2020-08-09T12:37:39.001Z task 2
// 2020-08-09T12:37:42.000Z task 3
// 2020-08-09T12:37:45.002Z done
// ...
class MyClock extends TaskClock {
	task(now, tick) {
		const nowMs = now.getTime();
		const delay = nowMs - this.prevTick;
		console.log(now.toLocaleISOString(), `delay: ${delay} ms`);
		this.prevTick = this.nextTick;
	};
	lastTick(now, tick) {
		console.log(now.toLocaleISOString(), "last tick", tick);
	};
	get DateModel() {
		return LocaleTimezoneDate;
	};
};
new MyClock({ start: new Date(new Date().setHours(0, 0, 0, 0)), interval: { ms: 200 }, ticks: 10 });
// 2021-03-07T12:19:07.022+0100 delay: NaN ms
// 2021-03-07T12:19:07.213+0100 delay: 13 ms
// 2021-03-07T12:19:07.415+0100 delay: 15 ms
// 2021-03-07T12:19:07.601+0100 delay: 1 ms
// 2021-03-07T12:19:07.805+0100 delay: 5 ms
// 2021-03-07T12:19:08.008+0100 delay: 8 ms
// 2021-03-07T12:19:08.210+0100 delay: 10 ms
// 2021-03-07T12:19:08.414+0100 delay: 14 ms
// 2021-03-07T12:19:08.602+0100 delay: 2 ms
// 2021-03-07T12:19:08.807+0100 delay: 7 ms
// 2021-03-07T12:19:09.009+0100 last tick 11
// ...
class MyClock extends TaskClock {
	task(now, tick) {
		const nowMs = now.getTime();
		const delay = nowMs - this.prevTick;
		console.log(now.toLocaleISOString(), `delay: ${delay} ms`);
		this.prevTick = this.nextTick;
	};
	get DateModel() {
		return LocaleTimezoneDate;
	};
};
new Promise(resolve => {
	new MyClock({
		start: new Date(new Date().setHours(0, 0, 0, 0)), interval: { ms: 200 }, ticks: 10,
		lastTick: resolve
	});
}).then(() => console.log("finished promise"));
// 2021-03-07T12:35:15.277+0100 delay: NaN ms
// 2021-03-07T12:35:15.408+0100 delay: 8 ms
// 2021-03-07T12:35:15.609+0100 delay: 9 ms
// 2021-03-07T12:35:15.813+0100 delay: 13 ms
// 2021-03-07T12:35:16.000+0100 delay: 0 ms
// 2021-03-07T12:35:16.202+0100 delay: 2 ms
// 2021-03-07T12:35:16.406+0100 delay: 6 ms
// 2021-03-07T12:35:16.607+0100 delay: 7 ms
// 2021-03-07T12:35:16.809+0100 delay: 9 ms
// 2021-03-07T12:35:17.013+0100 delay: 13 ms
// finished promise
// ...
const timer = new TaskClock();
// 2020-08-09T12:39:26.604Z running task 1
// 2020-08-09T12:39:27.604Z running task 2
// 2020-08-09T12:39:28.603Z running task 3
// etc...
// ...
//(somewhere in the future running) task 1057304576
timer.finish();
//(somewhere in the future) done
```