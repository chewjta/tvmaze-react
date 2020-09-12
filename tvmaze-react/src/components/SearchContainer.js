import React from 'react';
import Search from './Search';
import Results from './Results';
import Sort from './Sort';

class SearchContainer extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            hasSearched: false,
            input: '',
            query:'',
            sort: 'name'
        }

        this.inputChange = this.inputChange.bind(this)
        this.onSearchClick = this.onSearchClick.bind(this)
        this.changeSortBy = this.changeSortBy.bind(this)
        this.backToSearch = this.backToSearch.bind(this)

    }

inputChange(e){
    this.setState({
        input: e.target.value
    })
}

onSearchClick(e){

    if(e.target.value.length > 0){
        this.setState({
            query: e.target.value,
            hasSearched: true,
            input: ''
        })
    }
}

changeSortBy(e){
    this.setState({
        sort: e.target.value
    })
}

backToSearch(){
    this.setState({
        hasSearched: false
    })
}



    render(){

if(!this.state.hasSearched){
            return (<section>
                <header>
                <h1>TV Maze React</h1>
                </header>
                <main>
            <Search value={this.state.input} onChange={this.inputChange} onClick={this.onSearchClick} />
                </main>
            </section>)
        }


        return (
            <div>
               <div>
                   <button className="btn btn-secondary text-center" style={{marginLeft:'800px',marginTop:'50px'}}onClick={this.backToSearch}>Back to Search</button>
                   <Sort onChange={this.changeSortBy} selected={this.state.sort}/>
                   <Results query={this.state.query} sort={this.state.sort}/>
               </div>
            </div>
            )
    }
}


export default SearchContainer