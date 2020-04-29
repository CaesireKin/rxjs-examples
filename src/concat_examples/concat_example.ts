import {concat, Observable, of} from "rxjs";

export class ConcatExample {

    private observable_1(): Observable<string> {
        return of('1');
    }

    private observable_2(): Observable<string> {
        return of ('2');
    }

    private observable_3(): Observable<string> {
        return of ('3');
    }

    example(): Observable<string> {
        return concat(
            this.observable_1(),
            this.observable_2(),
            this.observable_3()
        );
    }
}
