import React, { Component } from "react";
import { EditorState, ContentState, convertFromHTML } from 'draft-js'
import { Editor } from "react-draft-wysiwyg";
import "../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
import { convertToRaw } from "draft-js";

export class EditorToolbarWhenFocused extends Component {
  constructor(props) {
    super(props);
    this.state = {
        editorState: EditorState.createWithContent(
          ContentState.createFromBlockArray(
            convertFromHTML(props.initials)
          )
        ),
      }
  }

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
    const rawContentState = convertToRaw(editorState.getCurrentContent());
    const markup = draftToHtml(rawContentState);
    this.props.editor(markup);
  };

  render() {
    const { editorState } = this.state;

    return (
      <Editor
        editorState={editorState}
        wrapperClassName="demo-wrapper"
        editorClassName="demo-editor"
        onEditorStateChange={this.onEditorStateChange}
      />
    );
  }
}
