import React from "react";

class TabPane extends React.Component {
  //   constructor(props) {
  //     super(props);
  //   }

  render() {
    const { children, arr, visible } = this.props;
    if (!visible) {
      return null;
    }
    return (
      <div className="TabPane" {...arr}>
        {children}
      </div>
    );
  }
}

export default TabPane;
