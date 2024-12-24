window.onload = function () {
  let t = performance.timing;
  console.log(
    "DNS查询耗时 ：" + (t.domainLookupEnd - t.domainLookupStart).toFixed(0)
  );
  console.log("TCP链接耗时 ：" + (t.connectEnd - t.connectStart).toFixed(0));
  console.log(
    "request请求耗时 ：" + (t.responseEnd - t.responseStart).toFixed(0)
  );
  console.log(
    "解析dom树耗时 ：" + (t.domComplete - t.domInteractive).toFixed(0)
  );
  console.log("白屏时间 ：" + (t.responseStart - t.navigationStart).toFixed(0));
  console.log(
    "js脚本执行时间 ：" +
      (t.domContentLoadedEventEnd - t.domContentLoadedEventStart).toFixed(0)
  );
  console.log(
    "首屏渲染时间 ：" + (t.loadEventEnd - t.navigationStart).toFixed(0)
  );
  console.log(
    "js内存使用占比 ：" +
      ((t.usedJSHeapSize / t.totalJSHeapSize) * 100).toFixed(2) +
      "%"
  );
};
// performance.timing.loadEventEnd - performance.timing.navigationStart;
