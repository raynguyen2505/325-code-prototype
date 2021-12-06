import React, { Component } from 'react';
import { CsvToHtmlTable } from 'react-csv-to-table';
import './History.css'

function History() {
    const historyData = `,Monday   ,Tuesday   ,Wednesday   ,Thursday   ,Friday   ,Saturday   ,Sunday 
    6:00 AM-7:00 AM   ,8,10,11,9,10,5,10
    7:00 AM-8:00 AM   ,11,12,15,17,14,10,14
    8:00 AM-9:00 AM   ,12,14,14,15,17,13,18
    9:00 AM-10:00 AM  ,13,14,15,15,15,14,19
    10:00 AM-11:00 AM   ,17,18,16,20,20,17,24
    11:00 AM-12:00 PM   ,24,23,25,25,25,27,30
    12:00 PM -1:00 PM   ,30,31,31,32,34,27,35
    1:00  PM-2:00 PM   ,35,37,36,38,38,35,41
    2:00 PM-3:00 PM   ,37,41,45,43,45,41,46
    3:00 PM-4:00 PM   ,38,41,46,43,45,53,51
    4:00 PM-5:00 PM   ,34,45,47,43,53,50,48
    5:00 PM-6:00 PM   ,40,53,47,56,57,60,61
    6:00 PM-7:00 PM   ,37,36,38,32,48,53,53
    7:00 PM-8:00 PM   ,28,26,29,27,34,40,41
    8:00 PM-9:00 PM   ,24,22,27,27,30,36,32
    9:00 PM-10:00 PM   ,19,19,21,24,23,31,26
    10:00 PM-11:00 PM   ,12,14,13,17,18,16,16
    11:00 PM-12:00 AM   ,8,10,11,14,8,19,14
        `;
    return (
        <div className="recTable">
            <CsvToHtmlTable data={historyData} csvDelimiter="," />
        </div>
    );
}

export default History;