import React from 'react';
import axios from 'axios';
import OneSearchResult from './OneSearchResult'

class Results extends React.Component{
    constructor(props){
        super(props)
            this.state={
                query: '',
                results: [],
                sort: 'name',
                display: ''
            }

    }


    static getDerivedStateFromProps(props, state) {
        return {query: props.query, sort: props.sort}
    }

    componentDidMount(){
        if(this.props.query.length > 1){
            axios.get(`http://api.tvmaze.com/search/shows?q=${this.props.query}`)
             .then(res=>{
                if(res.data.length === 0){
                    this.setState({
                        display: 'No movies matched your search!'
                    })
                }else{
                  this.sortFunction(this.state.sort,res.data)
                  this.setState({
                    results: res.data,
                    display: <OneSearchResult data={res.data} />
                })
                }
             })
        }
    }

    componentDidUpdate(prevProps){
        if(prevProps.sort != this.props.sort){
            this.sortFunction(this.state.sort, this.state.results)
            this.setState({display: <OneSearchResult data={this.state.results} />})
        }
    }



    sortFunction(sortBy,arr){
        switch(sortBy){
            case "score":
                arr.sort((a,b)=>{
                    return (b.score > a.score) ? 1 : -1
                })
                break;
            case "name":
                arr.sort((a,b)=>{
                    return (a.show.name > b.show.name) ? 1 : -1
                })
                break;

            case "rating desc":
                arr.sort((a,b)=>{
                    return (b.show.rating.average > a.show.rating.average) ? 1 : -1
                })
                break;

            case "rating asc":
                arr.sort((a,b)=>{
                    return (a.show.rating.average > b.show.rating.average) ? 1 : -1
                })
                break;

            default:
            arr.sort((a,b)=>{
                    return (a.show.name > b.show.name) ? 1 : -1
                })
        }
    }



    render(){
        return (
            <div>
            <div className="text-center text-primary">You searched for: {this.state.query}</div>
                <div class="text-center">{this.state.display}</div>
            </div>
            )
    }

}

export default Results