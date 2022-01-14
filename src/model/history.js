import request from "@util/request";

export function historyList() {
  return request({
    url:"/brand-history/list",
    method:"get",
  });
}