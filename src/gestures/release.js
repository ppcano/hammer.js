/**
 * Release
 * Called as last, tells the user has released the screen
 * @events  release
 */

Hammer.gestures.Release = function() {
  
};
Hammer.gestures.Release.prototype = {
  name   : 'release',
  index  : Infinity,
  handler: function releaseGesture(ev, inst) {
    if(ev.eventType == EVENT_END) {
      inst.trigger(this.name, ev);
    }
  }
};
