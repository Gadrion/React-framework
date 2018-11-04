/// 영상 Tile을 넣는 곳
import React, { Component, PropTypes } from 'react';
import './VideoLayout.scss';
import _ from "lodash";
import RGL, { WidthProvider } from "react-grid-layout";
import GridLayout from 'react-grid-layout';

const ReactGridLayout = WidthProvider(RGL);

class VideoLayout extends Component {
  static defaultProps = {
    className: "layout",
    // items: 5,
    // cols: 3
    onLayoutChange: function() {},
    // This turns off compaction so you can place items wherever.
    // verticalCompact: false
  };

  generateLayoutDOM(tileList) {
    return tileList.map((tileData) => {
      console.log('tileData.i', tileData.i);
      return (
        <div key={tileData.i} className="generate-dom"
          onMouseDown={drag => console.log('onMouseDown', drag)}
          data-grid={{...tileData}}
        >
          <span className="text"
          onMouseDown={drag => console.log('onMouseDown', drag)}
          >{tileData.i}</span>
        </div>
      );
    });
  }

  onLayoutChange(layout) {
    console.log('onLayoutChange', layout);
    // this.props.onLayoutChange(layout);
  }

  onBreakpointChange(breakpoint, cols) {
    console.log('breakpoint', breakpoint);
    console.log('cols', cols);
    // this.setState({
    //   breakpoint: breakpoint,
    //   cols: cols
    // });
  }

  render() {
    const {
      tileList,
    } = this.props;

    console.log('Layout tileList', tileList);

    return (
      <div
      // onMouseOut={e => {
      //   e.stopPropagation();
      //   e.preventDefault();
        
      //   const split = e.target.className.split(' ')[0];
      //   if (split === 'react-grid-layout') {
      //     console.log('onMouseOut', e.target)
          
      //     this.props.upHeight();
      //   }
      // }}
      // onMouseDown={drag => console.log('onMouseDown', drag)}
      >
        <ReactGridLayout
          // layout={tileList}
          onLayoutChange={this.props.onLayoutChange}
          onDragStart={item => console.log('item', item)}
          onBreakpointChange={this.onBreakpointChange}
          onResizeStart={item => console.log('resieze item', item)}
          // onResize={item => console.log('item - resize', item)}
          {...this.props}
        >
          {this.generateLayoutDOM(tileList)}
        </ReactGridLayout>
      </div>
    );
  }

  // render() {
  //   const {
  //     tileList
  //   } = this.props;

  //     console.log('Layout tileList', tileList);

  //   return (
  //     <GridLayout className="layout" cols={12} rowHeight={30} width={1200}
  //       onLayoutChange={this.props.onLayoutChange}
  //       // layout={tileList}
  //       {...this.props}
  //     >
  //       {/* <div key="a" data-grid={{x: 0, y: 0, w: 1, h: 2, static: true}}>a</div>
  //       <div key="b" data-grid={{x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4}}>b</div>
  //       <div key="c" data-grid={{x: 4, y: 0, w: 1, h: 2}}>c</div> */}
  //       {this.generateLayoutDOM(tileList)}
  //     </GridLayout>
  //   )
  // }
}

VideoLayout.propTypes = {

}

export default VideoLayout;