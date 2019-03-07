class User extends React.Component {
    render() {
      return (
        <div>{this.props.id}:{this.props.name}</div>
      );
    }
  }

  
  class Users extends React.Component {

    constructor(props) {
      super(props)
        this.state = {users: [ {id: 1, name: "foo"}, {id: 2, name: "bar"} ]}
    }
    
    componentDidMount() {
        var that = this;
        window.fetch('/static/users.json').then(function(response) {
            return response.json()
        }).then(function(data) {
            that.setState(data)
            console.log(data);
        }).catch(function(e) {
            console.log("Booo"+e);
        });

    }
    render() {
      var users = this.state.users.map((user) => {
        return <User id={user.id} name={user.name} key={user.id}/>
      });
      return (
        <div>
          <p>ユーザー一覧</p>
          {users}
        </div>
      );
    }
  }

  ReactDOM.render(<Users/>,document.getElementById('root'));