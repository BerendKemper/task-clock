# TaskClock
JavaScript task clock module featuring options start, interval, ticks and lastTick
<pre><code class="language-javascript">npm i task-clock

const TaskClock = require("task-clock");</code></pre>
<h3>Table of Contents</h3>
<ul>
    <li><a href="https://github.com/BerendKemper/task-clock#class-taskclock">Class: TaskClock</a></li>
    <ul>
        <li><a href="https://github.com/BerendKemper/task-clock#taskclockclose">taskClock.close()</a></li>
        <li><a href="https://github.com/BerendKemper/task-clock#new-taskclockoptionstask">new TaskClock([options][,task])</a></li>
    </ul>
    <li><a href="https://github.com/BerendKemper/task-clock#examples">Examples</a></li>
</ul>
<h2>Class TaskClock</h2>
<h3>taskClock.finish()</h3>
On the next <code>tick</code> the function <code>lastTick</code> will be executed and then the taskClock stops ticking.
<h3>taskClock.finish()</h3>
Immediately the function <code>lastTick</code> will be executed and the taskClock is stopped through clearTimeout(). 
<pre><code class="language-javascript">const timer = new TaskClock();
// 2020-08-09T12:39:26.604Z running task 1
// 2020-08-09T12:39:27.604Z running task 2
// 2020-08-09T12:39:28.603Z running task 3
// etc...
// ...
// somewhere in the future running task 1057304576
timer.finish();
// somewhere in the future done</code></pre>
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
<pre>
<code>
new TaskClock({ start: new Date(new Date().setSeconds(0, 0) + 60000), 
    interval: { s: 1.5 }, ticks: 5 });
// 2020-08-09T18:30:00.001Z running task 1
// 2020-08-09T18:30:01.500Z running task 2
// 2020-08-09T18:30:03.000Z running task 3
// 2020-08-09T18:30:04.501Z running task 4
// 2020-08-09T18:30:06.000Z running task 5
// 2020-08-09T18:30:07.500Z done
// ...
new TaskClock({ start: new Date(new Date().setSeconds(0, 0)),
    interval: { s: 3 }, ticks: 3 },
    (now, tick) => console.log(now.toISOString(), "task", tick));
// 2020-08-09T12:37:36.220Z task 1
// 2020-08-09T12:37:39.001Z task 2
// 2020-08-09T12:37:42.000Z task 3
// 2020-08-09T12:37:45.002Z done
</code>
</pre>