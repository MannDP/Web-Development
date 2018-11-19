//Type constructor funcction
function StopWatch() {
  let duration = 0;
  let startTime,
    endTime = null;
  let running = false;

  this.start = function() {
    if (running) {
      throw new Error("Stopwatch is already running");
    }

    running = true;
    startTime = new Date();
  };

  this.stop = function() {
    if (!running) {
      throw new Error("Stopwatch has not been started");
    }

    running = false;
    endTime = new Date();
    duration += (endTime.getTime() - startTime.getTime()) / 1000;
  };

  this.reset = function() {
    startTime = null;
    endTime = null;
    duration = 0;
    running = false;
  };

  //need a getter function
  Object.defineProperty(this, "duration", {
    get: function() {
      return duration;
    }
  });
}

const sw = new StopWatch();
