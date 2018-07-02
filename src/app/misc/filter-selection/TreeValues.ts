export interface Tree<T> {
    val: T;
    children: Tree<T>[];
}

export function validValues<T>(tree: Tree<T>[], values: T[]): boolean {
    if (tree.length === 0 && values.length === 0) {
        return true;
    }
    if (tree.length === 0 || values.length === 0) {
        return false;
    }
    const treeVals = tree.map(x => x.val);
    const index = treeVals.findIndex(val => values[0] === val);
    if (index !== -1) {
        return validValues(tree[index].children, values.slice(1, values.length));
    } else {
        return false;
    }
}

export const timeOrderFilter: Tree<string>[] = [
    {
        val: 'new',
        children: []
    },
    {
        val: 'old',
        children: []
    }
];

export const timeConstraintFilter: Tree<string>[] = [
    {
        val: 'day',
        children: []
    },
    {
        val: 'week',
        children: []
    },
    {
        val: 'month',
        children: []
    },
    {
        val: 'year',
        children: []
    }
];

export const sizeOrderFilter: Tree<string>[] = [
    {
        val: 'most',
        children: timeConstraintFilter
    },
    {
        val: 'least',
        children: timeConstraintFilter
    }
];

export const followTypeFilter: Tree<string>[] = [
    {
        val: 'following',
        children: timeOrderFilter
    },
    {
        val: 'followers',
        children: timeOrderFilter
    }
];

export const tweetFilter: Tree<string>[] = [
    {
        val: 'recent',
        children: timeOrderFilter
    },
    {
        val: 'liked',
        children: sizeOrderFilter
    },
    {
        val: 'replied',
        children: sizeOrderFilter
    },
    {
        val: 'likes',
        children: timeOrderFilter
    }
];

export const userFilter: Tree<string>[] = [
    {
        val: 'follows',
        children: followTypeFilter
    },
    {
        val: 'tweets',
        children: tweetFilter
    }
];
