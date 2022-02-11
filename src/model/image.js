import request from "@util/request";

export function getStoreImageList(params) {
  return request({
    url:"/portal/brand-image/list",
    method:"get",
    params,
  });
}