

import request from "@util/request";

export function getGoodsTree() {
  return request({
    url:"/portal/product-category/list/withChildren",
    method:"get",
  });
}


export function getCatePageList(parentId) {
  return request({
    url: `/portal/product-category/list/${parentId}`,
    method:"get",
  });
}



// color productCategoryId priceBegin priceEnd pageNum keyword
export function queryGoodList(params) {
  return request({
    url: "/portal/product/list",
    method:"get",
    params,
  });
}
