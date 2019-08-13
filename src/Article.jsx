import React, {Component} from 'react';

class Article extends Component{

    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="article">
                <h2 className="article-title">{this.props.title}</h2>
                <p>{this.props.author}</p>
                <p>{this.props.description}</p>
            </div>
        )
    }
}

export default Article;