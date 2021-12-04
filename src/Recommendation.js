import React, {useState} from 'react';
import * as XLSX from 'xlsx';
import './Recommendation.css'

function Recommendation() {
    const [data, setData] = useState([]);
    const [historicData, setHistoricData] = useState([
        ',Monday,Tuesday,Wednesday,Thursday,Friday,Saturday,Sunday', '6:00 AM-7:00 AM,8,10,11,9,10,10', '7:00 AM-8:00 AM,11,12,15,17,14,10,14',
        '8:00 AM-9:00 AM,12,14,14,15,17,13,18', '9:00 AM-10:00 AM,13,14,15,15,15,14,19', '10:00 AM-11:00 AM,17,18,16,20,20,17,24', '11:00 AM-12:00 PM,24,23,25,25,25,27,30', 
        '12:00 PM -1:00 PM,30,31,31,32,34,27,35', '1:00 PM-2:00 PM,35,37,36,38,38,35,41', '2:00 PM-3:00 PM,37,41,45,43,45,41,46', '3:00 PM-4:00 PM,38,41,46,43,45,53,51', 
        '4:00 PM-5:00 PM,34,45,47,43,53,50,48', '5:00 PM-6:00 PM,40,53,47,56,57,60,61', '6:00 PM-7:00 PM,37,36,38,32,48,53,53', '7:00 PM-8:00 PM,28,26,29,27,34,40,41', 
        '8:00 PM-9:00 PM,24,22,27,27,30,36,32', '9:00 PM-10:00 PM,19,19,21,24,23,31,26', '10:00 PM-11:00 PM,12,14,13,17,18,16,16', '11:00 PM-12:00 AM,8,10,11,14,8,19,14'
    ])
    const [recs, setRecs] = useState({})
    const[isDataSet, setIsDataSet] = useState(false)
    const[isGenerateClicked, setIsGenerateClicked] = useState(false)
    const [workoutTime, setWorkoutTime] = useState(1)

    const getRecs = dataArr => {
        console.log(dataArr)
        let temp = {1: "Monday", 2: "Tuesday", 3: "Wednesday", 4: "Thursday", 5: "Friday", 6: "Saturday", 7: "Sunday"}
        let tempRecs = {"Monday": "No Time available", "Tuesday": "No Time available", "Wednesday": "No Time available", 
        "Thursday": "No Time available", "Friday": "No Time available", "Saturday": "No Time available", "Sunday": "No Time available"}
        let freeTimes = {"Monday": [], "Tuesday": [], "Wednesday": [], "Thursday": [], "Friday": [], "Saturday": [], "Sunday": []}
        for (let t = 1; t < 21; t++) {
            for (let day = 1; day < 8; day++) {
                /*if (tempRecs[temp[day]] != "No Time available") {
                    continue
                }*/
                let timeValuesArr = dataArr[t].split(",")
                let cellValue = timeValuesArr[day]
                
                if (cellValue == "0") {
                    //console.log("At " + temp[day] + " time " + t + " user is free")
                    if (workoutTime == 1) {
                        //tempRecs[temp[day]] = timeValuesArr[0]
                        freeTimes[temp[day]].push(timeValuesArr[0])
                    }
                    else {
                        let nextCellValue = dataArr[t + 1].split(",")[day]
                        if (nextCellValue == "0") {
                            let combinedTime = timeValuesArr[0].split("-")[0] + "-" + dataArr[t+1].split(",")[0].split("-")[1]
                            tempRecs[temp[day]] = combinedTime
                            freeTimes[temp[day]].push(combinedTime)
                        }
                    }
                }
            }
        }
        if (workoutTime == 2) {
            setRecs(tempRecs)
            return
        }
        let temp2 = {"Monday": 1, "Tuesday": 2, "Wednesday": 3, "Thursday": 4, "Friday": 5, "Saturday": 6, "Sunday": 7}
        let temp3 = {"6:00 AM-7:00 AM": 1, "7:00 AM-8:00 AM": 2, "8:00 AM-9:00 AM": 3, "9:00 AM-10:00 AM": 4, "10:00 AM-11:00 AM": 5,
        "11:00 AM-12:00 PM": 6, "12:00 PM-1:00 PM": 7, "1:00  PM-2:00 PM": 8, "2:00 PM-3:00 PM": 9, "3:00 PM-4:00 PM": 10, "4:00 PM-5:00 PM": 11,
        "5:00 PM-6:00 PM": 12, "6:00 PM-7:00 PM": 13, "7:00 PM-8:00 PM": 14, "8:00 PM-9:00 PM": 15, "9:00 PM-10:00 PM": 16, "10:00 PM-11:00 PM": 17,
        "11:00 PM-12:00 AM": 18}
        let minimum = 1000
        for (let day in freeTimes) {
            console.log(day)
            let freeList = freeTimes[day]
            for (let i = 0; i < freeList.length; i++) {
                let currTime = freeList[i]
                let currValue = historicData[temp3[currTime]].split(",")[temp2[day]]
                if (currValue < minimum) {
                    tempRecs[day] = currTime
                    minimum = currValue
                }
            }
            minimum = 1000
        }
        console.log(tempRecs)
        setRecs(tempRecs)
    }
    const handleFileUpload = e => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = (evt) => {
            /* Parse data */
            const bstr = evt.target.result;
            const wb = XLSX.read(bstr, { type: 'binary' });
            /* Get first worksheet */
            const wsname = wb.SheetNames[0];
            const ws = wb.Sheets[wsname];
            /* Convert array of arrays */
            const data = XLSX.utils.sheet_to_csv(ws, { header: 1 });
            console.log(data)
            const dataStringLines = data.split(/\r\n|\n/);
            //const headers = dataStringLines[0].split(/,(?![^"]*"(?:(?:[^"]*"){2})*[^"]*$)/);
            setData(data)
            setIsDataSet(true)
            //getRecs(dataStringLines)
        };
        reader.readAsBinaryString(file);
    }

    const renderTable = () => {
        const dataStringLines = data.split(/\r\n|\n/);
        getRecs(dataStringLines)
        setIsGenerateClicked(true)
    }
	return(
		<div className="Recommendation">
            <div className="instructions">
                <div className="header">
                    <h1>How to get your personalized gym schedule recommendation</h1>
                </div>
                <div className="download-section">
                    <p>1. Download the schedule template below and fill it in based off of your expected schedule for the week.
                        If you are busy at a time slot, enter "1", and if you are free, enter "0"
                    </p>
                    <b>Do not change any of the cells that are already filled in</b>
                    <a href="schedule_template.xlsx" download>
                        <button type="button">Download</button>
                    </a>
                </div>
                <br/>
                <div className="upload-section">
                    <p> 
                        2. Answer the question below, and upload the filled in template by clicking on the "Choose File" button and selecting your filled in template
                    </p>
                    <label for="dog-names">How many hours do you plan on working out for?</label>
                    <select name="workout-time" id="workout-time" onChange={(e) => setWorkoutTime(e.target.value)}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                    </select>
                    <form>
                        <input type = "file" name = "upload" accept = ".csv,.xlsx,.xls" onChange={handleFileUpload}/>
                    </form>
                </div>
                <br/>
                <div className="recommendation-section">
                    <p>3. Press the "Generate Recommendations" button below to get your recommendations </p>
                    <button type="button" disabled={data.length === 0} onClick= {renderTable}>Generate Recommendations</button>
                </div>
                <br/>
            </div>
            <br/>
            <br/>
            <br/>
            <div className="table-section">
                <h3>Recommendations</h3>
                {isDataSet && isGenerateClicked
                    ? <table className="recTable">
                        <tr>
                            <td>&nbsp;</td>
                            <th>Monday</th>
                            <th>Tuesday</th>
                            <th>Wednesday</th>
                            <th>Thursday</th>
                            <th>Friday</th>
                            <th>Saturday</th>
                            <th>Sunday</th>
                        </tr>
                        <tr>
                            <th>Recommended Slot</th>
                            <td>{recs["Monday"]}</td>
                            <td>{recs["Tuesday"]}</td>
                            <td>{recs["Wednesday"]}</td>
                            <td>{recs["Thursday"]}</td>
                            <td>{recs["Friday"]}</td>
                            <td>{recs["Saturday"]}</td>
                            <td>{recs["Sunday"]}</td>
                        </tr>
                        </table>
                    : null
                }
            </div>
		</div>
	)
}

export default Recommendation;
/*
<h3>Upload your schedule in an Excel Sheet (.xls). The columns of your table should be the days of the week(Mon-Sun), and
                the rows should be every hour from 6:00 - 24:00 (this is military time). When filling out your table, either enter "1" if you will be
                busy during that hour of that day, or leave the cell empty if you are expect to be free.
            </h3>
			<button className="upload">
                Upload
            </button>
*/
/*
<table className="recTable">
    <tr>
        <td>&nbsp;</td>
        <th>Monday</th>
        <th>Tuesday</th>
        <th>Wednesday</th>
        <th>Thursday</th>
        <th>Friday</th>
        <th>Saturday</th>
        <th>Sunday</th>
    </tr>
    <tr>
        <th>Recommended Slot 1</th>
        <td>9:00 - 10:00</td>
        <td>12:00 - 13:00</td>
        <td>9:00 - 10:00</td>
        <td>10:00 - 11:00</td>
        <td>23:00 - 24:00</td>
        <td>15:00 - 16:00</td>
        <td>11:00 - 12:00</td>
    </tr>
</table>
*/