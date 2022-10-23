import { NgModule, Optional, SkipSelf } from '@angular/core';
import { SesgusService } from './services/sesgus.service';

@NgModule({
    imports: [],
    providers: [
        SesgusService,
      
    ],
})
export class CoreModule
{
    /**
     * Constructor
     */
    constructor(
        @Optional() @SkipSelf() parentModule?: CoreModule
    )
    {
        // Do not allow multiple injections
        if ( parentModule )
        {
            throw new Error('CoreModule has already been loaded. Import this module in the AppModule only.');
        }
    }
}