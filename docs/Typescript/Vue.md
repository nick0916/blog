---
sidebar_position: 3
title: Vue
---


### >  v-clock
解決變數在編譯以前，就顯示的問題

```css=
[v-cloak]{
    display: none;
}

```
### >  v-bind
可以讓變數在屬性內操作物件

```htmlembedded=
<div id="message" v-bind:msg="checked">{{checked}}</div>
```

### >  Component
* javascript的部分，可以先定義好:"TodoList"這個Component, 以及todoss這個參數
```javascript
Vue.component("TodoList",{
    template:`
    <ul>
        <li :class="{'deleted':item.done}" v-for="item in todoss" >{{item.text}}</li>
    </ul>
    `,
    props:["todoss"],
    data(){
        return {
            message:"hello"
        }
    }
});
var app = new Vue({
    el:"#app",
    data:{
        todos:[
            {
                text:"BREAKFAST",
                done:true
            },{
                text:"LUNCH",
                done:false
            },{
                text:"DINNER",
                done:false
            },
        ]
    }
})
```
* html的部分，就可以用"todo-list"這個標籤來實現這個component
```htmlembedded=
<div id="app" v-cloak>
    <todo-list :todoss="todos"></todo-list>
</div>
```

### > Vue插槽
* 用"slot標籤，來dynamic impot other component
* 以下為javascript部分
* v-slot 是針對裡面定義name

```javascript
Vue.component('todo-item', {
    props: {
        title: String,
        del: {
            type: Boolean,
            default: false,
        },
    },
    template: `
    <li>
        <slot name="pre-icon" :value="value">默认前置</slot>
        <span v-if="!del">{{title}}</span>
        <span v-else style="text-decoration: line-through">{{title}}</span>
        <slot name="suf-icon" :value="value">默认后置</slot>
        <button v-show="!del" @click="handleClick">删除</button>
    </li>
  `,
    data: function() {
        return {
            value: "Item"
        }
    },
    methods: {
        handleClick(e) {
            console.log('点击删除按钮')
            this.$emit('delete', this.title)
        }
    },
})
Vue.component('todo-list', {
    template: `
    <ul>
      <slot></slot>
    </ul>
  `,
    data: function() {
        return {

        }
    },
})
```

* 以下為html部分
```htmlembedded=
<div id="app">
    <div :id="message"></div>
    <todo-list>
        <todo-item @delete="handleDelete" v-for="item in list" :title="item.title" :del="item.del">
            <template v-slot:pre-icon="{value}">
                <span>前置 {{value}}</span>
            </template>
            <template v-slot:suf-icon="item">
                <span>后置 {{item.value}}</span>
            </template>
        </todo-item>
    </todo-list>
</div>
```

### > Vue語法糖
* "v-bind:checked" => ":checked"
* "v-on:change" => "@change"

### > 非同步更新
* 方法ㄧ: 加上.sync可以達到非同步更新
* 方法二: 用@update
```htmlembedded=
<SyncT :show.sync="valueChild" ><SyncT>
<SyncT :show="valueChild" @update:show = "val => valueChid = val"></SyncT>
```

* 非同步更新, 可以用emit, set
```javascript
export default{
    name: "SyncT"
    props:["show"],
    methods: {
        closeDiv(){
            this.$emit('update:show', false); //觸發input事件, 並傳入false
            this.$set(this.show, 1);
        }
    }
}

```

### > 非同步async await
* p.s. 新的瀏覽器才支持(ES7)
* 要搭配 Promise
*
```javascript
function sleep(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 5000);
    });
}

async function sample(){
    // aysnc好處是可以順順地往下寫，不用寫then去接
    await sleep();
    console.log("alert 5 second");
    await sleep();
    console.log("alet 10 second");
    // 可以適用於以下情境
    for(let i = 0; i < 10; i++){
        let data = await axios();
        if(data.ret  'WAITTING'){
            await sleep();
        } else {
           return data; 
        }
    }
}
```

