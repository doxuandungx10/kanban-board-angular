import { NgModule } from '@angular/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzTabsModule } from 'ng-zorro-antd/tabs';

@NgModule({
  imports: [
    NzIconModule, 
    NzButtonModule, 
    NzModalModule, 
    NzTabsModule
  ],
  exports: [
    NzIconModule, 
    NzButtonModule, 
    NzModalModule, 
    NzTabsModule
  ],
  declarations: [],
  providers: [],
})
export class SharedModule {}
