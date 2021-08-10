import { from } from "rxjs";
import { from } from "rxjs";

from(['Alice', 'Ben', 'Charlie']).subscribe({
  next: value => console.log(value),
  complete: () => console.log('Completed')
});