import request from "@util/request";

export function overviewList() {
  return request({
    url:"/brand-overview/list",
    method:"get",
  });
}