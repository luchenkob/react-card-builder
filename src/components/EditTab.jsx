import React, { Component } from "react";

class EditTab extends Component {
  constructor(props) {
    super(props);
  }

  toggle = () =>{
    const { toggle, name } = this.props;
    toggle(name);
  }

  render() {
    const { isActive, content, onClose, title, isHided } = this.props;

    return (
      <div className={`cta-edittab ${isActive ? 'active' : ''} ${isHided ? 'd-none' : ''}`}>
        <div className="cta-edittab-toggler" onClick={this.toggle}><i className="cta-edittab-arrow icon-arrow-down"></i>{title}</div>
        <div className="cta-edit-tab-close" onClick={onClose}><i className="icon-close"></i></div>
        <div className="cta-edittab-content">{content}</div>
      </div>
    );
  }
}

export default EditTab;