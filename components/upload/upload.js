import React, { Component, createRef } from "react";
import cls from "classnames";
import PropTypes from "prop-types";
import { formatFileSize } from '../utils'
import Message from '../message'
import Progress from '../progress'
// 上传 对应 进度条属性 的状态
const UPLOAD_STATUS = {
  ERROR: "error",
  SUCCESS: "success",
  PROGRESS: "progress",
  ABORT: "warning",
  TIMEOUT: "warning"
};
const uploadFileType = "file";
const uploadImageType = "image";
const uploadFileTypeNames = {
  [uploadFileType]: "文件",
  [uploadImageType]: "图片"
};
// 默认图片上传文件后缀名限制
const imageReg = /\/(?:jpeg|jpg|png|gif|svg)/i;

class Upload extends Component {
  constructor(props) {
    super(props);
    this.fileRef = createRef();
  }
  state = {
    uploadList: [],
  };
  static defaultProps = {
    prefixCls: "deer-ui-upload",
    multiple: false, //是否允许多选
    maxSize: 1024, //上传文件大小限制
    onSelect: () => {},
    onComplete: () => {},
    onStart: () => {},
    onTimeOut: () => {},
    onError: () => {},
    name: "file",
    showUploadList: true,
    typeName: uploadFileTypeNames[uploadFileType],
    type: uploadFileType, //上传的文件类型 图片 还是 文件
  };
  static propTypes = {
    prefixCls: PropTypes.string.isRequired,
    multiple: PropTypes.bool,
    maxSize: PropTypes.number,
    onComplete: PropTypes.func,
    onSelect: PropTypes.func,
    onStart: PropTypes.func,
    onTimeOut: PropTypes.func,
    onError: PropTypes.func,
    name: PropTypes.string,
    showUploadList: PropTypes.bool
  };

  _onSelect = () => {
    this.fileRef.current.click();
  };

  onSelect = () => {
    const files = [...this.fileRef.current.files];
    files.forEach((file, index) => {
      const cover =
          (this.props.type === uploadImageType && this.getUrl(file)) || "";
      const fileInfo = {
        name: file.name,
        size: file.size,
        type: file.type,
        progress: 0,
        status: UPLOAD_STATUS.PROGRESS,
        cover
      };
        if (
          (this.props.beforeUpload && !this.props.beforeUpload(fileInfo)) ||
          !this.defaultBeforeUpload(fileInfo)
        ) {
          return;
        }
      const uploadList = [...this.state.uploadList];
      uploadList.push(fileInfo);
      this.setState(
        {
          uploadList
        },
        () => {
          this.onUploadFile(fileInfo, index);
        }
      );
    });
    
    this.props.onSelect(this.state.uploadList);
  };

  changeUploadStatus = (status, index) => {
    const uploadList = [...this.state.uploadList];
    uploadList[index].status = status;

    this.setState({ uploadList, uploading: false });
  };

  isImage = type => {
    return imageReg.test(type);
  };

  defaultBeforeUpload = ({ size, type }) => {
    const { maxSize, type: uploadType } = this.props;
    const imageType = type.split("/").pop();

    if (uploadType === uploadImageType && !this.isImage(type)) {
      Message.error(`${this.typeName} 不支持 ${imageType} 格式`);
      return false;
    }

    if (maxSize && typeof maxSize === "number") {
      const fileSize = size / 1024;
      if (fileSize > maxSize) {
        Message.error(
          `${this.typeName} 最大支持 ${formatFileSize(maxSize * 1024)}`
        );
        return false;
      }
    }
    return true;
  };

  onUploadFile = (file, index) => {
    const { name, action } = this.props;
    const formData = new FormData();
    const xhr = new XMLHttpRequest();
    const newFile = new Blob([file]);
    formData.append(name, newFile);

    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          const res = JSON.parse(xhr.responseText);
          this.changeUploadStatus(UPLOAD_STATUS.SUCCESS, index);
          this.props.onComplete(res);
        } else {
          this.changeUploadStatus(UPLOAD_STATUS.ERROR, index);
          this.props.onError();
        }
      }
    };

    xhr.onloadstart = () => {
      this.changeUploadStatus(UPLOAD_STATUS.PROGRESS, index);
      this.props.onStart();
    };

    xhr.onerror = err => {
      this.changeUploadStatus(UPLOAD_STATUS.ERROR, index);
      this.props.onError(err);
    };

    xhr.onabort = err => {
      this.changeUploadStatus(UPLOAD_STATUS.ABORT, index);
      this.props.onAbort(err);
    };

    xhr.ontimeout = err => {
      this.changeUploadStatus(UPLOAD_STATUS.TIMEOUT, index);
      this.props.onTimeOut(err);
    };

    xhr.onloadend = e => {
      this.setState({ uploading: false });
    };

    xhr.upload.onprogress = e => {
      const { loaded, total } = e;
      const progress = Math.round((loaded * 100) / total);
      const uploadList = [...this.state.uploadList];
      uploadList[index].progress = progress;
      uploadList[index].status = UPLOAD_STATUS.PROGRESS;
      this.props.onProgress(e, progress);
      this.setState({ uploadList });
    };

    xhr.open("POST", action, true);
    xhr.send(formData);
  };

  getUrl = (file)=> {
    return window.URL.createObjectURL(file);
  }
  onPreviewCover = cover => () => {
    // Modal.info({
    //   title: "预览",
    //   showMask: true,
    //   okText: "关闭",
    //   content: (
    //     <div className={`${this.props.prefixCls}-preview`}>
    //       <img src={cover} />
    //     </div>
    //   )
    // });
    
    // this.props.onPreview(cover);
  };

  render() {
    const {
      prefixCls,
      className,
      maxSize,//eslint-disable-line
      onComplete,  //eslint-disable-line
      onStart, //eslint-disable-line
      onTimeOut, // eslint-disable-line
      typeName, // eslint-disable-line
      children,
      accept,
      multiple,
      showUploadList,
      type,
      ...attr
    } = this.props;
    const { uploadList } = this.state;
    return (
      <div className={cls(prefixCls, className)} {...attr}>
        <input
          type="file"
          hidden
          multiple={multiple}
          accept={accept}
          ref={this.fileRef}
          onChange={this.onSelect}
        />
        <div className={cls(`${prefixCls}-inner`)} onClick={this._onSelect}>
          {children}
        </div>
        {showUploadList && (
          <ul className={cls(`${prefixCls}-upload-list`)}>
            {uploadList.map(
              ({ name, size, progress, status, cover }, index) => {
                const hasCover = type === uploadImageType && cover;
                return (
                  <li
                    key={index}
                    className={cls(`${prefixCls}-upload-item`, {
                      [`${prefixCls}-upload-item-has-cover`]: hasCover
                    })}
                  >
                    {hasCover && (
                      <div
                        className={cls(`${prefixCls}-upload-item-cover`)}
                        onClick={this.onPreviewCover(cover)}
                        style={{
                          backgroundImage: `url(${cover})`
                        }}
                      />
                    )}
                    <div className={cls(`${prefixCls}-upload-item-content`)}>
                      <div
                        className={cls(`${prefixCls}-upload-item-file-info`)}
                      >
                        <span>{name}</span>
                        <span>/</span>
                        <span>{formatFileSize(size)}</span>
                      </div>
                      <Progress
                        percent={progress}
                        type={status}
                        className={`${prefixCls}-upload-item-progress`}
                      />
                    </div>
                  </li>
                );
              }
            )}
          </ul>
        )}
      </div>
    );
  }
}

export default Upload;
