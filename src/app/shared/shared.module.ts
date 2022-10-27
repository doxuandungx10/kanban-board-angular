import { NgModule } from '@angular/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
  imports: [NzIconModule, NzButtonModule],
  exports: [NzIconModule, NzButtonModule],
  declarations: [],
  providers: [],
})
export class SharedModule {}
