import {concat, Observable, of, zip} from "rxjs";
import {map} from "rxjs/operators";

export class ZipExample {

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
        return zip(
            this.observable_1(),
            this.observable_2(),
            this.observable_3()
        ).pipe(
            map(([o1, o2, o3]) => [o1, o2, o3].join(','))
        );
    }
}
