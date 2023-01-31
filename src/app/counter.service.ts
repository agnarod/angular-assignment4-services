export class CounterService {
    ATIchanges: number = 0;
    ITAchanges: number = 0;

    ATIChanged() {
        this.ATIchanges++;
        console.log("Active To Inactive "+ this.ATIchanges + " times");
    }
    ITAChanged(){        
        this.ITAchanges++;
        console.log("Inactive To Active "+ this.ITAchanges + " times");
    }
}