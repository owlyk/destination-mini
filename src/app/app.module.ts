```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { IndexComponent } from './index/index.component';
import { TestScriptComponent } from './test-script/test-script.component';
import { FibUsageComponent } from './fib-usage/fib-usage.component';
import { MyFibComponent } from './my-fib/my-fib.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IndexComponent,
    TestScriptComponent,
    FibUsageComponent,
    MyFibComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'index', component: IndexComponent },
      { path: 'test_script', component: TestScriptComponent },
      { path: 'fib_usage', component: FibUsageComponent },
      { path: 'myFib', component: MyFibComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```