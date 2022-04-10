---
sidebar_position: 1
title: Vim 相關設定
---
- 模式介紹
    - insert mode
    - visual mode

- 編輯模式( insert mode）
    - 如何退出編輯模式 control + c
    - 如何進入編輯模式 i, a, s

- 如何
    - redo: .
    - undo: u
    - un un do: control + r

- 其他常用指令
  - 

- 各式移動方式
    - 快速往左b
    - 快速往右w
    - 上下左右h, l, j, k
    - 快速往後面某個字 f + .......
    - 在空行中移動shift + [, ]
    - 行尾: 0
    - 行頭: $
    - 行頭: 非空白字元: ^
    - 框框尾巴 %
    - 跳到區塊頭/ 尾: [{, ]}

其他：

- 補字技巧control + n
- 選擇行後，跳到框框尾巴選擇整個block
- control + n 來填補字
- 搜尋字: /
    - 搜尋完之後用n, N來找尋資料
- 搜尋目前指導的單字
- 往前往後排版shift + <, >
- :%s/original/replaced/g
- gg最上面
- G最下面
- 跳至哪一行:
- 看log時，快速往上往下

---

## > 常用指令
o 跳下一行並編輯

u 回復上個動作

a 後一個字元編輯

## > Reference:

[我的.vimrc，代码完成基于YcmCompleteMe版 - zhoutk - SegmentFault](https://segmentfault.com/a/1190000002662054)

[vim编辑器技巧备忘（初级-中级） | Sean's Notes](http://seanlook.com/2014/08/07/vim-tips/)

[[vim ] 學習vim的心法與攻略 - 看板 Editor - 批踢踢實業坊](https://www.ptt.cc/bbs/Editor/M.1264056747.A.885.html)

[[vim ] 學習vim的心法與攻略 - 看板 Editor - 批踢踢實業坊](https://www.ptt.cc/bbs/Editor/M.1264056747.A.885.html)

## > 我的客製化 `.vimrc`

```shell
"#######################################################
" Color
set t_Co=256
colo torte
set cursorline
"set cursorcolumn
set hlsearch
hi CursorLine cterm=none ctermbg=darkgray
"hi CursorColumn cterm=none ctermbg=DarkMagenta ctermfg=White
"hi Search cterm=reverse ctermbg=none ctermfg=none
hi Search cterm=none ctermbg=red

"#######################################################
syntax enable
set number
set noruler
set ignorecase
set smartcase
set incsearch
set cindent
set expandtab
set tabstop=4
set softtabstop=4
set shiftwidth=4
set smarttab
set confirm
set backspace=indent,eol,start
set history=500
set showcmd
set showmode
set nowrap
set autowrite
set mouse=a

" ( 預設就有 ) 顯示右下角的 行,列 目前在文件的位置 % 的資訊
set ruler

" don't redraw while executing macros (good performance config)
set lazyredraw
```
