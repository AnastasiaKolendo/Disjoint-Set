
class ElementNode {
    constructor() {
        this.parent = null;
        this.rank = 1;
    }
}

class DisjointSet {
    constructor() {
        this.elementNodes = {};
    }

    createSetWithSingleElement(element) {
        if (Object.keys(elementNodes).contains(element)) {
            return false;
        }

        elementNodes[element] = new ElementNode();
        return true;
    }

    findSetRoot(element) {
        let node = elementNodes[element];
        while (node.parent !== null) {
            let parent = node.parent;
            node.parent = parent.parent;
            node = parent;
        }
        return node;
    }

    mergeSets(element1, element2) {
        let root1 = findSetRoot(element1);
        let root2 = findSetRoot(element2);
        if (root1 === root2) {
            return false;
        } else {
            if (root1.rank > root2.rank) {
                root2.parent = root1;
            } else if (root1.rank < root2.rank) {
                root1.parent = root2;
            } else {
                root1.parent = root2;
                root2.rank++;
            }
            return true;
        }
    }

    elementsBelongToSameSet(element1, element2) {
        return findSetRoot(element1) === findSetRoot(element2);
    }
}
