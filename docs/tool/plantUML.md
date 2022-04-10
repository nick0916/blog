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