### > 數據驅動
![](https://i.imgur.com/xEGpCj9.png)

* 千萬不要更改DOM的行為

![](https://i.imgur.com/alDUoaE.png)

### > 狀態vs屬性
* data vs props

### 
![](https://i.imgur.com/VZgYHlt.png)


### > data必須做成return
```javascript
export default {
  name: 'app',
  components: {
    TodoItem,
    TodoList
  },
  data() {
    return {
      message: 'hello world',
      list: [{
          title: '课程1',
          del: false
      }, {
          title: '课程2',
          del: true
      }],
    }
  }
}
```

### > 雙向綁定
* v-model
```htmlembedded=
<input v-model="message">
```

### > 虛擬DOM
![](https://i.imgur.com/m8l8EEg.png)
* JQuery 維護不易(如上圖)

![](https://i.imgur.com/UbSbRlP.png)

![](https://i.imgur.com/GrYdpNL.png)
* 利用虛擬DOM來解決渲染慢的問題

![](https://i.imgur.com/uYmsMin.png)
* 渲染地圖
* 只比在同一個層級的dom節點


![](https://i.imgur.com/QmqKKye.png)
![](https://i.imgur.com/U3srByO.png)

# Vue 第二堂課
### > 計算屬性(computed)
* 減少模板中計算邏輯
* 數據緩存
* 必須是響應式

```htmlembedded=
<p>Reversed message1: "{{ reversedMessage1 }}"</p>
<p>Reversed message2: "{{ reversedMessage2() }}"</p> // 相當不建議在裡面寫function
<p>{{ now }}</p>
<button @click="() => $forceUpdate()">forceUpdate</button>
<br />
<input v-model="message" />
```
* 上述有兩個對照，一個適用computed, 另一個是用method
* 在打字的時候,

```javascript
export default {
  data() {
    return {
      message: "hello vue"
    };
  },
  computed: {
    // 计算属性的 getter
    reversedMessage1: function() {
      console.log("执行reversedMessage1");
      return this.message
        .split("")
        .reverse()
        .join("");
    },
    now: function() {
      return Date.now();
    }
  },
  methods: {
    reversedMessage2: function() {
      console.log("执行reversedMessage2");
      return this.message
        .split("")
        .reverse()
        .join("");
    }
  }
};
```


### > 偵聽器(watch)
* 可執行任何邏輯(ajax, dom操作)
* 更加靈活

```htmlembedded=
<div>
    {{ $data }}
    <br />
    <button @click="() => (a += 1)">a+1</button>
</div>
```

```javascript
export default {
  data: function() {
    return {
      a: 1,
      b: { c: 2, d: 3 },
      e: {
        f: {
          g: 4
        }
      },
      h: []
    };
  },
  watch: {
    a: function(val, oldVal) {
      this.b.c += 1;
      console.log("new: %s, old: %s", val, oldVal);
    },
    "b.c": function(val, oldVal) {
      this.b.d += 1;
      console.log("new: %s, old: %s", val, oldVal);
    },
    "b.d": function(val, oldVal) {
      this.e.f.g += 1;
      console.log("new: %s, old: %s", val, oldVal);
    },
    e: {
      handler: function(val, oldVal) {
        this.h.push("😄");
        console.log("new: %s, old: %s", val, oldVal);
      },
      deep: true // 代表，可以監聽他以下的child node (ex: e, g)
    },
    h(val, oldVal) {
      console.log("new: %s, old: %s", val, oldVal);
    } // 另一種寫法而已
  }
};
```

### > Computed vs Watch
* computed能做的watch一定可以
* 能用computed就用computed

* 這部分不太懂，之後再重聽一遍（或是寫成部落格分析）

### > 生命週期: 各個階段
![](https://i.imgur.com/ZHBrDjS.png)

* created: 創虛擬節點
* mounted: 虛擬節點掛載(渲染到DOM物件)
* updated: 響應式數據 導致的更新

![](https://i.imgur.com/999l7FB.png)
* 因為mounted不敢確保所有節點都渲染完畢，所以新增nextTick來等一下
* 可以在裡面的function去訪問DOM節點

#### 創建階段
![](https://i.imgur.com/QztXRny.png)

#### 更新階段
![](https://i.imgur.com/YJlv9MQ.png)

#### 銷毀階段
![](https://i.imgur.com/BhrDPoV.png)


### > 函數式組件
* 無狀態、無實例、沒有this, 無生命週期
* 組件的來源都是由context傳遞

```htmlembedded=
<template functional>
    <div>
       {{ props }} 
    </div>
</template>
```

* 不太懂.....

### > 各式各樣指令
* v-text: 能把裡面的text給覆蓋掉
* v-html: 傳進去可以是html標籤，可以轉成DOM
* v-show: boolean, 控制顯示
* v-if, v-else
* v-on: 事件處理
* v-model: 雙重綁定
* v-pre: 後面不會被編譯
* v-once: 只渲染一次

### > 自定義指令(directive)
```javascript
export default {
  directives: {
    appendText: {
      bind() {
        console.log("bind");
      },
      inserted(el, binding) {
        el.appendChild(document.createTextNode(binding.value));
        console.log("inserted", el, binding);
      },
      update() {
        console.log("update");
      },
      componentUpdated(el, binding) {
        el.removeChild(el.childNodes[el.childNodes.length - 1]);
        el.appendChild(document.createTextNode(binding.value));
        console.log("componentUpdated");
      },
      unbind() {
        console.log("unbind");
      }
    }
  },
  data() {
    return {
      number: 1,
      show: true
    };
  }
};
```
生命週期勾勾
![](https://i.imgur.com/qkZIM27.png)

### > template 跟JSX區別
* templatec
    * 語版語法: HTML 的延伸
    * 數據綁定(雙大掛號)

* jsx
    * javascript 語法延伸
    * 數據綁定用單引號

![](https://i.imgur.com/raoag5Q.png)
![](https://i.imgur.com/iSIKrpk.png)
* 不管怎麼寫，都會轉譯成下面的那個

### > createElement
* 創造虛擬DOM的一個function，通常也會在render裡面傳入這個function當作參數

### > Vuex
* 單向數據流的概念
* 防止直接操作DOM物件
* 有分成三個部分
    * Action
    * View
    * State
* 多個component share same state, 單向數據流的方式會被破壞


![](https://i.imgur.com/f1QcZNW.png)
* Vuex跟Vue components是互相獨立的
* 
