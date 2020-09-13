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

//set query and sort values based on props before component mounts, so that we can call the api based on the props' query in componentdidmount since getderivedstatefromprops run before componentdidmount.
//sort is also adjusted based on props
    static getDerivedStateFromProps(props, state) {
        return {query: props.query, sort: props.sort}
    }

//we want to call the api immediately when component mounts, to ensure that the api data is accessible once the dom renders.
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

//anytime when the state.sort changes, we re-render the DOM and update the res.data to the new sorted array and then set the state to that.
//the sort function changes the parent's state.sort, this is why we compare the previous props.sort value and the changed props.sort value.
    componentDidUpdate(prevProps){
        if(prevProps.sort != this.props.sort){
            this.sortFunction(this.state.sort, this.state.results)
            this.setState({display: <OneSearchResult data={this.state.results} />})
        }
    }


//sort function
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