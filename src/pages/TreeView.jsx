import React, { Component } from "react";
import NavBar from "../components/NavBar";
class TreeNode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nodeName: this.props.nodeData.name,
      isEditing: false,
      contextMenuVisible: false,
      contextMenuPosition: { top: 0, left: 0 },
    };

    this.nodeRef = React.createRef();
  }

  componentDidMount() {
    document.addEventListener("click", this.handleHideContextMenu);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.handleHideContextMenu);
  }

  handleEdit = () => {
    this.setState({ isEditing: true, contextMenuVisible: false });
  };

  handleSave = () => {
    this.props.onNodeNameChange(this.props.nodeData.id, this.state.nodeName);
    this.setState({ isEditing: false });
  };

  handleDelete = () => {
    this.props.onNodeDelete(this.props.nodeData.id);
  };

  handleContextMenu = (e) => {
    e.preventDefault();
    const clickX = e.clientX;
    const clickY = e.clientY;

    this.setState({
      contextMenuVisible: true,
      contextMenuPosition: { top: clickY, left: clickX },
    });
  };

  handleAddSubnode = () => {
    this.props.onNodeAdd(this.props.nodeData.id);
    this.setState({ contextMenuVisible: false });
  };

  handleHideContextMenu = (e) => {
    if (!this.nodeRef.current.contains(e.target)) {
      this.setState({ contextMenuVisible: false });
    }
  };

  render() {
    const { nodeData, onNodeAdd } = this.props;
    const { nodeName, isEditing, contextMenuVisible, contextMenuPosition } =
      this.state;

    return (
      <div className=" w-11/12 flex flex-row justify-center">
        <div className="">
          <div
            ref={this.nodeRef}
            className=""
            onContextMenu={this.handleContextMenu}
            onBlur={this.handleHideContextMenu}
          >
            {isEditing ? (
              <div className="flex items-center gap-4">
                <input
                  className="text-black  border-2 h-10 w-full  border-blue-500 rounded-xl ps-3"
                  type="text"
                  value={nodeName}
                  onChange={(e) => this.setState({ nodeName: e.target.value })}
                />
                <button
                  className="border-b-2 border-white "
                  onClick={this.handleSave}
                >
                  Guardar
                </button>
              </div>
            ) : (
              <div className="w-80 flex justify-center text-center my-1">
                <span className="border-2 border-blue-400 m-2  w-10/12 md:w-full">
                  {nodeName}
                </span>
              </div>
            )}

            {contextMenuVisible && (
              <div
                className="bg-blue-500  flex flex-col justify-center items-center p-3 text-white font-medium gap-3 rounded-xl"
                style={{
                  position: "absolute",
                  top: contextMenuPosition.top + "px",
                  left: contextMenuPosition.left + "px",
                  zIndex: 1,
                }}
              >
                <button onClick={this.handleEdit}>Editar</button>
                <button
                  className="border-y py-1 border-gray-600 w-full"
                  onClick={this.handleDelete}
                >
                  Eliminar
                </button>
                <button onClick={this.handleAddSubnode}>Agregar Subnodo</button>
              </div>
            )}

            {nodeData.children && nodeData.children.length > 0 && (
              <div className="text-white">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-end",
                  }}
                >
                  {nodeData.children.map((child) => (
                    <TreeNode
                      key={child.id}
                      nodeData={child}
                      onNodeAdd={onNodeAdd}
                      onNodeNameChange={this.props.onNodeNameChange}
                      onNodeDelete={this.props.onNodeDelete}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

class TreeView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      treeData: {
        id: 1,
        name: "NODO",
        border: "1px solid gray",
        children: [],
      },
    };
  }
  handleNodeAdd = (parentId) => {
    const newNode = {
      id: Date.now(),
      name: "Nodo",
      children: [],
    };

    this.setState((prevState) => {
      const updatedTreeData = this.updateTree(
        prevState.treeData,
        parentId,
        newNode
      );
      return { treeData: updatedTreeData };
    });
  };

  handleAddRootChild = () => {
    if (this.state.treeData.children.length === 0) {
      this.handleNodeAdd(this.state.treeData.id);
    }
  };

  handleNodeNameChange = (nodeId, newName) => {
    this.setState((prevState) => {
      const updatedTreeData = this.updateNodeName(
        prevState.treeData,
        nodeId,
        newName
      );
      return { treeData: updatedTreeData };
    });
  };

  handleNodeDelete = (nodeId) => {
    this.setState((prevState) => {
      const updatedTreeData = this.deleteNode(prevState.treeData, nodeId);
      return { treeData: updatedTreeData };
    });
  };

  updateTree = (tree, parentId, newNode) => {
    if (tree.id === parentId) {
      return {
        ...tree,
        children: [...tree.children, newNode],
      };
    }

    return {
      ...tree,
      children: tree.children.map((child) =>
        this.updateTree(child, parentId, newNode)
      ),
    };
  };

  updateNodeName = (tree, nodeId, newName) => {
    if (tree.id === nodeId) {
      return {
        ...tree,
        name: newName,
      };
    }

    return {
      ...tree,
      children: tree.children.map((child) =>
        this.updateNodeName(child, nodeId, newName)
      ),
    };
  };

  deleteNode = (tree, nodeId) => {
    if (tree.id === nodeId) {
      return null;
    }

    return {
      ...tree,
      children: tree.children
        .filter((child) => child.id !== nodeId)
        .map((child) => this.deleteNode(child, nodeId)),
    };
  };

  render() {
    const showAddButton = this.state.treeData.children.length === 0;

    return (
      <>
        <NavBar></NavBar>
        <div className="mx-auto container my-5 flex justify-center">
          <div className="w-11/12 md:w-1/2 m-1">
            <div className="flex h-[700px] justify-center rounded-3xl bg-slate-700 items-start text-white ">
              {showAddButton && (
                <button
                  className="flex  items-center text-xs md:text-sm border border-blue-500 h-10 m-2 ml-6 md:m-0 w-40 bg-blue-500 text-white rounded-lg py-2 px-4 transition duration-300 ease-in-out hover:scale-110"
                  onClick={this.handleAddRootChild}
                >
                  Agregar Nodo
                </button>
              )}
              <TreeNode
                nodeData={this.state.treeData}
                onNodeAdd={this.handleNodeAdd}
                onNodeNameChange={this.handleNodeNameChange}
                onNodeDelete={this.handleNodeDelete}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default TreeView;
