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

class Slider extends Component {
  constructor({ min, max, value, onChange, tooltip, style }) {
    super({ min, max, value, onChange, tooltip, style });
  }

  render() {
    return <>
      <input ref={el => {this.__el = el;}}
             className={ this.props.tooltip ? "slider tooltip" : "slider" }
             style={ this.props.style }
             type="range"
             min={ this.props.min }
             max={ this.props.max }
             value={ this.props.value }
             onInput={() => {
               this.__el.setAttribute('value', this.value);
               if (this.props.onChange) {
                 this.props.onChange(this.value);
               }
             }} />
    </>;
  }
}

export default Slider;
