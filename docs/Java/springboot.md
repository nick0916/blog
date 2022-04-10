---
sidebar_position: 1
title: 基本技巧
---

### > List用法

```java=
List myList = new ArrayList();
```

### > parseJson用法
```java=
JSONObject json = new JSONObject(result); // Convert text to object
System.out.println(json); // Print it with specified indentation
```
> 顯示json用的

### > 盡量用`Stream()`來操作變數
> 優點：易讀性、可維護性
> 通常都有做null handle，所以盡量用它比較好
* Stream 宣告(常用 to list)
```java=
List<String> testGroup = 
Stream.of("test1", "test2", "test3", "test4", "test5")
.collect(Collectors.toList())
```
* Stream Map 搭配
```java=
// 取得當天此Group請假的使用者
final Set<String> dayoffUsers = this.XXXXXDao.findLeaveDelegate(groupName)
.stream()
.map(XXXXXPo::getLeaveUser)
.collect(Collectors.toSet())
    
```
> 在map使用getter去找出想要的屬性

* Map搭配Stream


* Stream 搭配Filter(用contains)
```java=
// 排除當日請假者 & 當前使用者
List<String> collect = candidates
.stream()
.filter(c -> !dayoffUsers.contains(c) && !StringUtils.equals(c,nowUserId))
.collect(Collectors.toList());
```
* orElse (當get不到東西時的default)
```java=
HumanBo borrowerInfo = humanBoList.stream()
                            .filter(item -> item.getCustType().equals(CustomerType.BORROWER.getCode()))
                            .findAny()
                            .orElse(new HumanBo());
```

* sorted
```java=
// 建立 比較基準: 先比較財報最大迄日 > 更新日期最大（最晚) (可能財報有多筆）
Comparator<ReportModel> compareByReportDtToAndUpdateTimeDesc = Comparator
        .comparing((ReportModel reportSet) -> reportSet.getHd().getReportDtTo()).reversed()
        .thenComparing((ReportModel reportSet) -> reportSet.getHd().getUpdateTimestamp()).reversed();

// 取得 清單service目前匯入的財務資料
Optional<ReportModel> newestAnalReport = ElistService.queryEList(caseSn, listType).stream()
        .map(e -> e.getTypeNo())
        .map(listId -> queryAnalReportByListId(Long.getLong(listId)))
        .filter(reportSet -> Objects.nonNull(reportSet.getId()))
        .sorted(compareByReportDtToAndUpdateTimeDesc)
        .findFirst();

```

### > `Collector`
* toList()


* toMap()


* toSet()

* summingLong()
```java=
map.put("totalAprvAmt", projectAprvList.stream()
                            .map(item -> item.getProject().getAprvAmt())
                            .collect(Collectors.summingLong(Long::longValue)));
                            
```
> sum金額(long)
* Collectors.reducing()
```java=
resultModel.setTotalExposeAmount(conditionList.stream()
        .filter(condition -> ApplyType.NEW.value().equals(condition.getApplyType()))
        .map(condition -> condition.getCreditAmount())
        .collect(Collectors.reducing(BigDecimal.ZERO, BigDecimal::add))
    );
```
> sum金額(Bigdecimal)

* joining()
```java=
String gurantorNameList = humanBoList.stream()
                                .filter(item -> item.getCustKind().equals(CustKind.PERSON_1.getCode()) || item.getCustKind().equals(CustKind.PERSON_2.getCode()))
                                .map(item -> item.getCustCname1() + item.getCustCname2())
                                .collect(Collectors.joining(", "));
```
> 使用join去把string 合起來(中間用", "做分隔)
### > `Reduce`用法
* 情境一:
```java=
BigDecimal totalBalanceTwAmount = collateralConditionList.stream()
    .map(collateralCondition -> collateralCondition.getBalanceTwAmount())
    .reduce(BigDecimal.ZERO, (totalAmount, balanceTwAmount) -> totalAmount.add(balanceTwAmount));
```
* 情境二:
```java＝
BigDecimal sum = filteredAC1.stream()
    .map(m ->  FactorUtils.sum(Function.identity(), m.getLoanAmt(), m.getPassDueAmt()))
    .reduce(BigDecimal.ZERO, BigDecimal::add);
```

### > `Optional`使用技巧
> 取得值得時候，專門處理null用的

1. 使用範例(一)：
```java=
Optional<String> notExistsInCacheCandidate = candidates.stream()
.filter(nowCandidate -> !isUsedCandidate.get(categoryName).contains(nowCandidate))
.findFirst();
			
if(notExistsInCacheCandidate.isPresent()) { 
    String candidate = notExistsInCacheCandidate.get()
    //do something... 
}
```
> 通常Dao的findOneBy...都會搭配這個去接（畢竟不一定找得到）
> .isPresent(): 判斷是否存在
> .get(): 取值

