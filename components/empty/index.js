import React, { PureComponent } from 'react';
import cls from 'classnames'
import PropsTypes from 'prop-types'
import { EmptyIcon } from '../icon';
class Empty extends PureComponent {
    static propsTypes = {
        description: PropsTypes.string,
        height: PropsTypes.number
    }
    static defaultProps = {
        icon: <EmptyIcon />,
        height: 200,
        description: "暂无数据"
    }
    render() {
        const { height, description, icon, style, children,className,...attr} = this.props;
        return (
            <div className={cls('Empty', {[`${className}`]: className})} {...attr} style={{
                height,
                ...style
              }}>
                <div className="Empty-icon">
                    {icon}
                </div>
                <div className="Empty-des">
                    {description}
                </div>
                {children}
            </div>
        )
    }
}

export default Empty
