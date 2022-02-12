

const Description = (props) => {
    return (
        <div className="mb-5 mt-2">
            <div className="title">Problem Description</div>
            <div className="description">
                <p >
                    Given the <span className="code">root</span> of a binary search tree and a node p in it, return the in-order successor of that node in the BST. If the given node has no in-order successor in the tree,
                    return <span className="code">null</span>.
                </p>
                <p>
                    The successor of a node p is the node with the smallest key greater than <span className="code">p.val</span>.
                </p>
            </div>
        </div>
    )
}


export default Description;