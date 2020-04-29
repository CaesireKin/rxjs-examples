import {ForkJoinExample} from "./fork_join_examples/fork_join_example";
import {ErrorHandingExample} from "./error_handing_examples/error_handing_example";
import {ConcatExample} from "./concat_examples/concat_example";
import {ZipExample} from "./zip_examples/zip_example";

export class Main {
    public static main(): void {
        // const forkJoinExample = new ForkJoinExample();
        // forkJoinExample.example().subscribe(result => console.log(result));

        // const errorHandingExample = new ErrorHandingExample();
        // errorHandingExample.example().subscribe(
        //     next => { console.log('execute: %o', next); },
        //     error => { console.log('error: %o', error); }
        // )

        // const concatExample = new ConcatExample();
        // concatExample.example().subscribe(
        //     next => console.log('emit: %o', next)
        // );

        const zipExample = new ZipExample();
        zipExample.example().subscribe(
            next => console.log('emit: %o', next)
        );
    }
}
