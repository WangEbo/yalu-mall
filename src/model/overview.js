import request from "@util/request";

export function getOverviewList(params) {
  return request({
    url:"/portal/brand-overview/list",
    method:"get",
    params,
  });
}