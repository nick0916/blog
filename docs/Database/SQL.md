---
sidebar_position: 4
title: SQL
---

### > `Exist`, `in` 差異

- Exist: 母查詢查完後, 才去查子查詢, 建議是小表在外大表在exist內部
- in: 子查詢先查後, 母表在查,  建議小表在內大表在外

### > `Not in`

這種查詢會過濾掉Null, 所以就算 Not in (’A’, ‘B’), 他也不會搜尋到NULL


### > export data 注意事項
1. 如果有`updatedtime` or `createdtime`, 記得不要跟著匯出, 可以用 `NOW()` 替代
