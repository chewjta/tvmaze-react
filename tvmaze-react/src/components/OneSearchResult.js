import React from 'react';

const OneSearchResult = (props) => {
    return (
        <div>
        {
            props.data.map((item,index)=>{
                return <div class="card mb-3" style={{maxWidth:'540px',margin:'10px auto'}} >
                          <div class="row no-gutters">
                            <div class="col-md-4">
                              <img src={item.show.image ? item.show.image.medium : null} />
                            </div>
                            <div class="col-md-8">
                              <div class="card-body text-center">
                                <h5 class="card-title">{item.show.name}</h5>
                                <p class="card-text">Rating: {item.show.rating.average}</p>
                                <p class="card-text">Status: {item.show.status}</p>
                                <p class="card-text"><small class="text-muted"><a href={item.show.url}>Link</a></small></p>
                              </div>
                            </div>
                          </div>
                        </div>
            })
        }
        </div>
        )
}


export default OneSearchResult

