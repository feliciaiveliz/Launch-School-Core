function makeEventDescriber(event, date) {
  return function() {
    console.log(date + ': ' + event);
  };
}

var coffeeWithAda = makeEventDescriber("Coffee with Ada.", "8/1/2018");
var partyAtCharles = makeEventDescriber("Party at Charles' house.", "8/4/2018");

coffeeWithAda();  // Logs: "8/1/2018: Coffee with Ada."
partyAtCharles(); // Logs: "8/4/2018: Party at Charles' house."

// The inner function returned by makeEventDescriber creates a closure in which the variables event and date are saved.

// partial function application

function schedulerMaker(name) {
  return function(event) {
    return function() {
      console.log(event + ' with ' + name + '.');
    };
  };
}

var adaScheduler = schedulerMaker("Ada");
var coffeeWithAda = adaScheduler("Coffee");

coffeeWithAda();  // logs; Coffee with Ada

// the adaScheduler variable closes over the name variable, while the third inner function closes over both name and event variables

// private data and application interfaces

// there are two biggets benefits to closures, creating private data and ability to define application interfaces

function makeCalendar(name) {
  var calendar = {
    owner: name,
    events: [],
  };

  return {
    addEvent(event, dateString) {
      var eventInfo = {
        event: event,
        date: new Date(dateString),
      };

      calendar.events.push(eventInfo);
      calendar.events.sort(function(a, b) {
        return a.date - b.date;
      });
    },

    listEvents() {
      if (calendar.events.length > 0) {
        console.log(calendar.owner + "'s events are: ");

        calendar.events.forEach(eventInfo => {
          var dateStr = eventInfo.date.toLocaleDateString();
          var description = dateStr + ': ' + eventInfo.event;

          console.log(description);
        });
      } else {
        console.log(calendar.owner + ' has no events.');
      }
    },
  };
}

var babbageCalendar = makeCalendar("Charles Baggage");

babbageCalendar.addEvent("Coffee with Ada.", "8/7/2018");
babbageCalendar.addEvent("Difference Engine presentation.", "8/2/2018");

babbageCalendar.listEvents();
