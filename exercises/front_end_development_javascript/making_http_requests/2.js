function makeRequest() {
  let request = new XMLHttpRequest();
  request.open('GET', 'http://localhost:3000/api/schedules');
  request.timeout = 5000;
  request.responseType = 'json';

  request.addEventListener('load', () => {
    let result = '';
    let schedules = request.response;
    schedules = schedules.filter(schedule => !schedule.student_email);

    if (schedules.length === 0) {
      alert("There are no schedules available for booking");
    } else {
      let staffIds = [...new Set(schedules.map(({staff_id}) => staff_id))];
      staffIds.forEach(id => {
        let count = schedules.filter(({staff_id}) => staff_id === id).length;
        result += `staff ${id}: ${count}\n`;
      });

      alert(result);
    }
  });

  request.addEventListener('timeout', () => {
    alert("Your request is taking longer than usual. Please try again.");
  });

  request.addEventListener('loadend', () => {
    alert("Your request has successfully completed!");
  });

  request.send();
}

makeRequest();