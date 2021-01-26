/**
This file is licensed under the MIT license

Copyright (c) 2021 David Morrissey

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
 */

import { Component } from "react";
import Button from "./Button";

class DialogButtons extends Component {
  static ALIGN = {
    LEFT: 0,
    RIGHT: 1,
    CENTRE: 2,
    CENTER: 2
  };
  static WIDTH = {
    AUTO: 0,
    BLOCK: 1
  };

  static TYPES = {
    SEPARATOR: null,

    // Defaults with "OK" and "Yes" emphasized over "Cancel" and "No"
    // This assumes the actions aren't "dangerous" and should encourage
    // the user to think before pressing
    OK: [Button.COLOR.PRIMARY, 'OK'],
    CANCEL: [null, 'Cancel'],
    YES: [Button.COLOR.PRIMARY, 'Yes'],
    NO: [null, 'No'],

    OK_PRIMARY: [Button.COLOR.PRIMARY, 'OK'],
    CANCEL_PRIMARY: [Button.COLOR.PRIMARY, 'Cancel'],
    YES_PRIMARY: [Button.COLOR.PRIMARY, 'Yes'],
    NO_PRIMARY: [Button.COLOR.PRIMARY, 'No'],

    OK_SECONDARY: [null, 'OK'],
    CANCEL_SECONDARY: [null, 'Cancel'],
    YES_SECONDARY: [null, 'Yes'],
    NO_SECONDARY: [null, 'No'],

    CLOSE: [Button.COLOR.PRIMARY, 'Close'],
    APPLY: [Button.COLOR.PRIMARY, 'Apply'],
    HELP: [null, 'Help'],
    NEXT: [Button.COLOR.PRIMARY, 'Next'],
    PREVIOUS: [null, 'Previous'],
    REVERT: [null, 'Revert'],

    ADD: [Button.COLOR.PRIMARY, 'Add'],
    DELETE: [null, 'Delete'],
    REMOVE: [null, 'Remove'],
  };

  /**
   *
   * @param buttons
   * @param align
   * @param onClick
   */
  constructor({ buttonTypes, onClick,
                align, containerWidth, buttonWidth, buttonSize }) {
    super({ buttonTypes, onClick,
            align, containerWidth, buttonWidth, buttonSize });
  }

  render() {
    let buttons = [];
    let buttonSize = ('buttonSize' in this.props && this.props.buttonSize != null) ?
        this.props.buttonSize : Button.SIZE.DEFAULT;

    for (let buttonType of this.props.buttonTypes) {
      if (buttonType == null) {
        // TODO: Insert a separator!!
      } else if (this.__isArray(buttonType)) {
        // icon??
        buttons.push(
            <Button
                color={buttonType[0]}
                title={buttonType[1]}
                size={buttonSize}
                onClick={(id, evt) => {
                  if (this.props.onClick) {
                    return this.props.onClick(id, evt)
                  }
                }}
            />
        );
      } else if (this.__isLiteralObject(buttonType)) {
        // {type: [type], ...} format
        buttons.push(
            <Button
                title={buttonType.type[1]}
                color={'color' in buttonType ? buttonType.color : buttonType.type[0]}
                state={'state' in buttonType ? buttonType.state : null}
                borderStyle={'borderStyle' in buttonType ? buttonType.borderStyle : null}
                size={'buttonSize' in buttonType ? buttonType.buttonSize : buttonSize}
                leftIcon={buttonType.leftIcon}
                rightIcon={buttonType.rightIcon}
                badge={buttonType.badge}
                style={buttonType.style}
                onClick={(id, evt) => {
                  if (this.props.onClick) {
                    return this.props.onClick(id, evt)
                  }
                }}
            />
        );
      } else {
        // a JSX element?
        buttons.push(buttonType);
      }
    }
    return <FIXME>
      { buttons }
    </FIXME>;
  }

  __isArray(a) {
    return (!!a) && (a.constructor === Array);
  }
  __isLiteralObject(a) {
    return (!!a) && (a.constructor === Object);
  }
}

export default DialogButtons;
