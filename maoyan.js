// 处理 /maoyansh/myshow/ajax/v2/show/*
if ($request.url.includes('/maoyansh/myshow/ajax/v2/show/')) {
  let body = $response.body;
  body = body.replace(/ticketStatus":2/g, 'ticketStatus":1');
  body = body.replace(/soldOut":true/g, 'soldOut":false');
  body = body.replace(/showStatus":2/g, 'showStatus":0');
  body = body.replace(/hasInventory":false/g, 'hasInventory":true');
  body = body.replace(/remainingStock":0/g, 'remainingStock":6');
  body = body.replace(/currentAmount":0/g, 'currentAmount":6');
  $done({body});
}

// 处理 /maoyansh/myshow/ajax/v2/showTickets/validateStock
if ($request.url.includes('/maoyansh/myshow/ajax/v2/showTickets/validateStock')) {
  $done({
    body: '{"code":200,"msg":"库存不足，您最多可再购买0份","data":0,"paging":null,"attrMaps":{"serverTime":1711179077551},"success":true}'
  });
}

// 处理 /maoyansh/myshow/ajax/v2/performance/*
if ($request.url.includes('/maoyansh/myshow/ajax/v2/performance/')) {
  let body = $response.body;
  body = body.replace(/onSaleStatus":\d/g, 'onSaleStatus":2');
  body = body.replace(/onSaleTime":\d+/g, 'onSaleTime":1700000000000');
  $done({body});
}

// 处理 /maoyansh/myshow/ajax/v2/show/*
if ($request.url.includes('/maoyansh/myshow/ajax/v2/show/')) {
  let body = $response.body;
  body = body.replace(/showStatus":2/g, 'showStatus":0');
  body = body.replace(/sellStatus":\d/g, 'sellStatus":3');
  body = body.replace(/remainingStock":0/g, 'remainingStock":999');
  $done({body});
}
