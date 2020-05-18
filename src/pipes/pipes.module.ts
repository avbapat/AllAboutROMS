import { NgModule } from '@angular/core';
import { SearchPipe } from './search/search';
import { SortPipe } from './sort/sort';
@NgModule({
	declarations: [SearchPipe,
    SortPipe,
    SearchPipe],
	imports: [],
	exports: [SearchPipe,
    SortPipe,
    SearchPipe]
})
export class PipesModule {}
