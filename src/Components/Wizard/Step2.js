import React, { Component } from 'react';
import './Wiz.css';
import {connect} from 'react-redux';
import updateImage from '../../redux/reducer'

class Step2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.setState({ img: this.props.img})
  }

  handleChange(value) {
    this.setState({ img: value })
  }

  render() {
    
    return (
      <div>
        <div className='wiz_input_container'>
          <div className='wiz_input_box'>
            <p>Image URL</p>
            <input style={{ width: "35vw" }} value={this.state.img} onChange={e => this.handleChange(e.target.value)} />
          </div>
        </div>
        {/* button needs to do something */}
        <button className='wiz_button wiz_prev_button' onClick={() => { 
          this.props.updateImage(this.state.img) 
          this.props.history.push('/wizard/step1')}}>Previous Step</button>
        {/* button needs to do something */}
        <button className='wiz_button wiz_step_button' onClick={() => {
          this.props.updateImage(this.state.img)
          this.props.history.push('/wizard/step3')
        }}>Next Step</button>
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  const {img} = reduxState;
  return {img}
};

export default connect(mapStateToProps, {updateImage})(Step2);