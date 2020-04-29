import {concat, forkJoin, Observable, of} from "rxjs";
import {catchError, map} from "rxjs/operators";

export class ErrorHandingExample {
    constructor() {
    }

    private makeError(): void {
        throw new Error('Raising Error');
    }

    private raiseErrorWhileModEqualZero(v: number) {
        if (v % 2 !== 0) { return v; }
        else { throw new Error('value mod 2 is zero'); }
    }

    /**
     * Throw an error without catch it, will cause all observe terminate immediately.
     * comment this function calling in example, can let other example continue;
     * 未捕捉的异常，会终止掉当前整个可观察管线内的所有观察目标，在 example 函数内注释掉此函数
     * 的调用，可以令后续的观察对象正确的完成执行
     */
    private throwErrorWithoutCatching(): Observable<any> {
        return of(1,2).pipe(
            map(v => this.raiseErrorWhileModEqualZero(v))
        );
    }

    private throwErrorAndCatchIt(): Observable<any> {
        return of(1, 2).pipe(
            map(v => this.raiseErrorWhileModEqualZero(v)),
            catchError(error => of('error handled'))
        );
    }

    private noErrorThrow(): Observable<any> {
        return of(1, 2);
    }

    example(): Observable<any> {
        const requests = [
            // this.throwErrorWithoutCatching(),
            this.throwErrorAndCatchIt(),
            this.noErrorThrow()
        ];

        return concat(requests);
    }
}
