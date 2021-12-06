import React, { Component } from 'react';
import './App.css';
import {OutTable, ExcelRenderer} from 'react-excel-renderer';
import excel from 'xlsx';
let fileToBeRead = "history_data.xlsx";

class History extends Component {
    state = {
        cols: ['1', '2'],
        rows: ['1', '2'],
    };

    fileHandler = (event) => {
        //just pass the fileObj as parameter
        ExcelRenderer(fileToBeRead, (err, resp) => {
            if(err){
                console.log(err);            
            }
            else{
                this.setState({
                cols: resp.cols,
                rows: resp.rows
                });
            }
        });               
    }

    render() {
        return (
            <div>
                <OutTable data={this.state.rows} columns={this.state.cols} tableClassName="ExcelTable2007" tableHeaderRowClass="heading" />
            </div>
        );
    }
}

export default History;