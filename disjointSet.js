class DisjointSetNode {
    constructor(value) {
        this.value = value,
        this.children = {};
        this.rank = 1;
        this.parent = parent;
    }
}

class DisjointSe {
    constructor() {
        this.list = {};
        this.size = 0;
    }

    init(size){
        this.size = size;
        for (let index = 0; index < this.size; index++) {
            const disjointSetNode = new DisjointSetNode(index)
            this.list[index] = disjointSetNode;
            
        }
    }

    findRoot(x){
        if(this.list[x] && this.list[x].parent !== 1){
            return this.findRoot(this.list[x].parent)
        } else {
            return this.list[x]
        }
    }
}