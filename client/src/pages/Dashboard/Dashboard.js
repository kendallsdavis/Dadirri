import React from 'react'
import './dashboard.css'
import Calendar from '../../components/Calendar/Calendar'
import LogUserData from './../../components/LogUserData/LogUserData';
import ViewUserData from './../../components/ViewUserData/ViewUserData';
import BarChart from '../../components/Charts/BarChart.js'
import LineChart from '../../components/Charts/LineChart.js'

class Dashboard extends React.Component {

  state = {
    selectedDate: null
  }

  grabCalendarDate = (selectedDate) => {
    console.log(selectedDate)

  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <BarChart>
          </BarChart>
          <div className="col-6">
            <h1>Welcome, {this.props.user}!</h1>
          </div>
          <div className="col-6">
            <div className="calendar-component">
            <Calendar/>
              <LineChart />

            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
           <ViewUserData>
           </ViewUserData>
           </div>
          <div className="col-6">
          <LogUserData/>
          </div>
          
        </div>
      </div>
    )
  }
}

export default Dashboard