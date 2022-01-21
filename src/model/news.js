import request from "@util/request";


export function getNewsPageList(params) {
  return request({
    url:"/portal/brand-news/list",
    method:"get",
    params,
  });
}




export function getNewsDetailById(id) {
  return request({
    url:`/portal/brand-news/${id}`,
    method:"get",
  });
}
