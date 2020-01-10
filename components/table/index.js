import React, { PureComponent } from "react";
import cls from "classnames";
import PropTypes from "prop-types";
import Spin from "../spin";
import Empty from "../empty";
import Checkbox from "../checkbox";

class Table extends PureComponent {
  state = {
    selectedRows: [], //选中行数组
    baseSelectedRows: [], //默认选中
    isSelectAll: false, //是否全选
  };
  static defaultProps = {
    prefixCls: 'deer-ui-table',
    dataSource: [],
    columns: [],
    loading: false,
    loadingTip: "",
    bordered: false,
    showHeader: true,
    hover: false,
    rowSelection: false,
    rowKey: 'key'
  };
  static propTypes = {
    prefixCls: PropTypes.string.isRequired,
    dataSource: PropTypes.array,
    columns: PropTypes.array,
    loading: PropTypes.bool,
    loadingTip: PropTypes.string,
    bordered: PropTypes.bool,
    showHeader: PropTypes.bool,
    hover: PropTypes.bool,
    rowKey: PropTypes.string,
    rowSelection: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.shape({
        getCheckboxProps: PropTypes.func,
        onChange: PropTypes.func
      })
    ])
  };
  renderLoading() {
    const { loading } = this.props;
    return loading ? <Spin /> : null;
  }
  onRowCheckboxChange = selectedRow => e => {
    const checked = e.target.checked;
    let selectedRows = [...this.state.baseSelectedRows]
    if(checked) {
      selectedRows.push(selectedRow)
    }else{
      selectedRows = selectedRows.filter(
        row => JSON.stringify(selectedRow) !== JSON.stringify(row)
      );
    }
    const selectedRowKeys = selectedRows.map(({ key }) => key);
    this.setState({
      selectedRows,
      baseSelectedRows: selectedRows
    });
    if (selectedRows.length < 1) {
      this.setState({
        isSelectAll: false
      });
    }
    if (this.props.rowSelection && this.props.rowSelection.onChange) {
      this.props.rowSelection.onChange(selectedRowKeys, selectedRows);
    }
  };

  get dataSource() {
    const { dataSource } = this.props;
    return dataSource;
  }

  //全选
  selectedAllChange = e => {
    const isSelectAll = e.target.checked;
    let selectedRows = [...this.dataSource].filter((item, index) => {
      return !this.rows[index];
    });

    const baseSelectedRows = [...this.state.baseSelectedRows];

    if (isSelectAll) {
      selectedRows.unshift(...baseSelectedRows);
    } else {
      selectedRows = [];
    }

    const selectedRowKeys = selectedRows.map(({ key }) => key);

    this.setState({
      isSelectAll,
      selectedRows,
      baseSelectedRows: selectedRows
    });
    if (this.props.rowSelection && this.props.rowSelection.onChange) {
      this.props.rowSelection.onChange(selectedRowKeys, selectedRows);
    }
  };
  render() {
    const {
      prefixCls,
      columns,
      loading,
      loadingTip,
      bordered,
      showHeader,
      hover,
      rowSelection,
      rowKey
    } = this.props;
    const { isSelectAll, selectedRows } = this.state;
    this.rows = {};
    return (
      <div className={`${prefixCls}`}>
        <Spin spinning={loading} tip={loadingTip}>
          <div
            className={cls(`${prefixCls}-header`, {
              [`${prefixCls}-header-hideHeader`]: !showHeader,
              [`${prefixCls}-header-noBottomLine`]: this.dataSource.length === 0
            })}
          >
            {rowSelection && (
              <div
                className={cls(`${prefixCls}-header-td`, {
                  [`${prefixCls}-header-td-bordered`]: bordered
                })}
              >
                <Checkbox
                  onChange={this.selectedAllChange}
                  checked={isSelectAll}
                />
              </div>
            )}
            {columns.map((item, index) => {
              return (
                <div
                  className={cls(`${prefixCls}-header-td`, {
                    [`${prefixCls}-header-td-bordered`]: bordered
                  })}
                  key={index}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className={`${prefixCls}-content`}>
            {this.dataSource.length > 0 ? (
              this.dataSource.map((item, index) => {
                const checkboxProps =
                  (rowSelection &&
                    rowSelection.getCheckboxProps &&
                    rowSelection.getCheckboxProps(item)) ||
                  {};
                this.rows[index] = checkboxProps.disabled || false;
                const isChecked =
                  selectedRows &&
                  !!selectedRows.find(row => {
                    return row[rowKey] === item[rowKey];
                  });
                return (
                  <div
                    className={cls(`${prefixCls}-content-tr`, {
                      [`${prefixCls}-content-tr-bordered`]: bordered,
                      [`${prefixCls}-content-tr-hover`]: hover
                    })}
                    key={item[rowKey]}
                  >
                    {rowSelection && (
                      <div
                        className={cls(`${prefixCls}-content-td`, {
                          [`${prefixCls}-content-td-bordered`]: bordered
                        })}
                      >
                        <Checkbox
                          checked={!checkboxProps.disabled && isChecked}
                          onChange={this.onRowCheckboxChange(item)}
                          {...checkboxProps}
                        />
                      </div>
                    )}
                    {columns.map(value => {
                      const { dataIndex, render } = value;
                      return (
                        <div
                          className={cls(`${prefixCls}-content-td`, {
                            [`${prefixCls}-content-td-bordered`]: bordered
                          })}
                          key={value.key}
                        >
                          {(render && render(item[dataIndex], item, index)) ||
                            item[dataIndex]}
                        </div>
                      );
                    })}
                  </div>
                );
              })
            ) : (
              <Empty />
            )}
          </div>
        </Spin>
      </div>
    );
  }
}

export default Table;
