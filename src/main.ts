import {ForkJoinExample} from "./fork_join_examples/fork_join_example";

export class Main {
    public static main(): void {
        const forkJoinExample = new ForkJoinExample();
        forkJoinExample.example().subscribe(result => console.log(result));
    }
}