2. 使用範例(二):
```java=
projectList.stream()
    .map(project -> XXXXXDao.findOneByCaseNoAndProjectCodeAndReversalFlag(project.getCaseNo(),
            project.getProjectCode(), BooleanUtils.N))
    .filter(Optional::isPresent)
    .get(Optional::get)
    .forEach(....);
```
> Dao撈出來的為Optional<..>，在用Optional::isPresent過濾有存在的
> 用Optional::get取出值，在用forEach繼續做事

3. 宣告Optional (可用在Junit, null handle)
```java=
Optional<class> variable = Optional.of(new Class()) 
```    

```java=
Optional.ofNullable(quotnNo)
    .filter(StringUtils::isNotEmpty)
    .flatMap(no -> {
        // plnquotn project dao find by quotnNo , project code, type 03
        return Optional.of(XXXXXDao.findAllByQuotnNoAndProjectCodeAndDataType(no, projectCode, ProjectDataType.TYPE_03.getCode())
                .stream().findFirst().orElse(null));
    })
    .ifPresent(quotnProject -> {
        result.setApplAmt(quotnProject.getApplAmt());
        result.setCrrwApplAmt(quotnProject.getApplAmt());
        result.setApplTenure(quotnProject.getApplTenure());
        result.setMoneyUseCode(quotnProject.getMoneyUseCode());
    });
```

4. Optional.ofNullable(), Optional.of()
* 用ofNullable 來null handle，如果確定不會丟null，則用of()


5. 後面接map，map也可以有null handle
```java=
public Boolean isHoliday(Date date) {
    return HodlidayDao.findOneByCalendarDate(DateUtils.nullableFormat(date, DateUtils.DEFAUT_QUOTN_DATE_FORMAT))
        .map(HolidayPo::getIsHoliday)
        .filter(c -> HolidayPo.HolidayCode.IS_HOLIDAY.getCode().equals(c))
        .isPresent();
}
> 一方面用map去用getter取得特定的值來做判斷，另一方面也可以有null handle

```



### - 泛型`<T>`的使用
* 可以用來找不同類型的Dao
* 
```java=
private <T, ID> JpaRepository<T, ID> getDaoByEntity(String entity) {
    return applicationContext.getBean(entity + DAO_POSTFIX, JpaRepository.class);
}

private Class<?> getEntityClassbyEntity(String entity) throws ClassNotFoundException {
    Class<?> entityClass = Class.forName(ENTITY_PACKAGE + StringUtils.capitalize(entity) + PO_POSTFIX);
    return entityClass;
}


@PostMapping("/{entity}/save")
public <T> ServiceResponse<T> save(@RequestBody ServiceRequest<MapVo> serviceRequest, 
        @PathVariable("entity") String entityName) throws Exception {

    Class<T> entityClass = (Class<T>) getEntityClassbyEntity(entityName);

    JpaRepository<T, Long> entityDao = getDaoByEntity(entityName);

    T model = serviceRequest.getModel().toObject(entityClass);

    T result = entityDao.save(model);

    return ServiceResponseBuilder.build(result);
}
```

### - Enum使用
* .value可以丟出所有？


### - 好用函數介面

### - flatMap用法

```java=
Optional.ofNullable(quotnNo)
    .filter(StringUtils::isNotEmpty)
    .flatMap(no -> {
        // plnquotn project dao find by quotnNo , project code, type 03
        return Optional.of(XXXXXDao.findAllByQuotnNoAndProjectCodeAndDataType(no, projectCode, ProjectDataType.TYPE_03.getCode())
                .stream().findFirst().orElse(null));
    })
    .ifPresent(quotnProject -> {
        result.setApplAmt(quotnProject.getApplAmt());
        result.setCrrwApplAmt(quotnProject.getApplAmt());
        result.setApplTenure(quotnProject.getApplTenure());
        result.setMoneyUseCode(quotnProject.getMoneyUseCode());
    });
```

[參考資料](https://openhome.cc/Gossip/Java/ConsumerFunctionPredicateSupplier.html)

### - `sorted`用法

```java=
result = payListSet.stream()
        .sorted(Comparator.comparing(PlnPaylistPo::getRestartSeq).reversed())
        .findFirst().get()
        .getPaylistJson();
```
> 降冪排序

[參考資料](https://matthung0807.blogspot.com/2019/07/java-8-steamsortedlist.html)

### > `BigDecimal`用法

```java=
BigDecimal HUBDRED_PERCENT = new BigDecimal(100);
new BigDecimal(0.010500).multiply(HUNDRED_PERCENT).setScale(3).stripTrailingZeros())
```
> 轉換 * 100 %之後把後面的0去掉
> 如果要轉成字串，用toPlainString不會有科學符號
> 也可以用移動小數點的方式去相乘100
> setScale(): 小數點後幾位（預設四捨五入）
