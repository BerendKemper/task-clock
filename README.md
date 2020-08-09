# TaskClock
JavaScript task clock module

<h3>Table of Contents</h3>
<ul>
    <li><a href="https://github.com/BerendKemper/task-clock#taskclock">TaskClock</a></li>
    <ul>
        <li><a href="https://github.com/BerendKemper/task-clock#class-taskclock">Class: TaskClock</a></li>
        <ul>
            <li><a href="https://github.com/BerendKemper/task-clock#taskclockdone">taskClock.done</a></li>
        </ul>
        <li><a href="https://github.com/BerendKemper/task-clock#new-taskclockoptionscallback">new TaskClock([options], task)</a></li>
    </ul>
</ul>

<pre><code class="language-javascript">npm i task-clock

const TaskClock = require("task-clock");</code></pre>

<h3>Class TaskClock</h3>
<h4>taskClock.done</h4>
<ul>
    <li>Returns: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type">&lt;Boolean&gt;</a></li>
</ul>
Set <code>true</code> to end the timer.
<pre><code class="language-javascript">const timer = new TaskClock(() => console.log("running task"));
// 2020-08-09T12:39:26.604Z tick 0
// running task
// 2020-08-09T12:39:27.604Z tick 1
// running task
// 2020-08-09T12:39:28.603Z tick 2
// running task
// etc...

// somewhere in the future  tick 1057304576
// running task

timer.done = true;
// somewhere in the future  tick 1057304577
// done</code></pre>

<h3>new TaskClock([options],task)</h3>
<ul>
    <li><code>options</code> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object">&lt;Object&gt;</a></li>
    <ul>
        <li><code>start</code> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date">&lt;Date></a> Default: <code>new Date()</code></li>
        <li><code>options</code> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object">&lt;Object&gt;</a></li>
        <ul>
            <li><code>h</code> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type">&lt;integer&gt;</a> Default: <code>0</code></li>
            <li><code>m</code> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type">&lt;integer&gt;</a> Default: <code>0</code></li>
            <li><code>s</code> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type">&lt;integer&gt;</a> Default: <code>0</code></li>
            <li><code>ms</code> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type">&lt;integer&gt;</a> Default: <code>0</code></li>
        </ul>
        <li><code>ticks</code> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type">&lt;integer&gt;</a> Default: <code>0</code></li>
        <li><code>lastTick</code> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function">&lt;Function&gt;</a> Default: <code>() => console.log("done")</code></li>
        <li><code>logger</code> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function">&lt;Function&gt;</a> Default: <code>tick => console.log(new Date().toISOString(), "tick", tick)</code></li>
        <ul>
            <li><code>tick</code> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type">&lt;integer&gt;</a></li>
        </ul>
    </ul>
    <li><code>task</code> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function">&lt;Function&gt;</a></li>
    <ul>
        <li><code>tick</code> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type">&lt;integer&gt;</a></li>
    </ul>
</ul>

<h3>Examples</h3>
<pre><code class="language-javascript">new TaskClock({ start: new Date(new Date().setSeconds(0, 0)), interval: { s: 1.5 }, ticks: 5 },
    () => console.log("running task"));
// 2020-08-09T12:07:09.950Z tick 0
// running task
// 2020-08-09T12:07:10.500Z tick 1
// running task
// 2020-08-09T12:07:12.000Z tick 2
// running task
// 2020-08-09T12:07:13.500Z tick 3
// running task
// 2020-08-09T12:07:15.000Z tick 4
// running task
// 2020-08-09T12:07:16.500Z tick 5
// done

new TaskClock({ start: new Date(new Date().setSeconds(0, 0)), interval: { s: 3 }, ticks: 3 },
    () => console.log("running task"));
// 2020-08-09T12:37:36.220Z tick 0
// running task
// 2020-08-09T12:37:39.001Z tick 1
// running task
// 2020-08-09T12:37:42.000Z tick 2
// running task
// 2020-08-09T12:37:45.004Z tick 3
// done</code></pre>