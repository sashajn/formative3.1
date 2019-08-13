import React, {Component} from 'react';
import Tab from 'react-bootstrap/Tab'
import Nav from 'react-bootstrap/Nav'
import logo from './logo.svg';
import './App.css';
import Article from './Article.jsx';

var keyCode = '4a7aafa24d084ffd88c55083ae680c08';
var key = '?apiKey='+keyCode;

class App extends Component{

  constructor(props) {
    super(props);
    this.state={
      activeKey:'general'
    }

    this.state = {
      generalArticles:[
        {
          title: 'Wild weather: Damage inside The Cloud revealed on Auckland waterfront - New Zealand Herald',
          author: 'Tom Dillane',
          description: 'Mayor Goff admits his first thought was whether venue was worth repairing.',
        },{
          title: 'Auckland mayoral debate: Phil Goff calls John Tamihere failed Cabinet minister - New Zealand Herald',
          author: 'NZ Herald',
          description: 'Phil Goff and John Tamihere duke it out at mayoral debate.',
        },{
          title: 'Wild weather: Damage inside The Cloud revealed on Auckland waterfront - New Zealand Herald',
          author: 'Anne Gibson',
          description: 'Mayor Goff admits his first thought was whether venue was worth repairing.',
        }
      ],

      businessArticles:[
        {
          title: 'The world\'s richest family is getting richer, by US$4 million an hour - Stuff.co.nz',
          author: '',
          description: 'The founders of US retail giant Walmart earn a staggering US$70,000 a minute.',
        },{
          title: 'Auckland mayoral debate: Phil Goff calls John Tamihere failed Cabinet minister - New Zealand Herald',
          author: '',
          description: 'Eye colour and hair colour are not important but no red hair" the ad said. It didn\'t go down well.',
        },{
          title: 'Fonterra\'s ex-boss Spierings to be paid out this year - Stuff.co.nz',
          author: '',
          description: 'Fonterra\'s ex-$8m-a-year boss Theo Spierings is still awaiting a generous payday, a year after he left the co-op.',
        }
      ],

      sportsArticles:[
        {
          title: 'The world\'s richest family is getting richer, by US$4 million an hour - Stuff.co.nz',
          author: '',
          description: 'The founders of US retail giant Walmart earn a staggering US$70,000 a minute.',
        },{
          title: 'Auckland mayoral debate: Phil Goff calls John Tamihere failed Cabinet minister - New Zealand Herald',
          author: '',
          description: 'Eye colour and hair colour are not important but no red hair" the ad said. It didn\'t go down well.',
        },{
          title: 'Fonterra\'s ex-boss Spierings to be paid out this year - Stuff.co.nz',
          author: '',
          description: 'Fonterra\'s ex-$8m-a-year boss Theo Spierings is still awaiting a generous payday, a year after he left the co-op.',
        }
      ],

      entertainmentArticles:[
        {
          title: 'The world\'s richest family is getting richer, by US$4 million an hour - Stuff.co.nz',
          author: '',
          description: 'The founders of US retail giant Walmart earn a staggering US$70,000 a minute.',
        },{
          title: 'Auckland mayoral debate: Phil Goff calls John Tamihere failed Cabinet minister - New Zealand Herald',
          author: '',
          description: 'Eye colour and hair colour are not important but no red hair" the ad said. It didn\'t go down well.',
        },{
          title: 'Fonterra\'s ex-boss Spierings to be paid out this year - Stuff.co.nz',
          author: '',
          description: 'Fonterra\'s ex-$8m-a-year boss Theo Spierings is still awaiting a generous payday, a year after he left the co-op.',
        }
      ]
    }
  }

loadHeadLinesByCategory = (category) => {
    var articlesURL = 'https://newsapi.org/v2/top-headlines'+key+'&country=nz'+'&category='+category;
    fetch(articlesURL)
        .then(res=>res.json())
        .then((data)=>{
            var articles = data.articles;
            console.log(articlesURL)

            if(category == 'general'){
              this.setState({generalArticles:articles})
            }
            if(category == 'business'){
              this.setState({businessArticles:articles})
            }
            if(category == 'sports'){
              this.setState({sportsArticles:articles})
            }
            if(category == 'entertainment'){
              this.setState({entertainmentArticles:articles})
            }

        })
}

componentDidMount() {
  this.loadHeadLinesByCategory('general');
  this.loadHeadLinesByCategory('business');
  this.loadHeadLinesByCategory('sports');
  this.loadHeadLinesByCategory('entertainment');
  
}

handleTabSelect = (key,e) => {
  this.setState({activeKey:key})
}

  render(){
    return (
      <div className="container">
      <Tab.Container activeKey={this.state.activeKey} onSelect={this.handleTabSelect}>
   
        <div className="row tab-top">
          
          <Nav variant="pills" className="col-7">
            <Nav.Item>
              <Nav.Link eventKey="general">General</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="business">Businsess</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="sports">Sports</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="entertainment">Entertainment</Nav.Link>
            </Nav.Item>
          </Nav>

          <form className="col-5">
            <div className="form-row align-items-center justify-content-end">
              <div className="col-auto">
                <input type="text" className="form-control mb-2 search-input" placeholder="Enter keywords"/>
              </div>
              
              <div className="col-auto">
                <button type="submit" className="btn btn-primary mb-2 search-submit">Search</button>
              </div>
            </div>
          </form>
        </div>

        
        <Tab.Content>
          <Tab.Pane className="tab-pane" eventKey="general">
          <h1>General</h1>
           {
             this.state.generalArticles.map((article) =>{

              var articleProps = {
                ...article,
                // key: article.author,
                // loadHeadLinesByCategory: this.loadHeadLinesByCategory
              };
              return <Article {...articleProps} />;
             })
           }
          </Tab.Pane>

          <Tab.Pane className="tab-pane" eventKey="business">
          <h1>Business</h1>
          {
             this.state.businessArticles.map((article) =>{

              var articleProps = {
                ...article,
                // key: article.author,
                // loadHeadLinesByCategory: this.loadHeadLinesByCategory
              };
              return <Article {...articleProps} />;
             })
           }
          </Tab.Pane>

          <Tab.Pane className="tab-pane" eventKey="sports">
            <h1>Sports</h1>
            {
             this.state.sportsArticles.map((article) =>{

              var articleProps = {
                ...article,
                // key: article.author,
                // loadHeadLinesByCategory: this.loadHeadLinesByCategory
              };
              return <Article {...articleProps} />;
             })
           }
          </Tab.Pane>

          <Tab.Pane className="tab-pane" eventKey="entertainment">
            <h1>Entertainment</h1>
            {
             this.state.entertainmentArticles.map((article) =>{

              var articleProps = {
                ...article,
                // key: article.author,
                // loadHeadLinesByCategory: this.loadHeadLinesByCategory
              };
              return <Article {...articleProps} />;
             })
           }
          </Tab.Pane>

          <Tab.Pane className="tab-pane" eventKey="search">
            <h1>Search Results</h1>

            <div className="article">
              <h5>Apple is giving out a special iPhone that can lead to a $1 million reward</h5>
              <p><span className="badge badge-primary">Phonearena.com</span></p>
            </div>
            
          </Tab.Pane>

        </Tab.Content>
      
      </Tab.Container>
    </div>
    );
  }
  
}

export default App;
