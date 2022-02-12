




const Example = (props) => {
    return (
        <div className="mb-5">
            <h6 className="title">Example 1</h6>
            <div className="code">
                Input: root = [2,1,3], p = 1 <br/>
                Output: 2 <br/>
                Explanation: 1's in-order successor node is 2. Note that both p and the return value is of TreeNode type.
            </div>
            <h6 className="title">Example 2</h6>
            <div className="code">
                Input: root = [5,3,6,2,4,null,null,1], p = 6 <br/>
                Output: null <br/>
                Explanation: There is no in-order successor of the current node, so the answer is null.
            </div>
        </div>
    )
}


export default Example;