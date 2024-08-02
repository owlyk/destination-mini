@angular/core

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html'
})
export class IndexComponent {
  title: string = 'Home';

  constructor() {}

  ngOnInit() {
    // logic to render index.html template with title 'Home'
  }
}