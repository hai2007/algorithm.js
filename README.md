# 🔪 algorithm.js - 一些前端常用的算法实现合集

<p>
  <a href="https://hai2007.gitee.io/npm-downloads?interval=7&packages=@hai2007/algorithm"><img src="https://img.shields.io/npm/dm/@hai2007/algorithm.svg" alt="downloads"></a>
  <a href="https://packagephobia.now.sh/result?p=@hai2007/algorithm"><img src="https://packagephobia.now.sh/badge?p=@hai2007/algorithm" alt="install size"></a>
  <a href="https://www.jsdelivr.com/package/npm/@hai2007/algorithm"><img src="https://data.jsdelivr.com/v1/package/npm/@hai2007/algorithm/badge" alt="CDN"></a>
  <a href="https://www.npmjs.com/package/@hai2007/algorithm"><img src="https://img.shields.io/npm/v/@hai2007/algorithm.svg" alt="Version"></a>
  <a href="https://github.com/hai2007/algorithm.js/blob/master/LICENSE"><img src="https://img.shields.io/npm/l/@hai2007/algorithm.svg" alt="License"></a>
  <a href="https://github.com/hai2007/algorithm.js">
        <img alt="GitHub repo stars" src="https://img.shields.io/github/stars/hai2007/algorithm.js?style=social">
    </a>
</p>

## Issues
使用的时候遇到任何问题或有好的建议，请点击进入[issue](https://github.com/hai2007/algorithm.js/issues)，欢迎参与维护！

## How to use?
首先你需要通过命令行安装：

```bash
npm install --save @hai2007/algorithm
```

安装好了以后，然后引入你需要的算法：

- 基本的树结构位置生成算法

```js
import tree from '@hai2007/algorithm/tree.js';
```

[<< 查看文档](./apis/tree.md)

- 解析xhtml为json对象返回

```js
import xhtmlToJson from '@hai2007/algorithm/xhtmlToJson.js';
```

[<< 查看文档](./apis/xhtmlToJson.md)

- 设置或获取指定对象上字符串表达式对应的值

```js
import { evalExpress, getValue, setValue } from '@hai2007/algorithm/value.js';
```

[<< 查看文档](./apis/value.md)

- 把 SCSS 解析成 CSS 的算法实现

```js
import scss from '@hai2007/algorithm/scss.js';
```

[<< 查看文档](./apis/scss.md)

## Special attention

如果你希望一下子引入全部方法，可以有如下方式引入：

```js
import algorithm from '@hai2007/algorithm';
```

或

```html
<script src='https://cdn.jsdelivr.net/npm/@hai2007/algorithm@0'></script>
```

如果是node.js环境，请使用这种方式引入：

```js
const algorithm = require('@hai2007/algorithm');
```

## 算法思想

- 递归与分治策略

把一个规模为n的问题分解为k个规模较小的子问题，这些子问题相互独立且与原问题相同，递归的解这些子问题，然后把各个子问题的解合并得到原问题的解。

[<< 查看例子代码](./workbook/递归与分治策略)

- 动态规划

和分治法基本思想有共同的地方，不同的是子问题往往不是独立的，有时母问题要借助子问题的解来判断，因此把已经计算好的问题记录在表格中，后续如果需要查询一下，可以避免重复计算，这是动态规划的基本思想。

不过动态规划具体实现起来多种多样，不过都具有相同的填表格式，通常按照下面步骤设计算法：

1）找出最优解的性质，并刻画其结构特征；

2）递归的定义最优值；

3）以自底向上的方式计算出最优值；

4）通过计算最优值时刻意记录的判断结果来构造最优解。

可以使用该算法思想设计算法的问题一般会具有两个决定性的性质：

1）最优子结构性质；

2）子问题重叠性质。

[<< 查看例子代码](./workbook/动态规划)

- 备忘录算法

和上面的算法思想差不多，不同的是备忘录为每个解过的子问题建立备忘录以备需要的时候查看，避免了相同的问题计算多次。

一般来说，当一个问题的所有子问题都至少要解一次时，用动态规划比备忘录要好，因为不会有任务暂存且没有多余的计算；当子问题空间中部分问题不必解时，用备忘录比较好。

不过上面不是绝对的，这样说只是想区别一下两个思想的不同，具体的时候还是要根据业务场景来在保证可行的前提下选择更好的方法。

[<< 查看例子代码](./workbook/备忘录算法)

- 贪心算法

算法思想很简单，和字面意思一样，每次都选择对自己最有利的，不过这是有条件的，只有在满足条件下每次选择最有利自己的才可以获取最优解。

贪心选择性质和最优子结构性质是该思想最重要的性质：

1）贪心选择性质：所求问题的整体最优解可以通过一系列局部最优的选择达到。

2）最优子结构性质：当一个问题的最优解包含其子问题的最优解时，称此问题具有此性质。

[<< 查看例子代码](./workbook/贪心算法)

- 回溯法

说的直白点就是深度优先方式系统搜索问题的算法。

[<< 查看例子代码](./workbook/回溯法)

- 分支限界法

对比回溯法就很容易思考，用广度优先的办法，不断扩大当前节点的孩子为当前节点，主要是求解一个最优解，算法相比回溯法要简单些。

[<< 查看例子代码](./workbook/分支限界法)

开源协议
---------------------------------------
[MIT](https://github.com/hai2007/algorithm.js/blob/master/LICENSE)

Copyright (c) 2020-present [hai2007](https://hai2007.gitee.io/sweethome/) 走一步，再走一步。
