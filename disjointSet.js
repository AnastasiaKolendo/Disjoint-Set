
class Node {
    constructor() {
        this.parent = parent;
        this.ranank = 1;
    }
}

class DisjointSet {
    constructor() {
        this.elementNodes = {};
        this.numberOfSets = 0;
    }

    add(element) {
        if (Object.keys(elementNodes).contains(element)) {
            return false;
        }
        elementNodes.put(element, new Node());
        numberOfSets++;
        return true;
    }

    getRoot(element) {
        let node = elementNodes.get(element);
        if (node == null) {
            node = new Node();
            elementNodes.put(element, node);
            numberOfSets++;
            return node;
        }

        while (node.parent != node) {
            let parent = node.parent;
            node.parent = parent.parent;
            node = parent;
        }
        return node;
    }

    joinSets(element1, element2) {
        let root1 = getRoot(element1);
        let root2 = getRoot(element2);
        if (root1 == root2) {
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
            numberOfSets--;
            return true;
        }
    }

    elementsAreInOneSet(element1, element2) {
        return getRoot(element1) == getRoot(element2);
    }

    getNumberOfSets() {
        return numberOfSets;
    }
}
