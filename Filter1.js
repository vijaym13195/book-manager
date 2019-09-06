import React from 'react';
import ReactTable from 'react-table';
import "react-table/react-table.css"
class Filter1 extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props);
        this.state={
            posts:[]
        }

    }
    componentDidMount(){
        const url= ("http://localhost:9000/notes", { mode: 'no-cors' });
        fetch(url, {
            method:"GET"
           
        }).then(response  => response.json()).then(posts =>{this.setState({posts:posts})})
    }
    render() {
        const columns= [
            {
                Header: "id",
                accessor : "_id"
            },
            {
                Header: "TITLE",
                accessor : "title"
            },
            {
                Header: "DESCRIPTION",
                accessor : "description"
            },
            {
                Header: "AUTHOR",
                accessor : "author",
                sortable:false
                
            },
            {
                Header: "RATING",
                accessor : "rating",
                

            }
            
        ]
       return (
          <div >
              <ReactTable 
              columns={columns}
              data={this.state.posts}
              filterable
              >

              </ReactTable>   
          </div>
       );
    }
  }
  export default Filter1;