//判断是否为pc端
export const IsPC = () => {
  var self = this;
  var userAgentInfo = navigator.userAgent;
  var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");
  self.isPc = true;
  for (var v = 0; v < Agents.length; v++) {
    if (userAgentInfo.indexOf(Agents[v]) > 0) { self.isPc = false; break; }
  }
  return self.isPc;
},