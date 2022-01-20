import request from "@util/request";

export function getYears() {
  return request({
    url:"/portal/brand-history/years",
    method:"get",
  });
}

//按年份分页获取品牌历程
export function getYearHistoryList(params) {
  return request({
    url:"/portal/brand-history/list",
    method:"get",
    params,
  });
}




export function getHistoryById(id) {
  return request({
    url:`/portal/brand-history/${id}`,
    method:"get",
  });
}
