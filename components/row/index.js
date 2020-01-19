import React, { PureComponent } from 'react';
import PropTypes from "prop-types";
import cls from "classnames";

class Row extends PureComponent {
    static defaultProps = {
        prefixCls: "deer-ui-row",
        gutter: 0,
    }

    static propTypes = {
        prefixCls: PropTypes.string.isRequired,
        gutter: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        align: PropTypes.string
    }
    render() {
        const { children, style,gutter,className,align,prefixCls,...attr } = this.props;
        const rowStyle = gutter ? {
            marginLeft: -gutter / 2,
            marginRight: -gutter / 2
        } : {};
        return (
            <div className={cls(className,prefixCls,align)} style={{
                ...style,
                ...rowStyle
            }} {...attr}>
                {
                    React.Children.map(children,(item,index) => {
                        return React.cloneElement(item,{
                            gutter,
                            key: index
                        })
                    })
                }
            </div>  
        )
    }
}

export default Row;
