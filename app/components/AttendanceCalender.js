//STILL WORKING ON THIS, MIGHT NOT WORK FOR YOU. UNCOMMENT THEM IF YOU WANT TO TRY.


// import React from 'react';
// import './react-big-calendar.css';
//
// import BigCalendar from 'react-big-calendar'
// import moment from 'moment';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//
// import TimePicker from 'material-ui/TimePicker';
// import Dialog from 'material-ui/Dialog';
// import FlatButton from 'material-ui/FlatButton';
// import RaisedButton from 'material-ui/RaisedButton';
//
// import DropDownMenu from 'material-ui/DropDownMenu';
// import MenuItem from 'material-ui/MenuItem';
//
// //BigCalendar plugin requires localizer which is defined in here
// BigCalendar.setLocalizer( BigCalendar.momentLocalizer(moment) );
//
//
//
// class CalenderSheet extends React.Component{
//     constructor(props){
//     super(props);
//
//     var timearray=[];
//     timearray.push(
//       <div className="flexdiv">
//         <div className="flexdiv">
//         <h4>In Time:</h4>
//         <TimePicker
//         hintText="12hr Format"
//         onChange={(event, date) => this.setState({intime:date})}
//         />
//         </div>
//         <div className="flexdiv">
//         <h4>Out Time:</h4>
//         <TimePicker
//         hintText="12hr Format"
//         onChange={(event, date) => this.setState({outtime:date})}
//         />
//         </div>
//       </div>
//     )
//       this.state={
//             myEventsList:[],
//           open: false,
//           timearray:timearray,
//           value:1,
//           datepicked:"",
//           intime:"",
//           outtime:""
//         }
//   }
//   // populate data initially by retrieving previous marked events
//
//   /*
//   function to show modal popup with TimePicker
//   */
//   dateSelected(slotInfo){
//     this.setState({datepicked:slotInfo.start,open: true});
//   }
//   /*
//   function to handle Submit
//   Populate event on the date that is selected on calender
//   */
//   timeClose(){
//     var self = this;
//     var eventlist= this.state.myEventsList;
//     if(this.state.value==1){
//       var date = this.state.datepicked.toString().substring(4,16);
//       var intime=this.state.intime.toString().substring(16,24);
//       var outtime=this.state.outtime.toString().substring(16,24);
//       var startdate = date+intime;
//       var enddate = date+outtime;
//       // console.log("startdate",startdate," enddate",enddate);
//       var presentjson={
//       'title': 'Present',
//       'allDay': false,
//       'start': new Date(startdate),
//       'end': new Date(enddate)
//       }
//
//
//     }
//     else{
//       var absentdate = this.state.datepicked.toString().substring(4,15)
//       // console.log("datepicked",absentdate);
//       var absentjson ={
//       'title': 'Absent',
//       'allDay': true,
//       'start':new Date(absentdate),
//       'end': new Date(absentdate)
//       }
//
//       this.setState({myEventsList:eventlist,open: false});
//     }
//   }
//   /*
//   function to display time picker if present value is selected
//   else hide TimePicker
//   */
//   handlePresentChange(event, index, value){
//     // console.log("handlePresentChange called");
//     var self= this;
//     if(value==1){
//       var timearray=[];
//       timearray.push(
//         <div className="flexdiv">
//           <div className="flexdiv">
//           <h4>In Time:</h4>
//           <TimePicker
//           hintText="12hr Format"
//           onChange={(event, date) => self.setState({intime:date})}
//           />
//           </div>
//           <div className="flexdiv">
//           <h4>Out Time:</h4>
//           <TimePicker
//           hintText="12hr Format"
//           onChange={(event, date) => self.setState({outtime:date})}
//           />
//           </div>
//         </div>
//       );
//       this.setState({timearray,value});
//     }
//     else{
//       this.setState({timearray:[],value});
//     }
//   }
//   // main fxn which renders calender and other popups
//   render () {
//     var self=this;
//     const actions = [
//       <FlatButton
//         label="Cancel"
//         primary={true}
//         onTouchTap={() => this.setState({open:false})}
//       />,
//       <FlatButton
//         label="Submit"
//         primary={true}
//         keyboardFocused={true}
//         onTouchTap={() => this.timeClose()}
//       />,
//     ];
//     return (
//       <div>
//           <BigCalendar
//             events={this.state.myEventsList}
//             selectable
//             defaultDate={new Date()}
//             onSelectSlot={(slotInfo) => this.dateSelected(slotInfo)}
//           />
//           <MuiThemeProvider>
//               <Dialog
//               title="Dialog With Actions"
//               actions={actions}
//               modal={false}
//               open={this.state.open}
//               onRequestClose={this.handleClose}
//               autoScrollBodyContent={true}
//               >
//               <DropDownMenu value={this.state.value} onChange={(event, index, value) => self.handlePresentChange(event, index, value)}>
//                   <MenuItem value={1} primaryText="Present" />
//                   <MenuItem value={2} primaryText="Absent" />
//                 </DropDownMenu>
//               {this.state.timearray}
//               </Dialog>
//           </MuiThemeProvider>
//       </div>
//     );
//   }
// }
//
// export default CalenderSheet;
