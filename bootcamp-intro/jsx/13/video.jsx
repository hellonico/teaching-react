class VideoComponent extends React.Component {
    constructor(props) {
      super(props)
    }
    render() {
      return <div>
      <h1>Video</h1>
      <video width="320" height="240" preload controls autoplay>
        <source src={this.props.video} type="video/mp4"/>
        Your browser does not support the video tag.
      </video>
      </div>
	};
}

ReactDOM.render(<VideoComponent video="movie.mp4"/>, document.getElementById('root'));
