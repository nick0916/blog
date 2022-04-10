"use strict";(self.webpackChunknick_blog=self.webpackChunknick_blog||[]).push([[628],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=l,g=m["".concat(s,".").concat(d)]||m[d]||c[d]||o;return n?a.createElement(g,r(r({ref:t},u),{},{components:n})):a.createElement(g,r({ref:t},u))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,r=new Array(o);r[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,r[1]=i;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5392:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c}});var a=n(7462),l=n(3366),o=(n(7294),n(3905)),r=["components"],i={sidebar_position:1,title:"\u57fa\u672c\u6280\u5de7"},s=void 0,p={unversionedId:"Java/basic",id:"Java/basic",title:"\u57fa\u672c\u6280\u5de7",description:"- ==List\u7528\u6cd5==",source:"@site/docs/Java/basic.md",sourceDirName:"Java",slug:"/Java/basic",permalink:"/docs/Java/basic",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/Java/basic.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"\u57fa\u672c\u6280\u5de7"},sidebar:"tutorialSidebar",previous:{title:"\u6e2c\u8a66 - pytest",permalink:"/docs/Python/pytest"},next:{title:"\u57fa\u672c\u6280\u5de7",permalink:"/docs/Typescript/basic"}},u={},c=[{value:"- ==List\u7528\u6cd5==",id:"--list\u7528\u6cd5",level:4},{value:"- ==parseJosn\u7528\u6cd5==",id:"--parsejosn\u7528\u6cd5",level:4},{value:"- ==\u76e1\u91cf\u7528Stream()\u4f86\u64cd\u4f5c\u8b8a\u6578==",id:"--\u76e1\u91cf\u7528stream\u4f86\u64cd\u4f5c\u8b8a\u6578",level:4},{value:"- ==Collector==",id:"--collector",level:4},{value:"- ==Optional\u4f7f\u7528\u6280\u5de7==",id:"--optional\u4f7f\u7528\u6280\u5de7",level:4},{value:"- \u6cdb\u578b<code>&lt;T&gt;</code>\u7684\u4f7f\u7528",id:"--\u6cdb\u578bt\u7684\u4f7f\u7528",level:4},{value:"- ==Enum\u4f7f\u7528==",id:"--enum\u4f7f\u7528",level:4},{value:"- ==\u597d\u7528\u51fd\u6578\u4ecb\u9762==",id:"--\u597d\u7528\u51fd\u6578\u4ecb\u9762",level:4},{value:"- ==flatMap\u7528\u6cd5==",id:"--flatmap\u7528\u6cd5",level:4},{value:"- ==sorted\u7528\u6cd5==",id:"--sorted\u7528\u6cd5",level:4},{value:"- ==BigDecimal\u7528\u6cd5==",id:"--bigdecimal\u7528\u6cd5",level:4}],m={toc:c};function d(e){var t=e.components,n=(0,l.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h4",{id:"--list\u7528\u6cd5"},"- ==List\u7528\u6cd5=="),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java="},"List myList = new ArrayList();\n")),(0,o.kt)("h4",{id:"--parsejosn\u7528\u6cd5"},"- ==parseJosn\u7528\u6cd5=="),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java="},"JSONObject json = new JSONObject(result); // Convert text to object\nSystem.out.println(json); // Print it with specified indentation\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u986f\u793ajson\u7528\u7684")),(0,o.kt)("h4",{id:"--\u76e1\u91cf\u7528stream\u4f86\u64cd\u4f5c\u8b8a\u6578"},"- ==\u76e1\u91cf\u7528Stream()\u4f86\u64cd\u4f5c\u8b8a\u6578=="),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u512a\u9ede\uff1a\u6613\u8b80\u6027\u3001\u53ef\u7dad\u8b77\u6027\n\u901a\u5e38\u90fd\u6709\u505anull handle\uff0c\u6240\u4ee5\u76e1\u91cf\u7528\u5b83\u6bd4\u8f03\u597d"),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},"Stream \u5ba3\u544a(\u5e38\u7528 to list)")),(0,o.kt)("pre",{parentName:"blockquote"},(0,o.kt)("code",{parentName:"pre",className:"language-java="},'List<String> testGroup = \nStream.of("test1", "test2", "test3", "test4", "test5")\n.collect(Collectors.toList())\n')),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},"Stream Map \u642d\u914d")),(0,o.kt)("pre",{parentName:"blockquote"},(0,o.kt)("code",{parentName:"pre",className:"language-java="},"// \u53d6\u5f97\u7576\u5929\u6b64Group\u8acb\u5047\u7684\u4f7f\u7528\u8005\nfinal Set<String> dayoffUsers = this.XXXXXDao.findLeaveDelegate(groupName)\n.stream()\n.map(XXXXXPo::getLeaveUser)\n.collect(Collectors.toSet())\n"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"> \u5728map\u4f7f\u7528getter\u53bb\u627e\u51fa\u60f3\u8981\u7684\u5c6c\u6027\n\n* Map\u642d\u914dStream\n\n\n* Stream \u642d\u914dFilter(\u7528contains)\n```java=\n// \u6392\u9664\u7576\u65e5\u8acb\u5047\u8005 & \u7576\u524d\u4f7f\u7528\u8005\nList<String> collect = candidates\n.stream()\n.filter(c -> !dayoffUsers.contains(c) && !StringUtils.equals(c,nowUserId))\n.collect(Collectors.toList());\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"orElse (\u7576get\u4e0d\u5230\u6771\u897f\u6642\u7684default)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java="},"HumanBo borrowerInfo = humanBoList.stream()\n                            .filter(item -> item.getCustType().equals(CustomerType.BORROWER.getCode()))\n                            .findAny()\n                            .orElse(new HumanBo());\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"sorted")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java="},"// \u5efa\u7acb \u6bd4\u8f03\u57fa\u6e96: \u5148\u6bd4\u8f03\u8ca1\u5831\u6700\u5927\u8fc4\u65e5 > \u66f4\u65b0\u65e5\u671f\u6700\u5927\uff08\u6700\u665a) (\u53ef\u80fd\u8ca1\u5831\u6709\u591a\u7b46\uff09\nComparator<ReportModel> compareByReportDtToAndUpdateTimeDesc = Comparator\n        .comparing((ReportModel reportSet) -> reportSet.getHd().getReportDtTo()).reversed()\n        .thenComparing((ReportModel reportSet) -> reportSet.getHd().getUpdateTimestamp()).reversed();\n\n// \u53d6\u5f97 \u6e05\u55aeservice\u76ee\u524d\u532f\u5165\u7684\u8ca1\u52d9\u8cc7\u6599\nOptional<ReportModel> newestAnalReport = ElistService.queryEList(caseSn, listType).stream()\n        .map(e -> e.getTypeNo())\n        .map(listId -> queryAnalReportByListId(Long.getLong(listId)))\n        .filter(reportSet -> Objects.nonNull(reportSet.getId()))\n        .sorted(compareByReportDtToAndUpdateTimeDesc)\n        .findFirst();\n\n")),(0,o.kt)("h4",{id:"--collector"},"- ==Collector=="),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"toList()")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"toMap()")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"toSet()")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"summingLong()"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java="},'map.put("totalAprvAmt", projectAprvList.stream()\n                            .map(item -> item.getProject().getAprvAmt())\n                            .collect(Collectors.summingLong(Long::longValue)));\n                            \n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"sum\u91d1\u984d(long)"),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},"Collectors.reducing()")),(0,o.kt)("pre",{parentName:"blockquote"},(0,o.kt)("code",{parentName:"pre",className:"language-java="},"resultModel.setTotalExposeAmount(conditionList.stream()\n        .filter(condition -> ApplyType.NEW.value().equals(condition.getApplyType()))\n        .map(condition -> condition.getCreditAmount())\n        .collect(Collectors.reducing(BigDecimal.ZERO, BigDecimal::add))\n    );\n")),(0,o.kt)("p",{parentName:"blockquote"},"sum\u91d1\u984d(Bigdecimal)")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"joining()")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java="},'String gurantorNameList = humanBoList.stream()\n                                .filter(item -> item.getCustKind().equals(CustKind.PERSON_1.getCode()) || item.getCustKind().equals(CustKind.PERSON_2.getCode()))\n                                .map(item -> item.getCustCname1() + item.getCustCname2())\n                                .collect(Collectors.joining(", "));\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},'\u4f7f\u7528join\u53bb\u628astring \u5408\u8d77\u4f86(\u4e2d\u9593\u7528", "\u505a\u5206\u9694)'),(0,o.kt)("h4",{parentName:"blockquote",id:"--reduce\u7528\u6cd5"},"- ==reduce\u7528\u6cd5=="),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},"\u60c5\u5883\u4e00:")),(0,o.kt)("pre",{parentName:"blockquote"},(0,o.kt)("code",{parentName:"pre",className:"language-java="},"BigDecimal totalBalanceTwAmount = collateralConditionList.stream()\n    .map(collateralCondition -> collateralCondition.getBalanceTwAmount())\n    .reduce(BigDecimal.ZERO, (totalAmount, balanceTwAmount) -> totalAmount.add(balanceTwAmount));\n")),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},"\u60c5\u5883\u4e8c:")),(0,o.kt)("pre",{parentName:"blockquote"},(0,o.kt)("code",{parentName:"pre",className:"language-java\uff1d"},"BigDecimal sum = filteredAC1.stream()\n    .map(m ->  FactorUtils.sum(Function.identity(), m.getLoanAmt(), m.getPassDueAmt()))\n    .reduce(BigDecimal.ZERO, BigDecimal::add);\n"))),(0,o.kt)("h4",{id:"--optional\u4f7f\u7528\u6280\u5de7"},"- ==Optional\u4f7f\u7528\u6280\u5de7=="),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u53d6\u5f97\u503c\u5f97\u6642\u5019\uff0c\u5c08\u9580\u8655\u7406null\u7528\u7684")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u7bc4\u4f8b(\u4e00)\uff1a")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java="},"Optional<String> notExistsInCacheCandidate = candidates.stream()\n.filter(nowCandidate -> !isUsedCandidate.get(categoryName).contains(nowCandidate))\n.findFirst();\n            \nif(notExistsInCacheCandidate.isPresent()) { \n    String candidate = notExistsInCacheCandidate.get()\n    //do something... \n}\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u901a\u5e38Dao\u7684findOneBy...\u90fd\u6703\u642d\u914d\u9019\u500b\u53bb\u63a5\uff08\u7562\u7adf\u4e0d\u4e00\u5b9a\u627e\u5f97\u5230\uff09\n.isPresent(): \u5224\u65b7\u662f\u5426\u5b58\u5728\n.get(): \u53d6\u503c")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u7bc4\u4f8b(\u4e8c):")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java="},"projectList.stream()\n    .map(project -> XXXXXDao.findOneByCaseNoAndProjectCodeAndReversalFlag(project.getCaseNo(),\n            project.getProjectCode(), BooleanUtils.N))\n    .filter(Optional::isPresent)\n    .get(Optional::get)\n    .forEach(....);\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Dao\u6488\u51fa\u4f86\u7684\u70baOptional<..>\uff0c\u5728\u7528Optional::isPresent\u904e\u6ffe\u6709\u5b58\u5728\u7684\n\u7528Optional::get\u53d6\u51fa\u503c\uff0c\u5728\u7528forEach\u7e7c\u7e8c\u505a\u4e8b")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"\u5ba3\u544aOptional (\u53ef\u7528\u5728Junit, null handle)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java="},"Optional<class> variable = Optional.of(new Class()) \n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java="},"Optional.ofNullable(quotnNo)\n    .filter(StringUtils::isNotEmpty)\n    .flatMap(no -> {\n        // plnquotn project dao find by quotnNo , project code, type 03\n        return Optional.of(XXXXXDao.findAllByQuotnNoAndProjectCodeAndDataType(no, projectCode, ProjectDataType.TYPE_03.getCode())\n                .stream().findFirst().orElse(null));\n    })\n    .ifPresent(quotnProject -> {\n        result.setApplAmt(quotnProject.getApplAmt());\n        result.setCrrwApplAmt(quotnProject.getApplAmt());\n        result.setApplTenure(quotnProject.getApplTenure());\n        result.setMoneyUseCode(quotnProject.getMoneyUseCode());\n    });\n")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Optional.ofNullable(), Optional.of()")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u7528ofNullable \u4f86null handle\uff0c\u5982\u679c\u78ba\u5b9a\u4e0d\u6703\u4e1fnull\uff0c\u5247\u7528of()")),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"\u5f8c\u9762\u63a5map\uff0cmap\u4e5f\u53ef\u4ee5\u6709null handle")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java="},"public Boolean isHoliday(Date date) {\n    return HodlidayDao.findOneByCalendarDate(DateUtils.nullableFormat(date, DateUtils.DEFAUT_QUOTN_DATE_FORMAT))\n        .map(HolidayPo::getIsHoliday)\n        .filter(c -> HolidayPo.HolidayCode.IS_HOLIDAY.getCode().equals(c))\n        .isPresent();\n}\n> \u4e00\u65b9\u9762\u7528map\u53bb\u7528getter\u53d6\u5f97\u7279\u5b9a\u7684\u503c\u4f86\u505a\u5224\u65b7\uff0c\u53e6\u4e00\u65b9\u9762\u4e5f\u53ef\u4ee5\u6709null handle\n\n")),(0,o.kt)("h4",{id:"--\u6cdb\u578bt\u7684\u4f7f\u7528"},"- \u6cdb\u578b",(0,o.kt)("inlineCode",{parentName:"h4"},"<T>"),"\u7684\u4f7f\u7528"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u7528\u4f86\u627e\u4e0d\u540c\u985e\u578b\u7684Dao"),(0,o.kt)("li",{parentName:"ul"})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java="},'private <T, ID> JpaRepository<T, ID> getDaoByEntity(String entity) {\n    return applicationContext.getBean(entity + DAO_POSTFIX, JpaRepository.class);\n}\n\nprivate Class<?> getEntityClassbyEntity(String entity) throws ClassNotFoundException {\n    Class<?> entityClass = Class.forName(ENTITY_PACKAGE + StringUtils.capitalize(entity) + PO_POSTFIX);\n    return entityClass;\n}\n\n\n@PostMapping("/{entity}/save")\npublic <T> ServiceResponse<T> save(@RequestBody ServiceRequest<MapVo> serviceRequest, \n        @PathVariable("entity") String entityName) throws Exception {\n\n    Class<T> entityClass = (Class<T>) getEntityClassbyEntity(entityName);\n\n    JpaRepository<T, Long> entityDao = getDaoByEntity(entityName);\n\n    T model = serviceRequest.getModel().toObject(entityClass);\n\n    T result = entityDao.save(model);\n\n    return ServiceResponseBuilder.build(result);\n}\n')),(0,o.kt)("h4",{id:"--enum\u4f7f\u7528"},"- ==Enum\u4f7f\u7528=="),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},".value\u53ef\u4ee5\u4e1f\u51fa\u6240\u6709\uff1f")),(0,o.kt)("h4",{id:"--\u597d\u7528\u51fd\u6578\u4ecb\u9762"},"- ==\u597d\u7528\u51fd\u6578\u4ecb\u9762=="),(0,o.kt)("h4",{id:"--flatmap\u7528\u6cd5"},"- ==flatMap\u7528\u6cd5=="),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java="},"Optional.ofNullable(quotnNo)\n    .filter(StringUtils::isNotEmpty)\n    .flatMap(no -> {\n        // plnquotn project dao find by quotnNo , project code, type 03\n        return Optional.of(XXXXXDao.findAllByQuotnNoAndProjectCodeAndDataType(no, projectCode, ProjectDataType.TYPE_03.getCode())\n                .stream().findFirst().orElse(null));\n    })\n    .ifPresent(quotnProject -> {\n        result.setApplAmt(quotnProject.getApplAmt());\n        result.setCrrwApplAmt(quotnProject.getApplAmt());\n        result.setApplTenure(quotnProject.getApplTenure());\n        result.setMoneyUseCode(quotnProject.getMoneyUseCode());\n    });\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://openhome.cc/Gossip/Java/ConsumerFunctionPredicateSupplier.html"},"\u53c3\u8003\u8cc7\u6599")),(0,o.kt)("h4",{id:"--sorted\u7528\u6cd5"},"- ==sorted\u7528\u6cd5=="),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java="},"result = payListSet.stream()\n        .sorted(Comparator.comparing(PlnPaylistPo::getRestartSeq).reversed())\n        .findFirst().get()\n        .getPaylistJson();\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u964d\u51aa\u6392\u5e8f")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://matthung0807.blogspot.com/2019/07/java-8-steamsortedlist.html"},"\u53c3\u8003\u8cc7\u6599")),(0,o.kt)("h4",{id:"--bigdecimal\u7528\u6cd5"},"- ==BigDecimal\u7528\u6cd5=="),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java="},"BigDecimal HUBDRED_PERCENT = new BigDecimal(100);\nnew BigDecimal(0.010500).multiply(HUNDRED_PERCENT).setScale(3).stripTrailingZeros())\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u8f49\u63db * 100 %\u4e4b\u5f8c\u628a\u5f8c\u9762\u76840\u53bb\u6389\n\u5982\u679c\u8981\u8f49\u6210\u5b57\u4e32\uff0c\u7528toPlainString\u4e0d\u6703\u6709\u79d1\u5b78\u7b26\u865f\n\u4e5f\u53ef\u4ee5\u7528\u79fb\u52d5\u5c0f\u6578\u9ede\u7684\u65b9\u5f0f\u53bb\u76f8\u4e58100\nsetScale(): \u5c0f\u6578\u9ede\u5f8c\u5e7e\u4f4d\uff08\u9810\u8a2d\u56db\u6368\u4e94\u5165\uff09")))}d.isMDXComponent=!0}}]);