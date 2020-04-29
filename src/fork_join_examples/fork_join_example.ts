import {forkJoin, Observable, of} from "rxjs";
import {map} from "rxjs/operators";

export class ForkJoinExample {

    constructor() {
    }

    private observable_1(): Observable<string> {
        return of('observable_1');
    }

    private observable_2(): Observable<string> {
        return of('observable_2');
    }

    private observable_3(): Observable<string> {
        return of('observable_3');
    }

    example(): Observable<string> {
        const requests: Observable<string>[] = [
            this.observable_1(),
            this.observable_2(),
            this.observable_3()
        ];

        return forkJoin(requests).pipe(
            map(responses => responses.join(','))
        );
    }
}
