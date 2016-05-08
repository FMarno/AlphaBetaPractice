function node(children, value) {
    this.children = children;
    this.value = value;
}
e = new node([], 10);
f = new node([], 11);
h = new node([], 9);
i = new node([], 12);
l = new node([], 14);
m = new node([], 15);
o = new node([], 13);
p = new node([], 14);
t = new node([], 15);
u = new node([], 2);
w = new node([], 4);
x = new node([], 1);
z1 = new node([], 3);
z4 = new node([], 24);

d = new node([e, f], undefined);
g = new node([h, i], undefined);
k = new node([l, m], undefined);
n = new node([o, p], undefined);
s = new node([t, u], undefined);
v = new node([w, x], undefined);
z = new node([z1], undefined);
z3 = new node([z4], undefined);

c = new node([d, g], undefined);
j = new node([k, n], undefined);
r = new node([s, v], undefined);
y = new node([z, z3], undefined);

b = new node([c, j], undefined);
q = new node([r, y], undefined);

a = new node([b, q], undefined);

max = (p, c, i, arr) => Math.max(p, c);
min = (p, c, i, arr) => Math.min(p, c);

function minimaxValue(node, maxPicker) {
    calls++;
    if (node.value) {
        return node.value;
    }
    if (maxPicker) {
        return node.children.map(x => minimaxValue(x, false)).reduce(max);
    }
    return node.children.map(x => minimaxValue(x, true)).reduce(min);
}

function alphabetaValue(node, maxPicker, alpha, beta) {
    calls++;
    if (node.value) {
        return node.value;
    }
    if (maxPicker) {
        for (var x in node.children) {
            var value = alphabetaValue(node.children[x], false, alpha, beta);
            //            console.log(x + " : " + value);
            if (value > alpha) {
                alpha = value;
            }
            if (beta <= alpha) {
                return alpha;
            }
        }
        return alpha;
    } else {
        for (var x in node.children) {
            var value = alphabetaValue(node.children[x], true, alpha, beta);
            //            console.log(x + " : " + value);
            if (value < beta) {
                beta = value;
            }
            if (beta <= alpha) {
                return beta;
            }
        }
        return beta;
    }
}
console.log("MINIMAX");
calls = 0;
console.log("value - " + minimaxValue(a, true));
console.log("calls - " + calls);
console.log("ALPHA BETA PRUNING");
calls = 0;
console.log("value - " + alphabetaValue(a, true, -100, 100));
console.log("calls - " + calls);
