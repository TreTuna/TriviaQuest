class Grid extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mapArray: [],
      gridNumber: 0
    };
  }

  componentWillMount() {

    var _this = this;

    $.get('/api/challenges')
      .done(function(challenges) {
        _this.setState({
          mapArray: challenges
        });
        console.log(_this.state.mapArray);
      })
      .fail(function(error) {
        console.error('Could not get challenges:', error);
      });
  }

  render() {
    return (<div id="grid">
      {this.state.mapArray.map((abox) =>
          <div className="gridbox" id={this.state.gridNumber++}>{this.state.gridNumber}</div>
      )}
    </div>);
  }
}


// var Grid = () => (
// );

//  In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Grid = Grid;


// var boxCount = 0;
// var theGrid = ({mapArray}) => (
//   mapArray.map(function(abox){
//     <div classname="gridbox" id={gridnumber}></div>
//     boxCount++;
//   });
// );


/*
var FishTable = ({fishData}) => (
  <table>
    <tbody>
      {fishData.map(function(fish){
        <FishTableRow fish={fish}/>
      });}
    </tbody>
  </table>
);
*/
// var Box = ({}) =>(

// <div classname="gridbox" id=gridnumber>{props.wutever}</div>

// );


//get data server
//randomly poplate maparray
//maparray.map(function...//genereates each div)
