import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';

import { CommonModule } from '@angular/common';

import { StarRatingComponent } from './star-rating/star-rating.component';

@NgModule({
  imports:      [ CommonModule ],
  declarations: [ StarRatingComponent ],
  exports:      [ StarRatingComponent ],
  providers:    [ ]
})
export class GenericComponentModule {
  constructor (@Optional() @SkipSelf() parentModule: GenericComponentModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}