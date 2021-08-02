/**
 * 装载问题
 *
 * 有一批共有n个集装箱要装上两艘载重量分别为 c1 和 c2 的轮船，
 * 其中，集装箱 i 的重量为 wi ，且 (w1 + w2 +...+ wn) <= c1 + c2 。
 *
 * 确定是否有一个合理的装载方案可将这n个集装箱装上这两艘轮船。
 * 如果有，找出一种装载方案。
 */

var weight = [10, 40, 40]; // 集装箱的重量
var c1 = 50; c2 = 50; // 两艘轮船的载重
var n = weight.length; // 集装箱数量

var nodeArray = [{
    value: 0, // 当前装载的货物重量
    volume: c1, // 剩余可装载重量
    path: [], // 选择方案
    notValue: 0 // 没有装载的货物重量
}];

var deep, len, i, j, k, path, newPath;

// 一层层深入
for (deep = 0; deep < n; deep++) {
    len = nodeArray.length;

    for (i = 0; i < len; i++) {

        // 如果左子树可以
        if (nodeArray[i].volume >= weight[deep]) {
            newPath = nodeArray[i].path.slice(0);
            newPath.push(1);
            nodeArray.push({
                value: nodeArray[i].value + weight[deep],
                volume: nodeArray[i].volume - weight[deep],
                path: newPath,
                notValue: nodeArray[i].notValue
            });
        }

        // 右子树一定可以
        nodeArray[i].path.push(0);
        nodeArray[i].notValue += weight[deep];
    }

}

console.log('第一艘轮船的全部装载方案', nodeArray);

j = 0
for (i = 0; i < nodeArray.length; i++) {
    // notValue <= c2 的就可以了
    if (nodeArray[i].notValue <= c2) {

        console.log('\n第' + (++j) + "种解决方案");
        console.log('第一艘轮船装载为：' + nodeArray[i].value);
        console.log('第二艘轮船装载为：' + nodeArray[i].notValue);

        path = "";
        for (k = 0; k < nodeArray[i].path.length; k++) {
            path += "  第" + ['2', '1'][nodeArray[i].path[k]] + "艘" + weight[k];
        }
        console.log("具体方案:" + path + "]");
    }
}
