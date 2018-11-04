// logic을 넣자
import React, { Component, PropTypes } from 'react';
import VideoLayout from '../../components/VideoLayout/VideoLayout';

let i = 0;

class VideoLayoutContainer extends Component {
  state = {
    tileList: [
      {
        x: 0,
        y: 1,
        w: 1,
        h: 1,
        i: '000',
        maxH: 2,
      }
    ],
    cols: 8,
    rows: 1,
    rowHeight: 150,
    // compactType: 'horizontal'
    // compactType: 'vertical'
  }

  constructor(props) {
    super(props);

    for(let j=0; j<10; j++) {
      this.addTile(i++);
    }
  }

  addTile = data => {
    const {
      tileList
    } = this.state;

    console.log('addTile', data);

    const tileData = {
      x: 1,
      y: 0,
      w: 1,
      h: 1,
      i: data.toString(),
      test: 'qweqw'
    }

    tileList.push(tileData);
    console.log('titleList', tileList)

    this.setState({
      tileList,
    });
  }

  upHeight = () => {
    const {
      tileList,
    } = this.state;

    const temp = tileList.map(tile => ({
      ...tile,
      maxH: tile.maxH + 1,
    }))
    this.setState({
      tileList: temp,
    })
  }

  onLayoutChange = (layout, ll) => {
    console.log('onLayoutChange', layout);
  }

  render() {
    const {
      tileList,
    } = this.state;

    return (
      <div>
        <button onClick={e => this.addTile(i++)}>click!!!!!</button>
        <VideoLayout {...this.state} {...this}/>
      </div>
    )
  }
}

VideoLayoutContainer.propTypes = {

}

export default VideoLayoutContainer;