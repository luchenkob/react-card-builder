import React, { Component } from "react";
import Select from 'react-select';
import LightPreview from "../components/LightPreview";
import { TEMPLATES, LAYOUT_NAMES } from "../defines";

class TemplatesTab extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {

    const { behavior, chooseTemplate } = this.props;

    return (
      <div className="cta-tab-content">
        <div className="cta-tab active">
          <div className="cta-group bb-0">
            {TEMPLATES.map((template, i) => (
              <div className="mb-2" key={`tmpl-` + i} onClick={() => { chooseTemplate(i) }}>
                <LightPreview
                  isTemplate={true}
                  modal={this.modal}
                  isDesign={false}
                  behavior={behavior}
                  layoutName={LAYOUT_NAMES[0]}
                  data={template}
                  isActive={true} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default TemplatesTab;