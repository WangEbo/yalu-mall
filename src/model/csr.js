import request from "@util/request";

export function getCsrList(params) {
  return request({
    url:"/portal/brand-csr/list",
    method:"get",
    params,
  });
}

