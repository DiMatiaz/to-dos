const buttonsNames = [
   "All",
   "Active",
   "Completed"
];

class Button extends React.Component {
   constructor(props){
      super(props);
      this.onClick = this.onClick.bind(this);
   }

   onClick(e) {
      e.preventDefault();
      this.props.handleButtonOnClick(buttonsNames.indexOf(this.props.name));
   }
   render(){
      return (
         <a href="#" onClick={this.onClick} className={this.props.string}>
            {this.props.name}
         </a>
      );
   }
}

class Todo extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         show: false
      }
      this.onMouseEnter = this.onMouseEnter.bind(this);
      this.onMouseExit = this.onMouseExit.bind(this);
      this.removeOnClick = this.removeOnClick.bind(this);
      this.selectOnClick = this.selectOnClick.bind(this);
   }

   onMouseEnter() {
      this.setState({show: true});
   }
   onMouseExit() {
      this.setState({show: false});
   }
   removeOnClick(e) {
      e.preventDefault();
      this.props.handleRemoveOnClick(this.props.index);
   }
   selectOnClick(e) {
      e.preventDefault();
      this.props.handleSelectOnClick(this.props.index);
   }
   render(){
      let List = [
         <a key="check" href="#" className="to-check" onClick={this.selectOnClick}>{this.props.selected && <i className="fa fa-check" aria-hidden="true"></i>}</a>,
         <p key="name">{this.props.name}</p>,
         <a key="x" href="#" className="x" onClick={this.removeOnClick}>{this.state.show && <i className="fa fa-times" aria-hidden="true"></i>}</a>
      ];
      return (
         this.props.selected && <div className="todo row td-selected" onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseExit}>
                                    {List}
                                </div>  ||  <div className="todo row" onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseExit}>
                                                {List}
                                            </div>
      );
   }
}

class Todos extends React.Component {
   constructor(props){
      super(props);
      this.state = {
         todos: [],
         selected: [],
         btnBool: [true, false, false],
         sizeShownTodos: 0
      };
      this.onSubmit = this.onSubmit.bind(this);
      this.handleRemoveOnClick = this.handleRemoveOnClick.bind(this);
      this.handleSelectOnClick = this.handleSelectOnClick.bind(this);
      this.getTodosList = this.getTodosList.bind(this);
      this.handleButtonOnClick = this.handleButtonOnClick.bind(this);
   }

    onSubmit(e){
        e.preventDefault();
        let todo = e.target.elements.todo.value;

        this.setState((prevState,props)=>{
            if (todo){
                let todos = prevState.todos;
                todos.push(todo);
                return todos;
            }
            alert("Insert a to-do");
        });
        this.setState((prevState,props) => {
            let selected = this.state.selected;
            selected.push(false);
            return selected;
        });
        this.setState((prevState, props) => {return prevState.sizeShownTodos + 1});
    }
    handleRemoveOnClick(index){
        this.setState((prevState, props) => {
            let todos = prevState.todos;
            todos.splice(index, 1);
            return todos;
        });
        this.setState((prevState, props) => {
            let selected = prevState.selected;
            selected.splice(index, 1);
            return selected;
        });
        this.setState((prevState,props) => prevState.sizeShownTodos - 1 );
    }
    handleSelectOnClick(index){
        this.setState((prevState, props) => {
            let selected = this.state.selected;
            selected[index] = !selected[index];
            return selected;
        });
    }
    handleButtonOnClick(index){
        let list = [false, false, false];
        list[index] = true;
        this.setState({
            btnBool: list
        });
    }
    getTodosList() {
        let shownTodos = this.state.todos.map((todo, index) =>
                            <Todo name={todo} selected={this.state.selected[index]} key={index} index={index} handleRemoveOnClick={this.handleRemoveOnClick} handleSelectOnClick={this.handleSelectOnClick} />
                        );;
        if (this.state.btnBool[0]) {
            return shownTodos;
        }
        else if (this.state.btnBool[1]) {
            return shownTodos.filter((todo,index)=>(!this.state.selected[index]));
        }
        return shownTodos.filter((todo, index) => this.state.selected[index]);
    }
    render() {
        let Todos = this.getTodosList();
        return (
            <div className="todos col">
                <form onSubmit={this.onSubmit}>
                    <input type="text" name="todo" placeholder="What needs to be done?"></input>
                    <button type="submit">Add to-do</button >
                </form>
                
                {Todos}
                
                {this.state.todos.length>0 && <div className="row buttons">
                                                    <p>{Todos.length} items left</p>
                                                    {this.state.todos.length > 0 && <div className="row">
                                                                                        {this.state.btnBool.map((btn, index) =>
                                                                                            <Button handleButtonOnClick={this.handleButtonOnClick} key={index} name={buttonsNames[index]} string={ (btn) ? "btn btn-selected" : "btn"}/>
                                                                                        )}
                                                                                    </div>}
                                                </div>}
            </div>
        );
    }
    }
    class Main extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                <h1>Todos</h1>
                <Todos/>
            </div>
        );
    }
    }

    ReactDOM.render(<Main/>, document.getElementById("app"));
