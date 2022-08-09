// Your code here
function createEmployeeRecord(employee) {

    return {
        firstName: employee[0],
        familyName: employee[1],
        title: employee[2],
        payPerHour: employee[3], 
        timeInEvents: [],
        timeOutEvents: [] 
    }
}
    
function createEmployeeRecords(employees){
    return employees.map(employee => createEmployeeRecord(employee))
}

function createTimeInEvent(employee, event) {
    let [date, hour] = event.split(" ")      

    employee.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date,
    })
    return employee
}

function createTimeOutEvent(employee, event){
   let [date, hour] = event.split(" ")    
   
   employee.timeInEvents.push({
    type: "TimeOut",
    hour: parseInt(hour, 10),
    date,
})
    return employee
}

function hoursWorkedOnDate(date) {
    const timeIn = this.timeInEvents.find(event => event.date === date)
    const  timeOut = this.timeOutEvents.find(event => event.date === date)
    
    return (timeOut.hour - timeIn.hour) / 100
     
}

function wagesEarnedOnDate(date) {
     const hours = this.hoursWorkedOnDate.call(this, date)   
     return this.payPerHour * hours 
}

const allWagesFor = function () {
const eligibleDates = this.timeInEvents.map(function(e) {
    return e.date
})
const payable = eligibleDates.reduce(function (memo, d) {
    return memo + wagesEarnedOnDate.call(this, d)
}.bind(this),0)

return payable }

function calculatePayroll(employeeRecords) {
    return employeeRecords.map (employee => allWagesFor.call(employee)).reduce((currentValue, total) => currentValue + total)
    
}