# TaskClock
JavaScript task clock module

<h3>Table of Contents</h3>
<ul>
    <li><a href="https://github.com/BerendKemper/task-clock#taskclock">TaskClock</a></li>
    <ul>
        <li><a href="https://github.com/BerendKemper/task-clock#class-taskclock">Class: TaskClock</a></li>
        <ul>
            <li><a href="https://github.com/BerendKemper/task-clock#taskclockclose">taskClock.close()</a></li>
        </ul>
        <li><a href="https://github.com/BerendKemper/task-clock#new-taskclockoptionstask">new TaskClock([options][,task])</a></li>
    </ul>
</ul>

<pre><code class="language-javascript">npm i task-clock

const TaskClock = require("task-clock");</code></pre>

<h3>Class TaskClock</h3>
<h4>taskClock.close()</h4>
<pre><code class="language-javascript">const timer = new TaskClock();
// 2020-08-09T12:39:26.604Z running task 1
// 2020-08-09T12:39:27.604Z running task 2
// 2020-08-09T12:39:28.603Z running task 3
// etc...

// somewhere in the future running task 1057304576
timer.close();
// done</code></pre>

<h3>new TaskClock([options],task)</h3>
<ul>
    <li><code>options</code> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object">&lt;Object&gt;</a></li>
    <ul>
        <li><code>start</code> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date">&lt;Date></a> Default: <code>new Date()</code></li>
        <li><code>options</code> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object">&lt;Object&gt;</a></li>
        <ul>
            <li><code>d</code> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type">&lt;integer&gt;</a> | <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type">&lt;number&gt;</a> Default: <code>0</code></li>
            <li><code>h</code> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type">&lt;integer&gt;</a> | <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type">&lt;number&gt;</a> Default: <code>0</code></li>
            <li><code>m</code> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type">&lt;integer&gt;</a> | <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type">&lt;number&gt;</a> Default: <code>0</code></li>
            <li><code>s</code> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type">&lt;integer&gt;</a> | <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type">&lt;number&gt;</a> Default: <code>0</code></li>
            <li><code>ms</code> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type">&lt;integer&gt;</a> | <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type">&lt;number&gt;</a> Default: <code>0</code></li>
        </ul>
        <li><code>ticks</code> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type">&lt;integer&gt;</a> Default: <code>Infinity</code></li>
        <li><code>lastTick</code> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function">&lt;Function&gt;</a> Default: <code>() => console.log("done")</code></li>
    </ul>
    <li><code>task</code> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function">&lt;Function&gt;</a> Default: <code>tick => console.log(new Date().toISOString(), "running task", tick)</code></li>
    <ul>
        <li><code>tick</code> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type">&lt;integer&gt;</a></li>
    </ul>
</ul>

<h3>Examples</h3>
<pre><code class="language-javascript">new TaskClock({ start: new Date(new Date().setSeconds(0, 0) + 60000), 
    interval: { s: 1.5 }, ticks: 5 });
// 2020-08-09T18:30:00.001Z running task 1
// 2020-08-09T18:30:01.500Z running task 2
// 2020-08-09T18:30:03.000Z running task 3
// 2020-08-09T18:30:04.501Z running task 4
// 2020-08-09T18:30:06.000Z running task 5
// done

new TaskClock({ start: new Date(new Date().setSeconds(0, 0)),
    interval: { s: 3 }, ticks: 3 },
    tick => console.log(new Date().toISOString(), "task", tick));
// 2020-08-09T12:37:36.220Z task 1
// 2020-08-09T12:37:39.001Z task 2
// 2020-08-09T12:37:42.000Z task 3
// done</code></pre>