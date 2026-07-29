//ENUM is TS
enum Direction {
  North,
  South,
  East,
  West,
}
const dir: Direction = Direction.North;

//enum auto increment7

// enum auto increment problem: sometimes it can lead to unexpected results,
// especially when we want to assign specific values to some enum members.
// In such cases, we can assign specific values to the enum members explicitly.

enum Direction2 {
  North = 1,
  South,
  East,
  West,
}
const dir2: Direction2 = Direction2.South;
console.log(dir2); // Output: 2


// use of enum 
enum Status {
  SUCCESS = "Success",
  FAILURE = "failure",
  PENDING = "pending",
}

function getStatusMessage(status: Status): string {
  switch (status) {
    case Status.SUCCESS:
      return `Operation was ${status}.`;
    case Status.FAILURE:
      return `Operation was ${status}.`;
    case Status.PENDING:
      return `Operation was ${status}.`;
    default:
      return "Unknown status.";
  }
}

console.log(getStatusMessage(Status.SUCCESS)); // Output: Operation was Success.
