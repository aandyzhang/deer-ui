import React, { PureComponent } from 'react';
import PropTypes from "prop-types";
import cls from "classnames";

class Col extends PureComponent {
    static defaultProps = {
        prefixCls: "deer-ui-col",
        gutter: 0,
    }

    static propTypes = {
        prefixCls: PropTypes.string.isRequired,
        offset: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        span: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    }
    render() {
        const { span,prefixCls,offset,style,gutter,className,...attr} = this.props;
        const colStyle = gutter ? {
            paddingLeft: gutter / 2,
            paddingRight: gutter / 2,
          }
        : {};
        return (
            <div
            className={cls(
              prefixCls,
              { [`${prefixCls}-${span}`]: span },
              { [`${prefixCls}-offset-${offset}`]: offset },
              className
            )}
            style={{
              ...style,
              ...colStyle
            }}
            {...attr}
          >
            {this.props.children}
          </div>
        );
    }
}

export default Col;
